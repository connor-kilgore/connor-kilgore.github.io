// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.web_ui');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('clojure.string');
var description__7524__auto___8676 = speclj.components.new_description.call(null,"Web UI",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8470_8677 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8471_8678 = description__7524__auto___8676;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8471_8678);

try{var seq__8472_8679 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Initializes the UI by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8576_8683 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8577_8684 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8577_8684);

try{var seq__8578_8685 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"rendering the html",((function (_STAR_parent_description_STAR__orig_val__8576_8683,_STAR_parent_description_STAR__temp_val__8577_8684,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var call_game_initialize_orig_val__8590 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__8591 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__8592 = (function (){
return tic_tac_toe.web_ui.render_root.call(null);
});
var render_root_temp_val__8593 = (function (){
return "rendering!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__8592);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__8593);

try{var expected__7651__auto__ = "rendering!";
var actual__7652__auto__ = tic_tac_toe.ui_interface.initialize_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__8591);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__8590);
}});})(_STAR_parent_description_STAR__orig_val__8576_8683,_STAR_parent_description_STAR__temp_val__8577_8684,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),speclj.components.new_characteristic.call(null,"initializing the game",((function (_STAR_parent_description_STAR__orig_val__8576_8683,_STAR_parent_description_STAR__temp_val__8577_8684,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var call_game_initialize_orig_val__8594 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__8595 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__8596 = (function (){
return "starting game!";
});
var render_root_temp_val__8597 = (function (){
return null;
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__8596);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__8597);

try{var expected__7651__auto__ = "starting game!";
var actual__7652__auto__ = tic_tac_toe.ui_interface.initialize_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__8595);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__8594);
}});})(_STAR_parent_description_STAR__orig_val__8576_8683,_STAR_parent_description_STAR__temp_val__8577_8684,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false)],null)));
var chunk__8579_8686 = null;
var count__8580_8687 = (0);
var i__8581_8688 = (0);
while(true){
if((i__8581_8688 < count__8580_8687)){
var component__7525__auto___8689 = cljs.core._nth.call(null,chunk__8579_8686,i__8581_8688);
speclj.components.install.call(null,component__7525__auto___8689,description__7524__auto____$1);


var G__8690 = seq__8578_8685;
var G__8691 = chunk__8579_8686;
var G__8692 = count__8580_8687;
var G__8693 = (i__8581_8688 + (1));
seq__8578_8685 = G__8690;
chunk__8579_8686 = G__8691;
count__8580_8687 = G__8692;
i__8581_8688 = G__8693;
continue;
} else {
var temp__5753__auto___8694 = cljs.core.seq.call(null,seq__8578_8685);
if(temp__5753__auto___8694){
var seq__8578_8695__$1 = temp__5753__auto___8694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8578_8695__$1)){
var c__5568__auto___8696 = cljs.core.chunk_first.call(null,seq__8578_8695__$1);
var G__8697 = cljs.core.chunk_rest.call(null,seq__8578_8695__$1);
var G__8698 = c__5568__auto___8696;
var G__8699 = cljs.core.count.call(null,c__5568__auto___8696);
var G__8700 = (0);
seq__8578_8685 = G__8697;
chunk__8579_8686 = G__8698;
count__8580_8687 = G__8699;
i__8581_8688 = G__8700;
continue;
} else {
var component__7525__auto___8701 = cljs.core.first.call(null,seq__8578_8695__$1);
speclj.components.install.call(null,component__7525__auto___8701,description__7524__auto____$1);


var G__8702 = cljs.core.next.call(null,seq__8578_8695__$1);
var G__8703 = null;
var G__8704 = (0);
var G__8705 = (0);
seq__8578_8685 = G__8702;
chunk__8579_8686 = G__8703;
count__8580_8687 = G__8704;
i__8581_8688 = G__8705;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8576_8683);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Initializes a game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8598_8706 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8599_8707 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8599_8707);

