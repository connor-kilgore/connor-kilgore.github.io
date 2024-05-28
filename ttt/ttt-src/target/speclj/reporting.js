// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6938_SHARP_){
return p1__6938_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6939 = (function (reporter,message){
var x__5393__auto__ = (((reporter == null))?null:reporter);
var m__5394__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,reporter,message);
} else {
var m__5392__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6939.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6940 = (function (this$,description){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,description);
} else {
var m__5392__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6940.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6941 = (function (this$,result){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,result);
} else {
var m__5392__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6941.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6942 = (function (this$,result){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,result);
} else {
var m__5392__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6942.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6943 = (function (this$,result){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,result);
} else {
var m__5392__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6943.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6944 = (function (this$,results){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,results);
} else {
var m__5392__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6944.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6945 = (function (this$,exception){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,exception);
} else {
var m__5392__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6945.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6946 = cljs.core.seq.call(null,reporters);
var chunk__6947 = null;
var count__6948 = (0);
var i__6949 = (0);
while(true){
if((i__6949 < count__6948)){
var reporter = cljs.core._nth.call(null,chunk__6947,i__6949);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6950 = seq__6946;
var G__6951 = chunk__6947;
var G__6952 = count__6948;
var G__6953 = (i__6949 + (1));
seq__6946 = G__6950;
chunk__6947 = G__6951;
count__6948 = G__6952;
i__6949 = G__6953;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6946);
if(temp__5753__auto__){
var seq__6946__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6946__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6946__$1);
var G__6954 = cljs.core.chunk_rest.call(null,seq__6946__$1);
var G__6955 = c__5568__auto__;
var G__6956 = cljs.core.count.call(null,c__5568__auto__);
var G__6957 = (0);
seq__6946 = G__6954;
chunk__6947 = G__6955;
count__6948 = G__6956;
i__6949 = G__6957;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6946__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6958 = cljs.core.next.call(null,seq__6946__$1);
var G__6959 = null;
var G__6960 = (0);
var G__6961 = (0);
seq__6946 = G__6958;
chunk__6947 = G__6959;
count__6948 = G__6960;
i__6949 = G__6961;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6962 = cljs.core.seq.call(null,reporters);
var chunk__6963 = null;
var count__6964 = (0);
var i__6965 = (0);
while(true){
if((i__6965 < count__6964)){
var reporter = cljs.core._nth.call(null,chunk__6963,i__6965);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6966 = seq__6962;
var G__6967 = chunk__6963;
var G__6968 = count__6964;
var G__6969 = (i__6965 + (1));
seq__6962 = G__6966;
chunk__6963 = G__6967;
count__6964 = G__6968;
i__6965 = G__6969;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6962);
if(temp__5753__auto__){
var seq__6962__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6962__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6962__$1);
var G__6970 = cljs.core.chunk_rest.call(null,seq__6962__$1);
var G__6971 = c__5568__auto__;
var G__6972 = cljs.core.count.call(null,c__5568__auto__);
var G__6973 = (0);
seq__6962 = G__6970;
chunk__6963 = G__6971;
count__6964 = G__6972;
i__6965 = G__6973;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6962__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6974 = cljs.core.next.call(null,seq__6962__$1);
var G__6975 = null;
var G__6976 = (0);
var G__6977 = (0);
seq__6962 = G__6974;
chunk__6963 = G__6975;
count__6964 = G__6976;
i__6965 = G__6977;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6978 = cljs.core.seq.call(null,reporters);
var chunk__6979 = null;
var count__6980 = (0);
var i__6981 = (0);
while(true){
if((i__6981 < count__6980)){
var reporter = cljs.core._nth.call(null,chunk__6979,i__6981);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6982 = seq__6978;
var G__6983 = chunk__6979;
var G__6984 = count__6980;
var G__6985 = (i__6981 + (1));
seq__6978 = G__6982;
chunk__6979 = G__6983;
count__6980 = G__6984;
i__6981 = G__6985;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6978);
if(temp__5753__auto__){
var seq__6978__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6978__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6978__$1);
var G__6986 = cljs.core.chunk_rest.call(null,seq__6978__$1);
var G__6987 = c__5568__auto__;
var G__6988 = cljs.core.count.call(null,c__5568__auto__);
var G__6989 = (0);
seq__6978 = G__6986;
chunk__6979 = G__6987;
count__6980 = G__6988;
i__6981 = G__6989;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6978__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6990 = cljs.core.next.call(null,seq__6978__$1);
var G__6991 = null;
var G__6992 = (0);
var G__6993 = (0);
seq__6978 = G__6990;
chunk__6979 = G__6991;
count__6980 = G__6992;
i__6981 = G__6993;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6994 = cljs.core.seq.call(null,reporters);
var chunk__6995 = null;
var count__6996 = (0);
var i__6997 = (0);
while(true){
if((i__6997 < count__6996)){
var reporter = cljs.core._nth.call(null,chunk__6995,i__6997);
speclj.reporting.report_error.call(null,reporter,result);


var G__6998 = seq__6994;
var G__6999 = chunk__6995;
var G__7000 = count__6996;
var G__7001 = (i__6997 + (1));
seq__6994 = G__6998;
chunk__6995 = G__6999;
count__6996 = G__7000;
i__6997 = G__7001;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6994);
if(temp__5753__auto__){
var seq__6994__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6994__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6994__$1);
var G__7002 = cljs.core.chunk_rest.call(null,seq__6994__$1);
var G__7003 = c__5568__auto__;
var G__7004 = cljs.core.count.call(null,c__5568__auto__);
var G__7005 = (0);
seq__6994 = G__7002;
chunk__6995 = G__7003;
count__6996 = G__7004;
i__6997 = G__7005;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6994__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__7006 = cljs.core.next.call(null,seq__6994__$1);
var G__7007 = null;
var G__7008 = (0);
var G__7009 = (0);
seq__6994 = G__7006;
chunk__6995 = G__7007;
count__6996 = G__7008;
i__6997 = G__7009;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_7010 = speclj.platform.stack_trace.call(null,exception);
var elides_7011 = (0);
while(true){
if(cljs.core.seq.call(null,levels_7010)){
var level_7012 = cljs.core.first.call(null,levels_7010);
if(speclj.platform.elide_level_QMARK_.call(null,level_7012)){
var G__7013 = cljs.core.rest.call(null,levels_7010);
var G__7014 = (elides_7011 + (1));
levels_7010 = G__7013;
elides_7011 = G__7014;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_7011);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_7012));

var G__7015 = cljs.core.rest.call(null,levels_7010);
var G__7016 = (0);
levels_7010 = G__7015;
elides_7011 = G__7016;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_7011);
}
break;
}

var temp__5751__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5751__auto__)){
var cause = temp__5751__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7017_7021 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7018_7022 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7019_7023 = true;
var _STAR_print_fn_STAR__temp_val__7020_7024 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7019_7023);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7020_7024);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7018_7022);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7017_7021);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7028 = arguments.length;
var i__5770__auto___7029 = (0);
while(true){
if((i__5770__auto___7029 < len__5769__auto___7028)){
args__5775__auto__.push((arguments[i__5770__auto___7029]));

var G__7030 = (i__5770__auto___7029 + (1));
i__5770__auto___7029 = G__7030;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__7025_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7025_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq7026){
var G__7027 = cljs.core.first.call(null,seq7026);
var seq7026__$1 = cljs.core.next.call(null,seq7026);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7027,seq7026__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7033 = arguments.length;
var i__5770__auto___7034 = (0);
while(true){
if((i__5770__auto___7034 < len__5769__auto___7033)){
args__5775__auto__.push((arguments[i__5770__auto___7034]));

var G__7035 = (i__5770__auto___7034 + (1));
i__5770__auto___7034 = G__7035;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq7031){
var G__7032 = cljs.core.first.call(null,seq7031);
var seq7031__$1 = cljs.core.next.call(null,seq7031);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7032,seq7031__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__7036 = cljs.core.seq.call(null,reporters);
var chunk__7037 = null;
var count__7038 = (0);
var i__7039 = (0);
while(true){
if((i__7039 < count__7038)){
var reporter = cljs.core._nth.call(null,chunk__7037,i__7039);
speclj.reporting.report_description.call(null,reporter,description);


var G__7040 = seq__7036;
var G__7041 = chunk__7037;
var G__7042 = count__7038;
var G__7043 = (i__7039 + (1));
seq__7036 = G__7040;
chunk__7037 = G__7041;
count__7038 = G__7042;
i__7039 = G__7043;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7036);
if(temp__5753__auto__){
var seq__7036__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7036__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7036__$1);
var G__7044 = cljs.core.chunk_rest.call(null,seq__7036__$1);
var G__7045 = c__5568__auto__;
var G__7046 = cljs.core.count.call(null,c__5568__auto__);
var G__7047 = (0);
seq__7036 = G__7044;
chunk__7037 = G__7045;
count__7038 = G__7046;
i__7039 = G__7047;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7036__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__7048 = cljs.core.next.call(null,seq__7036__$1);
var G__7049 = null;
var G__7050 = (0);
var G__7051 = (0);
seq__7036 = G__7048;
chunk__7037 = G__7049;
count__7038 = G__7050;
i__7039 = G__7051;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__7052 = cljs.core.seq.call(null,reporters);
var chunk__7053 = null;
var count__7054 = (0);
var i__7055 = (0);
while(true){
if((i__7055 < count__7054)){
var reporter = cljs.core._nth.call(null,chunk__7053,i__7055);
speclj.reporting.report_runs.call(null,reporter,results);


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
var reporter = cljs.core.first.call(null,seq__7052__$1);
speclj.reporting.report_runs.call(null,reporter,results);


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
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__7068 = cljs.core.seq.call(null,reporters);
var chunk__7069 = null;
var count__7070 = (0);
var i__7071 = (0);
while(true){
if((i__7071 < count__7070)){
var reporter = cljs.core._nth.call(null,chunk__7069,i__7071);
speclj.reporting.report_message.call(null,reporter,message);


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
var reporter = cljs.core.first.call(null,seq__7068__$1);
speclj.reporting.report_message.call(null,reporter,message);


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
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__7084 = cljs.core.seq.call(null,reporters);
var chunk__7085 = null;
var count__7086 = (0);
var i__7087 = (0);
while(true){
if((i__7087 < count__7086)){
var reporter = cljs.core._nth.call(null,chunk__7085,i__7087);
speclj.reporting.report_error.call(null,reporter,exception);


var G__7088 = seq__7084;
var G__7089 = chunk__7085;
var G__7090 = count__7086;
var G__7091 = (i__7087 + (1));
seq__7084 = G__7088;
chunk__7085 = G__7089;
count__7086 = G__7090;
i__7087 = G__7091;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7084);
if(temp__5753__auto__){
var seq__7084__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7084__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7084__$1);
var G__7092 = cljs.core.chunk_rest.call(null,seq__7084__$1);
var G__7093 = c__5568__auto__;
var G__7094 = cljs.core.count.call(null,c__5568__auto__);
var G__7095 = (0);
seq__7084 = G__7092;
chunk__7085 = G__7093;
count__7086 = G__7094;
i__7087 = G__7095;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7084__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__7096 = cljs.core.next.call(null,seq__7084__$1);
var G__7097 = null;
var G__7098 = (0);
var G__7099 = (0);
seq__7084 = G__7096;
chunk__7085 = G__7097;
count__7086 = G__7098;
i__7087 = G__7099;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
