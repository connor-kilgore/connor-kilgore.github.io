// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.turn_system_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ai_player');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.turn_system_spec.base_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d","three-d",-103100530),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__8694__auto___9660 = speclj.components.new_description.call(null,"Turn System",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9578_9661 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9579_9662 = description__8694__auto___9660;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9579_9662);

try{var seq__9580_9663 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"checks if ai is",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9622_9667 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9623_9668 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9623_9668);

try{var seq__9624_9669 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the player being checked.",((function (_STAR_parent_description_STAR__orig_val__9622_9667,_STAR_parent_description_STAR__temp_val__9623_9668,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660){
return (function (){
var value__8815__auto___9673 = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI 1",(1)], null));
if((!(value__8815__auto___9673))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto___9673 == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto___9673)),""].join('')));
} else {
}

var value__8821__auto__ = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 1",(1)], null));
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9622_9667,_STAR_parent_description_STAR__temp_val__9623_9668,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660))
,false),speclj.components.new_characteristic.call(null,"within a list of players",((function (_STAR_parent_description_STAR__orig_val__9622_9667,_STAR_parent_description_STAR__temp_val__9623_9668,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660){
return (function (){
var value__8821__auto___9674 = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 2",(2)], null)], null));
if(cljs.core.truth_(value__8821__auto___9674)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___9674 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___9674))].join('')));
} else {
}

var value__8815__auto__ = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI",(2)], null)], null));
if(cljs.core.not.call(null,value__8815__auto__)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9622_9667,_STAR_parent_description_STAR__temp_val__9623_9668,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660))
,false)],null)));
var chunk__9625_9670 = null;
var count__9626_9671 = (0);
var i__9627_9672 = (0);
while(true){
if((i__9627_9672 < count__9626_9671)){
var component__8695__auto___9675 = cljs.core._nth.call(null,chunk__9625_9670,i__9627_9672);
speclj.components.install.call(null,component__8695__auto___9675,description__8694__auto____$1);


var G__9676 = seq__9624_9669;
var G__9677 = chunk__9625_9670;
var G__9678 = count__9626_9671;
var G__9679 = (i__9627_9672 + (1));
seq__9624_9669 = G__9676;
chunk__9625_9670 = G__9677;
count__9626_9671 = G__9678;
i__9627_9672 = G__9679;
continue;
} else {
var temp__5753__auto___9680 = cljs.core.seq.call(null,seq__9624_9669);
if(temp__5753__auto___9680){
var seq__9624_9681__$1 = temp__5753__auto___9680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9624_9681__$1)){
var c__5568__auto___9682 = cljs.core.chunk_first.call(null,seq__9624_9681__$1);
var G__9683 = cljs.core.chunk_rest.call(null,seq__9624_9681__$1);
var G__9684 = c__5568__auto___9682;
var G__9685 = cljs.core.count.call(null,c__5568__auto___9682);
var G__9686 = (0);
seq__9624_9669 = G__9683;
chunk__9625_9670 = G__9684;
count__9626_9671 = G__9685;
i__9627_9672 = G__9686;
continue;
} else {
var component__8695__auto___9687 = cljs.core.first.call(null,seq__9624_9681__$1);
speclj.components.install.call(null,component__8695__auto___9687,description__8694__auto____$1);


var G__9688 = cljs.core.next.call(null,seq__9624_9681__$1);
var G__9689 = null;
var G__9690 = (0);
var G__9691 = (0);
seq__9624_9669 = G__9688;
chunk__9625_9670 = G__9689;
count__9626_9671 = G__9690;
i__9627_9672 = G__9691;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9622_9667);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"Play's the",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9628_9692 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9629_9693 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9629_9693);

