// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui');
goog.require('cljs.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.symbols');
goog.require('reagent.dom');
goog.require('reagent.core');
tic_tac_toe.web_ui.game_state = cljs.core.atom.call(null,null);
tic_tac_toe.web_ui.page = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),null,new cljs.core.Keyword(null,"content","content",15833224),null], null));
tic_tac_toe.web_ui.page_title = "Welcome to TicTacToe!";
tic_tac_toe.web_ui.ttt_page = (function tic_tac_toe$web_ui$ttt_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))], null)], null);
});
tic_tac_toe.web_ui.call_game_initialize = (function tic_tac_toe$web_ui$call_game_initialize(){
return tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
});
tic_tac_toe.web_ui.valid_player_move_QMARK_ = (function tic_tac_toe$web_ui$valid_player_move_QMARK_(game,position,symbol){
return (((!((symbol == null)))) && (tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),position)));
});
tic_tac_toe.web_ui.end_condition_met_QMARK_ = (function tic_tac_toe$web_ui$end_condition_met_QMARK_(state){
return (((state == null)) || (typeof state === 'number'));
});
tic_tac_toe.web_ui.end_game_on_next_round_is_game_over = (function tic_tac_toe$web_ui$end_game_on_next_round_is_game_over(state){
var new_state = tic_tac_toe.game_runner.game_round.call(null,state);
if(tic_tac_toe.web_ui.end_condition_met_QMARK_.call(null,new_state)){
return tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),tic_tac_toe.game_runner.get_end_condition_string.call(null,new_state,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)))], null));
} else {
return null;
}
});
tic_tac_toe.web_ui.update_game_state_after_move_BANG_ = (function tic_tac_toe$web_ui$update_game_state_after_move_BANG_(game,i,symbol){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),symbol,i));

return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"round","round",2009433328),(new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(game) + (1)));
});
tic_tac_toe.web_ui.update_game_state_after_valid_move = (function tic_tac_toe$web_ui$update_game_state_after_valid_move(game,i,symbol){
if(tic_tac_toe.web_ui.valid_player_move_QMARK_.call(null,game,i,symbol)){
return tic_tac_toe.web_ui.update_game_state_after_move_BANG_.call(null,game,i,symbol);
} else {
return null;
}
});
tic_tac_toe.web_ui.end_game_if_game_over = (function tic_tac_toe$web_ui$end_game_if_game_over(state){
if(tic_tac_toe.web_ui.end_condition_met_QMARK_.call(null,state)){
return tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),tic_tac_toe.game_runner.get_end_condition_string.call(null,state,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)))], null));
} else {
if((!(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"player-turn","player-turn",1660424586))))){
return tic_tac_toe.web_ui.end_game_on_next_round_is_game_over.call(null,state);
} else {
return null;
}
}
});
tic_tac_toe.web_ui.play_next_round = (function tic_tac_toe$web_ui$play_next_round(){
var new_state = tic_tac_toe.game_runner.game_round.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
return tic_tac_toe.web_ui.end_game_if_game_over.call(null,new_state);
});
tic_tac_toe.web_ui.play_move_BANG_ = (function tic_tac_toe$web_ui$play_move_BANG_(game,i,symbol){
tic_tac_toe.web_ui.update_game_state_after_valid_move.call(null,game,i,symbol);

return tic_tac_toe.web_ui.play_next_round.call(null);
});
tic_tac_toe.web_ui.display_row = (function tic_tac_toe$web_ui$display_row(game,row_SHARP_,symbol){
var side_len = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,game);
var start_index = (row_SHARP_ * side_len);
var iter__5523__auto__ = (function tic_tac_toe$web_ui$display_row_$_iter__10265(s__10266){
return (new cljs.core.LazySeq(null,(function (){
var s__10266__$1 = s__10266;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10266__$1);
if(temp__5753__auto__){
var s__10266__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10266__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__10266__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__10268 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__10267 = (0);
while(true){
if((i__10267 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__10267);
cljs.core.chunk_append.call(null,b__10268,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10267,i,c__5521__auto__,size__5522__auto__,b__10268,s__10266__$2,temp__5753__auto__,side_len,start_index){
return (function (){
return tic_tac_toe.web_ui.play_move_BANG_.call(null,game,i,symbol);
});})(i__10267,i,c__5521__auto__,size__5522__auto__,b__10268,s__10266__$2,temp__5753__auto__,side_len,start_index))
,new cljs.core.Keyword(null,"class","class",-2030961996),"cell"], null),cljs.core.get.call(null,tic_tac_toe.symbols.gui_symbols,cljs.core.nth.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),i))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__10269 = (i__10267 + (1));
i__10267 = G__10269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10268),tic_tac_toe$web_ui$display_row_$_iter__10265.call(null,cljs.core.chunk_rest.call(null,s__10266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10268),null);
}
} else {
var i = cljs.core.first.call(null,s__10266__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__10266__$2,temp__5753__auto__,side_len,start_index){
return (function (){
return tic_tac_toe.web_ui.play_move_BANG_.call(null,game,i,symbol);
});})(i,s__10266__$2,temp__5753__auto__,side_len,start_index))
,new cljs.core.Keyword(null,"class","class",-2030961996),"cell"], null),cljs.core.get.call(null,tic_tac_toe.symbols.gui_symbols,cljs.core.nth.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),i))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),tic_tac_toe$web_ui$display_row_$_iter__10265.call(null,cljs.core.rest.call(null,s__10266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,start_index,(start_index + side_len)));
});
tic_tac_toe.web_ui.display_board = (function tic_tac_toe$web_ui$display_board(game,symbol){
var side_len = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,game);
if(cljs.core.truth_(new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(game))){
var iter__5523__auto__ = (function tic_tac_toe$web_ui$display_board_$_iter__10270(s__10271){
return (new cljs.core.LazySeq(null,(function (){
var s__10271__$1 = s__10271;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10271__$1);
if(temp__5753__auto__){
var s__10271__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10271__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__10271__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__10273 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__10272 = (0);
while(true){
if((i__10272 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__10272);
cljs.core.chunk_append.call(null,b__10273,(function (){var board_index = cljs.core.quot.call(null,i,side_len);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["board",cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_index)].join('')], null),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})());

var G__10278 = (i__10272 + (1));
i__10272 = G__10278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),tic_tac_toe$web_ui$display_board_$_iter__10270.call(null,cljs.core.chunk_rest.call(null,s__10271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),null);
}
} else {
var i = cljs.core.first.call(null,s__10271__$2);
return cljs.core.cons.call(null,(function (){var board_index = cljs.core.quot.call(null,i,side_len);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["board",cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_index)].join('')], null),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})(),tic_tac_toe$web_ui$display_board_$_iter__10270.call(null,cljs.core.rest.call(null,s__10271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,(side_len * side_len)));
} else {
var iter__5523__auto__ = (function tic_tac_toe$web_ui$display_board_$_iter__10274(s__10275){
return (new cljs.core.LazySeq(null,(function (){
var s__10275__$1 = s__10275;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10275__$1);
if(temp__5753__auto__){
var s__10275__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10275__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__10275__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__10277 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__10276 = (0);
while(true){
if((i__10276 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__10276);
cljs.core.chunk_append.call(null,b__10277,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__10279 = (i__10276 + (1));
i__10276 = G__10279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10277),tic_tac_toe$web_ui$display_board_$_iter__10274.call(null,cljs.core.chunk_rest.call(null,s__10275__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10277),null);
}
} else {
var i = cljs.core.first.call(null,s__10275__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),tic_tac_toe$web_ui$display_board_$_iter__10274.call(null,cljs.core.rest.call(null,s__10275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,side_len));
}
});
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.round_output,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (game){
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,game);

return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.display_board.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state),null));
}));
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.make_move,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (options){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.display_board.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(options)));

