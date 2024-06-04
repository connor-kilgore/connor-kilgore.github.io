// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.web_ui');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('clojure.string');
tic_tac_toe.web_ui_spec.example_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(5),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"save-location","save-location",1426336611),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentVector.EMPTY], null);
var description__8694__auto___10814 = speclj.components.new_description.call(null,"Web UI",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10512_10815 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10513_10816 = description__8694__auto___10814;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10513_10816);

try{var seq__10514_10817 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,14,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if the current move is a valid player move",((function (_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var value__8815__auto__ = tic_tac_toe.web_ui.valid_player_move_QMARK_.call(null,tic_tac_toe.web_ui_spec.example_game,(3),(1));
if((!(value__8815__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"Initializes the UI by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10666_10821 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10667_10822 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10667_10822);

try{var seq__10668_10823 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"rendering the html",((function (_STAR_parent_description_STAR__orig_val__10666_10821,_STAR_parent_description_STAR__temp_val__10667_10822,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var call_game_initialize_orig_val__10680 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__10681 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__10682 = (function (){
return tic_tac_toe.web_ui.render_root.call(null);
});
var render_root_temp_val__10683 = (function (){
return "rendering!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__10682);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__10683);

try{var expected__8827__auto__ = "rendering!";
var actual__8828__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__10681);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__10680);
}});})(_STAR_parent_description_STAR__orig_val__10666_10821,_STAR_parent_description_STAR__temp_val__10667_10822,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"initializing the game",((function (_STAR_parent_description_STAR__orig_val__10666_10821,_STAR_parent_description_STAR__temp_val__10667_10822,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var call_game_initialize_orig_val__10684 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__10685 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__10686 = (function (){
return "starting game!";
});
var render_root_temp_val__10687 = (function (){
return null;
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__10686);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__10687);

try{var expected__8827__auto__ = "starting game!";
var actual__8828__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__10685);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__10684);
}});})(_STAR_parent_description_STAR__orig_val__10666_10821,_STAR_parent_description_STAR__temp_val__10667_10822,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10669_10824 = null;
var count__10670_10825 = (0);
var i__10671_10826 = (0);
while(true){
if((i__10671_10826 < count__10670_10825)){
var component__8695__auto___10827 = cljs.core._nth.call(null,chunk__10669_10824,i__10671_10826);
speclj.components.install.call(null,component__8695__auto___10827,description__8694__auto____$1);


var G__10828 = seq__10668_10823;
var G__10829 = chunk__10669_10824;
var G__10830 = count__10670_10825;
var G__10831 = (i__10671_10826 + (1));
seq__10668_10823 = G__10828;
chunk__10669_10824 = G__10829;
count__10670_10825 = G__10830;
i__10671_10826 = G__10831;
continue;
} else {
var temp__5753__auto___10832 = cljs.core.seq.call(null,seq__10668_10823);
if(temp__5753__auto___10832){
var seq__10668_10833__$1 = temp__5753__auto___10832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10668_10833__$1)){
var c__5568__auto___10834 = cljs.core.chunk_first.call(null,seq__10668_10833__$1);
var G__10835 = cljs.core.chunk_rest.call(null,seq__10668_10833__$1);
var G__10836 = c__5568__auto___10834;
var G__10837 = cljs.core.count.call(null,c__5568__auto___10834);
var G__10838 = (0);
seq__10668_10823 = G__10835;
chunk__10669_10824 = G__10836;
count__10670_10825 = G__10837;
i__10671_10826 = G__10838;
continue;
} else {
var component__8695__auto___10839 = cljs.core.first.call(null,seq__10668_10833__$1);
speclj.components.install.call(null,component__8695__auto___10839,description__8694__auto____$1);


var G__10840 = cljs.core.next.call(null,seq__10668_10833__$1);
var G__10841 = null;
var G__10842 = (0);
var G__10843 = (0);
seq__10668_10823 = G__10840;
chunk__10669_10824 = G__10841;
count__10670_10825 = G__10842;
i__10671_10826 = G__10843;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10666_10821);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"Initializes a game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10688_10844 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10689_10845 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10689_10845);

try{var seq__10690_10846 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the game-state atom",((function (_STAR_parent_description_STAR__orig_val__10688_10844,_STAR_parent_description_STAR__temp_val__10689_10845,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,null);

var value__8815__auto___10850 = (cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state) == null);
if((!(value__8815__auto___10850))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto___10850 == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto___10850)),""].join('')));
} else {
}

tic_tac_toe.web_ui.call_game_initialize.call(null);

