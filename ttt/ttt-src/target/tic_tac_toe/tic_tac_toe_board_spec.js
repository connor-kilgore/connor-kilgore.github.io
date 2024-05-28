// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.tic_tac_toe_board_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('speclj.core');
tic_tac_toe.tic_tac_toe_board_spec.empty_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
tic_tac_toe.tic_tac_toe_board_spec.mixed_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(1),(2),(1),(0)], null);
var description__9666__auto___11767 = speclj.components.new_description.call(null,"Tic Tac Toe Board",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__11737_11768 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11738_11769 = description__9666__auto___11767;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11738_11769);

try{var seq__11739_11770 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets the board side length",((function (_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto___11774 = (3);
var actual__9794__auto___11775 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___11774,actual__9794__auto___11775)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___11774 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___11774)),speclj.platform.endl,"     got: ",(((actual__9794__auto___11775 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___11775))," (using =)"].join('')));
}

var expected__9793__auto___11776 = (4);
var actual__9794__auto___11777 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(16),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___11776,actual__9794__auto___11777)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___11776 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___11776)),speclj.platform.endl,"     got: ",(((actual__9794__auto___11777 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___11777))," (using =)"].join('')));
}

var expected__9793__auto__ = (3);
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"makes a new board that is",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__11755_11778 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11756_11779 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11756_11779);

try{var seq__11757_11780 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"2-D",((function (_STAR_parent_description_STAR__orig_val__11755_11778,_STAR_parent_description_STAR__temp_val__11756_11779,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto___11784 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9794__auto___11785 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___11784,actual__9794__auto___11785)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___11784 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___11784)),speclj.platform.endl,"     got: ",(((actual__9794__auto___11785 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___11785))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11755_11778,_STAR_parent_description_STAR__temp_val__11756_11779,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false),speclj.components.new_characteristic.call(null,"3-D",((function (_STAR_parent_description_STAR__orig_val__11755_11778,_STAR_parent_description_STAR__temp_val__11756_11779,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto___11786 = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9794__auto___11787 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___11786,actual__9794__auto___11787)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___11786 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___11786)),speclj.platform.endl,"     got: ",(((actual__9794__auto___11787 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___11787))," (using =)"].join('')));
}

var expected__9793__auto__ = cljs.core.PersistentVector.fromArray([(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], true);
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11755_11778,_STAR_parent_description_STAR__temp_val__11756_11779,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false)],null)));
var chunk__11758_11781 = null;
var count__11759_11782 = (0);
var i__11760_11783 = (0);
while(true){
if((i__11760_11783 < count__11759_11782)){
var component__9667__auto___11788 = cljs.core._nth.call(null,chunk__11758_11781,i__11760_11783);
speclj.components.install.call(null,component__9667__auto___11788,description__9666__auto____$1);


var G__11789 = seq__11757_11780;
var G__11790 = chunk__11758_11781;
var G__11791 = count__11759_11782;
var G__11792 = (i__11760_11783 + (1));
seq__11757_11780 = G__11789;
chunk__11758_11781 = G__11790;
count__11759_11782 = G__11791;
i__11760_11783 = G__11792;
continue;
} else {
var temp__5753__auto___11793 = cljs.core.seq.call(null,seq__11757_11780);
if(temp__5753__auto___11793){
var seq__11757_11794__$1 = temp__5753__auto___11793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11757_11794__$1)){
var c__5568__auto___11795 = cljs.core.chunk_first.call(null,seq__11757_11794__$1);
var G__11796 = cljs.core.chunk_rest.call(null,seq__11757_11794__$1);
var G__11797 = c__5568__auto___11795;
var G__11798 = cljs.core.count.call(null,c__5568__auto___11795);
var G__11799 = (0);
seq__11757_11780 = G__11796;
chunk__11758_11781 = G__11797;
count__11759_11782 = G__11798;
i__11760_11783 = G__11799;
continue;
} else {
var component__9667__auto___11800 = cljs.core.first.call(null,seq__11757_11794__$1);
speclj.components.install.call(null,component__9667__auto___11800,description__9666__auto____$1);


var G__11801 = cljs.core.next.call(null,seq__11757_11794__$1);
var G__11802 = null;
var G__11803 = (0);
var G__11804 = (0);
seq__11757_11780 = G__11801;
chunk__11758_11781 = G__11802;
count__11759_11782 = G__11803;
i__11760_11783 = G__11804;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11755_11778);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"places a value into the tttb",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__11761_11805 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11762_11806 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11762_11806);

try{var seq__11763_11807 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if the position is empty to place",((function (_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var value__9781__auto___11811 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(0));
if((!(value__9781__auto___11811))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9781__auto___11811 == null))?"nil":cljs.core.pr_str.call(null,value__9781__auto___11811)),""].join('')));
} else {
}

var value__9787__auto___11812 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),(0));
if(value__9787__auto___11812){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9787__auto___11812 == null))?"nil":cljs.core.pr_str.call(null,value__9787__auto___11812))].join('')));
} else {
}

