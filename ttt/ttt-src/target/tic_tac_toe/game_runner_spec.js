// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.game_runner_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.game_runner_spec.base_initialized_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__7549__auto___49507 = speclj.components.new_description.call(null,"Game Runner Module",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__49397_49508 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__49398_49509 = description__7549__auto___49507;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__49398_49509);

try{var seq__49399_49510 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"makes new match data",((function (_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__7677__auto__ = tic_tac_toe.game_runner.reset_game.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"gives an end condition string by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__49455_49514 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__49456_49515 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__49456_49515);

try{var seq__49457_49516 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"saying you tied when no winner",((function (_STAR_parent_description_STAR__orig_val__49455_49514,_STAR_parent_description_STAR__temp_val__49456_49515,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto__ = "\nTie!";
var actual__7677__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,null,new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49455_49514,_STAR_parent_description_STAR__temp_val__49456_49515,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"saying who won if there is a winner",((function (_STAR_parent_description_STAR__orig_val__49455_49514,_STAR_parent_description_STAR__temp_val__49456_49515,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto___49520 = "\nAI wins!";
var actual__7677__auto___49521 = tic_tac_toe.game_runner.get_end_condition_string.call(null,(2),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7676__auto___49520,actual__7677__auto___49521)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto___49520 == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto___49520)),speclj.platform.endl,"     got: ",(((actual__7677__auto___49521 == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto___49521))," (using =)"].join('')));
}

var expected__7676__auto__ = "\nPlayer 1 wins!";
var actual__7677__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49455_49514,_STAR_parent_description_STAR__temp_val__49456_49515,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false)],null)));
var chunk__49458_49517 = null;
var count__49459_49518 = (0);
var i__49460_49519 = (0);
while(true){
if((i__49460_49519 < count__49459_49518)){
var component__7550__auto___49522 = cljs.core._nth.call(null,chunk__49458_49517,i__49460_49519);
speclj.components.install.call(null,component__7550__auto___49522,description__7549__auto____$1);


var G__49523 = seq__49457_49516;
var G__49524 = chunk__49458_49517;
var G__49525 = count__49459_49518;
var G__49526 = (i__49460_49519 + (1));
seq__49457_49516 = G__49523;
chunk__49458_49517 = G__49524;
count__49459_49518 = G__49525;
i__49460_49519 = G__49526;
continue;
} else {
var temp__5753__auto___49527 = cljs.core.seq.call(null,seq__49457_49516);
if(temp__5753__auto___49527){
var seq__49457_49528__$1 = temp__5753__auto___49527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49457_49528__$1)){
var c__5568__auto___49529 = cljs.core.chunk_first.call(null,seq__49457_49528__$1);
var G__49530 = cljs.core.chunk_rest.call(null,seq__49457_49528__$1);
var G__49531 = c__5568__auto___49529;
var G__49532 = cljs.core.count.call(null,c__5568__auto___49529);
var G__49533 = (0);
seq__49457_49516 = G__49530;
chunk__49458_49517 = G__49531;
count__49459_49518 = G__49532;
i__49460_49519 = G__49533;
continue;
} else {
var component__7550__auto___49534 = cljs.core.first.call(null,seq__49457_49528__$1);
speclj.components.install.call(null,component__7550__auto___49534,description__7549__auto____$1);


var G__49535 = cljs.core.next.call(null,seq__49457_49528__$1);
var G__49536 = null;
var G__49537 = (0);
var G__49538 = (0);
seq__49457_49516 = G__49535;
chunk__49458_49517 = G__49536;
count__49459_49518 = G__49537;
i__49460_49519 = G__49538;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__49455_49514);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})(),(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"runs the game-loop",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__49461_49539 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__49462_49540 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__49462_49540);