var value__8821__auto__ = (cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state) == null);
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10688_10844,_STAR_parent_description_STAR__temp_val__10689_10845,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"rendering the title",((function (_STAR_parent_description_STAR__orig_val__10688_10844,_STAR_parent_description_STAR__temp_val__10689_10845,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
tic_tac_toe.web_ui.call_game_initialize.call(null);

var value__8815__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Welcome to TicTacToe!");
if((!(value__8815__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10688_10844,_STAR_parent_description_STAR__temp_val__10689_10845,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"rendering the game options",((function (_STAR_parent_description_STAR__orig_val__10688_10844,_STAR_parent_description_STAR__temp_val__10689_10845,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var set_options_orig_val__10696 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__10697 = (function (){
return "rendering options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__10697);

try{var expected__8827__auto__ = "rendering options!";
var actual__8828__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__10696);
}});})(_STAR_parent_description_STAR__orig_val__10688_10844,_STAR_parent_description_STAR__temp_val__10689_10845,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10691_10847 = null;
var count__10692_10848 = (0);
var i__10693_10849 = (0);
while(true){
if((i__10693_10849 < count__10692_10848)){
var component__8695__auto___10851 = cljs.core._nth.call(null,chunk__10691_10847,i__10693_10849);
speclj.components.install.call(null,component__8695__auto___10851,description__8694__auto____$1);


var G__10852 = seq__10690_10846;
var G__10853 = chunk__10691_10847;
var G__10854 = count__10692_10848;
var G__10855 = (i__10693_10849 + (1));
seq__10690_10846 = G__10852;
chunk__10691_10847 = G__10853;
count__10692_10848 = G__10854;
i__10693_10849 = G__10855;
continue;
} else {
var temp__5753__auto___10856 = cljs.core.seq.call(null,seq__10690_10846);
if(temp__5753__auto___10856){
var seq__10690_10857__$1 = temp__5753__auto___10856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10690_10857__$1)){
var c__5568__auto___10858 = cljs.core.chunk_first.call(null,seq__10690_10857__$1);
var G__10859 = cljs.core.chunk_rest.call(null,seq__10690_10857__$1);
var G__10860 = c__5568__auto___10858;
var G__10861 = cljs.core.count.call(null,c__5568__auto___10858);
var G__10862 = (0);
seq__10690_10846 = G__10859;
chunk__10691_10847 = G__10860;
count__10692_10848 = G__10861;
i__10693_10849 = G__10862;
continue;
} else {
var component__8695__auto___10863 = cljs.core.first.call(null,seq__10690_10857__$1);
speclj.components.install.call(null,component__8695__auto___10863,description__8694__auto____$1);


var G__10864 = cljs.core.next.call(null,seq__10690_10857__$1);
var G__10865 = null;
var G__10866 = (0);
var G__10867 = (0);
seq__10690_10846 = G__10864;
chunk__10691_10847 = G__10865;
count__10692_10848 = G__10866;
i__10693_10849 = G__10867;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10688_10844);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"renders the options by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10698_10868 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10699_10869 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10699_10869);

try{var seq__10700_10870 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the page",((function (_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var old_page = cljs.core.deref.call(null,tic_tac_toe.web_ui.page);
tic_tac_toe.web_ui.set_options.call(null);

var value__8821__auto__ = cljs.core._EQ_.call(null,old_page,cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"creating a form",((function (_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var expected__8827__auto__ = new cljs.core.Keyword(null,"form","form",-1624062471);
var actual__8828__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"always giving game-mode options",((function (_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var expected__8827__auto___10874 = "Player vs. AI";
var actual__8828__auto___10875 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__8827__auto___10874,actual__8828__auto___10875)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10874 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10874)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10875 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10875))," (using =)"].join('')));
}

var expected__8827__auto__ = "Player vs. Player";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"only giving symbol options if NOT Player vs. Player",((function (_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"player-one","player-one",-450954926));

tic_tac_toe.web_ui.set_options.call(null);

var expected__8827__auto___10876 = "X (first turn)";
var actual__8828__auto___10877 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2))));
if(cljs.core._EQ_.call(null,expected__8827__auto___10876,actual__8828__auto___10877)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10876 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10876)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10877 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10877))," (using =)"].join('')));
}

var expected__8827__auto___10878 = "O (second turn)";
var actual__8828__auto___10879 = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2))));
if(cljs.core._EQ_.call(null,expected__8827__auto___10878,actual__8828__auto___10879)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10878 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10878)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10879 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10879))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"));

tic_tac_toe.web_ui.set_options.call(null);

var value__8821__auto___10880 = cljs.core._EQ_.call(null,"X (first turn)",cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2)))));
if(value__8821__auto___10880){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___10880 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___10880))].join('')));
} else {
}

var value__8821__auto__ = cljs.core._EQ_.call(null,"O (second turn)",cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2)))));
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"only giving difficulty options if NOT Player vs. Player",((function (_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"player-one","player-one",-450954926));

tic_tac_toe.web_ui.set_options.call(null);

var expected__8827__auto___10881 = "Unbeatable";
var actual__8828__auto___10882 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3))));
if(cljs.core._EQ_.call(null,expected__8827__auto___10881,actual__8828__auto___10882)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10881 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10881)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10882 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10882))," (using =)"].join('')));
}

var expected__8827__auto___10883 = "Medium";
var actual__8828__auto___10884 = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)),(2)));
if(cljs.core._EQ_.call(null,expected__8827__auto___10883,actual__8828__auto___10884)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10883 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10883)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10884 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10884))," (using =)"].join('')));
}

var expected__8827__auto___10885 = "Easy";
var actual__8828__auto___10886 = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3))));
if(cljs.core._EQ_.call(null,expected__8827__auto___10885,actual__8828__auto___10886)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10885 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10885)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10886 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10886))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"));

tic_tac_toe.web_ui.set_options.call(null);

var value__8821__auto___10887 = cljs.core._EQ_.call(null,"Unbeatable",cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)))));
if(value__8821__auto___10887){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___10887 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___10887))].join('')));
} else {
}

var value__8821__auto___10888 = cljs.core._EQ_.call(null,"Medium",cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)),(2))));
if(value__8821__auto___10888){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___10888 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___10888))].join('')));
} else {
}

var value__8821__auto__ = cljs.core._EQ_.call(null,"Easy",cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)))));
if(value__8821__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"always giving size options",((function (_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var second_to_last = (cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))) - (2));
var expected__8827__auto___10889 = "3x3";
var actual__8828__auto___10890 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last)));
if(cljs.core._EQ_.call(null,expected__8827__auto___10889,actual__8828__auto___10890)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10889 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10889)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10890 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10890))," (using =)"].join('')));
}

var expected__8827__auto___10891 = "4x4";
var actual__8828__auto___10892 = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last),(2)));
if(cljs.core._EQ_.call(null,expected__8827__auto___10891,actual__8828__auto___10892)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10891 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10891)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10892 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10892))," (using =)"].join('')));
}

