// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.game_runner_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.game_runner_spec.base_initialized_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__8694__auto___11299 = speclj.components.new_description.call(null,"Game Runner Module",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__11189_11300 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11190_11301 = description__8694__auto___11299;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11190_11301);

try{var seq__11191_11302 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"makes new match data",((function (_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8828__auto__ = tic_tac_toe.game_runner.reset_game.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"gives an end condition string by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__11247_11306 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11248_11307 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11248_11307);

try{var seq__11249_11308 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"saying you tied when no winner",((function (_STAR_parent_description_STAR__orig_val__11247_11306,_STAR_parent_description_STAR__temp_val__11248_11307,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto__ = "\nTie!";
var actual__8828__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,null,new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11247_11306,_STAR_parent_description_STAR__temp_val__11248_11307,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"saying who won if there is a winner",((function (_STAR_parent_description_STAR__orig_val__11247_11306,_STAR_parent_description_STAR__temp_val__11248_11307,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto___11312 = "\nAI wins!";
var actual__8828__auto___11313 = tic_tac_toe.game_runner.get_end_condition_string.call(null,(2),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___11312,actual__8828__auto___11313)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11312 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11312)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11313 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11313))," (using =)"].join('')));
}

var expected__8827__auto__ = "\nPlayer 1 wins!";
var actual__8828__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11247_11306,_STAR_parent_description_STAR__temp_val__11248_11307,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false)],null)));
var chunk__11250_11309 = null;
var count__11251_11310 = (0);
var i__11252_11311 = (0);
while(true){
if((i__11252_11311 < count__11251_11310)){
var component__8695__auto___11314 = cljs.core._nth.call(null,chunk__11250_11309,i__11252_11311);
speclj.components.install.call(null,component__8695__auto___11314,description__8694__auto____$1);


var G__11315 = seq__11249_11308;
var G__11316 = chunk__11250_11309;
var G__11317 = count__11251_11310;
var G__11318 = (i__11252_11311 + (1));
seq__11249_11308 = G__11315;
chunk__11250_11309 = G__11316;
count__11251_11310 = G__11317;
i__11252_11311 = G__11318;
continue;
} else {
var temp__5753__auto___11319 = cljs.core.seq.call(null,seq__11249_11308);
if(temp__5753__auto___11319){
var seq__11249_11320__$1 = temp__5753__auto___11319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11249_11320__$1)){
var c__5568__auto___11321 = cljs.core.chunk_first.call(null,seq__11249_11320__$1);
var G__11322 = cljs.core.chunk_rest.call(null,seq__11249_11320__$1);
var G__11323 = c__5568__auto___11321;
var G__11324 = cljs.core.count.call(null,c__5568__auto___11321);
var G__11325 = (0);
seq__11249_11308 = G__11322;
chunk__11250_11309 = G__11323;
count__11251_11310 = G__11324;
i__11252_11311 = G__11325;
continue;
} else {
var component__8695__auto___11326 = cljs.core.first.call(null,seq__11249_11320__$1);
speclj.components.install.call(null,component__8695__auto___11326,description__8694__auto____$1);


var G__11327 = cljs.core.next.call(null,seq__11249_11320__$1);
var G__11328 = null;
var G__11329 = (0);
var G__11330 = (0);
seq__11249_11308 = G__11327;
chunk__11250_11309 = G__11328;
count__11251_11310 = G__11329;
i__11252_11311 = G__11330;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11247_11306);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"runs the game-loop",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__11253_11331 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11254_11332 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11254_11332);