try{var seq__8600_8708 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Setting the page title",((function (_STAR_parent_description_STAR__orig_val__8598_8706,_STAR_parent_description_STAR__temp_val__8599_8707,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var render_root_orig_val__8610 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__8611 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__8611);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Welcome to TicTacToe!");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__8610);
}});})(_STAR_parent_description_STAR__orig_val__8598_8706,_STAR_parent_description_STAR__temp_val__8599_8707,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),speclj.components.new_characteristic.call(null,"setting the game-state atom",((function (_STAR_parent_description_STAR__orig_val__8598_8706,_STAR_parent_description_STAR__temp_val__8599_8707,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var render_root_orig_val__8612 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__8613 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__8613);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var expected__7651__auto__ = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null,new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),null,new cljs.core.Keyword(null,"board","board",-1907017633),null,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"save-location","save-location",1426336611),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentVector.EMPTY], null);
var actual__7652__auto__ = cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__8612);
}});})(_STAR_parent_description_STAR__orig_val__8598_8706,_STAR_parent_description_STAR__temp_val__8599_8707,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),speclj.components.new_characteristic.call(null,"adding the start button to the page",((function (_STAR_parent_description_STAR__orig_val__8598_8706,_STAR_parent_description_STAR__temp_val__8599_8707,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var render_root_orig_val__8614 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__8615 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__8615);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Start!");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__8614);
}});})(_STAR_parent_description_STAR__orig_val__8598_8706,_STAR_parent_description_STAR__temp_val__8599_8707,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false)],null)));
var chunk__8601_8709 = null;
var count__8602_8710 = (0);
var i__8603_8711 = (0);
while(true){
if((i__8603_8711 < count__8602_8710)){
var component__7525__auto___8712 = cljs.core._nth.call(null,chunk__8601_8709,i__8603_8711);
speclj.components.install.call(null,component__7525__auto___8712,description__7524__auto____$1);


var G__8713 = seq__8600_8708;
var G__8714 = chunk__8601_8709;
var G__8715 = count__8602_8710;
var G__8716 = (i__8603_8711 + (1));
seq__8600_8708 = G__8713;
chunk__8601_8709 = G__8714;
count__8602_8710 = G__8715;
i__8603_8711 = G__8716;
continue;
} else {
var temp__5753__auto___8717 = cljs.core.seq.call(null,seq__8600_8708);
if(temp__5753__auto___8717){
var seq__8600_8718__$1 = temp__5753__auto___8717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8600_8718__$1)){
var c__5568__auto___8719 = cljs.core.chunk_first.call(null,seq__8600_8718__$1);
var G__8720 = cljs.core.chunk_rest.call(null,seq__8600_8718__$1);
var G__8721 = c__5568__auto___8719;
var G__8722 = cljs.core.count.call(null,c__5568__auto___8719);
var G__8723 = (0);
seq__8600_8708 = G__8720;
chunk__8601_8709 = G__8721;
count__8602_8710 = G__8722;
i__8603_8711 = G__8723;
continue;
} else {
var component__7525__auto___8724 = cljs.core.first.call(null,seq__8600_8718__$1);
speclj.components.install.call(null,component__7525__auto___8724,description__7524__auto____$1);


var G__8725 = cljs.core.next.call(null,seq__8600_8718__$1);
var G__8726 = null;
var G__8727 = (0);
var G__8728 = (0);
seq__8600_8708 = G__8725;
chunk__8601_8709 = G__8726;
count__8602_8710 = G__8727;
i__8603_8711 = G__8728;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8598_8706);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Serves options for",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8616_8729 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8617_8730 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8617_8730);

try{var seq__8618_8731 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Game Mode",((function (_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
tic_tac_toe.web_ui.set_game_mode.call(null);

var value__7639__auto___8735 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Single Player");
if((!(value__7639__auto___8735))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8735 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8735)),""].join('')));
} else {
}

var value__7639__auto___8736 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Two Player");
if((!(value__7639__auto___8736))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8736 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8736)),""].join('')));
} else {
}

var value__7639__auto___8737 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"AI vs. AI");
if((!(value__7639__auto___8737))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8737 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8737)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Close Program");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),(function (){var description__7524__auto____$2 = speclj.components.new_description.call(null,"Symbol",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8646_8738 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8647_8739 = description__7524__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8647_8739);