var expected__8827__auto__ = "3x3x3";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"giving a start button",((function (_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var expected__8827__auto__ = "Start!";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10698_10868,_STAR_parent_description_STAR__temp_val__10699_10869,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10701_10871 = null;
var count__10702_10872 = (0);
var i__10703_10873 = (0);
while(true){
if((i__10703_10873 < count__10702_10872)){
var component__8695__auto___10893 = cljs.core._nth.call(null,chunk__10701_10871,i__10703_10873);
speclj.components.install.call(null,component__8695__auto___10893,description__8694__auto____$1);


var G__10894 = seq__10700_10870;
var G__10895 = chunk__10701_10871;
var G__10896 = count__10702_10872;
var G__10897 = (i__10703_10873 + (1));
seq__10700_10870 = G__10894;
chunk__10701_10871 = G__10895;
count__10702_10872 = G__10896;
i__10703_10873 = G__10897;
continue;
} else {
var temp__5753__auto___10898 = cljs.core.seq.call(null,seq__10700_10870);
if(temp__5753__auto___10898){
var seq__10700_10899__$1 = temp__5753__auto___10898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10700_10899__$1)){
var c__5568__auto___10900 = cljs.core.chunk_first.call(null,seq__10700_10899__$1);
var G__10901 = cljs.core.chunk_rest.call(null,seq__10700_10899__$1);
var G__10902 = c__5568__auto___10900;
var G__10903 = cljs.core.count.call(null,c__5568__auto___10900);
var G__10904 = (0);
seq__10700_10870 = G__10901;
chunk__10701_10871 = G__10902;
count__10702_10872 = G__10903;
i__10703_10873 = G__10904;
continue;
} else {
var component__8695__auto___10905 = cljs.core.first.call(null,seq__10700_10899__$1);
speclj.components.install.call(null,component__8695__auto___10905,description__8694__auto____$1);


var G__10906 = cljs.core.next.call(null,seq__10700_10899__$1);
var G__10907 = null;
var G__10908 = (0);
var G__10909 = (0);
seq__10700_10870 = G__10906;
chunk__10701_10871 = G__10907;
count__10702_10872 = G__10908;
i__10703_10873 = G__10909;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10698_10868);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"starts the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10704_10910 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10705_10911 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10705_10911);

try{var seq__10706_10912 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the players to actual players and not a config",((function (_STAR_parent_description_STAR__orig_val__10704_10910,_STAR_parent_description_STAR__temp_val__10705_10911,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var game_round_orig_val__10714 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__10715 = (function (_){
return null;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__10715);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null));

tic_tac_toe.web_ui.start_game.call(null);

var expected__8827__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null);
var actual__8828__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__10714);
}});})(_STAR_parent_description_STAR__orig_val__10704_10910,_STAR_parent_description_STAR__temp_val__10705_10911,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"running a game round",((function (_STAR_parent_description_STAR__orig_val__10704_10910,_STAR_parent_description_STAR__temp_val__10705_10911,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var game_round_orig_val__10716 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__10717 = (function (_){
return "game round!";
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__10717);

try{var expected__8827__auto__ = "game round!";
var actual__8828__auto__ = tic_tac_toe.web_ui.start_game.call(null);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__10716);
}});})(_STAR_parent_description_STAR__orig_val__10704_10910,_STAR_parent_description_STAR__temp_val__10705_10911,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10707_10913 = null;
var count__10708_10914 = (0);
var i__10709_10915 = (0);
while(true){
if((i__10709_10915 < count__10708_10914)){
var component__8695__auto___10916 = cljs.core._nth.call(null,chunk__10707_10913,i__10709_10915);
speclj.components.install.call(null,component__8695__auto___10916,description__8694__auto____$1);


var G__10917 = seq__10706_10912;
var G__10918 = chunk__10707_10913;
var G__10919 = count__10708_10914;
var G__10920 = (i__10709_10915 + (1));
seq__10706_10912 = G__10917;
chunk__10707_10913 = G__10918;
count__10708_10914 = G__10919;
i__10709_10915 = G__10920;
continue;
} else {
var temp__5753__auto___10921 = cljs.core.seq.call(null,seq__10706_10912);
if(temp__5753__auto___10921){
var seq__10706_10922__$1 = temp__5753__auto___10921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10706_10922__$1)){
var c__5568__auto___10923 = cljs.core.chunk_first.call(null,seq__10706_10922__$1);
var G__10924 = cljs.core.chunk_rest.call(null,seq__10706_10922__$1);
var G__10925 = c__5568__auto___10923;
var G__10926 = cljs.core.count.call(null,c__5568__auto___10923);
var G__10927 = (0);
seq__10706_10912 = G__10924;
chunk__10707_10913 = G__10925;
count__10708_10914 = G__10926;
i__10709_10915 = G__10927;
continue;
} else {
var component__8695__auto___10928 = cljs.core.first.call(null,seq__10706_10922__$1);
speclj.components.install.call(null,component__8695__auto___10928,description__8694__auto____$1);


var G__10929 = cljs.core.next.call(null,seq__10706_10922__$1);
var G__10930 = null;
var G__10931 = (0);
var G__10932 = (0);
seq__10706_10912 = G__10929;
chunk__10707_10913 = G__10930;
count__10708_10914 = G__10931;
i__10709_10915 = G__10932;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10704_10910);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"updates the attributes of the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10718_10933 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10719_10934 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10719_10934);

try{var seq__10720_10935 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the game state",((function (_STAR_parent_description_STAR__orig_val__10718_10933,_STAR_parent_description_STAR__temp_val__10719_10934,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.menu_options,"1",new cljs.core.Keyword(null,"players","players",-1361554569));

var expected__8827__auto___10939 = new cljs.core.Keyword(null,"one-player","one-player",-1358620345);
var actual__8828__auto___10940 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto___10939,actual__8828__auto___10940)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10939 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10939)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10940 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10940))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.menu_options,"2",new cljs.core.Keyword(null,"players","players",-1361554569));

var expected__8827__auto___10941 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),false,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"Player 2",(2)], null)], null);
var actual__8828__auto___10942 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto___10941,actual__8828__auto___10942)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10941 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10941)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10942 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10942))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,"1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));

var expected__8827__auto__ = (10);
var actual__8828__auto__ = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10718_10933,_STAR_parent_description_STAR__temp_val__10719_10934,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"re-rendering the options",((function (_STAR_parent_description_STAR__orig_val__10718_10933,_STAR_parent_description_STAR__temp_val__10719_10934,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var set_options_orig_val__10726 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__10727 = (function (){
return "set options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__10727);

try{var expected__8827__auto__ = "set options!";
var actual__8828__auto__ = tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,"1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__10726);
}});})(_STAR_parent_description_STAR__orig_val__10718_10933,_STAR_parent_description_STAR__temp_val__10719_10934,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10721_10936 = null;
var count__10722_10937 = (0);
var i__10723_10938 = (0);
while(true){
if((i__10723_10938 < count__10722_10937)){
var component__8695__auto___10943 = cljs.core._nth.call(null,chunk__10721_10936,i__10723_10938);
speclj.components.install.call(null,component__8695__auto___10943,description__8694__auto____$1);


var G__10944 = seq__10720_10935;
var G__10945 = chunk__10721_10936;
var G__10946 = count__10722_10937;
var G__10947 = (i__10723_10938 + (1));
seq__10720_10935 = G__10944;
chunk__10721_10936 = G__10945;
count__10722_10937 = G__10946;
i__10723_10938 = G__10947;
continue;
} else {
var temp__5753__auto___10948 = cljs.core.seq.call(null,seq__10720_10935);
if(temp__5753__auto___10948){
var seq__10720_10949__$1 = temp__5753__auto___10948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10720_10949__$1)){
var c__5568__auto___10950 = cljs.core.chunk_first.call(null,seq__10720_10949__$1);
var G__10951 = cljs.core.chunk_rest.call(null,seq__10720_10949__$1);
var G__10952 = c__5568__auto___10950;
var G__10953 = cljs.core.count.call(null,c__5568__auto___10950);
var G__10954 = (0);
seq__10720_10935 = G__10951;
chunk__10721_10936 = G__10952;
count__10722_10937 = G__10953;
i__10723_10938 = G__10954;
continue;
} else {
var component__8695__auto___10955 = cljs.core.first.call(null,seq__10720_10949__$1);
speclj.components.install.call(null,component__8695__auto___10955,description__8694__auto____$1);


var G__10956 = cljs.core.next.call(null,seq__10720_10949__$1);
var G__10957 = null;
var G__10958 = (0);
var G__10959 = (0);
seq__10720_10935 = G__10956;
chunk__10721_10936 = G__10957;
count__10722_10937 = G__10958;
i__10723_10938 = G__10959;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10718_10933);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"updates the size of the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10728_10960 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10729_10961 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10729_10961);

try{var seq__10730_10962 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating three-d? and board of the game-state",((function (_STAR_parent_description_STAR__orig_val__10728_10960,_STAR_parent_description_STAR__temp_val__10729_10961,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));

var value__8821__auto___10966 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.truth_(value__8821__auto___10966)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___10966 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___10966))].join('')));
} else {
}

