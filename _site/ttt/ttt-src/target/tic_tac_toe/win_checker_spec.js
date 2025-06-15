// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.win_checker_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.win_checker');
goog.require('speclj.core');
var description__8694__auto___9199 = speclj.components.new_description.call(null,"Win Checker",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9157_9200 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9158_9201 = description__8694__auto___9199;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9158_9201);

try{var seq__9159_9202 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"gets all 2D boards within a 3D board",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9181_9206 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9182_9207 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9182_9207);

try{var seq__9183_9208 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"down-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9212 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__8828__auto___9213 = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8827__auto___9212,actual__8828__auto___9213)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9212 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9212)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9213 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9213))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"side-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9214 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null)], null);
var actual__8828__auto___9215 = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8827__auto___9214,actual__8828__auto___9215)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9214 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9214)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9215 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9215))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null)], null);
var actual__8828__auto___9217 = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8827__auto___9216,actual__8828__auto___9217)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9216 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9216)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9217 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9217))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing horizontal boards",((function (_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null)], null);
var actual__8828__auto___9219 = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8827__auto___9218,actual__8828__auto___9219)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9218 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9218)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9219 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9219))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"horizontal boards",((function (_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9220 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null)], null);
var actual__8828__auto___9221 = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8827__auto___9220,actual__8828__auto___9221)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9220 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9220)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9221 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9221))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"all together",((function (_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9222 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__8828__auto___9223 = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8827__auto___9222,actual__8828__auto___9223)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9222 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9222)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9223 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9223))," (using =)"].join('')));
}

var expected__8827__auto__ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9181_9206,_STAR_parent_description_STAR__temp_val__9182_9207,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false)],null)));
var chunk__9184_9209 = null;
var count__9185_9210 = (0);
var i__9186_9211 = (0);
while(true){
if((i__9186_9211 < count__9185_9210)){
var component__8695__auto___9224 = cljs.core._nth.call(null,chunk__9184_9209,i__9186_9211);
speclj.components.install.call(null,component__8695__auto___9224,description__8694__auto____$1);


var G__9225 = seq__9183_9208;
var G__9226 = chunk__9184_9209;
var G__9227 = count__9185_9210;
var G__9228 = (i__9186_9211 + (1));
seq__9183_9208 = G__9225;
chunk__9184_9209 = G__9226;
count__9185_9210 = G__9227;
i__9186_9211 = G__9228;
continue;
} else {
var temp__5753__auto___9229 = cljs.core.seq.call(null,seq__9183_9208);
if(temp__5753__auto___9229){
var seq__9183_9230__$1 = temp__5753__auto___9229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9183_9230__$1)){
var c__5568__auto___9231 = cljs.core.chunk_first.call(null,seq__9183_9230__$1);
var G__9232 = cljs.core.chunk_rest.call(null,seq__9183_9230__$1);
var G__9233 = c__5568__auto___9231;
var G__9234 = cljs.core.count.call(null,c__5568__auto___9231);
var G__9235 = (0);
seq__9183_9208 = G__9232;
chunk__9184_9209 = G__9233;
count__9185_9210 = G__9234;
i__9186_9211 = G__9235;
continue;
} else {
var component__8695__auto___9236 = cljs.core.first.call(null,seq__9183_9230__$1);
speclj.components.install.call(null,component__8695__auto___9236,description__8694__auto____$1);


var G__9237 = cljs.core.next.call(null,seq__9183_9230__$1);
var G__9238 = null;
var G__9239 = (0);
var G__9240 = (0);
seq__9183_9208 = G__9237;
chunk__9184_9209 = G__9238;
count__9185_9210 = G__9239;
i__9186_9211 = G__9240;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9181_9206);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"checks if a winner within a 3-d board is found,",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9187_9241 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9188_9242 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9188_9242);

try{var seq__9189_9243 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil on no winner",((function (_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0))], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"flat-horizontal win",((function (_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"flat-vertical win",((function (_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"flat-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"upwards-vertical win",((function (_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"upwards-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"cross-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9247 = (1);
var actual__8828__auto___9248 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9247,actual__8828__auto___9248)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9247 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9247)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9248 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9248))," (using =)"].join('')));
}

