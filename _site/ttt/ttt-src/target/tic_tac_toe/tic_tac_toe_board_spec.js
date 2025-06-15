// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.tic_tac_toe_board_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('speclj.core');
tic_tac_toe.tic_tac_toe_board_spec.empty_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
tic_tac_toe.tic_tac_toe_board_spec.mixed_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(1),(2),(1),(0)], null);
var description__8694__auto___10426 = speclj.components.new_description.call(null,"Tic Tac Toe Board",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10396_10427 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10397_10428 = description__8694__auto___10426;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10397_10428);

try{var seq__10398_10429 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets the board side length",((function (_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto___10433 = (3);
var actual__8828__auto___10434 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___10433,actual__8828__auto___10434)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10433 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10433)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10434 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10434))," (using =)"].join('')));
}

var expected__8827__auto___10435 = (4);
var actual__8828__auto___10436 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(16),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___10435,actual__8828__auto___10436)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10435 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10435)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10436 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10436))," (using =)"].join('')));
}

var expected__8827__auto__ = (3);
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"makes a new board that is",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10414_10437 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10415_10438 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10415_10438);

try{var seq__10416_10439 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"2-D",((function (_STAR_parent_description_STAR__orig_val__10414_10437,_STAR_parent_description_STAR__temp_val__10415_10438,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto___10443 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto___10444 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___10443,actual__8828__auto___10444)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10443 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10443)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10444 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10444))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10414_10437,_STAR_parent_description_STAR__temp_val__10415_10438,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false),speclj.components.new_characteristic.call(null,"3-D",((function (_STAR_parent_description_STAR__orig_val__10414_10437,_STAR_parent_description_STAR__temp_val__10415_10438,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto___10445 = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto___10446 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___10445,actual__8828__auto___10446)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10445 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10445)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10446 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10446))," (using =)"].join('')));
}

var expected__8827__auto__ = cljs.core.PersistentVector.fromArray([(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], true);
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10414_10437,_STAR_parent_description_STAR__temp_val__10415_10438,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false)],null)));
var chunk__10417_10440 = null;
var count__10418_10441 = (0);
var i__10419_10442 = (0);
while(true){
if((i__10419_10442 < count__10418_10441)){
var component__8695__auto___10447 = cljs.core._nth.call(null,chunk__10417_10440,i__10419_10442);
speclj.components.install.call(null,component__8695__auto___10447,description__8694__auto____$1);


var G__10448 = seq__10416_10439;
var G__10449 = chunk__10417_10440;
var G__10450 = count__10418_10441;
var G__10451 = (i__10419_10442 + (1));
seq__10416_10439 = G__10448;
chunk__10417_10440 = G__10449;
count__10418_10441 = G__10450;
i__10419_10442 = G__10451;
continue;
} else {
var temp__5753__auto___10452 = cljs.core.seq.call(null,seq__10416_10439);
if(temp__5753__auto___10452){
var seq__10416_10453__$1 = temp__5753__auto___10452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10416_10453__$1)){
var c__5568__auto___10454 = cljs.core.chunk_first.call(null,seq__10416_10453__$1);
var G__10455 = cljs.core.chunk_rest.call(null,seq__10416_10453__$1);
var G__10456 = c__5568__auto___10454;
var G__10457 = cljs.core.count.call(null,c__5568__auto___10454);
var G__10458 = (0);
seq__10416_10439 = G__10455;
chunk__10417_10440 = G__10456;
count__10418_10441 = G__10457;
i__10419_10442 = G__10458;
continue;
} else {
var component__8695__auto___10459 = cljs.core.first.call(null,seq__10416_10453__$1);
speclj.components.install.call(null,component__8695__auto___10459,description__8694__auto____$1);


var G__10460 = cljs.core.next.call(null,seq__10416_10453__$1);
var G__10461 = null;
var G__10462 = (0);
var G__10463 = (0);
seq__10416_10439 = G__10460;
chunk__10417_10440 = G__10461;
count__10418_10441 = G__10462;
i__10419_10442 = G__10463;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10414_10437);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"places a value into the tttb",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10420_10464 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10421_10465 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10421_10465);

try{var seq__10422_10466 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if the position is empty to place",((function (_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var value__8815__auto___10470 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(0));
if((!(value__8815__auto___10470))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto___10470 == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto___10470)),""].join('')));
} else {
}

var value__8821__auto___10471 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),(0));
if(value__8821__auto___10471){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___10471 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___10471))].join('')));
} else {
}