var expected__8827__auto___10967 = cljs.core.repeat.call(null,(16),(0));
var actual__8828__auto___10968 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto___10967,actual__8828__auto___10968)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10967 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10967)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10968 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10968))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null));

var value__8815__auto___10969 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.not.call(null,value__8815__auto___10969)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto___10969 == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto___10969)),""].join('')));
} else {
}

var expected__8827__auto__ = cljs.core.repeat.call(null,(27),(0));
var actual__8828__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10728_10960,_STAR_parent_description_STAR__temp_val__10729_10961,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"re-rendering the options",((function (_STAR_parent_description_STAR__orig_val__10728_10960,_STAR_parent_description_STAR__temp_val__10729_10961,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var set_options_orig_val__10736 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__10737 = (function (){
return "set options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__10737);

try{var expected__8827__auto__ = "set options!";
var actual__8828__auto__ = tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__10736);
}});})(_STAR_parent_description_STAR__orig_val__10728_10960,_STAR_parent_description_STAR__temp_val__10729_10961,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10731_10963 = null;
var count__10732_10964 = (0);
var i__10733_10965 = (0);
while(true){
if((i__10733_10965 < count__10732_10964)){
var component__8695__auto___10970 = cljs.core._nth.call(null,chunk__10731_10963,i__10733_10965);
speclj.components.install.call(null,component__8695__auto___10970,description__8694__auto____$1);


var G__10971 = seq__10730_10962;
var G__10972 = chunk__10731_10963;
var G__10973 = count__10732_10964;
var G__10974 = (i__10733_10965 + (1));
seq__10730_10962 = G__10971;
chunk__10731_10963 = G__10972;
count__10732_10964 = G__10973;
i__10733_10965 = G__10974;
continue;
} else {
var temp__5753__auto___10975 = cljs.core.seq.call(null,seq__10730_10962);
if(temp__5753__auto___10975){
var seq__10730_10976__$1 = temp__5753__auto___10975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10730_10976__$1)){
var c__5568__auto___10977 = cljs.core.chunk_first.call(null,seq__10730_10976__$1);
var G__10978 = cljs.core.chunk_rest.call(null,seq__10730_10976__$1);
var G__10979 = c__5568__auto___10977;
var G__10980 = cljs.core.count.call(null,c__5568__auto___10977);
var G__10981 = (0);
seq__10730_10962 = G__10978;
chunk__10731_10963 = G__10979;
count__10732_10964 = G__10980;
i__10733_10965 = G__10981;
continue;
} else {
var component__8695__auto___10982 = cljs.core.first.call(null,seq__10730_10976__$1);
speclj.components.install.call(null,component__8695__auto___10982,description__8694__auto____$1);


var G__10983 = cljs.core.next.call(null,seq__10730_10976__$1);
var G__10984 = null;
var G__10985 = (0);
var G__10986 = (0);
seq__10730_10962 = G__10983;
chunk__10731_10963 = G__10984;
count__10732_10964 = G__10985;
i__10733_10965 = G__10986;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10728_10960);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gets a default game for web-ui",((function (_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var default_game = tic_tac_toe.web_ui.get_default_game.call(null);
var expected__8827__auto___10987 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null)], null);
var actual__8828__auto___10988 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__8827__auto___10987,actual__8828__auto___10988)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10987 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10987)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10988 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10988))," (using =)"].join('')));
}

var expected__8827__auto___10989 = (10);
var actual__8828__auto___10990 = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__8827__auto___10989,actual__8828__auto___10990)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10989 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10989)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10990 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10990))," (using =)"].join('')));
}

var expected__8827__auto___10991 = cljs.core.repeat.call(null,(9),(0));
var actual__8828__auto___10992 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__8827__auto___10991,actual__8828__auto___10992)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___10991 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___10991)),speclj.platform.endl,"     got: ",(((actual__8828__auto___10992 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___10992))," (using =)"].join('')));
}

var value__8821__auto___10993 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core.truth_(value__8821__auto___10993)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8821__auto___10993 == null))?"nil":cljs.core.pr_str.call(null,value__8821__auto___10993))].join('')));
} else {
}

var value__8815__auto___10994 = (new cljs.core.Keyword(null,"save-location","save-location",1426336611).cljs$core$IFn$_invoke$arity$1(default_game) == null);
if((!(value__8815__auto___10994))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8815__auto___10994 == null))?"nil":cljs.core.pr_str.call(null,value__8815__auto___10994)),""].join('')));
} else {
}

var expected__8827__auto__ = new cljs.core.Keyword(null,"web-ui","web-ui",802472408);
var actual__8828__auto__ = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"ends the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10738_10995 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10739_10996 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10739_10996);

try{var seq__10740_10997 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"displaying an end condition on the page",((function (_STAR_parent_description_STAR__orig_val__10738_10995,_STAR_parent_description_STAR__temp_val__10739_10996,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),"AI Wins!"], null));