var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9187_9241,_STAR_parent_description_STAR__temp_val__9188_9242,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false)],null)));
var chunk__9190_9244 = null;
var count__9191_9245 = (0);
var i__9192_9246 = (0);
while(true){
if((i__9192_9246 < count__9191_9245)){
var component__8695__auto___9249 = cljs.core._nth.call(null,chunk__9190_9244,i__9192_9246);
speclj.components.install.call(null,component__8695__auto___9249,description__8694__auto____$1);


var G__9250 = seq__9189_9243;
var G__9251 = chunk__9190_9244;
var G__9252 = count__9191_9245;
var G__9253 = (i__9192_9246 + (1));
seq__9189_9243 = G__9250;
chunk__9190_9244 = G__9251;
count__9191_9245 = G__9252;
i__9192_9246 = G__9253;
continue;
} else {
var temp__5753__auto___9254 = cljs.core.seq.call(null,seq__9189_9243);
if(temp__5753__auto___9254){
var seq__9189_9255__$1 = temp__5753__auto___9254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9189_9255__$1)){
var c__5568__auto___9256 = cljs.core.chunk_first.call(null,seq__9189_9255__$1);
var G__9257 = cljs.core.chunk_rest.call(null,seq__9189_9255__$1);
var G__9258 = c__5568__auto___9256;
var G__9259 = cljs.core.count.call(null,c__5568__auto___9256);
var G__9260 = (0);
seq__9189_9243 = G__9257;
chunk__9190_9244 = G__9258;
count__9191_9245 = G__9259;
i__9192_9246 = G__9260;
continue;
} else {
var component__8695__auto___9261 = cljs.core.first.call(null,seq__9189_9255__$1);
speclj.components.install.call(null,component__8695__auto___9261,description__8694__auto____$1);


var G__9262 = cljs.core.next.call(null,seq__9189_9255__$1);
var G__9263 = null;
var G__9264 = (0);
var G__9265 = (0);
seq__9189_9243 = G__9262;
chunk__9190_9244 = G__9263;
count__9191_9245 = G__9264;
i__9192_9246 = G__9265;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9187_9241);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})(),(function (){var description__8694__auto____$1 = speclj.components.new_description.call(null,"checks if the game has met an end condition",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9193_9266 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9194_9267 = description__8694__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9194_9267);

try{var seq__9195_9268 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns symbol of winner if a horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9272 = (1);
var actual__8828__auto___9273 = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9272,actual__8828__auto___9273)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9272 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9272)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9273 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9273))," (using =)"].join('')));
}

var expected__8827__auto__ = (2);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(2),(2),(2)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"returns nil if no horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a vertical win is found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9274 = (1);
var actual__8828__auto___9275 = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9274,actual__8828__auto___9275)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9274 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9274)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9275 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9275))," (using =)"].join('')));
}

var expected__8827__auto__ = (2);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0),(2),(2),(0),(1),(2),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"returns nil if no vertical win is found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(2),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9276 = (1);
var actual__8828__auto___9277 = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9276,actual__8828__auto___9277)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9276 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9276)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9277 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9277))," (using =)"].join('')));
}

var expected__8827__auto__ = (2);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(0),(2),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"returns nil if no diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(2),(2),(2),(2),(1)], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"returns symbol of winner if a winner is found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9278 = (1);
var actual__8828__auto___9279 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9278,actual__8828__auto___9279)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9278 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9278)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9279 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9279))," (using =)"].join('')));
}

var expected__8827__auto___9280 = (2);
var actual__8828__auto___9281 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(1),(0),(2),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9280,actual__8828__auto___9281)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9280 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9280)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9281 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9281))," (using =)"].join('')));
}

var expected__8827__auto__ = (1);
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1),(0),(2),(1),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"returns nil if no winner found",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false),speclj.components.new_characteristic.call(null,"checks if there is a winner or a tie",((function (_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199){
return (function (){
var expected__8827__auto___9282 = "tie";
var actual__8828__auto___9283 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9282,actual__8828__auto___9283)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9282 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9282)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9283 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9283))," (using =)"].join('')));
}

var expected__8827__auto___9284 = (1);
var actual__8828__auto___9285 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto___9284,actual__8828__auto___9285)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto___9284 == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto___9284)),speclj.platform.endl,"     got: ",(((actual__8828__auto___9285 == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto___9285))," (using =)"].join('')));
}

