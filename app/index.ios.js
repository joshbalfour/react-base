(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _reactNative=__webpack_require__(35);
	var _reactNativeReduxRouter=__webpack_require__(36);
	var _routes=__webpack_require__(64);var _routes2=_interopRequireDefault(_routes);
	var _AppContainer=__webpack_require__(147);var _AppContainer2=_interopRequireDefault(_AppContainer);
	var _store=__webpack_require__(148);var _store2=_interopRequireDefault(_store);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var store=(0,_store2.default)(null,{},_reactNativeReduxRouter.routerReducer);
	
	var ReactBase=function ReactBase(){return(
	_react2.default.createElement(_AppContainer2.default,{
	routes:_routes2.default,
	store:store}));};
	
	
	
	_reactNative.AppRegistry.registerComponent('ReactBase',function(){return ReactBase;});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports=__webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(5);
	
	var ReactChildren=__webpack_require__(6);
	var ReactComponent=__webpack_require__(18);
	var ReactPureComponent=__webpack_require__(21);
	var ReactClass=__webpack_require__(22);
	var ReactDOMFactories=__webpack_require__(27);
	var ReactElement=__webpack_require__(10);
	var ReactPropTypes=__webpack_require__(32);
	var ReactVersion=__webpack_require__(33);
	
	var onlyChild=__webpack_require__(34);
	var warning=__webpack_require__(12);
	
	var createElement=ReactElement.createElement;
	var createFactory=ReactElement.createFactory;
	var cloneElement=ReactElement.cloneElement;
	
	if(process.env.NODE_ENV!=='production'){
	var ReactElementValidator=__webpack_require__(28);
	createElement=ReactElementValidator.createElement;
	createFactory=ReactElementValidator.createFactory;
	cloneElement=ReactElementValidator.cloneElement;
	}
	
	var __spread=_assign;
	
	if(process.env.NODE_ENV!=='production'){
	var warned=false;
	__spread=function __spread(){
	process.env.NODE_ENV!=='production'?warning(warned,'React.__spread is deprecated and should not be used. Use '+'Object.assign directly or another helper function with similar '+'semantics. You may be seeing this warning due to your compiler. '+'See https://fb.me/react-spread-deprecation for more details.'):void 0;
	warned=true;
	return _assign.apply(null,arguments);
	};
	}
	
	var React={
	
	
	
	Children:{
	map:ReactChildren.map,
	forEach:ReactChildren.forEach,
	count:ReactChildren.count,
	toArray:ReactChildren.toArray,
	only:onlyChild},
	
	
	Component:ReactComponent,
	PureComponent:ReactPureComponent,
	
	createElement:createElement,
	cloneElement:cloneElement,
	isValidElement:ReactElement.isValidElement,
	
	
	
	PropTypes:ReactPropTypes,
	createClass:ReactClass.createClass,
	createFactory:createFactory,
	createMixin:function createMixin(mixin){
	
	return mixin;
	},
	
	
	
	DOM:ReactDOMFactories,
	
	version:ReactVersion,
	
	
	__spread:__spread};
	
	
	module.exports=React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	var process=module.exports={};
	
	
	
	
	
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function(){
	try{
	cachedSetTimeout=setTimeout;
	}catch(e){
	cachedSetTimeout=function cachedSetTimeout(){
	throw new Error('setTimeout is not defined');
	};
	}
	try{
	cachedClearTimeout=clearTimeout;
	}catch(e){
	cachedClearTimeout=function cachedClearTimeout(){
	throw new Error('clearTimeout is not defined');
	};
	}
	})();
	function runTimeout(fun){
	if(cachedSetTimeout===setTimeout){
	
	return setTimeout(fun,0);
	}
	try{
	
	return cachedSetTimeout(fun,0);
	}catch(e){
	try{
	
	return cachedSetTimeout.call(null,fun,0);
	}catch(e){
	
	return cachedSetTimeout.call(this,fun,0);
	}
	}
	
	
	}
	function runClearTimeout(marker){
	if(cachedClearTimeout===clearTimeout){
	
	return clearTimeout(marker);
	}
	try{
	
	return cachedClearTimeout(marker);
	}catch(e){
	try{
	
	return cachedClearTimeout.call(null,marker);
	}catch(e){
	
	
	return cachedClearTimeout.call(this,marker);
	}
	}
	
	
	
	}
	var queue=[];
	var draining=false;
	var currentQueue;
	var queueIndex=-1;
	
	function cleanUpNextTick(){
	if(!draining||!currentQueue){
	return;
	}
	draining=false;
	if(currentQueue.length){
	queue=currentQueue.concat(queue);
	}else{
	queueIndex=-1;
	}
	if(queue.length){
	drainQueue();
	}
	}
	
	function drainQueue(){
	if(draining){
	return;
	}
	var timeout=runTimeout(cleanUpNextTick);
	draining=true;
	
	var len=queue.length;
	while(len){
	currentQueue=queue;
	queue=[];
	while(++queueIndex<len){
	if(currentQueue){
	currentQueue[queueIndex].run();
	}
	}
	queueIndex=-1;
	len=queue.length;
	}
	currentQueue=null;
	draining=false;
	runClearTimeout(timeout);
	}
	
	process.nextTick=function(fun){
	var args=new Array(arguments.length-1);
	if(arguments.length>1){
	for(var i=1;i<arguments.length;i++){
	args[i-1]=arguments[i];
	}
	}
	queue.push(new Item(fun,args));
	if(queue.length===1&&!draining){
	runTimeout(drainQueue);
	}
	};
	
	
	function Item(fun,array){
	this.fun=fun;
	this.array=array;
	}
	Item.prototype.run=function(){
	this.fun.apply(null,this.array);
	};
	process.title='browser';
	process.browser=true;
	process.env={};
	process.argv=[];
	process.version='';
	process.versions={};
	
	function noop(){}
	
	process.on=noop;
	process.addListener=noop;
	process.once=noop;
	process.off=noop;
	process.removeListener=noop;
	process.removeAllListeners=noop;
	process.emit=noop;
	
	process.binding=function(name){
	throw new Error('process.binding is not supported');
	};
	
	process.cwd=function(){return'/';};
	process.chdir=function(dir){
	throw new Error('process.chdir is not supported');
	};
	process.umask=function(){return 0;};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var hasOwnProperty=Object.prototype.hasOwnProperty;
	var propIsEnumerable=Object.prototype.propertyIsEnumerable;
	
	function toObject(val){
	if(val===null||val===undefined){
	throw new TypeError('Object.assign cannot be called with null or undefined');
	}
	
	return Object(val);
	}
	
	function shouldUseNative(){
	try{
	if(!Object.assign){
	return false;
	}
	
	
	
	
	var test1=new String('abc');
	test1[5]='de';
	if(Object.getOwnPropertyNames(test1)[0]==='5'){
	return false;
	}
	
	
	var test2={};
	for(var i=0;i<10;i++){
	test2['_'+String.fromCharCode(i)]=i;
	}
	var order2=Object.getOwnPropertyNames(test2).map(function(n){
	return test2[n];
	});
	if(order2.join('')!=='0123456789'){
	return false;
	}
	
	
	var test3={};
	'abcdefghijklmnopqrst'.split('').forEach(function(letter){
	test3[letter]=letter;
	});
	if(Object.keys(_extends({},test3)).join('')!==
	'abcdefghijklmnopqrst'){
	return false;
	}
	
	return true;
	}catch(e){
	
	return false;
	}
	}
	
	module.exports=shouldUseNative()?Object.assign:function(target,source){
	var from;
	var to=toObject(target);
	var symbols;
	
	for(var s=1;s<arguments.length;s++){
	from=Object(arguments[s]);
	
	for(var key in from){
	if(hasOwnProperty.call(from,key)){
	to[key]=from[key];
	}
	}
	
	if(Object.getOwnPropertySymbols){
	symbols=Object.getOwnPropertySymbols(from);
	for(var i=0;i<symbols.length;i++){
	if(propIsEnumerable.call(from,symbols[i])){
	to[symbols[i]]=from[symbols[i]];
	}
	}
	}
	}
	
	return to;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var PooledClass=__webpack_require__(7);
	var ReactElement=__webpack_require__(10);
	
	var emptyFunction=__webpack_require__(13);
	var traverseAllChildren=__webpack_require__(15);
	
	var twoArgumentPooler=PooledClass.twoArgumentPooler;
	var fourArgumentPooler=PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex=/\/+/g;
	function escapeUserProvidedKey(text){
	return(''+text).replace(userProvidedKeyEscapeRegex,'$&/');
	}
	
	
	
	
	
	
	
	
	
	function ForEachBookKeeping(forEachFunction,forEachContext){
	this.func=forEachFunction;
	this.context=forEachContext;
	this.count=0;
	}
	ForEachBookKeeping.prototype.destructor=function(){
	this.func=null;
	this.context=null;
	this.count=0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping,child,name){
	var func=bookKeeping.func;
	var context=bookKeeping.context;
	
	func.call(context,child,bookKeeping.count++);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	function forEachChildren(children,forEachFunc,forEachContext){
	if(children==null){
	return children;
	}
	var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);
	traverseAllChildren(children,forEachSingleChild,traverseContext);
	ForEachBookKeeping.release(traverseContext);
	}
	
	
	
	
	
	
	
	
	
	
	function MapBookKeeping(mapResult,keyPrefix,mapFunction,mapContext){
	this.result=mapResult;
	this.keyPrefix=keyPrefix;
	this.func=mapFunction;
	this.context=mapContext;
	this.count=0;
	}
	MapBookKeeping.prototype.destructor=function(){
	this.result=null;
	this.keyPrefix=null;
	this.func=null;
	this.context=null;
	this.count=0;
	};
	PooledClass.addPoolingTo(MapBookKeeping,fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping,child,childKey){
	var result=bookKeeping.result;
	var keyPrefix=bookKeeping.keyPrefix;
	var func=bookKeeping.func;
	var context=bookKeeping.context;
	
	
	var mappedChild=func.call(context,child,bookKeeping.count++);
	if(Array.isArray(mappedChild)){
	mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);
	}else if(mappedChild!=null){
	if(ReactElement.isValidElement(mappedChild)){
	mappedChild=ReactElement.cloneAndReplaceKey(mappedChild,
	
	
	keyPrefix+(mappedChild.key&&(!child||child.key!==mappedChild.key)?escapeUserProvidedKey(mappedChild.key)+'/':'')+childKey);
	}
	result.push(mappedChild);
	}
	}
	
	function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){
	var escapedPrefix='';
	if(prefix!=null){
	escapedPrefix=escapeUserProvidedKey(prefix)+'/';
	}
	var traverseContext=MapBookKeeping.getPooled(array,escapedPrefix,func,context);
	traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);
	MapBookKeeping.release(traverseContext);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function mapChildren(children,func,context){
	if(children==null){
	return children;
	}
	var result=[];
	mapIntoWithKeyPrefixInternal(children,result,null,func,context);
	return result;
	}
	
	function forEachSingleChildDummy(traverseContext,child,name){
	return null;
	}
	
	
	
	
	
	
	
	
	
	
	function countChildren(children,context){
	return traverseAllChildren(children,forEachSingleChildDummy,null);
	}
	
	
	
	
	
	
	
	function toArray(children){
	var result=[];
	mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);
	return result;
	}
	
	var ReactChildren={
	forEach:forEachChildren,
	map:mapChildren,
	mapIntoWithKeyPrefixInternal:mapIntoWithKeyPrefixInternal,
	count:countChildren,
	toArray:toArray};
	
	
	module.exports=ReactChildren;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(8);
	
	var invariant=__webpack_require__(9);
	
	
	
	
	
	
	
	
	var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,copyFieldsFrom);
	return instance;
	}else{
	return new Klass(copyFieldsFrom);
	}
	};
	
	var twoArgumentPooler=function twoArgumentPooler(a1,a2){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2);
	return instance;
	}else{
	return new Klass(a1,a2);
	}
	};
	
	var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3);
	return instance;
	}else{
	return new Klass(a1,a2,a3);
	}
	};
	
	var fourArgumentPooler=function fourArgumentPooler(a1,a2,a3,a4){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3,a4);
	return instance;
	}else{
	return new Klass(a1,a2,a3,a4);
	}
	};
	
	var fiveArgumentPooler=function fiveArgumentPooler(a1,a2,a3,a4,a5){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3,a4,a5);
	return instance;
	}else{
	return new Klass(a1,a2,a3,a4,a5);
	}
	};
	
	var standardReleaser=function standardReleaser(instance){
	var Klass=this;
	!(instance instanceof Klass)?process.env.NODE_ENV!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):_prodInvariant('25'):void 0;
	instance.destructor();
	if(Klass.instancePool.length<Klass.poolSize){
	Klass.instancePool.push(instance);
	}
	};
	
	var DEFAULT_POOL_SIZE=10;
	var DEFAULT_POOLER=oneArgumentPooler;
	
	
	
	
	
	
	
	
	
	
	var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){
	var NewKlass=CopyConstructor;
	NewKlass.instancePool=[];
	NewKlass.getPooled=pooler||DEFAULT_POOLER;
	if(!NewKlass.poolSize){
	NewKlass.poolSize=DEFAULT_POOL_SIZE;
	}
	NewKlass.release=standardReleaser;
	return NewKlass;
	};
	
	var PooledClass={
	addPoolingTo:addPoolingTo,
	oneArgumentPooler:oneArgumentPooler,
	twoArgumentPooler:twoArgumentPooler,
	threeArgumentPooler:threeArgumentPooler,
	fourArgumentPooler:fourArgumentPooler,
	fiveArgumentPooler:fiveArgumentPooler};
	
	
	module.exports=PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	function reactProdInvariant(code){
	var argCount=arguments.length-1;
	
	var message='Minified React error #'+code+'; visit '+'http://facebook.github.io/react/docs/error-decoder.html?invariant='+code;
	
	for(var argIdx=0;argIdx<argCount;argIdx++){
	message+='&args[]='+encodeURIComponent(arguments[argIdx+1]);
	}
	
	message+=' for the full message or use the non-minified dev environment'+' for full errors and additional helpful warnings.';
	
	var error=new Error(message);
	error.name='Invariant Violation';
	error.framesToPop=1;
	
	throw error;
	}
	
	module.exports=reactProdInvariant;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	function invariant(condition,format,a,b,c,d,e,f){
	if(process.env.NODE_ENV!=='production'){
	if(format===undefined){
	throw new Error('invariant requires an error message argument');
	}
	}
	
	if(!condition){
	var error;
	if(format===undefined){
	error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');
	}else{
	var args=[a,b,c,d,e,f];
	var argIndex=0;
	error=new Error(format.replace(/%s/g,function(){
	return args[argIndex++];
	}));
	error.name='Invariant Violation';
	}
	
	error.framesToPop=1;
	throw error;
	}
	}
	
	module.exports=invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var _assign=__webpack_require__(5);
	
	var ReactCurrentOwner=__webpack_require__(11);
	
	var warning=__webpack_require__(12);
	var canDefineProperty=__webpack_require__(14);
	var hasOwnProperty=Object.prototype.hasOwnProperty;
	
	
	
	var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;
	
	var RESERVED_PROPS={
	key:true,
	ref:true,
	__self:true,
	__source:true};
	
	
	var specialPropKeyWarningShown,specialPropRefWarningShown;
	
	function hasValidRef(config){
	if(process.env.NODE_ENV!=='production'){
	if(hasOwnProperty.call(config,'ref')){
	var getter=Object.getOwnPropertyDescriptor(config,'ref').get;
	if(getter&&getter.isReactWarning){
	return false;
	}
	}
	}
	return config.ref!==undefined;
	}
	
	function hasValidKey(config){
	if(process.env.NODE_ENV!=='production'){
	if(hasOwnProperty.call(config,'key')){
	var getter=Object.getOwnPropertyDescriptor(config,'key').get;
	if(getter&&getter.isReactWarning){
	return false;
	}
	}
	}
	return config.key!==undefined;
	}
	
	function defineKeyPropWarningGetter(props,displayName){
	var warnAboutAccessingKey=function warnAboutAccessingKey(){
	if(!specialPropKeyWarningShown){
	specialPropKeyWarningShown=true;
	process.env.NODE_ENV!=='production'?warning(false,'%s: `key` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;
	}
	};
	warnAboutAccessingKey.isReactWarning=true;
	Object.defineProperty(props,'key',{
	get:warnAboutAccessingKey,
	configurable:true});
	
	}
	
	function defineRefPropWarningGetter(props,displayName){
	var warnAboutAccessingRef=function warnAboutAccessingRef(){
	if(!specialPropRefWarningShown){
	specialPropRefWarningShown=true;
	process.env.NODE_ENV!=='production'?warning(false,'%s: `ref` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;
	}
	};
	warnAboutAccessingRef.isReactWarning=true;
	Object.defineProperty(props,'ref',{
	get:warnAboutAccessingRef,
	configurable:true});
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactElement=function ReactElement(type,key,ref,self,source,owner,props){
	var element={
	
	$$typeof:REACT_ELEMENT_TYPE,
	
	
	type:type,
	key:key,
	ref:ref,
	props:props,
	
	
	_owner:owner};
	
	
	if(process.env.NODE_ENV!=='production'){
	
	
	
	
	element._store={};
	var shadowChildren=Array.isArray(props.children)?props.children.slice(0):props.children;
	
	
	
	
	
	if(canDefineProperty){
	Object.defineProperty(element._store,'validated',{
	configurable:false,
	enumerable:false,
	writable:true,
	value:false});
	
	
	Object.defineProperty(element,'_self',{
	configurable:false,
	enumerable:false,
	writable:false,
	value:self});
	
	Object.defineProperty(element,'_shadowChildren',{
	configurable:false,
	enumerable:false,
	writable:false,
	value:shadowChildren});
	
	
	
	Object.defineProperty(element,'_source',{
	configurable:false,
	enumerable:false,
	writable:false,
	value:source});
	
	}else{
	element._store.validated=false;
	element._self=self;
	element._shadowChildren=shadowChildren;
	element._source=source;
	}
	if(Object.freeze){
	Object.freeze(element.props);
	Object.freeze(element);
	}
	}
	
	return element;
	};
	
	
	
	
	
	ReactElement.createElement=function(type,config,children){
	var propName;
	
	
	var props={};
	
	var key=null;
	var ref=null;
	var self=null;
	var source=null;
	
	if(config!=null){
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(
	
	config.__proto__==null||config.__proto__===Object.prototype,
	
	'React.createElement(...): Expected props argument to be a plain object. '+'Properties defined in its prototype chain will be ignored.'):void 0;
	}
	
	if(hasValidRef(config)){
	ref=config.ref;
	}
	if(hasValidKey(config)){
	key=''+config.key;
	}
	
	self=config.__self===undefined?null:config.__self;
	source=config.__source===undefined?null:config.__source;
	
	for(propName in config){
	if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){
	props[propName]=config[propName];
	}
	}
	}
	
	
	
	var childrenLength=arguments.length-2;
	if(childrenLength===1){
	props.children=children;
	}else if(childrenLength>1){
	var childArray=Array(childrenLength);
	for(var i=0;i<childrenLength;i++){
	childArray[i]=arguments[i+2];
	}
	props.children=childArray;
	}
	
	
	if(type&&type.defaultProps){
	var defaultProps=type.defaultProps;
	for(propName in defaultProps){
	if(props[propName]===undefined){
	props[propName]=defaultProps[propName];
	}
	}
	}
	if(process.env.NODE_ENV!=='production'){
	if(key||ref){
	if(typeof props.$$typeof==='undefined'||props.$$typeof!==REACT_ELEMENT_TYPE){
	var displayName=typeof type==='function'?type.displayName||type.name||'Unknown':type;
	if(key){
	defineKeyPropWarningGetter(props,displayName);
	}
	if(ref){
	defineRefPropWarningGetter(props,displayName);
	}
	}
	}
	}
	return ReactElement(type,key,ref,self,source,ReactCurrentOwner.current,props);
	};
	
	
	
	
	
	ReactElement.createFactory=function(type){
	var factory=ReactElement.createElement.bind(null,type);
	
	
	
	
	
	factory.type=type;
	return factory;
	};
	
	ReactElement.cloneAndReplaceKey=function(oldElement,newKey){
	var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);
	
	return newElement;
	};
	
	
	
	
	
	ReactElement.cloneElement=function(element,config,children){
	var propName;
	
	
	var props=_assign({},element.props);
	
	
	var key=element.key;
	var ref=element.ref;
	
	var self=element._self;
	
	
	
	var source=element._source;
	
	
	var owner=element._owner;
	
	if(config!=null){
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(
	
	config.__proto__==null||config.__proto__===Object.prototype,
	
	'React.cloneElement(...): Expected props argument to be a plain object. '+'Properties defined in its prototype chain will be ignored.'):void 0;
	}
	
	if(hasValidRef(config)){
	
	ref=config.ref;
	owner=ReactCurrentOwner.current;
	}
	if(hasValidKey(config)){
	key=''+config.key;
	}
	
	
	var defaultProps;
	if(element.type&&element.type.defaultProps){
	defaultProps=element.type.defaultProps;
	}
	for(propName in config){
	if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){
	if(config[propName]===undefined&&defaultProps!==undefined){
	
	props[propName]=defaultProps[propName];
	}else{
	props[propName]=config[propName];
	}
	}
	}
	}
	
	
	
	var childrenLength=arguments.length-2;
	if(childrenLength===1){
	props.children=children;
	}else if(childrenLength>1){
	var childArray=Array(childrenLength);
	for(var i=0;i<childrenLength;i++){
	childArray[i]=arguments[i+2];
	}
	props.children=childArray;
	}
	
	return ReactElement(element.type,key,ref,self,source,owner,props);
	};
	
	
	
	
	
	
	
	
	ReactElement.isValidElement=function(object){
	return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;
	};
	
	ReactElement.REACT_ELEMENT_TYPE=REACT_ELEMENT_TYPE;
	
	module.exports=ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	var ReactCurrentOwner={
	
	
	
	
	
	current:null};
	
	
	
	module.exports=ReactCurrentOwner;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var emptyFunction=__webpack_require__(13);
	
	
	
	
	
	
	
	
	var warning=emptyFunction;
	
	if(process.env.NODE_ENV!=='production'){
	(function(){
	var printWarning=function printWarning(format){
	for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
	args[_key-1]=arguments[_key];
	}
	
	var argIndex=0;
	var message='Warning: '+format.replace(/%s/g,function(){
	return args[argIndex++];
	});
	if(typeof console!=='undefined'){
	console.error(message);
	}
	try{
	
	
	
	throw new Error(message);
	}catch(x){}
	};
	
	warning=function warning(condition,format){
	if(format===undefined){
	throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');
	}
	
	if(format.indexOf('Failed Composite propType: ')===0){
	return;
	}
	
	if(!condition){
	for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){
	args[_key2-2]=arguments[_key2];
	}
	
	printWarning.apply(undefined,[format].concat(args));
	}
	};
	})();
	}
	
	module.exports=warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	function makeEmptyFunction(arg){
	return function(){
	return arg;
	};
	}
	
	
	
	
	
	
	var emptyFunction=function emptyFunction(){};
	
	emptyFunction.thatReturns=makeEmptyFunction;
	emptyFunction.thatReturnsFalse=makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue=makeEmptyFunction(true);
	emptyFunction.thatReturnsNull=makeEmptyFunction(null);
	emptyFunction.thatReturnsThis=function(){
	return this;
	};
	emptyFunction.thatReturnsArgument=function(arg){
	return arg;
	};
	
	module.exports=emptyFunction;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var canDefineProperty=false;
	if(process.env.NODE_ENV!=='production'){
	try{
	Object.defineProperty({},'x',{get:function get(){}});
	canDefineProperty=true;
	}catch(x){
	
	}
	}
	
	module.exports=canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(8);
	
	var ReactCurrentOwner=__webpack_require__(11);
	var ReactElement=__webpack_require__(10);
	
	var getIteratorFn=__webpack_require__(16);
	var invariant=__webpack_require__(9);
	var KeyEscapeUtils=__webpack_require__(17);
	var warning=__webpack_require__(12);
	
	var SEPARATOR='.';
	var SUBSEPARATOR=':';
	
	
	
	
	
	
	var didWarnAboutMaps=false;
	
	
	
	
	
	
	
	
	function getComponentKey(component,index){
	
	
	if(component&&(typeof component==='undefined'?'undefined':_typeof(component))==='object'&&component.key!=null){
	
	return KeyEscapeUtils.escape(component.key);
	}
	
	return index.toString(36);
	}
	
	
	
	
	
	
	
	
	
	function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){
	var type=typeof children==='undefined'?'undefined':_typeof(children);
	
	if(type==='undefined'||type==='boolean'){
	
	children=null;
	}
	
	if(children===null||type==='string'||type==='number'||ReactElement.isValidElement(children)){
	callback(traverseContext,children,
	
	
	nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);
	return 1;
	}
	
	var child;
	var nextName;
	var subtreeCount=0;
	var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;
	
	if(Array.isArray(children)){
	for(var i=0;i<children.length;i++){
	child=children[i];
	nextName=nextNamePrefix+getComponentKey(child,i);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}else{
	var iteratorFn=getIteratorFn(children);
	if(iteratorFn){
	var iterator=iteratorFn.call(children);
	var step;
	if(iteratorFn!==children.entries){
	var ii=0;
	while(!(step=iterator.next()).done){
	child=step.value;
	nextName=nextNamePrefix+getComponentKey(child,ii++);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}else{
	if(process.env.NODE_ENV!=='production'){
	var mapsAsChildrenAddendum='';
	if(ReactCurrentOwner.current){
	var mapsAsChildrenOwnerName=ReactCurrentOwner.current.getName();
	if(mapsAsChildrenOwnerName){
	mapsAsChildrenAddendum=' Check the render method of `'+mapsAsChildrenOwnerName+'`.';
	}
	}
	process.env.NODE_ENV!=='production'?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an '+'experimental feature that might be removed. Convert it to a '+'sequence / iterable of keyed ReactElements instead.%s',mapsAsChildrenAddendum):void 0;
	didWarnAboutMaps=true;
	}
	
	while(!(step=iterator.next()).done){
	var entry=step.value;
	if(entry){
	child=entry[1];
	nextName=nextNamePrefix+KeyEscapeUtils.escape(entry[0])+SUBSEPARATOR+getComponentKey(child,0);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}
	}
	}else if(type==='object'){
	var addendum='';
	if(process.env.NODE_ENV!=='production'){
	addendum=' If you meant to render a collection of children, use an array '+'instead or wrap the object using createFragment(object) from the '+'React add-ons.';
	if(children._isReactElement){
	addendum=' It looks like you\'re using an element created by a different '+'version of React. Make sure to use only one copy of React.';
	}
	if(ReactCurrentOwner.current){
	var name=ReactCurrentOwner.current.getName();
	if(name){
	addendum+=' Check the render method of `'+name+'`.';
	}
	}
	}
	var childrenString=String(children);
	 true?process.env.NODE_ENV!=='production'?invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):_prodInvariant('31',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):void 0;
	}
	}
	
	return subtreeCount;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function traverseAllChildren(children,callback,traverseContext){
	if(children==null){
	return 0;
	}
	
	return traverseAllChildrenImpl(children,'',callback,traverseContext);
	}
	
	module.exports=traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	var ITERATOR_SYMBOL=typeof Symbol==='function'&&(typeof Symbol==='function'?Symbol.iterator:'@@iterator');
	var FAUX_ITERATOR_SYMBOL='@@iterator';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function getIteratorFn(maybeIterable){
	var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);
	if(typeof iteratorFn==='function'){
	return iteratorFn;
	}
	}
	
	module.exports=getIteratorFn;

/***/ },
/* 17 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	function escape(key){
	var escapeRegex=/[=:]/g;
	var escaperLookup={
	'=':'=0',
	':':'=2'};
	
	var escapedString=(''+key).replace(escapeRegex,function(match){
	return escaperLookup[match];
	});
	
	return'$'+escapedString;
	}
	
	
	
	
	
	
	
	function unescape(key){
	var unescapeRegex=/(=0|=2)/g;
	var unescaperLookup={
	'=0':'=',
	'=2':':'};
	
	var keySubstring=key[0]==='.'&&key[1]==='$'?key.substring(2):key.substring(1);
	
	return(''+keySubstring).replace(unescapeRegex,function(match){
	return unescaperLookup[match];
	});
	}
	
	var KeyEscapeUtils={
	escape:escape,
	unescape:unescape};
	
	
	module.exports=KeyEscapeUtils;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(8);
	
	var ReactNoopUpdateQueue=__webpack_require__(19);
	
	var canDefineProperty=__webpack_require__(14);
	var emptyObject=__webpack_require__(20);
	var invariant=__webpack_require__(9);
	var warning=__webpack_require__(12);
	
	
	
	
	function ReactComponent(props,context,updater){
	this.props=props;
	this.context=context;
	this.refs=emptyObject;
	
	
	this.updater=updater||ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	ReactComponent.prototype.setState=function(partialState,callback){
	!((typeof partialState==='undefined'?'undefined':_typeof(partialState))==='object'||typeof partialState==='function'||partialState==null)?process.env.NODE_ENV!=='production'?invariant(false,'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'):_prodInvariant('85'):void 0;
	this.updater.enqueueSetState(this,partialState);
	if(callback){
	this.updater.enqueueCallback(this,callback,'setState');
	}
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	ReactComponent.prototype.forceUpdate=function(callback){
	this.updater.enqueueForceUpdate(this);
	if(callback){
	this.updater.enqueueCallback(this,callback,'forceUpdate');
	}
	};
	
	
	
	
	
	
	if(process.env.NODE_ENV!=='production'){
	var deprecatedAPIs={
	isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],
	replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).']};
	
	var defineDeprecationWarning=function defineDeprecationWarning(methodName,info){
	if(canDefineProperty){
	Object.defineProperty(ReactComponent.prototype,methodName,{
	get:function get(){
	process.env.NODE_ENV!=='production'?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):void 0;
	return undefined;
	}});
	
	}
	};
	for(var fnName in deprecatedAPIs){
	if(deprecatedAPIs.hasOwnProperty(fnName)){
	defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);
	}
	}
	}
	
	module.exports=ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var warning=__webpack_require__(12);
	
	function warnNoop(publicInstance,callerName){
	if(process.env.NODE_ENV!=='production'){
	var constructor=publicInstance.constructor;
	process.env.NODE_ENV!=='production'?warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,constructor&&(constructor.displayName||constructor.name)||'ReactClass'):void 0;
	}
	}
	
	
	
	
	var ReactNoopUpdateQueue={
	
	
	
	
	
	
	
	
	isMounted:function isMounted(publicInstance){
	return false;
	},
	
	
	
	
	
	
	
	
	
	enqueueCallback:function enqueueCallback(publicInstance,callback){},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	enqueueForceUpdate:function enqueueForceUpdate(publicInstance){
	warnNoop(publicInstance,'forceUpdate');
	},
	
	
	
	
	
	
	
	
	
	
	
	
	enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){
	warnNoop(publicInstance,'replaceState');
	},
	
	
	
	
	
	
	
	
	
	
	
	enqueueSetState:function enqueueSetState(publicInstance,partialState){
	warnNoop(publicInstance,'setState');
	}};
	
	
	module.exports=ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var emptyObject={};
	
	if(process.env.NODE_ENV!=='production'){
	Object.freeze(emptyObject);
	}
	
	module.exports=emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(5);
	
	var ReactComponent=__webpack_require__(18);
	var ReactNoopUpdateQueue=__webpack_require__(19);
	
	var emptyObject=__webpack_require__(20);
	
	
	
	
	function ReactPureComponent(props,context,updater){
	
	this.props=props;
	this.context=context;
	this.refs=emptyObject;
	
	
	this.updater=updater||ReactNoopUpdateQueue;
	}
	
	function ComponentDummy(){}
	ComponentDummy.prototype=ReactComponent.prototype;
	ReactPureComponent.prototype=new ComponentDummy();
	ReactPureComponent.prototype.constructor=ReactPureComponent;
	
	_assign(ReactPureComponent.prototype,ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent=true;
	
	module.exports=ReactPureComponent;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(8),
	_assign=__webpack_require__(5);
	
	var ReactComponent=__webpack_require__(18);
	var ReactElement=__webpack_require__(10);
	var ReactPropTypeLocations=__webpack_require__(23);
	var ReactPropTypeLocationNames=__webpack_require__(25);
	var ReactNoopUpdateQueue=__webpack_require__(19);
	
	var emptyObject=__webpack_require__(20);
	var invariant=__webpack_require__(9);
	var keyMirror=__webpack_require__(24);
	var keyOf=__webpack_require__(26);
	var warning=__webpack_require__(12);
	
	var MIXINS_KEY=keyOf({mixins:null});
	
	
	
	
	var SpecPolicy=keyMirror({
	
	
	
	DEFINE_ONCE:null,
	
	
	
	
	DEFINE_MANY:null,
	
	
	
	OVERRIDE_BASE:null,
	
	
	
	
	
	DEFINE_MANY_MERGED:null});
	
	
	var injectedMixins=[];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactClassInterface={
	
	
	
	
	
	
	
	mixins:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	statics:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	propTypes:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	contextTypes:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	childContextTypes:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	
	
	
	
	
	getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED,
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	getInitialState:SpecPolicy.DEFINE_MANY_MERGED,
	
	
	
	
	
	getChildContext:SpecPolicy.DEFINE_MANY_MERGED,
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	render:SpecPolicy.DEFINE_ONCE,
	
	
	
	
	
	
	
	
	
	
	componentWillMount:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	
	
	
	componentDidMount:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	componentWillReceiveProps:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	shouldComponentUpdate:SpecPolicy.DEFINE_ONCE,
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	componentWillUpdate:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	
	
	
	
	
	componentDidUpdate:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	
	
	
	
	componentWillUnmount:SpecPolicy.DEFINE_MANY,
	
	
	
	
	
	
	
	
	
	
	
	
	
	updateComponent:SpecPolicy.OVERRIDE_BASE};
	
	
	
	
	
	
	
	
	
	
	
	
	var RESERVED_SPEC_KEYS={
	displayName:function displayName(Constructor,_displayName){
	Constructor.displayName=_displayName;
	},
	mixins:function mixins(Constructor,_mixins){
	if(_mixins){
	for(var i=0;i<_mixins.length;i++){
	mixSpecIntoComponent(Constructor,_mixins[i]);
	}
	}
	},
	childContextTypes:function childContextTypes(Constructor,_childContextTypes){
	if(process.env.NODE_ENV!=='production'){
	validateTypeDef(Constructor,_childContextTypes,ReactPropTypeLocations.childContext);
	}
	Constructor.childContextTypes=_assign({},Constructor.childContextTypes,_childContextTypes);
	},
	contextTypes:function contextTypes(Constructor,_contextTypes){
	if(process.env.NODE_ENV!=='production'){
	validateTypeDef(Constructor,_contextTypes,ReactPropTypeLocations.context);
	}
	Constructor.contextTypes=_assign({},Constructor.contextTypes,_contextTypes);
	},
	
	
	
	
	getDefaultProps:function getDefaultProps(Constructor,_getDefaultProps){
	if(Constructor.getDefaultProps){
	Constructor.getDefaultProps=createMergedResultFunction(Constructor.getDefaultProps,_getDefaultProps);
	}else{
	Constructor.getDefaultProps=_getDefaultProps;
	}
	},
	propTypes:function propTypes(Constructor,_propTypes){
	if(process.env.NODE_ENV!=='production'){
	validateTypeDef(Constructor,_propTypes,ReactPropTypeLocations.prop);
	}
	Constructor.propTypes=_assign({},Constructor.propTypes,_propTypes);
	},
	statics:function statics(Constructor,_statics){
	mixStaticSpecIntoComponent(Constructor,_statics);
	},
	autobind:function autobind(){}};
	
	
	function validateTypeDef(Constructor,typeDef,location){
	for(var propName in typeDef){
	if(typeDef.hasOwnProperty(propName)){
	
	
	process.env.NODE_ENV!=='production'?warning(typeof typeDef[propName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',Constructor.displayName||'ReactClass',ReactPropTypeLocationNames[location],propName):void 0;
	}
	}
	}
	
	function validateMethodOverride(isAlreadyDefined,name){
	var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null;
	
	
	if(ReactClassMixin.hasOwnProperty(name)){
	!(specPolicy===SpecPolicy.OVERRIDE_BASE)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',name):_prodInvariant('73',name):void 0;
	}
	
	
	if(isAlreadyDefined){
	!(specPolicy===SpecPolicy.DEFINE_MANY||specPolicy===SpecPolicy.DEFINE_MANY_MERGED)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('74',name):void 0;
	}
	}
	
	
	
	
	
	function mixSpecIntoComponent(Constructor,spec){
	if(!spec){
	if(process.env.NODE_ENV!=='production'){
	var typeofSpec=typeof spec==='undefined'?'undefined':_typeof(spec);
	var isMixinValid=typeofSpec==='object'&&spec!==null;
	
	process.env.NODE_ENV!=='production'?warning(isMixinValid,'%s: You\'re attempting to include a mixin that is either null '+'or not an object. Check the mixins included by the component, '+'as well as any mixins they include themselves. '+'Expected object but got %s.',Constructor.displayName||'ReactClass',spec===null?null:typeofSpec):void 0;
	}
	
	return;
	}
	
	!(typeof spec!=='function')?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'):_prodInvariant('75'):void 0;
	!!ReactElement.isValidElement(spec)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.'):_prodInvariant('76'):void 0;
	
	var proto=Constructor.prototype;
	var autoBindPairs=proto.__reactAutoBindPairs;
	
	
	
	
	if(spec.hasOwnProperty(MIXINS_KEY)){
	RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);
	}
	
	for(var name in spec){
	if(!spec.hasOwnProperty(name)){
	continue;
	}
	
	if(name===MIXINS_KEY){
	
	continue;
	}
	
	var property=spec[name];
	var isAlreadyDefined=proto.hasOwnProperty(name);
	validateMethodOverride(isAlreadyDefined,name);
	
	if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){
	RESERVED_SPEC_KEYS[name](Constructor,property);
	}else{
	
	
	
	
	var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);
	var isFunction=typeof property==='function';
	var shouldAutoBind=isFunction&&!isReactClassMethod&&!isAlreadyDefined&&spec.autobind!==false;
	
	if(shouldAutoBind){
	autoBindPairs.push(name,property);
	proto[name]=property;
	}else{
	if(isAlreadyDefined){
	var specPolicy=ReactClassInterface[name];
	
	
	!(isReactClassMethod&&(specPolicy===SpecPolicy.DEFINE_MANY_MERGED||specPolicy===SpecPolicy.DEFINE_MANY))?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',specPolicy,name):_prodInvariant('77',specPolicy,name):void 0;
	
	
	
	if(specPolicy===SpecPolicy.DEFINE_MANY_MERGED){
	proto[name]=createMergedResultFunction(proto[name],property);
	}else if(specPolicy===SpecPolicy.DEFINE_MANY){
	proto[name]=createChainedFunction(proto[name],property);
	}
	}else{
	proto[name]=property;
	if(process.env.NODE_ENV!=='production'){
	
	
	if(typeof property==='function'&&spec.displayName){
	proto[name].displayName=spec.displayName+'_'+name;
	}
	}
	}
	}
	}
	}
	}
	
	function mixStaticSpecIntoComponent(Constructor,statics){
	if(!statics){
	return;
	}
	for(var name in statics){
	var property=statics[name];
	if(!statics.hasOwnProperty(name)){
	continue;
	}
	
	var isReserved=name in RESERVED_SPEC_KEYS;
	!!isReserved?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',name):_prodInvariant('78',name):void 0;
	
	var isInherited=name in Constructor;
	!!isInherited?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('79',name):void 0;
	Constructor[name]=property;
	}
	}
	
	
	
	
	
	
	
	
	function mergeIntoWithNoDuplicateKeys(one,two){
	!(one&&two&&(typeof one==='undefined'?'undefined':_typeof(one))==='object'&&(typeof two==='undefined'?'undefined':_typeof(two))==='object')?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):_prodInvariant('80'):void 0;
	
	for(var key in two){
	if(two.hasOwnProperty(key)){
	!(one[key]===undefined)?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',key):_prodInvariant('81',key):void 0;
	one[key]=two[key];
	}
	}
	return one;
	}
	
	
	
	
	
	
	
	
	
	function createMergedResultFunction(one,two){
	return function mergedResult(){
	var a=one.apply(this,arguments);
	var b=two.apply(this,arguments);
	if(a==null){
	return b;
	}else if(b==null){
	return a;
	}
	var c={};
	mergeIntoWithNoDuplicateKeys(c,a);
	mergeIntoWithNoDuplicateKeys(c,b);
	return c;
	};
	}
	
	
	
	
	
	
	
	
	
	function createChainedFunction(one,two){
	return function chainedFunction(){
	one.apply(this,arguments);
	two.apply(this,arguments);
	};
	}
	
	
	
	
	
	
	
	
	function bindAutoBindMethod(component,method){
	var boundMethod=method.bind(component);
	if(process.env.NODE_ENV!=='production'){
	boundMethod.__reactBoundContext=component;
	boundMethod.__reactBoundMethod=method;
	boundMethod.__reactBoundArguments=null;
	var componentName=component.constructor.displayName;
	var _bind=boundMethod.bind;
	boundMethod.bind=function(newThis){
	for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
	args[_key-1]=arguments[_key];
	}
	
	
	
	
	if(newThis!==component&&newThis!==null){
	process.env.NODE_ENV!=='production'?warning(false,'bind(): React component methods may only be bound to the '+'component instance. See %s',componentName):void 0;
	}else if(!args.length){
	process.env.NODE_ENV!=='production'?warning(false,'bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See %s',componentName):void 0;
	return boundMethod;
	}
	var reboundMethod=_bind.apply(boundMethod,arguments);
	reboundMethod.__reactBoundContext=component;
	reboundMethod.__reactBoundMethod=method;
	reboundMethod.__reactBoundArguments=args;
	return reboundMethod;
	};
	}
	return boundMethod;
	}
	
	
	
	
	
	
	function bindAutoBindMethods(component){
	var pairs=component.__reactAutoBindPairs;
	for(var i=0;i<pairs.length;i+=2){
	var autoBindKey=pairs[i];
	var method=pairs[i+1];
	component[autoBindKey]=bindAutoBindMethod(component,method);
	}
	}
	
	
	
	
	
	var ReactClassMixin={
	
	
	
	
	
	replaceState:function replaceState(newState,callback){
	this.updater.enqueueReplaceState(this,newState);
	if(callback){
	this.updater.enqueueCallback(this,callback,'replaceState');
	}
	},
	
	
	
	
	
	
	
	isMounted:function isMounted(){
	return this.updater.isMounted(this);
	}};
	
	
	var ReactClassComponent=function ReactClassComponent(){};
	_assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin);
	
	
	
	
	
	
	var ReactClass={
	
	
	
	
	
	
	
	
	
	createClass:function createClass(spec){
	var Constructor=function Constructor(props,context,updater){
	
	
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or '+'JSX instead. See: https://fb.me/react-legacyfactory'):void 0;
	}
	
	
	if(this.__reactAutoBindPairs.length){
	bindAutoBindMethods(this);
	}
	
	this.props=props;
	this.context=context;
	this.refs=emptyObject;
	this.updater=updater||ReactNoopUpdateQueue;
	
	this.state=null;
	
	
	
	
	var initialState=this.getInitialState?this.getInitialState():null;
	if(process.env.NODE_ENV!=='production'){
	
	if(initialState===undefined&&this.getInitialState._isMockFunction){
	
	
	initialState=null;
	}
	}
	!((typeof initialState==='undefined'?'undefined':_typeof(initialState))==='object'&&!Array.isArray(initialState))?process.env.NODE_ENV!=='production'?invariant(false,'%s.getInitialState(): must return an object or null',Constructor.displayName||'ReactCompositeComponent'):_prodInvariant('82',Constructor.displayName||'ReactCompositeComponent'):void 0;
	
	this.state=initialState;
	};
	Constructor.prototype=new ReactClassComponent();
	Constructor.prototype.constructor=Constructor;
	Constructor.prototype.__reactAutoBindPairs=[];
	
	injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));
	
	mixSpecIntoComponent(Constructor,spec);
	
	
	if(Constructor.getDefaultProps){
	Constructor.defaultProps=Constructor.getDefaultProps();
	}
	
	if(process.env.NODE_ENV!=='production'){
	
	
	
	
	if(Constructor.getDefaultProps){
	Constructor.getDefaultProps.isReactClassApproved={};
	}
	if(Constructor.prototype.getInitialState){
	Constructor.prototype.getInitialState.isReactClassApproved={};
	}
	}
	
	!Constructor.prototype.render?process.env.NODE_ENV!=='production'?invariant(false,'createClass(...): Class specification must implement a `render` method.'):_prodInvariant('83'):void 0;
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',spec.displayName||'A component'):void 0;
	process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',spec.displayName||'A component'):void 0;
	}
	
	
	for(var methodName in ReactClassInterface){
	if(!Constructor.prototype[methodName]){
	Constructor.prototype[methodName]=null;
	}
	}
	
	return Constructor;
	},
	
	injection:{
	injectMixin:function injectMixin(mixin){
	injectedMixins.push(mixin);
	}}};
	
	
	
	
	module.exports=ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var keyMirror=__webpack_require__(24);
	
	var ReactPropTypeLocations=keyMirror({
	prop:null,
	context:null,
	childContext:null});
	
	
	module.exports=ReactPropTypeLocations;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var invariant=__webpack_require__(9);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var keyMirror=function keyMirror(obj){
	var ret={};
	var key;
	!(obj instanceof Object&&!Array.isArray(obj))?process.env.NODE_ENV!=='production'?invariant(false,'keyMirror(...): Argument must be an object.'):invariant(false):void 0;
	for(key in obj){
	if(!obj.hasOwnProperty(key)){
	continue;
	}
	ret[key]=key;
	}
	return ret;
	};
	
	module.exports=keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactPropTypeLocationNames={};
	
	if(process.env.NODE_ENV!=='production'){
	ReactPropTypeLocationNames={
	prop:'prop',
	context:'context',
	childContext:'child context'};
	
	}
	
	module.exports=ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var keyOf=function keyOf(oneKeyObj){
	var key;
	for(key in oneKeyObj){
	if(!oneKeyObj.hasOwnProperty(key)){
	continue;
	}
	return key;
	}
	return null;
	};
	
	module.exports=keyOf;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactElement=__webpack_require__(10);
	
	
	
	
	
	
	var createDOMFactory=ReactElement.createFactory;
	if(process.env.NODE_ENV!=='production'){
	var ReactElementValidator=__webpack_require__(28);
	createDOMFactory=ReactElementValidator.createFactory;
	}
	
	
	
	
	
	
	
	var ReactDOMFactories={
	a:createDOMFactory('a'),
	abbr:createDOMFactory('abbr'),
	address:createDOMFactory('address'),
	area:createDOMFactory('area'),
	article:createDOMFactory('article'),
	aside:createDOMFactory('aside'),
	audio:createDOMFactory('audio'),
	b:createDOMFactory('b'),
	base:createDOMFactory('base'),
	bdi:createDOMFactory('bdi'),
	bdo:createDOMFactory('bdo'),
	big:createDOMFactory('big'),
	blockquote:createDOMFactory('blockquote'),
	body:createDOMFactory('body'),
	br:createDOMFactory('br'),
	button:createDOMFactory('button'),
	canvas:createDOMFactory('canvas'),
	caption:createDOMFactory('caption'),
	cite:createDOMFactory('cite'),
	code:createDOMFactory('code'),
	col:createDOMFactory('col'),
	colgroup:createDOMFactory('colgroup'),
	data:createDOMFactory('data'),
	datalist:createDOMFactory('datalist'),
	dd:createDOMFactory('dd'),
	del:createDOMFactory('del'),
	details:createDOMFactory('details'),
	dfn:createDOMFactory('dfn'),
	dialog:createDOMFactory('dialog'),
	div:createDOMFactory('div'),
	dl:createDOMFactory('dl'),
	dt:createDOMFactory('dt'),
	em:createDOMFactory('em'),
	embed:createDOMFactory('embed'),
	fieldset:createDOMFactory('fieldset'),
	figcaption:createDOMFactory('figcaption'),
	figure:createDOMFactory('figure'),
	footer:createDOMFactory('footer'),
	form:createDOMFactory('form'),
	h1:createDOMFactory('h1'),
	h2:createDOMFactory('h2'),
	h3:createDOMFactory('h3'),
	h4:createDOMFactory('h4'),
	h5:createDOMFactory('h5'),
	h6:createDOMFactory('h6'),
	head:createDOMFactory('head'),
	header:createDOMFactory('header'),
	hgroup:createDOMFactory('hgroup'),
	hr:createDOMFactory('hr'),
	html:createDOMFactory('html'),
	i:createDOMFactory('i'),
	iframe:createDOMFactory('iframe'),
	img:createDOMFactory('img'),
	input:createDOMFactory('input'),
	ins:createDOMFactory('ins'),
	kbd:createDOMFactory('kbd'),
	keygen:createDOMFactory('keygen'),
	label:createDOMFactory('label'),
	legend:createDOMFactory('legend'),
	li:createDOMFactory('li'),
	link:createDOMFactory('link'),
	main:createDOMFactory('main'),
	map:createDOMFactory('map'),
	mark:createDOMFactory('mark'),
	menu:createDOMFactory('menu'),
	menuitem:createDOMFactory('menuitem'),
	meta:createDOMFactory('meta'),
	meter:createDOMFactory('meter'),
	nav:createDOMFactory('nav'),
	noscript:createDOMFactory('noscript'),
	object:createDOMFactory('object'),
	ol:createDOMFactory('ol'),
	optgroup:createDOMFactory('optgroup'),
	option:createDOMFactory('option'),
	output:createDOMFactory('output'),
	p:createDOMFactory('p'),
	param:createDOMFactory('param'),
	picture:createDOMFactory('picture'),
	pre:createDOMFactory('pre'),
	progress:createDOMFactory('progress'),
	q:createDOMFactory('q'),
	rp:createDOMFactory('rp'),
	rt:createDOMFactory('rt'),
	ruby:createDOMFactory('ruby'),
	s:createDOMFactory('s'),
	samp:createDOMFactory('samp'),
	script:createDOMFactory('script'),
	section:createDOMFactory('section'),
	select:createDOMFactory('select'),
	small:createDOMFactory('small'),
	source:createDOMFactory('source'),
	span:createDOMFactory('span'),
	strong:createDOMFactory('strong'),
	style:createDOMFactory('style'),
	sub:createDOMFactory('sub'),
	summary:createDOMFactory('summary'),
	sup:createDOMFactory('sup'),
	table:createDOMFactory('table'),
	tbody:createDOMFactory('tbody'),
	td:createDOMFactory('td'),
	textarea:createDOMFactory('textarea'),
	tfoot:createDOMFactory('tfoot'),
	th:createDOMFactory('th'),
	thead:createDOMFactory('thead'),
	time:createDOMFactory('time'),
	title:createDOMFactory('title'),
	tr:createDOMFactory('tr'),
	track:createDOMFactory('track'),
	u:createDOMFactory('u'),
	ul:createDOMFactory('ul'),
	'var':createDOMFactory('var'),
	video:createDOMFactory('video'),
	wbr:createDOMFactory('wbr'),
	
	
	circle:createDOMFactory('circle'),
	clipPath:createDOMFactory('clipPath'),
	defs:createDOMFactory('defs'),
	ellipse:createDOMFactory('ellipse'),
	g:createDOMFactory('g'),
	image:createDOMFactory('image'),
	line:createDOMFactory('line'),
	linearGradient:createDOMFactory('linearGradient'),
	mask:createDOMFactory('mask'),
	path:createDOMFactory('path'),
	pattern:createDOMFactory('pattern'),
	polygon:createDOMFactory('polygon'),
	polyline:createDOMFactory('polyline'),
	radialGradient:createDOMFactory('radialGradient'),
	rect:createDOMFactory('rect'),
	stop:createDOMFactory('stop'),
	svg:createDOMFactory('svg'),
	text:createDOMFactory('text'),
	tspan:createDOMFactory('tspan')};
	
	
	module.exports=ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var ReactCurrentOwner=__webpack_require__(11);
	var ReactComponentTreeHook=__webpack_require__(29);
	var ReactElement=__webpack_require__(10);
	var ReactPropTypeLocations=__webpack_require__(23);
	
	var checkReactTypeSpec=__webpack_require__(30);
	
	var canDefineProperty=__webpack_require__(14);
	var getIteratorFn=__webpack_require__(16);
	var warning=__webpack_require__(12);
	
	function getDeclarationErrorAddendum(){
	if(ReactCurrentOwner.current){
	var name=ReactCurrentOwner.current.getName();
	if(name){
	return' Check the render method of `'+name+'`.';
	}
	}
	return'';
	}
	
	
	
	
	
	
	var ownerHasKeyUseWarning={};
	
	function getCurrentComponentErrorInfo(parentType){
	var info=getDeclarationErrorAddendum();
	
	if(!info){
	var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;
	if(parentName){
	info=' Check the top-level render call using <'+parentName+'>.';
	}
	}
	return info;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	function validateExplicitKey(element,parentType){
	if(!element._store||element._store.validated||element.key!=null){
	return;
	}
	element._store.validated=true;
	
	var memoizer=ownerHasKeyUseWarning.uniqueKey||(ownerHasKeyUseWarning.uniqueKey={});
	
	var currentComponentErrorInfo=getCurrentComponentErrorInfo(parentType);
	if(memoizer[currentComponentErrorInfo]){
	return;
	}
	memoizer[currentComponentErrorInfo]=true;
	
	
	
	
	var childOwner='';
	if(element&&element._owner&&element._owner!==ReactCurrentOwner.current){
	
	childOwner=' It was passed a child from '+element._owner.getName()+'.';
	}
	
	process.env.NODE_ENV!=='production'?warning(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s See https://fb.me/react-warning-keys for more information.%s',currentComponentErrorInfo,childOwner,ReactComponentTreeHook.getCurrentStackAddendum(element)):void 0;
	}
	
	
	
	
	
	
	
	
	
	
	function validateChildKeys(node,parentType){
	if((typeof node==='undefined'?'undefined':_typeof(node))!=='object'){
	return;
	}
	if(Array.isArray(node)){
	for(var i=0;i<node.length;i++){
	var child=node[i];
	if(ReactElement.isValidElement(child)){
	validateExplicitKey(child,parentType);
	}
	}
	}else if(ReactElement.isValidElement(node)){
	
	if(node._store){
	node._store.validated=true;
	}
	}else if(node){
	var iteratorFn=getIteratorFn(node);
	
	if(iteratorFn){
	if(iteratorFn!==node.entries){
	var iterator=iteratorFn.call(node);
	var step;
	while(!(step=iterator.next()).done){
	if(ReactElement.isValidElement(step.value)){
	validateExplicitKey(step.value,parentType);
	}
	}
	}
	}
	}
	}
	
	
	
	
	
	
	
	function validatePropTypes(element){
	var componentClass=element.type;
	if(typeof componentClass!=='function'){
	return;
	}
	var name=componentClass.displayName||componentClass.name;
	if(componentClass.propTypes){
	checkReactTypeSpec(componentClass.propTypes,element.props,ReactPropTypeLocations.prop,name,element,null);
	}
	if(typeof componentClass.getDefaultProps==='function'){
	process.env.NODE_ENV!=='production'?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.'):void 0;
	}
	}
	
	var ReactElementValidator={
	
	createElement:function createElement(type,props,children){
	var validType=typeof type==='string'||typeof type==='function';
	
	
	if(!validType){
	process.env.NODE_ENV!=='production'?warning(false,'React.createElement: type should not be null, undefined, boolean, or '+'number. It should be a string (for DOM elements) or a ReactClass '+'(for composite components).%s',getDeclarationErrorAddendum()):void 0;
	}
	
	var element=ReactElement.createElement.apply(this,arguments);
	
	
	
	if(element==null){
	return element;
	}
	
	
	
	
	
	
	if(validType){
	for(var i=2;i<arguments.length;i++){
	validateChildKeys(arguments[i],type);
	}
	}
	
	validatePropTypes(element);
	
	return element;
	},
	
	createFactory:function createFactory(type){
	var validatedFactory=ReactElementValidator.createElement.bind(null,type);
	
	validatedFactory.type=type;
	
	if(process.env.NODE_ENV!=='production'){
	if(canDefineProperty){
	Object.defineProperty(validatedFactory,'type',{
	enumerable:false,
	get:function get(){
	process.env.NODE_ENV!=='production'?warning(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.'):void 0;
	Object.defineProperty(this,'type',{
	value:type});
	
	return type;
	}});
	
	}
	}
	
	return validatedFactory;
	},
	
	cloneElement:function cloneElement(element,props,children){
	var newElement=ReactElement.cloneElement.apply(this,arguments);
	for(var i=2;i<arguments.length;i++){
	validateChildKeys(arguments[i],newElement.type);
	}
	validatePropTypes(newElement);
	return newElement;
	}};
	
	
	
	module.exports=ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(8);
	
	var ReactCurrentOwner=__webpack_require__(11);
	
	var invariant=__webpack_require__(9);
	var warning=__webpack_require__(12);
	
	function isNative(fn){
	
	var funcToString=Function.prototype.toString;
	var hasOwnProperty=Object.prototype.hasOwnProperty;
	var reIsNative=RegExp('^'+funcToString.
	
	call(hasOwnProperty).
	
	replace(/[\\^$.*+?()[\]{}|]/g,'\\$&').
	
	replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');
	try{
	var source=funcToString.call(fn);
	return reIsNative.test(source);
	}catch(err){
	return false;
	}
	}
	
	var canUseCollections=
	
	typeof Array.from==='function'&&
	
	typeof Map==='function'&&isNative(Map)&&
	
	Map.prototype!=null&&typeof Map.prototype.keys==='function'&&isNative(Map.prototype.keys)&&
	
	typeof Set==='function'&&isNative(Set)&&
	
	Set.prototype!=null&&typeof Set.prototype.keys==='function'&&isNative(Set.prototype.keys);
	
	var itemMap;
	var rootIDSet;
	
	var itemByKey;
	var rootByKey;
	
	if(canUseCollections){
	itemMap=new Map();
	rootIDSet=new Set();
	}else{
	itemByKey={};
	rootByKey={};
	}
	
	var unmountedIDs=[];
	
	
	
	function getKeyFromID(id){
	return'.'+id;
	}
	function getIDFromKey(key){
	return parseInt(key.substr(1),10);
	}
	
	function get(id){
	if(canUseCollections){
	return itemMap.get(id);
	}else{
	var key=getKeyFromID(id);
	return itemByKey[key];
	}
	}
	
	function remove(id){
	if(canUseCollections){
	itemMap['delete'](id);
	}else{
	var key=getKeyFromID(id);
	delete itemByKey[key];
	}
	}
	
	function create(id,element,parentID){
	var item={
	element:element,
	parentID:parentID,
	text:null,
	childIDs:[],
	isMounted:false,
	updateCount:0};
	
	
	if(canUseCollections){
	itemMap.set(id,item);
	}else{
	var key=getKeyFromID(id);
	itemByKey[key]=item;
	}
	}
	
	function addRoot(id){
	if(canUseCollections){
	rootIDSet.add(id);
	}else{
	var key=getKeyFromID(id);
	rootByKey[key]=true;
	}
	}
	
	function removeRoot(id){
	if(canUseCollections){
	rootIDSet['delete'](id);
	}else{
	var key=getKeyFromID(id);
	delete rootByKey[key];
	}
	}
	
	function getRegisteredIDs(){
	if(canUseCollections){
	return Array.from(itemMap.keys());
	}else{
	return Object.keys(itemByKey).map(getIDFromKey);
	}
	}
	
	function getRootIDs(){
	if(canUseCollections){
	return Array.from(rootIDSet.keys());
	}else{
	return Object.keys(rootByKey).map(getIDFromKey);
	}
	}
	
	function purgeDeep(id){
	var item=get(id);
	if(item){
	var childIDs=item.childIDs;
	
	remove(id);
	childIDs.forEach(purgeDeep);
	}
	}
	
	function describeComponentFrame(name,source,ownerName){
	return'\n    in '+name+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');
	}
	
	function _getDisplayName(element){
	if(element==null){
	return'#empty';
	}else if(typeof element==='string'||typeof element==='number'){
	return'#text';
	}else if(typeof element.type==='string'){
	return element.type;
	}else{
	return element.type.displayName||element.type.name||'Unknown';
	}
	}
	
	function describeID(id){
	var name=ReactComponentTreeHook.getDisplayName(id);
	var element=ReactComponentTreeHook.getElement(id);
	var ownerID=ReactComponentTreeHook.getOwnerID(id);
	var ownerName;
	if(ownerID){
	ownerName=ReactComponentTreeHook.getDisplayName(ownerID);
	}
	process.env.NODE_ENV!=='production'?warning(element,'ReactComponentTreeHook: Missing React element for debugID %s when '+'building stack',id):void 0;
	return describeComponentFrame(name,element&&element._source,ownerName);
	}
	
	var ReactComponentTreeHook={
	onSetChildren:function onSetChildren(id,nextChildIDs){
	var item=get(id);
	item.childIDs=nextChildIDs;
	
	for(var i=0;i<nextChildIDs.length;i++){
	var nextChildID=nextChildIDs[i];
	var nextChild=get(nextChildID);
	!nextChild?process.env.NODE_ENV!=='production'?invariant(false,'Expected hook events to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('140'):void 0;
	!(nextChild.childIDs!=null||_typeof(nextChild.element)!=='object'||nextChild.element==null)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().'):_prodInvariant('141'):void 0;
	!nextChild.isMounted?process.env.NODE_ENV!=='production'?invariant(false,'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('71'):void 0;
	if(nextChild.parentID==null){
	nextChild.parentID=id;
	
	
	
	}
	!(nextChild.parentID===id)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',nextChildID,nextChild.parentID,id):_prodInvariant('142',nextChildID,nextChild.parentID,id):void 0;
	}
	},
	onBeforeMountComponent:function onBeforeMountComponent(id,element,parentID){
	create(id,element,parentID);
	},
	onBeforeUpdateComponent:function onBeforeUpdateComponent(id,element){
	var item=get(id);
	if(!item||!item.isMounted){
	
	
	return;
	}
	item.element=element;
	},
	onMountComponent:function onMountComponent(id){
	var item=get(id);
	item.isMounted=true;
	var isRoot=item.parentID===0;
	if(isRoot){
	addRoot(id);
	}
	},
	onUpdateComponent:function onUpdateComponent(id){
	var item=get(id);
	if(!item||!item.isMounted){
	
	
	return;
	}
	item.updateCount++;
	},
	onUnmountComponent:function onUnmountComponent(id){
	var item=get(id);
	if(item){
	
	
	
	
	
	item.isMounted=false;
	var isRoot=item.parentID===0;
	if(isRoot){
	removeRoot(id);
	}
	}
	unmountedIDs.push(id);
	},
	purgeUnmountedComponents:function purgeUnmountedComponents(){
	if(ReactComponentTreeHook._preventPurging){
	
	return;
	}
	
	for(var i=0;i<unmountedIDs.length;i++){
	var id=unmountedIDs[i];
	purgeDeep(id);
	}
	unmountedIDs.length=0;
	},
	isMounted:function isMounted(id){
	var item=get(id);
	return item?item.isMounted:false;
	},
	getCurrentStackAddendum:function getCurrentStackAddendum(topElement){
	var info='';
	if(topElement){
	var type=topElement.type;
	var name=typeof type==='function'?type.displayName||type.name:type;
	var owner=topElement._owner;
	info+=describeComponentFrame(name||'Unknown',topElement._source,owner&&owner.getName());
	}
	
	var currentOwner=ReactCurrentOwner.current;
	var id=currentOwner&&currentOwner._debugID;
	
	info+=ReactComponentTreeHook.getStackAddendumByID(id);
	return info;
	},
	getStackAddendumByID:function getStackAddendumByID(id){
	var info='';
	while(id){
	info+=describeID(id);
	id=ReactComponentTreeHook.getParentID(id);
	}
	return info;
	},
	getChildIDs:function getChildIDs(id){
	var item=get(id);
	return item?item.childIDs:[];
	},
	getDisplayName:function getDisplayName(id){
	var element=ReactComponentTreeHook.getElement(id);
	if(!element){
	return null;
	}
	return _getDisplayName(element);
	},
	getElement:function getElement(id){
	var item=get(id);
	return item?item.element:null;
	},
	getOwnerID:function getOwnerID(id){
	var element=ReactComponentTreeHook.getElement(id);
	if(!element||!element._owner){
	return null;
	}
	return element._owner._debugID;
	},
	getParentID:function getParentID(id){
	var item=get(id);
	return item?item.parentID:null;
	},
	getSource:function getSource(id){
	var item=get(id);
	var element=item?item.element:null;
	var source=element!=null?element._source:null;
	return source;
	},
	getText:function getText(id){
	var element=ReactComponentTreeHook.getElement(id);
	if(typeof element==='string'){
	return element;
	}else if(typeof element==='number'){
	return''+element;
	}else{
	return null;
	}
	},
	getUpdateCount:function getUpdateCount(id){
	var item=get(id);
	return item?item.updateCount:0;
	},
	
	
	getRegisteredIDs:getRegisteredIDs,
	
	getRootIDs:getRootIDs};
	
	
	module.exports=ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(8);
	
	var ReactPropTypeLocationNames=__webpack_require__(25);
	var ReactPropTypesSecret=__webpack_require__(31);
	
	var invariant=__webpack_require__(9);
	var warning=__webpack_require__(12);
	
	var ReactComponentTreeHook;
	
	if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){
	
	
	
	
	
	ReactComponentTreeHook=__webpack_require__(29);
	}
	
	var loggedTypeFailures={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	function checkReactTypeSpec(typeSpecs,values,location,componentName,element,debugID){
	for(var typeSpecName in typeSpecs){
	if(typeSpecs.hasOwnProperty(typeSpecName)){
	var error;
	
	
	
	try{
	
	
	!(typeof typeSpecs[typeSpecName]==='function')?process.env.NODE_ENV!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):_prodInvariant('84',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):void 0;
	error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);
	}catch(ex){
	error=ex;
	}
	process.env.NODE_ENV!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName,typeof error==='undefined'?'undefined':_typeof(error)):void 0;
	if(error instanceof Error&&!(error.message in loggedTypeFailures)){
	
	
	loggedTypeFailures[error.message]=true;
	
	var componentStackInfo='';
	
	if(process.env.NODE_ENV!=='production'){
	if(!ReactComponentTreeHook){
	ReactComponentTreeHook=__webpack_require__(29);
	}
	if(debugID!==null){
	componentStackInfo=ReactComponentTreeHook.getStackAddendumByID(debugID);
	}else if(element!==null){
	componentStackInfo=ReactComponentTreeHook.getCurrentStackAddendum(element);
	}
	}
	
	process.env.NODE_ENV!=='production'?warning(false,'Failed %s type: %s%s',location,error.message,componentStackInfo):void 0;
	}
	}
	}
	}
	
	module.exports=checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports=ReactPropTypesSecret;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var ReactElement=__webpack_require__(10);
	var ReactPropTypeLocationNames=__webpack_require__(25);
	var ReactPropTypesSecret=__webpack_require__(31);
	
	var emptyFunction=__webpack_require__(13);
	var getIteratorFn=__webpack_require__(16);
	var warning=__webpack_require__(12);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ANONYMOUS='<<anonymous>>';
	
	var ReactPropTypes={
	array:createPrimitiveTypeChecker('array'),
	bool:createPrimitiveTypeChecker('boolean'),
	func:createPrimitiveTypeChecker('function'),
	number:createPrimitiveTypeChecker('number'),
	object:createPrimitiveTypeChecker('object'),
	string:createPrimitiveTypeChecker('string'),
	symbol:createPrimitiveTypeChecker('symbol'),
	
	any:createAnyTypeChecker(),
	arrayOf:createArrayOfTypeChecker,
	element:createElementTypeChecker(),
	instanceOf:createInstanceTypeChecker,
	node:createNodeChecker(),
	objectOf:createObjectOfTypeChecker,
	oneOf:createEnumTypeChecker,
	oneOfType:createUnionTypeChecker,
	shape:createShapeTypeChecker};
	
	
	
	
	
	
	
	function is(x,y){
	
	if(x===y){
	
	
	return x!==0||1/x===1/y;
	}else{
	
	return x!==x&&y!==y;
	}
	}
	
	
	
	
	
	
	
	
	
	function PropTypeError(message){
	this.message=message;
	this.stack='';
	}
	
	PropTypeError.prototype=Error.prototype;
	
	function createChainableTypeChecker(validate){
	if(process.env.NODE_ENV!=='production'){
	var manualPropTypeCallCache={};
	}
	function checkType(isRequired,props,propName,componentName,location,propFullName,secret){
	componentName=componentName||ANONYMOUS;
	propFullName=propFullName||propName;
	if(process.env.NODE_ENV!=='production'){
	if(secret!==ReactPropTypesSecret&&typeof console!=='undefined'){
	var cacheKey=componentName+':'+propName;
	if(!manualPropTypeCallCache[cacheKey]){
	process.env.NODE_ENV!=='production'?warning(false,'You are manually calling a React.PropTypes validation '+'function for the `%s` prop on `%s`. This is deprecated '+'and will not work in the next major version. You may be '+'seeing this warning due to a third-party PropTypes library. '+'See https://fb.me/react-warning-dont-call-proptypes for details.',propFullName,componentName):void 0;
	manualPropTypeCallCache[cacheKey]=true;
	}
	}
	}
	if(props[propName]==null){
	var locationName=ReactPropTypeLocationNames[location];
	if(isRequired){
	return new PropTypeError('Required '+locationName+' `'+propFullName+'` was not specified in '+('`'+componentName+'`.'));
	}
	return null;
	}else{
	return validate(props,propName,componentName,location,propFullName);
	}
	}
	
	var chainedCheckType=checkType.bind(null,false);
	chainedCheckType.isRequired=checkType.bind(null,true);
	
	return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType){
	function validate(props,propName,componentName,location,propFullName,secret){
	var propValue=props[propName];
	var propType=getPropType(propValue);
	if(propType!==expectedType){
	var locationName=ReactPropTypeLocationNames[location];
	
	
	
	var preciseType=getPreciseType(propValue);
	
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker(){
	return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}
	
	function createArrayOfTypeChecker(typeChecker){
	function validate(props,propName,componentName,location,propFullName){
	if(typeof typeChecker!=='function'){
	return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');
	}
	var propValue=props[propName];
	if(!Array.isArray(propValue)){
	var locationName=ReactPropTypeLocationNames[location];
	var propType=getPropType(propValue);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));
	}
	for(var i=0;i<propValue.length;i++){
	var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);
	if(error instanceof Error){
	return error;
	}
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker(){
	function validate(props,propName,componentName,location,propFullName){
	var propValue=props[propName];
	if(!ReactElement.isValidElement(propValue)){
	var locationName=ReactPropTypeLocationNames[location];
	var propType=getPropType(propValue);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass){
	function validate(props,propName,componentName,location,propFullName){
	if(!(props[propName]instanceof expectedClass)){
	var locationName=ReactPropTypeLocationNames[location];
	var expectedClassName=expectedClass.name||ANONYMOUS;
	var actualClassName=getClassName(props[propName]);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues){
	if(!Array.isArray(expectedValues)){
	process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOf, expected an instance of array.'):void 0;
	return emptyFunction.thatReturnsNull;
	}
	
	function validate(props,propName,componentName,location,propFullName){
	var propValue=props[propName];
	for(var i=0;i<expectedValues.length;i++){
	if(is(propValue,expectedValues[i])){
	return null;
	}
	}
	
	var locationName=ReactPropTypeLocationNames[location];
	var valuesString=JSON.stringify(expectedValues);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));
	}
	return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker){
	function validate(props,propName,componentName,location,propFullName){
	if(typeof typeChecker!=='function'){
	return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');
	}
	var propValue=props[propName];
	var propType=getPropType(propValue);
	if(propType!=='object'){
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));
	}
	for(var key in propValue){
	if(propValue.hasOwnProperty(key)){
	var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);
	if(error instanceof Error){
	return error;
	}
	}
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers){
	if(!Array.isArray(arrayOfTypeCheckers)){
	process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOfType, expected an instance of array.'):void 0;
	return emptyFunction.thatReturnsNull;
	}
	
	function validate(props,propName,componentName,location,propFullName){
	for(var i=0;i<arrayOfTypeCheckers.length;i++){
	var checker=arrayOfTypeCheckers[i];
	if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){
	return null;
	}
	}
	
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));
	}
	return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker(){
	function validate(props,propName,componentName,location,propFullName){
	if(!isNode(props[propName])){
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes){
	function validate(props,propName,componentName,location,propFullName){
	var propValue=props[propName];
	var propType=getPropType(propValue);
	if(propType!=='object'){
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));
	}
	for(var key in shapeTypes){
	var checker=shapeTypes[key];
	if(!checker){
	continue;
	}
	var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);
	if(error){
	return error;
	}
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function isNode(propValue){
	switch(typeof propValue==='undefined'?'undefined':_typeof(propValue)){
	case'number':
	case'string':
	case'undefined':
	return true;
	case'boolean':
	return!propValue;
	case'object':
	if(Array.isArray(propValue)){
	return propValue.every(isNode);
	}
	if(propValue===null||ReactElement.isValidElement(propValue)){
	return true;
	}
	
	var iteratorFn=getIteratorFn(propValue);
	if(iteratorFn){
	var iterator=iteratorFn.call(propValue);
	var step;
	if(iteratorFn!==propValue.entries){
	while(!(step=iterator.next()).done){
	if(!isNode(step.value)){
	return false;
	}
	}
	}else{
	
	while(!(step=iterator.next()).done){
	var entry=step.value;
	if(entry){
	if(!isNode(entry[1])){
	return false;
	}
	}
	}
	}
	}else{
	return false;
	}
	
	return true;
	default:
	return false;}
	
	}
	
	function isSymbol(propType,propValue){
	
	if(propType==='symbol'){
	return true;
	}
	
	
	if(propValue['@@toStringTag']==='Symbol'){
	return true;
	}
	
	
	if(typeof Symbol==='function'&&propValue instanceof Symbol){
	return true;
	}
	
	return false;
	}
	
	
	function getPropType(propValue){
	var propType=typeof propValue==='undefined'?'undefined':_typeof(propValue);
	if(Array.isArray(propValue)){
	return'array';
	}
	if(propValue instanceof RegExp){
	
	
	
	return'object';
	}
	if(isSymbol(propType,propValue)){
	return'symbol';
	}
	return propType;
	}
	
	
	
	function getPreciseType(propValue){
	var propType=getPropType(propValue);
	if(propType==='object'){
	if(propValue instanceof Date){
	return'date';
	}else if(propValue instanceof RegExp){
	return'regexp';
	}
	}
	return propType;
	}
	
	
	function getClassName(propValue){
	if(!propValue.constructor||!propValue.constructor.name){
	return ANONYMOUS;
	}
	return propValue.constructor.name;
	}
	
	module.exports=ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	module.exports='15.3.1';

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(8);
	
	var ReactElement=__webpack_require__(10);
	
	var invariant=__webpack_require__(9);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function onlyChild(children){
	!ReactElement.isValidElement(children)?process.env.NODE_ENV!=='production'?invariant(false,'React.Children.only expected to receive a single React element child.'):_prodInvariant('143'):void 0;
	return children;
	}
	
	module.exports=onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("react-native");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _reactNative=__webpack_require__(35);var _reactNative2=_interopRequireDefault(_reactNative);
	
	var _actions=__webpack_require__(37);
	
	
	var _reducer=__webpack_require__(38);var _reducer2=_interopRequireDefault(_reducer);
	var _Animations=__webpack_require__(39);var _Animations2=_interopRequireDefault(_Animations);
	var _reactRedux=__webpack_require__(41);
	var _redux=__webpack_require__(48);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var View=_reactNative2.default.View;var Navigator=_reactNative2.default.Navigator;var Text=_reactNative2.default.Text;var TouchableWithoutFeedback=_reactNative2.default.TouchableWithoutFeedback;var StyleSheet=_reactNative2.default.StyleSheet;var
	
	
	Schema=function(_React$Component){_inherits(Schema,_React$Component);function Schema(){_classCallCheck(this,Schema);return _possibleConstructorReturn(this,(Schema.__proto__||Object.getPrototypeOf(Schema)).apply(this,arguments));}_createClass(Schema,[{key:'className',value:function className()
	{
	return"Schema";
	}},{key:'render',value:function render()
	{
	return null;
	}}]);return Schema;}(_react2.default.Component);var
	
	
	
	Action=function(_React$Component2){_inherits(Action,_React$Component2);function Action(){_classCallCheck(this,Action);return _possibleConstructorReturn(this,(Action.__proto__||Object.getPrototypeOf(Action)).apply(this,arguments));}_createClass(Action,[{key:'className',value:function className()
	{
	return"Action";
	}},{key:'render',value:function render()
	{
	return null;
	}}]);return Action;}(_react2.default.Component);var
	
	
	
	Route=function(_React$Component3){_inherits(Route,_React$Component3);function Route(){_classCallCheck(this,Route);return _possibleConstructorReturn(this,(Route.__proto__||Object.getPrototypeOf(Route)).apply(this,arguments));}_createClass(Route,[{key:'className',value:function className()
	{
	return"Route";
	}},{key:'render',value:function render()
	{
	return null;
	}}]);return Route;}(_react2.default.Component);var
	
	
	
	Router=function(_React$Component4){_inherits(Router,_React$Component4);
	function Router(props){_classCallCheck(this,Router);var _this4=_possibleConstructorReturn(this,(Router.__proto__||Object.getPrototypeOf(Router)).call(this,
	props));
	_this4.routes={};
	_this4.schemas={};var
	dispatch=props.dispatch;
	if(!dispatch){
	throw new Error("No redux dispatch is provided to Router!");
	}
	
	var self=_this4;
	_this4.initial=props.initial;
	var RouterActions=props.actions||_actions.Actions;
	
	_react2.default.Children.forEach(props.children,function(child,index){
	var name=child.props.name;
	if(!name){
	throw new Error("Name is not defined for "+child.type.prototype.className());
	}
	if(child.type.prototype.className()=="Schema"){
	self.schemas[name]=child.props;
	}else if(child.type.prototype.className()=="Route"){
	if(child.props.initial||!self.initial){
	self.initial=name;
	}
	if(!RouterActions[name]){
	RouterActions[name]=function(data){
	if((typeof data==='undefined'?'undefined':_typeof(data))!='object'){
	data={data:data};
	}
	var args={name:name,data:data};
	var action=child.props.type||'push';
	dispatch(_actions.CoreActions[action](args));
	};
	}
	self.routes[name]=child.props;
	if(!child.props.component&&!child.props.children){
	console.error("No route component is defined for name: "+name);
	return;
	}
	
	}else if(child.type.prototype.className()=="Action"){
	
	if(!RouterActions[name]){
	RouterActions[name]=function(data){
	var props=self.extend({},self.props);
	props=self.extend(props,child.props);
	dispatch(_actions.CoreActions.custom({name:name,props:props,data:data}));
	};
	}
	}
	});
	var dispatched=(0,_redux.bindActionCreators)(_actions.CoreActions,dispatch);
	for(var i in dispatched){
	RouterActions[i]=dispatched[i];}
	_this4.routerActions=RouterActions;
	_this4.initialRoute=_this4.routes[_this4.initial]||console.error("No initial route "+_this4.initial);
	_this4.state={initial:_this4.initial};return _this4;
	}_createClass(Router,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(
	
	props){
	if(props.mode){
	this.onChange(props);
	}
	}},{key:'onChange',value:function onChange(
	
	page){
	if(page.mode==_actions.PUSH||page.mode==_actions.REPLACE){
	var route=this.routes[page.currentRoute];
	if(!route){
	console.error("No route is defined for name: "+page.currentRoute);
	return;
	}
	
	if(route.schema=='popup'){
	var element=_react2.default.createElement(route.component,_extends({},route,page.data,{dispatch:this.props.dispatch,routes:this.routerActions}));
	this.setState({modal:element});
	}else{
	if(page.mode==_actions.REPLACE){
	this.refs.nav.replace(this.getRoute(route,page.data));
	}else{
	this.refs.nav.push(this.getRoute(route,page.data));
	}
	}
	}
	if(page.mode==_actions.POP){
	var routes=this.refs.nav.getCurrentRoutes();
	var num=page.num||routes.length-page.routes.length;
	
	if(num<routes.length){
	this.refs.nav.popToRoute(routes[routes.length-1-num]);
	}else{
	if(this.props.onExit){
	this.props.onExit(routes[0],page.data||{});
	}
	}
	}
	if(page.mode==_actions.DISMISS){
	this.setState({modal:null});
	}
	
	if(page.mode==_actions.RESET){
	
	this.refs.nav.immediatelyResetRouteStack([this.getRoute(this.routes[page.initial],{})]);
	}
	}},{key:'componentDidMount',value:function componentDidMount()
	
	{
	this.props.dispatch(_actions.Actions.init(this.initial));
	}},{key:'renderScene',value:function renderScene(
	
	route,navigator){
	var Component=route.component;
	var navBar=route.navigationBar;
	var footer=route.footer;
	
	if(navBar){
	navBar=_react2.default.cloneElement(navBar,{
	navigator:navigator,
	route:route,
	dispatch:this.props.dispatch,
	routes:this.routerActions});
	
	}
	if(footer){
	footer=_react2.default.cloneElement(footer,{
	navigator:navigator,
	route:route,
	dispatch:this.props.dispatch,
	routes:this.routerActions});
	
	}
	var child=null;
	if(Component){
	child=_react2.default.createElement(Component,_extends({key:route.name,navigator:navigator,route:route},route.passProps,{routes:this.routerActions,dispatch:this.props.dispatch}));
	}else{
	child=_react2.default.Children.only(this.routes[route.name].children);
	child=_react2.default.cloneElement(child,{schemas:this.schemas});
	}
	
	return(
	_react2.default.createElement(View,{style:styles.transparent},
	navBar,
	child,
	footer));
	
	
	}},{key:'extend',value:function extend(
	
	destination,source){
	for(var property in source){
	if(source.hasOwnProperty(property)){
	destination[property]=source[property];
	}
	}
	return destination;
	}},{key:'getRoute',value:function getRoute(
	
	route,data){
	if(!route){
	console.error("No route for data:"+JSON.stringify(data));
	}
	var schema=this.schemas[route.schema||'default']||{};
	var sceneConfig=route.sceneConfig||schema.sceneConfig||_Animations2.default.None;
	var NavBar=route.navBar||schema.navBar;
	var Footer=route.footer||schema.footer;
	
	var navBar;
	if(NavBar){
	navBar=_react2.default.createElement(NavBar,_extends({},schema,route,data,{routes:this.routerActions,dispatch:this.props.dispatch}));
	}
	
	var footer;
	if(Footer){
	footer=_react2.default.createElement(Footer,_extends({},schema,route,data,{routes:this.routerActions,dispatch:this.props.dispatch}));
	}
	var props=this.extend({},route);
	props=this.extend(props,data);
	return{
	name:route.name,
	component:route.component,
	sceneConfig:_extends({},
	sceneConfig),
	
	navigationBar:route.hideNavBar?null:navBar,
	footer:route.hideFooter?null:footer,
	passProps:props};
	
	}},{key:'render',value:function render()
	
	{
	if(!(this.props.initial||this.initial)){
	console.error("No initial attribute!");
	}
	this.initialRoute=this.routes[this.props.initial||this.initial];
	if(!this.initialRoute){
	console.error("No initial route!");
	}
	
	var modal=null;
	if(this.state.modal){
	modal=_react2.default.createElement(View,{style:styles.container},
	_react2.default.createElement(TouchableWithoutFeedback,{onPress:function onPress(){return _actions.Actions.dismiss();}},_react2.default.createElement(View,{style:[styles.container,{backgroundColor:'black',opacity:0.5},this.props.popupStyle]})),
	this.state.modal);
	
	
	
	}
	return(
	_react2.default.createElement(View,{style:styles.transparent},
	_react2.default.createElement(Navigator,{
	renderScene:this.renderScene.bind(this),
	configureScene:function configureScene(route){return route.sceneConfig;},
	ref:'nav',
	initialRoute:this.getRoute(this.initialRoute)}),
	
	modal));
	
	
	
	}}]);return Router;}(_react2.default.Component);
	
	
	
	var styles=StyleSheet.create({
	container:{
	position:'absolute',
	top:0,
	bottom:0,
	left:0,
	right:0,
	backgroundColor:'transparent',
	justifyContent:'center',
	alignItems:'center'},
	
	transparent:{
	flex:1,
	backgroundColor:"transparent"}});
	
	
	
	module.exports={Router:(0,_reactRedux.connect)(function(state){return state.routerReducer;})(Router),Actions:_actions.Actions,Action:Action,Route:Route,Animations:_Animations2.default,Schema:Schema,routerReducer:_reducer2.default};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var PUSH=exports.PUSH='PUSH';
	var POP=exports.POP='POP';
	var DISMISS=exports.DISMISS='DISMISS';
	var RESET=exports.RESET='RESET';
	var INIT=exports.INIT='INIT';
	var CUSTOM=exports.CUSTOM='CUSTOM';
	var REPLACE=exports.REPLACE='REPLACE';
	var SELECT=exports.SELECT='SELECT';
	
	function filterParam(data){
	if((typeof data==='undefined'?'undefined':_typeof(data))!='object')
	return data;
	if(!data){
	return;
	}
	var proto=(data||{}).constructor.name;
	
	if(proto!='Object'){
	data={};
	}
	if(data.data){
	data.data=filterParam(data.data);
	}
	return data;
	}
	
	var CoreActions={
	push:function push(data){
	return _extends({},
	filterParam(data),{
	type:PUSH});
	
	},
	
	pop:function pop(){var data=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	return _extends({},
	filterParam(data),{
	type:POP});
	
	},
	
	dismiss:function dismiss(data){
	return _extends({},
	filterParam(data),{
	type:DISMISS});
	
	},
	
	reset:function reset(initial){
	if(!initial){
	throw new Error("Param should be non-empty");
	}
	return{
	initial:initial,
	type:RESET};
	
	},
	
	init:function init(initial){
	return{
	initial:initial,
	type:INIT};
	
	},
	
	custom:function custom(data){
	return _extends({},
	filterParam(data),{
	type:CUSTOM});
	
	},
	
	replace:function replace(data){
	return _extends({},
	filterParam(data),{
	type:REPLACE});
	
	},
	
	select:function select(data){
	return _extends({},
	filterParam(data),{
	type:SELECT});
	
	}};
	
	
	var Actions=_extends({},CoreActions);exports.
	
	CoreActions=CoreActions;exports.Actions=Actions;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};exports.default=
	
	
	
	
	
	
	
	
	
	
	
	
	
	reducer;var _actions=__webpack_require__(37);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function isNumeric(n){return!isNaN(parseFloat(n))&&isFinite(n);}function clone(map){var el={};for(var i in map){if(_typeof(map[i])!='object')el[i]=map[i];}return el;}function reducer(){var state=arguments.length<=0||arguments[0]===undefined?{routes:[],currentRoute:null}:arguments[0];var action=arguments[1];
	switch(action.type){
	case _actions.INIT:
	return{
	routes:[action.initial],
	currentRoute:action.initial};
	
	case _actions.PUSH:
	return{
	data:action.data||null,
	mode:_actions.PUSH,
	routes:[].concat(_toConsumableArray(state.routes),[action.name]),
	currentRoute:action.name};
	
	case _actions.REPLACE:
	return{
	data:action.data||null,
	mode:_actions.REPLACE,
	routes:[].concat(_toConsumableArray(state.routes.slice(0,state.routes.length-1)),[action.name]),
	currentRoute:action.name};
	
	case _actions.POP:
	var num=isNumeric(action.data)?action.data:1;
	if(state.routes.length<=num){
	throw new Error("Number of routes should be greater than pop() param: "+num);
	}
	return{
	mode:_actions.POP,
	routes:[].concat(_toConsumableArray(state.routes.slice(0,state.routes.length-num))),
	currentRoute:state.routes[state.routes.length-num-1]};
	
	case _actions.DISMISS:
	if(state.routes.length<=1){
	throw new Error("Number of routes should be greater than 1");
	}
	return{
	mode:_actions.DISMISS,
	routes:[].concat(_toConsumableArray(state.routes.slice(0,state.routes.length-1))),
	currentRoute:state.routes[state.routes.length-2]};
	
	case _actions.RESET:
	return{
	mode:_actions.RESET,
	routes:[action.initial],
	initial:action.initial};
	
	
	default:
	return state;}
	
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _require=
	
	
	__webpack_require__(35);var Navigator=_require.Navigator;var Dimensions=_require.Dimensions;var PixelRatio=_require.PixelRatio;
	var buildStyleInterpolator=__webpack_require__(40);
	var FlatFloatFromRight=_extends({},Navigator.SceneConfigs.FloatFromRight);
	var FlatFloatFromBottom=_extends({},Navigator.SceneConfigs.FloatFromBottom);
	FlatFloatFromRight.gestures={};
	
	var FlatFadeToTheLeft={
	transformTranslate:{
	from:{x:0,y:0,z:0},
	to:{x:-Math.round(Dimensions.get('window').width*0.3),y:0,z:0},
	min:0,
	max:1,
	type:'linear',
	extrapolate:true,
	round:PixelRatio.get()},
	
	opacity:{
	from:1,
	to:0.3,
	min:0,
	max:1,
	type:'linear',
	extrapolate:false,
	round:100},
	
	translateX:{
	from:0,
	to:-Math.round(Dimensions.get('window').width*0.3),
	min:0,
	max:1,
	type:'linear',
	extrapolate:true,
	round:PixelRatio.get()}};
	
	
	var FlatFadeToTheUp={
	opacity:{
	value:1.0,
	type:'constant'},
	
	
	translateY:{
	from:0,
	to:-Math.round(Dimensions.get('window').height*0.3),
	min:0,
	max:1,
	type:'linear',
	extrapolate:true,
	round:PixelRatio.get()}};
	
	
	
	FlatFloatFromBottom.animationInterpolators.out=buildStyleInterpolator(FlatFadeToTheUp);
	FlatFloatFromRight.animationInterpolators.out=buildStyleInterpolator(FlatFadeToTheLeft);
	
	var None={
	gestures:{},
	
	
	
	springFriction:0,
	springTension:2000,
	
	
	defaultTransitionVelocity:1.5,
	
	
	animationInterpolators:{
	into:buildStyleInterpolator(FlatFadeToTheUp),
	out:buildStyleInterpolator(FlatFadeToTheUp)}};
	
	
	
	module.exports={FlatFloatFromRight:FlatFloatFromRight,FlatFloatFromBottom:FlatFloatFromBottom,None:None};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("react-native/Libraries/Utilities/buildStyleInterpolator");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports.connect=exports.Provider=undefined;
	
	var _Provider=__webpack_require__(42);
	
	var _Provider2=_interopRequireDefault(_Provider);
	
	var _connect=__webpack_require__(45);
	
	var _connect2=_interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	exports.Provider=_Provider2["default"];
	exports.connect=_connect2["default"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	exports["default"]=undefined;
	
	var _react=__webpack_require__(2);
	
	var _storeShape=__webpack_require__(43);
	
	var _storeShape2=_interopRequireDefault(_storeShape);
	
	var _warning=__webpack_require__(44);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}
	
	function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var didWarnAboutReceivingStore=false;
	function warnAboutReceivingStore(){
	if(didWarnAboutReceivingStore){
	return;
	}
	didWarnAboutReceivingStore=true;
	
	(0,_warning2["default"])('<Provider> does not support changing `store` on the fly. '+'It is most likely that you see this error because you updated to '+'Redux 2.x and React Redux 2.x which no longer hot reload reducers '+'automatically. See https://github.com/reactjs/react-redux/releases/'+'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider=function(_Component){
	_inherits(Provider,_Component);
	
	Provider.prototype.getChildContext=function getChildContext(){
	return{store:this.store};
	};
	
	function Provider(props,context){
	_classCallCheck(this,Provider);
	
	var _this=_possibleConstructorReturn(this,_Component.call(this,props,context));
	
	_this.store=props.store;
	return _this;
	}
	
	Provider.prototype.render=function render(){
	var children=this.props.children;
	
	return _react.Children.only(children);
	};
	
	return Provider;
	}(_react.Component);
	
	exports["default"]=Provider;
	
	if(process.env.NODE_ENV!=='production'){
	Provider.prototype.componentWillReceiveProps=function(nextProps){
	var store=this.store;
	var nextStore=nextProps.store;
	
	if(store!==nextStore){
	warnAboutReceivingStore();
	}
	};
	}
	
	Provider.propTypes={
	store:_storeShape2["default"].isRequired,
	children:_react.PropTypes.element.isRequired};
	
	Provider.childContextTypes={
	store:_storeShape2["default"].isRequired};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _react=__webpack_require__(2);
	
	exports["default"]=_react.PropTypes.shape({
	subscribe:_react.PropTypes.func.isRequired,
	dispatch:_react.PropTypes.func.isRequired,
	getState:_react.PropTypes.func.isRequired});

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule=true;
	exports["default"]=warning;
	
	
	
	
	
	
	function warning(message){
	
	if(typeof console!=='undefined'&&typeof console.error==='function'){
	console.error(message);
	}
	
	try{
	
	
	throw new Error(message);
	
	}catch(e){}
	
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports.__esModule=true;
	exports["default"]=connect;
	
	var _react=__webpack_require__(2);
	
	var _storeShape=__webpack_require__(43);
	
	var _storeShape2=_interopRequireDefault(_storeShape);
	
	var _shallowEqual=__webpack_require__(46);
	
	var _shallowEqual2=_interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators=__webpack_require__(47);
	
	var _wrapActionCreators2=_interopRequireDefault(_wrapActionCreators);
	
	var _warning=__webpack_require__(44);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _isPlainObject=__webpack_require__(50);
	
	var _isPlainObject2=_interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics=__webpack_require__(62);
	
	var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}
	
	function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var defaultMapStateToProps=function defaultMapStateToProps(state){
	return{};
	};
	var defaultMapDispatchToProps=function defaultMapDispatchToProps(dispatch){
	return{dispatch:dispatch};
	};
	var defaultMergeProps=function defaultMergeProps(stateProps,dispatchProps,parentProps){
	return _extends({},parentProps,stateProps,dispatchProps);
	};
	
	function getDisplayName(WrappedComponent){
	return WrappedComponent.displayName||WrappedComponent.name||'Component';
	}
	
	var errorObject={value:null};
	function tryCatch(fn,ctx){
	try{
	return fn.apply(ctx);
	}catch(e){
	errorObject.value=e;
	return errorObject;
	}
	}
	
	
	var nextVersion=0;
	
	function connect(mapStateToProps,mapDispatchToProps,mergeProps){
	var options=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];
	
	var shouldSubscribe=Boolean(mapStateToProps);
	var mapState=mapStateToProps||defaultMapStateToProps;
	
	var mapDispatch=undefined;
	if(typeof mapDispatchToProps==='function'){
	mapDispatch=mapDispatchToProps;
	}else if(!mapDispatchToProps){
	mapDispatch=defaultMapDispatchToProps;
	}else{
	mapDispatch=(0,_wrapActionCreators2["default"])(mapDispatchToProps);
	}
	
	var finalMergeProps=mergeProps||defaultMergeProps;
	var _options$pure=options.pure;
	var pure=_options$pure===undefined?true:_options$pure;
	var _options$withRef=options.withRef;
	var withRef=_options$withRef===undefined?false:_options$withRef;
	
	var checkMergedEquals=pure&&finalMergeProps!==defaultMergeProps;
	
	
	var version=nextVersion++;
	
	return function wrapWithConnect(WrappedComponent){
	var connectDisplayName='Connect('+getDisplayName(WrappedComponent)+')';
	
	function checkStateShape(props,methodName){
	if(!(0,_isPlainObject2["default"])(props)){
	(0,_warning2["default"])(methodName+'() in '+connectDisplayName+' must return a plain object. '+('Instead received '+props+'.'));
	}
	}
	
	function computeMergedProps(stateProps,dispatchProps,parentProps){
	var mergedProps=finalMergeProps(stateProps,dispatchProps,parentProps);
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(mergedProps,'mergeProps');
	}
	return mergedProps;
	}
	
	var Connect=function(_Component){
	_inherits(Connect,_Component);
	
	Connect.prototype.shouldComponentUpdate=function shouldComponentUpdate(){
	return!pure||this.haveOwnPropsChanged||this.hasStoreStateChanged;
	};
	
	function Connect(props,context){
	_classCallCheck(this,Connect);
	
	var _this=_possibleConstructorReturn(this,_Component.call(this,props,context));
	
	_this.version=version;
	_this.store=props.store||context.store;
	
	(0,_invariant2["default"])(_this.store,'Could not find "store" in either the context or '+('props of "'+connectDisplayName+'". ')+'Either wrap the root component in a <Provider>, '+('or explicitly pass "store" as a prop to "'+connectDisplayName+'".'));
	
	var storeState=_this.store.getState();
	_this.state={storeState:storeState};
	_this.clearCache();
	return _this;
	}
	
	Connect.prototype.computeStateProps=function computeStateProps(store,props){
	if(!this.finalMapStateToProps){
	return this.configureFinalMapState(store,props);
	}
	
	var state=store.getState();
	var stateProps=this.doStatePropsDependOnOwnProps?this.finalMapStateToProps(state,props):this.finalMapStateToProps(state);
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(stateProps,'mapStateToProps');
	}
	return stateProps;
	};
	
	Connect.prototype.configureFinalMapState=function configureFinalMapState(store,props){
	var mappedState=mapState(store.getState(),props);
	var isFactory=typeof mappedState==='function';
	
	this.finalMapStateToProps=isFactory?mappedState:mapState;
	this.doStatePropsDependOnOwnProps=this.finalMapStateToProps.length!==1;
	
	if(isFactory){
	return this.computeStateProps(store,props);
	}
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(mappedState,'mapStateToProps');
	}
	return mappedState;
	};
	
	Connect.prototype.computeDispatchProps=function computeDispatchProps(store,props){
	if(!this.finalMapDispatchToProps){
	return this.configureFinalMapDispatch(store,props);
	}
	
	var dispatch=store.dispatch;
	
	var dispatchProps=this.doDispatchPropsDependOnOwnProps?this.finalMapDispatchToProps(dispatch,props):this.finalMapDispatchToProps(dispatch);
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(dispatchProps,'mapDispatchToProps');
	}
	return dispatchProps;
	};
	
	Connect.prototype.configureFinalMapDispatch=function configureFinalMapDispatch(store,props){
	var mappedDispatch=mapDispatch(store.dispatch,props);
	var isFactory=typeof mappedDispatch==='function';
	
	this.finalMapDispatchToProps=isFactory?mappedDispatch:mapDispatch;
	this.doDispatchPropsDependOnOwnProps=this.finalMapDispatchToProps.length!==1;
	
	if(isFactory){
	return this.computeDispatchProps(store,props);
	}
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(mappedDispatch,'mapDispatchToProps');
	}
	return mappedDispatch;
	};
	
	Connect.prototype.updateStatePropsIfNeeded=function updateStatePropsIfNeeded(){
	var nextStateProps=this.computeStateProps(this.store,this.props);
	if(this.stateProps&&(0,_shallowEqual2["default"])(nextStateProps,this.stateProps)){
	return false;
	}
	
	this.stateProps=nextStateProps;
	return true;
	};
	
	Connect.prototype.updateDispatchPropsIfNeeded=function updateDispatchPropsIfNeeded(){
	var nextDispatchProps=this.computeDispatchProps(this.store,this.props);
	if(this.dispatchProps&&(0,_shallowEqual2["default"])(nextDispatchProps,this.dispatchProps)){
	return false;
	}
	
	this.dispatchProps=nextDispatchProps;
	return true;
	};
	
	Connect.prototype.updateMergedPropsIfNeeded=function updateMergedPropsIfNeeded(){
	var nextMergedProps=computeMergedProps(this.stateProps,this.dispatchProps,this.props);
	if(this.mergedProps&&checkMergedEquals&&(0,_shallowEqual2["default"])(nextMergedProps,this.mergedProps)){
	return false;
	}
	
	this.mergedProps=nextMergedProps;
	return true;
	};
	
	Connect.prototype.isSubscribed=function isSubscribed(){
	return typeof this.unsubscribe==='function';
	};
	
	Connect.prototype.trySubscribe=function trySubscribe(){
	if(shouldSubscribe&&!this.unsubscribe){
	this.unsubscribe=this.store.subscribe(this.handleChange.bind(this));
	this.handleChange();
	}
	};
	
	Connect.prototype.tryUnsubscribe=function tryUnsubscribe(){
	if(this.unsubscribe){
	this.unsubscribe();
	this.unsubscribe=null;
	}
	};
	
	Connect.prototype.componentDidMount=function componentDidMount(){
	this.trySubscribe();
	};
	
	Connect.prototype.componentWillReceiveProps=function componentWillReceiveProps(nextProps){
	if(!pure||!(0,_shallowEqual2["default"])(nextProps,this.props)){
	this.haveOwnPropsChanged=true;
	}
	};
	
	Connect.prototype.componentWillUnmount=function componentWillUnmount(){
	this.tryUnsubscribe();
	this.clearCache();
	};
	
	Connect.prototype.clearCache=function clearCache(){
	this.dispatchProps=null;
	this.stateProps=null;
	this.mergedProps=null;
	this.haveOwnPropsChanged=true;
	this.hasStoreStateChanged=true;
	this.haveStatePropsBeenPrecalculated=false;
	this.statePropsPrecalculationError=null;
	this.renderedElement=null;
	this.finalMapDispatchToProps=null;
	this.finalMapStateToProps=null;
	};
	
	Connect.prototype.handleChange=function handleChange(){
	if(!this.unsubscribe){
	return;
	}
	
	var storeState=this.store.getState();
	var prevStoreState=this.state.storeState;
	if(pure&&prevStoreState===storeState){
	return;
	}
	
	if(pure&&!this.doStatePropsDependOnOwnProps){
	var haveStatePropsChanged=tryCatch(this.updateStatePropsIfNeeded,this);
	if(!haveStatePropsChanged){
	return;
	}
	if(haveStatePropsChanged===errorObject){
	this.statePropsPrecalculationError=errorObject.value;
	}
	this.haveStatePropsBeenPrecalculated=true;
	}
	
	this.hasStoreStateChanged=true;
	this.setState({storeState:storeState});
	};
	
	Connect.prototype.getWrappedInstance=function getWrappedInstance(){
	(0,_invariant2["default"])(withRef,'To access the wrapped instance, you need to specify '+'{ withRef: true } as the fourth argument of the connect() call.');
	
	return this.refs.wrappedInstance;
	};
	
	Connect.prototype.render=function render(){
	var haveOwnPropsChanged=this.haveOwnPropsChanged;
	var hasStoreStateChanged=this.hasStoreStateChanged;
	var haveStatePropsBeenPrecalculated=this.haveStatePropsBeenPrecalculated;
	var statePropsPrecalculationError=this.statePropsPrecalculationError;
	var renderedElement=this.renderedElement;
	
	this.haveOwnPropsChanged=false;
	this.hasStoreStateChanged=false;
	this.haveStatePropsBeenPrecalculated=false;
	this.statePropsPrecalculationError=null;
	
	if(statePropsPrecalculationError){
	throw statePropsPrecalculationError;
	}
	
	var shouldUpdateStateProps=true;
	var shouldUpdateDispatchProps=true;
	if(pure&&renderedElement){
	shouldUpdateStateProps=hasStoreStateChanged||haveOwnPropsChanged&&this.doStatePropsDependOnOwnProps;
	shouldUpdateDispatchProps=haveOwnPropsChanged&&this.doDispatchPropsDependOnOwnProps;
	}
	
	var haveStatePropsChanged=false;
	var haveDispatchPropsChanged=false;
	if(haveStatePropsBeenPrecalculated){
	haveStatePropsChanged=true;
	}else if(shouldUpdateStateProps){
	haveStatePropsChanged=this.updateStatePropsIfNeeded();
	}
	if(shouldUpdateDispatchProps){
	haveDispatchPropsChanged=this.updateDispatchPropsIfNeeded();
	}
	
	var haveMergedPropsChanged=true;
	if(haveStatePropsChanged||haveDispatchPropsChanged||haveOwnPropsChanged){
	haveMergedPropsChanged=this.updateMergedPropsIfNeeded();
	}else{
	haveMergedPropsChanged=false;
	}
	
	if(!haveMergedPropsChanged&&renderedElement){
	return renderedElement;
	}
	
	if(withRef){
	this.renderedElement=(0,_react.createElement)(WrappedComponent,_extends({},this.mergedProps,{
	ref:'wrappedInstance'}));
	
	}else{
	this.renderedElement=(0,_react.createElement)(WrappedComponent,this.mergedProps);
	}
	
	return this.renderedElement;
	};
	
	return Connect;
	}(_react.Component);
	
	Connect.displayName=connectDisplayName;
	Connect.WrappedComponent=WrappedComponent;
	Connect.contextTypes={
	store:_storeShape2["default"]};
	
	Connect.propTypes={
	store:_storeShape2["default"]};
	
	
	if(process.env.NODE_ENV!=='production'){
	Connect.prototype.componentWillUpdate=function componentWillUpdate(){
	if(this.version===version){
	return;
	}
	
	
	this.version=version;
	this.trySubscribe();
	this.clearCache();
	};
	}
	
	return(0,_hoistNonReactStatics2["default"])(Connect,WrappedComponent);
	};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule=true;
	exports["default"]=shallowEqual;
	function shallowEqual(objA,objB){
	if(objA===objB){
	return true;
	}
	
	var keysA=Object.keys(objA);
	var keysB=Object.keys(objB);
	
	if(keysA.length!==keysB.length){
	return false;
	}
	
	
	var hasOwn=Object.prototype.hasOwnProperty;
	for(var i=0;i<keysA.length;i++){
	if(!hasOwn.call(objB,keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){
	return false;
	}
	}
	
	return true;
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports["default"]=wrapActionCreators;
	
	var _redux=__webpack_require__(48);
	
	function wrapActionCreators(actionCreators){
	return function(dispatch){
	return(0,_redux.bindActionCreators)(actionCreators,dispatch);
	};
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=undefined;
	
	var _createStore=__webpack_require__(49);
	
	var _createStore2=_interopRequireDefault(_createStore);
	
	var _combineReducers=__webpack_require__(57);
	
	var _combineReducers2=_interopRequireDefault(_combineReducers);
	
	var _bindActionCreators=__webpack_require__(59);
	
	var _bindActionCreators2=_interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware=__webpack_require__(60);
	
	var _applyMiddleware2=_interopRequireDefault(_applyMiddleware);
	
	var _compose=__webpack_require__(61);
	
	var _compose2=_interopRequireDefault(_compose);
	
	var _warning=__webpack_require__(58);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	
	
	
	
	function isCrushed(){}
	
	if(process.env.NODE_ENV!=='production'&&typeof isCrushed.name==='string'&&isCrushed.name!=='isCrushed'){
	(0,_warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. '+'This means that you are running a slower development build of Redux. '+'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify '+'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) '+'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore=_createStore2["default"];
	exports.combineReducers=_combineReducers2["default"];
	exports.bindActionCreators=_bindActionCreators2["default"];
	exports.applyMiddleware=_applyMiddleware2["default"];
	exports.compose=_compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	exports.ActionTypes=undefined;
	exports["default"]=createStore;
	
	var _isPlainObject=__webpack_require__(50);
	
	var _isPlainObject2=_interopRequireDefault(_isPlainObject);
	
	var _symbolObservable=__webpack_require__(55);
	
	var _symbolObservable2=_interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	
	
	
	
	
	
	var ActionTypes=exports.ActionTypes={
	INIT:'@@redux/INIT'};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function createStore(reducer,initialState,enhancer){
	var _ref2;
	
	if(typeof initialState==='function'&&typeof enhancer==='undefined'){
	enhancer=initialState;
	initialState=undefined;
	}
	
	if(typeof enhancer!=='undefined'){
	if(typeof enhancer!=='function'){
	throw new Error('Expected the enhancer to be a function.');
	}
	
	return enhancer(createStore)(reducer,initialState);
	}
	
	if(typeof reducer!=='function'){
	throw new Error('Expected the reducer to be a function.');
	}
	
	var currentReducer=reducer;
	var currentState=initialState;
	var currentListeners=[];
	var nextListeners=currentListeners;
	var isDispatching=false;
	
	function ensureCanMutateNextListeners(){
	if(nextListeners===currentListeners){
	nextListeners=currentListeners.slice();
	}
	}
	
	
	
	
	
	
	function getState(){
	return currentState;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function subscribe(listener){
	if(typeof listener!=='function'){
	throw new Error('Expected listener to be a function.');
	}
	
	var isSubscribed=true;
	
	ensureCanMutateNextListeners();
	nextListeners.push(listener);
	
	return function unsubscribe(){
	if(!isSubscribed){
	return;
	}
	
	isSubscribed=false;
	
	ensureCanMutateNextListeners();
	var index=nextListeners.indexOf(listener);
	nextListeners.splice(index,1);
	};
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function dispatch(action){
	if(!(0,_isPlainObject2["default"])(action)){
	throw new Error('Actions must be plain objects. '+'Use custom middleware for async actions.');
	}
	
	if(typeof action.type==='undefined'){
	throw new Error('Actions may not have an undefined "type" property. '+'Have you misspelled a constant?');
	}
	
	if(isDispatching){
	throw new Error('Reducers may not dispatch actions.');
	}
	
	try{
	isDispatching=true;
	currentState=currentReducer(currentState,action);
	}finally{
	isDispatching=false;
	}
	
	var listeners=currentListeners=nextListeners;
	for(var i=0;i<listeners.length;i++){
	listeners[i]();
	}
	
	return action;
	}
	
	
	
	
	
	
	
	
	
	
	
	function replaceReducer(nextReducer){
	if(typeof nextReducer!=='function'){
	throw new Error('Expected the nextReducer to be a function.');
	}
	
	currentReducer=nextReducer;
	dispatch({type:ActionTypes.INIT});
	}
	
	
	
	
	
	
	
	function observable(){
	var _ref;
	
	var outerSubscribe=subscribe;
	return _ref={
	
	
	
	
	
	
	
	
	
	subscribe:function subscribe(observer){
	if((typeof observer==='undefined'?'undefined':_typeof(observer))!=='object'){
	throw new TypeError('Expected the observer to be an object.');
	}
	
	function observeState(){
	if(observer.next){
	observer.next(getState());
	}
	}
	
	observeState();
	var unsubscribe=outerSubscribe(observeState);
	return{unsubscribe:unsubscribe};
	}},
	_ref[_symbolObservable2["default"]]=function(){
	return this;
	},_ref;
	}
	
	
	
	
	dispatch({type:ActionTypes.INIT});
	
	return _ref2={
	dispatch:dispatch,
	subscribe:subscribe,
	getState:getState,
	replaceReducer:replaceReducer},
	_ref2[_symbolObservable2["default"]]=observable,_ref2;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getPrototype=__webpack_require__(51),
	isHostObject=__webpack_require__(53),
	isObjectLike=__webpack_require__(54);
	
	
	var objectTag='[object Object]';
	
	
	var funcProto=Function.prototype,
	objectProto=Object.prototype;
	
	
	var funcToString=funcProto.toString;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	var objectCtorString=funcToString.call(Object);
	
	
	
	
	
	
	var objectToString=objectProto.toString;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isPlainObject(value){
	if(!isObjectLike(value)||
	objectToString.call(value)!=objectTag||isHostObject(value)){
	return false;
	}
	var proto=getPrototype(value);
	if(proto===null){
	return true;
	}
	var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;
	return typeof Ctor=='function'&&
	Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;
	}
	
	module.exports=isPlainObject;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var overArg=__webpack_require__(52);
	
	
	var getPrototype=overArg(Object.getPrototypeOf,Object);
	
	module.exports=getPrototype;

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function overArg(func,transform){
	return function(arg){
	return func(transform(arg));
	};
	}
	
	module.exports=overArg;

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	
	
	
	
	
	function isHostObject(value){
	
	
	var result=false;
	if(value!=null&&typeof value.toString!='function'){
	try{
	result=!!(value+'');
	}catch(e){}
	}
	return result;
	}
	
	module.exports=isHostObject;

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isObjectLike(value){
	return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';
	}
	
	module.exports=isObjectLike;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	'use strict';
	
	module.exports=__webpack_require__(56)(global||window||undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports=function symbolObservablePonyfill(root){
	var result;
	var _Symbol=root.Symbol;
	
	if(typeof _Symbol==='function'){
	if(_Symbol.observable){
	result=_Symbol.observable;
	}else{
	result=_Symbol('observable');
	_Symbol.observable=result;
	}
	}else{
	result='@@observable';
	}
	
	return result;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports["default"]=combineReducers;
	
	var _createStore=__webpack_require__(49);
	
	var _isPlainObject=__webpack_require__(50);
	
	var _isPlainObject2=_interopRequireDefault(_isPlainObject);
	
	var _warning=__webpack_require__(58);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	function getUndefinedStateErrorMessage(key,action){
	var actionType=action&&action.type;
	var actionName=actionType&&'"'+actionType.toString()+'"'||'an action';
	
	return'Given action '+actionName+', reducer "'+key+'" returned undefined. '+'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState,reducers,action){
	var reducerKeys=Object.keys(reducers);
	var argumentName=action&&action.type===_createStore.ActionTypes.INIT?'initialState argument passed to createStore':'previous state received by the reducer';
	
	if(reducerKeys.length===0){
	return'Store does not have a valid reducer. Make sure the argument passed '+'to combineReducers is an object whose values are reducers.';
	}
	
	if(!(0,_isPlainObject2["default"])(inputState)){
	return'The '+argumentName+' has unexpected type of "'+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+reducerKeys.join('", "')+'"');
	}
	
	var unexpectedKeys=Object.keys(inputState).filter(function(key){
	return!reducers.hasOwnProperty(key);
	});
	
	if(unexpectedKeys.length>0){
	return'Unexpected '+(unexpectedKeys.length>1?'keys':'key')+' '+('"'+unexpectedKeys.join('", "')+'" found in '+argumentName+'. ')+'Expected to find one of the known reducer keys instead: '+('"'+reducerKeys.join('", "')+'". Unexpected keys will be ignored.');
	}
	}
	
	function assertReducerSanity(reducers){
	Object.keys(reducers).forEach(function(key){
	var reducer=reducers[key];
	var initialState=reducer(undefined,{type:_createStore.ActionTypes.INIT});
	
	if(typeof initialState==='undefined'){
	throw new Error('Reducer "'+key+'" returned undefined during initialization. '+'If the state passed to the reducer is undefined, you must '+'explicitly return the initial state. The initial state may '+'not be undefined.');
	}
	
	var type='@@redux/PROBE_UNKNOWN_ACTION_'+Math.random().toString(36).substring(7).split('').join('.');
	if(typeof reducer(undefined,{type:type})==='undefined'){
	throw new Error('Reducer "'+key+'" returned undefined when probed with a random type. '+('Don\'t try to handle '+_createStore.ActionTypes.INIT+' or other actions in "redux/*" ')+'namespace. They are considered private. Instead, you must return the '+'current state for any unknown actions, unless it is undefined, '+'in which case you must return the initial state, regardless of the '+'action type. The initial state may not be undefined.');
	}
	});
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function combineReducers(reducers){
	var reducerKeys=Object.keys(reducers);
	var finalReducers={};
	for(var i=0;i<reducerKeys.length;i++){
	var key=reducerKeys[i];
	if(typeof reducers[key]==='function'){
	finalReducers[key]=reducers[key];
	}
	}
	var finalReducerKeys=Object.keys(finalReducers);
	
	var sanityError;
	try{
	assertReducerSanity(finalReducers);
	}catch(e){
	sanityError=e;
	}
	
	return function combination(){
	var state=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	var action=arguments[1];
	
	if(sanityError){
	throw sanityError;
	}
	
	if(process.env.NODE_ENV!=='production'){
	var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action);
	if(warningMessage){
	(0,_warning2["default"])(warningMessage);
	}
	}
	
	var hasChanged=false;
	var nextState={};
	for(var i=0;i<finalReducerKeys.length;i++){
	var key=finalReducerKeys[i];
	var reducer=finalReducers[key];
	var previousStateForKey=state[key];
	var nextStateForKey=reducer(previousStateForKey,action);
	if(typeof nextStateForKey==='undefined'){
	var errorMessage=getUndefinedStateErrorMessage(key,action);
	throw new Error(errorMessage);
	}
	nextState[key]=nextStateForKey;
	hasChanged=hasChanged||nextStateForKey!==previousStateForKey;
	}
	return hasChanged?nextState:state;
	};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule=true;
	exports["default"]=warning;
	
	
	
	
	
	
	function warning(message){
	
	if(typeof console!=='undefined'&&typeof console.error==='function'){
	console.error(message);
	}
	
	try{
	
	
	
	throw new Error(message);
	
	}catch(e){}
	
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	exports["default"]=bindActionCreators;
	function bindActionCreator(actionCreator,dispatch){
	return function(){
	return dispatch(actionCreator.apply(undefined,arguments));
	};
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function bindActionCreators(actionCreators,dispatch){
	if(typeof actionCreators==='function'){
	return bindActionCreator(actionCreators,dispatch);
	}
	
	if((typeof actionCreators==='undefined'?'undefined':_typeof(actionCreators))!=='object'||actionCreators===null){
	throw new Error('bindActionCreators expected an object or a function, instead received '+(actionCreators===null?'null':typeof actionCreators==='undefined'?'undefined':_typeof(actionCreators))+'. '+'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	}
	
	var keys=Object.keys(actionCreators);
	var boundActionCreators={};
	for(var i=0;i<keys.length;i++){
	var key=keys[i];
	var actionCreator=actionCreators[key];
	if(typeof actionCreator==='function'){
	boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);
	}
	}
	return boundActionCreators;
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports["default"]=applyMiddleware;
	
	var _compose=__webpack_require__(61);
	
	var _compose2=_interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function applyMiddleware(){
	for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){
	middlewares[_key]=arguments[_key];
	}
	
	return function(createStore){
	return function(reducer,initialState,enhancer){
	var store=createStore(reducer,initialState,enhancer);
	var _dispatch=store.dispatch;
	var chain=[];
	
	var middlewareAPI={
	getState:store.getState,
	dispatch:function dispatch(action){
	return _dispatch(action);
	}};
	
	chain=middlewares.map(function(middleware){
	return middleware(middlewareAPI);
	});
	_dispatch=_compose2["default"].apply(undefined,chain)(store.dispatch);
	
	return _extends({},store,{
	dispatch:_dispatch});
	
	};
	};
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	exports["default"]=compose;
	
	
	
	
	
	
	
	
	
	
	
	function compose(){
	for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){
	funcs[_key]=arguments[_key];
	}
	
	if(funcs.length===0){
	return function(arg){
	return arg;
	};
	}else{
	var _ret=function(){
	var last=funcs[funcs.length-1];
	var rest=funcs.slice(0,-1);
	return{
	v:function v(){
	return rest.reduceRight(function(composed,f){
	return f(composed);
	},last.apply(undefined,arguments));
	}};
	
	}();
	
	if((typeof _ret==="undefined"?"undefined":_typeof(_ret))==="object")return _ret.v;
	}
	}

/***/ },
/* 62 */
/***/ function(module, exports) {

	
	
	
	
	'use strict';
	
	var REACT_STATICS={
	childContextTypes:true,
	contextTypes:true,
	defaultProps:true,
	displayName:true,
	getDefaultProps:true,
	mixins:true,
	propTypes:true,
	type:true};
	
	
	var KNOWN_STATICS={
	name:true,
	length:true,
	prototype:true,
	caller:true,
	arguments:true,
	arity:true};
	
	
	var isGetOwnPropertySymbolsAvailable=typeof Object.getOwnPropertySymbols==='function';
	
	module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,customStatics){
	if(typeof sourceComponent!=='string'){
	var keys=Object.getOwnPropertyNames(sourceComponent);
	
	
	if(isGetOwnPropertySymbolsAvailable){
	keys=keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	}
	
	for(var i=0;i<keys.length;++i){
	if(!REACT_STATICS[keys[i]]&&!KNOWN_STATICS[keys[i]]&&(!customStatics||!customStatics[keys[i]])){
	try{
	targetComponent[keys[i]]=sourceComponent[keys[i]];
	}catch(error){
	
	}
	}
	}
	}
	
	return targetComponent;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	var invariant=function invariant(condition,format,a,b,c,d,e,f){
	if(process.env.NODE_ENV!=='production'){
	if(format===undefined){
	throw new Error('invariant requires an error message argument');
	}
	}
	
	if(!condition){
	var error;
	if(format===undefined){
	error=new Error(
	'Minified exception occurred; use the non-minified dev environment '+
	'for the full error message and additional helpful warnings.');
	
	}else{
	var args=[a,b,c,d,e,f];
	var argIndex=0;
	error=new Error(
	format.replace(/%s/g,function(){return args[argIndex++];}));
	
	error.name='Invariant Violation';
	}
	
	error.framesToPop=1;
	throw error;
	}
	};
	
	module.exports=invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _routes=__webpack_require__(65);var _routes2=_interopRequireDefault(_routes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_routes2.default;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(66);
	var _routes=__webpack_require__(127);var _routes2=_interopRequireDefault(_routes);
	var _MainLayout=__webpack_require__(128);var _MainLayout2=_interopRequireDefault(_MainLayout);
	var _Home=__webpack_require__(133);var _Home2=_interopRequireDefault(_Home);
	var _View=__webpack_require__(145);var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	
	_react2.default.createElement(_reactRouter.Route,{path:_routes2.default.index.path,component:_MainLayout2.default},
	_react2.default.createElement(_reactRouter.IndexRoute,{component:_Home2.default}),
	_react2.default.createElement(_reactRouter.Route,{path:_routes2.default.view2.path,component:_View2.default}));

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports.createMemoryHistory=exports.hashHistory=exports.browserHistory=exports.applyRouterMiddleware=exports.formatPattern=exports.useRouterHistory=exports.match=exports.routerShape=exports.locationShape=exports.PropTypes=exports.RoutingContext=exports.RouterContext=exports.createRoutes=exports.useRoutes=exports.RouteContext=exports.Lifecycle=exports.History=exports.Route=exports.Redirect=exports.IndexRoute=exports.IndexRedirect=exports.withRouter=exports.IndexLink=exports.Link=exports.Router=undefined;
	
	var _RouteUtils=__webpack_require__(67);
	
	Object.defineProperty(exports,'createRoutes',{
	enumerable:true,
	get:function get(){
	return _RouteUtils.createRoutes;
	}});
	
	
	var _PropTypes2=__webpack_require__(68);
	
	Object.defineProperty(exports,'locationShape',{
	enumerable:true,
	get:function get(){
	return _PropTypes2.locationShape;
	}});
	
	Object.defineProperty(exports,'routerShape',{
	enumerable:true,
	get:function get(){
	return _PropTypes2.routerShape;
	}});
	
	
	var _PatternUtils=__webpack_require__(73);
	
	Object.defineProperty(exports,'formatPattern',{
	enumerable:true,
	get:function get(){
	return _PatternUtils.formatPattern;
	}});
	
	
	var _Router2=__webpack_require__(74);
	
	var _Router3=_interopRequireDefault(_Router2);
	
	var _Link2=__webpack_require__(105);
	
	var _Link3=_interopRequireDefault(_Link2);
	
	var _IndexLink2=__webpack_require__(106);
	
	var _IndexLink3=_interopRequireDefault(_IndexLink2);
	
	var _withRouter2=__webpack_require__(107);
	
	var _withRouter3=_interopRequireDefault(_withRouter2);
	
	var _IndexRedirect2=__webpack_require__(108);
	
	var _IndexRedirect3=_interopRequireDefault(_IndexRedirect2);
	
	var _IndexRoute2=__webpack_require__(110);
	
	var _IndexRoute3=_interopRequireDefault(_IndexRoute2);
	
	var _Redirect2=__webpack_require__(109);
	
	var _Redirect3=_interopRequireDefault(_Redirect2);
	
	var _Route2=__webpack_require__(111);
	
	var _Route3=_interopRequireDefault(_Route2);
	
	var _History2=__webpack_require__(112);
	
	var _History3=_interopRequireDefault(_History2);
	
	var _Lifecycle2=__webpack_require__(113);
	
	var _Lifecycle3=_interopRequireDefault(_Lifecycle2);
	
	var _RouteContext2=__webpack_require__(114);
	
	var _RouteContext3=_interopRequireDefault(_RouteContext2);
	
	var _useRoutes2=__webpack_require__(115);
	
	var _useRoutes3=_interopRequireDefault(_useRoutes2);
	
	var _RouterContext2=__webpack_require__(102);
	
	var _RouterContext3=_interopRequireDefault(_RouterContext2);
	
	var _RoutingContext2=__webpack_require__(116);
	
	var _RoutingContext3=_interopRequireDefault(_RoutingContext2);
	
	var _PropTypes3=_interopRequireDefault(_PropTypes2);
	
	var _match2=__webpack_require__(117);
	
	var _match3=_interopRequireDefault(_match2);
	
	var _useRouterHistory2=__webpack_require__(121);
	
	var _useRouterHistory3=_interopRequireDefault(_useRouterHistory2);
	
	var _applyRouterMiddleware2=__webpack_require__(122);
	
	var _applyRouterMiddleware3=_interopRequireDefault(_applyRouterMiddleware2);
	
	var _browserHistory2=__webpack_require__(123);
	
	var _browserHistory3=_interopRequireDefault(_browserHistory2);
	
	var _hashHistory2=__webpack_require__(126);
	
	var _hashHistory3=_interopRequireDefault(_hashHistory2);
	
	var _createMemoryHistory2=__webpack_require__(118);
	
	var _createMemoryHistory3=_interopRequireDefault(_createMemoryHistory2);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	exports.Router=_Router3.default;
	
	exports.Link=_Link3.default;
	exports.IndexLink=_IndexLink3.default;
	exports.withRouter=_withRouter3.default;
	
	
	
	exports.IndexRedirect=_IndexRedirect3.default;
	exports.IndexRoute=_IndexRoute3.default;
	exports.Redirect=_Redirect3.default;
	exports.Route=_Route3.default;
	
	
	
	exports.History=_History3.default;
	exports.Lifecycle=_Lifecycle3.default;
	exports.RouteContext=_RouteContext3.default;
	
	
	
	exports.useRoutes=_useRoutes3.default;
	exports.RouterContext=_RouterContext3.default;
	exports.RoutingContext=_RoutingContext3.default;
	exports.PropTypes=_PropTypes3.default;
	exports.match=_match3.default;
	exports.useRouterHistory=_useRouterHistory3.default;
	exports.applyRouterMiddleware=_applyRouterMiddleware3.default;
	
	
	
	exports.browserHistory=_browserHistory3.default;
	exports.hashHistory=_hashHistory3.default;
	exports.createMemoryHistory=_createMemoryHistory3.default;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports.isReactChildren=isReactChildren;
	exports.createRouteFromReactElement=createRouteFromReactElement;
	exports.createRoutesFromReactChildren=createRoutesFromReactChildren;
	exports.createRoutes=createRoutes;
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function isValidChild(object){
	return object==null||_react2.default.isValidElement(object);
	}
	
	function isReactChildren(object){
	return isValidChild(object)||Array.isArray(object)&&object.every(isValidChild);
	}
	
	function createRoute(defaultProps,props){
	return _extends({},defaultProps,props);
	}
	
	function createRouteFromReactElement(element){
	var type=element.type;
	var route=createRoute(type.defaultProps,element.props);
	
	if(route.children){
	var childRoutes=createRoutesFromReactChildren(route.children,route);
	
	if(childRoutes.length)route.childRoutes=childRoutes;
	
	delete route.children;
	}
	
	return route;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function createRoutesFromReactChildren(children,parentRoute){
	var routes=[];
	
	_react2.default.Children.forEach(children,function(element){
	if(_react2.default.isValidElement(element)){
	
	if(element.type.createRouteFromReactElement){
	var route=element.type.createRouteFromReactElement(element,parentRoute);
	
	if(route)routes.push(route);
	}else{
	routes.push(createRouteFromReactElement(element));
	}
	}
	});
	
	return routes;
	}
	
	
	
	
	
	function createRoutes(routes){
	if(isReactChildren(routes)){
	routes=createRoutesFromReactChildren(routes);
	}else if(routes&&!Array.isArray(routes)){
	routes=[routes];
	}
	
	return routes;
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports.router=exports.routes=exports.route=exports.components=exports.component=exports.location=exports.history=exports.falsy=exports.locationShape=exports.routerShape=undefined;
	
	var _react=__webpack_require__(2);
	
	var _deprecateObjectProperties=__webpack_require__(69);
	
	var _deprecateObjectProperties2=_interopRequireDefault(_deprecateObjectProperties);
	
	var _InternalPropTypes=__webpack_require__(72);
	
	var InternalPropTypes=_interopRequireWildcard(_InternalPropTypes);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var func=_react.PropTypes.func;
	var object=_react.PropTypes.object;
	var shape=_react.PropTypes.shape;
	var string=_react.PropTypes.string;
	var routerShape=exports.routerShape=shape({
	push:func.isRequired,
	replace:func.isRequired,
	go:func.isRequired,
	goBack:func.isRequired,
	goForward:func.isRequired,
	setRouteLeaveHook:func.isRequired,
	isActive:func.isRequired});
	
	
	var locationShape=exports.locationShape=shape({
	pathname:string.isRequired,
	search:string.isRequired,
	state:object,
	action:string.isRequired,
	key:string});
	
	
	
	
	var falsy=exports.falsy=InternalPropTypes.falsy;
	var history=exports.history=InternalPropTypes.history;
	var location=exports.location=locationShape;
	var component=exports.component=InternalPropTypes.component;
	var components=exports.components=InternalPropTypes.components;
	var route=exports.route=InternalPropTypes.route;
	var routes=exports.routes=InternalPropTypes.routes;
	var router=exports.router=routerShape;
	
	if(process.env.NODE_ENV!=='production'){
	(function(){
	var deprecatePropType=function deprecatePropType(propType,message){
	return function(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,message):void 0;
	return propType.apply(undefined,arguments);
	};
	};
	
	var deprecateInternalPropType=function deprecateInternalPropType(propType){
	return deprecatePropType(propType,'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	};
	
	var deprecateRenamedPropType=function deprecateRenamedPropType(propType,name){
	return deprecatePropType(propType,'The `'+name+'` prop type is now exported as `'+name+'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	};
	
	exports.falsy=falsy=deprecateInternalPropType(falsy);
	exports.history=history=deprecateInternalPropType(history);
	exports.component=component=deprecateInternalPropType(component);
	exports.components=components=deprecateInternalPropType(components);
	exports.route=route=deprecateInternalPropType(route);
	exports.routes=routes=deprecateInternalPropType(routes);
	
	exports.location=location=deprecateRenamedPropType(location,'location');
	exports.router=router=deprecateRenamedPropType(router,'router');
	})();
	}
	
	var defaultExport={
	falsy:falsy,
	history:history,
	location:location,
	component:component,
	components:components,
	route:route,
	
	router:router};
	
	
	if(process.env.NODE_ENV!=='production'){
	defaultExport=(0,_deprecateObjectProperties2.default)(defaultExport,'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}
	
	exports.default=defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports.canUseMembrane=undefined;
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var canUseMembrane=exports.canUseMembrane=false;
	
	
	var deprecateObjectProperties=function deprecateObjectProperties(object){
	return object;
	};
	
	if(process.env.NODE_ENV!=='production'){
	try{
	if(Object.defineProperty({},'x',{
	get:function get(){
	return true;
	}}).
	x){
	exports.canUseMembrane=canUseMembrane=true;
	}
	
	}catch(e){}
	
	
	if(canUseMembrane){
	deprecateObjectProperties=function deprecateObjectProperties(object,message){
	
	var membrane={};
	
	var _loop=function _loop(prop){
	if(!Object.prototype.hasOwnProperty.call(object,prop)){
	return'continue';
	}
	
	if(typeof object[prop]==='function'){
	
	membrane[prop]=function(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,message):void 0;
	return object[prop].apply(object,arguments);
	};
	return'continue';
	}
	
	
	
	
	
	
	Object.defineProperty(membrane,prop,{
	get:function get(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,message):void 0;
	return object[prop];
	}});
	
	};
	
	for(var prop in object){
	var _ret=_loop(prop);
	
	if(_ret==='continue')continue;
	}
	
	return membrane;
	};
	}
	}
	
	exports.default=deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports.default=routerWarning;
	exports._resetWarned=_resetWarned;
	
	var _warning=__webpack_require__(71);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var warned={};
	
	function routerWarning(falseToWarn,message){
	
	if(message.indexOf('deprecated')!==-1){
	if(warned[message]){
	return;
	}
	
	warned[message]=true;
	}
	
	message='[react-router] '+message;
	
	for(var _len=arguments.length,args=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){
	args[_key-2]=arguments[_key];
	}
	
	_warning2.default.apply(undefined,[falseToWarn,message].concat(args));
	}
	
	function _resetWarned(){
	warned={};
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	var warning=function warning(){};
	
	if(process.env.NODE_ENV!=='production'){
	warning=function warning(condition,format,args){
	var len=arguments.length;
	args=new Array(len>2?len-2:0);
	for(var key=2;key<len;key++){
	args[key-2]=arguments[key];
	}
	if(format===undefined){
	throw new Error(
	'`warning(condition, format, ...args)` requires a warning '+
	'message argument');
	
	}
	
	if(format.length<10||/^[s\W]*$/.test(format)){
	throw new Error(
	'The warning format should be able to uniquely identify this '+
	'warning. Please, use a more descriptive format than: '+format);
	
	}
	
	if(!condition){
	var argIndex=0;
	var message='Warning: '+
	format.replace(/%s/g,function(){
	return args[argIndex++];
	});
	if(typeof console!=='undefined'){
	console.error(message);
	}
	try{
	
	
	throw new Error(message);
	}catch(x){}
	}
	};
	}
	
	module.exports=warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports.routes=exports.route=exports.components=exports.component=exports.history=undefined;
	exports.falsy=falsy;
	
	var _react=__webpack_require__(2);
	
	var func=_react.PropTypes.func;
	var object=_react.PropTypes.object;
	var arrayOf=_react.PropTypes.arrayOf;
	var oneOfType=_react.PropTypes.oneOfType;
	var element=_react.PropTypes.element;
	var shape=_react.PropTypes.shape;
	var string=_react.PropTypes.string;
	function falsy(props,propName,componentName){
	if(props[propName])return new Error('<'+componentName+'> should not have a "'+propName+'" prop');
	}
	
	var history=exports.history=shape({
	listen:func.isRequired,
	push:func.isRequired,
	replace:func.isRequired,
	go:func.isRequired,
	goBack:func.isRequired,
	goForward:func.isRequired});
	
	
	var component=exports.component=oneOfType([func,string]);
	var components=exports.components=oneOfType([component,object]);
	var route=exports.route=oneOfType([object,element]);
	var routes=exports.routes=oneOfType([route,arrayOf(route)]);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports.compilePattern=compilePattern;
	exports.matchPattern=matchPattern;
	exports.getParamNames=getParamNames;
	exports.getParams=getParams;
	exports.formatPattern=formatPattern;
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
	}
	
	function _compilePattern(pattern){
	var regexpSource='';
	var paramNames=[];
	var tokens=[];
	
	var match=void 0,
	lastIndex=0,
	matcher=/:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	while(match=matcher.exec(pattern)){
	if(match.index!==lastIndex){
	tokens.push(pattern.slice(lastIndex,match.index));
	regexpSource+=escapeRegExp(pattern.slice(lastIndex,match.index));
	}
	
	if(match[1]){
	regexpSource+='([^/]+)';
	paramNames.push(match[1]);
	}else if(match[0]==='**'){
	regexpSource+='(.*)';
	paramNames.push('splat');
	}else if(match[0]==='*'){
	regexpSource+='(.*?)';
	paramNames.push('splat');
	}else if(match[0]==='('){
	regexpSource+='(?:';
	}else if(match[0]===')'){
	regexpSource+=')?';
	}
	
	tokens.push(match[0]);
	
	lastIndex=matcher.lastIndex;
	}
	
	if(lastIndex!==pattern.length){
	tokens.push(pattern.slice(lastIndex,pattern.length));
	regexpSource+=escapeRegExp(pattern.slice(lastIndex,pattern.length));
	}
	
	return{
	pattern:pattern,
	regexpSource:regexpSource,
	paramNames:paramNames,
	tokens:tokens};
	
	}
	
	var CompiledPatternsCache=Object.create(null);
	
	function compilePattern(pattern){
	if(!CompiledPatternsCache[pattern])CompiledPatternsCache[pattern]=_compilePattern(pattern);
	
	return CompiledPatternsCache[pattern];
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function matchPattern(pattern,pathname){
	
	if(pattern.charAt(0)!=='/'){
	pattern='/'+pattern;
	}
	
	var _compilePattern2=compilePattern(pattern);
	
	var regexpSource=_compilePattern2.regexpSource;
	var paramNames=_compilePattern2.paramNames;
	var tokens=_compilePattern2.tokens;
	
	
	if(pattern.charAt(pattern.length-1)!=='/'){
	regexpSource+='/?';
	}
	
	
	if(tokens[tokens.length-1]==='*'){
	regexpSource+='$';
	}
	
	var match=pathname.match(new RegExp('^'+regexpSource,'i'));
	if(match==null){
	return null;
	}
	
	var matchedPath=match[0];
	var remainingPathname=pathname.substr(matchedPath.length);
	
	if(remainingPathname){
	
	
	if(matchedPath.charAt(matchedPath.length-1)!=='/'){
	return null;
	}
	
	
	
	remainingPathname='/'+remainingPathname;
	}
	
	return{
	remainingPathname:remainingPathname,
	paramNames:paramNames,
	paramValues:match.slice(1).map(function(v){
	return v&&decodeURIComponent(v);
	})};
	
	}
	
	function getParamNames(pattern){
	return compilePattern(pattern).paramNames;
	}
	
	function getParams(pattern,pathname){
	var match=matchPattern(pattern,pathname);
	if(!match){
	return null;
	}
	
	var paramNames=match.paramNames;
	var paramValues=match.paramValues;
	
	var params={};
	
	paramNames.forEach(function(paramName,index){
	params[paramName]=paramValues[index];
	});
	
	return params;
	}
	
	
	
	
	
	function formatPattern(pattern,params){
	params=params||{};
	
	var _compilePattern3=compilePattern(pattern);
	
	var tokens=_compilePattern3.tokens;
	
	var parenCount=0,
	pathname='',
	splatIndex=0;
	
	var token=void 0,
	paramName=void 0,
	paramValue=void 0;
	for(var i=0,len=tokens.length;i<len;++i){
	token=tokens[i];
	
	if(token==='*'||token==='**'){
	paramValue=Array.isArray(params.splat)?params.splat[splatIndex++]:params.splat;
	
	!(paramValue!=null||parenCount>0)?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'Missing splat #%s for path "%s"',splatIndex,pattern):(0,_invariant2.default)(false):void 0;
	
	if(paramValue!=null)pathname+=encodeURI(paramValue);
	}else if(token==='('){
	parenCount+=1;
	}else if(token===')'){
	parenCount-=1;
	}else if(token.charAt(0)===':'){
	paramName=token.substring(1);
	paramValue=params[paramName];
	
	!(paramValue!=null||parenCount>0)?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'Missing "%s" parameter for path "%s"',paramName,pattern):(0,_invariant2.default)(false):void 0;
	
	if(paramValue!=null)pathname+=encodeURIComponent(paramValue);
	}else{
	pathname+=token;
	}
	}
	
	return pathname.replace(/\/+/g,'/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _createHashHistory=__webpack_require__(75);
	
	var _createHashHistory2=_interopRequireDefault(_createHashHistory);
	
	var _useQueries=__webpack_require__(91);
	
	var _useQueries2=_interopRequireDefault(_useQueries);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _createTransitionManager=__webpack_require__(94);
	
	var _createTransitionManager2=_interopRequireDefault(_createTransitionManager);
	
	var _InternalPropTypes=__webpack_require__(72);
	
	var _RouterContext=__webpack_require__(102);
	
	var _RouterContext2=_interopRequireDefault(_RouterContext);
	
	var _RouteUtils=__webpack_require__(67);
	
	var _RouterUtils=__webpack_require__(104);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}
	
	function isDeprecatedHistory(history){
	return!history||!history.__v2_compatible__;
	}
	
	
	function isUnsupportedHistory(history){
	
	return history&&history.getCurrentLocation;
	}
	
	var _React$PropTypes=_react2.default.PropTypes;
	var func=_React$PropTypes.func;
	var object=_React$PropTypes.object;
	
	
	
	
	
	
	
	var Router=_react2.default.createClass({
	displayName:'Router',
	
	
	propTypes:{
	history:object,
	children:_InternalPropTypes.routes,
	routes:_InternalPropTypes.routes,
	render:func,
	createElement:func,
	onError:func,
	onUpdate:func,
	
	
	parseQueryString:func,
	stringifyQuery:func,
	
	
	matchContext:object},
	
	
	getDefaultProps:function getDefaultProps(){
	return{
	render:function render(props){
	return _react2.default.createElement(_RouterContext2.default,props);
	}};
	
	},
	getInitialState:function getInitialState(){
	return{
	location:null,
	routes:null,
	params:null,
	components:null};
	
	},
	handleError:function handleError(error){
	if(this.props.onError){
	this.props.onError.call(this,error);
	}else{
	
	throw error;
	}
	},
	componentWillMount:function componentWillMount(){
	var _this=this;
	
	var _props=this.props;
	var parseQueryString=_props.parseQueryString;
	var stringifyQuery=_props.stringifyQuery;
	
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(!(parseQueryString||stringifyQuery),'`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring'):void 0;
	
	var _createRouterObjects=this.createRouterObjects();
	
	var history=_createRouterObjects.history;
	var transitionManager=_createRouterObjects.transitionManager;
	var router=_createRouterObjects.router;
	
	
	this._unlisten=transitionManager.listen(function(error,state){
	if(error){
	_this.handleError(error);
	}else{
	_this.setState(state,_this.props.onUpdate);
	}
	});
	
	this.history=history;
	this.router=router;
	},
	createRouterObjects:function createRouterObjects(){
	var matchContext=this.props.matchContext;
	
	if(matchContext){
	return matchContext;
	}
	
	var history=this.props.history;
	var _props2=this.props;
	var routes=_props2.routes;
	var children=_props2.children;
	
	
	!!isUnsupportedHistory(history)?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'You have provided a history object created with history v3.x. '+'This version of React Router is not compatible with v3 history '+'objects. Please use history v2.x instead.'):(0,_invariant2.default)(false):void 0;
	
	if(isDeprecatedHistory(history)){
	history=this.wrapDeprecatedHistory(history);
	}
	
	var transitionManager=(0,_createTransitionManager2.default)(history,(0,_RouteUtils.createRoutes)(routes||children));
	var router=(0,_RouterUtils.createRouterObject)(history,transitionManager);
	var routingHistory=(0,_RouterUtils.createRoutingHistory)(history,transitionManager);
	
	return{history:routingHistory,transitionManager:transitionManager,router:router};
	},
	wrapDeprecatedHistory:function wrapDeprecatedHistory(history){
	var _props3=this.props;
	var parseQueryString=_props3.parseQueryString;
	var stringifyQuery=_props3.stringifyQuery;
	
	
	var createHistory=void 0;
	if(history){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by '+'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. '+'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.'):void 0;
	createHistory=function createHistory(){
	return history;
	};
	}else{
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory'):void 0;
	createHistory=_createHashHistory2.default;
	}
	
	return(0,_useQueries2.default)(createHistory)({parseQueryString:parseQueryString,stringifyQuery:stringifyQuery});
	},
	
	
	
	componentWillReceiveProps:function componentWillReceiveProps(nextProps){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(nextProps.history===this.props.history,'You cannot change <Router history>; it will be ignored'):void 0;
	
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)((nextProps.routes||nextProps.children)===(this.props.routes||this.props.children),'You cannot change <Router routes>; it will be ignored'):void 0;
	},
	componentWillUnmount:function componentWillUnmount(){
	if(this._unlisten)this._unlisten();
	},
	render:function render(){
	var _state=this.state;
	var location=_state.location;
	var routes=_state.routes;
	var params=_state.params;
	var components=_state.components;
	var _props4=this.props;
	var createElement=_props4.createElement;
	var render=_props4.render;
	
	var props=_objectWithoutProperties(_props4,['createElement','render']);
	
	if(location==null)return null;
	
	
	
	Object.keys(Router.propTypes).forEach(function(propType){
	return delete props[propType];
	});
	
	return render(_extends({},props,{
	history:this.history,
	router:this.router,
	location:location,
	routes:routes,
	params:params,
	components:components,
	createElement:createElement}));
	
	}});
	
	
	exports.default=Router;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _Actions=__webpack_require__(77);
	
	var _PathUtils=__webpack_require__(78);
	
	var _ExecutionEnvironment=__webpack_require__(79);
	
	var _DOMUtils=__webpack_require__(80);
	
	var _DOMStateStorage=__webpack_require__(81);
	
	var _createDOMHistory=__webpack_require__(82);
	
	var _createDOMHistory2=_interopRequireDefault(_createDOMHistory);
	
	function isAbsolutePath(path){
	return typeof path==='string'&&path.charAt(0)==='/';
	}
	
	function ensureSlash(){
	var path=_DOMUtils.getHashPath();
	
	if(isAbsolutePath(path))return true;
	
	_DOMUtils.replaceHashPath('/'+path);
	
	return false;
	}
	
	function addQueryStringValueToPath(path,key,value){
	return path+(path.indexOf('?')===-1?'?':'&')+(key+'='+value);
	}
	
	function stripQueryStringValueFromPath(path,key){
	return path.replace(new RegExp('[?&]?'+key+'=[a-zA-Z0-9]+'),'');
	}
	
	function getQueryStringValueFromPath(path,key){
	var match=path.match(new RegExp('\\?.*?\\b'+key+'=(.+?)\\b'));
	return match&&match[1];
	}
	
	var DefaultQueryKey='_k';
	
	function createHashHistory(){
	var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	
	!_ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?_invariant2['default'](false,'Hash history needs a DOM'):_invariant2['default'](false):undefined;
	
	var queryKey=options.queryKey;
	
	if(queryKey===undefined||!!queryKey)queryKey=typeof queryKey==='string'?queryKey:DefaultQueryKey;
	
	function getCurrentLocation(){
	var path=_DOMUtils.getHashPath();
	
	var key=undefined,
	state=undefined;
	if(queryKey){
	key=getQueryStringValueFromPath(path,queryKey);
	path=stripQueryStringValueFromPath(path,queryKey);
	
	if(key){
	state=_DOMStateStorage.readState(key);
	}else{
	state=null;
	key=history.createKey();
	_DOMUtils.replaceHashPath(addQueryStringValueToPath(path,queryKey,key));
	}
	}else{
	key=state=null;
	}
	
	var location=_PathUtils.parsePath(path);
	
	return history.createLocation(_extends({},location,{state:state}),undefined,key);
	}
	
	function startHashChangeListener(_ref){
	var transitionTo=_ref.transitionTo;
	
	function hashChangeListener(){
	if(!ensureSlash())return;
	
	transitionTo(getCurrentLocation());
	}
	
	ensureSlash();
	_DOMUtils.addEventListener(window,'hashchange',hashChangeListener);
	
	return function(){
	_DOMUtils.removeEventListener(window,'hashchange',hashChangeListener);
	};
	}
	
	function finishTransition(location){
	var basename=location.basename;
	var pathname=location.pathname;
	var search=location.search;
	var state=location.state;
	var action=location.action;
	var key=location.key;
	
	if(action===_Actions.POP)return;
	
	var path=(basename||'')+pathname+search;
	
	if(queryKey){
	path=addQueryStringValueToPath(path,queryKey,key);
	_DOMStateStorage.saveState(key,state);
	}else{
	
	location.key=location.state=null;
	}
	
	var currentHash=_DOMUtils.getHashPath();
	
	if(action===_Actions.PUSH){
	if(currentHash!==path){
	window.location.hash=path;
	}else{
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'You cannot PUSH the same path using hash history'):undefined;
	}
	}else if(currentHash!==path){
	
	_DOMUtils.replaceHashPath(path);
	}
	}
	
	var history=_createDOMHistory2['default'](_extends({},options,{
	getCurrentLocation:getCurrentLocation,
	finishTransition:finishTransition,
	saveState:_DOMStateStorage.saveState}));
	
	
	var listenerCount=0,
	stopHashChangeListener=undefined;
	
	function listenBefore(listener){
	if(++listenerCount===1)stopHashChangeListener=startHashChangeListener(history);
	
	var unlisten=history.listenBefore(listener);
	
	return function(){
	unlisten();
	
	if(--listenerCount===0)stopHashChangeListener();
	};
	}
	
	function listen(listener){
	if(++listenerCount===1)stopHashChangeListener=startHashChangeListener(history);
	
	var unlisten=history.listen(listener);
	
	return function(){
	unlisten();
	
	if(--listenerCount===0)stopHashChangeListener();
	};
	}
	
	function push(location){
	process.env.NODE_ENV!=='production'?_warning2['default'](queryKey||location.state==null,'You cannot use state without a queryKey it will be dropped'):undefined;
	
	history.push(location);
	}
	
	function replace(location){
	process.env.NODE_ENV!=='production'?_warning2['default'](queryKey||location.state==null,'You cannot use state without a queryKey it will be dropped'):undefined;
	
	history.replace(location);
	}
	
	var goIsSupportedWithoutReload=_DOMUtils.supportsGoWithoutReloadUsingHash();
	
	function go(n){
	process.env.NODE_ENV!=='production'?_warning2['default'](goIsSupportedWithoutReload,'Hash history go(n) causes a full page reload in this browser'):undefined;
	
	history.go(n);
	}
	
	function createHref(path){
	return'#'+history.createHref(path);
	}
	
	
	function registerTransitionHook(hook){
	if(++listenerCount===1)stopHashChangeListener=startHashChangeListener(history);
	
	history.registerTransitionHook(hook);
	}
	
	
	function unregisterTransitionHook(hook){
	history.unregisterTransitionHook(hook);
	
	if(--listenerCount===0)stopHashChangeListener();
	}
	
	
	function pushState(state,path){
	process.env.NODE_ENV!=='production'?_warning2['default'](queryKey||state==null,'You cannot use state without a queryKey it will be dropped'):undefined;
	
	history.pushState(state,path);
	}
	
	
	function replaceState(state,path){
	process.env.NODE_ENV!=='production'?_warning2['default'](queryKey||state==null,'You cannot use state without a queryKey it will be dropped'):undefined;
	
	history.replaceState(state,path);
	}
	
	return _extends({},history,{
	listenBefore:listenBefore,
	listen:listen,
	push:push,
	replace:replace,
	go:go,
	createHref:createHref,
	
	registerTransitionHook:registerTransitionHook,
	unregisterTransitionHook:unregisterTransitionHook,
	pushState:pushState,
	replaceState:replaceState});
	
	}
	
	exports['default']=createHashHistory;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	var warning=function warning(){};
	
	if(process.env.NODE_ENV!=='production'){
	warning=function warning(condition,format,args){
	var len=arguments.length;
	args=new Array(len>2?len-2:0);
	for(var key=2;key<len;key++){
	args[key-2]=arguments[key];
	}
	if(format===undefined){
	throw new Error(
	'`warning(condition, format, ...args)` requires a warning '+
	'message argument');
	
	}
	
	if(format.length<10||/^[s\W]*$/.test(format)){
	throw new Error(
	'The warning format should be able to uniquely identify this '+
	'warning. Please, use a more descriptive format than: '+format);
	
	}
	
	if(!condition){
	var argIndex=0;
	var message='Warning: '+
	format.replace(/%s/g,function(){
	return args[argIndex++];
	});
	if(typeof console!=='undefined'){
	console.error(message);
	}
	try{
	
	
	throw new Error(message);
	}catch(x){}
	}
	};
	}
	
	module.exports=warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 77 */
/***/ function(module, exports) {

	
	
	
	'use strict';
	
	exports.__esModule=true;
	var PUSH='PUSH';
	
	exports.PUSH=PUSH;
	
	
	
	var REPLACE='REPLACE';
	
	exports.REPLACE=REPLACE;
	
	
	
	
	
	
	
	
	var POP='POP';
	
	exports.POP=POP;
	exports['default']={
	PUSH:PUSH,
	REPLACE:REPLACE,
	POP:POP};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports.extractPath=extractPath;
	exports.parsePath=parsePath;
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function extractPath(string){
	var match=string.match(/^https?:\/\/[^\/]*/);
	
	if(match==null)return string;
	
	return string.substring(match[0].length);
	}
	
	function parsePath(path){
	var pathname=extractPath(path);
	var search='';
	var hash='';
	
	process.env.NODE_ENV!=='production'?_warning2['default'](path===pathname,'A path must be pathname + search + hash only, not a fully qualified URL like "%s"',path):undefined;
	
	var hashIndex=pathname.indexOf('#');
	if(hashIndex!==-1){
	hash=pathname.substring(hashIndex);
	pathname=pathname.substring(0,hashIndex);
	}
	
	var searchIndex=pathname.indexOf('?');
	if(searchIndex!==-1){
	search=pathname.substring(searchIndex);
	pathname=pathname.substring(0,searchIndex);
	}
	
	if(pathname==='')pathname='/';
	
	return{
	pathname:pathname,
	search:search,
	hash:hash};
	
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule=true;
	var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);
	exports.canUseDOM=canUseDOM;

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule=true;
	exports.addEventListener=addEventListener;
	exports.removeEventListener=removeEventListener;
	exports.getHashPath=getHashPath;
	exports.replaceHashPath=replaceHashPath;
	exports.getWindowPath=getWindowPath;
	exports.go=go;
	exports.getUserConfirmation=getUserConfirmation;
	exports.supportsHistory=supportsHistory;
	exports.supportsGoWithoutReloadUsingHash=supportsGoWithoutReloadUsingHash;
	
	function addEventListener(node,event,listener){
	if(node.addEventListener){
	node.addEventListener(event,listener,false);
	}else{
	node.attachEvent('on'+event,listener);
	}
	}
	
	function removeEventListener(node,event,listener){
	if(node.removeEventListener){
	node.removeEventListener(event,listener,false);
	}else{
	node.detachEvent('on'+event,listener);
	}
	}
	
	function getHashPath(){
	
	
	return window.location.href.split('#')[1]||'';
	}
	
	function replaceHashPath(path){
	window.location.replace(window.location.pathname+window.location.search+'#'+path);
	}
	
	function getWindowPath(){
	return window.location.pathname+window.location.search+window.location.hash;
	}
	
	function go(n){
	if(n)window.history.go(n);
	}
	
	function getUserConfirmation(message,callback){
	callback(window.confirm(message));
	}
	
	
	
	
	
	
	
	
	
	function supportsHistory(){
	var ua=navigator.userAgent;
	if((ua.indexOf('Android 2.')!==-1||ua.indexOf('Android 4.0')!==-1)&&ua.indexOf('Mobile Safari')!==-1&&ua.indexOf('Chrome')===-1&&ua.indexOf('Windows Phone')===-1){
	return false;
	}
	return window.history&&'pushState'in window.history;
	}
	
	
	
	
	
	function supportsGoWithoutReloadUsingHash(){
	var ua=navigator.userAgent;
	return ua.indexOf('Firefox')===-1;
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	'use strict';
	
	exports.__esModule=true;
	exports.saveState=saveState;
	exports.readState=readState;
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var KeyPrefix='@@History/';
	var QuotaExceededErrors=['QuotaExceededError','QUOTA_EXCEEDED_ERR'];
	
	var SecurityError='SecurityError';
	
	function createKey(key){
	return KeyPrefix+key;
	}
	
	function saveState(key,state){
	try{
	if(state==null){
	window.sessionStorage.removeItem(createKey(key));
	}else{
	window.sessionStorage.setItem(createKey(key),JSON.stringify(state));
	}
	}catch(error){
	if(error.name===SecurityError){
	
	
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'[history] Unable to save state; sessionStorage is not available due to security settings'):undefined;
	
	return;
	}
	
	if(QuotaExceededErrors.indexOf(error.name)>=0&&window.sessionStorage.length===0){
	
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'[history] Unable to save state; sessionStorage is not available in Safari private mode'):undefined;
	
	return;
	}
	
	throw error;
	}
	}
	
	function readState(key){
	var json=undefined;
	try{
	json=window.sessionStorage.getItem(createKey(key));
	}catch(error){
	if(error.name===SecurityError){
	
	
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'[history] Unable to read state; sessionStorage is not available due to security settings'):undefined;
	
	return null;
	}
	}
	
	if(json){
	try{
	return JSON.parse(json);
	}catch(error){
	
	}
	}
	
	return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment=__webpack_require__(79);
	
	var _DOMUtils=__webpack_require__(80);
	
	var _createHistory=__webpack_require__(83);
	
	var _createHistory2=_interopRequireDefault(_createHistory);
	
	function createDOMHistory(options){
	var history=_createHistory2['default'](_extends({
	getUserConfirmation:_DOMUtils.getUserConfirmation},
	options,{
	go:_DOMUtils.go}));
	
	
	function listen(listener){
	!_ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?_invariant2['default'](false,'DOM history needs a DOM'):_invariant2['default'](false):undefined;
	
	return history.listen(listener);
	}
	
	return _extends({},history,{
	listen:listen});
	
	}
	
	exports['default']=createDOMHistory;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _deepEqual=__webpack_require__(84);
	
	var _deepEqual2=_interopRequireDefault(_deepEqual);
	
	var _PathUtils=__webpack_require__(78);
	
	var _AsyncUtils=__webpack_require__(87);
	
	var _Actions=__webpack_require__(77);
	
	var _createLocation2=__webpack_require__(88);
	
	var _createLocation3=_interopRequireDefault(_createLocation2);
	
	var _runTransitionHook=__webpack_require__(89);
	
	var _runTransitionHook2=_interopRequireDefault(_runTransitionHook);
	
	var _deprecate=__webpack_require__(90);
	
	var _deprecate2=_interopRequireDefault(_deprecate);
	
	function createRandomKey(length){
	return Math.random().toString(36).substr(2,length);
	}
	
	function locationsAreEqual(a,b){
	return a.pathname===b.pathname&&a.search===b.search&&
	
	a.key===b.key&&_deepEqual2['default'](a.state,b.state);
	}
	
	var DefaultKeyLength=6;
	
	function createHistory(){
	var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	var getCurrentLocation=options.getCurrentLocation;
	var finishTransition=options.finishTransition;
	var saveState=options.saveState;
	var go=options.go;
	var getUserConfirmation=options.getUserConfirmation;
	var keyLength=options.keyLength;
	
	if(typeof keyLength!=='number')keyLength=DefaultKeyLength;
	
	var transitionHooks=[];
	
	function listenBefore(hook){
	transitionHooks.push(hook);
	
	return function(){
	transitionHooks=transitionHooks.filter(function(item){
	return item!==hook;
	});
	};
	}
	
	var allKeys=[];
	var changeListeners=[];
	var location=undefined;
	
	function getCurrent(){
	if(pendingLocation&&pendingLocation.action===_Actions.POP){
	return allKeys.indexOf(pendingLocation.key);
	}else if(location){
	return allKeys.indexOf(location.key);
	}else{
	return-1;
	}
	}
	
	function updateLocation(newLocation){
	var current=getCurrent();
	
	location=newLocation;
	
	if(location.action===_Actions.PUSH){
	allKeys=[].concat(allKeys.slice(0,current+1),[location.key]);
	}else if(location.action===_Actions.REPLACE){
	allKeys[current]=location.key;
	}
	
	changeListeners.forEach(function(listener){
	listener(location);
	});
	}
	
	function listen(listener){
	changeListeners.push(listener);
	
	if(location){
	listener(location);
	}else{
	var _location=getCurrentLocation();
	allKeys=[_location.key];
	updateLocation(_location);
	}
	
	return function(){
	changeListeners=changeListeners.filter(function(item){
	return item!==listener;
	});
	};
	}
	
	function confirmTransitionTo(location,callback){
	_AsyncUtils.loopAsync(transitionHooks.length,function(index,next,done){
	_runTransitionHook2['default'](transitionHooks[index],location,function(result){
	if(result!=null){
	done(result);
	}else{
	next();
	}
	});
	},function(message){
	if(getUserConfirmation&&typeof message==='string'){
	getUserConfirmation(message,function(ok){
	callback(ok!==false);
	});
	}else{
	callback(message!==false);
	}
	});
	}
	
	var pendingLocation=undefined;
	
	function transitionTo(nextLocation){
	if(location&&locationsAreEqual(location,nextLocation))return;
	
	pendingLocation=nextLocation;
	
	confirmTransitionTo(nextLocation,function(ok){
	if(pendingLocation!==nextLocation)return;
	
	if(ok){
	
	if(nextLocation.action===_Actions.PUSH){
	var prevPath=createPath(location);
	var nextPath=createPath(nextLocation);
	
	if(nextPath===prevPath&&_deepEqual2['default'](location.state,nextLocation.state))nextLocation.action=_Actions.REPLACE;
	}
	
	if(finishTransition(nextLocation)!==false)updateLocation(nextLocation);
	}else if(location&&nextLocation.action===_Actions.POP){
	var prevIndex=allKeys.indexOf(location.key);
	var nextIndex=allKeys.indexOf(nextLocation.key);
	
	if(prevIndex!==-1&&nextIndex!==-1)go(prevIndex-nextIndex);
	}
	});
	}
	
	function push(location){
	transitionTo(createLocation(location,_Actions.PUSH,createKey()));
	}
	
	function replace(location){
	transitionTo(createLocation(location,_Actions.REPLACE,createKey()));
	}
	
	function goBack(){
	go(-1);
	}
	
	function goForward(){
	go(1);
	}
	
	function createKey(){
	return createRandomKey(keyLength);
	}
	
	function createPath(location){
	if(location==null||typeof location==='string')return location;
	
	var pathname=location.pathname;
	var search=location.search;
	var hash=location.hash;
	
	var result=pathname;
	
	if(search)result+=search;
	
	if(hash)result+=hash;
	
	return result;
	}
	
	function createHref(location){
	return createPath(location);
	}
	
	function createLocation(location,action){
	var key=arguments.length<=2||arguments[2]===undefined?createKey():arguments[2];
	
	if((typeof action==='undefined'?'undefined':_typeof(action))==='object'){
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'The state (2nd) argument to history.createLocation is deprecated; use a '+'location descriptor instead'):undefined;
	
	if(typeof location==='string')location=_PathUtils.parsePath(location);
	
	location=_extends({},location,{state:action});
	
	action=key;
	key=arguments[3]||createKey();
	}
	
	return _createLocation3['default'](location,action,key);
	}
	
	
	function setState(state){
	if(location){
	updateLocationState(location,state);
	updateLocation(location);
	}else{
	updateLocationState(getCurrentLocation(),state);
	}
	}
	
	function updateLocationState(location,state){
	location.state=_extends({},location.state,state);
	saveState(location.key,location.state);
	}
	
	
	function registerTransitionHook(hook){
	if(transitionHooks.indexOf(hook)===-1)transitionHooks.push(hook);
	}
	
	
	function unregisterTransitionHook(hook){
	transitionHooks=transitionHooks.filter(function(item){
	return item!==hook;
	});
	}
	
	
	function pushState(state,path){
	if(typeof path==='string')path=_PathUtils.parsePath(path);
	
	push(_extends({state:state},path));
	}
	
	
	function replaceState(state,path){
	if(typeof path==='string')path=_PathUtils.parsePath(path);
	
	replace(_extends({state:state},path));
	}
	
	return{
	listenBefore:listenBefore,
	listen:listen,
	transitionTo:transitionTo,
	push:push,
	replace:replace,
	go:go,
	goBack:goBack,
	goForward:goForward,
	createKey:createKey,
	createPath:createPath,
	createHref:createHref,
	createLocation:createLocation,
	
	setState:_deprecate2['default'](setState,'setState is deprecated; use location.key to save state instead'),
	registerTransitionHook:_deprecate2['default'](registerTransitionHook,'registerTransitionHook is deprecated; use listenBefore instead'),
	unregisterTransitionHook:_deprecate2['default'](unregisterTransitionHook,'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	pushState:_deprecate2['default'](pushState,'pushState is deprecated; use push instead'),
	replaceState:_deprecate2['default'](replaceState,'replaceState is deprecated; use replace instead')};
	
	}
	
	exports['default']=createHistory;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var pSlice=Array.prototype.slice;
	var objectKeys=__webpack_require__(85);
	var isArguments=__webpack_require__(86);
	
	var deepEqual=module.exports=function(actual,expected,opts){
	if(!opts)opts={};
	
	if(actual===expected){
	return true;
	
	}else if(actual instanceof Date&&expected instanceof Date){
	return actual.getTime()===expected.getTime();
	
	
	
	}else if(!actual||!expected||(typeof actual==='undefined'?'undefined':_typeof(actual))!='object'&&(typeof expected==='undefined'?'undefined':_typeof(expected))!='object'){
	return opts.strict?actual===expected:actual==expected;
	
	
	
	
	
	
	
	}else{
	return objEquiv(actual,expected,opts);
	}
	};
	
	function isUndefinedOrNull(value){
	return value===null||value===undefined;
	}
	
	function isBuffer(x){
	if(!x||(typeof x==='undefined'?'undefined':_typeof(x))!=='object'||typeof x.length!=='number')return false;
	if(typeof x.copy!=='function'||typeof x.slice!=='function'){
	return false;
	}
	if(x.length>0&&typeof x[0]!=='number')return false;
	return true;
	}
	
	function objEquiv(a,b,opts){
	var i,key;
	if(isUndefinedOrNull(a)||isUndefinedOrNull(b))
	return false;
	
	if(a.prototype!==b.prototype)return false;
	
	
	if(isArguments(a)){
	if(!isArguments(b)){
	return false;
	}
	a=pSlice.call(a);
	b=pSlice.call(b);
	return deepEqual(a,b,opts);
	}
	if(isBuffer(a)){
	if(!isBuffer(b)){
	return false;
	}
	if(a.length!==b.length)return false;
	for(i=0;i<a.length;i++){
	if(a[i]!==b[i])return false;
	}
	return true;
	}
	try{
	var ka=objectKeys(a),
	kb=objectKeys(b);
	}catch(e){
	return false;
	}
	
	
	if(ka.length!=kb.length)
	return false;
	
	ka.sort();
	kb.sort();
	
	for(i=ka.length-1;i>=0;i--){
	if(ka[i]!=kb[i])
	return false;
	}
	
	
	for(i=ka.length-1;i>=0;i--){
	key=ka[i];
	if(!deepEqual(a[key],b[key],opts))return false;
	}
	return(typeof a==='undefined'?'undefined':_typeof(a))===(typeof b==='undefined'?'undefined':_typeof(b));
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';exports=module.exports=typeof Object.keys==='function'?
	Object.keys:shim;
	
	exports.shim=shim;
	function shim(obj){
	var keys=[];
	for(var key in obj){keys.push(key);}
	return keys;
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var supportsArgumentsClass=function(){
	return Object.prototype.toString.call(arguments);
	}()=='[object Arguments]';
	
	exports=module.exports=supportsArgumentsClass?supported:unsupported;
	
	exports.supported=supported;
	function supported(object){
	return Object.prototype.toString.call(object)=='[object Arguments]';
	};
	
	exports.unsupported=unsupported;
	function unsupported(object){
	return object&&
	(typeof object==='undefined'?'undefined':_typeof(object))=='object'&&
	typeof object.length=='number'&&
	Object.prototype.hasOwnProperty.call(object,'callee')&&
	!Object.prototype.propertyIsEnumerable.call(object,'callee')||
	false;
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule=true;
	var _slice=Array.prototype.slice;
	exports.loopAsync=loopAsync;
	
	function loopAsync(turns,work,callback){
	var currentTurn=0,
	isDone=false;
	var sync=false,
	hasNext=false,
	doneArgs=undefined;
	
	function done(){
	isDone=true;
	if(sync){
	
	doneArgs=[].concat(_slice.call(arguments));
	return;
	}
	
	callback.apply(this,arguments);
	}
	
	function next(){
	if(isDone){
	return;
	}
	
	hasNext=true;
	if(sync){
	
	return;
	}
	
	sync=true;
	
	while(!isDone&&currentTurn<turns&&hasNext){
	hasNext=false;
	work.call(this,currentTurn++,next,done);
	}
	
	sync=false;
	
	if(isDone){
	
	callback.apply(this,doneArgs);
	return;
	}
	
	if(currentTurn>=turns&&hasNext){
	isDone=true;
	callback();
	}
	}
	
	next();
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _Actions=__webpack_require__(77);
	
	var _PathUtils=__webpack_require__(78);
	
	function createLocation(){
	var location=arguments.length<=0||arguments[0]===undefined?'/':arguments[0];
	var action=arguments.length<=1||arguments[1]===undefined?_Actions.POP:arguments[1];
	var key=arguments.length<=2||arguments[2]===undefined?null:arguments[2];
	
	var _fourthArg=arguments.length<=3||arguments[3]===undefined?null:arguments[3];
	
	if(typeof location==='string')location=_PathUtils.parsePath(location);
	
	if((typeof action==='undefined'?'undefined':_typeof(action))==='object'){
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'The state (2nd) argument to createLocation is deprecated; use a '+'location descriptor instead'):undefined;
	
	location=_extends({},location,{state:action});
	
	action=key||_Actions.POP;
	key=_fourthArg;
	}
	
	var pathname=location.pathname||'/';
	var search=location.search||'';
	var hash=location.hash||'';
	var state=location.state||null;
	
	return{
	pathname:pathname,
	search:search,
	hash:hash,
	state:state,
	action:action,
	key:key};
	
	}
	
	exports['default']=createLocation;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function runTransitionHook(hook,location,callback){
	var result=hook(location,callback);
	
	if(hook.length<2){
	
	
	callback(result);
	}else{
	process.env.NODE_ENV!=='production'?_warning2['default'](result===undefined,'You should not "return" in a transition hook with a callback argument; call the callback instead'):undefined;
	}
	}
	
	exports['default']=runTransitionHook;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function deprecate(fn,message){
	return function(){
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'[history] '+message):undefined;
	return fn.apply(this,arguments);
	};
	}
	
	exports['default']=deprecate;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _queryString=__webpack_require__(92);
	
	var _runTransitionHook=__webpack_require__(89);
	
	var _runTransitionHook2=_interopRequireDefault(_runTransitionHook);
	
	var _PathUtils=__webpack_require__(78);
	
	var _deprecate=__webpack_require__(90);
	
	var _deprecate2=_interopRequireDefault(_deprecate);
	
	var SEARCH_BASE_KEY='$searchBase';
	
	function defaultStringifyQuery(query){
	return _queryString.stringify(query).replace(/%20/g,'+');
	}
	
	var defaultParseQueryString=_queryString.parse;
	
	function isNestedObject(object){
	for(var p in object){
	if(Object.prototype.hasOwnProperty.call(object,p)&&_typeof(object[p])==='object'&&!Array.isArray(object[p])&&object[p]!==null)return true;
	}return false;
	}
	
	
	
	
	
	function useQueries(createHistory){
	return function(){
	var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	
	var history=createHistory(options);
	
	var stringifyQuery=options.stringifyQuery;
	var parseQueryString=options.parseQueryString;
	
	if(typeof stringifyQuery!=='function')stringifyQuery=defaultStringifyQuery;
	
	if(typeof parseQueryString!=='function')parseQueryString=defaultParseQueryString;
	
	function addQuery(location){
	if(location.query==null){
	var search=location.search;
	
	location.query=parseQueryString(search.substring(1));
	location[SEARCH_BASE_KEY]={search:search,searchBase:''};
	}
	
	
	
	
	return location;
	}
	
	function appendQuery(location,query){
	var _extends2;
	
	var searchBaseSpec=location[SEARCH_BASE_KEY];
	var queryString=query?stringifyQuery(query):'';
	if(!searchBaseSpec&&!queryString){
	return location;
	}
	
	process.env.NODE_ENV!=='production'?_warning2['default'](stringifyQuery!==defaultStringifyQuery||!isNestedObject(query),'useQueries does not stringify nested query objects by default; '+'use a custom stringifyQuery function'):undefined;
	
	if(typeof location==='string')location=_PathUtils.parsePath(location);
	
	var searchBase=undefined;
	if(searchBaseSpec&&location.search===searchBaseSpec.search){
	searchBase=searchBaseSpec.searchBase;
	}else{
	searchBase=location.search||'';
	}
	
	var search=searchBase;
	if(queryString){
	search+=(search?'&':'?')+queryString;
	}
	
	return _extends({},location,(_extends2={
	search:search},
	_extends2[SEARCH_BASE_KEY]={search:search,searchBase:searchBase},_extends2));
	}
	
	
	function listenBefore(hook){
	return history.listenBefore(function(location,callback){
	_runTransitionHook2['default'](hook,addQuery(location),callback);
	});
	}
	
	function listen(listener){
	return history.listen(function(location){
	listener(addQuery(location));
	});
	}
	
	
	function push(location){
	history.push(appendQuery(location,location.query));
	}
	
	function replace(location){
	history.replace(appendQuery(location,location.query));
	}
	
	function createPath(location,query){
	process.env.NODE_ENV!=='production'?_warning2['default'](!query,'the query argument to createPath is deprecated; use a location descriptor instead'):undefined;
	
	return history.createPath(appendQuery(location,query||location.query));
	}
	
	function createHref(location,query){
	process.env.NODE_ENV!=='production'?_warning2['default'](!query,'the query argument to createHref is deprecated; use a location descriptor instead'):undefined;
	
	return history.createHref(appendQuery(location,query||location.query));
	}
	
	function createLocation(location){
	for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
	args[_key-1]=arguments[_key];
	}
	
	var fullLocation=history.createLocation.apply(history,[appendQuery(location,location.query)].concat(args));
	if(location.query){
	fullLocation.query=location.query;
	}
	return addQuery(fullLocation);
	}
	
	
	function pushState(state,path,query){
	if(typeof path==='string')path=_PathUtils.parsePath(path);
	
	push(_extends({state:state},path,{query:query}));
	}
	
	
	function replaceState(state,path,query){
	if(typeof path==='string')path=_PathUtils.parsePath(path);
	
	replace(_extends({state:state},path,{query:query}));
	}
	
	return _extends({},history,{
	listenBefore:listenBefore,
	listen:listen,
	push:push,
	replace:replace,
	createPath:createPath,
	createHref:createHref,
	createLocation:createLocation,
	
	pushState:_deprecate2['default'](pushState,'pushState is deprecated; use push instead'),
	replaceState:_deprecate2['default'](replaceState,'replaceState is deprecated; use replace instead')});
	
	};
	}
	
	exports['default']=useQueries;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode=__webpack_require__(93);
	
	exports.extract=function(str){
	return str.split('?')[1]||'';
	};
	
	exports.parse=function(str){
	if(typeof str!=='string'){
	return{};
	}
	
	str=str.trim().replace(/^(\?|#|&)/,'');
	
	if(!str){
	return{};
	}
	
	return str.split('&').reduce(function(ret,param){
	var parts=param.replace(/\+/g,' ').split('=');
	
	
	var key=parts.shift();
	var val=parts.length>0?parts.join('='):undefined;
	
	key=decodeURIComponent(key);
	
	
	
	val=val===undefined?null:decodeURIComponent(val);
	
	if(!ret.hasOwnProperty(key)){
	ret[key]=val;
	}else if(Array.isArray(ret[key])){
	ret[key].push(val);
	}else{
	ret[key]=[ret[key],val];
	}
	
	return ret;
	},{});
	};
	
	exports.stringify=function(obj){
	return obj?Object.keys(obj).sort().map(function(key){
	var val=obj[key];
	
	if(val===undefined){
	return'';
	}
	
	if(val===null){
	return key;
	}
	
	if(Array.isArray(val)){
	return val.slice().sort().map(function(val2){
	return strictUriEncode(key)+'='+strictUriEncode(val2);
	}).join('&');
	}
	
	return strictUriEncode(key)+'='+strictUriEncode(val);
	}).filter(function(x){
	return x.length>0;
	}).join('&'):'';
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';
	module.exports=function(str){
	return encodeURIComponent(str).replace(/[!'()*]/g,function(c){
	return'%'+c.charCodeAt(0).toString(16).toUpperCase();
	});
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports.default=createTransitionManager;
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _Actions=__webpack_require__(77);
	
	var _computeChangedRoutes2=__webpack_require__(95);
	
	var _computeChangedRoutes3=_interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils=__webpack_require__(96);
	
	var _isActive2=__webpack_require__(98);
	
	var _isActive3=_interopRequireDefault(_isActive2);
	
	var _getComponents=__webpack_require__(99);
	
	var _getComponents2=_interopRequireDefault(_getComponents);
	
	var _matchRoutes=__webpack_require__(101);
	
	var _matchRoutes2=_interopRequireDefault(_matchRoutes);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function hasAnyProperties(object){
	for(var p in object){
	if(Object.prototype.hasOwnProperty.call(object,p))return true;
	}return false;
	}
	
	function createTransitionManager(history,routes){
	var state={};
	
	
	
	function isActive(location){
	var indexOnlyOrDeprecatedQuery=arguments.length<=1||arguments[1]===undefined?false:arguments[1];
	var deprecatedIndexOnly=arguments.length<=2||arguments[2]===undefined?null:arguments[2];
	
	var indexOnly=void 0;
	if(indexOnlyOrDeprecatedQuery&&indexOnlyOrDeprecatedQuery!==true||deprecatedIndexOnly!==null){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated'):void 0;
	location={pathname:location,query:indexOnlyOrDeprecatedQuery};
	indexOnly=deprecatedIndexOnly||false;
	}else{
	location=history.createLocation(location);
	indexOnly=indexOnlyOrDeprecatedQuery;
	}
	
	return(0,_isActive3.default)(location,indexOnly,state.location,state.routes,state.params);
	}
	
	function createLocationFromRedirectInfo(location){
	return history.createLocation(location,_Actions.REPLACE);
	}
	
	var partialNextState=void 0;
	
	function match(location,callback){
	if(partialNextState&&partialNextState.location===location){
	
	finishMatch(partialNextState,callback);
	}else{
	(0,_matchRoutes2.default)(routes,location,function(error,nextState){
	if(error){
	callback(error);
	}else if(nextState){
	finishMatch(_extends({},nextState,{location:location}),callback);
	}else{
	callback();
	}
	});
	}
	}
	
	function finishMatch(nextState,callback){
	var _computeChangedRoutes=(0,_computeChangedRoutes3.default)(state,nextState);
	
	var leaveRoutes=_computeChangedRoutes.leaveRoutes;
	var changeRoutes=_computeChangedRoutes.changeRoutes;
	var enterRoutes=_computeChangedRoutes.enterRoutes;
	
	
	(0,_TransitionUtils.runLeaveHooks)(leaveRoutes,state);
	
	
	leaveRoutes.filter(function(route){
	return enterRoutes.indexOf(route)===-1;
	}).forEach(removeListenBeforeHooksForRoute);
	
	
	(0,_TransitionUtils.runChangeHooks)(changeRoutes,state,nextState,function(error,redirectInfo){
	if(error||redirectInfo)return handleErrorOrRedirect(error,redirectInfo);
	
	(0,_TransitionUtils.runEnterHooks)(enterRoutes,nextState,finishEnterHooks);
	});
	
	function finishEnterHooks(error,redirectInfo){
	if(error||redirectInfo)return handleErrorOrRedirect(error,redirectInfo);
	
	
	(0,_getComponents2.default)(nextState,function(error,components){
	if(error){
	callback(error);
	}else{
	
	
	callback(null,null,state=_extends({},nextState,{components:components}));
	}
	});
	}
	
	function handleErrorOrRedirect(error,redirectInfo){
	if(error)callback(error);else callback(null,createLocationFromRedirectInfo(redirectInfo));
	}
	}
	
	var RouteGuid=1;
	
	function getRouteID(route){
	var create=arguments.length<=1||arguments[1]===undefined?true:arguments[1];
	
	return route.__id__||create&&(route.__id__=RouteGuid++);
	}
	
	var RouteHooks=Object.create(null);
	
	function getRouteHooksForRoutes(routes){
	return routes.reduce(function(hooks,route){
	hooks.push.apply(hooks,RouteHooks[getRouteID(route)]);
	return hooks;
	},[]);
	}
	
	function transitionHook(location,callback){
	(0,_matchRoutes2.default)(routes,location,function(error,nextState){
	if(nextState==null){
	
	
	
	callback();
	return;
	}
	
	
	
	partialNextState=_extends({},nextState,{location:location});
	
	var hooks=getRouteHooksForRoutes((0,_computeChangedRoutes3.default)(state,partialNextState).leaveRoutes);
	
	var result=void 0;
	for(var i=0,len=hooks.length;result==null&&i<len;++i){
	
	
	result=hooks[i](location);
	}
	
	callback(result);
	});
	}
	
	
	function beforeUnloadHook(){
	
	
	if(state.routes){
	var hooks=getRouteHooksForRoutes(state.routes);
	
	var message=void 0;
	for(var i=0,len=hooks.length;typeof message!=='string'&&i<len;++i){
	
	
	message=hooks[i]();
	}
	
	return message;
	}
	}
	
	var unlistenBefore=void 0,
	unlistenBeforeUnload=void 0;
	
	function removeListenBeforeHooksForRoute(route){
	var routeID=getRouteID(route,false);
	if(!routeID){
	return;
	}
	
	delete RouteHooks[routeID];
	
	if(!hasAnyProperties(RouteHooks)){
	
	if(unlistenBefore){
	unlistenBefore();
	unlistenBefore=null;
	}
	
	if(unlistenBeforeUnload){
	unlistenBeforeUnload();
	unlistenBeforeUnload=null;
	}
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function listenBeforeLeavingRoute(route,hook){
	
	
	
	var routeID=getRouteID(route);
	var hooks=RouteHooks[routeID];
	
	if(!hooks){
	var thereWereNoRouteHooks=!hasAnyProperties(RouteHooks);
	
	RouteHooks[routeID]=[hook];
	
	if(thereWereNoRouteHooks){
	
	unlistenBefore=history.listenBefore(transitionHook);
	
	if(history.listenBeforeUnload)unlistenBeforeUnload=history.listenBeforeUnload(beforeUnloadHook);
	}
	}else{
	if(hooks.indexOf(hook)===-1){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead'):void 0;
	
	hooks.push(hook);
	}
	}
	
	return function(){
	var hooks=RouteHooks[routeID];
	
	if(hooks){
	var newHooks=hooks.filter(function(item){
	return item!==hook;
	});
	
	if(newHooks.length===0){
	removeListenBeforeHooksForRoute(route);
	}else{
	RouteHooks[routeID]=newHooks;
	}
	}
	};
	}
	
	
	
	
	
	
	function listen(listener){
	
	
	return history.listen(function(location){
	if(state.location===location){
	listener(null,state);
	}else{
	match(location,function(error,redirectLocation,nextState){
	if(error){
	listener(error);
	}else if(redirectLocation){
	history.transitionTo(redirectLocation);
	}else if(nextState){
	listener(null,nextState);
	}else{
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'Location "%s" did not match any routes',location.pathname+location.search+location.hash):void 0;
	}
	});
	}
	});
	}
	
	return{
	isActive:isActive,
	match:match,
	listenBeforeLeavingRoute:listenBeforeLeavingRoute,
	listen:listen};
	
	}
	
	
	
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _PatternUtils=__webpack_require__(73);
	
	function routeParamsChanged(route,prevState,nextState){
	if(!route.path)return false;
	
	var paramNames=(0,_PatternUtils.getParamNames)(route.path);
	
	return paramNames.some(function(paramName){
	return prevState.params[paramName]!==nextState.params[paramName];
	});
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function computeChangedRoutes(prevState,nextState){
	var prevRoutes=prevState&&prevState.routes;
	var nextRoutes=nextState.routes;
	
	var leaveRoutes=void 0,
	changeRoutes=void 0,
	enterRoutes=void 0;
	if(prevRoutes){
	(function(){
	var parentIsLeaving=false;
	leaveRoutes=prevRoutes.filter(function(route){
	if(parentIsLeaving){
	return true;
	}else{
	var isLeaving=nextRoutes.indexOf(route)===-1||routeParamsChanged(route,prevState,nextState);
	if(isLeaving)parentIsLeaving=true;
	return isLeaving;
	}
	});
	
	
	leaveRoutes.reverse();
	
	enterRoutes=[];
	changeRoutes=[];
	
	nextRoutes.forEach(function(route){
	var isNew=prevRoutes.indexOf(route)===-1;
	var paramsChanged=leaveRoutes.indexOf(route)!==-1;
	
	if(isNew||paramsChanged)enterRoutes.push(route);else changeRoutes.push(route);
	});
	})();
	}else{
	leaveRoutes=[];
	changeRoutes=[];
	enterRoutes=nextRoutes;
	}
	
	return{
	leaveRoutes:leaveRoutes,
	changeRoutes:changeRoutes,
	enterRoutes:enterRoutes};
	
	}
	
	exports.default=computeChangedRoutes;
	module.exports=exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports.runEnterHooks=runEnterHooks;
	exports.runChangeHooks=runChangeHooks;
	exports.runLeaveHooks=runLeaveHooks;
	
	var _AsyncUtils=__webpack_require__(97);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function createTransitionHook(hook,route,asyncArity){
	return function(){
	for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){
	args[_key]=arguments[_key];
	}
	
	hook.apply(route,args);
	
	if(hook.length<asyncArity){
	var callback=args[args.length-1];
	
	
	callback();
	}
	};
	}
	
	function getEnterHooks(routes){
	return routes.reduce(function(hooks,route){
	if(route.onEnter)hooks.push(createTransitionHook(route.onEnter,route,3));
	
	return hooks;
	},[]);
	}
	
	function getChangeHooks(routes){
	return routes.reduce(function(hooks,route){
	if(route.onChange)hooks.push(createTransitionHook(route.onChange,route,4));
	return hooks;
	},[]);
	}
	
	function runTransitionHooks(length,iter,callback){
	if(!length){
	callback();
	return;
	}
	
	var redirectInfo=void 0;
	function replace(location,deprecatedPathname,deprecatedQuery){
	if(deprecatedPathname){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated'):void 0;
	redirectInfo={
	pathname:deprecatedPathname,
	query:deprecatedQuery,
	state:location};
	
	
	return;
	}
	
	redirectInfo=location;
	}
	
	(0,_AsyncUtils.loopAsync)(length,function(index,next,done){
	iter(index,replace,function(error){
	if(error||redirectInfo){
	done(error,redirectInfo);
	}else{
	next();
	}
	});
	},callback);
	}
	
	
	
	
	
	
	
	
	
	
	
	function runEnterHooks(routes,nextState,callback){
	var hooks=getEnterHooks(routes);
	return runTransitionHooks(hooks.length,function(index,replace,next){
	hooks[index](nextState,replace,next);
	},callback);
	}
	
	
	
	
	
	
	
	
	
	
	
	function runChangeHooks(routes,state,nextState,callback){
	var hooks=getChangeHooks(routes);
	return runTransitionHooks(hooks.length,function(index,replace,next){
	hooks[index](state,nextState,replace,next);
	},callback);
	}
	
	
	
	
	function runLeaveHooks(routes,prevState){
	for(var i=0,len=routes.length;i<len;++i){
	if(routes[i].onLeave)routes[i].onLeave.call(routes[i],prevState);
	}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule=true;
	exports.loopAsync=loopAsync;
	exports.mapAsync=mapAsync;
	function loopAsync(turns,work,callback){
	var currentTurn=0,
	isDone=false;
	var sync=false,
	hasNext=false,
	doneArgs=void 0;
	
	function done(){
	isDone=true;
	if(sync){
	
	doneArgs=[].concat(Array.prototype.slice.call(arguments));
	return;
	}
	
	callback.apply(this,arguments);
	}
	
	function next(){
	if(isDone){
	return;
	}
	
	hasNext=true;
	if(sync){
	
	return;
	}
	
	sync=true;
	
	while(!isDone&&currentTurn<turns&&hasNext){
	hasNext=false;
	work.call(this,currentTurn++,next,done);
	}
	
	sync=false;
	
	if(isDone){
	
	callback.apply(this,doneArgs);
	return;
	}
	
	if(currentTurn>=turns&&hasNext){
	isDone=true;
	callback();
	}
	}
	
	next();
	}
	
	function mapAsync(array,work,callback){
	var length=array.length;
	var values=[];
	
	if(length===0)return callback(null,values);
	
	var isDone=false,
	doneCount=0;
	
	function done(index,error,value){
	if(isDone)return;
	
	if(error){
	isDone=true;
	callback(error);
	}else{
	values[index]=value;
	
	isDone=++doneCount===length;
	
	if(isDone)callback(null,values);
	}
	}
	
	array.forEach(function(item,index){
	work(item,index,function(error,value){
	done(index,error,value);
	});
	});
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof2=typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _typeof=typeof Symbol==="function"&&_typeof2(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};
	
	exports.default=isActive;
	
	var _PatternUtils=__webpack_require__(73);
	
	function deepEqual(a,b){
	if(a==b)return true;
	
	if(a==null||b==null)return false;
	
	if(Array.isArray(a)){
	return Array.isArray(b)&&a.length===b.length&&a.every(function(item,index){
	return deepEqual(item,b[index]);
	});
	}
	
	if((typeof a==='undefined'?'undefined':_typeof(a))==='object'){
	for(var p in a){
	if(!Object.prototype.hasOwnProperty.call(a,p)){
	continue;
	}
	
	if(a[p]===undefined){
	if(b[p]!==undefined){
	return false;
	}
	}else if(!Object.prototype.hasOwnProperty.call(b,p)){
	return false;
	}else if(!deepEqual(a[p],b[p])){
	return false;
	}
	}
	
	return true;
	}
	
	return String(a)===String(b);
	}
	
	
	
	
	
	
	function pathIsActive(pathname,currentPathname){
	
	
	if(currentPathname.charAt(0)!=='/'){
	currentPathname='/'+currentPathname;
	}
	
	
	
	
	if(pathname.charAt(pathname.length-1)!=='/'){
	pathname+='/';
	}
	if(currentPathname.charAt(currentPathname.length-1)!=='/'){
	currentPathname+='/';
	}
	
	return currentPathname===pathname;
	}
	
	
	
	
	function routeIsActive(pathname,routes,params){
	var remainingPathname=pathname,
	paramNames=[],
	paramValues=[];
	
	
	for(var i=0,len=routes.length;i<len;++i){
	var route=routes[i];
	var pattern=route.path||'';
	
	if(pattern.charAt(0)==='/'){
	remainingPathname=pathname;
	paramNames=[];
	paramValues=[];
	}
	
	if(remainingPathname!==null&&pattern){
	var matched=(0,_PatternUtils.matchPattern)(pattern,remainingPathname);
	if(matched){
	remainingPathname=matched.remainingPathname;
	paramNames=[].concat(paramNames,matched.paramNames);
	paramValues=[].concat(paramValues,matched.paramValues);
	}else{
	remainingPathname=null;
	}
	
	if(remainingPathname===''){
	
	
	
	return paramNames.every(function(paramName,index){
	return String(paramValues[index])===String(params[paramName]);
	});
	}
	}
	}
	
	return false;
	}
	
	
	
	
	
	function queryIsActive(query,activeQuery){
	if(activeQuery==null)return query==null;
	
	if(query==null)return true;
	
	return deepEqual(query,activeQuery);
	}
	
	
	
	
	
	function isActive(_ref,indexOnly,currentLocation,routes,params){
	var pathname=_ref.pathname;
	var query=_ref.query;
	
	if(currentLocation==null)return false;
	
	
	
	
	if(pathname.charAt(0)!=='/'){
	pathname='/'+pathname;
	}
	
	if(!pathIsActive(pathname,currentLocation.pathname)){
	
	
	if(indexOnly||!routeIsActive(pathname,routes,params)){
	return false;
	}
	}
	
	return queryIsActive(query,currentLocation.query);
	}
	module.exports=exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _AsyncUtils=__webpack_require__(97);
	
	var _makeStateWithLocation=__webpack_require__(100);
	
	var _makeStateWithLocation2=_interopRequireDefault(_makeStateWithLocation);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function getComponentsForRoute(nextState,route,callback){
	if(route.component||route.components){
	callback(null,route.component||route.components);
	return;
	}
	
	var getComponent=route.getComponent||route.getComponents;
	if(!getComponent){
	callback();
	return;
	}
	
	var location=nextState.location;
	
	var nextStateWithLocation=(0,_makeStateWithLocation2.default)(nextState,location);
	
	getComponent.call(route,nextStateWithLocation,callback);
	}
	
	
	
	
	
	
	
	
	function getComponents(nextState,callback){
	(0,_AsyncUtils.mapAsync)(nextState.routes,function(route,index,callback){
	getComponentsForRoute(nextState,route,callback);
	},callback);
	}
	
	exports.default=getComponents;
	module.exports=exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports.default=makeStateWithLocation;
	
	var _deprecateObjectProperties=__webpack_require__(69);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function makeStateWithLocation(state,location){
	if(process.env.NODE_ENV!=='production'&&_deprecateObjectProperties.canUseMembrane){
	var stateWithLocation=_extends({},state);
	
	
	
	
	
	var _loop=function _loop(prop){
	if(!Object.prototype.hasOwnProperty.call(location,prop)){
	return'continue';
	}
	
	Object.defineProperty(stateWithLocation,prop,{
	get:function get(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.'):void 0;
	return location[prop];
	}});
	
	};
	
	for(var prop in location){
	var _ret=_loop(prop);
	
	if(_ret==='continue')continue;
	}
	
	return stateWithLocation;
	}
	
	return _extends({},state,location);
	}
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof2=typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _typeof=typeof Symbol==="function"&&_typeof2(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};
	
	exports.default=matchRoutes;
	
	var _AsyncUtils=__webpack_require__(97);
	
	var _makeStateWithLocation=__webpack_require__(100);
	
	var _makeStateWithLocation2=_interopRequireDefault(_makeStateWithLocation);
	
	var _PatternUtils=__webpack_require__(73);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _RouteUtils=__webpack_require__(67);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function getChildRoutes(route,location,paramNames,paramValues,callback){
	if(route.childRoutes){
	return[null,route.childRoutes];
	}
	if(!route.getChildRoutes){
	return[];
	}
	
	var sync=true,
	result=void 0;
	
	var partialNextState={
	location:location,
	params:createParams(paramNames,paramValues)};
	
	
	var partialNextStateWithLocation=(0,_makeStateWithLocation2.default)(partialNextState,location);
	
	route.getChildRoutes(partialNextStateWithLocation,function(error,childRoutes){
	childRoutes=!error&&(0,_RouteUtils.createRoutes)(childRoutes);
	if(sync){
	result=[error,childRoutes];
	return;
	}
	
	callback(error,childRoutes);
	});
	
	sync=false;
	return result;
	}
	
	function getIndexRoute(route,location,paramNames,paramValues,callback){
	if(route.indexRoute){
	callback(null,route.indexRoute);
	}else if(route.getIndexRoute){
	var partialNextState={
	location:location,
	params:createParams(paramNames,paramValues)};
	
	
	var partialNextStateWithLocation=(0,_makeStateWithLocation2.default)(partialNextState,location);
	
	route.getIndexRoute(partialNextStateWithLocation,function(error,indexRoute){
	callback(error,!error&&(0,_RouteUtils.createRoutes)(indexRoute)[0]);
	});
	}else if(route.childRoutes){
	(function(){
	var pathless=route.childRoutes.filter(function(childRoute){
	return!childRoute.path;
	});
	
	(0,_AsyncUtils.loopAsync)(pathless.length,function(index,next,done){
	getIndexRoute(pathless[index],location,paramNames,paramValues,function(error,indexRoute){
	if(error||indexRoute){
	var routes=[pathless[index]].concat(Array.isArray(indexRoute)?indexRoute:[indexRoute]);
	done(error,routes);
	}else{
	next();
	}
	});
	},function(err,routes){
	callback(null,routes);
	});
	})();
	}else{
	callback();
	}
	}
	
	function assignParams(params,paramNames,paramValues){
	return paramNames.reduce(function(params,paramName,index){
	var paramValue=paramValues&&paramValues[index];
	
	if(Array.isArray(params[paramName])){
	params[paramName].push(paramValue);
	}else if(paramName in params){
	params[paramName]=[params[paramName],paramValue];
	}else{
	params[paramName]=paramValue;
	}
	
	return params;
	},params);
	}
	
	function createParams(paramNames,paramValues){
	return assignParams({},paramNames,paramValues);
	}
	
	function matchRouteDeep(route,location,remainingPathname,paramNames,paramValues,callback){
	var pattern=route.path||'';
	
	if(pattern.charAt(0)==='/'){
	remainingPathname=location.pathname;
	paramNames=[];
	paramValues=[];
	}
	
	
	
	if(remainingPathname!==null&&pattern){
	try{
	var matched=(0,_PatternUtils.matchPattern)(pattern,remainingPathname);
	if(matched){
	remainingPathname=matched.remainingPathname;
	paramNames=[].concat(paramNames,matched.paramNames);
	paramValues=[].concat(paramValues,matched.paramValues);
	}else{
	remainingPathname=null;
	}
	}catch(error){
	callback(error);
	}
	
	
	
	if(remainingPathname===''){
	var _ret2=function(){
	var match={
	routes:[route],
	params:createParams(paramNames,paramValues)};
	
	
	getIndexRoute(route,location,paramNames,paramValues,function(error,indexRoute){
	if(error){
	callback(error);
	}else{
	if(Array.isArray(indexRoute)){
	var _match$routes;
	
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(indexRoute.every(function(route){
	return!route.path;
	}),'Index routes should not have paths'):void 0;
	(_match$routes=match.routes).push.apply(_match$routes,indexRoute);
	}else if(indexRoute){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(!indexRoute.path,'Index routes should not have paths'):void 0;
	match.routes.push(indexRoute);
	}
	
	callback(null,match);
	}
	});
	
	return{
	v:void 0};
	
	}();
	
	if((typeof _ret2==='undefined'?'undefined':_typeof(_ret2))==="object")return _ret2.v;
	}
	}
	
	if(remainingPathname!=null||route.childRoutes){
	
	
	
	var onChildRoutes=function onChildRoutes(error,childRoutes){
	if(error){
	callback(error);
	}else if(childRoutes){
	
	matchRoutes(childRoutes,location,function(error,match){
	if(error){
	callback(error);
	}else if(match){
	
	match.routes.unshift(route);
	callback(null,match);
	}else{
	callback();
	}
	},remainingPathname,paramNames,paramValues);
	}else{
	callback();
	}
	};
	
	var result=getChildRoutes(route,location,paramNames,paramValues,onChildRoutes);
	if(result){
	onChildRoutes.apply(undefined,result);
	}
	}else{
	callback();
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	function matchRoutes(routes,location,callback,remainingPathname){
	var paramNames=arguments.length<=4||arguments[4]===undefined?[]:arguments[4];
	var paramValues=arguments.length<=5||arguments[5]===undefined?[]:arguments[5];
	
	if(remainingPathname===undefined){
	
	
	
	if(location.pathname.charAt(0)!=='/'){
	location=_extends({},location,{
	pathname:'/'+location.pathname});
	
	}
	remainingPathname=location.pathname;
	}
	
	(0,_AsyncUtils.loopAsync)(routes.length,function(index,next,done){
	matchRouteDeep(routes[index],location,remainingPathname,paramNames,paramValues,function(error,match){
	if(error||match){
	done(error,match);
	}else{
	next();
	}
	});
	},callback);
	}
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof2=typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _typeof=typeof Symbol==="function"&&_typeof2(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _deprecateObjectProperties=__webpack_require__(69);
	
	var _deprecateObjectProperties2=_interopRequireDefault(_deprecateObjectProperties);
	
	var _getRouteParams=__webpack_require__(103);
	
	var _getRouteParams2=_interopRequireDefault(_getRouteParams);
	
	var _RouteUtils=__webpack_require__(67);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var _React$PropTypes=_react2.default.PropTypes;
	var array=_React$PropTypes.array;
	var func=_React$PropTypes.func;
	var object=_React$PropTypes.object;
	
	
	
	
	
	
	var RouterContext=_react2.default.createClass({
	displayName:'RouterContext',
	
	
	propTypes:{
	history:object,
	router:object.isRequired,
	location:object.isRequired,
	routes:array.isRequired,
	params:object.isRequired,
	components:array.isRequired,
	createElement:func.isRequired},
	
	
	getDefaultProps:function getDefaultProps(){
	return{
	createElement:_react2.default.createElement};
	
	},
	
	
	childContextTypes:{
	history:object,
	location:object.isRequired,
	router:object.isRequired},
	
	
	getChildContext:function getChildContext(){
	var _props=this.props;
	var router=_props.router;
	var history=_props.history;
	var location=_props.location;
	
	if(!router){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'`<RouterContext>` expects a `router` rather than a `history`'):void 0;
	
	router=_extends({},history,{
	setRouteLeaveHook:history.listenBeforeLeavingRoute});
	
	delete router.listenBeforeLeavingRoute;
	}
	
	if(process.env.NODE_ENV!=='production'){
	location=(0,_deprecateObjectProperties2.default)(location,'`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	}
	
	return{history:history,location:location,router:router};
	},
	createElement:function createElement(component,props){
	return component==null?null:this.props.createElement(component,props);
	},
	render:function render(){
	var _this=this;
	
	var _props2=this.props;
	var history=_props2.history;
	var location=_props2.location;
	var routes=_props2.routes;
	var params=_props2.params;
	var components=_props2.components;
	
	var element=null;
	
	if(components){
	element=components.reduceRight(function(element,components,index){
	if(components==null)return element;
	
	var route=routes[index];
	var routeParams=(0,_getRouteParams2.default)(route,params);
	var props={
	history:history,
	location:location,
	params:params,
	route:route,
	routeParams:routeParams,
	routes:routes};
	
	
	if((0,_RouteUtils.isReactChildren)(element)){
	props.children=element;
	}else if(element){
	for(var prop in element){
	if(Object.prototype.hasOwnProperty.call(element,prop))props[prop]=element[prop];
	}
	}
	
	if((typeof components==='undefined'?'undefined':_typeof(components))==='object'){
	var elements={};
	
	for(var key in components){
	if(Object.prototype.hasOwnProperty.call(components,key)){
	
	
	
	elements[key]=_this.createElement(components[key],_extends({
	key:key},props));
	}
	}
	
	return elements;
	}
	
	return _this.createElement(components,props);
	},element);
	}
	
	!(element===null||element===false||_react2.default.isValidElement(element))?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'The root route must render a single element'):(0,_invariant2.default)(false):void 0;
	
	return element;
	}});
	
	
	exports.default=RouterContext;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _PatternUtils=__webpack_require__(73);
	
	
	
	
	
	function getRouteParams(route,params){
	var routeParams={};
	
	if(!route.path)return routeParams;
	
	(0,_PatternUtils.getParamNames)(route.path).forEach(function(p){
	if(Object.prototype.hasOwnProperty.call(params,p)){
	routeParams[p]=params[p];
	}
	});
	
	return routeParams;
	}
	
	exports.default=getRouteParams;
	module.exports=exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports.createRouterObject=createRouterObject;
	exports.createRoutingHistory=createRoutingHistory;
	
	var _deprecateObjectProperties=__webpack_require__(69);
	
	var _deprecateObjectProperties2=_interopRequireDefault(_deprecateObjectProperties);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function createRouterObject(history,transitionManager){
	return _extends({},history,{
	setRouteLeaveHook:transitionManager.listenBeforeLeavingRoute,
	isActive:transitionManager.isActive});
	
	}
	
	
	function createRoutingHistory(history,transitionManager){
	history=_extends({},history,transitionManager);
	
	if(process.env.NODE_ENV!=='production'){
	history=(0,_deprecateObjectProperties2.default)(history,'`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	}
	
	return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _PropTypes=__webpack_require__(68);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}
	
	var _React$PropTypes=_react2.default.PropTypes;
	var bool=_React$PropTypes.bool;
	var object=_React$PropTypes.object;
	var string=_React$PropTypes.string;
	var func=_React$PropTypes.func;
	var oneOfType=_React$PropTypes.oneOfType;
	
	
	function isLeftClickEvent(event){
	return event.button===0;
	}
	
	function isModifiedEvent(event){
	return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey);
	}
	
	
	function isEmptyObject(object){
	for(var p in object){
	if(Object.prototype.hasOwnProperty.call(object,p))return false;
	}return true;
	}
	
	function createLocationDescriptor(to,_ref){
	var query=_ref.query;
	var hash=_ref.hash;
	var state=_ref.state;
	
	if(query||hash||state){
	return{pathname:to,query:query,hash:hash,state:state};
	}
	
	return to;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var Link=_react2.default.createClass({
	displayName:'Link',
	
	
	contextTypes:{
	router:_PropTypes.routerShape},
	
	
	propTypes:{
	to:oneOfType([string,object]).isRequired,
	query:object,
	hash:string,
	state:object,
	activeStyle:object,
	activeClassName:string,
	onlyActiveOnIndex:bool.isRequired,
	onClick:func,
	target:string},
	
	
	getDefaultProps:function getDefaultProps(){
	return{
	onlyActiveOnIndex:false,
	style:{}};
	
	},
	handleClick:function handleClick(event){
	if(this.props.onClick)this.props.onClick(event);
	
	if(event.defaultPrevented)return;
	
	!this.context.router?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'<Link>s rendered outside of a router context cannot navigate.'):(0,_invariant2.default)(false):void 0;
	
	if(isModifiedEvent(event)||!isLeftClickEvent(event))return;
	
	
	
	if(this.props.target)return;
	
	event.preventDefault();
	
	var _props=this.props;
	var to=_props.to;
	var query=_props.query;
	var hash=_props.hash;
	var state=_props.state;
	
	var location=createLocationDescriptor(to,{query:query,hash:hash,state:state});
	
	this.context.router.push(location);
	},
	render:function render(){
	var _props2=this.props;
	var to=_props2.to;
	var query=_props2.query;
	var hash=_props2.hash;
	var state=_props2.state;
	var activeClassName=_props2.activeClassName;
	var activeStyle=_props2.activeStyle;
	var onlyActiveOnIndex=_props2.onlyActiveOnIndex;
	
	var props=_objectWithoutProperties(_props2,['to','query','hash','state','activeClassName','activeStyle','onlyActiveOnIndex']);
	
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(!(query||hash||state),'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated'):void 0;
	
	
	var router=this.context.router;
	
	
	if(router){
	var location=createLocationDescriptor(to,{query:query,hash:hash,state:state});
	props.href=router.createHref(location);
	
	if(activeClassName||activeStyle!=null&&!isEmptyObject(activeStyle)){
	if(router.isActive(location,onlyActiveOnIndex)){
	if(activeClassName){
	if(props.className){
	props.className+=' '+activeClassName;
	}else{
	props.className=activeClassName;
	}
	}
	
	if(activeStyle)props.style=_extends({},props.style,activeStyle);
	}
	}
	}
	
	return _react2.default.createElement('a',_extends({},props,{onClick:this.handleClick}));
	}});
	
	
	exports.default=Link;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _Link=__webpack_require__(105);
	
	var _Link2=_interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	
	
	var IndexLink=_react2.default.createClass({
	displayName:'IndexLink',
	render:function render(){
	return _react2.default.createElement(_Link2.default,_extends({},this.props,{onlyActiveOnIndex:true}));
	}});
	
	
	exports.default=IndexLink;
	module.exports=exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports.default=withRouter;
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _hoistNonReactStatics=__webpack_require__(62);
	
	var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);
	
	var _PropTypes=__webpack_require__(68);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function getDisplayName(WrappedComponent){
	return WrappedComponent.displayName||WrappedComponent.name||'Component';
	}
	
	function withRouter(WrappedComponent,options){
	var withRef=options&&options.withRef;
	
	var WithRouter=_react2.default.createClass({
	displayName:'WithRouter',
	
	contextTypes:{router:_PropTypes.routerShape},
	propTypes:{router:_PropTypes.routerShape},
	
	getWrappedInstance:function getWrappedInstance(){
	!withRef?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'To access the wrapped instance, you need to specify '+'`{ withRef: true }` as the second argument of the withRouter() call.'):(0,_invariant2.default)(false):void 0;
	
	return this.wrappedInstance;
	},
	render:function render(){
	var _this=this;
	
	var router=this.props.router||this.context.router;
	var props=_extends({},this.props,{router:router});
	
	if(withRef){
	props.ref=function(c){
	_this.wrappedInstance=c;
	};
	}
	
	return _react2.default.createElement(WrappedComponent,props);
	}});
	
	
	WithRouter.displayName='withRouter('+getDisplayName(WrappedComponent)+')';
	WithRouter.WrappedComponent=WrappedComponent;
	
	return(0,_hoistNonReactStatics2.default)(WithRouter,WrappedComponent);
	}
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _Redirect=__webpack_require__(109);
	
	var _Redirect2=_interopRequireDefault(_Redirect);
	
	var _InternalPropTypes=__webpack_require__(72);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var _React$PropTypes=_react2.default.PropTypes;
	var string=_React$PropTypes.string;
	var object=_React$PropTypes.object;
	
	
	
	
	
	var IndexRedirect=_react2.default.createClass({
	displayName:'IndexRedirect',
	
	
	statics:{
	createRouteFromReactElement:function createRouteFromReactElement(element,parentRoute){
	
	if(parentRoute){
	parentRoute.indexRoute=_Redirect2.default.createRouteFromReactElement(element);
	}else{
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'An <IndexRedirect> does not make sense at the root of your route config'):void 0;
	}
	}},
	
	
	propTypes:{
	to:string.isRequired,
	query:object,
	state:object,
	onEnter:_InternalPropTypes.falsy,
	children:_InternalPropTypes.falsy},
	
	
	
	render:function render(){
	 true?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'<IndexRedirect> elements are for router configuration only and should not be rendered'):(0,_invariant2.default)(false):void 0;
	}});
	
	
	exports.default=IndexRedirect;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _RouteUtils=__webpack_require__(67);
	
	var _PatternUtils=__webpack_require__(73);
	
	var _InternalPropTypes=__webpack_require__(72);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var _React$PropTypes=_react2.default.PropTypes;
	var string=_React$PropTypes.string;
	var object=_React$PropTypes.object;
	
	
	
	
	
	
	
	
	
	var Redirect=_react2.default.createClass({
	displayName:'Redirect',
	
	
	statics:{
	createRouteFromReactElement:function createRouteFromReactElement(element){
	var route=(0,_RouteUtils.createRouteFromReactElement)(element);
	
	if(route.from)route.path=route.from;
	
	route.onEnter=function(nextState,replace){
	var location=nextState.location;
	var params=nextState.params;
	
	
	var pathname=void 0;
	if(route.to.charAt(0)==='/'){
	pathname=(0,_PatternUtils.formatPattern)(route.to,params);
	}else if(!route.to){
	pathname=location.pathname;
	}else{
	var routeIndex=nextState.routes.indexOf(route);
	var parentPattern=Redirect.getRoutePattern(nextState.routes,routeIndex-1);
	var pattern=parentPattern.replace(/\/*$/,'/')+route.to;
	pathname=(0,_PatternUtils.formatPattern)(pattern,params);
	}
	
	replace({
	pathname:pathname,
	query:route.query||location.query,
	state:route.state||location.state});
	
	};
	
	return route;
	},
	getRoutePattern:function getRoutePattern(routes,routeIndex){
	var parentPattern='';
	
	for(var i=routeIndex;i>=0;i--){
	var route=routes[i];
	var pattern=route.path||'';
	
	parentPattern=pattern.replace(/\/*$/,'/')+parentPattern;
	
	if(pattern.indexOf('/')===0)break;
	}
	
	return'/'+parentPattern;
	}},
	
	
	propTypes:{
	path:string,
	from:string,
	to:string.isRequired,
	query:object,
	state:object,
	onEnter:_InternalPropTypes.falsy,
	children:_InternalPropTypes.falsy},
	
	
	
	render:function render(){
	 true?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'<Redirect> elements are for router configuration only and should not be rendered'):(0,_invariant2.default)(false):void 0;
	}});
	
	
	exports.default=Redirect;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _RouteUtils=__webpack_require__(67);
	
	var _InternalPropTypes=__webpack_require__(72);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var func=_react2.default.PropTypes.func;
	
	
	
	
	
	
	var IndexRoute=_react2.default.createClass({
	displayName:'IndexRoute',
	
	
	statics:{
	createRouteFromReactElement:function createRouteFromReactElement(element,parentRoute){
	
	if(parentRoute){
	parentRoute.indexRoute=(0,_RouteUtils.createRouteFromReactElement)(element);
	}else{
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'An <IndexRoute> does not make sense at the root of your route config'):void 0;
	}
	}},
	
	
	propTypes:{
	path:_InternalPropTypes.falsy,
	component:_InternalPropTypes.component,
	components:_InternalPropTypes.components,
	getComponent:func,
	getComponents:func},
	
	
	
	render:function render(){
	 true?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'<IndexRoute> elements are for router configuration only and should not be rendered'):(0,_invariant2.default)(false):void 0;
	}});
	
	
	exports.default=IndexRoute;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _RouteUtils=__webpack_require__(67);
	
	var _InternalPropTypes=__webpack_require__(72);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var _React$PropTypes=_react2.default.PropTypes;
	var string=_React$PropTypes.string;
	var func=_React$PropTypes.func;
	
	
	
	
	
	
	
	
	
	
	
	
	var Route=_react2.default.createClass({
	displayName:'Route',
	
	
	statics:{
	createRouteFromReactElement:_RouteUtils.createRouteFromReactElement},
	
	
	propTypes:{
	path:string,
	component:_InternalPropTypes.component,
	components:_InternalPropTypes.components,
	getComponent:func,
	getComponents:func},
	
	
	
	render:function render(){
	 true?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'<Route> elements are for router configuration only and should not be rendered'):(0,_invariant2.default)(false):void 0;
	}});
	
	
	exports.default=Route;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _InternalPropTypes=__webpack_require__(72);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	
	
	var History={
	
	contextTypes:{
	history:_InternalPropTypes.history},
	
	
	componentWillMount:function componentWillMount(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin'):void 0;
	this.history=this.context.history;
	}};
	
	
	exports.default=History;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var object=_react2.default.PropTypes.object;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var Lifecycle={
	
	contextTypes:{
	history:object.isRequired,
	
	
	
	route:object},
	
	
	propTypes:{
	
	route:object},
	
	
	componentDidMount:function componentDidMount(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin'):void 0;
	!this.routerWillLeave?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'The Lifecycle mixin requires you to define a routerWillLeave method'):(0,_invariant2.default)(false):void 0;
	
	var route=this.props.route||this.context.route;
	
	!route?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'The Lifecycle mixin must be used on either a) a <Route component> or '+'b) a descendant of a <Route component> that uses the RouteContext mixin'):(0,_invariant2.default)(false):void 0;
	
	this._unlistenBeforeLeavingRoute=this.context.history.listenBeforeLeavingRoute(route,this.routerWillLeave);
	},
	componentWillUnmount:function componentWillUnmount(){
	if(this._unlistenBeforeLeavingRoute)this._unlistenBeforeLeavingRoute();
	}};
	
	
	exports.default=Lifecycle;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var object=_react2.default.PropTypes.object;
	
	
	
	
	
	
	
	
	var RouteContext={
	
	propTypes:{
	route:object.isRequired},
	
	
	childContextTypes:{
	route:object.isRequired},
	
	
	getChildContext:function getChildContext(){
	return{
	route:this.props.route};
	
	},
	componentWillMount:function componentWillMount(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin'):void 0;
	}};
	
	
	exports.default=RouteContext;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _useQueries=__webpack_require__(91);
	
	var _useQueries2=_interopRequireDefault(_useQueries);
	
	var _createTransitionManager=__webpack_require__(94);
	
	var _createTransitionManager2=_interopRequireDefault(_createTransitionManager);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}
	
	
	
	
	
	
	
	
	
	
	
	
	function useRoutes(createHistory){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'`useRoutes` is deprecated. Please use `createTransitionManager` instead.'):void 0;
	
	return function(){
	var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	
	var routes=_ref.routes;
	
	var options=_objectWithoutProperties(_ref,['routes']);
	
	var history=(0,_useQueries2.default)(createHistory)(options);
	var transitionManager=(0,_createTransitionManager2.default)(history,routes);
	return _extends({},history,transitionManager);
	};
	}
	
	exports.default=useRoutes;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _RouterContext=__webpack_require__(102);
	
	var _RouterContext2=_interopRequireDefault(_RouterContext);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var RoutingContext=_react2.default.createClass({
	displayName:'RoutingContext',
	componentWillMount:function componentWillMount(){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(false,'`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext'):void 0;
	},
	render:function render(){
	return _react2.default.createElement(_RouterContext2.default,this.props);
	}});
	
	
	exports.default=RoutingContext;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _createMemoryHistory=__webpack_require__(118);
	
	var _createMemoryHistory2=_interopRequireDefault(_createMemoryHistory);
	
	var _createTransitionManager=__webpack_require__(94);
	
	var _createTransitionManager2=_interopRequireDefault(_createTransitionManager);
	
	var _RouteUtils=__webpack_require__(67);
	
	var _RouterUtils=__webpack_require__(104);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}
	
	
	
	
	
	
	
	
	
	
	function match(_ref,callback){
	var history=_ref.history;
	var routes=_ref.routes;
	var location=_ref.location;
	
	var options=_objectWithoutProperties(_ref,['history','routes','location']);
	
	!(history||location)?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'match needs a history or a location'):(0,_invariant2.default)(false):void 0;
	
	history=history?history:(0,_createMemoryHistory2.default)(options);
	var transitionManager=(0,_createTransitionManager2.default)(history,(0,_RouteUtils.createRoutes)(routes));
	
	var unlisten=void 0;
	
	if(location){
	
	location=history.createLocation(location);
	}else{
	
	
	unlisten=history.listen(function(historyLocation){
	location=historyLocation;
	});
	}
	
	var router=(0,_RouterUtils.createRouterObject)(history,transitionManager);
	history=(0,_RouterUtils.createRoutingHistory)(history,transitionManager);
	
	transitionManager.match(location,function(error,redirectLocation,nextState){
	callback(error,redirectLocation,nextState&&_extends({},nextState,{
	history:history,
	router:router,
	matchContext:{history:history,transitionManager:transitionManager,router:router}}));
	
	
	
	
	
	if(unlisten){
	unlisten();
	}
	});
	}
	
	exports.default=match;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports.default=createMemoryHistory;
	
	var _useQueries=__webpack_require__(91);
	
	var _useQueries2=_interopRequireDefault(_useQueries);
	
	var _useBasename=__webpack_require__(119);
	
	var _useBasename2=_interopRequireDefault(_useBasename);
	
	var _createMemoryHistory=__webpack_require__(120);
	
	var _createMemoryHistory2=_interopRequireDefault(_createMemoryHistory);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function createMemoryHistory(options){
	
	
	
	var memoryHistory=(0,_createMemoryHistory2.default)(options);
	var createHistory=function createHistory(){
	return memoryHistory;
	};
	var history=(0,_useQueries2.default)((0,_useBasename2.default)(createHistory))(options);
	history.__v2_compatible__=true;
	return history;
	}
	module.exports=exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _ExecutionEnvironment=__webpack_require__(79);
	
	var _PathUtils=__webpack_require__(78);
	
	var _runTransitionHook=__webpack_require__(89);
	
	var _runTransitionHook2=_interopRequireDefault(_runTransitionHook);
	
	var _deprecate=__webpack_require__(90);
	
	var _deprecate2=_interopRequireDefault(_deprecate);
	
	function useBasename(createHistory){
	return function(){
	var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	
	var history=createHistory(options);
	
	var basename=options.basename;
	
	var checkedBaseHref=false;
	
	function checkBaseHref(){
	if(checkedBaseHref){
	return;
	}
	
	
	
	if(basename==null&&_ExecutionEnvironment.canUseDOM){
	var base=document.getElementsByTagName('base')[0];
	var baseHref=base&&base.getAttribute('href');
	
	if(baseHref!=null){
	basename=baseHref;
	
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'Automatically setting basename using <base href> is deprecated and will '+'be removed in the next major release. The semantics of <base href> are '+'subtly different from basename. Please pass the basename explicitly in '+'the options to createHistory'):undefined;
	}
	}
	
	checkedBaseHref=true;
	}
	
	function addBasename(location){
	checkBaseHref();
	
	if(basename&&location.basename==null){
	if(location.pathname.indexOf(basename)===0){
	location.pathname=location.pathname.substring(basename.length);
	location.basename=basename;
	
	if(location.pathname==='')location.pathname='/';
	}else{
	location.basename='';
	}
	}
	
	return location;
	}
	
	function prependBasename(location){
	checkBaseHref();
	
	if(!basename)return location;
	
	if(typeof location==='string')location=_PathUtils.parsePath(location);
	
	var pname=location.pathname;
	var normalizedBasename=basename.slice(-1)==='/'?basename:basename+'/';
	var normalizedPathname=pname.charAt(0)==='/'?pname.slice(1):pname;
	var pathname=normalizedBasename+normalizedPathname;
	
	return _extends({},location,{
	pathname:pathname});
	
	}
	
	
	function listenBefore(hook){
	return history.listenBefore(function(location,callback){
	_runTransitionHook2['default'](hook,addBasename(location),callback);
	});
	}
	
	function listen(listener){
	return history.listen(function(location){
	listener(addBasename(location));
	});
	}
	
	
	function push(location){
	history.push(prependBasename(location));
	}
	
	function replace(location){
	history.replace(prependBasename(location));
	}
	
	function createPath(location){
	return history.createPath(prependBasename(location));
	}
	
	function createHref(location){
	return history.createHref(prependBasename(location));
	}
	
	function createLocation(location){
	for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
	args[_key-1]=arguments[_key];
	}
	
	return addBasename(history.createLocation.apply(history,[prependBasename(location)].concat(args)));
	}
	
	
	function pushState(state,path){
	if(typeof path==='string')path=_PathUtils.parsePath(path);
	
	push(_extends({state:state},path));
	}
	
	
	function replaceState(state,path){
	if(typeof path==='string')path=_PathUtils.parsePath(path);
	
	replace(_extends({state:state},path));
	}
	
	return _extends({},history,{
	listenBefore:listenBefore,
	listen:listen,
	push:push,
	replace:replace,
	createPath:createPath,
	createHref:createHref,
	createLocation:createLocation,
	
	pushState:_deprecate2['default'](pushState,'pushState is deprecated; use push instead'),
	replaceState:_deprecate2['default'](replaceState,'replaceState is deprecated; use replace instead')});
	
	};
	}
	
	exports['default']=useBasename;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _warning=__webpack_require__(76);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _PathUtils=__webpack_require__(78);
	
	var _Actions=__webpack_require__(77);
	
	var _createHistory=__webpack_require__(83);
	
	var _createHistory2=_interopRequireDefault(_createHistory);
	
	function createStateStorage(entries){
	return entries.filter(function(entry){
	return entry.state;
	}).reduce(function(memo,entry){
	memo[entry.key]=entry.state;
	return memo;
	},{});
	}
	
	function createMemoryHistory(){
	var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	
	if(Array.isArray(options)){
	options={entries:options};
	}else if(typeof options==='string'){
	options={entries:[options]};
	}
	
	var history=_createHistory2['default'](_extends({},options,{
	getCurrentLocation:getCurrentLocation,
	finishTransition:finishTransition,
	saveState:saveState,
	go:go}));
	
	
	var _options=options;
	var entries=_options.entries;
	var current=_options.current;
	
	if(typeof entries==='string'){
	entries=[entries];
	}else if(!Array.isArray(entries)){
	entries=['/'];
	}
	
	entries=entries.map(function(entry){
	var key=history.createKey();
	
	if(typeof entry==='string')return{pathname:entry,key:key};
	
	if((typeof entry==='undefined'?'undefined':_typeof(entry))==='object'&&entry)return _extends({},entry,{key:key});
	
	 true?process.env.NODE_ENV!=='production'?_invariant2['default'](false,'Unable to create history entry from %s',entry):_invariant2['default'](false):undefined;
	});
	
	if(current==null){
	current=entries.length-1;
	}else{
	!(current>=0&&current<entries.length)?process.env.NODE_ENV!=='production'?_invariant2['default'](false,'Current index must be >= 0 and < %s, was %s',entries.length,current):_invariant2['default'](false):undefined;
	}
	
	var storage=createStateStorage(entries);
	
	function saveState(key,state){
	storage[key]=state;
	}
	
	function readState(key){
	return storage[key];
	}
	
	function getCurrentLocation(){
	var entry=entries[current];
	var basename=entry.basename;
	var pathname=entry.pathname;
	var search=entry.search;
	
	var path=(basename||'')+pathname+(search||'');
	
	var key=undefined,
	state=undefined;
	if(entry.key){
	key=entry.key;
	state=readState(key);
	}else{
	key=history.createKey();
	state=null;
	entry.key=key;
	}
	
	var location=_PathUtils.parsePath(path);
	
	return history.createLocation(_extends({},location,{state:state}),undefined,key);
	}
	
	function canGo(n){
	var index=current+n;
	return index>=0&&index<entries.length;
	}
	
	function go(n){
	if(n){
	if(!canGo(n)){
	process.env.NODE_ENV!=='production'?_warning2['default'](false,'Cannot go(%s) there is not enough history',n):undefined;
	return;
	}
	
	current+=n;
	
	var currentLocation=getCurrentLocation();
	
	
	history.transitionTo(_extends({},currentLocation,{action:_Actions.POP}));
	}
	}
	
	function finishTransition(location){
	switch(location.action){
	case _Actions.PUSH:
	current+=1;
	
	
	
	if(current<entries.length)entries.splice(current);
	
	entries.push(location);
	saveState(location.key,location.state);
	break;
	case _Actions.REPLACE:
	entries[current]=location;
	saveState(location.key,location.state);
	break;}
	
	}
	
	return history;
	}
	
	exports['default']=createMemoryHistory;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports.default=useRouterHistory;
	
	var _useQueries=__webpack_require__(91);
	
	var _useQueries2=_interopRequireDefault(_useQueries);
	
	var _useBasename=__webpack_require__(119);
	
	var _useBasename2=_interopRequireDefault(_useBasename);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function useRouterHistory(createHistory){
	return function(options){
	var history=(0,_useQueries2.default)((0,_useBasename2.default)(createHistory))(options);
	history.__v2_compatible__=true;
	return history;
	};
	}
	module.exports=exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var _react=__webpack_require__(2);
	
	var _react2=_interopRequireDefault(_react);
	
	var _RouterContext=__webpack_require__(102);
	
	var _RouterContext2=_interopRequireDefault(_RouterContext);
	
	var _routerWarning=__webpack_require__(70);
	
	var _routerWarning2=_interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	exports.default=function(){
	for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){
	middlewares[_key]=arguments[_key];
	}
	
	if(process.env.NODE_ENV!=='production'){
	middlewares.forEach(function(middleware,index){
	process.env.NODE_ENV!=='production'?(0,_routerWarning2.default)(middleware.renderRouterContext||middleware.renderRouteComponent,'The middleware specified at index '+index+' does not appear to be '+'a valid React Router middleware.'):void 0;
	});
	}
	
	var withContext=middlewares.map(function(middleware){
	return middleware.renderRouterContext;
	}).filter(Boolean);
	var withComponent=middlewares.map(function(middleware){
	return middleware.renderRouteComponent;
	}).filter(Boolean);
	
	var makeCreateElement=function makeCreateElement(){
	var baseCreateElement=arguments.length<=0||arguments[0]===undefined?_react.createElement:arguments[0];
	return function(Component,props){
	return withComponent.reduceRight(function(previous,renderRouteComponent){
	return renderRouteComponent(previous,props);
	},baseCreateElement(Component,props));
	};
	};
	
	return function(renderProps){
	return withContext.reduceRight(function(previous,renderRouterContext){
	return renderRouterContext(previous,renderProps);
	},_react2.default.createElement(_RouterContext2.default,_extends({},renderProps,{
	createElement:makeCreateElement(renderProps.createElement)})));
	
	};
	};
	
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _createBrowserHistory=__webpack_require__(124);
	
	var _createBrowserHistory2=_interopRequireDefault(_createBrowserHistory);
	
	var _createRouterHistory=__webpack_require__(125);
	
	var _createRouterHistory2=_interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	exports.default=(0,_createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports=exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var _invariant=__webpack_require__(63);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	var _Actions=__webpack_require__(77);
	
	var _PathUtils=__webpack_require__(78);
	
	var _ExecutionEnvironment=__webpack_require__(79);
	
	var _DOMUtils=__webpack_require__(80);
	
	var _DOMStateStorage=__webpack_require__(81);
	
	var _createDOMHistory=__webpack_require__(82);
	
	var _createDOMHistory2=_interopRequireDefault(_createDOMHistory);
	
	
	
	
	
	
	
	
	
	
	function createBrowserHistory(){
	var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	
	!_ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?_invariant2['default'](false,'Browser history needs a DOM'):_invariant2['default'](false):undefined;
	
	var forceRefresh=options.forceRefresh;
	
	var isSupported=_DOMUtils.supportsHistory();
	var useRefresh=!isSupported||forceRefresh;
	
	function getCurrentLocation(historyState){
	try{
	historyState=historyState||window.history.state||{};
	}catch(e){
	historyState={};
	}
	
	var path=_DOMUtils.getWindowPath();
	var _historyState=historyState;
	var key=_historyState.key;
	
	var state=undefined;
	if(key){
	state=_DOMStateStorage.readState(key);
	}else{
	state=null;
	key=history.createKey();
	
	if(isSupported)window.history.replaceState(_extends({},historyState,{key:key}),null);
	}
	
	var location=_PathUtils.parsePath(path);
	
	return history.createLocation(_extends({},location,{state:state}),undefined,key);
	}
	
	function startPopStateListener(_ref){
	var transitionTo=_ref.transitionTo;
	
	function popStateListener(event){
	if(event.state===undefined)return;
	
	transitionTo(getCurrentLocation(event.state));
	}
	
	_DOMUtils.addEventListener(window,'popstate',popStateListener);
	
	return function(){
	_DOMUtils.removeEventListener(window,'popstate',popStateListener);
	};
	}
	
	function finishTransition(location){
	var basename=location.basename;
	var pathname=location.pathname;
	var search=location.search;
	var hash=location.hash;
	var state=location.state;
	var action=location.action;
	var key=location.key;
	
	if(action===_Actions.POP)return;
	
	_DOMStateStorage.saveState(key,state);
	
	var path=(basename||'')+pathname+search+hash;
	var historyState={
	key:key};
	
	
	if(action===_Actions.PUSH){
	if(useRefresh){
	window.location.href=path;
	return false;
	}else{
	window.history.pushState(historyState,null,path);
	}
	}else{
	
	if(useRefresh){
	window.location.replace(path);
	return false;
	}else{
	window.history.replaceState(historyState,null,path);
	}
	}
	}
	
	var history=_createDOMHistory2['default'](_extends({},options,{
	getCurrentLocation:getCurrentLocation,
	finishTransition:finishTransition,
	saveState:_DOMStateStorage.saveState}));
	
	
	var listenerCount=0,
	stopPopStateListener=undefined;
	
	function listenBefore(listener){
	if(++listenerCount===1)stopPopStateListener=startPopStateListener(history);
	
	var unlisten=history.listenBefore(listener);
	
	return function(){
	unlisten();
	
	if(--listenerCount===0)stopPopStateListener();
	};
	}
	
	function listen(listener){
	if(++listenerCount===1)stopPopStateListener=startPopStateListener(history);
	
	var unlisten=history.listen(listener);
	
	return function(){
	unlisten();
	
	if(--listenerCount===0)stopPopStateListener();
	};
	}
	
	
	function registerTransitionHook(hook){
	if(++listenerCount===1)stopPopStateListener=startPopStateListener(history);
	
	history.registerTransitionHook(hook);
	}
	
	
	function unregisterTransitionHook(hook){
	history.unregisterTransitionHook(hook);
	
	if(--listenerCount===0)stopPopStateListener();
	}
	
	return _extends({},history,{
	listenBefore:listenBefore,
	listen:listen,
	registerTransitionHook:registerTransitionHook,
	unregisterTransitionHook:unregisterTransitionHook});
	
	}
	
	exports['default']=createBrowserHistory;
	module.exports=exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	exports.default=function(createHistory){
	var history=void 0;
	if(canUseDOM)history=(0,_useRouterHistory2.default)(createHistory)();
	return history;
	};
	
	var _useRouterHistory=__webpack_require__(121);
	
	var _useRouterHistory2=_interopRequireDefault(_useRouterHistory);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);
	
	module.exports=exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _createHashHistory=__webpack_require__(75);
	
	var _createHashHistory2=_interopRequireDefault(_createHashHistory);
	
	var _createRouterHistory=__webpack_require__(125);
	
	var _createRouterHistory2=_interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	exports.default=(0,_createRouterHistory2.default)(_createHashHistory2.default);
	module.exports=exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default={
	index:{
	path:'/',
	name:'home',
	title:'Home - React Base',
	meta:{
	description:'React base home or something'}},
	
	
	view2:{
	path:'/view2',
	name:'view 2',
	title:'Another View - React Base',
	meta:{
	description:'React base home or something'}}};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _MainLayout=__webpack_require__(129);var _MainLayout2=_interopRequireDefault(_MainLayout);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_MainLayout2.default;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _Header=__webpack_require__(130);var _Header2=_interopRequireDefault(_Header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var MainLayout=function MainLayout(_ref){var children=_ref.children;return(
	_react2.default.createElement('div',null,
	_react2.default.createElement(_Header2.default,null),
	children));};
	
	
	
	MainLayout.propTypes={
	children:_react.PropTypes.object.isRequired};exports.default=
	
	
	MainLayout;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _Header=__webpack_require__(131);var _Header2=_interopRequireDefault(_Header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_Header2.default;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _routes=__webpack_require__(127);var _routes2=_interopRequireDefault(_routes);
	var _reactRouter=__webpack_require__(66);
	var _Header=__webpack_require__(132);var _Header2=_interopRequireDefault(_Header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	function(){return(
	_react2.default.createElement('header',null,
	_react2.default.createElement('ul',{className:_Header2.default.menu},
	Object.keys(_routes2.default).map(function(route){return _react2.default.createElement('li',{key:route,className:_Header2.default.item},_react2.default.createElement(_reactRouter.Link,{to:_routes2.default[route].path},_routes2.default[route].name));}))));};

/***/ },
/* 132 */
/***/ function(module, exports) {

	// empty (null-loader)

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _Home=__webpack_require__(134);var _Home2=_interopRequireDefault(_Home);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_Home2.default;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _Input=__webpack_require__(135);var _Input2=_interopRequireDefault(_Input);
	var _InputHistory=__webpack_require__(141);var _InputHistory2=_interopRequireDefault(_InputHistory);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var Home=function Home(){return(
	_react2.default.createElement('div',null,
	_react2.default.createElement('h1',null,'Welcome to Home'),
	_react2.default.createElement('div',null,
	_react2.default.createElement(_Input2.default,null),
	_react2.default.createElement(_InputHistory2.default,null))));};exports.default=
	
	
	
	
	Home;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _InputContainer=__webpack_require__(136);var _InputContainer2=_interopRequireDefault(_InputContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_InputContainer2.default;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(41);
	var _actions=__webpack_require__(137);var _actions2=_interopRequireDefault(_actions);
	var _Input=__webpack_require__(140);var _Input2=_interopRequireDefault(_Input);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function mapStateToProps(state){
	return{
	contents:state.inputContents};
	
	}
	
	var InputContainer=(0,_reactRedux.connect)(mapStateToProps,{
	setContents:_actions2.default.inputContentsSet})(_Input2.default);exports.default=
	
	
	InputContainer;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _inputContents=__webpack_require__(138);var _inputContents2=_interopRequireDefault(_inputContents);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var actions=_extends({},_inputContents2.default);exports.default=
	
	actions;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _actionTypes=__webpack_require__(139);var _actionTypes2=_interopRequireDefault(_actionTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	{
	inputContentsSet:function inputContentsSet(contents){return{
	type:_actionTypes2.default.INPUT_CONTENTS_SET,
	contents:contents};}};

/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default={
	INPUT_CONTENTS_SET:'INPUT_CONTENTS_SET'};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Input=function(_React$Component){_inherits(Input,_React$Component);
	
	
	
	
	
	
	function Input(props){_classCallCheck(this,Input);var _this=_possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this));_this.
	
	
	
	
	
	
	
	handleSubmit=function(e){
	e.preventDefault();
	_this.props.setContents(_this.state.contents);
	};_this.
	
	handleChange=function(event){
	_this.setState({contents:event.target.value});
	};_this.
	
	render=function(){return(
	_react2.default.createElement("form",{onSubmit:_this.handleSubmit},
	_react2.default.createElement("label",{htmlFor:"value"},"Value:",
	
	_react2.default.createElement("input",{id:"value",value:_this.state.contents,onChange:_this.handleChange})),
	
	_react2.default.createElement("button",null,"Set")));};_this.state={contents:props.contents};return _this;}return Input;}(_react2.default.Component);Input.propTypes={contents:_react.PropTypes.string,setContents:_react.PropTypes.func.isRequired};exports.default=
	
	
	
	
	Input;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _InputHistoryContainer=__webpack_require__(142);var _InputHistoryContainer2=_interopRequireDefault(_InputHistoryContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_InputHistoryContainer2.default;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(41);
	var _InputHistory=__webpack_require__(143);var _InputHistory2=_interopRequireDefault(_InputHistory);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function mapStateToProps(state){
	return{
	values:state.inputHistory};
	
	}
	
	var InputHistoryContainer=(0,_reactRedux.connect)(mapStateToProps,{})(_InputHistory2.default);exports.default=
	
	InputHistoryContainer;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _immutable=__webpack_require__(144);var _immutable2=_interopRequireDefault(_immutable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var InputHistory=function InputHistory(_ref){var values=_ref.values;return(
	_react2.default.createElement('div',null,
	_react2.default.createElement('h3',null,'History:'),
	_react2.default.createElement('ul',null,
	values.map(function(value,key){return _react2.default.createElement('li',{key:key},value);}))));};
	
	
	
	
	InputHistory.propTypes={
	values:_react.PropTypes.instanceOf(_immutable2.default.List)};exports.default=
	
	
	InputHistory;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	(function(global,factory){
	( false?'undefined':_typeof(exports))==='object'&&typeof module!=='undefined'?module.exports=factory():
	 true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):
	global.Immutable=factory();
	})(undefined,function(){'use strict';var SLICE$0=Array.prototype.slice;
	
	function createClass(ctor,superClass){
	if(superClass){
	ctor.prototype=Object.create(superClass.prototype);
	}
	ctor.prototype.constructor=ctor;
	}
	
	function Iterable(value){
	return isIterable(value)?value:Seq(value);
	}
	
	
	createClass(KeyedIterable,Iterable);
	function KeyedIterable(value){
	return isKeyed(value)?value:KeyedSeq(value);
	}
	
	
	createClass(IndexedIterable,Iterable);
	function IndexedIterable(value){
	return isIndexed(value)?value:IndexedSeq(value);
	}
	
	
	createClass(SetIterable,Iterable);
	function SetIterable(value){
	return isIterable(value)&&!isAssociative(value)?value:SetSeq(value);
	}
	
	
	
	function isIterable(maybeIterable){
	return!!(maybeIterable&&maybeIterable[IS_ITERABLE_SENTINEL]);
	}
	
	function isKeyed(maybeKeyed){
	return!!(maybeKeyed&&maybeKeyed[IS_KEYED_SENTINEL]);
	}
	
	function isIndexed(maybeIndexed){
	return!!(maybeIndexed&&maybeIndexed[IS_INDEXED_SENTINEL]);
	}
	
	function isAssociative(maybeAssociative){
	return isKeyed(maybeAssociative)||isIndexed(maybeAssociative);
	}
	
	function isOrdered(maybeOrdered){
	return!!(maybeOrdered&&maybeOrdered[IS_ORDERED_SENTINEL]);
	}
	
	Iterable.isIterable=isIterable;
	Iterable.isKeyed=isKeyed;
	Iterable.isIndexed=isIndexed;
	Iterable.isAssociative=isAssociative;
	Iterable.isOrdered=isOrdered;
	
	Iterable.Keyed=KeyedIterable;
	Iterable.Indexed=IndexedIterable;
	Iterable.Set=SetIterable;
	
	
	var IS_ITERABLE_SENTINEL='@@__IMMUTABLE_ITERABLE__@@';
	var IS_KEYED_SENTINEL='@@__IMMUTABLE_KEYED__@@';
	var IS_INDEXED_SENTINEL='@@__IMMUTABLE_INDEXED__@@';
	var IS_ORDERED_SENTINEL='@@__IMMUTABLE_ORDERED__@@';
	
	
	var DELETE='delete';
	
	
	var SHIFT=5;
	var SIZE=1<<SHIFT;
	var MASK=SIZE-1;
	
	
	
	var NOT_SET={};
	
	
	var CHANGE_LENGTH={value:false};
	var DID_ALTER={value:false};
	
	function MakeRef(ref){
	ref.value=false;
	return ref;
	}
	
	function SetRef(ref){
	ref&&(ref.value=true);
	}
	
	
	
	
	function OwnerID(){}
	
	
	function arrCopy(arr,offset){
	offset=offset||0;
	var len=Math.max(0,arr.length-offset);
	var newArr=new Array(len);
	for(var ii=0;ii<len;ii++){
	newArr[ii]=arr[ii+offset];
	}
	return newArr;
	}
	
	function ensureSize(iter){
	if(iter.size===undefined){
	iter.size=iter.__iterate(returnTrue);
	}
	return iter.size;
	}
	
	function wrapIndex(iter,index){
	
	
	
	
	
	
	
	if(typeof index!=='number'){
	var uint32Index=index>>>0;
	if(''+uint32Index!==index||uint32Index===4294967295){
	return NaN;
	}
	index=uint32Index;
	}
	return index<0?ensureSize(iter)+index:index;
	}
	
	function returnTrue(){
	return true;
	}
	
	function wholeSlice(begin,end,size){
	return(begin===0||size!==undefined&&begin<=-size)&&(
	end===undefined||size!==undefined&&end>=size);
	}
	
	function resolveBegin(begin,size){
	return resolveIndex(begin,size,0);
	}
	
	function resolveEnd(end,size){
	return resolveIndex(end,size,size);
	}
	
	function resolveIndex(index,size,defaultIndex){
	return index===undefined?
	defaultIndex:
	index<0?
	Math.max(0,size+index):
	size===undefined?
	index:
	Math.min(size,index);
	}
	
	
	
	var ITERATE_KEYS=0;
	var ITERATE_VALUES=1;
	var ITERATE_ENTRIES=2;
	
	var REAL_ITERATOR_SYMBOL=typeof Symbol==='function'&&(typeof Symbol==='function'?Symbol.iterator:'@@iterator');
	var FAUX_ITERATOR_SYMBOL='@@iterator';
	
	var ITERATOR_SYMBOL=REAL_ITERATOR_SYMBOL||FAUX_ITERATOR_SYMBOL;
	
	
	function Iterator(next){
	this.next=next;
	}
	
	Iterator.prototype.toString=function(){
	return'[Iterator]';
	};
	
	
	Iterator.KEYS=ITERATE_KEYS;
	Iterator.VALUES=ITERATE_VALUES;
	Iterator.ENTRIES=ITERATE_ENTRIES;
	
	Iterator.prototype.inspect=
	Iterator.prototype.toSource=function(){return this.toString();};
	Iterator.prototype[ITERATOR_SYMBOL]=function(){
	return this;
	};
	
	
	function iteratorValue(type,k,v,iteratorResult){
	var value=type===0?k:type===1?v:[k,v];
	iteratorResult?iteratorResult.value=value:iteratorResult={
	value:value,done:false};
	
	return iteratorResult;
	}
	
	function iteratorDone(){
	return{value:undefined,done:true};
	}
	
	function hasIterator(maybeIterable){
	return!!getIteratorFn(maybeIterable);
	}
	
	function isIterator(maybeIterator){
	return maybeIterator&&typeof maybeIterator.next==='function';
	}
	
	function getIterator(iterable){
	var iteratorFn=getIteratorFn(iterable);
	return iteratorFn&&iteratorFn.call(iterable);
	}
	
	function getIteratorFn(iterable){
	var iteratorFn=iterable&&(
	REAL_ITERATOR_SYMBOL&&iterable[REAL_ITERATOR_SYMBOL]||
	iterable[FAUX_ITERATOR_SYMBOL]);
	
	if(typeof iteratorFn==='function'){
	return iteratorFn;
	}
	}
	
	function isArrayLike(value){
	return value&&typeof value.length==='number';
	}
	
	createClass(Seq,Iterable);
	function Seq(value){
	return value===null||value===undefined?emptySequence():
	isIterable(value)?value.toSeq():seqFromValue(value);
	}
	
	Seq.of=function(){
	return Seq(arguments);
	};
	
	Seq.prototype.toSeq=function(){
	return this;
	};
	
	Seq.prototype.toString=function(){
	return this.__toString('Seq {','}');
	};
	
	Seq.prototype.cacheResult=function(){
	if(!this._cache&&this.__iterateUncached){
	this._cache=this.entrySeq().toArray();
	this.size=this._cache.length;
	}
	return this;
	};
	
	
	
	Seq.prototype.__iterate=function(fn,reverse){
	return seqIterate(this,fn,reverse,true);
	};
	
	
	
	Seq.prototype.__iterator=function(type,reverse){
	return seqIterator(this,type,reverse,true);
	};
	
	
	
	createClass(KeyedSeq,Seq);
	function KeyedSeq(value){
	return value===null||value===undefined?
	emptySequence().toKeyedSeq():
	isIterable(value)?
	isKeyed(value)?value.toSeq():value.fromEntrySeq():
	keyedSeqFromValue(value);
	}
	
	KeyedSeq.prototype.toKeyedSeq=function(){
	return this;
	};
	
	
	
	createClass(IndexedSeq,Seq);
	function IndexedSeq(value){
	return value===null||value===undefined?emptySequence():
	!isIterable(value)?indexedSeqFromValue(value):
	isKeyed(value)?value.entrySeq():value.toIndexedSeq();
	}
	
	IndexedSeq.of=function(){
	return IndexedSeq(arguments);
	};
	
	IndexedSeq.prototype.toIndexedSeq=function(){
	return this;
	};
	
	IndexedSeq.prototype.toString=function(){
	return this.__toString('Seq [',']');
	};
	
	IndexedSeq.prototype.__iterate=function(fn,reverse){
	return seqIterate(this,fn,reverse,false);
	};
	
	IndexedSeq.prototype.__iterator=function(type,reverse){
	return seqIterator(this,type,reverse,false);
	};
	
	
	
	createClass(SetSeq,Seq);
	function SetSeq(value){
	return(
	value===null||value===undefined?emptySequence():
	!isIterable(value)?indexedSeqFromValue(value):
	isKeyed(value)?value.entrySeq():value).
	toSetSeq();
	}
	
	SetSeq.of=function(){
	return SetSeq(arguments);
	};
	
	SetSeq.prototype.toSetSeq=function(){
	return this;
	};
	
	
	
	Seq.isSeq=isSeq;
	Seq.Keyed=KeyedSeq;
	Seq.Set=SetSeq;
	Seq.Indexed=IndexedSeq;
	
	var IS_SEQ_SENTINEL='@@__IMMUTABLE_SEQ__@@';
	
	Seq.prototype[IS_SEQ_SENTINEL]=true;
	
	
	
	createClass(ArraySeq,IndexedSeq);
	function ArraySeq(array){
	this._array=array;
	this.size=array.length;
	}
	
	ArraySeq.prototype.get=function(index,notSetValue){
	return this.has(index)?this._array[wrapIndex(this,index)]:notSetValue;
	};
	
	ArraySeq.prototype.__iterate=function(fn,reverse){
	var array=this._array;
	var maxIndex=array.length-1;
	for(var ii=0;ii<=maxIndex;ii++){
	if(fn(array[reverse?maxIndex-ii:ii],ii,this)===false){
	return ii+1;
	}
	}
	return ii;
	};
	
	ArraySeq.prototype.__iterator=function(type,reverse){
	var array=this._array;
	var maxIndex=array.length-1;
	var ii=0;
	return new Iterator(function()
	{return ii>maxIndex?
	iteratorDone():
	iteratorValue(type,ii,array[reverse?maxIndex-ii++:ii++]);});
	
	};
	
	
	
	createClass(ObjectSeq,KeyedSeq);
	function ObjectSeq(object){
	var keys=Object.keys(object);
	this._object=object;
	this._keys=keys;
	this.size=keys.length;
	}
	
	ObjectSeq.prototype.get=function(key,notSetValue){
	if(notSetValue!==undefined&&!this.has(key)){
	return notSetValue;
	}
	return this._object[key];
	};
	
	ObjectSeq.prototype.has=function(key){
	return this._object.hasOwnProperty(key);
	};
	
	ObjectSeq.prototype.__iterate=function(fn,reverse){
	var object=this._object;
	var keys=this._keys;
	var maxIndex=keys.length-1;
	for(var ii=0;ii<=maxIndex;ii++){
	var key=keys[reverse?maxIndex-ii:ii];
	if(fn(object[key],key,this)===false){
	return ii+1;
	}
	}
	return ii;
	};
	
	ObjectSeq.prototype.__iterator=function(type,reverse){
	var object=this._object;
	var keys=this._keys;
	var maxIndex=keys.length-1;
	var ii=0;
	return new Iterator(function(){
	var key=keys[reverse?maxIndex-ii:ii];
	return ii++>maxIndex?
	iteratorDone():
	iteratorValue(type,key,object[key]);
	});
	};
	
	ObjectSeq.prototype[IS_ORDERED_SENTINEL]=true;
	
	
	createClass(IterableSeq,IndexedSeq);
	function IterableSeq(iterable){
	this._iterable=iterable;
	this.size=iterable.length||iterable.size;
	}
	
	IterableSeq.prototype.__iterateUncached=function(fn,reverse){
	if(reverse){
	return this.cacheResult().__iterate(fn,reverse);
	}
	var iterable=this._iterable;
	var iterator=getIterator(iterable);
	var iterations=0;
	if(isIterator(iterator)){
	var step;
	while(!(step=iterator.next()).done){
	if(fn(step.value,iterations++,this)===false){
	break;
	}
	}
	}
	return iterations;
	};
	
	IterableSeq.prototype.__iteratorUncached=function(type,reverse){
	if(reverse){
	return this.cacheResult().__iterator(type,reverse);
	}
	var iterable=this._iterable;
	var iterator=getIterator(iterable);
	if(!isIterator(iterator)){
	return new Iterator(iteratorDone);
	}
	var iterations=0;
	return new Iterator(function(){
	var step=iterator.next();
	return step.done?step:iteratorValue(type,iterations++,step.value);
	});
	};
	
	
	
	createClass(IteratorSeq,IndexedSeq);
	function IteratorSeq(iterator){
	this._iterator=iterator;
	this._iteratorCache=[];
	}
	
	IteratorSeq.prototype.__iterateUncached=function(fn,reverse){
	if(reverse){
	return this.cacheResult().__iterate(fn,reverse);
	}
	var iterator=this._iterator;
	var cache=this._iteratorCache;
	var iterations=0;
	while(iterations<cache.length){
	if(fn(cache[iterations],iterations++,this)===false){
	return iterations;
	}
	}
	var step;
	while(!(step=iterator.next()).done){
	var val=step.value;
	cache[iterations]=val;
	if(fn(val,iterations++,this)===false){
	break;
	}
	}
	return iterations;
	};
	
	IteratorSeq.prototype.__iteratorUncached=function(type,reverse){
	if(reverse){
	return this.cacheResult().__iterator(type,reverse);
	}
	var iterator=this._iterator;
	var cache=this._iteratorCache;
	var iterations=0;
	return new Iterator(function(){
	if(iterations>=cache.length){
	var step=iterator.next();
	if(step.done){
	return step;
	}
	cache[iterations]=step.value;
	}
	return iteratorValue(type,iterations,cache[iterations++]);
	});
	};
	
	
	
	
	
	
	function isSeq(maybeSeq){
	return!!(maybeSeq&&maybeSeq[IS_SEQ_SENTINEL]);
	}
	
	var EMPTY_SEQ;
	
	function emptySequence(){
	return EMPTY_SEQ||(EMPTY_SEQ=new ArraySeq([]));
	}
	
	function keyedSeqFromValue(value){
	var seq=
	Array.isArray(value)?new ArraySeq(value).fromEntrySeq():
	isIterator(value)?new IteratorSeq(value).fromEntrySeq():
	hasIterator(value)?new IterableSeq(value).fromEntrySeq():
	(typeof value==='undefined'?'undefined':_typeof(value))==='object'?new ObjectSeq(value):
	undefined;
	if(!seq){
	throw new TypeError(
	'Expected Array or iterable object of [k, v] entries, '+
	'or keyed object: '+value);
	
	}
	return seq;
	}
	
	function indexedSeqFromValue(value){
	var seq=maybeIndexedSeqFromValue(value);
	if(!seq){
	throw new TypeError(
	'Expected Array or iterable object of values: '+value);
	
	}
	return seq;
	}
	
	function seqFromValue(value){
	var seq=maybeIndexedSeqFromValue(value)||
	(typeof value==='undefined'?'undefined':_typeof(value))==='object'&&new ObjectSeq(value);
	if(!seq){
	throw new TypeError(
	'Expected Array or iterable object of values, or keyed object: '+value);
	
	}
	return seq;
	}
	
	function maybeIndexedSeqFromValue(value){
	return(
	isArrayLike(value)?new ArraySeq(value):
	isIterator(value)?new IteratorSeq(value):
	hasIterator(value)?new IterableSeq(value):
	undefined);
	
	}
	
	function seqIterate(seq,fn,reverse,useKeys){
	var cache=seq._cache;
	if(cache){
	var maxIndex=cache.length-1;
	for(var ii=0;ii<=maxIndex;ii++){
	var entry=cache[reverse?maxIndex-ii:ii];
	if(fn(entry[1],useKeys?entry[0]:ii,seq)===false){
	return ii+1;
	}
	}
	return ii;
	}
	return seq.__iterateUncached(fn,reverse);
	}
	
	function seqIterator(seq,type,reverse,useKeys){
	var cache=seq._cache;
	if(cache){
	var maxIndex=cache.length-1;
	var ii=0;
	return new Iterator(function(){
	var entry=cache[reverse?maxIndex-ii:ii];
	return ii++>maxIndex?
	iteratorDone():
	iteratorValue(type,useKeys?entry[0]:ii-1,entry[1]);
	});
	}
	return seq.__iteratorUncached(type,reverse);
	}
	
	function fromJS(json,converter){
	return converter?
	fromJSWith(converter,json,'',{'':json}):
	fromJSDefault(json);
	}
	
	function fromJSWith(converter,json,key,parentJSON){
	if(Array.isArray(json)){
	return converter.call(parentJSON,key,IndexedSeq(json).map(function(v,k){return fromJSWith(converter,v,k,json);}));
	}
	if(isPlainObj(json)){
	return converter.call(parentJSON,key,KeyedSeq(json).map(function(v,k){return fromJSWith(converter,v,k,json);}));
	}
	return json;
	}
	
	function fromJSDefault(json){
	if(Array.isArray(json)){
	return IndexedSeq(json).map(fromJSDefault).toList();
	}
	if(isPlainObj(json)){
	return KeyedSeq(json).map(fromJSDefault).toMap();
	}
	return json;
	}
	
	function isPlainObj(value){
	return value&&(value.constructor===Object||value.constructor===undefined);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function is(valueA,valueB){
	if(valueA===valueB||valueA!==valueA&&valueB!==valueB){
	return true;
	}
	if(!valueA||!valueB){
	return false;
	}
	if(typeof valueA.valueOf==='function'&&
	typeof valueB.valueOf==='function'){
	valueA=valueA.valueOf();
	valueB=valueB.valueOf();
	if(valueA===valueB||valueA!==valueA&&valueB!==valueB){
	return true;
	}
	if(!valueA||!valueB){
	return false;
	}
	}
	if(typeof valueA.equals==='function'&&
	typeof valueB.equals==='function'&&
	valueA.equals(valueB)){
	return true;
	}
	return false;
	}
	
	function deepEqual(a,b){
	if(a===b){
	return true;
	}
	
	if(
	!isIterable(b)||
	a.size!==undefined&&b.size!==undefined&&a.size!==b.size||
	a.__hash!==undefined&&b.__hash!==undefined&&a.__hash!==b.__hash||
	isKeyed(a)!==isKeyed(b)||
	isIndexed(a)!==isIndexed(b)||
	isOrdered(a)!==isOrdered(b))
	{
	return false;
	}
	
	if(a.size===0&&b.size===0){
	return true;
	}
	
	var notAssociative=!isAssociative(a);
	
	if(isOrdered(a)){
	var entries=a.entries();
	return b.every(function(v,k){
	var entry=entries.next().value;
	return entry&&is(entry[1],v)&&(notAssociative||is(entry[0],k));
	})&&entries.next().done;
	}
	
	var flipped=false;
	
	if(a.size===undefined){
	if(b.size===undefined){
	if(typeof a.cacheResult==='function'){
	a.cacheResult();
	}
	}else{
	flipped=true;
	var _=a;
	a=b;
	b=_;
	}
	}
	
	var allEqual=true;
	var bSize=b.__iterate(function(v,k){
	if(notAssociative?!a.has(v):
	flipped?!is(v,a.get(k,NOT_SET)):!is(a.get(k,NOT_SET),v)){
	allEqual=false;
	return false;
	}
	});
	
	return allEqual&&a.size===bSize;
	}
	
	createClass(Repeat,IndexedSeq);
	
	function Repeat(value,times){
	if(!(this instanceof Repeat)){
	return new Repeat(value,times);
	}
	this._value=value;
	this.size=times===undefined?Infinity:Math.max(0,times);
	if(this.size===0){
	if(EMPTY_REPEAT){
	return EMPTY_REPEAT;
	}
	EMPTY_REPEAT=this;
	}
	}
	
	Repeat.prototype.toString=function(){
	if(this.size===0){
	return'Repeat []';
	}
	return'Repeat [ '+this._value+' '+this.size+' times ]';
	};
	
	Repeat.prototype.get=function(index,notSetValue){
	return this.has(index)?this._value:notSetValue;
	};
	
	Repeat.prototype.includes=function(searchValue){
	return is(this._value,searchValue);
	};
	
	Repeat.prototype.slice=function(begin,end){
	var size=this.size;
	return wholeSlice(begin,end,size)?this:
	new Repeat(this._value,resolveEnd(end,size)-resolveBegin(begin,size));
	};
	
	Repeat.prototype.reverse=function(){
	return this;
	};
	
	Repeat.prototype.indexOf=function(searchValue){
	if(is(this._value,searchValue)){
	return 0;
	}
	return-1;
	};
	
	Repeat.prototype.lastIndexOf=function(searchValue){
	if(is(this._value,searchValue)){
	return this.size;
	}
	return-1;
	};
	
	Repeat.prototype.__iterate=function(fn,reverse){
	for(var ii=0;ii<this.size;ii++){
	if(fn(this._value,ii,this)===false){
	return ii+1;
	}
	}
	return ii;
	};
	
	Repeat.prototype.__iterator=function(type,reverse){var this$0=this;
	var ii=0;
	return new Iterator(function()
	{return ii<this$0.size?iteratorValue(type,ii++,this$0._value):iteratorDone();});
	
	};
	
	Repeat.prototype.equals=function(other){
	return other instanceof Repeat?
	is(this._value,other._value):
	deepEqual(other);
	};
	
	
	var EMPTY_REPEAT;
	
	function invariant(condition,error){
	if(!condition)throw new Error(error);
	}
	
	createClass(Range,IndexedSeq);
	
	function Range(start,end,step){
	if(!(this instanceof Range)){
	return new Range(start,end,step);
	}
	invariant(step!==0,'Cannot step a Range by 0');
	start=start||0;
	if(end===undefined){
	end=Infinity;
	}
	step=step===undefined?1:Math.abs(step);
	if(end<start){
	step=-step;
	}
	this._start=start;
	this._end=end;
	this._step=step;
	this.size=Math.max(0,Math.ceil((end-start)/step-1)+1);
	if(this.size===0){
	if(EMPTY_RANGE){
	return EMPTY_RANGE;
	}
	EMPTY_RANGE=this;
	}
	}
	
	Range.prototype.toString=function(){
	if(this.size===0){
	return'Range []';
	}
	return'Range [ '+
	this._start+'...'+this._end+(
	this._step!==1?' by '+this._step:'')+
	' ]';
	};
	
	Range.prototype.get=function(index,notSetValue){
	return this.has(index)?
	this._start+wrapIndex(this,index)*this._step:
	notSetValue;
	};
	
	Range.prototype.includes=function(searchValue){
	var possibleIndex=(searchValue-this._start)/this._step;
	return possibleIndex>=0&&
	possibleIndex<this.size&&
	possibleIndex===Math.floor(possibleIndex);
	};
	
	Range.prototype.slice=function(begin,end){
	if(wholeSlice(begin,end,this.size)){
	return this;
	}
	begin=resolveBegin(begin,this.size);
	end=resolveEnd(end,this.size);
	if(end<=begin){
	return new Range(0,0);
	}
	return new Range(this.get(begin,this._end),this.get(end,this._end),this._step);
	};
	
	Range.prototype.indexOf=function(searchValue){
	var offsetValue=searchValue-this._start;
	if(offsetValue%this._step===0){
	var index=offsetValue/this._step;
	if(index>=0&&index<this.size){
	return index;
	}
	}
	return-1;
	};
	
	Range.prototype.lastIndexOf=function(searchValue){
	return this.indexOf(searchValue);
	};
	
	Range.prototype.__iterate=function(fn,reverse){
	var maxIndex=this.size-1;
	var step=this._step;
	var value=reverse?this._start+maxIndex*step:this._start;
	for(var ii=0;ii<=maxIndex;ii++){
	if(fn(value,ii,this)===false){
	return ii+1;
	}
	value+=reverse?-step:step;
	}
	return ii;
	};
	
	Range.prototype.__iterator=function(type,reverse){
	var maxIndex=this.size-1;
	var step=this._step;
	var value=reverse?this._start+maxIndex*step:this._start;
	var ii=0;
	return new Iterator(function(){
	var v=value;
	value+=reverse?-step:step;
	return ii>maxIndex?iteratorDone():iteratorValue(type,ii++,v);
	});
	};
	
	Range.prototype.equals=function(other){
	return other instanceof Range?
	this._start===other._start&&
	this._end===other._end&&
	this._step===other._step:
	deepEqual(this,other);
	};
	
	
	var EMPTY_RANGE;
	
	createClass(Collection,Iterable);
	function Collection(){
	throw TypeError('Abstract');
	}
	
	
	createClass(KeyedCollection,Collection);function KeyedCollection(){}
	
	createClass(IndexedCollection,Collection);function IndexedCollection(){}
	
	createClass(SetCollection,Collection);function SetCollection(){}
	
	
	Collection.Keyed=KeyedCollection;
	Collection.Indexed=IndexedCollection;
	Collection.Set=SetCollection;
	
	var imul=
	typeof Math.imul==='function'&&Math.imul(0xffffffff,2)===-2?
	Math.imul:
	function imul(a,b){
	a=a|0;
	b=b|0;
	var c=a&0xffff;
	var d=b&0xffff;
	
	return c*d+((a>>>16)*d+c*(b>>>16)<<16>>>0)|0;
	};
	
	
	
	
	
	function smi(i32){
	return i32>>>1&0x40000000|i32&0xBFFFFFFF;
	}
	
	function hash(o){
	if(o===false||o===null||o===undefined){
	return 0;
	}
	if(typeof o.valueOf==='function'){
	o=o.valueOf();
	if(o===false||o===null||o===undefined){
	return 0;
	}
	}
	if(o===true){
	return 1;
	}
	var type=typeof o==='undefined'?'undefined':_typeof(o);
	if(type==='number'){
	if(o!==o||o===Infinity){
	return 0;
	}
	var h=o|0;
	if(h!==o){
	h^=o*0xFFFFFFFF;
	}
	while(o>0xFFFFFFFF){
	o/=0xFFFFFFFF;
	h^=o;
	}
	return smi(h);
	}
	if(type==='string'){
	return o.length>STRING_HASH_CACHE_MIN_STRLEN?cachedHashString(o):hashString(o);
	}
	if(typeof o.hashCode==='function'){
	return o.hashCode();
	}
	if(type==='object'){
	return hashJSObj(o);
	}
	if(typeof o.toString==='function'){
	return hashString(o.toString());
	}
	throw new Error('Value type '+type+' cannot be hashed.');
	}
	
	function cachedHashString(string){
	var hash=stringHashCache[string];
	if(hash===undefined){
	hash=hashString(string);
	if(STRING_HASH_CACHE_SIZE===STRING_HASH_CACHE_MAX_SIZE){
	STRING_HASH_CACHE_SIZE=0;
	stringHashCache={};
	}
	STRING_HASH_CACHE_SIZE++;
	stringHashCache[string]=hash;
	}
	return hash;
	}
	
	
	function hashString(string){
	
	
	
	
	
	
	var hash=0;
	for(var ii=0;ii<string.length;ii++){
	hash=31*hash+string.charCodeAt(ii)|0;
	}
	return smi(hash);
	}
	
	function hashJSObj(obj){
	var hash;
	if(usingWeakMap){
	hash=weakMap.get(obj);
	if(hash!==undefined){
	return hash;
	}
	}
	
	hash=obj[UID_HASH_KEY];
	if(hash!==undefined){
	return hash;
	}
	
	if(!canDefineProperty){
	hash=obj.propertyIsEnumerable&&obj.propertyIsEnumerable[UID_HASH_KEY];
	if(hash!==undefined){
	return hash;
	}
	
	hash=getIENodeHash(obj);
	if(hash!==undefined){
	return hash;
	}
	}
	
	hash=++objHashUID;
	if(objHashUID&0x40000000){
	objHashUID=0;
	}
	
	if(usingWeakMap){
	weakMap.set(obj,hash);
	}else if(isExtensible!==undefined&&isExtensible(obj)===false){
	throw new Error('Non-extensible objects are not allowed as keys.');
	}else if(canDefineProperty){
	Object.defineProperty(obj,UID_HASH_KEY,{
	'enumerable':false,
	'configurable':false,
	'writable':false,
	'value':hash});
	
	}else if(obj.propertyIsEnumerable!==undefined&&
	obj.propertyIsEnumerable===obj.constructor.prototype.propertyIsEnumerable){
	
	
	
	
	obj.propertyIsEnumerable=function(){
	return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments);
	};
	obj.propertyIsEnumerable[UID_HASH_KEY]=hash;
	}else if(obj.nodeType!==undefined){
	
	
	
	
	obj[UID_HASH_KEY]=hash;
	}else{
	throw new Error('Unable to set a non-enumerable property on object.');
	}
	
	return hash;
	}
	
	
	var isExtensible=Object.isExtensible;
	
	
	var canDefineProperty=function(){
	try{
	Object.defineProperty({},'@',{});
	return true;
	}catch(e){
	return false;
	}
	}();
	
	
	
	function getIENodeHash(node){
	if(node&&node.nodeType>0){
	switch(node.nodeType){
	case 1:
	return node.uniqueID;
	case 9:
	return node.documentElement&&node.documentElement.uniqueID;}
	
	}
	}
	
	
	var usingWeakMap=typeof WeakMap==='function';
	var weakMap;
	if(usingWeakMap){
	weakMap=new WeakMap();
	}
	
	var objHashUID=0;
	
	var UID_HASH_KEY='__immutablehash__';
	if(typeof Symbol==='function'){
	UID_HASH_KEY=Symbol(UID_HASH_KEY);
	}
	
	var STRING_HASH_CACHE_MIN_STRLEN=16;
	var STRING_HASH_CACHE_MAX_SIZE=255;
	var STRING_HASH_CACHE_SIZE=0;
	var stringHashCache={};
	
	function assertNotInfinite(size){
	invariant(
	size!==Infinity,
	'Cannot perform this action with an infinite size.');
	
	}
	
	createClass(Map,KeyedCollection);
	
	
	
	function Map(value){
	return value===null||value===undefined?emptyMap():
	isMap(value)&&!isOrdered(value)?value:
	emptyMap().withMutations(function(map){
	var iter=KeyedIterable(value);
	assertNotInfinite(iter.size);
	iter.forEach(function(v,k){return map.set(k,v);});
	});
	}
	
	Map.of=function(){var keyValues=SLICE$0.call(arguments,0);
	return emptyMap().withMutations(function(map){
	for(var i=0;i<keyValues.length;i+=2){
	if(i+1>=keyValues.length){
	throw new Error('Missing value for key: '+keyValues[i]);
	}
	map.set(keyValues[i],keyValues[i+1]);
	}
	});
	};
	
	Map.prototype.toString=function(){
	return this.__toString('Map {','}');
	};
	
	
	
	Map.prototype.get=function(k,notSetValue){
	return this._root?
	this._root.get(0,undefined,k,notSetValue):
	notSetValue;
	};
	
	
	
	Map.prototype.set=function(k,v){
	return updateMap(this,k,v);
	};
	
	Map.prototype.setIn=function(keyPath,v){
	return this.updateIn(keyPath,NOT_SET,function(){return v;});
	};
	
	Map.prototype.remove=function(k){
	return updateMap(this,k,NOT_SET);
	};
	
	Map.prototype.deleteIn=function(keyPath){
	return this.updateIn(keyPath,function(){return NOT_SET;});
	};
	
	Map.prototype.update=function(k,notSetValue,updater){
	return arguments.length===1?
	k(this):
	this.updateIn([k],notSetValue,updater);
	};
	
	Map.prototype.updateIn=function(keyPath,notSetValue,updater){
	if(!updater){
	updater=notSetValue;
	notSetValue=undefined;
	}
	var updatedValue=updateInDeepMap(
	this,
	forceIterator(keyPath),
	notSetValue,
	updater);
	
	return updatedValue===NOT_SET?undefined:updatedValue;
	};
	
	Map.prototype.clear=function(){
	if(this.size===0){
	return this;
	}
	if(this.__ownerID){
	this.size=0;
	this._root=null;
	this.__hash=undefined;
	this.__altered=true;
	return this;
	}
	return emptyMap();
	};
	
	
	
	Map.prototype.merge=function(){
	return mergeIntoMapWith(this,undefined,arguments);
	};
	
	Map.prototype.mergeWith=function(merger){var iters=SLICE$0.call(arguments,1);
	return mergeIntoMapWith(this,merger,iters);
	};
	
	Map.prototype.mergeIn=function(keyPath){var iters=SLICE$0.call(arguments,1);
	return this.updateIn(
	keyPath,
	emptyMap(),
	function(m){return typeof m.merge==='function'?
	m.merge.apply(m,iters):
	iters[iters.length-1];});
	
	};
	
	Map.prototype.mergeDeep=function(){
	return mergeIntoMapWith(this,deepMerger,arguments);
	};
	
	Map.prototype.mergeDeepWith=function(merger){var iters=SLICE$0.call(arguments,1);
	return mergeIntoMapWith(this,deepMergerWith(merger),iters);
	};
	
	Map.prototype.mergeDeepIn=function(keyPath){var iters=SLICE$0.call(arguments,1);
	return this.updateIn(
	keyPath,
	emptyMap(),
	function(m){return typeof m.mergeDeep==='function'?
	m.mergeDeep.apply(m,iters):
	iters[iters.length-1];});
	
	};
	
	Map.prototype.sort=function(comparator){
	
	return OrderedMap(sortFactory(this,comparator));
	};
	
	Map.prototype.sortBy=function(mapper,comparator){
	
	return OrderedMap(sortFactory(this,comparator,mapper));
	};
	
	
	
	Map.prototype.withMutations=function(fn){
	var mutable=this.asMutable();
	fn(mutable);
	return mutable.wasAltered()?mutable.__ensureOwner(this.__ownerID):this;
	};
	
	Map.prototype.asMutable=function(){
	return this.__ownerID?this:this.__ensureOwner(new OwnerID());
	};
	
	Map.prototype.asImmutable=function(){
	return this.__ensureOwner();
	};
	
	Map.prototype.wasAltered=function(){
	return this.__altered;
	};
	
	Map.prototype.__iterator=function(type,reverse){
	return new MapIterator(this,type,reverse);
	};
	
	Map.prototype.__iterate=function(fn,reverse){var this$0=this;
	var iterations=0;
	this._root&&this._root.iterate(function(entry){
	iterations++;
	return fn(entry[1],entry[0],this$0);
	},reverse);
	return iterations;
	};
	
	Map.prototype.__ensureOwner=function(ownerID){
	if(ownerID===this.__ownerID){
	return this;
	}
	if(!ownerID){
	this.__ownerID=ownerID;
	this.__altered=false;
	return this;
	}
	return makeMap(this.size,this._root,ownerID,this.__hash);
	};
	
	
	function isMap(maybeMap){
	return!!(maybeMap&&maybeMap[IS_MAP_SENTINEL]);
	}
	
	Map.isMap=isMap;
	
	var IS_MAP_SENTINEL='@@__IMMUTABLE_MAP__@@';
	
	var MapPrototype=Map.prototype;
	MapPrototype[IS_MAP_SENTINEL]=true;
	MapPrototype[DELETE]=MapPrototype.remove;
	MapPrototype.removeIn=MapPrototype.deleteIn;
	
	
	
	
	
	
	function ArrayMapNode(ownerID,entries){
	this.ownerID=ownerID;
	this.entries=entries;
	}
	
	ArrayMapNode.prototype.get=function(shift,keyHash,key,notSetValue){
	var entries=this.entries;
	for(var ii=0,len=entries.length;ii<len;ii++){
	if(is(key,entries[ii][0])){
	return entries[ii][1];
	}
	}
	return notSetValue;
	};
	
	ArrayMapNode.prototype.update=function(ownerID,shift,keyHash,key,value,didChangeSize,didAlter){
	var removed=value===NOT_SET;
	
	var entries=this.entries;
	var idx=0;
	for(var len=entries.length;idx<len;idx++){
	if(is(key,entries[idx][0])){
	break;
	}
	}
	var exists=idx<len;
	
	if(exists?entries[idx][1]===value:removed){
	return this;
	}
	
	SetRef(didAlter);
	(removed||!exists)&&SetRef(didChangeSize);
	
	if(removed&&entries.length===1){
	return;
	}
	
	if(!exists&&!removed&&entries.length>=MAX_ARRAY_MAP_SIZE){
	return createNodes(ownerID,entries,key,value);
	}
	
	var isEditable=ownerID&&ownerID===this.ownerID;
	var newEntries=isEditable?entries:arrCopy(entries);
	
	if(exists){
	if(removed){
	idx===len-1?newEntries.pop():newEntries[idx]=newEntries.pop();
	}else{
	newEntries[idx]=[key,value];
	}
	}else{
	newEntries.push([key,value]);
	}
	
	if(isEditable){
	this.entries=newEntries;
	return this;
	}
	
	return new ArrayMapNode(ownerID,newEntries);
	};
	
	
	
	
	function BitmapIndexedNode(ownerID,bitmap,nodes){
	this.ownerID=ownerID;
	this.bitmap=bitmap;
	this.nodes=nodes;
	}
	
	BitmapIndexedNode.prototype.get=function(shift,keyHash,key,notSetValue){
	if(keyHash===undefined){
	keyHash=hash(key);
	}
	var bit=1<<((shift===0?keyHash:keyHash>>>shift)&MASK);
	var bitmap=this.bitmap;
	return(bitmap&bit)===0?notSetValue:
	this.nodes[popCount(bitmap&bit-1)].get(shift+SHIFT,keyHash,key,notSetValue);
	};
	
	BitmapIndexedNode.prototype.update=function(ownerID,shift,keyHash,key,value,didChangeSize,didAlter){
	if(keyHash===undefined){
	keyHash=hash(key);
	}
	var keyHashFrag=(shift===0?keyHash:keyHash>>>shift)&MASK;
	var bit=1<<keyHashFrag;
	var bitmap=this.bitmap;
	var exists=(bitmap&bit)!==0;
	
	if(!exists&&value===NOT_SET){
	return this;
	}
	
	var idx=popCount(bitmap&bit-1);
	var nodes=this.nodes;
	var node=exists?nodes[idx]:undefined;
	var newNode=updateNode(node,ownerID,shift+SHIFT,keyHash,key,value,didChangeSize,didAlter);
	
	if(newNode===node){
	return this;
	}
	
	if(!exists&&newNode&&nodes.length>=MAX_BITMAP_INDEXED_SIZE){
	return expandNodes(ownerID,nodes,bitmap,keyHashFrag,newNode);
	}
	
	if(exists&&!newNode&&nodes.length===2&&isLeafNode(nodes[idx^1])){
	return nodes[idx^1];
	}
	
	if(exists&&newNode&&nodes.length===1&&isLeafNode(newNode)){
	return newNode;
	}
	
	var isEditable=ownerID&&ownerID===this.ownerID;
	var newBitmap=exists?newNode?bitmap:bitmap^bit:bitmap|bit;
	var newNodes=exists?newNode?
	setIn(nodes,idx,newNode,isEditable):
	spliceOut(nodes,idx,isEditable):
	spliceIn(nodes,idx,newNode,isEditable);
	
	if(isEditable){
	this.bitmap=newBitmap;
	this.nodes=newNodes;
	return this;
	}
	
	return new BitmapIndexedNode(ownerID,newBitmap,newNodes);
	};
	
	
	
	
	function HashArrayMapNode(ownerID,count,nodes){
	this.ownerID=ownerID;
	this.count=count;
	this.nodes=nodes;
	}
	
	HashArrayMapNode.prototype.get=function(shift,keyHash,key,notSetValue){
	if(keyHash===undefined){
	keyHash=hash(key);
	}
	var idx=(shift===0?keyHash:keyHash>>>shift)&MASK;
	var node=this.nodes[idx];
	return node?node.get(shift+SHIFT,keyHash,key,notSetValue):notSetValue;
	};
	
	HashArrayMapNode.prototype.update=function(ownerID,shift,keyHash,key,value,didChangeSize,didAlter){
	if(keyHash===undefined){
	keyHash=hash(key);
	}
	var idx=(shift===0?keyHash:keyHash>>>shift)&MASK;
	var removed=value===NOT_SET;
	var nodes=this.nodes;
	var node=nodes[idx];
	
	if(removed&&!node){
	return this;
	}
	
	var newNode=updateNode(node,ownerID,shift+SHIFT,keyHash,key,value,didChangeSize,didAlter);
	if(newNode===node){
	return this;
	}
	
	var newCount=this.count;
	if(!node){
	newCount++;
	}else if(!newNode){
	newCount--;
	if(newCount<MIN_HASH_ARRAY_MAP_SIZE){
	return packNodes(ownerID,nodes,newCount,idx);
	}
	}
	
	var isEditable=ownerID&&ownerID===this.ownerID;
	var newNodes=setIn(nodes,idx,newNode,isEditable);
	
	if(isEditable){
	this.count=newCount;
	this.nodes=newNodes;
	return this;
	}
	
	return new HashArrayMapNode(ownerID,newCount,newNodes);
	};
	
	
	
	
	function HashCollisionNode(ownerID,keyHash,entries){
	this.ownerID=ownerID;
	this.keyHash=keyHash;
	this.entries=entries;
	}
	
	HashCollisionNode.prototype.get=function(shift,keyHash,key,notSetValue){
	var entries=this.entries;
	for(var ii=0,len=entries.length;ii<len;ii++){
	if(is(key,entries[ii][0])){
	return entries[ii][1];
	}
	}
	return notSetValue;
	};
	
	HashCollisionNode.prototype.update=function(ownerID,shift,keyHash,key,value,didChangeSize,didAlter){
	if(keyHash===undefined){
	keyHash=hash(key);
	}
	
	var removed=value===NOT_SET;
	
	if(keyHash!==this.keyHash){
	if(removed){
	return this;
	}
	SetRef(didAlter);
	SetRef(didChangeSize);
	return mergeIntoNode(this,ownerID,shift,keyHash,[key,value]);
	}
	
	var entries=this.entries;
	var idx=0;
	for(var len=entries.length;idx<len;idx++){
	if(is(key,entries[idx][0])){
	break;
	}
	}
	var exists=idx<len;
	
	if(exists?entries[idx][1]===value:removed){
	return this;
	}
	
	SetRef(didAlter);
	(removed||!exists)&&SetRef(didChangeSize);
	
	if(removed&&len===2){
	return new ValueNode(ownerID,this.keyHash,entries[idx^1]);
	}
	
	var isEditable=ownerID&&ownerID===this.ownerID;
	var newEntries=isEditable?entries:arrCopy(entries);
	
	if(exists){
	if(removed){
	idx===len-1?newEntries.pop():newEntries[idx]=newEntries.pop();
	}else{
	newEntries[idx]=[key,value];
	}
	}else{
	newEntries.push([key,value]);
	}
	
	if(isEditable){
	this.entries=newEntries;
	return this;
	}
	
	return new HashCollisionNode(ownerID,this.keyHash,newEntries);
	};
	
	
	
	
	function ValueNode(ownerID,keyHash,entry){
	this.ownerID=ownerID;
	this.keyHash=keyHash;
	this.entry=entry;
	}
	
	ValueNode.prototype.get=function(shift,keyHash,key,notSetValue){
	return is(key,this.entry[0])?this.entry[1]:notSetValue;
	};
	
	ValueNode.prototype.update=function(ownerID,shift,keyHash,key,value,didChangeSize,didAlter){
	var removed=value===NOT_SET;
	var keyMatch=is(key,this.entry[0]);
	if(keyMatch?value===this.entry[1]:removed){
	return this;
	}
	
	SetRef(didAlter);
	
	if(removed){
	SetRef(didChangeSize);
	return;
	}
	
	if(keyMatch){
	if(ownerID&&ownerID===this.ownerID){
	this.entry[1]=value;
	return this;
	}
	return new ValueNode(ownerID,this.keyHash,[key,value]);
	}
	
	SetRef(didChangeSize);
	return mergeIntoNode(this,ownerID,shift,hash(key),[key,value]);
	};
	
	
	
	
	
	ArrayMapNode.prototype.iterate=
	HashCollisionNode.prototype.iterate=function(fn,reverse){
	var entries=this.entries;
	for(var ii=0,maxIndex=entries.length-1;ii<=maxIndex;ii++){
	if(fn(entries[reverse?maxIndex-ii:ii])===false){
	return false;
	}
	}
	};
	
	BitmapIndexedNode.prototype.iterate=
	HashArrayMapNode.prototype.iterate=function(fn,reverse){
	var nodes=this.nodes;
	for(var ii=0,maxIndex=nodes.length-1;ii<=maxIndex;ii++){
	var node=nodes[reverse?maxIndex-ii:ii];
	if(node&&node.iterate(fn,reverse)===false){
	return false;
	}
	}
	};
	
	ValueNode.prototype.iterate=function(fn,reverse){
	return fn(this.entry);
	};
	
	createClass(MapIterator,Iterator);
	
	function MapIterator(map,type,reverse){
	this._type=type;
	this._reverse=reverse;
	this._stack=map._root&&mapIteratorFrame(map._root);
	}
	
	MapIterator.prototype.next=function(){
	var type=this._type;
	var stack=this._stack;
	while(stack){
	var node=stack.node;
	var index=stack.index++;
	var maxIndex;
	if(node.entry){
	if(index===0){
	return mapIteratorValue(type,node.entry);
	}
	}else if(node.entries){
	maxIndex=node.entries.length-1;
	if(index<=maxIndex){
	return mapIteratorValue(type,node.entries[this._reverse?maxIndex-index:index]);
	}
	}else{
	maxIndex=node.nodes.length-1;
	if(index<=maxIndex){
	var subNode=node.nodes[this._reverse?maxIndex-index:index];
	if(subNode){
	if(subNode.entry){
	return mapIteratorValue(type,subNode.entry);
	}
	stack=this._stack=mapIteratorFrame(subNode,stack);
	}
	continue;
	}
	}
	stack=this._stack=this._stack.__prev;
	}
	return iteratorDone();
	};
	
	
	function mapIteratorValue(type,entry){
	return iteratorValue(type,entry[0],entry[1]);
	}
	
	function mapIteratorFrame(node,prev){
	return{
	node:node,
	index:0,
	__prev:prev};
	
	}
	
	function makeMap(size,root,ownerID,hash){
	var map=Object.create(MapPrototype);
	map.size=size;
	map._root=root;
	map.__ownerID=ownerID;
	map.__hash=hash;
	map.__altered=false;
	return map;
	}
	
	var EMPTY_MAP;
	function emptyMap(){
	return EMPTY_MAP||(EMPTY_MAP=makeMap(0));
	}
	
	function updateMap(map,k,v){
	var newRoot;
	var newSize;
	if(!map._root){
	if(v===NOT_SET){
	return map;
	}
	newSize=1;
	newRoot=new ArrayMapNode(map.__ownerID,[[k,v]]);
	}else{
	var didChangeSize=MakeRef(CHANGE_LENGTH);
	var didAlter=MakeRef(DID_ALTER);
	newRoot=updateNode(map._root,map.__ownerID,0,undefined,k,v,didChangeSize,didAlter);
	if(!didAlter.value){
	return map;
	}
	newSize=map.size+(didChangeSize.value?v===NOT_SET?-1:1:0);
	}
	if(map.__ownerID){
	map.size=newSize;
	map._root=newRoot;
	map.__hash=undefined;
	map.__altered=true;
	return map;
	}
	return newRoot?makeMap(newSize,newRoot):emptyMap();
	}
	
	function updateNode(node,ownerID,shift,keyHash,key,value,didChangeSize,didAlter){
	if(!node){
	if(value===NOT_SET){
	return node;
	}
	SetRef(didAlter);
	SetRef(didChangeSize);
	return new ValueNode(ownerID,keyHash,[key,value]);
	}
	return node.update(ownerID,shift,keyHash,key,value,didChangeSize,didAlter);
	}
	
	function isLeafNode(node){
	return node.constructor===ValueNode||node.constructor===HashCollisionNode;
	}
	
	function mergeIntoNode(node,ownerID,shift,keyHash,entry){
	if(node.keyHash===keyHash){
	return new HashCollisionNode(ownerID,keyHash,[node.entry,entry]);
	}
	
	var idx1=(shift===0?node.keyHash:node.keyHash>>>shift)&MASK;
	var idx2=(shift===0?keyHash:keyHash>>>shift)&MASK;
	
	var newNode;
	var nodes=idx1===idx2?
	[mergeIntoNode(node,ownerID,shift+SHIFT,keyHash,entry)]:(
	newNode=new ValueNode(ownerID,keyHash,entry),idx1<idx2?[node,newNode]:[newNode,node]);
	
	return new BitmapIndexedNode(ownerID,1<<idx1|1<<idx2,nodes);
	}
	
	function createNodes(ownerID,entries,key,value){
	if(!ownerID){
	ownerID=new OwnerID();
	}
	var node=new ValueNode(ownerID,hash(key),[key,value]);
	for(var ii=0;ii<entries.length;ii++){
	var entry=entries[ii];
	node=node.update(ownerID,0,undefined,entry[0],entry[1]);
	}
	return node;
	}
	
	function packNodes(ownerID,nodes,count,excluding){
	var bitmap=0;
	var packedII=0;
	var packedNodes=new Array(count);
	for(var ii=0,bit=1,len=nodes.length;ii<len;ii++,bit<<=1){
	var node=nodes[ii];
	if(node!==undefined&&ii!==excluding){
	bitmap|=bit;
	packedNodes[packedII++]=node;
	}
	}
	return new BitmapIndexedNode(ownerID,bitmap,packedNodes);
	}
	
	function expandNodes(ownerID,nodes,bitmap,including,node){
	var count=0;
	var expandedNodes=new Array(SIZE);
	for(var ii=0;bitmap!==0;ii++,bitmap>>>=1){
	expandedNodes[ii]=bitmap&1?nodes[count++]:undefined;
	}
	expandedNodes[including]=node;
	return new HashArrayMapNode(ownerID,count+1,expandedNodes);
	}
	
	function mergeIntoMapWith(map,merger,iterables){
	var iters=[];
	for(var ii=0;ii<iterables.length;ii++){
	var value=iterables[ii];
	var iter=KeyedIterable(value);
	if(!isIterable(value)){
	iter=iter.map(function(v){return fromJS(v);});
	}
	iters.push(iter);
	}
	return mergeIntoCollectionWith(map,merger,iters);
	}
	
	function deepMerger(existing,value,key){
	return existing&&existing.mergeDeep&&isIterable(value)?
	existing.mergeDeep(value):
	is(existing,value)?existing:value;
	}
	
	function deepMergerWith(merger){
	return function(existing,value,key){
	if(existing&&existing.mergeDeepWith&&isIterable(value)){
	return existing.mergeDeepWith(merger,value);
	}
	var nextValue=merger(existing,value,key);
	return is(existing,nextValue)?existing:nextValue;
	};
	}
	
	function mergeIntoCollectionWith(collection,merger,iters){
	iters=iters.filter(function(x){return x.size!==0;});
	if(iters.length===0){
	return collection;
	}
	if(collection.size===0&&!collection.__ownerID&&iters.length===1){
	return collection.constructor(iters[0]);
	}
	return collection.withMutations(function(collection){
	var mergeIntoMap=merger?
	function(value,key){
	collection.update(key,NOT_SET,function(existing)
	{return existing===NOT_SET?value:merger(existing,value,key);});
	
	}:
	function(value,key){
	collection.set(key,value);
	};
	for(var ii=0;ii<iters.length;ii++){
	iters[ii].forEach(mergeIntoMap);
	}
	});
	}
	
	function updateInDeepMap(existing,keyPathIter,notSetValue,updater){
	var isNotSet=existing===NOT_SET;
	var step=keyPathIter.next();
	if(step.done){
	var existingValue=isNotSet?notSetValue:existing;
	var newValue=updater(existingValue);
	return newValue===existingValue?existing:newValue;
	}
	invariant(
	isNotSet||existing&&existing.set,
	'invalid keyPath');
	
	var key=step.value;
	var nextExisting=isNotSet?NOT_SET:existing.get(key,NOT_SET);
	var nextUpdated=updateInDeepMap(
	nextExisting,
	keyPathIter,
	notSetValue,
	updater);
	
	return nextUpdated===nextExisting?existing:
	nextUpdated===NOT_SET?existing.remove(key):
	(isNotSet?emptyMap():existing).set(key,nextUpdated);
	}
	
	function popCount(x){
	x=x-(x>>1&0x55555555);
	x=(x&0x33333333)+(x>>2&0x33333333);
	x=x+(x>>4)&0x0f0f0f0f;
	x=x+(x>>8);
	x=x+(x>>16);
	return x&0x7f;
	}
	
	function setIn(array,idx,val,canEdit){
	var newArray=canEdit?array:arrCopy(array);
	newArray[idx]=val;
	return newArray;
	}
	
	function spliceIn(array,idx,val,canEdit){
	var newLen=array.length+1;
	if(canEdit&&idx+1===newLen){
	array[idx]=val;
	return array;
	}
	var newArray=new Array(newLen);
	var after=0;
	for(var ii=0;ii<newLen;ii++){
	if(ii===idx){
	newArray[ii]=val;
	after=-1;
	}else{
	newArray[ii]=array[ii+after];
	}
	}
	return newArray;
	}
	
	function spliceOut(array,idx,canEdit){
	var newLen=array.length-1;
	if(canEdit&&idx===newLen){
	array.pop();
	return array;
	}
	var newArray=new Array(newLen);
	var after=0;
	for(var ii=0;ii<newLen;ii++){
	if(ii===idx){
	after=1;
	}
	newArray[ii]=array[ii+after];
	}
	return newArray;
	}
	
	var MAX_ARRAY_MAP_SIZE=SIZE/4;
	var MAX_BITMAP_INDEXED_SIZE=SIZE/2;
	var MIN_HASH_ARRAY_MAP_SIZE=SIZE/4;
	
	createClass(List,IndexedCollection);
	
	
	
	function List(value){
	var empty=emptyList();
	if(value===null||value===undefined){
	return empty;
	}
	if(isList(value)){
	return value;
	}
	var iter=IndexedIterable(value);
	var size=iter.size;
	if(size===0){
	return empty;
	}
	assertNotInfinite(size);
	if(size>0&&size<SIZE){
	return makeList(0,size,SHIFT,null,new VNode(iter.toArray()));
	}
	return empty.withMutations(function(list){
	list.setSize(size);
	iter.forEach(function(v,i){return list.set(i,v);});
	});
	}
	
	List.of=function(){
	return this(arguments);
	};
	
	List.prototype.toString=function(){
	return this.__toString('List [',']');
	};
	
	
	
	List.prototype.get=function(index,notSetValue){
	index=wrapIndex(this,index);
	if(index>=0&&index<this.size){
	index+=this._origin;
	var node=listNodeFor(this,index);
	return node&&node.array[index&MASK];
	}
	return notSetValue;
	};
	
	
	
	List.prototype.set=function(index,value){
	return updateList(this,index,value);
	};
	
	List.prototype.remove=function(index){
	return!this.has(index)?this:
	index===0?this.shift():
	index===this.size-1?this.pop():
	this.splice(index,1);
	};
	
	List.prototype.insert=function(index,value){
	return this.splice(index,0,value);
	};
	
	List.prototype.clear=function(){
	if(this.size===0){
	return this;
	}
	if(this.__ownerID){
	this.size=this._origin=this._capacity=0;
	this._level=SHIFT;
	this._root=this._tail=null;
	this.__hash=undefined;
	this.__altered=true;
	return this;
	}
	return emptyList();
	};
	
	List.prototype.push=function(){
	var values=arguments;
	var oldSize=this.size;
	return this.withMutations(function(list){
	setListBounds(list,0,oldSize+values.length);
	for(var ii=0;ii<values.length;ii++){
	list.set(oldSize+ii,values[ii]);
	}
	});
	};
	
	List.prototype.pop=function(){
	return setListBounds(this,0,-1);
	};
	
	List.prototype.unshift=function(){
	var values=arguments;
	return this.withMutations(function(list){
	setListBounds(list,-values.length);
	for(var ii=0;ii<values.length;ii++){
	list.set(ii,values[ii]);
	}
	});
	};
	
	List.prototype.shift=function(){
	return setListBounds(this,1);
	};
	
	
	
	List.prototype.merge=function(){
	return mergeIntoListWith(this,undefined,arguments);
	};
	
	List.prototype.mergeWith=function(merger){var iters=SLICE$0.call(arguments,1);
	return mergeIntoListWith(this,merger,iters);
	};
	
	List.prototype.mergeDeep=function(){
	return mergeIntoListWith(this,deepMerger,arguments);
	};
	
	List.prototype.mergeDeepWith=function(merger){var iters=SLICE$0.call(arguments,1);
	return mergeIntoListWith(this,deepMergerWith(merger),iters);
	};
	
	List.prototype.setSize=function(size){
	return setListBounds(this,0,size);
	};
	
	
	
	List.prototype.slice=function(begin,end){
	var size=this.size;
	if(wholeSlice(begin,end,size)){
	return this;
	}
	return setListBounds(
	this,
	resolveBegin(begin,size),
	resolveEnd(end,size));
	
	};
	
	List.prototype.__iterator=function(type,reverse){
	var index=0;
	var values=iterateList(this,reverse);
	return new Iterator(function(){
	var value=values();
	return value===DONE?
	iteratorDone():
	iteratorValue(type,index++,value);
	});
	};
	
	List.prototype.__iterate=function(fn,reverse){
	var index=0;
	var values=iterateList(this,reverse);
	var value;
	while((value=values())!==DONE){
	if(fn(value,index++,this)===false){
	break;
	}
	}
	return index;
	};
	
	List.prototype.__ensureOwner=function(ownerID){
	if(ownerID===this.__ownerID){
	return this;
	}
	if(!ownerID){
	this.__ownerID=ownerID;
	return this;
	}
	return makeList(this._origin,this._capacity,this._level,this._root,this._tail,ownerID,this.__hash);
	};
	
	
	function isList(maybeList){
	return!!(maybeList&&maybeList[IS_LIST_SENTINEL]);
	}
	
	List.isList=isList;
	
	var IS_LIST_SENTINEL='@@__IMMUTABLE_LIST__@@';
	
	var ListPrototype=List.prototype;
	ListPrototype[IS_LIST_SENTINEL]=true;
	ListPrototype[DELETE]=ListPrototype.remove;
	ListPrototype.setIn=MapPrototype.setIn;
	ListPrototype.deleteIn=
	ListPrototype.removeIn=MapPrototype.removeIn;
	ListPrototype.update=MapPrototype.update;
	ListPrototype.updateIn=MapPrototype.updateIn;
	ListPrototype.mergeIn=MapPrototype.mergeIn;
	ListPrototype.mergeDeepIn=MapPrototype.mergeDeepIn;
	ListPrototype.withMutations=MapPrototype.withMutations;
	ListPrototype.asMutable=MapPrototype.asMutable;
	ListPrototype.asImmutable=MapPrototype.asImmutable;
	ListPrototype.wasAltered=MapPrototype.wasAltered;
	
	
	
	function VNode(array,ownerID){
	this.array=array;
	this.ownerID=ownerID;
	}
	
	
	
	VNode.prototype.removeBefore=function(ownerID,level,index){
	if(index===level?1<<level:0||this.array.length===0){
	return this;
	}
	var originIndex=index>>>level&MASK;
	if(originIndex>=this.array.length){
	return new VNode([],ownerID);
	}
	var removingFirst=originIndex===0;
	var newChild;
	if(level>0){
	var oldChild=this.array[originIndex];
	newChild=oldChild&&oldChild.removeBefore(ownerID,level-SHIFT,index);
	if(newChild===oldChild&&removingFirst){
	return this;
	}
	}
	if(removingFirst&&!newChild){
	return this;
	}
	var editable=editableVNode(this,ownerID);
	if(!removingFirst){
	for(var ii=0;ii<originIndex;ii++){
	editable.array[ii]=undefined;
	}
	}
	if(newChild){
	editable.array[originIndex]=newChild;
	}
	return editable;
	};
	
	VNode.prototype.removeAfter=function(ownerID,level,index){
	if(index===(level?1<<level:0)||this.array.length===0){
	return this;
	}
	var sizeIndex=index-1>>>level&MASK;
	if(sizeIndex>=this.array.length){
	return this;
	}
	
	var newChild;
	if(level>0){
	var oldChild=this.array[sizeIndex];
	newChild=oldChild&&oldChild.removeAfter(ownerID,level-SHIFT,index);
	if(newChild===oldChild&&sizeIndex===this.array.length-1){
	return this;
	}
	}
	
	var editable=editableVNode(this,ownerID);
	editable.array.splice(sizeIndex+1);
	if(newChild){
	editable.array[sizeIndex]=newChild;
	}
	return editable;
	};
	
	
	
	var DONE={};
	
	function iterateList(list,reverse){
	var left=list._origin;
	var right=list._capacity;
	var tailPos=getTailOffset(right);
	var tail=list._tail;
	
	return iterateNodeOrLeaf(list._root,list._level,0);
	
	function iterateNodeOrLeaf(node,level,offset){
	return level===0?
	iterateLeaf(node,offset):
	iterateNode(node,level,offset);
	}
	
	function iterateLeaf(node,offset){
	var array=offset===tailPos?tail&&tail.array:node&&node.array;
	var from=offset>left?0:left-offset;
	var to=right-offset;
	if(to>SIZE){
	to=SIZE;
	}
	return function(){
	if(from===to){
	return DONE;
	}
	var idx=reverse?--to:from++;
	return array&&array[idx];
	};
	}
	
	function iterateNode(node,level,offset){
	var values;
	var array=node&&node.array;
	var from=offset>left?0:left-offset>>level;
	var to=(right-offset>>level)+1;
	if(to>SIZE){
	to=SIZE;
	}
	return function(){
	do{
	if(values){
	var value=values();
	if(value!==DONE){
	return value;
	}
	values=null;
	}
	if(from===to){
	return DONE;
	}
	var idx=reverse?--to:from++;
	values=iterateNodeOrLeaf(
	array&&array[idx],level-SHIFT,offset+(idx<<level));
	
	}while(true);
	};
	}
	}
	
	function makeList(origin,capacity,level,root,tail,ownerID,hash){
	var list=Object.create(ListPrototype);
	list.size=capacity-origin;
	list._origin=origin;
	list._capacity=capacity;
	list._level=level;
	list._root=root;
	list._tail=tail;
	list.__ownerID=ownerID;
	list.__hash=hash;
	list.__altered=false;
	return list;
	}
	
	var EMPTY_LIST;
	function emptyList(){
	return EMPTY_LIST||(EMPTY_LIST=makeList(0,0,SHIFT));
	}
	
	function updateList(list,index,value){
	index=wrapIndex(list,index);
	
	if(index!==index){
	return list;
	}
	
	if(index>=list.size||index<0){
	return list.withMutations(function(list){
	index<0?
	setListBounds(list,index).set(0,value):
	setListBounds(list,0,index+1).set(index,value);
	});
	}
	
	index+=list._origin;
	
	var newTail=list._tail;
	var newRoot=list._root;
	var didAlter=MakeRef(DID_ALTER);
	if(index>=getTailOffset(list._capacity)){
	newTail=updateVNode(newTail,list.__ownerID,0,index,value,didAlter);
	}else{
	newRoot=updateVNode(newRoot,list.__ownerID,list._level,index,value,didAlter);
	}
	
	if(!didAlter.value){
	return list;
	}
	
	if(list.__ownerID){
	list._root=newRoot;
	list._tail=newTail;
	list.__hash=undefined;
	list.__altered=true;
	return list;
	}
	return makeList(list._origin,list._capacity,list._level,newRoot,newTail);
	}
	
	function updateVNode(node,ownerID,level,index,value,didAlter){
	var idx=index>>>level&MASK;
	var nodeHas=node&&idx<node.array.length;
	if(!nodeHas&&value===undefined){
	return node;
	}
	
	var newNode;
	
	if(level>0){
	var lowerNode=node&&node.array[idx];
	var newLowerNode=updateVNode(lowerNode,ownerID,level-SHIFT,index,value,didAlter);
	if(newLowerNode===lowerNode){
	return node;
	}
	newNode=editableVNode(node,ownerID);
	newNode.array[idx]=newLowerNode;
	return newNode;
	}
	
	if(nodeHas&&node.array[idx]===value){
	return node;
	}
	
	SetRef(didAlter);
	
	newNode=editableVNode(node,ownerID);
	if(value===undefined&&idx===newNode.array.length-1){
	newNode.array.pop();
	}else{
	newNode.array[idx]=value;
	}
	return newNode;
	}
	
	function editableVNode(node,ownerID){
	if(ownerID&&node&&ownerID===node.ownerID){
	return node;
	}
	return new VNode(node?node.array.slice():[],ownerID);
	}
	
	function listNodeFor(list,rawIndex){
	if(rawIndex>=getTailOffset(list._capacity)){
	return list._tail;
	}
	if(rawIndex<1<<list._level+SHIFT){
	var node=list._root;
	var level=list._level;
	while(node&&level>0){
	node=node.array[rawIndex>>>level&MASK];
	level-=SHIFT;
	}
	return node;
	}
	}
	
	function setListBounds(list,begin,end){
	
	
	if(begin!==undefined){
	begin=begin|0;
	}
	if(end!==undefined){
	end=end|0;
	}
	var owner=list.__ownerID||new OwnerID();
	var oldOrigin=list._origin;
	var oldCapacity=list._capacity;
	var newOrigin=oldOrigin+begin;
	var newCapacity=end===undefined?oldCapacity:end<0?oldCapacity+end:oldOrigin+end;
	if(newOrigin===oldOrigin&&newCapacity===oldCapacity){
	return list;
	}
	
	
	if(newOrigin>=newCapacity){
	return list.clear();
	}
	
	var newLevel=list._level;
	var newRoot=list._root;
	
	
	var offsetShift=0;
	while(newOrigin+offsetShift<0){
	newRoot=new VNode(newRoot&&newRoot.array.length?[undefined,newRoot]:[],owner);
	newLevel+=SHIFT;
	offsetShift+=1<<newLevel;
	}
	if(offsetShift){
	newOrigin+=offsetShift;
	oldOrigin+=offsetShift;
	newCapacity+=offsetShift;
	oldCapacity+=offsetShift;
	}
	
	var oldTailOffset=getTailOffset(oldCapacity);
	var newTailOffset=getTailOffset(newCapacity);
	
	
	while(newTailOffset>=1<<newLevel+SHIFT){
	newRoot=new VNode(newRoot&&newRoot.array.length?[newRoot]:[],owner);
	newLevel+=SHIFT;
	}
	
	
	var oldTail=list._tail;
	var newTail=newTailOffset<oldTailOffset?
	listNodeFor(list,newCapacity-1):
	newTailOffset>oldTailOffset?new VNode([],owner):oldTail;
	
	
	if(oldTail&&newTailOffset>oldTailOffset&&newOrigin<oldCapacity&&oldTail.array.length){
	newRoot=editableVNode(newRoot,owner);
	var node=newRoot;
	for(var level=newLevel;level>SHIFT;level-=SHIFT){
	var idx=oldTailOffset>>>level&MASK;
	node=node.array[idx]=editableVNode(node.array[idx],owner);
	}
	node.array[oldTailOffset>>>SHIFT&MASK]=oldTail;
	}
	
	
	if(newCapacity<oldCapacity){
	newTail=newTail&&newTail.removeAfter(owner,0,newCapacity);
	}
	
	
	if(newOrigin>=newTailOffset){
	newOrigin-=newTailOffset;
	newCapacity-=newTailOffset;
	newLevel=SHIFT;
	newRoot=null;
	newTail=newTail&&newTail.removeBefore(owner,0,newOrigin);
	
	
	}else if(newOrigin>oldOrigin||newTailOffset<oldTailOffset){
	offsetShift=0;
	
	
	while(newRoot){
	var beginIndex=newOrigin>>>newLevel&MASK;
	if(beginIndex!==newTailOffset>>>newLevel&MASK){
	break;
	}
	if(beginIndex){
	offsetShift+=(1<<newLevel)*beginIndex;
	}
	newLevel-=SHIFT;
	newRoot=newRoot.array[beginIndex];
	}
	
	
	if(newRoot&&newOrigin>oldOrigin){
	newRoot=newRoot.removeBefore(owner,newLevel,newOrigin-offsetShift);
	}
	if(newRoot&&newTailOffset<oldTailOffset){
	newRoot=newRoot.removeAfter(owner,newLevel,newTailOffset-offsetShift);
	}
	if(offsetShift){
	newOrigin-=offsetShift;
	newCapacity-=offsetShift;
	}
	}
	
	if(list.__ownerID){
	list.size=newCapacity-newOrigin;
	list._origin=newOrigin;
	list._capacity=newCapacity;
	list._level=newLevel;
	list._root=newRoot;
	list._tail=newTail;
	list.__hash=undefined;
	list.__altered=true;
	return list;
	}
	return makeList(newOrigin,newCapacity,newLevel,newRoot,newTail);
	}
	
	function mergeIntoListWith(list,merger,iterables){
	var iters=[];
	var maxSize=0;
	for(var ii=0;ii<iterables.length;ii++){
	var value=iterables[ii];
	var iter=IndexedIterable(value);
	if(iter.size>maxSize){
	maxSize=iter.size;
	}
	if(!isIterable(value)){
	iter=iter.map(function(v){return fromJS(v);});
	}
	iters.push(iter);
	}
	if(maxSize>list.size){
	list=list.setSize(maxSize);
	}
	return mergeIntoCollectionWith(list,merger,iters);
	}
	
	function getTailOffset(size){
	return size<SIZE?0:size-1>>>SHIFT<<SHIFT;
	}
	
	createClass(OrderedMap,Map);
	
	
	
	function OrderedMap(value){
	return value===null||value===undefined?emptyOrderedMap():
	isOrderedMap(value)?value:
	emptyOrderedMap().withMutations(function(map){
	var iter=KeyedIterable(value);
	assertNotInfinite(iter.size);
	iter.forEach(function(v,k){return map.set(k,v);});
	});
	}
	
	OrderedMap.of=function(){
	return this(arguments);
	};
	
	OrderedMap.prototype.toString=function(){
	return this.__toString('OrderedMap {','}');
	};
	
	
	
	OrderedMap.prototype.get=function(k,notSetValue){
	var index=this._map.get(k);
	return index!==undefined?this._list.get(index)[1]:notSetValue;
	};
	
	
	
	OrderedMap.prototype.clear=function(){
	if(this.size===0){
	return this;
	}
	if(this.__ownerID){
	this.size=0;
	this._map.clear();
	this._list.clear();
	return this;
	}
	return emptyOrderedMap();
	};
	
	OrderedMap.prototype.set=function(k,v){
	return updateOrderedMap(this,k,v);
	};
	
	OrderedMap.prototype.remove=function(k){
	return updateOrderedMap(this,k,NOT_SET);
	};
	
	OrderedMap.prototype.wasAltered=function(){
	return this._map.wasAltered()||this._list.wasAltered();
	};
	
	OrderedMap.prototype.__iterate=function(fn,reverse){var this$0=this;
	return this._list.__iterate(
	function(entry){return entry&&fn(entry[1],entry[0],this$0);},
	reverse);
	
	};
	
	OrderedMap.prototype.__iterator=function(type,reverse){
	return this._list.fromEntrySeq().__iterator(type,reverse);
	};
	
	OrderedMap.prototype.__ensureOwner=function(ownerID){
	if(ownerID===this.__ownerID){
	return this;
	}
	var newMap=this._map.__ensureOwner(ownerID);
	var newList=this._list.__ensureOwner(ownerID);
	if(!ownerID){
	this.__ownerID=ownerID;
	this._map=newMap;
	this._list=newList;
	return this;
	}
	return makeOrderedMap(newMap,newList,ownerID,this.__hash);
	};
	
	
	function isOrderedMap(maybeOrderedMap){
	return isMap(maybeOrderedMap)&&isOrdered(maybeOrderedMap);
	}
	
	OrderedMap.isOrderedMap=isOrderedMap;
	
	OrderedMap.prototype[IS_ORDERED_SENTINEL]=true;
	OrderedMap.prototype[DELETE]=OrderedMap.prototype.remove;
	
	
	
	function makeOrderedMap(map,list,ownerID,hash){
	var omap=Object.create(OrderedMap.prototype);
	omap.size=map?map.size:0;
	omap._map=map;
	omap._list=list;
	omap.__ownerID=ownerID;
	omap.__hash=hash;
	return omap;
	}
	
	var EMPTY_ORDERED_MAP;
	function emptyOrderedMap(){
	return EMPTY_ORDERED_MAP||(EMPTY_ORDERED_MAP=makeOrderedMap(emptyMap(),emptyList()));
	}
	
	function updateOrderedMap(omap,k,v){
	var map=omap._map;
	var list=omap._list;
	var i=map.get(k);
	var has=i!==undefined;
	var newMap;
	var newList;
	if(v===NOT_SET){
	if(!has){
	return omap;
	}
	if(list.size>=SIZE&&list.size>=map.size*2){
	newList=list.filter(function(entry,idx){return entry!==undefined&&i!==idx;});
	newMap=newList.toKeyedSeq().map(function(entry){return entry[0];}).flip().toMap();
	if(omap.__ownerID){
	newMap.__ownerID=newList.__ownerID=omap.__ownerID;
	}
	}else{
	newMap=map.remove(k);
	newList=i===list.size-1?list.pop():list.set(i,undefined);
	}
	}else{
	if(has){
	if(v===list.get(i)[1]){
	return omap;
	}
	newMap=map;
	newList=list.set(i,[k,v]);
	}else{
	newMap=map.set(k,list.size);
	newList=list.set(list.size,[k,v]);
	}
	}
	if(omap.__ownerID){
	omap.size=newMap.size;
	omap._map=newMap;
	omap._list=newList;
	omap.__hash=undefined;
	return omap;
	}
	return makeOrderedMap(newMap,newList);
	}
	
	createClass(ToKeyedSequence,KeyedSeq);
	function ToKeyedSequence(indexed,useKeys){
	this._iter=indexed;
	this._useKeys=useKeys;
	this.size=indexed.size;
	}
	
	ToKeyedSequence.prototype.get=function(key,notSetValue){
	return this._iter.get(key,notSetValue);
	};
	
	ToKeyedSequence.prototype.has=function(key){
	return this._iter.has(key);
	};
	
	ToKeyedSequence.prototype.valueSeq=function(){
	return this._iter.valueSeq();
	};
	
	ToKeyedSequence.prototype.reverse=function(){var this$0=this;
	var reversedSequence=reverseFactory(this,true);
	if(!this._useKeys){
	reversedSequence.valueSeq=function(){return this$0._iter.toSeq().reverse();};
	}
	return reversedSequence;
	};
	
	ToKeyedSequence.prototype.map=function(mapper,context){var this$0=this;
	var mappedSequence=mapFactory(this,mapper,context);
	if(!this._useKeys){
	mappedSequence.valueSeq=function(){return this$0._iter.toSeq().map(mapper,context);};
	}
	return mappedSequence;
	};
	
	ToKeyedSequence.prototype.__iterate=function(fn,reverse){var this$0=this;
	var ii;
	return this._iter.__iterate(
	this._useKeys?
	function(v,k){return fn(v,k,this$0);}:(
	ii=reverse?resolveSize(this):0,
	function(v){return fn(v,reverse?--ii:ii++,this$0);}),
	reverse);
	
	};
	
	ToKeyedSequence.prototype.__iterator=function(type,reverse){
	if(this._useKeys){
	return this._iter.__iterator(type,reverse);
	}
	var iterator=this._iter.__iterator(ITERATE_VALUES,reverse);
	var ii=reverse?resolveSize(this):0;
	return new Iterator(function(){
	var step=iterator.next();
	return step.done?step:
	iteratorValue(type,reverse?--ii:ii++,step.value,step);
	});
	};
	
	ToKeyedSequence.prototype[IS_ORDERED_SENTINEL]=true;
	
	
	createClass(ToIndexedSequence,IndexedSeq);
	function ToIndexedSequence(iter){
	this._iter=iter;
	this.size=iter.size;
	}
	
	ToIndexedSequence.prototype.includes=function(value){
	return this._iter.includes(value);
	};
	
	ToIndexedSequence.prototype.__iterate=function(fn,reverse){var this$0=this;
	var iterations=0;
	return this._iter.__iterate(function(v){return fn(v,iterations++,this$0);},reverse);
	};
	
	ToIndexedSequence.prototype.__iterator=function(type,reverse){
	var iterator=this._iter.__iterator(ITERATE_VALUES,reverse);
	var iterations=0;
	return new Iterator(function(){
	var step=iterator.next();
	return step.done?step:
	iteratorValue(type,iterations++,step.value,step);
	});
	};
	
	
	
	createClass(ToSetSequence,SetSeq);
	function ToSetSequence(iter){
	this._iter=iter;
	this.size=iter.size;
	}
	
	ToSetSequence.prototype.has=function(key){
	return this._iter.includes(key);
	};
	
	ToSetSequence.prototype.__iterate=function(fn,reverse){var this$0=this;
	return this._iter.__iterate(function(v){return fn(v,v,this$0);},reverse);
	};
	
	ToSetSequence.prototype.__iterator=function(type,reverse){
	var iterator=this._iter.__iterator(ITERATE_VALUES,reverse);
	return new Iterator(function(){
	var step=iterator.next();
	return step.done?step:
	iteratorValue(type,step.value,step.value,step);
	});
	};
	
	
	
	createClass(FromEntriesSequence,KeyedSeq);
	function FromEntriesSequence(entries){
	this._iter=entries;
	this.size=entries.size;
	}
	
	FromEntriesSequence.prototype.entrySeq=function(){
	return this._iter.toSeq();
	};
	
	FromEntriesSequence.prototype.__iterate=function(fn,reverse){var this$0=this;
	return this._iter.__iterate(function(entry){
	
	
	if(entry){
	validateEntry(entry);
	var indexedIterable=isIterable(entry);
	return fn(
	indexedIterable?entry.get(1):entry[1],
	indexedIterable?entry.get(0):entry[0],
	this$0);
	
	}
	},reverse);
	};
	
	FromEntriesSequence.prototype.__iterator=function(type,reverse){
	var iterator=this._iter.__iterator(ITERATE_VALUES,reverse);
	return new Iterator(function(){
	while(true){
	var step=iterator.next();
	if(step.done){
	return step;
	}
	var entry=step.value;
	
	
	if(entry){
	validateEntry(entry);
	var indexedIterable=isIterable(entry);
	return iteratorValue(
	type,
	indexedIterable?entry.get(0):entry[0],
	indexedIterable?entry.get(1):entry[1],
	step);
	
	}
	}
	});
	};
	
	
	ToIndexedSequence.prototype.cacheResult=
	ToKeyedSequence.prototype.cacheResult=
	ToSetSequence.prototype.cacheResult=
	FromEntriesSequence.prototype.cacheResult=
	cacheResultThrough;
	
	
	function flipFactory(iterable){
	var flipSequence=makeSequence(iterable);
	flipSequence._iter=iterable;
	flipSequence.size=iterable.size;
	flipSequence.flip=function(){return iterable;};
	flipSequence.reverse=function(){
	var reversedSequence=iterable.reverse.apply(this);
	reversedSequence.flip=function(){return iterable.reverse();};
	return reversedSequence;
	};
	flipSequence.has=function(key){return iterable.includes(key);};
	flipSequence.includes=function(key){return iterable.has(key);};
	flipSequence.cacheResult=cacheResultThrough;
	flipSequence.__iterateUncached=function(fn,reverse){var this$0=this;
	return iterable.__iterate(function(v,k){return fn(k,v,this$0)!==false;},reverse);
	};
	flipSequence.__iteratorUncached=function(type,reverse){
	if(type===ITERATE_ENTRIES){
	var iterator=iterable.__iterator(type,reverse);
	return new Iterator(function(){
	var step=iterator.next();
	if(!step.done){
	var k=step.value[0];
	step.value[0]=step.value[1];
	step.value[1]=k;
	}
	return step;
	});
	}
	return iterable.__iterator(
	type===ITERATE_VALUES?ITERATE_KEYS:ITERATE_VALUES,
	reverse);
	
	};
	return flipSequence;
	}
	
	
	function mapFactory(iterable,mapper,context){
	var mappedSequence=makeSequence(iterable);
	mappedSequence.size=iterable.size;
	mappedSequence.has=function(key){return iterable.has(key);};
	mappedSequence.get=function(key,notSetValue){
	var v=iterable.get(key,NOT_SET);
	return v===NOT_SET?
	notSetValue:
	mapper.call(context,v,key,iterable);
	};
	mappedSequence.__iterateUncached=function(fn,reverse){var this$0=this;
	return iterable.__iterate(
	function(v,k,c){return fn(mapper.call(context,v,k,c),k,this$0)!==false;},
	reverse);
	
	};
	mappedSequence.__iteratorUncached=function(type,reverse){
	var iterator=iterable.__iterator(ITERATE_ENTRIES,reverse);
	return new Iterator(function(){
	var step=iterator.next();
	if(step.done){
	return step;
	}
	var entry=step.value;
	var key=entry[0];
	return iteratorValue(
	type,
	key,
	mapper.call(context,entry[1],key,iterable),
	step);
	
	});
	};
	return mappedSequence;
	}
	
	
	function reverseFactory(iterable,useKeys){
	var reversedSequence=makeSequence(iterable);
	reversedSequence._iter=iterable;
	reversedSequence.size=iterable.size;
	reversedSequence.reverse=function(){return iterable;};
	if(iterable.flip){
	reversedSequence.flip=function(){
	var flipSequence=flipFactory(iterable);
	flipSequence.reverse=function(){return iterable.flip();};
	return flipSequence;
	};
	}
	reversedSequence.get=function(key,notSetValue)
	{return iterable.get(useKeys?key:-1-key,notSetValue);};
	reversedSequence.has=function(key)
	{return iterable.has(useKeys?key:-1-key);};
	reversedSequence.includes=function(value){return iterable.includes(value);};
	reversedSequence.cacheResult=cacheResultThrough;
	reversedSequence.__iterate=function(fn,reverse){var this$0=this;
	return iterable.__iterate(function(v,k){return fn(v,k,this$0);},!reverse);
	};
	reversedSequence.__iterator=
	function(type,reverse){return iterable.__iterator(type,!reverse);};
	return reversedSequence;
	}
	
	
	function filterFactory(iterable,predicate,context,useKeys){
	var filterSequence=makeSequence(iterable);
	if(useKeys){
	filterSequence.has=function(key){
	var v=iterable.get(key,NOT_SET);
	return v!==NOT_SET&&!!predicate.call(context,v,key,iterable);
	};
	filterSequence.get=function(key,notSetValue){
	var v=iterable.get(key,NOT_SET);
	return v!==NOT_SET&&predicate.call(context,v,key,iterable)?
	v:notSetValue;
	};
	}
	filterSequence.__iterateUncached=function(fn,reverse){var this$0=this;
	var iterations=0;
	iterable.__iterate(function(v,k,c){
	if(predicate.call(context,v,k,c)){
	iterations++;
	return fn(v,useKeys?k:iterations-1,this$0);
	}
	},reverse);
	return iterations;
	};
	filterSequence.__iteratorUncached=function(type,reverse){
	var iterator=iterable.__iterator(ITERATE_ENTRIES,reverse);
	var iterations=0;
	return new Iterator(function(){
	while(true){
	var step=iterator.next();
	if(step.done){
	return step;
	}
	var entry=step.value;
	var key=entry[0];
	var value=entry[1];
	if(predicate.call(context,value,key,iterable)){
	return iteratorValue(type,useKeys?key:iterations++,value,step);
	}
	}
	});
	};
	return filterSequence;
	}
	
	
	function countByFactory(iterable,grouper,context){
	var groups=Map().asMutable();
	iterable.__iterate(function(v,k){
	groups.update(
	grouper.call(context,v,k,iterable),
	0,
	function(a){return a+1;});
	
	});
	return groups.asImmutable();
	}
	
	
	function groupByFactory(iterable,grouper,context){
	var isKeyedIter=isKeyed(iterable);
	var groups=(isOrdered(iterable)?OrderedMap():Map()).asMutable();
	iterable.__iterate(function(v,k){
	groups.update(
	grouper.call(context,v,k,iterable),
	function(a){return a=a||[],a.push(isKeyedIter?[k,v]:v),a;});
	
	});
	var coerce=iterableClass(iterable);
	return groups.map(function(arr){return reify(iterable,coerce(arr));});
	}
	
	
	function sliceFactory(iterable,begin,end,useKeys){
	var originalSize=iterable.size;
	
	
	
	if(begin!==undefined){
	begin=begin|0;
	}
	if(end!==undefined){
	if(end===Infinity){
	end=originalSize;
	}else{
	end=end|0;
	}
	}
	
	if(wholeSlice(begin,end,originalSize)){
	return iterable;
	}
	
	var resolvedBegin=resolveBegin(begin,originalSize);
	var resolvedEnd=resolveEnd(end,originalSize);
	
	
	
	
	if(resolvedBegin!==resolvedBegin||resolvedEnd!==resolvedEnd){
	return sliceFactory(iterable.toSeq().cacheResult(),begin,end,useKeys);
	}
	
	
	
	
	
	var resolvedSize=resolvedEnd-resolvedBegin;
	var sliceSize;
	if(resolvedSize===resolvedSize){
	sliceSize=resolvedSize<0?0:resolvedSize;
	}
	
	var sliceSeq=makeSequence(iterable);
	
	
	
	sliceSeq.size=sliceSize===0?sliceSize:iterable.size&&sliceSize||undefined;
	
	if(!useKeys&&isSeq(iterable)&&sliceSize>=0){
	sliceSeq.get=function(index,notSetValue){
	index=wrapIndex(this,index);
	return index>=0&&index<sliceSize?
	iterable.get(index+resolvedBegin,notSetValue):
	notSetValue;
	};
	}
	
	sliceSeq.__iterateUncached=function(fn,reverse){var this$0=this;
	if(sliceSize===0){
	return 0;
	}
	if(reverse){
	return this.cacheResult().__iterate(fn,reverse);
	}
	var skipped=0;
	var isSkipping=true;
	var iterations=0;
	iterable.__iterate(function(v,k){
	if(!(isSkipping&&(isSkipping=skipped++<resolvedBegin))){
	iterations++;
	return fn(v,useKeys?k:iterations-1,this$0)!==false&&
	iterations!==sliceSize;
	}
	});
	return iterations;
	};
	
	sliceSeq.__iteratorUncached=function(type,reverse){
	if(sliceSize!==0&&reverse){
	return this.cacheResult().__iterator(type,reverse);
	}
	
	var iterator=sliceSize!==0&&iterable.__iterator(type,reverse);
	var skipped=0;
	var iterations=0;
	return new Iterator(function(){
	while(skipped++<resolvedBegin){
	iterator.next();
	}
	if(++iterations>sliceSize){
	return iteratorDone();
	}
	var step=iterator.next();
	if(useKeys||type===ITERATE_VALUES){
	return step;
	}else if(type===ITERATE_KEYS){
	return iteratorValue(type,iterations-1,undefined,step);
	}else{
	return iteratorValue(type,iterations-1,step.value[1],step);
	}
	});
	};
	
	return sliceSeq;
	}
	
	
	function takeWhileFactory(iterable,predicate,context){
	var takeSequence=makeSequence(iterable);
	takeSequence.__iterateUncached=function(fn,reverse){var this$0=this;
	if(reverse){
	return this.cacheResult().__iterate(fn,reverse);
	}
	var iterations=0;
	iterable.__iterate(function(v,k,c)
	{return predicate.call(context,v,k,c)&&++iterations&&fn(v,k,this$0);});
	
	return iterations;
	};
	takeSequence.__iteratorUncached=function(type,reverse){var this$0=this;
	if(reverse){
	return this.cacheResult().__iterator(type,reverse);
	}
	var iterator=iterable.__iterator(ITERATE_ENTRIES,reverse);
	var iterating=true;
	return new Iterator(function(){
	if(!iterating){
	return iteratorDone();
	}
	var step=iterator.next();
	if(step.done){
	return step;
	}
	var entry=step.value;
	var k=entry[0];
	var v=entry[1];
	if(!predicate.call(context,v,k,this$0)){
	iterating=false;
	return iteratorDone();
	}
	return type===ITERATE_ENTRIES?step:
	iteratorValue(type,k,v,step);
	});
	};
	return takeSequence;
	}
	
	
	function skipWhileFactory(iterable,predicate,context,useKeys){
	var skipSequence=makeSequence(iterable);
	skipSequence.__iterateUncached=function(fn,reverse){var this$0=this;
	if(reverse){
	return this.cacheResult().__iterate(fn,reverse);
	}
	var isSkipping=true;
	var iterations=0;
	iterable.__iterate(function(v,k,c){
	if(!(isSkipping&&(isSkipping=predicate.call(context,v,k,c)))){
	iterations++;
	return fn(v,useKeys?k:iterations-1,this$0);
	}
	});
	return iterations;
	};
	skipSequence.__iteratorUncached=function(type,reverse){var this$0=this;
	if(reverse){
	return this.cacheResult().__iterator(type,reverse);
	}
	var iterator=iterable.__iterator(ITERATE_ENTRIES,reverse);
	var skipping=true;
	var iterations=0;
	return new Iterator(function(){
	var step,k,v;
	do{
	step=iterator.next();
	if(step.done){
	if(useKeys||type===ITERATE_VALUES){
	return step;
	}else if(type===ITERATE_KEYS){
	return iteratorValue(type,iterations++,undefined,step);
	}else{
	return iteratorValue(type,iterations++,step.value[1],step);
	}
	}
	var entry=step.value;
	k=entry[0];
	v=entry[1];
	skipping&&(skipping=predicate.call(context,v,k,this$0));
	}while(skipping);
	return type===ITERATE_ENTRIES?step:
	iteratorValue(type,k,v,step);
	});
	};
	return skipSequence;
	}
	
	
	function concatFactory(iterable,values){
	var isKeyedIterable=isKeyed(iterable);
	var iters=[iterable].concat(values).map(function(v){
	if(!isIterable(v)){
	v=isKeyedIterable?
	keyedSeqFromValue(v):
	indexedSeqFromValue(Array.isArray(v)?v:[v]);
	}else if(isKeyedIterable){
	v=KeyedIterable(v);
	}
	return v;
	}).filter(function(v){return v.size!==0;});
	
	if(iters.length===0){
	return iterable;
	}
	
	if(iters.length===1){
	var singleton=iters[0];
	if(singleton===iterable||
	isKeyedIterable&&isKeyed(singleton)||
	isIndexed(iterable)&&isIndexed(singleton)){
	return singleton;
	}
	}
	
	var concatSeq=new ArraySeq(iters);
	if(isKeyedIterable){
	concatSeq=concatSeq.toKeyedSeq();
	}else if(!isIndexed(iterable)){
	concatSeq=concatSeq.toSetSeq();
	}
	concatSeq=concatSeq.flatten(true);
	concatSeq.size=iters.reduce(
	function(sum,seq){
	if(sum!==undefined){
	var size=seq.size;
	if(size!==undefined){
	return sum+size;
	}
	}
	},
	0);
	
	return concatSeq;
	}
	
	
	function flattenFactory(iterable,depth,useKeys){
	var flatSequence=makeSequence(iterable);
	flatSequence.__iterateUncached=function(fn,reverse){
	var iterations=0;
	var stopped=false;
	function flatDeep(iter,currentDepth){var this$0=this;
	iter.__iterate(function(v,k){
	if((!depth||currentDepth<depth)&&isIterable(v)){
	flatDeep(v,currentDepth+1);
	}else if(fn(v,useKeys?k:iterations++,this$0)===false){
	stopped=true;
	}
	return!stopped;
	},reverse);
	}
	flatDeep(iterable,0);
	return iterations;
	};
	flatSequence.__iteratorUncached=function(type,reverse){
	var iterator=iterable.__iterator(type,reverse);
	var stack=[];
	var iterations=0;
	return new Iterator(function(){
	while(iterator){
	var step=iterator.next();
	if(step.done!==false){
	iterator=stack.pop();
	continue;
	}
	var v=step.value;
	if(type===ITERATE_ENTRIES){
	v=v[1];
	}
	if((!depth||stack.length<depth)&&isIterable(v)){
	stack.push(iterator);
	iterator=v.__iterator(type,reverse);
	}else{
	return useKeys?step:iteratorValue(type,iterations++,v,step);
	}
	}
	return iteratorDone();
	});
	};
	return flatSequence;
	}
	
	
	function flatMapFactory(iterable,mapper,context){
	var coerce=iterableClass(iterable);
	return iterable.toSeq().map(
	function(v,k){return coerce(mapper.call(context,v,k,iterable));}).
	flatten(true);
	}
	
	
	function interposeFactory(iterable,separator){
	var interposedSequence=makeSequence(iterable);
	interposedSequence.size=iterable.size&&iterable.size*2-1;
	interposedSequence.__iterateUncached=function(fn,reverse){var this$0=this;
	var iterations=0;
	iterable.__iterate(function(v,k)
	{return(!iterations||fn(separator,iterations++,this$0)!==false)&&
	fn(v,iterations++,this$0)!==false;},
	reverse);
	
	return iterations;
	};
	interposedSequence.__iteratorUncached=function(type,reverse){
	var iterator=iterable.__iterator(ITERATE_VALUES,reverse);
	var iterations=0;
	var step;
	return new Iterator(function(){
	if(!step||iterations%2){
	step=iterator.next();
	if(step.done){
	return step;
	}
	}
	return iterations%2?
	iteratorValue(type,iterations++,separator):
	iteratorValue(type,iterations++,step.value,step);
	});
	};
	return interposedSequence;
	}
	
	
	function sortFactory(iterable,comparator,mapper){
	if(!comparator){
	comparator=defaultComparator;
	}
	var isKeyedIterable=isKeyed(iterable);
	var index=0;
	var entries=iterable.toSeq().map(
	function(v,k){return[k,v,index++,mapper?mapper(v,k,iterable):v];}).
	toArray();
	entries.sort(function(a,b){return comparator(a[3],b[3])||a[2]-b[2];}).forEach(
	isKeyedIterable?
	function(v,i){entries[i].length=2;}:
	function(v,i){entries[i]=v[1];});
	
	return isKeyedIterable?KeyedSeq(entries):
	isIndexed(iterable)?IndexedSeq(entries):
	SetSeq(entries);
	}
	
	
	function maxFactory(iterable,comparator,mapper){
	if(!comparator){
	comparator=defaultComparator;
	}
	if(mapper){
	var entry=iterable.toSeq().
	map(function(v,k){return[v,mapper(v,k,iterable)];}).
	reduce(function(a,b){return maxCompare(comparator,a[1],b[1])?b:a;});
	return entry&&entry[0];
	}else{
	return iterable.reduce(function(a,b){return maxCompare(comparator,a,b)?b:a;});
	}
	}
	
	function maxCompare(comparator,a,b){
	var comp=comparator(b,a);
	
	
	return comp===0&&b!==a&&(b===undefined||b===null||b!==b)||comp>0;
	}
	
	
	function zipWithFactory(keyIter,zipper,iters){
	var zipSequence=makeSequence(keyIter);
	zipSequence.size=new ArraySeq(iters).map(function(i){return i.size;}).min();
	
	
	zipSequence.__iterate=function(fn,reverse){
	
	
	
	
	
	
	
	
	
	
	
	
	
	var iterator=this.__iterator(ITERATE_VALUES,reverse);
	var step;
	var iterations=0;
	while(!(step=iterator.next()).done){
	if(fn(step.value,iterations++,this)===false){
	break;
	}
	}
	return iterations;
	};
	zipSequence.__iteratorUncached=function(type,reverse){
	var iterators=iters.map(function(i)
	{return i=Iterable(i),getIterator(reverse?i.reverse():i);});
	
	var iterations=0;
	var isDone=false;
	return new Iterator(function(){
	var steps;
	if(!isDone){
	steps=iterators.map(function(i){return i.next();});
	isDone=steps.some(function(s){return s.done;});
	}
	if(isDone){
	return iteratorDone();
	}
	return iteratorValue(
	type,
	iterations++,
	zipper.apply(null,steps.map(function(s){return s.value;})));
	
	});
	};
	return zipSequence;
	}
	
	
	
	
	function reify(iter,seq){
	return isSeq(iter)?seq:iter.constructor(seq);
	}
	
	function validateEntry(entry){
	if(entry!==Object(entry)){
	throw new TypeError('Expected [K, V] tuple: '+entry);
	}
	}
	
	function resolveSize(iter){
	assertNotInfinite(iter.size);
	return ensureSize(iter);
	}
	
	function iterableClass(iterable){
	return isKeyed(iterable)?KeyedIterable:
	isIndexed(iterable)?IndexedIterable:
	SetIterable;
	}
	
	function makeSequence(iterable){
	return Object.create(
	(
	isKeyed(iterable)?KeyedSeq:
	isIndexed(iterable)?IndexedSeq:
	SetSeq).
	prototype);
	
	}
	
	function cacheResultThrough(){
	if(this._iter.cacheResult){
	this._iter.cacheResult();
	this.size=this._iter.size;
	return this;
	}else{
	return Seq.prototype.cacheResult.call(this);
	}
	}
	
	function defaultComparator(a,b){
	return a>b?1:a<b?-1:0;
	}
	
	function forceIterator(keyPath){
	var iter=getIterator(keyPath);
	if(!iter){
	
	
	if(!isArrayLike(keyPath)){
	throw new TypeError('Expected iterable or array-like: '+keyPath);
	}
	iter=getIterator(Iterable(keyPath));
	}
	return iter;
	}
	
	createClass(Record,KeyedCollection);
	
	function Record(defaultValues,name){
	var hasInitialized;
	
	var RecordType=function Record(values){
	if(values instanceof RecordType){
	return values;
	}
	if(!(this instanceof RecordType)){
	return new RecordType(values);
	}
	if(!hasInitialized){
	hasInitialized=true;
	var keys=Object.keys(defaultValues);
	setProps(RecordTypePrototype,keys);
	RecordTypePrototype.size=keys.length;
	RecordTypePrototype._name=name;
	RecordTypePrototype._keys=keys;
	RecordTypePrototype._defaultValues=defaultValues;
	}
	this._map=Map(values);
	};
	
	var RecordTypePrototype=RecordType.prototype=Object.create(RecordPrototype);
	RecordTypePrototype.constructor=RecordType;
	
	return RecordType;
	}
	
	Record.prototype.toString=function(){
	return this.__toString(recordName(this)+' {','}');
	};
	
	
	
	Record.prototype.has=function(k){
	return this._defaultValues.hasOwnProperty(k);
	};
	
	Record.prototype.get=function(k,notSetValue){
	if(!this.has(k)){
	return notSetValue;
	}
	var defaultVal=this._defaultValues[k];
	return this._map?this._map.get(k,defaultVal):defaultVal;
	};
	
	
	
	Record.prototype.clear=function(){
	if(this.__ownerID){
	this._map&&this._map.clear();
	return this;
	}
	var RecordType=this.constructor;
	return RecordType._empty||(RecordType._empty=makeRecord(this,emptyMap()));
	};
	
	Record.prototype.set=function(k,v){
	if(!this.has(k)){
	throw new Error('Cannot set unknown key "'+k+'" on '+recordName(this));
	}
	if(this._map&&!this._map.has(k)){
	var defaultVal=this._defaultValues[k];
	if(v===defaultVal){
	return this;
	}
	}
	var newMap=this._map&&this._map.set(k,v);
	if(this.__ownerID||newMap===this._map){
	return this;
	}
	return makeRecord(this,newMap);
	};
	
	Record.prototype.remove=function(k){
	if(!this.has(k)){
	return this;
	}
	var newMap=this._map&&this._map.remove(k);
	if(this.__ownerID||newMap===this._map){
	return this;
	}
	return makeRecord(this,newMap);
	};
	
	Record.prototype.wasAltered=function(){
	return this._map.wasAltered();
	};
	
	Record.prototype.__iterator=function(type,reverse){var this$0=this;
	return KeyedIterable(this._defaultValues).map(function(_,k){return this$0.get(k);}).__iterator(type,reverse);
	};
	
	Record.prototype.__iterate=function(fn,reverse){var this$0=this;
	return KeyedIterable(this._defaultValues).map(function(_,k){return this$0.get(k);}).__iterate(fn,reverse);
	};
	
	Record.prototype.__ensureOwner=function(ownerID){
	if(ownerID===this.__ownerID){
	return this;
	}
	var newMap=this._map&&this._map.__ensureOwner(ownerID);
	if(!ownerID){
	this.__ownerID=ownerID;
	this._map=newMap;
	return this;
	}
	return makeRecord(this,newMap,ownerID);
	};
	
	
	var RecordPrototype=Record.prototype;
	RecordPrototype[DELETE]=RecordPrototype.remove;
	RecordPrototype.deleteIn=
	RecordPrototype.removeIn=MapPrototype.removeIn;
	RecordPrototype.merge=MapPrototype.merge;
	RecordPrototype.mergeWith=MapPrototype.mergeWith;
	RecordPrototype.mergeIn=MapPrototype.mergeIn;
	RecordPrototype.mergeDeep=MapPrototype.mergeDeep;
	RecordPrototype.mergeDeepWith=MapPrototype.mergeDeepWith;
	RecordPrototype.mergeDeepIn=MapPrototype.mergeDeepIn;
	RecordPrototype.setIn=MapPrototype.setIn;
	RecordPrototype.update=MapPrototype.update;
	RecordPrototype.updateIn=MapPrototype.updateIn;
	RecordPrototype.withMutations=MapPrototype.withMutations;
	RecordPrototype.asMutable=MapPrototype.asMutable;
	RecordPrototype.asImmutable=MapPrototype.asImmutable;
	
	
	function makeRecord(likeRecord,map,ownerID){
	var record=Object.create(Object.getPrototypeOf(likeRecord));
	record._map=map;
	record.__ownerID=ownerID;
	return record;
	}
	
	function recordName(record){
	return record._name||record.constructor.name||'Record';
	}
	
	function setProps(prototype,names){
	try{
	names.forEach(setProp.bind(undefined,prototype));
	}catch(error){
	
	}
	}
	
	function setProp(prototype,name){
	Object.defineProperty(prototype,name,{
	get:function get(){
	return this.get(name);
	},
	set:function set(value){
	invariant(this.__ownerID,'Cannot set on an immutable record.');
	this.set(name,value);
	}});
	
	}
	
	createClass(Set,SetCollection);
	
	
	
	function Set(value){
	return value===null||value===undefined?emptySet():
	isSet(value)&&!isOrdered(value)?value:
	emptySet().withMutations(function(set){
	var iter=SetIterable(value);
	assertNotInfinite(iter.size);
	iter.forEach(function(v){return set.add(v);});
	});
	}
	
	Set.of=function(){
	return this(arguments);
	};
	
	Set.fromKeys=function(value){
	return this(KeyedIterable(value).keySeq());
	};
	
	Set.prototype.toString=function(){
	return this.__toString('Set {','}');
	};
	
	
	
	Set.prototype.has=function(value){
	return this._map.has(value);
	};
	
	
	
	Set.prototype.add=function(value){
	return updateSet(this,this._map.set(value,true));
	};
	
	Set.prototype.remove=function(value){
	return updateSet(this,this._map.remove(value));
	};
	
	Set.prototype.clear=function(){
	return updateSet(this,this._map.clear());
	};
	
	
	
	Set.prototype.union=function(){var iters=SLICE$0.call(arguments,0);
	iters=iters.filter(function(x){return x.size!==0;});
	if(iters.length===0){
	return this;
	}
	if(this.size===0&&!this.__ownerID&&iters.length===1){
	return this.constructor(iters[0]);
	}
	return this.withMutations(function(set){
	for(var ii=0;ii<iters.length;ii++){
	SetIterable(iters[ii]).forEach(function(value){return set.add(value);});
	}
	});
	};
	
	Set.prototype.intersect=function(){var iters=SLICE$0.call(arguments,0);
	if(iters.length===0){
	return this;
	}
	iters=iters.map(function(iter){return SetIterable(iter);});
	var originalSet=this;
	return this.withMutations(function(set){
	originalSet.forEach(function(value){
	if(!iters.every(function(iter){return iter.includes(value);})){
	set.remove(value);
	}
	});
	});
	};
	
	Set.prototype.subtract=function(){var iters=SLICE$0.call(arguments,0);
	if(iters.length===0){
	return this;
	}
	iters=iters.map(function(iter){return SetIterable(iter);});
	var originalSet=this;
	return this.withMutations(function(set){
	originalSet.forEach(function(value){
	if(iters.some(function(iter){return iter.includes(value);})){
	set.remove(value);
	}
	});
	});
	};
	
	Set.prototype.merge=function(){
	return this.union.apply(this,arguments);
	};
	
	Set.prototype.mergeWith=function(merger){var iters=SLICE$0.call(arguments,1);
	return this.union.apply(this,iters);
	};
	
	Set.prototype.sort=function(comparator){
	
	return OrderedSet(sortFactory(this,comparator));
	};
	
	Set.prototype.sortBy=function(mapper,comparator){
	
	return OrderedSet(sortFactory(this,comparator,mapper));
	};
	
	Set.prototype.wasAltered=function(){
	return this._map.wasAltered();
	};
	
	Set.prototype.__iterate=function(fn,reverse){var this$0=this;
	return this._map.__iterate(function(_,k){return fn(k,k,this$0);},reverse);
	};
	
	Set.prototype.__iterator=function(type,reverse){
	return this._map.map(function(_,k){return k;}).__iterator(type,reverse);
	};
	
	Set.prototype.__ensureOwner=function(ownerID){
	if(ownerID===this.__ownerID){
	return this;
	}
	var newMap=this._map.__ensureOwner(ownerID);
	if(!ownerID){
	this.__ownerID=ownerID;
	this._map=newMap;
	return this;
	}
	return this.__make(newMap,ownerID);
	};
	
	
	function isSet(maybeSet){
	return!!(maybeSet&&maybeSet[IS_SET_SENTINEL]);
	}
	
	Set.isSet=isSet;
	
	var IS_SET_SENTINEL='@@__IMMUTABLE_SET__@@';
	
	var SetPrototype=Set.prototype;
	SetPrototype[IS_SET_SENTINEL]=true;
	SetPrototype[DELETE]=SetPrototype.remove;
	SetPrototype.mergeDeep=SetPrototype.merge;
	SetPrototype.mergeDeepWith=SetPrototype.mergeWith;
	SetPrototype.withMutations=MapPrototype.withMutations;
	SetPrototype.asMutable=MapPrototype.asMutable;
	SetPrototype.asImmutable=MapPrototype.asImmutable;
	
	SetPrototype.__empty=emptySet;
	SetPrototype.__make=makeSet;
	
	function updateSet(set,newMap){
	if(set.__ownerID){
	set.size=newMap.size;
	set._map=newMap;
	return set;
	}
	return newMap===set._map?set:
	newMap.size===0?set.__empty():
	set.__make(newMap);
	}
	
	function makeSet(map,ownerID){
	var set=Object.create(SetPrototype);
	set.size=map?map.size:0;
	set._map=map;
	set.__ownerID=ownerID;
	return set;
	}
	
	var EMPTY_SET;
	function emptySet(){
	return EMPTY_SET||(EMPTY_SET=makeSet(emptyMap()));
	}
	
	createClass(OrderedSet,Set);
	
	
	
	function OrderedSet(value){
	return value===null||value===undefined?emptyOrderedSet():
	isOrderedSet(value)?value:
	emptyOrderedSet().withMutations(function(set){
	var iter=SetIterable(value);
	assertNotInfinite(iter.size);
	iter.forEach(function(v){return set.add(v);});
	});
	}
	
	OrderedSet.of=function(){
	return this(arguments);
	};
	
	OrderedSet.fromKeys=function(value){
	return this(KeyedIterable(value).keySeq());
	};
	
	OrderedSet.prototype.toString=function(){
	return this.__toString('OrderedSet {','}');
	};
	
	
	function isOrderedSet(maybeOrderedSet){
	return isSet(maybeOrderedSet)&&isOrdered(maybeOrderedSet);
	}
	
	OrderedSet.isOrderedSet=isOrderedSet;
	
	var OrderedSetPrototype=OrderedSet.prototype;
	OrderedSetPrototype[IS_ORDERED_SENTINEL]=true;
	
	OrderedSetPrototype.__empty=emptyOrderedSet;
	OrderedSetPrototype.__make=makeOrderedSet;
	
	function makeOrderedSet(map,ownerID){
	var set=Object.create(OrderedSetPrototype);
	set.size=map?map.size:0;
	set._map=map;
	set.__ownerID=ownerID;
	return set;
	}
	
	var EMPTY_ORDERED_SET;
	function emptyOrderedSet(){
	return EMPTY_ORDERED_SET||(EMPTY_ORDERED_SET=makeOrderedSet(emptyOrderedMap()));
	}
	
	createClass(Stack,IndexedCollection);
	
	
	
	function Stack(value){
	return value===null||value===undefined?emptyStack():
	isStack(value)?value:
	emptyStack().unshiftAll(value);
	}
	
	Stack.of=function(){
	return this(arguments);
	};
	
	Stack.prototype.toString=function(){
	return this.__toString('Stack [',']');
	};
	
	
	
	Stack.prototype.get=function(index,notSetValue){
	var head=this._head;
	index=wrapIndex(this,index);
	while(head&&index--){
	head=head.next;
	}
	return head?head.value:notSetValue;
	};
	
	Stack.prototype.peek=function(){
	return this._head&&this._head.value;
	};
	
	
	
	Stack.prototype.push=function(){
	if(arguments.length===0){
	return this;
	}
	var newSize=this.size+arguments.length;
	var head=this._head;
	for(var ii=arguments.length-1;ii>=0;ii--){
	head={
	value:arguments[ii],
	next:head};
	
	}
	if(this.__ownerID){
	this.size=newSize;
	this._head=head;
	this.__hash=undefined;
	this.__altered=true;
	return this;
	}
	return makeStack(newSize,head);
	};
	
	Stack.prototype.pushAll=function(iter){
	iter=IndexedIterable(iter);
	if(iter.size===0){
	return this;
	}
	assertNotInfinite(iter.size);
	var newSize=this.size;
	var head=this._head;
	iter.reverse().forEach(function(value){
	newSize++;
	head={
	value:value,
	next:head};
	
	});
	if(this.__ownerID){
	this.size=newSize;
	this._head=head;
	this.__hash=undefined;
	this.__altered=true;
	return this;
	}
	return makeStack(newSize,head);
	};
	
	Stack.prototype.pop=function(){
	return this.slice(1);
	};
	
	Stack.prototype.unshift=function(){
	return this.push.apply(this,arguments);
	};
	
	Stack.prototype.unshiftAll=function(iter){
	return this.pushAll(iter);
	};
	
	Stack.prototype.shift=function(){
	return this.pop.apply(this,arguments);
	};
	
	Stack.prototype.clear=function(){
	if(this.size===0){
	return this;
	}
	if(this.__ownerID){
	this.size=0;
	this._head=undefined;
	this.__hash=undefined;
	this.__altered=true;
	return this;
	}
	return emptyStack();
	};
	
	Stack.prototype.slice=function(begin,end){
	if(wholeSlice(begin,end,this.size)){
	return this;
	}
	var resolvedBegin=resolveBegin(begin,this.size);
	var resolvedEnd=resolveEnd(end,this.size);
	if(resolvedEnd!==this.size){
	
	return IndexedCollection.prototype.slice.call(this,begin,end);
	}
	var newSize=this.size-resolvedBegin;
	var head=this._head;
	while(resolvedBegin--){
	head=head.next;
	}
	if(this.__ownerID){
	this.size=newSize;
	this._head=head;
	this.__hash=undefined;
	this.__altered=true;
	return this;
	}
	return makeStack(newSize,head);
	};
	
	
	
	Stack.prototype.__ensureOwner=function(ownerID){
	if(ownerID===this.__ownerID){
	return this;
	}
	if(!ownerID){
	this.__ownerID=ownerID;
	this.__altered=false;
	return this;
	}
	return makeStack(this.size,this._head,ownerID,this.__hash);
	};
	
	
	
	Stack.prototype.__iterate=function(fn,reverse){
	if(reverse){
	return this.reverse().__iterate(fn);
	}
	var iterations=0;
	var node=this._head;
	while(node){
	if(fn(node.value,iterations++,this)===false){
	break;
	}
	node=node.next;
	}
	return iterations;
	};
	
	Stack.prototype.__iterator=function(type,reverse){
	if(reverse){
	return this.reverse().__iterator(type);
	}
	var iterations=0;
	var node=this._head;
	return new Iterator(function(){
	if(node){
	var value=node.value;
	node=node.next;
	return iteratorValue(type,iterations++,value);
	}
	return iteratorDone();
	});
	};
	
	
	function isStack(maybeStack){
	return!!(maybeStack&&maybeStack[IS_STACK_SENTINEL]);
	}
	
	Stack.isStack=isStack;
	
	var IS_STACK_SENTINEL='@@__IMMUTABLE_STACK__@@';
	
	var StackPrototype=Stack.prototype;
	StackPrototype[IS_STACK_SENTINEL]=true;
	StackPrototype.withMutations=MapPrototype.withMutations;
	StackPrototype.asMutable=MapPrototype.asMutable;
	StackPrototype.asImmutable=MapPrototype.asImmutable;
	StackPrototype.wasAltered=MapPrototype.wasAltered;
	
	
	function makeStack(size,head,ownerID,hash){
	var map=Object.create(StackPrototype);
	map.size=size;
	map._head=head;
	map.__ownerID=ownerID;
	map.__hash=hash;
	map.__altered=false;
	return map;
	}
	
	var EMPTY_STACK;
	function emptyStack(){
	return EMPTY_STACK||(EMPTY_STACK=makeStack(0));
	}
	
	
	
	
	function mixin(ctor,methods){
	var keyCopier=function keyCopier(key){ctor.prototype[key]=methods[key];};
	Object.keys(methods).forEach(keyCopier);
	Object.getOwnPropertySymbols&&
	Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	return ctor;
	}
	
	Iterable.Iterator=Iterator;
	
	mixin(Iterable,{
	
	
	
	toArray:function toArray(){
	assertNotInfinite(this.size);
	var array=new Array(this.size||0);
	this.valueSeq().__iterate(function(v,i){array[i]=v;});
	return array;
	},
	
	toIndexedSeq:function toIndexedSeq(){
	return new ToIndexedSequence(this);
	},
	
	toJS:function toJS(){
	return this.toSeq().map(
	function(value){return value&&typeof value.toJS==='function'?value.toJS():value;}).
	__toJS();
	},
	
	toJSON:function toJSON(){
	return this.toSeq().map(
	function(value){return value&&typeof value.toJSON==='function'?value.toJSON():value;}).
	__toJS();
	},
	
	toKeyedSeq:function toKeyedSeq(){
	return new ToKeyedSequence(this,true);
	},
	
	toMap:function toMap(){
	
	return Map(this.toKeyedSeq());
	},
	
	toObject:function toObject(){
	assertNotInfinite(this.size);
	var object={};
	this.__iterate(function(v,k){object[k]=v;});
	return object;
	},
	
	toOrderedMap:function toOrderedMap(){
	
	return OrderedMap(this.toKeyedSeq());
	},
	
	toOrderedSet:function toOrderedSet(){
	
	return OrderedSet(isKeyed(this)?this.valueSeq():this);
	},
	
	toSet:function toSet(){
	
	return Set(isKeyed(this)?this.valueSeq():this);
	},
	
	toSetSeq:function toSetSeq(){
	return new ToSetSequence(this);
	},
	
	toSeq:function toSeq(){
	return isIndexed(this)?this.toIndexedSeq():
	isKeyed(this)?this.toKeyedSeq():
	this.toSetSeq();
	},
	
	toStack:function toStack(){
	
	return Stack(isKeyed(this)?this.valueSeq():this);
	},
	
	toList:function toList(){
	
	return List(isKeyed(this)?this.valueSeq():this);
	},
	
	
	
	
	toString:function toString(){
	return'[Iterable]';
	},
	
	__toString:function __toString(head,tail){
	if(this.size===0){
	return head+tail;
	}
	return head+' '+this.toSeq().map(this.__toStringMapper).join(', ')+' '+tail;
	},
	
	
	
	
	concat:function concat(){var values=SLICE$0.call(arguments,0);
	return reify(this,concatFactory(this,values));
	},
	
	includes:function includes(searchValue){
	return this.some(function(value){return is(value,searchValue);});
	},
	
	entries:function entries(){
	return this.__iterator(ITERATE_ENTRIES);
	},
	
	every:function every(predicate,context){
	assertNotInfinite(this.size);
	var returnValue=true;
	this.__iterate(function(v,k,c){
	if(!predicate.call(context,v,k,c)){
	returnValue=false;
	return false;
	}
	});
	return returnValue;
	},
	
	filter:function filter(predicate,context){
	return reify(this,filterFactory(this,predicate,context,true));
	},
	
	find:function find(predicate,context,notSetValue){
	var entry=this.findEntry(predicate,context);
	return entry?entry[1]:notSetValue;
	},
	
	forEach:function forEach(sideEffect,context){
	assertNotInfinite(this.size);
	return this.__iterate(context?sideEffect.bind(context):sideEffect);
	},
	
	join:function join(separator){
	assertNotInfinite(this.size);
	separator=separator!==undefined?''+separator:',';
	var joined='';
	var isFirst=true;
	this.__iterate(function(v){
	isFirst?isFirst=false:joined+=separator;
	joined+=v!==null&&v!==undefined?v.toString():'';
	});
	return joined;
	},
	
	keys:function keys(){
	return this.__iterator(ITERATE_KEYS);
	},
	
	map:function map(mapper,context){
	return reify(this,mapFactory(this,mapper,context));
	},
	
	reduce:function reduce(reducer,initialReduction,context){
	assertNotInfinite(this.size);
	var reduction;
	var useFirst;
	if(arguments.length<2){
	useFirst=true;
	}else{
	reduction=initialReduction;
	}
	this.__iterate(function(v,k,c){
	if(useFirst){
	useFirst=false;
	reduction=v;
	}else{
	reduction=reducer.call(context,reduction,v,k,c);
	}
	});
	return reduction;
	},
	
	reduceRight:function reduceRight(reducer,initialReduction,context){
	var reversed=this.toKeyedSeq().reverse();
	return reversed.reduce.apply(reversed,arguments);
	},
	
	reverse:function reverse(){
	return reify(this,reverseFactory(this,true));
	},
	
	slice:function slice(begin,end){
	return reify(this,sliceFactory(this,begin,end,true));
	},
	
	some:function some(predicate,context){
	return!this.every(not(predicate),context);
	},
	
	sort:function sort(comparator){
	return reify(this,sortFactory(this,comparator));
	},
	
	values:function values(){
	return this.__iterator(ITERATE_VALUES);
	},
	
	
	
	
	butLast:function butLast(){
	return this.slice(0,-1);
	},
	
	isEmpty:function isEmpty(){
	return this.size!==undefined?this.size===0:!this.some(function(){return true;});
	},
	
	count:function count(predicate,context){
	return ensureSize(
	predicate?this.toSeq().filter(predicate,context):this);
	
	},
	
	countBy:function countBy(grouper,context){
	return countByFactory(this,grouper,context);
	},
	
	equals:function equals(other){
	return deepEqual(this,other);
	},
	
	entrySeq:function entrySeq(){
	var iterable=this;
	if(iterable._cache){
	
	return new ArraySeq(iterable._cache);
	}
	var entriesSequence=iterable.toSeq().map(entryMapper).toIndexedSeq();
	entriesSequence.fromEntrySeq=function(){return iterable.toSeq();};
	return entriesSequence;
	},
	
	filterNot:function filterNot(predicate,context){
	return this.filter(not(predicate),context);
	},
	
	findEntry:function findEntry(predicate,context,notSetValue){
	var found=notSetValue;
	this.__iterate(function(v,k,c){
	if(predicate.call(context,v,k,c)){
	found=[k,v];
	return false;
	}
	});
	return found;
	},
	
	findKey:function findKey(predicate,context){
	var entry=this.findEntry(predicate,context);
	return entry&&entry[0];
	},
	
	findLast:function findLast(predicate,context,notSetValue){
	return this.toKeyedSeq().reverse().find(predicate,context,notSetValue);
	},
	
	findLastEntry:function findLastEntry(predicate,context,notSetValue){
	return this.toKeyedSeq().reverse().findEntry(predicate,context,notSetValue);
	},
	
	findLastKey:function findLastKey(predicate,context){
	return this.toKeyedSeq().reverse().findKey(predicate,context);
	},
	
	first:function first(){
	return this.find(returnTrue);
	},
	
	flatMap:function flatMap(mapper,context){
	return reify(this,flatMapFactory(this,mapper,context));
	},
	
	flatten:function flatten(depth){
	return reify(this,flattenFactory(this,depth,true));
	},
	
	fromEntrySeq:function fromEntrySeq(){
	return new FromEntriesSequence(this);
	},
	
	get:function get(searchKey,notSetValue){
	return this.find(function(_,key){return is(key,searchKey);},undefined,notSetValue);
	},
	
	getIn:function getIn(searchKeyPath,notSetValue){
	var nested=this;
	
	
	var iter=forceIterator(searchKeyPath);
	var step;
	while(!(step=iter.next()).done){
	var key=step.value;
	nested=nested&&nested.get?nested.get(key,NOT_SET):NOT_SET;
	if(nested===NOT_SET){
	return notSetValue;
	}
	}
	return nested;
	},
	
	groupBy:function groupBy(grouper,context){
	return groupByFactory(this,grouper,context);
	},
	
	has:function has(searchKey){
	return this.get(searchKey,NOT_SET)!==NOT_SET;
	},
	
	hasIn:function hasIn(searchKeyPath){
	return this.getIn(searchKeyPath,NOT_SET)!==NOT_SET;
	},
	
	isSubset:function isSubset(iter){
	iter=typeof iter.includes==='function'?iter:Iterable(iter);
	return this.every(function(value){return iter.includes(value);});
	},
	
	isSuperset:function isSuperset(iter){
	iter=typeof iter.isSubset==='function'?iter:Iterable(iter);
	return iter.isSubset(this);
	},
	
	keyOf:function keyOf(searchValue){
	return this.findKey(function(value){return is(value,searchValue);});
	},
	
	keySeq:function keySeq(){
	return this.toSeq().map(keyMapper).toIndexedSeq();
	},
	
	last:function last(){
	return this.toSeq().reverse().first();
	},
	
	lastKeyOf:function lastKeyOf(searchValue){
	return this.toKeyedSeq().reverse().keyOf(searchValue);
	},
	
	max:function max(comparator){
	return maxFactory(this,comparator);
	},
	
	maxBy:function maxBy(mapper,comparator){
	return maxFactory(this,comparator,mapper);
	},
	
	min:function min(comparator){
	return maxFactory(this,comparator?neg(comparator):defaultNegComparator);
	},
	
	minBy:function minBy(mapper,comparator){
	return maxFactory(this,comparator?neg(comparator):defaultNegComparator,mapper);
	},
	
	rest:function rest(){
	return this.slice(1);
	},
	
	skip:function skip(amount){
	return this.slice(Math.max(0,amount));
	},
	
	skipLast:function skipLast(amount){
	return reify(this,this.toSeq().reverse().skip(amount).reverse());
	},
	
	skipWhile:function skipWhile(predicate,context){
	return reify(this,skipWhileFactory(this,predicate,context,true));
	},
	
	skipUntil:function skipUntil(predicate,context){
	return this.skipWhile(not(predicate),context);
	},
	
	sortBy:function sortBy(mapper,comparator){
	return reify(this,sortFactory(this,comparator,mapper));
	},
	
	take:function take(amount){
	return this.slice(0,Math.max(0,amount));
	},
	
	takeLast:function takeLast(amount){
	return reify(this,this.toSeq().reverse().take(amount).reverse());
	},
	
	takeWhile:function takeWhile(predicate,context){
	return reify(this,takeWhileFactory(this,predicate,context));
	},
	
	takeUntil:function takeUntil(predicate,context){
	return this.takeWhile(not(predicate),context);
	},
	
	valueSeq:function valueSeq(){
	return this.toIndexedSeq();
	},
	
	
	
	
	hashCode:function hashCode(){
	return this.__hash||(this.__hash=hashIterable(this));
	}});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var IterablePrototype=Iterable.prototype;
	IterablePrototype[IS_ITERABLE_SENTINEL]=true;
	IterablePrototype[ITERATOR_SYMBOL]=IterablePrototype.values;
	IterablePrototype.__toJS=IterablePrototype.toArray;
	IterablePrototype.__toStringMapper=quoteString;
	IterablePrototype.inspect=
	IterablePrototype.toSource=function(){return this.toString();};
	IterablePrototype.chain=IterablePrototype.flatMap;
	IterablePrototype.contains=IterablePrototype.includes;
	
	mixin(KeyedIterable,{
	
	
	
	flip:function flip(){
	return reify(this,flipFactory(this));
	},
	
	mapEntries:function mapEntries(mapper,context){var this$0=this;
	var iterations=0;
	return reify(this,
	this.toSeq().map(
	function(v,k){return mapper.call(context,[k,v],iterations++,this$0);}).
	fromEntrySeq());
	
	},
	
	mapKeys:function mapKeys(mapper,context){var this$0=this;
	return reify(this,
	this.toSeq().flip().map(
	function(k,v){return mapper.call(context,k,v,this$0);}).
	flip());
	
	}});
	
	
	
	var KeyedIterablePrototype=KeyedIterable.prototype;
	KeyedIterablePrototype[IS_KEYED_SENTINEL]=true;
	KeyedIterablePrototype[ITERATOR_SYMBOL]=IterablePrototype.entries;
	KeyedIterablePrototype.__toJS=IterablePrototype.toObject;
	KeyedIterablePrototype.__toStringMapper=function(v,k){return JSON.stringify(k)+': '+quoteString(v);};
	
	
	
	mixin(IndexedIterable,{
	
	
	
	toKeyedSeq:function toKeyedSeq(){
	return new ToKeyedSequence(this,false);
	},
	
	
	
	
	filter:function filter(predicate,context){
	return reify(this,filterFactory(this,predicate,context,false));
	},
	
	findIndex:function findIndex(predicate,context){
	var entry=this.findEntry(predicate,context);
	return entry?entry[0]:-1;
	},
	
	indexOf:function indexOf(searchValue){
	var key=this.keyOf(searchValue);
	return key===undefined?-1:key;
	},
	
	lastIndexOf:function lastIndexOf(searchValue){
	var key=this.lastKeyOf(searchValue);
	return key===undefined?-1:key;
	},
	
	reverse:function reverse(){
	return reify(this,reverseFactory(this,false));
	},
	
	slice:function slice(begin,end){
	return reify(this,sliceFactory(this,begin,end,false));
	},
	
	splice:function splice(index,removeNum){
	var numArgs=arguments.length;
	removeNum=Math.max(removeNum|0,0);
	if(numArgs===0||numArgs===2&&!removeNum){
	return this;
	}
	
	
	
	index=resolveBegin(index,index<0?this.count():this.size);
	var spliced=this.slice(0,index);
	return reify(
	this,
	numArgs===1?
	spliced:
	spliced.concat(arrCopy(arguments,2),this.slice(index+removeNum)));
	
	},
	
	
	
	
	findLastIndex:function findLastIndex(predicate,context){
	var entry=this.findLastEntry(predicate,context);
	return entry?entry[0]:-1;
	},
	
	first:function first(){
	return this.get(0);
	},
	
	flatten:function flatten(depth){
	return reify(this,flattenFactory(this,depth,false));
	},
	
	get:function get(index,notSetValue){
	index=wrapIndex(this,index);
	return index<0||this.size===Infinity||
	this.size!==undefined&&index>this.size?
	notSetValue:
	this.find(function(_,key){return key===index;},undefined,notSetValue);
	},
	
	has:function has(index){
	index=wrapIndex(this,index);
	return index>=0&&(this.size!==undefined?
	this.size===Infinity||index<this.size:
	this.indexOf(index)!==-1);
	
	},
	
	interpose:function interpose(separator){
	return reify(this,interposeFactory(this,separator));
	},
	
	interleave:function interleave(){
	var iterables=[this].concat(arrCopy(arguments));
	var zipped=zipWithFactory(this.toSeq(),IndexedSeq.of,iterables);
	var interleaved=zipped.flatten(true);
	if(zipped.size){
	interleaved.size=zipped.size*iterables.length;
	}
	return reify(this,interleaved);
	},
	
	keySeq:function keySeq(){
	return Range(0,this.size);
	},
	
	last:function last(){
	return this.get(-1);
	},
	
	skipWhile:function skipWhile(predicate,context){
	return reify(this,skipWhileFactory(this,predicate,context,false));
	},
	
	zip:function zip(){
	var iterables=[this].concat(arrCopy(arguments));
	return reify(this,zipWithFactory(this,defaultZipper,iterables));
	},
	
	zipWith:function zipWith(zipper){
	var iterables=arrCopy(arguments);
	iterables[0]=this;
	return reify(this,zipWithFactory(this,zipper,iterables));
	}});
	
	
	
	IndexedIterable.prototype[IS_INDEXED_SENTINEL]=true;
	IndexedIterable.prototype[IS_ORDERED_SENTINEL]=true;
	
	
	
	mixin(SetIterable,{
	
	
	
	get:function get(value,notSetValue){
	return this.has(value)?value:notSetValue;
	},
	
	includes:function includes(value){
	return this.has(value);
	},
	
	
	
	
	keySeq:function keySeq(){
	return this.valueSeq();
	}});
	
	
	
	SetIterable.prototype.has=IterablePrototype.includes;
	SetIterable.prototype.contains=SetIterable.prototype.includes;
	
	
	
	
	mixin(KeyedSeq,KeyedIterable.prototype);
	mixin(IndexedSeq,IndexedIterable.prototype);
	mixin(SetSeq,SetIterable.prototype);
	
	mixin(KeyedCollection,KeyedIterable.prototype);
	mixin(IndexedCollection,IndexedIterable.prototype);
	mixin(SetCollection,SetIterable.prototype);
	
	
	
	
	function keyMapper(v,k){
	return k;
	}
	
	function entryMapper(v,k){
	return[k,v];
	}
	
	function not(predicate){
	return function(){
	return!predicate.apply(this,arguments);
	};
	}
	
	function neg(predicate){
	return function(){
	return-predicate.apply(this,arguments);
	};
	}
	
	function quoteString(value){
	return typeof value==='string'?JSON.stringify(value):String(value);
	}
	
	function defaultZipper(){
	return arrCopy(arguments);
	}
	
	function defaultNegComparator(a,b){
	return a<b?1:a>b?-1:0;
	}
	
	function hashIterable(iterable){
	if(iterable.size===Infinity){
	return 0;
	}
	var ordered=isOrdered(iterable);
	var keyed=isKeyed(iterable);
	var h=ordered?1:0;
	var size=iterable.__iterate(
	keyed?
	ordered?
	function(v,k){h=31*h+hashMerge(hash(v),hash(k))|0;}:
	function(v,k){h=h+hashMerge(hash(v),hash(k))|0;}:
	ordered?
	function(v){h=31*h+hash(v)|0;}:
	function(v){h=h+hash(v)|0;});
	
	return murmurHashOfSize(size,h);
	}
	
	function murmurHashOfSize(size,h){
	h=imul(h,0xCC9E2D51);
	h=imul(h<<15|h>>>-15,0x1B873593);
	h=imul(h<<13|h>>>-13,5);
	h=(h+0xE6546B64|0)^size;
	h=imul(h^h>>>16,0x85EBCA6B);
	h=imul(h^h>>>13,0xC2B2AE35);
	h=smi(h^h>>>16);
	return h;
	}
	
	function hashMerge(a,b){
	return a^b+0x9E3779B9+(a<<6)+(a>>2)|0;
	}
	
	var Immutable={
	
	Iterable:Iterable,
	
	Seq:Seq,
	Collection:Collection,
	Map:Map,
	OrderedMap:OrderedMap,
	List:List,
	Stack:Stack,
	Set:Set,
	OrderedSet:OrderedSet,
	
	Record:Record,
	Range:Range,
	Repeat:Repeat,
	
	is:is,
	fromJS:fromJS};
	
	
	
	return Immutable;
	
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _View=__webpack_require__(146);var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_View2.default;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var View2=function View2(){return(
	_react2.default.createElement('h1',null,'Welcome to View2'));};exports.default=
	
	
	View2;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _reactNativeReduxRouter=__webpack_require__(36);
	var _reactRedux=__webpack_require__(41);
	var _reactNative=__webpack_require__(35);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var AppContainer=function AppContainer(_ref){var routes=_ref.routes;var store=_ref.store;return(
	_react2.default.createElement(_reactRedux.Provider,{store:store},
	_react2.default.createElement(_reactNative.View,{style:{flex:1}},
	_react2.default.createElement(_reactNativeReduxRouter.Router,null,
	routes))));};
	
	
	
	
	
	AppContainer.propTypes={
	routes:_react.PropTypes.object.isRequired,
	store:_react.PropTypes.object.isRequired};exports.default=
	
	
	AppContainer;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reduxThunk=__webpack_require__(149);var _reduxThunk2=_interopRequireDefault(_reduxThunk);
	var _redux=__webpack_require__(48);
	var _reduxLogger=__webpack_require__(150);var _reduxLogger2=_interopRequireDefault(_reduxLogger);
	var _reducers=__webpack_require__(151);var _reducers2=_interopRequireDefault(_reducers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	function(history,initialState,routerReducer){
	var middleware=[_reduxThunk2.default];
	
	
	
	if(false){
	middleware.push((0,_reduxLogger2.default)());
	}
	
	var store=(0,_redux.createStore)(
	(0,_redux.combineReducers)(_extends({},_reducers2.default,{routing:routerReducer})),
	initialState,
	_redux.applyMiddleware.apply(undefined,middleware));
	
	
	return store;
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule=true;
	function createThunkMiddleware(extraArgument){
	return function(_ref){
	var dispatch=_ref.dispatch;
	var getState=_ref.getState;
	return function(next){
	return function(action){
	if(typeof action==='function'){
	return action(dispatch,getState,extraArgument);
	}
	
	return next(action);
	};
	};
	};
	}
	
	var thunk=createThunkMiddleware();
	thunk.withExtraArgument=createThunkMiddleware;
	
	exports['default']=thunk;

/***/ },
/* 150 */
/***/ function(module, exports) {

	"use strict";var _typeof2=typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};
	
	function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}
	
	function _typeof(obj){return obj&&typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);}
	
	var repeat=function repeat(str,times){
	return new Array(times+1).join(str);
	};
	var pad=function pad(num,maxLength){
	return repeat("0",maxLength-num.toString().length)+num;
	};
	var formatTime=function formatTime(time){
	return"@ "+pad(time.getHours(),2)+":"+pad(time.getMinutes(),2)+":"+pad(time.getSeconds(),2)+"."+pad(time.getMilliseconds(),3);
	};
	
	
	var timer=typeof performance!=="undefined"&&typeof performance.now==="function"?performance:Date;
	
	
	
	
	
	
	
	
	
	
	function getLogLevel(level,action,payload,type){
	switch(typeof level==="undefined"?"undefined":_typeof(level)){
	case"object":
	return typeof level[type]==="function"?level[type].apply(level,_toConsumableArray(payload)):level[type];
	case"function":
	return level(action);
	default:
	return level;}
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function createLogger(){
	var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	var _options$level=options.level;
	var level=_options$level===undefined?"log":_options$level;
	var _options$logger=options.logger;
	var logger=_options$logger===undefined?console:_options$logger;
	var _options$logErrors=options.logErrors;
	var logErrors=_options$logErrors===undefined?true:_options$logErrors;
	var collapsed=options.collapsed;
	var predicate=options.predicate;
	var _options$duration=options.duration;
	var duration=_options$duration===undefined?false:_options$duration;
	var _options$timestamp=options.timestamp;
	var timestamp=_options$timestamp===undefined?true:_options$timestamp;
	var transformer=options.transformer;
	var _options$stateTransfo=options.stateTransformer;
	var
	stateTransformer=_options$stateTransfo===undefined?function(state){
	return state;
	}:_options$stateTransfo;
	var _options$actionTransf=options.actionTransformer;
	var actionTransformer=_options$actionTransf===undefined?function(actn){
	return actn;
	}:_options$actionTransf;
	var _options$errorTransfo=options.errorTransformer;
	var errorTransformer=_options$errorTransfo===undefined?function(error){
	return error;
	}:_options$errorTransfo;
	var _options$colors=options.colors;
	var colors=_options$colors===undefined?{
	title:function title(){
	return"#000000";
	},
	prevState:function prevState(){
	return"#9E9E9E";
	},
	action:function action(){
	return"#03A9F4";
	},
	nextState:function nextState(){
	return"#4CAF50";
	},
	error:function error(){
	return"#F20404";
	}}:
	_options$colors;
	
	
	
	if(typeof logger==="undefined"){
	return function(){
	return function(next){
	return function(action){
	return next(action);
	};
	};
	};
	}
	
	if(transformer){
	console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	}
	
	var logBuffer=[];
	function printBuffer(){
	logBuffer.forEach(function(logEntry,key){
	var started=logEntry.started;
	var startedTime=logEntry.startedTime;
	var action=logEntry.action;
	var prevState=logEntry.prevState;
	var error=logEntry.error;
	var took=logEntry.took;
	var nextState=logEntry.nextState;
	
	var nextEntry=logBuffer[key+1];
	if(nextEntry){
	nextState=nextEntry.prevState;
	took=nextEntry.started-started;
	}
	
	var formattedAction=actionTransformer(action);
	var isCollapsed=typeof collapsed==="function"?collapsed(function(){
	return nextState;
	},action):collapsed;
	
	var formattedTime=formatTime(startedTime);
	var titleCSS=colors.title?"color: "+colors.title(formattedAction)+";":null;
	var title="action "+(timestamp?formattedTime:"")+" "+formattedAction.type+" "+(duration?"(in "+took.toFixed(2)+" ms)":"");
	
	
	try{
	if(isCollapsed){
	if(colors.title)logger.groupCollapsed("%c "+title,titleCSS);else logger.groupCollapsed(title);
	}else{
	if(colors.title)logger.group("%c "+title,titleCSS);else logger.group(title);
	}
	}catch(e){
	logger.log(title);
	}
	
	var prevStateLevel=getLogLevel(level,formattedAction,[prevState],"prevState");
	var actionLevel=getLogLevel(level,formattedAction,[formattedAction],"action");
	var errorLevel=getLogLevel(level,formattedAction,[error,prevState],"error");
	var nextStateLevel=getLogLevel(level,formattedAction,[nextState],"nextState");
	
	if(prevStateLevel){
	if(colors.prevState)logger[prevStateLevel]("%c prev state","color: "+colors.prevState(prevState)+"; font-weight: bold",prevState);else logger[prevStateLevel]("prev state",prevState);
	}
	
	if(actionLevel){
	if(colors.action)logger[actionLevel]("%c action","color: "+colors.action(formattedAction)+"; font-weight: bold",formattedAction);else logger[actionLevel]("action",formattedAction);
	}
	
	if(error&&errorLevel){
	if(colors.error)logger[errorLevel]("%c error","color: "+colors.error(error,prevState)+"; font-weight: bold",error);else logger[errorLevel]("error",error);
	}
	
	if(nextStateLevel){
	if(colors.nextState)logger[nextStateLevel]("%c next state","color: "+colors.nextState(nextState)+"; font-weight: bold",nextState);else logger[nextStateLevel]("next state",nextState);
	}
	
	try{
	logger.groupEnd();
	}catch(e){
	logger.log("—— log end ——");
	}
	});
	logBuffer.length=0;
	}
	
	return function(_ref){
	var getState=_ref.getState;
	return function(next){
	return function(action){
	
	if(typeof predicate==="function"&&!predicate(getState,action)){
	return next(action);
	}
	
	var logEntry={};
	logBuffer.push(logEntry);
	
	logEntry.started=timer.now();
	logEntry.startedTime=new Date();
	logEntry.prevState=stateTransformer(getState());
	logEntry.action=action;
	
	var returnedValue=undefined;
	if(logErrors){
	try{
	returnedValue=next(action);
	}catch(e){
	logEntry.error=errorTransformer(e);
	}
	}else{
	returnedValue=next(action);
	}
	
	logEntry.took=timer.now()-logEntry.started;
	logEntry.nextState=stateTransformer(getState());
	
	printBuffer();
	
	if(logEntry.error)throw logEntry.error;
	return returnedValue;
	};
	};
	};
	}
	
	module.exports=createLogger;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _input=__webpack_require__(152);var _input2=_interopRequireDefault(_input);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_extends({},_input2.default);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _actionTypes=__webpack_require__(139);var _actionTypes2=_interopRequireDefault(_actionTypes);
	var _immutable=__webpack_require__(144);var _immutable2=_interopRequireDefault(_immutable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var input={
	inputContents:function inputContents(){var state=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var action=arguments[1];
	switch(action.type){
	case _actionTypes2.default.INPUT_CONTENTS_SET:
	return action.contents;
	default:
	return state;}
	
	},
	inputHistory:function inputHistory(){var state=arguments.length<=0||arguments[0]===undefined?_immutable2.default.List():arguments[0];var action=arguments[1];
	switch(action.type){
	case _actionTypes2.default.INPUT_CONTENTS_SET:
	return state.push(action.contents);
	default:
	return state;}
	
	}};exports.default=
	
	
	input;

/***/ }
/******/ ])));
//# sourceMappingURL=index.ios.js.map