try{var seq__9630_9694 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"ai's turn",((function (_STAR_parent_description_STAR__orig_val__9628_9692,_STAR_parent_description_STAR__temp_val__9629_9693,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660){
return (function (){
var play_turn_orig_val__9644 = tic_tac_toe.ai_player.play_turn;
var println_orig_val__9645 = cljs.core.println;
var increment_round_orig_val__9646 = tic_tac_toe.tic_tac_toe_board.increment_round;
var play_turn_temp_val__9647 = (function (_,___$1){
return "AI";
});
var println_temp_val__9648 = (function (_){
return null;
});
var increment_round_temp_val__9649 = (function (x){
return x;
});
(tic_tac_toe.ai_player.play_turn = play_turn_temp_val__9647);

(cljs.core.println = println_temp_val__9648);

(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_temp_val__9649);

try{var expected__8827__auto__ = "AI";
var actual__8828__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.turn_system.play_next_turn.call(null,cljs.core.assoc.call(null,tic_tac_toe.turn_system_spec.base_game,new cljs.core.Keyword(null,"round","round",2009433328),(2))));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_orig_val__9646);

(cljs.core.println = println_orig_val__9645);

(tic_tac_toe.ai_player.play_turn = play_turn_orig_val__9644);
}});})(_STAR_parent_description_STAR__orig_val__9628_9692,_STAR_parent_description_STAR__temp_val__9629_9693,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660))
,false),speclj.components.new_characteristic.call(null,"player's turn",((function (_STAR_parent_description_STAR__orig_val__9628_9692,_STAR_parent_description_STAR__temp_val__9629_9693,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660){
return (function (){
var make_move_orig_val__9650 = tic_tac_toe.ui_interface.make_move;
var println_orig_val__9651 = cljs.core.println;
var make_move_temp_val__9652 = (function (_){
return "Player";
});
var println_temp_val__9653 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.make_move = make_move_temp_val__9652);

(cljs.core.println = println_temp_val__9653);

try{var expected__8827__auto__ = "Player";
var actual__8828__auto__ = tic_tac_toe.turn_system.play_next_turn.call(null,tic_tac_toe.turn_system_spec.base_game);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(cljs.core.println = println_orig_val__9651);

(tic_tac_toe.ui_interface.make_move = make_move_orig_val__9650);
}});})(_STAR_parent_description_STAR__orig_val__9628_9692,_STAR_parent_description_STAR__temp_val__9629_9693,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660))
,false)],null)));
var chunk__9631_9695 = null;
var count__9632_9696 = (0);
var i__9633_9697 = (0);
while(true){
if((i__9633_9697 < count__9632_9696)){
var component__8695__auto___9698 = cljs.core._nth.call(null,chunk__9631_9695,i__9633_9697);
speclj.components.install.call(null,component__8695__auto___9698,description__8694__auto____$1);


var G__9699 = seq__9630_9694;
var G__9700 = chunk__9631_9695;
var G__9701 = count__9632_9696;
var G__9702 = (i__9633_9697 + (1));
seq__9630_9694 = G__9699;
chunk__9631_9695 = G__9700;
count__9632_9696 = G__9701;
i__9633_9697 = G__9702;
continue;
} else {
var temp__5753__auto___9703 = cljs.core.seq.call(null,seq__9630_9694);
if(temp__5753__auto___9703){
var seq__9630_9704__$1 = temp__5753__auto___9703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9630_9704__$1)){
var c__5568__auto___9705 = cljs.core.chunk_first.call(null,seq__9630_9704__$1);
var G__9706 = cljs.core.chunk_rest.call(null,seq__9630_9704__$1);
var G__9707 = c__5568__auto___9705;
var G__9708 = cljs.core.count.call(null,c__5568__auto___9705);
var G__9709 = (0);
seq__9630_9694 = G__9706;
chunk__9631_9695 = G__9707;
count__9632_9696 = G__9708;
i__9633_9697 = G__9709;
continue;
} else {
var component__8695__auto___9710 = cljs.core.first.call(null,seq__9630_9704__$1);
speclj.components.install.call(null,component__8695__auto___9710,description__8694__auto____$1);


var G__9711 = cljs.core.next.call(null,seq__9630_9704__$1);
var G__9712 = null;
var G__9713 = (0);
var G__9714 = (0);
seq__9630_9694 = G__9711;
chunk__9631_9695 = G__9712;
count__9632_9696 = G__9713;
i__9633_9697 = G__9714;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9628_9692);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"checks if it is players turn by",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9654_9715 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9655_9716 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9655_9716);

try{var seq__9656_9717 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returning true if it is",((function (_STAR_parent_description_STAR__orig_val__9654_9715,_STAR_parent_description_STAR__temp_val__9655_9716,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660){
return (function (){
var value__8815__auto___9721 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(1));
if((!(value__8815__auto___9721))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto___9721 == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto___9721)),""].join('')));
} else {
}

var value__8815__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(2));
if((!(value__8815__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9654_9715,_STAR_parent_description_STAR__temp_val__9655_9716,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660))
,false),speclj.components.new_characteristic.call(null,"returning false if it is not",((function (_STAR_parent_description_STAR__orig_val__9654_9715,_STAR_parent_description_STAR__temp_val__9655_9716,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660){
return (function (){
var value__8821__auto___9722 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(2));
if(value__8821__auto___9722){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___9722 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___9722))].join('')));
} else {
}

