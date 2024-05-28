// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.win_checker_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.win_checker');
goog.require('speclj.core');
var description__9666__auto___10165 = speclj.components.new_description.call(null,"Win Checker",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__10123_10166 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10124_10167 = description__9666__auto___10165;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10124_10167);

try{var seq__10125_10168 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"gets all 2D boards within a 3D board",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__10147_10172 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10148_10173 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10148_10173);

try{var seq__10149_10174 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"down-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10178 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__9794__auto___10179 = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9793__auto___10178,actual__9794__auto___10179)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10178 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10178)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10179 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10179))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"side-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null)], null);
var actual__9794__auto___10181 = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9793__auto___10180,actual__9794__auto___10181)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10180 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10180)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10181 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10181))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null)], null);
var actual__9794__auto___10183 = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9793__auto___10182,actual__9794__auto___10183)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10182 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10182)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10183 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10183))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing horizontal boards",((function (_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null)], null);
var actual__9794__auto___10185 = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9793__auto___10184,actual__9794__auto___10185)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10184 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10184)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10185 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10185))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"horizontal boards",((function (_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null)], null);
var actual__9794__auto___10187 = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9793__auto___10186,actual__9794__auto___10187)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10186 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10186)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10187 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10187))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"all together",((function (_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10188 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__9794__auto___10189 = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9793__auto___10188,actual__9794__auto___10189)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10188 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10188)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10189 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10189))," (using =)"].join('')));
}

var expected__9793__auto__ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10147_10172,_STAR_parent_description_STAR__temp_val__10148_10173,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false)],null)));
var chunk__10150_10175 = null;
var count__10151_10176 = (0);
var i__10152_10177 = (0);
while(true){
if((i__10152_10177 < count__10151_10176)){
var component__9667__auto___10190 = cljs.core._nth.call(null,chunk__10150_10175,i__10152_10177);
speclj.components.install.call(null,component__9667__auto___10190,description__9666__auto____$1);


var G__10191 = seq__10149_10174;
var G__10192 = chunk__10150_10175;
var G__10193 = count__10151_10176;
var G__10194 = (i__10152_10177 + (1));
seq__10149_10174 = G__10191;
chunk__10150_10175 = G__10192;
count__10151_10176 = G__10193;
i__10152_10177 = G__10194;
continue;
} else {
var temp__5753__auto___10195 = cljs.core.seq.call(null,seq__10149_10174);
if(temp__5753__auto___10195){
var seq__10149_10196__$1 = temp__5753__auto___10195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10149_10196__$1)){
var c__5568__auto___10197 = cljs.core.chunk_first.call(null,seq__10149_10196__$1);
var G__10198 = cljs.core.chunk_rest.call(null,seq__10149_10196__$1);
var G__10199 = c__5568__auto___10197;
var G__10200 = cljs.core.count.call(null,c__5568__auto___10197);
var G__10201 = (0);
seq__10149_10174 = G__10198;
chunk__10150_10175 = G__10199;
count__10151_10176 = G__10200;
i__10152_10177 = G__10201;
continue;
} else {
var component__9667__auto___10202 = cljs.core.first.call(null,seq__10149_10196__$1);
speclj.components.install.call(null,component__9667__auto___10202,description__9666__auto____$1);


var G__10203 = cljs.core.next.call(null,seq__10149_10196__$1);
var G__10204 = null;
var G__10205 = (0);
var G__10206 = (0);
seq__10149_10174 = G__10203;
chunk__10150_10175 = G__10204;
count__10151_10176 = G__10205;
i__10152_10177 = G__10206;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10147_10172);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"checks if a winner within a 3-d board is found,",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__10153_10207 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10154_10208 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10154_10208);

