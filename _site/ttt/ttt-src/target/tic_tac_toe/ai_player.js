// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.ai_player');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.symbols');
goog.require('tic_tac_toe.win_checker');
tic_tac_toe.ai_player.depth_limit = new cljs.core.PersistentArrayMap(null, 3, [(9),(5),(16),(6),(27),(3)], null);
tic_tac_toe.ai_player.is_ai_turn_QMARK_ = (function tic_tac_toe$ai_player$is_ai_turn_QMARK_(depth){
return cljs.core.even_QMARK_.call(null,depth);
});
tic_tac_toe.ai_player.get_current_symbol = (function tic_tac_toe$ai_player$get_current_symbol(depth,symbol){
if(tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,depth)){
return symbol;
} else {
return tic_tac_toe.symbols.reverse_symbol.call(null,symbol);
}
});
tic_tac_toe.ai_player.get_end_score = (function tic_tac_toe$ai_player$get_end_score(game,ai_symbol){
var end_condition = tic_tac_toe.win_checker.get_winner_or_tie.call(null,game);
var depth = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game));
if(cljs.core._EQ_.call(null,end_condition,"tie")){
return (0);
} else {
if((end_condition == null)){
return null;
} else {
if((!(cljs.core._EQ_.call(null,end_condition,ai_symbol)))){
return (depth - (cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)) + (1)));
} else {
return ((cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)) + (1)) - depth);

}
}
}
});
tic_tac_toe.ai_player.make_hypothetical_moves = (function tic_tac_toe$ai_player$make_hypothetical_moves(var_args){
var G__6360 = arguments.length;
switch (G__6360) {
case 2:
return tic_tac_toe.ai_player.make_hypothetical_moves.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return tic_tac_toe.ai_player.make_hypothetical_moves.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.ai_player.make_hypothetical_moves.cljs$core$IFn$_invoke$arity$2 = (function (board,symbol){
return tic_tac_toe.ai_player.make_hypothetical_moves.call(null,board,symbol,(0),cljs.core.PersistentArrayMap.EMPTY);
}));

(tic_tac_toe.ai_player.make_hypothetical_moves.cljs$core$IFn$_invoke$arity$4 = (function (board,symbol,position,new_boards){
while(true){
if((position >= cljs.core.count.call(null,board))){
return new_boards;
} else {
if(tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,board,position)){
var G__6362 = board;
var G__6363 = symbol;
var G__6364 = (position + (1));
var G__6365 = cljs.core.conj.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([position,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,board,symbol,position)]),new_boards);
board = G__6362;
symbol = G__6363;
position = G__6364;
new_boards = G__6365;
continue;
} else {
var G__6366 = board;
var G__6367 = symbol;
var G__6368 = (position + (1));
var G__6369 = new_boards;
board = G__6366;
symbol = G__6367;
position = G__6368;
new_boards = G__6369;
continue;

}
}
break;
}
}));

(tic_tac_toe.ai_player.make_hypothetical_moves.cljs$lang$maxFixedArity = 4);

tic_tac_toe.ai_player.get_best_score = (function tic_tac_toe$ai_player$get_best_score(depth,scores){
if(tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,depth)){
return cljs.core.apply.call(null,cljs.core.max_key,cljs.core.val,scores);
} else {
return cljs.core.apply.call(null,cljs.core.min_key,cljs.core.val,scores);
}
});
tic_tac_toe.ai_player.get_new_alpha = (function tic_tac_toe$ai_player$get_new_alpha(score,alpha,depth){
if(((tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,depth)) && ((!(cljs.core.empty_QMARK_.call(null,score)))))){
var x__5130__auto__ = cljs.core.second.call(null,score);
var y__5131__auto__ = alpha;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
} else {
return alpha;
}
});
tic_tac_toe.ai_player.get_new_beta = (function tic_tac_toe$ai_player$get_new_beta(score,beta,depth){
if(((tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,depth)) || (cljs.core.empty_QMARK_.call(null,score)))){
return beta;
} else {
var x__5133__auto__ = cljs.core.second.call(null,score);
var y__5134__auto__ = beta;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
}
});
tic_tac_toe.ai_player.get_new_score = (function tic_tac_toe$ai_player$get_new_score(score_1,score_2,depth){
if(cljs.core.empty_QMARK_.call(null,score_1)){
return score_2;
} else {
if(cljs.core.empty_QMARK_.call(null,score_2)){
return score_1;
} else {
if(tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,depth)){
return cljs.core.apply.call(null,cljs.core.max_key,cljs.core.second,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [score_2,score_1], null));
} else {
return cljs.core.apply.call(null,cljs.core.min_key,cljs.core.second,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [score_2,score_1], null));

}
}
}
});
tic_tac_toe.ai_player.get_depth_score = (function tic_tac_toe$ai_player$get_depth_score(depth){
if(tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,depth)){
return depth;
} else {
return (depth * (-1));
}
});
tic_tac_toe.ai_player.mini_max_algo = (function tic_tac_toe$ai_player$mini_max_algo(var_args){
var G__6371 = arguments.length;
switch (G__6371) {
case 2:
return tic_tac_toe.ai_player.mini_max_algo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return tic_tac_toe.ai_player.mini_max_algo.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.ai_player.mini_max_algo.cljs$core$IFn$_invoke$arity$2 = (function (game,symbol){
return tic_tac_toe.ai_player.mini_max_algo.call(null,game,symbol,(0),((cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)) + (1)) * (-1)),(cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)) + (1)));
}));