try{var seq__8648_8740 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"on one player",((function (_STAR_parent_description_STAR__orig_val__8646_8738,_STAR_parent_description_STAR__temp_val__8647_8739,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"one-player","one-player",-1358620345));

tic_tac_toe.web_ui.set_symbol.call(null);

var value__7639__auto___8744 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"X (first turn)");
if((!(value__7639__auto___8744))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8744 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8744)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"O (second turn)");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8646_8738,_STAR_parent_description_STAR__temp_val__8647_8739,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),speclj.components.new_characteristic.call(null,"to start menu if close program",((function (_STAR_parent_description_STAR__orig_val__8646_8738,_STAR_parent_description_STAR__temp_val__8647_8739,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var call_game_initialize_orig_val__8656 = tic_tac_toe.web_ui.call_game_initialize;
var call_game_initialize_temp_val__8657 = (function (){
return "Start menu!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__8657);

try{tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"close-program","close-program",-1579447425));

var expected__7651__auto__ = "Start menu!";
var actual__7652__auto__ = tic_tac_toe.web_ui.set_symbol.call(null);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__8656);
}});})(_STAR_parent_description_STAR__orig_val__8646_8738,_STAR_parent_description_STAR__temp_val__8647_8739,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),speclj.components.new_characteristic.call(null,"goes straight to difficulty otherwise",((function (_STAR_parent_description_STAR__orig_val__8646_8738,_STAR_parent_description_STAR__temp_val__8647_8739,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"not-one-player","not-one-player",1301896994));

var set_difficulty_orig_val__8658 = tic_tac_toe.web_ui.set_difficulty;
var set_difficulty_temp_val__8659 = (function (){
return "setting difficulty!";
});
(tic_tac_toe.web_ui.set_difficulty = set_difficulty_temp_val__8659);

try{var expected__7651__auto__ = "setting difficulty!";
var actual__7652__auto__ = tic_tac_toe.web_ui.set_symbol.call(null);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_difficulty = set_difficulty_orig_val__8658);
}});})(_STAR_parent_description_STAR__orig_val__8646_8738,_STAR_parent_description_STAR__temp_val__8647_8739,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false)],null)));
var chunk__8649_8741 = null;
var count__8650_8742 = (0);
var i__8651_8743 = (0);
while(true){
if((i__8651_8743 < count__8650_8742)){
var component__7525__auto___8745 = cljs.core._nth.call(null,chunk__8649_8741,i__8651_8743);
speclj.components.install.call(null,component__7525__auto___8745,description__7524__auto____$2);


var G__8746 = seq__8648_8740;
var G__8747 = chunk__8649_8741;
var G__8748 = count__8650_8742;
var G__8749 = (i__8651_8743 + (1));
seq__8648_8740 = G__8746;
chunk__8649_8741 = G__8747;
count__8650_8742 = G__8748;
i__8651_8743 = G__8749;
continue;
} else {
var temp__5753__auto___8750 = cljs.core.seq.call(null,seq__8648_8740);
if(temp__5753__auto___8750){
var seq__8648_8751__$1 = temp__5753__auto___8750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8648_8751__$1)){
var c__5568__auto___8752 = cljs.core.chunk_first.call(null,seq__8648_8751__$1);
var G__8753 = cljs.core.chunk_rest.call(null,seq__8648_8751__$1);
var G__8754 = c__5568__auto___8752;
var G__8755 = cljs.core.count.call(null,c__5568__auto___8752);
var G__8756 = (0);
seq__8648_8740 = G__8753;
chunk__8649_8741 = G__8754;
count__8650_8742 = G__8755;
i__8651_8743 = G__8756;
continue;
} else {
var component__7525__auto___8757 = cljs.core.first.call(null,seq__8648_8751__$1);
speclj.components.install.call(null,component__7525__auto___8757,description__7524__auto____$2);


var G__8758 = cljs.core.next.call(null,seq__8648_8751__$1);
var G__8759 = null;
var G__8760 = (0);
var G__8761 = (0);
seq__8648_8740 = G__8758;
chunk__8649_8741 = G__8759;
count__8650_8742 = G__8760;
i__8651_8743 = G__8761;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8646_8738);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$2);
}

