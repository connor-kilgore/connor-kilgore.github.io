// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.ai_player_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.ai_player');
goog.require('speclj.core');
var description__9666__auto___10366 = speclj.components.new_description.call(null,"AI Player",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__10288_10367 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10289_10368 = description__9666__auto___10366;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10289_10368);

try{var seq__10290_10369 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"Makes all possible moves on a given board",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__10330_10373 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10331_10374 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10331_10374);

try{var seq__10332_10375 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns empty vec if no plays left",((function (_STAR_parent_description_STAR__orig_val__10330_10373,_STAR_parent_description_STAR__temp_val__10331_10374,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var actual__9794__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10330_10373,_STAR_parent_description_STAR__temp_val__10331_10374,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"1 board with position played if 1 play left",((function (_STAR_parent_description_STAR__orig_val__10330_10373,_STAR_parent_description_STAR__temp_val__10331_10374,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = new cljs.core.PersistentArrayMap(null, 1, [(6),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(2),(1),(1)], null)], null);
var actual__9794__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(0),(1),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10330_10373,_STAR_parent_description_STAR__temp_val__10331_10374,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"a series of possible plays if more than 1 play left",((function (_STAR_parent_description_STAR__orig_val__10330_10373,_STAR_parent_description_STAR__temp_val__10331_10374,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(5),(8)],[new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)]);
var actual__9794__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10330_10373,_STAR_parent_description_STAR__temp_val__10331_10374,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false)],null)));
var chunk__10333_10376 = null;
var count__10334_10377 = (0);
var i__10335_10378 = (0);
while(true){
if((i__10335_10378 < count__10334_10377)){
var component__9667__auto___10379 = cljs.core._nth.call(null,chunk__10333_10376,i__10335_10378);
speclj.components.install.call(null,component__9667__auto___10379,description__9666__auto____$1);


var G__10380 = seq__10332_10375;
var G__10381 = chunk__10333_10376;
var G__10382 = count__10334_10377;
var G__10383 = (i__10335_10378 + (1));
seq__10332_10375 = G__10380;
chunk__10333_10376 = G__10381;
count__10334_10377 = G__10382;
i__10335_10378 = G__10383;
continue;
} else {
var temp__5753__auto___10384 = cljs.core.seq.call(null,seq__10332_10375);
if(temp__5753__auto___10384){
var seq__10332_10385__$1 = temp__5753__auto___10384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10332_10385__$1)){
var c__5568__auto___10386 = cljs.core.chunk_first.call(null,seq__10332_10385__$1);
var G__10387 = cljs.core.chunk_rest.call(null,seq__10332_10385__$1);
var G__10388 = c__5568__auto___10386;
var G__10389 = cljs.core.count.call(null,c__5568__auto___10386);
var G__10390 = (0);
seq__10332_10375 = G__10387;
chunk__10333_10376 = G__10388;
count__10334_10377 = G__10389;
i__10335_10378 = G__10390;
continue;
} else {
var component__9667__auto___10391 = cljs.core.first.call(null,seq__10332_10385__$1);
speclj.components.install.call(null,component__9667__auto___10391,description__9666__auto____$1);


var G__10392 = cljs.core.next.call(null,seq__10332_10385__$1);
var G__10393 = null;
var G__10394 = (0);
var G__10395 = (0);
seq__10332_10375 = G__10392;
chunk__10333_10376 = G__10393;
count__10334_10377 = G__10394;
i__10335_10378 = G__10395;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10330_10373);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"gets score of end condition",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__10336_10396 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10337_10397 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10337_10397);

