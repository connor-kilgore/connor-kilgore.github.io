(ns tic-tac-toe.web-ui
  (:require [tic-tac-toe.game-runner :as game]
            [tic-tac-toe.ui-interface :as ui]
            [tic-tac-toe.option-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as board]
            [tic-tac-toe.symbols :as symbols]
            [reagent.dom :as rd]
            [reagent.core :as r]
            [clojure.string :as str]))

(def game-state (atom nil))

(def page (r/atom {:title   nil
                   :content nil}))

(def page-title "Welcome to TicTacToe!")

(defn ttt-page []
  [:div
   [:h2 (:title @page)]
   (:content @page)])

(defn render-root []
  (rd/render [ttt-page] (.getElementById js/document "root")))

(defn get-options-vector [s]
  (let [split-s (str/split s #"\[")]
    (for [string (rest split-s)] (subs string (min 3 (count string))))))

(defn get-values [s]
  (let [split-s (str/split s #"\[")]
    (for [string (rest split-s)] (str (first string)))))

(defn get-option-buttons [options event]
  (let [vals (get-values (:print-statement options))]
    (for [[i v] (map-indexed vector (get-options-vector (:print-statement options)))]
      ^{:key i} [:button {:on-click #(event (nth vals i) v)} v])))

(defn set-size []
  (swap! game-state assoc :players (:players (:players @game-state)))
  (swap! page assoc :content
         (get-option-buttons
           menu/board-size-options
           (fn [k v]
             (let [dimensions (menu/get-option menu/board-size-options k)]
               (swap! game-state assoc
                      :three-d? (:three-d? dimensions)
                      :board (board/make-board dimensions)))
             (game/game-round @game-state)))))

(defn set-difficulty []
  (if (:has-ai (:players @game-state))
    (swap! page assoc :content
           (get-option-buttons
             menu/difficulty-options
             (fn [k v]
               (swap! game-state assoc :difficulty
                      (menu/get-option menu/difficulty-options k))
               (set-size))))
    (set-size)))

(defn call-game-initialize []
  (ui/initialize-game {:ui :web-ui}))

(defn set-symbol []
  (cond (= :one-player (:players @game-state))
        (swap! page assoc :content
               (get-option-buttons menu/symbol-options
                                   (fn [k v]
                                     (swap! game-state assoc :players
                                            (menu/get-option menu/symbol-options k))
                                     (set-difficulty))))
        (= :close-program (:players @game-state)) (call-game-initialize)
        :else (do
                (swap! game-state assoc :players
                       (:players @game-state))
                (set-difficulty))))

(defn set-game-mode []
  (swap! page assoc :content
         (get-option-buttons
           menu/menu-options
           (fn [k v]
             (swap! game-state assoc :players
                    (menu/get-option menu/menu-options k))
             (set-symbol)))))

(defn get-stateless-game []
  (let [new-game game/base-game]
    (-> new-game
        (assoc :save-location nil)
        (assoc :ui :web-ui))))

(defmethod ui/initialize-ui :web-ui [_]
  (render-root)
  (call-game-initialize))

(defn update-game! [key val]
  (let [updated-game (assoc @game-state key val)]
    (reset! game-state updated-game)))

(defmethod ui/initialize-game :web-ui []
  (swap! page assoc :title page-title)
  (let [new-game (get-stateless-game)]
    (reset! game-state new-game)
    (swap! page assoc :content [:button
                                {:on-click #(set-game-mode)
                                 :id       "start"}
                                "Start!"])))

(defn valid-player-move? [game position symbol]
  (and (not (nil? symbol)) (board/spot-available? (:board game) position)))

(defn valid-move? [game position symbol]
  (or (nil? symbol) (board/spot-available? (:board game) position)))

(defn play-move [game i symbol]
  (when (valid-player-move? game i symbol)
    (swap! game-state assoc :board (board/place-value-into-tttb
                                     (:board game) symbol i))
    (swap! game-state assoc :round (inc (:round game))))

  (when (valid-move? game i symbol)
    (let [new-state (game/game-round @game-state)]
      (cond (map? new-state) (reset! game-state new-state)
            (not (= new-state :player-turn))
            (ui/end-game {:ui       :web-ui
                          :end-cond (game/get-end-condition-string
                                      new-state (:players @game-state))})))))

(defn display-row [game row# symbol]
  (let [side-len (board/get-side-len game)
        start-index (* row# side-len)]
    (for [i (range start-index (+ start-index side-len))]
      ^{:key i} [:button {:on-click #(play-move game i symbol)
                          :style    {:width          "150px"
                                     :height         "150px"
                                     :vertical-align "middle"
                                     :font-size      "80px"}}
                 (get symbols/gui-symbols (nth (:board game) i))])))

(defmulti display-board :three-d?)

(defmethod display-board false [game symbol]
  (let [side-len (board/get-side-len game)]
    (for [i (range side-len)]
      ^{:key i} [:div (display-row game i symbol)])))

(defmethod display-board true [game symbol]
  (let [side-len (board/get-side-len game)]
    (for [i (range (* side-len side-len))]
      (let [board-index (quot i side-len)]
        ^{:key i} [:div {:style {:margin-left (str (* board-index 70.26) "px")}}
                   (display-row game i symbol)]))))

(defmethod ui/round-output :web-ui [game]
  (reset! game-state game)
  (swap! page assoc :content
         (display-board @game-state nil)))

(defmethod ui/make-move :web-ui [options]
  (swap! page assoc :content
         (display-board (:game options) (:symbol options)))
  :player-turn)

(defn reset-game []
  (swap! page assoc :title page-title)
  (game/game-round (game/reset-game @game-state)))

(defmethod ui/end-game :web-ui [end-condition]
  (swap! page assoc :title
         (:end-cond end-condition))
  (swap! page assoc :content
         (conj (:content @page)
               ^{:key "retry-div"}
               [:div {:style {:margin-bottom "50px"}}
                ^{:key "reset"} [:button {:on-click #(reset-game)} "Retry"]
                ^{:key "back"} [:button {:on-click #(call-game-initialize)} "Back to Menu"]])))