try{var seq__11255_11333 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"until a tie",((function (_STAR_parent_description_STAR__orig_val__11253_11331,_STAR_parent_description_STAR__temp_val__11254_11332,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var round_output_orig_val__11267 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__11268 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__11269 = (function (_){
return null;
});
var play_next_turn_temp_val__11270 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__11269);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__11270);

try{var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.game_runner.game_loop.call(null,tic_tac_toe.game_runner_spec.base_initialized_game);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__11268);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__11267);
}});})(_STAR_parent_description_STAR__orig_val__11253_11331,_STAR_parent_description_STAR__temp_val__11254_11332,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"until a win",((function (_STAR_parent_description_STAR__orig_val__11253_11331,_STAR_parent_description_STAR__temp_val__11254_11332,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var round_output_orig_val__11271 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__11272 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__11273 = (function (_){
return null;
});
var play_next_turn_temp_val__11274 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__11273);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__11274);

try{var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.game_runner.game_loop.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__11272);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__11271);
}});})(_STAR_parent_description_STAR__orig_val__11253_11331,_STAR_parent_description_STAR__temp_val__11254_11332,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false)],null)));
var chunk__11256_11334 = null;
var count__11257_11335 = (0);
var i__11258_11336 = (0);
while(true){
if((i__11258_11336 < count__11257_11335)){
var component__8695__auto___11337 = cljs.core._nth.call(null,chunk__11256_11334,i__11258_11336);
speclj.components.install.call(null,component__8695__auto___11337,description__8694__auto____$1);


var G__11338 = seq__11255_11333;
var G__11339 = chunk__11256_11334;
var G__11340 = count__11257_11335;
var G__11341 = (i__11258_11336 + (1));
seq__11255_11333 = G__11338;
chunk__11256_11334 = G__11339;
count__11257_11335 = G__11340;
i__11258_11336 = G__11341;
continue;
} else {
var temp__5753__auto___11342 = cljs.core.seq.call(null,seq__11255_11333);
if(temp__5753__auto___11342){
var seq__11255_11343__$1 = temp__5753__auto___11342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11255_11343__$1)){
var c__5568__auto___11344 = cljs.core.chunk_first.call(null,seq__11255_11343__$1);
var G__11345 = cljs.core.chunk_rest.call(null,seq__11255_11343__$1);
var G__11346 = c__5568__auto___11344;
var G__11347 = cljs.core.count.call(null,c__5568__auto___11344);
var G__11348 = (0);
seq__11255_11333 = G__11345;
chunk__11256_11334 = G__11346;
count__11257_11335 = G__11347;
i__11258_11336 = G__11348;
continue;
} else {
var component__8695__auto___11349 = cljs.core.first.call(null,seq__11255_11343__$1);
speclj.components.install.call(null,component__8695__auto___11349,description__8694__auto____$1);


var G__11350 = cljs.core.next.call(null,seq__11255_11343__$1);
var G__11351 = null;
var G__11352 = (0);
var G__11353 = (0);
seq__11255_11333 = G__11350;
chunk__11256_11334 = G__11351;
count__11257_11335 = G__11352;
i__11258_11336 = G__11353;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11253_11331);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"parses arguments to set the",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__11275_11354 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11276_11355 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11276_11355);

try{var seq__11277_11356 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"valid arguments",((function (_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto___11360 = new cljs.core.Keyword(null,"gui","gui",604532813);
var actual__8828__auto___11361 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__8827__auto___11360,actual__8828__auto___11361)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11360 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11360)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11361 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11361))," (using =)"].join('')));
}

var expected__8827__auto___11362 = new cljs.core.Keyword(null,"archive","archive",1466927419);
var actual__8828__auto___11363 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__8827__auto___11362,actual__8828__auto___11363)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11362 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11362)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11363 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11363))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.Keyword(null,"tui","tui",-1217057309);
var actual__8828__auto__ = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--not-a-real-arg"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"valid parameters",((function (_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto___11364 = cljs.core.List.EMPTY;
var actual__8828__auto___11365 = tic_tac_toe.game_runner.get_valid_parameters.call(null,null);
if(cljs.core._EQ_.call(null,expected__8827__auto___11364,actual__8828__auto___11365)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11364 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11364)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11365 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11365))," (using =)"].join('')));
}

var expected__8827__auto___11366 = cljs.core.List.EMPTY;
var actual__8828__auto___11367 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___11366,actual__8828__auto___11367)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11366 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11366)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11367 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11367))," (using =)"].join('')));
}

