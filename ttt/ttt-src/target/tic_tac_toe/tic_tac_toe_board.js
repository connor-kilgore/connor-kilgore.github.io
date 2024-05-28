// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.tic_tac_toe_board');
goog.require('cljs.core');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.tic_tac_toe_board !== 'undefined') && (typeof tic_tac_toe.tic_tac_toe_board.get_side_len !== 'undefined')){
} else {
tic_tac_toe.tic_tac_toe_board.get_side_len = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.tic-tac-toe-board","get-side-len"),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.tic_tac_toe_board.get_side_len,true,(function (game){
return (Math.pow(cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)),((1) / (3))) | (0));
}));
cljs.core._add_method.call(null,tic_tac_toe.tic_tac_toe_board.get_side_len,false,(function (game){
return (Math.sqrt(cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game))) | (0));
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.tic_tac_toe_board !== 'undefined') && (typeof tic_tac_toe.tic_tac_toe_board.make_board !== 'undefined')){
} else {
tic_tac_toe.tic_tac_toe_board.make_board = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.tic-tac-toe-board","make-board"),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.tic_tac_toe_board.make_board,true,(function (size){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(size) * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(size)) * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(size)),(0)));
}));
cljs.core._add_method.call(null,tic_tac_toe.tic_tac_toe_board.make_board,false,(function (size){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(size) * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(size)),(0)));
}));
tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_ = (function tic_tac_toe$tic_tac_toe_board$spot_available_QMARK_(board,position){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,board,position),(0));
});
tic_tac_toe.tic_tac_toe_board.place_value_into_tttb = (function tic_tac_toe$tic_tac_toe_board$place_value_into_tttb(board,value,position){
if((!(tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,board,position)))){
return board;
} else {
return cljs.core.assoc.call(null,board,position,value);
}
});
tic_tac_toe.tic_tac_toe_board.increment_round = (function tic_tac_toe$tic_tac_toe_board$increment_round(game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"round","round",2009433328),(new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(game) + (1)));
});
tic_tac_toe.tic_tac_toe_board.not_zero_QMARK_ = (function tic_tac_toe$tic_tac_toe_board$not_zero_QMARK_(x){
return (!((x === (0))));
});
tic_tac_toe.tic_tac_toe_board.get_absolute_depth = (function tic_tac_toe$tic_tac_toe_board$get_absolute_depth(board){
cljs.core.count.call(null,board);

return cljs.core.count.call(null,cljs.core.filter.call(null,tic_tac_toe.tic_tac_toe_board.not_zero_QMARK_,board));
});

//# sourceMappingURL=tic_tac_toe_board.js.map
