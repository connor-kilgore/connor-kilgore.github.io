(ns tic-tac-toe.turn-system-spec
  #?(:cljs (:require-macros [speclj.core :refer [describe context it should should-not should= run-specs focus-it]]))
  (:require [tic-tac-toe.turn-system :as sut]
            [tic-tac-toe.ai-player :as ai]
            [tic-tac-toe.tic-tac-toe-board :as tttb]
            [tic-tac-toe.ui-interface :as ui]
            #?(:cljs [speclj.core])
            #?(:clj [speclj.core :refer :all])))

(def base-game
  {:players {"Player" 1, "AI" 2},
   :difficulty 10, :round 1, :three-d false,
   :board [0 0 0 0 0 0 0 0 0], :ui :tui,
   :save-location :edndb, :parameters ()})

(describe "Turn System"

  (context "checks if ai is"
    (it "the player being checked."
      (should (sut/is-ai? ["AI 1" 1]))
      (should-not (sut/is-ai? ["Player 1" 1])))

    (it "within a list of players"
      (should-not (sut/has-ai? [["Player" 1] ["Player 2" 2]]))
      (should (sut/has-ai? [["Player" 1] ["AI" 2]]))))

  (context "Play's the"
    (it "ai's turn"
      (with-redefs [ai/play-turn (fn [_ _] "AI")
                    println (fn [_] nil)
                    tttb/increment-round (fn [x] x)]
        (should= "AI" (:board (sut/play-next-turn (assoc base-game :round 2))))))
    (it "player's turn"
      (with-redefs [ui/make-move (fn [_] "Player")
                    println (fn [_] nil)]
        (should= "Player" (sut/play-next-turn base-game)))))

  (context "checks if it is players turn by"
    (it "returning true if it is"
      (should (sut/is-turn? 1 1))
      (should (sut/is-turn? 2 2)))
    (it "returning false if it is not"
      (should-not (sut/is-turn? 1 2))
      (should-not (sut/is-turn? 2 1)))

    (it "returning the player whose turn it is"
      (should= [:player1 1] (sut/get-current-player {:player1 1 :ai 1} 1))
      (should= [:ai 1] (sut/get-current-player {:player1 1 :ai 1} 2)))))
