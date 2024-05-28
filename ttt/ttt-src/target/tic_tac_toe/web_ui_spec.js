// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.web_ui');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('clojure.string');
var description__7549__auto___68589 = speclj.components.new_description.call(null,"Web UI",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__68383_68590 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__68384_68591 = description__7549__auto___68589;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__68384_68591);

try{var seq__68385_68592 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"Initializes the UI by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__68489_68596 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__68490_68597 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__68490_68597);

try{var seq__68491_68598 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"rendering the html",((function (_STAR_parent_description_STAR__orig_val__68489_68596,_STAR_parent_description_STAR__temp_val__68490_68597,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var call_game_initialize_orig_val__68503 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__68504 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__68505 = (function (){
return tic_tac_toe.web_ui.render_root.call(null);
});
var render_root_temp_val__68506 = (function (){
return "rendering!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__68505);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__68506);

try{var expected__7676__auto__ = "rendering!";
var actual__7677__auto__ = tic_tac_toe.ui_interface.initialize_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__68504);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__68503);
}});})(_STAR_parent_description_STAR__orig_val__68489_68596,_STAR_parent_description_STAR__temp_val__68490_68597,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),speclj.components.new_characteristic.call(null,"initializing the game",((function (_STAR_parent_description_STAR__orig_val__68489_68596,_STAR_parent_description_STAR__temp_val__68490_68597,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var call_game_initialize_orig_val__68507 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__68508 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__68509 = (function (){
return "starting game!";
});
var render_root_temp_val__68510 = (function (){
return null;
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__68509);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__68510);

try{var expected__7676__auto__ = "starting game!";
var actual__7677__auto__ = tic_tac_toe.ui_interface.initialize_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__68508);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__68507);
}});})(_STAR_parent_description_STAR__orig_val__68489_68596,_STAR_parent_description_STAR__temp_val__68490_68597,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false)],null)));
var chunk__68492_68599 = null;
var count__68493_68600 = (0);
var i__68494_68601 = (0);
while(true){
if((i__68494_68601 < count__68493_68600)){
var component__7550__auto___68602 = cljs.core._nth.call(null,chunk__68492_68599,i__68494_68601);
speclj.components.install.call(null,component__7550__auto___68602,description__7549__auto____$1);


var G__68603 = seq__68491_68598;
var G__68604 = chunk__68492_68599;
var G__68605 = count__68493_68600;
var G__68606 = (i__68494_68601 + (1));
seq__68491_68598 = G__68603;
chunk__68492_68599 = G__68604;
count__68493_68600 = G__68605;
i__68494_68601 = G__68606;
continue;
} else {
var temp__5753__auto___68607 = cljs.core.seq.call(null,seq__68491_68598);
if(temp__5753__auto___68607){
var seq__68491_68608__$1 = temp__5753__auto___68607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68491_68608__$1)){
var c__5568__auto___68609 = cljs.core.chunk_first.call(null,seq__68491_68608__$1);
var G__68610 = cljs.core.chunk_rest.call(null,seq__68491_68608__$1);
var G__68611 = c__5568__auto___68609;
var G__68612 = cljs.core.count.call(null,c__5568__auto___68609);
var G__68613 = (0);
seq__68491_68598 = G__68610;
chunk__68492_68599 = G__68611;
count__68493_68600 = G__68612;
i__68494_68601 = G__68613;
continue;
} else {
var component__7550__auto___68614 = cljs.core.first.call(null,seq__68491_68608__$1);
speclj.components.install.call(null,component__7550__auto___68614,description__7549__auto____$1);


var G__68615 = cljs.core.next.call(null,seq__68491_68608__$1);
var G__68616 = null;
var G__68617 = (0);
var G__68618 = (0);
seq__68491_68598 = G__68615;
chunk__68492_68599 = G__68616;
count__68493_68600 = G__68617;
i__68494_68601 = G__68618;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__68489_68596);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})(),(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"Initializes a game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__68511_68619 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__68512_68620 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__68512_68620);

try{var seq__68513_68621 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Setting the page title",((function (_STAR_parent_description_STAR__orig_val__68511_68619,_STAR_parent_description_STAR__temp_val__68512_68620,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var render_root_orig_val__68523 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__68524 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__68524);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var value__7664__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Welcome to TicTacToe!");
if((!(value__7664__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto__)),""].join('')));
} else {
return null;
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__68523);
}});})(_STAR_parent_description_STAR__orig_val__68511_68619,_STAR_parent_description_STAR__temp_val__68512_68620,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),speclj.components.new_characteristic.call(null,"setting the game-state atom",((function (_STAR_parent_description_STAR__orig_val__68511_68619,_STAR_parent_description_STAR__temp_val__68512_68620,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var render_root_orig_val__68525 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__68526 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__68526);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var expected__7676__auto__ = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null,new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),null,new cljs.core.Keyword(null,"board","board",-1907017633),null,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"save-location","save-location",1426336611),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentVector.EMPTY], null);
var actual__7677__auto__ = cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state);
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__68525);
}});})(_STAR_parent_description_STAR__orig_val__68511_68619,_STAR_parent_description_STAR__temp_val__68512_68620,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),speclj.components.new_characteristic.call(null,"adding the start button to the page",((function (_STAR_parent_description_STAR__orig_val__68511_68619,_STAR_parent_description_STAR__temp_val__68512_68620,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var render_root_orig_val__68527 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__68528 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__68528);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var value__7664__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Start!");
if((!(value__7664__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto__)),""].join('')));
} else {
return null;
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__68527);
}});})(_STAR_parent_description_STAR__orig_val__68511_68619,_STAR_parent_description_STAR__temp_val__68512_68620,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false)],null)));
var chunk__68514_68622 = null;
var count__68515_68623 = (0);
var i__68516_68624 = (0);
while(true){
if((i__68516_68624 < count__68515_68623)){
var component__7550__auto___68625 = cljs.core._nth.call(null,chunk__68514_68622,i__68516_68624);
speclj.components.install.call(null,component__7550__auto___68625,description__7549__auto____$1);


var G__68626 = seq__68513_68621;
var G__68627 = chunk__68514_68622;
var G__68628 = count__68515_68623;
var G__68629 = (i__68516_68624 + (1));
seq__68513_68621 = G__68626;
chunk__68514_68622 = G__68627;
count__68515_68623 = G__68628;
i__68516_68624 = G__68629;
continue;
} else {
var temp__5753__auto___68630 = cljs.core.seq.call(null,seq__68513_68621);
if(temp__5753__auto___68630){
var seq__68513_68631__$1 = temp__5753__auto___68630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68513_68631__$1)){
var c__5568__auto___68632 = cljs.core.chunk_first.call(null,seq__68513_68631__$1);
var G__68633 = cljs.core.chunk_rest.call(null,seq__68513_68631__$1);
var G__68634 = c__5568__auto___68632;
var G__68635 = cljs.core.count.call(null,c__5568__auto___68632);
var G__68636 = (0);
seq__68513_68621 = G__68633;
chunk__68514_68622 = G__68634;
count__68515_68623 = G__68635;
i__68516_68624 = G__68636;
continue;
} else {
var component__7550__auto___68637 = cljs.core.first.call(null,seq__68513_68631__$1);
speclj.components.install.call(null,component__7550__auto___68637,description__7549__auto____$1);


var G__68638 = cljs.core.next.call(null,seq__68513_68631__$1);
var G__68639 = null;
var G__68640 = (0);
var G__68641 = (0);
seq__68513_68621 = G__68638;
chunk__68514_68622 = G__68639;
count__68515_68623 = G__68640;
i__68516_68624 = G__68641;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__68511_68619);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})(),(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"Serves options for",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__68529_68642 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__68530_68643 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__68530_68643);

