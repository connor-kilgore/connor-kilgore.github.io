// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.option_selector_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.option_selector');
goog.require('speclj.core');
var description__9666__auto___11437 = speclj.components.new_description.call(null,"Option Selector",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__11419_11438 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11420_11439 = description__9666__auto___11437;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11420_11439);

try{var seq__11421_11440 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"gives a function based on a start menu option",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__11431_11444 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11432_11445 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11432_11445);

try{var seq__11433_11446 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil if invalid selection",((function (_STAR_parent_description_STAR__orig_val__11431_11444,_STAR_parent_description_STAR__temp_val__11432_11445,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11419_11438,_STAR_parent_description_STAR__temp_val__11420_11439,description__9666__auto___11437){
return (function (){
var expected__9793__auto__ = null;
var actual__9794__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"0");
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11431_11444,_STAR_parent_description_STAR__temp_val__11432_11445,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11419_11438,_STAR_parent_description_STAR__temp_val__11420_11439,description__9666__auto___11437))
,false),speclj.components.new_characteristic.call(null,"close program if 4",((function (_STAR_parent_description_STAR__orig_val__11431_11444,_STAR_parent_description_STAR__temp_val__11432_11445,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11419_11438,_STAR_parent_description_STAR__temp_val__11420_11439,description__9666__auto___11437){
return (function (){
var expected__9793__auto__ = new cljs.core.Keyword(null,"close-program","close-program",-1579447425);
var actual__9794__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"4");
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11431_11444,_STAR_parent_description_STAR__temp_val__11432_11445,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11419_11438,_STAR_parent_description_STAR__temp_val__11420_11439,description__9666__auto___11437))
,false)],null)));
var chunk__11434_11447 = null;
var count__11435_11448 = (0);
var i__11436_11449 = (0);
while(true){
if((i__11436_11449 < count__11435_11448)){
var component__9667__auto___11450 = cljs.core._nth.call(null,chunk__11434_11447,i__11436_11449);
speclj.components.install.call(null,component__9667__auto___11450,description__9666__auto____$1);


var G__11451 = seq__11433_11446;
var G__11452 = chunk__11434_11447;
var G__11453 = count__11435_11448;
var G__11454 = (i__11436_11449 + (1));
seq__11433_11446 = G__11451;
chunk__11434_11447 = G__11452;
count__11435_11448 = G__11453;
i__11436_11449 = G__11454;
continue;
} else {
var temp__5753__auto___11455 = cljs.core.seq.call(null,seq__11433_11446);
if(temp__5753__auto___11455){
var seq__11433_11456__$1 = temp__5753__auto___11455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11433_11456__$1)){
var c__5568__auto___11457 = cljs.core.chunk_first.call(null,seq__11433_11456__$1);
var G__11458 = cljs.core.chunk_rest.call(null,seq__11433_11456__$1);
var G__11459 = c__5568__auto___11457;
var G__11460 = cljs.core.count.call(null,c__5568__auto___11457);
var G__11461 = (0);
seq__11433_11446 = G__11458;
chunk__11434_11447 = G__11459;
count__11435_11448 = G__11460;
i__11436_11449 = G__11461;
continue;
} else {
var component__9667__auto___11462 = cljs.core.first.call(null,seq__11433_11456__$1);
speclj.components.install.call(null,component__9667__auto___11462,description__9666__auto____$1);


var G__11463 = cljs.core.next.call(null,seq__11433_11456__$1);
var G__11464 = null;
var G__11465 = (0);
var G__11466 = (0);
seq__11433_11446 = G__11463;
chunk__11434_11447 = G__11464;
count__11435_11448 = G__11465;
i__11436_11449 = G__11466;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11431_11444);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})()],null)));
var chunk__11422_11441 = null;
var count__11423_11442 = (0);
var i__11424_11443 = (0);
while(true){
if((i__11424_11443 < count__11423_11442)){
var component__9667__auto___11467 = cljs.core._nth.call(null,chunk__11422_11441,i__11424_11443);
speclj.components.install.call(null,component__9667__auto___11467,description__9666__auto___11437);


var G__11468 = seq__11421_11440;
var G__11469 = chunk__11422_11441;
var G__11470 = count__11423_11442;
var G__11471 = (i__11424_11443 + (1));
seq__11421_11440 = G__11468;
chunk__11422_11441 = G__11469;
count__11423_11442 = G__11470;
i__11424_11443 = G__11471;
continue;
} else {
var temp__5753__auto___11472 = cljs.core.seq.call(null,seq__11421_11440);
if(temp__5753__auto___11472){
var seq__11421_11473__$1 = temp__5753__auto___11472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11421_11473__$1)){
var c__5568__auto___11474 = cljs.core.chunk_first.call(null,seq__11421_11473__$1);
var G__11475 = cljs.core.chunk_rest.call(null,seq__11421_11473__$1);
var G__11476 = c__5568__auto___11474;
var G__11477 = cljs.core.count.call(null,c__5568__auto___11474);
var G__11478 = (0);
seq__11421_11440 = G__11475;
chunk__11422_11441 = G__11476;
count__11423_11442 = G__11477;
i__11424_11443 = G__11478;
continue;
} else {
var component__9667__auto___11479 = cljs.core.first.call(null,seq__11421_11473__$1);
speclj.components.install.call(null,component__9667__auto___11479,description__9666__auto___11437);


var G__11480 = cljs.core.next.call(null,seq__11421_11473__$1);
var G__11481 = null;
var G__11482 = (0);
var G__11483 = (0);
seq__11421_11440 = G__11480;
chunk__11422_11441 = G__11481;
count__11423_11442 = G__11482;
i__11424_11443 = G__11483;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11419_11438);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto___11437);
}


//# sourceMappingURL=option_selector_spec.js.map
