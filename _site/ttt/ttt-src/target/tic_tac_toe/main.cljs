(ns tic-tac-toe.main
  (:require [tic-tac-toe.ui-interface :as ui]
            [tic-tac-toe.web-ui]))



(defn main [& args]
  (ui/initialize-ui {:ui :web-ui}))
