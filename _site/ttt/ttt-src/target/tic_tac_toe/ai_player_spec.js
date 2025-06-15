// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.ai_player_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.ai_player');
goog.require('speclj.core');
var description__8694__auto___9400 = speclj.components.new_description.call(null,"AI Player",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9322_9401 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9323_9402 = description__8694__auto___9400;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9323_9402);

try{var seq__9324_9403 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"Makes all possible moves on a given board",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9364_9407 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9365_9408 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9365_9408);

try{var seq__9366_9409 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns empty vec if no plays left",((function (_STAR_parent_description_STAR__orig_val__9364_9407,_STAR_parent_description_STAR__temp_val__9365_9408,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var actual__8828__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9364_9407,_STAR_parent_description_STAR__temp_val__9365_9408,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"1 board with position played if 1 play left",((function (_STAR_parent_description_STAR__orig_val__9364_9407,_STAR_parent_description_STAR__temp_val__9365_9408,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = new cljs.core.PersistentArrayMap(null, 1, [(6),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(2),(1),(1)], null)], null);
var actual__8828__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(0),(1),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9364_9407,_STAR_parent_description_STAR__temp_val__9365_9408,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"a series of possible plays if more than 1 play left",((function (_STAR_parent_description_STAR__orig_val__9364_9407,_STAR_parent_description_STAR__temp_val__9365_9408,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(5),(8)],[new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)]);
var actual__8828__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9364_9407,_STAR_parent_description_STAR__temp_val__9365_9408,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false)],null)));
var chunk__9367_9410 = null;
var count__9368_9411 = (0);
var i__9369_9412 = (0);
while(true){
if((i__9369_9412 < count__9368_9411)){
var component__8695__auto___9413 = cljs.core._nth.call(null,chunk__9367_9410,i__9369_9412);
speclj.components.install.call(null,component__8695__auto___9413,description__8694__auto____$1);


var G__9414 = seq__9366_9409;
var G__9415 = chunk__9367_9410;
var G__9416 = count__9368_9411;
var G__9417 = (i__9369_9412 + (1));
seq__9366_9409 = G__9414;
chunk__9367_9410 = G__9415;
count__9368_9411 = G__9416;
i__9369_9412 = G__9417;
continue;
} else {
var temp__5753__auto___9418 = cljs.core.seq.call(null,seq__9366_9409);
if(temp__5753__auto___9418){
var seq__9366_9419__$1 = temp__5753__auto___9418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9366_9419__$1)){
var c__5568__auto___9420 = cljs.core.chunk_first.call(null,seq__9366_9419__$1);
var G__9421 = cljs.core.chunk_rest.call(null,seq__9366_9419__$1);
var G__9422 = c__5568__auto___9420;
var G__9423 = cljs.core.count.call(null,c__5568__auto___9420);
var G__9424 = (0);
seq__9366_9409 = G__9421;
chunk__9367_9410 = G__9422;
count__9368_9411 = G__9423;
i__9369_9412 = G__9424;
continue;
} else {
var component__8695__auto___9425 = cljs.core.first.call(null,seq__9366_9419__$1);
speclj.components.install.call(null,component__8695__auto___9425,description__8694__auto____$1);


var G__9426 = cljs.core.next.call(null,seq__9366_9419__$1);
var G__9427 = null;
var G__9428 = (0);
var G__9429 = (0);
seq__9366_9409 = G__9426;
chunk__9367_9410 = G__9427;
count__9368_9411 = G__9428;
i__9369_9412 = G__9429;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9364_9407);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"gets score of end condition",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9370_9430 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9371_9431 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9371_9431);

