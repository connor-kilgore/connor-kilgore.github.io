// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.symbols_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.symbols');
goog.require('speclj.core');
var description__8694__auto___10315 = speclj.components.new_description.call(null,"Symbols",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__10297_10316 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10298_10317 = description__8694__auto___10315;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10298_10317);

try{var seq__10299_10318 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gives an O when provided an X",((function (_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315){
return (function (){
var expected__8827__auto__ = (2);
var actual__8828__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315))
,false),speclj.components.new_characteristic.call(null,"gives an X when provided an O",((function (_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315))
,false),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"At a position on a given board, gives an",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__10309_10322 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10310_10323 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10310_10323);

try{var seq__10311_10324 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__10309_10322,_STAR_parent_description_STAR__temp_val__10310_10323,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315){
return (function (){
var expected__8827__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),"m"," X","\u001B[0m"].join('');
var actual__8828__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10309_10322,_STAR_parent_description_STAR__temp_val__10310_10323,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315))
,false),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__10309_10322,_STAR_parent_description_STAR__temp_val__10310_10323,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315){
return (function (){
var expected__8827__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),"m"," O","\u001B[0m"].join('');
var actual__8828__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(2),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10309_10322,_STAR_parent_description_STAR__temp_val__10310_10323,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315))
,false),speclj.components.new_characteristic.call(null,"Empty space",((function (_STAR_parent_description_STAR__orig_val__10309_10322,_STAR_parent_description_STAR__temp_val__10310_10323,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315){
return (function (){
var expected__8827__auto__ = (0);
var actual__8828__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10309_10322,_STAR_parent_description_STAR__temp_val__10310_10323,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10297_10316,_STAR_parent_description_STAR__temp_val__10298_10317,description__8694__auto___10315))
,false)],null)));
var chunk__10312_10325 = null;
var count__10313_10326 = (0);
var i__10314_10327 = (0);
while(true){
if((i__10314_10327 < count__10313_10326)){
var component__8695__auto___10328 = cljs.core._nth.call(null,chunk__10312_10325,i__10314_10327);
speclj.components.install.call(null,component__8695__auto___10328,description__8694__auto____$1);


var G__10329 = seq__10311_10324;
var G__10330 = chunk__10312_10325;
var G__10331 = count__10313_10326;
var G__10332 = (i__10314_10327 + (1));
seq__10311_10324 = G__10329;
chunk__10312_10325 = G__10330;
count__10313_10326 = G__10331;
i__10314_10327 = G__10332;
continue;
} else {
var temp__5753__auto___10333 = cljs.core.seq.call(null,seq__10311_10324);
if(temp__5753__auto___10333){
var seq__10311_10334__$1 = temp__5753__auto___10333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10311_10334__$1)){
var c__5568__auto___10335 = cljs.core.chunk_first.call(null,seq__10311_10334__$1);
var G__10336 = cljs.core.chunk_rest.call(null,seq__10311_10334__$1);
var G__10337 = c__5568__auto___10335;
var G__10338 = cljs.core.count.call(null,c__5568__auto___10335);
var G__10339 = (0);
seq__10311_10324 = G__10336;
chunk__10312_10325 = G__10337;
count__10313_10326 = G__10338;
i__10314_10327 = G__10339;
continue;
} else {
var component__8695__auto___10340 = cljs.core.first.call(null,seq__10311_10334__$1);
speclj.components.install.call(null,component__8695__auto___10340,description__8694__auto____$1);


var G__10341 = cljs.core.next.call(null,seq__10311_10334__$1);
var G__10342 = null;
var G__10343 = (0);
var G__10344 = (0);
seq__10311_10324 = G__10341;
chunk__10312_10325 = G__10342;
count__10313_10326 = G__10343;
i__10314_10327 = G__10344;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10309_10322);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})()],null)));
var chunk__10300_10319 = null;
var count__10301_10320 = (0);
var i__10302_10321 = (0);
while(true){
if((i__10302_10321 < count__10301_10320)){
var component__8695__auto___10345 = cljs.core._nth.call(null,chunk__10300_10319,i__10302_10321);
speclj.components.install.call(null,component__8695__auto___10345,description__8694__auto___10315);


var G__10346 = seq__10299_10318;
var G__10347 = chunk__10300_10319;
var G__10348 = count__10301_10320;
var G__10349 = (i__10302_10321 + (1));
seq__10299_10318 = G__10346;
chunk__10300_10319 = G__10347;
count__10301_10320 = G__10348;
i__10302_10321 = G__10349;
continue;
} else {
var temp__5753__auto___10350 = cljs.core.seq.call(null,seq__10299_10318);
if(temp__5753__auto___10350){
var seq__10299_10351__$1 = temp__5753__auto___10350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10299_10351__$1)){
var c__5568__auto___10352 = cljs.core.chunk_first.call(null,seq__10299_10351__$1);
var G__10353 = cljs.core.chunk_rest.call(null,seq__10299_10351__$1);
var G__10354 = c__5568__auto___10352;
var G__10355 = cljs.core.count.call(null,c__5568__auto___10352);
var G__10356 = (0);
seq__10299_10318 = G__10353;
chunk__10300_10319 = G__10354;
count__10301_10320 = G__10355;
i__10302_10321 = G__10356;
continue;
} else {
var component__8695__auto___10357 = cljs.core.first.call(null,seq__10299_10351__$1);
speclj.components.install.call(null,component__8695__auto___10357,description__8694__auto___10315);


var G__10358 = cljs.core.next.call(null,seq__10299_10351__$1);
var G__10359 = null;
var G__10360 = (0);
var G__10361 = (0);
seq__10299_10318 = G__10358;
chunk__10300_10319 = G__10359;
count__10301_10320 = G__10360;
i__10302_10321 = G__10361;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10297_10316);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___10315);
}


//# sourceMappingURL=symbols_spec.js.map