var expected__8827__auto__ = "AI Wins!";
var actual__8828__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10738_10995,_STAR_parent_description_STAR__temp_val__10739_10996,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"Giving the user the option to retry",((function (_STAR_parent_description_STAR__orig_val__10738_10995,_STAR_parent_description_STAR__temp_val__10739_10996,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var expected__8827__auto__ = "Retry";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),(2)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10738_10995,_STAR_parent_description_STAR__temp_val__10739_10996,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"Giving the user the option to go back to menu",((function (_STAR_parent_description_STAR__orig_val__10738_10995,_STAR_parent_description_STAR__temp_val__10739_10996,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var expected__8827__auto__ = "Back to Menu";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10738_10995,_STAR_parent_description_STAR__temp_val__10739_10996,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10741_10998 = null;
var count__10742_10999 = (0);
var i__10743_11000 = (0);
while(true){
if((i__10743_11000 < count__10742_10999)){
var component__8695__auto___11001 = cljs.core._nth.call(null,chunk__10741_10998,i__10743_11000);
speclj.components.install.call(null,component__8695__auto___11001,description__8694__auto____$1);


var G__11002 = seq__10740_10997;
var G__11003 = chunk__10741_10998;
var G__11004 = count__10742_10999;
var G__11005 = (i__10743_11000 + (1));
seq__10740_10997 = G__11002;
chunk__10741_10998 = G__11003;
count__10742_10999 = G__11004;
i__10743_11000 = G__11005;
continue;
} else {
var temp__5753__auto___11006 = cljs.core.seq.call(null,seq__10740_10997);
if(temp__5753__auto___11006){
var seq__10740_11007__$1 = temp__5753__auto___11006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10740_11007__$1)){
var c__5568__auto___11008 = cljs.core.chunk_first.call(null,seq__10740_11007__$1);
var G__11009 = cljs.core.chunk_rest.call(null,seq__10740_11007__$1);
var G__11010 = c__5568__auto___11008;
var G__11011 = cljs.core.count.call(null,c__5568__auto___11008);
var G__11012 = (0);
seq__10740_10997 = G__11009;
chunk__10741_10998 = G__11010;
count__10742_10999 = G__11011;
i__10743_11000 = G__11012;
continue;
} else {
var component__8695__auto___11013 = cljs.core.first.call(null,seq__10740_11007__$1);
speclj.components.install.call(null,component__8695__auto___11013,description__8694__auto____$1);


var G__11014 = cljs.core.next.call(null,seq__10740_11007__$1);
var G__11015 = null;
var G__11016 = (0);
var G__11017 = (0);
seq__10740_10997 = G__11014;
chunk__10741_10998 = G__11015;
count__10742_10999 = G__11016;
i__10743_11000 = G__11017;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10738_10995);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"resets the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10744_11018 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10745_11019 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10745_11019);

try{var seq__10746_11020 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the page text back to the page-title",((function (_STAR_parent_description_STAR__orig_val__10744_11018,_STAR_parent_description_STAR__temp_val__10745_11019,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var game_round_orig_val__10754 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__10755 = (function (_){
return null;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__10755);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"not the title");

var expected__8827__auto___11024 = "not the title";
var actual__8828__auto___11025 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto___11024,actual__8828__auto___11025)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11024 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11024)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11025 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11025))," (using =)"].join('')));
}

tic_tac_toe.web_ui.reset_game.call(null);

var expected__8827__auto__ = "Welcome to TicTacToe!";
var actual__8828__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__10754);
}});})(_STAR_parent_description_STAR__orig_val__10744_11018,_STAR_parent_description_STAR__temp_val__10745_11019,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"resetting the game attributes and passing it into a new game-round",((function (_STAR_parent_description_STAR__orig_val__10744_11018,_STAR_parent_description_STAR__temp_val__10745_11019,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var game_round_orig_val__10756 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__10757 = (function (game){
return game;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__10757);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"round","round",2009433328),(7));

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null));

var expected__8827__auto___11026 = (7);
var actual__8828__auto___11027 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto___11026,actual__8828__auto___11027)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11026 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11026)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11027 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11027))," (using =)"].join('')));
}

var expected__8827__auto___11028 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null);
var actual__8828__auto___11029 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto___11028,actual__8828__auto___11029)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11028 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11028)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11029 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11029))," (using =)"].join('')));
}

var reset_game = tic_tac_toe.web_ui.reset_game.call(null);
var expected__8827__auto___11030 = (1);
var actual__8828__auto___11031 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(reset_game);
if(cljs.core._EQ_.call(null,expected__8827__auto___11030,actual__8828__auto___11031)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11030 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11030)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11031 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11031))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8828__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(reset_game);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__10756);
}});})(_STAR_parent_description_STAR__orig_val__10744_11018,_STAR_parent_description_STAR__temp_val__10745_11019,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10747_11021 = null;
var count__10748_11022 = (0);
var i__10749_11023 = (0);
while(true){
if((i__10749_11023 < count__10748_11022)){
var component__8695__auto___11032 = cljs.core._nth.call(null,chunk__10747_11021,i__10749_11023);
speclj.components.install.call(null,component__8695__auto___11032,description__8694__auto____$1);


var G__11033 = seq__10746_11020;
var G__11034 = chunk__10747_11021;
var G__11035 = count__10748_11022;
var G__11036 = (i__10749_11023 + (1));
seq__10746_11020 = G__11033;
chunk__10747_11021 = G__11034;
count__10748_11022 = G__11035;
i__10749_11023 = G__11036;
continue;
} else {
var temp__5753__auto___11037 = cljs.core.seq.call(null,seq__10746_11020);
if(temp__5753__auto___11037){
var seq__10746_11038__$1 = temp__5753__auto___11037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10746_11038__$1)){
var c__5568__auto___11039 = cljs.core.chunk_first.call(null,seq__10746_11038__$1);
var G__11040 = cljs.core.chunk_rest.call(null,seq__10746_11038__$1);
var G__11041 = c__5568__auto___11039;
var G__11042 = cljs.core.count.call(null,c__5568__auto___11039);
var G__11043 = (0);
seq__10746_11020 = G__11040;
chunk__10747_11021 = G__11041;
count__10748_11022 = G__11042;
i__10749_11023 = G__11043;
continue;
} else {
var component__8695__auto___11044 = cljs.core.first.call(null,seq__10746_11038__$1);
speclj.components.install.call(null,component__8695__auto___11044,description__8694__auto____$1);


var G__11045 = cljs.core.next.call(null,seq__10746_11038__$1);
var G__11046 = null;
var G__11047 = (0);
var G__11048 = (0);
seq__10746_11020 = G__11045;
chunk__10747_11021 = G__11046;
count__10748_11022 = G__11047;
i__10749_11023 = G__11048;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10744_11018);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"makes a move by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10758_11049 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10759_11050 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10759_11050);

try{var seq__10760_11051 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the page to a newly updated game-state",((function (_STAR_parent_description_STAR__orig_val__10758_11049,_STAR_parent_description_STAR__temp_val__10759_11050,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var display_board_orig_val__10768 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__10769 = (function (_){
return "board display";
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__10769);

try{tic_tac_toe.ui_interface.make_move.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(1)], null));