try{var seq__68531_68644 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Game Mode",((function (_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
tic_tac_toe.web_ui.set_game_mode.call(null);

var value__7664__auto___68648 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Single Player");
if((!(value__7664__auto___68648))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68648 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68648)),""].join('')));
} else {
}

var value__7664__auto___68649 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Two Player");
if((!(value__7664__auto___68649))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68649 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68649)),""].join('')));
} else {
}

var value__7664__auto___68650 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"AI vs. AI");
if((!(value__7664__auto___68650))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68650 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68650)),""].join('')));
} else {
}

var value__7664__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Close Program");
if((!(value__7664__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),(function (){var description__7549__auto____$2 = speclj.components.new_description.call(null,"Symbol",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__68559_68651 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__68560_68652 = description__7549__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__68560_68652);

try{var seq__68561_68653 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"on one player",((function (_STAR_parent_description_STAR__orig_val__68559_68651,_STAR_parent_description_STAR__temp_val__68560_68652,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"one-player","one-player",-1358620345));

tic_tac_toe.web_ui.set_symbol.call(null);

var value__7664__auto___68657 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"X (first turn)");
if((!(value__7664__auto___68657))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68657 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68657)),""].join('')));
} else {
}

var value__7664__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"O (second turn)");
if((!(value__7664__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__68559_68651,_STAR_parent_description_STAR__temp_val__68560_68652,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),speclj.components.new_characteristic.call(null,"to start menu if close program",((function (_STAR_parent_description_STAR__orig_val__68559_68651,_STAR_parent_description_STAR__temp_val__68560_68652,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var call_game_initialize_orig_val__68569 = tic_tac_toe.web_ui.call_game_initialize;
var call_game_initialize_temp_val__68570 = (function (){
return "Start menu!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__68570);

try{tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"close-program","close-program",-1579447425));

var expected__7676__auto__ = "Start menu!";
var actual__7677__auto__ = tic_tac_toe.web_ui.set_symbol.call(null);
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__68569);
}});})(_STAR_parent_description_STAR__orig_val__68559_68651,_STAR_parent_description_STAR__temp_val__68560_68652,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),speclj.components.new_characteristic.call(null,"goes straight to difficulty otherwise",((function (_STAR_parent_description_STAR__orig_val__68559_68651,_STAR_parent_description_STAR__temp_val__68560_68652,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"not-one-player","not-one-player",1301896994));

var set_difficulty_orig_val__68571 = tic_tac_toe.web_ui.set_difficulty;
var set_difficulty_temp_val__68572 = (function (){
return "setting difficulty!";
});
(tic_tac_toe.web_ui.set_difficulty = set_difficulty_temp_val__68572);

try{var expected__7676__auto__ = "setting difficulty!";
var actual__7677__auto__ = tic_tac_toe.web_ui.set_symbol.call(null);
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_difficulty = set_difficulty_orig_val__68571);
}});})(_STAR_parent_description_STAR__orig_val__68559_68651,_STAR_parent_description_STAR__temp_val__68560_68652,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false)],null)));
var chunk__68562_68654 = null;
var count__68563_68655 = (0);
var i__68564_68656 = (0);
while(true){
if((i__68564_68656 < count__68563_68655)){
var component__7550__auto___68658 = cljs.core._nth.call(null,chunk__68562_68654,i__68564_68656);
speclj.components.install.call(null,component__7550__auto___68658,description__7549__auto____$2);


var G__68659 = seq__68561_68653;
var G__68660 = chunk__68562_68654;
var G__68661 = count__68563_68655;
var G__68662 = (i__68564_68656 + (1));
seq__68561_68653 = G__68659;
chunk__68562_68654 = G__68660;
count__68563_68655 = G__68661;
i__68564_68656 = G__68662;
continue;
} else {
var temp__5753__auto___68663 = cljs.core.seq.call(null,seq__68561_68653);
if(temp__5753__auto___68663){
var seq__68561_68664__$1 = temp__5753__auto___68663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68561_68664__$1)){
var c__5568__auto___68665 = cljs.core.chunk_first.call(null,seq__68561_68664__$1);
var G__68666 = cljs.core.chunk_rest.call(null,seq__68561_68664__$1);
var G__68667 = c__5568__auto___68665;
var G__68668 = cljs.core.count.call(null,c__5568__auto___68665);
var G__68669 = (0);
seq__68561_68653 = G__68666;
chunk__68562_68654 = G__68667;
count__68563_68655 = G__68668;
i__68564_68656 = G__68669;
continue;
} else {
var component__7550__auto___68670 = cljs.core.first.call(null,seq__68561_68664__$1);
speclj.components.install.call(null,component__7550__auto___68670,description__7549__auto____$2);


var G__68671 = cljs.core.next.call(null,seq__68561_68664__$1);
var G__68672 = null;
var G__68673 = (0);
var G__68674 = (0);
seq__68561_68653 = G__68671;
chunk__68562_68654 = G__68672;
count__68563_68655 = G__68673;
i__68564_68656 = G__68674;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__68559_68651);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$2);
}

