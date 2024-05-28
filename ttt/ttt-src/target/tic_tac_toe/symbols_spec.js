// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.symbols_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.symbols');
goog.require('speclj.core');
var description__9666__auto___11656 = speclj.components.new_description.call(null,"Symbols",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__11638_11657 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11639_11658 = description__9666__auto___11656;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11639_11658);

try{var seq__11640_11659 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gives an O when provided an X",((function (_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656){
return (function (){
var expected__9793__auto__ = (2);
var actual__9794__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(1));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656))
,false),speclj.components.new_characteristic.call(null,"gives an X when provided an O",((function (_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656))
,false),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"At a position on a given board, gives an",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__11650_11663 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11651_11664 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11651_11664);

try{var seq__11652_11665 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__11650_11663,_STAR_parent_description_STAR__temp_val__11651_11664,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656){
return (function (){
var expected__9793__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),"m"," X","\u001B[0m"].join('');
var actual__9794__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11650_11663,_STAR_parent_description_STAR__temp_val__11651_11664,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656))
,false),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__11650_11663,_STAR_parent_description_STAR__temp_val__11651_11664,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656){
return (function (){
var expected__9793__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),"m"," O","\u001B[0m"].join('');
var actual__9794__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(2),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11650_11663,_STAR_parent_description_STAR__temp_val__11651_11664,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656))
,false),speclj.components.new_characteristic.call(null,"Empty space",((function (_STAR_parent_description_STAR__orig_val__11650_11663,_STAR_parent_description_STAR__temp_val__11651_11664,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656){
return (function (){
var expected__9793__auto__ = (0);
var actual__9794__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11650_11663,_STAR_parent_description_STAR__temp_val__11651_11664,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11638_11657,_STAR_parent_description_STAR__temp_val__11639_11658,description__9666__auto___11656))
,false)],null)));
var chunk__11653_11666 = null;
var count__11654_11667 = (0);
var i__11655_11668 = (0);
while(true){
if((i__11655_11668 < count__11654_11667)){
var component__9667__auto___11669 = cljs.core._nth.call(null,chunk__11653_11666,i__11655_11668);
speclj.components.install.call(null,component__9667__auto___11669,description__9666__auto____$1);


var G__11670 = seq__11652_11665;
var G__11671 = chunk__11653_11666;
var G__11672 = count__11654_11667;
var G__11673 = (i__11655_11668 + (1));
seq__11652_11665 = G__11670;
chunk__11653_11666 = G__11671;
count__11654_11667 = G__11672;
i__11655_11668 = G__11673;
continue;
} else {
var temp__5753__auto___11674 = cljs.core.seq.call(null,seq__11652_11665);
if(temp__5753__auto___11674){
var seq__11652_11675__$1 = temp__5753__auto___11674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11652_11675__$1)){
var c__5568__auto___11676 = cljs.core.chunk_first.call(null,seq__11652_11675__$1);
var G__11677 = cljs.core.chunk_rest.call(null,seq__11652_11675__$1);
var G__11678 = c__5568__auto___11676;
var G__11679 = cljs.core.count.call(null,c__5568__auto___11676);
var G__11680 = (0);
seq__11652_11665 = G__11677;
chunk__11653_11666 = G__11678;
count__11654_11667 = G__11679;
i__11655_11668 = G__11680;
continue;
} else {
var component__9667__auto___11681 = cljs.core.first.call(null,seq__11652_11675__$1);
speclj.components.install.call(null,component__9667__auto___11681,description__9666__auto____$1);


var G__11682 = cljs.core.next.call(null,seq__11652_11675__$1);
var G__11683 = null;
var G__11684 = (0);
var G__11685 = (0);
seq__11652_11665 = G__11682;
chunk__11653_11666 = G__11683;
count__11654_11667 = G__11684;
i__11655_11668 = G__11685;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11650_11663);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})()],null)));
var chunk__11641_11660 = null;
var count__11642_11661 = (0);
var i__11643_11662 = (0);
while(true){
if((i__11643_11662 < count__11642_11661)){
var component__9667__auto___11686 = cljs.core._nth.call(null,chunk__11641_11660,i__11643_11662);
speclj.components.install.call(null,component__9667__auto___11686,description__9666__auto___11656);


var G__11687 = seq__11640_11659;
var G__11688 = chunk__11641_11660;
var G__11689 = count__11642_11661;
var G__11690 = (i__11643_11662 + (1));
seq__11640_11659 = G__11687;
chunk__11641_11660 = G__11688;
count__11642_11661 = G__11689;
i__11643_11662 = G__11690;
continue;
} else {
var temp__5753__auto___11691 = cljs.core.seq.call(null,seq__11640_11659);
if(temp__5753__auto___11691){
var seq__11640_11692__$1 = temp__5753__auto___11691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11640_11692__$1)){
var c__5568__auto___11693 = cljs.core.chunk_first.call(null,seq__11640_11692__$1);
var G__11694 = cljs.core.chunk_rest.call(null,seq__11640_11692__$1);
var G__11695 = c__5568__auto___11693;
var G__11696 = cljs.core.count.call(null,c__5568__auto___11693);
var G__11697 = (0);
seq__11640_11659 = G__11694;
chunk__11641_11660 = G__11695;
count__11642_11661 = G__11696;
i__11643_11662 = G__11697;
continue;
} else {
var component__9667__auto___11698 = cljs.core.first.call(null,seq__11640_11692__$1);
speclj.components.install.call(null,component__9667__auto___11698,description__9666__auto___11656);


var G__11699 = cljs.core.next.call(null,seq__11640_11692__$1);
var G__11700 = null;
var G__11701 = (0);
var G__11702 = (0);
seq__11640_11659 = G__11699;
chunk__11641_11660 = G__11700;
count__11642_11661 = G__11701;
i__11643_11662 = G__11702;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11638_11657);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto___11656);
}


//# sourceMappingURL=symbols_spec.js.map