return description__7524__auto____$2;
})(),(function (){var description__7524__auto____$2 = speclj.components.new_description.call(null,"Difficulty",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8660_8762 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8661_8763 = description__7524__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8661_8763);

try{var seq__8662_8764 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"when an AI is playing",((function (_STAR_parent_description_STAR__orig_val__8660_8762,_STAR_parent_description_STAR__temp_val__8661_8763,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null));

tic_tac_toe.web_ui.set_difficulty.call(null);

var value__7639__auto___8768 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Unbeatable");
if((!(value__7639__auto___8768))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8768 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8768)),""].join('')));
} else {
}

var value__7639__auto___8769 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Medium");
if((!(value__7639__auto___8769))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8769 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8769)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Easy");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8660_8762,_STAR_parent_description_STAR__temp_val__8661_8763,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),speclj.components.new_characteristic.call(null,"goes straight to setting the size if no AI is playing",((function (_STAR_parent_description_STAR__orig_val__8660_8762,_STAR_parent_description_STAR__temp_val__8661_8763,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),false], null));

var set_size_orig_val__8668 = tic_tac_toe.web_ui.set_size;
var set_size_temp_val__8669 = (function (){
return "setting the size!";
});
(tic_tac_toe.web_ui.set_size = set_size_temp_val__8669);

try{var expected__7651__auto__ = "setting the size!";
var actual__7652__auto__ = tic_tac_toe.web_ui.set_difficulty.call(null);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_size = set_size_orig_val__8668);
}});})(_STAR_parent_description_STAR__orig_val__8660_8762,_STAR_parent_description_STAR__temp_val__8661_8763,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false)],null)));
var chunk__8663_8765 = null;
var count__8664_8766 = (0);
var i__8665_8767 = (0);
while(true){
if((i__8665_8767 < count__8664_8766)){
var component__7525__auto___8770 = cljs.core._nth.call(null,chunk__8663_8765,i__8665_8767);
speclj.components.install.call(null,component__7525__auto___8770,description__7524__auto____$2);


var G__8771 = seq__8662_8764;
var G__8772 = chunk__8663_8765;
var G__8773 = count__8664_8766;
var G__8774 = (i__8665_8767 + (1));
seq__8662_8764 = G__8771;
chunk__8663_8765 = G__8772;
count__8664_8766 = G__8773;
i__8665_8767 = G__8774;
continue;
} else {
var temp__5753__auto___8775 = cljs.core.seq.call(null,seq__8662_8764);
if(temp__5753__auto___8775){
var seq__8662_8776__$1 = temp__5753__auto___8775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8662_8776__$1)){
var c__5568__auto___8777 = cljs.core.chunk_first.call(null,seq__8662_8776__$1);
var G__8778 = cljs.core.chunk_rest.call(null,seq__8662_8776__$1);
var G__8779 = c__5568__auto___8777;
var G__8780 = cljs.core.count.call(null,c__5568__auto___8777);
var G__8781 = (0);
seq__8662_8764 = G__8778;
chunk__8663_8765 = G__8779;
count__8664_8766 = G__8780;
i__8665_8767 = G__8781;
continue;
} else {
var component__7525__auto___8782 = cljs.core.first.call(null,seq__8662_8776__$1);
speclj.components.install.call(null,component__7525__auto___8782,description__7524__auto____$2);


var G__8783 = cljs.core.next.call(null,seq__8662_8776__$1);
var G__8784 = null;
var G__8785 = (0);
var G__8786 = (0);
seq__8662_8764 = G__8783;
chunk__8663_8765 = G__8784;
count__8664_8766 = G__8785;
i__8665_8767 = G__8786;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8660_8762);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$2);
}

return description__7524__auto____$2;
})(),speclj.components.new_characteristic.call(null,"Size",((function (_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
tic_tac_toe.web_ui.set_size.call(null);

var value__7639__auto___8787 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"3x3");
if((!(value__7639__auto___8787))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8787 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8787)),""].join('')));
} else {
}