try{var seq__49463_49541 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"until a tie",((function (_STAR_parent_description_STAR__orig_val__49461_49539,_STAR_parent_description_STAR__temp_val__49462_49540,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var round_output_orig_val__49475 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__49476 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__49477 = (function (_){
return null;
});
var play_next_turn_temp_val__49478 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__49477);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__49478);

try{var expected__7676__auto__ = null;
var actual__7677__auto__ = tic_tac_toe.game_runner.game_loop.call(null,tic_tac_toe.game_runner_spec.base_initialized_game);
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__49476);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__49475);
}});})(_STAR_parent_description_STAR__orig_val__49461_49539,_STAR_parent_description_STAR__temp_val__49462_49540,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"until a win",((function (_STAR_parent_description_STAR__orig_val__49461_49539,_STAR_parent_description_STAR__temp_val__49462_49540,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var round_output_orig_val__49479 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__49480 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__49481 = (function (_){
return null;
});
var play_next_turn_temp_val__49482 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__49481);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__49482);

try{var expected__7676__auto__ = (1);
var actual__7677__auto__ = tic_tac_toe.game_runner.game_loop.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__49480);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__49479);
}});})(_STAR_parent_description_STAR__orig_val__49461_49539,_STAR_parent_description_STAR__temp_val__49462_49540,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false)],null)));
var chunk__49464_49542 = null;
var count__49465_49543 = (0);
var i__49466_49544 = (0);
while(true){
if((i__49466_49544 < count__49465_49543)){
var component__7550__auto___49545 = cljs.core._nth.call(null,chunk__49464_49542,i__49466_49544);
speclj.components.install.call(null,component__7550__auto___49545,description__7549__auto____$1);


var G__49546 = seq__49463_49541;
var G__49547 = chunk__49464_49542;
var G__49548 = count__49465_49543;
var G__49549 = (i__49466_49544 + (1));
seq__49463_49541 = G__49546;
chunk__49464_49542 = G__49547;
count__49465_49543 = G__49548;
i__49466_49544 = G__49549;
continue;
} else {
var temp__5753__auto___49550 = cljs.core.seq.call(null,seq__49463_49541);
if(temp__5753__auto___49550){
var seq__49463_49551__$1 = temp__5753__auto___49550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49463_49551__$1)){
var c__5568__auto___49552 = cljs.core.chunk_first.call(null,seq__49463_49551__$1);
var G__49553 = cljs.core.chunk_rest.call(null,seq__49463_49551__$1);
var G__49554 = c__5568__auto___49552;
var G__49555 = cljs.core.count.call(null,c__5568__auto___49552);
var G__49556 = (0);
seq__49463_49541 = G__49553;
chunk__49464_49542 = G__49554;
count__49465_49543 = G__49555;
i__49466_49544 = G__49556;
continue;
} else {
var component__7550__auto___49557 = cljs.core.first.call(null,seq__49463_49551__$1);
speclj.components.install.call(null,component__7550__auto___49557,description__7549__auto____$1);


var G__49558 = cljs.core.next.call(null,seq__49463_49551__$1);
var G__49559 = null;
var G__49560 = (0);
var G__49561 = (0);
seq__49463_49541 = G__49558;
chunk__49464_49542 = G__49559;
count__49465_49543 = G__49560;
i__49466_49544 = G__49561;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__49461_49539);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})(),(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"parses arguments to set the",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__49483_49562 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__49484_49563 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__49484_49563);

try{var seq__49485_49564 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"valid arguments",((function (_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto___49568 = new cljs.core.Keyword(null,"gui","gui",604532813);
var actual__7677__auto___49569 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7676__auto___49568,actual__7677__auto___49569)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto___49568 == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto___49568)),speclj.platform.endl,"     got: ",(((actual__7677__auto___49569 == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto___49569))," (using =)"].join('')));
}

var expected__7676__auto___49570 = new cljs.core.Keyword(null,"archive","archive",1466927419);
var actual__7677__auto___49571 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7676__auto___49570,actual__7677__auto___49571)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto___49570 == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto___49570)),speclj.platform.endl,"     got: ",(((actual__7677__auto___49571 == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto___49571))," (using =)"].join('')));
}

var expected__7676__auto__ = new cljs.core.Keyword(null,"tui","tui",-1217057309);
var actual__7677__auto__ = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--not-a-real-arg"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"valid parameters",((function (_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto___49572 = cljs.core.List.EMPTY;
var actual__7677__auto___49573 = tic_tac_toe.game_runner.get_valid_parameters.call(null,null);
if(cljs.core._EQ_.call(null,expected__7676__auto___49572,actual__7677__auto___49573)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto___49572 == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto___49572)),speclj.platform.endl,"     got: ",(((actual__7677__auto___49573 == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto___49573))," (using =)"].join('')));
}

