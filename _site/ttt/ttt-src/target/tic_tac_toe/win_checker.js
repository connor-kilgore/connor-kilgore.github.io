// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.win_checker');
goog.require('cljs.core');
tic_tac_toe.win_checker.get_rows = (function tic_tac_toe$win_checker$get_rows(board){
return cljs.core.partition.call(null,Math.round(Math.sqrt(cljs.core.count.call(null,board))),board);
});
tic_tac_toe.win_checker.get_cols = (function tic_tac_toe$win_checker$get_cols(board){
return cljs.core.map.call(null,(function (inner_map){
return cljs.core.map.call(null,(function (p1__6288_SHARP_){
return cljs.core.second.call(null,p1__6288_SHARP_);
}),inner_map);
}),cljs.core.map.call(null,cljs.core.second,cljs.core.group_by.call(null,(function (p1__6287_SHARP_){
return cljs.core.mod.call(null,cljs.core.first.call(null,p1__6287_SHARP_),Math.round(Math.sqrt(cljs.core.count.call(null,board))));
}),cljs.core.map_indexed.call(null,cljs.core.vector,board))));
});
tic_tac_toe.win_checker.get_diagonals = (function tic_tac_toe$win_checker$get_diagonals(board){
var rows = tic_tac_toe.win_checker.get_rows.call(null,board);
return (new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonals_$_iter__6289(s__6290){
return (new cljs.core.LazySeq(null,(function (){
var s__6290__$1 = s__6290;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6290__$1);
if(temp__5753__auto__){
var s__6290__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6290__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6290__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6292 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6291 = (0);
while(true){
if((i__6291 < size__5522__auto__)){
var vec__6293 = cljs.core._nth.call(null,c__5521__auto__,i__6291);
var i = cljs.core.nth.call(null,vec__6293,(0),null);
var v = cljs.core.nth.call(null,vec__6293,(1),null);
cljs.core.chunk_append.call(null,b__6292,cljs.core.nth.call(null,v,i));

var G__6309 = (i__6291 + (1));
i__6291 = G__6309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6292),tic_tac_toe$win_checker$get_diagonals_$_iter__6289.call(null,cljs.core.chunk_rest.call(null,s__6290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6292),null);
}
} else {
var vec__6296 = cljs.core.first.call(null,s__6290__$2);
var i = cljs.core.nth.call(null,vec__6296,(0),null);
var v = cljs.core.nth.call(null,vec__6296,(1),null);
return cljs.core.cons.call(null,cljs.core.nth.call(null,v,i),tic_tac_toe$win_checker$get_diagonals_$_iter__6289.call(null,cljs.core.rest.call(null,s__6290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
})(),(new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonals_$_iter__6299(s__6300){
return (new cljs.core.LazySeq(null,(function (){
var s__6300__$1 = s__6300;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6300__$1);
if(temp__5753__auto__){
var s__6300__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6300__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6300__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6302 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6301 = (0);
while(true){
if((i__6301 < size__5522__auto__)){
var vec__6303 = cljs.core._nth.call(null,c__5521__auto__,i__6301);
var i = cljs.core.nth.call(null,vec__6303,(0),null);
var v = cljs.core.nth.call(null,vec__6303,(1),null);
cljs.core.chunk_append.call(null,b__6302,cljs.core.nth.call(null,v,((cljs.core.count.call(null,v) - (1)) - i)));

var G__6310 = (i__6301 + (1));
i__6301 = G__6310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6302),tic_tac_toe$win_checker$get_diagonals_$_iter__6299.call(null,cljs.core.chunk_rest.call(null,s__6300__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6302),null);
}
} else {
var vec__6306 = cljs.core.first.call(null,s__6300__$2);
var i = cljs.core.nth.call(null,vec__6306,(0),null);
var v = cljs.core.nth.call(null,vec__6306,(1),null);
return cljs.core.cons.call(null,cljs.core.nth.call(null,v,((cljs.core.count.call(null,v) - (1)) - i)),tic_tac_toe$win_checker$get_diagonals_$_iter__6299.call(null,cljs.core.rest.call(null,s__6300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
})(),null,(1),null)),(2),null));
});
tic_tac_toe.win_checker.get_horizontal_winner = (function tic_tac_toe$win_checker$get_horizontal_winner(board){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6311_SHARP_){
var and__5043__auto__ = (!(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,p1__6311_SHARP_),(0))));
if(and__5043__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,p1__6311_SHARP_);
} else {
return and__5043__auto__;
}
}),tic_tac_toe.win_checker.get_rows.call(null,board))));
});
tic_tac_toe.win_checker.get_vertical_winner = (function tic_tac_toe$win_checker$get_vertical_winner(board){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6312_SHARP_){
var and__5043__auto__ = (!(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,p1__6312_SHARP_),(0))));
if(and__5043__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,p1__6312_SHARP_);
} else {
return and__5043__auto__;
}
}),tic_tac_toe.win_checker.get_cols.call(null,board))));
});
tic_tac_toe.win_checker.get_diagonal_winner = (function tic_tac_toe$win_checker$get_diagonal_winner(board){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6313_SHARP_){
var and__5043__auto__ = (!(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,p1__6313_SHARP_),(0))));
if(and__5043__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,p1__6313_SHARP_);
} else {
return and__5043__auto__;
}
}),tic_tac_toe.win_checker.get_diagonals.call(null,board))));
});
tic_tac_toe.win_checker.get_down_vertical_boards = (function tic_tac_toe$win_checker$get_down_vertical_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_down_vertical_boards_$_iter__6316(s__6317){
return (new cljs.core.LazySeq(null,(function (){
var s__6317__$1 = s__6317;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6317__$1);
if(temp__5753__auto__){
var s__6317__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6317__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6317__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6319 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6318 = (0);
while(true){
if((i__6318 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6318);
cljs.core.chunk_append.call(null,b__6319,cljs.core.map.call(null,((function (i__6318,i,c__5521__auto__,size__5522__auto__,b__6319,s__6317__$2,temp__5753__auto__,side_size){
return (function (p1__6314_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6314_SHARP_);
});})(i__6318,i,c__5521__auto__,size__5522__auto__,b__6319,s__6317__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i__6318,i,c__5521__auto__,size__5522__auto__,b__6319,s__6317__$2,temp__5753__auto__,side_size){
return (function (p1__6315_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,p1__6315_SHARP_,side_size),i);
});})(i__6318,i,c__5521__auto__,size__5522__auto__,b__6319,s__6317__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))));

var G__6320 = (i__6318 + (1));
i__6318 = G__6320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6319),tic_tac_toe$win_checker$get_down_vertical_boards_$_iter__6316.call(null,cljs.core.chunk_rest.call(null,s__6317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6319),null);
}
} else {
var i = cljs.core.first.call(null,s__6317__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__6317__$2,temp__5753__auto__,side_size){
return (function (p1__6314_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6314_SHARP_);
});})(i,s__6317__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i,s__6317__$2,temp__5753__auto__,side_size){
return (function (p1__6315_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,p1__6315_SHARP_,side_size),i);
});})(i,s__6317__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))),tic_tac_toe$win_checker$get_down_vertical_boards_$_iter__6316.call(null,cljs.core.rest.call(null,s__6317__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,side_size));
});
tic_tac_toe.win_checker.get_side_vertical_boards = (function tic_tac_toe$win_checker$get_side_vertical_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_side_vertical_boards_$_iter__6323(s__6324){
return (new cljs.core.LazySeq(null,(function (){
var s__6324__$1 = s__6324;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6324__$1);
if(temp__5753__auto__){
var s__6324__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6324__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6324__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6326 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6325 = (0);
while(true){
if((i__6325 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6325);
cljs.core.chunk_append.call(null,b__6326,cljs.core.map.call(null,((function (i__6325,i,c__5521__auto__,size__5522__auto__,b__6326,s__6324__$2,temp__5753__auto__,side_size){
return (function (p1__6321_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6321_SHARP_);
});})(i__6325,i,c__5521__auto__,size__5522__auto__,b__6326,s__6324__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i__6325,i,c__5521__auto__,size__5522__auto__,b__6326,s__6324__$2,temp__5753__auto__,side_size){
return (function (p1__6322_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,cljs.core.quot.call(null,p1__6322_SHARP_,side_size),side_size),i);
});})(i__6325,i,c__5521__auto__,size__5522__auto__,b__6326,s__6324__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))));

var G__6327 = (i__6325 + (1));
i__6325 = G__6327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6326),tic_tac_toe$win_checker$get_side_vertical_boards_$_iter__6323.call(null,cljs.core.chunk_rest.call(null,s__6324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6326),null);
}
} else {
var i = cljs.core.first.call(null,s__6324__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__6324__$2,temp__5753__auto__,side_size){
return (function (p1__6321_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6321_SHARP_);
});})(i,s__6324__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i,s__6324__$2,temp__5753__auto__,side_size){
return (function (p1__6322_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,cljs.core.quot.call(null,p1__6322_SHARP_,side_size),side_size),i);
});})(i,s__6324__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))),tic_tac_toe$win_checker$get_side_vertical_boards_$_iter__6323.call(null,cljs.core.rest.call(null,s__6324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,side_size));
});
tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards = (function tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var two_d_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((2) / (3))));
return (new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6328(s__6329){
return (new cljs.core.LazySeq(null,(function (){
var s__6329__$1 = s__6329;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6329__$1);
if(temp__5753__auto__){
var s__6329__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6329__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6329__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6331 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6330 = (0);
while(true){
if((i__6330 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6330);
cljs.core.chunk_append.call(null,b__6331,cljs.core.nth.call(null,three_d_board,(i + (cljs.core.quot.call(null,i,side_size) * two_d_size))));

var G__6336 = (i__6330 + (1));
i__6330 = G__6336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6331),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6328.call(null,cljs.core.chunk_rest.call(null,s__6329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6331),null);
}
} else {
var i = cljs.core.first.call(null,s__6329__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,(i + (cljs.core.quot.call(null,i,side_size) * two_d_size))),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6328.call(null,cljs.core.rest.call(null,s__6329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),(new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6332(s__6333){
return (new cljs.core.LazySeq(null,(function (){
var s__6333__$1 = s__6333;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6333__$1);
if(temp__5753__auto__){
var s__6333__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6333__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6333__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6335 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6334 = (0);
while(true){
if((i__6334 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6334);
cljs.core.chunk_append.call(null,b__6335,cljs.core.nth.call(null,three_d_board,((((two_d_size - side_size) + cljs.core.mod.call(null,i,side_size)) + (two_d_size * cljs.core.quot.call(null,i,side_size))) - (side_size * cljs.core.quot.call(null,i,side_size)))));

var G__6337 = (i__6334 + (1));
i__6334 = G__6337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6335),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6332.call(null,cljs.core.chunk_rest.call(null,s__6333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6335),null);
}
} else {
var i = cljs.core.first.call(null,s__6333__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,((((two_d_size - side_size) + cljs.core.mod.call(null,i,side_size)) + (two_d_size * cljs.core.quot.call(null,i,side_size))) - (side_size * cljs.core.quot.call(null,i,side_size)))),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6332.call(null,cljs.core.rest.call(null,s__6333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),null,(1),null)),(2),null));
});
tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards = (function tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var two_d_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((2) / (3))));
return (new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6338(s__6339){
return (new cljs.core.LazySeq(null,(function (){
var s__6339__$1 = s__6339;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6339__$1);
if(temp__5753__auto__){
var s__6339__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6339__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6339__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6341 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6340 = (0);
while(true){
if((i__6340 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6340);
cljs.core.chunk_append.call(null,b__6341,cljs.core.nth.call(null,three_d_board,((cljs.core.mod.call(null,i,side_size) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))));

var G__6346 = (i__6340 + (1));
i__6340 = G__6346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6341),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6338.call(null,cljs.core.chunk_rest.call(null,s__6339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6341),null);
}
} else {
var i = cljs.core.first.call(null,s__6339__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,((cljs.core.mod.call(null,i,side_size) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6338.call(null,cljs.core.rest.call(null,s__6339__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),(new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6342(s__6343){
return (new cljs.core.LazySeq(null,(function (){
var s__6343__$1 = s__6343;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6343__$1);
if(temp__5753__auto__){
var s__6343__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6343__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6343__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6345 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6344 = (0);
while(true){
if((i__6344 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6344);
cljs.core.chunk_append.call(null,b__6345,cljs.core.nth.call(null,three_d_board,((((side_size - (1)) - cljs.core.mod.call(null,i,side_size)) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))));

var G__6347 = (i__6344 + (1));
i__6344 = G__6347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6345),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6342.call(null,cljs.core.chunk_rest.call(null,s__6343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6345),null);
}
} else {
var i = cljs.core.first.call(null,s__6343__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,((((side_size - (1)) - cljs.core.mod.call(null,i,side_size)) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6342.call(null,cljs.core.rest.call(null,s__6343__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),null,(1),null)),(2),null));
});
tic_tac_toe.win_checker.get_horizontal_boards = (function tic_tac_toe$win_checker$get_horizontal_boards(three_d_board){
var two_d_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((2) / (3))));
return cljs.core.partition.call(null,two_d_size,three_d_board);
});
tic_tac_toe.win_checker.get_2d_boards_within_3d_board = (function tic_tac_toe$win_checker$get_2d_boards_within_3d_board(three_d_board){
return cljs.core.concat.call(null,tic_tac_toe.win_checker.get_horizontal_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_side_vertical_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_down_vertical_boards.call(null,three_d_board));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.win_checker !== 'undefined') && (typeof tic_tac_toe.win_checker.get_winner !== 'undefined')){
} else {
tic_tac_toe.win_checker.get_winner = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.win-checker","get-winner"),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.win_checker.get_winner,false,(function (board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6348_SHARP_){
return (!((p1__6348_SHARP_ == null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board)),tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board)),tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board))], null)));
}));
cljs.core._add_method.call(null,tic_tac_toe.win_checker.get_winner,true,(function (board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6349_SHARP_){
return (!((p1__6349_SHARP_ == null)));
}),(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$iter__6350(s__6351){
return (new cljs.core.LazySeq(null,(function (){
var s__6351__$1 = s__6351;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6351__$1);
if(temp__5753__auto__){
var s__6351__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6351__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6351__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6353 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6352 = (0);
while(true){
if((i__6352 < size__5522__auto__)){
var two_d_board = cljs.core._nth.call(null,c__5521__auto__,i__6352);
cljs.core.chunk_append.call(null,b__6353,tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),two_d_board,new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null)));

var G__6354 = (i__6352 + (1));
i__6352 = G__6354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6353),tic_tac_toe$win_checker$iter__6350.call(null,cljs.core.chunk_rest.call(null,s__6351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6353),null);
}
} else {
var two_d_board = cljs.core.first.call(null,s__6351__$2);
return cljs.core.cons.call(null,tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),two_d_board,new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null)),tic_tac_toe$win_checker$iter__6350.call(null,cljs.core.rest.call(null,s__6351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board)));
})()));
}));
tic_tac_toe.win_checker.get_winner_or_tie = (function tic_tac_toe$win_checker$get_winner_or_tie(game){
var winner = tic_tac_toe.win_checker.get_winner.call(null,game);
if((!((winner == null)))){
return winner;
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.zero_QMARK_,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)))){
return "tie";
} else {
return null;

}
}
});

//# sourceMappingURL=win_checker.js.map
