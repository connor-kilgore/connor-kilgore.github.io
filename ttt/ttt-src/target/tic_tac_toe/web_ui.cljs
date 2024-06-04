(ns tic-tac-toe.web-ui
  (:require [tic-tac-toe.game-runner :as game]
            [tic-tac-toe.ui-interface :as ui]
            [tic-tac-toe.option-selector :as menu]
            [tic-tac-toe.tic-tac-toe-board :as board]
            [tic-tac-toe.symbols :as symbols]
            [reagent.dom :as rd]
            [reagent.core :as r]))

(declare set-options)

(def game-state (atom nil))

(def page (r/atom {:text    nil
                   :content nil}))

(def page-title "Welcome to TicTacToe!")

(defn ttt-page []
  [:div {:class "centered"}
   [:h2 (:text @page)]
   [:div (:board @page)]
   [:div (:content @page)]])

(defn call-game-initialize []
  (ui/initialize-game {:ui :web-ui}))

(defn valid-player-move? [game position symbol]
  (and (not (nil? symbol)) (board/spot-available? (:board game) position)))

(defn end-condition-met? [state]
  (or (nil? state) (number? state)))

(defn end-game-on-next-round-is-game-over [state]
  (let [new-state (game/game-round state)]
    (when (end-condition-met? new-state)
      (ui/end-game {:ui       :web-ui
                    :end-cond (game/get-end-condition-string
                                new-state (:players @game-state))}))))

(defn update-game-state-after-move! [game i symbol]
  (swap! game-state assoc :board (board/place-value-into-tttb
                                   (:board game) symbol i))
  (swap! game-state assoc :round (inc (:round game))))

(defn update-game-state-after-valid-move [game i symbol]
  (when (valid-player-move? game i symbol)
    (update-game-state-after-move! game i symbol)))

(defn end-game-if-game-over [state]
  (cond
    (end-condition-met? state)
    (ui/end-game {:ui       :web-ui
                  :end-cond (game/get-end-condition-string
                              state (:players @game-state))})

    (not (= state :player-turn))
    (end-game-on-next-round-is-game-over state)))

(defn play-next-round []
  (let [new-state (game/game-round @game-state)]
    (end-game-if-game-over new-state)))

(defn play-move! [game i symbol]
  (update-game-state-after-valid-move game i symbol)
  (play-next-round))

