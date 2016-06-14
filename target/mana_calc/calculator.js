// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('mana_calc.calculator');
goog.require('cljs.core');
mana_calc.calculator.color_calc = (function mana_calc$calculator$color_calc(color_symbols,all_symbols,lands){
if((color_symbols > (0))){
return (lands / (all_symbols / color_symbols));
} else {
return (0);
}
});
mana_calc.calculator.symbol_sum = (function mana_calc$calculator$symbol_sum(symbol_counts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__12670){
var vec__12671 = p__12670;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12671,(0),null);
var mana_symbols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12671,(1),null);
return (accum + mana_symbols);
}),(0),symbol_counts);
});
mana_calc.calculator.remainder_rank = (function mana_calc$calculator$remainder_rank(manabase){
return cljs.core.keys(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.val,cljs.core._GT_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__12678){
var vec__12679 = p__12678;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12679,(0),null);
var mana_symbols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12679,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(accum,cljs.core.PersistentArrayMap.fromArray([color,cljs.core.mod(mana_symbols,(1))], true, false));
}),cljs.core.PersistentArrayMap.EMPTY,manabase)));
});
mana_calc.calculator.raw_mana_calc = (function mana_calc$calculator$raw_mana_calc(symbol_counts,lands){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__12686){
var vec__12687 = p__12686;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(0),null);
var mana_symbols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(accum,cljs.core.PersistentArrayMap.fromArray([color,mana_calc.calculator.color_calc(mana_symbols,mana_calc.calculator.symbol_sum(symbol_counts),lands)], true, false));
}),cljs.core.PersistentArrayMap.EMPTY,symbol_counts);
});
mana_calc.calculator.round_down_sum = (function mana_calc$calculator$round_down_sum(manabase){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__12694){
var vec__12695 = p__12694;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12695,(0),null);
var mana_symbols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12695,(1),null);
return (accum + (Math.floor(mana_symbols) | (0)));
}),(0),manabase);
});
mana_calc.calculator.round_up_keys = (function mana_calc$calculator$round_up_keys(symbol_counts,lands){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((lands - mana_calc.calculator.round_down_sum(mana_calc.calculator.raw_mana_calc(symbol_counts,lands))),mana_calc.calculator.remainder_rank(mana_calc.calculator.raw_mana_calc(symbol_counts,lands)));
});
mana_calc.calculator.round_up_color = (function mana_calc$calculator$round_up_color(deck,color){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inced_deck,p__12702){
var vec__12703 = p__12702;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12703,(0),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12703,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,color)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inced_deck,col,(number + (1)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inced_deck,col,number);
}
}),cljs.core.PersistentArrayMap.EMPTY,deck);
});
mana_calc.calculator.round_up_all = (function mana_calc$calculator$round_up_all(deck,colors_to_round){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12706_SHARP_,p2__12707_SHARP_){
return mana_calc.calculator.round_up_color(p1__12706_SHARP_,p2__12707_SHARP_);
}),deck,colors_to_round);
});
mana_calc.calculator.calculator = (function mana_calc$calculator$calculator(symbol_counts,lands){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__12712){
var vec__12713 = p__12712;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713,(0),null);
var mana_symbols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(accum,cljs.core.PersistentArrayMap.fromArray([color,(Math.floor(mana_symbols) | (0))], true, false));
}),cljs.core.PersistentArrayMap.EMPTY,mana_calc.calculator.round_up_all(mana_calc.calculator.raw_mana_calc(symbol_counts,lands),mana_calc.calculator.round_up_keys(symbol_counts,lands)));
});
