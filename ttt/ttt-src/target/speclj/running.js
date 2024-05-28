// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
var and__5043__auto__ = speclj.components.is_description_QMARK_.call(null,component);
if(and__5043__auto__){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return and__5043__auto__;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__5045__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__7509 = parent;
component = G__7509;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__5045__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__7510 = parent;
component = G__7510;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__7511 = cljs.core.seq.call(null,descriptions);
var chunk__7512 = null;
var count__7513 = (0);
var i__7514 = (0);
while(true){
if((i__7514 < count__7513)){
var component = cljs.core._nth.call(null,chunk__7512,i__7514);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__7515 = seq__7511;
var G__7516 = chunk__7512;
var G__7517 = count__7513;
var G__7518 = (i__7514 + (1));
seq__7511 = G__7515;
chunk__7512 = G__7516;
count__7513 = G__7517;
i__7514 = G__7518;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7511);
if(temp__5753__auto__){
var seq__7511__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7511__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7511__$1);
var G__7519 = cljs.core.chunk_rest.call(null,seq__7511__$1);
var G__7520 = c__5568__auto__;
var G__7521 = cljs.core.count.call(null,c__5568__auto__);
var G__7522 = (0);
seq__7511 = G__7519;
chunk__7512 = G__7520;
count__7513 = G__7521;
i__7514 = G__7522;
continue;
} else {
var component = cljs.core.first.call(null,seq__7511__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__7523 = cljs.core.next.call(null,seq__7511__$1);
var G__7524 = null;
var G__7525 = (0);
var G__7526 = (0);
seq__7511 = G__7523;
chunk__7512 = G__7524;
count__7513 = G__7525;
i__7514 = G__7526;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__7527 = cljs.core.seq.call(null,characteristics);
var chunk__7529 = null;
var count__7530 = (0);
var i__7531 = (0);
while(true){
if((i__7531 < count__7530)){
var characteristic = cljs.core._nth.call(null,chunk__7529,i__7531);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7533 = seq__7527;
var G__7534 = chunk__7529;
var G__7535 = count__7530;
var G__7536 = (i__7531 + (1));
seq__7527 = G__7533;
chunk__7529 = G__7534;
count__7530 = G__7535;
i__7531 = G__7536;
continue;
} else {
var G__7537 = seq__7527;
var G__7538 = chunk__7529;
var G__7539 = count__7530;
var G__7540 = (i__7531 + (1));
seq__7527 = G__7537;
chunk__7529 = G__7538;
count__7530 = G__7539;
i__7531 = G__7540;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7527);
if(temp__5753__auto__){
var seq__7527__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7527__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7527__$1);
var G__7541 = cljs.core.chunk_rest.call(null,seq__7527__$1);
var G__7542 = c__5568__auto__;
var G__7543 = cljs.core.count.call(null,c__5568__auto__);
var G__7544 = (0);
seq__7527 = G__7541;
chunk__7529 = G__7542;
count__7530 = G__7543;
i__7531 = G__7544;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__7527__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7545 = cljs.core.next.call(null,seq__7527__$1);
var G__7546 = null;
var G__7547 = (0);
var G__7548 = (0);
seq__7527 = G__7545;
chunk__7529 = G__7546;
count__7530 = G__7547;
i__7531 = G__7548;
continue;
} else {
var G__7549 = cljs.core.next.call(null,seq__7527__$1);
var G__7550 = null;
var G__7551 = (0);
var G__7552 = (0);
seq__7527 = G__7549;
chunk__7529 = G__7550;
count__7530 = G__7551;
i__7531 = G__7552;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__7553_7557 = cljs.core.seq.call(null,descriptions);
var chunk__7554_7558 = null;
var count__7555_7559 = (0);
var i__7556_7560 = (0);
while(true){
if((i__7556_7560 < count__7555_7559)){
var description_7561 = cljs.core._nth.call(null,chunk__7554_7558,i__7556_7560);
speclj.running.scan_for_focus_BANG_.call(null,description_7561);


var G__7562 = seq__7553_7557;
var G__7563 = chunk__7554_7558;
var G__7564 = count__7555_7559;
var G__7565 = (i__7556_7560 + (1));
seq__7553_7557 = G__7562;
chunk__7554_7558 = G__7563;
count__7555_7559 = G__7564;
i__7556_7560 = G__7565;
continue;
} else {
var temp__5753__auto___7566 = cljs.core.seq.call(null,seq__7553_7557);
if(temp__5753__auto___7566){
var seq__7553_7567__$1 = temp__5753__auto___7566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7553_7567__$1)){
var c__5568__auto___7568 = cljs.core.chunk_first.call(null,seq__7553_7567__$1);
var G__7569 = cljs.core.chunk_rest.call(null,seq__7553_7567__$1);
var G__7570 = c__5568__auto___7568;
var G__7571 = cljs.core.count.call(null,c__5568__auto___7568);
var G__7572 = (0);
seq__7553_7557 = G__7569;
chunk__7554_7558 = G__7570;
count__7555_7559 = G__7571;
i__7556_7560 = G__7572;
continue;
} else {
var description_7573 = cljs.core.first.call(null,seq__7553_7567__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_7573);


var G__7574 = cljs.core.next.call(null,seq__7553_7567__$1);
var G__7575 = null;
var G__7576 = (0);
var G__7577 = (0);
seq__7553_7557 = G__7574;
chunk__7554_7558 = G__7575;
count__7555_7559 = G__7576;
i__7556_7560 = G__7577;
continue;
}
} else {
}
}
break;
}

var or__5045__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__7578 = cljs.core.seq.call(null,components);
var chunk__7579 = null;
var count__7580 = (0);
var i__7581 = (0);
while(true){
if((i__7581 < count__7580)){
var component = cljs.core._nth.call(null,chunk__7579,i__7581);
component.body.call(null);


var G__7582 = seq__7578;
var G__7583 = chunk__7579;
var G__7584 = count__7580;
var G__7585 = (i__7581 + (1));
seq__7578 = G__7582;
chunk__7579 = G__7583;
count__7580 = G__7584;
i__7581 = G__7585;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7578);
if(temp__5753__auto__){
var seq__7578__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7578__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7578__$1);
var G__7586 = cljs.core.chunk_rest.call(null,seq__7578__$1);
var G__7587 = c__5568__auto__;
var G__7588 = cljs.core.count.call(null,c__5568__auto__);
var G__7589 = (0);
seq__7578 = G__7586;
chunk__7579 = G__7587;
count__7580 = G__7588;
i__7581 = G__7589;
continue;
} else {
var component = cljs.core.first.call(null,seq__7578__$1);
component.body.call(null);


var G__7590 = cljs.core.next.call(null,seq__7578__$1);
var G__7591 = null;
var G__7592 = (0);
var G__7593 = (0);
seq__7578 = G__7590;
chunk__7579 = G__7591;
count__7580 = G__7592;
i__7581 = G__7593;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__7594 = cljs.core.seq.call(null,withs);
var chunk__7595 = null;
var count__7596 = (0);
var i__7597 = (0);
while(true){
if((i__7597 < count__7596)){
var with$ = cljs.core._nth.call(null,chunk__7595,i__7597);
speclj.components.reset_with.call(null,with$);


var G__7598 = seq__7594;
var G__7599 = chunk__7595;
var G__7600 = count__7596;
var G__7601 = (i__7597 + (1));
seq__7594 = G__7598;
chunk__7595 = G__7599;
count__7596 = G__7600;
i__7597 = G__7601;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7594);
if(temp__5753__auto__){
var seq__7594__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7594__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7594__$1);
var G__7602 = cljs.core.chunk_rest.call(null,seq__7594__$1);
var G__7603 = c__5568__auto__;
var G__7604 = cljs.core.count.call(null,c__5568__auto__);
var G__7605 = (0);
seq__7594 = G__7602;
chunk__7595 = G__7603;
count__7596 = G__7604;
i__7597 = G__7605;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__7594__$1);
speclj.components.reset_with.call(null,with$);


var G__7606 = cljs.core.next.call(null,seq__7594__$1);
var G__7607 = null;
var G__7608 = (0);
var G__7609 = (0);
seq__7594 = G__7606;
chunk__7595 = G__7607;
count__7596 = G__7608;
i__7597 = G__7609;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__7610 = cljs.core.deref.call(null,description__$1.parent);
var G__7611 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__7610;
components = G__7611;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__7612_SHARP_){
return cljs.core.deref.call(null,p1__7612_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__7613_SHARP_){
return cljs.core.deref.call(null,p1__7613_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__7614_SHARP_){
return cljs.core.deref.call(null,p1__7614_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__7615_SHARP_){
return p1__7615_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__7616_SHARP_){
return cljs.core.deref.call(null,p1__7616_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e7617){var e = e7617;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function speclj$running$do_characteristics_$_iter__7618(s__7619){
return (new cljs.core.LazySeq(null,(function (){
var s__7619__$1 = s__7619;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__7619__$1);
if(temp__5753__auto__){
var s__7619__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7619__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__7619__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__7621 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__7620 = (0);
while(true){
if((i__7620 < size__5522__auto__)){
var characteristic = cljs.core._nth.call(null,c__5521__auto__,i__7620);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__7621,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__7622 = (i__7620 + (1));
i__7620 = G__7622;
continue;
} else {
var G__7623 = (i__7620 + (1));
i__7620 = G__7623;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7621),speclj$running$do_characteristics_$_iter__7618.call(null,cljs.core.chunk_rest.call(null,s__7619__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7621),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__7619__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__7618.call(null,cljs.core.rest.call(null,s__7619__$2)));
} else {
var G__7624 = cljs.core.rest.call(null,s__7619__$2);
s__7619__$1 = G__7624;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__7625 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__7626 = cljs.core.rest.call(null,children);
results__$1 = G__7625;
children = G__7626;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__7629_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7629_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__7630_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7630_SHARP_.unique_name)].join('');
}),withs);
var seq__7631_7663 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__7632_7664 = null;
var count__7633_7665 = (0);
var i__7634_7666 = (0);
while(true){
if((i__7634_7666 < count__7633_7665)){
var vec__7641_7667 = cljs.core._nth.call(null,chunk__7632_7664,i__7634_7666);
var n_7668 = cljs.core.nth.call(null,vec__7641_7667,(0),null);
var un_7669 = cljs.core.nth.call(null,vec__7641_7667,(1),null);
var code_7670 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7668)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7669),";"].join('');
eval(code_7670);


var G__7671 = seq__7631_7663;
var G__7672 = chunk__7632_7664;
var G__7673 = count__7633_7665;
var G__7674 = (i__7634_7666 + (1));
seq__7631_7663 = G__7671;
chunk__7632_7664 = G__7672;
count__7633_7665 = G__7673;
i__7634_7666 = G__7674;
continue;
} else {
var temp__5753__auto___7675 = cljs.core.seq.call(null,seq__7631_7663);
if(temp__5753__auto___7675){
var seq__7631_7676__$1 = temp__5753__auto___7675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7631_7676__$1)){
var c__5568__auto___7677 = cljs.core.chunk_first.call(null,seq__7631_7676__$1);
var G__7678 = cljs.core.chunk_rest.call(null,seq__7631_7676__$1);
var G__7679 = c__5568__auto___7677;
var G__7680 = cljs.core.count.call(null,c__5568__auto___7677);
var G__7681 = (0);
seq__7631_7663 = G__7678;
chunk__7632_7664 = G__7679;
count__7633_7665 = G__7680;
i__7634_7666 = G__7681;
continue;
} else {
var vec__7644_7682 = cljs.core.first.call(null,seq__7631_7676__$1);
var n_7683 = cljs.core.nth.call(null,vec__7644_7682,(0),null);
var un_7684 = cljs.core.nth.call(null,vec__7644_7682,(1),null);
var code_7685 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7683)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7684),";"].join('');
eval(code_7685);


var G__7686 = cljs.core.next.call(null,seq__7631_7676__$1);
var G__7687 = null;
var G__7688 = (0);
var G__7689 = (0);
seq__7631_7663 = G__7686;
chunk__7632_7664 = G__7687;
count__7633_7665 = G__7688;
i__7634_7666 = G__7689;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__7647_7690 = cljs.core.seq.call(null,var_names);
var chunk__7648_7691 = null;
var count__7649_7692 = (0);
var i__7650_7693 = (0);
while(true){
if((i__7650_7693 < count__7649_7692)){
var vec__7657_7694 = cljs.core._nth.call(null,chunk__7648_7691,i__7650_7693);
var n_7695 = cljs.core.nth.call(null,vec__7657_7694,(0),null);
var code_7696 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7695)," = null;"].join('');
eval(code_7696);


var G__7697 = seq__7647_7690;
var G__7698 = chunk__7648_7691;
var G__7699 = count__7649_7692;
var G__7700 = (i__7650_7693 + (1));
seq__7647_7690 = G__7697;
chunk__7648_7691 = G__7698;
count__7649_7692 = G__7699;
i__7650_7693 = G__7700;
continue;
} else {
var temp__5753__auto___7701 = cljs.core.seq.call(null,seq__7647_7690);
if(temp__5753__auto___7701){
var seq__7647_7702__$1 = temp__5753__auto___7701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7647_7702__$1)){
var c__5568__auto___7703 = cljs.core.chunk_first.call(null,seq__7647_7702__$1);
var G__7704 = cljs.core.chunk_rest.call(null,seq__7647_7702__$1);
var G__7705 = c__5568__auto___7703;
var G__7706 = cljs.core.count.call(null,c__5568__auto___7703);
var G__7707 = (0);
seq__7647_7690 = G__7704;
chunk__7648_7691 = G__7705;
count__7649_7692 = G__7706;
i__7650_7693 = G__7707;
continue;
} else {
var vec__7660_7708 = cljs.core.first.call(null,seq__7647_7702__$1);
var n_7709 = cljs.core.nth.call(null,vec__7660_7708,(0),null);
var code_7710 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7709)," = null;"].join('');
eval(code_7710);


var G__7711 = cljs.core.next.call(null,seq__7647_7702__$1);
var G__7712 = null;
var G__7713 = (0);
var G__7714 = (0);
seq__7647_7690 = G__7711;
chunk__7648_7691 = G__7712;
count__7649_7692 = G__7713;
i__7650_7693 = G__7714;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__7715_SHARP_){
return p1__7715_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_7716 = (function (this$,directories,reporters){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.run_directories[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,directories,reporters);
} else {
var m__5392__auto__ = (speclj.running.run_directories["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_7716.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_7717 = (function (this$,description){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.submit_description[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,description);
} else {
var m__5392__auto__ = (speclj.running.submit_description["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_7717.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_7718 = (function (this$,description,reporters){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.run_description[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,description,reporters);
} else {
var m__5392__auto__ = (speclj.running.run_description["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_7718.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_7719 = (function (this$,reporters){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.run_and_report[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,reporters);
} else {
var m__5392__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_7719.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