var value__9787__auto__ = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(4));
if(value__9787__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9787__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9787__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false),speclj.components.new_characteristic.call(null,"an X into top left corner",((function (_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(2));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false),speclj.components.new_characteristic.call(null,"an X and O in opposite corners",((function (_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(2)], null);
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(8));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false),speclj.components.new_characteristic.call(null,"an X on a spot where an O exists",((function (_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(0)),(1),(0));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false),speclj.components.new_characteristic.call(null,"a series of inputs",((function (_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(2)),(2),(4)),(1),(5)),(2),(6)),(1),(7));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false),speclj.components.new_characteristic.call(null,"returns board input if value is attempting to overwrite X or O",((function (_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.mixed_board,(2),(0));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11761_11805,_STAR_parent_description_STAR__temp_val__11762_11806,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false)],null)));
var chunk__11764_11808 = null;
var count__11765_11809 = (0);
var i__11766_11810 = (0);
while(true){
if((i__11766_11810 < count__11765_11809)){
var component__9667__auto___11813 = cljs.core._nth.call(null,chunk__11764_11808,i__11766_11810);
speclj.components.install.call(null,component__9667__auto___11813,description__9666__auto____$1);


var G__11814 = seq__11763_11807;
var G__11815 = chunk__11764_11808;
var G__11816 = count__11765_11809;
var G__11817 = (i__11766_11810 + (1));
seq__11763_11807 = G__11814;
chunk__11764_11808 = G__11815;
count__11765_11809 = G__11816;
i__11766_11810 = G__11817;
continue;
} else {
var temp__5753__auto___11818 = cljs.core.seq.call(null,seq__11763_11807);
if(temp__5753__auto___11818){
var seq__11763_11819__$1 = temp__5753__auto___11818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11763_11819__$1)){
var c__5568__auto___11820 = cljs.core.chunk_first.call(null,seq__11763_11819__$1);
var G__11821 = cljs.core.chunk_rest.call(null,seq__11763_11819__$1);
var G__11822 = c__5568__auto___11820;
var G__11823 = cljs.core.count.call(null,c__5568__auto___11820);
var G__11824 = (0);
seq__11763_11807 = G__11821;
chunk__11764_11808 = G__11822;
count__11765_11809 = G__11823;
i__11766_11810 = G__11824;
continue;
} else {
var component__9667__auto___11825 = cljs.core.first.call(null,seq__11763_11819__$1);
speclj.components.install.call(null,component__9667__auto___11825,description__9666__auto____$1);


var G__11826 = cljs.core.next.call(null,seq__11763_11819__$1);
var G__11827 = null;
var G__11828 = (0);
var G__11829 = (0);
seq__11763_11807 = G__11826;
chunk__11764_11808 = G__11827;
count__11765_11809 = G__11828;
i__11766_11810 = G__11829;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11761_11805);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gives the absolute depth of the board",((function (_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767){
return (function (){
var expected__9793__auto___11830 = (0);
var actual__9794__auto___11831 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___11830,actual__9794__auto___11831)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___11830 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___11830)),speclj.platform.endl,"     got: ",(((actual__9794__auto___11831 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___11831))," (using =)"].join('')));
}

var expected__9793__auto___11832 = (1);
var actual__9794__auto___11833 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___11832,actual__9794__auto___11833)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___11832 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___11832)),speclj.platform.endl,"     got: ",(((actual__9794__auto___11833 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___11833))," (using =)"].join('')));
}

var expected__9793__auto__ = (9);
var actual__9794__auto__ = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11737_11768,_STAR_parent_description_STAR__temp_val__11738_11769,description__9666__auto___11767))
,false)],null)));
var chunk__11740_11771 = null;
var count__11741_11772 = (0);
var i__11742_11773 = (0);
while(true){
if((i__11742_11773 < count__11741_11772)){
var component__9667__auto___11834 = cljs.core._nth.call(null,chunk__11740_11771,i__11742_11773);
speclj.components.install.call(null,component__9667__auto___11834,description__9666__auto___11767);


var G__11835 = seq__11739_11770;
var G__11836 = chunk__11740_11771;
var G__11837 = count__11741_11772;
var G__11838 = (i__11742_11773 + (1));
seq__11739_11770 = G__11835;
chunk__11740_11771 = G__11836;
count__11741_11772 = G__11837;
i__11742_11773 = G__11838;
continue;
} else {
var temp__5753__auto___11839 = cljs.core.seq.call(null,seq__11739_11770);
if(temp__5753__auto___11839){
var seq__11739_11840__$1 = temp__5753__auto___11839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11739_11840__$1)){
var c__5568__auto___11841 = cljs.core.chunk_first.call(null,seq__11739_11840__$1);
var G__11842 = cljs.core.chunk_rest.call(null,seq__11739_11840__$1);
var G__11843 = c__5568__auto___11841;
var G__11844 = cljs.core.count.call(null,c__5568__auto___11841);
var G__11845 = (0);
seq__11739_11770 = G__11842;
chunk__11740_11771 = G__11843;
count__11741_11772 = G__11844;
i__11742_11773 = G__11845;
continue;
} else {
var component__9667__auto___11846 = cljs.core.first.call(null,seq__11739_11840__$1);
speclj.components.install.call(null,component__9667__auto___11846,description__9666__auto___11767);


var G__11847 = cljs.core.next.call(null,seq__11739_11840__$1);
var G__11848 = null;
var G__11849 = (0);
var G__11850 = (0);
seq__11739_11770 = G__11847;
chunk__11740_11771 = G__11848;
count__11741_11772 = G__11849;
i__11742_11773 = G__11850;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11737_11768);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto___11767);
}


//# sourceMappingURL=tic_tac_toe_board_spec.js.map
