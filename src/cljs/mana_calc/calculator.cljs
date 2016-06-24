(ns mana-calc.calculator)

(defn color-calc
  [color-symbols all-symbols lands]
  (if (> color-symbols 0)
    (double (/ lands (/ all-symbols color-symbols)))
    0))

(defn symbol-sum
  [symbol-counts]
  (reduce + (vals symbol-counts)))

(defn remainder-rank
  [manabase]
  (keys (sort-by
          val >
          (reduce
            (fn [accum [color mana-symbols]]
              (into accum {color (mod mana-symbols 1)}))
            {}
            manabase))))


(defn raw-mana-calc
  [symbol-counts lands]
  (reduce
    (fn [accum [color mana-symbols]]
      (into accum {color (color-calc mana-symbols (symbol-sum symbol-counts) lands)}))
    {}
    symbol-counts))

(defn round-down-sum
  [manabase]
  (reduce
    (fn [accum [color mana-symbols]]
      (+ accum (int (Math/floor mana-symbols))))
    0
    manabase))

(defn keys-to-round-up
  [symbol-counts lands]
  (take
    (- lands (round-down-sum (raw-mana-calc symbol-counts lands)))
    (remainder-rank (raw-mana-calc symbol-counts lands))))

(defn round-up-color [deck color]
  (reduce
    (fn [inced-deck [col number]]
      (if (= col color)
        (assoc inced-deck col (inc number))
        (assoc inced-deck col number)))
    {}
    deck))

(defn round-up-by-keys [deck colors-to-round]
  (reduce #(round-up-color %1 %2)
          deck
          colors-to-round))


(defn calculator
  [symbol-counts lands]
  (reduce
    (fn [accum [color mana-symbols]]
      (into accum {color (int (Math/floor mana-symbols))}))
    {}
    (round-up-by-keys (raw-mana-calc symbol-counts lands)
                  (keys-to-round-up symbol-counts lands))))
