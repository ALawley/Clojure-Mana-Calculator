(ns mana-calc.calculator-spec
  (:require [speclj.core :refer :all]
            [mana-calc.calculator :refer :all]))

(def deck {:w 11 :u 0 :b 4 :r 0 :g 14})

(describe "calculator"
          (it "returns the expected output for a complete deck"
              (should= true false)))
