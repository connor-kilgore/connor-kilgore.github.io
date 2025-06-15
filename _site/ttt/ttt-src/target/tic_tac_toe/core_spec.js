// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
var description__8694__auto___10370 = speclj.components.new_description.call(null,"Core",false,"tic-tac-toe.core-spec");
var _STAR_parent_description_STAR__orig_val__10364_10371 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10365_10372 = description__8694__auto___10370;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10365_10372);

try{var seq__10366_10373 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__10367_10374 = null;
var count__10368_10375 = (0);
var i__10369_10376 = (0);
while(true){
if((i__10369_10376 < count__10368_10375)){
var component__8695__auto___10377 = cljs.core._nth.call(null,chunk__10367_10374,i__10369_10376);
speclj.components.install.call(null,component__8695__auto___10377,description__8694__auto___10370);


var G__10378 = seq__10366_10373;
var G__10379 = chunk__10367_10374;
var G__10380 = count__10368_10375;
var G__10381 = (i__10369_10376 + (1));
seq__10366_10373 = G__10378;
chunk__10367_10374 = G__10379;
count__10368_10375 = G__10380;
i__10369_10376 = G__10381;
continue;
} else {
var temp__5753__auto___10382 = cljs.core.seq.call(null,seq__10366_10373);
if(temp__5753__auto___10382){
var seq__10366_10383__$1 = temp__5753__auto___10382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10366_10383__$1)){
var c__5568__auto___10384 = cljs.core.chunk_first.call(null,seq__10366_10383__$1);
var G__10385 = cljs.core.chunk_rest.call(null,seq__10366_10383__$1);
var G__10386 = c__5568__auto___10384;
var G__10387 = cljs.core.count.call(null,c__5568__auto___10384);
var G__10388 = (0);
seq__10366_10373 = G__10385;
chunk__10367_10374 = G__10386;
count__10368_10375 = G__10387;
i__10369_10376 = G__10388;
continue;
} else {
var component__8695__auto___10389 = cljs.core.first.call(null,seq__10366_10383__$1);
speclj.components.install.call(null,component__8695__auto___10389,description__8694__auto___10370);


var G__10390 = cljs.core.next.call(null,seq__10366_10383__$1);
var G__10391 = null;
var G__10392 = (0);
var G__10393 = (0);
seq__10366_10373 = G__10390;
chunk__10367_10374 = G__10391;
count__10368_10375 = G__10392;
i__10369_10376 = G__10393;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10364_10371);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___10370);
}


//# sourceMappingURL=core_spec.js.map