var value__7639__auto___8788 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"4x4");
if((!(value__7639__auto___8788))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___8788 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___8788)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"3x3x3");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8616_8729,_STAR_parent_description_STAR__temp_val__8617_8730,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false)],null)));
var chunk__8619_8732 = null;
var count__8620_8733 = (0);
var i__8621_8734 = (0);
while(true){
if((i__8621_8734 < count__8620_8733)){
var component__7525__auto___8789 = cljs.core._nth.call(null,chunk__8619_8732,i__8621_8734);
speclj.components.install.call(null,component__7525__auto___8789,description__7524__auto____$1);


var G__8790 = seq__8618_8731;
var G__8791 = chunk__8619_8732;
var G__8792 = count__8620_8733;
var G__8793 = (i__8621_8734 + (1));
seq__8618_8731 = G__8790;
chunk__8619_8732 = G__8791;
count__8620_8733 = G__8792;
i__8621_8734 = G__8793;
continue;
} else {
var temp__5753__auto___8794 = cljs.core.seq.call(null,seq__8618_8731);
if(temp__5753__auto___8794){
var seq__8618_8795__$1 = temp__5753__auto___8794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8618_8795__$1)){
var c__5568__auto___8796 = cljs.core.chunk_first.call(null,seq__8618_8795__$1);
var G__8797 = cljs.core.chunk_rest.call(null,seq__8618_8795__$1);
var G__8798 = c__5568__auto___8796;
var G__8799 = cljs.core.count.call(null,c__5568__auto___8796);
var G__8800 = (0);
seq__8618_8731 = G__8797;
chunk__8619_8732 = G__8798;
count__8620_8733 = G__8799;
i__8621_8734 = G__8800;
continue;
} else {
var component__7525__auto___8801 = cljs.core.first.call(null,seq__8618_8795__$1);
speclj.components.install.call(null,component__7525__auto___8801,description__7524__auto____$1);


var G__8802 = cljs.core.next.call(null,seq__8618_8795__$1);
var G__8803 = null;
var G__8804 = (0);
var G__8805 = (0);
seq__8618_8731 = G__8802;
chunk__8619_8732 = G__8803;
count__8620_8733 = G__8804;
i__8621_8734 = G__8805;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8616_8729);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"gets options to display as buttons by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8670_8806 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8671_8807 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8671_8807);

try{var seq__8672_8808 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"getting the vector of options out of a print statement",((function (_STAR_parent_description_STAR__orig_val__8670_8806,_STAR_parent_description_STAR__temp_val__8671_8807,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Single Player\n","Two Player\n","AI vs. AI\n","Close Program\n"], null);
var actual__7652__auto__ = tic_tac_toe.web_ui.get_options_vector.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.option_selector.menu_options));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8670_8806,_STAR_parent_description_STAR__temp_val__8671_8807,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false),speclj.components.new_characteristic.call(null,"get the supposed values out of each vector option",((function (_STAR_parent_description_STAR__orig_val__8670_8806,_STAR_parent_description_STAR__temp_val__8671_8807,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4"], null);
var actual__7652__auto__ = tic_tac_toe.web_ui.get_values.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.option_selector.menu_options));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8670_8806,_STAR_parent_description_STAR__temp_val__8671_8807,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false)],null)));
var chunk__8673_8809 = null;
var count__8674_8810 = (0);
var i__8675_8811 = (0);
while(true){
if((i__8675_8811 < count__8674_8810)){
var component__7525__auto___8812 = cljs.core._nth.call(null,chunk__8673_8809,i__8675_8811);
speclj.components.install.call(null,component__7525__auto___8812,description__7524__auto____$1);


var G__8813 = seq__8672_8808;
var G__8814 = chunk__8673_8809;
var G__8815 = count__8674_8810;
var G__8816 = (i__8675_8811 + (1));
seq__8672_8808 = G__8813;
chunk__8673_8809 = G__8814;
count__8674_8810 = G__8815;
i__8675_8811 = G__8816;
continue;
} else {
var temp__5753__auto___8817 = cljs.core.seq.call(null,seq__8672_8808);
if(temp__5753__auto___8817){
var seq__8672_8818__$1 = temp__5753__auto___8817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8672_8818__$1)){
var c__5568__auto___8819 = cljs.core.chunk_first.call(null,seq__8672_8818__$1);
var G__8820 = cljs.core.chunk_rest.call(null,seq__8672_8818__$1);
var G__8821 = c__5568__auto___8819;
var G__8822 = cljs.core.count.call(null,c__5568__auto___8819);
var G__8823 = (0);
seq__8672_8808 = G__8820;
chunk__8673_8809 = G__8821;
count__8674_8810 = G__8822;
i__8675_8811 = G__8823;
continue;
} else {
var component__7525__auto___8824 = cljs.core.first.call(null,seq__8672_8818__$1);
speclj.components.install.call(null,component__7525__auto___8824,description__7524__auto____$1);


var G__8825 = cljs.core.next.call(null,seq__8672_8818__$1);
var G__8826 = null;
var G__8827 = (0);
var G__8828 = (0);
seq__8672_8808 = G__8825;
chunk__8673_8809 = G__8826;
count__8674_8810 = G__8827;
i__8675_8811 = G__8828;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8670_8806);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),speclj.components.new_characteristic.call(null,"displays a row",((function (_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676){
return (function (){
var expected__7651__auto___8829 = ["([:button {:on-click #object[Function], :style {:width \"150px\", ",":height \"150px\", :vertical-align \"middle\", :font-size \"80px\"}} ","\" \"] [:button {:on-click #object[Function], :style {:width \"150px\", ",":height \"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \" ","\"] [:button {:on-click #object[Function], :style {:width \"150px\", :height ","\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \" \"])"].join('');
var actual__7652__auto___8830 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(0),(1)));
if(cljs.core._EQ_.call(null,expected__7651__auto___8829,actual__7652__auto___8830)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___8829 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___8829)),speclj.platform.endl,"     got: ",(((actual__7652__auto___8830 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___8830))," (using =)"].join('')));
}