return description__7549__auto____$2;
})(),(function (){var description__7549__auto____$2 = speclj.components.new_description.call(null,"Difficulty",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__68573_68675 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__68574_68676 = description__7549__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__68574_68676);

try{var seq__68575_68677 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"when an AI is playing",((function (_STAR_parent_description_STAR__orig_val__68573_68675,_STAR_parent_description_STAR__temp_val__68574_68676,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null));

tic_tac_toe.web_ui.set_difficulty.call(null);

var value__7664__auto___68681 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Unbeatable");
if((!(value__7664__auto___68681))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68681 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68681)),""].join('')));
} else {
}

var value__7664__auto___68682 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Medium");
if((!(value__7664__auto___68682))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68682 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68682)),""].join('')));
} else {
}

var value__7664__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Easy");
if((!(value__7664__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__68573_68675,_STAR_parent_description_STAR__temp_val__68574_68676,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),speclj.components.new_characteristic.call(null,"goes straight to setting the size if no AI is playing",((function (_STAR_parent_description_STAR__orig_val__68573_68675,_STAR_parent_description_STAR__temp_val__68574_68676,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),false], null));

var set_size_orig_val__68581 = tic_tac_toe.web_ui.set_size;
var set_size_temp_val__68582 = (function (){
return "setting the size!";
});
(tic_tac_toe.web_ui.set_size = set_size_temp_val__68582);

try{var expected__7676__auto__ = "setting the size!";
var actual__7677__auto__ = tic_tac_toe.web_ui.set_difficulty.call(null);
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_size = set_size_orig_val__68581);
}});})(_STAR_parent_description_STAR__orig_val__68573_68675,_STAR_parent_description_STAR__temp_val__68574_68676,description__7549__auto____$2,_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false)],null)));
var chunk__68576_68678 = null;
var count__68577_68679 = (0);
var i__68578_68680 = (0);
while(true){
if((i__68578_68680 < count__68577_68679)){
var component__7550__auto___68683 = cljs.core._nth.call(null,chunk__68576_68678,i__68578_68680);
speclj.components.install.call(null,component__7550__auto___68683,description__7549__auto____$2);


var G__68684 = seq__68575_68677;
var G__68685 = chunk__68576_68678;
var G__68686 = count__68577_68679;
var G__68687 = (i__68578_68680 + (1));
seq__68575_68677 = G__68684;
chunk__68576_68678 = G__68685;
count__68577_68679 = G__68686;
i__68578_68680 = G__68687;
continue;
} else {
var temp__5753__auto___68688 = cljs.core.seq.call(null,seq__68575_68677);
if(temp__5753__auto___68688){
var seq__68575_68689__$1 = temp__5753__auto___68688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68575_68689__$1)){
var c__5568__auto___68690 = cljs.core.chunk_first.call(null,seq__68575_68689__$1);
var G__68691 = cljs.core.chunk_rest.call(null,seq__68575_68689__$1);
var G__68692 = c__5568__auto___68690;
var G__68693 = cljs.core.count.call(null,c__5568__auto___68690);
var G__68694 = (0);
seq__68575_68677 = G__68691;
chunk__68576_68678 = G__68692;
count__68577_68679 = G__68693;
i__68578_68680 = G__68694;
continue;
} else {
var component__7550__auto___68695 = cljs.core.first.call(null,seq__68575_68689__$1);
speclj.components.install.call(null,component__7550__auto___68695,description__7549__auto____$2);


var G__68696 = cljs.core.next.call(null,seq__68575_68689__$1);
var G__68697 = null;
var G__68698 = (0);
var G__68699 = (0);
seq__68575_68677 = G__68696;
chunk__68576_68678 = G__68697;
count__68577_68679 = G__68698;
i__68578_68680 = G__68699;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__68573_68675);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$2);
}