return new cljs.core.Keyword(null,"player-turn","player-turn",1660424586);
}));
tic_tac_toe.web_ui.reset_game = (function tic_tac_toe$web_ui$reset_game(){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),tic_tac_toe.web_ui.page_title);

return tic_tac_toe.game_runner.game_round.call(null,tic_tac_toe.game_runner.reset_game.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)));
});
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.end_game,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (end_condition){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501).cljs$core$IFn$_invoke$arity$1(end_condition));

return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.conj.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"end-condition"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.web_ui.reset_game.call(null);
})], null),"Retry"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"reset"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.web_ui.call_game_initialize.call(null);
})], null),"Back to Menu"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"back"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"retry-div"], null))));
}));
tic_tac_toe.web_ui.get_default_game = (function tic_tac_toe$web_ui$get_default_game(){
var new_game = tic_tac_toe.game_runner.base_game;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,new_game,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get.call(null,tic_tac_toe.option_selector.symbol_options,"X")),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),cljs.core.get.call(null,tic_tac_toe.option_selector.difficulty_options,"1")),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.tic_tac_toe_board.make_board.call(null,cljs.core.get.call(null,tic_tac_toe.option_selector.board_size_options,"1"))),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false),new cljs.core.Keyword(null,"save-location","save-location",1426336611),null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408));
});
tic_tac_toe.web_ui.update_game_attribute = (function tic_tac_toe$web_ui$update_game_attribute(map,key,key_to_change){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,key_to_change,cljs.core.get.call(null,map,key));

return tic_tac_toe.web_ui.set_options.call(null);
});
tic_tac_toe.web_ui.update_game_size = (function tic_tac_toe$web_ui$update_game_size(dimensions){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(dimensions));

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.tic_tac_toe_board.make_board.call(null,dimensions));

return tic_tac_toe.web_ui.set_options.call(null);
});
tic_tac_toe.web_ui.start_game = (function tic_tac_toe$web_ui$start_game(){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state))));

