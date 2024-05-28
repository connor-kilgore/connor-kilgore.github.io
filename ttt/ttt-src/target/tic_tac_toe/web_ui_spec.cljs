(ns tic-tac-toe.web-ui-spec
  (:require-macros [speclj.core :refer [describe context it should should-not should= run-specs focus-it]])
  (:require [speclj.core]
            [tic-tac-toe.web-ui :as sut]
            [tic-tac-toe.ui-interface :as ui]
            [tic-tac-toe.option-selector :as menu]
            [clojure.string :as str]))

(describe "Web UI"

  (context "Initializes the UI by"
    (it "rendering the html"
      (with-redefs [sut/call-game-initialize (fn [] (sut/render-root))
                    sut/render-root (fn [] "rendering!")]
        (should= "rendering!" (ui/initialize-ui {:ui :web-ui}))))

    (it "initializing the game"
      (with-redefs [sut/call-game-initialize (fn [] "starting game!")
                    sut/render-root (fn [] nil)]
        (should= "starting game!" (ui/initialize-ui {:ui :web-ui})))))

  (context "Initializes a game by"
    (it "Setting the page title"
      (with-redefs [sut/render-root (fn [] nil)]
        (ui/initialize-game {:ui :web-ui})
        (should (str/includes? (str (:title @sut/page)) "Welcome to TicTacToe!"))))

    (it "setting the game-state atom"
      (with-redefs [sut/render-root (fn [] nil)]
        (ui/initialize-game {:ui :web-ui})
        (should= {:players       nil, :difficulty nil,
                  :round         1, :three-d? nil,
                  :board         nil, :ui :web-ui,
                  :save-location nil, :parameters []} @sut/game-state)))

    (it "adding the start button to the page"
      (with-redefs [sut/render-root (fn [] nil)]
        (ui/initialize-game {:ui :web-ui})
        (should (str/includes? (str (:content @sut/page)) "Start!")))))

  (context "Serves options for"
    (it "Game Mode"
      (sut/set-game-mode)
      (should (str/includes? (str (:content @sut/page)) "Single Player"))
      (should (str/includes? (str (:content @sut/page)) "Two Player"))
      (should (str/includes? (str (:content @sut/page)) "AI vs. AI"))
      (should (str/includes? (str (:content @sut/page)) "Close Program")))

    (context "Symbol"
      (it "on one player"
        (sut/update-game! :players :one-player)
        (sut/set-symbol)
        (should (str/includes? (str (:content @sut/page)) "X (first turn)"))
        (should (str/includes? (str (:content @sut/page)) "O (second turn)")))

      (it "to start menu if close program"
        (with-redefs [sut/call-game-initialize (fn [] "Start menu!")]
          (sut/update-game! :players :close-program)
          (should= "Start menu!" (sut/set-symbol))))

      (it "goes straight to difficulty otherwise"
        (sut/update-game! :players :not-one-player)
        (with-redefs [sut/set-difficulty (fn [] "setting difficulty!")]
          (should= "setting difficulty!" (sut/set-symbol)))))

    (context "Difficulty"
      (it "when an AI is playing"
        (sut/update-game! :players {:has-ai true})
        (sut/set-difficulty)
        (should (str/includes? (str (:content @sut/page)) "Unbeatable"))
        (should (str/includes? (str (:content @sut/page)) "Medium"))
        (should (str/includes? (str (:content @sut/page)) "Easy")))

      (it "goes straight to setting the size if no AI is playing"
        (sut/update-game! :players {:has-ai false})
        (with-redefs [sut/set-size (fn [] "setting the size!")]
          (should= "setting the size!" (sut/set-difficulty)))))

    (it "Size"
      (sut/set-size)
      (should (str/includes? (str (:content @sut/page)) "3x3"))
      (should (str/includes? (str (:content @sut/page)) "4x4"))
      (should (str/includes? (str (:content @sut/page)) "3x3x3")))
    )

  (context "gets options to display as buttons by"
    (it "getting the vector of options out of a print statement"
      (should= ["Single Player\n" "Two Player\n" "AI vs. AI\n" "Close Program\n"]
               (sut/get-options-vector (:print-statement menu/menu-options))))

    (it "get the supposed values out of each vector option"
      (should= ["1" "2" "3" "4"]
               (sut/get-values (:print-statement menu/menu-options)))))

  (it "displays a row"
    (should= (str "([:button {:on-click #object[Function], :style {:width \"150px\", "
                  ":height \"150px\", :vertical-align \"middle\", :font-size \"80px\"}} "
                  "\" \"] [:button {:on-click #object[Function], :style {:width \"150px\", "
                  ":height \"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \" "
                  "\"] [:button {:on-click #object[Function], :style {:width \"150px\", :height "
                  "\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \" \"])")
             (str (sut/display-row {:board [0 0 0 1 1 1 0 0 0] :three-d? false} 0 1)))

    (should= (str "([:button {:on-click #object[Function], :style {:width \"150px\", :height "
                  "\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \"X\"] "
                  "[:button {:on-click #object[Function], :style {:width \"150px\", :height "
                  "\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \"X\"] "
                  "[:button {:on-click #object[Function], :style {:width \"150px\", :height \"150px\", "
                  ":vertical-align \"middle\", :font-size \"80px\"}} \"X\"])")
             (str (sut/display-row {:board [0 0 0 1 1 1 0 0 0] :three-d? false} 1 1))))
  )