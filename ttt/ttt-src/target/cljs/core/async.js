// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25305 = arguments.length;
switch (G__25305) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25306 = (function (f,blockable,meta25307){
this.f = f;
this.blockable = blockable;
this.meta25307 = meta25307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25308,meta25307__$1){
var self__ = this;
var _25308__$1 = this;
return (new cljs.core.async.t_cljs$core$async25306(self__.f,self__.blockable,meta25307__$1));
}));

(cljs.core.async.t_cljs$core$async25306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25308){
var self__ = this;
var _25308__$1 = this;
return self__.meta25307;
}));

(cljs.core.async.t_cljs$core$async25306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25307","meta25307",-666089051,null)], null);
}));

(cljs.core.async.t_cljs$core$async25306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25306");

(cljs.core.async.t_cljs$core$async25306.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25306.
 */
cljs.core.async.__GT_t_cljs$core$async25306 = (function cljs$core$async$__GT_t_cljs$core$async25306(f__$1,blockable__$1,meta25307){
return (new cljs.core.async.t_cljs$core$async25306(f__$1,blockable__$1,meta25307));
});

}

return (new cljs.core.async.t_cljs$core$async25306(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25312 = arguments.length;
switch (G__25312) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25315 = arguments.length;
switch (G__25315) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25318 = arguments.length;
switch (G__25318) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25320 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25320);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_25320);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25322 = arguments.length;
switch (G__25322) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___25324 = n;
var x_25325 = (0);
while(true){
if((x_25325 < n__5636__auto___25324)){
(a[x_25325] = x_25325);

var G__25326 = (x_25325 + (1));
x_25325 = G__25326;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25327 = (function (flag,meta25328){
this.flag = flag;
this.meta25328 = meta25328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25329,meta25328__$1){
var self__ = this;
var _25329__$1 = this;
return (new cljs.core.async.t_cljs$core$async25327(self__.flag,meta25328__$1));
}));

(cljs.core.async.t_cljs$core$async25327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25329){
var self__ = this;
var _25329__$1 = this;
return self__.meta25328;
}));

(cljs.core.async.t_cljs$core$async25327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25328","meta25328",1766710570,null)], null);
}));

(cljs.core.async.t_cljs$core$async25327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25327");

(cljs.core.async.t_cljs$core$async25327.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25327.
 */
cljs.core.async.__GT_t_cljs$core$async25327 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25327(flag__$1,meta25328){
return (new cljs.core.async.t_cljs$core$async25327(flag__$1,meta25328));
});

}

return (new cljs.core.async.t_cljs$core$async25327(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25330 = (function (flag,cb,meta25331){
this.flag = flag;
this.cb = cb;
this.meta25331 = meta25331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25332,meta25331__$1){
var self__ = this;
var _25332__$1 = this;
return (new cljs.core.async.t_cljs$core$async25330(self__.flag,self__.cb,meta25331__$1));
}));

(cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25332){
var self__ = this;
var _25332__$1 = this;
return self__.meta25331;
}));

(cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25331","meta25331",-1325284601,null)], null);
}));

(cljs.core.async.t_cljs$core$async25330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25330");

(cljs.core.async.t_cljs$core$async25330.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25330.
 */
cljs.core.async.__GT_t_cljs$core$async25330 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25330(flag__$1,cb__$1,meta25331){
return (new cljs.core.async.t_cljs$core$async25330(flag__$1,cb__$1,meta25331));
});

}