try{var seq__10155_10209 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil on no winner",((function (_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = null;
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0))], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"flat-horizontal win",((function (_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"flat-vertical win",((function (_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"flat-diagonal win",((function (_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"upwards-vertical win",((function (_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"upwards-diagonal win",((function (_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"cross-diagonal win",((function (_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10213 = (1);
var actual__9794__auto___10214 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10213,actual__9794__auto___10214)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10213 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10213)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10214 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10214))," (using =)"].join('')));
}

var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10153_10207,_STAR_parent_description_STAR__temp_val__10154_10208,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false)],null)));
var chunk__10156_10210 = null;
var count__10157_10211 = (0);
var i__10158_10212 = (0);
while(true){
if((i__10158_10212 < count__10157_10211)){
var component__9667__auto___10215 = cljs.core._nth.call(null,chunk__10156_10210,i__10158_10212);
speclj.components.install.call(null,component__9667__auto___10215,description__9666__auto____$1);


var G__10216 = seq__10155_10209;
var G__10217 = chunk__10156_10210;
var G__10218 = count__10157_10211;
var G__10219 = (i__10158_10212 + (1));
seq__10155_10209 = G__10216;
chunk__10156_10210 = G__10217;
count__10157_10211 = G__10218;
i__10158_10212 = G__10219;
continue;
} else {
var temp__5753__auto___10220 = cljs.core.seq.call(null,seq__10155_10209);
if(temp__5753__auto___10220){
var seq__10155_10221__$1 = temp__5753__auto___10220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10155_10221__$1)){
var c__5568__auto___10222 = cljs.core.chunk_first.call(null,seq__10155_10221__$1);
var G__10223 = cljs.core.chunk_rest.call(null,seq__10155_10221__$1);
var G__10224 = c__5568__auto___10222;
var G__10225 = cljs.core.count.call(null,c__5568__auto___10222);
var G__10226 = (0);
seq__10155_10209 = G__10223;
chunk__10156_10210 = G__10224;
count__10157_10211 = G__10225;
i__10158_10212 = G__10226;
continue;
} else {
var component__9667__auto___10227 = cljs.core.first.call(null,seq__10155_10221__$1);
speclj.components.install.call(null,component__9667__auto___10227,description__9666__auto____$1);


var G__10228 = cljs.core.next.call(null,seq__10155_10221__$1);
var G__10229 = null;
var G__10230 = (0);
var G__10231 = (0);
seq__10155_10209 = G__10228;
chunk__10156_10210 = G__10229;
count__10157_10211 = G__10230;
i__10158_10212 = G__10231;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10153_10207);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})(),(function (){var description__9666__auto____$1 = speclj.components.new_description.call(null,"checks if the game has met an end condition",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__10159_10232 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10160_10233 = description__9666__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10160_10233);

try{var seq__10161_10234 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns symbol of winner if a horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10238 = (1);
var actual__9794__auto___10239 = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10238,actual__9794__auto___10239)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10238 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10238)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10239 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10239))," (using =)"].join('')));
}

var expected__9793__auto__ = (2);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(2),(2),(2)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"returns nil if no horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = null;
var actual__9794__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a vertical win is found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10240 = (1);
var actual__9794__auto___10241 = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10240,actual__9794__auto___10241)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10240 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10240)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10241 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10241))," (using =)"].join('')));
}

var expected__9793__auto__ = (2);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0),(2),(2),(0),(1),(2),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"returns nil if no vertical win is found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = null;
var actual__9794__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(2),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10242 = (1);
var actual__9794__auto___10243 = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10242,actual__9794__auto___10243)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10242 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10242)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10243 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10243))," (using =)"].join('')));
}

var expected__9793__auto__ = (2);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(0),(2),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"returns nil if no diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = null;
var actual__9794__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(2),(2),(2),(2),(1)], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"returns symbol of winner if a winner is found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10244 = (1);
var actual__9794__auto___10245 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10244,actual__9794__auto___10245)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10244 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10244)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10245 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10245))," (using =)"].join('')));
}

var expected__9793__auto___10246 = (2);
var actual__9794__auto___10247 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(1),(0),(2),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10246,actual__9794__auto___10247)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10246 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10246)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10247 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10247))," (using =)"].join('')));
}

var expected__9793__auto__ = (1);
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1),(0),(2),(1),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"returns nil if no winner found",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto__ = null;
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false),speclj.components.new_characteristic.call(null,"checks if there is a winner or a tie",((function (_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165){
return (function (){
var expected__9793__auto___10248 = "tie";
var actual__9794__auto___10249 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10248,actual__9794__auto___10249)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10248 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10248)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10249 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10249))," (using =)"].join('')));
}

var expected__9793__auto___10250 = (1);
var actual__9794__auto___10251 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto___10250,actual__9794__auto___10251)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto___10250 == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto___10250)),speclj.platform.endl,"     got: ",(((actual__9794__auto___10251 == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto___10251))," (using =)"].join('')));
}