try{var seq__9372_9432 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 0 if a tie",((function (_STAR_parent_description_STAR__orig_val__9370_9430,_STAR_parent_description_STAR__temp_val__9371_9431,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = (0);
var actual__8828__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(1),(1),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9370_9430,_STAR_parent_description_STAR__temp_val__9371_9431,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"returns 1 if ai wins at depth 9",((function (_STAR_parent_description_STAR__orig_val__9370_9430,_STAR_parent_description_STAR__temp_val__9371_9431,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9370_9430,_STAR_parent_description_STAR__temp_val__9371_9431,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"returns -1 if ai loses at depth 9",((function (_STAR_parent_description_STAR__orig_val__9370_9430,_STAR_parent_description_STAR__temp_val__9371_9431,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = (-1);
var actual__8828__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9370_9430,_STAR_parent_description_STAR__temp_val__9371_9431,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false)],null)));
var chunk__9373_9433 = null;
var count__9374_9434 = (0);
var i__9375_9435 = (0);
while(true){
if((i__9375_9435 < count__9374_9434)){
var component__8695__auto___9436 = cljs.core._nth.call(null,chunk__9373_9433,i__9375_9435);
speclj.components.install.call(null,component__8695__auto___9436,description__8694__auto____$1);


var G__9437 = seq__9372_9432;
var G__9438 = chunk__9373_9433;
var G__9439 = count__9374_9434;
var G__9440 = (i__9375_9435 + (1));
seq__9372_9432 = G__9437;
chunk__9373_9433 = G__9438;
count__9374_9434 = G__9439;
i__9375_9435 = G__9440;
continue;
} else {
var temp__5753__auto___9441 = cljs.core.seq.call(null,seq__9372_9432);
if(temp__5753__auto___9441){
var seq__9372_9442__$1 = temp__5753__auto___9441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9372_9442__$1)){
var c__5568__auto___9443 = cljs.core.chunk_first.call(null,seq__9372_9442__$1);
var G__9444 = cljs.core.chunk_rest.call(null,seq__9372_9442__$1);
var G__9445 = c__5568__auto___9443;
var G__9446 = cljs.core.count.call(null,c__5568__auto___9443);
var G__9447 = (0);
seq__9372_9432 = G__9444;
chunk__9373_9433 = G__9445;
count__9374_9434 = G__9446;
i__9375_9435 = G__9447;
continue;
} else {
var component__8695__auto___9448 = cljs.core.first.call(null,seq__9372_9442__$1);
speclj.components.install.call(null,component__8695__auto___9448,description__8694__auto____$1);


var G__9449 = cljs.core.next.call(null,seq__9372_9442__$1);
var G__9450 = null;
var G__9451 = (0);
var G__9452 = (0);
seq__9372_9432 = G__9449;
chunk__9373_9433 = G__9450;
count__9374_9434 = G__9451;
i__9375_9435 = G__9452;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9370_9430);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"checks if it's currently the ai's turn or not",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9376_9453 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9377_9454 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9377_9454);

try{var seq__9378_9455 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if depth is not even",((function (_STAR_parent_description_STAR__orig_val__9376_9453,_STAR_parent_description_STAR__temp_val__9377_9454,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var value__8815__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(0));
if((!(value__8815__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9376_9453,_STAR_parent_description_STAR__temp_val__9377_9454,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"returns true if depth is even",((function (_STAR_parent_description_STAR__orig_val__9376_9453,_STAR_parent_description_STAR__temp_val__9377_9454,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var value__8821__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(1));
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9376_9453,_STAR_parent_description_STAR__temp_val__9377_9454,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false)],null)));
var chunk__9379_9456 = null;
var count__9380_9457 = (0);
var i__9381_9458 = (0);
while(true){
if((i__9381_9458 < count__9380_9457)){
var component__8695__auto___9459 = cljs.core._nth.call(null,chunk__9379_9456,i__9381_9458);
speclj.components.install.call(null,component__8695__auto___9459,description__8694__auto____$1);


var G__9460 = seq__9378_9455;
var G__9461 = chunk__9379_9456;
var G__9462 = count__9380_9457;
var G__9463 = (i__9381_9458 + (1));
seq__9378_9455 = G__9460;
chunk__9379_9456 = G__9461;
count__9380_9457 = G__9462;
i__9381_9458 = G__9463;
continue;
} else {
var temp__5753__auto___9464 = cljs.core.seq.call(null,seq__9378_9455);
if(temp__5753__auto___9464){
var seq__9378_9465__$1 = temp__5753__auto___9464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9378_9465__$1)){
var c__5568__auto___9466 = cljs.core.chunk_first.call(null,seq__9378_9465__$1);
var G__9467 = cljs.core.chunk_rest.call(null,seq__9378_9465__$1);
var G__9468 = c__5568__auto___9466;
var G__9469 = cljs.core.count.call(null,c__5568__auto___9466);
var G__9470 = (0);
seq__9378_9455 = G__9467;
chunk__9379_9456 = G__9468;
count__9380_9457 = G__9469;
i__9381_9458 = G__9470;
continue;
} else {
var component__8695__auto___9471 = cljs.core.first.call(null,seq__9378_9465__$1);
speclj.components.install.call(null,component__8695__auto___9471,description__8694__auto____$1);


var G__9472 = cljs.core.next.call(null,seq__9378_9465__$1);
var G__9473 = null;
var G__9474 = (0);
var G__9475 = (0);
seq__9378_9455 = G__9472;
chunk__9379_9456 = G__9473;
count__9380_9457 = G__9474;
i__9381_9458 = G__9475;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9376_9453);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"gives the right symbol depending on the context of\n                 the ai's symbol and the depth",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9382_9476 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9383_9477 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9383_9477);

try{var seq__9384_9478 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 1 if ai symbol is 1 on first move",((function (_STAR_parent_description_STAR__orig_val__9382_9476,_STAR_parent_description_STAR__temp_val__9383_9477,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(0),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9382_9476,_STAR_parent_description_STAR__temp_val__9383_9477,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"returns 2 if ai symbol is 1 on the second move",((function (_STAR_parent_description_STAR__orig_val__9382_9476,_STAR_parent_description_STAR__temp_val__9383_9477,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = (2);
var actual__8828__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(1),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9382_9476,_STAR_parent_description_STAR__temp_val__9383_9477,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false)],null)));
var chunk__9385_9479 = null;
var count__9386_9480 = (0);
var i__9387_9481 = (0);
while(true){
if((i__9387_9481 < count__9386_9480)){
var component__8695__auto___9482 = cljs.core._nth.call(null,chunk__9385_9479,i__9387_9481);
speclj.components.install.call(null,component__8695__auto___9482,description__8694__auto____$1);


var G__9483 = seq__9384_9478;
var G__9484 = chunk__9385_9479;
var G__9485 = count__9386_9480;
var G__9486 = (i__9387_9481 + (1));
seq__9384_9478 = G__9483;
chunk__9385_9479 = G__9484;
count__9386_9480 = G__9485;
i__9387_9481 = G__9486;
continue;
} else {
var temp__5753__auto___9487 = cljs.core.seq.call(null,seq__9384_9478);
if(temp__5753__auto___9487){
var seq__9384_9488__$1 = temp__5753__auto___9487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9384_9488__$1)){
var c__5568__auto___9489 = cljs.core.chunk_first.call(null,seq__9384_9488__$1);
var G__9490 = cljs.core.chunk_rest.call(null,seq__9384_9488__$1);
var G__9491 = c__5568__auto___9489;
var G__9492 = cljs.core.count.call(null,c__5568__auto___9489);
var G__9493 = (0);
seq__9384_9478 = G__9490;
chunk__9385_9479 = G__9491;
count__9386_9480 = G__9492;
i__9387_9481 = G__9493;
continue;
} else {
var component__8695__auto___9494 = cljs.core.first.call(null,seq__9384_9488__$1);
speclj.components.install.call(null,component__8695__auto___9494,description__8694__auto____$1);


var G__9495 = cljs.core.next.call(null,seq__9384_9488__$1);
var G__9496 = null;
var G__9497 = (0);
var G__9498 = (0);
seq__9384_9478 = G__9495;
chunk__9385_9479 = G__9496;
count__9386_9480 = G__9497;
i__9387_9481 = G__9498;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9382_9476);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"makes the best possible move based on an algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9388_9499 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9389_9500 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9389_9500);

try{var seq__9390_9501 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"moves to any space when absolute depth is below 5",((function (_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto___9505 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto___9506 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto___9505,actual__8828__auto___9506)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9505 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9505)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9506 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9506))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(2),(0),(0),(0),(0)], null);
var actual__8828__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"actively blocks player movement until tie or ai wins",((function (_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto___9507 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(2),(2),(1),(1)], null);
var actual__8828__auto___9508 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto___9507,actual__8828__auto___9508)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9507 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9507)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9508 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9508))," (using =)"].join('')));
}

