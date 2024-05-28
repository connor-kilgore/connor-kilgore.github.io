// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.game_runner');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.win_checker');
goog.require('tic_tac_toe.ui_interface');
tic_tac_toe.game_runner.get_end_condition_string = (function tic_tac_toe$game_runner$get_end_condition_string(winner,players){
if((winner == null)){
return "\nTie!";
} else {
if(cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,players)),winner)){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,players)))," wins!"].join('');
} else {
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.second.call(null,players)))," wins!"].join('');

}
}
});
tic_tac_toe.game_runner.base_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null,new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),null,new cljs.core.Keyword(null,"board","board",-1907017633),null,new cljs.core.Keyword(null,"ui","ui",-469653645),null,new cljs.core.Keyword(null,"save-location","save-location",1426336611),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentVector.EMPTY], null);
tic_tac_toe.game_runner.reset_game = (function tic_tac_toe$game_runner$reset_game(game){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"round","round",2009433328),(1)),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,game),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(game)], null)));
});
tic_tac_toe.game_runner.game_round = (function tic_tac_toe$game_runner$game_round(game){
tic_tac_toe.ui_interface.round_output.call(null,game);

var winner = tic_tac_toe.win_checker.get_winner.call(null,game);
if((((!((winner == null)))) || ((new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(game) > cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)))))){
return winner;
} else {
return tic_tac_toe.turn_system.play_next_turn.call(null,game);

}
});
tic_tac_toe.game_runner.game_loop = (function tic_tac_toe$game_runner$game_loop(game){
while(true){
var game_result = tic_tac_toe.game_runner.game_round.call(null,game);
if(cljs.core.map_QMARK_.call(null,game_result)){
var G__49010 = game_result;
game = G__49010;
continue;
} else {
return game_result;
}
break;
}
});
tic_tac_toe.game_runner.run_game_loop = (function tic_tac_toe$game_runner$run_game_loop(game){
while(true){
var winner = tic_tac_toe.game_runner.game_loop.call(null,game);
var end_cond = tic_tac_toe.game_runner.get_end_condition_string.call(null,winner,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game));
var retry_QMARK_ = tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),end_cond,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(game)], null));
if(cljs.core.truth_(retry_QMARK_)){
var G__49011 = tic_tac_toe.game_runner.reset_game.call(null,game);
game = G__49011;
continue;
} else {
return null;
}
break;
}
});
tic_tac_toe.game_runner.resume_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913),"\nPrevious game detected. Would you like to resume? \n[1] Yes\n[2] No\n",new cljs.core.Keyword(null,"error","error",-978969032),"\nPlease select a valid option.","1",true,"2",false], null);
tic_tac_toe.game_runner.get_new_game = (function tic_tac_toe$game_runner$get_new_game(game,last_game){
tic_tac_toe.ui_interface.initialize_ui.call(null,game);

if(cljs.core.truth_((function (){var and__5043__auto__ = (!(cljs.core.empty_QMARK_.call(null,last_game)));
if(and__5043__auto__){
return tic_tac_toe.ui_interface.get_selection.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),tic_tac_toe.game_runner.resume_options,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(game)], null));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.last.call(null,last_game),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"save-location","save-location",1426336611).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(game));
} else {
return tic_tac_toe.ui_interface.initialize_game.call(null,game);
}
});
tic_tac_toe.game_runner.menu_loop = (function tic_tac_toe$game_runner$menu_loop(game){
while(true){
var last_game = null;
var initialized_game = tic_tac_toe.game_runner.get_new_game.call(null,game,last_game);
if(cljs.core._EQ_.call(null,initialized_game,new cljs.core.Keyword(null,"close-program","close-program",-1579447425))){
return tic_tac_toe.ui_interface.close_program.call(null,game);
} else {
tic_tac_toe.game_runner.run_game_loop.call(null,initialized_game);

var G__49012 = game;
game = G__49012;
continue;
}
break;
}
});
tic_tac_toe.game_runner.ui_types = new cljs.core.PersistentArrayMap(null, 3, ["--gui",new cljs.core.Keyword(null,"gui","gui",604532813),"--archive",new cljs.core.Keyword(null,"archive","archive",1466927419),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null);
tic_tac_toe.game_runner.save_locations = new cljs.core.PersistentArrayMap(null, 2, ["--psqldb",new cljs.core.Keyword(null,"psqldb","psqldb",-581718637),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"edndb","edndb",1239103406)], null);
tic_tac_toe.game_runner.get_valid_arg = (function tic_tac_toe$game_runner$get_valid_arg(args,arg_map){
var valid_arg = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__49013_SHARP_){
return (!((p1__49013_SHARP_ == null)));
}),(function (){var iter__5523__auto__ = (function tic_tac_toe$game_runner$get_valid_arg_$_iter__49014(s__49015){
return (new cljs.core.LazySeq(null,(function (){
var s__49015__$1 = s__49015;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__49015__$1);
if(temp__5753__auto__){
var s__49015__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49015__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__49015__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__49017 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__49016 = (0);
while(true){
if((i__49016 < size__5522__auto__)){
var arg = cljs.core._nth.call(null,c__5521__auto__,i__49016);
cljs.core.chunk_append.call(null,b__49017,cljs.core.get.call(null,arg_map,arg));

var G__49018 = (i__49016 + (1));
i__49016 = G__49018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49017),tic_tac_toe$game_runner$get_valid_arg_$_iter__49014.call(null,cljs.core.chunk_rest.call(null,s__49015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49017),null);
}
} else {
var arg = cljs.core.first.call(null,s__49015__$2);
return cljs.core.cons.call(null,cljs.core.get.call(null,arg_map,arg),tic_tac_toe$game_runner$get_valid_arg_$_iter__49014.call(null,cljs.core.rest.call(null,s__49015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,args);
})()));
if((valid_arg == null)){
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(arg_map);
} else {
return valid_arg;
}
});
tic_tac_toe.game_runner.is_flag_QMARK_ = (function tic_tac_toe$game_runner$is_flag_QMARK_(arg){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,arg),cljs.core.second.call(null,arg),cljs.core.first.call(null,"-"));
});
tic_tac_toe.game_runner.get_valid_parameters = (function tic_tac_toe$game_runner$get_valid_parameters(args){
return cljs.core.filter.call(null,(function (p1__49019_SHARP_){
return (!(tic_tac_toe.game_runner.is_flag_QMARK_.call(null,p1__49019_SHARP_)));
}),args);
});
tic_tac_toe.game_runner.parse_arguments = (function tic_tac_toe$game_runner$parse_arguments(game,args){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"ui","ui",-469653645),tic_tac_toe.game_runner.get_valid_arg.call(null,args,tic_tac_toe.game_runner.ui_types)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),tic_tac_toe.game_runner.get_valid_arg.call(null,args,tic_tac_toe.game_runner.save_locations)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),tic_tac_toe.game_runner.get_valid_parameters.call(null,args));
});

//# sourceMappingURL=game_runner.js.map