var expected__8827__auto__ = "board display";
var actual__8828__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__10768);
}});})(_STAR_parent_description_STAR__orig_val__10758_11049,_STAR_parent_description_STAR__temp_val__10759_11050,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"returning a keyword to indicate a user move",((function (_STAR_parent_description_STAR__orig_val__10758_11049,_STAR_parent_description_STAR__temp_val__10759_11050,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var display_board_orig_val__10770 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__10771 = (function (_){
return null;
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__10771);

try{var expected__8827__auto__ = new cljs.core.Keyword(null,"player-turn","player-turn",1660424586);
var actual__8828__auto__ = tic_tac_toe.ui_interface.make_move.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__10770);
}});})(_STAR_parent_description_STAR__orig_val__10758_11049,_STAR_parent_description_STAR__temp_val__10759_11050,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10761_11052 = null;
var count__10762_11053 = (0);
var i__10763_11054 = (0);
while(true){
if((i__10763_11054 < count__10762_11053)){
var component__8695__auto___11055 = cljs.core._nth.call(null,chunk__10761_11052,i__10763_11054);
speclj.components.install.call(null,component__8695__auto___11055,description__8694__auto____$1);


var G__11056 = seq__10760_11051;
var G__11057 = chunk__10761_11052;
var G__11058 = count__10762_11053;
var G__11059 = (i__10763_11054 + (1));
seq__10760_11051 = G__11056;
chunk__10761_11052 = G__11057;
count__10762_11053 = G__11058;
i__10763_11054 = G__11059;
continue;
} else {
var temp__5753__auto___11060 = cljs.core.seq.call(null,seq__10760_11051);
if(temp__5753__auto___11060){
var seq__10760_11061__$1 = temp__5753__auto___11060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10760_11061__$1)){
var c__5568__auto___11062 = cljs.core.chunk_first.call(null,seq__10760_11061__$1);
var G__11063 = cljs.core.chunk_rest.call(null,seq__10760_11061__$1);
var G__11064 = c__5568__auto___11062;
var G__11065 = cljs.core.count.call(null,c__5568__auto___11062);
var G__11066 = (0);
seq__10760_11051 = G__11063;
chunk__10761_11052 = G__11064;
count__10762_11053 = G__11065;
i__10763_11054 = G__11066;
continue;
} else {
var component__8695__auto___11067 = cljs.core.first.call(null,seq__10760_11061__$1);
speclj.components.install.call(null,component__8695__auto___11067,description__8694__auto____$1);


var G__11068 = cljs.core.next.call(null,seq__10760_11061__$1);
var G__11069 = null;
var G__11070 = (0);
var G__11071 = (0);
seq__10760_11051 = G__11068;
chunk__10761_11052 = G__11069;
count__10762_11053 = G__11070;
i__10763_11054 = G__11071;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10758_11049);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"gives the round output by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10772_11072 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10773_11073 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10773_11073);

try{var seq__10774_11074 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the game state to the passed in game parameter",((function (_STAR_parent_description_STAR__orig_val__10772_11072,_STAR_parent_description_STAR__temp_val__10773_11073,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var display_board_orig_val__10782 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__10783 = (function (_){
return null;
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__10783);

try{tic_tac_toe.ui_interface.round_output.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),"example"], null));

var expected__8827__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),"example"], null);
var actual__8828__auto__ = cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state);
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__10782);
}});})(_STAR_parent_description_STAR__orig_val__10772_11072,_STAR_parent_description_STAR__temp_val__10773_11073,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"updating the page to a newly updated game-state",((function (_STAR_parent_description_STAR__orig_val__10772_11072,_STAR_parent_description_STAR__temp_val__10773_11073,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var display_board_orig_val__10784 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__10785 = (function (_){
return "board display";
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__10785);

try{tic_tac_toe.ui_interface.round_output.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),tic_tac_toe.web_ui_spec.example_game], null));

var expected__8827__auto__ = "board display";
var actual__8828__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__10784);
}});})(_STAR_parent_description_STAR__orig_val__10772_11072,_STAR_parent_description_STAR__temp_val__10773_11073,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10775_11075 = null;
var count__10776_11076 = (0);
var i__10777_11077 = (0);
while(true){
if((i__10777_11077 < count__10776_11076)){
var component__8695__auto___11078 = cljs.core._nth.call(null,chunk__10775_11075,i__10777_11077);
speclj.components.install.call(null,component__8695__auto___11078,description__8694__auto____$1);


var G__11079 = seq__10774_11074;
var G__11080 = chunk__10775_11075;
var G__11081 = count__10776_11076;
var G__11082 = (i__10777_11077 + (1));
seq__10774_11074 = G__11079;
chunk__10775_11075 = G__11080;
count__10776_11076 = G__11081;
i__10777_11077 = G__11082;
continue;
} else {
var temp__5753__auto___11083 = cljs.core.seq.call(null,seq__10774_11074);
if(temp__5753__auto___11083){
var seq__10774_11084__$1 = temp__5753__auto___11083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10774_11084__$1)){
var c__5568__auto___11085 = cljs.core.chunk_first.call(null,seq__10774_11084__$1);
var G__11086 = cljs.core.chunk_rest.call(null,seq__10774_11084__$1);
var G__11087 = c__5568__auto___11085;
var G__11088 = cljs.core.count.call(null,c__5568__auto___11085);
var G__11089 = (0);
seq__10774_11074 = G__11086;
chunk__10775_11075 = G__11087;
count__10776_11076 = G__11088;
i__10777_11077 = G__11089;
continue;
} else {
var component__8695__auto___11090 = cljs.core.first.call(null,seq__10774_11084__$1);
speclj.components.install.call(null,component__8695__auto___11090,description__8694__auto____$1);


var G__11091 = cljs.core.next.call(null,seq__10774_11084__$1);
var G__11092 = null;
var G__11093 = (0);
var G__11094 = (0);
seq__10774_11074 = G__11091;
chunk__10775_11075 = G__11092;
count__10776_11076 = G__11093;
i__10777_11077 = G__11094;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10772_11072);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"displays",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10786_11095 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10787_11096 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10787_11096);

try{var seq__10788_11097 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"row 0 of a 3x3",((function (_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(0),null);
var expected__8827__auto___11101 = (3);
var actual__8828__auto___11102 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__8827__auto___11101,actual__8828__auto___11102)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11101 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11101)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11102 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11102))," (using =)"].join('')));
}