try{var seq__10338_10398 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 0 if a tie",((function (_STAR_parent_description_STAR__orig_val__10336_10396,_STAR_parent_description_STAR__temp_val__10337_10397,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = (0);
var actual__9794__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(1),(1),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10336_10396,_STAR_parent_description_STAR__temp_val__10337_10397,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"returns 1 if ai wins at depth 9",((function (_STAR_parent_description_STAR__orig_val__10336_10396,_STAR_parent_description_STAR__temp_val__10337_10397,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10336_10396,_STAR_parent_description_STAR__temp_val__10337_10397,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"returns -1 if ai loses at depth 9",((function (_STAR_parent_description_STAR__orig_val__10336_10396,_STAR_parent_description_STAR__temp_val__10337_10397,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = (-1);
var actual__9794__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10336_10396,_STAR_parent_description_STAR__temp_val__10337_10397,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false)],null)));
var chunk__10339_10399 = null;
var count__10340_10400 = (0);
var i__10341_10401 = (0);
while(true){
if((i__10341_10401 < count__10340_10400)){
var component__9667__auto___10402 = cljs.core._nth.call(null,chunk__10339_10399,i__10341_10401);
speclj.components.install.call(null,component__9667__auto___10402,description__9666__auto____$1);


var G__10403 = seq__10338_10398;
var G__10404 = chunk__10339_10399;
var G__10405 = count__10340_10400;
var G__10406 = (i__10341_10401 + (1));
seq__10338_10398 = G__10403;
chunk__10339_10399 = G__10404;
count__10340_10400 = G__10405;
i__10341_10401 = G__10406;
continue;
} else {
var temp__5753__auto___10407 = cljs.core.seq.call(null,seq__10338_10398);
if(temp__5753__auto___10407){
var seq__10338_10408__$1 = temp__5753__auto___10407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10338_10408__$1)){
var c__5568__auto___10409 = cljs.core.chunk_first.call(null,seq__10338_10408__$1);
var G__10410 = cljs.core.chunk_rest.call(null,seq__10338_10408__$1);
var G__10411 = c__5568__auto___10409;
var G__10412 = cljs.core.count.call(null,c__5568__auto___10409);
var G__10413 = (0);
seq__10338_10398 = G__10410;
chunk__10339_10399 = G__10411;
count__10340_10400 = G__10412;
i__10341_10401 = G__10413;
continue;
} else {
var component__9667__auto___10414 = cljs.core.first.call(null,seq__10338_10408__$1);
speclj.components.install.call(null,component__9667__auto___10414,description__9666__auto____$1);


var G__10415 = cljs.core.next.call(null,seq__10338_10408__$1);
var G__10416 = null;
var G__10417 = (0);
var G__10418 = (0);
seq__10338_10398 = G__10415;
chunk__10339_10399 = G__10416;
count__10340_10400 = G__10417;
i__10341_10401 = G__10418;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10336_10396);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"checks if it's currently the ai's turn or not",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__10342_10419 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10343_10420 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10343_10420);

try{var seq__10344_10421 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if depth is not even",((function (_STAR_parent_description_STAR__orig_val__10342_10419,_STAR_parent_description_STAR__temp_val__10343_10420,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var value__9781__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(0));
if((!(value__9781__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9781__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9781__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10342_10419,_STAR_parent_description_STAR__temp_val__10343_10420,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"returns true if depth is even",((function (_STAR_parent_description_STAR__orig_val__10342_10419,_STAR_parent_description_STAR__temp_val__10343_10420,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var value__9787__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(1));
if(value__9787__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9787__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9787__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10342_10419,_STAR_parent_description_STAR__temp_val__10343_10420,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false)],null)));
var chunk__10345_10422 = null;
var count__10346_10423 = (0);
var i__10347_10424 = (0);
while(true){
if((i__10347_10424 < count__10346_10423)){
var component__9667__auto___10425 = cljs.core._nth.call(null,chunk__10345_10422,i__10347_10424);
speclj.components.install.call(null,component__9667__auto___10425,description__9666__auto____$1);


var G__10426 = seq__10344_10421;
var G__10427 = chunk__10345_10422;
var G__10428 = count__10346_10423;
var G__10429 = (i__10347_10424 + (1));
seq__10344_10421 = G__10426;
chunk__10345_10422 = G__10427;
count__10346_10423 = G__10428;
i__10347_10424 = G__10429;
continue;
} else {
var temp__5753__auto___10430 = cljs.core.seq.call(null,seq__10344_10421);
if(temp__5753__auto___10430){
var seq__10344_10431__$1 = temp__5753__auto___10430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10344_10431__$1)){
var c__5568__auto___10432 = cljs.core.chunk_first.call(null,seq__10344_10431__$1);
var G__10433 = cljs.core.chunk_rest.call(null,seq__10344_10431__$1);
var G__10434 = c__5568__auto___10432;
var G__10435 = cljs.core.count.call(null,c__5568__auto___10432);
var G__10436 = (0);
seq__10344_10421 = G__10433;
chunk__10345_10422 = G__10434;
count__10346_10423 = G__10435;
i__10347_10424 = G__10436;
continue;
} else {
var component__9667__auto___10437 = cljs.core.first.call(null,seq__10344_10431__$1);
speclj.components.install.call(null,component__9667__auto___10437,description__9666__auto____$1);


var G__10438 = cljs.core.next.call(null,seq__10344_10431__$1);
var G__10439 = null;
var G__10440 = (0);
var G__10441 = (0);
seq__10344_10421 = G__10438;
chunk__10345_10422 = G__10439;
count__10346_10423 = G__10440;
i__10347_10424 = G__10441;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10342_10419);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"gives the right symbol depending on the context of\n                 the ai's symbol and the depth",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__10348_10442 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10349_10443 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10349_10443);

try{var seq__10350_10444 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 1 if ai symbol is 1 on first move",((function (_STAR_parent_description_STAR__orig_val__10348_10442,_STAR_parent_description_STAR__temp_val__10349_10443,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(0),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10348_10442,_STAR_parent_description_STAR__temp_val__10349_10443,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"returns 2 if ai symbol is 1 on the second move",((function (_STAR_parent_description_STAR__orig_val__10348_10442,_STAR_parent_description_STAR__temp_val__10349_10443,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = (2);
var actual__9794__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(1),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10348_10442,_STAR_parent_description_STAR__temp_val__10349_10443,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false)],null)));
var chunk__10351_10445 = null;
var count__10352_10446 = (0);
var i__10353_10447 = (0);
while(true){
if((i__10353_10447 < count__10352_10446)){
var component__9667__auto___10448 = cljs.core._nth.call(null,chunk__10351_10445,i__10353_10447);
speclj.components.install.call(null,component__9667__auto___10448,description__9666__auto____$1);


var G__10449 = seq__10350_10444;
var G__10450 = chunk__10351_10445;
var G__10451 = count__10352_10446;
var G__10452 = (i__10353_10447 + (1));
seq__10350_10444 = G__10449;
chunk__10351_10445 = G__10450;
count__10352_10446 = G__10451;
i__10353_10447 = G__10452;
continue;
} else {
var temp__5753__auto___10453 = cljs.core.seq.call(null,seq__10350_10444);
if(temp__5753__auto___10453){
var seq__10350_10454__$1 = temp__5753__auto___10453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10350_10454__$1)){
var c__5568__auto___10455 = cljs.core.chunk_first.call(null,seq__10350_10454__$1);
var G__10456 = cljs.core.chunk_rest.call(null,seq__10350_10454__$1);
var G__10457 = c__5568__auto___10455;
var G__10458 = cljs.core.count.call(null,c__5568__auto___10455);
var G__10459 = (0);
seq__10350_10444 = G__10456;
chunk__10351_10445 = G__10457;
count__10352_10446 = G__10458;
i__10353_10447 = G__10459;
continue;
} else {
var component__9667__auto___10460 = cljs.core.first.call(null,seq__10350_10454__$1);
speclj.components.install.call(null,component__9667__auto___10460,description__9666__auto____$1);


var G__10461 = cljs.core.next.call(null,seq__10350_10454__$1);
var G__10462 = null;
var G__10463 = (0);
var G__10464 = (0);
seq__10350_10444 = G__10461;
chunk__10351_10445 = G__10462;
count__10352_10446 = G__10463;
i__10353_10447 = G__10464;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10348_10442);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"makes the best possible move based on an algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__10354_10465 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10355_10466 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10355_10466);

try{var seq__10356_10467 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"moves to any space when absolute depth is below 5",((function (_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto___10471 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9794__auto___10472 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto___10471,actual__9794__auto___10472)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10471 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10471)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10472 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10472))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(2),(0),(0),(0),(0)], null);
var actual__9794__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"actively blocks player movement until tie or ai wins",((function (_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto___10473 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(2),(2),(1),(1)], null);
var actual__9794__auto___10474 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto___10473,actual__9794__auto___10474)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10473 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10473)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10474 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10474))," (using =)"].join('')));
}