var expected__8827__auto__ = null;
var actual__8828__auto__ = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8827__auto__,actual__8828__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8827__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8827__auto__)),speclj.platform.endl,"     got: ",(((actual__8828__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8828__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9193_9266,_STAR_parent_description_STAR__temp_val__9194_9267,description__8694__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9200,_STAR_parent_description_STAR__temp_val__9158_9201,description__8694__auto___9199))
,false)],null)));
var chunk__9196_9269 = null;
var count__9197_9270 = (0);
var i__9198_9271 = (0);
while(true){
if((i__9198_9271 < count__9197_9270)){
var component__8695__auto___9286 = cljs.core._nth.call(null,chunk__9196_9269,i__9198_9271);
speclj.components.install.call(null,component__8695__auto___9286,description__8694__auto____$1);


var G__9287 = seq__9195_9268;
var G__9288 = chunk__9196_9269;
var G__9289 = count__9197_9270;
var G__9290 = (i__9198_9271 + (1));
seq__9195_9268 = G__9287;
chunk__9196_9269 = G__9288;
count__9197_9270 = G__9289;
i__9198_9271 = G__9290;
continue;
} else {
var temp__5753__auto___9291 = cljs.core.seq.call(null,seq__9195_9268);
if(temp__5753__auto___9291){
var seq__9195_9292__$1 = temp__5753__auto___9291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9195_9292__$1)){
var c__5568__auto___9293 = cljs.core.chunk_first.call(null,seq__9195_9292__$1);
var G__9294 = cljs.core.chunk_rest.call(null,seq__9195_9292__$1);
var G__9295 = c__5568__auto___9293;
var G__9296 = cljs.core.count.call(null,c__5568__auto___9293);
var G__9297 = (0);
seq__9195_9268 = G__9294;
chunk__9196_9269 = G__9295;
count__9197_9270 = G__9296;
i__9198_9271 = G__9297;
continue;
} else {
var component__8695__auto___9298 = cljs.core.first.call(null,seq__9195_9292__$1);
speclj.components.install.call(null,component__8695__auto___9298,description__8694__auto____$1);


var G__9299 = cljs.core.next.call(null,seq__9195_9292__$1);
var G__9300 = null;
var G__9301 = (0);
var G__9302 = (0);
seq__9195_9268 = G__9299;
chunk__9196_9269 = G__9300;
count__9197_9270 = G__9301;
i__9198_9271 = G__9302;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9193_9266);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto____$1);
}

return description__8694__auto____$1;
})()],null)));
var chunk__9160_9203 = null;
var count__9161_9204 = (0);
var i__9162_9205 = (0);
while(true){
if((i__9162_9205 < count__9161_9204)){
var component__8695__auto___9303 = cljs.core._nth.call(null,chunk__9160_9203,i__9162_9205);
speclj.components.install.call(null,component__8695__auto___9303,description__8694__auto___9199);


var G__9304 = seq__9159_9202;
var G__9305 = chunk__9160_9203;
var G__9306 = count__9161_9204;
var G__9307 = (i__9162_9205 + (1));
seq__9159_9202 = G__9304;
chunk__9160_9203 = G__9305;
count__9161_9204 = G__9306;
i__9162_9205 = G__9307;
continue;
} else {
var temp__5753__auto___9308 = cljs.core.seq.call(null,seq__9159_9202);
if(temp__5753__auto___9308){
var seq__9159_9309__$1 = temp__5753__auto___9308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9159_9309__$1)){
var c__5568__auto___9310 = cljs.core.chunk_first.call(null,seq__9159_9309__$1);
var G__9311 = cljs.core.chunk_rest.call(null,seq__9159_9309__$1);
var G__9312 = c__5568__auto___9310;
var G__9313 = cljs.core.count.call(null,c__5568__auto___9310);
var G__9314 = (0);
seq__9159_9202 = G__9311;
chunk__9160_9203 = G__9312;
count__9161_9204 = G__9313;
i__9162_9205 = G__9314;
continue;
} else {
var component__8695__auto___9315 = cljs.core.first.call(null,seq__9159_9309__$1);
speclj.components.install.call(null,component__8695__auto___9315,description__8694__auto___9199);


var G__9316 = cljs.core.next.call(null,seq__9159_9309__$1);
var G__9317 = null;
var G__9318 = (0);
var G__9319 = (0);
seq__9159_9202 = G__9316;
chunk__9160_9203 = G__9317;
count__9161_9204 = G__9318;
i__9162_9205 = G__9319;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9157_9200);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8694__auto___9199);
}


//# sourceMappingURL=win_checker_spec.js.map
