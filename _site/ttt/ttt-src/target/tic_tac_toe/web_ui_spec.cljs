(ns tic-tac-toe.web-ui-spec
  (:require-macros [speclj.core :refer [describe context it should
                                        should-not should= run-specs
                                        focus-it focus-describe focus-context]])
  (:require [speclj.core]
            [tic-tac-toe.game-runner :as game]
            [tic-tac-toe.web-ui :as sut]
            [tic-tac-toe.ui-interface :as ui]
            [tic-tac-toe.option-selector :as menu]
            [clojure.string :as str]))

(def example-game
  {:players       {"Player" 1 "AI" 2}
   :difficulty    10
   :round         5
   :three-d?      false
   :board         [1 1 2 0 2 0 0 0 0]
   :ui            :web-ui
   :save-location nil
   :parameters    []})


(describe "Web UI"

  (it "checks if the current move is a valid player move"
    (should (sut/valid-player-move? example-game 3 1)))

  (context "Initializes the UI by"
    (it "rendering the html"
      (with-redefs [sut/call-game-initialize (fn [] (sut/render-root))
                    sut/render-root (fn [] "rendering!")]
        (should= "rendering!" (sut/call-game-initialize))))

    (it "initializing the game"
      (with-redefs [sut/call-game-initialize (fn [] "starting game!")
                    sut/render-root (fn [] nil)]
        (should= "starting game!" (sut/call-game-initialize)))))

  (context "Initializes a game by"

    (it "setting the game-state atom"
      (reset! sut/game-state nil)
      (should (nil? @sut/game-state))
      (sut/call-game-initialize)
      (should-not (nil? @sut/game-state)))

    (it "rendering the title"
      (sut/call-game-initialize)
      (should (str/includes? (str (:text @sut/page)) "Welcome to TicTacToe!")))

    (it "rendering the game options"
      (with-redefs [sut/set-options (fn [] "rendering options!")]
        (should= "rendering options!" (sut/call-game-initialize)))))

  (context "renders the options by"
    (it "updating the page"
      (let [old-page @sut/page]
        (sut/set-options)
        (should-not (= old-page @sut/page))))

    (it "creating a form"
      (should= :form (first (:content @sut/page))))

    (it "always giving game-mode options"
      (should= "Player vs. AI"
               (-> (:content @sut/page)
                   (second) (second) (last)))
      (should= "Player vs. Player"
               (-> (:content @sut/page)
                   (second) (last) (last))))

    (it "only giving symbol options if NOT Player vs. Player"
      (swap! sut/game-state assoc :players :player-one)
      (sut/set-options)
      (should= "X (first turn)"
               (-> (:content @sut/page)
                   (nth 2) (second) (last)))
      (should= "O (second turn)"
               (-> (:content @sut/page)
                   (nth 2) (last) (last)))

      (swap! sut/game-state assoc :players (get menu/menu-options "2"))
      (sut/set-options)
      (should-not (= "X (first turn)"
                     (-> (:content @sut/page)
                         (nth 2) (second) (last))))
      (should-not (= "O (second turn)"
                     (-> (:content @sut/page)
                         (nth 2) (last) (last)))))

    (it "only giving difficulty options if NOT Player vs. Player"
      (swap! sut/game-state assoc :players :player-one)
      (sut/set-options)
      (should= "Unbeatable"
               (-> (:content @sut/page)
                   (nth 3) (second) (last)))
      (should= "Medium"
               (-> (:content @sut/page)
                   (nth 3) (nth 2) (last)))
      (should= "Easy"
               (-> (:content @sut/page)
                   (nth 3) (last) (last)))

      (swap! sut/game-state assoc :players (get menu/menu-options "2"))
      (sut/set-options)
      (should-not (= "Unbeatable"
                     (-> (:content @sut/page)
                         (nth 3) (second) (last))))
      (should-not (= "Medium"
                     (-> (:content @sut/page)
                         (nth 3) (nth 2) (last))))
      (should-not (= "Easy"
                     (-> (:content @sut/page)
                         (nth 3) (last) (last)))))

    (it "always giving size options"
      (let [second-to-last (- (count (:content @sut/page)) 2)]
        (should= "3x3" (-> (:content @sut/page)
                           (nth second-to-last) (second) (last)))
        (should= "4x4" (-> (:content @sut/page)
                           (nth second-to-last) (nth 2) (last)))
        (should= "3x3x3" (-> (:content @sut/page)
                             (nth second-to-last) (last) (last)))))

    (it "giving a start button"
      (should= "Start!" (-> (:content @sut/page)
                            (last) (last)))))

  (context "starts the game by"
    (it "setting the players to actual players and not a config"
      (with-redefs [game/game-round (fn [_] nil)]
        (swap! sut/game-state assoc :players
               {:players {"Player" 1 "AI" 2} :has-ai true})
        (sut/start-game)
        (should= {"Player" 1 "AI" 2} (:players @sut/game-state))))

    (it "running a game round"
      (with-redefs [game/game-round (fn [_] "game round!")]
        (should= "game round!" (sut/start-game)))))

  (context "updates the attributes of the game by"
    (it "updating the game state"
      (sut/update-game-attribute menu/menu-options "1" :players)
      (should= :one-player (:players @sut/game-state))
      (sut/update-game-attribute menu/menu-options "2" :players)
      (should= {:has-ai false :players {"Player 1" 1 "Player 2" 2}}
               (:players @sut/game-state))
      (sut/update-game-attribute menu/difficulty-options "1" :difficulty)
      (should= 10 (:difficulty @sut/game-state)))

    (it "re-rendering the options"
      (with-redefs [sut/set-options (fn [] "set options!")]
        (should= "set options!" (sut/update-game-attribute
                                  menu/difficulty-options "1" :difficulty))))
    )

  (context "updates the size of the game by"
    (it "updating three-d? and board of the game-state"
      (sut/update-game-size {:three-d? false :size 4})
      (should-not (:three-d? @sut/game-state))
      (should= (repeat 16 0) (:board @sut/game-state))
      (sut/update-game-size {:three-d? true :size 3})
      (should (:three-d? @sut/game-state))
      (should= (repeat 27 0) (:board @sut/game-state)))

    (it "re-rendering the options"
      (with-redefs [sut/set-options (fn [] "set options!")]
        (should= "set options!" (sut/update-game-size
                                  {:three-d? false :size 4})))))

  (it "gets a default game for web-ui"
    (let [default-game (sut/get-default-game)]
      (should= {:has-ai true, :players {"Player" 1, "AI" 2}}
               (:players default-game))
      (should= 10 (:difficulty default-game))
      (should= (repeat 9 0) (:board default-game))
      (should-not (:three-d? default-game))
      (should (nil? (:save-location default-game)))
      (should= :web-ui (:ui default-game))))

  (context "ends the game by"
    (it "displaying an end condition on the page"
      (ui/end-game {:ui :web-ui :end-cond "AI Wins!"})
      (should= "AI Wins!" (:text @sut/page)))

    (it "Giving the user the option to retry"
      (should= "Retry" (-> (:content @sut/page)
                           (last) (nth 2) (last))))

    (it "Giving the user the option to go back to menu"
      (should= "Back to Menu" (-> (:content @sut/page)
                                  (last) (last) (last)))))

  (context "resets the game by"
    (it "setting the page text back to the page-title"
      (with-redefs [game/game-round (fn [_] nil)]
        (swap! sut/page assoc :text "not the title")
        (should= "not the title" (:text @sut/page))
        (sut/reset-game)
        (should= "Welcome to TicTacToe!" (:text @sut/page))))

    (it "resetting the game attributes and passing it into a new game-round"
      (with-redefs [game/game-round (fn [game] game)]
        (swap! sut/game-state assoc :round 7)
        (swap! sut/game-state assoc :board [1 0 0 1 0 0 1 0 0])
        (should= 7 (:round @sut/game-state))
        (should= [1 0 0 1 0 0 1 0 0] (:board @sut/game-state))
        (let [reset-game (sut/reset-game)]
          (should= 1 (:round reset-game))
          (should= [0 0 0 0 0 0 0 0 0] (:board reset-game))))))

  (context "makes a move by"
    (it "updating the page to a newly updated game-state"
      (with-redefs [sut/display-board (fn [_] "board display")]
        (ui/make-move {:ui :web-ui :game example-game :symbol 1})
        (should= "board display" (:content @sut/page))))

    (it "returning a keyword to indicate a user move"
      (with-redefs [sut/display-board (fn [_] nil)]
        (should= :player-turn (ui/make-move {:ui :web-ui})))))

  (context "gives the round output by"
    (it "setting the game state to the passed in game parameter"
      (with-redefs [sut/display-board (fn [_] nil)]
        (ui/round-output {:ui :web-ui :game "example"})
        (should= {:ui :web-ui :game "example"} @sut/game-state)))

    (it "updating the page to a newly updated game-state"
      (with-redefs [sut/display-board (fn [_] "board display")]
        (ui/round-output {:ui :web-ui :game example-game})
        (should= "board display" (:content @sut/page)))))

  (context "displays"
    (it "row 0 of a 3x3"
      (let [row (sut/display-row
                  {:board    [0 0 0 1 1 1 0 0 0]
                   :three-d? false} 0 nil)]
        (should= 3 (count row))
        (should= " " (last (first row)))
        (should= " " (last (second row)))
        (should= " " (last (last row)))))

    (it "row 1 of a 4x4"
      (let [row (sut/display-row
                  {:board    [0 0 0 0 1 1 2 2 0 0 0 0 0 0 0 0]
                   :three-d? false} 1 nil)]
        (should= 4 (count row))
        (should= "X" (last (first row)))
        (should= "X" (last (second row)))
        (should= "O" (last (nth row 2)))
        (should= "O" (last (last row)))))

    (it "row 0 of a 3x3x3"
      (let [row (sut/display-row {:board    (repeat 27 0)
                                  :three-d? true} 0 nil)]
        (should= 3 (count row))
        (should= " " (last (first row)))
        (should= " " (last (second row)))
        (should= " " (last (last row)))))

    (it "entire 3x3 board"
      (let [rows (sut/display-board example-game 1)]
        (should= 3 (count rows))
        (should= "O" (-> rows (second) (second) (second) (last)))))

    (it "entire 3x3x3 board"
      (let [new-game (-> example-game
                         (assoc :board (repeat 27 0))
                         (assoc :three-d? true))
            rows (sut/display-board new-game 1)]
        (should= 9 (count rows))
        (should= " " (-> rows (second) (nth 2) (first) (last))))))

  (context "plays a move on the board by"
    (it "updating the game state if given a valid move"
      (with-redefs [sut/play-next-round (fn [] nil)]
        (reset! sut/game-state example-game)
        (sut/play-move! example-game 8 2)
        (should= [1 1 2 0 2 0 0 0 2] (:board @sut/game-state))))

    (it "not updating the game state if given an invalid move"
      (with-redefs [sut/play-next-round (fn [] nil)]
        (reset! sut/game-state example-game)
        (sut/play-move! example-game 0 1)
        (should= [1 1 2 0 2 0 0 0 0] (:board @sut/game-state))

        (sut/play-move! example-game 8 nil)
        (should= [1 1 2 0 2 0 0 0 0] (:board @sut/game-state))))

    (it "plays the next round in the game"
      (with-redefs [game/game-round (fn [_] "next round!")
                    sut/end-game-if-game-over (fn [state] state)]
        (should= "next round!" (sut/play-move! example-game 0 1))))

    (it "ending the game if an end condition is met"
      (let [finished-game (-> example-game
                              (assoc :board [1 0 0 1 0 0 0 0 0]))]
        (sut/play-move! finished-game 6 1)
        (should= "\nPlayer wins!" (:text @sut/page))))

    (it "ending the game if the next round is an ai turn that ends the game"
              (let [finished-game (-> example-game
                                      (assoc :board [2 0 1 2 1 0 0 0 0]))]
                (reset! sut/game-state finished-game)
                (sut/play-move! finished-game 1 1)
                (should= "\nAI wins!" (:text @sut/page)))

              (let [finished-game (-> example-game
                                      (assoc :board [2 1 2 2 2 0 1 2 1])
                                      (assoc :round 9))]
                (reset! sut/game-state finished-game)
                (sut/play-move! finished-game 5 1)
                (should= "\nTie!" (:text @sut/page))))))