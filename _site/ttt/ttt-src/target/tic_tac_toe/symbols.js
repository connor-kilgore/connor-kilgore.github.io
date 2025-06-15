// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.symbols');
goog.require('cljs.core');
tic_tac_toe.symbols.symbols = new cljs.core.PersistentArrayMap(null, 3, [(0),(0),(1),["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),"m"," X","\u001B[0m"].join(''),(2),["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),"m"," O","\u001B[0m"].join('')], null);
tic_tac_toe.symbols.gui_symbols = new cljs.core.PersistentArrayMap(null, 3, [(0)," ",(1),"X",(2),"O"], null);
tic_tac_toe.symbols.reverse_symbols = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(1)], null);
tic_tac_toe.symbols.reverse_symbol = (function tic_tac_toe$symbols$reverse_symbol(symbol){
return cljs.core.get.call(null,tic_tac_toe.symbols.reverse_symbols,symbol);
});
tic_tac_toe.symbols.symbol_at = (function tic_tac_toe$symbols$symbol_at(position,board){
return cljs.core.get.call(null,tic_tac_toe.symbols.symbols,cljs.core.get.call(null,board,position));
});

//# sourceMappingURL=symbols.js.map
