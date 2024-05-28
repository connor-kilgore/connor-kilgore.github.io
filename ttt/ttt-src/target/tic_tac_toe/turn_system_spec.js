// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.turn_system_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ai_player');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.turn_system_spec.base_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d","three-d",-103100530),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__9666__auto___10626 = speclj.components.new_description.call(null,"Turn System",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10544_10627 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10545_10628 = description__9666__auto___10626;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10545_10628);

try{var seq__10546_10629 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"checks if ai is",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10588_10633 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10589_10634 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10589_10634);

try{var seq__10590_10635 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the player being checked.",((function (_STAR_parent_description_STAR__orig_val__10588_10633,_STAR_parent_description_STAR__temp_val__10589_10634,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626){
return (function (){
var value__9781__auto___10639 = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI 1",(1)], null));
if((!(value__9781__auto___10639))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9781__auto___10639 == null))?"nil":cljs.core.pr_str.call(null,value__9781__auto___10639)),""].join('')));
} else {
}

var value__9787__auto__ = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 1",(1)], null));
if(value__9787__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9787__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9787__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10588_10633,_STAR_parent_description_STAR__temp_val__10589_10634,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626))
,false),speclj.components.new_characteristic.call(null,"within a list of players",((function (_STAR_parent_description_STAR__orig_val__10588_10633,_STAR_parent_description_STAR__temp_val__10589_10634,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626){
return (function (){
var value__9787__auto___10640 = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 2",(2)], null)], null));
if(cljs.core.truth_(value__9787__auto___10640)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9787__auto___10640 == null))?"nil":cljs.core.pr_str.call(null,value__9787__auto___10640))].join('')));
} else {
}

var value__9781__auto__ = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI",(2)], null)], null));
if(cljs.core.not.call(null,value__9781__auto__)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9781__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9781__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10588_10633,_STAR_parent_description_STAR__temp_val__10589_10634,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626))
,false)],null)));
var chunk__10591_10636 = null;
var count__10592_10637 = (0);
var i__10593_10638 = (0);
while(true){
if((i__10593_10638 < count__10592_10637)){
var component__9667__auto___10641 = cljs.core._nth.call(null,chunk__10591_10636,i__10593_10638);
speclj.components.install.call(null,component__9667__auto___10641,description__9666__auto____$1);


var G__10642 = seq__10590_10635;
var G__10643 = chunk__10591_10636;
var G__10644 = count__10592_10637;
var G__10645 = (i__10593_10638 + (1));
seq__10590_10635 = G__10642;
chunk__10591_10636 = G__10643;
count__10592_10637 = G__10644;
i__10593_10638 = G__10645;
continue;
} else {
var temp__5753__auto___10646 = cljs.core.seq.call(null,seq__10590_10635);
if(temp__5753__auto___10646){
var seq__10590_10647__$1 = temp__5753__auto___10646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10590_10647__$1)){
var c__5568__auto___10648 = cljs.core.chunk_first.call(null,seq__10590_10647__$1);
var G__10649 = cljs.core.chunk_rest.call(null,seq__10590_10647__$1);
var G__10650 = c__5568__auto___10648;
var G__10651 = cljs.core.count.call(null,c__5568__auto___10648);
var G__10652 = (0);
seq__10590_10635 = G__10649;
chunk__10591_10636 = G__10650;
count__10592_10637 = G__10651;
i__10593_10638 = G__10652;
continue;
} else {
var component__9667__auto___10653 = cljs.core.first.call(null,seq__10590_10647__$1);
speclj.components.install.call(null,component__9667__auto___10653,description__9666__auto____$1);


var G__10654 = cljs.core.next.call(null,seq__10590_10647__$1);
var G__10655 = null;
var G__10656 = (0);
var G__10657 = (0);
seq__10590_10635 = G__10654;
chunk__10591_10636 = G__10655;
count__10592_10637 = G__10656;
i__10593_10638 = G__10657;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10588_10633);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"Play's the",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10594_10658 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10595_10659 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10595_10659);

