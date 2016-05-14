(ns mana-calc.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn color-calc
  [color-symbols all-symbols lands]
  (if (> color-symbols 0)
    (double (/ lands (/ all-symbols color-symbols)))
    0))

(defn symbol-sum
  [symbol-counts]
  (reduce
    (fn [accum [color mana-symbols]]
      (+ accum mana-symbols))
    0
    symbol-counts))

(defn remainder-rank
  [manabase]
  (keys (sort-by val >
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

(defn round-up-keys
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

(defn round-up-all [deck colors-to-round]
  (reduce #(round-up-color %1 %2)
          deck
          colors-to-round))


(defn calculator
  [symbol-counts lands]
  (reduce
    (fn [accum [color mana-symbols]]
      (into accum {color (int (Math/floor mana-symbols))}))
    {}
    (round-up-all (raw-mana-calc symbol-counts lands)
      (round-up-keys symbol-counts lands))))

(enable-console-print!)

(defonce app-state (atom {:text "Hi!"
                          :mana-base {:w 1 :u 2 :b 3 :r 4 :g 5}}))

(defn display-basic [color]
  (str
    (condp = (key color)
      :w "Plains: "
      :u "Islands: "
      :b "Swamps: "
      :r "Mountains "
      :g "Forests ")
    (val color)))

(defn basic-view [color owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (display-basic color)))))

(defn mana-base-view [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h2 nil "Mana Base")
        (apply dom/ul nil
          (om/build-all basic-view (:mana-base data)))))))

; (defn root-component [data owner]
;   (om/component
;     (apply dom/ul nil
;       (map (fn [text] (dom/li nil text)) (vals (:mana-base data)))))))))))

(om/root mana-base-view app-state
  {:target (. js/document (getElementById "app"))})

(defn parse-input [input-str]
  (cljs.reader/read-string input-str))

(defn generate-manabase [data owner]
  (let [mana-symbols {:w (-> (om/get-node owner "white")
                            .-value
                            parse-input)
                      :u (-> (om/get-node owner "blue")
                            .-value
                            parse-input)
                      :b (-> (om/get-node owner "black")
                            .-value
                            parse-input)
                      :r (-> (om/get-node owner "red")
                            .-value
                            parse-input)
                      :g (-> (om/get-node owner "green")
                            .-value
                            parse-input)}
        lands (-> (om/get-node owner "lands")
                  .-value
                  parse-input)]
      (when mana-symbols
        (om/transact! data :mana-base (calculator mana-symbols lands))
        (set! (.-value mana-symbols) ""))))
