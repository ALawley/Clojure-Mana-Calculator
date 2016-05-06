(ns mana-calc.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [mana-calc.core-test]))

(enable-console-print!)

(doo-tests 'mana-calc.core-test)