var value__8821__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(1));
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9654_9715,_STAR_parent_description_STAR__temp_val__9655_9716,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660))
,false),speclj.components.new_characteristic.call(null,"returning the player whose turn it is",((function (_STAR_parent_description_STAR__orig_val__9654_9715,_STAR_parent_description_STAR__temp_val__9655_9716,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660){
return (function (){
var expected__8827__auto___9723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1)], null);
var actual__8828__auto___9724 = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto___9723,actual__8828__auto___9724)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9723 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9723)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9724 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9724))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null);
var actual__8828__auto__ = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9654_9715,_STAR_parent_description_STAR__temp_val__9655_9716,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9578_9661,_STAR_parent_description_STAR__temp_val__9579_9662,description__8694__auto___9660))
,false)],null)));
var chunk__9657_9718 = null;
var count__9658_9719 = (0);
var i__9659_9720 = (0);
while(true){
if((i__9659_9720 < count__9658_9719)){
var component__8695__auto___9725 = cljs.core._nth.call(null,chunk__9657_9718,i__9659_9720);
speclj.components.install.call(null,component__8695__auto___9725,description__8694__auto____$1);


var G__9726 = seq__9656_9717;
var G__9727 = chunk__9657_9718;
var G__9728 = count__9658_9719;
var G__9729 = (i__9659_9720 + (1));
seq__9656_9717 = G__9726;
chunk__9657_9718 = G__9727;
count__9658_9719 = G__9728;
i__9659_9720 = G__9729;
continue;
} else {
var temp__5753__auto___9730 = cljs.core.seq.call(null,seq__9656_9717);
if(temp__5753__auto___9730){
var seq__9656_9731__$1 = temp__5753__auto___9730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9656_9731__$1)){
var c__5568__auto___9732 = cljs.core.chunk_first.call(null,seq__9656_9731__$1);
var G__9733 = cljs.core.chunk_rest.call(null,seq__9656_9731__$1);
var G__9734 = c__5568__auto___9732;
var G__9735 = cljs.core.count.call(null,c__5568__auto___9732);
var G__9736 = (0);
seq__9656_9717 = G__9733;
chunk__9657_9718 = G__9734;
count__9658_9719 = G__9735;
i__9659_9720 = G__9736;
continue;
} else {
var component__8695__auto___9737 = cljs.core.first.call(null,seq__9656_9731__$1);
speclj.components.install.call(null,component__8695__auto___9737,description__8694__auto____$1);


var G__9738 = cljs.core.next.call(null,seq__9656_9731__$1);
var G__9739 = null;
var G__9740 = (0);
var G__9741 = (0);
seq__9656_9717 = G__9738;
chunk__9657_9718 = G__9739;
count__9658_9719 = G__9740;
i__9659_9720 = G__9741;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9654_9715);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})()],null)));
var chunk__9581_9664 = null;
var count__9582_9665 = (0);
var i__9583_9666 = (0);
while(true){
if((i__9583_9666 < count__9582_9665)){
var component__8695__auto___9742 = cljs.core._nth.call(null,chunk__9581_9664,i__9583_9666);
speclj.components.install.call(null,component__8695__auto___9742,description__8694__auto___9660);


var G__9743 = seq__9580_9663;
var G__9744 = chunk__9581_9664;
var G__9745 = count__9582_9665;
var G__9746 = (i__9583_9666 + (1));
seq__9580_9663 = G__9743;
chunk__9581_9664 = G__9744;
count__9582_9665 = G__9745;
i__9583_9666 = G__9746;
continue;
} else {
var temp__5753__auto___9747 = cljs.core.seq.call(null,seq__9580_9663);
if(temp__5753__auto___9747){
var seq__9580_9748__$1 = temp__5753__auto___9747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9580_9748__$1)){
var c__5568__auto___9749 = cljs.core.chunk_first.call(null,seq__9580_9748__$1);
var G__9750 = cljs.core.chunk_rest.call(null,seq__9580_9748__$1);
var G__9751 = c__5568__auto___9749;
var G__9752 = cljs.core.count.call(null,c__5568__auto___9749);
var G__9753 = (0);
seq__9580_9663 = G__9750;
chunk__9581_9664 = G__9751;
count__9582_9665 = G__9752;
i__9583_9666 = G__9753;
continue;
} else {
var component__8695__auto___9754 = cljs.core.first.call(null,seq__9580_9748__$1);
speclj.components.install.call(null,component__8695__auto___9754,description__8694__auto___9660);


var G__9755 = cljs.core.next.call(null,seq__9580_9748__$1);
var G__9756 = null;
var G__9757 = (0);
var G__9758 = (0);
seq__9580_9663 = G__9755;
chunk__9581_9664 = G__9756;
count__9582_9665 = G__9757;
i__9583_9666 = G__9758;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9578_9661);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___9660);
}


//# sourceMappingURL=turn_system_spec.js.map