try{var seq__10596_10660 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"ai's turn",((function (_STAR_parent_description_STAR__orig_val__10594_10658,_STAR_parent_description_STAR__temp_val__10595_10659,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626){
return (function (){
var play_turn_orig_val__10610 = tic_tac_toe.ai_player.play_turn;
var println_orig_val__10611 = cljs.core.println;
var increment_round_orig_val__10612 = tic_tac_toe.tic_tac_toe_board.increment_round;
var play_turn_temp_val__10613 = (function (_,___$1){
return "AI";
});
var println_temp_val__10614 = (function (_){
return null;
});
var increment_round_temp_val__10615 = (function (x){
return x;
});
(tic_tac_toe.ai_player.play_turn = play_turn_temp_val__10613);

(cljs.core.println = println_temp_val__10614);

(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_temp_val__10615);

try{var expected__9793__auto__ = "AI";
var actual__9794__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.turn_system.play_next_turn.call(null,cljs.core.assoc.call(null,tic_tac_toe.turn_system_spec.base_game,new cljs.core.Keyword(null,"round","round",2009433328),(2))));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_orig_val__10612);

(cljs.core.println = println_orig_val__10611);

(tic_tac_toe.ai_player.play_turn = play_turn_orig_val__10610);
}});})(_STAR_parent_description_STAR__orig_val__10594_10658,_STAR_parent_description_STAR__temp_val__10595_10659,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626))
,false),speclj.components.new_characteristic.call(null,"player's turn",((function (_STAR_parent_description_STAR__orig_val__10594_10658,_STAR_parent_description_STAR__temp_val__10595_10659,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626){
return (function (){
var make_move_orig_val__10616 = tic_tac_toe.ui_interface.make_move;
var println_orig_val__10617 = cljs.core.println;
var make_move_temp_val__10618 = (function (_){
return "Player";
});
var println_temp_val__10619 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.make_move = make_move_temp_val__10618);

(cljs.core.println = println_temp_val__10619);

try{var expected__9793__auto__ = "Player";
var actual__9794__auto__ = tic_tac_toe.turn_system.play_next_turn.call(null,tic_tac_toe.turn_system_spec.base_game);
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
}finally {(cljs.core.println = println_orig_val__10617);

(tic_tac_toe.ui_interface.make_move = make_move_orig_val__10616);
}});})(_STAR_parent_description_STAR__orig_val__10594_10658,_STAR_parent_description_STAR__temp_val__10595_10659,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626))
,false)],null)));
var chunk__10597_10661 = null;
var count__10598_10662 = (0);
var i__10599_10663 = (0);
while(true){
if((i__10599_10663 < count__10598_10662)){
var component__9667__auto___10664 = cljs.core._nth.call(null,chunk__10597_10661,i__10599_10663);
speclj.components.install.call(null,component__9667__auto___10664,description__9666__auto____$1);


var G__10665 = seq__10596_10660;
var G__10666 = chunk__10597_10661;
var G__10667 = count__10598_10662;
var G__10668 = (i__10599_10663 + (1));
seq__10596_10660 = G__10665;
chunk__10597_10661 = G__10666;
count__10598_10662 = G__10667;
i__10599_10663 = G__10668;
continue;
} else {
var temp__5753__auto___10669 = cljs.core.seq.call(null,seq__10596_10660);
if(temp__5753__auto___10669){
var seq__10596_10670__$1 = temp__5753__auto___10669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10596_10670__$1)){
var c__5568__auto___10671 = cljs.core.chunk_first.call(null,seq__10596_10670__$1);
var G__10672 = cljs.core.chunk_rest.call(null,seq__10596_10670__$1);
var G__10673 = c__5568__auto___10671;
var G__10674 = cljs.core.count.call(null,c__5568__auto___10671);
var G__10675 = (0);
seq__10596_10660 = G__10672;
chunk__10597_10661 = G__10673;
count__10598_10662 = G__10674;
i__10599_10663 = G__10675;
continue;
} else {
var component__9667__auto___10676 = cljs.core.first.call(null,seq__10596_10670__$1);
speclj.components.install.call(null,component__9667__auto___10676,description__9666__auto____$1);


var G__10677 = cljs.core.next.call(null,seq__10596_10670__$1);
var G__10678 = null;
var G__10679 = (0);
var G__10680 = (0);
seq__10596_10660 = G__10677;
chunk__10597_10661 = G__10678;
count__10598_10662 = G__10679;
i__10599_10663 = G__10680;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10594_10658);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"checks if it is players turn by",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10620_10681 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10621_10682 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10621_10682);

try{var seq__10622_10683 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returning true if it is",((function (_STAR_parent_description_STAR__orig_val__10620_10681,_STAR_parent_description_STAR__temp_val__10621_10682,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626){
return (function (){
var value__9781__auto___10687 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(1));
if((!(value__9781__auto___10687))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9781__auto___10687 == null))?"nil":cljs.core.pr_str.call(null,value__9781__auto___10687)),""].join('')));
} else {
}

var value__9781__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(2));
if((!(value__9781__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9781__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9781__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10620_10681,_STAR_parent_description_STAR__temp_val__10621_10682,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626))
,false),speclj.components.new_characteristic.call(null,"returning false if it is not",((function (_STAR_parent_description_STAR__orig_val__10620_10681,_STAR_parent_description_STAR__temp_val__10621_10682,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626){
return (function (){
var value__9787__auto___10688 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(2));
if(value__9787__auto___10688){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9787__auto___10688 == null))?"nil":cljs.core.pr_str.call(null,value__9787__auto___10688))].join('')));
} else {
}