return description__7549__auto____$2;
})(),speclj.components.new_characteristic.call(null,"Size",((function (_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
tic_tac_toe.web_ui.set_size.call(null);

var value__7664__auto___68700 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"3x3");
if((!(value__7664__auto___68700))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68700 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68700)),""].join('')));
} else {
}

var value__7664__auto___68701 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"4x4");
if((!(value__7664__auto___68701))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto___68701 == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto___68701)),""].join('')));
} else {
}

var value__7664__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"3x3x3");
if((!(value__7664__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7664__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7664__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__68529_68642,_STAR_parent_description_STAR__temp_val__68530_68643,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false)],null)));
var chunk__68532_68645 = null;
var count__68533_68646 = (0);
var i__68534_68647 = (0);
while(true){
if((i__68534_68647 < count__68533_68646)){
var component__7550__auto___68702 = cljs.core._nth.call(null,chunk__68532_68645,i__68534_68647);
speclj.components.install.call(null,component__7550__auto___68702,description__7549__auto____$1);


var G__68703 = seq__68531_68644;
var G__68704 = chunk__68532_68645;
var G__68705 = count__68533_68646;
var G__68706 = (i__68534_68647 + (1));
seq__68531_68644 = G__68703;
chunk__68532_68645 = G__68704;
count__68533_68646 = G__68705;
i__68534_68647 = G__68706;
continue;
} else {
var temp__5753__auto___68707 = cljs.core.seq.call(null,seq__68531_68644);
if(temp__5753__auto___68707){
var seq__68531_68708__$1 = temp__5753__auto___68707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68531_68708__$1)){
var c__5568__auto___68709 = cljs.core.chunk_first.call(null,seq__68531_68708__$1);
var G__68710 = cljs.core.chunk_rest.call(null,seq__68531_68708__$1);
var G__68711 = c__5568__auto___68709;
var G__68712 = cljs.core.count.call(null,c__5568__auto___68709);
var G__68713 = (0);
seq__68531_68644 = G__68710;
chunk__68532_68645 = G__68711;
count__68533_68646 = G__68712;
i__68534_68647 = G__68713;
continue;
} else {
var component__7550__auto___68714 = cljs.core.first.call(null,seq__68531_68708__$1);
speclj.components.install.call(null,component__7550__auto___68714,description__7549__auto____$1);


var G__68715 = cljs.core.next.call(null,seq__68531_68708__$1);
var G__68716 = null;
var G__68717 = (0);
var G__68718 = (0);
seq__68531_68644 = G__68715;
chunk__68532_68645 = G__68716;
count__68533_68646 = G__68717;
i__68534_68647 = G__68718;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__68529_68642);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})(),(function (){var description__7549__auto____$1 = speclj.components.new_description.call(null,"gets options to display as buttons by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__68583_68719 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__68584_68720 = description__7549__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__68584_68720);

try{var seq__68585_68721 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"getting the vector of options out of a print statement",((function (_STAR_parent_description_STAR__orig_val__68583_68719,_STAR_parent_description_STAR__temp_val__68584_68720,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var expected__7676__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Single Player\n","Two Player\n","AI vs. AI\n","Close Program\n"], null);
var actual__7677__auto__ = tic_tac_toe.web_ui.get_options_vector.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.option_selector.menu_options));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__68583_68719,_STAR_parent_description_STAR__temp_val__68584_68720,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false),speclj.components.new_characteristic.call(null,"get the supposed values out of each vector option",((function (_STAR_parent_description_STAR__orig_val__68583_68719,_STAR_parent_description_STAR__temp_val__68584_68720,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var expected__7676__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4"], null);
var actual__7677__auto__ = tic_tac_toe.web_ui.get_values.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.option_selector.menu_options));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__68583_68719,_STAR_parent_description_STAR__temp_val__68584_68720,description__7549__auto____$1,_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false)],null)));
var chunk__68586_68722 = null;
var count__68587_68723 = (0);
var i__68588_68724 = (0);
while(true){
if((i__68588_68724 < count__68587_68723)){
var component__7550__auto___68725 = cljs.core._nth.call(null,chunk__68586_68722,i__68588_68724);
speclj.components.install.call(null,component__7550__auto___68725,description__7549__auto____$1);


var G__68726 = seq__68585_68721;
var G__68727 = chunk__68586_68722;
var G__68728 = count__68587_68723;
var G__68729 = (i__68588_68724 + (1));
seq__68585_68721 = G__68726;
chunk__68586_68722 = G__68727;
count__68587_68723 = G__68728;
i__68588_68724 = G__68729;
continue;
} else {
var temp__5753__auto___68730 = cljs.core.seq.call(null,seq__68585_68721);
if(temp__5753__auto___68730){
var seq__68585_68731__$1 = temp__5753__auto___68730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68585_68731__$1)){
var c__5568__auto___68732 = cljs.core.chunk_first.call(null,seq__68585_68731__$1);
var G__68733 = cljs.core.chunk_rest.call(null,seq__68585_68731__$1);
var G__68734 = c__5568__auto___68732;
var G__68735 = cljs.core.count.call(null,c__5568__auto___68732);
var G__68736 = (0);
seq__68585_68721 = G__68733;
chunk__68586_68722 = G__68734;
count__68587_68723 = G__68735;
i__68588_68724 = G__68736;
continue;
} else {
var component__7550__auto___68737 = cljs.core.first.call(null,seq__68585_68731__$1);
speclj.components.install.call(null,component__7550__auto___68737,description__7549__auto____$1);


var G__68738 = cljs.core.next.call(null,seq__68585_68731__$1);
var G__68739 = null;
var G__68740 = (0);
var G__68741 = (0);
seq__68585_68721 = G__68738;
chunk__68586_68722 = G__68739;
count__68587_68723 = G__68740;
i__68588_68724 = G__68741;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__68583_68719);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto____$1);
}

