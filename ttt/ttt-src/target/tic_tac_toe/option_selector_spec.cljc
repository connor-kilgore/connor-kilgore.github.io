(ns tic-tac-toe.option-selector-spec
  #?(:cljs (:require-macros [speclj.core :refer [describe context it should should-not should= run-specs focus-it]]))
  (:require [tic-tac-toe.option-selector :as sut]
            #?(:cljs [speclj.core])
            #?(:clj [speclj.core :refer :all])))

(describe "Option Selector"
  (context "gives a function based on a start menu option"
    (it "nil if invalid selection"
      (should= nil (sut/get-option sut/menu-options "0")))

    (it "close program if 4"
      (should= :close-program (sut/get-option sut/menu-options "4"))))
  )