(defn display-row [game row# symbol]
  (let [side-len (board/get-side-len game)
        start-index (* row# side-len)]
    (for [i (range start-index (+ start-index side-len))]
      ^{:key i} [:button {:on-click #(play-move! game i symbol)
                          :class    "cell"}
                 (get symbols/gui-symbols (nth (:board game) i))])))

(defn display-board [game symbol]
  (let [side-len (board/get-side-len game)]
    (if (:three-d? game)
      (for [i (range (* side-len side-len))]
        (let [board-index (quot i side-len)]
          ^{:key i} [:div {:class (str "board" board-index)}
                     (display-row game i symbol)]))

      (for [i (range side-len)]
        ^{:key i} [:div (display-row game i symbol)]))))

(defmethod ui/round-output :web-ui [game]
  (reset! game-state game)
  (swap! page assoc :content
         (display-board @game-state nil)))

(defmethod ui/make-move :web-ui [options]
  (swap! page assoc :content
         (display-board (:game options) (:symbol options)))
  :player-turn)

(defn reset-game []
  (swap! page assoc :text page-title)
  (game/game-round (game/reset-game @game-state)))

(defmethod ui/end-game :web-ui [end-condition]
  (swap! page assoc :text
         (:end-cond end-condition))
  (swap! page assoc :content
         (conj (:content @page)
               ^{:key "retry-div"}
               [:div {:class "end-condition"}
                ^{:key "reset"} [:button {:on-click #(reset-game)} "Retry"]
                ^{:key "back"} [:button {:on-click #(call-game-initialize)} "Back to Menu"]])))

(defn get-default-game []
  (let [new-game game/base-game]
    (-> new-game
        (assoc :players (get menu/symbol-options "X"))
        (assoc :difficulty (get menu/difficulty-options "1"))
        (assoc :board (board/make-board
                        (get menu/board-size-options "1")))
        (assoc :three-d? false)
        (assoc :save-location nil)
        (assoc :ui :web-ui))))

(defn update-game-attribute [map key key-to-change]
  (swap! game-state assoc key-to-change (get map key))
  (set-options))

(defn update-game-size [dimensions]
  (swap! game-state assoc :three-d? (:three-d? dimensions))
  (swap! game-state assoc :board (board/make-board dimensions))
  (set-options))

(defn start-game []
  (swap! game-state assoc :players (:players (:players @game-state)))
  (game/game-round @game-state))

(defn player-options []
  [:div
   [:label [:input {:type      "radio"
                    :name      "players"
                    :checked   (not (= (:players @game-state) (get menu/menu-options "2")))
                    :value     "1"
                    :on-change #(update-game-attribute menu/symbol-options
                                                       "X"
                                                       :players)}]
    "Player vs. AI"]
   [:label [:input {:type      "radio"
                    :name      "players"
                    :checked   (= (:players @game-state) (get menu/menu-options "2"))
                    :value     "2"
                    :on-change #(update-game-attribute menu/menu-options
                                                       (-> % .-target .-value)
                                                       :players)}]
    "Player vs. Player"]])

(defn symbol-options []
  (when (not (= (:players @game-state) (get menu/menu-options "2")))
    [:div
     [:label [:input {:type      "radio"
                      :name      "symbol"
                      :checked   (= (:players @game-state) (get menu/symbol-options "X"))
                      :value     "X"
                      :on-change #(update-game-attribute menu/symbol-options
                                                         (-> % .-target .-value)
                                                         :players)}]
      "X (first turn)"]
     [:label [:input {:type      "radio"
                      :name      "symbol"
                      :checked   (= (:players @game-state) (get menu/symbol-options "O"))
                      :value     "O"
                      :on-change #(update-game-attribute menu/symbol-options
                                                         (-> % .-target .-value)
                                                         :players)}]
      "O (second turn)"]]))

(defn difficulty-options []
  (when (not (= (:players @game-state) (get menu/menu-options "2")))
    [:div
     [:label [:input {:type      "radio"
                      :name      "difficulty"
                      :checked   (= (:difficulty @game-state) (get menu/difficulty-options "1"))
                      :value     "1"
                      :on-change #(update-game-attribute menu/difficulty-options
                                                         (-> % .-target .-value)
                                                         :difficulty)}]
      "Unbeatable"]
     [:label [:input {:type      "radio"
                      :name      "difficulty"
                      :checked   (= (:difficulty @game-state) (get menu/difficulty-options "2"))
                      :value     "2"
                      :on-change #(update-game-attribute menu/difficulty-options
                                                         (-> % .-target .-value)
                                                         :difficulty)}]
      "Medium"]
     [:label [:input {:type      "radio"
                      :name      "difficulty"
                      :checked   (= (:difficulty @game-state) (get menu/difficulty-options "3"))
                      :value     "3"
                      :on-change #(update-game-attribute menu/difficulty-options
                                                         (-> % .-target .-value)
                                                         :difficulty)}]
      "Easy"]]))

(defn size-options []
  [:div
   [:label [:input {:type      "radio"
                    :name      "size"
                    :checked   (= (:board @game-state) (board/make-board
                                                         (get menu/board-size-options
                                                              "1")))
                    :value     "1"
                    :on-change #(update-game-size (get menu/board-size-options
                                                       (-> % .-target .-value)))}]
    "3x3"]
   [:label [:input {:type      "radio"
                    :name      "size"
                    :checked   (= (:board @game-state) (board/make-board
                                                         (get menu/board-size-options
                                                              "2")))
                    :value     "2"
                    :on-change #(update-game-size (get menu/board-size-options
                                                       (-> % .-target .-value)))}]
    "4x4"]
   [:label [:input {:type      "radio"
                    :name      "size"
                    :checked   (= (:board @game-state) (board/make-board
                                                         (get menu/board-size-options
                                                              "3")))
                    :value     "3"
                    :on-change #(update-game-size (get menu/board-size-options
                                                       (-> % .-target .-value)))}]
    "3x3x3"]])

(defn get-menu-render []
  [:form
   (player-options)
   (symbol-options)
   (difficulty-options)
   (size-options)
   [:button {:type     "button"
             :on-click (fn [e] (start-game))} "Start!"]])

(defn set-options []
  (swap! page assoc :content
         (get-menu-render)))

(defmethod ui/initialize-game :web-ui []
  (swap! page assoc :text page-title)
  (let [new-game (get-default-game)]
    (reset! game-state new-game)
    (set-options)))

(defn render-root []
  (rd/render [ttt-page] (.getElementById js/document "root")))

(defmethod ui/initialize-ui :web-ui [_]
  (render-root)
  (call-game-initialize))