var expected__8827__auto___9509 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(0)], null);
var actual__8828__auto___9510 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto___9509,actual__8828__auto___9510)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9509 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9509)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9510 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9510))," (using =)"].join('')));
}

var expected__8827__auto___9511 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(2),(1)], null);
var actual__8828__auto___9512 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto___9511,actual__8828__auto___9512)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9511 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9511)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9512 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9512))," (using =)"].join('')));
}

var expected__8827__auto___9513 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(0),(0),(1),(0)], null);
var actual__8828__auto___9514 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto___9513,actual__8828__auto___9514)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9513 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9513)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9514 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9514))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(2)], null);
var actual__8828__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"works for 4x4 too",((function (_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null);
var actual__8828__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"and 3x3x3",((function (_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9388_9499,_STAR_parent_description_STAR__temp_val__9389_9500,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false)],null)));
var chunk__9391_9502 = null;
var count__9392_9503 = (0);
var i__9393_9504 = (0);
while(true){
if((i__9393_9504 < count__9392_9503)){
var component__8695__auto___9515 = cljs.core._nth.call(null,chunk__9391_9502,i__9393_9504);
speclj.components.install.call(null,component__8695__auto___9515,description__8694__auto____$1);


var G__9516 = seq__9390_9501;
var G__9517 = chunk__9391_9502;
var G__9518 = count__9392_9503;
var G__9519 = (i__9393_9504 + (1));
seq__9390_9501 = G__9516;
chunk__9391_9502 = G__9517;
count__9392_9503 = G__9518;
i__9393_9504 = G__9519;
continue;
} else {
var temp__5753__auto___9520 = cljs.core.seq.call(null,seq__9390_9501);
if(temp__5753__auto___9520){
var seq__9390_9521__$1 = temp__5753__auto___9520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9390_9521__$1)){
var c__5568__auto___9522 = cljs.core.chunk_first.call(null,seq__9390_9521__$1);
var G__9523 = cljs.core.chunk_rest.call(null,seq__9390_9521__$1);
var G__9524 = c__5568__auto___9522;
var G__9525 = cljs.core.count.call(null,c__5568__auto___9522);
var G__9526 = (0);
seq__9390_9501 = G__9523;
chunk__9391_9502 = G__9524;
count__9392_9503 = G__9525;
i__9393_9504 = G__9526;
continue;
} else {
var component__8695__auto___9527 = cljs.core.first.call(null,seq__9390_9521__$1);
speclj.components.install.call(null,component__8695__auto___9527,description__8694__auto____$1);


var G__9528 = cljs.core.next.call(null,seq__9390_9521__$1);
var G__9529 = null;
var G__9530 = (0);
var G__9531 = (0);
seq__9390_9501 = G__9528;
chunk__9391_9502 = G__9529;
count__9392_9503 = G__9530;
i__9393_9504 = G__9531;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9388_9499);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"gives the best best score for the algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9394_9532 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9395_9533 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9395_9533);

try{var seq__9396_9534 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the biggest score if it's the ai's turn",((function (_STAR_parent_description_STAR__orig_val__9394_9532,_STAR_parent_description_STAR__temp_val__9395_9533,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto___9538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__8828__auto___9539 = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9538,actual__8828__auto___9539)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9538 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9538)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9539 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9539))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__8828__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9394_9532,_STAR_parent_description_STAR__temp_val__9395_9533,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false),speclj.components.new_characteristic.call(null,"the smallest score if not the ai's turn",((function (_STAR_parent_description_STAR__orig_val__9394_9532,_STAR_parent_description_STAR__temp_val__9395_9533,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400){
return (function (){
var expected__8827__auto___9540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8828__auto___9541 = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9540,actual__8828__auto___9541)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9540 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9540)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9541 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9541))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8828__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9394_9532,_STAR_parent_description_STAR__temp_val__9395_9533,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9322_9401,_STAR_parent_description_STAR__temp_val__9323_9402,description__8694__auto___9400))
,false)],null)));
var chunk__9397_9535 = null;
var count__9398_9536 = (0);
var i__9399_9537 = (0);
while(true){
if((i__9399_9537 < count__9398_9536)){
var component__8695__auto___9542 = cljs.core._nth.call(null,chunk__9397_9535,i__9399_9537);
speclj.components.install.call(null,component__8695__auto___9542,description__8694__auto____$1);


var G__9543 = seq__9396_9534;
var G__9544 = chunk__9397_9535;
var G__9545 = count__9398_9536;
var G__9546 = (i__9399_9537 + (1));
seq__9396_9534 = G__9543;
chunk__9397_9535 = G__9544;
count__9398_9536 = G__9545;
i__9399_9537 = G__9546;
continue;
} else {
var temp__5753__auto___9547 = cljs.core.seq.call(null,seq__9396_9534);
if(temp__5753__auto___9547){
var seq__9396_9548__$1 = temp__5753__auto___9547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9396_9548__$1)){
var c__5568__auto___9549 = cljs.core.chunk_first.call(null,seq__9396_9548__$1);
var G__9550 = cljs.core.chunk_rest.call(null,seq__9396_9548__$1);
var G__9551 = c__5568__auto___9549;
var G__9552 = cljs.core.count.call(null,c__5568__auto___9549);
var G__9553 = (0);
seq__9396_9534 = G__9550;
chunk__9397_9535 = G__9551;
count__9398_9536 = G__9552;
i__9399_9537 = G__9553;
continue;
} else {
var component__8695__auto___9554 = cljs.core.first.call(null,seq__9396_9548__$1);
speclj.components.install.call(null,component__8695__auto___9554,description__8694__auto____$1);


var G__9555 = cljs.core.next.call(null,seq__9396_9548__$1);
var G__9556 = null;
var G__9557 = (0);
var G__9558 = (0);
seq__9396_9534 = G__9555;
chunk__9397_9535 = G__9556;
count__9398_9536 = G__9557;
i__9399_9537 = G__9558;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9394_9532);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})()],null)));
var chunk__9325_9404 = null;
var count__9326_9405 = (0);
var i__9327_9406 = (0);
while(true){
if((i__9327_9406 < count__9326_9405)){
var component__8695__auto___9559 = cljs.core._nth.call(null,chunk__9325_9404,i__9327_9406);
speclj.components.install.call(null,component__8695__auto___9559,description__8694__auto___9400);


var G__9560 = seq__9324_9403;
var G__9561 = chunk__9325_9404;
var G__9562 = count__9326_9405;
var G__9563 = (i__9327_9406 + (1));
seq__9324_9403 = G__9560;
chunk__9325_9404 = G__9561;
count__9326_9405 = G__9562;
i__9327_9406 = G__9563;
continue;
} else {
var temp__5753__auto___9564 = cljs.core.seq.call(null,seq__9324_9403);
if(temp__5753__auto___9564){
var seq__9324_9565__$1 = temp__5753__auto___9564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9324_9565__$1)){
var c__5568__auto___9566 = cljs.core.chunk_first.call(null,seq__9324_9565__$1);
var G__9567 = cljs.core.chunk_rest.call(null,seq__9324_9565__$1);
var G__9568 = c__5568__auto___9566;
var G__9569 = cljs.core.count.call(null,c__5568__auto___9566);
var G__9570 = (0);
seq__9324_9403 = G__9567;
chunk__9325_9404 = G__9568;
count__9326_9405 = G__9569;
i__9327_9406 = G__9570;
continue;
} else {
var component__8695__auto___9571 = cljs.core.first.call(null,seq__9324_9565__$1);
speclj.components.install.call(null,component__8695__auto___9571,description__8694__auto___9400);


var G__9572 = cljs.core.next.call(null,seq__9324_9565__$1);
var G__9573 = null;
var G__9574 = (0);
var G__9575 = (0);
seq__9324_9403 = G__9572;
chunk__9325_9404 = G__9573;
count__9326_9405 = G__9574;
i__9327_9406 = G__9575;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9322_9401);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___9400);
}


//# sourceMappingURL=ai_player_spec.js.map
