// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6687_SHARP_){
return p1__6687_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6688 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_6688.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6689 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_6689.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6690 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_6690.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6691 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_6691.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6692 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_6692.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6693 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_6693.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6694 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_6694.call(null,this$,exception);
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
var seq__6695 = cljs.core.seq.call(null,reporters);
var chunk__6696 = null;
var count__6697 = (0);
var i__6698 = (0);
while(true){
if((i__6698 < count__6697)){
var reporter = cljs.core._nth.call(null,chunk__6696,i__6698);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6699 = seq__6695;
var G__6700 = chunk__6696;
var G__6701 = count__6697;
var G__6702 = (i__6698 + (1));
seq__6695 = G__6699;
chunk__6696 = G__6700;
count__6697 = G__6701;
i__6698 = G__6702;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6695);
if(temp__5753__auto__){
var seq__6695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6695__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6695__$1);
var G__6703 = cljs.core.chunk_rest.call(null,seq__6695__$1);
var G__6704 = c__5568__auto__;
var G__6705 = cljs.core.count.call(null,c__5568__auto__);
var G__6706 = (0);
seq__6695 = G__6703;
chunk__6696 = G__6704;
count__6697 = G__6705;
i__6698 = G__6706;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6695__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6707 = cljs.core.next.call(null,seq__6695__$1);
var G__6708 = null;
var G__6709 = (0);
var G__6710 = (0);
seq__6695 = G__6707;
chunk__6696 = G__6708;
count__6697 = G__6709;
i__6698 = G__6710;
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
var seq__6711 = cljs.core.seq.call(null,reporters);
var chunk__6712 = null;
var count__6713 = (0);
var i__6714 = (0);
while(true){
if((i__6714 < count__6713)){
var reporter = cljs.core._nth.call(null,chunk__6712,i__6714);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6715 = seq__6711;
var G__6716 = chunk__6712;
var G__6717 = count__6713;
var G__6718 = (i__6714 + (1));
seq__6711 = G__6715;
chunk__6712 = G__6716;
count__6713 = G__6717;
i__6714 = G__6718;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6711);
if(temp__5753__auto__){
var seq__6711__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6711__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6711__$1);
var G__6719 = cljs.core.chunk_rest.call(null,seq__6711__$1);
var G__6720 = c__5568__auto__;
var G__6721 = cljs.core.count.call(null,c__5568__auto__);
var G__6722 = (0);
seq__6711 = G__6719;
chunk__6712 = G__6720;
count__6713 = G__6721;
i__6714 = G__6722;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6711__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6723 = cljs.core.next.call(null,seq__6711__$1);
var G__6724 = null;
var G__6725 = (0);
var G__6726 = (0);
seq__6711 = G__6723;
chunk__6712 = G__6724;
count__6713 = G__6725;
i__6714 = G__6726;
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
var seq__6727 = cljs.core.seq.call(null,reporters);
var chunk__6728 = null;
var count__6729 = (0);
var i__6730 = (0);
while(true){
if((i__6730 < count__6729)){
var reporter = cljs.core._nth.call(null,chunk__6728,i__6730);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6731 = seq__6727;
var G__6732 = chunk__6728;
var G__6733 = count__6729;
var G__6734 = (i__6730 + (1));
seq__6727 = G__6731;
chunk__6728 = G__6732;
count__6729 = G__6733;
i__6730 = G__6734;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6727);
if(temp__5753__auto__){
var seq__6727__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6727__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6727__$1);
var G__6735 = cljs.core.chunk_rest.call(null,seq__6727__$1);
var G__6736 = c__5568__auto__;
var G__6737 = cljs.core.count.call(null,c__5568__auto__);
var G__6738 = (0);
seq__6727 = G__6735;
chunk__6728 = G__6736;
count__6729 = G__6737;
i__6730 = G__6738;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6727__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6739 = cljs.core.next.call(null,seq__6727__$1);
var G__6740 = null;
var G__6741 = (0);
var G__6742 = (0);
seq__6727 = G__6739;
chunk__6728 = G__6740;
count__6729 = G__6741;
i__6730 = G__6742;
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
var seq__6743 = cljs.core.seq.call(null,reporters);
var chunk__6744 = null;
var count__6745 = (0);
var i__6746 = (0);
while(true){
if((i__6746 < count__6745)){
var reporter = cljs.core._nth.call(null,chunk__6744,i__6746);
speclj.reporting.report_error.call(null,reporter,result);


var G__6747 = seq__6743;
var G__6748 = chunk__6744;
var G__6749 = count__6745;
var G__6750 = (i__6746 + (1));
seq__6743 = G__6747;
chunk__6744 = G__6748;
count__6745 = G__6749;
i__6746 = G__6750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6743);
if(temp__5753__auto__){
var seq__6743__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6743__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6743__$1);
var G__6751 = cljs.core.chunk_rest.call(null,seq__6743__$1);
var G__6752 = c__5568__auto__;
var G__6753 = cljs.core.count.call(null,c__5568__auto__);
var G__6754 = (0);
seq__6743 = G__6751;
chunk__6744 = G__6752;
count__6745 = G__6753;
i__6746 = G__6754;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6743__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6755 = cljs.core.next.call(null,seq__6743__$1);
var G__6756 = null;
var G__6757 = (0);
var G__6758 = (0);
seq__6743 = G__6755;
chunk__6744 = G__6756;
count__6745 = G__6757;
i__6746 = G__6758;
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
var levels_6759 = speclj.platform.stack_trace.call(null,exception);
var elides_6760 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6759)){
var level_6761 = cljs.core.first.call(null,levels_6759);
if(speclj.platform.elide_level_QMARK_.call(null,level_6761)){
var G__6762 = cljs.core.rest.call(null,levels_6759);
var G__6763 = (elides_6760 + (1));
levels_6759 = G__6762;
elides_6760 = G__6763;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6760);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6761));

var G__6764 = cljs.core.rest.call(null,levels_6759);
var G__6765 = (0);
levels_6759 = G__6764;
elides_6760 = G__6765;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6760);
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
var _STAR_print_newline_STAR__orig_val__6766_6770 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6767_6771 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6768_6772 = true;
var _STAR_print_fn_STAR__temp_val__6769_6773 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6768_6772);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6769_6773);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6767_6771);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6766_6770);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___6777 = arguments.length;
var i__5770__auto___6778 = (0);
while(true){
if((i__5770__auto___6778 < len__5769__auto___6777)){
args__5775__auto__.push((arguments[i__5770__auto___6778]));

var G__6779 = (i__5770__auto___6778 + (1));
i__5770__auto___6778 = G__6779;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__6774_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6774_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6775){
var G__6776 = cljs.core.first.call(null,seq6775);
var seq6775__$1 = cljs.core.next.call(null,seq6775);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6776,seq6775__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5775__auto__ = [];
var len__5769__auto___6782 = arguments.length;
var i__5770__auto___6783 = (0);
while(true){
if((i__5770__auto___6783 < len__5769__auto___6782)){
args__5775__auto__.push((arguments[i__5770__auto___6783]));

var G__6784 = (i__5770__auto___6783 + (1));
i__5770__auto___6783 = G__6784;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6780){
var G__6781 = cljs.core.first.call(null,seq6780);
var seq6780__$1 = cljs.core.next.call(null,seq6780);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6781,seq6780__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6785 = cljs.core.seq.call(null,reporters);
var chunk__6786 = null;
var count__6787 = (0);
var i__6788 = (0);
while(true){
if((i__6788 < count__6787)){
var reporter = cljs.core._nth.call(null,chunk__6786,i__6788);
speclj.reporting.report_description.call(null,reporter,description);


var G__6789 = seq__6785;
var G__6790 = chunk__6786;
var G__6791 = count__6787;
var G__6792 = (i__6788 + (1));
seq__6785 = G__6789;
chunk__6786 = G__6790;
count__6787 = G__6791;
i__6788 = G__6792;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6785);
if(temp__5753__auto__){
var seq__6785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6785__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6785__$1);
var G__6793 = cljs.core.chunk_rest.call(null,seq__6785__$1);
var G__6794 = c__5568__auto__;
var G__6795 = cljs.core.count.call(null,c__5568__auto__);
var G__6796 = (0);
seq__6785 = G__6793;
chunk__6786 = G__6794;
count__6787 = G__6795;
i__6788 = G__6796;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6785__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6797 = cljs.core.next.call(null,seq__6785__$1);
var G__6798 = null;
var G__6799 = (0);
var G__6800 = (0);
seq__6785 = G__6797;
chunk__6786 = G__6798;
count__6787 = G__6799;
i__6788 = G__6800;
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
var seq__6801 = cljs.core.seq.call(null,reporters);
var chunk__6802 = null;
var count__6803 = (0);
var i__6804 = (0);
while(true){
if((i__6804 < count__6803)){
var reporter = cljs.core._nth.call(null,chunk__6802,i__6804);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6805 = seq__6801;
var G__6806 = chunk__6802;
var G__6807 = count__6803;
var G__6808 = (i__6804 + (1));
seq__6801 = G__6805;
chunk__6802 = G__6806;
count__6803 = G__6807;
i__6804 = G__6808;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6801);
if(temp__5753__auto__){
var seq__6801__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6801__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6801__$1);
var G__6809 = cljs.core.chunk_rest.call(null,seq__6801__$1);
var G__6810 = c__5568__auto__;
var G__6811 = cljs.core.count.call(null,c__5568__auto__);
var G__6812 = (0);
seq__6801 = G__6809;
chunk__6802 = G__6810;
count__6803 = G__6811;
i__6804 = G__6812;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6801__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6813 = cljs.core.next.call(null,seq__6801__$1);
var G__6814 = null;
var G__6815 = (0);
var G__6816 = (0);
seq__6801 = G__6813;
chunk__6802 = G__6814;
count__6803 = G__6815;
i__6804 = G__6816;
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
var seq__6817 = cljs.core.seq.call(null,reporters);
var chunk__6818 = null;
var count__6819 = (0);
var i__6820 = (0);
while(true){
if((i__6820 < count__6819)){
var reporter = cljs.core._nth.call(null,chunk__6818,i__6820);
speclj.reporting.report_message.call(null,reporter,message);


var G__6821 = seq__6817;
var G__6822 = chunk__6818;
var G__6823 = count__6819;
var G__6824 = (i__6820 + (1));
seq__6817 = G__6821;
chunk__6818 = G__6822;
count__6819 = G__6823;
i__6820 = G__6824;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6817);
if(temp__5753__auto__){
var seq__6817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6817__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6817__$1);
var G__6825 = cljs.core.chunk_rest.call(null,seq__6817__$1);
var G__6826 = c__5568__auto__;
var G__6827 = cljs.core.count.call(null,c__5568__auto__);
var G__6828 = (0);
seq__6817 = G__6825;
chunk__6818 = G__6826;
count__6819 = G__6827;
i__6820 = G__6828;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6817__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6829 = cljs.core.next.call(null,seq__6817__$1);
var G__6830 = null;
var G__6831 = (0);
var G__6832 = (0);
seq__6817 = G__6829;
chunk__6818 = G__6830;
count__6819 = G__6831;
i__6820 = G__6832;
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
var seq__6833 = cljs.core.seq.call(null,reporters);
var chunk__6834 = null;
var count__6835 = (0);
var i__6836 = (0);
while(true){
if((i__6836 < count__6835)){
var reporter = cljs.core._nth.call(null,chunk__6834,i__6836);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6837 = seq__6833;
var G__6838 = chunk__6834;
var G__6839 = count__6835;
var G__6840 = (i__6836 + (1));
seq__6833 = G__6837;
chunk__6834 = G__6838;
count__6835 = G__6839;
i__6836 = G__6840;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6833);
if(temp__5753__auto__){
var seq__6833__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6833__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6833__$1);
var G__6841 = cljs.core.chunk_rest.call(null,seq__6833__$1);
var G__6842 = c__5568__auto__;
var G__6843 = cljs.core.count.call(null,c__5568__auto__);
var G__6844 = (0);
seq__6833 = G__6841;
chunk__6834 = G__6842;
count__6835 = G__6843;
i__6836 = G__6844;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6833__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6845 = cljs.core.next.call(null,seq__6833__$1);
var G__6846 = null;
var G__6847 = (0);
var G__6848 = (0);
seq__6833 = G__6845;
chunk__6834 = G__6846;
count__6835 = G__6847;
i__6836 = G__6848;
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