var value__9787__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(1));
if(value__9787__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9787__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9787__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10620_10681,_STAR_parent_description_STAR__temp_val__10621_10682,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626))
,false),speclj.components.new_characteristic.call(null,"returning the player whose turn it is",((function (_STAR_parent_description_STAR__orig_val__10620_10681,_STAR_parent_description_STAR__temp_val__10621_10682,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626){
return (function (){
var expected__9793__auto___10689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1)], null);
var actual__9794__auto___10690 = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__9793__auto___10689,actual__9794__auto___10690)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10689 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10689)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10690 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10690))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null);
var actual__9794__auto__ = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10620_10681,_STAR_parent_description_STAR__temp_val__10621_10682,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10544_10627,_STAR_parent_description_STAR__temp_val__10545_10628,description__9666__auto___10626))
,false)],null)));
var chunk__10623_10684 = null;
var count__10624_10685 = (0);
var i__10625_10686 = (0);
while(true){
if((i__10625_10686 < count__10624_10685)){
var component__9667__auto___10691 = cljs.core._nth.call(null,chunk__10623_10684,i__10625_10686);
speclj.components.install.call(null,component__9667__auto___10691,description__9666__auto____$1);


var G__10692 = seq__10622_10683;
var G__10693 = chunk__10623_10684;
var G__10694 = count__10624_10685;
var G__10695 = (i__10625_10686 + (1));
seq__10622_10683 = G__10692;
chunk__10623_10684 = G__10693;
count__10624_10685 = G__10694;
i__10625_10686 = G__10695;
continue;
} else {
var temp__5753__auto___10696 = cljs.core.seq.call(null,seq__10622_10683);
if(temp__5753__auto___10696){
var seq__10622_10697__$1 = temp__5753__auto___10696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10622_10697__$1)){
var c__5568__auto___10698 = cljs.core.chunk_first.call(null,seq__10622_10697__$1);
var G__10699 = cljs.core.chunk_rest.call(null,seq__10622_10697__$1);
var G__10700 = c__5568__auto___10698;
var G__10701 = cljs.core.count.call(null,c__5568__auto___10698);
var G__10702 = (0);
seq__10622_10683 = G__10699;
chunk__10623_10684 = G__10700;
count__10624_10685 = G__10701;
i__10625_10686 = G__10702;
continue;
} else {
var component__9667__auto___10703 = cljs.core.first.call(null,seq__10622_10697__$1);
speclj.components.install.call(null,component__9667__auto___10703,description__9666__auto____$1);


var G__10704 = cljs.core.next.call(null,seq__10622_10697__$1);
var G__10705 = null;
var G__10706 = (0);
var G__10707 = (0);
seq__10622_10683 = G__10704;
chunk__10623_10684 = G__10705;
count__10624_10685 = G__10706;
i__10625_10686 = G__10707;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10620_10681);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})()],null)));
var chunk__10547_10630 = null;
var count__10548_10631 = (0);
var i__10549_10632 = (0);
while(true){
if((i__10549_10632 < count__10548_10631)){
var component__9667__auto___10708 = cljs.core._nth.call(null,chunk__10547_10630,i__10549_10632);
speclj.components.install.call(null,component__9667__auto___10708,description__9666__auto___10626);


var G__10709 = seq__10546_10629;
var G__10710 = chunk__10547_10630;
var G__10711 = count__10548_10631;
var G__10712 = (i__10549_10632 + (1));
seq__10546_10629 = G__10709;
chunk__10547_10630 = G__10710;
count__10548_10631 = G__10711;
i__10549_10632 = G__10712;
continue;
} else {
var temp__5753__auto___10713 = cljs.core.seq.call(null,seq__10546_10629);
if(temp__5753__auto___10713){
var seq__10546_10714__$1 = temp__5753__auto___10713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10546_10714__$1)){
var c__5568__auto___10715 = cljs.core.chunk_first.call(null,seq__10546_10714__$1);
var G__10716 = cljs.core.chunk_rest.call(null,seq__10546_10714__$1);
var G__10717 = c__5568__auto___10715;
var G__10718 = cljs.core.count.call(null,c__5568__auto___10715);
var G__10719 = (0);
seq__10546_10629 = G__10716;
chunk__10547_10630 = G__10717;
count__10548_10631 = G__10718;
i__10549_10632 = G__10719;
continue;
} else {
var component__9667__auto___10720 = cljs.core.first.call(null,seq__10546_10714__$1);
speclj.components.install.call(null,component__9667__auto___10720,description__9666__auto___10626);


var G__10721 = cljs.core.next.call(null,seq__10546_10714__$1);
var G__10722 = null;
var G__10723 = (0);
var G__10724 = (0);
seq__10546_10629 = G__10721;
chunk__10547_10630 = G__10722;
count__10548_10631 = G__10723;
i__10549_10632 = G__10724;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10544_10627);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto___10626);
}


//# sourceMappingURL=turn_system_spec.js.map
