(ns mana-calc.core
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [mana-calc.calculator :as calc]))

(enable-console-print!)

(def app-state
  (r/atom {:mana-symbols {:w 0
                          :u 0
                          :b 0
                          :r 0
                          :g 0}
            :lands 17
            :mana-base {:w 1
                        :u 2
                        :b 3
                        :r 4
                        :g 5}}))

(defn mana-update! [e color]
  (swap! app-state assoc-in [:mana-symbols color] (int (.-target.value e))))

(defn mana-base-update! []
  (swap! app-state assoc :mana-base (calc/calculator (:mana-symbols @app-state) (:lands @app-state))))

(defn land-inputs []
  (let [v (atom 0)]
    [:div
      [:h3 "Mana Symbols"]
      [:p "White:"
        [:input {:type "number"
                  :value (:w (:mana-symbols @app-state))
                  :on-change (fn [e v]
                              (mana-update! e :w)
                              (mana-base-update!))}]]
      [:p "Blue:"
        [:input {:type "number"
                  :value (:u (:mana-symbols @app-state))
                  :on-change (fn [e]
                              (mana-update! e :u)
                              (mana-base-update!))}]]
      [:p "Black:"
        [:input {:type "number"
                  :value (:b (:mana-symbols @app-state))
                  :on-change (fn [e]
                              (mana-update! e :b)
                              (mana-base-update!))}]]
      [:p "Red:"
        [:input {:type "number"
                  :value (:r (:mana-symbols @app-state))
                  :on-change (fn [e]
                              (mana-update! e :r)
                              (mana-base-update!))}]]
      [:p "Green:"
        [:input {:type "number"
                  :value (:g (:mana-symbols @app-state))
                  :on-change (fn [e]
                              (mana-update! e :g)
                              (mana-base-update!))}]]
      [:p "Basic Lands:"
        [:input {:type "number"
                  :value (:lands @app-state)
                  :on-change (fn [e]
                              (swap! app-state assoc :lands (int (.-target.value e)))
                              (mana-base-update!))}]]]))

(defn display-basic [color]
  (str
    (condp = (key color)
      :w "Plains: "
      :u "Islands: "
      :b "Swamps: "
      :r "Mountains: "
      :g "Forests: ")
    (val color)))

(defn basic-view [color]
  [:li
   [:span (display-basic color)]])

(defn mana-base-view []
  [:div
   [:h1 "Mana Base"]
   [:ul
    (for [color (:mana-base @app-state)]
      ^{:key color} [basic-view color])]])

(defn root-view []
  [land-inputs]
  [mana-base-view])

(defn start []
  (r/render-component
    [land-inputs]
    (.getElementById js/document "inputs"))
  (r/render-component
    [mana-base-view]
    (.getElementById js/document "results")))

(defn parse-input [input-str]
  (cljs.reader/read-string input-str))
