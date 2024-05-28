// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
var description__7524__auto___8444 = speclj.components.new_description.call(null,"Core",false,"tic-tac-toe.core-spec");
var _STAR_parent_description_STAR__orig_val__8438_8445 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8439_8446 = description__7524__auto___8444;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8439_8446);

try{var seq__8440_8447 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__8441_8448 = null;
var count__8442_8449 = (0);
var i__8443_8450 = (0);
while(true){
if((i__8443_8450 < count__8442_8449)){
var component__7525__auto___8451 = cljs.core._nth.call(null,chunk__8441_8448,i__8443_8450);
speclj.components.install.call(null,component__7525__auto___8451,description__7524__auto___8444);


var G__8452 = seq__8440_8447;
var G__8453 = chunk__8441_8448;
var G__8454 = count__8442_8449;
var G__8455 = (i__8443_8450 + (1));
seq__8440_8447 = G__8452;
chunk__8441_8448 = G__8453;
count__8442_8449 = G__8454;
i__8443_8450 = G__8455;
continue;
} else {
var temp__5753__auto___8456 = cljs.core.seq.call(null,seq__8440_8447);
if(temp__5753__auto___8456){
var seq__8440_8457__$1 = temp__5753__auto___8456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8440_8457__$1)){
var c__5568__auto___8458 = cljs.core.chunk_first.call(null,seq__8440_8457__$1);
var G__8459 = cljs.core.chunk_rest.call(null,seq__8440_8457__$1);
var G__8460 = c__5568__auto___8458;
var G__8461 = cljs.core.count.call(null,c__5568__auto___8458);
var G__8462 = (0);
seq__8440_8447 = G__8459;
chunk__8441_8448 = G__8460;
count__8442_8449 = G__8461;
i__8443_8450 = G__8462;
continue;
} else {
var component__7525__auto___8463 = cljs.core.first.call(null,seq__8440_8457__$1);
speclj.components.install.call(null,component__7525__auto___8463,description__7524__auto___8444);


var G__8464 = cljs.core.next.call(null,seq__8440_8457__$1);
var G__8465 = null;
var G__8466 = (0);
var G__8467 = (0);
seq__8440_8447 = G__8464;
chunk__8441_8448 = G__8465;
count__8442_8449 = G__8466;
i__8443_8450 = G__8467;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8438_8445);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___8444);
}


//# sourceMappingURL=core_spec.js.map