return description__7549__auto____$1;
})(),speclj.components.new_characteristic.call(null,"displays a row",((function (_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589){
return (function (){
var expected__7676__auto___68742 = ["([:button {:on-click #object[Function], :style {:width \"150px\", ",":height \"150px\", :vertical-align \"middle\", :font-size \"80px\"}} ","\" \"] [:button {:on-click #object[Function], :style {:width \"150px\", ",":height \"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \" ","\"] [:button {:on-click #object[Function], :style {:width \"150px\", :height ","\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \" \"])"].join('');
var actual__7677__auto___68743 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(0),(1)));
if(cljs.core._EQ_.call(null,expected__7676__auto___68742,actual__7677__auto___68743)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto___68742 == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto___68742)),speclj.platform.endl,"     got: ",(((actual__7677__auto___68743 == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto___68743))," (using =)"].join('')));
}

var expected__7676__auto__ = ["([:button {:on-click #object[Function], :style {:width \"150px\", :height ","\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \"X\"] ","[:button {:on-click #object[Function], :style {:width \"150px\", :height ","\"150px\", :vertical-align \"middle\", :font-size \"80px\"}} \"X\"] ","[:button {:on-click #object[Function], :style {:width \"150px\", :height \"150px\", ",":vertical-align \"middle\", :font-size \"80px\"}} \"X\"])"].join('');
var actual__7677__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1),(1)));
if(cljs.core._EQ_.call(null,expected__7676__auto__,actual__7677__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7676__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7676__auto__)),speclj.platform.endl,"     got: ",(((actual__7677__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7677__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__68383_68590,_STAR_parent_description_STAR__temp_val__68384_68591,description__7549__auto___68589))
,false)],null)));
var chunk__68386_68593 = null;
var count__68387_68594 = (0);
var i__68388_68595 = (0);
while(true){
if((i__68388_68595 < count__68387_68594)){
var component__7550__auto___68744 = cljs.core._nth.call(null,chunk__68386_68593,i__68388_68595);
speclj.components.install.call(null,component__7550__auto___68744,description__7549__auto___68589);


var G__68745 = seq__68385_68592;
var G__68746 = chunk__68386_68593;
var G__68747 = count__68387_68594;
var G__68748 = (i__68388_68595 + (1));
seq__68385_68592 = G__68745;
chunk__68386_68593 = G__68746;
count__68387_68594 = G__68747;
i__68388_68595 = G__68748;
continue;
} else {
var temp__5753__auto___68749 = cljs.core.seq.call(null,seq__68385_68592);
if(temp__5753__auto___68749){
var seq__68385_68750__$1 = temp__5753__auto___68749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68385_68750__$1)){
var c__5568__auto___68751 = cljs.core.chunk_first.call(null,seq__68385_68750__$1);
var G__68752 = cljs.core.chunk_rest.call(null,seq__68385_68750__$1);
var G__68753 = c__5568__auto___68751;
var G__68754 = cljs.core.count.call(null,c__5568__auto___68751);
var G__68755 = (0);
seq__68385_68592 = G__68752;
chunk__68386_68593 = G__68753;
count__68387_68594 = G__68754;
i__68388_68595 = G__68755;
continue;
} else {
var component__7550__auto___68756 = cljs.core.first.call(null,seq__68385_68750__$1);
speclj.components.install.call(null,component__7550__auto___68756,description__7549__auto___68589);


var G__68757 = cljs.core.next.call(null,seq__68385_68750__$1);
var G__68758 = null;
var G__68759 = (0);
var G__68760 = (0);
seq__68385_68592 = G__68757;
chunk__68386_68593 = G__68758;
count__68387_68594 = G__68759;
i__68388_68595 = G__68760;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__68383_68590);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7549__auto___68589);
}


//# sourceMappingURL=web_ui_spec.js.map
