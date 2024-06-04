// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.option_selector_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.option_selector');
goog.require('speclj.core');
var description__8694__auto___10163 = speclj.components.new_description.call(null,"Option Selector",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__10145_10164 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10146_10165 = description__8694__auto___10163;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10146_10165);

try{var seq__10147_10166 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"gives a function based on a start menu option",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__10157_10170 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10158_10171 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10158_10171);

try{var seq__10159_10172 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil if invalid selection",((function (_STAR_parent_description_STAR__orig_val__10157_10170,_STAR_parent_description_STAR__temp_val__10158_10171,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10145_10164,_STAR_parent_description_STAR__temp_val__10146_10165,description__8694__auto___10163){
return (function (){
var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"0");
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10157_10170,_STAR_parent_description_STAR__temp_val__10158_10171,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10145_10164,_STAR_parent_description_STAR__temp_val__10146_10165,description__8694__auto___10163))
,false),speclj.components.new_characteristic.call(null,"close program if 4",((function (_STAR_parent_description_STAR__orig_val__10157_10170,_STAR_parent_description_STAR__temp_val__10158_10171,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10145_10164,_STAR_parent_description_STAR__temp_val__10146_10165,description__8694__auto___10163){
return (function (){
var expected__8827__auto__ = new cljs.core.Keyword(null,"close-program","close-program",-1579447425);
var actual__8828__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"4");
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10157_10170,_STAR_parent_description_STAR__temp_val__10158_10171,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10145_10164,_STAR_parent_description_STAR__temp_val__10146_10165,description__8694__auto___10163))
,false)],null)));
var chunk__10160_10173 = null;
var count__10161_10174 = (0);
var i__10162_10175 = (0);
while(true){
if((i__10162_10175 < count__10161_10174)){
var component__8695__auto___10176 = cljs.core._nth.call(null,chunk__10160_10173,i__10162_10175);
speclj.components.install.call(null,component__8695__auto___10176,description__8694__auto____$1);


var G__10177 = seq__10159_10172;
var G__10178 = chunk__10160_10173;
var G__10179 = count__10161_10174;
var G__10180 = (i__10162_10175 + (1));
seq__10159_10172 = G__10177;
chunk__10160_10173 = G__10178;
count__10161_10174 = G__10179;
i__10162_10175 = G__10180;
continue;
} else {
var temp__5753__auto___10181 = cljs.core.seq.call(null,seq__10159_10172);
if(temp__5753__auto___10181){
var seq__10159_10182__$1 = temp__5753__auto___10181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10159_10182__$1)){
var c__5568__auto___10183 = cljs.core.chunk_first.call(null,seq__10159_10182__$1);
var G__10184 = cljs.core.chunk_rest.call(null,seq__10159_10182__$1);
var G__10185 = c__5568__auto___10183;
var G__10186 = cljs.core.count.call(null,c__5568__auto___10183);
var G__10187 = (0);
seq__10159_10172 = G__10184;
chunk__10160_10173 = G__10185;
count__10161_10174 = G__10186;
i__10162_10175 = G__10187;
continue;
} else {
var component__8695__auto___10188 = cljs.core.first.call(null,seq__10159_10182__$1);
speclj.components.install.call(null,component__8695__auto___10188,description__8694__auto____$1);


var G__10189 = cljs.core.next.call(null,seq__10159_10182__$1);
var G__10190 = null;
var G__10191 = (0);
var G__10192 = (0);
seq__10159_10172 = G__10189;
chunk__10160_10173 = G__10190;
count__10161_10174 = G__10191;
i__10162_10175 = G__10192;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10157_10170);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})()],null)));
var chunk__10148_10167 = null;
var count__10149_10168 = (0);
var i__10150_10169 = (0);
while(true){
if((i__10150_10169 < count__10149_10168)){
var component__8695__auto___10193 = cljs.core._nth.call(null,chunk__10148_10167,i__10150_10169);
speclj.components.install.call(null,component__8695__auto___10193,description__8694__auto___10163);


var G__10194 = seq__10147_10166;
var G__10195 = chunk__10148_10167;
var G__10196 = count__10149_10168;
var G__10197 = (i__10150_10169 + (1));
seq__10147_10166 = G__10194;
chunk__10148_10167 = G__10195;
count__10149_10168 = G__10196;
i__10150_10169 = G__10197;
continue;
} else {
var temp__5753__auto___10198 = cljs.core.seq.call(null,seq__10147_10166);
if(temp__5753__auto___10198){
var seq__10147_10199__$1 = temp__5753__auto___10198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10147_10199__$1)){
var c__5568__auto___10200 = cljs.core.chunk_first.call(null,seq__10147_10199__$1);
var G__10201 = cljs.core.chunk_rest.call(null,seq__10147_10199__$1);
var G__10202 = c__5568__auto___10200;
var G__10203 = cljs.core.count.call(null,c__5568__auto___10200);
var G__10204 = (0);
seq__10147_10166 = G__10201;
chunk__10148_10167 = G__10202;
count__10149_10168 = G__10203;
i__10150_10169 = G__10204;
continue;
} else {
var component__8695__auto___10205 = cljs.core.first.call(null,seq__10147_10199__$1);
speclj.components.install.call(null,component__8695__auto___10205,description__8694__auto___10163);


var G__10206 = cljs.core.next.call(null,seq__10147_10199__$1);
var G__10207 = null;
var G__10208 = (0);
var G__10209 = (0);
seq__10147_10166 = G__10206;
chunk__10148_10167 = G__10207;
count__10149_10168 = G__10208;
i__10150_10169 = G__10209;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10145_10164);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___10163);
}


//# sourceMappingURL=option_selector_spec.js.map