var expected__7651__auto__ = ["([:button {:on-click #object[Function], :style {:width \"150px\", :height ","\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \"X\"] ","[:button {:on-click #object[Function], :style {:width \"150px\", :height ","\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \"X\"] ","[:button {:on-click #object[Function], :style {:width \"150px\", :height \"150px\", ",":vertical-align \"middle\", :font-size \"80px\"}} \"X\"])"].join('');
var actual__7652__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1),(1)));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8470_8677,_STAR_parent_description_STAR__temp_val__8471_8678,description__7524__auto___8676))
,false)],null)));
var chunk__8473_8680 = null;
var count__8474_8681 = (0);
var i__8475_8682 = (0);
while(true){
if((i__8475_8682 < count__8474_8681)){
var component__7525__auto___8831 = cljs.core._nth.call(null,chunk__8473_8680,i__8475_8682);
speclj.components.install.call(null,component__7525__auto___8831,description__7524__auto___8676);


var G__8832 = seq__8472_8679;
var G__8833 = chunk__8473_8680;
var G__8834 = count__8474_8681;
var G__8835 = (i__8475_8682 + (1));
seq__8472_8679 = G__8832;
chunk__8473_8680 = G__8833;
count__8474_8681 = G__8834;
i__8475_8682 = G__8835;
continue;
} else {
var temp__5753__auto___8836 = cljs.core.seq.call(null,seq__8472_8679);
if(temp__5753__auto___8836){
var seq__8472_8837__$1 = temp__5753__auto___8836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8472_8837__$1)){
var c__5568__auto___8838 = cljs.core.chunk_first.call(null,seq__8472_8837__$1);
var G__8839 = cljs.core.chunk_rest.call(null,seq__8472_8837__$1);
var G__8840 = c__5568__auto___8838;
var G__8841 = cljs.core.count.call(null,c__5568__auto___8838);
var G__8842 = (0);
seq__8472_8679 = G__8839;
chunk__8473_8680 = G__8840;
count__8474_8681 = G__8841;
i__8475_8682 = G__8842;
continue;
} else {
var component__7525__auto___8843 = cljs.core.first.call(null,seq__8472_8837__$1);
speclj.components.install.call(null,component__7525__auto___8843,description__7524__auto___8676);


var G__8844 = cljs.core.next.call(null,seq__8472_8837__$1);
var G__8845 = null;
var G__8846 = (0);
var G__8847 = (0);
seq__8472_8679 = G__8844;
chunk__8473_8680 = G__8845;
count__8474_8681 = G__8846;
i__8475_8682 = G__8847;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8470_8677);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___8676);
}


//# sourceMappingURL=web_ui_spec.js.map
