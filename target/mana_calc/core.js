// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('mana_calc.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('mana_calc.calculator');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
mana_calc.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mana_DASH_symbols,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$w,(0),cljs.core.cst$kw$u,(0),cljs.core.cst$kw$b,(0),cljs.core.cst$kw$r,(0),cljs.core.cst$kw$g,(0)], null),cljs.core.cst$kw$lands,(17),cljs.core.cst$kw$mana_DASH_base,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$w,(0),cljs.core.cst$kw$u,(0),cljs.core.cst$kw$b,(0),cljs.core.cst$kw$r,(0),cljs.core.cst$kw$g,(0)], null)], null));
mana_calc.core.mana_update_BANG_ = (function mana_calc$core$mana_update_BANG_(e,color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mana_calc.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mana_DASH_symbols,color], null),(e.target.value | (0)));
});
mana_calc.core.mana_base_update_BANG_ = (function mana_calc$core$mana_base_update_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mana_calc.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mana_DASH_base,mana_calc.calculator.calculator(cljs.core.cst$kw$mana_DASH_symbols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state))),cljs.core.cst$kw$lands.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state)))));
});
mana_calc.core.land_inputs = (function mana_calc$core$land_inputs(){
var v = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_symbols,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$symbols_DASH_header,"Mana Symbols"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_symbol_DASH_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,"White"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mana_DASH_symbols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state)))),cljs.core.cst$kw$on_DASH_change,((function (v){
return (function (e){
mana_calc.core.mana_update_BANG_(e,cljs.core.cst$kw$w);

return mana_calc.core.mana_base_update_BANG_();
});})(v))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_symbol_DASH_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,"Blue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$u.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mana_DASH_symbols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state)))),cljs.core.cst$kw$on_DASH_change,((function (v){
return (function (e){
mana_calc.core.mana_update_BANG_(e,cljs.core.cst$kw$u);

return mana_calc.core.mana_base_update_BANG_();
});})(v))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_symbol_DASH_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,"Black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mana_DASH_symbols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state)))),cljs.core.cst$kw$on_DASH_change,((function (v){
return (function (e){
mana_calc.core.mana_update_BANG_(e,cljs.core.cst$kw$b);

return mana_calc.core.mana_base_update_BANG_();
});})(v))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_symbol_DASH_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,"Red"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mana_DASH_symbols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state)))),cljs.core.cst$kw$on_DASH_change,((function (v){
return (function (e){
mana_calc.core.mana_update_BANG_(e,cljs.core.cst$kw$r);

return mana_calc.core.mana_base_update_BANG_();
});})(v))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_symbol_DASH_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,"Green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mana_DASH_symbols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state)))),cljs.core.cst$kw$on_DASH_change,((function (v){
return (function (e){
mana_calc.core.mana_update_BANG_(e,cljs.core.cst$kw$g);

return mana_calc.core.mana_base_update_BANG_();
});})(v))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_symbol_DASH_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,"Basic Lands"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$lands.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state))),cljs.core.cst$kw$on_DASH_change,((function (v){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mana_calc.core.app_state,cljs.core.assoc,cljs.core.cst$kw$lands,(e.target.value | (0)));

return mana_calc.core.mana_base_update_BANG_();
});})(v))
], null)], null)], null)], null);
});
mana_calc.core.display_basic = (function mana_calc$core$display_basic(color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$header,(function (){var pred__12998 = cljs.core._EQ_;
var expr__12999 = cljs.core.key(color);
if(cljs.core.truth_((pred__12998.cljs$core$IFn$_invoke$arity$2 ? pred__12998.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,expr__12999) : pred__12998.call(null,cljs.core.cst$kw$w,expr__12999)))){
return "Plains";
} else {
if(cljs.core.truth_((pred__12998.cljs$core$IFn$_invoke$arity$2 ? pred__12998.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$u,expr__12999) : pred__12998.call(null,cljs.core.cst$kw$u,expr__12999)))){
return "Islands";
} else {
if(cljs.core.truth_((pred__12998.cljs$core$IFn$_invoke$arity$2 ? pred__12998.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$b,expr__12999) : pred__12998.call(null,cljs.core.cst$kw$b,expr__12999)))){
return "Swamps";
} else {
if(cljs.core.truth_((pred__12998.cljs$core$IFn$_invoke$arity$2 ? pred__12998.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$r,expr__12999) : pred__12998.call(null,cljs.core.cst$kw$r,expr__12999)))){
return "Mountains";
} else {
if(cljs.core.truth_((pred__12998.cljs$core$IFn$_invoke$arity$2 ? pred__12998.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$g,expr__12999) : pred__12998.call(null,cljs.core.cst$kw$g,expr__12999)))){
return "Forests";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12999)].join('')));
}
}
}
}
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,cljs.core.val(color)], null)], null);
});
mana_calc.core.basic_view = (function mana_calc$core$basic_view(color){
if((cljs.core.val(color) > (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.key(color),cljs.core.cst$kw$class,"color"], null),mana_calc.core.display_basic(color)], null);
} else {
return null;
}
});
mana_calc.core.mana_base_view = (function mana_calc$core$mana_base_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mana_DASH_base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$mana_DASH_base_DASH_header,"Mana Base"], null),(function (){var iter__7004__auto__ = (function mana_calc$core$mana_base_view_$_iter__13007(s__13008){
return (new cljs.core.LazySeq(null,(function (){
var s__13008__$1 = s__13008;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13008__$1);
if(temp__4657__auto__){
var s__13008__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13008__$2)){
var c__7002__auto__ = cljs.core.chunk_first(s__13008__$2);
var size__7003__auto__ = cljs.core.count(c__7002__auto__);
var b__13010 = cljs.core.chunk_buffer(size__7003__auto__);
if((function (){var i__13009 = (0);
while(true){
if((i__13009 < size__7003__auto__)){
var color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7002__auto__,i__13009);
cljs.core.chunk_append(b__13010,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mana_calc.core.basic_view,color], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,color], null)));

var G__13013 = (i__13009 + (1));
i__13009 = G__13013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13010),mana_calc$core$mana_base_view_$_iter__13007(cljs.core.chunk_rest(s__13008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13010),null);
}
} else {
var color = cljs.core.first(s__13008__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mana_calc.core.basic_view,color], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,color], null)),mana_calc$core$mana_base_view_$_iter__13007(cljs.core.rest(s__13008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7004__auto__(cljs.core.cst$kw$mana_DASH_base.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mana_calc.core.app_state) : cljs.core.deref.call(null,mana_calc.core.app_state))));
})()], null);
});
mana_calc.core.root_view = (function mana_calc$core$root_view(){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mana_calc.core.land_inputs], null);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mana_calc.core.mana_base_view], null);
});
mana_calc.core.start = (function mana_calc$core$start(){
var G__13018_13022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mana_calc.core.land_inputs], null);
var G__13019_13023 = document.getElementById("inputs");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13018_13022,G__13019_13023) : reagent.core.render_component.call(null,G__13018_13022,G__13019_13023));

var G__13020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mana_calc.core.mana_base_view], null);
var G__13021 = document.getElementById("results");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13020,G__13021) : reagent.core.render_component.call(null,G__13020,G__13021));
});
mana_calc.core.parse_input = (function mana_calc$core$parse_input(input_str){
return cljs.reader.read_string(input_str);
});