var expected__9793__auto__ = null;
var actual__9794__auto__ = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9793__auto__,actual__9794__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9793__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9793__auto__)),speclj.platform.endl,"     got: ",(((actual__9794__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9794__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10159_10232,_STAR_parent_description_STAR__temp_val__10160_10233,description__9666__auto____$1,_STAR_parent_description_STAR__orig_val__10123_10166,_STAR_parent_description_STAR__temp_val__10124_10167,description__9666__auto___10165))
,false)],null)));
var chunk__10162_10235 = null;
var count__10163_10236 = (0);
var i__10164_10237 = (0);
while(true){
if((i__10164_10237 < count__10163_10236)){
var component__9667__auto___10252 = cljs.core._nth.call(null,chunk__10162_10235,i__10164_10237);
speclj.components.install.call(null,component__9667__auto___10252,description__9666__auto____$1);


var G__10253 = seq__10161_10234;
var G__10254 = chunk__10162_10235;
var G__10255 = count__10163_10236;
var G__10256 = (i__10164_10237 + (1));
seq__10161_10234 = G__10253;
chunk__10162_10235 = G__10254;
count__10163_10236 = G__10255;
i__10164_10237 = G__10256;
continue;
} else {
var temp__5753__auto___10257 = cljs.core.seq.call(null,seq__10161_10234);
if(temp__5753__auto___10257){
var seq__10161_10258__$1 = temp__5753__auto___10257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10161_10258__$1)){
var c__5568__auto___10259 = cljs.core.chunk_first.call(null,seq__10161_10258__$1);
var G__10260 = cljs.core.chunk_rest.call(null,seq__10161_10258__$1);
var G__10261 = c__5568__auto___10259;
var G__10262 = cljs.core.count.call(null,c__5568__auto___10259);
var G__10263 = (0);
seq__10161_10234 = G__10260;
chunk__10162_10235 = G__10261;
count__10163_10236 = G__10262;
i__10164_10237 = G__10263;
continue;
} else {
var component__9667__auto___10264 = cljs.core.first.call(null,seq__10161_10258__$1);
speclj.components.install.call(null,component__9667__auto___10264,description__9666__auto____$1);


var G__10265 = cljs.core.next.call(null,seq__10161_10258__$1);
var G__10266 = null;
var G__10267 = (0);
var G__10268 = (0);
seq__10161_10234 = G__10265;
chunk__10162_10235 = G__10266;
count__10163_10236 = G__10267;
i__10164_10237 = G__10268;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10159_10232);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto____$1);
}

return description__9666__auto____$1;
})()],null)));
var chunk__10126_10169 = null;
var count__10127_10170 = (0);
var i__10128_10171 = (0);
while(true){
if((i__10128_10171 < count__10127_10170)){
var component__9667__auto___10269 = cljs.core._nth.call(null,chunk__10126_10169,i__10128_10171);
speclj.components.install.call(null,component__9667__auto___10269,description__9666__auto___10165);


var G__10270 = seq__10125_10168;
var G__10271 = chunk__10126_10169;
var G__10272 = count__10127_10170;
var G__10273 = (i__10128_10171 + (1));
seq__10125_10168 = G__10270;
chunk__10126_10169 = G__10271;
count__10127_10170 = G__10272;
i__10128_10171 = G__10273;
continue;
} else {
var temp__5753__auto___10274 = cljs.core.seq.call(null,seq__10125_10168);
if(temp__5753__auto___10274){
var seq__10125_10275__$1 = temp__5753__auto___10274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10125_10275__$1)){
var c__5568__auto___10276 = cljs.core.chunk_first.call(null,seq__10125_10275__$1);
var G__10277 = cljs.core.chunk_rest.call(null,seq__10125_10275__$1);
var G__10278 = c__5568__auto___10276;
var G__10279 = cljs.core.count.call(null,c__5568__auto___10276);
var G__10280 = (0);
seq__10125_10168 = G__10277;
chunk__10126_10169 = G__10278;
count__10127_10170 = G__10279;
i__10128_10171 = G__10280;
continue;
} else {
var component__9667__auto___10281 = cljs.core.first.call(null,seq__10125_10275__$1);
speclj.components.install.call(null,component__9667__auto___10281,description__9666__auto___10165);


var G__10282 = cljs.core.next.call(null,seq__10125_10275__$1);
var G__10283 = null;
var G__10284 = (0);
var G__10285 = (0);
seq__10125_10168 = G__10282;
chunk__10126_10169 = G__10283;
count__10127_10170 = G__10284;
i__10128_10171 = G__10285;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10123_10166);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9666__auto___10165);
}


//# sourceMappingURL=win_checker_spec.js.map
