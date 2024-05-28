(ns tic-tac-toe.symbols-spec
  #?(:cljs (:require-macros [speclj.core :refer [describe context it should should-not should= run-specs focus-it]]))
  (:require [tic-tac-toe.symbols :as sut]
            #?(:cljs [speclj.core])
            #?(:clj [speclj.core :refer :all])))

(describe "Symbols"
  (it "gives an O when provided an X"
    (should= 2 (sut/reverse-symbol 1)))

  (it "gives an X when provided an O"
    (should= 1 (sut/reverse-symbol 2)))

  (context "At a position on a given board, gives an"
    (it "X"
      (should= (str "\u001b[38;5;" 1 "m" " X" "\u001b[0m") (sut/symbol-at 0 [1 0 0 0 0 0 0 0 0])))

    (it "O"
      (should= (str "\u001b[38;5;" 4 "m" " O" "\u001b[0m") (sut/symbol-at 2 [0 0 2 0 0 0 0 0 0])))

    (it "Empty space"
      (should= 0 (sut/symbol-at 0 [0 0 2 0 0 0 0 0 0]))))
  )