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
  (swap! app-state assoc-in [:mana-symbols color] (int (.-target.value e))))

(defn mana-base-update! []
  (swap! app-state assoc
         :mana-base (calc/calculator (:mana-symbols @app-state)
                                     (:lands @app-state))))

(defn land-inputs []
  (let [v (atom 0)]
    [:div.mana-symbols
     [:h2.symbols-header "Mana Symbols"]
     [:div.mana-symbol-input
      [:span.header "White"]
      [:input {:type "number"
               :value (:w (:mana-symbols @app-state))
               :on-change (fn [e]
                            (mana-update! e :w)
                            (mana-base-update!))}]]
     [:div.mana-symbol-input
      [:span.header "Blue"]
      [:input {:type "number"
               :value (:u (:mana-symbols @app-state))
               :on-change (fn [e]
                            (mana-update! e :u)
                            (mana-base-update!))}]]
     [:div.mana-symbol-input
      [:span.header "Black"]
      [:input {:type "number"
               :value (:b (:mana-symbols @app-state))
               :on-change (fn [e]
                            (mana-update! e :b)
                            (mana-base-update!))}]]
     [:div.mana-symbol-input
      [:span.header "Red"]
      [:input {:type "number"
               :value (:r (:mana-symbols @app-state))
               :on-change (fn [e]
                            (mana-update! e :r)
                            (mana-base-update!))}]]
     [:div.mana-symbol-input
      [:span.header "Green"]
      [:input {:type "number"
               :value (:g (:mana-symbols @app-state))
               :on-change (fn [e]
                            (mana-update! e :g)
                            (mana-base-update!))}]]
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
  (if (> (val color) 0)
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