return tic_tac_toe.game_runner.game_round.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
});
tic_tac_toe.web_ui.player_options = (function tic_tac_toe$web_ui$player_options(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"players",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2")))),new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.symbol_options,"X",new cljs.core.Keyword(null,"players","players",-1361554569));
})], null)], null),"Player vs. AI"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"players",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2")),new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10280_SHARP_){
return tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.menu_options,p1__10280_SHARP_.target.value,new cljs.core.Keyword(null,"players","players",-1361554569));
})], null)], null),"Player vs. Player"], null)], null);
});
tic_tac_toe.web_ui.symbol_options = (function tic_tac_toe$web_ui$symbol_options(){
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"symbol",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.symbol_options,"X")),new cljs.core.Keyword(null,"value","value",305978217),"X",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10281_SHARP_){
return tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.symbol_options,p1__10281_SHARP_.target.value,new cljs.core.Keyword(null,"players","players",-1361554569));
})], null)], null),"X (first turn)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"symbol",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.symbol_options,"O")),new cljs.core.Keyword(null,"value","value",305978217),"O",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10282_SHARP_){
return tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.symbol_options,p1__10282_SHARP_.target.value,new cljs.core.Keyword(null,"players","players",-1361554569));
})], null)], null),"O (second turn)"], null)], null);
} else {
return null;
}
});
tic_tac_toe.web_ui.difficulty_options = (function tic_tac_toe$web_ui$difficulty_options(){
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"difficulty",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.difficulty_options,"1")),new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10283_SHARP_){
return tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,p1__10283_SHARP_.target.value,new cljs.core.Keyword(null,"difficulty","difficulty",755680807));
})], null)], null),"Unbeatable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"difficulty",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.difficulty_options,"2")),new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10284_SHARP_){
return tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,p1__10284_SHARP_.target.value,new cljs.core.Keyword(null,"difficulty","difficulty",755680807));
})], null)], null),"Medium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"difficulty",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),cljs.core.get.call(null,tic_tac_toe.option_selector.difficulty_options,"3")),new cljs.core.Keyword(null,"value","value",305978217),"3",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10285_SHARP_){
return tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,p1__10285_SHARP_.target.value,new cljs.core.Keyword(null,"difficulty","difficulty",755680807));
})], null)], null),"Easy"], null)], null);
} else {
return null;
}
});
tic_tac_toe.web_ui.size_options = (function tic_tac_toe$web_ui$size_options(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),tic_tac_toe.tic_tac_toe_board.make_board.call(null,cljs.core.get.call(null,tic_tac_toe.option_selector.board_size_options,"1"))),new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10286_SHARP_){
return tic_tac_toe.web_ui.update_game_size.call(null,cljs.core.get.call(null,tic_tac_toe.option_selector.board_size_options,p1__10286_SHARP_.target.value));
})], null)], null),"3x3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),tic_tac_toe.tic_tac_toe_board.make_board.call(null,cljs.core.get.call(null,tic_tac_toe.option_selector.board_size_options,"2"))),new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10287_SHARP_){
return tic_tac_toe.web_ui.update_game_size.call(null,cljs.core.get.call(null,tic_tac_toe.option_selector.board_size_options,p1__10287_SHARP_.target.value));
})], null)], null),"4x4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)),tic_tac_toe.tic_tac_toe_board.make_board.call(null,cljs.core.get.call(null,tic_tac_toe.option_selector.board_size_options,"3"))),new cljs.core.Keyword(null,"value","value",305978217),"3",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10288_SHARP_){
return tic_tac_toe.web_ui.update_game_size.call(null,cljs.core.get.call(null,tic_tac_toe.option_selector.board_size_options,p1__10288_SHARP_.target.value));
})], null)], null),"3x3x3"], null)], null);
});
tic_tac_toe.web_ui.get_menu_render = (function tic_tac_toe$web_ui$get_menu_render(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),tic_tac_toe.web_ui.player_options.call(null),tic_tac_toe.web_ui.symbol_options.call(null),tic_tac_toe.web_ui.difficulty_options.call(null),tic_tac_toe.web_ui.size_options.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return tic_tac_toe.web_ui.start_game.call(null);
})], null),"Start!"], null)], null);
});
tic_tac_toe.web_ui.set_options = (function tic_tac_toe$web_ui$set_options(){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.get_menu_render.call(null));
});
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.initialize_game,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),tic_tac_toe.web_ui.page_title);

var new_game = tic_tac_toe.web_ui.get_default_game.call(null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,new_game);

return tic_tac_toe.web_ui.set_options.call(null);
}));
tic_tac_toe.web_ui.render_root = (function tic_tac_toe$web_ui$render_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.web_ui.ttt_page], null),document.getElementById("root"));
});
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.initialize_ui,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (_){
tic_tac_toe.web_ui.render_root.call(null);

return tic_tac_toe.web_ui.call_game_initialize.call(null);
}));

//# sourceMappingURL=web_ui.js.map