return (new cljs.core.async.t_cljs$core$async25330(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__25333_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25333_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__25334_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25334_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25335 = (i + (1));
i = G__25335;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25340 = arguments.length;
var i__5770__auto___25341 = (0);
while(true){
if((i__5770__auto___25341 < len__5769__auto___25340)){
args__5775__auto__.push((arguments[i__5770__auto___25341]));

var G__25342 = (i__5770__auto___25341 + (1));
i__5770__auto___25341 = G__25342;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25338){
var map__25339 = p__25338;
var map__25339__$1 = cljs.core.__destructure_map.call(null,map__25339);
var opts = map__25339__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25336){
var G__25337 = cljs.core.first.call(null,seq25336);
var seq25336__$1 = cljs.core.next.call(null,seq25336);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25337,seq25336__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25344 = arguments.length;
switch (G__25344) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25245__auto___25391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25368){
var state_val_25369 = (state_25368[(1)]);
if((state_val_25369 === (7))){
var inst_25364 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25370_25392 = state_25368__$1;
(statearr_25370_25392[(2)] = inst_25364);

(statearr_25370_25392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (1))){
var state_25368__$1 = state_25368;
var statearr_25371_25393 = state_25368__$1;
(statearr_25371_25393[(2)] = null);

(statearr_25371_25393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (4))){
var inst_25347 = (state_25368[(7)]);
var inst_25347__$1 = (state_25368[(2)]);
var inst_25348 = (inst_25347__$1 == null);
var state_25368__$1 = (function (){var statearr_25372 = state_25368;
(statearr_25372[(7)] = inst_25347__$1);

return statearr_25372;
})();
if(cljs.core.truth_(inst_25348)){
var statearr_25373_25394 = state_25368__$1;
(statearr_25373_25394[(1)] = (5));

} else {
var statearr_25374_25395 = state_25368__$1;
(statearr_25374_25395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (13))){
var state_25368__$1 = state_25368;
var statearr_25375_25396 = state_25368__$1;
(statearr_25375_25396[(2)] = null);

(statearr_25375_25396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (6))){
var inst_25347 = (state_25368[(7)]);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25368__$1,(11),to,inst_25347);
} else {
if((state_val_25369 === (3))){
var inst_25366 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25368__$1,inst_25366);
} else {
if((state_val_25369 === (12))){
var state_25368__$1 = state_25368;
var statearr_25376_25397 = state_25368__$1;
(statearr_25376_25397[(2)] = null);

(statearr_25376_25397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (2))){
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(4),from);
} else {
if((state_val_25369 === (11))){
var inst_25357 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25357)){
var statearr_25377_25398 = state_25368__$1;
(statearr_25377_25398[(1)] = (12));

} else {
var statearr_25378_25399 = state_25368__$1;
(statearr_25378_25399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (9))){
var state_25368__$1 = state_25368;
var statearr_25379_25400 = state_25368__$1;
(statearr_25379_25400[(2)] = null);

(statearr_25379_25400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (5))){
var state_25368__$1 = state_25368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25380_25401 = state_25368__$1;
(statearr_25380_25401[(1)] = (8));

} else {
var statearr_25381_25402 = state_25368__$1;
(statearr_25381_25402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (14))){
var inst_25362 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25382_25403 = state_25368__$1;
(statearr_25382_25403[(2)] = inst_25362);

(statearr_25382_25403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (10))){
var inst_25354 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25383_25404 = state_25368__$1;
(statearr_25383_25404[(2)] = inst_25354);

(statearr_25383_25404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (8))){
var inst_25351 = cljs.core.async.close_BANG_.call(null,to);
var state_25368__$1 = state_25368;
var statearr_25384_25405 = state_25368__$1;
(statearr_25384_25405[(2)] = inst_25351);

(statearr_25384_25405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_25385 = [null,null,null,null,null,null,null,null];
(statearr_25385[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_25385[(1)] = (1));

return statearr_25385;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_25368){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25386){var ex__25175__auto__ = e25386;
var statearr_25387_25406 = state_25368;
(statearr_25387_25406[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25368[(4)]))){
var statearr_25388_25407 = state_25368;
(statearr_25388_25407[(1)] = cljs.core.first.call(null,(state_25368[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25408 = state_25368;
state_25368 = G__25408;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_25368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_25368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25389 = f__25246__auto__.call(null);
(statearr_25389[(6)] = c__25245__auto___25391);

return statearr_25389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__25409){
var vec__25410 = p__25409;
var v = cljs.core.nth.call(null,vec__25410,(0),null);
var p = cljs.core.nth.call(null,vec__25410,(1),null);
var job = vec__25410;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25245__auto___25586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25417){
var state_val_25418 = (state_25417[(1)]);
if((state_val_25418 === (1))){
var state_25417__$1 = state_25417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25417__$1,(2),res,v);
} else {
if((state_val_25418 === (2))){
var inst_25414 = (state_25417[(2)]);
var inst_25415 = cljs.core.async.close_BANG_.call(null,res);
var state_25417__$1 = (function (){var statearr_25419 = state_25417;
(statearr_25419[(7)] = inst_25414);

return statearr_25419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25417__$1,inst_25415);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0 = (function (){
var statearr_25420 = [null,null,null,null,null,null,null,null];
(statearr_25420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__);

(statearr_25420[(1)] = (1));

return statearr_25420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1 = (function (state_25417){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25421){var ex__25175__auto__ = e25421;
var statearr_25422_25587 = state_25417;
(statearr_25422_25587[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25417[(4)]))){
var statearr_25423_25588 = state_25417;
(statearr_25423_25588[(1)] = cljs.core.first.call(null,(state_25417[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25589 = state_25417;
state_25417 = G__25589;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = function(state_25417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1.call(this,state_25417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25424 = f__25246__auto__.call(null);
(statearr_25424[(6)] = c__25245__auto___25586);

return statearr_25424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__25425){
var vec__25426 = p__25425;
var v = cljs.core.nth.call(null,vec__25426,(0),null);
var p = cljs.core.nth.call(null,vec__25426,(1),null);
var job = vec__25426;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5636__auto___25590 = n;
var __25591 = (0);
while(true){
if((__25591 < n__5636__auto___25590)){
var G__25429_25592 = type;
var G__25429_25593__$1 = (((G__25429_25592 instanceof cljs.core.Keyword))?G__25429_25592.fqn:null);
switch (G__25429_25593__$1) {
case "compute":
var c__25245__auto___25595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25591,c__25245__auto___25595,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async){
return (function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = ((function (__25591,c__25245__auto___25595,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async){
return (function (state_25442){
var state_val_25443 = (state_25442[(1)]);
if((state_val_25443 === (1))){
var state_25442__$1 = state_25442;
var statearr_25444_25596 = state_25442__$1;
(statearr_25444_25596[(2)] = null);

(statearr_25444_25596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (2))){
var state_25442__$1 = state_25442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25442__$1,(4),jobs);
} else {
if((state_val_25443 === (3))){
var inst_25440 = (state_25442[(2)]);
var state_25442__$1 = state_25442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25442__$1,inst_25440);
} else {
if((state_val_25443 === (4))){
var inst_25432 = (state_25442[(2)]);
var inst_25433 = process__$1.call(null,inst_25432);
var state_25442__$1 = state_25442;
if(cljs.core.truth_(inst_25433)){
var statearr_25445_25597 = state_25442__$1;
(statearr_25445_25597[(1)] = (5));

} else {
var statearr_25446_25598 = state_25442__$1;
(statearr_25446_25598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (5))){
var state_25442__$1 = state_25442;
var statearr_25447_25599 = state_25442__$1;
(statearr_25447_25599[(2)] = null);

(statearr_25447_25599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (6))){
var state_25442__$1 = state_25442;
var statearr_25448_25600 = state_25442__$1;
(statearr_25448_25600[(2)] = null);

(statearr_25448_25600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (7))){
var inst_25438 = (state_25442[(2)]);
var state_25442__$1 = state_25442;
var statearr_25449_25601 = state_25442__$1;
(statearr_25449_25601[(2)] = inst_25438);

(statearr_25449_25601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25591,c__25245__auto___25595,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async))
;
return ((function (__25591,switch__25171__auto__,c__25245__auto___25595,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0 = (function (){
var statearr_25450 = [null,null,null,null,null,null,null];
(statearr_25450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__);

(statearr_25450[(1)] = (1));

return statearr_25450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1 = (function (state_25442){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25451){var ex__25175__auto__ = e25451;
var statearr_25452_25602 = state_25442;
(statearr_25452_25602[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25442[(4)]))){
var statearr_25453_25603 = state_25442;
(statearr_25453_25603[(1)] = cljs.core.first.call(null,(state_25442[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25604 = state_25442;
state_25442 = G__25604;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = function(state_25442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1.call(this,state_25442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__;
})()
;})(__25591,switch__25171__auto__,c__25245__auto___25595,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async))
})();
var state__25247__auto__ = (function (){var statearr_25454 = f__25246__auto__.call(null);
(statearr_25454[(6)] = c__25245__auto___25595);

return statearr_25454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
});})(__25591,c__25245__auto___25595,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async))
);


break;
case "async":
var c__25245__auto___25605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25591,c__25245__auto___25605,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async){
return (function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = ((function (__25591,c__25245__auto___25605,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async){
return (function (state_25467){
var state_val_25468 = (state_25467[(1)]);
if((state_val_25468 === (1))){
var state_25467__$1 = state_25467;
var statearr_25469_25606 = state_25467__$1;
(statearr_25469_25606[(2)] = null);

(statearr_25469_25606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (2))){
var state_25467__$1 = state_25467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25467__$1,(4),jobs);
} else {
if((state_val_25468 === (3))){
var inst_25465 = (state_25467[(2)]);
var state_25467__$1 = state_25467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25467__$1,inst_25465);
} else {
if((state_val_25468 === (4))){
var inst_25457 = (state_25467[(2)]);
var inst_25458 = async.call(null,inst_25457);
var state_25467__$1 = state_25467;
if(cljs.core.truth_(inst_25458)){
var statearr_25470_25607 = state_25467__$1;
(statearr_25470_25607[(1)] = (5));

} else {
var statearr_25471_25608 = state_25467__$1;
(statearr_25471_25608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (5))){
var state_25467__$1 = state_25467;
var statearr_25472_25609 = state_25467__$1;
(statearr_25472_25609[(2)] = null);

(statearr_25472_25609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (6))){
var state_25467__$1 = state_25467;
var statearr_25473_25610 = state_25467__$1;
(statearr_25473_25610[(2)] = null);

(statearr_25473_25610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (7))){
var inst_25463 = (state_25467[(2)]);
var state_25467__$1 = state_25467;
var statearr_25474_25611 = state_25467__$1;
(statearr_25474_25611[(2)] = inst_25463);

(statearr_25474_25611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25591,c__25245__auto___25605,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async))
;
return ((function (__25591,switch__25171__auto__,c__25245__auto___25605,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0 = (function (){
var statearr_25475 = [null,null,null,null,null,null,null];
(statearr_25475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__);

(statearr_25475[(1)] = (1));

return statearr_25475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1 = (function (state_25467){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25476){var ex__25175__auto__ = e25476;
var statearr_25477_25612 = state_25467;
(statearr_25477_25612[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25467[(4)]))){
var statearr_25478_25613 = state_25467;
(statearr_25478_25613[(1)] = cljs.core.first.call(null,(state_25467[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25614 = state_25467;
state_25467 = G__25614;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = function(state_25467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1.call(this,state_25467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__;
})()
;})(__25591,switch__25171__auto__,c__25245__auto___25605,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async))
})();
var state__25247__auto__ = (function (){var statearr_25479 = f__25246__auto__.call(null);
(statearr_25479[(6)] = c__25245__auto___25605);

return statearr_25479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
});})(__25591,c__25245__auto___25605,G__25429_25592,G__25429_25593__$1,n__5636__auto___25590,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25429_25593__$1)].join('')));

}

var G__25615 = (__25591 + (1));
__25591 = G__25615;
continue;
} else {
}
break;
}

var c__25245__auto___25616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25501){
var state_val_25502 = (state_25501[(1)]);
if((state_val_25502 === (7))){
var inst_25497 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
var statearr_25503_25617 = state_25501__$1;
(statearr_25503_25617[(2)] = inst_25497);

(statearr_25503_25617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (1))){
var state_25501__$1 = state_25501;
var statearr_25504_25618 = state_25501__$1;
(statearr_25504_25618[(2)] = null);

(statearr_25504_25618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (4))){
var inst_25482 = (state_25501[(7)]);
var inst_25482__$1 = (state_25501[(2)]);
var inst_25483 = (inst_25482__$1 == null);
var state_25501__$1 = (function (){var statearr_25505 = state_25501;
(statearr_25505[(7)] = inst_25482__$1);

return statearr_25505;
})();
if(cljs.core.truth_(inst_25483)){
var statearr_25506_25619 = state_25501__$1;
(statearr_25506_25619[(1)] = (5));

} else {
var statearr_25507_25620 = state_25501__$1;
(statearr_25507_25620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (6))){
var inst_25482 = (state_25501[(7)]);
var inst_25487 = (state_25501[(8)]);
var inst_25487__$1 = cljs.core.async.chan.call(null,(1));
var inst_25488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25489 = [inst_25482,inst_25487__$1];
var inst_25490 = (new cljs.core.PersistentVector(null,2,(5),inst_25488,inst_25489,null));
var state_25501__$1 = (function (){var statearr_25508 = state_25501;
(statearr_25508[(8)] = inst_25487__$1);

return statearr_25508;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25501__$1,(8),jobs,inst_25490);
} else {
if((state_val_25502 === (3))){
var inst_25499 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25501__$1,inst_25499);
} else {
if((state_val_25502 === (2))){
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,(4),from);
} else {
if((state_val_25502 === (9))){
var inst_25494 = (state_25501[(2)]);
var state_25501__$1 = (function (){var statearr_25509 = state_25501;
(statearr_25509[(9)] = inst_25494);

return statearr_25509;
})();
var statearr_25510_25621 = state_25501__$1;
(statearr_25510_25621[(2)] = null);

(statearr_25510_25621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (5))){
var inst_25485 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25501__$1 = state_25501;
var statearr_25511_25622 = state_25501__$1;
(statearr_25511_25622[(2)] = inst_25485);

(statearr_25511_25622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (8))){
var inst_25487 = (state_25501[(8)]);
var inst_25492 = (state_25501[(2)]);
var state_25501__$1 = (function (){var statearr_25512 = state_25501;
(statearr_25512[(10)] = inst_25492);

return statearr_25512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25501__$1,(9),results,inst_25487);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0 = (function (){
var statearr_25513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__);

(statearr_25513[(1)] = (1));

return statearr_25513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1 = (function (state_25501){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25514){var ex__25175__auto__ = e25514;
var statearr_25515_25623 = state_25501;
(statearr_25515_25623[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25501[(4)]))){
var statearr_25516_25624 = state_25501;
(statearr_25516_25624[(1)] = cljs.core.first.call(null,(state_25501[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25625 = state_25501;
state_25501 = G__25625;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = function(state_25501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1.call(this,state_25501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25517 = f__25246__auto__.call(null);
(statearr_25517[(6)] = c__25245__auto___25616);

return statearr_25517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


var c__25245__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25555){
var state_val_25556 = (state_25555[(1)]);
if((state_val_25556 === (7))){
var inst_25551 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
var statearr_25557_25626 = state_25555__$1;
(statearr_25557_25626[(2)] = inst_25551);

(statearr_25557_25626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (20))){
var state_25555__$1 = state_25555;
var statearr_25558_25627 = state_25555__$1;
(statearr_25558_25627[(2)] = null);

(statearr_25558_25627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (1))){
var state_25555__$1 = state_25555;
var statearr_25559_25628 = state_25555__$1;
(statearr_25559_25628[(2)] = null);

(statearr_25559_25628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (4))){
var inst_25520 = (state_25555[(7)]);
var inst_25520__$1 = (state_25555[(2)]);
var inst_25521 = (inst_25520__$1 == null);
var state_25555__$1 = (function (){var statearr_25560 = state_25555;
(statearr_25560[(7)] = inst_25520__$1);

return statearr_25560;
})();
if(cljs.core.truth_(inst_25521)){
var statearr_25561_25629 = state_25555__$1;
(statearr_25561_25629[(1)] = (5));

} else {
var statearr_25562_25630 = state_25555__$1;
(statearr_25562_25630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (15))){
var inst_25533 = (state_25555[(8)]);
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25555__$1,(18),to,inst_25533);
} else {
if((state_val_25556 === (21))){
var inst_25546 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
var statearr_25563_25631 = state_25555__$1;
(statearr_25563_25631[(2)] = inst_25546);

(statearr_25563_25631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (13))){
var inst_25548 = (state_25555[(2)]);
var state_25555__$1 = (function (){var statearr_25564 = state_25555;
(statearr_25564[(9)] = inst_25548);

return statearr_25564;
})();
var statearr_25565_25632 = state_25555__$1;
(statearr_25565_25632[(2)] = null);

(statearr_25565_25632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (6))){
var inst_25520 = (state_25555[(7)]);
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25555__$1,(11),inst_25520);
} else {
if((state_val_25556 === (17))){
var inst_25541 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
if(cljs.core.truth_(inst_25541)){
var statearr_25566_25633 = state_25555__$1;
(statearr_25566_25633[(1)] = (19));

} else {
var statearr_25567_25634 = state_25555__$1;
(statearr_25567_25634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (3))){
var inst_25553 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25555__$1,inst_25553);
} else {
if((state_val_25556 === (12))){
var inst_25530 = (state_25555[(10)]);
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25555__$1,(14),inst_25530);
} else {
if((state_val_25556 === (2))){
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25555__$1,(4),results);
} else {
if((state_val_25556 === (19))){
var state_25555__$1 = state_25555;
var statearr_25568_25635 = state_25555__$1;
(statearr_25568_25635[(2)] = null);

(statearr_25568_25635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (11))){
var inst_25530 = (state_25555[(2)]);
var state_25555__$1 = (function (){var statearr_25569 = state_25555;
(statearr_25569[(10)] = inst_25530);

return statearr_25569;
})();
var statearr_25570_25636 = state_25555__$1;
(statearr_25570_25636[(2)] = null);

(statearr_25570_25636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (9))){
var state_25555__$1 = state_25555;
var statearr_25571_25637 = state_25555__$1;
(statearr_25571_25637[(2)] = null);

(statearr_25571_25637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (5))){
var state_25555__$1 = state_25555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25572_25638 = state_25555__$1;
(statearr_25572_25638[(1)] = (8));

} else {
var statearr_25573_25639 = state_25555__$1;
(statearr_25573_25639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (14))){
var inst_25533 = (state_25555[(8)]);
var inst_25535 = (state_25555[(11)]);
var inst_25533__$1 = (state_25555[(2)]);
var inst_25534 = (inst_25533__$1 == null);
var inst_25535__$1 = cljs.core.not.call(null,inst_25534);
var state_25555__$1 = (function (){var statearr_25574 = state_25555;
(statearr_25574[(8)] = inst_25533__$1);

(statearr_25574[(11)] = inst_25535__$1);

return statearr_25574;
})();
if(inst_25535__$1){
var statearr_25575_25640 = state_25555__$1;
(statearr_25575_25640[(1)] = (15));

} else {
var statearr_25576_25641 = state_25555__$1;
(statearr_25576_25641[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (16))){
var inst_25535 = (state_25555[(11)]);
var state_25555__$1 = state_25555;
var statearr_25577_25642 = state_25555__$1;
(statearr_25577_25642[(2)] = inst_25535);

(statearr_25577_25642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (10))){
var inst_25527 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
var statearr_25578_25643 = state_25555__$1;
(statearr_25578_25643[(2)] = inst_25527);

(statearr_25578_25643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (18))){
var inst_25538 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
var statearr_25579_25644 = state_25555__$1;
(statearr_25579_25644[(2)] = inst_25538);

(statearr_25579_25644[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (8))){
var inst_25524 = cljs.core.async.close_BANG_.call(null,to);
var state_25555__$1 = state_25555;
var statearr_25580_25645 = state_25555__$1;
(statearr_25580_25645[(2)] = inst_25524);

(statearr_25580_25645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0 = (function (){
var statearr_25581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__);

(statearr_25581[(1)] = (1));

return statearr_25581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1 = (function (state_25555){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25582){var ex__25175__auto__ = e25582;
var statearr_25583_25646 = state_25555;
(statearr_25583_25646[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25555[(4)]))){
var statearr_25584_25647 = state_25555;
(statearr_25584_25647[(1)] = cljs.core.first.call(null,(state_25555[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25648 = state_25555;
state_25555 = G__25648;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__ = function(state_25555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1.call(this,state_25555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25585 = f__25246__auto__.call(null);
(statearr_25585[(6)] = c__25245__auto__);

return statearr_25585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));

return c__25245__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25650 = arguments.length;
switch (G__25650) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25653 = arguments.length;
switch (G__25653) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25656 = arguments.length;
switch (G__25656) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25245__auto___25706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25682){
var state_val_25683 = (state_25682[(1)]);
if((state_val_25683 === (7))){
var inst_25678 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25684_25707 = state_25682__$1;
(statearr_25684_25707[(2)] = inst_25678);

(statearr_25684_25707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (1))){
var state_25682__$1 = state_25682;
var statearr_25685_25708 = state_25682__$1;
(statearr_25685_25708[(2)] = null);

(statearr_25685_25708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (4))){
var inst_25659 = (state_25682[(7)]);
var inst_25659__$1 = (state_25682[(2)]);
var inst_25660 = (inst_25659__$1 == null);
var state_25682__$1 = (function (){var statearr_25686 = state_25682;
(statearr_25686[(7)] = inst_25659__$1);

return statearr_25686;
})();
if(cljs.core.truth_(inst_25660)){
var statearr_25687_25709 = state_25682__$1;
(statearr_25687_25709[(1)] = (5));

} else {
var statearr_25688_25710 = state_25682__$1;
(statearr_25688_25710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (13))){
var state_25682__$1 = state_25682;
var statearr_25689_25711 = state_25682__$1;
(statearr_25689_25711[(2)] = null);

(statearr_25689_25711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (6))){
var inst_25659 = (state_25682[(7)]);
var inst_25665 = p.call(null,inst_25659);
var state_25682__$1 = state_25682;
if(cljs.core.truth_(inst_25665)){
var statearr_25690_25712 = state_25682__$1;
(statearr_25690_25712[(1)] = (9));

} else {
var statearr_25691_25713 = state_25682__$1;
(statearr_25691_25713[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (3))){
var inst_25680 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25682__$1,inst_25680);
} else {
if((state_val_25683 === (12))){
var state_25682__$1 = state_25682;
var statearr_25692_25714 = state_25682__$1;
(statearr_25692_25714[(2)] = null);

(statearr_25692_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (2))){
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(4),ch);
} else {
if((state_val_25683 === (11))){
var inst_25659 = (state_25682[(7)]);
var inst_25669 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25682__$1,(8),inst_25669,inst_25659);
} else {
if((state_val_25683 === (9))){
var state_25682__$1 = state_25682;
var statearr_25693_25715 = state_25682__$1;
(statearr_25693_25715[(2)] = tc);

(statearr_25693_25715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (5))){
var inst_25662 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25663 = cljs.core.async.close_BANG_.call(null,fc);
var state_25682__$1 = (function (){var statearr_25694 = state_25682;
(statearr_25694[(8)] = inst_25662);

return statearr_25694;
})();
var statearr_25695_25716 = state_25682__$1;
(statearr_25695_25716[(2)] = inst_25663);

(statearr_25695_25716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (14))){
var inst_25676 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25696_25717 = state_25682__$1;
(statearr_25696_25717[(2)] = inst_25676);

(statearr_25696_25717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (10))){
var state_25682__$1 = state_25682;
var statearr_25697_25718 = state_25682__$1;
(statearr_25697_25718[(2)] = fc);

(statearr_25697_25718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (8))){
var inst_25671 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
if(cljs.core.truth_(inst_25671)){
var statearr_25698_25719 = state_25682__$1;
(statearr_25698_25719[(1)] = (12));

} else {
var statearr_25699_25720 = state_25682__$1;
(statearr_25699_25720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_25700 = [null,null,null,null,null,null,null,null,null];
(statearr_25700[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_25700[(1)] = (1));

return statearr_25700;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_25682){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25701){var ex__25175__auto__ = e25701;
var statearr_25702_25721 = state_25682;
(statearr_25702_25721[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25682[(4)]))){
var statearr_25703_25722 = state_25682;
(statearr_25703_25722[(1)] = cljs.core.first.call(null,(state_25682[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25723 = state_25682;
state_25682 = G__25723;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_25682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_25682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25704 = f__25246__auto__.call(null);
(statearr_25704[(6)] = c__25245__auto___25706);

return statearr_25704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25245__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25745){
var state_val_25746 = (state_25745[(1)]);
if((state_val_25746 === (7))){
var inst_25741 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
var statearr_25747_25766 = state_25745__$1;
(statearr_25747_25766[(2)] = inst_25741);

(statearr_25747_25766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (1))){
var inst_25724 = init;
var inst_25725 = inst_25724;
var state_25745__$1 = (function (){var statearr_25748 = state_25745;
(statearr_25748[(7)] = inst_25725);

return statearr_25748;
})();
var statearr_25749_25767 = state_25745__$1;
(statearr_25749_25767[(2)] = null);

(statearr_25749_25767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (4))){
var inst_25728 = (state_25745[(8)]);
var inst_25728__$1 = (state_25745[(2)]);
var inst_25729 = (inst_25728__$1 == null);
var state_25745__$1 = (function (){var statearr_25750 = state_25745;
(statearr_25750[(8)] = inst_25728__$1);

return statearr_25750;
})();
if(cljs.core.truth_(inst_25729)){
var statearr_25751_25768 = state_25745__$1;
(statearr_25751_25768[(1)] = (5));

} else {
var statearr_25752_25769 = state_25745__$1;
(statearr_25752_25769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (6))){
var inst_25725 = (state_25745[(7)]);
var inst_25728 = (state_25745[(8)]);
var inst_25732 = (state_25745[(9)]);
var inst_25732__$1 = f.call(null,inst_25725,inst_25728);
var inst_25733 = cljs.core.reduced_QMARK_.call(null,inst_25732__$1);
var state_25745__$1 = (function (){var statearr_25753 = state_25745;
(statearr_25753[(9)] = inst_25732__$1);

return statearr_25753;
})();
if(inst_25733){
var statearr_25754_25770 = state_25745__$1;
(statearr_25754_25770[(1)] = (8));

} else {
var statearr_25755_25771 = state_25745__$1;
(statearr_25755_25771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (3))){
var inst_25743 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25745__$1,inst_25743);
} else {
if((state_val_25746 === (2))){
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25745__$1,(4),ch);
} else {
if((state_val_25746 === (9))){
var inst_25732 = (state_25745[(9)]);
var inst_25725 = inst_25732;
var state_25745__$1 = (function (){var statearr_25756 = state_25745;
(statearr_25756[(7)] = inst_25725);

return statearr_25756;
})();
var statearr_25757_25772 = state_25745__$1;
(statearr_25757_25772[(2)] = null);

(statearr_25757_25772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (5))){
var inst_25725 = (state_25745[(7)]);
var state_25745__$1 = state_25745;
var statearr_25758_25773 = state_25745__$1;
(statearr_25758_25773[(2)] = inst_25725);

(statearr_25758_25773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (10))){
var inst_25739 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
var statearr_25759_25774 = state_25745__$1;
(statearr_25759_25774[(2)] = inst_25739);

(statearr_25759_25774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (8))){
var inst_25732 = (state_25745[(9)]);
var inst_25735 = cljs.core.deref.call(null,inst_25732);
var state_25745__$1 = state_25745;
var statearr_25760_25775 = state_25745__$1;
(statearr_25760_25775[(2)] = inst_25735);

(statearr_25760_25775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__25172__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25172__auto____0 = (function (){
var statearr_25761 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25761[(0)] = cljs$core$async$reduce_$_state_machine__25172__auto__);

(statearr_25761[(1)] = (1));

return statearr_25761;
});
var cljs$core$async$reduce_$_state_machine__25172__auto____1 = (function (state_25745){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25762){var ex__25175__auto__ = e25762;
var statearr_25763_25776 = state_25745;
(statearr_25763_25776[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25745[(4)]))){
var statearr_25764_25777 = state_25745;
(statearr_25764_25777[(1)] = cljs.core.first.call(null,(state_25745[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25778 = state_25745;
state_25745 = G__25778;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25172__auto__ = function(state_25745){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25172__auto____1.call(this,state_25745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25172__auto____0;
cljs$core$async$reduce_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25172__auto____1;
return cljs$core$async$reduce_$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25765 = f__25246__auto__.call(null);
(statearr_25765[(6)] = c__25245__auto__);

return statearr_25765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));

return c__25245__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25245__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25784){
var state_val_25785 = (state_25784[(1)]);
if((state_val_25785 === (1))){
var inst_25779 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25784__$1,(2),inst_25779);
} else {
if((state_val_25785 === (2))){
var inst_25781 = (state_25784[(2)]);
var inst_25782 = f__$1.call(null,inst_25781);
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25784__$1,inst_25782);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__25172__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25172__auto____0 = (function (){
var statearr_25786 = [null,null,null,null,null,null,null];
(statearr_25786[(0)] = cljs$core$async$transduce_$_state_machine__25172__auto__);

(statearr_25786[(1)] = (1));

return statearr_25786;
});
var cljs$core$async$transduce_$_state_machine__25172__auto____1 = (function (state_25784){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25787){var ex__25175__auto__ = e25787;
var statearr_25788_25791 = state_25784;
(statearr_25788_25791[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25784[(4)]))){
var statearr_25789_25792 = state_25784;
(statearr_25789_25792[(1)] = cljs.core.first.call(null,(state_25784[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25793 = state_25784;
state_25784 = G__25793;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25172__auto__ = function(state_25784){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25172__auto____1.call(this,state_25784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25172__auto____0;
cljs$core$async$transduce_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25172__auto____1;
return cljs$core$async$transduce_$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25790 = f__25246__auto__.call(null);
(statearr_25790[(6)] = c__25245__auto__);

return statearr_25790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));

return c__25245__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__25795 = arguments.length;
switch (G__25795) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25245__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_25820){
var state_val_25821 = (state_25820[(1)]);
if((state_val_25821 === (7))){
var inst_25802 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25822_25844 = state_25820__$1;
(statearr_25822_25844[(2)] = inst_25802);

(statearr_25822_25844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (1))){
var inst_25796 = cljs.core.seq.call(null,coll);
var inst_25797 = inst_25796;
var state_25820__$1 = (function (){var statearr_25823 = state_25820;
(statearr_25823[(7)] = inst_25797);

return statearr_25823;
})();
var statearr_25824_25845 = state_25820__$1;
(statearr_25824_25845[(2)] = null);

(statearr_25824_25845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (4))){
var inst_25797 = (state_25820[(7)]);
var inst_25800 = cljs.core.first.call(null,inst_25797);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25820__$1,(7),ch,inst_25800);
} else {
if((state_val_25821 === (13))){
var inst_25814 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25825_25846 = state_25820__$1;
(statearr_25825_25846[(2)] = inst_25814);

(statearr_25825_25846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (6))){
var inst_25805 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25805)){
var statearr_25826_25847 = state_25820__$1;
(statearr_25826_25847[(1)] = (8));

} else {
var statearr_25827_25848 = state_25820__$1;
(statearr_25827_25848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (3))){
var inst_25818 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25820__$1,inst_25818);
} else {
if((state_val_25821 === (12))){
var state_25820__$1 = state_25820;
var statearr_25828_25849 = state_25820__$1;
(statearr_25828_25849[(2)] = null);

(statearr_25828_25849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (2))){
var inst_25797 = (state_25820[(7)]);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25797)){
var statearr_25829_25850 = state_25820__$1;
(statearr_25829_25850[(1)] = (4));

} else {
var statearr_25830_25851 = state_25820__$1;
(statearr_25830_25851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (11))){
var inst_25811 = cljs.core.async.close_BANG_.call(null,ch);
var state_25820__$1 = state_25820;
var statearr_25831_25852 = state_25820__$1;
(statearr_25831_25852[(2)] = inst_25811);

(statearr_25831_25852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (9))){
var state_25820__$1 = state_25820;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25832_25853 = state_25820__$1;
(statearr_25832_25853[(1)] = (11));

} else {
var statearr_25833_25854 = state_25820__$1;
(statearr_25833_25854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (5))){
var inst_25797 = (state_25820[(7)]);
var state_25820__$1 = state_25820;
var statearr_25834_25855 = state_25820__$1;
(statearr_25834_25855[(2)] = inst_25797);

(statearr_25834_25855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (10))){
var inst_25816 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25835_25856 = state_25820__$1;
(statearr_25835_25856[(2)] = inst_25816);

(statearr_25835_25856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (8))){
var inst_25797 = (state_25820[(7)]);
var inst_25807 = cljs.core.next.call(null,inst_25797);
var inst_25797__$1 = inst_25807;
var state_25820__$1 = (function (){var statearr_25836 = state_25820;
(statearr_25836[(7)] = inst_25797__$1);

return statearr_25836;
})();
var statearr_25837_25857 = state_25820__$1;
(statearr_25837_25857[(2)] = null);

(statearr_25837_25857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_25838 = [null,null,null,null,null,null,null,null];
(statearr_25838[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_25838[(1)] = (1));

return statearr_25838;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_25820){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_25820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e25839){var ex__25175__auto__ = e25839;
var statearr_25840_25858 = state_25820;
(statearr_25840_25858[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_25820[(4)]))){
var statearr_25841_25859 = state_25820;
(statearr_25841_25859[(1)] = cljs.core.first.call(null,(state_25820[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25860 = state_25820;
state_25820 = G__25860;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_25820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_25820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_25842 = f__25246__auto__.call(null);
(statearr_25842[(6)] = c__25245__auto__);

return statearr_25842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));

return c__25245__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25862 = arguments.length;
switch (G__25862) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25864 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25864.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25865 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25865.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25866 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25866.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25867 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25867.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25868 = (function (ch,cs,meta25869){
this.ch = ch;
this.cs = cs;
this.meta25869 = meta25869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25870,meta25869__$1){
var self__ = this;
var _25870__$1 = this;
return (new cljs.core.async.t_cljs$core$async25868(self__.ch,self__.cs,meta25869__$1));
}));

(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25870){
var self__ = this;
var _25870__$1 = this;
return self__.meta25869;
}));

(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25868.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25869","meta25869",2105498731,null)], null);
}));

(cljs.core.async.t_cljs$core$async25868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25868");

(cljs.core.async.t_cljs$core$async25868.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async25868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25868.
 */
cljs.core.async.__GT_t_cljs$core$async25868 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25868(ch__$1,cs__$1,meta25869){
return (new cljs.core.async.t_cljs$core$async25868(ch__$1,cs__$1,meta25869));
});

}

return (new cljs.core.async.t_cljs$core$async25868(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__25245__auto___26087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26003){
var state_val_26004 = (state_26003[(1)]);
if((state_val_26004 === (7))){
var inst_25999 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26005_26088 = state_26003__$1;
(statearr_26005_26088[(2)] = inst_25999);

(statearr_26005_26088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (20))){
var inst_25904 = (state_26003[(7)]);
var inst_25916 = cljs.core.first.call(null,inst_25904);
var inst_25917 = cljs.core.nth.call(null,inst_25916,(0),null);
var inst_25918 = cljs.core.nth.call(null,inst_25916,(1),null);
var state_26003__$1 = (function (){var statearr_26006 = state_26003;
(statearr_26006[(8)] = inst_25917);

return statearr_26006;
})();
if(cljs.core.truth_(inst_25918)){
var statearr_26007_26089 = state_26003__$1;
(statearr_26007_26089[(1)] = (22));

} else {
var statearr_26008_26090 = state_26003__$1;
(statearr_26008_26090[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (27))){
var inst_25946 = (state_26003[(9)]);
var inst_25948 = (state_26003[(10)]);
var inst_25953 = (state_26003[(11)]);
var inst_25873 = (state_26003[(12)]);
var inst_25953__$1 = cljs.core._nth.call(null,inst_25946,inst_25948);
var inst_25954 = cljs.core.async.put_BANG_.call(null,inst_25953__$1,inst_25873,done);
var state_26003__$1 = (function (){var statearr_26009 = state_26003;
(statearr_26009[(11)] = inst_25953__$1);

return statearr_26009;
})();
if(cljs.core.truth_(inst_25954)){
var statearr_26010_26091 = state_26003__$1;
(statearr_26010_26091[(1)] = (30));

} else {
var statearr_26011_26092 = state_26003__$1;
(statearr_26011_26092[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (1))){
var state_26003__$1 = state_26003;
var statearr_26012_26093 = state_26003__$1;
(statearr_26012_26093[(2)] = null);

(statearr_26012_26093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (24))){
var inst_25904 = (state_26003[(7)]);
var inst_25923 = (state_26003[(2)]);
var inst_25924 = cljs.core.next.call(null,inst_25904);
var inst_25882 = inst_25924;
var inst_25883 = null;
var inst_25884 = (0);
var inst_25885 = (0);
var state_26003__$1 = (function (){var statearr_26013 = state_26003;
(statearr_26013[(13)] = inst_25923);

(statearr_26013[(14)] = inst_25882);

(statearr_26013[(15)] = inst_25883);

(statearr_26013[(16)] = inst_25884);

(statearr_26013[(17)] = inst_25885);

return statearr_26013;
})();
var statearr_26014_26094 = state_26003__$1;
(statearr_26014_26094[(2)] = null);

(statearr_26014_26094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (39))){
var state_26003__$1 = state_26003;
var statearr_26018_26095 = state_26003__$1;
(statearr_26018_26095[(2)] = null);

(statearr_26018_26095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (4))){
var inst_25873 = (state_26003[(12)]);
var inst_25873__$1 = (state_26003[(2)]);
var inst_25874 = (inst_25873__$1 == null);
var state_26003__$1 = (function (){var statearr_26019 = state_26003;
(statearr_26019[(12)] = inst_25873__$1);

return statearr_26019;
})();
if(cljs.core.truth_(inst_25874)){
var statearr_26020_26096 = state_26003__$1;
(statearr_26020_26096[(1)] = (5));

} else {
var statearr_26021_26097 = state_26003__$1;
(statearr_26021_26097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (15))){
var inst_25885 = (state_26003[(17)]);
var inst_25882 = (state_26003[(14)]);
var inst_25883 = (state_26003[(15)]);
var inst_25884 = (state_26003[(16)]);
var inst_25900 = (state_26003[(2)]);
var inst_25901 = (inst_25885 + (1));
var tmp26015 = inst_25884;
var tmp26016 = inst_25883;
var tmp26017 = inst_25882;
var inst_25882__$1 = tmp26017;
var inst_25883__$1 = tmp26016;
var inst_25884__$1 = tmp26015;
var inst_25885__$1 = inst_25901;
var state_26003__$1 = (function (){var statearr_26022 = state_26003;
(statearr_26022[(18)] = inst_25900);

(statearr_26022[(14)] = inst_25882__$1);

(statearr_26022[(15)] = inst_25883__$1);

(statearr_26022[(16)] = inst_25884__$1);

(statearr_26022[(17)] = inst_25885__$1);

return statearr_26022;
})();
var statearr_26023_26098 = state_26003__$1;
(statearr_26023_26098[(2)] = null);

(statearr_26023_26098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (21))){
var inst_25927 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26027_26099 = state_26003__$1;
(statearr_26027_26099[(2)] = inst_25927);

(statearr_26027_26099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (31))){
var inst_25953 = (state_26003[(11)]);
var inst_25957 = cljs.core.async.untap_STAR_.call(null,m,inst_25953);
var state_26003__$1 = state_26003;
var statearr_26028_26100 = state_26003__$1;
(statearr_26028_26100[(2)] = inst_25957);

(statearr_26028_26100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (32))){
var inst_25948 = (state_26003[(10)]);
var inst_25945 = (state_26003[(19)]);
var inst_25946 = (state_26003[(9)]);
var inst_25947 = (state_26003[(20)]);
var inst_25959 = (state_26003[(2)]);
var inst_25960 = (inst_25948 + (1));
var tmp26024 = inst_25947;
var tmp26025 = inst_25946;
var tmp26026 = inst_25945;
var inst_25945__$1 = tmp26026;
var inst_25946__$1 = tmp26025;
var inst_25947__$1 = tmp26024;
var inst_25948__$1 = inst_25960;
var state_26003__$1 = (function (){var statearr_26029 = state_26003;
(statearr_26029[(21)] = inst_25959);

(statearr_26029[(19)] = inst_25945__$1);

(statearr_26029[(9)] = inst_25946__$1);

(statearr_26029[(20)] = inst_25947__$1);

(statearr_26029[(10)] = inst_25948__$1);

return statearr_26029;
})();
var statearr_26030_26101 = state_26003__$1;
(statearr_26030_26101[(2)] = null);

(statearr_26030_26101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (40))){
var inst_25972 = (state_26003[(22)]);
var inst_25976 = cljs.core.async.untap_STAR_.call(null,m,inst_25972);
var state_26003__$1 = state_26003;
var statearr_26031_26102 = state_26003__$1;
(statearr_26031_26102[(2)] = inst_25976);

(statearr_26031_26102[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (33))){
var inst_25963 = (state_26003[(23)]);
var inst_25965 = cljs.core.chunked_seq_QMARK_.call(null,inst_25963);
var state_26003__$1 = state_26003;
if(inst_25965){
var statearr_26032_26103 = state_26003__$1;
(statearr_26032_26103[(1)] = (36));

} else {
var statearr_26033_26104 = state_26003__$1;
(statearr_26033_26104[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (13))){
var inst_25894 = (state_26003[(24)]);
var inst_25897 = cljs.core.async.close_BANG_.call(null,inst_25894);
var state_26003__$1 = state_26003;
var statearr_26034_26105 = state_26003__$1;
(statearr_26034_26105[(2)] = inst_25897);

(statearr_26034_26105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (22))){
var inst_25917 = (state_26003[(8)]);
var inst_25920 = cljs.core.async.close_BANG_.call(null,inst_25917);
var state_26003__$1 = state_26003;
var statearr_26035_26106 = state_26003__$1;
(statearr_26035_26106[(2)] = inst_25920);

(statearr_26035_26106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (36))){
var inst_25963 = (state_26003[(23)]);
var inst_25967 = cljs.core.chunk_first.call(null,inst_25963);
var inst_25968 = cljs.core.chunk_rest.call(null,inst_25963);
var inst_25969 = cljs.core.count.call(null,inst_25967);
var inst_25945 = inst_25968;
var inst_25946 = inst_25967;
var inst_25947 = inst_25969;
var inst_25948 = (0);
var state_26003__$1 = (function (){var statearr_26036 = state_26003;
(statearr_26036[(19)] = inst_25945);

(statearr_26036[(9)] = inst_25946);

(statearr_26036[(20)] = inst_25947);

(statearr_26036[(10)] = inst_25948);

return statearr_26036;
})();
var statearr_26037_26107 = state_26003__$1;
(statearr_26037_26107[(2)] = null);

(statearr_26037_26107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (41))){
var inst_25963 = (state_26003[(23)]);
var inst_25978 = (state_26003[(2)]);
var inst_25979 = cljs.core.next.call(null,inst_25963);
var inst_25945 = inst_25979;
var inst_25946 = null;
var inst_25947 = (0);
var inst_25948 = (0);
var state_26003__$1 = (function (){var statearr_26038 = state_26003;
(statearr_26038[(25)] = inst_25978);

(statearr_26038[(19)] = inst_25945);

(statearr_26038[(9)] = inst_25946);

(statearr_26038[(20)] = inst_25947);

(statearr_26038[(10)] = inst_25948);

return statearr_26038;
})();
var statearr_26039_26108 = state_26003__$1;
(statearr_26039_26108[(2)] = null);

(statearr_26039_26108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (43))){
var state_26003__$1 = state_26003;
var statearr_26040_26109 = state_26003__$1;
(statearr_26040_26109[(2)] = null);

(statearr_26040_26109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (29))){
var inst_25987 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26041_26110 = state_26003__$1;
(statearr_26041_26110[(2)] = inst_25987);

(statearr_26041_26110[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (44))){
var inst_25996 = (state_26003[(2)]);
var state_26003__$1 = (function (){var statearr_26042 = state_26003;
(statearr_26042[(26)] = inst_25996);

return statearr_26042;
})();
var statearr_26043_26111 = state_26003__$1;
(statearr_26043_26111[(2)] = null);

(statearr_26043_26111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (6))){
var inst_25937 = (state_26003[(27)]);
var inst_25936 = cljs.core.deref.call(null,cs);
var inst_25937__$1 = cljs.core.keys.call(null,inst_25936);
var inst_25938 = cljs.core.count.call(null,inst_25937__$1);
var inst_25939 = cljs.core.reset_BANG_.call(null,dctr,inst_25938);
var inst_25944 = cljs.core.seq.call(null,inst_25937__$1);
var inst_25945 = inst_25944;
var inst_25946 = null;
var inst_25947 = (0);
var inst_25948 = (0);
var state_26003__$1 = (function (){var statearr_26044 = state_26003;
(statearr_26044[(27)] = inst_25937__$1);

(statearr_26044[(28)] = inst_25939);

(statearr_26044[(19)] = inst_25945);

(statearr_26044[(9)] = inst_25946);

(statearr_26044[(20)] = inst_25947);

(statearr_26044[(10)] = inst_25948);

return statearr_26044;
})();
var statearr_26045_26112 = state_26003__$1;
(statearr_26045_26112[(2)] = null);

(statearr_26045_26112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (28))){
var inst_25945 = (state_26003[(19)]);
var inst_25963 = (state_26003[(23)]);
var inst_25963__$1 = cljs.core.seq.call(null,inst_25945);
var state_26003__$1 = (function (){var statearr_26046 = state_26003;
(statearr_26046[(23)] = inst_25963__$1);

return statearr_26046;
})();
if(inst_25963__$1){
var statearr_26047_26113 = state_26003__$1;
(statearr_26047_26113[(1)] = (33));

} else {
var statearr_26048_26114 = state_26003__$1;
(statearr_26048_26114[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (25))){
var inst_25948 = (state_26003[(10)]);
var inst_25947 = (state_26003[(20)]);
var inst_25950 = (inst_25948 < inst_25947);
var inst_25951 = inst_25950;
var state_26003__$1 = state_26003;
if(cljs.core.truth_(inst_25951)){
var statearr_26049_26115 = state_26003__$1;
(statearr_26049_26115[(1)] = (27));

} else {
var statearr_26050_26116 = state_26003__$1;
(statearr_26050_26116[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (34))){
var state_26003__$1 = state_26003;
var statearr_26051_26117 = state_26003__$1;
(statearr_26051_26117[(2)] = null);

(statearr_26051_26117[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (17))){
var state_26003__$1 = state_26003;
var statearr_26052_26118 = state_26003__$1;
(statearr_26052_26118[(2)] = null);

(statearr_26052_26118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (3))){
var inst_26001 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26003__$1,inst_26001);
} else {
if((state_val_26004 === (12))){
var inst_25932 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26053_26119 = state_26003__$1;
(statearr_26053_26119[(2)] = inst_25932);

(statearr_26053_26119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (2))){
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26003__$1,(4),ch);
} else {
if((state_val_26004 === (23))){
var state_26003__$1 = state_26003;
var statearr_26054_26120 = state_26003__$1;
(statearr_26054_26120[(2)] = null);

(statearr_26054_26120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (35))){
var inst_25985 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26055_26121 = state_26003__$1;
(statearr_26055_26121[(2)] = inst_25985);

(statearr_26055_26121[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (19))){
var inst_25904 = (state_26003[(7)]);
var inst_25908 = cljs.core.chunk_first.call(null,inst_25904);
var inst_25909 = cljs.core.chunk_rest.call(null,inst_25904);
var inst_25910 = cljs.core.count.call(null,inst_25908);
var inst_25882 = inst_25909;
var inst_25883 = inst_25908;
var inst_25884 = inst_25910;
var inst_25885 = (0);
var state_26003__$1 = (function (){var statearr_26056 = state_26003;
(statearr_26056[(14)] = inst_25882);

(statearr_26056[(15)] = inst_25883);

(statearr_26056[(16)] = inst_25884);

(statearr_26056[(17)] = inst_25885);

return statearr_26056;
})();
var statearr_26057_26122 = state_26003__$1;
(statearr_26057_26122[(2)] = null);

(statearr_26057_26122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (11))){
var inst_25882 = (state_26003[(14)]);
var inst_25904 = (state_26003[(7)]);
var inst_25904__$1 = cljs.core.seq.call(null,inst_25882);
var state_26003__$1 = (function (){var statearr_26058 = state_26003;
(statearr_26058[(7)] = inst_25904__$1);

return statearr_26058;
})();
if(inst_25904__$1){
var statearr_26059_26123 = state_26003__$1;
(statearr_26059_26123[(1)] = (16));

} else {
var statearr_26060_26124 = state_26003__$1;
(statearr_26060_26124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (9))){
var inst_25934 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26061_26125 = state_26003__$1;
(statearr_26061_26125[(2)] = inst_25934);

(statearr_26061_26125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (5))){
var inst_25880 = cljs.core.deref.call(null,cs);
var inst_25881 = cljs.core.seq.call(null,inst_25880);
var inst_25882 = inst_25881;
var inst_25883 = null;
var inst_25884 = (0);
var inst_25885 = (0);
var state_26003__$1 = (function (){var statearr_26062 = state_26003;
(statearr_26062[(14)] = inst_25882);

(statearr_26062[(15)] = inst_25883);

(statearr_26062[(16)] = inst_25884);

(statearr_26062[(17)] = inst_25885);

return statearr_26062;
})();
var statearr_26063_26126 = state_26003__$1;
(statearr_26063_26126[(2)] = null);

(statearr_26063_26126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (14))){
var state_26003__$1 = state_26003;
var statearr_26064_26127 = state_26003__$1;
(statearr_26064_26127[(2)] = null);

(statearr_26064_26127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (45))){
var inst_25993 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26065_26128 = state_26003__$1;
(statearr_26065_26128[(2)] = inst_25993);

(statearr_26065_26128[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (26))){
var inst_25937 = (state_26003[(27)]);
var inst_25989 = (state_26003[(2)]);
var inst_25990 = cljs.core.seq.call(null,inst_25937);
var state_26003__$1 = (function (){var statearr_26066 = state_26003;
(statearr_26066[(29)] = inst_25989);

return statearr_26066;
})();
if(inst_25990){
var statearr_26067_26129 = state_26003__$1;
(statearr_26067_26129[(1)] = (42));

} else {
var statearr_26068_26130 = state_26003__$1;
(statearr_26068_26130[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (16))){
var inst_25904 = (state_26003[(7)]);
var inst_25906 = cljs.core.chunked_seq_QMARK_.call(null,inst_25904);
var state_26003__$1 = state_26003;
if(inst_25906){
var statearr_26069_26131 = state_26003__$1;
(statearr_26069_26131[(1)] = (19));

} else {
var statearr_26070_26132 = state_26003__$1;
(statearr_26070_26132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (38))){
var inst_25982 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26071_26133 = state_26003__$1;
(statearr_26071_26133[(2)] = inst_25982);

(statearr_26071_26133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (30))){
var state_26003__$1 = state_26003;
var statearr_26072_26134 = state_26003__$1;
(statearr_26072_26134[(2)] = null);

(statearr_26072_26134[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (10))){
var inst_25883 = (state_26003[(15)]);
var inst_25885 = (state_26003[(17)]);
var inst_25893 = cljs.core._nth.call(null,inst_25883,inst_25885);
var inst_25894 = cljs.core.nth.call(null,inst_25893,(0),null);
var inst_25895 = cljs.core.nth.call(null,inst_25893,(1),null);
var state_26003__$1 = (function (){var statearr_26073 = state_26003;
(statearr_26073[(24)] = inst_25894);

return statearr_26073;
})();
if(cljs.core.truth_(inst_25895)){
var statearr_26074_26135 = state_26003__$1;
(statearr_26074_26135[(1)] = (13));

} else {
var statearr_26075_26136 = state_26003__$1;
(statearr_26075_26136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (18))){
var inst_25930 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26076_26137 = state_26003__$1;
(statearr_26076_26137[(2)] = inst_25930);

(statearr_26076_26137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (42))){
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26003__$1,(45),dchan);
} else {
if((state_val_26004 === (37))){
var inst_25963 = (state_26003[(23)]);
var inst_25972 = (state_26003[(22)]);
var inst_25873 = (state_26003[(12)]);
var inst_25972__$1 = cljs.core.first.call(null,inst_25963);
var inst_25973 = cljs.core.async.put_BANG_.call(null,inst_25972__$1,inst_25873,done);
var state_26003__$1 = (function (){var statearr_26077 = state_26003;
(statearr_26077[(22)] = inst_25972__$1);

return statearr_26077;
})();
if(cljs.core.truth_(inst_25973)){
var statearr_26078_26138 = state_26003__$1;
(statearr_26078_26138[(1)] = (39));

} else {
var statearr_26079_26139 = state_26003__$1;
(statearr_26079_26139[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (8))){
var inst_25885 = (state_26003[(17)]);
var inst_25884 = (state_26003[(16)]);
var inst_25887 = (inst_25885 < inst_25884);
var inst_25888 = inst_25887;
var state_26003__$1 = state_26003;
if(cljs.core.truth_(inst_25888)){
var statearr_26080_26140 = state_26003__$1;
(statearr_26080_26140[(1)] = (10));

} else {
var statearr_26081_26141 = state_26003__$1;
(statearr_26081_26141[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__25172__auto__ = null;
var cljs$core$async$mult_$_state_machine__25172__auto____0 = (function (){
var statearr_26082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26082[(0)] = cljs$core$async$mult_$_state_machine__25172__auto__);

(statearr_26082[(1)] = (1));

return statearr_26082;
});
var cljs$core$async$mult_$_state_machine__25172__auto____1 = (function (state_26003){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26083){var ex__25175__auto__ = e26083;
var statearr_26084_26142 = state_26003;
(statearr_26084_26142[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26003[(4)]))){
var statearr_26085_26143 = state_26003;
(statearr_26085_26143[(1)] = cljs.core.first.call(null,(state_26003[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26144 = state_26003;
state_26003 = G__26144;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25172__auto__ = function(state_26003){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25172__auto____1.call(this,state_26003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25172__auto____0;
cljs$core$async$mult_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25172__auto____1;
return cljs$core$async$mult_$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26086 = f__25246__auto__.call(null);
(statearr_26086[(6)] = c__25245__auto___26087);

return statearr_26086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26146 = arguments.length;
switch (G__26146) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_26148 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_26148.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26149 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_26149.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26150 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26150.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26151 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,state_map);
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_26151.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26152 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,mode);
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26152.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26162 = arguments.length;
var i__5770__auto___26163 = (0);
while(true){
if((i__5770__auto___26163 < len__5769__auto___26162)){
args__5775__auto__.push((arguments[i__5770__auto___26163]));

var G__26164 = (i__5770__auto___26163 + (1));
i__5770__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26157){
var map__26158 = p__26157;
var map__26158__$1 = cljs.core.__destructure_map.call(null,map__26158);
var opts = map__26158__$1;
var statearr_26159_26165 = state;
(statearr_26159_26165[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_26160_26166 = state;
(statearr_26160_26166[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_26161_26167 = state;
(statearr_26161_26167[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26153){
var G__26154 = cljs.core.first.call(null,seq26153);
var seq26153__$1 = cljs.core.next.call(null,seq26153);
var G__26155 = cljs.core.first.call(null,seq26153__$1);
var seq26153__$2 = cljs.core.next.call(null,seq26153__$1);
var G__26156 = cljs.core.first.call(null,seq26153__$2);
var seq26153__$3 = cljs.core.next.call(null,seq26153__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26154,G__26155,G__26156,seq26153__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26168 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26169){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26169 = meta26169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26170,meta26169__$1){
var self__ = this;
var _26170__$1 = this;
return (new cljs.core.async.t_cljs$core$async26168(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26169__$1));
}));

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26170){
var self__ = this;
var _26170__$1 = this;
return self__.meta26169;
}));

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26169","meta26169",-102220466,null)], null);
}));

(cljs.core.async.t_cljs$core$async26168.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26168");

(cljs.core.async.t_cljs$core$async26168.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26168");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26168.
 */
cljs.core.async.__GT_t_cljs$core$async26168 = (function cljs$core$async$mix_$___GT_t_cljs$core$async26168(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26169){
return (new cljs.core.async.t_cljs$core$async26168(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26169));
});

}

return (new cljs.core.async.t_cljs$core$async26168(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25245__auto___26283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26238){
var state_val_26239 = (state_26238[(1)]);
if((state_val_26239 === (7))){
var inst_26198 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
if(cljs.core.truth_(inst_26198)){
var statearr_26240_26284 = state_26238__$1;
(statearr_26240_26284[(1)] = (8));

} else {
var statearr_26241_26285 = state_26238__$1;
(statearr_26241_26285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (20))){
var inst_26191 = (state_26238[(7)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26238__$1,(23),out,inst_26191);
} else {
if((state_val_26239 === (1))){
var inst_26174 = calc_state.call(null);
var inst_26175 = cljs.core.__destructure_map.call(null,inst_26174);
var inst_26176 = cljs.core.get.call(null,inst_26175,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26177 = cljs.core.get.call(null,inst_26175,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26178 = cljs.core.get.call(null,inst_26175,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26179 = inst_26174;
var state_26238__$1 = (function (){var statearr_26242 = state_26238;
(statearr_26242[(8)] = inst_26176);

(statearr_26242[(9)] = inst_26177);

(statearr_26242[(10)] = inst_26178);

(statearr_26242[(11)] = inst_26179);

return statearr_26242;
})();
var statearr_26243_26286 = state_26238__$1;
(statearr_26243_26286[(2)] = null);

(statearr_26243_26286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (24))){
var inst_26182 = (state_26238[(12)]);
var inst_26179 = inst_26182;
var state_26238__$1 = (function (){var statearr_26244 = state_26238;
(statearr_26244[(11)] = inst_26179);

return statearr_26244;
})();
var statearr_26245_26287 = state_26238__$1;
(statearr_26245_26287[(2)] = null);

(statearr_26245_26287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (4))){
var inst_26191 = (state_26238[(7)]);
var inst_26193 = (state_26238[(13)]);
var inst_26190 = (state_26238[(2)]);
var inst_26191__$1 = cljs.core.nth.call(null,inst_26190,(0),null);
var inst_26192 = cljs.core.nth.call(null,inst_26190,(1),null);
var inst_26193__$1 = (inst_26191__$1 == null);
var state_26238__$1 = (function (){var statearr_26246 = state_26238;
(statearr_26246[(7)] = inst_26191__$1);

(statearr_26246[(14)] = inst_26192);

(statearr_26246[(13)] = inst_26193__$1);

return statearr_26246;
})();
if(cljs.core.truth_(inst_26193__$1)){
var statearr_26247_26288 = state_26238__$1;
(statearr_26247_26288[(1)] = (5));

} else {
var statearr_26248_26289 = state_26238__$1;
(statearr_26248_26289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (15))){
var inst_26183 = (state_26238[(15)]);
var inst_26212 = (state_26238[(16)]);
var inst_26212__$1 = cljs.core.empty_QMARK_.call(null,inst_26183);
var state_26238__$1 = (function (){var statearr_26249 = state_26238;
(statearr_26249[(16)] = inst_26212__$1);

return statearr_26249;
})();
if(inst_26212__$1){
var statearr_26250_26290 = state_26238__$1;
(statearr_26250_26290[(1)] = (17));

} else {
var statearr_26251_26291 = state_26238__$1;
(statearr_26251_26291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (21))){
var inst_26182 = (state_26238[(12)]);
var inst_26179 = inst_26182;
var state_26238__$1 = (function (){var statearr_26252 = state_26238;
(statearr_26252[(11)] = inst_26179);

return statearr_26252;
})();
var statearr_26253_26292 = state_26238__$1;
(statearr_26253_26292[(2)] = null);

(statearr_26253_26292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (13))){
var inst_26205 = (state_26238[(2)]);
var inst_26206 = calc_state.call(null);
var inst_26179 = inst_26206;
var state_26238__$1 = (function (){var statearr_26254 = state_26238;
(statearr_26254[(17)] = inst_26205);

(statearr_26254[(11)] = inst_26179);

return statearr_26254;
})();
var statearr_26255_26293 = state_26238__$1;
(statearr_26255_26293[(2)] = null);

(statearr_26255_26293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (22))){
var inst_26232 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26256_26294 = state_26238__$1;
(statearr_26256_26294[(2)] = inst_26232);

(statearr_26256_26294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (6))){
var inst_26192 = (state_26238[(14)]);
var inst_26196 = cljs.core._EQ_.call(null,inst_26192,change);
var state_26238__$1 = state_26238;
var statearr_26257_26295 = state_26238__$1;
(statearr_26257_26295[(2)] = inst_26196);

(statearr_26257_26295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (25))){
var state_26238__$1 = state_26238;
var statearr_26258_26296 = state_26238__$1;
(statearr_26258_26296[(2)] = null);

(statearr_26258_26296[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (17))){
var inst_26184 = (state_26238[(18)]);
var inst_26192 = (state_26238[(14)]);
var inst_26214 = inst_26184.call(null,inst_26192);
var inst_26215 = cljs.core.not.call(null,inst_26214);
var state_26238__$1 = state_26238;
var statearr_26259_26297 = state_26238__$1;
(statearr_26259_26297[(2)] = inst_26215);

(statearr_26259_26297[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (3))){
var inst_26236 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26238__$1,inst_26236);
} else {
if((state_val_26239 === (12))){
var state_26238__$1 = state_26238;
var statearr_26260_26298 = state_26238__$1;
(statearr_26260_26298[(2)] = null);

(statearr_26260_26298[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (2))){
var inst_26179 = (state_26238[(11)]);
var inst_26182 = (state_26238[(12)]);
var inst_26182__$1 = cljs.core.__destructure_map.call(null,inst_26179);
var inst_26183 = cljs.core.get.call(null,inst_26182__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26184 = cljs.core.get.call(null,inst_26182__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26185 = cljs.core.get.call(null,inst_26182__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26238__$1 = (function (){var statearr_26261 = state_26238;
(statearr_26261[(12)] = inst_26182__$1);

(statearr_26261[(15)] = inst_26183);

(statearr_26261[(18)] = inst_26184);

return statearr_26261;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26238__$1,(4),inst_26185);
} else {
if((state_val_26239 === (23))){
var inst_26223 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
if(cljs.core.truth_(inst_26223)){
var statearr_26262_26299 = state_26238__$1;
(statearr_26262_26299[(1)] = (24));

} else {
var statearr_26263_26300 = state_26238__$1;
(statearr_26263_26300[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (19))){
var inst_26218 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26264_26301 = state_26238__$1;
(statearr_26264_26301[(2)] = inst_26218);

(statearr_26264_26301[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (11))){
var inst_26192 = (state_26238[(14)]);
var inst_26202 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26192);
var state_26238__$1 = state_26238;
var statearr_26265_26302 = state_26238__$1;
(statearr_26265_26302[(2)] = inst_26202);

(statearr_26265_26302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (9))){
var inst_26183 = (state_26238[(15)]);
var inst_26192 = (state_26238[(14)]);
var inst_26209 = (state_26238[(19)]);
var inst_26209__$1 = inst_26183.call(null,inst_26192);
var state_26238__$1 = (function (){var statearr_26266 = state_26238;
(statearr_26266[(19)] = inst_26209__$1);

return statearr_26266;
})();
if(cljs.core.truth_(inst_26209__$1)){
var statearr_26267_26303 = state_26238__$1;
(statearr_26267_26303[(1)] = (14));

} else {
var statearr_26268_26304 = state_26238__$1;
(statearr_26268_26304[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (5))){
var inst_26193 = (state_26238[(13)]);
var state_26238__$1 = state_26238;
var statearr_26269_26305 = state_26238__$1;
(statearr_26269_26305[(2)] = inst_26193);

(statearr_26269_26305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (14))){
var inst_26209 = (state_26238[(19)]);
var state_26238__$1 = state_26238;
var statearr_26270_26306 = state_26238__$1;
(statearr_26270_26306[(2)] = inst_26209);

(statearr_26270_26306[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (26))){
var inst_26228 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26271_26307 = state_26238__$1;
(statearr_26271_26307[(2)] = inst_26228);

(statearr_26271_26307[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (16))){
var inst_26220 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
if(cljs.core.truth_(inst_26220)){
var statearr_26272_26308 = state_26238__$1;
(statearr_26272_26308[(1)] = (20));

} else {
var statearr_26273_26309 = state_26238__$1;
(statearr_26273_26309[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (10))){
var inst_26234 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26274_26310 = state_26238__$1;
(statearr_26274_26310[(2)] = inst_26234);

(statearr_26274_26310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (18))){
var inst_26212 = (state_26238[(16)]);
var state_26238__$1 = state_26238;
var statearr_26275_26311 = state_26238__$1;
(statearr_26275_26311[(2)] = inst_26212);

(statearr_26275_26311[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (8))){
var inst_26191 = (state_26238[(7)]);
var inst_26200 = (inst_26191 == null);
var state_26238__$1 = state_26238;
if(cljs.core.truth_(inst_26200)){
var statearr_26276_26312 = state_26238__$1;
(statearr_26276_26312[(1)] = (11));

} else {
var statearr_26277_26313 = state_26238__$1;
(statearr_26277_26313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__25172__auto__ = null;
var cljs$core$async$mix_$_state_machine__25172__auto____0 = (function (){
var statearr_26278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26278[(0)] = cljs$core$async$mix_$_state_machine__25172__auto__);

(statearr_26278[(1)] = (1));

return statearr_26278;
});
var cljs$core$async$mix_$_state_machine__25172__auto____1 = (function (state_26238){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26279){var ex__25175__auto__ = e26279;
var statearr_26280_26314 = state_26238;
(statearr_26280_26314[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26238[(4)]))){
var statearr_26281_26315 = state_26238;
(statearr_26281_26315[(1)] = cljs.core.first.call(null,(state_26238[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26316 = state_26238;
state_26238 = G__26316;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25172__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25172__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25172__auto____0;
cljs$core$async$mix_$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25172__auto____1;
return cljs$core$async$mix_$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26282 = f__25246__auto__.call(null);
(statearr_26282[(6)] = c__25245__auto___26283);

return statearr_26282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_26319 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_26319.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26320 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_26320.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26321 = (function() {
var G__26322 = null;
var G__26322__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__26322__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__26322 = function(p,v){
switch(arguments.length){
case 1:
return G__26322__1.call(this,p);
case 2:
return G__26322__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26322.cljs$core$IFn$_invoke$arity$1 = G__26322__1;
G__26322.cljs$core$IFn$_invoke$arity$2 = G__26322__2;
return G__26322;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26318 = arguments.length;
switch (G__26318) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26321.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26321.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26326 = arguments.length;
switch (G__26326) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__26324_SHARP_){
if(cljs.core.truth_(p1__26324_SHARP_.call(null,topic))){
return p1__26324_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26324_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26327 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26328){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26328 = meta26328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26329,meta26328__$1){
var self__ = this;
var _26329__$1 = this;
return (new cljs.core.async.t_cljs$core$async26327(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26328__$1));
}));

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26329){
var self__ = this;
var _26329__$1 = this;
return self__.meta26328;
}));

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26327.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26328","meta26328",-883410804,null)], null);
}));

(cljs.core.async.t_cljs$core$async26327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26327");

(cljs.core.async.t_cljs$core$async26327.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26327.
 */
cljs.core.async.__GT_t_cljs$core$async26327 = (function cljs$core$async$__GT_t_cljs$core$async26327(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26328){
return (new cljs.core.async.t_cljs$core$async26327(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26328));
});

}

return (new cljs.core.async.t_cljs$core$async26327(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25245__auto___26448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26401){
var state_val_26402 = (state_26401[(1)]);
if((state_val_26402 === (7))){
var inst_26397 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26403_26449 = state_26401__$1;
(statearr_26403_26449[(2)] = inst_26397);

(statearr_26403_26449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (20))){
var state_26401__$1 = state_26401;
var statearr_26404_26450 = state_26401__$1;
(statearr_26404_26450[(2)] = null);

(statearr_26404_26450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (1))){
var state_26401__$1 = state_26401;
var statearr_26405_26451 = state_26401__$1;
(statearr_26405_26451[(2)] = null);

(statearr_26405_26451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (24))){
var inst_26380 = (state_26401[(7)]);
var inst_26389 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26380);
var state_26401__$1 = state_26401;
var statearr_26406_26452 = state_26401__$1;
(statearr_26406_26452[(2)] = inst_26389);

(statearr_26406_26452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (4))){
var inst_26332 = (state_26401[(8)]);
var inst_26332__$1 = (state_26401[(2)]);
var inst_26333 = (inst_26332__$1 == null);
var state_26401__$1 = (function (){var statearr_26407 = state_26401;
(statearr_26407[(8)] = inst_26332__$1);

return statearr_26407;
})();
if(cljs.core.truth_(inst_26333)){
var statearr_26408_26453 = state_26401__$1;
(statearr_26408_26453[(1)] = (5));

} else {
var statearr_26409_26454 = state_26401__$1;
(statearr_26409_26454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (15))){
var inst_26374 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26410_26455 = state_26401__$1;
(statearr_26410_26455[(2)] = inst_26374);

(statearr_26410_26455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (21))){
var inst_26394 = (state_26401[(2)]);
var state_26401__$1 = (function (){var statearr_26411 = state_26401;
(statearr_26411[(9)] = inst_26394);

return statearr_26411;
})();
var statearr_26412_26456 = state_26401__$1;
(statearr_26412_26456[(2)] = null);

(statearr_26412_26456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (13))){
var inst_26356 = (state_26401[(10)]);
var inst_26358 = cljs.core.chunked_seq_QMARK_.call(null,inst_26356);
var state_26401__$1 = state_26401;
if(inst_26358){
var statearr_26413_26457 = state_26401__$1;
(statearr_26413_26457[(1)] = (16));

} else {
var statearr_26414_26458 = state_26401__$1;
(statearr_26414_26458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (22))){
var inst_26386 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
if(cljs.core.truth_(inst_26386)){
var statearr_26415_26459 = state_26401__$1;
(statearr_26415_26459[(1)] = (23));

} else {
var statearr_26416_26460 = state_26401__$1;
(statearr_26416_26460[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (6))){
var inst_26332 = (state_26401[(8)]);
var inst_26380 = (state_26401[(7)]);
var inst_26382 = (state_26401[(11)]);
var inst_26380__$1 = topic_fn.call(null,inst_26332);
var inst_26381 = cljs.core.deref.call(null,mults);
var inst_26382__$1 = cljs.core.get.call(null,inst_26381,inst_26380__$1);
var state_26401__$1 = (function (){var statearr_26417 = state_26401;
(statearr_26417[(7)] = inst_26380__$1);

(statearr_26417[(11)] = inst_26382__$1);

return statearr_26417;
})();
if(cljs.core.truth_(inst_26382__$1)){
var statearr_26418_26461 = state_26401__$1;
(statearr_26418_26461[(1)] = (19));

} else {
var statearr_26419_26462 = state_26401__$1;
(statearr_26419_26462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (25))){
var inst_26391 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26420_26463 = state_26401__$1;
(statearr_26420_26463[(2)] = inst_26391);

(statearr_26420_26463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (17))){
var inst_26356 = (state_26401[(10)]);
var inst_26365 = cljs.core.first.call(null,inst_26356);
var inst_26366 = cljs.core.async.muxch_STAR_.call(null,inst_26365);
var inst_26367 = cljs.core.async.close_BANG_.call(null,inst_26366);
var inst_26368 = cljs.core.next.call(null,inst_26356);
var inst_26342 = inst_26368;
var inst_26343 = null;
var inst_26344 = (0);
var inst_26345 = (0);
var state_26401__$1 = (function (){var statearr_26421 = state_26401;
(statearr_26421[(12)] = inst_26367);

(statearr_26421[(13)] = inst_26342);

(statearr_26421[(14)] = inst_26343);

(statearr_26421[(15)] = inst_26344);

(statearr_26421[(16)] = inst_26345);

return statearr_26421;
})();
var statearr_26422_26464 = state_26401__$1;
(statearr_26422_26464[(2)] = null);

(statearr_26422_26464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (3))){
var inst_26399 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26401__$1,inst_26399);
} else {
if((state_val_26402 === (12))){
var inst_26376 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26423_26465 = state_26401__$1;
(statearr_26423_26465[(2)] = inst_26376);

(statearr_26423_26465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (2))){
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26401__$1,(4),ch);
} else {
if((state_val_26402 === (23))){
var state_26401__$1 = state_26401;
var statearr_26424_26466 = state_26401__$1;
(statearr_26424_26466[(2)] = null);

(statearr_26424_26466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (19))){
var inst_26382 = (state_26401[(11)]);
var inst_26332 = (state_26401[(8)]);
var inst_26384 = cljs.core.async.muxch_STAR_.call(null,inst_26382);
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26401__$1,(22),inst_26384,inst_26332);
} else {
if((state_val_26402 === (11))){
var inst_26342 = (state_26401[(13)]);
var inst_26356 = (state_26401[(10)]);
var inst_26356__$1 = cljs.core.seq.call(null,inst_26342);
var state_26401__$1 = (function (){var statearr_26425 = state_26401;
(statearr_26425[(10)] = inst_26356__$1);

return statearr_26425;
})();
if(inst_26356__$1){
var statearr_26426_26467 = state_26401__$1;
(statearr_26426_26467[(1)] = (13));

} else {
var statearr_26427_26468 = state_26401__$1;
(statearr_26427_26468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (9))){
var inst_26378 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26428_26469 = state_26401__$1;
(statearr_26428_26469[(2)] = inst_26378);

(statearr_26428_26469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (5))){
var inst_26339 = cljs.core.deref.call(null,mults);
var inst_26340 = cljs.core.vals.call(null,inst_26339);
var inst_26341 = cljs.core.seq.call(null,inst_26340);
var inst_26342 = inst_26341;
var inst_26343 = null;
var inst_26344 = (0);
var inst_26345 = (0);
var state_26401__$1 = (function (){var statearr_26429 = state_26401;
(statearr_26429[(13)] = inst_26342);

(statearr_26429[(14)] = inst_26343);

(statearr_26429[(15)] = inst_26344);

(statearr_26429[(16)] = inst_26345);

return statearr_26429;
})();
var statearr_26430_26470 = state_26401__$1;
(statearr_26430_26470[(2)] = null);

(statearr_26430_26470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (14))){
var state_26401__$1 = state_26401;
var statearr_26434_26471 = state_26401__$1;
(statearr_26434_26471[(2)] = null);

(statearr_26434_26471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (16))){
var inst_26356 = (state_26401[(10)]);
var inst_26360 = cljs.core.chunk_first.call(null,inst_26356);
var inst_26361 = cljs.core.chunk_rest.call(null,inst_26356);
var inst_26362 = cljs.core.count.call(null,inst_26360);
var inst_26342 = inst_26361;
var inst_26343 = inst_26360;
var inst_26344 = inst_26362;
var inst_26345 = (0);
var state_26401__$1 = (function (){var statearr_26435 = state_26401;
(statearr_26435[(13)] = inst_26342);

(statearr_26435[(14)] = inst_26343);

(statearr_26435[(15)] = inst_26344);

(statearr_26435[(16)] = inst_26345);

return statearr_26435;
})();
var statearr_26436_26472 = state_26401__$1;
(statearr_26436_26472[(2)] = null);

(statearr_26436_26472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (10))){
var inst_26343 = (state_26401[(14)]);
var inst_26345 = (state_26401[(16)]);
var inst_26342 = (state_26401[(13)]);
var inst_26344 = (state_26401[(15)]);
var inst_26350 = cljs.core._nth.call(null,inst_26343,inst_26345);
var inst_26351 = cljs.core.async.muxch_STAR_.call(null,inst_26350);
var inst_26352 = cljs.core.async.close_BANG_.call(null,inst_26351);
var inst_26353 = (inst_26345 + (1));
var tmp26431 = inst_26342;
var tmp26432 = inst_26344;
var tmp26433 = inst_26343;
var inst_26342__$1 = tmp26431;
var inst_26343__$1 = tmp26433;
var inst_26344__$1 = tmp26432;
var inst_26345__$1 = inst_26353;
var state_26401__$1 = (function (){var statearr_26437 = state_26401;
(statearr_26437[(17)] = inst_26352);

(statearr_26437[(13)] = inst_26342__$1);

(statearr_26437[(14)] = inst_26343__$1);

(statearr_26437[(15)] = inst_26344__$1);

(statearr_26437[(16)] = inst_26345__$1);

return statearr_26437;
})();
var statearr_26438_26473 = state_26401__$1;
(statearr_26438_26473[(2)] = null);

(statearr_26438_26473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (18))){
var inst_26371 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26439_26474 = state_26401__$1;
(statearr_26439_26474[(2)] = inst_26371);

(statearr_26439_26474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (8))){
var inst_26345 = (state_26401[(16)]);
var inst_26344 = (state_26401[(15)]);
var inst_26347 = (inst_26345 < inst_26344);
var inst_26348 = inst_26347;
var state_26401__$1 = state_26401;
if(cljs.core.truth_(inst_26348)){
var statearr_26440_26475 = state_26401__$1;
(statearr_26440_26475[(1)] = (10));

} else {
var statearr_26441_26476 = state_26401__$1;
(statearr_26441_26476[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_26442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26442[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_26442[(1)] = (1));

return statearr_26442;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_26401){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26443){var ex__25175__auto__ = e26443;
var statearr_26444_26477 = state_26401;
(statearr_26444_26477[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26401[(4)]))){
var statearr_26445_26478 = state_26401;
(statearr_26445_26478[(1)] = cljs.core.first.call(null,(state_26401[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26479 = state_26401;
state_26401 = G__26479;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_26401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_26401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26446 = f__25246__auto__.call(null);
(statearr_26446[(6)] = c__25245__auto___26448);

return statearr_26446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26481 = arguments.length;
switch (G__26481) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26484 = arguments.length;
switch (G__26484) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26487 = arguments.length;
switch (G__26487) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__25245__auto___26565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26530){
var state_val_26531 = (state_26530[(1)]);
if((state_val_26531 === (7))){
var state_26530__$1 = state_26530;
var statearr_26532_26566 = state_26530__$1;
(statearr_26532_26566[(2)] = null);

(statearr_26532_26566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (1))){
var state_26530__$1 = state_26530;
var statearr_26533_26567 = state_26530__$1;
(statearr_26533_26567[(2)] = null);

(statearr_26533_26567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (4))){
var inst_26491 = (state_26530[(7)]);
var inst_26490 = (state_26530[(8)]);
var inst_26493 = (inst_26491 < inst_26490);
var state_26530__$1 = state_26530;
if(cljs.core.truth_(inst_26493)){
var statearr_26534_26568 = state_26530__$1;
(statearr_26534_26568[(1)] = (6));

} else {
var statearr_26535_26569 = state_26530__$1;
(statearr_26535_26569[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (15))){
var inst_26516 = (state_26530[(9)]);
var inst_26521 = cljs.core.apply.call(null,f,inst_26516);
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26530__$1,(17),out,inst_26521);
} else {
if((state_val_26531 === (13))){
var inst_26516 = (state_26530[(9)]);
var inst_26516__$1 = (state_26530[(2)]);
var inst_26517 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26516__$1);
var state_26530__$1 = (function (){var statearr_26536 = state_26530;
(statearr_26536[(9)] = inst_26516__$1);

return statearr_26536;
})();
if(cljs.core.truth_(inst_26517)){
var statearr_26537_26570 = state_26530__$1;
(statearr_26537_26570[(1)] = (14));

} else {
var statearr_26538_26571 = state_26530__$1;
(statearr_26538_26571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (6))){
var state_26530__$1 = state_26530;
var statearr_26539_26572 = state_26530__$1;
(statearr_26539_26572[(2)] = null);

(statearr_26539_26572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (17))){
var inst_26523 = (state_26530[(2)]);
var state_26530__$1 = (function (){var statearr_26541 = state_26530;
(statearr_26541[(10)] = inst_26523);

return statearr_26541;
})();
var statearr_26542_26573 = state_26530__$1;
(statearr_26542_26573[(2)] = null);

(statearr_26542_26573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (3))){
var inst_26528 = (state_26530[(2)]);
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26530__$1,inst_26528);
} else {
if((state_val_26531 === (12))){
var _ = (function (){var statearr_26543 = state_26530;
(statearr_26543[(4)] = cljs.core.rest.call(null,(state_26530[(4)])));

return statearr_26543;
})();
var state_26530__$1 = state_26530;
var ex26540 = (state_26530__$1[(2)]);
var statearr_26544_26574 = state_26530__$1;
(statearr_26544_26574[(5)] = ex26540);


if((ex26540 instanceof Object)){
var statearr_26545_26575 = state_26530__$1;
(statearr_26545_26575[(1)] = (11));

(statearr_26545_26575[(5)] = null);

} else {
throw ex26540;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (2))){
var inst_26489 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26490 = cnt;
var inst_26491 = (0);
var state_26530__$1 = (function (){var statearr_26546 = state_26530;
(statearr_26546[(11)] = inst_26489);

(statearr_26546[(8)] = inst_26490);

(statearr_26546[(7)] = inst_26491);

return statearr_26546;
})();
var statearr_26547_26576 = state_26530__$1;
(statearr_26547_26576[(2)] = null);

(statearr_26547_26576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (11))){
var inst_26495 = (state_26530[(2)]);
var inst_26496 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26530__$1 = (function (){var statearr_26548 = state_26530;
(statearr_26548[(12)] = inst_26495);

return statearr_26548;
})();
var statearr_26549_26577 = state_26530__$1;
(statearr_26549_26577[(2)] = inst_26496);

(statearr_26549_26577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (9))){
var inst_26491 = (state_26530[(7)]);
var _ = (function (){var statearr_26550 = state_26530;
(statearr_26550[(4)] = cljs.core.cons.call(null,(12),(state_26530[(4)])));

return statearr_26550;
})();
var inst_26502 = chs__$1.call(null,inst_26491);
var inst_26503 = done.call(null,inst_26491);
var inst_26504 = cljs.core.async.take_BANG_.call(null,inst_26502,inst_26503);
var ___$1 = (function (){var statearr_26551 = state_26530;
(statearr_26551[(4)] = cljs.core.rest.call(null,(state_26530[(4)])));

return statearr_26551;
})();
var state_26530__$1 = state_26530;
var statearr_26552_26578 = state_26530__$1;
(statearr_26552_26578[(2)] = inst_26504);

(statearr_26552_26578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (5))){
var inst_26514 = (state_26530[(2)]);
var state_26530__$1 = (function (){var statearr_26553 = state_26530;
(statearr_26553[(13)] = inst_26514);

return statearr_26553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(13),dchan);
} else {
if((state_val_26531 === (14))){
var inst_26519 = cljs.core.async.close_BANG_.call(null,out);
var state_26530__$1 = state_26530;
var statearr_26554_26579 = state_26530__$1;
(statearr_26554_26579[(2)] = inst_26519);

(statearr_26554_26579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (16))){
var inst_26526 = (state_26530[(2)]);
var state_26530__$1 = state_26530;
var statearr_26555_26580 = state_26530__$1;
(statearr_26555_26580[(2)] = inst_26526);

(statearr_26555_26580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (10))){
var inst_26491 = (state_26530[(7)]);
var inst_26507 = (state_26530[(2)]);
var inst_26508 = (inst_26491 + (1));
var inst_26491__$1 = inst_26508;
var state_26530__$1 = (function (){var statearr_26556 = state_26530;
(statearr_26556[(14)] = inst_26507);

(statearr_26556[(7)] = inst_26491__$1);

return statearr_26556;
})();
var statearr_26557_26581 = state_26530__$1;
(statearr_26557_26581[(2)] = null);

(statearr_26557_26581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (8))){
var inst_26512 = (state_26530[(2)]);
var state_26530__$1 = state_26530;
var statearr_26558_26582 = state_26530__$1;
(statearr_26558_26582[(2)] = inst_26512);

(statearr_26558_26582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_26559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26559[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_26559[(1)] = (1));

return statearr_26559;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_26530){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26560){var ex__25175__auto__ = e26560;
var statearr_26561_26583 = state_26530;
(statearr_26561_26583[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26530[(4)]))){
var statearr_26562_26584 = state_26530;
(statearr_26562_26584[(1)] = cljs.core.first.call(null,(state_26530[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26585 = state_26530;
state_26530 = G__26585;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_26530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_26530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26563 = f__25246__auto__.call(null);
(statearr_26563[(6)] = c__25245__auto___26565);

return statearr_26563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26588 = arguments.length;
switch (G__26588) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25245__auto___26643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26620){
var state_val_26621 = (state_26620[(1)]);
if((state_val_26621 === (7))){
var inst_26599 = (state_26620[(7)]);
var inst_26600 = (state_26620[(8)]);
var inst_26599__$1 = (state_26620[(2)]);
var inst_26600__$1 = cljs.core.nth.call(null,inst_26599__$1,(0),null);
var inst_26601 = cljs.core.nth.call(null,inst_26599__$1,(1),null);
var inst_26602 = (inst_26600__$1 == null);
var state_26620__$1 = (function (){var statearr_26622 = state_26620;
(statearr_26622[(7)] = inst_26599__$1);

(statearr_26622[(8)] = inst_26600__$1);

(statearr_26622[(9)] = inst_26601);

return statearr_26622;
})();
if(cljs.core.truth_(inst_26602)){
var statearr_26623_26644 = state_26620__$1;
(statearr_26623_26644[(1)] = (8));

} else {
var statearr_26624_26645 = state_26620__$1;
(statearr_26624_26645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (1))){
var inst_26589 = cljs.core.vec.call(null,chs);
var inst_26590 = inst_26589;
var state_26620__$1 = (function (){var statearr_26625 = state_26620;
(statearr_26625[(10)] = inst_26590);

return statearr_26625;
})();
var statearr_26626_26646 = state_26620__$1;
(statearr_26626_26646[(2)] = null);

(statearr_26626_26646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (4))){
var inst_26590 = (state_26620[(10)]);
var state_26620__$1 = state_26620;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26620__$1,(7),inst_26590);
} else {
if((state_val_26621 === (6))){
var inst_26616 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26627_26647 = state_26620__$1;
(statearr_26627_26647[(2)] = inst_26616);

(statearr_26627_26647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (3))){
var inst_26618 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26620__$1,inst_26618);
} else {
if((state_val_26621 === (2))){
var inst_26590 = (state_26620[(10)]);
var inst_26592 = cljs.core.count.call(null,inst_26590);
var inst_26593 = (inst_26592 > (0));
var state_26620__$1 = state_26620;
if(cljs.core.truth_(inst_26593)){
var statearr_26629_26648 = state_26620__$1;
(statearr_26629_26648[(1)] = (4));

} else {
var statearr_26630_26649 = state_26620__$1;
(statearr_26630_26649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (11))){
var inst_26590 = (state_26620[(10)]);
var inst_26609 = (state_26620[(2)]);
var tmp26628 = inst_26590;
var inst_26590__$1 = tmp26628;
var state_26620__$1 = (function (){var statearr_26631 = state_26620;
(statearr_26631[(11)] = inst_26609);

(statearr_26631[(10)] = inst_26590__$1);

return statearr_26631;
})();
var statearr_26632_26650 = state_26620__$1;
(statearr_26632_26650[(2)] = null);

(statearr_26632_26650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (9))){
var inst_26600 = (state_26620[(8)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26620__$1,(11),out,inst_26600);
} else {
if((state_val_26621 === (5))){
var inst_26614 = cljs.core.async.close_BANG_.call(null,out);
var state_26620__$1 = state_26620;
var statearr_26633_26651 = state_26620__$1;
(statearr_26633_26651[(2)] = inst_26614);

(statearr_26633_26651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (10))){
var inst_26612 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26634_26652 = state_26620__$1;
(statearr_26634_26652[(2)] = inst_26612);

(statearr_26634_26652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (8))){
var inst_26590 = (state_26620[(10)]);
var inst_26599 = (state_26620[(7)]);
var inst_26600 = (state_26620[(8)]);
var inst_26601 = (state_26620[(9)]);
var inst_26604 = (function (){var cs = inst_26590;
var vec__26595 = inst_26599;
var v = inst_26600;
var c = inst_26601;
return (function (p1__26586_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26586_SHARP_);
});
})();
var inst_26605 = cljs.core.filterv.call(null,inst_26604,inst_26590);
var inst_26590__$1 = inst_26605;
var state_26620__$1 = (function (){var statearr_26635 = state_26620;
(statearr_26635[(10)] = inst_26590__$1);

return statearr_26635;
})();
var statearr_26636_26653 = state_26620__$1;
(statearr_26636_26653[(2)] = null);

(statearr_26636_26653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_26637 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26637[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_26637[(1)] = (1));

return statearr_26637;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_26620){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26638){var ex__25175__auto__ = e26638;
var statearr_26639_26654 = state_26620;
(statearr_26639_26654[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26620[(4)]))){
var statearr_26640_26655 = state_26620;
(statearr_26640_26655[(1)] = cljs.core.first.call(null,(state_26620[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26656 = state_26620;
state_26620 = G__26656;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_26620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_26620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26641 = f__25246__auto__.call(null);
(statearr_26641[(6)] = c__25245__auto___26643);

return statearr_26641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26658 = arguments.length;
switch (G__26658) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25245__auto___26704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26682){
var state_val_26683 = (state_26682[(1)]);
if((state_val_26683 === (7))){
var inst_26664 = (state_26682[(7)]);
var inst_26664__$1 = (state_26682[(2)]);
var inst_26665 = (inst_26664__$1 == null);
var inst_26666 = cljs.core.not.call(null,inst_26665);
var state_26682__$1 = (function (){var statearr_26684 = state_26682;
(statearr_26684[(7)] = inst_26664__$1);

return statearr_26684;
})();
if(inst_26666){
var statearr_26685_26705 = state_26682__$1;
(statearr_26685_26705[(1)] = (8));

} else {
var statearr_26686_26706 = state_26682__$1;
(statearr_26686_26706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (1))){
var inst_26659 = (0);
var state_26682__$1 = (function (){var statearr_26687 = state_26682;
(statearr_26687[(8)] = inst_26659);

return statearr_26687;
})();
var statearr_26688_26707 = state_26682__$1;
(statearr_26688_26707[(2)] = null);

(statearr_26688_26707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (4))){
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26682__$1,(7),ch);
} else {
if((state_val_26683 === (6))){
var inst_26677 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26689_26708 = state_26682__$1;
(statearr_26689_26708[(2)] = inst_26677);

(statearr_26689_26708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (3))){
var inst_26679 = (state_26682[(2)]);
var inst_26680 = cljs.core.async.close_BANG_.call(null,out);
var state_26682__$1 = (function (){var statearr_26690 = state_26682;
(statearr_26690[(9)] = inst_26679);

return statearr_26690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26682__$1,inst_26680);
} else {
if((state_val_26683 === (2))){
var inst_26659 = (state_26682[(8)]);
var inst_26661 = (inst_26659 < n);
var state_26682__$1 = state_26682;
if(cljs.core.truth_(inst_26661)){
var statearr_26691_26709 = state_26682__$1;
(statearr_26691_26709[(1)] = (4));

} else {
var statearr_26692_26710 = state_26682__$1;
(statearr_26692_26710[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (11))){
var inst_26659 = (state_26682[(8)]);
var inst_26669 = (state_26682[(2)]);
var inst_26670 = (inst_26659 + (1));
var inst_26659__$1 = inst_26670;
var state_26682__$1 = (function (){var statearr_26693 = state_26682;
(statearr_26693[(10)] = inst_26669);

(statearr_26693[(8)] = inst_26659__$1);

return statearr_26693;
})();
var statearr_26694_26711 = state_26682__$1;
(statearr_26694_26711[(2)] = null);

(statearr_26694_26711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (9))){
var state_26682__$1 = state_26682;
var statearr_26695_26712 = state_26682__$1;
(statearr_26695_26712[(2)] = null);

(statearr_26695_26712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (5))){
var state_26682__$1 = state_26682;
var statearr_26696_26713 = state_26682__$1;
(statearr_26696_26713[(2)] = null);

(statearr_26696_26713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (10))){
var inst_26674 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26697_26714 = state_26682__$1;
(statearr_26697_26714[(2)] = inst_26674);

(statearr_26697_26714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (8))){
var inst_26664 = (state_26682[(7)]);
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26682__$1,(11),out,inst_26664);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_26698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26698[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_26698[(1)] = (1));

return statearr_26698;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_26682){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26699){var ex__25175__auto__ = e26699;
var statearr_26700_26715 = state_26682;
(statearr_26700_26715[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26682[(4)]))){
var statearr_26701_26716 = state_26682;
(statearr_26701_26716[(1)] = cljs.core.first.call(null,(state_26682[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26717 = state_26682;
state_26682 = G__26717;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_26682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_26682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26702 = f__25246__auto__.call(null);
(statearr_26702[(6)] = c__25245__auto___26704);

return statearr_26702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26719 = (function (f,ch,meta26720){
this.f = f;
this.ch = ch;
this.meta26720 = meta26720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26721,meta26720__$1){
var self__ = this;
var _26721__$1 = this;
return (new cljs.core.async.t_cljs$core$async26719(self__.f,self__.ch,meta26720__$1));
}));

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26721){
var self__ = this;
var _26721__$1 = this;
return self__.meta26720;
}));

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26722 = (function (f,ch,meta26720,_,fn1,meta26723){
this.f = f;
this.ch = ch;
this.meta26720 = meta26720;
this._ = _;
this.fn1 = fn1;
this.meta26723 = meta26723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26724,meta26723__$1){
var self__ = this;
var _26724__$1 = this;
return (new cljs.core.async.t_cljs$core$async26722(self__.f,self__.ch,self__.meta26720,self__._,self__.fn1,meta26723__$1));
}));

(cljs.core.async.t_cljs$core$async26722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26724){
var self__ = this;
var _26724__$1 = this;
return self__.meta26723;
}));

(cljs.core.async.t_cljs$core$async26722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26718_SHARP_){
return f1.call(null,(((p1__26718_SHARP_ == null))?null:self__.f.call(null,p1__26718_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26720","meta26720",1730157262,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26719","cljs.core.async/t_cljs$core$async26719",-1482209795,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26723","meta26723",-292828240,null)], null);
}));

(cljs.core.async.t_cljs$core$async26722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26722");

(cljs.core.async.t_cljs$core$async26722.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26722.
 */
cljs.core.async.__GT_t_cljs$core$async26722 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26722(f__$1,ch__$1,meta26720__$1,___$2,fn1__$1,meta26723){
return (new cljs.core.async.t_cljs$core$async26722(f__$1,ch__$1,meta26720__$1,___$2,fn1__$1,meta26723));
});

}

return (new cljs.core.async.t_cljs$core$async26722(self__.f,self__.ch,self__.meta26720,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26720","meta26720",1730157262,null)], null);
}));

(cljs.core.async.t_cljs$core$async26719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26719");

(cljs.core.async.t_cljs$core$async26719.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26719.
 */
cljs.core.async.__GT_t_cljs$core$async26719 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26719(f__$1,ch__$1,meta26720){
return (new cljs.core.async.t_cljs$core$async26719(f__$1,ch__$1,meta26720));
});

}

return (new cljs.core.async.t_cljs$core$async26719(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26725 = (function (f,ch,meta26726){
this.f = f;
this.ch = ch;
this.meta26726 = meta26726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26727,meta26726__$1){
var self__ = this;
var _26727__$1 = this;
return (new cljs.core.async.t_cljs$core$async26725(self__.f,self__.ch,meta26726__$1));
}));

(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26727){
var self__ = this;
var _26727__$1 = this;
return self__.meta26726;
}));

(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26726","meta26726",1098951054,null)], null);
}));

(cljs.core.async.t_cljs$core$async26725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26725");

(cljs.core.async.t_cljs$core$async26725.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26725.
 */
cljs.core.async.__GT_t_cljs$core$async26725 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26725(f__$1,ch__$1,meta26726){
return (new cljs.core.async.t_cljs$core$async26725(f__$1,ch__$1,meta26726));
});

}

return (new cljs.core.async.t_cljs$core$async26725(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26728 = (function (p,ch,meta26729){
this.p = p;
this.ch = ch;
this.meta26729 = meta26729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26730,meta26729__$1){
var self__ = this;
var _26730__$1 = this;
return (new cljs.core.async.t_cljs$core$async26728(self__.p,self__.ch,meta26729__$1));
}));

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26730){
var self__ = this;
var _26730__$1 = this;
return self__.meta26729;
}));

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26729","meta26729",-1688434237,null)], null);
}));

(cljs.core.async.t_cljs$core$async26728.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26728");

(cljs.core.async.t_cljs$core$async26728.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async26728");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26728.
 */
cljs.core.async.__GT_t_cljs$core$async26728 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26728(p__$1,ch__$1,meta26729){
return (new cljs.core.async.t_cljs$core$async26728(p__$1,ch__$1,meta26729));
});

}

return (new cljs.core.async.t_cljs$core$async26728(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26732 = arguments.length;
switch (G__26732) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25245__auto___26773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26753){
var state_val_26754 = (state_26753[(1)]);
if((state_val_26754 === (7))){
var inst_26749 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26755_26774 = state_26753__$1;
(statearr_26755_26774[(2)] = inst_26749);

(statearr_26755_26774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (1))){
var state_26753__$1 = state_26753;
var statearr_26756_26775 = state_26753__$1;
(statearr_26756_26775[(2)] = null);

(statearr_26756_26775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (4))){
var inst_26735 = (state_26753[(7)]);
var inst_26735__$1 = (state_26753[(2)]);
var inst_26736 = (inst_26735__$1 == null);
var state_26753__$1 = (function (){var statearr_26757 = state_26753;
(statearr_26757[(7)] = inst_26735__$1);

return statearr_26757;
})();
if(cljs.core.truth_(inst_26736)){
var statearr_26758_26776 = state_26753__$1;
(statearr_26758_26776[(1)] = (5));

} else {
var statearr_26759_26777 = state_26753__$1;
(statearr_26759_26777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (6))){
var inst_26735 = (state_26753[(7)]);
var inst_26740 = p.call(null,inst_26735);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26740)){
var statearr_26760_26778 = state_26753__$1;
(statearr_26760_26778[(1)] = (8));

} else {
var statearr_26761_26779 = state_26753__$1;
(statearr_26761_26779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (3))){
var inst_26751 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26753__$1,inst_26751);
} else {
if((state_val_26754 === (2))){
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(4),ch);
} else {
if((state_val_26754 === (11))){
var inst_26743 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26762_26780 = state_26753__$1;
(statearr_26762_26780[(2)] = inst_26743);

(statearr_26762_26780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (9))){
var state_26753__$1 = state_26753;
var statearr_26763_26781 = state_26753__$1;
(statearr_26763_26781[(2)] = null);

(statearr_26763_26781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (5))){
var inst_26738 = cljs.core.async.close_BANG_.call(null,out);
var state_26753__$1 = state_26753;
var statearr_26764_26782 = state_26753__$1;
(statearr_26764_26782[(2)] = inst_26738);

(statearr_26764_26782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (10))){
var inst_26746 = (state_26753[(2)]);
var state_26753__$1 = (function (){var statearr_26765 = state_26753;
(statearr_26765[(8)] = inst_26746);

return statearr_26765;
})();
var statearr_26766_26783 = state_26753__$1;
(statearr_26766_26783[(2)] = null);

(statearr_26766_26783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (8))){
var inst_26735 = (state_26753[(7)]);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26753__$1,(11),out,inst_26735);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_26767 = [null,null,null,null,null,null,null,null,null];
(statearr_26767[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_26767[(1)] = (1));

return statearr_26767;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_26753){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26768){var ex__25175__auto__ = e26768;
var statearr_26769_26784 = state_26753;
(statearr_26769_26784[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26753[(4)]))){
var statearr_26770_26785 = state_26753;
(statearr_26770_26785[(1)] = cljs.core.first.call(null,(state_26753[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26786 = state_26753;
state_26753 = G__26786;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_26753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_26753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26771 = f__25246__auto__.call(null);
(statearr_26771[(6)] = c__25245__auto___26773);

return statearr_26771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26788 = arguments.length;
switch (G__26788) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25245__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26851){
var state_val_26852 = (state_26851[(1)]);
if((state_val_26852 === (7))){
var inst_26847 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26853_26892 = state_26851__$1;
(statearr_26853_26892[(2)] = inst_26847);

(statearr_26853_26892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (20))){
var inst_26817 = (state_26851[(7)]);
var inst_26828 = (state_26851[(2)]);
var inst_26829 = cljs.core.next.call(null,inst_26817);
var inst_26803 = inst_26829;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26851__$1 = (function (){var statearr_26854 = state_26851;
(statearr_26854[(8)] = inst_26828);

(statearr_26854[(9)] = inst_26803);

(statearr_26854[(10)] = inst_26804);

(statearr_26854[(11)] = inst_26805);

(statearr_26854[(12)] = inst_26806);

return statearr_26854;
})();
var statearr_26855_26893 = state_26851__$1;
(statearr_26855_26893[(2)] = null);

(statearr_26855_26893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (1))){
var state_26851__$1 = state_26851;
var statearr_26856_26894 = state_26851__$1;
(statearr_26856_26894[(2)] = null);

(statearr_26856_26894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (4))){
var inst_26792 = (state_26851[(13)]);
var inst_26792__$1 = (state_26851[(2)]);
var inst_26793 = (inst_26792__$1 == null);
var state_26851__$1 = (function (){var statearr_26857 = state_26851;
(statearr_26857[(13)] = inst_26792__$1);

return statearr_26857;
})();
if(cljs.core.truth_(inst_26793)){
var statearr_26858_26895 = state_26851__$1;
(statearr_26858_26895[(1)] = (5));

} else {
var statearr_26859_26896 = state_26851__$1;
(statearr_26859_26896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (15))){
var state_26851__$1 = state_26851;
var statearr_26863_26897 = state_26851__$1;
(statearr_26863_26897[(2)] = null);

(statearr_26863_26897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (21))){
var state_26851__$1 = state_26851;
var statearr_26864_26898 = state_26851__$1;
(statearr_26864_26898[(2)] = null);

(statearr_26864_26898[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (13))){
var inst_26806 = (state_26851[(12)]);
var inst_26803 = (state_26851[(9)]);
var inst_26804 = (state_26851[(10)]);
var inst_26805 = (state_26851[(11)]);
var inst_26813 = (state_26851[(2)]);
var inst_26814 = (inst_26806 + (1));
var tmp26860 = inst_26804;
var tmp26861 = inst_26805;
var tmp26862 = inst_26803;
var inst_26803__$1 = tmp26862;
var inst_26804__$1 = tmp26860;
var inst_26805__$1 = tmp26861;
var inst_26806__$1 = inst_26814;
var state_26851__$1 = (function (){var statearr_26865 = state_26851;
(statearr_26865[(14)] = inst_26813);

(statearr_26865[(9)] = inst_26803__$1);

(statearr_26865[(10)] = inst_26804__$1);

(statearr_26865[(11)] = inst_26805__$1);

(statearr_26865[(12)] = inst_26806__$1);

return statearr_26865;
})();
var statearr_26866_26899 = state_26851__$1;
(statearr_26866_26899[(2)] = null);

(statearr_26866_26899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (22))){
var state_26851__$1 = state_26851;
var statearr_26867_26900 = state_26851__$1;
(statearr_26867_26900[(2)] = null);

(statearr_26867_26900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (6))){
var inst_26792 = (state_26851[(13)]);
var inst_26801 = f.call(null,inst_26792);
var inst_26802 = cljs.core.seq.call(null,inst_26801);
var inst_26803 = inst_26802;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26851__$1 = (function (){var statearr_26868 = state_26851;
(statearr_26868[(9)] = inst_26803);

(statearr_26868[(10)] = inst_26804);

(statearr_26868[(11)] = inst_26805);

(statearr_26868[(12)] = inst_26806);

return statearr_26868;
})();
var statearr_26869_26901 = state_26851__$1;
(statearr_26869_26901[(2)] = null);

(statearr_26869_26901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (17))){
var inst_26817 = (state_26851[(7)]);
var inst_26821 = cljs.core.chunk_first.call(null,inst_26817);
var inst_26822 = cljs.core.chunk_rest.call(null,inst_26817);
var inst_26823 = cljs.core.count.call(null,inst_26821);
var inst_26803 = inst_26822;
var inst_26804 = inst_26821;
var inst_26805 = inst_26823;
var inst_26806 = (0);
var state_26851__$1 = (function (){var statearr_26870 = state_26851;
(statearr_26870[(9)] = inst_26803);

(statearr_26870[(10)] = inst_26804);

(statearr_26870[(11)] = inst_26805);

(statearr_26870[(12)] = inst_26806);

return statearr_26870;
})();
var statearr_26871_26902 = state_26851__$1;
(statearr_26871_26902[(2)] = null);

(statearr_26871_26902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (3))){
var inst_26849 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26851__$1,inst_26849);
} else {
if((state_val_26852 === (12))){
var inst_26837 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26872_26903 = state_26851__$1;
(statearr_26872_26903[(2)] = inst_26837);

(statearr_26872_26903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (2))){
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26851__$1,(4),in$);
} else {
if((state_val_26852 === (23))){
var inst_26845 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26873_26904 = state_26851__$1;
(statearr_26873_26904[(2)] = inst_26845);

(statearr_26873_26904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (19))){
var inst_26832 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26874_26905 = state_26851__$1;
(statearr_26874_26905[(2)] = inst_26832);

(statearr_26874_26905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (11))){
var inst_26803 = (state_26851[(9)]);
var inst_26817 = (state_26851[(7)]);
var inst_26817__$1 = cljs.core.seq.call(null,inst_26803);
var state_26851__$1 = (function (){var statearr_26875 = state_26851;
(statearr_26875[(7)] = inst_26817__$1);

return statearr_26875;
})();
if(inst_26817__$1){
var statearr_26876_26906 = state_26851__$1;
(statearr_26876_26906[(1)] = (14));

} else {
var statearr_26877_26907 = state_26851__$1;
(statearr_26877_26907[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (9))){
var inst_26839 = (state_26851[(2)]);
var inst_26840 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26851__$1 = (function (){var statearr_26878 = state_26851;
(statearr_26878[(15)] = inst_26839);

return statearr_26878;
})();
if(cljs.core.truth_(inst_26840)){
var statearr_26879_26908 = state_26851__$1;
(statearr_26879_26908[(1)] = (21));

} else {
var statearr_26880_26909 = state_26851__$1;
(statearr_26880_26909[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (5))){
var inst_26795 = cljs.core.async.close_BANG_.call(null,out);
var state_26851__$1 = state_26851;
var statearr_26881_26910 = state_26851__$1;
(statearr_26881_26910[(2)] = inst_26795);

(statearr_26881_26910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (14))){
var inst_26817 = (state_26851[(7)]);
var inst_26819 = cljs.core.chunked_seq_QMARK_.call(null,inst_26817);
var state_26851__$1 = state_26851;
if(inst_26819){
var statearr_26882_26911 = state_26851__$1;
(statearr_26882_26911[(1)] = (17));

} else {
var statearr_26883_26912 = state_26851__$1;
(statearr_26883_26912[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (16))){
var inst_26835 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26884_26913 = state_26851__$1;
(statearr_26884_26913[(2)] = inst_26835);

(statearr_26884_26913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (10))){
var inst_26804 = (state_26851[(10)]);
var inst_26806 = (state_26851[(12)]);
var inst_26811 = cljs.core._nth.call(null,inst_26804,inst_26806);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26851__$1,(13),out,inst_26811);
} else {
if((state_val_26852 === (18))){
var inst_26817 = (state_26851[(7)]);
var inst_26826 = cljs.core.first.call(null,inst_26817);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26851__$1,(20),out,inst_26826);
} else {
if((state_val_26852 === (8))){
var inst_26806 = (state_26851[(12)]);
var inst_26805 = (state_26851[(11)]);
var inst_26808 = (inst_26806 < inst_26805);
var inst_26809 = inst_26808;
var state_26851__$1 = state_26851;
if(cljs.core.truth_(inst_26809)){
var statearr_26885_26914 = state_26851__$1;
(statearr_26885_26914[(1)] = (10));

} else {
var statearr_26886_26915 = state_26851__$1;
(statearr_26886_26915[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25172__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25172__auto____0 = (function (){
var statearr_26887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26887[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25172__auto__);

(statearr_26887[(1)] = (1));

return statearr_26887;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25172__auto____1 = (function (state_26851){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26888){var ex__25175__auto__ = e26888;
var statearr_26889_26916 = state_26851;
(statearr_26889_26916[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26851[(4)]))){
var statearr_26890_26917 = state_26851;
(statearr_26890_26917[(1)] = cljs.core.first.call(null,(state_26851[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26851;
state_26851 = G__26918;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25172__auto__ = function(state_26851){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25172__auto____1.call(this,state_26851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25172__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25172__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26891 = f__25246__auto__.call(null);
(statearr_26891[(6)] = c__25245__auto__);

return statearr_26891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));

return c__25245__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26920 = arguments.length;
switch (G__26920) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26923 = arguments.length;
switch (G__26923) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26926 = arguments.length;
switch (G__26926) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25245__auto___26974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_26950){
var state_val_26951 = (state_26950[(1)]);
if((state_val_26951 === (7))){
var inst_26945 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26952_26975 = state_26950__$1;
(statearr_26952_26975[(2)] = inst_26945);

(statearr_26952_26975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (1))){
var inst_26927 = null;
var state_26950__$1 = (function (){var statearr_26953 = state_26950;
(statearr_26953[(7)] = inst_26927);

return statearr_26953;
})();
var statearr_26954_26976 = state_26950__$1;
(statearr_26954_26976[(2)] = null);

(statearr_26954_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (4))){
var inst_26930 = (state_26950[(8)]);
var inst_26930__$1 = (state_26950[(2)]);
var inst_26931 = (inst_26930__$1 == null);
var inst_26932 = cljs.core.not.call(null,inst_26931);
var state_26950__$1 = (function (){var statearr_26955 = state_26950;
(statearr_26955[(8)] = inst_26930__$1);

return statearr_26955;
})();
if(inst_26932){
var statearr_26956_26977 = state_26950__$1;
(statearr_26956_26977[(1)] = (5));

} else {
var statearr_26957_26978 = state_26950__$1;
(statearr_26957_26978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (6))){
var state_26950__$1 = state_26950;
var statearr_26958_26979 = state_26950__$1;
(statearr_26958_26979[(2)] = null);

(statearr_26958_26979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (3))){
var inst_26947 = (state_26950[(2)]);
var inst_26948 = cljs.core.async.close_BANG_.call(null,out);
var state_26950__$1 = (function (){var statearr_26959 = state_26950;
(statearr_26959[(9)] = inst_26947);

return statearr_26959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26950__$1,inst_26948);
} else {
if((state_val_26951 === (2))){
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(4),ch);
} else {
if((state_val_26951 === (11))){
var inst_26930 = (state_26950[(8)]);
var inst_26939 = (state_26950[(2)]);
var inst_26927 = inst_26930;
var state_26950__$1 = (function (){var statearr_26960 = state_26950;
(statearr_26960[(10)] = inst_26939);

(statearr_26960[(7)] = inst_26927);

return statearr_26960;
})();
var statearr_26961_26980 = state_26950__$1;
(statearr_26961_26980[(2)] = null);

(statearr_26961_26980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (9))){
var inst_26930 = (state_26950[(8)]);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26950__$1,(11),out,inst_26930);
} else {
if((state_val_26951 === (5))){
var inst_26930 = (state_26950[(8)]);
var inst_26927 = (state_26950[(7)]);
var inst_26934 = cljs.core._EQ_.call(null,inst_26930,inst_26927);
var state_26950__$1 = state_26950;
if(inst_26934){
var statearr_26963_26981 = state_26950__$1;
(statearr_26963_26981[(1)] = (8));

} else {
var statearr_26964_26982 = state_26950__$1;
(statearr_26964_26982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (10))){
var inst_26942 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26965_26983 = state_26950__$1;
(statearr_26965_26983[(2)] = inst_26942);

(statearr_26965_26983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (8))){
var inst_26927 = (state_26950[(7)]);
var tmp26962 = inst_26927;
var inst_26927__$1 = tmp26962;
var state_26950__$1 = (function (){var statearr_26966 = state_26950;
(statearr_26966[(7)] = inst_26927__$1);

return statearr_26966;
})();
var statearr_26967_26984 = state_26950__$1;
(statearr_26967_26984[(2)] = null);

(statearr_26967_26984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_26968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26968[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_26968[(1)] = (1));

return statearr_26968;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_26950){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_26950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e26969){var ex__25175__auto__ = e26969;
var statearr_26970_26985 = state_26950;
(statearr_26970_26985[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_26950[(4)]))){
var statearr_26971_26986 = state_26950;
(statearr_26971_26986[(1)] = cljs.core.first.call(null,(state_26950[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26987 = state_26950;
state_26950 = G__26987;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_26950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_26950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_26972 = f__25246__auto__.call(null);
(statearr_26972[(6)] = c__25245__auto___26974);

return statearr_26972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26989 = arguments.length;
switch (G__26989) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25245__auto___27056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_27027){
var state_val_27028 = (state_27027[(1)]);
if((state_val_27028 === (7))){
var inst_27023 = (state_27027[(2)]);
var state_27027__$1 = state_27027;
var statearr_27029_27057 = state_27027__$1;
(statearr_27029_27057[(2)] = inst_27023);

(statearr_27029_27057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (1))){
var inst_26990 = (new Array(n));
var inst_26991 = inst_26990;
var inst_26992 = (0);
var state_27027__$1 = (function (){var statearr_27030 = state_27027;
(statearr_27030[(7)] = inst_26991);

(statearr_27030[(8)] = inst_26992);

return statearr_27030;
})();
var statearr_27031_27058 = state_27027__$1;
(statearr_27031_27058[(2)] = null);

(statearr_27031_27058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (4))){
var inst_26995 = (state_27027[(9)]);
var inst_26995__$1 = (state_27027[(2)]);
var inst_26996 = (inst_26995__$1 == null);
var inst_26997 = cljs.core.not.call(null,inst_26996);
var state_27027__$1 = (function (){var statearr_27032 = state_27027;
(statearr_27032[(9)] = inst_26995__$1);

return statearr_27032;
})();
if(inst_26997){
var statearr_27033_27059 = state_27027__$1;
(statearr_27033_27059[(1)] = (5));

} else {
var statearr_27034_27060 = state_27027__$1;
(statearr_27034_27060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (15))){
var inst_27017 = (state_27027[(2)]);
var state_27027__$1 = state_27027;
var statearr_27035_27061 = state_27027__$1;
(statearr_27035_27061[(2)] = inst_27017);

(statearr_27035_27061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (13))){
var state_27027__$1 = state_27027;
var statearr_27036_27062 = state_27027__$1;
(statearr_27036_27062[(2)] = null);

(statearr_27036_27062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (6))){
var inst_26992 = (state_27027[(8)]);
var inst_27013 = (inst_26992 > (0));
var state_27027__$1 = state_27027;
if(cljs.core.truth_(inst_27013)){
var statearr_27037_27063 = state_27027__$1;
(statearr_27037_27063[(1)] = (12));

} else {
var statearr_27038_27064 = state_27027__$1;
(statearr_27038_27064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (3))){
var inst_27025 = (state_27027[(2)]);
var state_27027__$1 = state_27027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27027__$1,inst_27025);
} else {
if((state_val_27028 === (12))){
var inst_26991 = (state_27027[(7)]);
var inst_27015 = cljs.core.vec.call(null,inst_26991);
var state_27027__$1 = state_27027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27027__$1,(15),out,inst_27015);
} else {
if((state_val_27028 === (2))){
var state_27027__$1 = state_27027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27027__$1,(4),ch);
} else {
if((state_val_27028 === (11))){
var inst_27007 = (state_27027[(2)]);
var inst_27008 = (new Array(n));
var inst_26991 = inst_27008;
var inst_26992 = (0);
var state_27027__$1 = (function (){var statearr_27039 = state_27027;
(statearr_27039[(10)] = inst_27007);

(statearr_27039[(7)] = inst_26991);

(statearr_27039[(8)] = inst_26992);

return statearr_27039;
})();
var statearr_27040_27065 = state_27027__$1;
(statearr_27040_27065[(2)] = null);

(statearr_27040_27065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (9))){
var inst_26991 = (state_27027[(7)]);
var inst_27005 = cljs.core.vec.call(null,inst_26991);
var state_27027__$1 = state_27027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27027__$1,(11),out,inst_27005);
} else {
if((state_val_27028 === (5))){
var inst_26991 = (state_27027[(7)]);
var inst_26992 = (state_27027[(8)]);
var inst_26995 = (state_27027[(9)]);
var inst_27000 = (state_27027[(11)]);
var inst_26999 = (inst_26991[inst_26992] = inst_26995);
var inst_27000__$1 = (inst_26992 + (1));
var inst_27001 = (inst_27000__$1 < n);
var state_27027__$1 = (function (){var statearr_27041 = state_27027;
(statearr_27041[(12)] = inst_26999);

(statearr_27041[(11)] = inst_27000__$1);

return statearr_27041;
})();
if(cljs.core.truth_(inst_27001)){
var statearr_27042_27066 = state_27027__$1;
(statearr_27042_27066[(1)] = (8));

} else {
var statearr_27043_27067 = state_27027__$1;
(statearr_27043_27067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (14))){
var inst_27020 = (state_27027[(2)]);
var inst_27021 = cljs.core.async.close_BANG_.call(null,out);
var state_27027__$1 = (function (){var statearr_27045 = state_27027;
(statearr_27045[(13)] = inst_27020);

return statearr_27045;
})();
var statearr_27046_27068 = state_27027__$1;
(statearr_27046_27068[(2)] = inst_27021);

(statearr_27046_27068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (10))){
var inst_27011 = (state_27027[(2)]);
var state_27027__$1 = state_27027;
var statearr_27047_27069 = state_27027__$1;
(statearr_27047_27069[(2)] = inst_27011);

(statearr_27047_27069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (8))){
var inst_26991 = (state_27027[(7)]);
var inst_27000 = (state_27027[(11)]);
var tmp27044 = inst_26991;
var inst_26991__$1 = tmp27044;
var inst_26992 = inst_27000;
var state_27027__$1 = (function (){var statearr_27048 = state_27027;
(statearr_27048[(7)] = inst_26991__$1);

(statearr_27048[(8)] = inst_26992);

return statearr_27048;
})();
var statearr_27049_27070 = state_27027__$1;
(statearr_27049_27070[(2)] = null);

(statearr_27049_27070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_27050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27050[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_27050[(1)] = (1));

return statearr_27050;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_27027){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_27027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e27051){var ex__25175__auto__ = e27051;
var statearr_27052_27071 = state_27027;
(statearr_27052_27071[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_27027[(4)]))){
var statearr_27053_27072 = state_27027;
(statearr_27053_27072[(1)] = cljs.core.first.call(null,(state_27027[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27073 = state_27027;
state_27027 = G__27073;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_27027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_27027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_27054 = f__25246__auto__.call(null);
(statearr_27054[(6)] = c__25245__auto___27056);

return statearr_27054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27075 = arguments.length;
switch (G__27075) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25245__auto___27153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25246__auto__ = (function (){var switch__25171__auto__ = (function (state_27120){
var state_val_27121 = (state_27120[(1)]);
if((state_val_27121 === (7))){
var inst_27116 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
var statearr_27122_27154 = state_27120__$1;
(statearr_27122_27154[(2)] = inst_27116);

(statearr_27122_27154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (1))){
var inst_27076 = [];
var inst_27077 = inst_27076;
var inst_27078 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27120__$1 = (function (){var statearr_27123 = state_27120;
(statearr_27123[(7)] = inst_27077);

(statearr_27123[(8)] = inst_27078);

return statearr_27123;
})();
var statearr_27124_27155 = state_27120__$1;
(statearr_27124_27155[(2)] = null);

(statearr_27124_27155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (4))){
var inst_27081 = (state_27120[(9)]);
var inst_27081__$1 = (state_27120[(2)]);
var inst_27082 = (inst_27081__$1 == null);
var inst_27083 = cljs.core.not.call(null,inst_27082);
var state_27120__$1 = (function (){var statearr_27125 = state_27120;
(statearr_27125[(9)] = inst_27081__$1);

return statearr_27125;
})();
if(inst_27083){
var statearr_27126_27156 = state_27120__$1;
(statearr_27126_27156[(1)] = (5));

} else {
var statearr_27127_27157 = state_27120__$1;
(statearr_27127_27157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (15))){
var inst_27077 = (state_27120[(7)]);
var inst_27108 = cljs.core.vec.call(null,inst_27077);
var state_27120__$1 = state_27120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27120__$1,(18),out,inst_27108);
} else {
if((state_val_27121 === (13))){
var inst_27103 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
var statearr_27128_27158 = state_27120__$1;
(statearr_27128_27158[(2)] = inst_27103);

(statearr_27128_27158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (6))){
var inst_27077 = (state_27120[(7)]);
var inst_27105 = inst_27077.length;
var inst_27106 = (inst_27105 > (0));
var state_27120__$1 = state_27120;
if(cljs.core.truth_(inst_27106)){
var statearr_27129_27159 = state_27120__$1;
(statearr_27129_27159[(1)] = (15));

} else {
var statearr_27130_27160 = state_27120__$1;
(statearr_27130_27160[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (17))){
var inst_27113 = (state_27120[(2)]);
var inst_27114 = cljs.core.async.close_BANG_.call(null,out);
var state_27120__$1 = (function (){var statearr_27131 = state_27120;
(statearr_27131[(10)] = inst_27113);

return statearr_27131;
})();
var statearr_27132_27161 = state_27120__$1;
(statearr_27132_27161[(2)] = inst_27114);

(statearr_27132_27161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (3))){
var inst_27118 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27120__$1,inst_27118);
} else {
if((state_val_27121 === (12))){
var inst_27077 = (state_27120[(7)]);
var inst_27096 = cljs.core.vec.call(null,inst_27077);
var state_27120__$1 = state_27120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27120__$1,(14),out,inst_27096);
} else {
if((state_val_27121 === (2))){
var state_27120__$1 = state_27120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27120__$1,(4),ch);
} else {
if((state_val_27121 === (11))){
var inst_27077 = (state_27120[(7)]);
var inst_27081 = (state_27120[(9)]);
var inst_27085 = (state_27120[(11)]);
var inst_27093 = inst_27077.push(inst_27081);
var tmp27133 = inst_27077;
var inst_27077__$1 = tmp27133;
var inst_27078 = inst_27085;
var state_27120__$1 = (function (){var statearr_27134 = state_27120;
(statearr_27134[(12)] = inst_27093);

(statearr_27134[(7)] = inst_27077__$1);

(statearr_27134[(8)] = inst_27078);

return statearr_27134;
})();
var statearr_27135_27162 = state_27120__$1;
(statearr_27135_27162[(2)] = null);

(statearr_27135_27162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (9))){
var inst_27078 = (state_27120[(8)]);
var inst_27089 = cljs.core.keyword_identical_QMARK_.call(null,inst_27078,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_27120__$1 = state_27120;
var statearr_27136_27163 = state_27120__$1;
(statearr_27136_27163[(2)] = inst_27089);

(statearr_27136_27163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (5))){
var inst_27081 = (state_27120[(9)]);
var inst_27085 = (state_27120[(11)]);
var inst_27078 = (state_27120[(8)]);
var inst_27086 = (state_27120[(13)]);
var inst_27085__$1 = f.call(null,inst_27081);
var inst_27086__$1 = cljs.core._EQ_.call(null,inst_27085__$1,inst_27078);
var state_27120__$1 = (function (){var statearr_27137 = state_27120;
(statearr_27137[(11)] = inst_27085__$1);

(statearr_27137[(13)] = inst_27086__$1);

return statearr_27137;
})();
if(inst_27086__$1){
var statearr_27138_27164 = state_27120__$1;
(statearr_27138_27164[(1)] = (8));

} else {
var statearr_27139_27165 = state_27120__$1;
(statearr_27139_27165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (14))){
var inst_27081 = (state_27120[(9)]);
var inst_27085 = (state_27120[(11)]);
var inst_27098 = (state_27120[(2)]);
var inst_27099 = [];
var inst_27100 = inst_27099.push(inst_27081);
var inst_27077 = inst_27099;
var inst_27078 = inst_27085;
var state_27120__$1 = (function (){var statearr_27140 = state_27120;
(statearr_27140[(14)] = inst_27098);

(statearr_27140[(15)] = inst_27100);

(statearr_27140[(7)] = inst_27077);

(statearr_27140[(8)] = inst_27078);

return statearr_27140;
})();
var statearr_27141_27166 = state_27120__$1;
(statearr_27141_27166[(2)] = null);

(statearr_27141_27166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (16))){
var state_27120__$1 = state_27120;
var statearr_27142_27167 = state_27120__$1;
(statearr_27142_27167[(2)] = null);

(statearr_27142_27167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (10))){
var inst_27091 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
if(cljs.core.truth_(inst_27091)){
var statearr_27143_27168 = state_27120__$1;
(statearr_27143_27168[(1)] = (11));

} else {
var statearr_27144_27169 = state_27120__$1;
(statearr_27144_27169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (18))){
var inst_27110 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
var statearr_27145_27170 = state_27120__$1;
(statearr_27145_27170[(2)] = inst_27110);

(statearr_27145_27170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (8))){
var inst_27086 = (state_27120[(13)]);
var state_27120__$1 = state_27120;
var statearr_27146_27171 = state_27120__$1;
(statearr_27146_27171[(2)] = inst_27086);

(statearr_27146_27171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25172__auto__ = null;
var cljs$core$async$state_machine__25172__auto____0 = (function (){
var statearr_27147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27147[(0)] = cljs$core$async$state_machine__25172__auto__);

(statearr_27147[(1)] = (1));

return statearr_27147;
});
var cljs$core$async$state_machine__25172__auto____1 = (function (state_27120){
while(true){
var ret_value__25173__auto__ = (function (){try{while(true){
var result__25174__auto__ = switch__25171__auto__.call(null,state_27120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25174__auto__;
}
break;
}
}catch (e27148){var ex__25175__auto__ = e27148;
var statearr_27149_27172 = state_27120;
(statearr_27149_27172[(2)] = ex__25175__auto__);


if(cljs.core.seq.call(null,(state_27120[(4)]))){
var statearr_27150_27173 = state_27120;
(statearr_27150_27173[(1)] = cljs.core.first.call(null,(state_27120[(4)])));

} else {
throw ex__25175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27174 = state_27120;
state_27120 = G__27174;
continue;
} else {
return ret_value__25173__auto__;
}
break;
}
});
cljs$core$async$state_machine__25172__auto__ = function(state_27120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25172__auto____1.call(this,state_27120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25172__auto____0;
cljs$core$async$state_machine__25172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25172__auto____1;
return cljs$core$async$state_machine__25172__auto__;
})()
})();
var state__25247__auto__ = (function (){var statearr_27151 = f__25246__auto__.call(null);
(statearr_27151[(6)] = c__25245__auto___27153);

return statearr_27151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25247__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
