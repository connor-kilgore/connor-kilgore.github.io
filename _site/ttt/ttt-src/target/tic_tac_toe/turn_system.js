// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.turn_system');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.ai_player');
tic_tac_toe.turn_system.is_turn_QMARK_ = (function tic_tac_toe$turn_system$is_turn_QMARK_(user_symbol,round){
return ((((cljs.core._EQ_.call(null,user_symbol,(1))) && (cljs.core.odd_QMARK_.call(null,round)))) || (((cljs.core._EQ_.call(null,user_symbol,(2))) && (cljs.core.even_QMARK_.call(null,round)))));
});
tic_tac_toe.turn_system.get_current_player = (function tic_tac_toe$turn_system$get_current_player(players,round){
if(tic_tac_toe.turn_system.is_turn_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,players)),round)){
return cljs.core.first.call(null,players);
} else {
return cljs.core.second.call(null,players);
}
});
tic_tac_toe.turn_system.is_ai_QMARK_ = (function tic_tac_toe$turn_system$is_ai_QMARK_(player){
return cljs.core._EQ_.call(null,cljs.core.subs.call(null,cljs.core.first.call(null,player),(0),(2)),"AI");
});
tic_tac_toe.turn_system.has_ai_QMARK_ = (function tic_tac_toe$turn_system$has_ai_QMARK_(players){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__6391_SHARP_){
return tic_tac_toe.turn_system.is_ai_QMARK_.call(null,p1__6391_SHARP_);
}),players));
});
tic_tac_toe.turn_system.play_next_turn = (function tic_tac_toe$turn_system$play_next_turn(game){
var current_player = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(game));
if(tic_tac_toe.turn_system.is_ai_QMARK_.call(null,current_player)){
return tic_tac_toe.tic_tac_toe_board.increment_round.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.ai_player.play_turn.call(null,game,cljs.core.second.call(null,current_player))));
} else {
return tic_tac_toe.ui_interface.make_move.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.second.call(null,current_player)], null));
}
});

//# sourceMappingURL=turn_system.js.map
