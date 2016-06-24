(ns mana-calc.core
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [mana-calc.calculator :as calc]
            [cljs.reader :as reader]))

(enable-console-print!)

(def app-state
  (r/atom {:mana-symbols {:w 0
                          :u 0
                          :b 0
                          :r 0
                          :g 0}
           :lands 17
           :mana-base {:w 0
                       :u 0
                       :b 0
                       :r 0
                       :g 0}}))

(defn mana-update! [e color]
  (swap! app-state assoc-in [:mana-symbols color] (if (< (int (.-target.value e)) 0)
                                                      0
                                                      (int (.-target.value e)))))

(defn mana-base-update! []
  (swap! app-state assoc
         :mana-base (calc/calculator (:mana-symbols @app-state)
                                     (:lands @app-state))))

(def color-abbrevs
  {:w "White" :u "Blue" :b "Black" :r "Red" :g "Green"})

(defn land-input [color]
  [:div.mana-symbol-input
   [:span.header (get color-abbrevs color)]
   [:input {:type "number"
            :value (color (:mana-symbols @app-state))
            :on-change (fn [e]
                         (mana-update! e color)
                         (mana-base-update!))}]])

(defn land-inputs []
  (let [v (atom 0)]
    [:div.mana-symbols
     [:h2.symbols-header "Mana Symbols"]
     (map land-input (keys color-abbrevs))
     [:div.mana-symbol-input
      [:span.header "Basic Lands"]
      [:input {:type "number"
                :value (:lands @app-state)
                :on-change (fn [e]
                             (swap! app-state assoc :lands (int (.-target.value e)))
                             (mana-base-update!))}]]]))

(defn display-basic [color]
  [:div
   [:span.header
    (condp = (key color)
      :w "Plains"
      :u "Islands"
      :b "Swamps"
      :r "Mountains"
      :g "Forests")]
   [:span.value (val color)]])

(defn basic-view [color]
  (if (and (> (calc/symbol-sum (:mana-symbols @app-state)) 0)
        (> (val color) 0))
    [:div {:id (key color)
           :class "color"}
     (display-basic color)]))

(defn mana-base-view []
  [:div.mana-base
   [:h2.mana-base-header "Mana Base"]
   (for [color (:mana-base @app-state)]
     ^{:key color} [basic-view color])])

(defn root-view []
  [land-inputs]
  [mana-base-view])

(r/render-component
  [land-inputs]
  (.getElementById js/document "inputs"))
(r/render-component
  [mana-base-view]
  (.getElementById js/document "results"))

(defn parse-input [input-str]
  (reader/read-string input-str))
