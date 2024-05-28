// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
var description__7549__auto___67611 = speclj.components.new_description.call(null,"Core",false,"tic-tac-toe.core-spec");
var _STAR_parent_description_STAR__orig_val__67605_67612 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__67606_67613 = description__7549__auto___67611;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__67606_67613);

try{var seq__67607_67614 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__67608_67615 = null;
var count__67609_67616 = (0);
var i__67610_67617 = (0);
while(true){
if((i__67610_67617 < count__67609_67616)){
var component__7550__auto___67618 = cljs.core._nth.call(null,chunk__67608_67615,i__67610_67617);
speclj.components.install.call(null,component__7550__auto___67618,description__7549__auto___67611);


var G__67619 = seq__67607_67614;
var G__67620 = chunk__67608_67615;
var G__67621 = count__67609_67616;
var G__67622 = (i__67610_67617 + (1));
seq__67607_67614 = G__67619;
chunk__67608_67615 = G__67620;
count__67609_67616 = G__67621;
i__67610_67617 = G__67622;
continue;
} else {
var temp__5753__auto___67623 = cljs.core.seq.call(null,seq__67607_67614);
if(temp__5753__auto___67623){
var seq__67607_67624__$1 = temp__5753__auto___67623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67607_67624__$1)){
var c__5568__auto___67625 = cljs.core.chunk_first.call(null,seq__67607_67624__$1);
var G__67626 = cljs.core.chunk_rest.call(null,seq__67607_67624__$1);
var G__67627 = c__5568__auto___67625;
var G__67628 = cljs.core.count.call(null,c__5568__auto___67625);
var G__67629 = (0);
seq__67607_67614 = G__67626;
chunk__67608_67615 = G__67627;
count__67609_67616 = G__67628;
i__67610_67617 = G__67629;
continue;
} else {
var component__7550__auto___67630 = cljs.core.first.call(null,seq__67607_67624__$1);
speclj.components.install.call(null,component__7550__auto___67630,description__7549__auto___67611);


var G__67631 = cljs.core.next.call(null,seq__67607_67624__$1);
var G__67632 = null;
var G__67633 = (0);
var G__67634 = (0);
seq__67607_67614 = G__67631;
chunk__67608_67615 = G__67632;
count__67609_67616 = G__67633;
i__67610_67617 = G__67634;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__67605_67612);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto___67611);
}


//# sourceMappingURL=core_spec.js.map