var expected__7676__auto___49574 = cljs.core.List.EMPTY;
var actual__7677__auto___49575 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7676__auto___49574,actual__7677__auto___49575)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto___49574 == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto___49574)),speclj.platform.endl,"     got: ",(((actual__7677__auto___49575 == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto___49575))," (using =)"].join('')));
}

var expected__7676__auto___49576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7677__auto___49577 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7676__auto___49576,actual__7677__auto___49577)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto___49576 == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto___49576)),speclj.platform.endl,"     got: ",(((actual__7677__auto___49577 == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto___49577))," (using =)"].join('')));
}

var expected__7676__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7677__auto__ = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"ui",((function (_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406));
var actual__7677__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"save-location",((function (_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637));
var actual__7677__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb"], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"archive",((function (_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"archive","archive",1466927419)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7677__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"any arguments",((function (_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var expected__7676__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7677__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb","--gui","--not-real","--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__49483_49562,_STAR_parent_description_STAR__temp_val__49484_49563,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false)],null)));
var chunk__49486_49565 = null;
var count__49487_49566 = (0);
var i__49488_49567 = (0);
while(true){
if((i__49488_49567 < count__49487_49566)){
var component__7550__auto___49578 = cljs.core._nth.call(null,chunk__49486_49565,i__49488_49567);
speclj.components.install.call(null,component__7550__auto___49578,description__7549__auto____$1);


var G__49579 = seq__49485_49564;
var G__49580 = chunk__49486_49565;
var G__49581 = count__49487_49566;
var G__49582 = (i__49488_49567 + (1));
seq__49485_49564 = G__49579;
chunk__49486_49565 = G__49580;
count__49487_49566 = G__49581;
i__49488_49567 = G__49582;
continue;
} else {
var temp__5753__auto___49583 = cljs.core.seq.call(null,seq__49485_49564);
if(temp__5753__auto___49583){
var seq__49485_49584__$1 = temp__5753__auto___49583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49485_49584__$1)){
var c__5568__auto___49585 = cljs.core.chunk_first.call(null,seq__49485_49584__$1);
var G__49586 = cljs.core.chunk_rest.call(null,seq__49485_49584__$1);
var G__49587 = c__5568__auto___49585;
var G__49588 = cljs.core.count.call(null,c__5568__auto___49585);
var G__49589 = (0);
seq__49485_49564 = G__49586;
chunk__49486_49565 = G__49587;
count__49487_49566 = G__49588;
i__49488_49567 = G__49589;
continue;
} else {
var component__7550__auto___49590 = cljs.core.first.call(null,seq__49485_49584__$1);
speclj.components.install.call(null,component__7550__auto___49590,description__7549__auto____$1);


var G__49591 = cljs.core.next.call(null,seq__49485_49584__$1);
var G__49592 = null;
var G__49593 = (0);
var G__49594 = (0);
seq__49485_49564 = G__49591;
chunk__49486_49565 = G__49592;
count__49487_49566 = G__49593;
i__49488_49567 = G__49594;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__49483_49562);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})(),(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"plays a single round by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__49489_49595 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__49490_49596 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__49490_49596);

try{var seq__49491_49597 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Then returns a winner if there is one",((function (_STAR_parent_description_STAR__orig_val__49489_49595,_STAR_parent_description_STAR__temp_val__49490_49596,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var play_next_turn_orig_val__49501 = tic_tac_toe.turn_system.play_next_turn;
var round_output_orig_val__49502 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_temp_val__49503 = (function (_){
return null;
});
var round_output_temp_val__49504 = (function (_){
return null;
});
(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__49503);

(tic_tac_toe.ui_interface.round_output = round_output_temp_val__49504);

try{var expected__7676__auto__ = (1);
var actual__7677__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__49502);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__49501);
}});})(_STAR_parent_description_STAR__orig_val__49489_49595,_STAR_parent_description_STAR__temp_val__49490_49596,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false),speclj.components.new_characteristic.call(null,"Then returns nil if there are no moves left",((function (_STAR_parent_description_STAR__orig_val__49489_49595,_STAR_parent_description_STAR__temp_val__49490_49596,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507){
return (function (){
var round_output_orig_val__49505 = tic_tac_toe.ui_interface.round_output;
var round_output_temp_val__49506 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__49506);

try{var expected__7676__auto__ = null;
var actual__7677__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"round","round",2009433328),(10)));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__49505);
}});})(_STAR_parent_description_STAR__orig_val__49489_49595,_STAR_parent_description_STAR__temp_val__49490_49596,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__49397_49508,_STAR_parent_description_STAR__temp_val__49398_49509,description__7549__auto___49507))
,false)],null)));
var chunk__49492_49598 = null;
var count__49493_49599 = (0);
var i__49494_49600 = (0);
while(true){
if((i__49494_49600 < count__49493_49599)){
var component__7550__auto___49601 = cljs.core._nth.call(null,chunk__49492_49598,i__49494_49600);
speclj.components.install.call(null,component__7550__auto___49601,description__7549__auto____$1);


var G__49602 = seq__49491_49597;
var G__49603 = chunk__49492_49598;
var G__49604 = count__49493_49599;
var G__49605 = (i__49494_49600 + (1));
seq__49491_49597 = G__49602;
chunk__49492_49598 = G__49603;
count__49493_49599 = G__49604;
i__49494_49600 = G__49605;
continue;
} else {
var temp__5753__auto___49606 = cljs.core.seq.call(null,seq__49491_49597);
if(temp__5753__auto___49606){
var seq__49491_49607__$1 = temp__5753__auto___49606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49491_49607__$1)){
var c__5568__auto___49608 = cljs.core.chunk_first.call(null,seq__49491_49607__$1);
var G__49609 = cljs.core.chunk_rest.call(null,seq__49491_49607__$1);
var G__49610 = c__5568__auto___49608;
var G__49611 = cljs.core.count.call(null,c__5568__auto___49608);
var G__49612 = (0);
seq__49491_49597 = G__49609;
chunk__49492_49598 = G__49610;
count__49493_49599 = G__49611;
i__49494_49600 = G__49612;
continue;
} else {
var component__7550__auto___49613 = cljs.core.first.call(null,seq__49491_49607__$1);
speclj.components.install.call(null,component__7550__auto___49613,description__7549__auto____$1);


var G__49614 = cljs.core.next.call(null,seq__49491_49607__$1);
var G__49615 = null;
var G__49616 = (0);
var G__49617 = (0);
seq__49491_49597 = G__49614;
chunk__49492_49598 = G__49615;
count__49493_49599 = G__49616;
i__49494_49600 = G__49617;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__49489_49595);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})()],null)));
var chunk__49400_49511 = null;
var count__49401_49512 = (0);
var i__49402_49513 = (0);
while(true){
if((i__49402_49513 < count__49401_49512)){
var component__7550__auto___49618 = cljs.core._nth.call(null,chunk__49400_49511,i__49402_49513);
speclj.components.install.call(null,component__7550__auto___49618,description__7549__auto___49507);


var G__49619 = seq__49399_49510;
var G__49620 = chunk__49400_49511;
var G__49621 = count__49401_49512;
var G__49622 = (i__49402_49513 + (1));
seq__49399_49510 = G__49619;
chunk__49400_49511 = G__49620;
count__49401_49512 = G__49621;
i__49402_49513 = G__49622;
continue;
} else {
var temp__5753__auto___49623 = cljs.core.seq.call(null,seq__49399_49510);
if(temp__5753__auto___49623){
var seq__49399_49624__$1 = temp__5753__auto___49623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49399_49624__$1)){
var c__5568__auto___49625 = cljs.core.chunk_first.call(null,seq__49399_49624__$1);
var G__49626 = cljs.core.chunk_rest.call(null,seq__49399_49624__$1);
var G__49627 = c__5568__auto___49625;
var G__49628 = cljs.core.count.call(null,c__5568__auto___49625);
var G__49629 = (0);
seq__49399_49510 = G__49626;
chunk__49400_49511 = G__49627;
count__49401_49512 = G__49628;
i__49402_49513 = G__49629;
continue;
} else {
var component__7550__auto___49630 = cljs.core.first.call(null,seq__49399_49624__$1);
speclj.components.install.call(null,component__7550__auto___49630,description__7549__auto___49507);


var G__49631 = cljs.core.next.call(null,seq__49399_49624__$1);
var G__49632 = null;
var G__49633 = (0);
var G__49634 = (0);
seq__49399_49510 = G__49631;
chunk__49400_49511 = G__49632;
count__49401_49512 = G__49633;
i__49402_49513 = G__49634;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__49397_49508);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto___49507);
}


//# sourceMappingURL=game_runner_spec.js.map