var value__8821__auto__ = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(4));
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false),speclj.components.new_characteristic.call(null,"an X into top left corner",((function (_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false),speclj.components.new_characteristic.call(null,"an X and O in opposite corners",((function (_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(2)], null);
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(8));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false),speclj.components.new_characteristic.call(null,"an X on a spot where an O exists",((function (_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(0)),(1),(0));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false),speclj.components.new_characteristic.call(null,"a series of inputs",((function (_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(2)),(2),(4)),(1),(5)),(2),(6)),(1),(7));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false),speclj.components.new_characteristic.call(null,"returns board input if value is attempting to overwrite X or O",((function (_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.mixed_board,(2),(0));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10420_10464,_STAR_parent_description_STAR__temp_val__10421_10465,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false)],null)));
var chunk__10423_10467 = null;
var count__10424_10468 = (0);
var i__10425_10469 = (0);
while(true){
if((i__10425_10469 < count__10424_10468)){
var component__8695__auto___10472 = cljs.core._nth.call(null,chunk__10423_10467,i__10425_10469);
speclj.components.install.call(null,component__8695__auto___10472,description__8694__auto____$1);


var G__10473 = seq__10422_10466;
var G__10474 = chunk__10423_10467;
var G__10475 = count__10424_10468;
var G__10476 = (i__10425_10469 + (1));
seq__10422_10466 = G__10473;
chunk__10423_10467 = G__10474;
count__10424_10468 = G__10475;
i__10425_10469 = G__10476;
continue;
} else {
var temp__5753__auto___10477 = cljs.core.seq.call(null,seq__10422_10466);
if(temp__5753__auto___10477){
var seq__10422_10478__$1 = temp__5753__auto___10477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10422_10478__$1)){
var c__5568__auto___10479 = cljs.core.chunk_first.call(null,seq__10422_10478__$1);
var G__10480 = cljs.core.chunk_rest.call(null,seq__10422_10478__$1);
var G__10481 = c__5568__auto___10479;
var G__10482 = cljs.core.count.call(null,c__5568__auto___10479);
var G__10483 = (0);
seq__10422_10466 = G__10480;
chunk__10423_10467 = G__10481;
count__10424_10468 = G__10482;
i__10425_10469 = G__10483;
continue;
} else {
var component__8695__auto___10484 = cljs.core.first.call(null,seq__10422_10478__$1);
speclj.components.install.call(null,component__8695__auto___10484,description__8694__auto____$1);


var G__10485 = cljs.core.next.call(null,seq__10422_10478__$1);
var G__10486 = null;
var G__10487 = (0);
var G__10488 = (0);
seq__10422_10466 = G__10485;
chunk__10423_10467 = G__10486;
count__10424_10468 = G__10487;
i__10425_10469 = G__10488;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10420_10464);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gives the absolute depth of the board",((function (_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426){
return (function (){
var expected__8827__auto___10489 = (0);
var actual__8828__auto___10490 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___10489,actual__8828__auto___10490)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10489 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10489)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10490 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10490))," (using =)"].join('')));
}

var expected__8827__auto___10491 = (1);
var actual__8828__auto___10492 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___10491,actual__8828__auto___10492)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10491 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10491)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10492 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10492))," (using =)"].join('')));
}

var expected__8827__auto__ = (9);
var actual__8828__auto__ = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10396_10427,_STAR_parent_description_STAR__temp_val__10397_10428,description__8694__auto___10426))
,false)],null)));
var chunk__10399_10430 = null;
var count__10400_10431 = (0);
var i__10401_10432 = (0);
while(true){
if((i__10401_10432 < count__10400_10431)){
var component__8695__auto___10493 = cljs.core._nth.call(null,chunk__10399_10430,i__10401_10432);
speclj.components.install.call(null,component__8695__auto___10493,description__8694__auto___10426);


var G__10494 = seq__10398_10429;
var G__10495 = chunk__10399_10430;
var G__10496 = count__10400_10431;
var G__10497 = (i__10401_10432 + (1));
seq__10398_10429 = G__10494;
chunk__10399_10430 = G__10495;
count__10400_10431 = G__10496;
i__10401_10432 = G__10497;
continue;
} else {
var temp__5753__auto___10498 = cljs.core.seq.call(null,seq__10398_10429);
if(temp__5753__auto___10498){
var seq__10398_10499__$1 = temp__5753__auto___10498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10398_10499__$1)){
var c__5568__auto___10500 = cljs.core.chunk_first.call(null,seq__10398_10499__$1);
var G__10501 = cljs.core.chunk_rest.call(null,seq__10398_10499__$1);
var G__10502 = c__5568__auto___10500;
var G__10503 = cljs.core.count.call(null,c__5568__auto___10500);
var G__10504 = (0);
seq__10398_10429 = G__10501;
chunk__10399_10430 = G__10502;
count__10400_10431 = G__10503;
i__10401_10432 = G__10504;
continue;
} else {
var component__8695__auto___10505 = cljs.core.first.call(null,seq__10398_10499__$1);
speclj.components.install.call(null,component__8695__auto___10505,description__8694__auto___10426);


var G__10506 = cljs.core.next.call(null,seq__10398_10499__$1);
var G__10507 = null;
var G__10508 = (0);
var G__10509 = (0);
seq__10398_10429 = G__10506;
chunk__10399_10430 = G__10507;
count__10400_10431 = G__10508;
i__10401_10432 = G__10509;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10396_10427);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___10426);
}


//# sourceMappingURL=tic_tac_toe_board_spec.js.map