(tic_tac_toe.ai_player.mini_max_algo.cljs$core$IFn$_invoke$arity$5 = (function (game,symbol,depth,alpha,beta){
var end_condition = tic_tac_toe.ai_player.get_end_score.call(null,game,symbol);
if((!((end_condition == null)))){
return end_condition;
} else {
var moves = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),tic_tac_toe.ai_player.get_current_symbol.call(null,depth,symbol));
var i = (0);
var a = alpha;
var b = beta;
var best_score = cljs.core.PersistentVector.EMPTY;
while(true){
if((depth > cljs.core.get.call(null,tic_tac_toe.ai_player.depth_limit,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game))))){
return tic_tac_toe.ai_player.get_depth_score.call(null,depth);
} else {
if(((cljs.core._EQ_.call(null,depth,(0))) && ((i >= cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)))))){
return cljs.core.get.call(null,moves,cljs.core.first.call(null,best_score));
} else {
if((i >= cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)))){
return cljs.core.second.call(null,best_score);
} else {
if((cljs.core.get.call(null,moves,i) == null)){
var G__6373 = (i + (1));
var G__6374 = a;
var G__6375 = b;
var G__6376 = best_score;
i = G__6373;
a = G__6374;
b = G__6375;
best_score = G__6376;
continue;
} else {
if((b <= a)){
var G__6377 = (i + (1));
var G__6378 = a;
var G__6379 = b;
var G__6380 = best_score;
i = G__6377;
a = G__6378;
b = G__6379;
best_score = G__6380;
continue;
} else {
var score = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tic_tac_toe.ai_player.mini_max_algo.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.get.call(null,moves,i)),symbol,(depth + (1)),a,b)], null);
var new_score = tic_tac_toe.ai_player.get_new_score.call(null,best_score,score,depth);
var new_alpha = tic_tac_toe.ai_player.get_new_alpha.call(null,score,a,depth);
var new_beta = tic_tac_toe.ai_player.get_new_beta.call(null,score,b,depth);
var G__6381 = (i + (1));
var G__6382 = new_alpha;
var G__6383 = new_beta;
var G__6384 = new_score;
i = G__6381;
a = G__6382;
b = G__6383;
best_score = G__6384;
continue;

}
}
}
}
}
break;
}
}
}));

(tic_tac_toe.ai_player.mini_max_algo.cljs$lang$maxFixedArity = 5);

tic_tac_toe.ai_player.place_random_spot = (function tic_tac_toe$ai_player$place_random_spot(board,symbol){
while(true){
var position = cljs.core.rand_int.call(null,cljs.core.count.call(null,board));
if(tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,board,position)){
return tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,board,symbol,position);
} else {
var G__6385 = board;
var G__6386 = symbol;
board = G__6385;
symbol = G__6386;
continue;
}
break;
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.ai_player !== 'undefined') && (typeof tic_tac_toe.ai_player.play_best_turn !== 'undefined')){
} else {
tic_tac_toe.ai_player.play_best_turn = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.ai-player","play-best-turn"),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.ai_player.play_best_turn,false,(function (turn_state){
return tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(turn_state),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(turn_state));
}));
cljs.core._add_method.call(null,tic_tac_toe.ai_player.play_best_turn,true,(function (turn_state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(turn_state)),(1))){
return tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(turn_state)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(turn_state),cljs.core.quot.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(turn_state))),(2)));
} else {
return tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(turn_state),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(turn_state));
}
}));
tic_tac_toe.ai_player.play_turn = (function tic_tac_toe$ai_player$play_turn(game,ai_symbol){
if((cljs.core.rand_int.call(null,(11)) > new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(game))){
return tic_tac_toe.ai_player.place_random_spot.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),ai_symbol);
} else {
return tic_tac_toe.ai_player.play_best_turn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),ai_symbol], null));
}
});

//# sourceMappingURL=ai_player.js.map