var expected__8827__auto___11103 = " ";
var actual__8828__auto___11104 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto___11103,actual__8828__auto___11104)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11103 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11103)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11104 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11104))," (using =)"].join('')));
}

var expected__8827__auto___11105 = " ";
var actual__8828__auto___11106 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto___11105,actual__8828__auto___11106)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11105 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11105)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11106 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11106))," (using =)"].join('')));
}

var expected__8827__auto__ = " ";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"row 1 of a 4x4",((function (_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(2),(2),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1),null);
var expected__8827__auto___11107 = (4);
var actual__8828__auto___11108 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__8827__auto___11107,actual__8828__auto___11108)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11107 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11107)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11108 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11108))," (using =)"].join('')));
}

var expected__8827__auto___11109 = "X";
var actual__8828__auto___11110 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto___11109,actual__8828__auto___11110)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11109 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11109)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11110 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11110))," (using =)"].join('')));
}

var expected__8827__auto___11111 = "X";
var actual__8828__auto___11112 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto___11111,actual__8828__auto___11112)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11111 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11111)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11112 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11112))," (using =)"].join('')));
}

var expected__8827__auto___11113 = "O";
var actual__8828__auto___11114 = cljs.core.last.call(null,cljs.core.nth.call(null,row,(2)));
if(cljs.core._EQ_.call(null,expected__8827__auto___11113,actual__8828__auto___11114)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11113 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11113)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11114 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11114))," (using =)"].join('')));
}

var expected__8827__auto__ = "O";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"row 0 of a 3x3x3",((function (_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(0),null);
var expected__8827__auto___11115 = (3);
var actual__8828__auto___11116 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__8827__auto___11115,actual__8828__auto___11116)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11115 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11115)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11116 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11116))," (using =)"].join('')));
}

var expected__8827__auto___11117 = " ";
var actual__8828__auto___11118 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto___11117,actual__8828__auto___11118)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11117 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11117)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11118 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11118))," (using =)"].join('')));
}

var expected__8827__auto___11119 = " ";
var actual__8828__auto___11120 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto___11119,actual__8828__auto___11120)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11119 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11119)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11120 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11120))," (using =)"].join('')));
}

var expected__8827__auto__ = " ";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"entire 3x3 board",((function (_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var rows = tic_tac_toe.web_ui.display_board.call(null,tic_tac_toe.web_ui_spec.example_game,(1));
var expected__8827__auto___11121 = (3);
var actual__8828__auto___11122 = cljs.core.count.call(null,rows);
if(cljs.core._EQ_.call(null,expected__8827__auto___11121,actual__8828__auto___11122)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11121 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11121)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11122 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11122))," (using =)"].join('')));
}

var expected__8827__auto__ = "O";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.second.call(null,cljs.core.second.call(null,rows))));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"entire 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var new_game = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0))),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true);
var rows = tic_tac_toe.web_ui.display_board.call(null,new_game,(1));
var expected__8827__auto___11123 = (9);
var actual__8828__auto___11124 = cljs.core.count.call(null,rows);
if(cljs.core._EQ_.call(null,expected__8827__auto___11123,actual__8828__auto___11124)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11123 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11123)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11124 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11124))," (using =)"].join('')));
}

var expected__8827__auto__ = " ";
var actual__8828__auto__ = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,cljs.core.second.call(null,rows),(2))));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10786_11095,_STAR_parent_description_STAR__temp_val__10787_11096,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10789_11098 = null;
var count__10790_11099 = (0);
var i__10791_11100 = (0);
while(true){
if((i__10791_11100 < count__10790_11099)){
var component__8695__auto___11125 = cljs.core._nth.call(null,chunk__10789_11098,i__10791_11100);
speclj.components.install.call(null,component__8695__auto___11125,description__8694__auto____$1);


var G__11126 = seq__10788_11097;
var G__11127 = chunk__10789_11098;
var G__11128 = count__10790_11099;
var G__11129 = (i__10791_11100 + (1));
seq__10788_11097 = G__11126;
chunk__10789_11098 = G__11127;
count__10790_11099 = G__11128;
i__10791_11100 = G__11129;
continue;
} else {
var temp__5753__auto___11130 = cljs.core.seq.call(null,seq__10788_11097);
if(temp__5753__auto___11130){
var seq__10788_11131__$1 = temp__5753__auto___11130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10788_11131__$1)){
var c__5568__auto___11132 = cljs.core.chunk_first.call(null,seq__10788_11131__$1);
var G__11133 = cljs.core.chunk_rest.call(null,seq__10788_11131__$1);
var G__11134 = c__5568__auto___11132;
var G__11135 = cljs.core.count.call(null,c__5568__auto___11132);
var G__11136 = (0);
seq__10788_11097 = G__11133;
chunk__10789_11098 = G__11134;
count__10790_11099 = G__11135;
i__10791_11100 = G__11136;
continue;
} else {
var component__8695__auto___11137 = cljs.core.first.call(null,seq__10788_11131__$1);
speclj.components.install.call(null,component__8695__auto___11137,description__8694__auto____$1);


var G__11138 = cljs.core.next.call(null,seq__10788_11131__$1);
var G__11139 = null;
var G__11140 = (0);
var G__11141 = (0);
seq__10788_11097 = G__11138;
chunk__10789_11098 = G__11139;
count__10790_11099 = G__11140;
i__10791_11100 = G__11141;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10786_11095);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"plays a move on the board by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__10792_11142 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10793_11143 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10793_11143);

try{var seq__10794_11144 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the game state if given a valid move",((function (_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var play_next_round_orig_val__10806 = tic_tac_toe.web_ui.play_next_round;
var play_next_round_temp_val__10807 = (function (){
return null;
});
(tic_tac_toe.web_ui.play_next_round = play_next_round_temp_val__10807);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,tic_tac_toe.web_ui_spec.example_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(8),(2));

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(2)], null);
var actual__8828__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.play_next_round = play_next_round_orig_val__10806);
}});})(_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"not updating the game state if given an invalid move",((function (_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var play_next_round_orig_val__10808 = tic_tac_toe.web_ui.play_next_round;
var play_next_round_temp_val__10809 = (function (){
return null;
});
(tic_tac_toe.web_ui.play_next_round = play_next_round_temp_val__10809);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,tic_tac_toe.web_ui_spec.example_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(0),(1));

var expected__8827__auto___11148 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null);
var actual__8828__auto___11149 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto___11148,actual__8828__auto___11149)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11148 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11148)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11149 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11149))," (using =)"].join('')));
}

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(8),null);

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null);
var actual__8828__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.play_next_round = play_next_round_orig_val__10808);
}});})(_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"plays the next round in the game",((function (_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var game_round_orig_val__10810 = tic_tac_toe.game_runner.game_round;
var end_game_if_game_over_orig_val__10811 = tic_tac_toe.web_ui.end_game_if_game_over;
var game_round_temp_val__10812 = (function (_){
return "next round!";
});
var end_game_if_game_over_temp_val__10813 = (function (state){
return state;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__10812);

(tic_tac_toe.web_ui.end_game_if_game_over = end_game_if_game_over_temp_val__10813);

try{var expected__8827__auto__ = "next round!";
var actual__8828__auto__ = tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(0),(1));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.end_game_if_game_over = end_game_if_game_over_orig_val__10811);

(tic_tac_toe.game_runner.game_round = game_round_orig_val__10810);
}});})(_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"ending the game if an end condition is met",((function (_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var finished_game = cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(0),(0),(0)], null));
tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game,(6),(1));