var expected__8827__auto___11368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__8828__auto___11369 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___11368,actual__8828__auto___11369)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11368 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11368)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11369 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11369))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__8828__auto__ = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"ui",((function (_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406));
var actual__8828__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"save-location",((function (_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637));
var actual__8828__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb"], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"archive",((function (_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"archive","archive",1466927419)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__8828__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"any arguments",((function (_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var expected__8827__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__8828__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb","--gui","--not-real","--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11275_11354,_STAR_parent_description_STAR__temp_val__11276_11355,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false)],null)));
var chunk__11278_11357 = null;
var count__11279_11358 = (0);
var i__11280_11359 = (0);
while(true){
if((i__11280_11359 < count__11279_11358)){
var component__8695__auto___11370 = cljs.core._nth.call(null,chunk__11278_11357,i__11280_11359);
speclj.components.install.call(null,component__8695__auto___11370,description__8694__auto____$1);


var G__11371 = seq__11277_11356;
var G__11372 = chunk__11278_11357;
var G__11373 = count__11279_11358;
var G__11374 = (i__11280_11359 + (1));
seq__11277_11356 = G__11371;
chunk__11278_11357 = G__11372;
count__11279_11358 = G__11373;
i__11280_11359 = G__11374;
continue;
} else {
var temp__5753__auto___11375 = cljs.core.seq.call(null,seq__11277_11356);
if(temp__5753__auto___11375){
var seq__11277_11376__$1 = temp__5753__auto___11375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11277_11376__$1)){
var c__5568__auto___11377 = cljs.core.chunk_first.call(null,seq__11277_11376__$1);
var G__11378 = cljs.core.chunk_rest.call(null,seq__11277_11376__$1);
var G__11379 = c__5568__auto___11377;
var G__11380 = cljs.core.count.call(null,c__5568__auto___11377);
var G__11381 = (0);
seq__11277_11356 = G__11378;
chunk__11278_11357 = G__11379;
count__11279_11358 = G__11380;
i__11280_11359 = G__11381;
continue;
} else {
var component__8695__auto___11382 = cljs.core.first.call(null,seq__11277_11376__$1);
speclj.components.install.call(null,component__8695__auto___11382,description__8694__auto____$1);


var G__11383 = cljs.core.next.call(null,seq__11277_11376__$1);
var G__11384 = null;
var G__11385 = (0);
var G__11386 = (0);
seq__11277_11356 = G__11383;
chunk__11278_11357 = G__11384;
count__11279_11358 = G__11385;
i__11280_11359 = G__11386;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11275_11354);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"plays a single round by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__11281_11387 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11282_11388 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11282_11388);

try{var seq__11283_11389 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Then returns a winner if there is one",((function (_STAR_parent_description_STAR__orig_val__11281_11387,_STAR_parent_description_STAR__temp_val__11282_11388,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var play_next_turn_orig_val__11293 = tic_tac_toe.turn_system.play_next_turn;
var round_output_orig_val__11294 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_temp_val__11295 = (function (_){
return null;
});
var round_output_temp_val__11296 = (function (_){
return null;
});
(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__11295);

(tic_tac_toe.ui_interface.round_output = round_output_temp_val__11296);

try{var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__11294);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__11293);
}});})(_STAR_parent_description_STAR__orig_val__11281_11387,_STAR_parent_description_STAR__temp_val__11282_11388,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false),speclj.components.new_characteristic.call(null,"Then returns nil if there are no moves left",((function (_STAR_parent_description_STAR__orig_val__11281_11387,_STAR_parent_description_STAR__temp_val__11282_11388,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299){
return (function (){
var round_output_orig_val__11297 = tic_tac_toe.ui_interface.round_output;
var round_output_temp_val__11298 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__11298);

try{var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"round","round",2009433328),(10)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__11297);
}});})(_STAR_parent_description_STAR__orig_val__11281_11387,_STAR_parent_description_STAR__temp_val__11282_11388,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__11189_11300,_STAR_parent_description_STAR__temp_val__11190_11301,description__8694__auto___11299))
,false)],null)));
var chunk__11284_11390 = null;
var count__11285_11391 = (0);
var i__11286_11392 = (0);
while(true){
if((i__11286_11392 < count__11285_11391)){
var component__8695__auto___11393 = cljs.core._nth.call(null,chunk__11284_11390,i__11286_11392);
speclj.components.install.call(null,component__8695__auto___11393,description__8694__auto____$1);


var G__11394 = seq__11283_11389;
var G__11395 = chunk__11284_11390;
var G__11396 = count__11285_11391;
var G__11397 = (i__11286_11392 + (1));
seq__11283_11389 = G__11394;
chunk__11284_11390 = G__11395;
count__11285_11391 = G__11396;
i__11286_11392 = G__11397;
continue;
} else {
var temp__5753__auto___11398 = cljs.core.seq.call(null,seq__11283_11389);
if(temp__5753__auto___11398){
var seq__11283_11399__$1 = temp__5753__auto___11398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11283_11399__$1)){
var c__5568__auto___11400 = cljs.core.chunk_first.call(null,seq__11283_11399__$1);
var G__11401 = cljs.core.chunk_rest.call(null,seq__11283_11399__$1);
var G__11402 = c__5568__auto___11400;
var G__11403 = cljs.core.count.call(null,c__5568__auto___11400);
var G__11404 = (0);
seq__11283_11389 = G__11401;
chunk__11284_11390 = G__11402;
count__11285_11391 = G__11403;
i__11286_11392 = G__11404;
continue;
} else {
var component__8695__auto___11405 = cljs.core.first.call(null,seq__11283_11399__$1);
speclj.components.install.call(null,component__8695__auto___11405,description__8694__auto____$1);


var G__11406 = cljs.core.next.call(null,seq__11283_11399__$1);
var G__11407 = null;
var G__11408 = (0);
var G__11409 = (0);
seq__11283_11389 = G__11406;
chunk__11284_11390 = G__11407;
count__11285_11391 = G__11408;
i__11286_11392 = G__11409;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11281_11387);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})()],null)));
var chunk__11192_11303 = null;
var count__11193_11304 = (0);
var i__11194_11305 = (0);
while(true){
if((i__11194_11305 < count__11193_11304)){
var component__8695__auto___11410 = cljs.core._nth.call(null,chunk__11192_11303,i__11194_11305);
speclj.components.install.call(null,component__8695__auto___11410,description__8694__auto___11299);


var G__11411 = seq__11191_11302;
var G__11412 = chunk__11192_11303;
var G__11413 = count__11193_11304;
var G__11414 = (i__11194_11305 + (1));
seq__11191_11302 = G__11411;
chunk__11192_11303 = G__11412;
count__11193_11304 = G__11413;
i__11194_11305 = G__11414;
continue;
} else {
var temp__5753__auto___11415 = cljs.core.seq.call(null,seq__11191_11302);
if(temp__5753__auto___11415){
var seq__11191_11416__$1 = temp__5753__auto___11415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11191_11416__$1)){
var c__5568__auto___11417 = cljs.core.chunk_first.call(null,seq__11191_11416__$1);
var G__11418 = cljs.core.chunk_rest.call(null,seq__11191_11416__$1);
var G__11419 = c__5568__auto___11417;
var G__11420 = cljs.core.count.call(null,c__5568__auto___11417);
var G__11421 = (0);
seq__11191_11302 = G__11418;
chunk__11192_11303 = G__11419;
count__11193_11304 = G__11420;
i__11194_11305 = G__11421;
continue;
} else {
var component__8695__auto___11422 = cljs.core.first.call(null,seq__11191_11416__$1);
speclj.components.install.call(null,component__8695__auto___11422,description__8694__auto___11299);


var G__11423 = cljs.core.next.call(null,seq__11191_11416__$1);
var G__11424 = null;
var G__11425 = (0);
var G__11426 = (0);
seq__11191_11302 = G__11423;
chunk__11192_11303 = G__11424;
count__11193_11304 = G__11425;
i__11194_11305 = G__11426;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11189_11300);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___11299);
}


//# sourceMappingURL=game_runner_spec.js.map
