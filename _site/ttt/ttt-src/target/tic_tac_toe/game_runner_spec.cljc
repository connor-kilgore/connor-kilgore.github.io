(ns tic-tac-toe.game-runner-spec
  #?(:cljs (:require-macros [speclj.core :refer [describe context it should should-not should= run-specs focus-it]]))
  (:require [tic-tac-toe.game-runner :as sut]
            [tic-tac-toe.turn-system :as turn]
            [tic-tac-toe.ui-interface :as ui]
            #?@(:cljs [[speclj.core]]
                :clj  [[speclj.core :refer :all]
                       [tic-tac-toe.save-interface :as save]])))

(def base-initialized-game
  {:players    {"Player" 1, "AI" 2},
   :difficulty 10, :round 1,
   :three-d?    false, :board [0 0 0 0 0 0 0 0 0],
   :ui         :tui, :save-location :edndb, :parameters ()})

(describe "Game Runner Module"

  (it "makes new match data"
    (should= {:players    {:player-1 1 :player-2 2}
              :difficulty 10
              :round      1
              :three-d?    false
              :board      [0 0 0 0 0 0 0 0 0]} (sut/reset-game
                                                 {:players    {:player-1 1 :player-2 2}
                                                  :difficulty 10
                                                  :round      3
                                                  :three-d?    false
                                                  :board      [1 1 1 0 0 0 0 0 0]})))

  (context "gives an end condition string by"
    (it "saying you tied when no winner"
      (should= "\nTie!"
               (sut/get-end-condition-string nil {"Player 1" 1 "AI" 2})))
    (it "saying who won if there is a winner"
      (should= "\nAI wins!"
               (sut/get-end-condition-string 2 {"Player 1" 1 "AI" 2}))
      (should= "\nPlayer 1 wins!"
               (sut/get-end-condition-string 1 {"Player 1" 1 "AI" 2}))))

  (context "runs the game-loop"
    (it "until a tie"
      (with-redefs [ui/round-output (fn [_] nil)
                    turn/play-next-turn (fn [_] nil)
                    #?(:clj [save/save-game! (fn [_] nil)])
                    ]
        (should= nil (sut/game-loop base-initialized-game))))

    (it "until a win"
      (with-redefs [ui/round-output (fn [_] nil)
                    turn/play-next-turn (fn [_] nil)
                    #?(:clj [save/save-game! (fn [_] nil)])]
        (should= 1 (sut/game-loop (-> base-initialized-game
                                      (assoc :board [1 1 1 0 0 0 0 0 0])))))))
  (context "parses arguments to set the"

    (it "valid arguments"
      (should= :gui (sut/get-valid-arg ["--gui"] sut/ui-types))
      (should= :archive (sut/get-valid-arg ["--archive" "--gui"] sut/ui-types))
      (should= :tui (sut/get-valid-arg ["--not-a-real-arg"] sut/ui-types)))

    (it "valid parameters"
      (should= () (sut/get-valid-parameters nil))
      (should= () (sut/get-valid-parameters ["--gui"]))
      (should= ["test.txt"] (sut/get-valid-parameters ["test.txt"]))
      (should= ["test.txt"] (sut/get-valid-parameters ["--archive" "test.txt"])))

    (it "ui"
      (should= (-> base-initialized-game
                   (assoc :ui :gui)
                   (assoc :save-location :edndb))
               (sut/parse-arguments base-initialized-game ["--gui"])))
    (it "save-location"
      (should= (-> base-initialized-game
                   (assoc :ui :tui)
                   (assoc :save-location :psqldb))
               (sut/parse-arguments base-initialized-game ["--psqldb"])))

    (it "archive"
      (should= (-> base-initialized-game
                   (assoc :ui :archive)
                   (assoc :save-location :edndb)
                   (assoc :parameters ["test.txt"]))
               (sut/parse-arguments base-initialized-game ["--archive" "test.txt"])))

    (it "any arguments"
      (should= (-> base-initialized-game
                   (assoc :ui :gui)
                   (assoc :save-location :psqldb)
                   (assoc :parameters ["test.txt"]))
               (sut/parse-arguments base-initialized-game ["--psqldb" "--gui" "--not-real" "--archive" "test.txt"]))))

  (context "plays a single round by"

    #?(:clj (it "saving the game first"
      (with-redefs [ui/round-output (fn [_] nil)
                    turn/play-next-turn (fn [_] nil)
                    save/save-game! (fn [_] (print "saved!"))]
        (should= "saved!"
                 (with-out-str (sut/game-round base-initialized-game))))))

    #?(:clj (it "Then giving the round output"
      (with-redefs [turn/play-next-turn (fn [_] nil)
                    save/save-game! (fn [_] nil)]
        (should= (str "\n===  Player  === ROUND  1  ===\n\n 0| 1|"
                      " 2\n========\n 3| 4| 5\n========\n 6| 7| 8\n")
                 (with-out-str (sut/game-round base-initialized-game))))))

    (it "Then returns a winner if there is one"
      (with-redefs [turn/play-next-turn (fn [_] nil)
                    ui/round-output (fn [_] nil)
                    #?(:clj [save/save-game! (fn [_] nil)])]
        (should= 1
                 (sut/game-round (assoc base-initialized-game
                                   :board [1 1 1 0 0 0 0 0 0])))))

    (it "Then returns nil if there are no moves left"
      (with-redefs [ui/round-output (fn [_] nil)
                    #?(:clj [read-line (fn [] "0")
                             save/save-game! (fn [_] nil)])]
        (should= nil
                 (sut/game-round (assoc base-initialized-game :round 10)))))

    #?(:clj (it "finally returning a new game state on
    the next round with a play made"
      (with-redefs [read-line (fn [] "0")
                    println (fn [& _] nil)]
        (should= [1 0 0 0 0 0 0 0 0]
                 (:board (sut/game-round base-initialized-game))))))
    )
  )