var expected__9793__auto___10475 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(0)], null);
var actual__9794__auto___10476 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto___10475,actual__9794__auto___10476)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10475 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10475)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10476 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10476))," (using =)"].join('')));
}

var expected__9793__auto___10477 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(2),(1)], null);
var actual__9794__auto___10478 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto___10477,actual__9794__auto___10478)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10477 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10477)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10478 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10478))," (using =)"].join('')));
}

var expected__9793__auto___10479 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(0),(0),(1),(0)], null);
var actual__9794__auto___10480 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto___10479,actual__9794__auto___10480)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10479 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10479)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10480 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10480))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(2)], null);
var actual__9794__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"works for 4x4 too",((function (_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null);
var actual__9794__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"and 3x3x3",((function (_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__9794__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10354_10465,_STAR_parent_description_STAR__temp_val__10355_10466,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false)],null)));
var chunk__10357_10468 = null;
var count__10358_10469 = (0);
var i__10359_10470 = (0);
while(true){
if((i__10359_10470 < count__10358_10469)){
var component__9667__auto___10481 = cljs.core._nth.call(null,chunk__10357_10468,i__10359_10470);
speclj.components.install.call(null,component__9667__auto___10481,description__9666__auto____$1);


var G__10482 = seq__10356_10467;
var G__10483 = chunk__10357_10468;
var G__10484 = count__10358_10469;
var G__10485 = (i__10359_10470 + (1));
seq__10356_10467 = G__10482;
chunk__10357_10468 = G__10483;
count__10358_10469 = G__10484;
i__10359_10470 = G__10485;
continue;
} else {
var temp__5753__auto___10486 = cljs.core.seq.call(null,seq__10356_10467);
if(temp__5753__auto___10486){
var seq__10356_10487__$1 = temp__5753__auto___10486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10356_10487__$1)){
var c__5568__auto___10488 = cljs.core.chunk_first.call(null,seq__10356_10487__$1);
var G__10489 = cljs.core.chunk_rest.call(null,seq__10356_10487__$1);
var G__10490 = c__5568__auto___10488;
var G__10491 = cljs.core.count.call(null,c__5568__auto___10488);
var G__10492 = (0);
seq__10356_10467 = G__10489;
chunk__10357_10468 = G__10490;
count__10358_10469 = G__10491;
i__10359_10470 = G__10492;
continue;
} else {
var component__9667__auto___10493 = cljs.core.first.call(null,seq__10356_10487__$1);
speclj.components.install.call(null,component__9667__auto___10493,description__9666__auto____$1);


var G__10494 = cljs.core.next.call(null,seq__10356_10487__$1);
var G__10495 = null;
var G__10496 = (0);
var G__10497 = (0);
seq__10356_10467 = G__10494;
chunk__10357_10468 = G__10495;
count__10358_10469 = G__10496;
i__10359_10470 = G__10497;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10354_10465);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"gives the best best score for the algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__10360_10498 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10361_10499 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10361_10499);

try{var seq__10362_10500 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the biggest score if it's the ai's turn",((function (_STAR_parent_description_STAR__orig_val__10360_10498,_STAR_parent_description_STAR__temp_val__10361_10499,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto___10504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__9794__auto___10505 = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10504,actual__9794__auto___10505)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10504 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10504)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10505 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10505))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__9794__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10360_10498,_STAR_parent_description_STAR__temp_val__10361_10499,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false),speclj.components.new_characteristic.call(null,"the smallest score if not the ai's turn",((function (_STAR_parent_description_STAR__orig_val__10360_10498,_STAR_parent_description_STAR__temp_val__10361_10499,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366){
return (function (){
var expected__9793__auto___10506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__9794__auto___10507 = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10506,actual__9794__auto___10507)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10506 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10506)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10507 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10507))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__9794__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10360_10498,_STAR_parent_description_STAR__temp_val__10361_10499,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10288_10367,_STAR_parent_description_STAR__temp_val__10289_10368,description__9666__auto___10366))
,false)],null)));
var chunk__10363_10501 = null;
var count__10364_10502 = (0);
var i__10365_10503 = (0);
while(true){
if((i__10365_10503 < count__10364_10502)){
var component__9667__auto___10508 = cljs.core._nth.call(null,chunk__10363_10501,i__10365_10503);
speclj.components.install.call(null,component__9667__auto___10508,description__9666__auto____$1);


var G__10509 = seq__10362_10500;
var G__10510 = chunk__10363_10501;
var G__10511 = count__10364_10502;
var G__10512 = (i__10365_10503 + (1));
seq__10362_10500 = G__10509;
chunk__10363_10501 = G__10510;
count__10364_10502 = G__10511;
i__10365_10503 = G__10512;
continue;
} else {
var temp__5753__auto___10513 = cljs.core.seq.call(null,seq__10362_10500);
if(temp__5753__auto___10513){
var seq__10362_10514__$1 = temp__5753__auto___10513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10362_10514__$1)){
var c__5568__auto___10515 = cljs.core.chunk_first.call(null,seq__10362_10514__$1);
var G__10516 = cljs.core.chunk_rest.call(null,seq__10362_10514__$1);
var G__10517 = c__5568__auto___10515;
var G__10518 = cljs.core.count.call(null,c__5568__auto___10515);
var G__10519 = (0);
seq__10362_10500 = G__10516;
chunk__10363_10501 = G__10517;
count__10364_10502 = G__10518;
i__10365_10503 = G__10519;
continue;
} else {
var component__9667__auto___10520 = cljs.core.first.call(null,seq__10362_10514__$1);
speclj.components.install.call(null,component__9667__auto___10520,description__9666__auto____$1);


var G__10521 = cljs.core.next.call(null,seq__10362_10514__$1);
var G__10522 = null;
var G__10523 = (0);
var G__10524 = (0);
seq__10362_10500 = G__10521;
chunk__10363_10501 = G__10522;
count__10364_10502 = G__10523;
i__10365_10503 = G__10524;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10360_10498);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})()],null)));
var chunk__10291_10370 = null;
var count__10292_10371 = (0);
var i__10293_10372 = (0);
while(true){
if((i__10293_10372 < count__10292_10371)){
var component__9667__auto___10525 = cljs.core._nth.call(null,chunk__10291_10370,i__10293_10372);
speclj.components.install.call(null,component__9667__auto___10525,description__9666__auto___10366);


var G__10526 = seq__10290_10369;
var G__10527 = chunk__10291_10370;
var G__10528 = count__10292_10371;
var G__10529 = (i__10293_10372 + (1));
seq__10290_10369 = G__10526;
chunk__10291_10370 = G__10527;
count__10292_10371 = G__10528;
i__10293_10372 = G__10529;
continue;
} else {
var temp__5753__auto___10530 = cljs.core.seq.call(null,seq__10290_10369);
if(temp__5753__auto___10530){
var seq__10290_10531__$1 = temp__5753__auto___10530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10290_10531__$1)){
var c__5568__auto___10532 = cljs.core.chunk_first.call(null,seq__10290_10531__$1);
var G__10533 = cljs.core.chunk_rest.call(null,seq__10290_10531__$1);
var G__10534 = c__5568__auto___10532;
var G__10535 = cljs.core.count.call(null,c__5568__auto___10532);
var G__10536 = (0);
seq__10290_10369 = G__10533;
chunk__10291_10370 = G__10534;
count__10292_10371 = G__10535;
i__10293_10372 = G__10536;
continue;
} else {
var component__9667__auto___10537 = cljs.core.first.call(null,seq__10290_10531__$1);
speclj.components.install.call(null,component__9667__auto___10537,description__9666__auto___10366);


var G__10538 = cljs.core.next.call(null,seq__10290_10531__$1);
var G__10539 = null;
var G__10540 = (0);
var G__10541 = (0);
seq__10290_10369 = G__10538;
chunk__10291_10370 = G__10539;
count__10292_10371 = G__10540;
i__10293_10372 = G__10541;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10288_10367);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto___10366);
}


//# sourceMappingURL=ai_player_spec.js.map