var expected__8827__auto__ = "\nPlayer wins!";
var actual__8828__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false),speclj.components.new_characteristic.call(null,"ending the game if the next round is an ai turn that ends the game",((function (_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814){
return (function (){
var finished_game_11150 = cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1),(2),(1),(0),(0),(0),(0)], null));
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,finished_game_11150);

tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game_11150,(1),(1));

var expected__8827__auto___11151 = "\nAI wins!";
var actual__8828__auto___11152 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto___11151,actual__8828__auto___11152)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___11151 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___11151)),speclj.platform.endl,"     got: ",(((actual__8828__auto___11152 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___11152))," (using =)"].join('')));
}

var finished_game = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2),(2),(2),(0),(1),(2),(1)], null)),new cljs.core.Keyword(null,"round","round",2009433328),(9));
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,finished_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game,(5),(1));

var expected__8827__auto__ = "\nTie!";
var actual__8828__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10792_11142,_STAR_parent_description_STAR__temp_val__10793_11143,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__10512_10815,_STAR_parent_description_STAR__temp_val__10513_10816,description__8694__auto___10814))
,false)],null)));
var chunk__10795_11145 = null;
var count__10796_11146 = (0);
var i__10797_11147 = (0);
while(true){
if((i__10797_11147 < count__10796_11146)){
var component__8695__auto___11153 = cljs.core._nth.call(null,chunk__10795_11145,i__10797_11147);
speclj.components.install.call(null,component__8695__auto___11153,description__8694__auto____$1);


var G__11154 = seq__10794_11144;
var G__11155 = chunk__10795_11145;
var G__11156 = count__10796_11146;
var G__11157 = (i__10797_11147 + (1));
seq__10794_11144 = G__11154;
chunk__10795_11145 = G__11155;
count__10796_11146 = G__11156;
i__10797_11147 = G__11157;
continue;
} else {
var temp__5753__auto___11158 = cljs.core.seq.call(null,seq__10794_11144);
if(temp__5753__auto___11158){
var seq__10794_11159__$1 = temp__5753__auto___11158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10794_11159__$1)){
var c__5568__auto___11160 = cljs.core.chunk_first.call(null,seq__10794_11159__$1);
var G__11161 = cljs.core.chunk_rest.call(null,seq__10794_11159__$1);
var G__11162 = c__5568__auto___11160;
var G__11163 = cljs.core.count.call(null,c__5568__auto___11160);
var G__11164 = (0);
seq__10794_11144 = G__11161;
chunk__10795_11145 = G__11162;
count__10796_11146 = G__11163;
i__10797_11147 = G__11164;
continue;
} else {
var component__8695__auto___11165 = cljs.core.first.call(null,seq__10794_11159__$1);
speclj.components.install.call(null,component__8695__auto___11165,description__8694__auto____$1);


var G__11166 = cljs.core.next.call(null,seq__10794_11159__$1);
var G__11167 = null;
var G__11168 = (0);
var G__11169 = (0);
seq__10794_11144 = G__11166;
chunk__10795_11145 = G__11167;
count__10796_11146 = G__11168;
i__10797_11147 = G__11169;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10792_11142);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})()],null)));
var chunk__10515_10818 = null;
var count__10516_10819 = (0);
var i__10517_10820 = (0);
while(true){
if((i__10517_10820 < count__10516_10819)){
var component__8695__auto___11170 = cljs.core._nth.call(null,chunk__10515_10818,i__10517_10820);
speclj.components.install.call(null,component__8695__auto___11170,description__8694__auto___10814);


var G__11171 = seq__10514_10817;
var G__11172 = chunk__10515_10818;
var G__11173 = count__10516_10819;
var G__11174 = (i__10517_10820 + (1));
seq__10514_10817 = G__11171;
chunk__10515_10818 = G__11172;
count__10516_10819 = G__11173;
i__10517_10820 = G__11174;
continue;
} else {
var temp__5753__auto___11175 = cljs.core.seq.call(null,seq__10514_10817);
if(temp__5753__auto___11175){
var seq__10514_11176__$1 = temp__5753__auto___11175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10514_11176__$1)){
var c__5568__auto___11177 = cljs.core.chunk_first.call(null,seq__10514_11176__$1);
var G__11178 = cljs.core.chunk_rest.call(null,seq__10514_11176__$1);
var G__11179 = c__5568__auto___11177;
var G__11180 = cljs.core.count.call(null,c__5568__auto___11177);
var G__11181 = (0);
seq__10514_10817 = G__11178;
chunk__10515_10818 = G__11179;
count__10516_10819 = G__11180;
i__10517_10820 = G__11181;
continue;
} else {
var component__8695__auto___11182 = cljs.core.first.call(null,seq__10514_11176__$1);
speclj.components.install.call(null,component__8695__auto___11182,description__8694__auto___10814);


var G__11183 = cljs.core.next.call(null,seq__10514_11176__$1);
var G__11184 = null;
var G__11185 = (0);
var G__11186 = (0);
seq__10514_10817 = G__11183;
chunk__10515_10818 = G__11184;
count__10516_10819 = G__11185;
i__10517_10820 = G__11186;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10512_10815);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___10814);
}


//# sourceMappingURL=web_ui_spec.js.map
