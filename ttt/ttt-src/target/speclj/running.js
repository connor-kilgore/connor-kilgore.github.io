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
var G__6983 = parent;
component = G__6983;
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

var G__6984 = parent;
component = G__6984;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__6985 = cljs.core.seq.call(null,descriptions);
var chunk__6986 = null;
var count__6987 = (0);
var i__6988 = (0);
while(true){
if((i__6988 < count__6987)){
var component = cljs.core._nth.call(null,chunk__6986,i__6988);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__6989 = seq__6985;
var G__6990 = chunk__6986;
var G__6991 = count__6987;
var G__6992 = (i__6988 + (1));
seq__6985 = G__6989;
chunk__6986 = G__6990;
count__6987 = G__6991;
i__6988 = G__6992;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6985);
if(temp__5753__auto__){
var seq__6985__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6985__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6985__$1);
var G__6993 = cljs.core.chunk_rest.call(null,seq__6985__$1);
var G__6994 = c__5568__auto__;
var G__6995 = cljs.core.count.call(null,c__5568__auto__);
var G__6996 = (0);
seq__6985 = G__6993;
chunk__6986 = G__6994;
count__6987 = G__6995;
i__6988 = G__6996;
continue;
} else {
var component = cljs.core.first.call(null,seq__6985__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__6997 = cljs.core.next.call(null,seq__6985__$1);
var G__6998 = null;
var G__6999 = (0);
var G__7000 = (0);
seq__6985 = G__6997;
chunk__6986 = G__6998;
count__6987 = G__6999;
i__6988 = G__7000;
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
var seq__7001 = cljs.core.seq.call(null,characteristics);
var chunk__7003 = null;
var count__7004 = (0);
var i__7005 = (0);
while(true){
if((i__7005 < count__7004)){
var characteristic = cljs.core._nth.call(null,chunk__7003,i__7005);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7007 = seq__7001;
var G__7008 = chunk__7003;
var G__7009 = count__7004;
var G__7010 = (i__7005 + (1));
seq__7001 = G__7007;
chunk__7003 = G__7008;
count__7004 = G__7009;
i__7005 = G__7010;
continue;
} else {
var G__7011 = seq__7001;
var G__7012 = chunk__7003;
var G__7013 = count__7004;
var G__7014 = (i__7005 + (1));
seq__7001 = G__7011;
chunk__7003 = G__7012;
count__7004 = G__7013;
i__7005 = G__7014;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7001);
if(temp__5753__auto__){
var seq__7001__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7001__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7001__$1);
var G__7015 = cljs.core.chunk_rest.call(null,seq__7001__$1);
var G__7016 = c__5568__auto__;
var G__7017 = cljs.core.count.call(null,c__5568__auto__);
var G__7018 = (0);
seq__7001 = G__7015;
chunk__7003 = G__7016;
count__7004 = G__7017;
i__7005 = G__7018;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__7001__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7019 = cljs.core.next.call(null,seq__7001__$1);
var G__7020 = null;
var G__7021 = (0);
var G__7022 = (0);
seq__7001 = G__7019;
chunk__7003 = G__7020;
count__7004 = G__7021;
i__7005 = G__7022;
continue;
} else {
var G__7023 = cljs.core.next.call(null,seq__7001__$1);
var G__7024 = null;
var G__7025 = (0);
var G__7026 = (0);
seq__7001 = G__7023;
chunk__7003 = G__7024;
count__7004 = G__7025;
i__7005 = G__7026;
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
var seq__7027_7031 = cljs.core.seq.call(null,descriptions);
var chunk__7028_7032 = null;
var count__7029_7033 = (0);
var i__7030_7034 = (0);
while(true){
if((i__7030_7034 < count__7029_7033)){
var description_7035 = cljs.core._nth.call(null,chunk__7028_7032,i__7030_7034);
speclj.running.scan_for_focus_BANG_.call(null,description_7035);


var G__7036 = seq__7027_7031;
var G__7037 = chunk__7028_7032;
var G__7038 = count__7029_7033;
var G__7039 = (i__7030_7034 + (1));
seq__7027_7031 = G__7036;
chunk__7028_7032 = G__7037;
count__7029_7033 = G__7038;
i__7030_7034 = G__7039;
continue;
} else {
var temp__5753__auto___7040 = cljs.core.seq.call(null,seq__7027_7031);
if(temp__5753__auto___7040){
var seq__7027_7041__$1 = temp__5753__auto___7040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7027_7041__$1)){
var c__5568__auto___7042 = cljs.core.chunk_first.call(null,seq__7027_7041__$1);
var G__7043 = cljs.core.chunk_rest.call(null,seq__7027_7041__$1);
var G__7044 = c__5568__auto___7042;
var G__7045 = cljs.core.count.call(null,c__5568__auto___7042);
var G__7046 = (0);
seq__7027_7031 = G__7043;
chunk__7028_7032 = G__7044;
count__7029_7033 = G__7045;
i__7030_7034 = G__7046;
continue;
} else {
var description_7047 = cljs.core.first.call(null,seq__7027_7041__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_7047);


var G__7048 = cljs.core.next.call(null,seq__7027_7041__$1);
var G__7049 = null;
var G__7050 = (0);
var G__7051 = (0);
seq__7027_7031 = G__7048;
chunk__7028_7032 = G__7049;
count__7029_7033 = G__7050;
i__7030_7034 = G__7051;
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
var seq__7052 = cljs.core.seq.call(null,components);
var chunk__7053 = null;
var count__7054 = (0);
var i__7055 = (0);
while(true){
if((i__7055 < count__7054)){
var component = cljs.core._nth.call(null,chunk__7053,i__7055);
component.body.call(null);


var G__7056 = seq__7052;
var G__7057 = chunk__7053;
var G__7058 = count__7054;
var G__7059 = (i__7055 + (1));
seq__7052 = G__7056;
chunk__7053 = G__7057;
count__7054 = G__7058;
i__7055 = G__7059;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7052);
if(temp__5753__auto__){
var seq__7052__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7052__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7052__$1);
var G__7060 = cljs.core.chunk_rest.call(null,seq__7052__$1);
var G__7061 = c__5568__auto__;
var G__7062 = cljs.core.count.call(null,c__5568__auto__);
var G__7063 = (0);
seq__7052 = G__7060;
chunk__7053 = G__7061;
count__7054 = G__7062;
i__7055 = G__7063;
continue;
} else {
var component = cljs.core.first.call(null,seq__7052__$1);
component.body.call(null);


var G__7064 = cljs.core.next.call(null,seq__7052__$1);
var G__7065 = null;
var G__7066 = (0);
var G__7067 = (0);
seq__7052 = G__7064;
chunk__7053 = G__7065;
count__7054 = G__7066;
i__7055 = G__7067;
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
var seq__7068 = cljs.core.seq.call(null,withs);
var chunk__7069 = null;
var count__7070 = (0);
var i__7071 = (0);
while(true){
if((i__7071 < count__7070)){
var with$ = cljs.core._nth.call(null,chunk__7069,i__7071);
speclj.components.reset_with.call(null,with$);


var G__7072 = seq__7068;
var G__7073 = chunk__7069;
var G__7074 = count__7070;
var G__7075 = (i__7071 + (1));
seq__7068 = G__7072;
chunk__7069 = G__7073;
count__7070 = G__7074;
i__7071 = G__7075;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7068);
if(temp__5753__auto__){
var seq__7068__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7068__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7068__$1);
var G__7076 = cljs.core.chunk_rest.call(null,seq__7068__$1);
var G__7077 = c__5568__auto__;
var G__7078 = cljs.core.count.call(null,c__5568__auto__);
var G__7079 = (0);
seq__7068 = G__7076;
chunk__7069 = G__7077;
count__7070 = G__7078;
i__7071 = G__7079;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__7068__$1);
speclj.components.reset_with.call(null,with$);


var G__7080 = cljs.core.next.call(null,seq__7068__$1);
var G__7081 = null;
var G__7082 = (0);
var G__7083 = (0);
seq__7068 = G__7080;
chunk__7069 = G__7081;
count__7070 = G__7082;
i__7071 = G__7083;
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
var G__7084 = cljs.core.deref.call(null,description__$1.parent);
var G__7085 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__7084;
components = G__7085;
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
var befores = speclj.running.collect_components.call(null,(function (p1__7086_SHARP_){
return cljs.core.deref.call(null,p1__7086_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__7087_SHARP_){
return cljs.core.deref.call(null,p1__7087_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__7088_SHARP_){
return cljs.core.deref.call(null,p1__7088_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__7089_SHARP_){
return p1__7089_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__7090_SHARP_){
return cljs.core.deref.call(null,p1__7090_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e7091){var e = e7091;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function speclj$running$do_characteristics_$_iter__7092(s__7093){
return (new cljs.core.LazySeq(null,(function (){
var s__7093__$1 = s__7093;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__7093__$1);
if(temp__5753__auto__){
var s__7093__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7093__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__7093__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__7095 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__7094 = (0);
while(true){
if((i__7094 < size__5522__auto__)){
var characteristic = cljs.core._nth.call(null,c__5521__auto__,i__7094);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__7095,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__7096 = (i__7094 + (1));
i__7094 = G__7096;
continue;
} else {
var G__7097 = (i__7094 + (1));
i__7094 = G__7097;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7095),speclj$running$do_characteristics_$_iter__7092.call(null,cljs.core.chunk_rest.call(null,s__7093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7095),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__7093__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__7092.call(null,cljs.core.rest.call(null,s__7093__$2)));
} else {
var G__7098 = cljs.core.rest.call(null,s__7093__$2);
s__7093__$1 = G__7098;
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
var G__7099 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__7100 = cljs.core.rest.call(null,children);
results__$1 = G__7099;
children = G__7100;
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
var var_names = cljs.core.map.call(null,(function (p1__7103_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7103_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__7104_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7104_SHARP_.unique_name)].join('');
}),withs);
var seq__7105_7137 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__7106_7138 = null;
var count__7107_7139 = (0);
var i__7108_7140 = (0);
while(true){
if((i__7108_7140 < count__7107_7139)){
var vec__7115_7141 = cljs.core._nth.call(null,chunk__7106_7138,i__7108_7140);
var n_7142 = cljs.core.nth.call(null,vec__7115_7141,(0),null);
var un_7143 = cljs.core.nth.call(null,vec__7115_7141,(1),null);
var code_7144 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7142)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7143),";"].join('');
eval(code_7144);


var G__7145 = seq__7105_7137;
var G__7146 = chunk__7106_7138;
var G__7147 = count__7107_7139;
var G__7148 = (i__7108_7140 + (1));
seq__7105_7137 = G__7145;
chunk__7106_7138 = G__7146;
count__7107_7139 = G__7147;
i__7108_7140 = G__7148;
continue;
} else {
var temp__5753__auto___7149 = cljs.core.seq.call(null,seq__7105_7137);
if(temp__5753__auto___7149){
var seq__7105_7150__$1 = temp__5753__auto___7149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7105_7150__$1)){
var c__5568__auto___7151 = cljs.core.chunk_first.call(null,seq__7105_7150__$1);
var G__7152 = cljs.core.chunk_rest.call(null,seq__7105_7150__$1);
var G__7153 = c__5568__auto___7151;
var G__7154 = cljs.core.count.call(null,c__5568__auto___7151);
var G__7155 = (0);
seq__7105_7137 = G__7152;
chunk__7106_7138 = G__7153;
count__7107_7139 = G__7154;
i__7108_7140 = G__7155;
continue;
} else {
var vec__7118_7156 = cljs.core.first.call(null,seq__7105_7150__$1);
var n_7157 = cljs.core.nth.call(null,vec__7118_7156,(0),null);
var un_7158 = cljs.core.nth.call(null,vec__7118_7156,(1),null);
var code_7159 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7157)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7158),";"].join('');
eval(code_7159);


var G__7160 = cljs.core.next.call(null,seq__7105_7150__$1);
var G__7161 = null;
var G__7162 = (0);
var G__7163 = (0);
seq__7105_7137 = G__7160;
chunk__7106_7138 = G__7161;
count__7107_7139 = G__7162;
i__7108_7140 = G__7163;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__7121_7164 = cljs.core.seq.call(null,var_names);
var chunk__7122_7165 = null;
var count__7123_7166 = (0);
var i__7124_7167 = (0);
while(true){
if((i__7124_7167 < count__7123_7166)){
var vec__7131_7168 = cljs.core._nth.call(null,chunk__7122_7165,i__7124_7167);
var n_7169 = cljs.core.nth.call(null,vec__7131_7168,(0),null);
var code_7170 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7169)," = null;"].join('');
eval(code_7170);


var G__7171 = seq__7121_7164;
var G__7172 = chunk__7122_7165;
var G__7173 = count__7123_7166;
var G__7174 = (i__7124_7167 + (1));
seq__7121_7164 = G__7171;
chunk__7122_7165 = G__7172;
count__7123_7166 = G__7173;
i__7124_7167 = G__7174;
continue;
} else {
var temp__5753__auto___7175 = cljs.core.seq.call(null,seq__7121_7164);
if(temp__5753__auto___7175){
var seq__7121_7176__$1 = temp__5753__auto___7175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7121_7176__$1)){
var c__5568__auto___7177 = cljs.core.chunk_first.call(null,seq__7121_7176__$1);
var G__7178 = cljs.core.chunk_rest.call(null,seq__7121_7176__$1);
var G__7179 = c__5568__auto___7177;
var G__7180 = cljs.core.count.call(null,c__5568__auto___7177);
var G__7181 = (0);
seq__7121_7164 = G__7178;
chunk__7122_7165 = G__7179;
count__7123_7166 = G__7180;
i__7124_7167 = G__7181;
continue;
} else {
var vec__7134_7182 = cljs.core.first.call(null,seq__7121_7176__$1);
var n_7183 = cljs.core.nth.call(null,vec__7134_7182,(0),null);
var code_7184 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7183)," = null;"].join('');
eval(code_7184);


var G__7185 = cljs.core.next.call(null,seq__7121_7176__$1);
var G__7186 = null;
var G__7187 = (0);
var G__7188 = (0);
seq__7121_7164 = G__7185;
chunk__7122_7165 = G__7186;
count__7123_7166 = G__7187;
i__7124_7167 = G__7188;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__7189_SHARP_){
return p1__7189_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_7190 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_7190.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_7191 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_7191.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_7192 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_7192.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_7193 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_7193.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
