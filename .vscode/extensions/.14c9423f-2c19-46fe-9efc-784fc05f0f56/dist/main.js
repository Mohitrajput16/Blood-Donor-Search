/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 31908:
/***/ (function(__unused_webpack_module, exports) {

/*!
 * 1DS JS SDK Core, 4.2.2
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    var strShimFunction = "function";
    var strShimObject = "object";
    var strShimUndefined = "undefined";
    var strShimPrototype = "prototype";
    var ObjClass$1 = Object;
    var ObjProto$1 = ObjClass$1[strShimPrototype];

    /*! https://github.com/nevware21/ts-utils v0.11.2 */
    /*#__NO_SIDE_EFFECTS__*/
    function _pureAssign(func1, func2) {
        return func1 || func2;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _pureRef(value, name) {
        return value[name];
    }
    var UNDEF_VALUE = undefined;
    var NULL_VALUE = null;
    var EMPTY = "";
    var FUNCTION = "function";
    var OBJECT = "object";
    var PROTOTYPE = "prototype";
    var __PROTO__ = "__proto__";
    var UNDEFINED = "undefined";
    var CONSTRUCTOR = "constructor";
    var SYMBOL = "Symbol";
    var POLYFILL_TAG = "_polyfill";
    var LENGTH = "length";
    var NAME = "name";
    var CALL = "call";
    var TO_STRING = "toString";
    var ObjClass = ( /*#__PURE__*/_pureAssign(Object));
    var ObjProto = ( /*#__PURE__*/_pureRef(ObjClass, PROTOTYPE));
    var StrCls = ( /*#__PURE__*/_pureAssign(String));
    var StrProto = ( /*#__PURE__*/_pureRef(StrCls, PROTOTYPE));
    var MathCls = ( /*#__PURE__*/_pureAssign(Math));
    var ArrCls = ( /*#__PURE__*/_pureAssign(Array));
    var ArrProto = ( /*#__PURE__*/_pureRef(ArrCls, PROTOTYPE));
    var ArrSlice = ( /*#__PURE__*/_pureRef(ArrProto, "slice"));
    function safe(func, argArray) {
        try {
            return {
                v: func.apply(this, argArray)
            };
        }
        catch (e) {
            return { e: e };
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function safeGet(cb, defValue) {
        var result = safe(cb);
        return result.e ? defValue : result.v;
    }
    var _primitiveTypes;
    /*#__NO_SIDE_EFFECTS__*/
    function _createIs(theType) {
        return function (value) {
            return typeof value === theType;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createObjIs(theName) {
        var theType = "[object " + theName + "]";
        return function (value) {
            return !!(value && objToString(value) === theType);
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function objToString(value) {
        return ObjProto[TO_STRING].call(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isTypeof(value, theType) {
        return typeof value === theType;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isUndefined(value) {
        return typeof value === UNDEFINED || value === UNDEFINED;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isNullOrUndefined(value) {
        return value === NULL_VALUE || isUndefined(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isStrictNullOrUndefined(value) {
        return value === NULL_VALUE || !isDefined(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isDefined(arg) {
        return !!arg || arg !== UNDEF_VALUE;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isPrimitiveType(theType) {
        !_primitiveTypes && (_primitiveTypes = ["string", "number", "boolean", UNDEFINED, "symbol", "bigint"]);
        return theType !== OBJECT && _primitiveTypes.indexOf(theType) !== -1;
    }
    var isString = ( /*#__PURE__*/_createIs("string"));
    var isFunction = ( /*#__PURE__*/_createIs(FUNCTION));
    /*#__NO_SIDE_EFFECTS__*/
    function isObject(value) {
        if (!value && isNullOrUndefined(value)) {
            return false;
        }
        return !!value && typeof value === OBJECT;
    }
    var isArray = ( /* #__PURE__*/_pureRef(ArrCls, "isArray"));
    var isDate = ( /*#__PURE__*/_createObjIs("Date"));
    var isNumber = ( /*#__PURE__*/_createIs("number"));
    var isBoolean = ( /*#__PURE__*/_createIs("boolean"));
    var isError = ( /*#__PURE__*/_createObjIs("Error"));
    /*#__NO_SIDE_EFFECTS__*/
    function isPromiseLike(value) {
        return !!(value && value.then && isFunction(value.then));
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isNotTruthy(value) {
        return !value || !isTruthy(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isTruthy(value) {
        return !(!value || safeGet(function () { return !(value && (0 + value)); }, !value));
    }
    var objGetOwnPropertyDescriptor = ( /* #__PURE__ */_pureRef(ObjClass, "getOwnPropertyDescriptor"));
    /*#__NO_SIDE_EFFECTS__*/
    function objHasOwnProperty(obj, prop) {
        return !!obj && ObjProto.hasOwnProperty[CALL](obj, prop);
    }
    var objHasOwn = ( /*#__PURE__*/_pureAssign(( /* #__PURE__ */_pureRef(ObjClass, "hasOwn")), polyObjHasOwn));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjHasOwn(obj, prop) {
        return objHasOwnProperty(obj, prop) || !!objGetOwnPropertyDescriptor(obj, prop);
    }
    function objForEachKey(theObject, callbackfn, thisArg) {
        if (theObject && isObject(theObject)) {
            for (var prop in theObject) {
                if (objHasOwn(theObject, prop)) {
                    if (callbackfn[CALL](thisArg || theObject, prop, theObject[prop]) === -1) {
                        break;
                    }
                }
            }
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createKeyValueMap(values, keyType, valueType, completeFn) {
        var theMap = {};
        objForEachKey(values, function (key, value) {
            theMap[key] = keyType ? value : key;
            theMap[value] = valueType ? value : key;
        });
        return completeFn(theMap);
    }
    var asString = ( /* #__PURE__ */_pureAssign(StrCls));
    var ERROR_TYPE = "[object Error]";
    /*#__NO_SIDE_EFFECTS__*/
    function dumpObj(object, format) {
        var propertyValueDump = EMPTY;
        var objType = ObjProto[TO_STRING][CALL](object);
        if (objType === ERROR_TYPE) {
            object = { stack: asString(object.stack), message: asString(object.message), name: asString(object.name) };
        }
        try {
            propertyValueDump = JSON.stringify(object, NULL_VALUE, format ? ((typeof format === "number") ? format : 4) : UNDEF_VALUE);
            propertyValueDump = (propertyValueDump && propertyValueDump.replace(/"(\w+)"\s*:\s{0,1}/g, "$1: ")) || asString(object);
        }
        catch (e) {
            propertyValueDump = " - " + dumpObj(e, format);
        }
        return objType + ": " + propertyValueDump;
    }
    function throwError(message) {
        throw new Error(message);
    }
    function throwTypeError(message) {
        throw new TypeError(message);
    }
    var _objFreeze = ( /* #__PURE__ */_pureRef(ObjClass, "freeze"));
    function _doNothing(value) {
        return value;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getProto(value) {
        return value[__PROTO__] || NULL_VALUE;
    }
    var objAssign = ( /*#__PURE__*/_pureRef(ObjClass, "assign"));
    var objKeys = ( /*#__PURE__*/_pureRef(ObjClass, "keys"));
    function objDeepFreeze(value) {
        if (_objFreeze) {
            objForEachKey(value, function (key, value) {
                if (isArray(value) || isObject(value)) {
                    _objFreeze(value);
                }
            });
        }
        return objFreeze(value);
    }
    var objFreeze = ( /* #__PURE__*/_pureAssign(_objFreeze, _doNothing));
    var objSeal = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "seal")), _doNothing));
    var objGetPrototypeOf = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "getPrototypeOf")), _getProto));
    /*#__NO_SIDE_EFFECTS__*/
    function createEnum(values) {
        return _createKeyValueMap(values, 1 , 0 , objDeepFreeze);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createEnumKeyMap(values) {
        return _createKeyValueMap(values, 0 , 0 , objDeepFreeze);
    }
    var _wellKnownSymbolMap = /*#__PURE__*/ createEnumKeyMap({
        asyncIterator: 0 ,
        hasInstance: 1 ,
        isConcatSpreadable: 2 ,
        iterator: 3 ,
        match: 4 ,
        matchAll: 5 ,
        replace: 6 ,
        search: 7 ,
        species: 8 ,
        split: 9 ,
        toPrimitive: 10 ,
        toStringTag: 11 ,
        unscopables: 12
    });
    var GLOBAL_CONFIG_KEY = "__tsUtils$gblCfg";
    var _globalCfg;
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalValue() {
        var result;
        if (typeof globalThis !== UNDEFINED) {
            result = globalThis;
        }
        if (!result && typeof self !== UNDEFINED) {
            result = self;
        }
        if (!result && typeof window !== UNDEFINED) {
            result = window;
        }
        if (!result && typeof global !== UNDEFINED) {
            result = global;
        }
        return result;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalConfig() {
        if (!_globalCfg) {
            var gbl = safe(_getGlobalValue).v || {};
            _globalCfg = gbl[GLOBAL_CONFIG_KEY] = gbl[GLOBAL_CONFIG_KEY] || {};
        }
        return _globalCfg;
    }
    var _unwrapFunction = ( _unwrapFunctionWithPoly);
    /*#__NO_SIDE_EFFECTS__*/
    function _unwrapFunctionWithPoly(funcName, clsProto, polyFunc) {
        var clsFn = clsProto && clsProto[funcName];
        return function (thisArg) {
            var theFunc = (thisArg && thisArg[funcName]) || clsFn;
            if (theFunc || polyFunc) {
                var theArgs = arguments;
                return (theFunc || polyFunc).apply(thisArg, theFunc ? ArrSlice[CALL](theArgs, 1) : theArgs);
            }
            throwTypeError("\"" + asString(funcName) + "\" not defined for " + dumpObj(thisArg));
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _unwrapProp(propName) {
        return function (thisArg) {
            return thisArg[propName];
        };
    }
    var mathMax = ( /*#__PURE__*/_pureRef(MathCls, "max"));
    var strSlice = ( /*#__PURE__*/_unwrapFunction("slice", StrProto));
    var strSubstring = ( /*#__PURE__*/_unwrapFunction("substring", StrProto));
    var strSubstr = ( /*#__PURE__*/_unwrapFunctionWithPoly("substr", StrProto, polyStrSubstr));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrSubstr(value, start, length) {
        if (isNullOrUndefined(value)) {
            throwTypeError("Invalid " + dumpObj(value));
        }
        if (length < 0) {
            return EMPTY;
        }
        start = start || 0;
        if (start < 0) {
            start = mathMax(start + value[LENGTH], 0);
        }
        if (isUndefined(length)) {
            return strSlice(value, start);
        }
        return strSlice(value, start, start + length);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function strLeft(value, count) {
        return strSubstring(value, 0, count);
    }
    var UNIQUE_REGISTRY_ID = "_urid";
    var _polySymbols;
    /*#__NO_SIDE_EFFECTS__*/
    function _globalSymbolRegistry() {
        if (!_polySymbols) {
            var gblCfg = _getGlobalConfig();
            _polySymbols = gblCfg.gblSym = gblCfg.gblSym || { k: {}, s: {} };
        }
        return _polySymbols;
    }
    var _wellKnownSymbolCache;
    /*#__NO_SIDE_EFFECTS__*/
    function polyNewSymbol(description) {
        var theSymbol = {
            description: asString(description),
            toString: function () { return SYMBOL + "(" + description + ")"; }
        };
        theSymbol[POLYFILL_TAG] = true;
        return theSymbol;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polySymbolFor(key) {
        var registry = _globalSymbolRegistry();
        if (!objHasOwn(registry.k, key)) {
            var newSymbol_1 = polyNewSymbol(key);
            var regId_1 = objKeys(registry.s).length;
            newSymbol_1[UNIQUE_REGISTRY_ID] = function () { return regId_1 + "_" + newSymbol_1[TO_STRING](); };
            registry.k[key] = newSymbol_1;
            registry.s[newSymbol_1[UNIQUE_REGISTRY_ID]()] = asString(key);
        }
        return registry.k[key];
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyGetKnownSymbol(name) {
        !_wellKnownSymbolCache && (_wellKnownSymbolCache = {});
        var result;
        var knownName = _wellKnownSymbolMap[name];
        if (knownName) {
            result = _wellKnownSymbolCache[knownName] = _wellKnownSymbolCache[knownName] || polyNewSymbol(SYMBOL + "." + knownName);
        }
        return result;
    }
    var propMap = {
        e: "enumerable",
        c: "configurable",
        v: "value",
        w: "writable",
        g: "get",
        s: "set"
    };
    /*#__NO_SIDE_EFFECTS__*/
    function _createProp(value) {
        var prop = {};
        prop[propMap["c"]] = true;
        prop[propMap["e"]] = true;
        if (value.l) {
            prop.get = function () { return value.l.v; };
            var desc = objGetOwnPropertyDescriptor(value.l, "v");
            if (desc && desc.set) {
                prop.set = function (newValue) {
                    value.l.v = newValue;
                };
            }
        }
        objForEachKey(value, function (key, value) {
            prop[propMap[key]] = isUndefined(value) ? prop[propMap[key]] : value;
        });
        return prop;
    }
    var objDefineProp = ( /*#__PURE__*/_pureRef(ObjClass, "defineProperty"));
    function objDefineAccessors(target, prop, getProp, setProp, configurable, enumerable) {
        var desc = {
            e: enumerable,
            c: configurable
        };
        if (getProp) {
            desc.g = getProp;
        }
        if (setProp) {
            desc.s = setProp;
        }
        return objDefineProp(target, prop, _createProp(desc));
    }
    function objDefine(target, key, propDesc) {
        return objDefineProp(target, key, _createProp(propDesc));
    }
    var _globalLazyTestHooks;
    function _initTestHooks() {
        _globalLazyTestHooks = _getGlobalConfig();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getLazy(cb) {
        var lazyValue = {};
        !_globalLazyTestHooks && _initTestHooks();
        lazyValue.b = _globalLazyTestHooks.lzy;
        objDefineProp(lazyValue, "v", {
            configurable: true,
            get: function () {
                var result = cb();
                if (!_globalLazyTestHooks.lzy) {
                    objDefineProp(lazyValue, "v", {
                        value: result
                    });
                }
                lazyValue.b = _globalLazyTestHooks.lzy;
                return result;
            }
        });
        return lazyValue;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCachedValue(value) {
        return objDefineProp({
            toJSON: function () { return value; }
        }, "v", { value: value });
    }
    var WINDOW = "window";
    var _cachedGlobal;
    function _getGlobalInstFn(getFn, theArgs) {
        var cachedValue;
        return function () {
            !_globalLazyTestHooks && _initTestHooks();
            (!cachedValue || _globalLazyTestHooks.lzy) && (cachedValue = createCachedValue(safe(getFn, theArgs).v));
            return cachedValue.v;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getGlobal(useCached) {
        !_globalLazyTestHooks && _initTestHooks();
        (!_cachedGlobal || useCached === false || _globalLazyTestHooks.lzy) && (_cachedGlobal = createCachedValue(safe(_getGlobalValue).v || NULL_VALUE));
        return _cachedGlobal.v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getInst(name, useCached) {
        var gbl = (!_cachedGlobal || useCached === false) ? getGlobal(useCached) : _cachedGlobal.v;
        if (gbl && gbl[name]) {
            return gbl[name];
        }
        if (name === WINDOW) {
            return getWindow();
        }
        return NULL_VALUE;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function hasDocument() {
        return !!( /*#__PURE__*/getDocument());
    }
    var getDocument = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["document"]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasWindow() {
        return !!( /*#__PURE__*/getWindow());
    }
    var getWindow = ( /*#__PURE__*/_getGlobalInstFn(getInst, [WINDOW]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasNavigator() {
        return !!( /*#__PURE__*/getNavigator());
    }
    var getNavigator = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["navigator"]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasHistory() {
        return !!( /*#__PURE__*/getHistory());
    }
    var getHistory = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["history"]));
    var isNode = ( /*#__PURE__*/_getGlobalInstFn(function () {
        return !!( safe(function () { return (process && (process.versions || {}).node); }).v);
    }));
    var _symbol;
    var _symbolFor;
    /*#__NO_SIDE_EFFECTS__*/
    function _initSymbol() {
        _symbol = ( /*#__PURE__*/createCachedValue(safe((getInst), [SYMBOL]).v));
        return _symbol;
    }
    function _getSymbolKey(key) {
        var gblSym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return (gblSym.v ? gblSym.v[key] : UNDEF_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function hasSymbol() {
        return !!( /*#__PURE__*/getSymbol());
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getSymbol() {
        !_globalLazyTestHooks && _initTestHooks();
        return ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol()).v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getKnownSymbol(name, noPoly) {
        var knownName = _wellKnownSymbolMap[name];
        !_globalLazyTestHooks && _initTestHooks();
        var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return sym.v ? sym.v[knownName || name] : (!noPoly ? polyGetKnownSymbol(name) : UNDEF_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function newSymbol(description, noPoly) {
        !_globalLazyTestHooks && _initTestHooks();
        var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return sym.v ? sym.v(description) : (!noPoly ? polyNewSymbol(description) : NULL_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function symbolFor(key) {
        !_globalLazyTestHooks && _initTestHooks();
        _symbolFor = ((!_globalLazyTestHooks.lzy ? _symbolFor : 0) || ( /*#__PURE__*/createCachedValue(safe((_getSymbolKey), ["for"]).v)));
        return (_symbolFor.v || polySymbolFor)(key);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isIterator(value) {
        return !!value && isFunction(value.next);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isIterable(value) {
        return !isStrictNullOrUndefined(value) && isFunction(value[getKnownSymbol(3 )]);
    }
    var _iterSymbol$1;
    function iterForOf(iter, callbackfn, thisArg) {
        if (iter) {
            if (!isIterator(iter)) {
                !_iterSymbol$1 && (_iterSymbol$1 = createCachedValue(getKnownSymbol(3 )));
                iter = iter[_iterSymbol$1.v] ? iter[_iterSymbol$1.v]() : null;
            }
            if (isIterator(iter)) {
                var err = UNDEF_VALUE;
                var iterResult = UNDEF_VALUE;
                try {
                    var count = 0;
                    while (!(iterResult = iter.next()).done) {
                        if (callbackfn[CALL](thisArg || iter, iterResult.value, count, iter) === -1) {
                            break;
                        }
                        count++;
                    }
                }
                catch (failed) {
                    err = { e: failed };
                    if (iter.throw) {
                        iterResult = NULL_VALUE;
                        iter.throw(err);
                    }
                }
                finally {
                    try {
                        if (iterResult && !iterResult.done) {
                            iter.return && iter.return(iterResult);
                        }
                    }
                    finally {
                        if (err) {
                            throw err.e;
                        }
                    }
                }
            }
        }
    }
    function fnApply(fn, thisArg, argArray) {
        return fn.apply(thisArg, argArray);
    }
    function arrAppend(target, elms) {
        if (!isUndefined(elms) && target) {
            if (isArray(elms)) {
                fnApply(target.push, target, elms);
            }
            else if (isIterator(elms) || isIterable(elms)) {
                iterForOf(elms, function (elm) {
                    target.push(elm);
                });
            }
            else {
                target.push(elms);
            }
        }
        return target;
    }
    function arrForEach(theArray, callbackfn, thisArg) {
        if (theArray) {
            var len = theArray[LENGTH] >>> 0;
            for (var idx = 0; idx < len; idx++) {
                if (idx in theArray) {
                    if (callbackfn[CALL](thisArg || theArray, theArray[idx], idx, theArray) === -1) {
                        break;
                    }
                }
            }
        }
    }
    var arrIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", ArrProto));
    var arrMap = ( /*#__PURE__*/_unwrapFunction("map", ArrProto));
    function arrSlice(theArray, start, end) {
        return ((theArray && theArray["slice"]) || ArrSlice).apply(theArray, ArrSlice[CALL](arguments, 1));
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyArrIncludes(theArray, searchElement, fromIndex) {
        return arrIndexOf(theArray, searchElement, fromIndex) !== -1;
    }
    var arrIncludes = ( /*#__PURE__*/_unwrapFunctionWithPoly("includes", ArrProto, polyArrIncludes));
    var arrReduce = ( /*#__PURE__*/_unwrapFunction("reduce", ArrProto));
    var objCreate = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "create")), polyObjCreate));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjCreate(obj) {
        if (!obj) {
            return {};
        }
        var type = typeof obj;
        if (type !== OBJECT && type !== FUNCTION) {
            throwTypeError("Prototype must be an Object or function: " + dumpObj(obj));
        }
        function tempFunc() { }
        tempFunc[PROTOTYPE] = obj;
        return new tempFunc();
    }
    var _isProtoArray;
    function objSetPrototypeOf(obj, proto) {
        var fn = ObjClass["setPrototypeOf"] ||
            function (d, b) {
                var _a;
                !_isProtoArray && (_isProtoArray = createCachedValue((_a = {}, _a[__PROTO__] = [], _a) instanceof Array));
                _isProtoArray.v ? d[__PROTO__] = b : objForEachKey(b, function (key, value) { return d[key] = value; });
            };
        return fn(obj, proto);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createCustomError(name, d, b) {
        safe(objDefine, [d, NAME, { v: name, c: true, e: false }]);
        d = objSetPrototypeOf(d, b);
        function __() {
            this[CONSTRUCTOR] = d;
            safe(objDefine, [this, NAME, { v: name, c: true, e: false }]);
        }
        d[PROTOTYPE] = b === NULL_VALUE ? objCreate(b) : (__[PROTOTYPE] = b[PROTOTYPE], new __());
        return d;
    }
    function _setName(baseClass, name) {
        name && (baseClass[NAME] = name);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCustomError(name, constructCb, errorBase) {
        var theBaseClass = errorBase || Error;
        var orgName = theBaseClass[PROTOTYPE][NAME];
        var captureFn = Error.captureStackTrace;
        return _createCustomError(name, function () {
            var _this = this;
            var theArgs = arguments;
            try {
                safe(_setName, [theBaseClass, name]);
                var _self = fnApply(theBaseClass, _this, ArrSlice[CALL](theArgs)) || _this;
                if (_self !== _this) {
                    var orgProto = objGetPrototypeOf(_this);
                    if (orgProto !== objGetPrototypeOf(_self)) {
                        objSetPrototypeOf(_self, orgProto);
                    }
                }
                captureFn && captureFn(_self, _this[CONSTRUCTOR]);
                constructCb && constructCb(_self, theArgs);
                return _self;
            }
            finally {
                safe(_setName, [theBaseClass, orgName]);
            }
        }, theBaseClass);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function utcNow() {
        return (Date.now || polyUtcNow)();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyUtcNow() {
        return new Date().getTime();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createTrimFn(exp) {
        return function _doTrim(value) {
            if (isNullOrUndefined(value)) {
                throwTypeError("strTrim called [" + dumpObj(value) + "]");
            }
            if (value && value.replace) {
                value = value.replace(exp, EMPTY);
            }
            return value;
        };
    }
    var polyStrTrim = ( /*#__PURE__*/_createTrimFn(/^\s+|(?=\s)\s+$/g));
    var strTrim = ( /*#__PURE__*/_unwrapFunctionWithPoly("trim", StrProto, polyStrTrim));
    var _fnToString;
    var _objCtrFnString;
    var _gblWindow;
    /*#__NO_SIDE_EFFECTS__*/
    function isPlainObject(value) {
        if (!value || typeof value !== OBJECT) {
            return false;
        }
        if (!_gblWindow) {
            _gblWindow = hasWindow() ? getWindow() : true;
        }
        var result = false;
        if (value !== _gblWindow) {
            if (!_objCtrFnString) {
                _fnToString = Function[PROTOTYPE][TO_STRING];
                _objCtrFnString = _fnToString[CALL](ObjClass);
            }
            try {
                var proto = objGetPrototypeOf(value);
                result = !proto;
                if (!result) {
                    if (objHasOwnProperty(proto, CONSTRUCTOR)) {
                        proto = proto[CONSTRUCTOR];
                    }
                    result = proto && typeof proto === FUNCTION && _fnToString[CALL](proto) === _objCtrFnString;
                }
            }
            catch (ex) {
            }
        }
        return result;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _defaultDeepCopyHandler(details) {
        details.value && plainObjDeepCopyHandler(details);
        return true;
    }
    var defaultDeepCopyHandlers = [
        arrayDeepCopyHandler,
        plainObjDeepCopyHandler,
        functionDeepCopyHandler,
        dateDeepCopyHandler
    ];
    /*#__NO_SIDE_EFFECTS__*/
    function _getSetVisited(visitMap, source, newPath, cb) {
        var theEntry;
        arrForEach(visitMap, function (entry) {
            if (entry.k === source) {
                theEntry = entry;
                return -1;
            }
        });
        if (!theEntry) {
            theEntry = { k: source, v: source };
            visitMap.push(theEntry);
            cb(theEntry);
        }
        return theEntry.v;
    }
    function _deepCopy(visitMap, value, ctx, key) {
        var userHandler = ctx.handler;
        var newPath = ctx.path ? (key ? ctx.path.concat(key) : ctx.path) : [];
        var newCtx = {
            handler: ctx.handler,
            src: ctx.src,
            path: newPath
        };
        var theType = typeof value;
        var isPlain = false;
        var isPrim = false;
        if (value && theType === OBJECT) {
            isPlain = isPlainObject(value);
        }
        else {
            isPrim = value === NULL_VALUE || isPrimitiveType(theType);
        }
        var details = {
            type: theType,
            isPrim: isPrim,
            isPlain: isPlain,
            value: value,
            result: value,
            path: newPath,
            origin: ctx.src,
            copy: function (source, newKey) {
                return _deepCopy(visitMap, source, newKey ? newCtx : ctx, newKey);
            },
            copyTo: function (target, source) {
                return _copyProps(visitMap, target, source, newCtx);
            }
        };
        if (!details.isPrim) {
            return _getSetVisited(visitMap, value, newPath, function (newEntry) {
                objDefine(details, "result", {
                    g: function () {
                        return newEntry.v;
                    },
                    s: function (newValue) {
                        newEntry.v = newValue;
                    }
                });
                var idx = 0;
                var handler = userHandler;
                while (!(handler || (idx < defaultDeepCopyHandlers.length ? defaultDeepCopyHandlers[idx++] : _defaultDeepCopyHandler))[CALL](ctx, details)) {
                    handler = NULL_VALUE;
                }
            });
        }
        if (userHandler && userHandler[CALL](ctx, details)) {
            return details.result;
        }
        return value;
    }
    function _copyProps(visitMap, target, source, ctx) {
        if (!isNullOrUndefined(source)) {
            for (var key in source) {
                target[key] = _deepCopy(visitMap, source[key], ctx, key);
            }
        }
        return target;
    }
    function objCopyProps(target, source, handler) {
        var ctx = {
            handler: handler,
            src: source,
            path: []
        };
        return _copyProps([], target, source, ctx);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function objDeepCopy(source, handler) {
        var ctx = {
            handler: handler,
            src: source
        };
        return _deepCopy([], source, ctx);
    }
    function arrayDeepCopyHandler(details) {
        var value = details.value;
        if (isArray(value)) {
            var target = details.result = [];
            target.length = value.length;
            details.copyTo(target, value);
            return true;
        }
        return false;
    }
    function dateDeepCopyHandler(details) {
        var value = details.value;
        if (isDate(value)) {
            details.result = new Date(value.getTime());
            return true;
        }
        return false;
    }
    function functionDeepCopyHandler(details) {
        if (details.type === FUNCTION) {
            return true;
        }
        return false;
    }
    function plainObjDeepCopyHandler(details) {
        var value = details.value;
        if (value && details.isPlain) {
            var target = details.result = {};
            details.copyTo(target, value);
            return true;
        }
        return false;
    }
    function _doExtend(target, theArgs) {
        arrForEach(theArgs, function (theArg) {
            objCopyProps(target, theArg);
        });
        return target;
    }
    function deepExtend(target, obj1, obj2, obj3, obj4, obj5, obj6) {
        return _doExtend(objDeepCopy(target) || {}, ArrSlice[CALL](arguments));
    }
    var getLength = ( /*#__PURE__*/_unwrapProp(LENGTH));
    var _perf;
    /*#__NO_SIDE_EFFECTS__*/
    function getPerformance() {
        !_globalLazyTestHooks && _initTestHooks();
        (!_perf || _globalLazyTestHooks.lzy) && (_perf = createCachedValue(safe((getInst), ["performance"]).v));
        return _perf.v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function perfNow() {
        var perf = getPerformance();
        if (perf && perf.now) {
            return perf.now();
        }
        return utcNow();
    }
    var strEndsWith = ( /*#__PURE__*/_unwrapFunctionWithPoly("endsWith", StrProto, polyStrEndsWith));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrEndsWith(value, searchString, length) {
        if (!isString(value)) {
            throwTypeError("'" + dumpObj(value) + "' is not a string");
        }
        var searchValue = isString(searchString) ? searchString : asString(searchString);
        var end = !isUndefined(length) && length < value[LENGTH] ? length : value[LENGTH];
        return strSubstring(value, end - searchValue[LENGTH], end) === searchValue;
    }
    var strIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", StrProto));
    var strStartsWith = ( /*#__PURE__*/_unwrapFunctionWithPoly("startsWith", StrProto, polyStrStartsWith));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrStartsWith(value, searchString, position) {
        if (!isString(value)) {
            throwTypeError("'" + dumpObj(value) + "' is not a string");
        }
        var searchValue = isString(searchString) ? searchString : asString(searchString);
        var pos = position > 0 ? position : 0;
        return strSubstring(value, pos, pos + searchValue[LENGTH]) === searchValue;
    }
    var REF = "ref";
    var UNREF = "unref";
    var HAS_REF = "hasRef";
    var ENABLED = "enabled";
    /*#__NO_SIDE_EFFECTS__*/
    function _createTimerHandler(startTimer, refreshFn, cancelFn) {
        var ref = true;
        var timerId = startTimer ? refreshFn(NULL_VALUE) : NULL_VALUE;
        var theTimerHandler;
        function _unref() {
            ref = false;
            timerId && timerId[UNREF] && timerId[UNREF]();
            return theTimerHandler;
        }
        function _cancel() {
            timerId && cancelFn(timerId);
            timerId = NULL_VALUE;
        }
        function _refresh() {
            timerId = refreshFn(timerId);
            if (!ref) {
                _unref();
            }
            return theTimerHandler;
        }
        function _setEnabled(value) {
            !value && timerId && _cancel();
            value && !timerId && _refresh();
        }
        theTimerHandler = {
            cancel: _cancel,
            refresh: _refresh
        };
        theTimerHandler[HAS_REF] = function () {
            if (timerId && timerId[HAS_REF]) {
                return timerId[HAS_REF]();
            }
            return ref;
        };
        theTimerHandler[REF] = function () {
            ref = true;
            timerId && timerId[REF] && timerId[REF]();
            return theTimerHandler;
        };
        theTimerHandler[UNREF] = _unref;
        theTimerHandler = objDefineProp(theTimerHandler, ENABLED, {
            get: function () { return !!timerId; },
            set: _setEnabled
        });
        return {
            h: theTimerHandler,
            dn: function () {
                timerId = NULL_VALUE;
            }
        };
    }
    function _createTimeoutWith(startTimer, overrideFn, theArgs) {
        var isArr = isArray(overrideFn);
        var len = isArr ? overrideFn.length : 0;
        var setFn = (len > 0 ? overrideFn[0] : (!isArr ? overrideFn : UNDEF_VALUE)) || setTimeout;
        var clearFn = (len > 1 ? overrideFn[1] : UNDEF_VALUE) || clearTimeout;
        var timerFn = theArgs[0];
        theArgs[0] = function () {
            handler.dn();
            fnApply(timerFn, UNDEF_VALUE, ArrSlice[CALL](arguments));
        };
        var handler = _createTimerHandler(startTimer, function (timerId) {
            if (timerId) {
                if (timerId.refresh) {
                    timerId.refresh();
                    return timerId;
                }
                fnApply(clearFn, UNDEF_VALUE, [timerId]);
            }
            return fnApply(setFn, UNDEF_VALUE, theArgs);
        }, function (timerId) {
            fnApply(clearFn, UNDEF_VALUE, [timerId]);
        });
        return handler.h;
    }
    function scheduleTimeout(callback, timeout) {
        return _createTimeoutWith(true, UNDEF_VALUE, ArrSlice[CALL](arguments));
    }
    function createTimeout(callback, timeout) {
        return _createTimeoutWith(false, UNDEF_VALUE, ArrSlice[CALL](arguments));
    }

    var strHasOwnProperty = "hasOwnProperty";
    var extendStaticsFn = function (d, b) {
        extendStaticsFn = ObjClass$1["setPrototypeOf"] ||
            ({ __proto__: [] } instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) {
                    if (b[strHasOwnProperty](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return extendStaticsFn(d, b);
    };
    function __extendsFn(d, b) {
        if (typeof b !== strShimFunction && b !== null) {
            throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStaticsFn(d, b);
        function __() {
            this.constructor = d;
        }
        d[strShimPrototype] = b === null ? objCreate(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
    }
    function __spreadArrayFn(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
            to[j] = from[i];
        }
        return to;
    }

    var _a$5;
    var Constructor = 'constructor';
    var Prototype = 'prototype';
    var strFunction = 'function';
    var DynInstFuncTable = '_dynInstFuncs';
    var DynProxyTag = '_isDynProxy';
    var DynClassName = '_dynClass';
    var DynClassNamePrefix = '_dynCls$';
    var DynInstChkTag = '_dynInstChk';
    var DynAllowInstChkTag = DynInstChkTag;
    var DynProtoDefaultOptions = '_dfOpts';
    var UnknownValue = '_unknown_';
    var str__Proto = "__proto__";
    var DynProtoBaseProto = "_dyn" + str__Proto;
    var DynProtoGlobalSettings = "__dynProto$Gbl";
    var DynProtoCurrent = "_dynInstProto";
    var strUseBaseInst = 'useBaseInst';
    var strSetInstFuncs = 'setInstFuncs';
    var Obj = Object;
    var _objGetPrototypeOf = Obj["getPrototypeOf"];
    var _objGetOwnProps = Obj["getOwnPropertyNames"];
    var _gbl = getGlobal();
    var _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
        o: (_a$5 = {},
            _a$5[strSetInstFuncs] = true,
            _a$5[strUseBaseInst] = true,
            _a$5),
        n: 1000
    });
    function _isObjectOrArrayPrototype(target) {
        return target && (target === Obj[Prototype] || target === Array[Prototype]);
    }
    function _isObjectArrayOrFunctionPrototype(target) {
        return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
    }
    function _getObjProto(target) {
        var newProto;
        if (target) {
            if (_objGetPrototypeOf) {
                return _objGetPrototypeOf(target);
            }
            var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
            newProto = target[DynProtoBaseProto] || curProto;
            if (!objHasOwnProperty(target, DynProtoBaseProto)) {
                delete target[DynProtoCurrent];
                newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
                target[DynProtoCurrent] = curProto;
            }
        }
        return newProto;
    }
    function _forEachProp(target, func) {
        var props = [];
        if (_objGetOwnProps) {
            props = _objGetOwnProps(target);
        }
        else {
            for (var name_1 in target) {
                if (typeof name_1 === "string" && objHasOwnProperty(target, name_1)) {
                    props.push(name_1);
                }
            }
        }
        if (props && props.length > 0) {
            for (var lp = 0; lp < props.length; lp++) {
                func(props[lp]);
            }
        }
    }
    function _isDynamicCandidate(target, funcName, skipOwn) {
        return (funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || objHasOwnProperty(target, funcName)) && funcName !== str__Proto && funcName !== Prototype);
    }
    function _throwTypeError(message) {
        throwTypeError("DynamicProto: " + message);
    }
    function _getInstanceFuncs(thisTarget) {
        var instFuncs = objCreate(null);
        _forEachProp(thisTarget, function (name) {
            if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
                instFuncs[name] = thisTarget[name];
            }
        });
        return instFuncs;
    }
    function _hasVisited(values, value) {
        for (var lp = values.length - 1; lp >= 0; lp--) {
            if (values[lp] === value) {
                return true;
            }
        }
        return false;
    }
    function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
        function _instFuncProxy(target, funcHost, funcName) {
            var theFunc = funcHost[funcName];
            if (theFunc[DynProxyTag] && useBaseInst) {
                var instFuncTable = target[DynInstFuncTable] || {};
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
                }
            }
            return function () {
                return theFunc.apply(target, arguments);
            };
        }
        var baseFuncs = objCreate(null);
        _forEachProp(instFuncs, function (name) {
            baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
        });
        var baseProto = _getObjProto(classProto);
        var visited = [];
        while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
            _forEachProp(baseProto, function (name) {
                if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                    baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
                }
            });
            visited.push(baseProto);
            baseProto = _getObjProto(baseProto);
        }
        return baseFuncs;
    }
    function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
        var instFunc = null;
        if (target && objHasOwnProperty(proto, DynClassName)) {
            var instFuncTable = target[DynInstFuncTable] || objCreate(null);
            instFunc = (instFuncTable[proto[DynClassName]] || objCreate(null))[funcName];
            if (!instFunc) {
                _throwTypeError("Missing [" + funcName + "] " + strFunction);
            }
            if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
                var canAddInst = !objHasOwnProperty(target, funcName);
                var objProto = _getObjProto(target);
                var visited = [];
                while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                    var protoFunc = objProto[funcName];
                    if (protoFunc) {
                        canAddInst = (protoFunc === currentDynProtoProxy);
                        break;
                    }
                    visited.push(objProto);
                    objProto = _getObjProto(objProto);
                }
                try {
                    if (canAddInst) {
                        target[funcName] = instFunc;
                    }
                    instFunc[DynInstChkTag] = 1;
                }
                catch (e) {
                    instFuncTable[DynAllowInstChkTag] = false;
                }
            }
        }
        return instFunc;
    }
    function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
        var protoFunc = proto[funcName];
        if (protoFunc === currentDynProtoProxy) {
            protoFunc = _getObjProto(proto)[funcName];
        }
        if (typeof protoFunc !== strFunction) {
            _throwTypeError("[" + funcName + "] is not a " + strFunction);
        }
        return protoFunc;
    }
    function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
        function _createDynamicPrototype(proto, funcName) {
            var dynProtoProxy = function () {
                var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
                return instFunc.apply(this, arguments);
            };
            dynProtoProxy[DynProxyTag] = 1;
            return dynProtoProxy;
        }
        if (!_isObjectOrArrayPrototype(proto)) {
            var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || objCreate(null);
            if (!_isObjectOrArrayPrototype(instFuncTable)) {
                var instFuncs_1 = instFuncTable[className] = (instFuncTable[className] || objCreate(null));
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
                }
                if (!_isObjectOrArrayPrototype(instFuncs_1)) {
                    _forEachProp(target, function (name) {
                        if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                            instFuncs_1[name] = target[name];
                            delete target[name];
                            if (!objHasOwnProperty(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                                proto[name] = _createDynamicPrototype(proto, name);
                            }
                        }
                    });
                }
            }
        }
    }
    function _checkPrototype(classProto, thisTarget) {
        if (_objGetPrototypeOf) {
            var visited = [];
            var thisProto = _getObjProto(thisTarget);
            while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
                if (thisProto === classProto) {
                    return true;
                }
                visited.push(thisProto);
                thisProto = _getObjProto(thisProto);
            }
            return false;
        }
        return true;
    }
    function _getObjName(target, unknownValue) {
        if (objHasOwnProperty(target, Prototype)) {
            return target.name || unknownValue || UnknownValue;
        }
        return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
    }
    function dynamicProto(theClass, target, delegateFunc, options) {
        if (!objHasOwnProperty(theClass, Prototype)) {
            _throwTypeError("theClass is an invalid class definition.");
        }
        var classProto = theClass[Prototype];
        if (!_checkPrototype(classProto, target)) {
            _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
        }
        var className = null;
        if (objHasOwnProperty(classProto, DynClassName)) {
            className = classProto[DynClassName];
        }
        else {
            className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
            _gblInst.n++;
            classProto[DynClassName] = className;
        }
        var perfOptions = dynamicProto[DynProtoDefaultOptions];
        var useBaseInst = !!perfOptions[strUseBaseInst];
        if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
            useBaseInst = !!options[strUseBaseInst];
        }
        var instFuncs = _getInstanceFuncs(target);
        var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
        delegateFunc(target, baseFuncs);
        var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
        if (setInstanceFunc && options) {
            setInstanceFunc = !!options[strSetInstFuncs];
        }
        _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
    }
    dynamicProto[DynProtoDefaultOptions] = _gblInst.o;

    var MinChannelPriorty = 100;

    var createEnumStyle = createEnum;

    var EventsDiscardedReason = createEnumStyle({
        Unknown: 0 ,
        NonRetryableStatus: 1 ,
        InvalidEvent: 2 ,
        SizeLimitExceeded: 3 ,
        KillSwitch: 4 ,
        QueueFull: 5
    });

    var _DYN_TO_LOWER_CASE = "toLowerCase";
    var _DYN_BLK_VAL = "blkVal";
    var _DYN_LENGTH$1 = "length";
    var _DYN_RD_ONLY = "rdOnly";
    var _DYN_NOTIFY = "notify";
    var _DYN_WARN_TO_CONSOLE = "warnToConsole";
    var _DYN_THROW_INTERNAL = "throwInternal";
    var _DYN_SET_DF = "setDf";
    var _DYN_WATCH = "watch";
    var _DYN_LOGGER$1 = "logger";
    var _DYN_APPLY = "apply";
    var _DYN_PUSH = "push";
    var _DYN_SPLICE = "splice";
    var _DYN_HDLR = "hdlr";
    var _DYN_CANCEL = "cancel";
    var _DYN_INITIALIZE$1 = "initialize";
    var _DYN_IDENTIFIER = "identifier";
    var _DYN_REMOVE_NOTIFICATION_0 = "removeNotificationListener";
    var _DYN_ADD_NOTIFICATION_LIS1 = "addNotificationListener";
    var _DYN_IS_INITIALIZED = "isInitialized";
    var _DYN_GET_NOTIFY_MGR = "getNotifyMgr";
    var _DYN_GET_PLUGIN = "getPlugin";
    var _DYN_POLL_INTERNAL_LOGS$1 = "pollInternalLogs";
    var _DYN_NAME = "name";
    var _DYN_TIME = "time";
    var _DYN_PROCESS_NEXT = "processNext";
    var _DYN_GET_PROCESS_TEL_CONT2 = "getProcessTelContext";
    var _DYN_ENABLED = "enabled";
    var _DYN_STOP_POLLING_INTERNA3 = "stopPollingInternalLogs";
    var _DYN_UNLOAD = "unload";
    var _DYN_ON_COMPLETE = "onComplete";
    var _DYN_VERSION = "version";
    var _DYN_LOGGING_LEVEL_CONSOL4 = "loggingLevelConsole";
    var _DYN_CREATE_NEW = "createNew";
    var _DYN_TEARDOWN = "teardown";
    var _DYN_MESSAGE_ID = "messageId";
    var _DYN_MESSAGE = "message";
    var _DYN_IS_ASYNC = "isAsync";
    var _DYN_DIAG_LOG = "diagLog";
    var _DYN__DO_TEARDOWN = "_doTeardown";
    var _DYN_UPDATE = "update";
    var _DYN_GET_NEXT = "getNext";
    var _DYN_SET_NEXT_PLUGIN = "setNextPlugin";
    var _DYN_PROTOCOL = "protocol";
    var _DYN_USER_AGENT = "userAgent";
    var _DYN_SPLIT = "split";
    var _DYN_NODE_TYPE = "nodeType";
    var _DYN_REPLACE = "replace";
    var _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage";
    var _DYN_TYPE = "type";
    var _DYN_HANDLER = "handler";
    var _DYN_STATUS = "status";
    var _DYN_GET_RESPONSE_HEADER = "getResponseHeader";
    var _DYN_GET_ALL_RESPONSE_HEA5 = "getAllResponseHeaders";
    var _DYN_IS_CHILD_EVT = "isChildEvt";
    var _DYN_DATA = "data";
    var _DYN_GET_CTX = "getCtx";
    var _DYN_SET_CTX = "setCtx";
    var _DYN_COMPLETE = "complete";
    var _DYN_ITEMS_RECEIVED = "itemsReceived";
    var _DYN_URL_STRING = "urlString";
    var _DYN_SEND_POST = "sendPOST";
    var _DYN_HEADERS = "headers";
    var _DYN_TIMEOUT = "timeout";
    var _DYN_SET_REQUEST_HEADER = "setRequestHeader";
    var _DYN_TRACE_ID = "traceId";
    var _DYN_SPAN_ID = "spanId";
    var _DYN_TRACE_FLAGS = "traceFlags";

    var aggregationErrorType;
    function throwAggregationError(message, sourceErrors) {
        if (!aggregationErrorType) {
            aggregationErrorType = createCustomError("AggregationError", function (self, args) {
                if (args[_DYN_LENGTH$1 ] > 1) {
                    self.errors = args[1];
                }
            });
        }
        var theMessage = message || "One or more errors occurred.";
        arrForEach(sourceErrors, function (srcError, idx) {
            theMessage += "\n".concat(idx, " > ").concat(dumpObj(srcError));
        });
        throw new aggregationErrorType(theMessage, sourceErrors || []);
    }

    /*!
     * NevWare21 - ts-async, 0.5.1
     * https://github.com/nevware21/ts-async
     * Copyright (c) NevWare21 and contributors. All rights reserved.
     * Licensed under the MIT license.
     */
    var STR_PROMISE = "Promise";
    var REJECTED = "rejected";
    function doAwaitResponse(value, cb) {
        return doAwait(value, function (value) {
            return cb ? cb({
                status: "fulfilled",
                rejected: false,
                value: value
            }) : value;
        }, function (reason) {
            return cb ? cb({
                status: REJECTED,
                rejected: true,
                reason: reason
            }) : reason;
        });
    }
    function doAwait(value, resolveFn, rejectFn, finallyFn) {
        var result = value;
        try {
            if (isPromiseLike(value)) {
                if (resolveFn || rejectFn) {
                    result = value.then(resolveFn, rejectFn);
                }
            }
            else {
                try {
                    if (resolveFn) {
                        result = resolveFn(value);
                    }
                }
                catch (err) {
                    if (rejectFn) {
                        result = rejectFn(err);
                    }
                    else {
                        throw err;
                    }
                }
            }
        }
        finally {
            if (finallyFn) {
                doFinally(result, finallyFn);
            }
        }
        return result;
    }
    function doFinally(value, finallyFn) {
        var result = value;
        if (finallyFn) {
            if (isPromiseLike(value)) {
                if (value.finally) {
                    result = value.finally(finallyFn);
                }
                else {
                    result = value.then(function (value) {
                        finallyFn();
                        return value;
                    }, function (reason) {
                        finallyFn();
                        throw reason;
                    });
                }
            }
            else {
                finallyFn();
            }
        }
        return result;
    }
    var STRING_STATES =  [
        "pending", "resolving", "resolved", REJECTED
    ];
    var DISPATCH_EVENT = "dispatchEvent";
    var _hasInitEvent;
    function _hasInitEventFn(doc) {
        var evt;
        if (doc && doc.createEvent) {
            evt = doc.createEvent("Event");
        }
        return (!!evt && evt.initEvent);
    }
    function emitEvent(target, evtName, populateEvent, useNewEvent) {
        var doc = getDocument();
        !_hasInitEvent && (_hasInitEvent = createCachedValue(!!safe(_hasInitEventFn, [doc]).v));
        var theEvt = _hasInitEvent.v ? doc.createEvent("Event") : (useNewEvent ? new Event(evtName) : {});
        populateEvent && populateEvent(theEvt);
        if (_hasInitEvent.v) {
            theEvt.initEvent(evtName, false, true);
        }
        if (theEvt && target[DISPATCH_EVENT]) {
            target[DISPATCH_EVENT](theEvt);
        }
        else {
            var handler = target["on" + evtName];
            if (handler) {
                handler(theEvt);
            }
            else {
                var theConsole = getInst("console");
                theConsole && (theConsole["error"] || theConsole["log"])(evtName, dumpObj(theEvt));
            }
        }
    }
    var NODE_UNHANDLED_REJECTION = "unhandledRejection";
    var UNHANDLED_REJECTION = NODE_UNHANDLED_REJECTION.toLowerCase();
    var _unhandledRejectionTimeout = 10;
    var _hasPromiseRejectionEvent;
    function dumpFnObj(value) {
        if (isFunction(value)) {
            return value.toString();
        }
        return dumpObj(value);
    }
    function _createPromise(newPromise, processor, executor) {
        var additionalArgs = arrSlice(arguments, 3);
        var _state = 0 ;
        var _hasResolved = false;
        var _settledValue;
        var _queue = [];
        var _handled = false;
        var _unHandledRejectionHandler = null;
        var _thePromise;
        function _then(onResolved, onRejected) {
            try {
                _handled = true;
                _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
                _unHandledRejectionHandler = null;
                var thenPromise = newPromise(function (resolve, reject) {
                    _queue.push(function () {
                        try {
                            var handler = _state === 2  ? onResolved : onRejected;
                            var value = isUndefined(handler) ? _settledValue : (isFunction(handler) ? handler(_settledValue) : handler);
                            if (isPromiseLike(value)) {
                                value.then(resolve, reject);
                            }
                            else if (handler) {
                                resolve(value);
                            }
                            else if (_state === 3 ) {
                                reject(value);
                            }
                            else {
                                resolve(value);
                            }
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    if (_hasResolved) {
                        _processQueue();
                    }
                }, additionalArgs);
                return thenPromise;
            }
            finally {
            }
        }
        function _catch(onRejected) {
            return _then(undefined, onRejected);
        }
        function _finally(onFinally) {
            var thenFinally = onFinally;
            var catchFinally = onFinally;
            if (isFunction(onFinally)) {
                thenFinally = function (value) {
                    onFinally && onFinally();
                    return value;
                };
                catchFinally = function (reason) {
                    onFinally && onFinally();
                    throw reason;
                };
            }
            return _then(thenFinally, catchFinally);
        }
        function _strState() {
            return STRING_STATES[_state];
        }
        function _processQueue() {
            if (_queue.length > 0) {
                var pending = _queue.slice();
                _queue = [];
                _handled = true;
                _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
                _unHandledRejectionHandler = null;
                processor(pending);
            }
        }
        function _createSettleIfFn(newState, allowState) {
            return function (theValue) {
                if (_state === allowState) {
                    if (newState === 2  && isPromiseLike(theValue)) {
                        _state = 1 ;
                        theValue.then(_createSettleIfFn(2 , 1 ), _createSettleIfFn(3 , 1 ));
                        return;
                    }
                    _state = newState;
                    _hasResolved = true;
                    _settledValue = theValue;
                    _processQueue();
                    if (!_handled && newState === 3  && !_unHandledRejectionHandler) {
                        _unHandledRejectionHandler = scheduleTimeout(_notifyUnhandledRejection, _unhandledRejectionTimeout);
                    }
                }
            };
        }
        function _notifyUnhandledRejection() {
            if (!_handled) {
                _handled = true;
                if (isNode()) {
                    process.emit(NODE_UNHANDLED_REJECTION, _settledValue, _thePromise);
                }
                else {
                    var gbl = getWindow() || getGlobal();
                    !_hasPromiseRejectionEvent && (_hasPromiseRejectionEvent = createCachedValue(safe((getInst), [STR_PROMISE + "RejectionEvent"]).v));
                    emitEvent(gbl, UNHANDLED_REJECTION, function (theEvt) {
                        objDefine(theEvt, "promise", { g: function () { return _thePromise; } });
                        theEvt.reason = _settledValue;
                        return theEvt;
                    }, !!_hasPromiseRejectionEvent.v);
                }
            }
        }
        _thePromise = {
            then: _then,
            "catch": _catch,
            finally: _finally
        };
        objDefineProp(_thePromise, "state", {
            get: _strState
        });
        if (hasSymbol()) {
            _thePromise[getKnownSymbol(11 )] = "IPromise";
        }
        function _toString() {
            return "IPromise" + ("") + " " + _strState() + (_hasResolved ? (" - " + dumpFnObj(_settledValue)) : "") + ("");
        }
        _thePromise.toString = _toString;
        (function _initialize() {
            if (!isFunction(executor)) {
                throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpFnObj(executor));
            }
            var _rejectFn = _createSettleIfFn(3 , 0 );
            try {
                executor.call(_thePromise, _createSettleIfFn(2 , 0 ), _rejectFn);
            }
            catch (e) {
                _rejectFn(e);
            }
        })();
        return _thePromise;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createAllPromise(newPromise) {
        return function (input) {
            var additionalArgs = arrSlice(arguments, 1);
            return newPromise(function (resolve, reject) {
                try {
                    var values_1 = [];
                    var pending_1 = 1;
                    iterForOf(input, function (item, idx) {
                        if (item) {
                            pending_1++;
                            doAwait(item, function (value) {
                                values_1[idx] = value;
                                if (--pending_1 === 0) {
                                    resolve(values_1);
                                }
                            }, reject);
                        }
                    });
                    pending_1--;
                    if (pending_1 === 0) {
                        resolve(values_1);
                    }
                }
                catch (e) {
                    reject(e);
                }
            }, additionalArgs);
        };
    }
    function syncItemProcessor(pending) {
        arrForEach(pending, function (fn) {
            try {
                fn();
            }
            catch (e) {
            }
        });
    }
    function timeoutItemProcessor(timeout) {
        var callbackTimeout = isNumber(timeout) ? timeout : 0;
        return function (pending) {
            scheduleTimeout(function () {
                syncItemProcessor(pending);
            }, callbackTimeout);
        };
    }
    function createAsyncPromise(executor, timeout) {
        return _createPromise(createAsyncPromise, timeoutItemProcessor(timeout), executor, timeout);
    }
    var _promiseCls;
    function createNativePromise(executor, timeout) {
        !_promiseCls && (_promiseCls = createCachedValue((safe(getInst, [STR_PROMISE]).v) || null));
        var PrmCls = _promiseCls.v;
        if (!PrmCls) {
            return createAsyncPromise(executor);
        }
        if (!isFunction(executor)) {
            throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpObj(executor));
        }
        var _state = 0 ;
        function _strState() {
            return STRING_STATES[_state];
        }
        var thePromise = new PrmCls(function (resolve, reject) {
            function _resolve(value) {
                _state = 2 ;
                resolve(value);
            }
            function _reject(reason) {
                _state = 3 ;
                reject(reason);
            }
            executor(_resolve, _reject);
        });
        objDefineProp(thePromise, "state", {
            get: _strState
        });
        return thePromise;
    }
    var _promiseCreator;
    function createPromise(executor, timeout) {
        !_promiseCreator && (_promiseCreator = createCachedValue(createNativePromise));
        return _promiseCreator.v.call(this, executor, timeout);
    }
    var createAllPromise = /*#__PURE__*/ _createAllPromise(createPromise);

    var UNDEFINED_VALUE = undefined;
    var STR_EMPTY$2 = "";
    var STR_CHANNELS = "channels";
    var STR_CORE = "core";
    var STR_CREATE_PERF_MGR = "createPerfMgr";
    var STR_DISABLED = "disabled";
    var STR_EXTENSION_CONFIG = "extensionConfig";
    var STR_EXTENSIONS = "extensions";
    var STR_PROCESS_TELEMETRY = "processTelemetry";
    var STR_PRIORITY = "priority";
    var STR_EVENTS_SENT = "eventsSent";
    var STR_EVENTS_DISCARDED = "eventsDiscarded";
    var STR_EVENTS_SEND_REQUEST = "eventsSendRequest";
    var STR_PERF_EVENT = "perfEvent";
    var STR_OFFLINE_STORE = "offlineEventsStored";
    var STR_OFFLINE_SENT = "offlineBatchSent";
    var STR_OFFLINE_DROP = "offlineBatchDrop";
    var STR_GET_PERF_MGR = "getPerfMgr";
    var STR_DOMAIN = "domain";
    var STR_PATH = "path";
    var STR_NOT_DYNAMIC_ERROR = "Not dynamic - ";

    var rCamelCase = /-([a-z])/g;
    var rNormalizeInvalid = /([^\w\d_$])/g;
    var rLeadingNumeric = /^(\d+[\w\d_$])/;
    function isNotNullOrUndefined(value) {
        return !isNullOrUndefined(value);
    }
    function normalizeJsName(name) {
        var value = name;
        if (value && isString(value)) {
            value = value[_DYN_REPLACE ](rCamelCase, function (_all, letter) {
                return letter.toUpperCase();
            });
            value = value[_DYN_REPLACE ](rNormalizeInvalid, "_");
            value = value[_DYN_REPLACE ](rLeadingNumeric, function (_all, match) {
                return "_" + match;
            });
        }
        return value;
    }
    function strContains(value, search) {
        if (value && search) {
            return strIndexOf(value, search) !== -1;
        }
        return false;
    }
    function toISOString(date) {
        return date && date.toISOString() || "";
    }
    function getExceptionName(object) {
        if (isError(object)) {
            return object[_DYN_NAME ];
        }
        return STR_EMPTY$2;
    }
    function setValue(target, field, value, valChk, srcChk) {
        var theValue = value;
        if (target) {
            theValue = target[field];
            if (theValue !== value && (!srcChk || srcChk(theValue)) && (!valChk || valChk(value))) {
                theValue = value;
                target[field] = theValue;
            }
        }
        return theValue;
    }
    function getSetValue(target, field, defValue) {
        var theValue;
        if (target) {
            theValue = target[field];
            if (!theValue && isNullOrUndefined(theValue)) {
                theValue = !isUndefined(defValue) ? defValue : {};
                target[field] = theValue;
            }
        }
        else {
            theValue = !isUndefined(defValue) ? defValue : {};
        }
        return theValue;
    }
    function _createProxyFunction(source, funcName) {
        var srcFunc = null;
        var src = null;
        if (isFunction(source)) {
            srcFunc = source;
        }
        else {
            src = source;
        }
        return function () {
            var originalArguments = arguments;
            if (srcFunc) {
                src = srcFunc();
            }
            if (src) {
                return src[funcName][_DYN_APPLY ](src, originalArguments);
            }
        };
    }
    function proxyAssign(target, source, chkSet) {
        if (target && source && isObject(target) && isObject(source)) {
            var _loop_1 = function (field) {
                if (isString(field)) {
                    var value = source[field];
                    if (isFunction(value)) {
                        if (!chkSet || chkSet(field, true, source, target)) {
                            target[field] = _createProxyFunction(source, field);
                        }
                    }
                    else if (!chkSet || chkSet(field, false, source, target)) {
                        if (objHasOwn(target, field)) {
                            delete target[field];
                        }
                        objDefine(target, field, {
                            g: function () {
                                return source[field];
                            },
                            s: function (theValue) {
                                source[field] = theValue;
                            }
                        });
                    }
                }
            };
            for (var field in source) {
                _loop_1(field);
            }
        }
        return target;
    }
    function proxyFunctionAs(target, name, source, theFunc, overwriteTarget) {
        if (target && name && source) {
            if (overwriteTarget !== false || isUndefined(target[name])) {
                target[name] = _createProxyFunction(source, theFunc);
            }
        }
    }
    function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
        if (target && source && isObject(target) && isArray(functionsToProxy)) {
            arrForEach(functionsToProxy, function (theFuncName) {
                if (isString(theFuncName)) {
                    proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
                }
            });
        }
        return target;
    }
    function optimizeObject(theObject) {
        if (theObject && objAssign) {
            theObject = ObjClass$1(objAssign({}, theObject));
        }
        return theObject;
    }
    function getResponseText(xhr) {
        try {
            return xhr.responseText;
        }
        catch (e) {
        }
        return null;
    }
    function formatErrorMessageXdr(xdr, message) {
        if (xdr) {
            return "XDomainRequest,Response:" + getResponseText(xdr) || 0;
        }
        return message;
    }
    function formatErrorMessageXhr(xhr, message) {
        if (xhr) {
            return "XMLHttpRequest,Status:" + xhr[_DYN_STATUS ] + ",Response:" + getResponseText(xhr) || 0 || 0;
        }
        return message;
    }
    function prependTransports(theTransports, newTransports) {
        if (newTransports) {
            if (isNumber(newTransports)) {
                theTransports = [newTransports].concat(theTransports);
            }
            else if (isArray(newTransports)) {
                theTransports = newTransports.concat(theTransports);
            }
        }
        return theTransports;
    }
    var strDisabledPropertyName$1 = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var strWithCredentials$1 = "withCredentials";
    var strTimeout$1 = "timeout";
    function openXhr$1(method, urlString, withCredentials, disabled, isSync, timeout) {
        if (disabled === void 0) { disabled = false; }
        if (isSync === void 0) { isSync = false; }
        function _wrapSetXhrProp(xhr, prop, value) {
            try {
                xhr[prop] = value;
            }
            catch (e) {
            }
        }
        var xhr = new XMLHttpRequest();
        if (disabled) {
            _wrapSetXhrProp(xhr, strDisabledPropertyName$1, disabled);
        }
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials$1, withCredentials);
        }
        xhr.open(method, urlString, !isSync);
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials$1, withCredentials);
        }
        if (!isSync && timeout) {
            _wrapSetXhrProp(xhr, strTimeout$1, timeout);
        }
        return xhr;
    }
    function convertAllHeadersToMap(headersString) {
        var headers = {};
        if (isString(headersString)) {
            var headersArray = strTrim(headersString)[_DYN_SPLIT ](/[\r\n]+/);
            arrForEach(headersArray, function (headerEntry) {
                if (headerEntry) {
                    var idx = headerEntry.indexOf(": ");
                    if (idx !== -1) {
                        var header = strTrim(headerEntry.substring(0, idx))[_DYN_TO_LOWER_CASE ]();
                        var value = strTrim(headerEntry.substring(idx + 1));
                        headers[header] = value;
                    }
                    else {
                        headers[strTrim(headerEntry)] = 1;
                    }
                }
            });
        }
        return headers;
    }
    function _appendHeader(theHeaders, xhr, name) {
        if (!theHeaders[name] && xhr && xhr[_DYN_GET_RESPONSE_HEADER ]) {
            var value = xhr[_DYN_GET_RESPONSE_HEADER ](name);
            if (value) {
                theHeaders[name] = strTrim(value);
            }
        }
        return theHeaders;
    }
    var STR_KILL_DURATION_HEADER = "kill-duration";
    var STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
    var STR_TIME_DELTA_HEADER = "time-delta-millis";
    function _getAllResponseHeaders(xhr, isOneDs) {
        var theHeaders = {};
        if (!xhr[_DYN_GET_ALL_RESPONSE_HEA5 ]) {
            if (!!isOneDs) {
                theHeaders = _appendHeader(theHeaders, xhr, STR_TIME_DELTA_HEADER);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_HEADER);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_SECONDS_HEADER);
            }
        }
        else {
            theHeaders = convertAllHeadersToMap(xhr[_DYN_GET_ALL_RESPONSE_HEA5 ]());
        }
        return theHeaders;
    }

    var strDocumentMode = "documentMode";
    var strLocation = "location";
    var strConsole = "console";
    var strJSON = "JSON";
    var strCrypto = "crypto";
    var strMsCrypto = "msCrypto";
    var strReactNative = "ReactNative";
    var strMsie = "msie";
    var strTrident = "trident/";
    var strXMLHttpRequest = "XMLHttpRequest";
    var _isTrident = null;
    var _navUserAgentCheck = null;
    var _enableMocks = false;
    var _useXDomainRequest = null;
    var _beaconsSupported = null;
    function _hasProperty(theClass, property) {
        var supported = false;
        if (theClass) {
            try {
                supported = property in theClass;
                if (!supported) {
                    var proto = theClass[strShimPrototype];
                    if (proto) {
                        supported = property in proto;
                    }
                }
            }
            catch (e) {
            }
            if (!supported) {
                try {
                    var tmp = new theClass();
                    supported = !isUndefined(tmp[property]);
                }
                catch (e) {
                }
            }
        }
        return supported;
    }
    function setEnableEnvMocks(enabled) {
        _enableMocks = enabled;
    }
    function getLocation(checkForMock) {
        if (checkForMock && _enableMocks) {
            var mockLocation = getInst("__mockLocation");
            if (mockLocation) {
                return mockLocation;
            }
        }
        if (typeof location === strShimObject && location) {
            return location;
        }
        return getInst(strLocation);
    }
    function getConsole() {
        if (typeof console !== strShimUndefined) {
            return console;
        }
        return getInst(strConsole);
    }
    function hasJSON() {
        return Boolean((typeof JSON === strShimObject && JSON) || getInst(strJSON) !== null);
    }
    function getJSON() {
        if (hasJSON()) {
            return JSON || getInst(strJSON);
        }
        return null;
    }
    function getCrypto() {
        return getInst(strCrypto);
    }
    function getMsCrypto() {
        return getInst(strMsCrypto);
    }
    function isReactNative() {
        var nav = getNavigator();
        if (nav && nav.product) {
            return nav.product === strReactNative;
        }
        return false;
    }
    function isIE() {
        var nav = getNavigator();
        if (nav && (nav[_DYN_USER_AGENT ] !== _navUserAgentCheck || _isTrident === null)) {
            _navUserAgentCheck = nav[_DYN_USER_AGENT ];
            var userAgent = (_navUserAgentCheck || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ]();
            _isTrident = (strContains(userAgent, strMsie) || strContains(userAgent, strTrident));
        }
        return _isTrident;
    }
    function getIEVersion(userAgentStr) {
        if (userAgentStr === void 0) { userAgentStr = null; }
        if (!userAgentStr) {
            var navigator_1 = getNavigator() || {};
            userAgentStr = navigator_1 ? (navigator_1.userAgent || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ]() : STR_EMPTY$2;
        }
        var ua = (userAgentStr || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ]();
        if (strContains(ua, strMsie)) {
            var doc = getDocument() || {};
            return Math.max(parseInt(ua[_DYN_SPLIT ](strMsie)[1]), (doc[strDocumentMode] || 0));
        }
        else if (strContains(ua, strTrident)) {
            var tridentVer = parseInt(ua[_DYN_SPLIT ](strTrident)[1]);
            if (tridentVer) {
                return tridentVer + 4;
            }
        }
        return null;
    }
    function isBeaconsSupported(useCached) {
        if (_beaconsSupported === null || useCached === false) {
            _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
        }
        return _beaconsSupported;
    }
    function isFetchSupported(withKeepAlive) {
        var isSupported = false;
        try {
            isSupported = !!getInst("fetch");
            var request = getInst("Request");
            if (isSupported && withKeepAlive && request) {
                isSupported = _hasProperty(request, "keepalive");
            }
        }
        catch (e) {
        }
        return isSupported;
    }
    function useXDomainRequest() {
        if (_useXDomainRequest === null) {
            _useXDomainRequest = (typeof XDomainRequest !== strShimUndefined);
            if (_useXDomainRequest && isXhrSupported()) {
                _useXDomainRequest = _useXDomainRequest && !_hasProperty(getInst(strXMLHttpRequest), "withCredentials");
            }
        }
        return _useXDomainRequest;
    }
    function isXhrSupported() {
        var isSupported = false;
        try {
            var xmlHttpRequest = getInst(strXMLHttpRequest);
            isSupported = !!xmlHttpRequest;
        }
        catch (e) {
        }
        return isSupported;
    }
    function _getNamedValue(values, name) {
        if (values) {
            for (var i = 0; i < values[_DYN_LENGTH$1 ]; i++) {
                var value = values[i];
                if (value[_DYN_NAME ]) {
                    if (value[_DYN_NAME ] === name) {
                        return value;
                    }
                }
            }
        }
        return {};
    }
    function findMetaTag(name) {
        var doc = getDocument();
        if (doc && name) {
            return _getNamedValue(doc.querySelectorAll("meta"), name).content;
        }
        return null;
    }
    function findNamedServerTiming(name) {
        var value;
        var perf = getPerformance();
        if (perf) {
            var navPerf = perf.getEntriesByType("navigation") || [];
            value = _getNamedValue((navPerf[_DYN_LENGTH$1 ] > 0 ? navPerf[0] : {}).serverTiming, name).description;
        }
        return value;
    }

    var UInt32Mask = 0x100000000;
    var MaxUInt32 = 0xffffffff;
    var SEED1 = 123456789;
    var SEED2 = 987654321;
    var _mwcSeeded = false;
    var _mwcW = SEED1;
    var _mwcZ = SEED2;
    function _mwcSeed(seedValue) {
        if (seedValue < 0) {
            seedValue >>>= 0;
        }
        _mwcW = (SEED1 + seedValue) & MaxUInt32;
        _mwcZ = (SEED2 - seedValue) & MaxUInt32;
        _mwcSeeded = true;
    }
    function _autoSeedMwc() {
        try {
            var now = utcNow() & 0x7fffffff;
            _mwcSeed(((Math.random() * UInt32Mask) ^ now) + now);
        }
        catch (e) {
        }
    }
    function randomValue(maxValue) {
        if (maxValue > 0) {
            return Math.floor((random32() / MaxUInt32) * (maxValue + 1)) >>> 0;
        }
        return 0;
    }
    function random32(signed) {
        var value = 0;
        var c = getCrypto() || getMsCrypto();
        if (c && c.getRandomValues) {
            value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
        }
        if (value === 0 && isIE()) {
            if (!_mwcSeeded) {
                _autoSeedMwc();
            }
            value = mwcRandom32() & MaxUInt32;
        }
        if (value === 0) {
            value = Math.floor((UInt32Mask * Math.random()) | 0);
        }
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function mwcRandom32(signed) {
        _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
        _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
        var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function newId(maxLength) {
        if (maxLength === void 0) { maxLength = 22; }
        var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var number = random32() >>> 0;
        var chars = 0;
        var result = STR_EMPTY$2;
        while (result[_DYN_LENGTH$1 ] < maxLength) {
            chars++;
            result += base64chars.charAt(number & 0x3F);
            number >>>= 6;
            if (chars === 5) {
                number = (((random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
                chars = 0;
            }
        }
        return result;
    }

    var version = '3.2.2';
    var instanceName = "." + newId(6);
    var _dataUid = 0;
    function _canAcceptData(target) {
        return target[_DYN_NODE_TYPE ] === 1 || target[_DYN_NODE_TYPE ] === 9 || !(+target[_DYN_NODE_TYPE ]);
    }
    function _getCache(data, target) {
        var theCache = target[data.id];
        if (!theCache) {
            theCache = {};
            try {
                if (_canAcceptData(target)) {
                    objDefine(target, data.id, {
                        e: false,
                        v: theCache
                    });
                }
            }
            catch (e) {
            }
        }
        return theCache;
    }
    function createUniqueNamespace(name, includeVersion) {
        if (includeVersion === void 0) { includeVersion = false; }
        return normalizeJsName(name + (_dataUid++) + (includeVersion ? "." + version : STR_EMPTY$2) + instanceName);
    }
    function createElmNodeData(name) {
        var data = {
            id: createUniqueNamespace("_aiData-" + (name || STR_EMPTY$2) + "." + version),
            accept: function (target) {
                return _canAcceptData(target);
            },
            get: function (target, name, defValue, addDefault) {
                var theCache = target[data.id];
                if (!theCache) {
                    if (addDefault) {
                        theCache = _getCache(data, target);
                        theCache[normalizeJsName(name)] = defValue;
                    }
                    return defValue;
                }
                return theCache[normalizeJsName(name)];
            },
            kill: function (target, name) {
                if (target && target[name]) {
                    try {
                        delete target[name];
                    }
                    catch (e) {
                    }
                }
            }
        };
        return data;
    }

    function _isConfigDefaults(value) {
        return (value && isObject(value) && (value.isVal || value.fb || objHasOwn(value, "v") || objHasOwn(value, "mrg") || objHasOwn(value, "ref") || value.set));
    }
    function _getDefault(dynamicHandler, theConfig, cfgDefaults) {
        var defValue;
        var isDefaultValid = cfgDefaults.dfVal || isDefined;
        if (theConfig && cfgDefaults.fb) {
            var fallbacks = cfgDefaults.fb;
            if (!isArray(fallbacks)) {
                fallbacks = [fallbacks];
            }
            for (var lp = 0; lp < fallbacks[_DYN_LENGTH$1 ]; lp++) {
                var fallback = fallbacks[lp];
                var fbValue = theConfig[fallback];
                if (isDefaultValid(fbValue)) {
                    defValue = fbValue;
                }
                else if (dynamicHandler) {
                    fbValue = dynamicHandler.cfg[fallback];
                    if (isDefaultValid(fbValue)) {
                        defValue = fbValue;
                    }
                    dynamicHandler.set(dynamicHandler.cfg, asString(fallback), fbValue);
                }
                if (isDefaultValid(defValue)) {
                    break;
                }
            }
        }
        if (!isDefaultValid(defValue) && isDefaultValid(cfgDefaults.v)) {
            defValue = cfgDefaults.v;
        }
        return defValue;
    }
    function _resolveDefaultValue(dynamicHandler, theConfig, cfgDefaults) {
        var theValue = cfgDefaults;
        if (cfgDefaults && _isConfigDefaults(cfgDefaults)) {
            theValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        if (theValue) {
            if (_isConfigDefaults(theValue)) {
                theValue = _resolveDefaultValue(dynamicHandler, theConfig, theValue);
            }
            var newValue_1;
            if (isArray(theValue)) {
                newValue_1 = [];
                newValue_1[_DYN_LENGTH$1 ] = theValue[_DYN_LENGTH$1 ];
            }
            else if (isPlainObject(theValue)) {
                newValue_1 = {};
            }
            if (newValue_1) {
                objForEachKey(theValue, function (key, value) {
                    if (value && _isConfigDefaults(value)) {
                        value = _resolveDefaultValue(dynamicHandler, theConfig, value);
                    }
                    newValue_1[key] = value;
                });
                theValue = newValue_1;
            }
        }
        return theValue;
    }
    function _applyDefaultValue(dynamicHandler, theConfig, name, defaultValue) {
        var isValid;
        var setFn;
        var defValue;
        var cfgDefaults = defaultValue;
        var mergeDf;
        var reference;
        var readOnly;
        var blkDynamicValue;
        if (_isConfigDefaults(cfgDefaults)) {
            isValid = cfgDefaults.isVal;
            setFn = cfgDefaults.set;
            readOnly = cfgDefaults[_DYN_RD_ONLY ];
            blkDynamicValue = cfgDefaults[_DYN_BLK_VAL ];
            mergeDf = cfgDefaults.mrg;
            reference = cfgDefaults.ref;
            if (!reference && isUndefined(reference)) {
                reference = !!mergeDf;
            }
            defValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        else {
            defValue = defaultValue;
        }
        if (blkDynamicValue) {
            dynamicHandler[_DYN_BLK_VAL ](theConfig, name);
        }
        var theValue;
        var usingDefault = true;
        var cfgValue = theConfig[name];
        if (cfgValue || !isNullOrUndefined(cfgValue)) {
            theValue = cfgValue;
            usingDefault = false;
            if (isValid && theValue !== defValue && !isValid(theValue)) {
                theValue = defValue;
                usingDefault = true;
            }
            if (setFn) {
                theValue = setFn(theValue, defValue, theConfig);
                usingDefault = theValue === defValue;
            }
        }
        if (!usingDefault) {
            if (isPlainObject(theValue) || isArray(defValue)) {
                if (mergeDf && defValue && (isPlainObject(defValue) || isArray(defValue))) {
                    objForEachKey(defValue, function (dfName, dfValue) {
                        _applyDefaultValue(dynamicHandler, theValue, dfName, dfValue);
                    });
                }
            }
        }
        else if (defValue) {
            theValue = _resolveDefaultValue(dynamicHandler, theConfig, defValue);
        }
        else {
            theValue = defValue;
        }
        dynamicHandler.set(theConfig, name, theValue);
        if (reference) {
            dynamicHandler.ref(theConfig, name);
        }
        if (readOnly) {
            dynamicHandler[_DYN_RD_ONLY ](theConfig, name);
        }
    }

    var CFG_HANDLER_LINK = symbolFor("[[ai_dynCfg_1]]");
    var BLOCK_DYNAMIC = symbolFor("[[ai_blkDynCfg_1]]");
    var FORCE_DYNAMIC = symbolFor("[[ai_frcDynCfg_1]]");
    function _cfgDeepCopy(source) {
        if (source) {
            var target_1;
            if (isArray(source)) {
                target_1 = [];
                target_1[_DYN_LENGTH$1 ] = source[_DYN_LENGTH$1 ];
            }
            else if (isPlainObject(source)) {
                target_1 = {};
            }
            if (target_1) {
                objForEachKey(source, function (key, value) {
                    target_1[key] = _cfgDeepCopy(value);
                });
                return target_1;
            }
        }
        return source;
    }
    function getDynamicConfigHandler(value) {
        if (value) {
            var handler = value[CFG_HANDLER_LINK] || value;
            if (handler.cfg && (handler.cfg === value || handler.cfg[CFG_HANDLER_LINK] === handler)) {
                return handler;
            }
        }
        return null;
    }
    function blockDynamicConversion(value) {
        if (value && (isPlainObject(value) || isArray(value))) {
            try {
                value[BLOCK_DYNAMIC] = true;
            }
            catch (e) {
            }
        }
        return value;
    }
    function forceDynamicConversion(value) {
        if (value) {
            try {
                value[FORCE_DYNAMIC] = true;
            }
            catch (e) {
            }
        }
        return value;
    }
    function _canMakeDynamic(getFunc, state, value) {
        var result = false;
        if (value && !getFunc[state.blkVal]) {
            result = value[FORCE_DYNAMIC];
            if (!result && !value[BLOCK_DYNAMIC]) {
                result = isPlainObject(value) || isArray(value);
            }
        }
        return result;
    }
    function throwInvalidAccess(message) {
        throwTypeError("InvalidAccess:" + message);
    }

    var arrayMethodsToPatch = [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ];
    var _throwDynamicError = function (logger, name, desc, e) {
        logger && logger[_DYN_THROW_INTERNAL ](3 , 108 , "".concat(desc, " [").concat(name, "] failed - ") + dumpObj(e));
    };
    function _patchArray(state, target, name) {
        if (isArray(target)) {
            arrForEach(arrayMethodsToPatch, function (method) {
                var orgMethod = target[method];
                target[method] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = orgMethod[_DYN_APPLY ](this, args);
                    _makeDynamicObject(state, target, name, "Patching");
                    return result;
                };
            });
        }
    }
    function _getOwnPropGetter(target, name) {
        var propDesc = objGetOwnPropertyDescriptor(target, name);
        return propDesc && propDesc.get;
    }
    function _createDynamicProperty(state, theConfig, name, value) {
        var detail = {
            n: name,
            h: [],
            trk: function (handler) {
                if (handler && handler.fn) {
                    if (arrIndexOf(detail.h, handler) === -1) {
                        detail.h[_DYN_PUSH ](handler);
                    }
                    state.trk(handler, detail);
                }
            },
            clr: function (handler) {
                var idx = arrIndexOf(detail.h, handler);
                if (idx !== -1) {
                    detail.h[_DYN_SPLICE ](idx, 1);
                }
            }
        };
        var checkDynamic = true;
        var isObjectOrArray = false;
        function _getProperty() {
            if (checkDynamic) {
                isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                if (value && !value[CFG_HANDLER_LINK] && isObjectOrArray) {
                    value = _makeDynamicObject(state, value, name, "Converting");
                }
                checkDynamic = false;
            }
            var activeHandler = state.act;
            if (activeHandler) {
                detail.trk(activeHandler);
            }
            return value;
        }
        _getProperty[state.prop] = {
            chng: function () {
                state.add(detail);
            }
        };
        function _setProperty(newValue) {
            if (value !== newValue) {
                if (!!_getProperty[state.ro] && !state.upd) {
                    throwInvalidAccess("[" + name + "] is read-only:" + dumpObj(theConfig));
                }
                if (checkDynamic) {
                    isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                    checkDynamic = false;
                }
                var isReferenced = isObjectOrArray && _getProperty[state.rf];
                if (isObjectOrArray) {
                    if (isReferenced) {
                        objForEachKey(value, function (key) {
                            value[key] = newValue ? newValue[key] : UNDEFINED_VALUE;
                        });
                        try {
                            objForEachKey(newValue, function (key, theValue) {
                                _setDynamicProperty(state, value, key, theValue);
                            });
                            newValue = value;
                        }
                        catch (e) {
                            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, "Assigning", e);
                            isObjectOrArray = false;
                        }
                    }
                    else if (value && value[CFG_HANDLER_LINK]) {
                        objForEachKey(value, function (key) {
                            var getter = _getOwnPropGetter(value, key);
                            if (getter) {
                                var valueState = getter[state.prop];
                                valueState && valueState.chng();
                            }
                        });
                    }
                }
                if (newValue !== value) {
                    var newIsObjectOrArray = newValue && _canMakeDynamic(_getProperty, state, newValue);
                    if (!isReferenced && newIsObjectOrArray) {
                        newValue = _makeDynamicObject(state, newValue, name, "Converting");
                    }
                    value = newValue;
                    isObjectOrArray = newIsObjectOrArray;
                }
                state.add(detail);
            }
        }
        objDefine(theConfig, detail.n, { g: _getProperty, s: _setProperty });
    }
    function _setDynamicProperty(state, target, name, value) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            if (!isDynamic) {
                _createDynamicProperty(state, target, name, value);
            }
            else {
                target[name] = value;
            }
        }
        return target;
    }
    function _setDynamicPropertyState(state, target, name, flags) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            var inPlace = flags && flags[0 ];
            var rdOnly = flags && flags[1 ];
            var blkProp = flags && flags[2 ];
            if (!isDynamic) {
                if (blkProp) {
                    try {
                        blockDynamicConversion(target);
                    }
                    catch (e) {
                        _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, "Blocking", e);
                    }
                }
                try {
                    _setDynamicProperty(state, target, name, target[name]);
                    getter = _getOwnPropGetter(target, name);
                }
                catch (e) {
                    _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, "State", e);
                }
            }
            if (inPlace) {
                getter[state.rf] = inPlace;
            }
            if (rdOnly) {
                getter[state.ro] = rdOnly;
            }
            if (blkProp) {
                getter[state.blkVal] = true;
            }
        }
        return target;
    }
    function _makeDynamicObject(state, target, name, desc) {
        try {
            objForEachKey(target, function (key, value) {
                _setDynamicProperty(state, target, key, value);
            });
            if (!target[CFG_HANDLER_LINK]) {
                objDefineProp(target, CFG_HANDLER_LINK, {
                    get: function () {
                        return state[_DYN_HDLR ];
                    }
                });
                _patchArray(state, target, name);
            }
        }
        catch (e) {
            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, desc, e);
        }
        return target;
    }

    var symPrefix = "[[ai_";
    var symPostfix = "]]";
    function _createState(cfgHandler) {
        var _a;
        var dynamicPropertySymbol = newSymbol(symPrefix + "get" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReadOnly = newSymbol(symPrefix + "ro" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReferenced = newSymbol(symPrefix + "rf" + cfgHandler.uid + symPostfix);
        var dynamicPropertyBlockValue = newSymbol(symPrefix + "blkVal" + cfgHandler.uid + symPostfix);
        var dynamicPropertyDetail = newSymbol(symPrefix + "dtl" + cfgHandler.uid + symPostfix);
        var _waitingHandlers = null;
        var _watcherTimer = null;
        var theState;
        function _useHandler(activeHandler, callback) {
            var prevWatcher = theState.act;
            try {
                theState.act = activeHandler;
                if (activeHandler && activeHandler[dynamicPropertyDetail]) {
                    arrForEach(activeHandler[dynamicPropertyDetail], function (detail) {
                        detail.clr(activeHandler);
                    });
                    activeHandler[dynamicPropertyDetail] = [];
                }
                callback({
                    cfg: cfgHandler.cfg,
                    set: cfgHandler.set.bind(cfgHandler),
                    setDf: cfgHandler[_DYN_SET_DF ].bind(cfgHandler),
                    ref: cfgHandler.ref.bind(cfgHandler),
                    rdOnly: cfgHandler[_DYN_RD_ONLY ].bind(cfgHandler)
                });
            }
            catch (e) {
                var logger = cfgHandler[_DYN_LOGGER$1 ];
                if (logger) {
                    logger[_DYN_THROW_INTERNAL ](1 , 107 , dumpObj(e));
                }
                throw e;
            }
            finally {
                theState.act = prevWatcher || null;
            }
        }
        function _notifyWatchers() {
            if (_waitingHandlers) {
                var notifyHandlers = _waitingHandlers;
                _waitingHandlers = null;
                _watcherTimer && _watcherTimer[_DYN_CANCEL ]();
                _watcherTimer = null;
                var watcherFailures_1 = [];
                arrForEach(notifyHandlers, function (handler) {
                    if (handler) {
                        if (handler[dynamicPropertyDetail]) {
                            arrForEach(handler[dynamicPropertyDetail], function (detail) {
                                detail.clr(handler);
                            });
                            handler[dynamicPropertyDetail] = null;
                        }
                        if (handler.fn) {
                            try {
                                _useHandler(handler, handler.fn);
                            }
                            catch (e) {
                                watcherFailures_1[_DYN_PUSH ](e);
                            }
                        }
                    }
                });
                if (_waitingHandlers) {
                    try {
                        _notifyWatchers();
                    }
                    catch (e) {
                        watcherFailures_1[_DYN_PUSH ](e);
                    }
                }
                if (watcherFailures_1[_DYN_LENGTH$1 ] > 0) {
                    throwAggregationError("Watcher error(s): ", watcherFailures_1);
                }
            }
        }
        function _addWatcher(detail) {
            if (detail && detail.h[_DYN_LENGTH$1 ] > 0) {
                if (!_waitingHandlers) {
                    _waitingHandlers = [];
                }
                if (!_watcherTimer) {
                    _watcherTimer = scheduleTimeout(function () {
                        _watcherTimer = null;
                        _notifyWatchers();
                    }, 0);
                }
                for (var idx = 0; idx < detail.h[_DYN_LENGTH$1 ]; idx++) {
                    var handler = detail.h[idx];
                    if (handler && arrIndexOf(_waitingHandlers, handler) === -1) {
                        _waitingHandlers[_DYN_PUSH ](handler);
                    }
                }
            }
        }
        function _trackHandler(handler, detail) {
            if (handler) {
                var details = handler[dynamicPropertyDetail] = handler[dynamicPropertyDetail] || [];
                if (arrIndexOf(details, detail) === -1) {
                    details[_DYN_PUSH ](detail);
                }
            }
        }
        theState = (_a = {
                prop: dynamicPropertySymbol,
                ro: dynamicPropertyReadOnly,
                rf: dynamicPropertyReferenced
            },
            _a[_DYN_BLK_VAL ] = dynamicPropertyBlockValue,
            _a[_DYN_HDLR ] = cfgHandler,
            _a.add = _addWatcher,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.use = _useHandler,
            _a.trk = _trackHandler,
            _a);
        return theState;
    }

    function _createAndUseHandler(state, configHandler) {
        var handler = {
            fn: configHandler,
            rm: function () {
                handler.fn = null;
                state = null;
                configHandler = null;
            }
        };
        objDefine(handler, "toJSON", { v: function () { return "WatcherHandler" + (handler.fn ? "" : "[X]"); } });
        state.use(handler, configHandler);
        return handler;
    }
    function _createDynamicHandler(logger, target, inPlace) {
        var _a;
        var dynamicHandler = getDynamicConfigHandler(target);
        if (dynamicHandler) {
            return dynamicHandler;
        }
        var uid = createUniqueNamespace("dyncfg", true);
        var newTarget = (target && inPlace !== false) ? target : _cfgDeepCopy(target);
        var theState;
        function _notifyWatchers() {
            theState[_DYN_NOTIFY ]();
        }
        function _setValue(target, name, value) {
            try {
                target = _setDynamicProperty(theState, target, name, value);
            }
            catch (e) {
                _throwDynamicError(logger, name, "Setting value", e);
            }
            return target[name];
        }
        function _watch(configHandler) {
            return _createAndUseHandler(theState, configHandler);
        }
        function _block(configHandler, allowUpdate) {
            theState.use(null, function (details) {
                var prevUpd = theState.upd;
                try {
                    if (!isUndefined(allowUpdate)) {
                        theState.upd = allowUpdate;
                    }
                    configHandler(details);
                }
                finally {
                    theState.upd = prevUpd;
                }
            });
        }
        function _ref(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[0 ] = true, _a))[name];
        }
        function _rdOnly(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[1 ] = true, _a))[name];
        }
        function _blkPropValue(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[2 ] = true, _a))[name];
        }
        function _applyDefaults(theConfig, defaultValues) {
            if (defaultValues) {
                objForEachKey(defaultValues, function (name, value) {
                    _applyDefaultValue(cfgHandler, theConfig, name, value);
                });
            }
            return theConfig;
        }
        var cfgHandler = (_a = {
                uid: null,
                cfg: newTarget
            },
            _a[_DYN_LOGGER$1 ] = logger,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.set = _setValue,
            _a[_DYN_SET_DF ] = _applyDefaults,
            _a[_DYN_WATCH ] = _watch,
            _a.ref = _ref,
            _a[_DYN_RD_ONLY ] = _rdOnly,
            _a[_DYN_BLK_VAL ] = _blkPropValue,
            _a._block = _block,
            _a);
        objDefine(cfgHandler, "uid", {
            c: false,
            e: false,
            w: false,
            v: uid
        });
        theState = _createState(cfgHandler);
        _makeDynamicObject(theState, newTarget, "config", "Creating");
        return cfgHandler;
    }
    function _logInvalidAccess(logger, message) {
        if (logger) {
            logger[_DYN_WARN_TO_CONSOLE ](message);
            logger[_DYN_THROW_INTERNAL ](2 , 108 , message);
        }
        else {
            throwInvalidAccess(message);
        }
    }
    function createDynamicConfig(config, defaultConfig, logger, inPlace) {
        var dynamicHandler = _createDynamicHandler(logger, config || {}, inPlace);
        if (defaultConfig) {
            dynamicHandler[_DYN_SET_DF ](dynamicHandler.cfg, defaultConfig);
        }
        return dynamicHandler;
    }
    function onConfigChange(config, configHandler, logger) {
        var handler = config[CFG_HANDLER_LINK] || config;
        if (handler.cfg && (handler.cfg === config || handler.cfg[CFG_HANDLER_LINK] === handler)) {
            return handler[_DYN_WATCH ](configHandler);
        }
        _logInvalidAccess(logger, STR_NOT_DYNAMIC_ERROR + dumpObj(config));
        return createDynamicConfig(config, null, logger)[_DYN_WATCH ](configHandler);
    }

    function runTargetUnload(target, isAsync) {
        if (target && target[_DYN_UNLOAD ]) {
            return target[_DYN_UNLOAD ](isAsync);
        }
    }
    function doUnloadAll(targets, isAsync, done) {
        var result;
        if (!done) {
            result = createPromise(function (resolved) {
                done = resolved;
            });
        }
        if (targets && getLength(targets) > 0) {
            doAwaitResponse(runTargetUnload(targets[0], isAsync), function () {
                doUnloadAll(arrSlice(targets, 1), isAsync, done);
            });
        }
        else {
            done();
        }
        return result;
    }

    var ChannelControllerPriority = 500;
    var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";

    function cfgDfMerge(defaultValue) {
        return {
            mrg: true,
            v: defaultValue
        };
    }

    var listenerFuncs = [STR_EVENTS_SENT, STR_EVENTS_DISCARDED, STR_EVENTS_SEND_REQUEST, STR_PERF_EVENT];
    var _aiNamespace = null;
    var _debugListener;
    function _listenerProxyFunc(name, config) {
        return function () {
            var args = arguments;
            var dbgExt = getDebugExt(config);
            if (dbgExt) {
                var listener = dbgExt.listener;
                if (listener && listener[name]) {
                    listener[name][_DYN_APPLY ](listener, args);
                }
            }
        };
    }
    function _getExtensionNamespace() {
        var target = getInst("Microsoft");
        if (target) {
            _aiNamespace = target["ApplicationInsights"];
        }
        return _aiNamespace;
    }
    function getDebugExt(config) {
        var ns = _aiNamespace;
        if (!ns && config.disableDbgExt !== true) {
            ns = _aiNamespace || _getExtensionNamespace();
        }
        return ns ? ns["ChromeDbgExt"] : null;
    }
    function getDebugListener(config) {
        if (!_debugListener) {
            _debugListener = {};
            for (var lp = 0; lp < listenerFuncs[_DYN_LENGTH$1 ]; lp++) {
                _debugListener[listenerFuncs[lp]] = _listenerProxyFunc(listenerFuncs[lp], config);
            }
        }
        return _debugListener;
    }

    var _a$4;
    var STR_WARN_TO_CONSOLE = "warnToConsole";
    var AiNonUserActionablePrefix = "AI (Internal): ";
    var AiUserActionablePrefix = "AI: ";
    var AIInternalMessagePrefix = "AITR_";
    var defaultValues$2 = {
        loggingLevelConsole: 0,
        loggingLevelTelemetry: 1,
        maxMessageLimit: 25,
        enableDebug: false
    };
    var _logFuncs = (_a$4 = {},
        _a$4[0 ] = null,
        _a$4[1 ] = "errorToConsole",
        _a$4[2 ] = STR_WARN_TO_CONSOLE,
        _a$4[3 ] = "debugToConsole",
        _a$4);
    function _sanitizeDiagnosticText(text) {
        if (text) {
            return "\"" + text[_DYN_REPLACE ](/\"/g, STR_EMPTY$2) + "\"";
        }
        return STR_EMPTY$2;
    }
    function _logToConsole(func, message) {
        var theConsole = getConsole();
        if (!!theConsole) {
            var logFunc = "log";
            if (theConsole[func]) {
                logFunc = func;
            }
            if (isFunction(theConsole[logFunc])) {
                theConsole[logFunc](message);
            }
        }
    }
    var _InternalLogMessage = /** @class */ (function () {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) { isUserAct = false; }
            var _self = this;
            _self[_DYN_MESSAGE_ID ] = msgId;
            _self[_DYN_MESSAGE ] =
                (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                    msgId;
            var strProps = STR_EMPTY$2;
            if (hasJSON()) {
                strProps = getJSON().stringify(properties);
            }
            var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY$2) +
                (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY$2);
            _self[_DYN_MESSAGE ] += diagnosticText;
        }
        _InternalLogMessage.dataType = "MessageData";
        return _InternalLogMessage;
    }());
    function safeGetLogger(core, config) {
        return (core || {})[_DYN_LOGGER$1 ] || new DiagnosticLogger(config);
    }
    var DiagnosticLogger = /** @class */ (function () {
        function DiagnosticLogger(config) {
            this.identifier = "DiagnosticLogger";
            this.queue = [];
            var _messageCount = 0;
            var _messageLogged = {};
            var _loggingLevelConsole;
            var _loggingLevelTelemetry;
            var _maxInternalMessageLimit;
            var _enableDebug;
            var _unloadHandler;
            dynamicProto(DiagnosticLogger, this, function (_self) {
                _unloadHandler = _setDefaultsFromConfig(config || {});
                _self.consoleLoggingLevel = function () { return _loggingLevelConsole; };
                _self[_DYN_THROW_INTERNAL ] = function (severity, msgId, msg, properties, isUserAct) {
                    if (isUserAct === void 0) { isUserAct = false; }
                    var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                    if (_enableDebug) {
                        throw dumpObj(message);
                    }
                    else {
                        var logFunc = _logFuncs[severity] || STR_WARN_TO_CONSOLE;
                        if (!isUndefined(message[_DYN_MESSAGE ])) {
                            if (isUserAct) {
                                var messageKey = +message[_DYN_MESSAGE_ID ];
                                if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE ]);
                                    _messageLogged[messageKey] = true;
                                }
                            }
                            else {
                                if (_loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE ]);
                                }
                            }
                            _logInternalMessage(severity, message);
                        }
                        else {
                            _debugExtMsg("throw" + (severity === 1  ? "Critical" : "Warning"), message);
                        }
                    }
                };
                _self.debugToConsole = function (message) {
                    _logToConsole("debug", message);
                    _debugExtMsg("warning", message);
                };
                _self[_DYN_WARN_TO_CONSOLE ] = function (message) {
                    _logToConsole("warn", message);
                    _debugExtMsg("warning", message);
                };
                _self.errorToConsole = function (message) {
                    _logToConsole("error", message);
                    _debugExtMsg("error", message);
                };
                _self.resetInternalMessageCount = function () {
                    _messageCount = 0;
                    _messageLogged = {};
                };
                _self[_DYN_LOG_INTERNAL_MESSAGE ] = _logInternalMessage;
                _self[_DYN_UNLOAD ] = function (isAsync) {
                    _unloadHandler && _unloadHandler.rm();
                    _unloadHandler = null;
                };
                function _logInternalMessage(severity, message) {
                    if (_areInternalMessagesThrottled()) {
                        return;
                    }
                    var logMessage = true;
                    var messageKey = AIInternalMessagePrefix + message[_DYN_MESSAGE_ID ];
                    if (_messageLogged[messageKey]) {
                        logMessage = false;
                    }
                    else {
                        _messageLogged[messageKey] = true;
                    }
                    if (logMessage) {
                        if (severity <= _loggingLevelTelemetry) {
                            _self.queue[_DYN_PUSH ](message);
                            _messageCount++;
                            _debugExtMsg((severity === 1  ? "error" : "warn"), message);
                        }
                        if (_messageCount === _maxInternalMessageLimit) {
                            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                            var throttleMessage = new _InternalLogMessage(23 , throttleLimitMessage, false);
                            _self.queue[_DYN_PUSH ](throttleMessage);
                            if (severity === 1 ) {
                                _self.errorToConsole(throttleLimitMessage);
                            }
                            else {
                                _self[_DYN_WARN_TO_CONSOLE ](throttleLimitMessage);
                            }
                        }
                    }
                }
                function _setDefaultsFromConfig(config) {
                    return onConfigChange(createDynamicConfig(config, defaultValues$2, _self).cfg, function (details) {
                        var config = details.cfg;
                        _loggingLevelConsole = config[_DYN_LOGGING_LEVEL_CONSOL4 ];
                        _loggingLevelTelemetry = config.loggingLevelTelemetry;
                        _maxInternalMessageLimit = config.maxMessageLimit;
                        _enableDebug = config.enableDebug;
                    });
                }
                function _areInternalMessagesThrottled() {
                    return _messageCount >= _maxInternalMessageLimit;
                }
                function _debugExtMsg(name, data) {
                    var dbgExt = getDebugExt(config || {});
                    if (dbgExt && dbgExt[_DYN_DIAG_LOG ]) {
                        dbgExt[_DYN_DIAG_LOG ](name, data);
                    }
                }
            });
        }
        DiagnosticLogger.__ieDyn=1;
        return DiagnosticLogger;
    }());
    function _getLogger(logger) {
        return (logger || new DiagnosticLogger());
    }
    function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
        if (isUserAct === void 0) { isUserAct = false; }
        _getLogger(logger)[_DYN_THROW_INTERNAL ](severity, msgId, msg, properties, isUserAct);
    }
    function _warnToConsole(logger, message) {
        _getLogger(logger)[_DYN_WARN_TO_CONSOLE ](message);
    }
    function _logInternalMessage(logger, severity, message) {
        _getLogger(logger)[_DYN_LOG_INTERNAL_MESSAGE ](severity, message);
    }

    var _a$3, _b;
    var strToGMTString = "toGMTString";
    var strToUTCString = "toUTCString";
    var strCookie = "cookie";
    var strExpires = "expires";
    var strIsCookieUseDisabled = "isCookieUseDisabled";
    var strDisableCookiesUsage = "disableCookiesUsage";
    var strConfigCookieMgr = "_ckMgr";
    var _supportsCookies = null;
    var _allowUaSameSite = null;
    var _parsedCookieValue = null;
    var _doc;
    var _cookieCache = {};
    var _globalCookieConfig = {};
    var rootDefaultConfig = (_a$3 = {
            cookieCfg: cfgDfMerge((_b = {},
                _b[STR_DOMAIN] = { fb: "cookieDomain", dfVal: isNotNullOrUndefined },
                _b.path = { fb: "cookiePath", dfVal: isNotNullOrUndefined },
                _b.enabled = UNDEFINED_VALUE,
                _b.ignoreCookies = UNDEFINED_VALUE,
                _b.blockedCookies = UNDEFINED_VALUE,
                _b)),
            cookieDomain: UNDEFINED_VALUE,
            cookiePath: UNDEFINED_VALUE
        },
        _a$3[strDisableCookiesUsage] = UNDEFINED_VALUE,
        _a$3);
    function _getDoc() {
        !_doc && (_doc = getLazy(function () { return getDocument(); }));
    }
    function _gblCookieMgr(config, logger) {
        var inst = createCookieMgr[strConfigCookieMgr] || _globalCookieConfig[strConfigCookieMgr];
        if (!inst) {
            inst = createCookieMgr[strConfigCookieMgr] = createCookieMgr(config, logger);
            _globalCookieConfig[strConfigCookieMgr] = inst;
        }
        return inst;
    }
    function _isMgrEnabled(cookieMgr) {
        if (cookieMgr) {
            return cookieMgr.isEnabled();
        }
        return true;
    }
    function _isIgnoredCookie(cookieMgrCfg, name) {
        if (name && cookieMgrCfg && isArray(cookieMgrCfg.ignoreCookies)) {
            return arrIndexOf(cookieMgrCfg.ignoreCookies, name) !== -1;
        }
        return false;
    }
    function _isBlockedCookie(cookieMgrCfg, name) {
        if (name && cookieMgrCfg && isArray(cookieMgrCfg.blockedCookies)) {
            if (arrIndexOf(cookieMgrCfg.blockedCookies, name) !== -1) {
                return true;
            }
        }
        return _isIgnoredCookie(cookieMgrCfg, name);
    }
    function _isCfgEnabled(rootConfig, cookieMgrConfig) {
        var isCfgEnabled = cookieMgrConfig[_DYN_ENABLED ];
        if (isNullOrUndefined(isCfgEnabled)) {
            var cookieEnabled = void 0;
            if (!isUndefined(rootConfig[strIsCookieUseDisabled])) {
                cookieEnabled = !rootConfig[strIsCookieUseDisabled];
            }
            if (!isUndefined(rootConfig[strDisableCookiesUsage])) {
                cookieEnabled = !rootConfig[strDisableCookiesUsage];
            }
            isCfgEnabled = cookieEnabled;
        }
        return isCfgEnabled;
    }
    function safeGetCookieMgr(core, config) {
        var cookieMgr;
        if (core) {
            cookieMgr = core.getCookieMgr();
        }
        else if (config) {
            var cookieCfg = config.cookieCfg;
            if (cookieCfg && cookieCfg[strConfigCookieMgr]) {
                cookieMgr = cookieCfg[strConfigCookieMgr];
            }
            else {
                cookieMgr = createCookieMgr(config);
            }
        }
        if (!cookieMgr) {
            cookieMgr = _gblCookieMgr(config, (core || {})[_DYN_LOGGER$1 ]);
        }
        return cookieMgr;
    }
    function createCookieMgr(rootConfig, logger) {
        var _a;
        var cookieMgrConfig;
        var _path;
        var _domain;
        var unloadHandler;
        var _enabled;
        var _getCookieFn;
        var _setCookieFn;
        var _delCookieFn;
        rootConfig = createDynamicConfig(rootConfig || _globalCookieConfig, null, logger).cfg;
        unloadHandler = onConfigChange(rootConfig, function (details) {
            details[_DYN_SET_DF ](details.cfg, rootDefaultConfig);
            cookieMgrConfig = details.ref(details.cfg, "cookieCfg");
            _path = cookieMgrConfig[STR_PATH ] || "/";
            _domain = cookieMgrConfig[STR_DOMAIN ];
            _enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false;
            _getCookieFn = cookieMgrConfig.getCookie || _getCookieValue;
            _setCookieFn = cookieMgrConfig.setCookie || _setCookieValue;
            _delCookieFn = cookieMgrConfig.delCookie || _setCookieValue;
        }, logger);
        var cookieMgr = (_a = {
                isEnabled: function () {
                    var enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false && _enabled && areCookiesSupported(logger);
                    var gblManager = _globalCookieConfig[strConfigCookieMgr];
                    if (enabled && gblManager && cookieMgr !== gblManager) {
                        enabled = _isMgrEnabled(gblManager);
                    }
                    return enabled;
                },
                setEnabled: function (value) {
                    _enabled = value !== false;
                    cookieMgrConfig[_DYN_ENABLED ] = value;
                },
                set: function (name, value, maxAgeSec, domain, path) {
                    var result = false;
                    if (_isMgrEnabled(cookieMgr) && !_isBlockedCookie(cookieMgrConfig, name)) {
                        var values = {};
                        var theValue = strTrim(value || STR_EMPTY$2);
                        var idx = strIndexOf(theValue, ";");
                        if (idx !== -1) {
                            theValue = strTrim(strLeft(value, idx));
                            values = _extractParts(strSubstring(value, idx + 1));
                        }
                        setValue(values, STR_DOMAIN, domain || _domain, isTruthy, isUndefined);
                        if (!isNullOrUndefined(maxAgeSec)) {
                            var _isIE = isIE();
                            if (isUndefined(values[strExpires])) {
                                var nowMs = utcNow();
                                var expireMs = nowMs + (maxAgeSec * 1000);
                                if (expireMs > 0) {
                                    var expiry = new Date();
                                    expiry.setTime(expireMs);
                                    setValue(values, strExpires, _formatDate(expiry, !_isIE ? strToUTCString : strToGMTString) || _formatDate(expiry, _isIE ? strToGMTString : strToUTCString) || STR_EMPTY$2, isTruthy);
                                }
                            }
                            if (!_isIE) {
                                setValue(values, "max-age", STR_EMPTY$2 + maxAgeSec, null, isUndefined);
                            }
                        }
                        var location_1 = getLocation();
                        if (location_1 && location_1[_DYN_PROTOCOL ] === "https:") {
                            setValue(values, "secure", null, null, isUndefined);
                            if (_allowUaSameSite === null) {
                                _allowUaSameSite = !uaDisallowsSameSiteNone((getNavigator() || {})[_DYN_USER_AGENT ]);
                            }
                            if (_allowUaSameSite) {
                                setValue(values, "SameSite", "None", null, isUndefined);
                            }
                        }
                        setValue(values, STR_PATH, path || _path, null, isUndefined);
                        _setCookieFn(name, _formatCookieValue(theValue, values));
                        result = true;
                    }
                    return result;
                },
                get: function (name) {
                    var value = STR_EMPTY$2;
                    if (_isMgrEnabled(cookieMgr) && !_isIgnoredCookie(cookieMgrConfig, name)) {
                        value = _getCookieFn(name);
                    }
                    return value;
                },
                del: function (name, path) {
                    var result = false;
                    if (_isMgrEnabled(cookieMgr)) {
                        result = cookieMgr.purge(name, path);
                    }
                    return result;
                },
                purge: function (name, path) {
                    var _a;
                    var result = false;
                    if (areCookiesSupported(logger)) {
                        var values = (_a = {},
                            _a[STR_PATH] = path ? path : "/",
                            _a[strExpires] = "Thu, 01 Jan 1970 00:00:01 GMT",
                            _a);
                        if (!isIE()) {
                            values["max-age"] = "0";
                        }
                        _delCookieFn(name, _formatCookieValue(STR_EMPTY$2, values));
                        result = true;
                    }
                    return result;
                }
            },
            _a[_DYN_UNLOAD ] = function (isAsync) {
                unloadHandler && unloadHandler.rm();
                unloadHandler = null;
            },
            _a);
        cookieMgr[strConfigCookieMgr] = cookieMgr;
        return cookieMgr;
    }
    function areCookiesSupported(logger) {
        if (_supportsCookies === null) {
            _supportsCookies = false;
            !_doc && _getDoc();
            try {
                var doc = _doc.v || {};
                _supportsCookies = doc[strCookie] !== undefined;
            }
            catch (e) {
                _throwInternal(logger, 2 , 68 , "Cannot access document.cookie - " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return _supportsCookies;
    }
    function _extractParts(theValue) {
        var values = {};
        if (theValue && theValue[_DYN_LENGTH$1 ]) {
            var parts = strTrim(theValue)[_DYN_SPLIT ](";");
            arrForEach(parts, function (thePart) {
                thePart = strTrim(thePart || STR_EMPTY$2);
                if (thePart) {
                    var idx = strIndexOf(thePart, "=");
                    if (idx === -1) {
                        values[thePart] = null;
                    }
                    else {
                        values[strTrim(strLeft(thePart, idx))] = strTrim(strSubstring(thePart, idx + 1));
                    }
                }
            });
        }
        return values;
    }
    function _formatDate(theDate, func) {
        if (isFunction(theDate[func])) {
            return theDate[func]();
        }
        return null;
    }
    function _formatCookieValue(value, values) {
        var cookieValue = value || STR_EMPTY$2;
        objForEachKey(values, function (name, theValue) {
            cookieValue += "; " + name + (!isNullOrUndefined(theValue) ? "=" + theValue : STR_EMPTY$2);
        });
        return cookieValue;
    }
    function _getCookieValue(name) {
        var cookieValue = STR_EMPTY$2;
        !_doc && _getDoc();
        if (_doc.v) {
            var theCookie = _doc.v[strCookie] || STR_EMPTY$2;
            if (_parsedCookieValue !== theCookie) {
                _cookieCache = _extractParts(theCookie);
                _parsedCookieValue = theCookie;
            }
            cookieValue = strTrim(_cookieCache[name] || STR_EMPTY$2);
        }
        return cookieValue;
    }
    function _setCookieValue(name, cookieValue) {
        !_doc && _getDoc();
        if (_doc.v) {
            _doc.v[strCookie] = name + "=" + cookieValue;
        }
    }
    function uaDisallowsSameSiteNone(userAgent) {
        if (!isString(userAgent)) {
            return false;
        }
        if (strContains(userAgent, "CPU iPhone OS 12") || strContains(userAgent, "iPad; CPU OS 12")) {
            return true;
        }
        if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strContains(userAgent, "Version/") && strContains(userAgent, "Safari")) {
            return true;
        }
        if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strEndsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
            return true;
        }
        if (strContains(userAgent, "Chrome/5") || strContains(userAgent, "Chrome/6")) {
            return true;
        }
        if (strContains(userAgent, "UnrealEngine") && !strContains(userAgent, "Chrome")) {
            return true;
        }
        if (strContains(userAgent, "UCBrowser/12") || strContains(userAgent, "UCBrowser/11")) {
            return true;
        }
        return false;
    }

    var defaultValues$1 = {
        perfEvtsSendAll: false
    };
    function _runScheduledListeners(asyncNotifications) {
        asyncNotifications.h = null;
        var callbacks = asyncNotifications.cb;
        asyncNotifications.cb = [];
        arrForEach(callbacks, function (cb) {
            safe(cb.fn, [cb.arg]);
        });
    }
    function _runListeners(listeners, name, asyncNotifications, callback) {
        arrForEach(listeners, function (listener) {
            if (listener && listener[name]) {
                if (asyncNotifications) {
                    asyncNotifications.cb[_DYN_PUSH ]({
                        fn: callback,
                        arg: listener
                    });
                    asyncNotifications.h = asyncNotifications.h || scheduleTimeout(_runScheduledListeners, 0, asyncNotifications);
                }
                else {
                    safe(callback, [listener]);
                }
            }
        });
    }
    var NotificationManager = /** @class */ (function () {
        function NotificationManager(config) {
            this.listeners = [];
            var perfEvtsSendAll;
            var unloadHandler;
            var _listeners = [];
            var _asyncNotifications = {
                h: null,
                cb: []
            };
            var cfgHandler = createDynamicConfig(config, defaultValues$1);
            unloadHandler = cfgHandler[_DYN_WATCH ](function (details) {
                perfEvtsSendAll = !!details.cfg.perfEvtsSendAll;
            });
            dynamicProto(NotificationManager, this, function (_self) {
                objDefine(_self, "listeners", {
                    g: function () { return _listeners; }
                });
                _self[_DYN_ADD_NOTIFICATION_LIS1 ] = function (listener) {
                    _listeners[_DYN_PUSH ](listener);
                };
                _self[_DYN_REMOVE_NOTIFICATION_0 ] = function (listener) {
                    var index = arrIndexOf(_listeners, listener);
                    while (index > -1) {
                        _listeners[_DYN_SPLICE ](index, 1);
                        index = arrIndexOf(_listeners, listener);
                    }
                };
                _self[STR_EVENTS_SENT ] = function (events) {
                    _runListeners(_listeners, STR_EVENTS_SENT, _asyncNotifications, function (listener) {
                        listener[STR_EVENTS_SENT ](events);
                    });
                };
                _self[STR_EVENTS_DISCARDED ] = function (events, reason) {
                    _runListeners(_listeners, STR_EVENTS_DISCARDED, _asyncNotifications, function (listener) {
                        listener[STR_EVENTS_DISCARDED ](events, reason);
                    });
                };
                _self[STR_EVENTS_SEND_REQUEST ] = function (sendReason, isAsync) {
                    _runListeners(_listeners, STR_EVENTS_SEND_REQUEST, isAsync ? _asyncNotifications : null, function (listener) {
                        listener[STR_EVENTS_SEND_REQUEST ](sendReason, isAsync);
                    });
                };
                _self[STR_PERF_EVENT ] = function (perfEvent) {
                    if (perfEvent) {
                        if (perfEvtsSendAll || !perfEvent[_DYN_IS_CHILD_EVT ]()) {
                            _runListeners(_listeners, STR_PERF_EVENT, null, function (listener) {
                                if (perfEvent[_DYN_IS_ASYNC ]) {
                                    scheduleTimeout(function () { return listener[STR_PERF_EVENT ](perfEvent); }, 0);
                                }
                                else {
                                    listener[STR_PERF_EVENT ](perfEvent);
                                }
                            });
                        }
                    }
                };
                _self[STR_OFFLINE_STORE ] = function (events) {
                    if (events && events[_DYN_LENGTH$1 ]) {
                        _runListeners(_listeners, STR_OFFLINE_STORE, _asyncNotifications, function (listener) {
                            listener[STR_OFFLINE_STORE ](events);
                        });
                    }
                };
                _self[STR_OFFLINE_SENT ] = function (batch) {
                    if (batch && batch[_DYN_DATA ]) {
                        _runListeners(_listeners, STR_OFFLINE_SENT, _asyncNotifications, function (listener) {
                            listener[STR_OFFLINE_SENT ](batch);
                        });
                    }
                };
                _self[STR_OFFLINE_DROP ] = function (cnt, reason) {
                    if (cnt > 0) {
                        var rn_1 = reason || 0;
                        _runListeners(_listeners, STR_OFFLINE_DROP, _asyncNotifications, function (listener) {
                            listener[STR_OFFLINE_DROP ](cnt, rn_1);
                        });
                    }
                };
                _self[_DYN_UNLOAD ] = function (isAsync) {
                    var _finishUnload = function () {
                        unloadHandler && unloadHandler.rm();
                        unloadHandler = null;
                        _listeners = [];
                        _asyncNotifications.h && _asyncNotifications.h[_DYN_CANCEL ]();
                        _asyncNotifications.h = null;
                        _asyncNotifications.cb = [];
                    };
                    var waiting;
                    _runListeners(_listeners, "unload", null, function (listener) {
                        var asyncUnload = listener[_DYN_UNLOAD ](isAsync);
                        if (asyncUnload) {
                            if (!waiting) {
                                waiting = [];
                            }
                            waiting[_DYN_PUSH ](asyncUnload);
                        }
                    });
                    if (waiting) {
                        return createPromise(function (resolve) {
                            return doAwaitResponse(createAllPromise(waiting), function () {
                                _finishUnload();
                                resolve();
                            });
                        });
                    }
                    else {
                        _finishUnload();
                    }
                };
            });
        }
        NotificationManager.__ieDyn=1;
        return NotificationManager;
    }());

    var strExecutionContextKey = "ctx";
    var strParentContextKey = "ParentContextKey";
    var strChildrenContextKey = "ChildrenContextKey";
    var _defaultPerfManager = null;
    var PerfEvent = /** @class */ (function () {
        function PerfEvent(name, payloadDetails, isAsync) {
            var _self = this;
            _self.start = utcNow();
            _self[_DYN_NAME ] = name;
            _self[_DYN_IS_ASYNC ] = isAsync;
            _self[_DYN_IS_CHILD_EVT ] = function () { return false; };
            if (isFunction(payloadDetails)) {
                var theDetails_1;
                objDefine(_self, "payload", {
                    g: function () {
                        if (!theDetails_1 && isFunction(payloadDetails)) {
                            theDetails_1 = payloadDetails();
                            payloadDetails = null;
                        }
                        return theDetails_1;
                    }
                });
            }
            _self[_DYN_GET_CTX ] = function (key) {
                if (key) {
                    if (key === PerfEvent[strParentContextKey] || key === PerfEvent[strChildrenContextKey]) {
                        return _self[key];
                    }
                    return (_self[strExecutionContextKey] || {})[key];
                }
                return null;
            };
            _self[_DYN_SET_CTX ] = function (key, value) {
                if (key) {
                    if (key === PerfEvent[strParentContextKey]) {
                        if (!_self[key]) {
                            _self[_DYN_IS_CHILD_EVT ] = function () { return true; };
                        }
                        _self[key] = value;
                    }
                    else if (key === PerfEvent[strChildrenContextKey]) {
                        _self[key] = value;
                    }
                    else {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                }
            };
            _self[_DYN_COMPLETE ] = function () {
                var childTime = 0;
                var childEvts = _self[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
                if (isArray(childEvts)) {
                    for (var lp = 0; lp < childEvts[_DYN_LENGTH$1 ]; lp++) {
                        var childEvt = childEvts[lp];
                        if (childEvt) {
                            childTime += childEvt[_DYN_TIME ];
                        }
                    }
                }
                _self[_DYN_TIME ] = utcNow() - _self.start;
                _self.exTime = _self[_DYN_TIME ] - childTime;
                _self[_DYN_COMPLETE ] = function () { };
            };
        }
        PerfEvent.ParentContextKey = "parent";
        PerfEvent.ChildrenContextKey = "childEvts";
        return PerfEvent;
    }());
    var PerfManager = /** @class */ (function () {
        function PerfManager(manager) {
            this.ctx = {};
            dynamicProto(PerfManager, this, function (_self) {
                _self.create = function (src, payloadDetails, isAsync) {
                    return new PerfEvent(src, payloadDetails, isAsync);
                };
                _self.fire = function (perfEvent) {
                    if (perfEvent) {
                        perfEvent[_DYN_COMPLETE ]();
                        if (manager && isFunction(manager[STR_PERF_EVENT ])) {
                            manager[STR_PERF_EVENT ](perfEvent);
                        }
                    }
                };
                _self[_DYN_SET_CTX ] = function (key, value) {
                    if (key) {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                };
                _self[_DYN_GET_CTX ] = function (key) {
                    return (_self[strExecutionContextKey] || {})[key];
                };
            });
        }
        PerfManager.__ieDyn=1;
        return PerfManager;
    }());
    var doPerfActiveKey = "CoreUtils.doPerf";
    function doPerf(mgrSource, getSource, func, details, isAsync) {
        if (mgrSource) {
            var perfMgr = mgrSource;
            if (perfMgr[STR_GET_PERF_MGR]) {
                perfMgr = perfMgr[STR_GET_PERF_MGR]();
            }
            if (perfMgr) {
                var perfEvt = void 0;
                var currentActive = perfMgr[_DYN_GET_CTX ](doPerfActiveKey);
                try {
                    perfEvt = perfMgr.create(getSource(), details, isAsync);
                    if (perfEvt) {
                        if (currentActive && perfEvt[_DYN_SET_CTX ]) {
                            perfEvt[_DYN_SET_CTX ](PerfEvent[strParentContextKey], currentActive);
                            if (currentActive[_DYN_GET_CTX ] && currentActive[_DYN_SET_CTX ]) {
                                var children = currentActive[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
                                if (!children) {
                                    children = [];
                                    currentActive[_DYN_SET_CTX ](PerfEvent[strChildrenContextKey], children);
                                }
                                children[_DYN_PUSH ](perfEvt);
                            }
                        }
                        perfMgr[_DYN_SET_CTX ](doPerfActiveKey, perfEvt);
                        return func(perfEvt);
                    }
                }
                catch (ex) {
                    if (perfEvt && perfEvt[_DYN_SET_CTX ]) {
                        perfEvt[_DYN_SET_CTX ]("exception", ex);
                    }
                }
                finally {
                    if (perfEvt) {
                        perfMgr.fire(perfEvt);
                    }
                    perfMgr[_DYN_SET_CTX ](doPerfActiveKey, currentActive);
                }
            }
        }
        return func();
    }
    function getGblPerfMgr() {
        return _defaultPerfManager;
    }

    function newGuid() {
        var uuid = generateW3CId();
        return strSubstring(uuid, 0, 8) + "-" + strSubstring(uuid, 8, 12) + "-" + strSubstring(uuid, 12, 16) + "-" + strSubstring(uuid, 16, 20) + "-" + strSubstring(uuid, 20);
    }
    function generateW3CId() {
        var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var oct = STR_EMPTY$2, tmp;
        for (var a = 0; a < 4; a++) {
            tmp = random32();
            oct +=
                hexValues[tmp & 0xF] +
                    hexValues[tmp >> 4 & 0xF] +
                    hexValues[tmp >> 8 & 0xF] +
                    hexValues[tmp >> 12 & 0xF] +
                    hexValues[tmp >> 16 & 0xF] +
                    hexValues[tmp >> 20 & 0xF] +
                    hexValues[tmp >> 24 & 0xF] +
                    hexValues[tmp >> 28 & 0xF];
        }
        var clockSequenceHi = hexValues[8 + (random32() & 0x03) | 0];
        return strSubstr(oct, 0, 8) + strSubstr(oct, 9, 4) + "4" + strSubstr(oct, 13, 3) + clockSequenceHi + strSubstr(oct, 16, 3) + strSubstr(oct, 19, 12);
    }

    var TRACE_PARENT_REGEX = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]{1,64})?$/i;
    var DEFAULT_VERSION = "00";
    var INVALID_VERSION = "ff";
    var INVALID_TRACE_ID = "00000000000000000000000000000000";
    var INVALID_SPAN_ID = "0000000000000000";
    var SAMPLED_FLAG = 0x01;
    function _isValid(value, len, invalidValue) {
        if (value && value[_DYN_LENGTH$1 ] === len && value !== invalidValue) {
            return !!value.match(/^[\da-f]*$/i);
        }
        return false;
    }
    function _formatValue(value, len, defValue) {
        if (_isValid(value, len)) {
            return value;
        }
        return defValue;
    }
    function _formatFlags(value) {
        if (isNaN(value) || value < 0 || value > 255) {
            value = 0x01;
        }
        var result = value.toString(16);
        while (result[_DYN_LENGTH$1 ] < 2) {
            result = "0" + result;
        }
        return result;
    }
    function createTraceParent(traceId, spanId, flags, version) {
        var _a;
        return _a = {},
            _a[_DYN_VERSION ] = _isValid(version, 2, INVALID_VERSION) ? version : DEFAULT_VERSION,
            _a[_DYN_TRACE_ID ] = isValidTraceId(traceId) ? traceId : generateW3CId(),
            _a[_DYN_SPAN_ID ] = isValidSpanId(spanId) ? spanId : strLeft(generateW3CId(), 16),
            _a.traceFlags = flags >= 0 && flags <= 0xFF ? flags : 1,
            _a;
    }
    function parseTraceParent(value, selectIdx) {
        var _a;
        if (!value) {
            return null;
        }
        if (isArray(value)) {
            value = value[0] || "";
        }
        if (!value || !isString(value) || value[_DYN_LENGTH$1 ] > 8192) {
            return null;
        }
        if (value.indexOf(",") !== -1) {
            var values = value[_DYN_SPLIT ](",");
            value = values[selectIdx > 0 && values[_DYN_LENGTH$1 ] > selectIdx ? selectIdx : 0];
        }
        var match = TRACE_PARENT_REGEX.exec(strTrim(value));
        if (!match ||
            match[1] === INVALID_VERSION ||
            match[2] === INVALID_TRACE_ID ||
            match[3] === INVALID_SPAN_ID) {
            return null;
        }
        return _a = {
                version: (match[1] || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ](),
                traceId: (match[2] || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ](),
                spanId: (match[3] || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ]()
            },
            _a[_DYN_TRACE_FLAGS ] = parseInt(match[4], 16),
            _a;
    }
    function isValidTraceId(value) {
        return _isValid(value, 32, INVALID_TRACE_ID);
    }
    function isValidSpanId(value) {
        return _isValid(value, 16, INVALID_SPAN_ID);
    }
    function isValidTraceParent(value) {
        if (!value ||
            !_isValid(value[_DYN_VERSION ], 2, INVALID_VERSION) ||
            !_isValid(value[_DYN_TRACE_ID ], 32, INVALID_TRACE_ID) ||
            !_isValid(value[_DYN_SPAN_ID ], 16, INVALID_SPAN_ID) ||
            !_isValid(_formatFlags(value[_DYN_TRACE_FLAGS ]), 2)) {
            return false;
        }
        return true;
    }
    function isSampledFlag(value) {
        if (isValidTraceParent(value)) {
            return (value[_DYN_TRACE_FLAGS ] & SAMPLED_FLAG) === SAMPLED_FLAG;
        }
        return false;
    }
    function formatTraceParent(value) {
        if (value) {
            var flags = _formatFlags(value[_DYN_TRACE_FLAGS ]);
            if (!_isValid(flags, 2)) {
                flags = "01";
            }
            var version = value[_DYN_VERSION ] || DEFAULT_VERSION;
            if (version !== "00" && version !== "ff") {
                version = DEFAULT_VERSION;
            }
            return "".concat(version.toLowerCase(), "-").concat(_formatValue(value.traceId, 32, INVALID_TRACE_ID).toLowerCase(), "-").concat(_formatValue(value.spanId, 16, INVALID_SPAN_ID).toLowerCase(), "-").concat(flags.toLowerCase());
        }
        return "";
    }
    function findW3cTraceParent(selectIdx) {
        var name = "traceparent";
        var traceParent = parseTraceParent(findMetaTag(name), selectIdx);
        if (!traceParent) {
            traceParent = parseTraceParent(findNamedServerTiming(name), selectIdx);
        }
        return traceParent;
    }

    var pluginStateData = createElmNodeData("plugin");
    function _getPluginState(plugin) {
        return pluginStateData.get(plugin, "state", {}, true);
    }
    function initializePlugins(processContext, extensions) {
        var initPlugins = [];
        var lastPlugin = null;
        var proxy = processContext[_DYN_GET_NEXT ]();
        var pluginState;
        while (proxy) {
            var thePlugin = proxy[_DYN_GET_PLUGIN ]();
            if (thePlugin) {
                if (lastPlugin && lastPlugin[_DYN_SET_NEXT_PLUGIN ] && thePlugin[STR_PROCESS_TELEMETRY ]) {
                    lastPlugin[_DYN_SET_NEXT_PLUGIN ](thePlugin);
                }
                pluginState = _getPluginState(thePlugin);
                var isInitialized = !!pluginState[_DYN_IS_INITIALIZED ];
                if (thePlugin[_DYN_IS_INITIALIZED ]) {
                    isInitialized = thePlugin[_DYN_IS_INITIALIZED ]();
                }
                if (!isInitialized) {
                    initPlugins[_DYN_PUSH ](thePlugin);
                }
                lastPlugin = thePlugin;
                proxy = proxy[_DYN_GET_NEXT ]();
            }
        }
        arrForEach(initPlugins, function (thePlugin) {
            var core = processContext[STR_CORE ]();
            thePlugin[_DYN_INITIALIZE$1 ](processContext.getCfg(), core, extensions, processContext[_DYN_GET_NEXT ]());
            pluginState = _getPluginState(thePlugin);
            if (!thePlugin[STR_CORE] && !pluginState[STR_CORE]) {
                pluginState[STR_CORE] = core;
            }
            pluginState[_DYN_IS_INITIALIZED ] = true;
            delete pluginState[_DYN_TEARDOWN ];
        });
    }
    function sortPlugins(plugins) {
        return plugins.sort(function (extA, extB) {
            var result = 0;
            if (extB) {
                var bHasProcess = extB[STR_PROCESS_TELEMETRY];
                if (extA[STR_PROCESS_TELEMETRY]) {
                    result = bHasProcess ? extA[STR_PRIORITY] - extB[STR_PRIORITY] : 1;
                }
                else if (bHasProcess) {
                    result = -1;
                }
            }
            else {
                result = extA ? 1 : -1;
            }
            return result;
        });
    }
    function createDistributedTraceContext(parentCtx) {
        var trace = {};
        return {
            getName: function () {
                return trace[_DYN_NAME ];
            },
            setName: function (newValue) {
                parentCtx && parentCtx.setName(newValue);
                trace[_DYN_NAME ] = newValue;
            },
            getTraceId: function () {
                return trace[_DYN_TRACE_ID ];
            },
            setTraceId: function (newValue) {
                parentCtx && parentCtx.setTraceId(newValue);
                if (isValidTraceId(newValue)) {
                    trace[_DYN_TRACE_ID ] = newValue;
                }
            },
            getSpanId: function () {
                return trace[_DYN_SPAN_ID ];
            },
            setSpanId: function (newValue) {
                parentCtx && parentCtx.setSpanId(newValue);
                if (isValidSpanId(newValue)) {
                    trace[_DYN_SPAN_ID ] = newValue;
                }
            },
            getTraceFlags: function () {
                return trace[_DYN_TRACE_FLAGS ];
            },
            setTraceFlags: function (newTraceFlags) {
                parentCtx && parentCtx.setTraceFlags(newTraceFlags);
                trace[_DYN_TRACE_FLAGS ] = newTraceFlags;
            }
        };
    }

    var strTelemetryPluginChain = "TelemetryPluginChain";
    var strHasRunFlags = "_hasRun";
    var strGetTelCtx = "_getTelCtx";
    var _chainId = 0;
    function _getNextProxyStart(proxy, core, startAt) {
        while (proxy) {
            if (proxy[_DYN_GET_PLUGIN ]() === startAt) {
                return proxy;
            }
            proxy = proxy[_DYN_GET_NEXT ]();
        }
        return createTelemetryProxyChain([startAt], core.config || {}, core);
    }
    function _createInternalContext(telemetryChain, dynamicHandler, core, startAt) {
        var _nextProxy = null;
        var _onComplete = [];
        if (!dynamicHandler) {
            dynamicHandler = createDynamicConfig({}, null, core[_DYN_LOGGER$1 ]);
        }
        if (startAt !== null) {
            _nextProxy = startAt ? _getNextProxyStart(telemetryChain, core, startAt) : telemetryChain;
        }
        var context = {
            _next: _moveNext,
            ctx: {
                core: function () {
                    return core;
                },
                diagLog: function () {
                    return safeGetLogger(core, dynamicHandler.cfg);
                },
                getCfg: function () {
                    return dynamicHandler.cfg;
                },
                getExtCfg: _resolveExtCfg,
                getConfig: _getConfig,
                hasNext: function () {
                    return !!_nextProxy;
                },
                getNext: function () {
                    return _nextProxy;
                },
                setNext: function (nextPlugin) {
                    _nextProxy = nextPlugin;
                },
                iterate: _iterateChain,
                onComplete: _addOnComplete
            }
        };
        function _addOnComplete(onComplete, that) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (onComplete) {
                _onComplete[_DYN_PUSH ]({
                    func: onComplete,
                    self: !isUndefined(that) ? that : context.ctx,
                    args: args
                });
            }
        }
        function _moveNext() {
            var nextProxy = _nextProxy;
            _nextProxy = nextProxy ? nextProxy[_DYN_GET_NEXT ]() : null;
            if (!nextProxy) {
                var onComplete = _onComplete;
                if (onComplete && onComplete[_DYN_LENGTH$1 ] > 0) {
                    arrForEach(onComplete, function (completeDetails) {
                        try {
                            completeDetails.func.call(completeDetails.self, completeDetails.args);
                        }
                        catch (e) {
                            _throwInternal(core[_DYN_LOGGER$1 ], 2 , 73 , "Unexpected Exception during onComplete - " + dumpObj(e));
                        }
                    });
                    _onComplete = [];
                }
            }
            return nextProxy;
        }
        function _getExtCfg(identifier, createIfMissing) {
            var idCfg = null;
            var cfg = dynamicHandler.cfg;
            if (cfg && identifier) {
                var extCfg = cfg[STR_EXTENSION_CONFIG ];
                if (!extCfg && createIfMissing) {
                    extCfg = {};
                }
                cfg[STR_EXTENSION_CONFIG] = extCfg;
                extCfg = dynamicHandler.ref(cfg, STR_EXTENSION_CONFIG);
                if (extCfg) {
                    idCfg = extCfg[identifier];
                    if (!idCfg && createIfMissing) {
                        idCfg = {};
                    }
                    extCfg[identifier] = idCfg;
                    idCfg = dynamicHandler.ref(extCfg, identifier);
                }
            }
            return idCfg;
        }
        function _resolveExtCfg(identifier, defaultValues) {
            var newConfig = _getExtCfg(identifier, true);
            if (defaultValues) {
                objForEachKey(defaultValues, function (field, defaultValue) {
                    if (isNullOrUndefined(newConfig[field])) {
                        var cfgValue = dynamicHandler.cfg[field];
                        if (cfgValue || !isNullOrUndefined(cfgValue)) {
                            newConfig[field] = cfgValue;
                        }
                    }
                    _applyDefaultValue(dynamicHandler, newConfig, field, defaultValue);
                });
            }
            return dynamicHandler[_DYN_SET_DF ](newConfig, defaultValues);
        }
        function _getConfig(identifier, field, defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            var theValue;
            var extConfig = _getExtCfg(identifier, false);
            var rootConfig = dynamicHandler.cfg;
            if (extConfig && (extConfig[field] || !isNullOrUndefined(extConfig[field]))) {
                theValue = extConfig[field];
            }
            else if (rootConfig[field] || !isNullOrUndefined(rootConfig[field])) {
                theValue = rootConfig[field];
            }
            return (theValue || !isNullOrUndefined(theValue)) ? theValue : defaultValue;
        }
        function _iterateChain(cb) {
            var nextPlugin;
            while (!!(nextPlugin = context._next())) {
                var plugin = nextPlugin[_DYN_GET_PLUGIN ]();
                if (plugin) {
                    cb(plugin);
                }
            }
        }
        return context;
    }
    function createProcessTelemetryContext(telemetryChain, cfg, core, startAt) {
        var config = createDynamicConfig(cfg);
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(env) {
            var nextPlugin = internalContext._next();
            if (nextPlugin) {
                nextPlugin[STR_PROCESS_TELEMETRY ](env, context);
            }
            return !nextPlugin;
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
            }
            return createProcessTelemetryContext(plugins || context[_DYN_GET_NEXT ](), config.cfg, core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createProcessTelemetryUnloadContext(telemetryChain, core, startAt) {
        var config = createDynamicConfig(core.config);
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(unloadState) {
            var nextPlugin = internalContext._next();
            nextPlugin && nextPlugin[_DYN_UNLOAD ](context, unloadState);
            return !nextPlugin;
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
            }
            return createProcessTelemetryUnloadContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createProcessTelemetryUpdateContext(telemetryChain, core, startAt) {
        var config = createDynamicConfig(core.config);
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(updateState) {
            return context.iterate(function (plugin) {
                if (isFunction(plugin[_DYN_UPDATE ])) {
                    plugin[_DYN_UPDATE ](context, updateState);
                }
            });
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
            }
            return createProcessTelemetryUpdateContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createTelemetryProxyChain(plugins, config, core, startAt) {
        var firstProxy = null;
        var add = startAt ? false : true;
        if (isArray(plugins) && plugins[_DYN_LENGTH$1 ] > 0) {
            var lastProxy_1 = null;
            arrForEach(plugins, function (thePlugin) {
                if (!add && startAt === thePlugin) {
                    add = true;
                }
                if (add && thePlugin && isFunction(thePlugin[STR_PROCESS_TELEMETRY ])) {
                    var newProxy = createTelemetryPluginProxy(thePlugin, config, core);
                    if (!firstProxy) {
                        firstProxy = newProxy;
                    }
                    if (lastProxy_1) {
                        lastProxy_1._setNext(newProxy);
                    }
                    lastProxy_1 = newProxy;
                }
            });
        }
        if (startAt && !firstProxy) {
            return createTelemetryProxyChain([startAt], config, core);
        }
        return firstProxy;
    }
    function createTelemetryPluginProxy(plugin, config, core) {
        var nextProxy = null;
        var hasProcessTelemetry = isFunction(plugin[STR_PROCESS_TELEMETRY ]);
        var hasSetNext = isFunction(plugin[_DYN_SET_NEXT_PLUGIN ]);
        var chainId;
        if (plugin) {
            chainId = plugin[_DYN_IDENTIFIER ] + "-" + plugin[STR_PRIORITY ] + "-" + _chainId++;
        }
        else {
            chainId = "Unknown-0-" + _chainId++;
        }
        var proxyChain = {
            getPlugin: function () {
                return plugin;
            },
            getNext: function () {
                return nextProxy;
            },
            processTelemetry: _processTelemetry,
            unload: _unloadPlugin,
            update: _updatePlugin,
            _id: chainId,
            _setNext: function (nextPlugin) {
                nextProxy = nextPlugin;
            }
        };
        function _getTelCtx() {
            var itemCtx;
            if (plugin && isFunction(plugin[strGetTelCtx])) {
                itemCtx = plugin[strGetTelCtx]();
            }
            if (!itemCtx) {
                itemCtx = createProcessTelemetryContext(proxyChain, config, core);
            }
            return itemCtx;
        }
        function _processChain(itemCtx, processPluginFn, name, details, isAsync) {
            var hasRun = false;
            var identifier = plugin ? plugin[_DYN_IDENTIFIER ] : strTelemetryPluginChain;
            var hasRunContext = itemCtx[strHasRunFlags];
            if (!hasRunContext) {
                hasRunContext = itemCtx[strHasRunFlags] = {};
            }
            itemCtx.setNext(nextProxy);
            if (plugin) {
                doPerf(itemCtx[STR_CORE ](), function () { return identifier + ":" + name; }, function () {
                    hasRunContext[chainId] = true;
                    try {
                        var nextId = nextProxy ? nextProxy._id : STR_EMPTY$2;
                        if (nextId) {
                            hasRunContext[nextId] = false;
                        }
                        hasRun = processPluginFn(itemCtx);
                    }
                    catch (error) {
                        var hasNextRun = nextProxy ? hasRunContext[nextProxy._id] : true;
                        if (hasNextRun) {
                            hasRun = true;
                        }
                        if (!nextProxy || !hasNextRun) {
                            _throwInternal(itemCtx[_DYN_DIAG_LOG ](), 1 , 73 , "Plugin [" + identifier + "] failed during " + name + " - " + dumpObj(error) + ", run flags: " + dumpObj(hasRunContext));
                        }
                    }
                }, details, isAsync);
            }
            return hasRun;
        }
        function _processTelemetry(env, itemCtx) {
            itemCtx = itemCtx || _getTelCtx();
            function _callProcessTelemetry(itemCtx) {
                if (!plugin || !hasProcessTelemetry) {
                    return false;
                }
                var pluginState = _getPluginState(plugin);
                if (pluginState[_DYN_TEARDOWN ] || pluginState[STR_DISABLED]) {
                    return false;
                }
                if (hasSetNext) {
                    plugin[_DYN_SET_NEXT_PLUGIN ](nextProxy);
                }
                plugin[STR_PROCESS_TELEMETRY ](env, itemCtx);
                return true;
            }
            if (!_processChain(itemCtx, _callProcessTelemetry, "processTelemetry", function () { return ({ item: env }); }, !(env.sync))) {
                itemCtx[_DYN_PROCESS_NEXT ](env);
            }
        }
        function _unloadPlugin(unloadCtx, unloadState) {
            function _callTeardown() {
                var hasRun = false;
                if (plugin) {
                    var pluginState = _getPluginState(plugin);
                    var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                    if (plugin && (!pluginCore || pluginCore === unloadCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                        pluginState[STR_CORE ] = null;
                        pluginState[_DYN_TEARDOWN ] = true;
                        pluginState[_DYN_IS_INITIALIZED ] = false;
                        if (plugin[_DYN_TEARDOWN ] && plugin[_DYN_TEARDOWN ](unloadCtx, unloadState) === true) {
                            hasRun = true;
                        }
                    }
                }
                return hasRun;
            }
            if (!_processChain(unloadCtx, _callTeardown, "unload", function () { }, unloadState[_DYN_IS_ASYNC ])) {
                unloadCtx[_DYN_PROCESS_NEXT ](unloadState);
            }
        }
        function _updatePlugin(updateCtx, updateState) {
            function _callUpdate() {
                var hasRun = false;
                if (plugin) {
                    var pluginState = _getPluginState(plugin);
                    var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                    if (plugin && (!pluginCore || pluginCore === updateCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                        if (plugin[_DYN_UPDATE ] && plugin[_DYN_UPDATE ](updateCtx, updateState) === true) {
                            hasRun = true;
                        }
                    }
                }
                return hasRun;
            }
            if (!_processChain(updateCtx, _callUpdate, "update", function () { }, false)) {
                updateCtx[_DYN_PROCESS_NEXT ](updateState);
            }
        }
        return objFreeze(proxyChain);
    }
    var ProcessTelemetryContext = /** @class */ (function () {
        function ProcessTelemetryContext(pluginChain, config, core, startAt) {
            var _self = this;
            var context = createProcessTelemetryContext(pluginChain, config, core, startAt);
            proxyFunctions(_self, context, objKeys(context));
        }
        return ProcessTelemetryContext;
    }());

    function createUnloadHandlerContainer() {
        var handlers = [];
        function _addHandler(handler) {
            if (handler) {
                handlers[_DYN_PUSH ](handler);
            }
        }
        function _runHandlers(unloadCtx, unloadState) {
            arrForEach(handlers, function (handler) {
                try {
                    handler(unloadCtx, unloadState);
                }
                catch (e) {
                    _throwInternal(unloadCtx[_DYN_DIAG_LOG ](), 2 , 73 , "Unexpected error calling unload handler - " + dumpObj(e));
                }
            });
            handlers = [];
        }
        return {
            add: _addHandler,
            run: _runHandlers
        };
    }

    var _maxHooks;
    var _hookAddMonitor;
    function _testHookMaxUnloadHooksCb(maxHooks, addMonitor) {
        _maxHooks = maxHooks;
        _hookAddMonitor = addMonitor;
    }
    function createUnloadHookContainer() {
        var _hooks = [];
        function _doUnload(logger) {
            var oldHooks = _hooks;
            _hooks = [];
            arrForEach(oldHooks, function (fn) {
                try {
                    (fn.rm || fn.remove).call(fn);
                }
                catch (e) {
                    _throwInternal(logger, 2 , 73 , "Unloading:" + dumpObj(e));
                }
            });
            if (_maxHooks && oldHooks[_DYN_LENGTH$1 ] > _maxHooks) {
                _hookAddMonitor ? _hookAddMonitor("doUnload", oldHooks) : _throwInternal(null, 1 , 48 , "Max unload hooks exceeded. An excessive number of unload hooks has been detected.");
            }
        }
        function _addHook(hooks) {
            if (hooks) {
                arrAppend(_hooks, hooks);
                if (_maxHooks && _hooks[_DYN_LENGTH$1 ] > _maxHooks) {
                    _hookAddMonitor ? _hookAddMonitor("Add", _hooks) : _throwInternal(null, 1 , 48 , "Max unload hooks exceeded. An excessive number of unload hooks has been detected.");
                }
            }
        }
        return {
            run: _doUnload,
            add: _addHook
        };
    }

    var _a$2;
    var strGetPlugin = "getPlugin";
    var defaultValues = (_a$2 = {},
        _a$2[STR_EXTENSION_CONFIG] = { isVal: isNotNullOrUndefined, v: {} },
        _a$2);
    var BaseTelemetryPlugin = /** @class */ (function () {
        function BaseTelemetryPlugin() {
            var _self = this;
            var _isinitialized;
            var _rootCtx;
            var _nextPlugin;
            var _unloadHandlerContainer;
            var _hookContainer;
            _initDefaults();
            dynamicProto(BaseTelemetryPlugin, _self, function (_self) {
                _self[_DYN_INITIALIZE$1 ] = function (config, core, extensions, pluginChain) {
                    _setDefaults(config, core, pluginChain);
                    _isinitialized = true;
                };
                _self[_DYN_TEARDOWN ] = function (unloadCtx, unloadState) {
                    var _a;
                    var core = _self[STR_CORE ];
                    if (!core || (unloadCtx && core !== unloadCtx[STR_CORE ]())) {
                        return;
                    }
                    var result;
                    var unloadDone = false;
                    var theUnloadCtx = unloadCtx || createProcessTelemetryUnloadContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                    var theUnloadState = unloadState || (_a = {
                            reason: 0
                        },
                        _a[_DYN_IS_ASYNC ] = false,
                        _a);
                    function _unloadCallback() {
                        if (!unloadDone) {
                            unloadDone = true;
                            _unloadHandlerContainer.run(theUnloadCtx, unloadState);
                            _hookContainer.run(theUnloadCtx[_DYN_DIAG_LOG ]());
                            if (result === true) {
                                theUnloadCtx[_DYN_PROCESS_NEXT ](theUnloadState);
                            }
                            _initDefaults();
                        }
                    }
                    if (!_self[_DYN__DO_TEARDOWN ] || _self[_DYN__DO_TEARDOWN ](theUnloadCtx, theUnloadState, _unloadCallback) !== true) {
                        _unloadCallback();
                    }
                    else {
                        result = true;
                    }
                    return result;
                };
                _self[_DYN_UPDATE ] = function (updateCtx, updateState) {
                    var core = _self[STR_CORE ];
                    if (!core || (updateCtx && core !== updateCtx[STR_CORE ]())) {
                        return;
                    }
                    var result;
                    var updateDone = false;
                    var theUpdateCtx = updateCtx || createProcessTelemetryUpdateContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                    var theUpdateState = updateState || {
                        reason: 0
                    };
                    function _updateCallback() {
                        if (!updateDone) {
                            updateDone = true;
                            _setDefaults(theUpdateCtx.getCfg(), theUpdateCtx.core(), theUpdateCtx[_DYN_GET_NEXT ]());
                        }
                    }
                    if (!_self._doUpdate || _self._doUpdate(theUpdateCtx, theUpdateState, _updateCallback) !== true) {
                        _updateCallback();
                    }
                    else {
                        result = true;
                    }
                    return result;
                };
                proxyFunctionAs(_self, "_addUnloadCb", function () { return _unloadHandlerContainer; }, "add");
                proxyFunctionAs(_self, "_addHook", function () { return _hookContainer; }, "add");
                objDefine(_self, "_unloadHooks", { g: function () { return _hookContainer; } });
            });
            _self[_DYN_DIAG_LOG ] = function (itemCtx) {
                return _getTelCtx(itemCtx)[_DYN_DIAG_LOG ]();
            };
            _self[_DYN_IS_INITIALIZED ] = function () {
                return _isinitialized;
            };
            _self.setInitialized = function (isInitialized) {
                _isinitialized = isInitialized;
            };
            _self[_DYN_SET_NEXT_PLUGIN ] = function (next) {
                _nextPlugin = next;
            };
            _self[_DYN_PROCESS_NEXT ] = function (env, itemCtx) {
                if (itemCtx) {
                    itemCtx[_DYN_PROCESS_NEXT ](env);
                }
                else if (_nextPlugin && isFunction(_nextPlugin[STR_PROCESS_TELEMETRY ])) {
                    _nextPlugin[STR_PROCESS_TELEMETRY ](env, null);
                }
            };
            _self._getTelCtx = _getTelCtx;
            function _getTelCtx(currentCtx) {
                if (currentCtx === void 0) { currentCtx = null; }
                var itemCtx = currentCtx;
                if (!itemCtx) {
                    var rootCtx = _rootCtx || createProcessTelemetryContext(null, {}, _self[STR_CORE ]);
                    if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                        itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin[strGetPlugin]);
                    }
                    else {
                        itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin);
                    }
                }
                return itemCtx;
            }
            function _setDefaults(config, core, pluginChain) {
                createDynamicConfig(config, defaultValues, safeGetLogger(core));
                if (!pluginChain && core) {
                    pluginChain = core[_DYN_GET_PROCESS_TEL_CONT2 ]()[_DYN_GET_NEXT ]();
                }
                var nextPlugin = _nextPlugin;
                if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                    nextPlugin = _nextPlugin[strGetPlugin]();
                }
                _self[STR_CORE ] = core;
                _rootCtx = createProcessTelemetryContext(pluginChain, config, core, nextPlugin);
            }
            function _initDefaults() {
                _isinitialized = false;
                _self[STR_CORE ] = null;
                _rootCtx = null;
                _nextPlugin = null;
                _hookContainer = createUnloadHookContainer();
                _unloadHandlerContainer = createUnloadHandlerContainer();
            }
        }
        BaseTelemetryPlugin.__ieDyn=1;
        return BaseTelemetryPlugin;
    }());

    function _addInitializer(_initializers, id, telemetryInitializer) {
        var theInitializer = {
            id: id,
            fn: telemetryInitializer
        };
        arrAppend(_initializers, theInitializer);
        var handler = {
            remove: function () {
                arrForEach(_initializers, function (initializer, idx) {
                    if (initializer.id === theInitializer.id) {
                        _initializers[_DYN_SPLICE ](idx, 1);
                        return -1;
                    }
                });
            }
        };
        return handler;
    }
    function _runInitializers(_initializers, item, logger) {
        var doNotSendItem = false;
        var telemetryInitializersCount = _initializers[_DYN_LENGTH$1 ];
        for (var i = 0; i < telemetryInitializersCount; ++i) {
            var telemetryInitializer = _initializers[i];
            if (telemetryInitializer) {
                try {
                    if (telemetryInitializer.fn[_DYN_APPLY ](null, [item]) === false) {
                        doNotSendItem = true;
                        break;
                    }
                }
                catch (e) {
                    _throwInternal(logger, 2 , 64 , "Telemetry initializer failed: " + getExceptionName(e), { exception: dumpObj(e) }, true);
                }
            }
        }
        return !doNotSendItem;
    }
    var TelemetryInitializerPlugin = /** @class */ (function (_super) {
        __extendsFn(TelemetryInitializerPlugin, _super);
        function TelemetryInitializerPlugin() {
            var _this = _super.call(this) || this;
            _this.identifier = "TelemetryInitializerPlugin";
            _this.priority = 199;
            var _id;
            var _initializers;
            _initDefaults();
            dynamicProto(TelemetryInitializerPlugin, _this, function (_self, _base) {
                _self.addTelemetryInitializer = function (telemetryInitializer) {
                    return _addInitializer(_initializers, _id++, telemetryInitializer);
                };
                _self[STR_PROCESS_TELEMETRY ] = function (item, itemCtx) {
                    if (_runInitializers(_initializers, item, itemCtx ? itemCtx[_DYN_DIAG_LOG ]() : _self[_DYN_DIAG_LOG ]())) {
                        _self[_DYN_PROCESS_NEXT ](item, itemCtx);
                    }
                };
                _self[_DYN__DO_TEARDOWN ] = function () {
                    _initDefaults();
                };
            });
            function _initDefaults() {
                _id = 0;
                _initializers = [];
            }
            return _this;
        }
        TelemetryInitializerPlugin.__ieDyn=1;
        return TelemetryInitializerPlugin;
    }(BaseTelemetryPlugin));

    var _a$1;
    var strValidationError = "Plugins must provide initialize method";
    var strNotificationManager = "_notificationManager";
    var strSdkUnloadingError = "SDK is still unloading...";
    var strSdkNotInitialized = "SDK is not initialized";
    var defaultConfig$1 = objDeepFreeze((_a$1 = {
            cookieCfg: {}
        },
        _a$1[STR_EXTENSIONS] = { rdOnly: true, ref: true, v: [] },
        _a$1[STR_CHANNELS] = { rdOnly: true, ref: true, v: [] },
        _a$1[STR_EXTENSION_CONFIG] = { ref: true, v: {} },
        _a$1[STR_CREATE_PERF_MGR] = UNDEFINED_VALUE,
        _a$1.loggingLevelConsole = 0 ,
        _a$1.diagnosticLogInterval = UNDEFINED_VALUE,
        _a$1));
    function _createPerfManager(core, notificationMgr) {
        return new PerfManager(notificationMgr);
    }
    function _validateExtensions(logger, channelPriority, allExtensions) {
        var _a;
        var coreExtensions = [];
        var channels = [];
        var extPriorities = {};
        arrForEach(allExtensions, function (ext) {
            if (isNullOrUndefined(ext) || isNullOrUndefined(ext[_DYN_INITIALIZE$1 ])) {
                throwError(strValidationError);
            }
            var extPriority = ext[STR_PRIORITY ];
            var identifier = ext[_DYN_IDENTIFIER ];
            if (ext && extPriority) {
                if (!isNullOrUndefined(extPriorities[extPriority])) {
                    _warnToConsole(logger, "Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
                }
                else {
                    extPriorities[extPriority] = identifier;
                }
            }
            if (!extPriority || extPriority < channelPriority) {
                coreExtensions[_DYN_PUSH ](ext);
            }
            else {
                channels[_DYN_PUSH ](ext);
            }
        });
        return _a = {},
            _a[STR_CORE ] = coreExtensions,
            _a[STR_CHANNELS ] = channels,
            _a;
    }
    function _isPluginPresent(thePlugin, plugins) {
        var exists = false;
        arrForEach(plugins, function (plugin) {
            if (plugin === thePlugin) {
                exists = true;
                return -1;
            }
        });
        return exists;
    }
    function _deepMergeConfig(details, target, newValues, merge) {
        if (newValues) {
            objForEachKey(newValues, function (key, value) {
                if (merge) {
                    if (isPlainObject(value) && isPlainObject(target[key])) {
                        _deepMergeConfig(details, target[key], value, merge);
                    }
                }
                if (merge && isPlainObject(value) && isPlainObject(target[key])) {
                    _deepMergeConfig(details, target[key], value, merge);
                }
                else {
                    details.set(target, key, value);
                }
            });
        }
    }
    function _findWatcher(listeners, newWatcher) {
        var theListener = null;
        var idx = -1;
        arrForEach(listeners, function (listener, lp) {
            if (listener.w === newWatcher) {
                theListener = listener;
                idx = lp;
                return -1;
            }
        });
        return { i: idx, l: theListener };
    }
    function _addDelayedCfgListener(listeners, newWatcher) {
        var theListener = _findWatcher(listeners, newWatcher).l;
        if (!theListener) {
            theListener = {
                w: newWatcher,
                rm: function () {
                    var fnd = _findWatcher(listeners, newWatcher);
                    if (fnd.i !== -1) {
                        listeners[_DYN_SPLICE ](fnd.i, 1);
                    }
                }
            };
            listeners[_DYN_PUSH ](theListener);
        }
        return theListener;
    }
    function _registerDelayedCfgListener(config, listeners, logger) {
        arrForEach(listeners, function (listener) {
            var unloadHdl = onConfigChange(config, listener.w, logger);
            delete listener.w;
            listener.rm = function () {
                unloadHdl.rm();
            };
        });
    }
    function _initDebugListener(configHandler, unloadContainer, notificationManager, debugListener) {
        unloadContainer.add(configHandler[_DYN_WATCH ](function (details) {
            var disableDbgExt = details.cfg.disableDbgExt;
            if (disableDbgExt === true && debugListener) {
                notificationManager[_DYN_REMOVE_NOTIFICATION_0 ](debugListener);
                debugListener = null;
            }
            if (notificationManager && !debugListener && disableDbgExt !== true) {
                debugListener = getDebugListener(details.cfg);
                notificationManager[_DYN_ADD_NOTIFICATION_LIS1 ](debugListener);
            }
        }));
        return debugListener;
    }
    function _createUnloadHook(unloadHook) {
        return objDefine({
            rm: function () {
                unloadHook.rm();
            }
        }, "toJSON", { v: function () { return "aicore::onCfgChange<" + JSON.stringify(unloadHook) + ">"; } });
    }
    var AppInsightsCore$1 = /** @class */ (function () {
        function AppInsightsCore() {
            var _configHandler;
            var _isInitialized;
            var _logger;
            var _eventQueue;
            var _notificationManager;
            var _perfManager;
            var _cfgPerfManager;
            var _cookieManager;
            var _pluginChain;
            var _configExtensions;
            var _channelConfig;
            var _channels;
            var _isUnloading;
            var _telemetryInitializerPlugin;
            var _internalLogsEventName;
            var _evtNamespace;
            var _unloadHandlers;
            var _hookContainer;
            var _debugListener;
            var _traceCtx;
            var _instrumentationKey;
            var _cfgListeners;
            var _extensions;
            var _pluginVersionStringArr;
            var _pluginVersionString;
            var _internalLogPoller;
            var _internalLogPollerListening;
            var _forceStopInternalLogPoller;
            dynamicProto(AppInsightsCore, this, function (_self) {
                _initDefaults();
                _self["_getDbgPlgTargets"] = function () {
                    return [_extensions];
                };
                _self[_DYN_IS_INITIALIZED ] = function () { return _isInitialized; };
                _self[_DYN_INITIALIZE$1 ] = function (config, extensions, logger, notificationManager) {
                    if (_isUnloading) {
                        throwError(strSdkUnloadingError);
                    }
                    if (_self[_DYN_IS_INITIALIZED ]()) {
                        throwError("Core cannot be initialized more than once");
                    }
                    _configHandler = createDynamicConfig(config, defaultConfig$1, logger || _self[_DYN_LOGGER$1 ], false);
                    config = _configHandler.cfg;
                    _addUnloadHook(_configHandler[_DYN_WATCH ](function (details) {
                        _instrumentationKey = details.cfg.instrumentationKey;
                        var extCfg = details.ref(details.cfg, STR_EXTENSION_CONFIG);
                        objForEachKey(extCfg, function (key) {
                            details.ref(extCfg, key);
                        });
                        if (isNullOrUndefined(_instrumentationKey)) {
                            throwError("Please provide instrumentation key");
                        }
                    }));
                    _notificationManager = notificationManager;
                    _debugListener = _initDebugListener(_configHandler, _hookContainer, _notificationManager && _self[_DYN_GET_NOTIFY_MGR ](), _debugListener);
                    _initPerfManager();
                    _self[_DYN_LOGGER$1 ] = logger;
                    var cfgExtensions = config[STR_EXTENSIONS ];
                    _configExtensions = [];
                    _configExtensions[_DYN_PUSH ].apply(_configExtensions, __spreadArrayFn(__spreadArrayFn([], extensions, false), cfgExtensions));
                    _channelConfig = config[STR_CHANNELS ];
                    _initPluginChain(null);
                    if (!_channels || _channels[_DYN_LENGTH$1 ] === 0) {
                        throwError("No " + STR_CHANNELS + " available");
                    }
                    if (_channelConfig && _channelConfig[_DYN_LENGTH$1 ] > 1) {
                        var teeController = _self[_DYN_GET_PLUGIN ]("TeeChannelController");
                        if (!teeController || !teeController.plugin) {
                            _throwInternal(_logger, 1 , 28 , "TeeChannel required");
                        }
                    }
                    _registerDelayedCfgListener(config, _cfgListeners, _logger);
                    _cfgListeners = null;
                    _isInitialized = true;
                    _self.releaseQueue();
                    _self[_DYN_POLL_INTERNAL_LOGS$1 ]();
                };
                _self.getChannels = function () {
                    var controls = [];
                    if (_channels) {
                        arrForEach(_channels, function (channel) {
                            controls[_DYN_PUSH ](channel);
                        });
                    }
                    return objFreeze(controls);
                };
                _self.track = function (telemetryItem) {
                    doPerf(_self[STR_GET_PERF_MGR ](), function () { return "AppInsightsCore:track"; }, function () {
                        if (telemetryItem === null) {
                            _notifyInvalidEvent(telemetryItem);
                            throwError("Invalid telemetry item");
                        }
                        if (!telemetryItem[_DYN_NAME ] && isNullOrUndefined(telemetryItem[_DYN_NAME ])) {
                            _notifyInvalidEvent(telemetryItem);
                            throwError("telemetry name required");
                        }
                        telemetryItem.iKey = telemetryItem.iKey || _instrumentationKey;
                        telemetryItem[_DYN_TIME ] = telemetryItem[_DYN_TIME ] || toISOString(new Date());
                        telemetryItem.ver = telemetryItem.ver || "4.0";
                        if (!_isUnloading && _self[_DYN_IS_INITIALIZED ]()) {
                            _createTelCtx()[_DYN_PROCESS_NEXT ](telemetryItem);
                        }
                        else {
                            _eventQueue[_DYN_PUSH ](telemetryItem);
                        }
                    }, function () { return ({ item: telemetryItem }); }, !(telemetryItem.sync));
                };
                _self[_DYN_GET_PROCESS_TEL_CONT2 ] = _createTelCtx;
                _self[_DYN_GET_NOTIFY_MGR ] = function () {
                    if (!_notificationManager) {
                        _notificationManager = new NotificationManager(_configHandler.cfg);
                        _self[strNotificationManager] = _notificationManager;
                    }
                    return _notificationManager;
                };
                _self[_DYN_ADD_NOTIFICATION_LIS1 ] = function (listener) {
                    _self.getNotifyMgr()[_DYN_ADD_NOTIFICATION_LIS1 ](listener);
                };
                _self[_DYN_REMOVE_NOTIFICATION_0 ] = function (listener) {
                    if (_notificationManager) {
                        _notificationManager[_DYN_REMOVE_NOTIFICATION_0 ](listener);
                    }
                };
                _self.getCookieMgr = function () {
                    if (!_cookieManager) {
                        _cookieManager = createCookieMgr(_configHandler.cfg, _self[_DYN_LOGGER$1 ]);
                    }
                    return _cookieManager;
                };
                _self.setCookieMgr = function (cookieMgr) {
                    if (_cookieManager !== cookieMgr) {
                        runTargetUnload(_cookieManager, false);
                        _cookieManager = cookieMgr;
                    }
                };
                _self[STR_GET_PERF_MGR ] = function () {
                    return _perfManager || _cfgPerfManager || getGblPerfMgr();
                };
                _self.setPerfMgr = function (perfMgr) {
                    _perfManager = perfMgr;
                };
                _self.eventCnt = function () {
                    return _eventQueue[_DYN_LENGTH$1 ];
                };
                _self.releaseQueue = function () {
                    if (_isInitialized && _eventQueue[_DYN_LENGTH$1 ] > 0) {
                        var eventQueue = _eventQueue;
                        _eventQueue = [];
                        arrForEach(eventQueue, function (event) {
                            _createTelCtx()[_DYN_PROCESS_NEXT ](event);
                        });
                    }
                };
                _self[_DYN_POLL_INTERNAL_LOGS$1 ] = function (eventName) {
                    _internalLogsEventName = eventName || null;
                    _forceStopInternalLogPoller = false;
                    _internalLogPoller && _internalLogPoller[_DYN_CANCEL ]();
                    return _startLogPoller(true);
                };
                function _startLogPoller(alwaysStart) {
                    if ((!_internalLogPoller || !_internalLogPoller[_DYN_ENABLED ]) && !_forceStopInternalLogPoller) {
                        var shouldStart = alwaysStart || (_logger && _logger.queue[_DYN_LENGTH$1 ] > 0);
                        if (shouldStart) {
                            if (!_internalLogPollerListening) {
                                _internalLogPollerListening = true;
                                _addUnloadHook(_configHandler[_DYN_WATCH ](function (details) {
                                    var interval = details.cfg.diagnosticLogInterval;
                                    if (!interval || !(interval > 0)) {
                                        interval = 10000;
                                    }
                                    var isRunning = false;
                                    if (_internalLogPoller) {
                                        isRunning = _internalLogPoller[_DYN_ENABLED ];
                                        _internalLogPoller[_DYN_CANCEL ]();
                                    }
                                    _internalLogPoller = createTimeout(_flushInternalLogs, interval);
                                    _internalLogPoller.unref();
                                    _internalLogPoller[_DYN_ENABLED ] = isRunning;
                                }));
                            }
                            _internalLogPoller[_DYN_ENABLED ] = true;
                        }
                    }
                    return _internalLogPoller;
                }
                _self[_DYN_STOP_POLLING_INTERNA3 ] = function () {
                    _forceStopInternalLogPoller = true;
                    _internalLogPoller && _internalLogPoller[_DYN_CANCEL ]();
                    _flushInternalLogs();
                };
                proxyFunctions(_self, function () { return _telemetryInitializerPlugin; }, ["addTelemetryInitializer"]);
                _self[_DYN_UNLOAD ] = function (isAsync, unloadComplete, cbTimeout) {
                    var _a;
                    if (isAsync === void 0) { isAsync = true; }
                    if (!_isInitialized) {
                        throwError(strSdkNotInitialized);
                    }
                    if (_isUnloading) {
                        throwError(strSdkUnloadingError);
                    }
                    var unloadState = (_a = {
                            reason: 50
                        },
                        _a[_DYN_IS_ASYNC ] = isAsync,
                        _a.flushComplete = false,
                        _a);
                    var result;
                    if (isAsync && !unloadComplete) {
                        result = createPromise(function (resolve) {
                            unloadComplete = resolve;
                        });
                    }
                    var processUnloadCtx = createProcessTelemetryUnloadContext(_getPluginChain(), _self);
                    processUnloadCtx[_DYN_ON_COMPLETE ](function () {
                        _hookContainer.run(_self[_DYN_LOGGER$1 ]);
                        doUnloadAll([_cookieManager, _notificationManager, _logger], isAsync, function () {
                            _initDefaults();
                            unloadComplete && unloadComplete(unloadState);
                        });
                    }, _self);
                    function _doUnload(flushComplete) {
                        unloadState.flushComplete = flushComplete;
                        _isUnloading = true;
                        _unloadHandlers.run(processUnloadCtx, unloadState);
                        _self[_DYN_STOP_POLLING_INTERNA3 ]();
                        processUnloadCtx[_DYN_PROCESS_NEXT ](unloadState);
                    }
                    _flushInternalLogs();
                    if (!_flushChannels(isAsync, _doUnload, 6 , cbTimeout)) ;
                    return result;
                };
                _self[_DYN_GET_PLUGIN ] = _getPlugin;
                _self.addPlugin = function (plugin, replaceExisting, isAsync, addCb) {
                    if (!plugin) {
                        addCb && addCb(false);
                        _logOrThrowError(strValidationError);
                        return;
                    }
                    var existingPlugin = _getPlugin(plugin[_DYN_IDENTIFIER ]);
                    if (existingPlugin && !replaceExisting) {
                        addCb && addCb(false);
                        _logOrThrowError("Plugin [" + plugin[_DYN_IDENTIFIER ] + "] is already loaded!");
                        return;
                    }
                    var updateState = {
                        reason: 16
                    };
                    function _addPlugin(removed) {
                        _configExtensions[_DYN_PUSH ](plugin);
                        updateState.added = [plugin];
                        _initPluginChain(updateState);
                        addCb && addCb(true);
                    }
                    if (existingPlugin) {
                        var removedPlugins_1 = [existingPlugin.plugin];
                        var unloadState = {
                            reason: 2 ,
                            isAsync: !!isAsync
                        };
                        _removePlugins(removedPlugins_1, unloadState, function (removed) {
                            if (!removed) {
                                addCb && addCb(false);
                            }
                            else {
                                updateState.removed = removedPlugins_1;
                                updateState.reason |= 32 ;
                                _addPlugin();
                            }
                        });
                    }
                    else {
                        _addPlugin();
                    }
                };
                _self.updateCfg = function (newConfig, mergeExisting) {
                    if (mergeExisting === void 0) { mergeExisting = true; }
                    var updateState;
                    if (_self[_DYN_IS_INITIALIZED ]()) {
                        updateState = {
                            reason: 1 ,
                            cfg: _configHandler.cfg,
                            oldCfg: deepExtend({}, _configHandler.cfg),
                            newConfig: deepExtend({}, newConfig),
                            merge: mergeExisting
                        };
                        newConfig = updateState.newConfig;
                        var cfg = _configHandler.cfg;
                        newConfig[STR_EXTENSIONS ] = cfg[STR_EXTENSIONS ];
                        newConfig[STR_CHANNELS ] = cfg[STR_CHANNELS ];
                    }
                    _configHandler._block(function (details) {
                        var theConfig = details.cfg;
                        _deepMergeConfig(details, theConfig, newConfig, mergeExisting);
                        if (!mergeExisting) {
                            objForEachKey(theConfig, function (key) {
                                if (!objHasOwn(newConfig, key)) {
                                    details.set(theConfig, key, UNDEFINED_VALUE);
                                }
                            });
                        }
                        details[_DYN_SET_DF ](theConfig, defaultConfig$1);
                    }, true);
                    _configHandler[_DYN_NOTIFY ]();
                    if (updateState) {
                        _doUpdate(updateState);
                    }
                };
                _self.evtNamespace = function () {
                    return _evtNamespace;
                };
                _self.flush = _flushChannels;
                _self.getTraceCtx = function (createNew) {
                    if (!_traceCtx) {
                        _traceCtx = createDistributedTraceContext();
                    }
                    return _traceCtx;
                };
                _self.setTraceCtx = function (traceCtx) {
                    _traceCtx = traceCtx || null;
                };
                _self.addUnloadHook = _addUnloadHook;
                proxyFunctionAs(_self, "addUnloadCb", function () { return _unloadHandlers; }, "add");
                _self.onCfgChange = function (handler) {
                    var unloadHook;
                    if (!_isInitialized) {
                        unloadHook = _addDelayedCfgListener(_cfgListeners, handler);
                    }
                    else {
                        unloadHook = onConfigChange(_configHandler.cfg, handler, _self[_DYN_LOGGER$1 ]);
                    }
                    return _createUnloadHook(unloadHook);
                };
                _self.getWParam = function () {
                    return (hasDocument() || !!_configHandler.cfg.enableWParam) ? 0 : -1;
                };
                function _setPluginVersions() {
                    var thePlugins = {};
                    _pluginVersionStringArr = [];
                    var _addPluginVersions = function (plugins) {
                        if (plugins) {
                            arrForEach(plugins, function (plugin) {
                                if (plugin[_DYN_IDENTIFIER ] && plugin[_DYN_VERSION ] && !thePlugins[plugin.identifier]) {
                                    var ver = plugin[_DYN_IDENTIFIER ] + "=" + plugin[_DYN_VERSION ];
                                    _pluginVersionStringArr[_DYN_PUSH ](ver);
                                    thePlugins[plugin.identifier] = plugin;
                                }
                            });
                        }
                    };
                    _addPluginVersions(_channels);
                    if (_channelConfig) {
                        arrForEach(_channelConfig, function (channels) {
                            _addPluginVersions(channels);
                        });
                    }
                    _addPluginVersions(_configExtensions);
                }
                function _initDefaults() {
                    _isInitialized = false;
                    _configHandler = createDynamicConfig({}, defaultConfig$1, _self[_DYN_LOGGER$1 ]);
                    _configHandler.cfg[_DYN_LOGGING_LEVEL_CONSOL4 ] = 1 ;
                    objDefine(_self, "config", {
                        g: function () { return _configHandler.cfg; },
                        s: function (newValue) {
                            _self.updateCfg(newValue, false);
                        }
                    });
                    objDefine(_self, "pluginVersionStringArr", {
                        g: function () {
                            if (!_pluginVersionStringArr) {
                                _setPluginVersions();
                            }
                            return _pluginVersionStringArr;
                        }
                    });
                    objDefine(_self, "pluginVersionString", {
                        g: function () {
                            if (!_pluginVersionString) {
                                if (!_pluginVersionStringArr) {
                                    _setPluginVersions();
                                }
                                _pluginVersionString = _pluginVersionStringArr.join(";");
                            }
                            return _pluginVersionString || STR_EMPTY$2;
                        }
                    });
                    objDefine(_self, "logger", {
                        g: function () {
                            if (!_logger) {
                                _logger = new DiagnosticLogger(_configHandler.cfg);
                                _configHandler[_DYN_LOGGER$1 ] = _logger;
                            }
                            return _logger;
                        },
                        s: function (newLogger) {
                            _configHandler[_DYN_LOGGER$1 ] = newLogger;
                            if (_logger !== newLogger) {
                                runTargetUnload(_logger, false);
                                _logger = newLogger;
                            }
                        }
                    });
                    _self[_DYN_LOGGER$1 ] = new DiagnosticLogger(_configHandler.cfg);
                    _extensions = [];
                    var cfgExtensions = _self.config[STR_EXTENSIONS ] || [];
                    cfgExtensions.splice(0, cfgExtensions[_DYN_LENGTH$1 ]);
                    arrAppend(cfgExtensions, _extensions);
                    _telemetryInitializerPlugin = new TelemetryInitializerPlugin();
                    _eventQueue = [];
                    runTargetUnload(_notificationManager, false);
                    _notificationManager = null;
                    _perfManager = null;
                    _cfgPerfManager = null;
                    runTargetUnload(_cookieManager, false);
                    _cookieManager = null;
                    _pluginChain = null;
                    _configExtensions = [];
                    _channelConfig = null;
                    _channels = null;
                    _isUnloading = false;
                    _internalLogsEventName = null;
                    _evtNamespace = createUniqueNamespace("AIBaseCore", true);
                    _unloadHandlers = createUnloadHandlerContainer();
                    _traceCtx = null;
                    _instrumentationKey = null;
                    _hookContainer = createUnloadHookContainer();
                    _cfgListeners = [];
                    _pluginVersionString = null;
                    _pluginVersionStringArr = null;
                    _forceStopInternalLogPoller = false;
                    _internalLogPoller = null;
                    _internalLogPollerListening = false;
                }
                function _createTelCtx() {
                    var theCtx = createProcessTelemetryContext(_getPluginChain(), _configHandler.cfg, _self);
                    theCtx[_DYN_ON_COMPLETE ](_startLogPoller);
                    return theCtx;
                }
                function _initPluginChain(updateState) {
                    var theExtensions = _validateExtensions(_self[_DYN_LOGGER$1 ], ChannelControllerPriority, _configExtensions);
                    _pluginChain = null;
                    _pluginVersionString = null;
                    _pluginVersionStringArr = null;
                    _channels = (_channelConfig || [])[0] || [];
                    _channels = sortPlugins(arrAppend(_channels, theExtensions[STR_CHANNELS ]));
                    var allExtensions = arrAppend(sortPlugins(theExtensions[STR_CORE ]), _channels);
                    _extensions = objFreeze(allExtensions);
                    var cfgExtensions = _self.config[STR_EXTENSIONS ] || [];
                    cfgExtensions.splice(0, cfgExtensions[_DYN_LENGTH$1 ]);
                    arrAppend(cfgExtensions, _extensions);
                    var rootCtx = _createTelCtx();
                    if (_channels && _channels[_DYN_LENGTH$1 ] > 0) {
                        initializePlugins(rootCtx[_DYN_CREATE_NEW ](_channels), allExtensions);
                    }
                    initializePlugins(rootCtx, allExtensions);
                    if (updateState) {
                        _doUpdate(updateState);
                    }
                }
                function _getPlugin(pluginIdentifier) {
                    var theExt = null;
                    var thePlugin = null;
                    var channelHosts = [];
                    arrForEach(_extensions, function (ext) {
                        if (ext[_DYN_IDENTIFIER ] === pluginIdentifier && ext !== _telemetryInitializerPlugin) {
                            thePlugin = ext;
                            return -1;
                        }
                        if (ext.getChannel) {
                            channelHosts[_DYN_PUSH ](ext);
                        }
                    });
                    if (!thePlugin && channelHosts[_DYN_LENGTH$1 ] > 0) {
                        arrForEach(channelHosts, function (host) {
                            thePlugin = host.getChannel(pluginIdentifier);
                            if (!thePlugin) {
                                return -1;
                            }
                        });
                    }
                    if (thePlugin) {
                        theExt = {
                            plugin: thePlugin,
                            setEnabled: function (enabled) {
                                _getPluginState(thePlugin)[STR_DISABLED] = !enabled;
                            },
                            isEnabled: function () {
                                var pluginState = _getPluginState(thePlugin);
                                return !pluginState[_DYN_TEARDOWN ] && !pluginState[STR_DISABLED];
                            },
                            remove: function (isAsync, removeCb) {
                                var _a;
                                if (isAsync === void 0) { isAsync = true; }
                                var pluginsToRemove = [thePlugin];
                                var unloadState = (_a = {
                                        reason: 1
                                    },
                                    _a[_DYN_IS_ASYNC ] = isAsync,
                                    _a);
                                _removePlugins(pluginsToRemove, unloadState, function (removed) {
                                    if (removed) {
                                        _initPluginChain({
                                            reason: 32 ,
                                            removed: pluginsToRemove
                                        });
                                    }
                                    removeCb && removeCb(removed);
                                });
                            }
                        };
                    }
                    return theExt;
                }
                function _getPluginChain() {
                    if (!_pluginChain) {
                        var extensions = (_extensions || []).slice();
                        if (arrIndexOf(extensions, _telemetryInitializerPlugin) === -1) {
                            extensions[_DYN_PUSH ](_telemetryInitializerPlugin);
                        }
                        _pluginChain = createTelemetryProxyChain(sortPlugins(extensions), _configHandler.cfg, _self);
                    }
                    return _pluginChain;
                }
                function _removePlugins(thePlugins, unloadState, removeComplete) {
                    if (thePlugins && thePlugins[_DYN_LENGTH$1 ] > 0) {
                        var unloadChain = createTelemetryProxyChain(thePlugins, _configHandler.cfg, _self);
                        var unloadCtx = createProcessTelemetryUnloadContext(unloadChain, _self);
                        unloadCtx[_DYN_ON_COMPLETE ](function () {
                            var removed = false;
                            var newConfigExtensions = [];
                            arrForEach(_configExtensions, function (plugin, idx) {
                                if (!_isPluginPresent(plugin, thePlugins)) {
                                    newConfigExtensions[_DYN_PUSH ](plugin);
                                }
                                else {
                                    removed = true;
                                }
                            });
                            _configExtensions = newConfigExtensions;
                            _pluginVersionString = null;
                            _pluginVersionStringArr = null;
                            var newChannelConfig = [];
                            if (_channelConfig) {
                                arrForEach(_channelConfig, function (queue, idx) {
                                    var newQueue = [];
                                    arrForEach(queue, function (channel) {
                                        if (!_isPluginPresent(channel, thePlugins)) {
                                            newQueue[_DYN_PUSH ](channel);
                                        }
                                        else {
                                            removed = true;
                                        }
                                    });
                                    newChannelConfig[_DYN_PUSH ](newQueue);
                                });
                                _channelConfig = newChannelConfig;
                            }
                            removeComplete && removeComplete(removed);
                            _startLogPoller();
                        });
                        unloadCtx[_DYN_PROCESS_NEXT ](unloadState);
                    }
                    else {
                        removeComplete(false);
                    }
                }
                function _flushInternalLogs() {
                    if (_logger && _logger.queue) {
                        var queue = _logger.queue.slice(0);
                        _logger.queue[_DYN_LENGTH$1 ] = 0;
                        arrForEach(queue, function (logMessage) {
                            var _a;
                            var item = (_a = {},
                                _a[_DYN_NAME ] = _internalLogsEventName ? _internalLogsEventName : "InternalMessageId: " + logMessage[_DYN_MESSAGE_ID ],
                                _a.iKey = _instrumentationKey,
                                _a[_DYN_TIME ] = toISOString(new Date()),
                                _a.baseType = _InternalLogMessage.dataType,
                                _a.baseData = { message: logMessage[_DYN_MESSAGE ] },
                                _a);
                            _self.track(item);
                        });
                    }
                }
                function _flushChannels(isAsync, callBack, sendReason, cbTimeout) {
                    var waiting = 1;
                    var doneIterating = false;
                    var cbTimer = null;
                    cbTimeout = cbTimeout || 5000;
                    function doCallback() {
                        waiting--;
                        if (doneIterating && waiting === 0) {
                            cbTimer && cbTimer[_DYN_CANCEL ]();
                            cbTimer = null;
                            callBack && callBack(doneIterating);
                            callBack = null;
                        }
                    }
                    if (_channels && _channels[_DYN_LENGTH$1 ] > 0) {
                        var flushCtx = _createTelCtx()[_DYN_CREATE_NEW ](_channels);
                        flushCtx.iterate(function (plugin) {
                            if (plugin.flush) {
                                waiting++;
                                var handled_1 = false;
                                if (!plugin.flush(isAsync, function () {
                                    handled_1 = true;
                                    doCallback();
                                }, sendReason)) {
                                    if (!handled_1) {
                                        if (isAsync && cbTimer == null) {
                                            cbTimer = scheduleTimeout(function () {
                                                cbTimer = null;
                                                doCallback();
                                            }, cbTimeout);
                                        }
                                        else {
                                            doCallback();
                                        }
                                    }
                                }
                            }
                        });
                    }
                    doneIterating = true;
                    doCallback();
                    return true;
                }
                function _initPerfManager() {
                    var prevCfgPerfMgr;
                    _addUnloadHook(_configHandler[_DYN_WATCH ](function (details) {
                        var enablePerfMgr = details.cfg.enablePerfMgr;
                        if (enablePerfMgr) {
                            var createPerfMgr = details.cfg[STR_CREATE_PERF_MGR ];
                            if (prevCfgPerfMgr !== createPerfMgr) {
                                if (!createPerfMgr) {
                                    createPerfMgr = _createPerfManager;
                                }
                                getSetValue(details.cfg, STR_CREATE_PERF_MGR, createPerfMgr);
                                prevCfgPerfMgr = createPerfMgr;
                                _cfgPerfManager = null;
                            }
                            if (!_perfManager && !_cfgPerfManager && isFunction(createPerfMgr)) {
                                _cfgPerfManager = createPerfMgr(_self, _self[_DYN_GET_NOTIFY_MGR ]());
                            }
                        }
                        else {
                            _cfgPerfManager = null;
                            prevCfgPerfMgr = null;
                        }
                    }));
                }
                function _doUpdate(updateState) {
                    var updateCtx = createProcessTelemetryUpdateContext(_getPluginChain(), _self);
                    updateCtx[_DYN_ON_COMPLETE ](_startLogPoller);
                    if (!_self._updateHook || _self._updateHook(updateCtx, updateState) !== true) {
                        updateCtx[_DYN_PROCESS_NEXT ](updateState);
                    }
                }
                function _logOrThrowError(message) {
                    var logger = _self[_DYN_LOGGER$1 ];
                    if (logger) {
                        _throwInternal(logger, 2 , 73 , message);
                        _startLogPoller();
                    }
                    else {
                        throwError(message);
                    }
                }
                function _notifyInvalidEvent(telemetryItem) {
                    var manager = _self[_DYN_GET_NOTIFY_MGR ]();
                    if (manager) {
                        manager[STR_EVENTS_DISCARDED ]([telemetryItem], 2 );
                    }
                }
                function _addUnloadHook(hooks) {
                    _hookContainer.add(hooks);
                }
            });
        }
        AppInsightsCore.__ieDyn=1;
        return AppInsightsCore;
    }());

    function parseResponse(response, diagLog) {
        try {
            if (response && response !== "") {
                var result = getJSON().parse(response);
                if (result && result[_DYN_ITEMS_RECEIVED ] && result[_DYN_ITEMS_RECEIVED ] >= result.itemsAccepted &&
                    result.itemsReceived - result.itemsAccepted === result.errors[_DYN_LENGTH$1 ]) {
                    return result;
                }
            }
        }
        catch (e) {
            _throwInternal(diagLog, 1 , 43 , "Cannot parse the response. " + (e[_DYN_NAME ] || dumpObj(e)), {
                response: response
            });
        }
        return null;
    }

    var STR_EMPTY$1 = "";
    var STR_NO_RESPONSE_BODY = "NoResponseBody";
    var _noResponseQs = "&" + STR_NO_RESPONSE_BODY + "=true";
    var STR_POST_METHOD = "POST";
    var SenderPostManager = /** @class */ (function () {
        function SenderPostManager() {
            var _syncFetchPayload = 0;
            var _enableSendPromise;
            var _isInitialized;
            var _diagLog;
            var _isOneDs;
            var _onCompleteFuncs;
            var _disableCredentials;
            var _fallbackInst;
            var _disableXhr;
            var _disableBeacon;
            var _disableBeaconSync;
            var _disableFetchKeepAlive;
            var _addNoResponse;
            var _timeoutWrapper;
            dynamicProto(SenderPostManager, this, function (_self, _base) {
                var _sendCredentials = true;
                _initDefaults();
                _self[_DYN_INITIALIZE$1 ] = function (config, diagLog) {
                    _diagLog = diagLog;
                    if (_isInitialized) {
                        _throwInternal(_diagLog, 1 , 28 , "Sender is already initialized");
                    }
                    _self.SetConfig(config);
                    _isInitialized = true;
                };
                _self["_getDbgPlgTargets"] = function () {
                    return [_isInitialized, _isOneDs, _disableCredentials, _enableSendPromise];
                };
                _self.SetConfig = function (config) {
                    try {
                        _onCompleteFuncs = config.senderOnCompleteCallBack || {};
                        _disableCredentials = !!config.disableCredentials;
                        _isOneDs = !!config.isOneDs;
                        _enableSendPromise = !!config.enableSendPromise;
                        _disableXhr = !!config.disableXhr;
                        _disableBeacon = !!config.disableBeacon;
                        _disableBeaconSync = !!config.disableBeaconSync;
                        _timeoutWrapper = config.timeWrapper;
                        _addNoResponse = !!config.addNoResponse;
                        _disableFetchKeepAlive = !!config.disableFetchKeepAlive;
                        _fallbackInst = { sendPOST: _xhrSender };
                        if (!_isOneDs) {
                            _sendCredentials = false;
                        }
                        if (_disableCredentials) {
                            var location_1 = getLocation();
                            if (location_1 && location_1.protocol && location_1.protocol[_DYN_TO_LOWER_CASE ]() === "file:") {
                                _sendCredentials = false;
                            }
                        }
                        return true;
                    }
                    catch (e) {
                    }
                    return false;
                };
                _self.getSyncFetchPayload = function () {
                    return _syncFetchPayload;
                };
                _self.getSenderInst = function (transports, sync) {
                    if (transports && transports[_DYN_LENGTH$1 ]) {
                        return _getSenderInterface(transports, sync);
                    }
                    return null;
                };
                _self.getFallbackInst = function () {
                    return _fallbackInst;
                };
                _self[_DYN__DO_TEARDOWN ] = function (unloadCtx, unloadState) {
                    _initDefaults();
                };
                function _onSuccess(res, onComplete) {
                    _doOnComplete(onComplete, 200, {}, res);
                }
                function _onError(message, onComplete) {
                    _throwInternal(_diagLog, 2 , 26 , "Failed to send telemetry.", { message: message });
                    _doOnComplete(onComplete, 400, {});
                }
                function _onNoPayloadUrl(onComplete) {
                    _onError("No endpoint url is provided for the batch", onComplete);
                }
                function _getSenderInterface(transports, syncSupport) {
                    var _a;
                    var transportType = 0 ;
                    var sendPostFunc = null;
                    var lp = 0;
                    while (sendPostFunc == null && lp < transports[_DYN_LENGTH$1 ]) {
                        transportType = transports[lp];
                        if (!_disableXhr && transportType === 1 ) {
                            if (useXDomainRequest()) {
                                sendPostFunc = _xdrSender;
                            }
                            else if (isXhrSupported()) {
                                sendPostFunc = _xhrSender;
                            }
                        }
                        else if (transportType === 2  && isFetchSupported(syncSupport) && (!syncSupport || !_disableFetchKeepAlive)) {
                            sendPostFunc = _doFetchSender;
                        }
                        else if (transportType === 3  && isBeaconsSupported() && (syncSupport ? !_disableBeaconSync : !_disableBeacon)) {
                            sendPostFunc = _beaconSender;
                        }
                        lp++;
                    }
                    if (sendPostFunc) {
                        return _a = {
                                _transport: transportType,
                                _isSync: syncSupport
                            },
                            _a[_DYN_SEND_POST ] = sendPostFunc,
                            _a;
                    }
                    return null;
                }
                function _doOnComplete(oncomplete, status, headers, response) {
                    try {
                        oncomplete && oncomplete(status, headers, response);
                    }
                    catch (e) {
                    }
                }
                function _doBeaconSend(payload, oncomplete) {
                    var nav = getNavigator();
                    var url = payload[_DYN_URL_STRING ];
                    if (!url) {
                        _onNoPayloadUrl(oncomplete);
                        return true;
                    }
                    url = payload[_DYN_URL_STRING ] + (_addNoResponse ? _noResponseQs : STR_EMPTY$1);
                    var data = payload[_DYN_DATA ];
                    var plainTextBatch = _isOneDs ? data : new Blob([data], { type: "text/plain;charset=UTF-8" });
                    var queued = nav.sendBeacon(url, plainTextBatch);
                    return queued;
                }
                function _beaconSender(payload, oncomplete, sync) {
                    var data = payload[_DYN_DATA ];
                    try {
                        if (data) {
                            if (!_doBeaconSend(payload, oncomplete)) {
                                var onRetry = _onCompleteFuncs && _onCompleteFuncs.beaconOnRetry;
                                if (onRetry && isFunction(onRetry)) {
                                    onRetry(payload, oncomplete, _doBeaconSend);
                                }
                                else {
                                    _fallbackInst && _fallbackInst[_DYN_SEND_POST ](payload, oncomplete, true);
                                    _throwInternal(_diagLog, 2 , 40 , ". " + "Failed to send telemetry with Beacon API, retried with normal sender.");
                                }
                            }
                            else {
                                _onSuccess(STR_EMPTY$1, oncomplete);
                            }
                        }
                    }
                    catch (e) {
                        _isOneDs && _warnToConsole(_diagLog, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(e));
                        _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, STR_EMPTY$1);
                    }
                    return;
                }
                function _xhrSender(payload, oncomplete, sync) {
                    var thePromise;
                    var resolveFunc;
                    var rejectFunc;
                    var headers = payload[_DYN_HEADERS ] || {};
                    if (!sync && _enableSendPromise) {
                        thePromise = createPromise(function (resolve, reject) {
                            resolveFunc = resolve;
                            rejectFunc = reject;
                        });
                    }
                    if (_isOneDs && sync && payload.disableXhrSync) {
                        sync = false;
                    }
                    var endPointUrl = payload[_DYN_URL_STRING ];
                    if (!endPointUrl) {
                        _onNoPayloadUrl(oncomplete);
                        resolveFunc && resolveFunc(false);
                        return;
                    }
                    var xhr = openXhr$1(STR_POST_METHOD, endPointUrl, _sendCredentials, true, sync, payload[_DYN_TIMEOUT ]);
                    if (!_isOneDs) {
                        xhr[_DYN_SET_REQUEST_HEADER ]("Content-type", "application/json");
                    }
                    arrForEach(objKeys(headers), function (headerName) {
                        xhr[_DYN_SET_REQUEST_HEADER ](headerName, headers[headerName]);
                    });
                    xhr.onreadystatechange = function () {
                        if (!_isOneDs) {
                            _doOnReadyFunc(xhr);
                            if (xhr.readyState === 4) {
                                resolveFunc && resolveFunc(true);
                            }
                        }
                    };
                    xhr.onload = function () {
                        if (_isOneDs) {
                            _doOnReadyFunc(xhr);
                        }
                    };
                    function _doOnReadyFunc(xhr) {
                        var onReadyFunc = _onCompleteFuncs && _onCompleteFuncs.xhrOnComplete;
                        var onReadyFuncExist = onReadyFunc && isFunction(onReadyFunc);
                        if (onReadyFuncExist) {
                            onReadyFunc(xhr, oncomplete, payload);
                        }
                        else {
                            var response = getResponseText(xhr);
                            _doOnComplete(oncomplete, xhr[_DYN_STATUS ], _getAllResponseHeaders(xhr, _isOneDs), response);
                        }
                    }
                    xhr.onerror = function (event) {
                        _doOnComplete(oncomplete, _isOneDs ? xhr[_DYN_STATUS ] : 400, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY$1 : formatErrorMessageXhr(xhr));
                        rejectFunc && rejectFunc(event);
                    };
                    xhr.ontimeout = function () {
                        _doOnComplete(oncomplete, _isOneDs ? xhr[_DYN_STATUS ] : 500, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY$1 : formatErrorMessageXhr(xhr));
                        resolveFunc && resolveFunc(false);
                    };
                    xhr.send(payload[_DYN_DATA ]);
                    return thePromise;
                }
                function _doFetchSender(payload, oncomplete, sync) {
                    var _a;
                    var endPointUrl = payload[_DYN_URL_STRING ];
                    var batch = payload[_DYN_DATA ];
                    var plainTextBatch = _isOneDs ? batch : new Blob([batch], { type: "application/json" });
                    var thePromise;
                    var resolveFunc;
                    var rejectFunc;
                    var requestHeaders = new Headers();
                    var batchLength = batch[_DYN_LENGTH$1 ];
                    var ignoreResponse = false;
                    var responseHandled = false;
                    var headers = payload[_DYN_HEADERS ] || {};
                    var init = (_a = {
                            method: STR_POST_METHOD,
                            body: plainTextBatch
                        },
                        _a[DisabledPropertyName] = true
                    ,
                        _a);
                    if (payload.headers && objKeys(payload.headers)[_DYN_LENGTH$1 ] > 0) {
                        arrForEach(objKeys(headers), function (headerName) {
                            requestHeaders.append(headerName, headers[headerName]);
                        });
                        init[_DYN_HEADERS ] = requestHeaders;
                    }
                    if (_sendCredentials && _isOneDs) {
                        init.credentials = "include";
                    }
                    if (sync) {
                        init.keepalive = true;
                        _syncFetchPayload += batchLength;
                        if (_isOneDs) {
                            if (payload["_sendReason"] === 2 ) {
                                ignoreResponse = true;
                                if (_addNoResponse) {
                                    endPointUrl += _noResponseQs;
                                }
                            }
                        }
                        else {
                            ignoreResponse = true;
                        }
                    }
                    var request = new Request(endPointUrl, init);
                    try {
                        request[DisabledPropertyName] = true;
                    }
                    catch (e) {
                    }
                    if (!sync && _enableSendPromise) {
                        thePromise = createPromise(function (resolve, reject) {
                            resolveFunc = resolve;
                            rejectFunc = reject;
                        });
                    }
                    if (!endPointUrl) {
                        _onNoPayloadUrl(oncomplete);
                        resolveFunc && resolveFunc(false);
                        return;
                    }
                    function _handleError(res) {
                        _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, _isOneDs ? STR_EMPTY$1 : res);
                    }
                    function _onFetchComplete(response, payload, value) {
                        var status = response[_DYN_STATUS ];
                        var onCompleteFunc = _onCompleteFuncs.fetchOnComplete;
                        if (onCompleteFunc && isFunction(onCompleteFunc)) {
                            onCompleteFunc(response, oncomplete, value || STR_EMPTY$1, payload);
                        }
                        else {
                            _doOnComplete(oncomplete, status, {}, value || STR_EMPTY$1);
                        }
                    }
                    try {
                        doAwaitResponse(fetch(_isOneDs ? endPointUrl : request, _isOneDs ? init : null), function (result) {
                            if (sync) {
                                _syncFetchPayload -= batchLength;
                                batchLength = 0;
                            }
                            if (!responseHandled) {
                                responseHandled = true;
                                if (!result.rejected) {
                                    var response_1 = result.value;
                                    try {
                                        if (!_isOneDs && !response_1.ok) {
                                            _handleError(response_1.statusText);
                                            resolveFunc && resolveFunc(false);
                                        }
                                        else {
                                            if (_isOneDs && !response_1.body) {
                                                _onFetchComplete(response_1, null, STR_EMPTY$1);
                                                resolveFunc && resolveFunc(true);
                                            }
                                            else {
                                                doAwaitResponse(response_1.text(), function (resp) {
                                                    _onFetchComplete(response_1, payload, resp.value);
                                                    resolveFunc && resolveFunc(true);
                                                });
                                            }
                                        }
                                    }
                                    catch (e) {
                                        _handleError(dumpObj(e));
                                        rejectFunc && rejectFunc(e);
                                    }
                                }
                                else {
                                    _handleError(result.reason && result.reason[_DYN_MESSAGE ]);
                                    rejectFunc && rejectFunc(result.reason);
                                }
                            }
                        });
                    }
                    catch (e) {
                        if (!responseHandled) {
                            _handleError(dumpObj(e));
                            rejectFunc && rejectFunc(e);
                        }
                    }
                    if (ignoreResponse && !responseHandled) {
                        responseHandled = true;
                        _doOnComplete(oncomplete, 200, {});
                        resolveFunc && resolveFunc(true);
                    }
                    if (_isOneDs && !responseHandled && payload[_DYN_TIMEOUT ] > 0) {
                        _timeoutWrapper && _timeoutWrapper.set(function () {
                            if (!responseHandled) {
                                responseHandled = true;
                                _doOnComplete(oncomplete, 500, {});
                                resolveFunc && resolveFunc(true);
                            }
                        }, payload[_DYN_TIMEOUT ]);
                    }
                    return thePromise;
                }
                function _xdrSender(payload, oncomplete, sync) {
                    var _window = getWindow();
                    var xdr = new XDomainRequest();
                    var data = payload[_DYN_DATA ];
                    xdr.onload = function () {
                        var response = getResponseText(xdr);
                        var onloadFunc = _onCompleteFuncs && _onCompleteFuncs.xdrOnComplete;
                        if (onloadFunc && isFunction(onloadFunc)) {
                            onloadFunc(xdr, oncomplete, payload);
                        }
                        else {
                            _doOnComplete(oncomplete, 200, {}, response);
                        }
                    };
                    xdr.onerror = function () {
                        _doOnComplete(oncomplete, 400, {}, _isOneDs ? STR_EMPTY$1 : formatErrorMessageXdr(xdr));
                    };
                    xdr.ontimeout = function () {
                        _doOnComplete(oncomplete, 500, {});
                    };
                    xdr.onprogress = function () { };
                    var hostingProtocol = _window && _window.location && _window.location[_DYN_PROTOCOL ] || "";
                    var endpoint = payload[_DYN_URL_STRING ];
                    if (!endpoint) {
                        _onNoPayloadUrl(oncomplete);
                        return;
                    }
                    if (!_isOneDs && endpoint.lastIndexOf(hostingProtocol, 0) !== 0) {
                        var msg = "Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol.";
                        _throwInternal(_diagLog, 2 , 40 , ". " + msg);
                        _onError(msg, oncomplete);
                        return;
                    }
                    var endpointUrl = _isOneDs ? endpoint : endpoint[_DYN_REPLACE ](/^(https?:)/, "");
                    xdr.open(STR_POST_METHOD, endpointUrl);
                    if (payload[_DYN_TIMEOUT ]) {
                        xdr[_DYN_TIMEOUT ] = payload[_DYN_TIMEOUT ];
                    }
                    xdr.send(data);
                    if (_isOneDs && sync) {
                        _timeoutWrapper && _timeoutWrapper.set(function () {
                            xdr.send(data);
                        }, 0);
                    }
                    else {
                        xdr.send(data);
                    }
                }
                function _initDefaults() {
                    _syncFetchPayload = 0;
                    _isInitialized = false;
                    _enableSendPromise = false;
                    _diagLog = null;
                    _isOneDs = null;
                    _onCompleteFuncs = null;
                    _disableCredentials = null;
                    _fallbackInst = null;
                    _disableXhr = false;
                    _disableBeacon = false;
                    _disableBeaconSync = false;
                    _disableFetchKeepAlive = false;
                    _addNoResponse = false;
                    _timeoutWrapper = null;
                }
            });
        }
        SenderPostManager.__ieDyn=1;
        return SenderPostManager;
    }());

    var strOnPrefix = "on";
    var strAttachEvent = "attachEvent";
    var strAddEventHelper = "addEventListener";
    var strDetachEvent = "detachEvent";
    var strRemoveEventListener = "removeEventListener";
    var strEvents = "events";
    var strVisibilityChangeEvt = "visibilitychange";
    var strPageHide = "pagehide";
    var strPageShow = "pageshow";
    var strUnload = "unload";
    var strBeforeUnload = "beforeunload";
    var strPageHideNamespace = createUniqueNamespace("aiEvtPageHide");
    var strPageShowNamespace = createUniqueNamespace("aiEvtPageShow");
    var rRemoveEmptyNs = /\.[\.]+/g;
    var rRemoveTrailingEmptyNs = /[\.]+$/;
    var _guid = 1;
    var elmNodeData = createElmNodeData("events");
    var eventNamespace = /^([^.]*)(?:\.(.+)|)/;
    function _normalizeNamespace(name) {
        if (name && name[_DYN_REPLACE ]) {
            return name[_DYN_REPLACE ](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, STR_EMPTY$2);
        }
        return name;
    }
    function _getEvtNamespace(eventName, evtNamespace) {
        var _a;
        if (evtNamespace) {
            var theNamespace_1 = STR_EMPTY$2;
            if (isArray(evtNamespace)) {
                theNamespace_1 = STR_EMPTY$2;
                arrForEach(evtNamespace, function (name) {
                    name = _normalizeNamespace(name);
                    if (name) {
                        if (name[0] !== ".") {
                            name = "." + name;
                        }
                        theNamespace_1 += name;
                    }
                });
            }
            else {
                theNamespace_1 = _normalizeNamespace(evtNamespace);
            }
            if (theNamespace_1) {
                if (theNamespace_1[0] !== ".") {
                    theNamespace_1 = "." + theNamespace_1;
                }
                eventName = (eventName || STR_EMPTY$2) + theNamespace_1;
            }
        }
        var parsedEvent = (eventNamespace.exec(eventName || STR_EMPTY$2) || []);
        return _a = {},
            _a[_DYN_TYPE ] = parsedEvent[1],
            _a.ns = ((parsedEvent[2] || STR_EMPTY$2).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, STR_EMPTY$2)[_DYN_SPLIT ](".").sort()).join("."),
            _a;
    }
    function __getRegisteredEvents(target, eventName, evtNamespace) {
        var theEvents = [];
        var eventCache = elmNodeData.get(target, strEvents, {}, false);
        var evtName = _getEvtNamespace(eventName, evtNamespace);
        objForEachKey(eventCache, function (evtType, registeredEvents) {
            arrForEach(registeredEvents, function (value) {
                var _a;
                if (!evtName[_DYN_TYPE ] || evtName[_DYN_TYPE ] === value.evtName[_DYN_TYPE ]) {
                    if (!evtName.ns || evtName.ns === evtName.ns) {
                        theEvents[_DYN_PUSH ]((_a = {},
                            _a[_DYN_NAME ] = value.evtName[_DYN_TYPE ] + (value.evtName.ns ? "." + value.evtName.ns : STR_EMPTY$2),
                            _a.handler = value[_DYN_HANDLER ],
                            _a));
                    }
                }
            });
        });
        return theEvents;
    }
    function _getRegisteredEvents(target, evtName, addDefault) {
        if (addDefault === void 0) { addDefault = true; }
        var aiEvts = elmNodeData.get(target, strEvents, {}, addDefault);
        var registeredEvents = aiEvts[evtName];
        if (!registeredEvents) {
            registeredEvents = aiEvts[evtName] = [];
        }
        return registeredEvents;
    }
    function _doDetach(obj, evtName, handlerRef, useCapture) {
        if (obj && evtName && evtName[_DYN_TYPE ]) {
            if (obj[strRemoveEventListener]) {
                obj[strRemoveEventListener](evtName[_DYN_TYPE ], handlerRef, useCapture);
            }
            else if (obj[strDetachEvent]) {
                obj[strDetachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
            }
        }
    }
    function _doAttach(obj, evtName, handlerRef, useCapture) {
        var result = false;
        if (obj && evtName && evtName[_DYN_TYPE ] && handlerRef) {
            if (obj[strAddEventHelper]) {
                obj[strAddEventHelper](evtName[_DYN_TYPE ], handlerRef, useCapture);
                result = true;
            }
            else if (obj[strAttachEvent]) {
                obj[strAttachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
                result = true;
            }
        }
        return result;
    }
    function _doUnregister(target, events, evtName, unRegFn) {
        var idx = events[_DYN_LENGTH$1 ];
        while (idx--) {
            var theEvent = events[idx];
            if (theEvent) {
                if (!evtName.ns || evtName.ns === theEvent.evtName.ns) {
                    if (!unRegFn || unRegFn(theEvent)) {
                        _doDetach(target, theEvent.evtName, theEvent[_DYN_HANDLER ], theEvent.capture);
                        events[_DYN_SPLICE ](idx, 1);
                    }
                }
            }
        }
    }
    function _unregisterEvents(target, evtName, unRegFn) {
        if (evtName[_DYN_TYPE ]) {
            _doUnregister(target, _getRegisteredEvents(target, evtName[_DYN_TYPE ]), evtName, unRegFn);
        }
        else {
            var eventCache = elmNodeData.get(target, strEvents, {});
            objForEachKey(eventCache, function (evtType, events) {
                _doUnregister(target, events, evtName, unRegFn);
            });
            if (objKeys(eventCache)[_DYN_LENGTH$1 ] === 0) {
                elmNodeData.kill(target, strEvents);
            }
        }
    }
    function mergeEvtNamespace(theNamespace, namespaces) {
        var newNamespaces;
        if (namespaces) {
            if (isArray(namespaces)) {
                newNamespaces = [theNamespace].concat(namespaces);
            }
            else {
                newNamespaces = [theNamespace, namespaces];
            }
            newNamespaces = (_getEvtNamespace("xx", newNamespaces).ns)[_DYN_SPLIT ](".");
        }
        else {
            newNamespaces = theNamespace;
        }
        return newNamespaces;
    }
    function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
        var _a;
        if (useCapture === void 0) { useCapture = false; }
        var result = false;
        if (target) {
            try {
                var evtName = _getEvtNamespace(eventName, evtNamespace);
                result = _doAttach(target, evtName, handlerRef, useCapture);
                if (result && elmNodeData.accept(target)) {
                    var registeredEvent = (_a = {
                            guid: _guid++,
                            evtName: evtName
                        },
                        _a[_DYN_HANDLER ] = handlerRef,
                        _a.capture = useCapture,
                        _a);
                    _getRegisteredEvents(target, evtName.type)[_DYN_PUSH ](registeredEvent);
                }
            }
            catch (e) {
            }
        }
        return result;
    }
    function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        if (target) {
            try {
                var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
                var found_1 = false;
                _unregisterEvents(target, evtName_1, function (regEvent) {
                    if ((evtName_1.ns && !handlerRef) || regEvent[_DYN_HANDLER ] === handlerRef) {
                        found_1 = true;
                        return true;
                    }
                    return false;
                });
                if (!found_1) {
                    _doDetach(target, evtName_1, handlerRef, useCapture);
                }
            }
            catch (e) {
            }
        }
    }
    function attachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        return eventOn(obj, eventNameWithoutOn, handlerRef, null, useCapture);
    }
    function detachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        eventOff(obj, eventNameWithoutOn, handlerRef, null, useCapture);
    }
    function addEventHandler(eventName, callback, evtNamespace) {
        var result = false;
        var w = getWindow();
        if (w) {
            result = eventOn(w, eventName, callback, evtNamespace);
            result = eventOn(w["body"], eventName, callback, evtNamespace) || result;
        }
        var doc = getDocument();
        if (doc) {
            result = eventOn(doc, eventName, callback, evtNamespace) || result;
        }
        return result;
    }
    function removeEventHandler(eventName, callback, evtNamespace) {
        var w = getWindow();
        if (w) {
            eventOff(w, eventName, callback, evtNamespace);
            eventOff(w["body"], eventName, callback, evtNamespace);
        }
        var doc = getDocument();
        if (doc) {
            eventOff(doc, eventName, callback, evtNamespace);
        }
    }
    function _addEventListeners(events, listener, excludeEvents, evtNamespace) {
        var added = false;
        if (listener && events && events[_DYN_LENGTH$1 ] > 0) {
            arrForEach(events, function (name) {
                if (name) {
                    if (!excludeEvents || arrIndexOf(excludeEvents, name) === -1) {
                        added = addEventHandler(name, listener, evtNamespace) || added;
                    }
                }
            });
        }
        return added;
    }
    function addEventListeners(events, listener, excludeEvents, evtNamespace) {
        var added = false;
        if (listener && events && isArray(events)) {
            added = _addEventListeners(events, listener, excludeEvents, evtNamespace);
            if (!added && excludeEvents && excludeEvents[_DYN_LENGTH$1 ] > 0) {
                added = _addEventListeners(events, listener, null, evtNamespace);
            }
        }
        return added;
    }
    function removeEventListeners(events, listener, evtNamespace) {
        if (events && isArray(events)) {
            arrForEach(events, function (name) {
                if (name) {
                    removeEventHandler(name, listener, evtNamespace);
                }
            });
        }
    }
    function addPageUnloadEventListener(listener, excludeEvents, evtNamespace) {
        return addEventListeners([strBeforeUnload, strUnload, strPageHide], listener, excludeEvents, evtNamespace);
    }
    function removePageUnloadEventListener(listener, evtNamespace) {
        removeEventListeners([strBeforeUnload, strUnload, strPageHide], listener, evtNamespace);
    }
    function addPageHideEventListener(listener, excludeEvents, evtNamespace) {
        function _handlePageVisibility(evt) {
            var doc = getDocument();
            if (listener && doc && doc.visibilityState === "hidden") {
                listener(evt);
            }
        }
        var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
        var pageUnloadAdded = _addEventListeners([strPageHide], listener, excludeEvents, newNamespaces);
        if (!excludeEvents || arrIndexOf(excludeEvents, strVisibilityChangeEvt) === -1) {
            pageUnloadAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageUnloadAdded;
        }
        if (!pageUnloadAdded && excludeEvents) {
            pageUnloadAdded = addPageHideEventListener(listener, null, evtNamespace);
        }
        return pageUnloadAdded;
    }
    function removePageHideEventListener(listener, evtNamespace) {
        var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
        removeEventListeners([strPageHide], listener, newNamespaces);
        removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
    }
    function addPageShowEventListener(listener, excludeEvents, evtNamespace) {
        function _handlePageVisibility(evt) {
            var doc = getDocument();
            if (listener && doc && doc.visibilityState === "visible") {
                listener(evt);
            }
        }
        var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
        var pageShowAdded = _addEventListeners([strPageShow], listener, excludeEvents, newNamespaces);
        pageShowAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageShowAdded;
        if (!pageShowAdded && excludeEvents) {
            pageShowAdded = addPageShowEventListener(listener, null, evtNamespace);
        }
        return pageShowAdded;
    }
    function removePageShowEventListener(listener, evtNamespace) {
        var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
        removeEventListeners([strPageShow], listener, newNamespaces);
        removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
    }

    var LoggingSeverity = createEnumStyle({
        DISABLED: 0 ,
        CRITICAL: 1 ,
        WARNING: 2 ,
        DEBUG: 3
    });

    var STR_EMPTY = "";
    var STR_DEFAULT_ENDPOINT_URL = "https://browser.events.data.microsoft.com/OneCollector/1.0/";
    var STR_VERSION = "version";
    var STR_PROPERTIES = "properties";

    var _DYN_INITIALIZE = "initialize";
    var _DYN_LOGGER = "logger";
    var _DYN_INDEX_OF = "indexOf";
    var _DYN_TIMINGS = "timings";
    var _DYN_POLL_INTERNAL_LOGS = "pollInternalLogs";
    var _DYN_VALUE = "value";
    var _DYN_KIND = "kind";
    var _DYN_LENGTH = "length";
    var _DYN_PROCESS_TELEMETRY_ST0 = "processTelemetryStart";
    var _DYN_HANDLE_FIELD = "handleField";
    var _DYN_RM_SANITIZER = "rmSanitizer";
    var _DYN_RM_FIELD_SANITIZER = "rmFieldSanitizer";
    var _DYN_CAN_HANDLE = "canHandle";

    var _a;
    var Version = '4.2.2';
    var FullVersionString = "1DS-Web-JS-" + Version;
    var ObjHasOwnProperty = ObjProto$1.hasOwnProperty;
    var strDisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var strWithCredentials = "withCredentials";
    var strTimeout = "timeout";
    var _fieldTypeEventPropMap = (_a = {},
        _a[0 ] = 0 ,
        _a[2 ] = 6 ,
        _a[1 ] = 1 ,
        _a[3 ] = 7 ,
        _a[4096  | 2 ] = 6 ,
        _a[4096  | 1 ] = 1 ,
        _a[4096  | 3 ] = 7 ,
        _a);
    var uInt8ArraySupported = null;
    var isDocumentObjectAvailable = hasDocument();
    var isWindowObjectAvailable = hasWindow();
    function isValueAssigned(value) {
        return !(value === STR_EMPTY || isNullOrUndefined(value));
    }
    function getTenantId(apiKey) {
        if (apiKey) {
            var indexTenantId = strIndexOf(apiKey, "-");
            if (indexTenantId > -1) {
                return strLeft(apiKey, indexTenantId);
            }
        }
        return STR_EMPTY;
    }
    function isUint8ArrayAvailable() {
        if (uInt8ArraySupported === null) {
            uInt8ArraySupported = !isUndefined(Uint8Array) && !isSafariOrFirefox() && !isReactNative();
        }
        return uInt8ArraySupported;
    }
    function isLatency(value) {
        if (value && isNumber(value) && value >= 1  && value <= 4 ) {
            return true;
        }
        return false;
    }
    function sanitizeProperty(name, property, stringifyObjects) {
        if ((!property && !isValueAssigned(property)) || typeof name !== "string") {
            return null;
        }
        var propType = typeof property;
        if (propType === "string" || propType === "number" || propType === "boolean" || isArray(property)) {
            property = { value: property };
        }
        else if (propType === "object" && !ObjHasOwnProperty.call(property, "value")) {
            property = { value: stringifyObjects ? JSON.stringify(property) : property };
        }
        else if (isNullOrUndefined(property[_DYN_VALUE ])
            || property[_DYN_VALUE ] === STR_EMPTY || (!isString(property[_DYN_VALUE ])
            && !isNumber(property[_DYN_VALUE ]) && !isBoolean(property[_DYN_VALUE ])
            && !isArray(property[_DYN_VALUE ]))) {
            return null;
        }
        if (isArray(property[_DYN_VALUE ]) &&
            !isArrayValid(property[_DYN_VALUE ])) {
            return null;
        }
        if (!isNullOrUndefined(property[_DYN_KIND ])) {
            if (isArray(property[_DYN_VALUE ]) || !isValueKind(property[_DYN_KIND ])) {
                return null;
            }
            property[_DYN_VALUE ] = property[_DYN_VALUE ].toString();
        }
        return property;
    }
    function getCommonSchemaMetaData(value, kind, type) {
        var encodedTypeValue = -1;
        if (!isUndefined(value)) {
            if (kind > 0) {
                if (kind === 32 ) {
                    encodedTypeValue = (1 << 13);
                }
                else if (kind <= 13) {
                    encodedTypeValue = (kind << 5);
                }
            }
            if (isDataType(type)) {
                if (encodedTypeValue === -1) {
                    encodedTypeValue = 0;
                }
                encodedTypeValue |= type;
            }
            else {
                var propType = _fieldTypeEventPropMap[getFieldValueType(value)] || -1;
                if (encodedTypeValue !== -1 && propType !== -1) {
                    encodedTypeValue |= propType;
                }
                else if (propType === 6 ) {
                    encodedTypeValue = propType;
                }
            }
        }
        return encodedTypeValue;
    }
    function getCookieValue(cookieMgr, name, decode) {
        if (decode === void 0) { decode = true; }
        var cookieValue;
        if (cookieMgr) {
            cookieValue = cookieMgr.get(name);
            if (decode && cookieValue && decodeURIComponent) {
                cookieValue = decodeURIComponent(cookieValue);
            }
        }
        return cookieValue || STR_EMPTY;
    }
    function createGuid(style) {
        if (style === void 0) { style = "D" ; }
        var theGuid = newGuid();
        if (style === "B" ) {
            theGuid = "{" + theGuid + "}";
        }
        else if (style === "P" ) {
            theGuid = "(" + theGuid + ")";
        }
        else if (style === "N" ) {
            theGuid = theGuid.replace(/-/g, STR_EMPTY);
        }
        return theGuid;
    }
    function extend(obj, obj2, obj3, obj4, obj5) {
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments[_DYN_LENGTH ];
        var theArgs = arguments;
        if (isBoolean(theArgs[0])) {
            deep = theArgs[0];
            i++;
        }
        for (; i < length; i++) {
            var obj = theArgs[i];
            objForEachKey(obj, function (prop, value) {
                if (deep && value && isObject(value)) {
                    if (isArray(value)) {
                        extended[prop] = extended[prop] || [];
                        arrForEach(value, function (arrayValue, arrayIndex) {
                            if (arrayValue && isObject(arrayValue)) {
                                extended[prop][arrayIndex] = extend(true, extended[prop][arrayIndex], arrayValue);
                            }
                            else {
                                extended[prop][arrayIndex] = arrayValue;
                            }
                        });
                    }
                    else {
                        extended[prop] = extend(true, extended[prop], value);
                    }
                }
                else {
                    extended[prop] = value;
                }
            });
        }
        return extended;
    }
    var getTime = perfNow;
    function isValueKind(value) {
        if (value === 0  || ((value > 0  && value <= 13 ) || value === 32 )) {
            return true;
        }
        return false;
    }
    function isDataType(value) {
        if (value >= 0 && value <= 9) {
            return true;
        }
        return false;
    }
    function isSafariOrFirefox() {
        var nav = getNavigator();
        if (!isUndefined(nav) && nav.userAgent) {
            var ua = nav.userAgent.toLowerCase();
            if ((ua[_DYN_INDEX_OF ]("safari") >= 0 || ua[_DYN_INDEX_OF ]("firefox") >= 0) && ua[_DYN_INDEX_OF ]("chrome") < 0) {
                return true;
            }
        }
        return false;
    }
    function isArrayValid(value) {
        return value[_DYN_LENGTH ] > 0;
    }
    function setProcessTelemetryTimings(event, identifier) {
        var evt = event;
        evt[_DYN_TIMINGS ] = evt[_DYN_TIMINGS ] || {};
        evt[_DYN_TIMINGS ][_DYN_PROCESS_TELEMETRY_ST0 ] = evt[_DYN_TIMINGS ][_DYN_PROCESS_TELEMETRY_ST0 ] || {};
        evt[_DYN_TIMINGS ][_DYN_PROCESS_TELEMETRY_ST0 ][identifier] = getTime();
    }
    function getFieldValueType(value) {
        var theType = 0 ;
        if (value !== null && value !== undefined) {
            var objType = typeof value;
            if (objType === "string") {
                theType = 1 ;
            }
            else if (objType === "number") {
                theType = 2 ;
            }
            else if (objType === "boolean") {
                theType = 3 ;
            }
            else if (objType === strShimObject) {
                theType = 4 ;
                if (isArray(value)) {
                    theType = 4096 ;
                    if (value[_DYN_LENGTH ] > 0) {
                        theType |= getFieldValueType(value[0]);
                    }
                }
                else if (ObjHasOwnProperty.call(value, "value")) {
                    theType = 8192  | getFieldValueType(value[_DYN_VALUE ]);
                }
            }
        }
        return theType;
    }
    function isChromium() {
        return !!getInst("chrome");
    }
    function openXhr(method, urlString, withCredentials, disabled, isSync, timeout) {
        if (disabled === void 0) { disabled = false; }
        if (isSync === void 0) { isSync = false; }
        function _wrapSetXhrProp(xhr, prop, value) {
            try {
                xhr[prop] = value;
            }
            catch (e) {
            }
        }
        var xhr = new XMLHttpRequest();
        if (disabled) {
            _wrapSetXhrProp(xhr, strDisabledPropertyName, disabled);
        }
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
        }
        xhr.open(method, urlString, !isSync);
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
        }
        if (!isSync && timeout) {
            _wrapSetXhrProp(xhr, strTimeout, timeout);
        }
        return xhr;
    }
    function isGreaterThanZero(value) {
        return value > 0;
    }

    var defaultConfig = objDeepFreeze({
        endpointUrl: STR_DEFAULT_ENDPOINT_URL,
        propertyStorageOverride: { isVal: _chkPropOverride }
    });
    function _chkPropOverride(propertyStorageOverride) {
        if (propertyStorageOverride && (!propertyStorageOverride.getProperty || !propertyStorageOverride.setProperty)) {
            throwError("Invalid property storage override passed.");
        }
        return true;
    }
    var AppInsightsCore = /** @class */ (function (_super) {
        __extendsFn(AppInsightsCore, _super);
        function AppInsightsCore() {
            var _this = _super.call(this) || this;
            dynamicProto(AppInsightsCore, _this, function (_self, _base) {
                _self[_DYN_INITIALIZE ] = function (config, extensions, logger, notificationManager) {
                    doPerf(_self, function () { return "AppInsightsCore.initialize"; }, function () {
                        try {
                            _base[_DYN_INITIALIZE ](createDynamicConfig(config, defaultConfig, logger || _self[_DYN_LOGGER ], false).cfg, extensions, logger, notificationManager);
                        }
                        catch (e) {
                            var logger_1 = _self[_DYN_LOGGER ];
                            var message = dumpObj(e);
                            if (message[_DYN_INDEX_OF ]("channels") !== -1) {
                                message += "\n - Channels must be provided through config.channels only!";
                            }
                            _throwInternal(logger_1, 1 , 514 , "SDK Initialization Failed - no telemetry will be sent: " + message);
                        }
                    }, function () { return ({ config: config, extensions: extensions, logger: logger, notificationManager: notificationManager }); });
                };
                _self.track = function (item) {
                    doPerf(_self, function () { return "AppInsightsCore.track"; }, function () {
                        var telemetryItem = item;
                        if (telemetryItem) {
                            telemetryItem[_DYN_TIMINGS ] = telemetryItem[_DYN_TIMINGS ] || {};
                            telemetryItem[_DYN_TIMINGS ].trackStart = getTime();
                            if (!isLatency(telemetryItem.latency)) {
                                telemetryItem.latency = 1 ;
                            }
                            var itemExt = telemetryItem.ext = telemetryItem.ext || {};
                            itemExt.sdk = itemExt.sdk || {};
                            itemExt.sdk.ver = FullVersionString;
                            var baseData = telemetryItem.baseData = telemetryItem.baseData || {};
                            baseData[STR_PROPERTIES ] = baseData[STR_PROPERTIES ] || {};
                            var itemProperties = baseData[STR_PROPERTIES ];
                            itemProperties[STR_VERSION] = itemProperties[STR_VERSION] || _self.pluginVersionString || STR_EMPTY;
                        }
                        _base.track(telemetryItem);
                    }, function () { return ({ item: item }); }, !(item.sync));
                };
                _self[_DYN_POLL_INTERNAL_LOGS ] = function (eventName) {
                    return _base[_DYN_POLL_INTERNAL_LOGS ](eventName || "InternalLog");
                };
            });
            return _this;
        }
        AppInsightsCore.__ieDyn=1;
        return AppInsightsCore;
    }(AppInsightsCore$1));

    var ValueKind = createEnumStyle({
        NotSet: 0 ,
        Pii_DistinguishedName: 1 ,
        Pii_GenericData: 2 ,
        Pii_IPV4Address: 3 ,
        Pii_IPv6Address: 4 ,
        Pii_MailSubject: 5 ,
        Pii_PhoneNumber: 6 ,
        Pii_QueryString: 7 ,
        Pii_SipAddress: 8 ,
        Pii_SmtpAddress: 9 ,
        Pii_Identity: 10 ,
        Pii_Uri: 11 ,
        Pii_Fqdn: 12 ,
        Pii_IPV4AddressLegacy: 13 ,
        Pii_IPv6ScrubLastHextets: 14 ,
        Pii_DropValue: 15 ,
        CustomerContent_GenericContent: 32
    });
    var EventLatency = createEnumStyle({
        Normal: 1 ,
        CostDeferred: 2 ,
        RealTime: 3 ,
        Immediate: 4
    });
    var EventPropertyType = createEnumStyle({
        Unspecified: 0 ,
        String: 1 ,
        Int32: 2 ,
        UInt32: 3 ,
        Int64: 4 ,
        UInt64: 5 ,
        Double: 6 ,
        Bool: 7 ,
        Guid: 8 ,
        DateTime: 9
    });
    var EventPersistence = createEnumStyle({
        Normal: 1 ,
        Critical: 2
    });
    var TraceLevel = createEnumStyle({
        NONE: 0 ,
        ERROR: 1 ,
        WARNING: 2 ,
        INFORMATION: 3
    });

    var ValueSanitizer = /** @class */ (function () {
        function ValueSanitizer(fieldSanitizerProvider) {
            var _self = this;
            var _sanitizerMap = {};
            var _sanitizers = [];
            var _fieldSanitizers = [];
            if (fieldSanitizerProvider) {
                _fieldSanitizers.push(fieldSanitizerProvider);
            }
            function _getFieldSanitizer(path, name) {
                var result;
                var fieldLookup = _sanitizerMap[path];
                if (fieldLookup) {
                    result = fieldLookup[name];
                }
                if (!result && result !== null) {
                    if (isString(path) && isString(name)) {
                        if (_fieldSanitizers[_DYN_LENGTH ] > 0) {
                            for (var lp = 0; lp < _fieldSanitizers[_DYN_LENGTH ]; lp++) {
                                if (_fieldSanitizers[lp][_DYN_HANDLE_FIELD ](path, name)) {
                                    result = {
                                        canHandle: true,
                                        fieldHandler: _fieldSanitizers[lp]
                                    };
                                    break;
                                }
                            }
                        }
                        else if (_sanitizers[_DYN_LENGTH ] === 0) {
                            result = {
                                canHandle: true
                            };
                        }
                    }
                    if (!result && result !== null) {
                        result = null;
                        for (var lp = 0; lp < _sanitizers[_DYN_LENGTH ]; lp++) {
                            if (_sanitizers[lp][_DYN_HANDLE_FIELD ](path, name)) {
                                result = {
                                    canHandle: true,
                                    handler: _sanitizers[lp],
                                    fieldHandler: null
                                };
                                break;
                            }
                        }
                    }
                    if (!fieldLookup) {
                        fieldLookup = _sanitizerMap[path] = {};
                    }
                    fieldLookup[name] = result;
                }
                return result;
            }
            _self.clearCache = function () {
                _sanitizerMap = {};
            };
            _self.addSanitizer = function (newSanitizer) {
                if (newSanitizer) {
                    if (!arrIncludes(_sanitizers, newSanitizer)) {
                        _sanitizers.push(newSanitizer);
                    }
                    _sanitizerMap = {};
                }
            };
            _self.addFieldSanitizer = function (fieldSanitizer) {
                if (fieldSanitizer) {
                    if (!arrIncludes(_fieldSanitizers, fieldSanitizer)) {
                        _fieldSanitizers.push(fieldSanitizer);
                    }
                    _sanitizerMap = {};
                }
            };
            _self[_DYN_RM_SANITIZER ] = function (theSanitizer) {
                if (theSanitizer) {
                    var idx = arrIndexOf(_sanitizers, theSanitizer);
                    if (idx !== -1) {
                        _sanitizers.splice(idx, 1);
                        _sanitizerMap = {};
                    }
                    arrForEach(_sanitizers, function (sanitizer) {
                        sanitizer && sanitizer[_DYN_RM_SANITIZER ] && sanitizer[_DYN_RM_SANITIZER ](theSanitizer);
                    });
                }
            };
            _self[_DYN_RM_FIELD_SANITIZER ] = function (theFieldSanitizer) {
                if (theFieldSanitizer) {
                    var idx = arrIndexOf(_fieldSanitizers, theFieldSanitizer);
                    if (idx !== -1) {
                        _fieldSanitizers.splice(idx, 1);
                        _sanitizerMap = {};
                    }
                    arrForEach(_sanitizers, function (sanitizer) {
                        sanitizer && sanitizer[_DYN_RM_FIELD_SANITIZER ] && sanitizer[_DYN_RM_FIELD_SANITIZER ](theFieldSanitizer);
                    });
                }
            };
            _self.isEmpty = function () {
                return (getLength(_sanitizers) + getLength(_fieldSanitizers)) === 0;
            };
            _self[_DYN_HANDLE_FIELD ] = function (path, name) {
                var mapValue = _getFieldSanitizer(path, name);
                return mapValue ? mapValue[_DYN_CAN_HANDLE ] : false;
            };
            _self[_DYN_VALUE ] = function (path, name, value, stringifyObjects) {
                var mapValue = _getFieldSanitizer(path, name);
                if (mapValue && mapValue[_DYN_CAN_HANDLE ]) {
                    if (!mapValue || !mapValue[_DYN_CAN_HANDLE ]) {
                        return null;
                    }
                    if (mapValue.handler) {
                        return mapValue.handler[_DYN_VALUE ](path, name, value, stringifyObjects);
                    }
                    if (!isString(name) || isNullOrUndefined(value) || value === STR_EMPTY) {
                        return null;
                    }
                    var property = null;
                    var fieldType = getFieldValueType(value);
                    if ((fieldType & 8192 ) === 8192 ) {
                        var subType = fieldType & ~8192 ;
                        property = value;
                        if (!isValueAssigned(property[_DYN_VALUE ]) ||
                            (subType !== 1  &&
                                subType !== 2  &&
                                subType !== 3  &&
                                (subType & 4096 ) !== 4096 )) {
                            return null;
                        }
                    }
                    else if (fieldType === 1  ||
                        fieldType === 2  ||
                        fieldType === 3  ||
                        (fieldType & 4096 ) === 4096 ) {
                        property = _convertToProperty(path, name, value);
                    }
                    else if (fieldType === 4 ) {
                        property = _convertToProperty(path, name, !!stringifyObjects ? JSON.stringify(value) : value);
                    }
                    if (property) {
                        return _handleProperty(mapValue, path, name, fieldType, property, stringifyObjects);
                    }
                }
                return null;
            };
            _self.property = function (path, name, property, stringifyObjects) {
                var mapValue = _getFieldSanitizer(path, name);
                if (!mapValue || !mapValue[_DYN_CAN_HANDLE ]) {
                    return null;
                }
                if (!isString(name) || isNullOrUndefined(property) || !isValueAssigned(property[_DYN_VALUE ])) {
                    return null;
                }
                var fieldType = getFieldValueType(property[_DYN_VALUE ]);
                if (fieldType === 0 ) {
                    return null;
                }
                return _handleProperty(mapValue, path, name, fieldType, property, stringifyObjects);
            };
            function _handleProperty(mapValue, path, name, fieldType, property, stringifyObjects) {
                if (mapValue.handler) {
                    return mapValue.handler.property(path, name, property, stringifyObjects);
                }
                if (!isNullOrUndefined(property[_DYN_KIND ])) {
                    if ((fieldType & 4096 ) === 4096  || !isValueKind(property[_DYN_KIND ])) {
                        return null;
                    }
                    property[_DYN_VALUE ] = property[_DYN_VALUE ].toString();
                }
                return _callFieldSanitizer(mapValue.fieldHandler, path, name, fieldType, property);
            }
            function _convertToProperty(path, name, value) {
                if (isValueAssigned(value)) {
                    return { value: value };
                }
                return null;
            }
            function _callFieldSanitizer(fieldProvider, path, name, theType, property) {
                if (property && fieldProvider) {
                    var sanitizer = fieldProvider.getSanitizer(path, name, theType, property[_DYN_KIND ], property.propertyType);
                    if (sanitizer) {
                        if (theType === 4 ) {
                            var newValue_1 = {};
                            var propValue = property[_DYN_VALUE ];
                            objForEachKey(propValue, function (propKey, theValue) {
                                var newPath = path + "." + name;
                                if (isValueAssigned(theValue)) {
                                    var newProp = _convertToProperty(newPath, propKey, theValue);
                                    newProp = _callFieldSanitizer(fieldProvider, newPath, propKey, getFieldValueType(theValue), newProp);
                                    if (newProp) {
                                        newValue_1[propKey] = newProp[_DYN_VALUE ];
                                    }
                                }
                            });
                            property[_DYN_VALUE ] = newValue_1;
                        }
                        else {
                            var details = {
                                path: path,
                                name: name,
                                type: theType,
                                prop: property,
                                sanitizer: _self
                            };
                            property = sanitizer.call(_self, details);
                        }
                    }
                }
                return property;
            }
        }
        ValueSanitizer.getFieldType = getFieldValueType;
        return ValueSanitizer;
    }());

    exports.AppInsightsCore = AppInsightsCore;
    exports.BaseTelemetryPlugin = BaseTelemetryPlugin;
    exports.DiagnosticLogger = DiagnosticLogger;
    exports.EventLatency = EventLatency;
    exports.EventPersistence = EventPersistence;
    exports.EventPropertyType = EventPropertyType;
    exports.EventsDiscardedReason = EventsDiscardedReason;
    exports.FullVersionString = FullVersionString;
    exports.InternalAppInsightsCore = AppInsightsCore$1;
    exports.LoggingSeverity = LoggingSeverity;
    exports.MinChannelPriorty = MinChannelPriorty;
    exports.NotificationManager = NotificationManager;
    exports.PerfEvent = PerfEvent;
    exports.PerfManager = PerfManager;
    exports.ProcessTelemetryContext = ProcessTelemetryContext;
    exports.SenderPostManager = SenderPostManager;
    exports.TraceLevel = TraceLevel;
    exports.Undefined = strShimUndefined;
    exports.ValueKind = ValueKind;
    exports.ValueSanitizer = ValueSanitizer;
    exports.Version = Version;
    exports._InternalLogMessage = _InternalLogMessage;
    exports.__getRegisteredEvents = __getRegisteredEvents;
    exports._appendHeader = _appendHeader;
    exports._getAllResponseHeaders = _getAllResponseHeaders;
    exports._logInternalMessage = _logInternalMessage;
    exports._testHookMaxUnloadHooksCb = _testHookMaxUnloadHooksCb;
    exports._throwInternal = _throwInternal;
    exports._warnToConsole = _warnToConsole;
    exports.addEventHandler = addEventHandler;
    exports.addEventListeners = addEventListeners;
    exports.addPageHideEventListener = addPageHideEventListener;
    exports.addPageShowEventListener = addPageShowEventListener;
    exports.addPageUnloadEventListener = addPageUnloadEventListener;
    exports.areCookiesSupported = areCookiesSupported;
    exports.arrForEach = arrForEach;
    exports.arrIndexOf = arrIndexOf;
    exports.arrMap = arrMap;
    exports.arrReduce = arrReduce;
    exports.attachEvent = attachEvent;
    exports.blockDynamicConversion = blockDynamicConversion;
    exports.convertAllHeadersToMap = convertAllHeadersToMap;
    exports.cookieAvailable = areCookiesSupported;
    exports.createCookieMgr = createCookieMgr;
    exports.createDynamicConfig = createDynamicConfig;
    exports.createEnumStyle = createEnumStyle;
    exports.createGuid = createGuid;
    exports.createProcessTelemetryContext = createProcessTelemetryContext;
    exports.createTraceParent = createTraceParent;
    exports.createUniqueNamespace = createUniqueNamespace;
    exports.createUnloadHandlerContainer = createUnloadHandlerContainer;
    exports.dateNow = utcNow;
    exports.detachEvent = detachEvent;
    exports.disallowsSameSiteNone = uaDisallowsSameSiteNone;
    exports.doPerf = doPerf;
    exports.dumpObj = dumpObj;
    exports.eventOff = eventOff;
    exports.eventOn = eventOn;
    exports.extend = extend;
    exports.findW3cTraceParent = findW3cTraceParent;
    exports.forceDynamicConversion = forceDynamicConversion;
    exports.formatErrorMessageXdr = formatErrorMessageXdr;
    exports.formatErrorMessageXhr = formatErrorMessageXhr;
    exports.formatTraceParent = formatTraceParent;
    exports.generateW3CId = generateW3CId;
    exports.getCommonSchemaMetaData = getCommonSchemaMetaData;
    exports.getConsole = getConsole;
    exports.getCookieValue = getCookieValue;
    exports.getCrypto = getCrypto;
    exports.getDocument = getDocument;
    exports.getDynamicConfigHandler = getDynamicConfigHandler;
    exports.getExceptionName = getExceptionName;
    exports.getFieldValueType = getFieldValueType;
    exports.getGlobal = getGlobal;
    exports.getGlobalInst = getInst;
    exports.getHistory = getHistory;
    exports.getIEVersion = getIEVersion;
    exports.getISOString = toISOString;
    exports.getJSON = getJSON;
    exports.getLocation = getLocation;
    exports.getMsCrypto = getMsCrypto;
    exports.getNavigator = getNavigator;
    exports.getPerformance = getPerformance;
    exports.getResponseText = getResponseText;
    exports.getSetValue = getSetValue;
    exports.getTenantId = getTenantId;
    exports.getTime = getTime;
    exports.getWindow = getWindow;
    exports.hasDocument = hasDocument;
    exports.hasHistory = hasHistory;
    exports.hasJSON = hasJSON;
    exports.hasNavigator = hasNavigator;
    exports.hasOwnProperty = objHasOwnProperty;
    exports.hasWindow = hasWindow;
    exports.isArray = isArray;
    exports.isArrayValid = isArrayValid;
    exports.isBeaconsSupported = isBeaconsSupported;
    exports.isBoolean = isBoolean;
    exports.isChromium = isChromium;
    exports.isDate = isDate;
    exports.isDocumentObjectAvailable = isDocumentObjectAvailable;
    exports.isError = isError;
    exports.isFetchSupported = isFetchSupported;
    exports.isFunction = isFunction;
    exports.isGreaterThanZero = isGreaterThanZero;
    exports.isIE = isIE;
    exports.isLatency = isLatency;
    exports.isNotTruthy = isNotTruthy;
    exports.isNullOrUndefined = isNullOrUndefined;
    exports.isNumber = isNumber;
    exports.isObject = isObject;
    exports.isReactNative = isReactNative;
    exports.isSampledFlag = isSampledFlag;
    exports.isString = isString;
    exports.isTruthy = isTruthy;
    exports.isTypeof = isTypeof;
    exports.isUint8ArrayAvailable = isUint8ArrayAvailable;
    exports.isUndefined = isUndefined;
    exports.isValidSpanId = isValidSpanId;
    exports.isValidTraceId = isValidTraceId;
    exports.isValidTraceParent = isValidTraceParent;
    exports.isValueAssigned = isValueAssigned;
    exports.isValueKind = isValueKind;
    exports.isWindowObjectAvailable = isWindowObjectAvailable;
    exports.isXhrSupported = isXhrSupported;
    exports.mergeEvtNamespace = mergeEvtNamespace;
    exports.newGuid = newGuid;
    exports.newId = newId;
    exports.normalizeJsName = normalizeJsName;
    exports.objDefineAccessors = objDefineAccessors;
    exports.objForEachKey = objForEachKey;
    exports.objFreeze = objFreeze;
    exports.objKeys = objKeys;
    exports.objSeal = objSeal;
    exports.onConfigChange = onConfigChange;
    exports.openXhr = openXhr;
    exports.optimizeObject = optimizeObject;
    exports.parseResponse = parseResponse;
    exports.parseTraceParent = parseTraceParent;
    exports.perfNow = perfNow;
    exports.prependTransports = prependTransports;
    exports.proxyAssign = proxyAssign;
    exports.proxyFunctionAs = proxyFunctionAs;
    exports.proxyFunctions = proxyFunctions;
    exports.random32 = random32;
    exports.randomValue = randomValue;
    exports.removeEventHandler = removeEventHandler;
    exports.removeEventListeners = removeEventListeners;
    exports.removePageHideEventListener = removePageHideEventListener;
    exports.removePageShowEventListener = removePageShowEventListener;
    exports.removePageUnloadEventListener = removePageUnloadEventListener;
    exports.safeGetCookieMgr = safeGetCookieMgr;
    exports.safeGetLogger = safeGetLogger;
    exports.sanitizeProperty = sanitizeProperty;
    exports.setEnableEnvMocks = setEnableEnvMocks;
    exports.setProcessTelemetryTimings = setProcessTelemetryTimings;
    exports.setValue = setValue;
    exports.strContains = strContains;
    exports.strEndsWith = strEndsWith;
    exports.strFunction = strShimFunction;
    exports.strObject = strShimObject;
    exports.strPrototype = strShimPrototype;
    exports.strStartsWith = strStartsWith;
    exports.strTrim = strTrim;
    exports.strUndefined = strShimUndefined;
    exports.throwError = throwError;
    exports.toISOString = toISOString;
    exports.useXDomainRequest = useXDomainRequest;

}));
//# sourceMappingURL=ms.core.js.map


/***/ }),

/***/ 68260:
/***/ (function(__unused_webpack_module, exports) {

/*!
 * 1DS JS SDK POST plugin, 4.2.2
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    var RT_PROFILE = "REAL_TIME";
    var NRT_PROFILE = "NEAR_REAL_TIME";
    var BE_PROFILE = "BEST_EFFORT";

    var strShimFunction = "function";
    var strShimObject = "object";
    var strShimUndefined = "undefined";
    var strShimPrototype = "prototype";
    var ObjClass$1 = Object;
    var ObjProto$1 = ObjClass$1[strShimPrototype];

    /*! https://github.com/nevware21/ts-utils v0.11.2 */
    /*#__NO_SIDE_EFFECTS__*/
    function _pureAssign(func1, func2) {
        return func1 || func2;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _pureRef(value, name) {
        return value[name];
    }
    var UNDEF_VALUE = undefined;
    var NULL_VALUE = null;
    var EMPTY = "";
    var FUNCTION = "function";
    var OBJECT = "object";
    var PROTOTYPE = "prototype";
    var __PROTO__ = "__proto__";
    var UNDEFINED = "undefined";
    var CONSTRUCTOR = "constructor";
    var SYMBOL = "Symbol";
    var POLYFILL_TAG = "_polyfill";
    var LENGTH = "length";
    var NAME = "name";
    var CALL = "call";
    var TO_STRING = "toString";
    var ObjClass = ( /*#__PURE__*/_pureAssign(Object));
    var ObjProto = ( /*#__PURE__*/_pureRef(ObjClass, PROTOTYPE));
    var StrCls = ( /*#__PURE__*/_pureAssign(String));
    var StrProto = ( /*#__PURE__*/_pureRef(StrCls, PROTOTYPE));
    var MathCls = ( /*#__PURE__*/_pureAssign(Math));
    var ArrCls = ( /*#__PURE__*/_pureAssign(Array));
    var ArrProto = ( /*#__PURE__*/_pureRef(ArrCls, PROTOTYPE));
    var ArrSlice = ( /*#__PURE__*/_pureRef(ArrProto, "slice"));
    function safe(func, argArray) {
        try {
            return {
                v: func.apply(this, argArray)
            };
        }
        catch (e) {
            return { e: e };
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createIs(theType) {
        return function (value) {
            return typeof value === theType;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isUndefined(value) {
        return typeof value === UNDEFINED || value === UNDEFINED;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isNullOrUndefined(value) {
        return value === NULL_VALUE || isUndefined(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isStrictNullOrUndefined(value) {
        return value === NULL_VALUE || !isDefined(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isDefined(arg) {
        return !!arg || arg !== UNDEF_VALUE;
    }
    var isString = ( /*#__PURE__*/_createIs("string"));
    var isFunction = ( /*#__PURE__*/_createIs(FUNCTION));
    /*#__NO_SIDE_EFFECTS__*/
    function isObject(value) {
        if (!value && isNullOrUndefined(value)) {
            return false;
        }
        return !!value && typeof value === OBJECT;
    }
    var isArray = ( /* #__PURE__*/_pureRef(ArrCls, "isArray"));
    var isNumber = ( /*#__PURE__*/_createIs("number"));
    var isBoolean = ( /*#__PURE__*/_createIs("boolean"));
    /*#__NO_SIDE_EFFECTS__*/
    function isPromiseLike(value) {
        return !!(value && value.then && isFunction(value.then));
    }
    var objGetOwnPropertyDescriptor = ( /* #__PURE__ */_pureRef(ObjClass, "getOwnPropertyDescriptor"));
    /*#__NO_SIDE_EFFECTS__*/
    function objHasOwnProperty(obj, prop) {
        return !!obj && ObjProto.hasOwnProperty[CALL](obj, prop);
    }
    var objHasOwn = ( /*#__PURE__*/_pureAssign(( /* #__PURE__ */_pureRef(ObjClass, "hasOwn")), polyObjHasOwn));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjHasOwn(obj, prop) {
        return objHasOwnProperty(obj, prop) || !!objGetOwnPropertyDescriptor(obj, prop);
    }
    function objForEachKey(theObject, callbackfn, thisArg) {
        if (theObject && isObject(theObject)) {
            for (var prop in theObject) {
                if (objHasOwn(theObject, prop)) {
                    if (callbackfn[CALL](thisArg || theObject, prop, theObject[prop]) === -1) {
                        break;
                    }
                }
            }
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createKeyValueMap(values, keyType, valueType, completeFn) {
        var theMap = {};
        objForEachKey(values, function (key, value) {
            theMap[key] = keyType ? value : key;
            theMap[value] = valueType ? value : key;
        });
        return completeFn(theMap);
    }
    var asString = ( /* #__PURE__ */_pureAssign(StrCls));
    var ERROR_TYPE = "[object Error]";
    /*#__NO_SIDE_EFFECTS__*/
    function dumpObj(object, format) {
        var propertyValueDump = EMPTY;
        var objType = ObjProto[TO_STRING][CALL](object);
        if (objType === ERROR_TYPE) {
            object = { stack: asString(object.stack), message: asString(object.message), name: asString(object.name) };
        }
        try {
            propertyValueDump = JSON.stringify(object, NULL_VALUE, format ? ((typeof format === "number") ? format : 4) : UNDEF_VALUE);
            propertyValueDump = (propertyValueDump && propertyValueDump.replace(/"(\w+)"\s*:\s{0,1}/g, "$1: ")) || asString(object);
        }
        catch (e) {
            propertyValueDump = " - " + dumpObj(e, format);
        }
        return objType + ": " + propertyValueDump;
    }
    function throwTypeError(message) {
        throw new TypeError(message);
    }
    var _objFreeze = ( /* #__PURE__ */_pureRef(ObjClass, "freeze"));
    function _doNothing(value) {
        return value;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getProto(value) {
        return value[__PROTO__] || NULL_VALUE;
    }
    var objAssign = ( /*#__PURE__*/_pureRef(ObjClass, "assign"));
    var objKeys = ( /*#__PURE__*/_pureRef(ObjClass, "keys"));
    function objDeepFreeze(value) {
        if (_objFreeze) {
            objForEachKey(value, function (key, value) {
                if (isArray(value) || isObject(value)) {
                    _objFreeze(value);
                }
            });
        }
        return objFreeze(value);
    }
    var objFreeze = ( /* #__PURE__*/_pureAssign(_objFreeze, _doNothing));
    var objGetPrototypeOf = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "getPrototypeOf")), _getProto));
    /*#__NO_SIDE_EFFECTS__*/
    function createEnum(values) {
        return _createKeyValueMap(values, 1 , 0 , objDeepFreeze);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createEnumKeyMap(values) {
        return _createKeyValueMap(values, 0 , 0 , objDeepFreeze);
    }
    var _wellKnownSymbolMap = /*#__PURE__*/ createEnumKeyMap({
        asyncIterator: 0 ,
        hasInstance: 1 ,
        isConcatSpreadable: 2 ,
        iterator: 3 ,
        match: 4 ,
        matchAll: 5 ,
        replace: 6 ,
        search: 7 ,
        species: 8 ,
        split: 9 ,
        toPrimitive: 10 ,
        toStringTag: 11 ,
        unscopables: 12
    });
    var GLOBAL_CONFIG_KEY = "__tsUtils$gblCfg";
    var _globalCfg;
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalValue() {
        var result;
        if (typeof globalThis !== UNDEFINED) {
            result = globalThis;
        }
        if (!result && typeof self !== UNDEFINED) {
            result = self;
        }
        if (!result && typeof window !== UNDEFINED) {
            result = window;
        }
        if (!result && typeof global !== UNDEFINED) {
            result = global;
        }
        return result;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalConfig() {
        if (!_globalCfg) {
            var gbl = safe(_getGlobalValue).v || {};
            _globalCfg = gbl[GLOBAL_CONFIG_KEY] = gbl[GLOBAL_CONFIG_KEY] || {};
        }
        return _globalCfg;
    }
    var _unwrapFunction = ( _unwrapFunctionWithPoly);
    /*#__NO_SIDE_EFFECTS__*/
    function _unwrapFunctionWithPoly(funcName, clsProto, polyFunc) {
        var clsFn = clsProto && clsProto[funcName];
        return function (thisArg) {
            var theFunc = (thisArg && thisArg[funcName]) || clsFn;
            if (theFunc || polyFunc) {
                var theArgs = arguments;
                return (theFunc || polyFunc).apply(thisArg, theFunc ? ArrSlice[CALL](theArgs, 1) : theArgs);
            }
            throwTypeError("\"" + asString(funcName) + "\" not defined for " + dumpObj(thisArg));
        };
    }
    var mathMax = ( /*#__PURE__*/_pureRef(MathCls, "max"));
    var strSlice = ( /*#__PURE__*/_unwrapFunction("slice", StrProto));
    var strSubstring = ( /*#__PURE__*/_unwrapFunction("substring", StrProto));
    var strSubstr = ( /*#__PURE__*/_unwrapFunctionWithPoly("substr", StrProto, polyStrSubstr));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrSubstr(value, start, length) {
        if (isNullOrUndefined(value)) {
            throwTypeError("Invalid " + dumpObj(value));
        }
        if (length < 0) {
            return EMPTY;
        }
        start = start || 0;
        if (start < 0) {
            start = mathMax(start + value[LENGTH], 0);
        }
        if (isUndefined(length)) {
            return strSlice(value, start);
        }
        return strSlice(value, start, start + length);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function strLeft(value, count) {
        return strSubstring(value, 0, count);
    }
    var UNIQUE_REGISTRY_ID = "_urid";
    var _polySymbols;
    /*#__NO_SIDE_EFFECTS__*/
    function _globalSymbolRegistry() {
        if (!_polySymbols) {
            var gblCfg = _getGlobalConfig();
            _polySymbols = gblCfg.gblSym = gblCfg.gblSym || { k: {}, s: {} };
        }
        return _polySymbols;
    }
    var _wellKnownSymbolCache;
    /*#__NO_SIDE_EFFECTS__*/
    function polyNewSymbol(description) {
        var theSymbol = {
            description: asString(description),
            toString: function () { return SYMBOL + "(" + description + ")"; }
        };
        theSymbol[POLYFILL_TAG] = true;
        return theSymbol;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polySymbolFor(key) {
        var registry = _globalSymbolRegistry();
        if (!objHasOwn(registry.k, key)) {
            var newSymbol_1 = polyNewSymbol(key);
            var regId_1 = objKeys(registry.s).length;
            newSymbol_1[UNIQUE_REGISTRY_ID] = function () { return regId_1 + "_" + newSymbol_1[TO_STRING](); };
            registry.k[key] = newSymbol_1;
            registry.s[newSymbol_1[UNIQUE_REGISTRY_ID]()] = asString(key);
        }
        return registry.k[key];
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyGetKnownSymbol(name) {
        !_wellKnownSymbolCache && (_wellKnownSymbolCache = {});
        var result;
        var knownName = _wellKnownSymbolMap[name];
        if (knownName) {
            result = _wellKnownSymbolCache[knownName] = _wellKnownSymbolCache[knownName] || polyNewSymbol(SYMBOL + "." + knownName);
        }
        return result;
    }
    var propMap = {
        e: "enumerable",
        c: "configurable",
        v: "value",
        w: "writable",
        g: "get",
        s: "set"
    };
    /*#__NO_SIDE_EFFECTS__*/
    function _createProp(value) {
        var prop = {};
        prop[propMap["c"]] = true;
        prop[propMap["e"]] = true;
        if (value.l) {
            prop.get = function () { return value.l.v; };
            var desc = objGetOwnPropertyDescriptor(value.l, "v");
            if (desc && desc.set) {
                prop.set = function (newValue) {
                    value.l.v = newValue;
                };
            }
        }
        objForEachKey(value, function (key, value) {
            prop[propMap[key]] = isUndefined(value) ? prop[propMap[key]] : value;
        });
        return prop;
    }
    var objDefineProp = ( /*#__PURE__*/_pureRef(ObjClass, "defineProperty"));
    function objDefine(target, key, propDesc) {
        return objDefineProp(target, key, _createProp(propDesc));
    }
    var _globalLazyTestHooks;
    function _initTestHooks() {
        _globalLazyTestHooks = _getGlobalConfig();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCachedValue(value) {
        return objDefineProp({
            toJSON: function () { return value; }
        }, "v", { value: value });
    }
    var WINDOW = "window";
    var _cachedGlobal;
    function _getGlobalInstFn(getFn, theArgs) {
        var cachedValue;
        return function () {
            !_globalLazyTestHooks && _initTestHooks();
            (!cachedValue || _globalLazyTestHooks.lzy) && (cachedValue = createCachedValue(safe(getFn, theArgs).v));
            return cachedValue.v;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getGlobal(useCached) {
        !_globalLazyTestHooks && _initTestHooks();
        (!_cachedGlobal || useCached === false || _globalLazyTestHooks.lzy) && (_cachedGlobal = createCachedValue(safe(_getGlobalValue).v || NULL_VALUE));
        return _cachedGlobal.v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getInst(name, useCached) {
        var gbl = (!_cachedGlobal || useCached === false) ? getGlobal(useCached) : _cachedGlobal.v;
        if (gbl && gbl[name]) {
            return gbl[name];
        }
        if (name === WINDOW) {
            return getWindow();
        }
        return NULL_VALUE;
    }
    var getDocument = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["document"]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasWindow() {
        return !!( /*#__PURE__*/getWindow());
    }
    var getWindow = ( /*#__PURE__*/_getGlobalInstFn(getInst, [WINDOW]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasNavigator() {
        return !!( /*#__PURE__*/getNavigator());
    }
    var getNavigator = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["navigator"]));
    var isNode = ( /*#__PURE__*/_getGlobalInstFn(function () {
        return !!( safe(function () { return (process && (process.versions || {}).node); }).v);
    }));
    var _symbol;
    var _symbolFor;
    /*#__NO_SIDE_EFFECTS__*/
    function _initSymbol() {
        _symbol = ( /*#__PURE__*/createCachedValue(safe((getInst), [SYMBOL]).v));
        return _symbol;
    }
    function _getSymbolKey(key) {
        var gblSym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return (gblSym.v ? gblSym.v[key] : UNDEF_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function hasSymbol() {
        return !!( /*#__PURE__*/getSymbol());
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getSymbol() {
        !_globalLazyTestHooks && _initTestHooks();
        return ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol()).v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getKnownSymbol(name, noPoly) {
        var knownName = _wellKnownSymbolMap[name];
        !_globalLazyTestHooks && _initTestHooks();
        var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return sym.v ? sym.v[knownName || name] : (!noPoly ? polyGetKnownSymbol(name) : UNDEF_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function newSymbol(description, noPoly) {
        !_globalLazyTestHooks && _initTestHooks();
        var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return sym.v ? sym.v(description) : (!noPoly ? polyNewSymbol(description) : NULL_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function symbolFor(key) {
        !_globalLazyTestHooks && _initTestHooks();
        _symbolFor = ((!_globalLazyTestHooks.lzy ? _symbolFor : 0) || ( /*#__PURE__*/createCachedValue(safe((_getSymbolKey), ["for"]).v)));
        return (_symbolFor.v || polySymbolFor)(key);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isIterator(value) {
        return !!value && isFunction(value.next);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isIterable(value) {
        return !isStrictNullOrUndefined(value) && isFunction(value[getKnownSymbol(3 )]);
    }
    var _iterSymbol$1;
    function iterForOf(iter, callbackfn, thisArg) {
        if (iter) {
            if (!isIterator(iter)) {
                !_iterSymbol$1 && (_iterSymbol$1 = createCachedValue(getKnownSymbol(3 )));
                iter = iter[_iterSymbol$1.v] ? iter[_iterSymbol$1.v]() : null;
            }
            if (isIterator(iter)) {
                var err = UNDEF_VALUE;
                var iterResult = UNDEF_VALUE;
                try {
                    var count = 0;
                    while (!(iterResult = iter.next()).done) {
                        if (callbackfn[CALL](thisArg || iter, iterResult.value, count, iter) === -1) {
                            break;
                        }
                        count++;
                    }
                }
                catch (failed) {
                    err = { e: failed };
                    if (iter.throw) {
                        iterResult = NULL_VALUE;
                        iter.throw(err);
                    }
                }
                finally {
                    try {
                        if (iterResult && !iterResult.done) {
                            iter.return && iter.return(iterResult);
                        }
                    }
                    finally {
                        if (err) {
                            throw err.e;
                        }
                    }
                }
            }
        }
    }
    function fnApply(fn, thisArg, argArray) {
        return fn.apply(thisArg, argArray);
    }
    function arrAppend(target, elms) {
        if (!isUndefined(elms) && target) {
            if (isArray(elms)) {
                fnApply(target.push, target, elms);
            }
            else if (isIterator(elms) || isIterable(elms)) {
                iterForOf(elms, function (elm) {
                    target.push(elm);
                });
            }
            else {
                target.push(elms);
            }
        }
        return target;
    }
    function arrForEach(theArray, callbackfn, thisArg) {
        if (theArray) {
            var len = theArray[LENGTH] >>> 0;
            for (var idx = 0; idx < len; idx++) {
                if (idx in theArray) {
                    if (callbackfn[CALL](thisArg || theArray, theArray[idx], idx, theArray) === -1) {
                        break;
                    }
                }
            }
        }
    }
    var arrIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", ArrProto));
    function arrSlice(theArray, start, end) {
        return ((theArray && theArray["slice"]) || ArrSlice).apply(theArray, ArrSlice[CALL](arguments, 1));
    }
    var objCreate = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "create")), polyObjCreate));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjCreate(obj) {
        if (!obj) {
            return {};
        }
        var type = typeof obj;
        if (type !== OBJECT && type !== FUNCTION) {
            throwTypeError("Prototype must be an Object or function: " + dumpObj(obj));
        }
        function tempFunc() { }
        tempFunc[PROTOTYPE] = obj;
        return new tempFunc();
    }
    var _isProtoArray;
    function objSetPrototypeOf(obj, proto) {
        var fn = ObjClass["setPrototypeOf"] ||
            function (d, b) {
                var _a;
                !_isProtoArray && (_isProtoArray = createCachedValue((_a = {}, _a[__PROTO__] = [], _a) instanceof Array));
                _isProtoArray.v ? d[__PROTO__] = b : objForEachKey(b, function (key, value) { return d[key] = value; });
            };
        return fn(obj, proto);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createCustomError(name, d, b) {
        safe(objDefine, [d, NAME, { v: name, c: true, e: false }]);
        d = objSetPrototypeOf(d, b);
        function __() {
            this[CONSTRUCTOR] = d;
            safe(objDefine, [this, NAME, { v: name, c: true, e: false }]);
        }
        d[PROTOTYPE] = b === NULL_VALUE ? objCreate(b) : (__[PROTOTYPE] = b[PROTOTYPE], new __());
        return d;
    }
    function _setName(baseClass, name) {
        name && (baseClass[NAME] = name);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCustomError(name, constructCb, errorBase) {
        var theBaseClass = errorBase || Error;
        var orgName = theBaseClass[PROTOTYPE][NAME];
        var captureFn = Error.captureStackTrace;
        return _createCustomError(name, function () {
            var _this = this;
            var theArgs = arguments;
            try {
                safe(_setName, [theBaseClass, name]);
                var _self = fnApply(theBaseClass, _this, ArrSlice[CALL](theArgs)) || _this;
                if (_self !== _this) {
                    var orgProto = objGetPrototypeOf(_this);
                    if (orgProto !== objGetPrototypeOf(_self)) {
                        objSetPrototypeOf(_self, orgProto);
                    }
                }
                captureFn && captureFn(_self, _this[CONSTRUCTOR]);
                constructCb && constructCb(_self, theArgs);
                return _self;
            }
            finally {
                safe(_setName, [theBaseClass, orgName]);
            }
        }, theBaseClass);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function utcNow() {
        return (Date.now || polyUtcNow)();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyUtcNow() {
        return new Date().getTime();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createTrimFn(exp) {
        return function _doTrim(value) {
            if (isNullOrUndefined(value)) {
                throwTypeError("strTrim called [" + dumpObj(value) + "]");
            }
            if (value && value.replace) {
                value = value.replace(exp, EMPTY);
            }
            return value;
        };
    }
    var polyStrTrim = ( /*#__PURE__*/_createTrimFn(/^\s+|(?=\s)\s+$/g));
    var strTrim = ( /*#__PURE__*/_unwrapFunctionWithPoly("trim", StrProto, polyStrTrim));
    var _fnToString;
    var _objCtrFnString;
    var _gblWindow;
    /*#__NO_SIDE_EFFECTS__*/
    function isPlainObject(value) {
        if (!value || typeof value !== OBJECT) {
            return false;
        }
        if (!_gblWindow) {
            _gblWindow = hasWindow() ? getWindow() : true;
        }
        var result = false;
        if (value !== _gblWindow) {
            if (!_objCtrFnString) {
                _fnToString = Function[PROTOTYPE][TO_STRING];
                _objCtrFnString = _fnToString[CALL](ObjClass);
            }
            try {
                var proto = objGetPrototypeOf(value);
                result = !proto;
                if (!result) {
                    if (objHasOwnProperty(proto, CONSTRUCTOR)) {
                        proto = proto[CONSTRUCTOR];
                    }
                    result = proto && typeof proto === FUNCTION && _fnToString[CALL](proto) === _objCtrFnString;
                }
            }
            catch (ex) {
            }
        }
        return result;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function perfNow() {
        return utcNow();
    }
    var strIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", StrProto));
    var strStartsWith = ( /*#__PURE__*/_unwrapFunctionWithPoly("startsWith", StrProto, polyStrStartsWith));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrStartsWith(value, searchString, position) {
        if (!isString(value)) {
            throwTypeError("'" + dumpObj(value) + "' is not a string");
        }
        var searchValue = isString(searchString) ? searchString : asString(searchString);
        var pos = position > 0 ? position : 0;
        return strSubstring(value, pos, pos + searchValue[LENGTH]) === searchValue;
    }
    var REF = "ref";
    var UNREF = "unref";
    var HAS_REF = "hasRef";
    var ENABLED = "enabled";
    /*#__NO_SIDE_EFFECTS__*/
    function _createTimerHandler(startTimer, refreshFn, cancelFn) {
        var ref = true;
        var timerId = startTimer ? refreshFn(NULL_VALUE) : NULL_VALUE;
        var theTimerHandler;
        function _unref() {
            ref = false;
            timerId && timerId[UNREF] && timerId[UNREF]();
            return theTimerHandler;
        }
        function _cancel() {
            timerId && cancelFn(timerId);
            timerId = NULL_VALUE;
        }
        function _refresh() {
            timerId = refreshFn(timerId);
            if (!ref) {
                _unref();
            }
            return theTimerHandler;
        }
        function _setEnabled(value) {
            !value && timerId && _cancel();
            value && !timerId && _refresh();
        }
        theTimerHandler = {
            cancel: _cancel,
            refresh: _refresh
        };
        theTimerHandler[HAS_REF] = function () {
            if (timerId && timerId[HAS_REF]) {
                return timerId[HAS_REF]();
            }
            return ref;
        };
        theTimerHandler[REF] = function () {
            ref = true;
            timerId && timerId[REF] && timerId[REF]();
            return theTimerHandler;
        };
        theTimerHandler[UNREF] = _unref;
        theTimerHandler = objDefineProp(theTimerHandler, ENABLED, {
            get: function () { return !!timerId; },
            set: _setEnabled
        });
        return {
            h: theTimerHandler,
            dn: function () {
                timerId = NULL_VALUE;
            }
        };
    }
    function _createTimeoutWith(startTimer, overrideFn, theArgs) {
        var isArr = isArray(overrideFn);
        var len = isArr ? overrideFn.length : 0;
        var setFn = (len > 0 ? overrideFn[0] : (!isArr ? overrideFn : UNDEF_VALUE)) || setTimeout;
        var clearFn = (len > 1 ? overrideFn[1] : UNDEF_VALUE) || clearTimeout;
        var timerFn = theArgs[0];
        theArgs[0] = function () {
            handler.dn();
            fnApply(timerFn, UNDEF_VALUE, ArrSlice[CALL](arguments));
        };
        var handler = _createTimerHandler(startTimer, function (timerId) {
            if (timerId) {
                if (timerId.refresh) {
                    timerId.refresh();
                    return timerId;
                }
                fnApply(clearFn, UNDEF_VALUE, [timerId]);
            }
            return fnApply(setFn, UNDEF_VALUE, theArgs);
        }, function (timerId) {
            fnApply(clearFn, UNDEF_VALUE, [timerId]);
        });
        return handler.h;
    }
    function scheduleTimeout(callback, timeout) {
        return _createTimeoutWith(true, UNDEF_VALUE, ArrSlice[CALL](arguments));
    }
    function scheduleTimeoutWith(overrideFn, callback, timeout) {
        return _createTimeoutWith(true, overrideFn, ArrSlice[CALL](arguments, 1));
    }

    var strHasOwnProperty = "hasOwnProperty";
    var extendStaticsFn = function (d, b) {
        extendStaticsFn = ObjClass$1["setPrototypeOf"] ||
            ({ __proto__: [] } instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) {
                    if (b[strHasOwnProperty](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return extendStaticsFn(d, b);
    };
    function __extendsFn(d, b) {
        if (typeof b !== strShimFunction && b !== null) {
            throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStaticsFn(d, b);
        function __() {
            this.constructor = d;
        }
        d[strShimPrototype] = b === null ? objCreate(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
    }

    var _a$4;
    var Constructor = 'constructor';
    var Prototype = 'prototype';
    var strFunction = 'function';
    var DynInstFuncTable = '_dynInstFuncs';
    var DynProxyTag = '_isDynProxy';
    var DynClassName = '_dynClass';
    var DynClassNamePrefix = '_dynCls$';
    var DynInstChkTag = '_dynInstChk';
    var DynAllowInstChkTag = DynInstChkTag;
    var DynProtoDefaultOptions = '_dfOpts';
    var UnknownValue = '_unknown_';
    var str__Proto = "__proto__";
    var DynProtoBaseProto = "_dyn" + str__Proto;
    var DynProtoGlobalSettings = "__dynProto$Gbl";
    var DynProtoCurrent = "_dynInstProto";
    var strUseBaseInst = 'useBaseInst';
    var strSetInstFuncs = 'setInstFuncs';
    var Obj = Object;
    var _objGetPrototypeOf = Obj["getPrototypeOf"];
    var _objGetOwnProps = Obj["getOwnPropertyNames"];
    var _gbl = getGlobal();
    var _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
        o: (_a$4 = {},
            _a$4[strSetInstFuncs] = true,
            _a$4[strUseBaseInst] = true,
            _a$4),
        n: 1000
    });
    function _isObjectOrArrayPrototype(target) {
        return target && (target === Obj[Prototype] || target === Array[Prototype]);
    }
    function _isObjectArrayOrFunctionPrototype(target) {
        return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
    }
    function _getObjProto(target) {
        var newProto;
        if (target) {
            if (_objGetPrototypeOf) {
                return _objGetPrototypeOf(target);
            }
            var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
            newProto = target[DynProtoBaseProto] || curProto;
            if (!objHasOwnProperty(target, DynProtoBaseProto)) {
                delete target[DynProtoCurrent];
                newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
                target[DynProtoCurrent] = curProto;
            }
        }
        return newProto;
    }
    function _forEachProp(target, func) {
        var props = [];
        if (_objGetOwnProps) {
            props = _objGetOwnProps(target);
        }
        else {
            for (var name_1 in target) {
                if (typeof name_1 === "string" && objHasOwnProperty(target, name_1)) {
                    props.push(name_1);
                }
            }
        }
        if (props && props.length > 0) {
            for (var lp = 0; lp < props.length; lp++) {
                func(props[lp]);
            }
        }
    }
    function _isDynamicCandidate(target, funcName, skipOwn) {
        return (funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || objHasOwnProperty(target, funcName)) && funcName !== str__Proto && funcName !== Prototype);
    }
    function _throwTypeError(message) {
        throwTypeError("DynamicProto: " + message);
    }
    function _getInstanceFuncs(thisTarget) {
        var instFuncs = objCreate(null);
        _forEachProp(thisTarget, function (name) {
            if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
                instFuncs[name] = thisTarget[name];
            }
        });
        return instFuncs;
    }
    function _hasVisited(values, value) {
        for (var lp = values.length - 1; lp >= 0; lp--) {
            if (values[lp] === value) {
                return true;
            }
        }
        return false;
    }
    function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
        function _instFuncProxy(target, funcHost, funcName) {
            var theFunc = funcHost[funcName];
            if (theFunc[DynProxyTag] && useBaseInst) {
                var instFuncTable = target[DynInstFuncTable] || {};
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
                }
            }
            return function () {
                return theFunc.apply(target, arguments);
            };
        }
        var baseFuncs = objCreate(null);
        _forEachProp(instFuncs, function (name) {
            baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
        });
        var baseProto = _getObjProto(classProto);
        var visited = [];
        while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
            _forEachProp(baseProto, function (name) {
                if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                    baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
                }
            });
            visited.push(baseProto);
            baseProto = _getObjProto(baseProto);
        }
        return baseFuncs;
    }
    function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
        var instFunc = null;
        if (target && objHasOwnProperty(proto, DynClassName)) {
            var instFuncTable = target[DynInstFuncTable] || objCreate(null);
            instFunc = (instFuncTable[proto[DynClassName]] || objCreate(null))[funcName];
            if (!instFunc) {
                _throwTypeError("Missing [" + funcName + "] " + strFunction);
            }
            if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
                var canAddInst = !objHasOwnProperty(target, funcName);
                var objProto = _getObjProto(target);
                var visited = [];
                while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                    var protoFunc = objProto[funcName];
                    if (protoFunc) {
                        canAddInst = (protoFunc === currentDynProtoProxy);
                        break;
                    }
                    visited.push(objProto);
                    objProto = _getObjProto(objProto);
                }
                try {
                    if (canAddInst) {
                        target[funcName] = instFunc;
                    }
                    instFunc[DynInstChkTag] = 1;
                }
                catch (e) {
                    instFuncTable[DynAllowInstChkTag] = false;
                }
            }
        }
        return instFunc;
    }
    function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
        var protoFunc = proto[funcName];
        if (protoFunc === currentDynProtoProxy) {
            protoFunc = _getObjProto(proto)[funcName];
        }
        if (typeof protoFunc !== strFunction) {
            _throwTypeError("[" + funcName + "] is not a " + strFunction);
        }
        return protoFunc;
    }
    function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
        function _createDynamicPrototype(proto, funcName) {
            var dynProtoProxy = function () {
                var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
                return instFunc.apply(this, arguments);
            };
            dynProtoProxy[DynProxyTag] = 1;
            return dynProtoProxy;
        }
        if (!_isObjectOrArrayPrototype(proto)) {
            var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || objCreate(null);
            if (!_isObjectOrArrayPrototype(instFuncTable)) {
                var instFuncs_1 = instFuncTable[className] = (instFuncTable[className] || objCreate(null));
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
                }
                if (!_isObjectOrArrayPrototype(instFuncs_1)) {
                    _forEachProp(target, function (name) {
                        if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                            instFuncs_1[name] = target[name];
                            delete target[name];
                            if (!objHasOwnProperty(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                                proto[name] = _createDynamicPrototype(proto, name);
                            }
                        }
                    });
                }
            }
        }
    }
    function _checkPrototype(classProto, thisTarget) {
        if (_objGetPrototypeOf) {
            var visited = [];
            var thisProto = _getObjProto(thisTarget);
            while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
                if (thisProto === classProto) {
                    return true;
                }
                visited.push(thisProto);
                thisProto = _getObjProto(thisProto);
            }
            return false;
        }
        return true;
    }
    function _getObjName(target, unknownValue) {
        if (objHasOwnProperty(target, Prototype)) {
            return target.name || unknownValue || UnknownValue;
        }
        return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
    }
    function dynamicProto(theClass, target, delegateFunc, options) {
        if (!objHasOwnProperty(theClass, Prototype)) {
            _throwTypeError("theClass is an invalid class definition.");
        }
        var classProto = theClass[Prototype];
        if (!_checkPrototype(classProto, target)) {
            _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
        }
        var className = null;
        if (objHasOwnProperty(classProto, DynClassName)) {
            className = classProto[DynClassName];
        }
        else {
            className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
            _gblInst.n++;
            classProto[DynClassName] = className;
        }
        var perfOptions = dynamicProto[DynProtoDefaultOptions];
        var useBaseInst = !!perfOptions[strUseBaseInst];
        if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
            useBaseInst = !!options[strUseBaseInst];
        }
        var instFuncs = _getInstanceFuncs(target);
        var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
        delegateFunc(target, baseFuncs);
        var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
        if (setInstanceFunc && options) {
            setInstanceFunc = !!options[strSetInstFuncs];
        }
        _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
    }
    dynamicProto[DynProtoDefaultOptions] = _gblInst.o;

    var createEnumStyle = createEnum;

    var EventsDiscardedReason = createEnumStyle({
        Unknown: 0 ,
        NonRetryableStatus: 1 ,
        InvalidEvent: 2 ,
        SizeLimitExceeded: 3 ,
        KillSwitch: 4 ,
        QueueFull: 5
    });

    var _DYN_TO_LOWER_CASE$1 = "toLowerCase";
    var _DYN_BLK_VAL = "blkVal";
    var _DYN_LENGTH$2 = "length";
    var _DYN_RD_ONLY = "rdOnly";
    var _DYN_NOTIFY = "notify";
    var _DYN_WARN_TO_CONSOLE = "warnToConsole";
    var _DYN_THROW_INTERNAL = "throwInternal";
    var _DYN_SET_DF = "setDf";
    var _DYN_WATCH = "watch";
    var _DYN_LOGGER = "logger";
    var _DYN_APPLY = "apply";
    var _DYN_PUSH$1 = "push";
    var _DYN_SPLICE$1 = "splice";
    var _DYN_HDLR = "hdlr";
    var _DYN_CANCEL = "cancel";
    var _DYN_INITIALIZE$1 = "initialize";
    var _DYN_IDENTIFIER$1 = "identifier";
    var _DYN_IS_INITIALIZED = "isInitialized";
    var _DYN_GET_PLUGIN = "getPlugin";
    var _DYN_NAME = "name";
    var _DYN_TIME = "time";
    var _DYN_PROCESS_NEXT = "processNext";
    var _DYN_GET_PROCESS_TEL_CONT2 = "getProcessTelContext";
    var _DYN_UNLOAD = "unload";
    var _DYN_LOGGING_LEVEL_CONSOL4 = "loggingLevelConsole";
    var _DYN_CREATE_NEW = "createNew";
    var _DYN_TEARDOWN = "teardown";
    var _DYN_MESSAGE_ID = "messageId";
    var _DYN_MESSAGE = "message";
    var _DYN_IS_ASYNC = "isAsync";
    var _DYN_DIAG_LOG = "diagLog";
    var _DYN__DO_TEARDOWN = "_doTeardown";
    var _DYN_UPDATE = "update";
    var _DYN_GET_NEXT = "getNext";
    var _DYN_SET_NEXT_PLUGIN = "setNextPlugin";
    var _DYN_PROTOCOL = "protocol";
    var _DYN_USER_AGENT = "userAgent";
    var _DYN_SPLIT$1 = "split";
    var _DYN_NODE_TYPE = "nodeType";
    var _DYN_REPLACE = "replace";
    var _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage";
    var _DYN_TYPE = "type";
    var _DYN_HANDLER = "handler";
    var _DYN_STATUS = "status";
    var _DYN_GET_RESPONSE_HEADER = "getResponseHeader";
    var _DYN_GET_ALL_RESPONSE_HEA5 = "getAllResponseHeaders";
    var _DYN_IS_CHILD_EVT = "isChildEvt";
    var _DYN_DATA$1 = "data";
    var _DYN_GET_CTX = "getCtx";
    var _DYN_SET_CTX = "setCtx";
    var _DYN_COMPLETE = "complete";
    var _DYN_URL_STRING$1 = "urlString";
    var _DYN_SEND_POST = "sendPOST";
    var _DYN_HEADERS$1 = "headers";
    var _DYN_TIMEOUT$1 = "timeout";
    var _DYN_SET_REQUEST_HEADER = "setRequestHeader";

    var aggregationErrorType;
    function throwAggregationError(message, sourceErrors) {
        if (!aggregationErrorType) {
            aggregationErrorType = createCustomError("AggregationError", function (self, args) {
                if (args[_DYN_LENGTH$2 ] > 1) {
                    self.errors = args[1];
                }
            });
        }
        var theMessage = message || "One or more errors occurred.";
        arrForEach(sourceErrors, function (srcError, idx) {
            theMessage += "\n".concat(idx, " > ").concat(dumpObj(srcError));
        });
        throw new aggregationErrorType(theMessage, sourceErrors || []);
    }

    /*!
     * NevWare21 - ts-async, 0.5.1
     * https://github.com/nevware21/ts-async
     * Copyright (c) NevWare21 and contributors. All rights reserved.
     * Licensed under the MIT license.
     */
    var STR_PROMISE = "Promise";
    var REJECTED = "rejected";
    function doAwaitResponse(value, cb) {
        return doAwait(value, function (value) {
            return cb ? cb({
                status: "fulfilled",
                rejected: false,
                value: value
            }) : value;
        }, function (reason) {
            return cb ? cb({
                status: REJECTED,
                rejected: true,
                reason: reason
            }) : reason;
        });
    }
    function doAwait(value, resolveFn, rejectFn, finallyFn) {
        var result = value;
        try {
            if (isPromiseLike(value)) {
                if (resolveFn || rejectFn) {
                    result = value.then(resolveFn, rejectFn);
                }
            }
            else {
                try {
                    if (resolveFn) {
                        result = resolveFn(value);
                    }
                }
                catch (err) {
                    if (rejectFn) {
                        result = rejectFn(err);
                    }
                    else {
                        throw err;
                    }
                }
            }
        }
        finally {
            if (finallyFn) {
                doFinally(result, finallyFn);
            }
        }
        return result;
    }
    function doFinally(value, finallyFn) {
        var result = value;
        if (finallyFn) {
            if (isPromiseLike(value)) {
                if (value.finally) {
                    result = value.finally(finallyFn);
                }
                else {
                    result = value.then(function (value) {
                        finallyFn();
                        return value;
                    }, function (reason) {
                        finallyFn();
                        throw reason;
                    });
                }
            }
            else {
                finallyFn();
            }
        }
        return result;
    }
    var STRING_STATES =  [
        "pending", "resolving", "resolved", REJECTED
    ];
    var DISPATCH_EVENT = "dispatchEvent";
    var _hasInitEvent;
    function _hasInitEventFn(doc) {
        var evt;
        if (doc && doc.createEvent) {
            evt = doc.createEvent("Event");
        }
        return (!!evt && evt.initEvent);
    }
    function emitEvent(target, evtName, populateEvent, useNewEvent) {
        var doc = getDocument();
        !_hasInitEvent && (_hasInitEvent = createCachedValue(!!safe(_hasInitEventFn, [doc]).v));
        var theEvt = _hasInitEvent.v ? doc.createEvent("Event") : (useNewEvent ? new Event(evtName) : {});
        populateEvent && populateEvent(theEvt);
        if (_hasInitEvent.v) {
            theEvt.initEvent(evtName, false, true);
        }
        if (theEvt && target[DISPATCH_EVENT]) {
            target[DISPATCH_EVENT](theEvt);
        }
        else {
            var handler = target["on" + evtName];
            if (handler) {
                handler(theEvt);
            }
            else {
                var theConsole = getInst("console");
                theConsole && (theConsole["error"] || theConsole["log"])(evtName, dumpObj(theEvt));
            }
        }
    }
    var NODE_UNHANDLED_REJECTION = "unhandledRejection";
    var UNHANDLED_REJECTION = NODE_UNHANDLED_REJECTION.toLowerCase();
    var _unhandledRejectionTimeout = 10;
    var _hasPromiseRejectionEvent;
    function dumpFnObj(value) {
        if (isFunction(value)) {
            return value.toString();
        }
        return dumpObj(value);
    }
    function _createPromise(newPromise, processor, executor) {
        var additionalArgs = arrSlice(arguments, 3);
        var _state = 0 ;
        var _hasResolved = false;
        var _settledValue;
        var _queue = [];
        var _handled = false;
        var _unHandledRejectionHandler = null;
        var _thePromise;
        function _then(onResolved, onRejected) {
            try {
                _handled = true;
                _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
                _unHandledRejectionHandler = null;
                var thenPromise = newPromise(function (resolve, reject) {
                    _queue.push(function () {
                        try {
                            var handler = _state === 2  ? onResolved : onRejected;
                            var value = isUndefined(handler) ? _settledValue : (isFunction(handler) ? handler(_settledValue) : handler);
                            if (isPromiseLike(value)) {
                                value.then(resolve, reject);
                            }
                            else if (handler) {
                                resolve(value);
                            }
                            else if (_state === 3 ) {
                                reject(value);
                            }
                            else {
                                resolve(value);
                            }
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    if (_hasResolved) {
                        _processQueue();
                    }
                }, additionalArgs);
                return thenPromise;
            }
            finally {
            }
        }
        function _catch(onRejected) {
            return _then(undefined, onRejected);
        }
        function _finally(onFinally) {
            var thenFinally = onFinally;
            var catchFinally = onFinally;
            if (isFunction(onFinally)) {
                thenFinally = function (value) {
                    onFinally && onFinally();
                    return value;
                };
                catchFinally = function (reason) {
                    onFinally && onFinally();
                    throw reason;
                };
            }
            return _then(thenFinally, catchFinally);
        }
        function _strState() {
            return STRING_STATES[_state];
        }
        function _processQueue() {
            if (_queue.length > 0) {
                var pending = _queue.slice();
                _queue = [];
                _handled = true;
                _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
                _unHandledRejectionHandler = null;
                processor(pending);
            }
        }
        function _createSettleIfFn(newState, allowState) {
            return function (theValue) {
                if (_state === allowState) {
                    if (newState === 2  && isPromiseLike(theValue)) {
                        _state = 1 ;
                        theValue.then(_createSettleIfFn(2 , 1 ), _createSettleIfFn(3 , 1 ));
                        return;
                    }
                    _state = newState;
                    _hasResolved = true;
                    _settledValue = theValue;
                    _processQueue();
                    if (!_handled && newState === 3  && !_unHandledRejectionHandler) {
                        _unHandledRejectionHandler = scheduleTimeout(_notifyUnhandledRejection, _unhandledRejectionTimeout);
                    }
                }
            };
        }
        function _notifyUnhandledRejection() {
            if (!_handled) {
                _handled = true;
                if (isNode()) {
                    process.emit(NODE_UNHANDLED_REJECTION, _settledValue, _thePromise);
                }
                else {
                    var gbl = getWindow() || getGlobal();
                    !_hasPromiseRejectionEvent && (_hasPromiseRejectionEvent = createCachedValue(safe((getInst), [STR_PROMISE + "RejectionEvent"]).v));
                    emitEvent(gbl, UNHANDLED_REJECTION, function (theEvt) {
                        objDefine(theEvt, "promise", { g: function () { return _thePromise; } });
                        theEvt.reason = _settledValue;
                        return theEvt;
                    }, !!_hasPromiseRejectionEvent.v);
                }
            }
        }
        _thePromise = {
            then: _then,
            "catch": _catch,
            finally: _finally
        };
        objDefineProp(_thePromise, "state", {
            get: _strState
        });
        if (hasSymbol()) {
            _thePromise[getKnownSymbol(11 )] = "IPromise";
        }
        function _toString() {
            return "IPromise" + ("") + " " + _strState() + (_hasResolved ? (" - " + dumpFnObj(_settledValue)) : "") + ("");
        }
        _thePromise.toString = _toString;
        (function _initialize() {
            if (!isFunction(executor)) {
                throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpFnObj(executor));
            }
            var _rejectFn = _createSettleIfFn(3 , 0 );
            try {
                executor.call(_thePromise, _createSettleIfFn(2 , 0 ), _rejectFn);
            }
            catch (e) {
                _rejectFn(e);
            }
        })();
        return _thePromise;
    }
    function syncItemProcessor(pending) {
        arrForEach(pending, function (fn) {
            try {
                fn();
            }
            catch (e) {
            }
        });
    }
    function timeoutItemProcessor(timeout) {
        var callbackTimeout = isNumber(timeout) ? timeout : 0;
        return function (pending) {
            scheduleTimeout(function () {
                syncItemProcessor(pending);
            }, callbackTimeout);
        };
    }
    function createAsyncPromise(executor, timeout) {
        return _createPromise(createAsyncPromise, timeoutItemProcessor(timeout), executor, timeout);
    }
    var _promiseCls;
    function createNativePromise(executor, timeout) {
        !_promiseCls && (_promiseCls = createCachedValue((safe(getInst, [STR_PROMISE]).v) || null));
        var PrmCls = _promiseCls.v;
        if (!PrmCls) {
            return createAsyncPromise(executor);
        }
        if (!isFunction(executor)) {
            throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpObj(executor));
        }
        var _state = 0 ;
        function _strState() {
            return STRING_STATES[_state];
        }
        var thePromise = new PrmCls(function (resolve, reject) {
            function _resolve(value) {
                _state = 2 ;
                resolve(value);
            }
            function _reject(reason) {
                _state = 3 ;
                reject(reason);
            }
            executor(_resolve, _reject);
        });
        objDefineProp(thePromise, "state", {
            get: _strState
        });
        return thePromise;
    }
    var _promiseCreator;
    function createPromise(executor, timeout) {
        !_promiseCreator && (_promiseCreator = createCachedValue(createNativePromise));
        return _promiseCreator.v.call(this, executor, timeout);
    }

    var UNDEFINED_VALUE = undefined;
    var STR_EMPTY$3 = "";
    var STR_CORE = "core";
    var STR_DISABLED = "disabled";
    var STR_EXTENSION_CONFIG = "extensionConfig";
    var STR_PROCESS_TELEMETRY = "processTelemetry";
    var STR_PRIORITY = "priority";
    var STR_GET_PERF_MGR = "getPerfMgr";
    var STR_NOT_DYNAMIC_ERROR = "Not dynamic - ";

    var rCamelCase = /-([a-z])/g;
    var rNormalizeInvalid = /([^\w\d_$])/g;
    var rLeadingNumeric = /^(\d+[\w\d_$])/;
    function isNotNullOrUndefined(value) {
        return !isNullOrUndefined(value);
    }
    function normalizeJsName(name) {
        var value = name;
        if (value && isString(value)) {
            value = value[_DYN_REPLACE ](rCamelCase, function (_all, letter) {
                return letter.toUpperCase();
            });
            value = value[_DYN_REPLACE ](rNormalizeInvalid, "_");
            value = value[_DYN_REPLACE ](rLeadingNumeric, function (_all, match) {
                return "_" + match;
            });
        }
        return value;
    }
    function strContains(value, search) {
        if (value && search) {
            return strIndexOf(value, search) !== -1;
        }
        return false;
    }
    function _createProxyFunction(source, funcName) {
        var srcFunc = null;
        var src = null;
        if (isFunction(source)) {
            srcFunc = source;
        }
        else {
            src = source;
        }
        return function () {
            var originalArguments = arguments;
            if (srcFunc) {
                src = srcFunc();
            }
            if (src) {
                return src[funcName][_DYN_APPLY ](src, originalArguments);
            }
        };
    }
    function proxyFunctionAs(target, name, source, theFunc, overwriteTarget) {
        if (target && name && source) {
            if (overwriteTarget !== false || isUndefined(target[name])) {
                target[name] = _createProxyFunction(source, theFunc);
            }
        }
    }
    function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
        if (target && source && isObject(target) && isArray(functionsToProxy)) {
            arrForEach(functionsToProxy, function (theFuncName) {
                if (isString(theFuncName)) {
                    proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
                }
            });
        }
        return target;
    }
    function optimizeObject(theObject) {
        if (theObject && objAssign) {
            theObject = ObjClass$1(objAssign({}, theObject));
        }
        return theObject;
    }
    function getResponseText(xhr) {
        try {
            return xhr.responseText;
        }
        catch (e) {
        }
        return null;
    }
    function formatErrorMessageXdr(xdr, message) {
        if (xdr) {
            return "XDomainRequest,Response:" + getResponseText(xdr) || 0;
        }
        return message;
    }
    function formatErrorMessageXhr(xhr, message) {
        if (xhr) {
            return "XMLHttpRequest,Status:" + xhr[_DYN_STATUS ] + ",Response:" + getResponseText(xhr) || 0 || 0;
        }
        return message;
    }
    function prependTransports(theTransports, newTransports) {
        if (newTransports) {
            if (isNumber(newTransports)) {
                theTransports = [newTransports].concat(theTransports);
            }
            else if (isArray(newTransports)) {
                theTransports = newTransports.concat(theTransports);
            }
        }
        return theTransports;
    }
    var strDisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var strWithCredentials = "withCredentials";
    var strTimeout = "timeout";
    function openXhr(method, urlString, withCredentials, disabled, isSync, timeout) {
        if (disabled === void 0) { disabled = false; }
        if (isSync === void 0) { isSync = false; }
        function _wrapSetXhrProp(xhr, prop, value) {
            try {
                xhr[prop] = value;
            }
            catch (e) {
            }
        }
        var xhr = new XMLHttpRequest();
        if (disabled) {
            _wrapSetXhrProp(xhr, strDisabledPropertyName, disabled);
        }
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
        }
        xhr.open(method, urlString, !isSync);
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
        }
        if (!isSync && timeout) {
            _wrapSetXhrProp(xhr, strTimeout, timeout);
        }
        return xhr;
    }
    function convertAllHeadersToMap(headersString) {
        var headers = {};
        if (isString(headersString)) {
            var headersArray = strTrim(headersString)[_DYN_SPLIT$1 ](/[\r\n]+/);
            arrForEach(headersArray, function (headerEntry) {
                if (headerEntry) {
                    var idx = headerEntry.indexOf(": ");
                    if (idx !== -1) {
                        var header = strTrim(headerEntry.substring(0, idx))[_DYN_TO_LOWER_CASE$1 ]();
                        var value = strTrim(headerEntry.substring(idx + 1));
                        headers[header] = value;
                    }
                    else {
                        headers[strTrim(headerEntry)] = 1;
                    }
                }
            });
        }
        return headers;
    }
    function _appendHeader(theHeaders, xhr, name) {
        if (!theHeaders[name] && xhr && xhr[_DYN_GET_RESPONSE_HEADER ]) {
            var value = xhr[_DYN_GET_RESPONSE_HEADER ](name);
            if (value) {
                theHeaders[name] = strTrim(value);
            }
        }
        return theHeaders;
    }
    var STR_KILL_DURATION_HEADER$1 = "kill-duration";
    var STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
    var STR_TIME_DELTA_HEADER$1 = "time-delta-millis";
    function _getAllResponseHeaders(xhr, isOneDs) {
        var theHeaders = {};
        if (!xhr[_DYN_GET_ALL_RESPONSE_HEA5 ]) {
            if (!!isOneDs) {
                theHeaders = _appendHeader(theHeaders, xhr, STR_TIME_DELTA_HEADER$1);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_HEADER$1);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_SECONDS_HEADER);
            }
        }
        else {
            theHeaders = convertAllHeadersToMap(xhr[_DYN_GET_ALL_RESPONSE_HEA5 ]());
        }
        return theHeaders;
    }

    var strLocation = "location";
    var strConsole = "console";
    var strJSON = "JSON";
    var strCrypto = "crypto";
    var strMsCrypto = "msCrypto";
    var strReactNative = "ReactNative";
    var strMsie = "msie";
    var strTrident = "trident/";
    var strXMLHttpRequest = "XMLHttpRequest";
    var _isTrident = null;
    var _navUserAgentCheck = null;
    var _enableMocks = false;
    var _useXDomainRequest = null;
    var _beaconsSupported = null;
    function _hasProperty(theClass, property) {
        var supported = false;
        if (theClass) {
            try {
                supported = property in theClass;
                if (!supported) {
                    var proto = theClass[strShimPrototype];
                    if (proto) {
                        supported = property in proto;
                    }
                }
            }
            catch (e) {
            }
            if (!supported) {
                try {
                    var tmp = new theClass();
                    supported = !isUndefined(tmp[property]);
                }
                catch (e) {
                }
            }
        }
        return supported;
    }
    function getLocation(checkForMock) {
        if (checkForMock && _enableMocks) {
            var mockLocation = getInst("__mockLocation");
            if (mockLocation) {
                return mockLocation;
            }
        }
        if (typeof location === strShimObject && location) {
            return location;
        }
        return getInst(strLocation);
    }
    function getConsole() {
        if (typeof console !== strShimUndefined) {
            return console;
        }
        return getInst(strConsole);
    }
    function hasJSON() {
        return Boolean((typeof JSON === strShimObject && JSON) || getInst(strJSON) !== null);
    }
    function getJSON() {
        if (hasJSON()) {
            return JSON || getInst(strJSON);
        }
        return null;
    }
    function getCrypto() {
        return getInst(strCrypto);
    }
    function getMsCrypto() {
        return getInst(strMsCrypto);
    }
    function isReactNative() {
        var nav = getNavigator();
        if (nav && nav.product) {
            return nav.product === strReactNative;
        }
        return false;
    }
    function isIE() {
        var nav = getNavigator();
        if (nav && (nav[_DYN_USER_AGENT ] !== _navUserAgentCheck || _isTrident === null)) {
            _navUserAgentCheck = nav[_DYN_USER_AGENT ];
            var userAgent = (_navUserAgentCheck || STR_EMPTY$3)[_DYN_TO_LOWER_CASE$1 ]();
            _isTrident = (strContains(userAgent, strMsie) || strContains(userAgent, strTrident));
        }
        return _isTrident;
    }
    function isBeaconsSupported(useCached) {
        if (_beaconsSupported === null || useCached === false) {
            _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
        }
        return _beaconsSupported;
    }
    function isFetchSupported(withKeepAlive) {
        var isSupported = false;
        try {
            isSupported = !!getInst("fetch");
            var request = getInst("Request");
            if (isSupported && withKeepAlive && request) {
                isSupported = _hasProperty(request, "keepalive");
            }
        }
        catch (e) {
        }
        return isSupported;
    }
    function useXDomainRequest() {
        if (_useXDomainRequest === null) {
            _useXDomainRequest = (typeof XDomainRequest !== strShimUndefined);
            if (_useXDomainRequest && isXhrSupported()) {
                _useXDomainRequest = _useXDomainRequest && !_hasProperty(getInst(strXMLHttpRequest), "withCredentials");
            }
        }
        return _useXDomainRequest;
    }
    function isXhrSupported() {
        var isSupported = false;
        try {
            var xmlHttpRequest = getInst(strXMLHttpRequest);
            isSupported = !!xmlHttpRequest;
        }
        catch (e) {
        }
        return isSupported;
    }

    var UInt32Mask = 0x100000000;
    var MaxUInt32 = 0xffffffff;
    var SEED1 = 123456789;
    var SEED2 = 987654321;
    var _mwcSeeded = false;
    var _mwcW = SEED1;
    var _mwcZ = SEED2;
    function _mwcSeed(seedValue) {
        if (seedValue < 0) {
            seedValue >>>= 0;
        }
        _mwcW = (SEED1 + seedValue) & MaxUInt32;
        _mwcZ = (SEED2 - seedValue) & MaxUInt32;
        _mwcSeeded = true;
    }
    function _autoSeedMwc() {
        try {
            var now = utcNow() & 0x7fffffff;
            _mwcSeed(((Math.random() * UInt32Mask) ^ now) + now);
        }
        catch (e) {
        }
    }
    function random32(signed) {
        var value = 0;
        var c = getCrypto() || getMsCrypto();
        if (c && c.getRandomValues) {
            value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
        }
        if (value === 0 && isIE()) {
            if (!_mwcSeeded) {
                _autoSeedMwc();
            }
            value = mwcRandom32() & MaxUInt32;
        }
        if (value === 0) {
            value = Math.floor((UInt32Mask * Math.random()) | 0);
        }
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function mwcRandom32(signed) {
        _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
        _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
        var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function newId(maxLength) {
        if (maxLength === void 0) { maxLength = 22; }
        var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var number = random32() >>> 0;
        var chars = 0;
        var result = STR_EMPTY$3;
        while (result[_DYN_LENGTH$2 ] < maxLength) {
            chars++;
            result += base64chars.charAt(number & 0x3F);
            number >>>= 6;
            if (chars === 5) {
                number = (((random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
                chars = 0;
            }
        }
        return result;
    }

    var version = '3.2.2';
    var instanceName = "." + newId(6);
    var _dataUid = 0;
    function _canAcceptData(target) {
        return target[_DYN_NODE_TYPE ] === 1 || target[_DYN_NODE_TYPE ] === 9 || !(+target[_DYN_NODE_TYPE ]);
    }
    function _getCache(data, target) {
        var theCache = target[data.id];
        if (!theCache) {
            theCache = {};
            try {
                if (_canAcceptData(target)) {
                    objDefine(target, data.id, {
                        e: false,
                        v: theCache
                    });
                }
            }
            catch (e) {
            }
        }
        return theCache;
    }
    function createUniqueNamespace(name, includeVersion) {
        if (includeVersion === void 0) { includeVersion = false; }
        return normalizeJsName(name + (_dataUid++) + (includeVersion ? "." + version : STR_EMPTY$3) + instanceName);
    }
    function createElmNodeData(name) {
        var data = {
            id: createUniqueNamespace("_aiData-" + (name || STR_EMPTY$3) + "." + version),
            accept: function (target) {
                return _canAcceptData(target);
            },
            get: function (target, name, defValue, addDefault) {
                var theCache = target[data.id];
                if (!theCache) {
                    if (addDefault) {
                        theCache = _getCache(data, target);
                        theCache[normalizeJsName(name)] = defValue;
                    }
                    return defValue;
                }
                return theCache[normalizeJsName(name)];
            },
            kill: function (target, name) {
                if (target && target[name]) {
                    try {
                        delete target[name];
                    }
                    catch (e) {
                    }
                }
            }
        };
        return data;
    }

    function _isConfigDefaults(value) {
        return (value && isObject(value) && (value.isVal || value.fb || objHasOwn(value, "v") || objHasOwn(value, "mrg") || objHasOwn(value, "ref") || value.set));
    }
    function _getDefault(dynamicHandler, theConfig, cfgDefaults) {
        var defValue;
        var isDefaultValid = cfgDefaults.dfVal || isDefined;
        if (theConfig && cfgDefaults.fb) {
            var fallbacks = cfgDefaults.fb;
            if (!isArray(fallbacks)) {
                fallbacks = [fallbacks];
            }
            for (var lp = 0; lp < fallbacks[_DYN_LENGTH$2 ]; lp++) {
                var fallback = fallbacks[lp];
                var fbValue = theConfig[fallback];
                if (isDefaultValid(fbValue)) {
                    defValue = fbValue;
                }
                else if (dynamicHandler) {
                    fbValue = dynamicHandler.cfg[fallback];
                    if (isDefaultValid(fbValue)) {
                        defValue = fbValue;
                    }
                    dynamicHandler.set(dynamicHandler.cfg, asString(fallback), fbValue);
                }
                if (isDefaultValid(defValue)) {
                    break;
                }
            }
        }
        if (!isDefaultValid(defValue) && isDefaultValid(cfgDefaults.v)) {
            defValue = cfgDefaults.v;
        }
        return defValue;
    }
    function _resolveDefaultValue(dynamicHandler, theConfig, cfgDefaults) {
        var theValue = cfgDefaults;
        if (cfgDefaults && _isConfigDefaults(cfgDefaults)) {
            theValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        if (theValue) {
            if (_isConfigDefaults(theValue)) {
                theValue = _resolveDefaultValue(dynamicHandler, theConfig, theValue);
            }
            var newValue_1;
            if (isArray(theValue)) {
                newValue_1 = [];
                newValue_1[_DYN_LENGTH$2 ] = theValue[_DYN_LENGTH$2 ];
            }
            else if (isPlainObject(theValue)) {
                newValue_1 = {};
            }
            if (newValue_1) {
                objForEachKey(theValue, function (key, value) {
                    if (value && _isConfigDefaults(value)) {
                        value = _resolveDefaultValue(dynamicHandler, theConfig, value);
                    }
                    newValue_1[key] = value;
                });
                theValue = newValue_1;
            }
        }
        return theValue;
    }
    function _applyDefaultValue(dynamicHandler, theConfig, name, defaultValue) {
        var isValid;
        var setFn;
        var defValue;
        var cfgDefaults = defaultValue;
        var mergeDf;
        var reference;
        var readOnly;
        var blkDynamicValue;
        if (_isConfigDefaults(cfgDefaults)) {
            isValid = cfgDefaults.isVal;
            setFn = cfgDefaults.set;
            readOnly = cfgDefaults[_DYN_RD_ONLY ];
            blkDynamicValue = cfgDefaults[_DYN_BLK_VAL ];
            mergeDf = cfgDefaults.mrg;
            reference = cfgDefaults.ref;
            if (!reference && isUndefined(reference)) {
                reference = !!mergeDf;
            }
            defValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        else {
            defValue = defaultValue;
        }
        if (blkDynamicValue) {
            dynamicHandler[_DYN_BLK_VAL ](theConfig, name);
        }
        var theValue;
        var usingDefault = true;
        var cfgValue = theConfig[name];
        if (cfgValue || !isNullOrUndefined(cfgValue)) {
            theValue = cfgValue;
            usingDefault = false;
            if (isValid && theValue !== defValue && !isValid(theValue)) {
                theValue = defValue;
                usingDefault = true;
            }
            if (setFn) {
                theValue = setFn(theValue, defValue, theConfig);
                usingDefault = theValue === defValue;
            }
        }
        if (!usingDefault) {
            if (isPlainObject(theValue) || isArray(defValue)) {
                if (mergeDf && defValue && (isPlainObject(defValue) || isArray(defValue))) {
                    objForEachKey(defValue, function (dfName, dfValue) {
                        _applyDefaultValue(dynamicHandler, theValue, dfName, dfValue);
                    });
                }
            }
        }
        else if (defValue) {
            theValue = _resolveDefaultValue(dynamicHandler, theConfig, defValue);
        }
        else {
            theValue = defValue;
        }
        dynamicHandler.set(theConfig, name, theValue);
        if (reference) {
            dynamicHandler.ref(theConfig, name);
        }
        if (readOnly) {
            dynamicHandler[_DYN_RD_ONLY ](theConfig, name);
        }
    }

    var CFG_HANDLER_LINK = symbolFor("[[ai_dynCfg_1]]");
    var BLOCK_DYNAMIC = symbolFor("[[ai_blkDynCfg_1]]");
    var FORCE_DYNAMIC = symbolFor("[[ai_frcDynCfg_1]]");
    function _cfgDeepCopy(source) {
        if (source) {
            var target_1;
            if (isArray(source)) {
                target_1 = [];
                target_1[_DYN_LENGTH$2 ] = source[_DYN_LENGTH$2 ];
            }
            else if (isPlainObject(source)) {
                target_1 = {};
            }
            if (target_1) {
                objForEachKey(source, function (key, value) {
                    target_1[key] = _cfgDeepCopy(value);
                });
                return target_1;
            }
        }
        return source;
    }
    function getDynamicConfigHandler(value) {
        if (value) {
            var handler = value[CFG_HANDLER_LINK] || value;
            if (handler.cfg && (handler.cfg === value || handler.cfg[CFG_HANDLER_LINK] === handler)) {
                return handler;
            }
        }
        return null;
    }
    function blockDynamicConversion(value) {
        if (value && (isPlainObject(value) || isArray(value))) {
            try {
                value[BLOCK_DYNAMIC] = true;
            }
            catch (e) {
            }
        }
        return value;
    }
    function _canMakeDynamic(getFunc, state, value) {
        var result = false;
        if (value && !getFunc[state.blkVal]) {
            result = value[FORCE_DYNAMIC];
            if (!result && !value[BLOCK_DYNAMIC]) {
                result = isPlainObject(value) || isArray(value);
            }
        }
        return result;
    }
    function throwInvalidAccess(message) {
        throwTypeError("InvalidAccess:" + message);
    }

    var arrayMethodsToPatch = [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ];
    var _throwDynamicError = function (logger, name, desc, e) {
        logger && logger[_DYN_THROW_INTERNAL ](3 , 108 , "".concat(desc, " [").concat(name, "] failed - ") + dumpObj(e));
    };
    function _patchArray(state, target, name) {
        if (isArray(target)) {
            arrForEach(arrayMethodsToPatch, function (method) {
                var orgMethod = target[method];
                target[method] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = orgMethod[_DYN_APPLY ](this, args);
                    _makeDynamicObject(state, target, name, "Patching");
                    return result;
                };
            });
        }
    }
    function _getOwnPropGetter(target, name) {
        var propDesc = objGetOwnPropertyDescriptor(target, name);
        return propDesc && propDesc.get;
    }
    function _createDynamicProperty(state, theConfig, name, value) {
        var detail = {
            n: name,
            h: [],
            trk: function (handler) {
                if (handler && handler.fn) {
                    if (arrIndexOf(detail.h, handler) === -1) {
                        detail.h[_DYN_PUSH$1 ](handler);
                    }
                    state.trk(handler, detail);
                }
            },
            clr: function (handler) {
                var idx = arrIndexOf(detail.h, handler);
                if (idx !== -1) {
                    detail.h[_DYN_SPLICE$1 ](idx, 1);
                }
            }
        };
        var checkDynamic = true;
        var isObjectOrArray = false;
        function _getProperty() {
            if (checkDynamic) {
                isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                if (value && !value[CFG_HANDLER_LINK] && isObjectOrArray) {
                    value = _makeDynamicObject(state, value, name, "Converting");
                }
                checkDynamic = false;
            }
            var activeHandler = state.act;
            if (activeHandler) {
                detail.trk(activeHandler);
            }
            return value;
        }
        _getProperty[state.prop] = {
            chng: function () {
                state.add(detail);
            }
        };
        function _setProperty(newValue) {
            if (value !== newValue) {
                if (!!_getProperty[state.ro] && !state.upd) {
                    throwInvalidAccess("[" + name + "] is read-only:" + dumpObj(theConfig));
                }
                if (checkDynamic) {
                    isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                    checkDynamic = false;
                }
                var isReferenced = isObjectOrArray && _getProperty[state.rf];
                if (isObjectOrArray) {
                    if (isReferenced) {
                        objForEachKey(value, function (key) {
                            value[key] = newValue ? newValue[key] : UNDEFINED_VALUE;
                        });
                        try {
                            objForEachKey(newValue, function (key, theValue) {
                                _setDynamicProperty(state, value, key, theValue);
                            });
                            newValue = value;
                        }
                        catch (e) {
                            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "Assigning", e);
                            isObjectOrArray = false;
                        }
                    }
                    else if (value && value[CFG_HANDLER_LINK]) {
                        objForEachKey(value, function (key) {
                            var getter = _getOwnPropGetter(value, key);
                            if (getter) {
                                var valueState = getter[state.prop];
                                valueState && valueState.chng();
                            }
                        });
                    }
                }
                if (newValue !== value) {
                    var newIsObjectOrArray = newValue && _canMakeDynamic(_getProperty, state, newValue);
                    if (!isReferenced && newIsObjectOrArray) {
                        newValue = _makeDynamicObject(state, newValue, name, "Converting");
                    }
                    value = newValue;
                    isObjectOrArray = newIsObjectOrArray;
                }
                state.add(detail);
            }
        }
        objDefine(theConfig, detail.n, { g: _getProperty, s: _setProperty });
    }
    function _setDynamicProperty(state, target, name, value) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            if (!isDynamic) {
                _createDynamicProperty(state, target, name, value);
            }
            else {
                target[name] = value;
            }
        }
        return target;
    }
    function _setDynamicPropertyState(state, target, name, flags) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            var inPlace = flags && flags[0 ];
            var rdOnly = flags && flags[1 ];
            var blkProp = flags && flags[2 ];
            if (!isDynamic) {
                if (blkProp) {
                    try {
                        blockDynamicConversion(target);
                    }
                    catch (e) {
                        _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "Blocking", e);
                    }
                }
                try {
                    _setDynamicProperty(state, target, name, target[name]);
                    getter = _getOwnPropGetter(target, name);
                }
                catch (e) {
                    _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "State", e);
                }
            }
            if (inPlace) {
                getter[state.rf] = inPlace;
            }
            if (rdOnly) {
                getter[state.ro] = rdOnly;
            }
            if (blkProp) {
                getter[state.blkVal] = true;
            }
        }
        return target;
    }
    function _makeDynamicObject(state, target, name, desc) {
        try {
            objForEachKey(target, function (key, value) {
                _setDynamicProperty(state, target, key, value);
            });
            if (!target[CFG_HANDLER_LINK]) {
                objDefineProp(target, CFG_HANDLER_LINK, {
                    get: function () {
                        return state[_DYN_HDLR ];
                    }
                });
                _patchArray(state, target, name);
            }
        }
        catch (e) {
            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, desc, e);
        }
        return target;
    }

    var symPrefix = "[[ai_";
    var symPostfix = "]]";
    function _createState(cfgHandler) {
        var _a;
        var dynamicPropertySymbol = newSymbol(symPrefix + "get" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReadOnly = newSymbol(symPrefix + "ro" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReferenced = newSymbol(symPrefix + "rf" + cfgHandler.uid + symPostfix);
        var dynamicPropertyBlockValue = newSymbol(symPrefix + "blkVal" + cfgHandler.uid + symPostfix);
        var dynamicPropertyDetail = newSymbol(symPrefix + "dtl" + cfgHandler.uid + symPostfix);
        var _waitingHandlers = null;
        var _watcherTimer = null;
        var theState;
        function _useHandler(activeHandler, callback) {
            var prevWatcher = theState.act;
            try {
                theState.act = activeHandler;
                if (activeHandler && activeHandler[dynamicPropertyDetail]) {
                    arrForEach(activeHandler[dynamicPropertyDetail], function (detail) {
                        detail.clr(activeHandler);
                    });
                    activeHandler[dynamicPropertyDetail] = [];
                }
                callback({
                    cfg: cfgHandler.cfg,
                    set: cfgHandler.set.bind(cfgHandler),
                    setDf: cfgHandler[_DYN_SET_DF ].bind(cfgHandler),
                    ref: cfgHandler.ref.bind(cfgHandler),
                    rdOnly: cfgHandler[_DYN_RD_ONLY ].bind(cfgHandler)
                });
            }
            catch (e) {
                var logger = cfgHandler[_DYN_LOGGER ];
                if (logger) {
                    logger[_DYN_THROW_INTERNAL ](1 , 107 , dumpObj(e));
                }
                throw e;
            }
            finally {
                theState.act = prevWatcher || null;
            }
        }
        function _notifyWatchers() {
            if (_waitingHandlers) {
                var notifyHandlers = _waitingHandlers;
                _waitingHandlers = null;
                _watcherTimer && _watcherTimer[_DYN_CANCEL ]();
                _watcherTimer = null;
                var watcherFailures_1 = [];
                arrForEach(notifyHandlers, function (handler) {
                    if (handler) {
                        if (handler[dynamicPropertyDetail]) {
                            arrForEach(handler[dynamicPropertyDetail], function (detail) {
                                detail.clr(handler);
                            });
                            handler[dynamicPropertyDetail] = null;
                        }
                        if (handler.fn) {
                            try {
                                _useHandler(handler, handler.fn);
                            }
                            catch (e) {
                                watcherFailures_1[_DYN_PUSH$1 ](e);
                            }
                        }
                    }
                });
                if (_waitingHandlers) {
                    try {
                        _notifyWatchers();
                    }
                    catch (e) {
                        watcherFailures_1[_DYN_PUSH$1 ](e);
                    }
                }
                if (watcherFailures_1[_DYN_LENGTH$2 ] > 0) {
                    throwAggregationError("Watcher error(s): ", watcherFailures_1);
                }
            }
        }
        function _addWatcher(detail) {
            if (detail && detail.h[_DYN_LENGTH$2 ] > 0) {
                if (!_waitingHandlers) {
                    _waitingHandlers = [];
                }
                if (!_watcherTimer) {
                    _watcherTimer = scheduleTimeout(function () {
                        _watcherTimer = null;
                        _notifyWatchers();
                    }, 0);
                }
                for (var idx = 0; idx < detail.h[_DYN_LENGTH$2 ]; idx++) {
                    var handler = detail.h[idx];
                    if (handler && arrIndexOf(_waitingHandlers, handler) === -1) {
                        _waitingHandlers[_DYN_PUSH$1 ](handler);
                    }
                }
            }
        }
        function _trackHandler(handler, detail) {
            if (handler) {
                var details = handler[dynamicPropertyDetail] = handler[dynamicPropertyDetail] || [];
                if (arrIndexOf(details, detail) === -1) {
                    details[_DYN_PUSH$1 ](detail);
                }
            }
        }
        theState = (_a = {
                prop: dynamicPropertySymbol,
                ro: dynamicPropertyReadOnly,
                rf: dynamicPropertyReferenced
            },
            _a[_DYN_BLK_VAL ] = dynamicPropertyBlockValue,
            _a[_DYN_HDLR ] = cfgHandler,
            _a.add = _addWatcher,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.use = _useHandler,
            _a.trk = _trackHandler,
            _a);
        return theState;
    }

    function _createAndUseHandler(state, configHandler) {
        var handler = {
            fn: configHandler,
            rm: function () {
                handler.fn = null;
                state = null;
                configHandler = null;
            }
        };
        objDefine(handler, "toJSON", { v: function () { return "WatcherHandler" + (handler.fn ? "" : "[X]"); } });
        state.use(handler, configHandler);
        return handler;
    }
    function _createDynamicHandler(logger, target, inPlace) {
        var _a;
        var dynamicHandler = getDynamicConfigHandler(target);
        if (dynamicHandler) {
            return dynamicHandler;
        }
        var uid = createUniqueNamespace("dyncfg", true);
        var newTarget = (target && inPlace !== false) ? target : _cfgDeepCopy(target);
        var theState;
        function _notifyWatchers() {
            theState[_DYN_NOTIFY ]();
        }
        function _setValue(target, name, value) {
            try {
                target = _setDynamicProperty(theState, target, name, value);
            }
            catch (e) {
                _throwDynamicError(logger, name, "Setting value", e);
            }
            return target[name];
        }
        function _watch(configHandler) {
            return _createAndUseHandler(theState, configHandler);
        }
        function _block(configHandler, allowUpdate) {
            theState.use(null, function (details) {
                var prevUpd = theState.upd;
                try {
                    if (!isUndefined(allowUpdate)) {
                        theState.upd = allowUpdate;
                    }
                    configHandler(details);
                }
                finally {
                    theState.upd = prevUpd;
                }
            });
        }
        function _ref(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[0 ] = true, _a))[name];
        }
        function _rdOnly(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[1 ] = true, _a))[name];
        }
        function _blkPropValue(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[2 ] = true, _a))[name];
        }
        function _applyDefaults(theConfig, defaultValues) {
            if (defaultValues) {
                objForEachKey(defaultValues, function (name, value) {
                    _applyDefaultValue(cfgHandler, theConfig, name, value);
                });
            }
            return theConfig;
        }
        var cfgHandler = (_a = {
                uid: null,
                cfg: newTarget
            },
            _a[_DYN_LOGGER ] = logger,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.set = _setValue,
            _a[_DYN_SET_DF ] = _applyDefaults,
            _a[_DYN_WATCH ] = _watch,
            _a.ref = _ref,
            _a[_DYN_RD_ONLY ] = _rdOnly,
            _a[_DYN_BLK_VAL ] = _blkPropValue,
            _a._block = _block,
            _a);
        objDefine(cfgHandler, "uid", {
            c: false,
            e: false,
            w: false,
            v: uid
        });
        theState = _createState(cfgHandler);
        _makeDynamicObject(theState, newTarget, "config", "Creating");
        return cfgHandler;
    }
    function _logInvalidAccess(logger, message) {
        if (logger) {
            logger[_DYN_WARN_TO_CONSOLE ](message);
            logger[_DYN_THROW_INTERNAL ](2 , 108 , message);
        }
        else {
            throwInvalidAccess(message);
        }
    }
    function createDynamicConfig(config, defaultConfig, logger, inPlace) {
        var dynamicHandler = _createDynamicHandler(logger, config || {}, inPlace);
        if (defaultConfig) {
            dynamicHandler[_DYN_SET_DF ](dynamicHandler.cfg, defaultConfig);
        }
        return dynamicHandler;
    }
    function onConfigChange(config, configHandler, logger) {
        var handler = config[CFG_HANDLER_LINK] || config;
        if (handler.cfg && (handler.cfg === config || handler.cfg[CFG_HANDLER_LINK] === handler)) {
            return handler[_DYN_WATCH ](configHandler);
        }
        _logInvalidAccess(logger, STR_NOT_DYNAMIC_ERROR + dumpObj(config));
        return createDynamicConfig(config, null, logger)[_DYN_WATCH ](configHandler);
    }

    var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";

    var _aiNamespace = null;
    function _getExtensionNamespace() {
        var target = getInst("Microsoft");
        if (target) {
            _aiNamespace = target["ApplicationInsights"];
        }
        return _aiNamespace;
    }
    function getDebugExt(config) {
        var ns = _aiNamespace;
        if (!ns && config.disableDbgExt !== true) {
            ns = _aiNamespace || _getExtensionNamespace();
        }
        return ns ? ns["ChromeDbgExt"] : null;
    }

    var _a$3;
    var STR_WARN_TO_CONSOLE = "warnToConsole";
    var AiNonUserActionablePrefix = "AI (Internal): ";
    var AiUserActionablePrefix = "AI: ";
    var AIInternalMessagePrefix = "AITR_";
    var defaultValues$1 = {
        loggingLevelConsole: 0,
        loggingLevelTelemetry: 1,
        maxMessageLimit: 25,
        enableDebug: false
    };
    var _logFuncs = (_a$3 = {},
        _a$3[0 ] = null,
        _a$3[1 ] = "errorToConsole",
        _a$3[2 ] = STR_WARN_TO_CONSOLE,
        _a$3[3 ] = "debugToConsole",
        _a$3);
    function _sanitizeDiagnosticText(text) {
        if (text) {
            return "\"" + text[_DYN_REPLACE ](/\"/g, STR_EMPTY$3) + "\"";
        }
        return STR_EMPTY$3;
    }
    function _logToConsole(func, message) {
        var theConsole = getConsole();
        if (!!theConsole) {
            var logFunc = "log";
            if (theConsole[func]) {
                logFunc = func;
            }
            if (isFunction(theConsole[logFunc])) {
                theConsole[logFunc](message);
            }
        }
    }
    var _InternalLogMessage = /** @class */ (function () {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) { isUserAct = false; }
            var _self = this;
            _self[_DYN_MESSAGE_ID ] = msgId;
            _self[_DYN_MESSAGE ] =
                (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                    msgId;
            var strProps = STR_EMPTY$3;
            if (hasJSON()) {
                strProps = getJSON().stringify(properties);
            }
            var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY$3) +
                (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY$3);
            _self[_DYN_MESSAGE ] += diagnosticText;
        }
        _InternalLogMessage.dataType = "MessageData";
        return _InternalLogMessage;
    }());
    function safeGetLogger(core, config) {
        return (core || {})[_DYN_LOGGER ] || new DiagnosticLogger(config);
    }
    var DiagnosticLogger = /** @class */ (function () {
        function DiagnosticLogger(config) {
            this.identifier = "DiagnosticLogger";
            this.queue = [];
            var _messageCount = 0;
            var _messageLogged = {};
            var _loggingLevelConsole;
            var _loggingLevelTelemetry;
            var _maxInternalMessageLimit;
            var _enableDebug;
            var _unloadHandler;
            dynamicProto(DiagnosticLogger, this, function (_self) {
                _unloadHandler = _setDefaultsFromConfig(config || {});
                _self.consoleLoggingLevel = function () { return _loggingLevelConsole; };
                _self[_DYN_THROW_INTERNAL ] = function (severity, msgId, msg, properties, isUserAct) {
                    if (isUserAct === void 0) { isUserAct = false; }
                    var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                    if (_enableDebug) {
                        throw dumpObj(message);
                    }
                    else {
                        var logFunc = _logFuncs[severity] || STR_WARN_TO_CONSOLE;
                        if (!isUndefined(message[_DYN_MESSAGE ])) {
                            if (isUserAct) {
                                var messageKey = +message[_DYN_MESSAGE_ID ];
                                if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE ]);
                                    _messageLogged[messageKey] = true;
                                }
                            }
                            else {
                                if (_loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE ]);
                                }
                            }
                            _logInternalMessage(severity, message);
                        }
                        else {
                            _debugExtMsg("throw" + (severity === 1  ? "Critical" : "Warning"), message);
                        }
                    }
                };
                _self.debugToConsole = function (message) {
                    _logToConsole("debug", message);
                    _debugExtMsg("warning", message);
                };
                _self[_DYN_WARN_TO_CONSOLE ] = function (message) {
                    _logToConsole("warn", message);
                    _debugExtMsg("warning", message);
                };
                _self.errorToConsole = function (message) {
                    _logToConsole("error", message);
                    _debugExtMsg("error", message);
                };
                _self.resetInternalMessageCount = function () {
                    _messageCount = 0;
                    _messageLogged = {};
                };
                _self[_DYN_LOG_INTERNAL_MESSAGE ] = _logInternalMessage;
                _self[_DYN_UNLOAD ] = function (isAsync) {
                    _unloadHandler && _unloadHandler.rm();
                    _unloadHandler = null;
                };
                function _logInternalMessage(severity, message) {
                    if (_areInternalMessagesThrottled()) {
                        return;
                    }
                    var logMessage = true;
                    var messageKey = AIInternalMessagePrefix + message[_DYN_MESSAGE_ID ];
                    if (_messageLogged[messageKey]) {
                        logMessage = false;
                    }
                    else {
                        _messageLogged[messageKey] = true;
                    }
                    if (logMessage) {
                        if (severity <= _loggingLevelTelemetry) {
                            _self.queue[_DYN_PUSH$1 ](message);
                            _messageCount++;
                            _debugExtMsg((severity === 1  ? "error" : "warn"), message);
                        }
                        if (_messageCount === _maxInternalMessageLimit) {
                            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                            var throttleMessage = new _InternalLogMessage(23 , throttleLimitMessage, false);
                            _self.queue[_DYN_PUSH$1 ](throttleMessage);
                            if (severity === 1 ) {
                                _self.errorToConsole(throttleLimitMessage);
                            }
                            else {
                                _self[_DYN_WARN_TO_CONSOLE ](throttleLimitMessage);
                            }
                        }
                    }
                }
                function _setDefaultsFromConfig(config) {
                    return onConfigChange(createDynamicConfig(config, defaultValues$1, _self).cfg, function (details) {
                        var config = details.cfg;
                        _loggingLevelConsole = config[_DYN_LOGGING_LEVEL_CONSOL4 ];
                        _loggingLevelTelemetry = config.loggingLevelTelemetry;
                        _maxInternalMessageLimit = config.maxMessageLimit;
                        _enableDebug = config.enableDebug;
                    });
                }
                function _areInternalMessagesThrottled() {
                    return _messageCount >= _maxInternalMessageLimit;
                }
                function _debugExtMsg(name, data) {
                    var dbgExt = getDebugExt(config || {});
                    if (dbgExt && dbgExt[_DYN_DIAG_LOG ]) {
                        dbgExt[_DYN_DIAG_LOG ](name, data);
                    }
                }
            });
        }
        DiagnosticLogger.__ieDyn=1;
        return DiagnosticLogger;
    }());
    function _getLogger(logger) {
        return (logger || new DiagnosticLogger());
    }
    function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
        if (isUserAct === void 0) { isUserAct = false; }
        _getLogger(logger)[_DYN_THROW_INTERNAL ](severity, msgId, msg, properties, isUserAct);
    }
    function _warnToConsole(logger, message) {
        _getLogger(logger)[_DYN_WARN_TO_CONSOLE ](message);
    }

    var strExecutionContextKey = "ctx";
    var strParentContextKey = "ParentContextKey";
    var strChildrenContextKey = "ChildrenContextKey";
    var PerfEvent = /** @class */ (function () {
        function PerfEvent(name, payloadDetails, isAsync) {
            var _self = this;
            _self.start = utcNow();
            _self[_DYN_NAME ] = name;
            _self[_DYN_IS_ASYNC ] = isAsync;
            _self[_DYN_IS_CHILD_EVT ] = function () { return false; };
            if (isFunction(payloadDetails)) {
                var theDetails_1;
                objDefine(_self, "payload", {
                    g: function () {
                        if (!theDetails_1 && isFunction(payloadDetails)) {
                            theDetails_1 = payloadDetails();
                            payloadDetails = null;
                        }
                        return theDetails_1;
                    }
                });
            }
            _self[_DYN_GET_CTX ] = function (key) {
                if (key) {
                    if (key === PerfEvent[strParentContextKey] || key === PerfEvent[strChildrenContextKey]) {
                        return _self[key];
                    }
                    return (_self[strExecutionContextKey] || {})[key];
                }
                return null;
            };
            _self[_DYN_SET_CTX ] = function (key, value) {
                if (key) {
                    if (key === PerfEvent[strParentContextKey]) {
                        if (!_self[key]) {
                            _self[_DYN_IS_CHILD_EVT ] = function () { return true; };
                        }
                        _self[key] = value;
                    }
                    else if (key === PerfEvent[strChildrenContextKey]) {
                        _self[key] = value;
                    }
                    else {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                }
            };
            _self[_DYN_COMPLETE ] = function () {
                var childTime = 0;
                var childEvts = _self[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
                if (isArray(childEvts)) {
                    for (var lp = 0; lp < childEvts[_DYN_LENGTH$2 ]; lp++) {
                        var childEvt = childEvts[lp];
                        if (childEvt) {
                            childTime += childEvt[_DYN_TIME ];
                        }
                    }
                }
                _self[_DYN_TIME ] = utcNow() - _self.start;
                _self.exTime = _self[_DYN_TIME ] - childTime;
                _self[_DYN_COMPLETE ] = function () { };
            };
        }
        PerfEvent.ParentContextKey = "parent";
        PerfEvent.ChildrenContextKey = "childEvts";
        return PerfEvent;
    }());
    var doPerfActiveKey = "CoreUtils.doPerf";
    function doPerf(mgrSource, getSource, func, details, isAsync) {
        if (mgrSource) {
            var perfMgr = mgrSource;
            if (perfMgr[STR_GET_PERF_MGR]) {
                perfMgr = perfMgr[STR_GET_PERF_MGR]();
            }
            if (perfMgr) {
                var perfEvt = void 0;
                var currentActive = perfMgr[_DYN_GET_CTX ](doPerfActiveKey);
                try {
                    perfEvt = perfMgr.create(getSource(), details, isAsync);
                    if (perfEvt) {
                        if (currentActive && perfEvt[_DYN_SET_CTX ]) {
                            perfEvt[_DYN_SET_CTX ](PerfEvent[strParentContextKey], currentActive);
                            if (currentActive[_DYN_GET_CTX ] && currentActive[_DYN_SET_CTX ]) {
                                var children = currentActive[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
                                if (!children) {
                                    children = [];
                                    currentActive[_DYN_SET_CTX ](PerfEvent[strChildrenContextKey], children);
                                }
                                children[_DYN_PUSH$1 ](perfEvt);
                            }
                        }
                        perfMgr[_DYN_SET_CTX ](doPerfActiveKey, perfEvt);
                        return func(perfEvt);
                    }
                }
                catch (ex) {
                    if (perfEvt && perfEvt[_DYN_SET_CTX ]) {
                        perfEvt[_DYN_SET_CTX ]("exception", ex);
                    }
                }
                finally {
                    if (perfEvt) {
                        perfMgr.fire(perfEvt);
                    }
                    perfMgr[_DYN_SET_CTX ](doPerfActiveKey, currentActive);
                }
            }
        }
        return func();
    }

    var pluginStateData = createElmNodeData("plugin");
    function _getPluginState(plugin) {
        return pluginStateData.get(plugin, "state", {}, true);
    }

    var strTelemetryPluginChain = "TelemetryPluginChain";
    var strHasRunFlags = "_hasRun";
    var strGetTelCtx = "_getTelCtx";
    var _chainId = 0;
    function _getNextProxyStart(proxy, core, startAt) {
        while (proxy) {
            if (proxy[_DYN_GET_PLUGIN ]() === startAt) {
                return proxy;
            }
            proxy = proxy[_DYN_GET_NEXT ]();
        }
        return createTelemetryProxyChain([startAt], core.config || {}, core);
    }
    function _createInternalContext(telemetryChain, dynamicHandler, core, startAt) {
        var _nextProxy = null;
        var _onComplete = [];
        if (!dynamicHandler) {
            dynamicHandler = createDynamicConfig({}, null, core[_DYN_LOGGER ]);
        }
        if (startAt !== null) {
            _nextProxy = startAt ? _getNextProxyStart(telemetryChain, core, startAt) : telemetryChain;
        }
        var context = {
            _next: _moveNext,
            ctx: {
                core: function () {
                    return core;
                },
                diagLog: function () {
                    return safeGetLogger(core, dynamicHandler.cfg);
                },
                getCfg: function () {
                    return dynamicHandler.cfg;
                },
                getExtCfg: _resolveExtCfg,
                getConfig: _getConfig,
                hasNext: function () {
                    return !!_nextProxy;
                },
                getNext: function () {
                    return _nextProxy;
                },
                setNext: function (nextPlugin) {
                    _nextProxy = nextPlugin;
                },
                iterate: _iterateChain,
                onComplete: _addOnComplete
            }
        };
        function _addOnComplete(onComplete, that) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (onComplete) {
                _onComplete[_DYN_PUSH$1 ]({
                    func: onComplete,
                    self: !isUndefined(that) ? that : context.ctx,
                    args: args
                });
            }
        }
        function _moveNext() {
            var nextProxy = _nextProxy;
            _nextProxy = nextProxy ? nextProxy[_DYN_GET_NEXT ]() : null;
            if (!nextProxy) {
                var onComplete = _onComplete;
                if (onComplete && onComplete[_DYN_LENGTH$2 ] > 0) {
                    arrForEach(onComplete, function (completeDetails) {
                        try {
                            completeDetails.func.call(completeDetails.self, completeDetails.args);
                        }
                        catch (e) {
                            _throwInternal(core[_DYN_LOGGER ], 2 , 73 , "Unexpected Exception during onComplete - " + dumpObj(e));
                        }
                    });
                    _onComplete = [];
                }
            }
            return nextProxy;
        }
        function _getExtCfg(identifier, createIfMissing) {
            var idCfg = null;
            var cfg = dynamicHandler.cfg;
            if (cfg && identifier) {
                var extCfg = cfg[STR_EXTENSION_CONFIG ];
                if (!extCfg && createIfMissing) {
                    extCfg = {};
                }
                cfg[STR_EXTENSION_CONFIG] = extCfg;
                extCfg = dynamicHandler.ref(cfg, STR_EXTENSION_CONFIG);
                if (extCfg) {
                    idCfg = extCfg[identifier];
                    if (!idCfg && createIfMissing) {
                        idCfg = {};
                    }
                    extCfg[identifier] = idCfg;
                    idCfg = dynamicHandler.ref(extCfg, identifier);
                }
            }
            return idCfg;
        }
        function _resolveExtCfg(identifier, defaultValues) {
            var newConfig = _getExtCfg(identifier, true);
            if (defaultValues) {
                objForEachKey(defaultValues, function (field, defaultValue) {
                    if (isNullOrUndefined(newConfig[field])) {
                        var cfgValue = dynamicHandler.cfg[field];
                        if (cfgValue || !isNullOrUndefined(cfgValue)) {
                            newConfig[field] = cfgValue;
                        }
                    }
                    _applyDefaultValue(dynamicHandler, newConfig, field, defaultValue);
                });
            }
            return dynamicHandler[_DYN_SET_DF ](newConfig, defaultValues);
        }
        function _getConfig(identifier, field, defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            var theValue;
            var extConfig = _getExtCfg(identifier, false);
            var rootConfig = dynamicHandler.cfg;
            if (extConfig && (extConfig[field] || !isNullOrUndefined(extConfig[field]))) {
                theValue = extConfig[field];
            }
            else if (rootConfig[field] || !isNullOrUndefined(rootConfig[field])) {
                theValue = rootConfig[field];
            }
            return (theValue || !isNullOrUndefined(theValue)) ? theValue : defaultValue;
        }
        function _iterateChain(cb) {
            var nextPlugin;
            while (!!(nextPlugin = context._next())) {
                var plugin = nextPlugin[_DYN_GET_PLUGIN ]();
                if (plugin) {
                    cb(plugin);
                }
            }
        }
        return context;
    }
    function createProcessTelemetryContext(telemetryChain, cfg, core, startAt) {
        var config = createDynamicConfig(cfg);
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(env) {
            var nextPlugin = internalContext._next();
            if (nextPlugin) {
                nextPlugin[STR_PROCESS_TELEMETRY ](env, context);
            }
            return !nextPlugin;
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
            }
            return createProcessTelemetryContext(plugins || context[_DYN_GET_NEXT ](), config.cfg, core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createProcessTelemetryUnloadContext(telemetryChain, core, startAt) {
        var config = createDynamicConfig(core.config);
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(unloadState) {
            var nextPlugin = internalContext._next();
            nextPlugin && nextPlugin[_DYN_UNLOAD ](context, unloadState);
            return !nextPlugin;
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
            }
            return createProcessTelemetryUnloadContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createProcessTelemetryUpdateContext(telemetryChain, core, startAt) {
        var config = createDynamicConfig(core.config);
        var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
        var context = internalContext.ctx;
        function _processNext(updateState) {
            return context.iterate(function (plugin) {
                if (isFunction(plugin[_DYN_UPDATE ])) {
                    plugin[_DYN_UPDATE ](context, updateState);
                }
            });
        }
        function _createNew(plugins, startAt) {
            if (plugins === void 0) { plugins = null; }
            if (isArray(plugins)) {
                plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
            }
            return createProcessTelemetryUpdateContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
        }
        context[_DYN_PROCESS_NEXT ] = _processNext;
        context[_DYN_CREATE_NEW ] = _createNew;
        return context;
    }
    function createTelemetryProxyChain(plugins, config, core, startAt) {
        var firstProxy = null;
        var add = startAt ? false : true;
        if (isArray(plugins) && plugins[_DYN_LENGTH$2 ] > 0) {
            var lastProxy_1 = null;
            arrForEach(plugins, function (thePlugin) {
                if (!add && startAt === thePlugin) {
                    add = true;
                }
                if (add && thePlugin && isFunction(thePlugin[STR_PROCESS_TELEMETRY ])) {
                    var newProxy = createTelemetryPluginProxy(thePlugin, config, core);
                    if (!firstProxy) {
                        firstProxy = newProxy;
                    }
                    if (lastProxy_1) {
                        lastProxy_1._setNext(newProxy);
                    }
                    lastProxy_1 = newProxy;
                }
            });
        }
        if (startAt && !firstProxy) {
            return createTelemetryProxyChain([startAt], config, core);
        }
        return firstProxy;
    }
    function createTelemetryPluginProxy(plugin, config, core) {
        var nextProxy = null;
        var hasProcessTelemetry = isFunction(plugin[STR_PROCESS_TELEMETRY ]);
        var hasSetNext = isFunction(plugin[_DYN_SET_NEXT_PLUGIN ]);
        var chainId;
        if (plugin) {
            chainId = plugin[_DYN_IDENTIFIER$1 ] + "-" + plugin[STR_PRIORITY ] + "-" + _chainId++;
        }
        else {
            chainId = "Unknown-0-" + _chainId++;
        }
        var proxyChain = {
            getPlugin: function () {
                return plugin;
            },
            getNext: function () {
                return nextProxy;
            },
            processTelemetry: _processTelemetry,
            unload: _unloadPlugin,
            update: _updatePlugin,
            _id: chainId,
            _setNext: function (nextPlugin) {
                nextProxy = nextPlugin;
            }
        };
        function _getTelCtx() {
            var itemCtx;
            if (plugin && isFunction(plugin[strGetTelCtx])) {
                itemCtx = plugin[strGetTelCtx]();
            }
            if (!itemCtx) {
                itemCtx = createProcessTelemetryContext(proxyChain, config, core);
            }
            return itemCtx;
        }
        function _processChain(itemCtx, processPluginFn, name, details, isAsync) {
            var hasRun = false;
            var identifier = plugin ? plugin[_DYN_IDENTIFIER$1 ] : strTelemetryPluginChain;
            var hasRunContext = itemCtx[strHasRunFlags];
            if (!hasRunContext) {
                hasRunContext = itemCtx[strHasRunFlags] = {};
            }
            itemCtx.setNext(nextProxy);
            if (plugin) {
                doPerf(itemCtx[STR_CORE ](), function () { return identifier + ":" + name; }, function () {
                    hasRunContext[chainId] = true;
                    try {
                        var nextId = nextProxy ? nextProxy._id : STR_EMPTY$3;
                        if (nextId) {
                            hasRunContext[nextId] = false;
                        }
                        hasRun = processPluginFn(itemCtx);
                    }
                    catch (error) {
                        var hasNextRun = nextProxy ? hasRunContext[nextProxy._id] : true;
                        if (hasNextRun) {
                            hasRun = true;
                        }
                        if (!nextProxy || !hasNextRun) {
                            _throwInternal(itemCtx[_DYN_DIAG_LOG ](), 1 , 73 , "Plugin [" + identifier + "] failed during " + name + " - " + dumpObj(error) + ", run flags: " + dumpObj(hasRunContext));
                        }
                    }
                }, details, isAsync);
            }
            return hasRun;
        }
        function _processTelemetry(env, itemCtx) {
            itemCtx = itemCtx || _getTelCtx();
            function _callProcessTelemetry(itemCtx) {
                if (!plugin || !hasProcessTelemetry) {
                    return false;
                }
                var pluginState = _getPluginState(plugin);
                if (pluginState[_DYN_TEARDOWN ] || pluginState[STR_DISABLED]) {
                    return false;
                }
                if (hasSetNext) {
                    plugin[_DYN_SET_NEXT_PLUGIN ](nextProxy);
                }
                plugin[STR_PROCESS_TELEMETRY ](env, itemCtx);
                return true;
            }
            if (!_processChain(itemCtx, _callProcessTelemetry, "processTelemetry", function () { return ({ item: env }); }, !(env.sync))) {
                itemCtx[_DYN_PROCESS_NEXT ](env);
            }
        }
        function _unloadPlugin(unloadCtx, unloadState) {
            function _callTeardown() {
                var hasRun = false;
                if (plugin) {
                    var pluginState = _getPluginState(plugin);
                    var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                    if (plugin && (!pluginCore || pluginCore === unloadCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                        pluginState[STR_CORE ] = null;
                        pluginState[_DYN_TEARDOWN ] = true;
                        pluginState[_DYN_IS_INITIALIZED ] = false;
                        if (plugin[_DYN_TEARDOWN ] && plugin[_DYN_TEARDOWN ](unloadCtx, unloadState) === true) {
                            hasRun = true;
                        }
                    }
                }
                return hasRun;
            }
            if (!_processChain(unloadCtx, _callTeardown, "unload", function () { }, unloadState[_DYN_IS_ASYNC ])) {
                unloadCtx[_DYN_PROCESS_NEXT ](unloadState);
            }
        }
        function _updatePlugin(updateCtx, updateState) {
            function _callUpdate() {
                var hasRun = false;
                if (plugin) {
                    var pluginState = _getPluginState(plugin);
                    var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                    if (plugin && (!pluginCore || pluginCore === updateCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                        if (plugin[_DYN_UPDATE ] && plugin[_DYN_UPDATE ](updateCtx, updateState) === true) {
                            hasRun = true;
                        }
                    }
                }
                return hasRun;
            }
            if (!_processChain(updateCtx, _callUpdate, "update", function () { }, false)) {
                updateCtx[_DYN_PROCESS_NEXT ](updateState);
            }
        }
        return objFreeze(proxyChain);
    }

    function createUnloadHandlerContainer() {
        var handlers = [];
        function _addHandler(handler) {
            if (handler) {
                handlers[_DYN_PUSH$1 ](handler);
            }
        }
        function _runHandlers(unloadCtx, unloadState) {
            arrForEach(handlers, function (handler) {
                try {
                    handler(unloadCtx, unloadState);
                }
                catch (e) {
                    _throwInternal(unloadCtx[_DYN_DIAG_LOG ](), 2 , 73 , "Unexpected error calling unload handler - " + dumpObj(e));
                }
            });
            handlers = [];
        }
        return {
            add: _addHandler,
            run: _runHandlers
        };
    }

    function createUnloadHookContainer() {
        var _hooks = [];
        function _doUnload(logger) {
            var oldHooks = _hooks;
            _hooks = [];
            arrForEach(oldHooks, function (fn) {
                try {
                    (fn.rm || fn.remove).call(fn);
                }
                catch (e) {
                    _throwInternal(logger, 2 , 73 , "Unloading:" + dumpObj(e));
                }
            });
        }
        function _addHook(hooks) {
            if (hooks) {
                arrAppend(_hooks, hooks);
            }
        }
        return {
            run: _doUnload,
            add: _addHook
        };
    }

    var _a$2;
    var strGetPlugin = "getPlugin";
    var defaultValues = (_a$2 = {},
        _a$2[STR_EXTENSION_CONFIG] = { isVal: isNotNullOrUndefined, v: {} },
        _a$2);
    var BaseTelemetryPlugin = /** @class */ (function () {
        function BaseTelemetryPlugin() {
            var _self = this;
            var _isinitialized;
            var _rootCtx;
            var _nextPlugin;
            var _unloadHandlerContainer;
            var _hookContainer;
            _initDefaults();
            dynamicProto(BaseTelemetryPlugin, _self, function (_self) {
                _self[_DYN_INITIALIZE$1 ] = function (config, core, extensions, pluginChain) {
                    _setDefaults(config, core, pluginChain);
                    _isinitialized = true;
                };
                _self[_DYN_TEARDOWN ] = function (unloadCtx, unloadState) {
                    var _a;
                    var core = _self[STR_CORE ];
                    if (!core || (unloadCtx && core !== unloadCtx[STR_CORE ]())) {
                        return;
                    }
                    var result;
                    var unloadDone = false;
                    var theUnloadCtx = unloadCtx || createProcessTelemetryUnloadContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                    var theUnloadState = unloadState || (_a = {
                            reason: 0
                        },
                        _a[_DYN_IS_ASYNC ] = false,
                        _a);
                    function _unloadCallback() {
                        if (!unloadDone) {
                            unloadDone = true;
                            _unloadHandlerContainer.run(theUnloadCtx, unloadState);
                            _hookContainer.run(theUnloadCtx[_DYN_DIAG_LOG ]());
                            if (result === true) {
                                theUnloadCtx[_DYN_PROCESS_NEXT ](theUnloadState);
                            }
                            _initDefaults();
                        }
                    }
                    if (!_self[_DYN__DO_TEARDOWN ] || _self[_DYN__DO_TEARDOWN ](theUnloadCtx, theUnloadState, _unloadCallback) !== true) {
                        _unloadCallback();
                    }
                    else {
                        result = true;
                    }
                    return result;
                };
                _self[_DYN_UPDATE ] = function (updateCtx, updateState) {
                    var core = _self[STR_CORE ];
                    if (!core || (updateCtx && core !== updateCtx[STR_CORE ]())) {
                        return;
                    }
                    var result;
                    var updateDone = false;
                    var theUpdateCtx = updateCtx || createProcessTelemetryUpdateContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                    var theUpdateState = updateState || {
                        reason: 0
                    };
                    function _updateCallback() {
                        if (!updateDone) {
                            updateDone = true;
                            _setDefaults(theUpdateCtx.getCfg(), theUpdateCtx.core(), theUpdateCtx[_DYN_GET_NEXT ]());
                        }
                    }
                    if (!_self._doUpdate || _self._doUpdate(theUpdateCtx, theUpdateState, _updateCallback) !== true) {
                        _updateCallback();
                    }
                    else {
                        result = true;
                    }
                    return result;
                };
                proxyFunctionAs(_self, "_addUnloadCb", function () { return _unloadHandlerContainer; }, "add");
                proxyFunctionAs(_self, "_addHook", function () { return _hookContainer; }, "add");
                objDefine(_self, "_unloadHooks", { g: function () { return _hookContainer; } });
            });
            _self[_DYN_DIAG_LOG ] = function (itemCtx) {
                return _getTelCtx(itemCtx)[_DYN_DIAG_LOG ]();
            };
            _self[_DYN_IS_INITIALIZED ] = function () {
                return _isinitialized;
            };
            _self.setInitialized = function (isInitialized) {
                _isinitialized = isInitialized;
            };
            _self[_DYN_SET_NEXT_PLUGIN ] = function (next) {
                _nextPlugin = next;
            };
            _self[_DYN_PROCESS_NEXT ] = function (env, itemCtx) {
                if (itemCtx) {
                    itemCtx[_DYN_PROCESS_NEXT ](env);
                }
                else if (_nextPlugin && isFunction(_nextPlugin[STR_PROCESS_TELEMETRY ])) {
                    _nextPlugin[STR_PROCESS_TELEMETRY ](env, null);
                }
            };
            _self._getTelCtx = _getTelCtx;
            function _getTelCtx(currentCtx) {
                if (currentCtx === void 0) { currentCtx = null; }
                var itemCtx = currentCtx;
                if (!itemCtx) {
                    var rootCtx = _rootCtx || createProcessTelemetryContext(null, {}, _self[STR_CORE ]);
                    if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                        itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin[strGetPlugin]);
                    }
                    else {
                        itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin);
                    }
                }
                return itemCtx;
            }
            function _setDefaults(config, core, pluginChain) {
                createDynamicConfig(config, defaultValues, safeGetLogger(core));
                if (!pluginChain && core) {
                    pluginChain = core[_DYN_GET_PROCESS_TEL_CONT2 ]()[_DYN_GET_NEXT ]();
                }
                var nextPlugin = _nextPlugin;
                if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                    nextPlugin = _nextPlugin[strGetPlugin]();
                }
                _self[STR_CORE ] = core;
                _rootCtx = createProcessTelemetryContext(pluginChain, config, core, nextPlugin);
            }
            function _initDefaults() {
                _isinitialized = false;
                _self[STR_CORE ] = null;
                _rootCtx = null;
                _nextPlugin = null;
                _hookContainer = createUnloadHookContainer();
                _unloadHandlerContainer = createUnloadHandlerContainer();
            }
        }
        BaseTelemetryPlugin.__ieDyn=1;
        return BaseTelemetryPlugin;
    }());

    var STR_EMPTY$2 = "";
    var STR_NO_RESPONSE_BODY$1 = "NoResponseBody";
    var _noResponseQs$1 = "&" + STR_NO_RESPONSE_BODY$1 + "=true";
    var STR_POST_METHOD = "POST";
    var SenderPostManager = /** @class */ (function () {
        function SenderPostManager() {
            var _syncFetchPayload = 0;
            var _enableSendPromise;
            var _isInitialized;
            var _diagLog;
            var _isOneDs;
            var _onCompleteFuncs;
            var _disableCredentials;
            var _fallbackInst;
            var _disableXhr;
            var _disableBeacon;
            var _disableBeaconSync;
            var _disableFetchKeepAlive;
            var _addNoResponse;
            var _timeoutWrapper;
            dynamicProto(SenderPostManager, this, function (_self, _base) {
                var _sendCredentials = true;
                _initDefaults();
                _self[_DYN_INITIALIZE$1 ] = function (config, diagLog) {
                    _diagLog = diagLog;
                    if (_isInitialized) {
                        _throwInternal(_diagLog, 1 , 28 , "Sender is already initialized");
                    }
                    _self.SetConfig(config);
                    _isInitialized = true;
                };
                _self["_getDbgPlgTargets"] = function () {
                    return [_isInitialized, _isOneDs, _disableCredentials, _enableSendPromise];
                };
                _self.SetConfig = function (config) {
                    try {
                        _onCompleteFuncs = config.senderOnCompleteCallBack || {};
                        _disableCredentials = !!config.disableCredentials;
                        _isOneDs = !!config.isOneDs;
                        _enableSendPromise = !!config.enableSendPromise;
                        _disableXhr = !!config.disableXhr;
                        _disableBeacon = !!config.disableBeacon;
                        _disableBeaconSync = !!config.disableBeaconSync;
                        _timeoutWrapper = config.timeWrapper;
                        _addNoResponse = !!config.addNoResponse;
                        _disableFetchKeepAlive = !!config.disableFetchKeepAlive;
                        _fallbackInst = { sendPOST: _xhrSender };
                        if (!_isOneDs) {
                            _sendCredentials = false;
                        }
                        if (_disableCredentials) {
                            var location_1 = getLocation();
                            if (location_1 && location_1.protocol && location_1.protocol[_DYN_TO_LOWER_CASE$1 ]() === "file:") {
                                _sendCredentials = false;
                            }
                        }
                        return true;
                    }
                    catch (e) {
                    }
                    return false;
                };
                _self.getSyncFetchPayload = function () {
                    return _syncFetchPayload;
                };
                _self.getSenderInst = function (transports, sync) {
                    if (transports && transports[_DYN_LENGTH$2 ]) {
                        return _getSenderInterface(transports, sync);
                    }
                    return null;
                };
                _self.getFallbackInst = function () {
                    return _fallbackInst;
                };
                _self[_DYN__DO_TEARDOWN ] = function (unloadCtx, unloadState) {
                    _initDefaults();
                };
                function _onSuccess(res, onComplete) {
                    _doOnComplete(onComplete, 200, {}, res);
                }
                function _onError(message, onComplete) {
                    _throwInternal(_diagLog, 2 , 26 , "Failed to send telemetry.", { message: message });
                    _doOnComplete(onComplete, 400, {});
                }
                function _onNoPayloadUrl(onComplete) {
                    _onError("No endpoint url is provided for the batch", onComplete);
                }
                function _getSenderInterface(transports, syncSupport) {
                    var _a;
                    var transportType = 0 ;
                    var sendPostFunc = null;
                    var lp = 0;
                    while (sendPostFunc == null && lp < transports[_DYN_LENGTH$2 ]) {
                        transportType = transports[lp];
                        if (!_disableXhr && transportType === 1 ) {
                            if (useXDomainRequest()) {
                                sendPostFunc = _xdrSender;
                            }
                            else if (isXhrSupported()) {
                                sendPostFunc = _xhrSender;
                            }
                        }
                        else if (transportType === 2  && isFetchSupported(syncSupport) && (!syncSupport || !_disableFetchKeepAlive)) {
                            sendPostFunc = _doFetchSender;
                        }
                        else if (transportType === 3  && isBeaconsSupported() && (syncSupport ? !_disableBeaconSync : !_disableBeacon)) {
                            sendPostFunc = _beaconSender;
                        }
                        lp++;
                    }
                    if (sendPostFunc) {
                        return _a = {
                                _transport: transportType,
                                _isSync: syncSupport
                            },
                            _a[_DYN_SEND_POST ] = sendPostFunc,
                            _a;
                    }
                    return null;
                }
                function _doOnComplete(oncomplete, status, headers, response) {
                    try {
                        oncomplete && oncomplete(status, headers, response);
                    }
                    catch (e) {
                    }
                }
                function _doBeaconSend(payload, oncomplete) {
                    var nav = getNavigator();
                    var url = payload[_DYN_URL_STRING$1 ];
                    if (!url) {
                        _onNoPayloadUrl(oncomplete);
                        return true;
                    }
                    url = payload[_DYN_URL_STRING$1 ] + (_addNoResponse ? _noResponseQs$1 : STR_EMPTY$2);
                    var data = payload[_DYN_DATA$1 ];
                    var plainTextBatch = _isOneDs ? data : new Blob([data], { type: "text/plain;charset=UTF-8" });
                    var queued = nav.sendBeacon(url, plainTextBatch);
                    return queued;
                }
                function _beaconSender(payload, oncomplete, sync) {
                    var data = payload[_DYN_DATA$1 ];
                    try {
                        if (data) {
                            if (!_doBeaconSend(payload, oncomplete)) {
                                var onRetry = _onCompleteFuncs && _onCompleteFuncs.beaconOnRetry;
                                if (onRetry && isFunction(onRetry)) {
                                    onRetry(payload, oncomplete, _doBeaconSend);
                                }
                                else {
                                    _fallbackInst && _fallbackInst[_DYN_SEND_POST ](payload, oncomplete, true);
                                    _throwInternal(_diagLog, 2 , 40 , ". " + "Failed to send telemetry with Beacon API, retried with normal sender.");
                                }
                            }
                            else {
                                _onSuccess(STR_EMPTY$2, oncomplete);
                            }
                        }
                    }
                    catch (e) {
                        _isOneDs && _warnToConsole(_diagLog, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(e));
                        _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, STR_EMPTY$2);
                    }
                    return;
                }
                function _xhrSender(payload, oncomplete, sync) {
                    var thePromise;
                    var resolveFunc;
                    var rejectFunc;
                    var headers = payload[_DYN_HEADERS$1 ] || {};
                    if (!sync && _enableSendPromise) {
                        thePromise = createPromise(function (resolve, reject) {
                            resolveFunc = resolve;
                            rejectFunc = reject;
                        });
                    }
                    if (_isOneDs && sync && payload.disableXhrSync) {
                        sync = false;
                    }
                    var endPointUrl = payload[_DYN_URL_STRING$1 ];
                    if (!endPointUrl) {
                        _onNoPayloadUrl(oncomplete);
                        resolveFunc && resolveFunc(false);
                        return;
                    }
                    var xhr = openXhr(STR_POST_METHOD, endPointUrl, _sendCredentials, true, sync, payload[_DYN_TIMEOUT$1 ]);
                    if (!_isOneDs) {
                        xhr[_DYN_SET_REQUEST_HEADER ]("Content-type", "application/json");
                    }
                    arrForEach(objKeys(headers), function (headerName) {
                        xhr[_DYN_SET_REQUEST_HEADER ](headerName, headers[headerName]);
                    });
                    xhr.onreadystatechange = function () {
                        if (!_isOneDs) {
                            _doOnReadyFunc(xhr);
                            if (xhr.readyState === 4) {
                                resolveFunc && resolveFunc(true);
                            }
                        }
                    };
                    xhr.onload = function () {
                        if (_isOneDs) {
                            _doOnReadyFunc(xhr);
                        }
                    };
                    function _doOnReadyFunc(xhr) {
                        var onReadyFunc = _onCompleteFuncs && _onCompleteFuncs.xhrOnComplete;
                        var onReadyFuncExist = onReadyFunc && isFunction(onReadyFunc);
                        if (onReadyFuncExist) {
                            onReadyFunc(xhr, oncomplete, payload);
                        }
                        else {
                            var response = getResponseText(xhr);
                            _doOnComplete(oncomplete, xhr[_DYN_STATUS ], _getAllResponseHeaders(xhr, _isOneDs), response);
                        }
                    }
                    xhr.onerror = function (event) {
                        _doOnComplete(oncomplete, _isOneDs ? xhr[_DYN_STATUS ] : 400, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY$2 : formatErrorMessageXhr(xhr));
                        rejectFunc && rejectFunc(event);
                    };
                    xhr.ontimeout = function () {
                        _doOnComplete(oncomplete, _isOneDs ? xhr[_DYN_STATUS ] : 500, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY$2 : formatErrorMessageXhr(xhr));
                        resolveFunc && resolveFunc(false);
                    };
                    xhr.send(payload[_DYN_DATA$1 ]);
                    return thePromise;
                }
                function _doFetchSender(payload, oncomplete, sync) {
                    var _a;
                    var endPointUrl = payload[_DYN_URL_STRING$1 ];
                    var batch = payload[_DYN_DATA$1 ];
                    var plainTextBatch = _isOneDs ? batch : new Blob([batch], { type: "application/json" });
                    var thePromise;
                    var resolveFunc;
                    var rejectFunc;
                    var requestHeaders = new Headers();
                    var batchLength = batch[_DYN_LENGTH$2 ];
                    var ignoreResponse = false;
                    var responseHandled = false;
                    var headers = payload[_DYN_HEADERS$1 ] || {};
                    var init = (_a = {
                            method: STR_POST_METHOD,
                            body: plainTextBatch
                        },
                        _a[DisabledPropertyName] = true
                    ,
                        _a);
                    if (payload.headers && objKeys(payload.headers)[_DYN_LENGTH$2 ] > 0) {
                        arrForEach(objKeys(headers), function (headerName) {
                            requestHeaders.append(headerName, headers[headerName]);
                        });
                        init[_DYN_HEADERS$1 ] = requestHeaders;
                    }
                    if (_sendCredentials && _isOneDs) {
                        init.credentials = "include";
                    }
                    if (sync) {
                        init.keepalive = true;
                        _syncFetchPayload += batchLength;
                        if (_isOneDs) {
                            if (payload["_sendReason"] === 2 ) {
                                ignoreResponse = true;
                                if (_addNoResponse) {
                                    endPointUrl += _noResponseQs$1;
                                }
                            }
                        }
                        else {
                            ignoreResponse = true;
                        }
                    }
                    var request = new Request(endPointUrl, init);
                    try {
                        request[DisabledPropertyName] = true;
                    }
                    catch (e) {
                    }
                    if (!sync && _enableSendPromise) {
                        thePromise = createPromise(function (resolve, reject) {
                            resolveFunc = resolve;
                            rejectFunc = reject;
                        });
                    }
                    if (!endPointUrl) {
                        _onNoPayloadUrl(oncomplete);
                        resolveFunc && resolveFunc(false);
                        return;
                    }
                    function _handleError(res) {
                        _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, _isOneDs ? STR_EMPTY$2 : res);
                    }
                    function _onFetchComplete(response, payload, value) {
                        var status = response[_DYN_STATUS ];
                        var onCompleteFunc = _onCompleteFuncs.fetchOnComplete;
                        if (onCompleteFunc && isFunction(onCompleteFunc)) {
                            onCompleteFunc(response, oncomplete, value || STR_EMPTY$2, payload);
                        }
                        else {
                            _doOnComplete(oncomplete, status, {}, value || STR_EMPTY$2);
                        }
                    }
                    try {
                        doAwaitResponse(fetch(_isOneDs ? endPointUrl : request, _isOneDs ? init : null), function (result) {
                            if (sync) {
                                _syncFetchPayload -= batchLength;
                                batchLength = 0;
                            }
                            if (!responseHandled) {
                                responseHandled = true;
                                if (!result.rejected) {
                                    var response_1 = result.value;
                                    try {
                                        if (!_isOneDs && !response_1.ok) {
                                            _handleError(response_1.statusText);
                                            resolveFunc && resolveFunc(false);
                                        }
                                        else {
                                            if (_isOneDs && !response_1.body) {
                                                _onFetchComplete(response_1, null, STR_EMPTY$2);
                                                resolveFunc && resolveFunc(true);
                                            }
                                            else {
                                                doAwaitResponse(response_1.text(), function (resp) {
                                                    _onFetchComplete(response_1, payload, resp.value);
                                                    resolveFunc && resolveFunc(true);
                                                });
                                            }
                                        }
                                    }
                                    catch (e) {
                                        _handleError(dumpObj(e));
                                        rejectFunc && rejectFunc(e);
                                    }
                                }
                                else {
                                    _handleError(result.reason && result.reason[_DYN_MESSAGE ]);
                                    rejectFunc && rejectFunc(result.reason);
                                }
                            }
                        });
                    }
                    catch (e) {
                        if (!responseHandled) {
                            _handleError(dumpObj(e));
                            rejectFunc && rejectFunc(e);
                        }
                    }
                    if (ignoreResponse && !responseHandled) {
                        responseHandled = true;
                        _doOnComplete(oncomplete, 200, {});
                        resolveFunc && resolveFunc(true);
                    }
                    if (_isOneDs && !responseHandled && payload[_DYN_TIMEOUT$1 ] > 0) {
                        _timeoutWrapper && _timeoutWrapper.set(function () {
                            if (!responseHandled) {
                                responseHandled = true;
                                _doOnComplete(oncomplete, 500, {});
                                resolveFunc && resolveFunc(true);
                            }
                        }, payload[_DYN_TIMEOUT$1 ]);
                    }
                    return thePromise;
                }
                function _xdrSender(payload, oncomplete, sync) {
                    var _window = getWindow();
                    var xdr = new XDomainRequest();
                    var data = payload[_DYN_DATA$1 ];
                    xdr.onload = function () {
                        var response = getResponseText(xdr);
                        var onloadFunc = _onCompleteFuncs && _onCompleteFuncs.xdrOnComplete;
                        if (onloadFunc && isFunction(onloadFunc)) {
                            onloadFunc(xdr, oncomplete, payload);
                        }
                        else {
                            _doOnComplete(oncomplete, 200, {}, response);
                        }
                    };
                    xdr.onerror = function () {
                        _doOnComplete(oncomplete, 400, {}, _isOneDs ? STR_EMPTY$2 : formatErrorMessageXdr(xdr));
                    };
                    xdr.ontimeout = function () {
                        _doOnComplete(oncomplete, 500, {});
                    };
                    xdr.onprogress = function () { };
                    var hostingProtocol = _window && _window.location && _window.location[_DYN_PROTOCOL ] || "";
                    var endpoint = payload[_DYN_URL_STRING$1 ];
                    if (!endpoint) {
                        _onNoPayloadUrl(oncomplete);
                        return;
                    }
                    if (!_isOneDs && endpoint.lastIndexOf(hostingProtocol, 0) !== 0) {
                        var msg = "Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol.";
                        _throwInternal(_diagLog, 2 , 40 , ". " + msg);
                        _onError(msg, oncomplete);
                        return;
                    }
                    var endpointUrl = _isOneDs ? endpoint : endpoint[_DYN_REPLACE ](/^(https?:)/, "");
                    xdr.open(STR_POST_METHOD, endpointUrl);
                    if (payload[_DYN_TIMEOUT$1 ]) {
                        xdr[_DYN_TIMEOUT$1 ] = payload[_DYN_TIMEOUT$1 ];
                    }
                    xdr.send(data);
                    if (_isOneDs && sync) {
                        _timeoutWrapper && _timeoutWrapper.set(function () {
                            xdr.send(data);
                        }, 0);
                    }
                    else {
                        xdr.send(data);
                    }
                }
                function _initDefaults() {
                    _syncFetchPayload = 0;
                    _isInitialized = false;
                    _enableSendPromise = false;
                    _diagLog = null;
                    _isOneDs = null;
                    _onCompleteFuncs = null;
                    _disableCredentials = null;
                    _fallbackInst = null;
                    _disableXhr = false;
                    _disableBeacon = false;
                    _disableBeaconSync = false;
                    _disableFetchKeepAlive = false;
                    _addNoResponse = false;
                    _timeoutWrapper = null;
                }
            });
        }
        SenderPostManager.__ieDyn=1;
        return SenderPostManager;
    }());

    var strOnPrefix = "on";
    var strAttachEvent = "attachEvent";
    var strAddEventHelper = "addEventListener";
    var strDetachEvent = "detachEvent";
    var strRemoveEventListener = "removeEventListener";
    var strEvents = "events";
    var strVisibilityChangeEvt = "visibilitychange";
    var strPageHide = "pagehide";
    var strPageShow = "pageshow";
    var strUnload = "unload";
    var strBeforeUnload = "beforeunload";
    var strPageHideNamespace = createUniqueNamespace("aiEvtPageHide");
    var strPageShowNamespace = createUniqueNamespace("aiEvtPageShow");
    var rRemoveEmptyNs = /\.[\.]+/g;
    var rRemoveTrailingEmptyNs = /[\.]+$/;
    var _guid = 1;
    var elmNodeData = createElmNodeData("events");
    var eventNamespace = /^([^.]*)(?:\.(.+)|)/;
    function _normalizeNamespace(name) {
        if (name && name[_DYN_REPLACE ]) {
            return name[_DYN_REPLACE ](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, STR_EMPTY$3);
        }
        return name;
    }
    function _getEvtNamespace(eventName, evtNamespace) {
        var _a;
        if (evtNamespace) {
            var theNamespace_1 = STR_EMPTY$3;
            if (isArray(evtNamespace)) {
                theNamespace_1 = STR_EMPTY$3;
                arrForEach(evtNamespace, function (name) {
                    name = _normalizeNamespace(name);
                    if (name) {
                        if (name[0] !== ".") {
                            name = "." + name;
                        }
                        theNamespace_1 += name;
                    }
                });
            }
            else {
                theNamespace_1 = _normalizeNamespace(evtNamespace);
            }
            if (theNamespace_1) {
                if (theNamespace_1[0] !== ".") {
                    theNamespace_1 = "." + theNamespace_1;
                }
                eventName = (eventName || STR_EMPTY$3) + theNamespace_1;
            }
        }
        var parsedEvent = (eventNamespace.exec(eventName || STR_EMPTY$3) || []);
        return _a = {},
            _a[_DYN_TYPE ] = parsedEvent[1],
            _a.ns = ((parsedEvent[2] || STR_EMPTY$3).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, STR_EMPTY$3)[_DYN_SPLIT$1 ](".").sort()).join("."),
            _a;
    }
    function _getRegisteredEvents(target, evtName, addDefault) {
        if (addDefault === void 0) { addDefault = true; }
        var aiEvts = elmNodeData.get(target, strEvents, {}, addDefault);
        var registeredEvents = aiEvts[evtName];
        if (!registeredEvents) {
            registeredEvents = aiEvts[evtName] = [];
        }
        return registeredEvents;
    }
    function _doDetach(obj, evtName, handlerRef, useCapture) {
        if (obj && evtName && evtName[_DYN_TYPE ]) {
            if (obj[strRemoveEventListener]) {
                obj[strRemoveEventListener](evtName[_DYN_TYPE ], handlerRef, useCapture);
            }
            else if (obj[strDetachEvent]) {
                obj[strDetachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
            }
        }
    }
    function _doAttach(obj, evtName, handlerRef, useCapture) {
        var result = false;
        if (obj && evtName && evtName[_DYN_TYPE ] && handlerRef) {
            if (obj[strAddEventHelper]) {
                obj[strAddEventHelper](evtName[_DYN_TYPE ], handlerRef, useCapture);
                result = true;
            }
            else if (obj[strAttachEvent]) {
                obj[strAttachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
                result = true;
            }
        }
        return result;
    }
    function _doUnregister(target, events, evtName, unRegFn) {
        var idx = events[_DYN_LENGTH$2 ];
        while (idx--) {
            var theEvent = events[idx];
            if (theEvent) {
                if (!evtName.ns || evtName.ns === theEvent.evtName.ns) {
                    if (!unRegFn || unRegFn(theEvent)) {
                        _doDetach(target, theEvent.evtName, theEvent[_DYN_HANDLER ], theEvent.capture);
                        events[_DYN_SPLICE$1 ](idx, 1);
                    }
                }
            }
        }
    }
    function _unregisterEvents(target, evtName, unRegFn) {
        if (evtName[_DYN_TYPE ]) {
            _doUnregister(target, _getRegisteredEvents(target, evtName[_DYN_TYPE ]), evtName, unRegFn);
        }
        else {
            var eventCache = elmNodeData.get(target, strEvents, {});
            objForEachKey(eventCache, function (evtType, events) {
                _doUnregister(target, events, evtName, unRegFn);
            });
            if (objKeys(eventCache)[_DYN_LENGTH$2 ] === 0) {
                elmNodeData.kill(target, strEvents);
            }
        }
    }
    function mergeEvtNamespace(theNamespace, namespaces) {
        var newNamespaces;
        if (namespaces) {
            if (isArray(namespaces)) {
                newNamespaces = [theNamespace].concat(namespaces);
            }
            else {
                newNamespaces = [theNamespace, namespaces];
            }
            newNamespaces = (_getEvtNamespace("xx", newNamespaces).ns)[_DYN_SPLIT$1 ](".");
        }
        else {
            newNamespaces = theNamespace;
        }
        return newNamespaces;
    }
    function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
        var _a;
        if (useCapture === void 0) { useCapture = false; }
        var result = false;
        if (target) {
            try {
                var evtName = _getEvtNamespace(eventName, evtNamespace);
                result = _doAttach(target, evtName, handlerRef, useCapture);
                if (result && elmNodeData.accept(target)) {
                    var registeredEvent = (_a = {
                            guid: _guid++,
                            evtName: evtName
                        },
                        _a[_DYN_HANDLER ] = handlerRef,
                        _a.capture = useCapture,
                        _a);
                    _getRegisteredEvents(target, evtName.type)[_DYN_PUSH$1 ](registeredEvent);
                }
            }
            catch (e) {
            }
        }
        return result;
    }
    function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        if (target) {
            try {
                var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
                var found_1 = false;
                _unregisterEvents(target, evtName_1, function (regEvent) {
                    if ((evtName_1.ns && !handlerRef) || regEvent[_DYN_HANDLER ] === handlerRef) {
                        found_1 = true;
                        return true;
                    }
                    return false;
                });
                if (!found_1) {
                    _doDetach(target, evtName_1, handlerRef, useCapture);
                }
            }
            catch (e) {
            }
        }
    }
    function addEventHandler(eventName, callback, evtNamespace) {
        var result = false;
        var w = getWindow();
        if (w) {
            result = eventOn(w, eventName, callback, evtNamespace);
            result = eventOn(w["body"], eventName, callback, evtNamespace) || result;
        }
        var doc = getDocument();
        if (doc) {
            result = eventOn(doc, eventName, callback, evtNamespace) || result;
        }
        return result;
    }
    function removeEventHandler(eventName, callback, evtNamespace) {
        var w = getWindow();
        if (w) {
            eventOff(w, eventName, callback, evtNamespace);
            eventOff(w["body"], eventName, callback, evtNamespace);
        }
        var doc = getDocument();
        if (doc) {
            eventOff(doc, eventName, callback, evtNamespace);
        }
    }
    function _addEventListeners(events, listener, excludeEvents, evtNamespace) {
        var added = false;
        if (listener && events && events[_DYN_LENGTH$2 ] > 0) {
            arrForEach(events, function (name) {
                if (name) {
                    if (!excludeEvents || arrIndexOf(excludeEvents, name) === -1) {
                        added = addEventHandler(name, listener, evtNamespace) || added;
                    }
                }
            });
        }
        return added;
    }
    function addEventListeners(events, listener, excludeEvents, evtNamespace) {
        var added = false;
        if (listener && events && isArray(events)) {
            added = _addEventListeners(events, listener, excludeEvents, evtNamespace);
            if (!added && excludeEvents && excludeEvents[_DYN_LENGTH$2 ] > 0) {
                added = _addEventListeners(events, listener, null, evtNamespace);
            }
        }
        return added;
    }
    function removeEventListeners(events, listener, evtNamespace) {
        if (events && isArray(events)) {
            arrForEach(events, function (name) {
                if (name) {
                    removeEventHandler(name, listener, evtNamespace);
                }
            });
        }
    }
    function addPageUnloadEventListener(listener, excludeEvents, evtNamespace) {
        return addEventListeners([strBeforeUnload, strUnload, strPageHide], listener, excludeEvents, evtNamespace);
    }
    function removePageUnloadEventListener(listener, evtNamespace) {
        removeEventListeners([strBeforeUnload, strUnload, strPageHide], listener, evtNamespace);
    }
    function addPageHideEventListener(listener, excludeEvents, evtNamespace) {
        function _handlePageVisibility(evt) {
            var doc = getDocument();
            if (listener && doc && doc.visibilityState === "hidden") {
                listener(evt);
            }
        }
        var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
        var pageUnloadAdded = _addEventListeners([strPageHide], listener, excludeEvents, newNamespaces);
        if (!excludeEvents || arrIndexOf(excludeEvents, strVisibilityChangeEvt) === -1) {
            pageUnloadAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageUnloadAdded;
        }
        if (!pageUnloadAdded && excludeEvents) {
            pageUnloadAdded = addPageHideEventListener(listener, null, evtNamespace);
        }
        return pageUnloadAdded;
    }
    function removePageHideEventListener(listener, evtNamespace) {
        var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
        removeEventListeners([strPageHide], listener, newNamespaces);
        removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
    }
    function addPageShowEventListener(listener, excludeEvents, evtNamespace) {
        function _handlePageVisibility(evt) {
            var doc = getDocument();
            if (listener && doc && doc.visibilityState === "visible") {
                listener(evt);
            }
        }
        var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
        var pageShowAdded = _addEventListeners([strPageShow], listener, excludeEvents, newNamespaces);
        pageShowAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageShowAdded;
        if (!pageShowAdded && excludeEvents) {
            pageShowAdded = addPageShowEventListener(listener, null, evtNamespace);
        }
        return pageShowAdded;
    }
    function removePageShowEventListener(listener, evtNamespace) {
        var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
        removeEventListeners([strPageShow], listener, newNamespaces);
        removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
    }

    var STR_EMPTY$1 = "";

    var _DYN_TIMINGS$1 = "timings";
    var _DYN_VALUE = "value";
    var _DYN_KIND = "kind";
    var _DYN_LENGTH$1 = "length";
    var _DYN_PROCESS_TELEMETRY_ST0 = "processTelemetryStart";

    var _a$1;
    var Version = '4.2.2';
    var FullVersionString = "1DS-Web-JS-" + Version;
    var ObjHasOwnProperty = ObjProto$1.hasOwnProperty;
    var _fieldTypeEventPropMap = (_a$1 = {},
        _a$1[0 ] = 0 ,
        _a$1[2 ] = 6 ,
        _a$1[1 ] = 1 ,
        _a$1[3 ] = 7 ,
        _a$1[4096  | 2 ] = 6 ,
        _a$1[4096  | 1 ] = 1 ,
        _a$1[4096  | 3 ] = 7 ,
        _a$1);
    function isValueAssigned(value) {
        return !(value === STR_EMPTY$1 || isNullOrUndefined(value));
    }
    function getTenantId(apiKey) {
        if (apiKey) {
            var indexTenantId = strIndexOf(apiKey, "-");
            if (indexTenantId > -1) {
                return strLeft(apiKey, indexTenantId);
            }
        }
        return STR_EMPTY$1;
    }
    function sanitizeProperty(name, property, stringifyObjects) {
        if ((!property && !isValueAssigned(property)) || typeof name !== "string") {
            return null;
        }
        var propType = typeof property;
        if (propType === "string" || propType === "number" || propType === "boolean" || isArray(property)) {
            property = { value: property };
        }
        else if (propType === "object" && !ObjHasOwnProperty.call(property, "value")) {
            property = { value: stringifyObjects ? JSON.stringify(property) : property };
        }
        else if (isNullOrUndefined(property[_DYN_VALUE ])
            || property[_DYN_VALUE ] === STR_EMPTY$1 || (!isString(property[_DYN_VALUE ])
            && !isNumber(property[_DYN_VALUE ]) && !isBoolean(property[_DYN_VALUE ])
            && !isArray(property[_DYN_VALUE ]))) {
            return null;
        }
        if (isArray(property[_DYN_VALUE ]) &&
            !isArrayValid(property[_DYN_VALUE ])) {
            return null;
        }
        if (!isNullOrUndefined(property[_DYN_KIND ])) {
            if (isArray(property[_DYN_VALUE ]) || !isValueKind(property[_DYN_KIND ])) {
                return null;
            }
            property[_DYN_VALUE ] = property[_DYN_VALUE ].toString();
        }
        return property;
    }
    function getCommonSchemaMetaData(value, kind, type) {
        var encodedTypeValue = -1;
        if (!isUndefined(value)) {
            if (kind > 0) {
                if (kind === 32 ) {
                    encodedTypeValue = (1 << 13);
                }
                else if (kind <= 13) {
                    encodedTypeValue = (kind << 5);
                }
            }
            if (isDataType(type)) {
                if (encodedTypeValue === -1) {
                    encodedTypeValue = 0;
                }
                encodedTypeValue |= type;
            }
            else {
                var propType = _fieldTypeEventPropMap[getFieldValueType(value)] || -1;
                if (encodedTypeValue !== -1 && propType !== -1) {
                    encodedTypeValue |= propType;
                }
                else if (propType === 6 ) {
                    encodedTypeValue = propType;
                }
            }
        }
        return encodedTypeValue;
    }
    function extend(obj, obj2, obj3, obj4, obj5) {
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments[_DYN_LENGTH$1 ];
        var theArgs = arguments;
        if (isBoolean(theArgs[0])) {
            deep = theArgs[0];
            i++;
        }
        for (; i < length; i++) {
            var obj = theArgs[i];
            objForEachKey(obj, function (prop, value) {
                if (deep && value && isObject(value)) {
                    if (isArray(value)) {
                        extended[prop] = extended[prop] || [];
                        arrForEach(value, function (arrayValue, arrayIndex) {
                            if (arrayValue && isObject(arrayValue)) {
                                extended[prop][arrayIndex] = extend(true, extended[prop][arrayIndex], arrayValue);
                            }
                            else {
                                extended[prop][arrayIndex] = arrayValue;
                            }
                        });
                    }
                    else {
                        extended[prop] = extend(true, extended[prop], value);
                    }
                }
                else {
                    extended[prop] = value;
                }
            });
        }
        return extended;
    }
    var getTime = perfNow;
    function isValueKind(value) {
        if (value === 0  || ((value > 0  && value <= 13 ) || value === 32 )) {
            return true;
        }
        return false;
    }
    function isDataType(value) {
        if (value >= 0 && value <= 9) {
            return true;
        }
        return false;
    }
    function isArrayValid(value) {
        return value[_DYN_LENGTH$1 ] > 0;
    }
    function setProcessTelemetryTimings(event, identifier) {
        var evt = event;
        evt[_DYN_TIMINGS$1 ] = evt[_DYN_TIMINGS$1 ] || {};
        evt[_DYN_TIMINGS$1 ][_DYN_PROCESS_TELEMETRY_ST0 ] = evt[_DYN_TIMINGS$1 ][_DYN_PROCESS_TELEMETRY_ST0 ] || {};
        evt[_DYN_TIMINGS$1 ][_DYN_PROCESS_TELEMETRY_ST0 ][identifier] = getTime();
    }
    function getFieldValueType(value) {
        var theType = 0 ;
        if (value !== null && value !== undefined) {
            var objType = typeof value;
            if (objType === "string") {
                theType = 1 ;
            }
            else if (objType === "number") {
                theType = 2 ;
            }
            else if (objType === "boolean") {
                theType = 3 ;
            }
            else if (objType === strShimObject) {
                theType = 4 ;
                if (isArray(value)) {
                    theType = 4096 ;
                    if (value[_DYN_LENGTH$1 ] > 0) {
                        theType |= getFieldValueType(value[0]);
                    }
                }
                else if (ObjHasOwnProperty.call(value, "value")) {
                    theType = 8192  | getFieldValueType(value[_DYN_VALUE ]);
                }
            }
        }
        return theType;
    }
    function isChromium() {
        return !!getInst("chrome");
    }
    function isGreaterThanZero(value) {
        return value > 0;
    }

    var STR_EMPTY = "";
    var STR_DROPPED = "drop";
    var STR_SENDING = "send";
    var STR_REQUEUE = "requeue";
    var STR_RESPONSE_FAIL = "rspFail";
    var STR_OTHER = "oth";
    var DEFAULT_CACHE_CONTROL = "no-cache, no-store";
    var DEFAULT_CONTENT_TYPE = "application/x-json-stream";
    var STR_CACHE_CONTROL = "cache-control";
    var STR_CONTENT_TYPE_HEADER = "content-type";
    var STR_KILL_TOKENS_HEADER = "kill-tokens";
    var STR_KILL_DURATION_HEADER = "kill-duration";
    var STR_TIME_DELTA_HEADER = "time-delta-millis";
    var STR_CLIENT_VERSION = "client-version";
    var STR_CLIENT_ID = "client-id";
    var STR_TIME_DELTA_TO_APPLY = "time-delta-to-apply-millis";
    var STR_UPLOAD_TIME = "upload-time";
    var STR_API_KEY = "apikey";
    var STR_MSA_DEVICE_TICKET = "AuthMsaDeviceTicket";
    var STR_AUTH_WEB_TOKEN = "WebAuthToken";
    var STR_AUTH_XTOKEN = "AuthXToken";
    var STR_NO_RESPONSE_BODY = "NoResponseBody";
    var STR_MSFPC = "msfpc";
    var STR_TRACE = "trace";
    var STR_USER = "user";

    var _DYN_ALLOW_REQUEST_SENDIN0 = "allowRequestSending";
    var _DYN_FIRST_REQUEST_SENT = "firstRequestSent";
    var _DYN_SHOULD_ADD_CLOCK_SKE1 = "shouldAddClockSkewHeaders";
    var _DYN_GET_CLOCK_SKEW_HEADE2 = "getClockSkewHeaderValue";
    var _DYN_SET_CLOCK_SKEW = "setClockSkew";
    var _DYN_LENGTH = "length";
    var _DYN_CONCAT = "concat";
    var _DYN_I_KEY = "iKey";
    var _DYN_COUNT = "count";
    var _DYN_EVENTS = "events";
    var _DYN_PUSH = "push";
    var _DYN_SPLIT = "split";
    var _DYN_SPLICE = "splice";
    var _DYN_TO_LOWER_CASE = "toLowerCase";
    var _DYN_HDRS = "hdrs";
    var _DYN_USE_HDRS = "useHdrs";
    var _DYN_INITIALIZE = "initialize";
    var _DYN_SET_TIMEOUT_OVERRIDE = "setTimeoutOverride";
    var _DYN_CLEAR_TIMEOUT_OVERRI3 = "clearTimeoutOverride";
    var _DYN_PAYLOAD_PREPROCESSOR = "payloadPreprocessor";
    var _DYN_OVERRIDE_ENDPOINT_UR4 = "overrideEndpointUrl";
    var _DYN_AVOID_OPTIONS = "avoidOptions";
    var _DYN_DISABLE_EVENT_TIMING5 = "disableEventTimings";
    var _DYN_STRINGIFY_OBJECTS = "stringifyObjects";
    var _DYN_ENABLE_COMPOUND_KEY = "enableCompoundKey";
    var _DYN_DISABLE_XHR_SYNC = "disableXhrSync";
    var _DYN_DISABLE_FETCH_KEEP_A6 = "disableFetchKeepAlive";
    var _DYN_ADD_NO_RESPONSE = "addNoResponse";
    var _DYN_EXCLUDE_CS_META_DATA = "excludeCsMetaData";
    var _DYN_USE_SEND_BEACON = "useSendBeacon";
    var _DYN_ALWAYS_USE_XHR_OVERR7 = "alwaysUseXhrOverride";
    var _DYN_UNLOAD_TRANSPORTS = "unloadTransports";
    var _DYN_SERIALIZE_OFFLINE_EV8 = "serializeOfflineEvt";
    var _DYN_GET_OFFLINE_REQUEST_9 = "getOfflineRequestDetails";
    var _DYN_CREATE_PAYLOAD = "createPayload";
    var _DYN_CREATE_ONE_DSPAYLOAD = "createOneDSPayload";
    var _DYN_PAYLOAD_BLOB = "payloadBlob";
    var _DYN_HEADERS = "headers";
    var _DYN__THE_PAYLOAD = "_thePayload";
    var _DYN_URL_STRING = "urlString";
    var _DYN_BATCHES = "batches";
    var _DYN_SEND_TYPE = "sendType";
    var _DYN_ADD_HEADER = "addHeader";
    var _DYN_CAN_SEND_REQUEST = "canSendRequest";
    var _DYN_SEND_QUEUED_REQUESTS = "sendQueuedRequests";
    var _DYN_IS_COMPLETELY_IDLE = "isCompletelyIdle";
    var _DYN_SET_UNLOADING = "setUnloading";
    var _DYN_IS_TENANT_KILLED = "isTenantKilled";
    var _DYN_SEND_SYNCHRONOUS_BAT10 = "sendSynchronousBatch";
    var _DYN__TRANSPORT = "_transport";
    var _DYN_GET_WPARAM = "getWParam";
    var _DYN_IS_BEACON = "isBeacon";
    var _DYN_TIMINGS = "timings";
    var _DYN_IS_TEARDOWN = "isTeardown";
    var _DYN_IS_SYNC = "isSync";
    var _DYN_DATA = "data";
    var _DYN_TIMEOUT = "timeout";
    var _DYN__SEND_REASON = "_sendReason";
    var _DYN_SET_KILL_SWITCH_TENA11 = "setKillSwitchTenants";
    var _DYN__BACK_OFF_TRANSMISSI12 = "_backOffTransmission";
    var _DYN_IDENTIFIER = "identifier";
    var _DYN_DISABLE_OPTIMIZE_OBJ = "disableOptimizeObj";
    var _DYN_IGNORE_MC1_MS0_COOKI13 = "ignoreMc1Ms0CookieProcessing";
    var _DYN_EVENTS_LIMIT_IN_MEM = "eventsLimitInMem";
    var _DYN_AUTO_FLUSH_EVENTS_LI14 = "autoFlushEventsLimit";
    var _DYN_DISABLE_AUTO_BATCH_F15 = "disableAutoBatchFlushLimit";
    var _DYN_OVERRIDE_INSTRUMENTA16 = "overrideInstrumentationKey";
    var _DYN_DISABLE_TELEMETRY = "disableTelemetry";
    var _DYN_BASE_DATA = "baseData";
    var _DYN_SEND_ATTEMPT = "sendAttempt";
    var _DYN_LATENCY = "latency";
    var _DYN_SYNC = "sync";

    function _getEventMsfpc(theEvent) {
        var intWeb = ((theEvent.ext || {})["intweb"]);
        if (intWeb && isValueAssigned(intWeb[STR_MSFPC])) {
            return intWeb[STR_MSFPC];
        }
        return null;
    }
    function _getMsfpc(theEvents) {
        var msfpc = null;
        for (var lp = 0; msfpc === null && lp < theEvents[_DYN_LENGTH ]; lp++) {
            msfpc = _getEventMsfpc(theEvents[lp]);
        }
        return msfpc;
    }
    var EventBatch = /** @class */ (function () {
        function EventBatch(iKey, addEvents) {
            var events = addEvents ? [][_DYN_CONCAT ](addEvents) : [];
            var _self = this;
            var _msfpc = _getMsfpc(events);
            _self[_DYN_I_KEY ] = function () {
                return iKey;
            };
            _self.Msfpc = function () {
                return _msfpc || STR_EMPTY;
            };
            _self[_DYN_COUNT ] = function () {
                return events[_DYN_LENGTH ];
            };
            _self[_DYN_EVENTS ] = function () {
                return events;
            };
            _self.addEvent = function (theEvent) {
                if (theEvent) {
                    events[_DYN_PUSH ](theEvent);
                    if (!_msfpc) {
                        _msfpc = _getEventMsfpc(theEvent);
                    }
                    return true;
                }
                return false;
            };
            _self[_DYN_SPLIT ] = function (fromEvent, numEvents) {
                var theEvents;
                if (fromEvent < events[_DYN_LENGTH ]) {
                    var cnt = events[_DYN_LENGTH ] - fromEvent;
                    if (!isNullOrUndefined(numEvents)) {
                        cnt = numEvents < cnt ? numEvents : cnt;
                    }
                    theEvents = events[_DYN_SPLICE ](fromEvent, cnt);
                    _msfpc = _getMsfpc(events);
                }
                return new EventBatch(iKey, theEvents);
            };
        }
        EventBatch.create = function (iKey, theEvents) {
            return new EventBatch(iKey, theEvents);
        };
        return EventBatch;
    }());

    var ClockSkewManager = /** @class */ (function () {
        function ClockSkewManager() {
            var _allowRequestSending = true;
            var _shouldAddClockSkewHeaders = true;
            var _isFirstRequest = true;
            var _clockSkewHeaderValue = "use-collector-delta";
            var _clockSkewSet = false;
            dynamicProto(ClockSkewManager, this, function (_self) {
                _self[_DYN_ALLOW_REQUEST_SENDIN0 ] = function () {
                    return _allowRequestSending;
                };
                _self[_DYN_FIRST_REQUEST_SENT ] = function () {
                    if (_isFirstRequest) {
                        _isFirstRequest = false;
                        if (!_clockSkewSet) {
                            _allowRequestSending = false;
                        }
                    }
                };
                _self[_DYN_SHOULD_ADD_CLOCK_SKE1 ] = function () {
                    return _shouldAddClockSkewHeaders;
                };
                _self[_DYN_GET_CLOCK_SKEW_HEADE2 ] = function () {
                    return _clockSkewHeaderValue;
                };
                _self[_DYN_SET_CLOCK_SKEW ] = function (timeDeltaInMillis) {
                    if (!_clockSkewSet) {
                        if (timeDeltaInMillis) {
                            _clockSkewHeaderValue = timeDeltaInMillis;
                            _shouldAddClockSkewHeaders = true;
                            _clockSkewSet = true;
                        }
                        else {
                            _shouldAddClockSkewHeaders = false;
                        }
                        _allowRequestSending = true;
                    }
                };
            });
        }
        ClockSkewManager.__ieDyn=1;
        return ClockSkewManager;
    }());

    var SecToMsMultiplier = 1000;
    var KillSwitch = /** @class */ (function () {
        function KillSwitch() {
            var _killedTokenDictionary = {};
            function _normalizeTenants(values) {
                var result = [];
                if (values) {
                    arrForEach(values, function (value) {
                        result[_DYN_PUSH ](strTrim(value));
                    });
                }
                return result;
            }
            dynamicProto(KillSwitch, this, function (_self) {
                _self[_DYN_SET_KILL_SWITCH_TENA11 ] = function (killTokens, killDuration) {
                    if (killTokens && killDuration) {
                        try {
                            var killedTokens = _normalizeTenants(killTokens[_DYN_SPLIT ](","));
                            if (killDuration === "this-request-only") {
                                return killedTokens;
                            }
                            var durationMs = parseInt(killDuration, 10) * SecToMsMultiplier;
                            for (var i = 0; i < killedTokens[_DYN_LENGTH ]; ++i) {
                                _killedTokenDictionary[killedTokens[i]] = utcNow() + durationMs;
                            }
                        }
                        catch (ex) {
                            return [];
                        }
                    }
                    return [];
                };
                _self[_DYN_IS_TENANT_KILLED ] = function (tenantToken) {
                    var killDictionary = _killedTokenDictionary;
                    var name = strTrim(tenantToken);
                    if (killDictionary[name] !== undefined && killDictionary[name] > utcNow()) {
                        return true;
                    }
                    delete killDictionary[name];
                    return false;
                };
            });
        }
        KillSwitch.__ieDyn=1;
        return KillSwitch;
    }());

    var RandomizationLowerThreshold = 0.8;
    var RandomizationUpperThreshold = 1.2;
    var BaseBackoff = 3000;
    var MaxBackoff = 600000;
    function retryPolicyShouldRetryForStatus(httpStatusCode) {
        return !((httpStatusCode >= 300 && httpStatusCode < 500 && httpStatusCode != 429)
            || (httpStatusCode == 501)
            || (httpStatusCode == 505));
    }
    function retryPolicyGetMillisToBackoffForRetry(retriesSoFar) {
        var waitDuration = 0;
        var minBackoff = BaseBackoff * RandomizationLowerThreshold;
        var maxBackoff = BaseBackoff * RandomizationUpperThreshold;
        var randomBackoff = Math.floor(Math.random() * (maxBackoff - minBackoff)) + minBackoff;
        waitDuration = Math.pow(2, retriesSoFar) * randomBackoff;
        return Math.min(waitDuration, MaxBackoff);
    }

    var _MAX_STRING_JOINS = 20;
    var RequestSizeLimitBytes = 3984588;
    var BeaconRequestSizeLimitBytes = 65000;
    var MaxRecordSize = 2000000;
    var MaxBeaconRecordSize = Math.min(MaxRecordSize, BeaconRequestSizeLimitBytes);
    var metadata = "metadata";
    var f = "f";
    var rCheckDot = /\./;
    var Serializer = /** @class */ (function () {
        function Serializer(perfManager, valueSanitizer, stringifyObjects, enableCompoundKey, getEncodedTypeOverride, excludeCsMetaData) {
            var strData = "data";
            var strBaseData = "baseData";
            var strExt = "ext";
            var _checkForCompoundkey = !!enableCompoundKey;
            var _processSubKeys = true;
            var _theSanitizer = valueSanitizer;
            var _isReservedCache = {};
            var _excludeCsMetaData = !!excludeCsMetaData;
            var _getEncodedType = getEncodedTypeOverride || getCommonSchemaMetaData;
            dynamicProto(Serializer, this, function (_self) {
                _self.createPayload = function (retryCnt, isTeardown, isSync, isReducedPayload, sendReason, sendType) {
                    return {
                        apiKeys: [],
                        payloadBlob: STR_EMPTY,
                        overflow: null,
                        sizeExceed: [],
                        failedEvts: [],
                        batches: [],
                        numEvents: 0,
                        retryCnt: retryCnt,
                        isTeardown: isTeardown,
                        isSync: isSync,
                        isBeacon: isReducedPayload,
                        sendType: sendType,
                        sendReason: sendReason
                    };
                };
                _self.appendPayload = function (payload, theBatch, maxEventsPerBatch) {
                    var canAddEvents = payload && theBatch && !payload.overflow;
                    if (canAddEvents) {
                        doPerf(perfManager, function () { return "Serializer:appendPayload"; }, function () {
                            var theEvents = theBatch.events();
                            var payloadBlob = payload.payloadBlob;
                            var payloadEvents = payload.numEvents;
                            var eventsAdded = false;
                            var sizeExceeded = [];
                            var failedEvts = [];
                            var isBeaconPayload = payload.isBeacon;
                            var requestMaxSize = isBeaconPayload ? BeaconRequestSizeLimitBytes : RequestSizeLimitBytes;
                            var recordMaxSize = isBeaconPayload ? MaxBeaconRecordSize : MaxRecordSize;
                            var lp = 0;
                            var joinCount = 0;
                            while (lp < theEvents.length) {
                                var theEvent = theEvents[lp];
                                if (theEvent) {
                                    if (payloadEvents >= maxEventsPerBatch) {
                                        payload.overflow = theBatch.split(lp);
                                        break;
                                    }
                                    var eventBlob = _self.getEventBlob(theEvent);
                                    if (eventBlob && eventBlob.length <= recordMaxSize) {
                                        var blobLength = eventBlob.length;
                                        var currentSize = payloadBlob.length;
                                        if (currentSize + blobLength > requestMaxSize) {
                                            payload.overflow = theBatch.split(lp);
                                            break;
                                        }
                                        if (payloadBlob) {
                                            payloadBlob += "\n";
                                        }
                                        payloadBlob += eventBlob;
                                        joinCount++;
                                        if (joinCount > _MAX_STRING_JOINS) {
                                            strSubstr(payloadBlob, 0, 1);
                                            joinCount = 0;
                                        }
                                        eventsAdded = true;
                                        payloadEvents++;
                                    }
                                    else {
                                        if (eventBlob) {
                                            sizeExceeded.push(theEvent);
                                        }
                                        else {
                                            failedEvts.push(theEvent);
                                        }
                                        theEvents.splice(lp, 1);
                                        lp--;
                                    }
                                }
                                lp++;
                            }
                            if (sizeExceeded.length > 0) {
                                payload.sizeExceed.push(EventBatch.create(theBatch.iKey(), sizeExceeded));
                            }
                            if (failedEvts.length > 0) {
                                payload.failedEvts.push(EventBatch.create(theBatch.iKey(), failedEvts));
                            }
                            if (eventsAdded) {
                                payload.batches.push(theBatch);
                                payload.payloadBlob = payloadBlob;
                                payload.numEvents = payloadEvents;
                                var apiKey = theBatch.iKey();
                                if (arrIndexOf(payload.apiKeys, apiKey) === -1) {
                                    payload.apiKeys.push(apiKey);
                                }
                            }
                        }, function () { return ({ payload: payload, theBatch: { iKey: theBatch.iKey(), evts: theBatch.events() }, max: maxEventsPerBatch }); });
                    }
                    return canAddEvents;
                };
                _self.getEventBlob = function (eventData) {
                    try {
                        return doPerf(perfManager, function () { return "Serializer.getEventBlob"; }, function () {
                            var serializedEvent = {};
                            serializedEvent.name = eventData.name;
                            serializedEvent.time = eventData.time;
                            serializedEvent.ver = eventData.ver;
                            serializedEvent.iKey = "o:" + getTenantId(eventData.iKey);
                            var serializedExt = {};
                            var _addMetadataCallback;
                            if (!_excludeCsMetaData) {
                                _addMetadataCallback = function (pathKeys, key, value) {
                                    _addJSONPropertyMetaData(_getEncodedType, serializedExt, pathKeys, key, value);
                                };
                            }
                            var eventExt = eventData[strExt];
                            if (eventExt) {
                                serializedEvent[strExt] = serializedExt;
                                objForEachKey(eventExt, function (key, value) {
                                    var data = serializedExt[key] = {};
                                    _processPathKeys(value, data, "ext." + key, true, null, null, true);
                                });
                            }
                            var serializedData = serializedEvent[strData] = {};
                            serializedData.baseType = eventData.baseType;
                            var serializedBaseData = serializedData[strBaseData] = {};
                            _processPathKeys(eventData.baseData, serializedBaseData, strBaseData, false, [strBaseData], _addMetadataCallback, _processSubKeys);
                            _processPathKeys(eventData.data, serializedData, strData, false, [], _addMetadataCallback, _processSubKeys);
                            return JSON.stringify(serializedEvent);
                        }, function () { return ({ item: eventData }); });
                    }
                    catch (e) {
                        return null;
                    }
                };
                function _isReservedField(path, name) {
                    var result = _isReservedCache[path];
                    if (result === undefined) {
                        if (path.length >= 7) {
                            result = strStartsWith(path, "ext.metadata") || strStartsWith(path, "ext.web");
                        }
                        _isReservedCache[path] = result;
                    }
                    return result;
                }
                function _processPathKeys(srcObj, target, thePath, checkReserved, metadataPathKeys, metadataCallback, processSubKeys) {
                    objForEachKey(srcObj, function (key, srcValue) {
                        var prop = null;
                        if (srcValue || isValueAssigned(srcValue)) {
                            var path = thePath;
                            var name_1 = key;
                            var theMetaPathKeys = metadataPathKeys;
                            var destObj = target;
                            if (_checkForCompoundkey && !checkReserved && rCheckDot.test(key)) {
                                var subKeys = key.split(".");
                                var keyLen = subKeys.length;
                                if (keyLen > 1) {
                                    if (theMetaPathKeys) {
                                        theMetaPathKeys = theMetaPathKeys.slice();
                                    }
                                    for (var lp = 0; lp < keyLen - 1; lp++) {
                                        var subKey = subKeys[lp];
                                        destObj = destObj[subKey] = destObj[subKey] || {};
                                        path += "." + subKey;
                                        if (theMetaPathKeys) {
                                            theMetaPathKeys.push(subKey);
                                        }
                                    }
                                    name_1 = subKeys[keyLen - 1];
                                }
                            }
                            var isReserved = checkReserved && _isReservedField(path);
                            if (!isReserved && _theSanitizer && _theSanitizer.handleField(path, name_1)) {
                                prop = _theSanitizer.value(path, name_1, srcValue, stringifyObjects);
                            }
                            else {
                                prop = sanitizeProperty(name_1, srcValue, stringifyObjects);
                            }
                            if (prop) {
                                var newValue = prop.value;
                                destObj[name_1] = newValue;
                                if (metadataCallback) {
                                    metadataCallback(theMetaPathKeys, name_1, prop);
                                }
                                if (processSubKeys && typeof newValue === "object" && !isArray(newValue)) {
                                    var newPath = theMetaPathKeys;
                                    if (newPath) {
                                        newPath = newPath.slice();
                                        newPath.push(name_1);
                                    }
                                    _processPathKeys(srcValue, newValue, path + "." + name_1, checkReserved, newPath, metadataCallback, processSubKeys);
                                }
                            }
                        }
                    });
                }
            });
        }
        Serializer.__ieDyn=1;
        return Serializer;
    }());
    function _addJSONPropertyMetaData(getEncodedType, json, propKeys, name, propertyValue) {
        if (propertyValue && json) {
            var encodedTypeValue = getEncodedType(propertyValue.value, propertyValue.kind, propertyValue.propertyType);
            if (encodedTypeValue > -1) {
                var metaData = json[metadata];
                if (!metaData) {
                    metaData = json[metadata] = { f: {} };
                }
                var metaTarget = metaData[f];
                if (!metaTarget) {
                    metaTarget = metaData[f] = {};
                }
                if (propKeys) {
                    for (var lp = 0; lp < propKeys.length; lp++) {
                        var key = propKeys[lp];
                        if (!metaTarget[key]) {
                            metaTarget[key] = { f: {} };
                        }
                        var newTarget = metaTarget[key][f];
                        if (!newTarget) {
                            newTarget = metaTarget[key][f] = {};
                        }
                        metaTarget = newTarget;
                    }
                }
                metaTarget = metaTarget[name] = {};
                if (isArray(propertyValue.value)) {
                    metaTarget["a"] = {
                        t: encodedTypeValue
                    };
                }
                else {
                    metaTarget["t"] = encodedTypeValue;
                }
            }
        }
    }

    function createTimeoutWrapper(argSetTimeout, argClearTimeout) {
        return {
            set: function (callback, ms) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                return scheduleTimeoutWith([argSetTimeout, argClearTimeout], callback, ms, args);
            }
        };
    }

    var _a;
    var strSendAttempt = "sendAttempt";
    var _noResponseQs = "&" + STR_NO_RESPONSE_BODY + "=true";
    var UrlQueryString = "?cors=true&" + STR_CONTENT_TYPE_HEADER[_DYN_TO_LOWER_CASE ]() + "=" + DEFAULT_CONTENT_TYPE;
    var _eventActionMap = (_a = {},
        _a[1 ] = STR_REQUEUE,
        _a[100 ] = STR_REQUEUE,
        _a[200 ] = "sent",
        _a[8004 ] = STR_DROPPED,
        _a[8003 ] = STR_DROPPED,
        _a);
    var _collectorQsHeaders = {};
    var _collectorHeaderToQs = {};
    function _addCollectorHeaderQsMapping(qsName, headerName, allowQs) {
        _collectorQsHeaders[qsName] = headerName;
        if (allowQs !== false) {
            _collectorHeaderToQs[headerName] = qsName;
        }
    }
    _addCollectorHeaderQsMapping(STR_MSA_DEVICE_TICKET, STR_MSA_DEVICE_TICKET, false);
    _addCollectorHeaderQsMapping(STR_CLIENT_VERSION, STR_CLIENT_VERSION);
    _addCollectorHeaderQsMapping(STR_CLIENT_ID, "Client-Id");
    _addCollectorHeaderQsMapping(STR_API_KEY, STR_API_KEY);
    _addCollectorHeaderQsMapping(STR_TIME_DELTA_TO_APPLY, STR_TIME_DELTA_TO_APPLY);
    _addCollectorHeaderQsMapping(STR_UPLOAD_TIME, STR_UPLOAD_TIME);
    _addCollectorHeaderQsMapping(STR_AUTH_XTOKEN, STR_AUTH_XTOKEN);
    function _hasHeader(headers, header) {
        var hasHeader = false;
        if (headers && header) {
            var keys = objKeys(headers);
            if (keys && keys[_DYN_LENGTH ] > 0) {
                var lowerHeader = header[_DYN_TO_LOWER_CASE ]();
                for (var lp = 0; lp < keys[_DYN_LENGTH ]; lp++) {
                    var value = keys[lp];
                    if (value && objHasOwnProperty(header, value) &&
                        value[_DYN_TO_LOWER_CASE ]() === lowerHeader) {
                        hasHeader = true;
                        break;
                    }
                }
            }
        }
        return hasHeader;
    }
    function _addRequestDetails(details, name, value, useHeaders) {
        if (name && value && value[_DYN_LENGTH ] > 0) {
            if (useHeaders && _collectorQsHeaders[name]) {
                details[_DYN_HDRS ][_collectorQsHeaders[name]] = value;
                details[_DYN_USE_HDRS ] = true;
            }
            else {
                details.url += "&" + name + "=" + value;
            }
        }
    }
    function _addQueryStringParameter(qsParams, name, value) {
        for (var i = 0; i < qsParams[_DYN_LENGTH ]; i++) {
            if (qsParams[i].name === name) {
                qsParams[i].value = value;
                return;
            }
        }
        qsParams[_DYN_PUSH ]({ name: name, value: value });
    }
    function _removeQueryStringParameter(qsParams, name) {
        for (var i = 0; i < qsParams[_DYN_LENGTH ]; i++) {
            if (qsParams[i].name === name) {
                qsParams[_DYN_SPLICE ](i, 1);
                return;
            }
        }
    }
    var HttpManager = /** @class */ (function () {
        function HttpManager(maxEventsPerBatch, maxConnections, maxRequestRetriesBeforeBackoff, actions) {
            var _urlString;
            var _killSwitch;
            var _paused;
            var _clockSkewManager;
            var _useBeacons = false;
            var _outstandingRequests;
            var _postManager;
            var _logger;
            var _sendInterfaces;
            var _core;
            var _customHttpInterface;
            var _queryStringParameters;
            var _headers;
            var _batchQueue;
            var _serializer;
            var _enableEventTimings;
            var _cookieMgr;
            var _isUnloading;
            var _useHeaders;
            var _xhrTimeout;
            var _disableXhrSync;
            var _disableFetchKeepAlive;
            var _canHaveReducedPayload;
            var _addNoResponse;
            var _unloadHooks;
            var _sendHook;
            var _sendListener;
            var _responseHandlers;
            var _isInitialized;
            var _timeoutWrapper;
            var _excludeCsMetaData;
            var _sendPostMgr;
            dynamicProto(HttpManager, this, function (_self) {
                _initDefaults();
                var _sendCredentials = true;
                _self[_DYN_INITIALIZE ] = function (theConfig, core, postChannel) {
                    if (!_isInitialized) {
                        _core = core;
                        _cookieMgr = core.getCookieMgr();
                        _postManager = postChannel;
                        _logger = _postManager.diagLog();
                        arrAppend(_unloadHooks, onConfigChange(theConfig, function (details) {
                            var _a;
                            var coreConfig = details.cfg;
                            var channelConfig = details.cfg.extensionConfig[postChannel.identifier];
                            _timeoutWrapper = createTimeoutWrapper(channelConfig[_DYN_SET_TIMEOUT_OVERRIDE ], channelConfig[_DYN_CLEAR_TIMEOUT_OVERRI3 ]);
                            if (isValueAssigned(coreConfig.anonCookieName)) {
                                _addQueryStringParameter(_queryStringParameters, "anoncknm", coreConfig.anonCookieName);
                            }
                            else {
                                _removeQueryStringParameter(_queryStringParameters, "anoncknm");
                            }
                            _sendHook = channelConfig[_DYN_PAYLOAD_PREPROCESSOR ];
                            _sendListener = channelConfig.payloadListener;
                            var httpInterface = channelConfig.httpXHROverride;
                            var endpointUrl = channelConfig[_DYN_OVERRIDE_ENDPOINT_UR4 ] ? channelConfig[_DYN_OVERRIDE_ENDPOINT_UR4 ] : coreConfig.endpointUrl;
                            _urlString = endpointUrl + UrlQueryString;
                            _useHeaders = !isUndefined(channelConfig[_DYN_AVOID_OPTIONS ]) ? !channelConfig[_DYN_AVOID_OPTIONS ] : true;
                            _enableEventTimings = !channelConfig[_DYN_DISABLE_EVENT_TIMING5 ];
                            var valueSanitizer = channelConfig.valueSanitizer;
                            var stringifyObjects = channelConfig[_DYN_STRINGIFY_OBJECTS ];
                            var enableCompoundKey = !!coreConfig[_DYN_ENABLE_COMPOUND_KEY ];
                            if (!isUndefined(channelConfig[_DYN_ENABLE_COMPOUND_KEY ])) {
                                enableCompoundKey = !!channelConfig[_DYN_ENABLE_COMPOUND_KEY ];
                            }
                            _xhrTimeout = channelConfig.xhrTimeout;
                            _disableXhrSync = !!channelConfig[_DYN_DISABLE_XHR_SYNC ];
                            _disableFetchKeepAlive = !!channelConfig[_DYN_DISABLE_FETCH_KEEP_A6 ];
                            _addNoResponse = channelConfig[_DYN_ADD_NO_RESPONSE ] !== false;
                            _excludeCsMetaData = !!channelConfig[_DYN_EXCLUDE_CS_META_DATA ];
                            if (!!core.getPlugin("LocalStorage")) {
                                _disableFetchKeepAlive = true;
                            }
                            _useBeacons = !isReactNative();
                            _serializer = new Serializer(_core, valueSanitizer, stringifyObjects, enableCompoundKey, getCommonSchemaMetaData, _excludeCsMetaData);
                            if (!isNullOrUndefined(channelConfig[_DYN_USE_SEND_BEACON ])) {
                                _useBeacons = !!channelConfig[_DYN_USE_SEND_BEACON ];
                            }
                            var sendPostConfig = _getSendPostMgrConfig();
                            if (!_sendPostMgr) {
                                _sendPostMgr = new SenderPostManager();
                                _sendPostMgr[_DYN_INITIALIZE ](sendPostConfig, _logger);
                            }
                            else {
                                _sendPostMgr.SetConfig(sendPostConfig);
                            }
                            var syncHttpInterface = httpInterface;
                            var beaconHttpInterface = channelConfig[_DYN_ALWAYS_USE_XHR_OVERR7 ] ? httpInterface : null;
                            var fetchSyncHttpInterface = channelConfig[_DYN_ALWAYS_USE_XHR_OVERR7 ] ? httpInterface : null;
                            var beaconUnloadTransports = [3 , 2 ];
                            if (!httpInterface) {
                                _customHttpInterface = false;
                                var theTransports = [];
                                if (isReactNative()) {
                                    theTransports = [2 , 1 ];
                                    beaconUnloadTransports = [2 , 1 , 3 ];
                                }
                                else {
                                    theTransports = [1 , 2 , 3 ];
                                }
                                theTransports = prependTransports(theTransports, channelConfig.transports);
                                httpInterface = _getSenderInterface(theTransports, false);
                                if (!httpInterface) {
                                    _warnToConsole(_logger, "No available transport to send events");
                                }
                                syncHttpInterface = _getSenderInterface(theTransports, true);
                            }
                            if (!beaconHttpInterface) {
                                beaconUnloadTransports = prependTransports(beaconUnloadTransports, channelConfig[_DYN_UNLOAD_TRANSPORTS ]);
                                beaconHttpInterface = _getSenderInterface(beaconUnloadTransports, true);
                            }
                            _canHaveReducedPayload = !_customHttpInterface && ((_useBeacons && isBeaconsSupported()) || (!_disableFetchKeepAlive && isFetchSupported(true)));
                            _sendInterfaces = (_a = {},
                                _a[0 ] = httpInterface,
                                _a[1 ] = syncHttpInterface || _getSenderInterface([1 , 2 , 3 ], true),
                                _a[2 ] = beaconHttpInterface || syncHttpInterface || _getSenderInterface([1 ], true),
                                _a[3 ] = fetchSyncHttpInterface || _getSenderInterface([2 , 3 ], true) || syncHttpInterface || _getSenderInterface([1 ], true),
                                _a);
                        }));
                        _isInitialized = true;
                    }
                };
                _self.addResponseHandler = function (responseHandler) {
                    _responseHandlers[_DYN_PUSH ](responseHandler);
                    return {
                        rm: function () {
                            var index = _responseHandlers.indexOf(responseHandler);
                            if (index >= 0) {
                                _responseHandlers[_DYN_SPLICE ](index, 1);
                            }
                        }
                    };
                };
                _self[_DYN_SERIALIZE_OFFLINE_EV8 ] = function (evt) {
                    try {
                        if (_serializer) {
                            return _serializer.getEventBlob(evt);
                        }
                    }
                    catch (e) {
                    }
                    return STR_EMPTY;
                };
                _self[_DYN_GET_OFFLINE_REQUEST_9 ] = function () {
                    try {
                        var payload = _serializer && _serializer[_DYN_CREATE_PAYLOAD ](0, false, false, false, 1 , 0 );
                        return _buildRequestDetails(payload, _useHeaders);
                    }
                    catch (e) {
                    }
                    return null;
                };
                _self[_DYN_CREATE_ONE_DSPAYLOAD ] = function (evts, optimize) {
                    try {
                        var theBatches_1 = [];
                        arrForEach(evts, function (evt) {
                            if (optimize) {
                                evt = optimizeObject(evt);
                            }
                            var batch = EventBatch.create(evt[_DYN_I_KEY ], [evt]);
                            theBatches_1[_DYN_PUSH ](batch);
                        });
                        var thePayload = null;
                        while (theBatches_1[_DYN_LENGTH ] > 0 && _serializer) {
                            var theBatch = theBatches_1.shift();
                            if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                                thePayload = thePayload || _serializer[_DYN_CREATE_PAYLOAD ](0, false, false, false, 1 , 0 );
                                _serializer.appendPayload(thePayload, theBatch, maxEventsPerBatch);
                            }
                        }
                        var requestDetails = _buildRequestDetails(thePayload, _useHeaders);
                        var payloadData = {
                            data: thePayload[_DYN_PAYLOAD_BLOB ],
                            urlString: requestDetails.url,
                            headers: requestDetails[_DYN_HDRS ],
                            timeout: _xhrTimeout,
                            disableXhrSync: _disableXhrSync,
                            disableFetchKeepAlive: _disableFetchKeepAlive
                        };
                        if (_useHeaders) {
                            if (!_hasHeader(payloadData[_DYN_HEADERS ], STR_CACHE_CONTROL)) {
                                payloadData[_DYN_HEADERS ][STR_CACHE_CONTROL] = DEFAULT_CACHE_CONTROL;
                            }
                            if (!_hasHeader(payloadData[_DYN_HEADERS ], STR_CONTENT_TYPE_HEADER)) {
                                payloadData[_DYN_HEADERS ][STR_CONTENT_TYPE_HEADER] = DEFAULT_CONTENT_TYPE;
                            }
                        }
                        return payloadData;
                    }
                    catch (e) {
                    }
                    return null;
                };
                function _getSenderInterface(transports, syncSupport) {
                    try {
                        return _sendPostMgr && _sendPostMgr.getSenderInst(transports, syncSupport);
                    }
                    catch (e) {
                    }
                    return null;
                }
                _self["_getDbgPlgTargets"] = function () {
                    return [_sendInterfaces[0 ], _killSwitch, _serializer, _sendInterfaces];
                };
                function _getSendPostMgrConfig() {
                    try {
                        var onCompleteFuncs = {
                            xdrOnComplete: _xdrOncomplete,
                            fetchOnComplete: _fetchOnComplete,
                            xhrOnComplete: _xhrOnComplete,
                            beaconOnRetry: _onBeaconRetry
                        };
                        var config = {
                            enableSendPromise: false,
                            isOneDs: true,
                            disableCredentials: !_sendCredentials,
                            disableXhr: false,
                            disableBeacon: !_useBeacons,
                            disableBeaconSync: !_useBeacons,
                            disableFetchKeepAlive: _disableFetchKeepAlive,
                            timeWrapper: _timeoutWrapper,
                            addNoResponse: _addNoResponse,
                            senderOnCompleteCallBack: onCompleteFuncs
                        };
                        return config;
                    }
                    catch (e) {
                    }
                    return null;
                }
                function _xdrOncomplete(xdr, oncomplete, payload) {
                    var response = getResponseText(xdr);
                    _doOnComplete(oncomplete, 200, {}, response);
                    _handleCollectorResponse(response);
                }
                function _initDefaults() {
                    var undefValue;
                    _urlString = null;
                    _killSwitch = new KillSwitch();
                    _paused = false;
                    _clockSkewManager = new ClockSkewManager();
                    _useBeacons = false;
                    _outstandingRequests = 0;
                    _postManager = null;
                    _logger = null;
                    _sendInterfaces = null;
                    _core = null;
                    _customHttpInterface = true;
                    _queryStringParameters = [];
                    _headers = {};
                    _batchQueue = [];
                    _serializer = null;
                    _enableEventTimings = false;
                    _cookieMgr = null;
                    _isUnloading = false;
                    _useHeaders = false;
                    _xhrTimeout = undefValue;
                    _disableXhrSync = undefValue;
                    _disableFetchKeepAlive = undefValue;
                    _canHaveReducedPayload = undefValue;
                    _addNoResponse = undefValue;
                    _unloadHooks = [];
                    _sendHook = undefValue;
                    _sendListener = undefValue;
                    _responseHandlers = [];
                    _isInitialized = false;
                    _timeoutWrapper = createTimeoutWrapper();
                    _excludeCsMetaData = false;
                    _sendPostMgr = null;
                }
                function _fetchOnComplete(response, onComplete, resValue, payload) {
                    var handleResponse = function (status, headerMap, responseText) {
                        _doOnComplete(onComplete, status, headerMap, responseText);
                        _handleCollectorResponse(responseText);
                    };
                    var headerMap = {};
                    var headers = response[_DYN_HEADERS ];
                    if (headers) {
                        headers["forEach"](function (value, name) {
                            headerMap[name] = value;
                        });
                    }
                    handleResponse(response.status, headerMap, resValue || STR_EMPTY);
                }
                function _xhrOnComplete(request, oncomplete, payload) {
                    var response = getResponseText(request);
                    _doOnComplete(oncomplete, request.status, _getAllResponseHeaders(request, true), response);
                    _handleCollectorResponse(response);
                }
                function _doOnComplete(oncomplete, status, headers, response) {
                    try {
                        oncomplete(status, headers, response);
                    }
                    catch (e) {
                        _throwInternal(_logger, 2 , 518 , dumpObj(e));
                    }
                }
                function _onBeaconRetry(payload, onComplete, canSend) {
                    var internalPayloadData = payload;
                    var status = 200;
                    var thePayload = internalPayloadData[_DYN__THE_PAYLOAD ];
                    var theUrl = payload[_DYN_URL_STRING ] + (_addNoResponse ? _noResponseQs : STR_EMPTY);
                    try {
                        var nav_1 = getNavigator();
                        if (thePayload) {
                            var persistStorage = !!_core.getPlugin("LocalStorage");
                            var droppedBatches_1 = [];
                            var sentBatches_1 = [];
                            arrForEach(thePayload[_DYN_BATCHES ], function (theBatch) {
                                if (droppedBatches_1 && theBatch && theBatch[_DYN_COUNT ]() > 0) {
                                    var theEvents = theBatch[_DYN_EVENTS ]();
                                    for (var lp = 0; lp < theEvents[_DYN_LENGTH ]; lp++) {
                                        if (!nav_1.sendBeacon(theUrl, _serializer.getEventBlob(theEvents[lp]))) {
                                            droppedBatches_1[_DYN_PUSH ](theBatch[_DYN_SPLIT ](lp));
                                            break;
                                        }
                                        else {
                                            sentBatches_1[_DYN_PUSH ](theBatch[lp]);
                                        }
                                    }
                                }
                                else {
                                    droppedBatches_1[_DYN_PUSH ](theBatch[_DYN_SPLIT ](0));
                                }
                            });
                            if (sentBatches_1[_DYN_LENGTH ] > 0) {
                                thePayload.sentEvts = sentBatches_1;
                            }
                            if (!persistStorage) {
                                _sendBatchesNotification(droppedBatches_1, 8003 , thePayload[_DYN_SEND_TYPE ], true);
                            }
                        }
                        else {
                            status = 0;
                        }
                    }
                    catch (ex) {
                        _warnToConsole(_logger, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(ex));
                        status = 0;
                    }
                    finally {
                        _doOnComplete(onComplete, status, {}, STR_EMPTY);
                    }
                }
                function _isBeaconPayload(sendType) {
                    return sendType === 2  || sendType === 3 ;
                }
                function _adjustSendType(sendType) {
                    if (_isUnloading && _isBeaconPayload(sendType)) {
                        sendType = 2 ;
                    }
                    return sendType;
                }
                _self[_DYN_ADD_HEADER ] = function (name, value) {
                    _headers[name] = value;
                };
                _self.removeHeader = function (name) {
                    delete _headers[name];
                };
                _self[_DYN_CAN_SEND_REQUEST ] = function () {
                    return _hasIdleConnection() && _clockSkewManager[_DYN_ALLOW_REQUEST_SENDIN0 ]();
                };
                _self[_DYN_SEND_QUEUED_REQUESTS ] = function (sendType, sendReason) {
                    if (isUndefined(sendType)) {
                        sendType = 0 ;
                    }
                    if (_isUnloading) {
                        sendType = _adjustSendType(sendType);
                        sendReason = 2 ;
                    }
                    if (_canSendPayload(_batchQueue, sendType, 0)) {
                        _sendBatches(_clearQueue(), 0, false, sendType, sendReason || 0 );
                    }
                };
                _self[_DYN_IS_COMPLETELY_IDLE ] = function () {
                    return !_paused && _outstandingRequests === 0 && _batchQueue[_DYN_LENGTH ] === 0;
                };
                _self[_DYN_SET_UNLOADING ] = function (value) {
                    _isUnloading = value;
                };
                _self.addBatch = function (theBatch) {
                    if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                        if (_killSwitch.isTenantKilled(theBatch[_DYN_I_KEY ]())) {
                            return false;
                        }
                        _batchQueue[_DYN_PUSH ](theBatch);
                    }
                    return true;
                };
                _self.teardown = function () {
                    if (_batchQueue[_DYN_LENGTH ] > 0) {
                        _sendBatches(_clearQueue(), 0, true, 2 , 2 );
                    }
                    arrForEach(_unloadHooks, function (hook) {
                        hook && hook.rm && hook.rm();
                    });
                    _unloadHooks = [];
                };
                _self.pause = function () {
                    _paused = true;
                };
                _self.resume = function () {
                    _paused = false;
                    _self[_DYN_SEND_QUEUED_REQUESTS ](0 , 4 );
                };
                _self[_DYN_SEND_SYNCHRONOUS_BAT10 ] = function (batch, sendType, sendReason) {
                    if (batch && batch[_DYN_COUNT ]() > 0) {
                        if (isNullOrUndefined(sendType)) {
                            sendType = 1 ;
                        }
                        if (_isUnloading) {
                            sendType = _adjustSendType(sendType);
                            sendReason = 2 ;
                        }
                        _sendBatches([batch], 0, false, sendType, sendReason || 0 );
                    }
                };
                function _hasIdleConnection() {
                    return !_paused && _outstandingRequests < maxConnections;
                }
                function _clearQueue() {
                    var theQueue = _batchQueue;
                    _batchQueue = [];
                    return theQueue;
                }
                function _canSendPayload(theBatches, sendType, retryCnt) {
                    var result = false;
                    if (theBatches && theBatches[_DYN_LENGTH ] > 0 && !_paused && _sendInterfaces[sendType] && _serializer) {
                        result = (sendType !== 0 ) || (_hasIdleConnection() && (retryCnt > 0 || _clockSkewManager[_DYN_ALLOW_REQUEST_SENDIN0 ]()));
                    }
                    return result;
                }
                function _createDebugBatches(theBatches) {
                    var values = {};
                    if (theBatches) {
                        arrForEach(theBatches, function (theBatch, idx) {
                            values[idx] = {
                                iKey: theBatch[_DYN_I_KEY ](),
                                evts: theBatch[_DYN_EVENTS ]()
                            };
                        });
                    }
                    return values;
                }
                function _sendBatches(theBatches, retryCount, isTeardown, sendType, sendReason) {
                    if (!theBatches || theBatches[_DYN_LENGTH ] === 0) {
                        return;
                    }
                    if (_paused) {
                        _sendBatchesNotification(theBatches, 1 , sendType);
                        return;
                    }
                    sendType = _adjustSendType(sendType);
                    try {
                        var orgBatches_1 = theBatches;
                        var isSynchronous_1 = sendType !== 0 ;
                        doPerf(_core, function () { return "HttpManager:_sendBatches"; }, function (perfEvt) {
                            if (perfEvt) {
                                theBatches = theBatches.slice(0);
                            }
                            var droppedBatches = [];
                            var thePayload = null;
                            var serializationStart = getTime();
                            var sendInterface = _sendInterfaces[sendType] || (isSynchronous_1 ? _sendInterfaces[1 ] : _sendInterfaces[0 ]);
                            var sendTransport = sendInterface && sendInterface[_DYN__TRANSPORT ];
                            var isReducedPayload = _canHaveReducedPayload && (_isUnloading || _isBeaconPayload(sendType) || (sendTransport === 3  || (sendInterface._isSync && sendTransport === 2 )));
                            while (_canSendPayload(theBatches, sendType, retryCount)) {
                                var theBatch = theBatches.shift();
                                if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                                    if (!_killSwitch.isTenantKilled(theBatch[_DYN_I_KEY ]())) {
                                        thePayload = thePayload || _serializer[_DYN_CREATE_PAYLOAD ](retryCount, isTeardown, isSynchronous_1, isReducedPayload, sendReason, sendType);
                                        if (!_serializer.appendPayload(thePayload, theBatch, maxEventsPerBatch)) {
                                            _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                            serializationStart = getTime();
                                            theBatches = [theBatch][_DYN_CONCAT ](theBatches);
                                            thePayload = null;
                                        }
                                        else if (thePayload.overflow !== null) {
                                            theBatches = [thePayload.overflow][_DYN_CONCAT ](theBatches);
                                            thePayload.overflow = null;
                                            _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                            serializationStart = getTime();
                                            thePayload = null;
                                        }
                                    }
                                    else {
                                        droppedBatches[_DYN_PUSH ](theBatch);
                                    }
                                }
                            }
                            if (thePayload) {
                                _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                            }
                            if (theBatches[_DYN_LENGTH ] > 0) {
                                _batchQueue = theBatches[_DYN_CONCAT ](_batchQueue);
                            }
                            _sendBatchesNotification(droppedBatches, 8004 , sendType);
                        }, function () { return ({ batches: _createDebugBatches(orgBatches_1), retryCount: retryCount, isTeardown: isTeardown, isSynchronous: isSynchronous_1, sendReason: sendReason, useSendBeacon: _isBeaconPayload(sendType), sendType: sendType }); }, !isSynchronous_1);
                    }
                    catch (ex) {
                        _throwInternal(_logger, 2 , 48 , "Unexpected Exception sending batch: " + dumpObj(ex));
                    }
                }
                function _buildRequestDetails(thePayload, useHeaders) {
                    var requestDetails = {
                        url: _urlString,
                        hdrs: {},
                        useHdrs: false
                    };
                    if (!useHeaders) {
                        objForEachKey(_headers, function (name, value) {
                            if (_collectorHeaderToQs[name]) {
                                _addRequestDetails(requestDetails, _collectorHeaderToQs[name], value, false);
                            }
                            else {
                                requestDetails[_DYN_HDRS ][name] = value;
                                requestDetails[_DYN_USE_HDRS ] = true;
                            }
                        });
                    }
                    else {
                        requestDetails[_DYN_HDRS ] = extend(requestDetails[_DYN_HDRS ], _headers);
                        requestDetails.useHdrs = (objKeys(requestDetails.hdrs)[_DYN_LENGTH ] > 0);
                    }
                    _addRequestDetails(requestDetails, STR_CLIENT_ID, "NO_AUTH", useHeaders);
                    _addRequestDetails(requestDetails, STR_CLIENT_VERSION, FullVersionString, useHeaders);
                    var apiQsKeys = STR_EMPTY;
                    arrForEach(thePayload.apiKeys, function (apiKey) {
                        if (apiQsKeys[_DYN_LENGTH ] > 0) {
                            apiQsKeys += ",";
                        }
                        apiQsKeys += apiKey;
                    });
                    _addRequestDetails(requestDetails, STR_API_KEY, apiQsKeys, useHeaders);
                    _addRequestDetails(requestDetails, STR_UPLOAD_TIME, utcNow().toString(), useHeaders);
                    var msfpc = _getMsfpc(thePayload);
                    if (isValueAssigned(msfpc)) {
                        requestDetails.url += "&ext.intweb.msfpc=" + msfpc;
                    }
                    if (_clockSkewManager[_DYN_SHOULD_ADD_CLOCK_SKE1 ]()) {
                        _addRequestDetails(requestDetails, STR_TIME_DELTA_TO_APPLY, _clockSkewManager[_DYN_GET_CLOCK_SKEW_HEADE2 ](), useHeaders);
                    }
                    if (_core[_DYN_GET_WPARAM ]) {
                        var wParam = _core[_DYN_GET_WPARAM ]();
                        if (wParam >= 0) {
                            requestDetails.url += "&w=" + wParam;
                        }
                    }
                    for (var i = 0; i < _queryStringParameters[_DYN_LENGTH ]; i++) {
                        requestDetails.url += "&" + _queryStringParameters[i].name + "=" + _queryStringParameters[i].value;
                    }
                    return requestDetails;
                }
                function _setTimingValue(timings, name, value) {
                    timings[name] = timings[name] || {};
                    timings[name][_postManager.identifier] = value;
                }
                function _doPayloadSend(thePayload, serializationStart, serializationCompleted, sendReason) {
                    if (thePayload && thePayload.payloadBlob && thePayload.payloadBlob[_DYN_LENGTH ] > 0) {
                        var useSendHook_1 = !!_sendHook;
                        var sendInterface_1 = _sendInterfaces[thePayload.sendType];
                        if (!_isBeaconPayload(thePayload[_DYN_SEND_TYPE ]) && thePayload[_DYN_IS_BEACON ] && thePayload.sendReason === 2 ) {
                            sendInterface_1 = _sendInterfaces[2 ] || _sendInterfaces[3 ] || sendInterface_1;
                        }
                        var useHeaders_1 = _useHeaders;
                        if (thePayload.isBeacon || sendInterface_1[_DYN__TRANSPORT ] === 3 ) {
                            useHeaders_1 = false;
                        }
                        var requestDetails_1 = _buildRequestDetails(thePayload, useHeaders_1);
                        useHeaders_1 = useHeaders_1 || requestDetails_1[_DYN_USE_HDRS ];
                        var sendEventStart_1 = getTime();
                        doPerf(_core, function () { return "HttpManager:_doPayloadSend"; }, function () {
                            for (var batchLp = 0; batchLp < thePayload.batches[_DYN_LENGTH ]; batchLp++) {
                                var theBatch = thePayload[_DYN_BATCHES ][batchLp];
                                var theEvents = theBatch[_DYN_EVENTS ]();
                                for (var evtLp = 0; evtLp < theEvents[_DYN_LENGTH ]; evtLp++) {
                                    var telemetryItem = theEvents[evtLp];
                                    if (_enableEventTimings) {
                                        var timings = telemetryItem[_DYN_TIMINGS ] = telemetryItem[_DYN_TIMINGS ] || {};
                                        _setTimingValue(timings, "sendEventStart", sendEventStart_1);
                                        _setTimingValue(timings, "serializationStart", serializationStart);
                                        _setTimingValue(timings, "serializationCompleted", serializationCompleted);
                                    }
                                    telemetryItem[strSendAttempt] > 0 ? telemetryItem[strSendAttempt]++ : telemetryItem[strSendAttempt] = 1;
                                }
                            }
                            _sendBatchesNotification(thePayload[_DYN_BATCHES ], (1000  + (sendReason || 0 )), thePayload[_DYN_SEND_TYPE ], true);
                            var orgPayloadData = {
                                data: thePayload[_DYN_PAYLOAD_BLOB ],
                                urlString: requestDetails_1.url,
                                headers: requestDetails_1[_DYN_HDRS ],
                                _thePayload: thePayload,
                                _sendReason: sendReason,
                                timeout: _xhrTimeout,
                                disableXhrSync: _disableXhrSync,
                                disableFetchKeepAlive: _disableFetchKeepAlive
                            };
                            if (useHeaders_1) {
                                if (!_hasHeader(orgPayloadData[_DYN_HEADERS ], STR_CACHE_CONTROL)) {
                                    orgPayloadData[_DYN_HEADERS ][STR_CACHE_CONTROL] = DEFAULT_CACHE_CONTROL;
                                }
                                if (!_hasHeader(orgPayloadData[_DYN_HEADERS ], STR_CONTENT_TYPE_HEADER)) {
                                    orgPayloadData[_DYN_HEADERS ][STR_CONTENT_TYPE_HEADER] = DEFAULT_CONTENT_TYPE;
                                }
                            }
                            var sender = null;
                            if (sendInterface_1) {
                                sender = function (payload) {
                                    _clockSkewManager[_DYN_FIRST_REQUEST_SENT ]();
                                    var onComplete = function (status, headers) {
                                        _retryRequestIfNeeded(status, headers, thePayload, sendReason);
                                    };
                                    var isSync = thePayload[_DYN_IS_TEARDOWN ] || thePayload[_DYN_IS_SYNC ];
                                    try {
                                        sendInterface_1.sendPOST(payload, onComplete, isSync);
                                        if (_sendListener) {
                                            _sendListener(orgPayloadData, payload, isSync, thePayload[_DYN_IS_BEACON ]);
                                        }
                                    }
                                    catch (ex) {
                                        _warnToConsole(_logger, "Unexpected exception sending payload. Ex:" + dumpObj(ex));
                                        _doOnComplete(onComplete, 0, {});
                                    }
                                };
                            }
                            doPerf(_core, function () { return "HttpManager:_doPayloadSend.sender"; }, function () {
                                if (sender) {
                                    if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                                        _outstandingRequests++;
                                    }
                                    if (useSendHook_1 && !thePayload.isBeacon && sendInterface_1[_DYN__TRANSPORT ] !== 3 ) {
                                        var hookData_1 = {
                                            data: orgPayloadData[_DYN_DATA ],
                                            urlString: orgPayloadData[_DYN_URL_STRING ],
                                            headers: extend({}, orgPayloadData[_DYN_HEADERS ]),
                                            timeout: orgPayloadData[_DYN_TIMEOUT ],
                                            disableXhrSync: orgPayloadData[_DYN_DISABLE_XHR_SYNC ],
                                            disableFetchKeepAlive: orgPayloadData[_DYN_DISABLE_FETCH_KEEP_A6 ]
                                        };
                                        var senderCalled_1 = false;
                                        doPerf(_core, function () { return "HttpManager:_doPayloadSend.sendHook"; }, function () {
                                            try {
                                                _sendHook(hookData_1, function (payload) {
                                                    senderCalled_1 = true;
                                                    if (!_customHttpInterface && !payload[_DYN__THE_PAYLOAD ]) {
                                                        payload[_DYN__THE_PAYLOAD ] = payload[_DYN__THE_PAYLOAD ] || orgPayloadData[_DYN__THE_PAYLOAD ];
                                                        payload[_DYN__SEND_REASON ] = payload[_DYN__SEND_REASON ] || orgPayloadData[_DYN__SEND_REASON ];
                                                    }
                                                    sender(payload);
                                                }, thePayload.isSync || thePayload[_DYN_IS_TEARDOWN ]);
                                            }
                                            catch (ex) {
                                                if (!senderCalled_1) {
                                                    sender(orgPayloadData);
                                                }
                                            }
                                        });
                                    }
                                    else {
                                        sender(orgPayloadData);
                                    }
                                }
                            });
                        }, function () { return ({ thePayload: thePayload, serializationStart: serializationStart, serializationCompleted: serializationCompleted, sendReason: sendReason }); }, thePayload[_DYN_IS_SYNC ]);
                    }
                    if (thePayload.sizeExceed && thePayload.sizeExceed[_DYN_LENGTH ] > 0) {
                        _sendBatchesNotification(thePayload.sizeExceed, 8003 , thePayload[_DYN_SEND_TYPE ]);
                    }
                    if (thePayload.failedEvts && thePayload.failedEvts[_DYN_LENGTH ] > 0) {
                        _sendBatchesNotification(thePayload.failedEvts, 8002 , thePayload[_DYN_SEND_TYPE ]);
                    }
                }
                function _addEventCompletedTimings(theEvents, sendEventCompleted) {
                    if (_enableEventTimings) {
                        arrForEach(theEvents, function (theEvent) {
                            var timings = theEvent[_DYN_TIMINGS ] = theEvent[_DYN_TIMINGS ] || {};
                            _setTimingValue(timings, "sendEventCompleted", sendEventCompleted);
                        });
                    }
                }
                function _retryRequestIfNeeded(status, headers, thePayload, sendReason) {
                    var reason = 9000 ;
                    var droppedBatches = null;
                    var isRetrying = false;
                    var backOffTrans = false;
                    try {
                        var shouldRetry = true;
                        if (typeof status !== strShimUndefined) {
                            if (headers) {
                                _clockSkewManager[_DYN_SET_CLOCK_SKEW ](headers[STR_TIME_DELTA_HEADER]);
                                var killDuration = headers[STR_KILL_DURATION_HEADER] || headers["kill-duration-seconds"];
                                arrForEach(_killSwitch[_DYN_SET_KILL_SWITCH_TENA11 ](headers[STR_KILL_TOKENS_HEADER], killDuration), function (killToken) {
                                    arrForEach(thePayload[_DYN_BATCHES ], function (theBatch) {
                                        if (theBatch[_DYN_I_KEY ]() === killToken) {
                                            droppedBatches = droppedBatches || [];
                                            var removedEvents = theBatch[_DYN_SPLIT ](0);
                                            thePayload.numEvents -= removedEvents[_DYN_COUNT ]();
                                            droppedBatches[_DYN_PUSH ](removedEvents);
                                        }
                                    });
                                });
                            }
                            if (status == 200 || status == 204) {
                                reason = 200 ;
                                return;
                            }
                            if (!retryPolicyShouldRetryForStatus(status) || thePayload.numEvents <= 0) {
                                shouldRetry = false;
                            }
                            reason = 9000  + (status % 1000);
                        }
                        if (shouldRetry) {
                            reason = 100 ;
                            var retryCount_1 = thePayload.retryCnt;
                            if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                                if (retryCount_1 < maxRequestRetriesBeforeBackoff) {
                                    isRetrying = true;
                                    _doAction(function () {
                                        if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                                            _outstandingRequests--;
                                        }
                                        _sendBatches(thePayload[_DYN_BATCHES ], retryCount_1 + 1, thePayload[_DYN_IS_TEARDOWN ], _isUnloading ? 2  : thePayload[_DYN_SEND_TYPE ], 5 );
                                    }, _isUnloading, retryPolicyGetMillisToBackoffForRetry(retryCount_1));
                                }
                                else {
                                    backOffTrans = true;
                                    if (_isUnloading) {
                                        reason = 8001 ;
                                    }
                                }
                            }
                        }
                    }
                    finally {
                        if (!isRetrying) {
                            _clockSkewManager[_DYN_SET_CLOCK_SKEW ]();
                            _handleRequestFinished(thePayload, reason, sendReason, backOffTrans);
                        }
                        _sendBatchesNotification(droppedBatches, 8004 , thePayload[_DYN_SEND_TYPE ]);
                    }
                }
                function _handleRequestFinished(thePayload, batchReason, sendReason, backOffTrans) {
                    try {
                        if (backOffTrans) {
                            _postManager[_DYN__BACK_OFF_TRANSMISSI12 ]();
                        }
                        var theBatches = thePayload[_DYN_BATCHES ];
                        if (batchReason === 200 ) {
                            theBatches = thePayload.sentEvts || thePayload[_DYN_BATCHES ];
                            if (!backOffTrans && !thePayload[_DYN_IS_SYNC ]) {
                                _postManager._clearBackOff();
                            }
                            _addCompleteTimings(theBatches);
                        }
                        _sendBatchesNotification(theBatches, batchReason, thePayload[_DYN_SEND_TYPE ], true);
                    }
                    finally {
                        if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                            _outstandingRequests--;
                            if (sendReason !== 5 ) {
                                _self.sendQueuedRequests(thePayload[_DYN_SEND_TYPE ], sendReason);
                            }
                        }
                    }
                }
                function _addCompleteTimings(theBatches) {
                    if (_enableEventTimings) {
                        var sendEventCompleted_1 = getTime();
                        arrForEach(theBatches, function (theBatch) {
                            if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                                _addEventCompletedTimings(theBatch[_DYN_EVENTS ](), sendEventCompleted_1);
                            }
                        });
                    }
                }
                function _doAction(cb, isSync, interval) {
                    if (isSync) {
                        cb();
                    }
                    else {
                        _timeoutWrapper.set(cb, interval);
                    }
                }
                function _getMsfpc(thePayload) {
                    for (var lp = 0; lp < thePayload.batches[_DYN_LENGTH ]; lp++) {
                        var msfpc = thePayload[_DYN_BATCHES ][lp].Msfpc();
                        if (msfpc) {
                            return encodeURIComponent(msfpc);
                        }
                    }
                    return STR_EMPTY;
                }
                function _handleCollectorResponse(responseText) {
                    var responseHandlers = _responseHandlers;
                    try {
                        for (var i = 0; i < responseHandlers[_DYN_LENGTH ]; i++) {
                            try {
                                responseHandlers[i](responseText);
                            }
                            catch (e) {
                                _throwInternal(_logger, 1 , 519 , "Response handler failed: " + e);
                            }
                        }
                        if (responseText) {
                            var response = JSON.parse(responseText);
                            if (isValueAssigned(response.webResult) && isValueAssigned(response.webResult[STR_MSFPC])) {
                                _cookieMgr.set("MSFPC", response.webResult[STR_MSFPC], 365 * 86400);
                            }
                        }
                    }
                    catch (ex) {
                    }
                }
                function _sendBatchesNotification(theBatches, batchReason, sendType, sendSync) {
                    if (theBatches && theBatches[_DYN_LENGTH ] > 0 && actions) {
                        var theAction_1 = actions[_getNotificationAction(batchReason)];
                        if (theAction_1) {
                            var isSyncRequest_1 = sendType !== 0 ;
                            doPerf(_core, function () { return "HttpManager:_sendBatchesNotification"; }, function () {
                                _doAction(function () {
                                    try {
                                        theAction_1.call(actions, theBatches, batchReason, isSyncRequest_1, sendType);
                                    }
                                    catch (e) {
                                        _throwInternal(_logger, 1 , 74 , "send request notification failed: " + e);
                                    }
                                }, sendSync || isSyncRequest_1, 0);
                            }, function () { return ({ batches: _createDebugBatches(theBatches), reason: batchReason, isSync: isSyncRequest_1, sendSync: sendSync, sendType: sendType }); }, !isSyncRequest_1);
                        }
                    }
                }
                function _getNotificationAction(reason) {
                    var action = _eventActionMap[reason];
                    if (!isValueAssigned(action)) {
                        action = STR_OTHER;
                        if (reason >= 9000  && reason <= 9999 ) {
                            action = STR_RESPONSE_FAIL;
                        }
                        else if (reason >= 8000  && reason <= 8999 ) {
                            action = STR_DROPPED;
                        }
                        else if (reason >= 1000  && reason <= 1999 ) {
                            action = STR_SENDING;
                        }
                    }
                    return action;
                }
            });
        }
        HttpManager.__ieDyn=1;
        return HttpManager;
    }());

    var FlushCheckTimer = 0.250;
    var MaxNumberEventPerBatch = 500;
    var EventsDroppedAtOneTime = 20;
    var MaxSendAttempts = 6;
    var MaxSyncUnloadSendAttempts = 2;
    var MaxBackoffCount = 4;
    var MaxConnections = 2;
    var MaxRequestRetriesBeforeBackoff = 1;
    var MaxEventsLimitInMem = 10000;
    var strEventsDiscarded = "eventsDiscarded";
    var EMPTY_STR = "";
    var undefValue = undefined;
    var defaultPostChannelConfig = objDeepFreeze({
        eventsLimitInMem: { isVal: isGreaterThanZero, v: MaxEventsLimitInMem },
        immediateEventLimit: { isVal: isGreaterThanZero, v: 500 },
        autoFlushEventsLimit: { isVal: isGreaterThanZero, v: 0 },
        disableAutoBatchFlushLimit: false,
        httpXHROverride: { isVal: isOverrideFn, v: undefValue },
        overrideInstrumentationKey: undefValue,
        overrideEndpointUrl: undefValue,
        disableTelemetry: false,
        ignoreMc1Ms0CookieProcessing: false,
        setTimeoutOverride: undefValue,
        clearTimeoutOverride: undefValue,
        payloadPreprocessor: undefValue,
        payloadListener: undefValue,
        disableEventTimings: undefValue,
        valueSanitizer: undefValue,
        stringifyObjects: undefValue,
        enableCompoundKey: undefValue,
        disableOptimizeObj: false,
        transports: undefValue,
        unloadTransports: undefValue,
        useSendBeacon: undefValue,
        disableFetchKeepAlive: undefValue,
        avoidOptions: false,
        xhrTimeout: undefValue,
        disableXhrSync: undefValue,
        alwaysUseXhrOverride: false,
        maxEventRetryAttempts: { isVal: isNumber, v: MaxSendAttempts },
        maxUnloadEventRetryAttempts: { isVal: isNumber, v: MaxSyncUnloadSendAttempts },
        addNoResponse: undefValue,
        excludeCsMetaData: undefValue
    });
    function isOverrideFn(httpXHROverride) {
        return httpXHROverride && httpXHROverride.sendPOST;
    }
    var PostChannel = /** @class */ (function (_super) {
        __extendsFn(PostChannel, _super);
        function PostChannel() {
            var _this = _super.call(this) || this;
            _this.identifier = "PostChannel";
            _this.priority = 1011;
            _this.version = '4.2.2';
            var _postConfig;
            var _isTeardownCalled = false;
            var _flushCallbackQueue = [];
            var _flushCallbackTimer;
            var _paused = false;
            var _immediateQueueSize = 0;
            var _immediateQueueSizeLimit;
            var _queueSize = 0;
            var _queueSizeLimit;
            var _profiles = {};
            var _currentProfile = RT_PROFILE;
            var _scheduledTimer;
            var _immediateTimer;
            var _currentBackoffCount;
            var _timerCount;
            var _httpManager;
            var _batchQueues;
            var _autoFlushEventsLimit;
            var _autoFlushBatchLimit;
            var _delayedBatchSendLatency;
            var _delayedBatchReason;
            var _optimizeObject;
            var _isPageUnloadTriggered;
            var _maxEventSendAttempts;
            var _maxUnloadEventSendAttempts;
            var _evtNamespace;
            var _timeoutWrapper;
            var _ignoreMc1Ms0CookieProcessing;
            var _disableAutoBatchFlushLimit;
            var _notificationManager;
            var _unloadHandlersAdded;
            var _overrideInstrumentationKey;
            var _disableTelemetry;
            dynamicProto(PostChannel, _this, function (_self, _base) {
                _initDefaults();
                _self["_getDbgPlgTargets"] = function () {
                    return [_httpManager, _postConfig];
                };
                _self[_DYN_INITIALIZE ] = function (theConfig, core, extensions) {
                    doPerf(core, function () { return "PostChannel:initialize"; }, function () {
                        _base[_DYN_INITIALIZE ](theConfig, core, extensions);
                        _notificationManager = core.getNotifyMgr();
                        try {
                            _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self[_DYN_IDENTIFIER ]), core.evtNamespace && core.evtNamespace());
                            _self._addHook(onConfigChange(theConfig, function (details) {
                                var coreConfig = details.cfg;
                                var ctx = createProcessTelemetryContext(null, coreConfig, core);
                                _postConfig = ctx.getExtCfg(_self[_DYN_IDENTIFIER ], defaultPostChannelConfig);
                                _timeoutWrapper = createTimeoutWrapper(_postConfig[_DYN_SET_TIMEOUT_OVERRIDE ], _postConfig[_DYN_CLEAR_TIMEOUT_OVERRI3 ]);
                                _optimizeObject = !_postConfig[_DYN_DISABLE_OPTIMIZE_OBJ ] && isChromium();
                                _ignoreMc1Ms0CookieProcessing = _postConfig[_DYN_IGNORE_MC1_MS0_COOKI13 ];
                                _hookWParam(core);
                                _queueSizeLimit = _postConfig[_DYN_EVENTS_LIMIT_IN_MEM ];
                                _immediateQueueSizeLimit = _postConfig.immediateEventLimit;
                                _autoFlushEventsLimit = _postConfig[_DYN_AUTO_FLUSH_EVENTS_LI14 ];
                                _maxEventSendAttempts = _postConfig.maxEventRetryAttempts;
                                _maxUnloadEventSendAttempts = _postConfig.maxUnloadEventRetryAttempts;
                                _disableAutoBatchFlushLimit = _postConfig[_DYN_DISABLE_AUTO_BATCH_F15 ];
                                _setAutoLimits();
                                _overrideInstrumentationKey = _postConfig[_DYN_OVERRIDE_INSTRUMENTA16 ];
                                _disableTelemetry = !!_postConfig[_DYN_DISABLE_TELEMETRY ];
                                if (_unloadHandlersAdded) {
                                    _removeUnloadHandlers();
                                }
                                var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents || [];
                                _unloadHandlersAdded = addPageUnloadEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                                _unloadHandlersAdded = addPageHideEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace) || _unloadHandlersAdded;
                                _unloadHandlersAdded = addPageShowEventListener(_handleShowEvents, coreConfig.disablePageShowEvents, _evtNamespace) || _unloadHandlersAdded;
                            }));
                            _httpManager[_DYN_INITIALIZE ](theConfig, _self.core, _self);
                        }
                        catch (e) {
                            _self.setInitialized(false);
                            throw e;
                        }
                    }, function () { return ({ theConfig: theConfig, core: core, extensions: extensions }); });
                };
                _self.processTelemetry = function (ev, itemCtx) {
                    setProcessTelemetryTimings(ev, _self[_DYN_IDENTIFIER ]);
                    itemCtx = itemCtx || _self._getTelCtx(itemCtx);
                    var event = ev;
                    if (!_disableTelemetry && !_isTeardownCalled) {
                        if (_overrideInstrumentationKey) {
                            event[_DYN_I_KEY ] = _overrideInstrumentationKey;
                        }
                        _addEventToQueues(event, true);
                        if (_isPageUnloadTriggered) {
                            _releaseAllQueues(2 , 2 );
                        }
                        else {
                            _scheduleTimer();
                        }
                    }
                    _self.processNext(event, itemCtx);
                };
                _self.getOfflineSupport = function () {
                    try {
                        var details_1 = _httpManager && _httpManager[_DYN_GET_OFFLINE_REQUEST_9 ]();
                        if (_httpManager) {
                            return {
                                getUrl: function () {
                                    if (details_1) {
                                        return details_1.url;
                                    }
                                    return null;
                                },
                                serialize: _serialize,
                                batch: _batch,
                                shouldProcess: function (evt) {
                                    return !_disableTelemetry;
                                },
                                createPayload: function (evt) {
                                    return null;
                                },
                                createOneDSPayload: function (evts) {
                                    if (_httpManager[_DYN_CREATE_ONE_DSPAYLOAD ]) {
                                        return _httpManager[_DYN_CREATE_ONE_DSPAYLOAD ](evts, _optimizeObject);
                                    }
                                }
                            };
                        }
                    }
                    catch (e) {
                    }
                    return null;
                };
                _self._doTeardown = function (unloadCtx, unloadState) {
                    _releaseAllQueues(2 , 2 );
                    _isTeardownCalled = true;
                    _httpManager.teardown();
                    _removeUnloadHandlers();
                    _initDefaults();
                };
                function _removeUnloadHandlers() {
                    removePageUnloadEventListener(null, _evtNamespace);
                    removePageHideEventListener(null, _evtNamespace);
                    removePageShowEventListener(null, _evtNamespace);
                }
                function _hookWParam(core) {
                    var existingGetWParamMethod = core[_DYN_GET_WPARAM ];
                    core[_DYN_GET_WPARAM ] = function () {
                        var wparam = 0;
                        if (_ignoreMc1Ms0CookieProcessing) {
                            wparam = wparam | 2;
                        }
                        return wparam | existingGetWParamMethod.call(core);
                    };
                }
                function _batch(arr) {
                    var rlt = EMPTY_STR;
                    if (arr && arr[_DYN_LENGTH ]) {
                        arrForEach(arr, function (item) {
                            if (rlt) {
                                rlt += "\n";
                            }
                            rlt += item;
                        });
                    }
                    return rlt;
                }
                function _serialize(event) {
                    var rlt = EMPTY_STR;
                    try {
                        _cleanEvent(event);
                        rlt = _httpManager[_DYN_SERIALIZE_OFFLINE_EV8 ](event);
                    }
                    catch (e) {
                    }
                    return rlt;
                }
                function _handleUnloadEvents(evt) {
                    var theEvt = evt || getWindow().event;
                    if (theEvt.type !== "beforeunload") {
                        _isPageUnloadTriggered = true;
                        _httpManager[_DYN_SET_UNLOADING ](_isPageUnloadTriggered);
                    }
                    _releaseAllQueues(2 , 2 );
                }
                function _handleShowEvents(evt) {
                    _isPageUnloadTriggered = false;
                    _httpManager[_DYN_SET_UNLOADING ](_isPageUnloadTriggered);
                }
                function _cleanEvent(event) {
                    if (event.ext && event.ext[STR_TRACE]) {
                        delete (event.ext[STR_TRACE]);
                    }
                    if (event.ext && event.ext[STR_USER] && event.ext[STR_USER]["id"]) {
                        delete (event.ext[STR_USER]["id"]);
                    }
                    if (_optimizeObject) {
                        event.ext = optimizeObject(event.ext);
                        if (event[_DYN_BASE_DATA ]) {
                            event[_DYN_BASE_DATA ] = optimizeObject(event[_DYN_BASE_DATA ]);
                        }
                        if (event[_DYN_DATA ]) {
                            event[_DYN_DATA ] = optimizeObject(event[_DYN_DATA ]);
                        }
                    }
                }
                function _addEventToQueues(event, append) {
                    if (!event[_DYN_SEND_ATTEMPT ]) {
                        event[_DYN_SEND_ATTEMPT ] = 0;
                    }
                    if (!event[_DYN_LATENCY ]) {
                        event[_DYN_LATENCY ] = 1 ;
                    }
                    _cleanEvent(event);
                    if (event[_DYN_SYNC ]) {
                        if (_currentBackoffCount || _paused) {
                            event[_DYN_LATENCY ] = 3 ;
                            event[_DYN_SYNC ] = false;
                        }
                        else {
                            if (_httpManager) {
                                if (_optimizeObject) {
                                    event = optimizeObject(event);
                                }
                                _httpManager[_DYN_SEND_SYNCHRONOUS_BAT10 ](EventBatch.create(event[_DYN_I_KEY ], [event]), event[_DYN_SYNC ] === true ? 1  : event[_DYN_SYNC ], 3 );
                                return;
                            }
                        }
                    }
                    var evtLatency = event[_DYN_LATENCY ];
                    var queueSize = _queueSize;
                    var queueLimit = _queueSizeLimit;
                    if (evtLatency === 4 ) {
                        queueSize = _immediateQueueSize;
                        queueLimit = _immediateQueueSizeLimit;
                    }
                    var eventDropped = false;
                    if (queueSize < queueLimit) {
                        eventDropped = !_addEventToProperQueue(event, append);
                    }
                    else {
                        var dropLatency = 1 ;
                        var dropNumber = EventsDroppedAtOneTime;
                        if (evtLatency === 4 ) {
                            dropLatency = 4 ;
                            dropNumber = 1;
                        }
                        eventDropped = true;
                        if (_dropEventWithLatencyOrLess(event[_DYN_I_KEY ], event[_DYN_LATENCY ], dropLatency, dropNumber)) {
                            eventDropped = !_addEventToProperQueue(event, append);
                        }
                    }
                    if (eventDropped) {
                        _notifyEvents(strEventsDiscarded, [event], EventsDiscardedReason.QueueFull);
                    }
                }
                _self.setEventQueueLimits = function (eventLimit, autoFlushLimit) {
                    _postConfig[_DYN_EVENTS_LIMIT_IN_MEM ] = _queueSizeLimit = isGreaterThanZero(eventLimit) ? eventLimit : MaxEventsLimitInMem;
                    _postConfig[_DYN_AUTO_FLUSH_EVENTS_LI14 ] = _autoFlushEventsLimit = isGreaterThanZero(autoFlushLimit) ? autoFlushLimit : 0;
                    _setAutoLimits();
                    var doFlush = _queueSize > eventLimit;
                    if (!doFlush && _autoFlushBatchLimit > 0) {
                        for (var latency = 1 ; !doFlush && latency <= 3 ; latency++) {
                            var batchQueue = _batchQueues[latency];
                            if (batchQueue && batchQueue[_DYN_BATCHES ]) {
                                arrForEach(batchQueue[_DYN_BATCHES ], function (theBatch) {
                                    if (theBatch && theBatch[_DYN_COUNT ]() >= _autoFlushBatchLimit) {
                                        doFlush = true;
                                    }
                                });
                            }
                        }
                    }
                    _performAutoFlush(true, doFlush);
                };
                _self.pause = function () {
                    _clearScheduledTimer();
                    _paused = true;
                    _httpManager.pause();
                };
                _self.resume = function () {
                    _paused = false;
                    _httpManager.resume();
                    _scheduleTimer();
                };
                _self._loadTransmitProfiles = function (profiles) {
                    _resetTransmitProfiles();
                    objForEachKey(profiles, function (profileName, profileValue) {
                        var profLen = profileValue[_DYN_LENGTH ];
                        if (profLen >= 2) {
                            var directValue = (profLen > 2 ? profileValue[2] : 0);
                            profileValue[_DYN_SPLICE ](0, profLen - 2);
                            if (profileValue[1] < 0) {
                                profileValue[0] = -1;
                            }
                            if (profileValue[1] > 0 && profileValue[0] > 0) {
                                var timerMultiplier = profileValue[0] / profileValue[1];
                                profileValue[0] = Math.ceil(timerMultiplier) * profileValue[1];
                            }
                            if (directValue >= 0 && profileValue[1] >= 0 && directValue > profileValue[1]) {
                                directValue = profileValue[1];
                            }
                            profileValue[_DYN_PUSH ](directValue);
                            _profiles[profileName] = profileValue;
                        }
                    });
                };
                _self.flush = function (async, callback, sendReason) {
                    if (async === void 0) { async = true; }
                    var result;
                    if (!_paused) {
                        sendReason = sendReason || 1 ;
                        if (async) {
                            if (!callback) {
                                result = createPromise(function (resolve) {
                                    callback = resolve;
                                });
                            }
                            if (_flushCallbackTimer == null) {
                                _clearScheduledTimer();
                                _queueBatches(1 , 0 , sendReason);
                                _flushCallbackTimer = _createTimer(function () {
                                    _flushCallbackTimer = null;
                                    _flushImpl(callback, sendReason);
                                }, 0);
                            }
                            else {
                                _flushCallbackQueue[_DYN_PUSH ](callback);
                            }
                        }
                        else {
                            var cleared = _clearScheduledTimer();
                            _sendEventsForLatencyAndAbove(1 , 1 , sendReason);
                            callback && callback();
                            if (cleared) {
                                _scheduleTimer();
                            }
                        }
                    }
                    return result;
                };
                _self.setMsaAuthTicket = function (ticket) {
                    _httpManager[_DYN_ADD_HEADER ](STR_MSA_DEVICE_TICKET, ticket);
                };
                _self.setAuthPluginHeader = function (token) {
                    _httpManager[_DYN_ADD_HEADER ](STR_AUTH_WEB_TOKEN, token);
                };
                _self.removeAuthPluginHeader = function () {
                    _httpManager.removeHeader(STR_AUTH_WEB_TOKEN);
                };
                _self.hasEvents = _hasEvents;
                _self._setTransmitProfile = function (profileName) {
                    if (_currentProfile !== profileName && _profiles[profileName] !== undefined) {
                        _clearScheduledTimer();
                        _currentProfile = profileName;
                        _scheduleTimer();
                    }
                };
                proxyFunctions(_self, function () { return _httpManager; }, ["addResponseHandler"]);
                function _sendEventsForLatencyAndAbove(latency, sendType, sendReason) {
                    var queued = _queueBatches(latency, sendType, sendReason);
                    _httpManager[_DYN_SEND_QUEUED_REQUESTS ](sendType, sendReason);
                    return queued;
                }
                function _hasEvents() {
                    return _queueSize > 0;
                }
                function _scheduleTimer() {
                    if (_delayedBatchSendLatency >= 0 && _queueBatches(_delayedBatchSendLatency, 0 , _delayedBatchReason)) {
                        _httpManager[_DYN_SEND_QUEUED_REQUESTS ](0 , _delayedBatchReason);
                    }
                    if (_immediateQueueSize > 0 && !_immediateTimer && !_paused) {
                        var immediateTimeOut = _profiles[_currentProfile][2];
                        if (immediateTimeOut >= 0) {
                            _immediateTimer = _createTimer(function () {
                                _immediateTimer = null;
                                _sendEventsForLatencyAndAbove(4 , 0 , 1 );
                                _scheduleTimer();
                            }, immediateTimeOut);
                        }
                    }
                    var timeOut = _profiles[_currentProfile][1];
                    if (!_scheduledTimer && !_flushCallbackTimer && timeOut >= 0 && !_paused) {
                        if (_hasEvents()) {
                            _scheduledTimer = _createTimer(function () {
                                _scheduledTimer = null;
                                _sendEventsForLatencyAndAbove(_timerCount === 0 ? 3  : 1 , 0 , 1 );
                                _timerCount++;
                                _timerCount %= 2;
                                _scheduleTimer();
                            }, timeOut);
                        }
                        else {
                            _timerCount = 0;
                        }
                    }
                }
                _self[_DYN__BACK_OFF_TRANSMISSI12 ] = function () {
                    if (_currentBackoffCount < MaxBackoffCount) {
                        _currentBackoffCount++;
                        _clearScheduledTimer();
                        _scheduleTimer();
                    }
                };
                _self._clearBackOff = function () {
                    if (_currentBackoffCount) {
                        _currentBackoffCount = 0;
                        _clearScheduledTimer();
                        _scheduleTimer();
                    }
                };
                function _initDefaults() {
                    _postConfig = null;
                    _isTeardownCalled = false;
                    _flushCallbackQueue = [];
                    _flushCallbackTimer = null;
                    _paused = false;
                    _immediateQueueSize = 0;
                    _immediateQueueSizeLimit = 500;
                    _queueSize = 0;
                    _queueSizeLimit = MaxEventsLimitInMem;
                    _profiles = {};
                    _currentProfile = RT_PROFILE;
                    _scheduledTimer = null;
                    _immediateTimer = null;
                    _currentBackoffCount = 0;
                    _timerCount = 0;
                    _batchQueues = {};
                    _autoFlushEventsLimit = 0;
                    _unloadHandlersAdded = false;
                    _autoFlushBatchLimit = 0;
                    _delayedBatchSendLatency = -1;
                    _delayedBatchReason = null;
                    _optimizeObject = true;
                    _isPageUnloadTriggered = false;
                    _maxEventSendAttempts = MaxSendAttempts;
                    _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
                    _evtNamespace = null;
                    _overrideInstrumentationKey = null;
                    _disableTelemetry = false;
                    _timeoutWrapper = createTimeoutWrapper();
                    _httpManager = new HttpManager(MaxNumberEventPerBatch, MaxConnections, MaxRequestRetriesBeforeBackoff, {
                        requeue: _requeueEvents,
                        send: _sendingEvent,
                        sent: _eventsSentEvent,
                        drop: _eventsDropped,
                        rspFail: _eventsResponseFail,
                        oth: _otherEvent
                    });
                    _initializeProfiles();
                    _clearQueues();
                    _setAutoLimits();
                }
                function _createTimer(theTimerFunc, timeOut) {
                    if (timeOut === 0 && _currentBackoffCount) {
                        timeOut = 1;
                    }
                    var timerMultiplier = 1000;
                    if (_currentBackoffCount) {
                        timerMultiplier = retryPolicyGetMillisToBackoffForRetry(_currentBackoffCount - 1);
                    }
                    return _timeoutWrapper.set(theTimerFunc, timeOut * timerMultiplier);
                }
                function _clearScheduledTimer() {
                    if (_scheduledTimer !== null) {
                        _scheduledTimer.cancel();
                        _scheduledTimer = null;
                        _timerCount = 0;
                        return true;
                    }
                    return false;
                }
                function _releaseAllQueues(sendType, sendReason) {
                    _clearScheduledTimer();
                    if (_flushCallbackTimer) {
                        _flushCallbackTimer.cancel();
                        _flushCallbackTimer = null;
                    }
                    if (!_paused) {
                        _sendEventsForLatencyAndAbove(1 , sendType, sendReason);
                    }
                }
                function _clearQueues() {
                    _batchQueues[4 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[3 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[2 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[1 ] = {
                        batches: [],
                        iKeyMap: {}
                    };
                }
                function _getEventBatch(iKey, latency, create) {
                    var batchQueue = _batchQueues[latency];
                    if (!batchQueue) {
                        latency = 1 ;
                        batchQueue = _batchQueues[latency];
                    }
                    var eventBatch = batchQueue.iKeyMap[iKey];
                    if (!eventBatch && create) {
                        eventBatch = EventBatch.create(iKey);
                        batchQueue.batches[_DYN_PUSH ](eventBatch);
                        batchQueue.iKeyMap[iKey] = eventBatch;
                    }
                    return eventBatch;
                }
                function _performAutoFlush(isAsync, doFlush) {
                    if (_httpManager[_DYN_CAN_SEND_REQUEST ]() && !_currentBackoffCount) {
                        if (_autoFlushEventsLimit > 0 && _queueSize > _autoFlushEventsLimit) {
                            doFlush = true;
                        }
                        if (doFlush && _flushCallbackTimer == null) {
                            _self.flush(isAsync, function () { }, 20 );
                        }
                    }
                }
                function _addEventToProperQueue(event, append) {
                    if (_optimizeObject) {
                        event = optimizeObject(event);
                    }
                    var latency = event[_DYN_LATENCY ];
                    var eventBatch = _getEventBatch(event[_DYN_I_KEY ], latency, true);
                    if (eventBatch.addEvent(event)) {
                        if (latency !== 4 ) {
                            _queueSize++;
                            if (append && event[_DYN_SEND_ATTEMPT ] === 0) {
                                _performAutoFlush(!event.sync, _autoFlushBatchLimit > 0 && eventBatch[_DYN_COUNT ]() >= _autoFlushBatchLimit);
                            }
                        }
                        else {
                            _immediateQueueSize++;
                        }
                        return true;
                    }
                    return false;
                }
                function _dropEventWithLatencyOrLess(iKey, latency, currentLatency, dropNumber) {
                    while (currentLatency <= latency) {
                        var eventBatch = _getEventBatch(iKey, latency, true);
                        if (eventBatch && eventBatch[_DYN_COUNT ]() > 0) {
                            var droppedEvents = eventBatch[_DYN_SPLIT ](0, dropNumber);
                            var droppedCount = droppedEvents[_DYN_COUNT ]();
                            if (droppedCount > 0) {
                                if (currentLatency === 4 ) {
                                    _immediateQueueSize -= droppedCount;
                                }
                                else {
                                    _queueSize -= droppedCount;
                                }
                                _notifyBatchEvents(strEventsDiscarded, [droppedEvents], EventsDiscardedReason.QueueFull);
                                return true;
                            }
                        }
                        currentLatency++;
                    }
                    _resetQueueCounts();
                    return false;
                }
                function _resetQueueCounts() {
                    var immediateQueue = 0;
                    var normalQueue = 0;
                    var _loop_1 = function (latency) {
                        var batchQueue = _batchQueues[latency];
                        if (batchQueue && batchQueue[_DYN_BATCHES ]) {
                            arrForEach(batchQueue[_DYN_BATCHES ], function (theBatch) {
                                if (latency === 4 ) {
                                    immediateQueue += theBatch[_DYN_COUNT ]();
                                }
                                else {
                                    normalQueue += theBatch[_DYN_COUNT ]();
                                }
                            });
                        }
                    };
                    for (var latency = 1 ; latency <= 4 ; latency++) {
                        _loop_1(latency);
                    }
                    _queueSize = normalQueue;
                    _immediateQueueSize = immediateQueue;
                }
                function _queueBatches(latency, sendType, sendReason) {
                    var eventsQueued = false;
                    var isAsync = sendType === 0 ;
                    if (!isAsync || _httpManager[_DYN_CAN_SEND_REQUEST ]()) {
                        doPerf(_self.core, function () { return "PostChannel._queueBatches"; }, function () {
                            var droppedEvents = [];
                            var latencyToProcess = 4 ;
                            while (latencyToProcess >= latency) {
                                var batchQueue = _batchQueues[latencyToProcess];
                                if (batchQueue && batchQueue.batches && batchQueue.batches[_DYN_LENGTH ] > 0) {
                                    arrForEach(batchQueue[_DYN_BATCHES ], function (theBatch) {
                                        if (!_httpManager.addBatch(theBatch)) {
                                            droppedEvents = droppedEvents[_DYN_CONCAT ](theBatch[_DYN_EVENTS ]());
                                        }
                                        else {
                                            eventsQueued = eventsQueued || (theBatch && theBatch[_DYN_COUNT ]() > 0);
                                        }
                                        if (latencyToProcess === 4 ) {
                                            _immediateQueueSize -= theBatch[_DYN_COUNT ]();
                                        }
                                        else {
                                            _queueSize -= theBatch[_DYN_COUNT ]();
                                        }
                                    });
                                    batchQueue[_DYN_BATCHES ] = [];
                                    batchQueue.iKeyMap = {};
                                }
                                latencyToProcess--;
                            }
                            if (droppedEvents[_DYN_LENGTH ] > 0) {
                                _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.KillSwitch);
                            }
                            if (eventsQueued && _delayedBatchSendLatency >= latency) {
                                _delayedBatchSendLatency = -1;
                                _delayedBatchReason = 0 ;
                            }
                        }, function () { return ({ latency: latency, sendType: sendType, sendReason: sendReason }); }, !isAsync);
                    }
                    else {
                        _delayedBatchSendLatency = _delayedBatchSendLatency >= 0 ? Math.min(_delayedBatchSendLatency, latency) : latency;
                        _delayedBatchReason = Math.max(_delayedBatchReason, sendReason);
                    }
                    return eventsQueued;
                }
                function _flushImpl(callback, sendReason) {
                    _sendEventsForLatencyAndAbove(1 , 0 , sendReason);
                    _resetQueueCounts();
                    _waitForIdleManager(function () {
                        if (callback) {
                            callback();
                        }
                        if (_flushCallbackQueue[_DYN_LENGTH ] > 0) {
                            _flushCallbackTimer = _createTimer(function () {
                                _flushCallbackTimer = null;
                                _flushImpl(_flushCallbackQueue.shift(), sendReason);
                            }, 0);
                        }
                        else {
                            _flushCallbackTimer = null;
                            _scheduleTimer();
                        }
                    });
                }
                function _waitForIdleManager(callback) {
                    if (_httpManager[_DYN_IS_COMPLETELY_IDLE ]()) {
                        callback();
                    }
                    else {
                        _flushCallbackTimer = _createTimer(function () {
                            _flushCallbackTimer = null;
                            _waitForIdleManager(callback);
                        }, FlushCheckTimer);
                    }
                }
                function _resetTransmitProfiles() {
                    _clearScheduledTimer();
                    _initializeProfiles();
                    _currentProfile = RT_PROFILE;
                    _scheduleTimer();
                }
                function _initializeProfiles() {
                    _profiles = {};
                    _profiles[RT_PROFILE] = [2, 1, 0];
                    _profiles[NRT_PROFILE] = [6, 3, 0];
                    _profiles[BE_PROFILE] = [18, 9, 0];
                }
                function _requeueEvents(batches, reason) {
                    var droppedEvents = [];
                    var maxSendAttempts = _maxEventSendAttempts;
                    if (_isPageUnloadTriggered) {
                        maxSendAttempts = _maxUnloadEventSendAttempts;
                    }
                    arrForEach(batches, function (theBatch) {
                        if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                            arrForEach(theBatch[_DYN_EVENTS ](), function (theEvent) {
                                if (theEvent) {
                                    if (theEvent[_DYN_SYNC ]) {
                                        theEvent[_DYN_LATENCY ] = 4 ;
                                        theEvent[_DYN_SYNC ] = false;
                                    }
                                    if (theEvent[_DYN_SEND_ATTEMPT ] < maxSendAttempts) {
                                        setProcessTelemetryTimings(theEvent, _self[_DYN_IDENTIFIER ]);
                                        _addEventToQueues(theEvent, false);
                                    }
                                    else {
                                        droppedEvents[_DYN_PUSH ](theEvent);
                                    }
                                }
                            });
                        }
                    });
                    if (droppedEvents[_DYN_LENGTH ] > 0) {
                        _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.NonRetryableStatus);
                    }
                    if (_isPageUnloadTriggered) {
                        _releaseAllQueues(2 , 2 );
                    }
                }
                function _callNotification(evtName, theArgs) {
                    var manager = (_notificationManager || {});
                    var notifyFunc = manager[evtName];
                    if (notifyFunc) {
                        try {
                            notifyFunc.apply(manager, theArgs);
                        }
                        catch (e) {
                            _throwInternal(_self.diagLog(), 1 , 74 , evtName + " notification failed: " + e);
                        }
                    }
                }
                function _notifyEvents(evtName, theEvents) {
                    var extraArgs = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        extraArgs[_i - 2] = arguments[_i];
                    }
                    if (theEvents && theEvents[_DYN_LENGTH ] > 0) {
                        _callNotification(evtName, [theEvents][_DYN_CONCAT ](extraArgs));
                    }
                }
                function _notifyBatchEvents(evtName, batches) {
                    var extraArgs = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        extraArgs[_i - 2] = arguments[_i];
                    }
                    if (batches && batches[_DYN_LENGTH ] > 0) {
                        arrForEach(batches, function (theBatch) {
                            if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                                _callNotification(evtName, [theBatch.events()][_DYN_CONCAT ](extraArgs));
                            }
                        });
                    }
                }
                function _sendingEvent(batches, reason, isSyncRequest) {
                    if (batches && batches[_DYN_LENGTH ] > 0) {
                        _callNotification("eventsSendRequest", [(reason >= 1000  && reason <= 1999  ?
                                reason - 1000  :
                                0 ), isSyncRequest !== true]);
                    }
                }
                function _eventsSentEvent(batches, reason) {
                    _notifyBatchEvents("eventsSent", batches, reason);
                    _scheduleTimer();
                }
                function _eventsDropped(batches, reason) {
                    _notifyBatchEvents(strEventsDiscarded, batches, (reason >= 8000  && reason <= 8999  ?
                        reason - 8000  :
                        EventsDiscardedReason.Unknown));
                }
                function _eventsResponseFail(batches) {
                    _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.NonRetryableStatus);
                    _scheduleTimer();
                }
                function _otherEvent(batches, reason) {
                    _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.Unknown);
                    _scheduleTimer();
                }
                function _setAutoLimits() {
                    if (!_disableAutoBatchFlushLimit) {
                        _autoFlushBatchLimit = Math.max(MaxNumberEventPerBatch * (MaxConnections + 1), _queueSizeLimit / 6);
                    }
                    else {
                        _autoFlushBatchLimit = 0;
                    }
                }
            });
            return _this;
        }
        PostChannel.__ieDyn=1;
        return PostChannel;
    }(BaseTelemetryPlugin));

    exports.BE_PROFILE = BE_PROFILE;
    exports.NRT_PROFILE = NRT_PROFILE;
    exports.PostChannel = PostChannel;
    exports.RT_PROFILE = RT_PROFILE;

}));
//# sourceMappingURL=ms.post.js.map


/***/ }),

/***/ 42983:
/***/ (function(__unused_webpack_module, exports) {

/*!
 * Application Insights JavaScript SDK - Common, 3.2.2
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */
(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    /*! https://github.com/nevware21/ts-utils v0.11.2 */
    /*#__NO_SIDE_EFFECTS__*/
    function _pureAssign(func1, func2) {
        return func1 || func2;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _pureRef(value, name) {
        return value[name];
    }
    var UNDEF_VALUE = undefined;
    var NULL_VALUE = null;
    var EMPTY = "";
    var FUNCTION = "function";
    var OBJECT = "object";
    var PROTOTYPE = "prototype";
    var __PROTO__ = "__proto__";
    var UNDEFINED = "undefined";
    var CONSTRUCTOR = "constructor";
    var SYMBOL = "Symbol";
    var POLYFILL_TAG = "_polyfill";
    var LENGTH = "length";
    var NAME = "name";
    var CALL = "call";
    var TO_STRING = "toString";
    var ObjClass$1 = ( /*#__PURE__*/_pureAssign(Object));
    var ObjProto$1 = ( /*#__PURE__*/_pureRef(ObjClass$1, PROTOTYPE));
    var StrCls = ( /*#__PURE__*/_pureAssign(String));
    var StrProto = ( /*#__PURE__*/_pureRef(StrCls, PROTOTYPE));
    var MathCls = ( /*#__PURE__*/_pureAssign(Math));
    var ArrCls = ( /*#__PURE__*/_pureAssign(Array));
    var ArrProto = ( /*#__PURE__*/_pureRef(ArrCls, PROTOTYPE));
    var ArrSlice = ( /*#__PURE__*/_pureRef(ArrProto, "slice"));
    function safe(func, argArray) {
        try {
            return {
                v: func.apply(this, argArray)
            };
        }
        catch (e) {
            return { e: e };
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createIs(theType) {
        return function (value) {
            return typeof value === theType;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createObjIs(theName) {
        var theType = "[object " + theName + "]";
        return function (value) {
            return !!(value && objToString(value) === theType);
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function objToString(value) {
        return ObjProto$1[TO_STRING].call(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isUndefined(value) {
        return typeof value === UNDEFINED || value === UNDEFINED;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isNullOrUndefined(value) {
        return value === NULL_VALUE || isUndefined(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isDefined(arg) {
        return !!arg || arg !== UNDEF_VALUE;
    }
    var isString = ( /*#__PURE__*/_createIs("string"));
    var isFunction = ( /*#__PURE__*/_createIs(FUNCTION));
    /*#__NO_SIDE_EFFECTS__*/
    function isObject(value) {
        if (!value && isNullOrUndefined(value)) {
            return false;
        }
        return !!value && typeof value === OBJECT;
    }
    var isArray = ( /* #__PURE__*/_pureRef(ArrCls, "isArray"));
    var isError = ( /*#__PURE__*/_createObjIs("Error"));
    var objGetOwnPropertyDescriptor = ( /* #__PURE__ */_pureRef(ObjClass$1, "getOwnPropertyDescriptor"));
    /*#__NO_SIDE_EFFECTS__*/
    function objHasOwnProperty(obj, prop) {
        return !!obj && ObjProto$1.hasOwnProperty[CALL](obj, prop);
    }
    var objHasOwn = ( /*#__PURE__*/_pureAssign(( /* #__PURE__ */_pureRef(ObjClass$1, "hasOwn")), polyObjHasOwn));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjHasOwn(obj, prop) {
        return objHasOwnProperty(obj, prop) || !!objGetOwnPropertyDescriptor(obj, prop);
    }
    function objForEachKey(theObject, callbackfn, thisArg) {
        if (theObject && isObject(theObject)) {
            for (var prop in theObject) {
                if (objHasOwn(theObject, prop)) {
                    if (callbackfn[CALL](thisArg || theObject, prop, theObject[prop]) === -1) {
                        break;
                    }
                }
            }
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createKeyValueMap(values, keyType, valueType, completeFn) {
        var theMap = {};
        objForEachKey(values, function (key, value) {
            theMap[key] = keyType ? value : key;
            theMap[value] = valueType ? value : key;
        });
        return completeFn(theMap);
    }
    var asString = ( /* #__PURE__ */_pureAssign(StrCls));
    var ERROR_TYPE = "[object Error]";
    /*#__NO_SIDE_EFFECTS__*/
    function dumpObj(object, format) {
        var propertyValueDump = EMPTY;
        var objType = ObjProto$1[TO_STRING][CALL](object);
        if (objType === ERROR_TYPE) {
            object = { stack: asString(object.stack), message: asString(object.message), name: asString(object.name) };
        }
        try {
            propertyValueDump = JSON.stringify(object, NULL_VALUE, format ? ((typeof format === "number") ? format : 4) : UNDEF_VALUE);
            propertyValueDump = (propertyValueDump && propertyValueDump.replace(/"(\w+)"\s*:\s{0,1}/g, "$1: ")) || asString(object);
        }
        catch (e) {
            propertyValueDump = " - " + dumpObj(e, format);
        }
        return objType + ": " + propertyValueDump;
    }
    function throwError(message) {
        throw new Error(message);
    }
    function throwTypeError(message) {
        throw new TypeError(message);
    }
    var _objFreeze = ( /* #__PURE__ */_pureRef(ObjClass$1, "freeze"));
    function _doNothing(value) {
        return value;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getProto(value) {
        return value[__PROTO__] || NULL_VALUE;
    }
    var objAssign = ( /*#__PURE__*/_pureRef(ObjClass$1, "assign"));
    var objKeys = ( /*#__PURE__*/_pureRef(ObjClass$1, "keys"));
    function objDeepFreeze(value) {
        if (_objFreeze) {
            objForEachKey(value, function (key, value) {
                if (isArray(value) || isObject(value)) {
                    _objFreeze(value);
                }
            });
        }
        return objFreeze(value);
    }
    var objFreeze = ( /* #__PURE__*/_pureAssign(_objFreeze, _doNothing));
    var objGetPrototypeOf = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass$1, "getPrototypeOf")), _getProto));
    /*#__NO_SIDE_EFFECTS__*/
    function createEnum(values) {
        return _createKeyValueMap(values, 1 , 0 , objDeepFreeze);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createSimpleMap(values) {
        var mapClass = {};
        objForEachKey(values, function (key, value) {
            mapClass[key] = value[1];
            mapClass[value[0]] = value[1];
        });
        return objDeepFreeze(mapClass);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createTypeMap(values) {
        return createSimpleMap(values);
    }
    var GLOBAL_CONFIG_KEY = "__tsUtils$gblCfg";
    var _globalCfg;
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalValue() {
        var result;
        if (typeof globalThis !== UNDEFINED) {
            result = globalThis;
        }
        if (!result && typeof self !== UNDEFINED) {
            result = self;
        }
        if (!result && typeof window !== UNDEFINED) {
            result = window;
        }
        if (!result && typeof global !== UNDEFINED) {
            result = global;
        }
        return result;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalConfig() {
        if (!_globalCfg) {
            var gbl = safe(_getGlobalValue).v || {};
            _globalCfg = gbl[GLOBAL_CONFIG_KEY] = gbl[GLOBAL_CONFIG_KEY] || {};
        }
        return _globalCfg;
    }
    var _unwrapFunction = ( _unwrapFunctionWithPoly);
    /*#__NO_SIDE_EFFECTS__*/
    function _unwrapFunctionWithPoly(funcName, clsProto, polyFunc) {
        var clsFn = clsProto && clsProto[funcName];
        return function (thisArg) {
            var theFunc = (thisArg && thisArg[funcName]) || clsFn;
            if (theFunc || polyFunc) {
                var theArgs = arguments;
                return (theFunc || polyFunc).apply(thisArg, theFunc ? ArrSlice[CALL](theArgs, 1) : theArgs);
            }
            throwTypeError("\"" + asString(funcName) + "\" not defined for " + dumpObj(thisArg));
        };
    }
    var mathMax = ( /*#__PURE__*/_pureRef(MathCls, "max"));
    var strSlice = ( /*#__PURE__*/_unwrapFunction("slice", StrProto));
    var strSubstring = ( /*#__PURE__*/_unwrapFunction("substring", StrProto));
    var strSubstr = ( /*#__PURE__*/_unwrapFunctionWithPoly("substr", StrProto, polyStrSubstr));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrSubstr(value, start, length) {
        if (isNullOrUndefined(value)) {
            throwTypeError("Invalid " + dumpObj(value));
        }
        if (length < 0) {
            return EMPTY;
        }
        start = start || 0;
        if (start < 0) {
            start = mathMax(start + value[LENGTH], 0);
        }
        if (isUndefined(length)) {
            return strSlice(value, start);
        }
        return strSlice(value, start, start + length);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function strLeft(value, count) {
        return strSubstring(value, 0, count);
    }
    var UNIQUE_REGISTRY_ID = "_urid";
    var _polySymbols;
    /*#__NO_SIDE_EFFECTS__*/
    function _globalSymbolRegistry() {
        if (!_polySymbols) {
            var gblCfg = _getGlobalConfig();
            _polySymbols = gblCfg.gblSym = gblCfg.gblSym || { k: {}, s: {} };
        }
        return _polySymbols;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyNewSymbol(description) {
        var theSymbol = {
            description: asString(description),
            toString: function () { return SYMBOL + "(" + description + ")"; }
        };
        theSymbol[POLYFILL_TAG] = true;
        return theSymbol;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polySymbolFor(key) {
        var registry = _globalSymbolRegistry();
        if (!objHasOwn(registry.k, key)) {
            var newSymbol_1 = polyNewSymbol(key);
            var regId_1 = objKeys(registry.s).length;
            newSymbol_1[UNIQUE_REGISTRY_ID] = function () { return regId_1 + "_" + newSymbol_1[TO_STRING](); };
            registry.k[key] = newSymbol_1;
            registry.s[newSymbol_1[UNIQUE_REGISTRY_ID]()] = asString(key);
        }
        return registry.k[key];
    }
    var propMap = {
        e: "enumerable",
        c: "configurable",
        v: "value",
        w: "writable",
        g: "get",
        s: "set"
    };
    /*#__NO_SIDE_EFFECTS__*/
    function _createProp(value) {
        var prop = {};
        prop[propMap["c"]] = true;
        prop[propMap["e"]] = true;
        if (value.l) {
            prop.get = function () { return value.l.v; };
            var desc = objGetOwnPropertyDescriptor(value.l, "v");
            if (desc && desc.set) {
                prop.set = function (newValue) {
                    value.l.v = newValue;
                };
            }
        }
        objForEachKey(value, function (key, value) {
            prop[propMap[key]] = isUndefined(value) ? prop[propMap[key]] : value;
        });
        return prop;
    }
    var objDefineProp = ( /*#__PURE__*/_pureRef(ObjClass$1, "defineProperty"));
    function objDefine(target, key, propDesc) {
        return objDefineProp(target, key, _createProp(propDesc));
    }
    var _globalLazyTestHooks;
    function _initTestHooks() {
        _globalLazyTestHooks = _getGlobalConfig();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCachedValue(value) {
        return objDefineProp({
            toJSON: function () { return value; }
        }, "v", { value: value });
    }
    var WINDOW = "window";
    var _cachedGlobal;
    function _getGlobalInstFn(getFn, theArgs) {
        var cachedValue;
        return function () {
            !_globalLazyTestHooks && _initTestHooks();
            (!cachedValue || _globalLazyTestHooks.lzy) && (cachedValue = createCachedValue(safe(getFn, theArgs).v));
            return cachedValue.v;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getGlobal(useCached) {
        !_globalLazyTestHooks && _initTestHooks();
        (!_cachedGlobal || useCached === false || _globalLazyTestHooks.lzy) && (_cachedGlobal = createCachedValue(safe(_getGlobalValue).v || NULL_VALUE));
        return _cachedGlobal.v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getInst(name, useCached) {
        var gbl = (!_cachedGlobal || useCached === false) ? getGlobal(useCached) : _cachedGlobal.v;
        if (gbl && gbl[name]) {
            return gbl[name];
        }
        if (name === WINDOW) {
            return getWindow();
        }
        return NULL_VALUE;
    }
    var getDocument = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["document"]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasWindow() {
        return !!( /*#__PURE__*/getWindow());
    }
    var getWindow = ( /*#__PURE__*/_getGlobalInstFn(getInst, [WINDOW]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasNavigator() {
        return !!( /*#__PURE__*/getNavigator());
    }
    var getNavigator = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["navigator"]));
    var _symbol;
    var _symbolFor;
    /*#__NO_SIDE_EFFECTS__*/
    function _initSymbol() {
        _symbol = ( /*#__PURE__*/createCachedValue(safe((getInst), [SYMBOL]).v));
        return _symbol;
    }
    function _getSymbolKey(key) {
        var gblSym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return (gblSym.v ? gblSym.v[key] : UNDEF_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function newSymbol(description, noPoly) {
        !_globalLazyTestHooks && _initTestHooks();
        var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return sym.v ? sym.v(description) : (!noPoly ? polyNewSymbol(description) : NULL_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function symbolFor(key) {
        !_globalLazyTestHooks && _initTestHooks();
        _symbolFor = ((!_globalLazyTestHooks.lzy ? _symbolFor : 0) || ( /*#__PURE__*/createCachedValue(safe((_getSymbolKey), ["for"]).v)));
        return (_symbolFor.v || polySymbolFor)(key);
    }
    function fnApply(fn, thisArg, argArray) {
        return fn.apply(thisArg, argArray);
    }
    function arrForEach(theArray, callbackfn, thisArg) {
        if (theArray) {
            var len = theArray[LENGTH] >>> 0;
            for (var idx = 0; idx < len; idx++) {
                if (idx in theArray) {
                    if (callbackfn[CALL](thisArg || theArray, theArray[idx], idx, theArray) === -1) {
                        break;
                    }
                }
            }
        }
    }
    var arrIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", ArrProto));
    var arrMap = ( /*#__PURE__*/_unwrapFunction("map", ArrProto));
    var arrReduce = ( /*#__PURE__*/_unwrapFunction("reduce", ArrProto));
    var objCreate = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass$1, "create")), polyObjCreate));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjCreate(obj) {
        if (!obj) {
            return {};
        }
        var type = typeof obj;
        if (type !== OBJECT && type !== FUNCTION) {
            throwTypeError("Prototype must be an Object or function: " + dumpObj(obj));
        }
        function tempFunc() { }
        tempFunc[PROTOTYPE] = obj;
        return new tempFunc();
    }
    var _isProtoArray;
    function objSetPrototypeOf(obj, proto) {
        var fn = ObjClass$1["setPrototypeOf"] ||
            function (d, b) {
                var _a;
                !_isProtoArray && (_isProtoArray = createCachedValue((_a = {}, _a[__PROTO__] = [], _a) instanceof Array));
                _isProtoArray.v ? d[__PROTO__] = b : objForEachKey(b, function (key, value) { return d[key] = value; });
            };
        return fn(obj, proto);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createCustomError(name, d, b) {
        safe(objDefine, [d, NAME, { v: name, c: true, e: false }]);
        d = objSetPrototypeOf(d, b);
        function __() {
            this[CONSTRUCTOR] = d;
            safe(objDefine, [this, NAME, { v: name, c: true, e: false }]);
        }
        d[PROTOTYPE] = b === NULL_VALUE ? objCreate(b) : (__[PROTOTYPE] = b[PROTOTYPE], new __());
        return d;
    }
    function _setName(baseClass, name) {
        name && (baseClass[NAME] = name);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCustomError(name, constructCb, errorBase) {
        var theBaseClass = errorBase || Error;
        var orgName = theBaseClass[PROTOTYPE][NAME];
        var captureFn = Error.captureStackTrace;
        return _createCustomError(name, function () {
            var _this = this;
            var theArgs = arguments;
            try {
                safe(_setName, [theBaseClass, name]);
                var _self = fnApply(theBaseClass, _this, ArrSlice[CALL](theArgs)) || _this;
                if (_self !== _this) {
                    var orgProto = objGetPrototypeOf(_this);
                    if (orgProto !== objGetPrototypeOf(_self)) {
                        objSetPrototypeOf(_self, orgProto);
                    }
                }
                captureFn && captureFn(_self, _this[CONSTRUCTOR]);
                constructCb && constructCb(_self, theArgs);
                return _self;
            }
            finally {
                safe(_setName, [theBaseClass, orgName]);
            }
        }, theBaseClass);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function utcNow() {
        return (Date.now || polyUtcNow)();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyUtcNow() {
        return new Date().getTime();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createTrimFn(exp) {
        return function _doTrim(value) {
            if (isNullOrUndefined(value)) {
                throwTypeError("strTrim called [" + dumpObj(value) + "]");
            }
            if (value && value.replace) {
                value = value.replace(exp, EMPTY);
            }
            return value;
        };
    }
    var polyStrTrim = ( /*#__PURE__*/_createTrimFn(/^\s+|(?=\s)\s+$/g));
    var strTrim = ( /*#__PURE__*/_unwrapFunctionWithPoly("trim", StrProto, polyStrTrim));
    var _fnToString;
    var _objCtrFnString;
    var _gblWindow;
    /*#__NO_SIDE_EFFECTS__*/
    function isPlainObject(value) {
        if (!value || typeof value !== OBJECT) {
            return false;
        }
        if (!_gblWindow) {
            _gblWindow = hasWindow() ? getWindow() : true;
        }
        var result = false;
        if (value !== _gblWindow) {
            if (!_objCtrFnString) {
                _fnToString = Function[PROTOTYPE][TO_STRING];
                _objCtrFnString = _fnToString[CALL](ObjClass$1);
            }
            try {
                var proto = objGetPrototypeOf(value);
                result = !proto;
                if (!result) {
                    if (objHasOwnProperty(proto, CONSTRUCTOR)) {
                        proto = proto[CONSTRUCTOR];
                    }
                    result = proto && typeof proto === FUNCTION && _fnToString[CALL](proto) === _objCtrFnString;
                }
            }
            catch (ex) {
            }
        }
        return result;
    }
    var _perf;
    /*#__NO_SIDE_EFFECTS__*/
    function getPerformance() {
        !_globalLazyTestHooks && _initTestHooks();
        (!_perf || _globalLazyTestHooks.lzy) && (_perf = createCachedValue(safe((getInst), ["performance"]).v));
        return _perf.v;
    }
    var strEndsWith = ( /*#__PURE__*/_unwrapFunctionWithPoly("endsWith", StrProto, polyStrEndsWith));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrEndsWith(value, searchString, length) {
        if (!isString(value)) {
            throwTypeError("'" + dumpObj(value) + "' is not a string");
        }
        var searchValue = isString(searchString) ? searchString : asString(searchString);
        var end = !isUndefined(length) && length < value[LENGTH] ? length : value[LENGTH];
        return strSubstring(value, end - searchValue[LENGTH], end) === searchValue;
    }
    var strIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", StrProto));
    var REF = "ref";
    var UNREF = "unref";
    var HAS_REF = "hasRef";
    var ENABLED = "enabled";
    /*#__NO_SIDE_EFFECTS__*/
    function _createTimerHandler(startTimer, refreshFn, cancelFn) {
        var ref = true;
        var timerId = startTimer ? refreshFn(NULL_VALUE) : NULL_VALUE;
        var theTimerHandler;
        function _unref() {
            ref = false;
            timerId && timerId[UNREF] && timerId[UNREF]();
            return theTimerHandler;
        }
        function _cancel() {
            timerId && cancelFn(timerId);
            timerId = NULL_VALUE;
        }
        function _refresh() {
            timerId = refreshFn(timerId);
            if (!ref) {
                _unref();
            }
            return theTimerHandler;
        }
        function _setEnabled(value) {
            !value && timerId && _cancel();
            value && !timerId && _refresh();
        }
        theTimerHandler = {
            cancel: _cancel,
            refresh: _refresh
        };
        theTimerHandler[HAS_REF] = function () {
            if (timerId && timerId[HAS_REF]) {
                return timerId[HAS_REF]();
            }
            return ref;
        };
        theTimerHandler[REF] = function () {
            ref = true;
            timerId && timerId[REF] && timerId[REF]();
            return theTimerHandler;
        };
        theTimerHandler[UNREF] = _unref;
        theTimerHandler = objDefineProp(theTimerHandler, ENABLED, {
            get: function () { return !!timerId; },
            set: _setEnabled
        });
        return {
            h: theTimerHandler,
            dn: function () {
                timerId = NULL_VALUE;
            }
        };
    }
    function _createTimeoutWith(startTimer, overrideFn, theArgs) {
        var isArr = isArray(overrideFn);
        var len = isArr ? overrideFn.length : 0;
        var setFn = (len > 0 ? overrideFn[0] : (!isArr ? overrideFn : UNDEF_VALUE)) || setTimeout;
        var clearFn = (len > 1 ? overrideFn[1] : UNDEF_VALUE) || clearTimeout;
        var timerFn = theArgs[0];
        theArgs[0] = function () {
            handler.dn();
            fnApply(timerFn, UNDEF_VALUE, ArrSlice[CALL](arguments));
        };
        var handler = _createTimerHandler(startTimer, function (timerId) {
            if (timerId) {
                if (timerId.refresh) {
                    timerId.refresh();
                    return timerId;
                }
                fnApply(clearFn, UNDEF_VALUE, [timerId]);
            }
            return fnApply(setFn, UNDEF_VALUE, theArgs);
        }, function (timerId) {
            fnApply(clearFn, UNDEF_VALUE, [timerId]);
        });
        return handler.h;
    }
    function scheduleTimeout(callback, timeout) {
        return _createTimeoutWith(true, UNDEF_VALUE, ArrSlice[CALL](arguments));
    }

    var createEnumStyle = createEnum;
    var createValueMap = createTypeMap;

    var _DYN_TO_LOWER_CASE$1 = "toLowerCase";
    var _DYN_BLK_VAL = "blkVal";
    var _DYN_LENGTH$1 = "length";
    var _DYN_RD_ONLY = "rdOnly";
    var _DYN_NOTIFY = "notify";
    var _DYN_WARN_TO_CONSOLE = "warnToConsole";
    var _DYN_THROW_INTERNAL = "throwInternal";
    var _DYN_SET_DF = "setDf";
    var _DYN_WATCH = "watch";
    var _DYN_LOGGER = "logger";
    var _DYN_APPLY = "apply";
    var _DYN_PUSH$1 = "push";
    var _DYN_SPLICE = "splice";
    var _DYN_HDLR = "hdlr";
    var _DYN_CANCEL = "cancel";
    var _DYN_NAME$1 = "name";
    var _DYN_UNLOAD = "unload";
    var _DYN_VERSION = "version";
    var _DYN_LOGGING_LEVEL_CONSOL4 = "loggingLevelConsole";
    var _DYN_MESSAGE_ID = "messageId";
    var _DYN_MESSAGE$1 = "message";
    var _DYN_DIAG_LOG = "diagLog";
    var _DYN_USER_AGENT = "userAgent";
    var _DYN_SPLIT$1 = "split";
    var _DYN_NODE_TYPE = "nodeType";
    var _DYN_REPLACE = "replace";
    var _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage";
    var _DYN_TYPE = "type";
    var _DYN_HANDLER = "handler";
    var _DYN_TRACE_ID = "traceId";
    var _DYN_SPAN_ID = "spanId";
    var _DYN_TRACE_FLAGS = "traceFlags";

    var aggregationErrorType;
    function throwAggregationError(message, sourceErrors) {
        if (!aggregationErrorType) {
            aggregationErrorType = createCustomError("AggregationError", function (self, args) {
                if (args[_DYN_LENGTH$1 ] > 1) {
                    self.errors = args[1];
                }
            });
        }
        var theMessage = message || "One or more errors occurred.";
        arrForEach(sourceErrors, function (srcError, idx) {
            theMessage += "\n".concat(idx, " > ").concat(dumpObj(srcError));
        });
        throw new aggregationErrorType(theMessage, sourceErrors || []);
    }

    var strShimFunction = "function";
    var strShimObject = "object";
    var strShimUndefined = "undefined";
    var strShimPrototype = "prototype";
    var ObjClass = Object;
    var ObjProto = ObjClass[strShimPrototype];

    var strHasOwnProperty = "hasOwnProperty";
    var __objAssignFnImpl = function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (ObjProto[strHasOwnProperty].call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    var __assignFn = objAssign || __objAssignFnImpl;
    var extendStaticsFn = function (d, b) {
        extendStaticsFn = ObjClass["setPrototypeOf"] ||
            ({ __proto__: [] } instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) {
                    if (b[strHasOwnProperty](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return extendStaticsFn(d, b);
    };
    function __extendsFn(d, b) {
        if (typeof b !== strShimFunction && b !== null) {
            throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStaticsFn(d, b);
        function __() {
            this.constructor = d;
        }
        d[strShimPrototype] = b === null ? objCreate(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
    }

    var _a$1;
    var Constructor = 'constructor';
    var Prototype = 'prototype';
    var strFunction = 'function';
    var DynInstFuncTable = '_dynInstFuncs';
    var DynProxyTag = '_isDynProxy';
    var DynClassName = '_dynClass';
    var DynClassNamePrefix = '_dynCls$';
    var DynInstChkTag = '_dynInstChk';
    var DynAllowInstChkTag = DynInstChkTag;
    var DynProtoDefaultOptions = '_dfOpts';
    var UnknownValue = '_unknown_';
    var str__Proto = "__proto__";
    var DynProtoBaseProto = "_dyn" + str__Proto;
    var DynProtoGlobalSettings = "__dynProto$Gbl";
    var DynProtoCurrent = "_dynInstProto";
    var strUseBaseInst = 'useBaseInst';
    var strSetInstFuncs = 'setInstFuncs';
    var Obj = Object;
    var _objGetPrototypeOf = Obj["getPrototypeOf"];
    var _objGetOwnProps = Obj["getOwnPropertyNames"];
    var _gbl = getGlobal();
    var _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
        o: (_a$1 = {},
            _a$1[strSetInstFuncs] = true,
            _a$1[strUseBaseInst] = true,
            _a$1),
        n: 1000
    });
    function _isObjectOrArrayPrototype(target) {
        return target && (target === Obj[Prototype] || target === Array[Prototype]);
    }
    function _isObjectArrayOrFunctionPrototype(target) {
        return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
    }
    function _getObjProto(target) {
        var newProto;
        if (target) {
            if (_objGetPrototypeOf) {
                return _objGetPrototypeOf(target);
            }
            var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
            newProto = target[DynProtoBaseProto] || curProto;
            if (!objHasOwnProperty(target, DynProtoBaseProto)) {
                delete target[DynProtoCurrent];
                newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
                target[DynProtoCurrent] = curProto;
            }
        }
        return newProto;
    }
    function _forEachProp(target, func) {
        var props = [];
        if (_objGetOwnProps) {
            props = _objGetOwnProps(target);
        }
        else {
            for (var name_1 in target) {
                if (typeof name_1 === "string" && objHasOwnProperty(target, name_1)) {
                    props.push(name_1);
                }
            }
        }
        if (props && props.length > 0) {
            for (var lp = 0; lp < props.length; lp++) {
                func(props[lp]);
            }
        }
    }
    function _isDynamicCandidate(target, funcName, skipOwn) {
        return (funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || objHasOwnProperty(target, funcName)) && funcName !== str__Proto && funcName !== Prototype);
    }
    function _throwTypeError(message) {
        throwTypeError("DynamicProto: " + message);
    }
    function _getInstanceFuncs(thisTarget) {
        var instFuncs = objCreate(null);
        _forEachProp(thisTarget, function (name) {
            if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
                instFuncs[name] = thisTarget[name];
            }
        });
        return instFuncs;
    }
    function _hasVisited(values, value) {
        for (var lp = values.length - 1; lp >= 0; lp--) {
            if (values[lp] === value) {
                return true;
            }
        }
        return false;
    }
    function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
        function _instFuncProxy(target, funcHost, funcName) {
            var theFunc = funcHost[funcName];
            if (theFunc[DynProxyTag] && useBaseInst) {
                var instFuncTable = target[DynInstFuncTable] || {};
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
                }
            }
            return function () {
                return theFunc.apply(target, arguments);
            };
        }
        var baseFuncs = objCreate(null);
        _forEachProp(instFuncs, function (name) {
            baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
        });
        var baseProto = _getObjProto(classProto);
        var visited = [];
        while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
            _forEachProp(baseProto, function (name) {
                if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                    baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
                }
            });
            visited.push(baseProto);
            baseProto = _getObjProto(baseProto);
        }
        return baseFuncs;
    }
    function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
        var instFunc = null;
        if (target && objHasOwnProperty(proto, DynClassName)) {
            var instFuncTable = target[DynInstFuncTable] || objCreate(null);
            instFunc = (instFuncTable[proto[DynClassName]] || objCreate(null))[funcName];
            if (!instFunc) {
                _throwTypeError("Missing [" + funcName + "] " + strFunction);
            }
            if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
                var canAddInst = !objHasOwnProperty(target, funcName);
                var objProto = _getObjProto(target);
                var visited = [];
                while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                    var protoFunc = objProto[funcName];
                    if (protoFunc) {
                        canAddInst = (protoFunc === currentDynProtoProxy);
                        break;
                    }
                    visited.push(objProto);
                    objProto = _getObjProto(objProto);
                }
                try {
                    if (canAddInst) {
                        target[funcName] = instFunc;
                    }
                    instFunc[DynInstChkTag] = 1;
                }
                catch (e) {
                    instFuncTable[DynAllowInstChkTag] = false;
                }
            }
        }
        return instFunc;
    }
    function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
        var protoFunc = proto[funcName];
        if (protoFunc === currentDynProtoProxy) {
            protoFunc = _getObjProto(proto)[funcName];
        }
        if (typeof protoFunc !== strFunction) {
            _throwTypeError("[" + funcName + "] is not a " + strFunction);
        }
        return protoFunc;
    }
    function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
        function _createDynamicPrototype(proto, funcName) {
            var dynProtoProxy = function () {
                var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
                return instFunc.apply(this, arguments);
            };
            dynProtoProxy[DynProxyTag] = 1;
            return dynProtoProxy;
        }
        if (!_isObjectOrArrayPrototype(proto)) {
            var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || objCreate(null);
            if (!_isObjectOrArrayPrototype(instFuncTable)) {
                var instFuncs_1 = instFuncTable[className] = (instFuncTable[className] || objCreate(null));
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
                }
                if (!_isObjectOrArrayPrototype(instFuncs_1)) {
                    _forEachProp(target, function (name) {
                        if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                            instFuncs_1[name] = target[name];
                            delete target[name];
                            if (!objHasOwnProperty(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                                proto[name] = _createDynamicPrototype(proto, name);
                            }
                        }
                    });
                }
            }
        }
    }
    function _checkPrototype(classProto, thisTarget) {
        if (_objGetPrototypeOf) {
            var visited = [];
            var thisProto = _getObjProto(thisTarget);
            while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
                if (thisProto === classProto) {
                    return true;
                }
                visited.push(thisProto);
                thisProto = _getObjProto(thisProto);
            }
            return false;
        }
        return true;
    }
    function _getObjName(target, unknownValue) {
        if (objHasOwnProperty(target, Prototype)) {
            return target.name || unknownValue || UnknownValue;
        }
        return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
    }
    function dynamicProto(theClass, target, delegateFunc, options) {
        if (!objHasOwnProperty(theClass, Prototype)) {
            _throwTypeError("theClass is an invalid class definition.");
        }
        var classProto = theClass[Prototype];
        if (!_checkPrototype(classProto, target)) {
            _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
        }
        var className = null;
        if (objHasOwnProperty(classProto, DynClassName)) {
            className = classProto[DynClassName];
        }
        else {
            className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
            _gblInst.n++;
            classProto[DynClassName] = className;
        }
        var perfOptions = dynamicProto[DynProtoDefaultOptions];
        var useBaseInst = !!perfOptions[strUseBaseInst];
        if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
            useBaseInst = !!options[strUseBaseInst];
        }
        var instFuncs = _getInstanceFuncs(target);
        var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
        delegateFunc(target, baseFuncs);
        var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
        if (setInstanceFunc && options) {
            setInstanceFunc = !!options[strSetInstFuncs];
        }
        _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
    }
    dynamicProto[DynProtoDefaultOptions] = _gblInst.o;

    var UNDEFINED_VALUE = undefined;
    var STR_EMPTY = "";
    var STR_NOT_DYNAMIC_ERROR = "Not dynamic - ";

    var rCamelCase = /-([a-z])/g;
    var rNormalizeInvalid = /([^\w\d_$])/g;
    var rLeadingNumeric = /^(\d+[\w\d_$])/;
    function isNotNullOrUndefined(value) {
        return !isNullOrUndefined(value);
    }
    function normalizeJsName(name) {
        var value = name;
        if (value && isString(value)) {
            value = value[_DYN_REPLACE ](rCamelCase, function (_all, letter) {
                return letter.toUpperCase();
            });
            value = value[_DYN_REPLACE ](rNormalizeInvalid, "_");
            value = value[_DYN_REPLACE ](rLeadingNumeric, function (_all, match) {
                return "_" + match;
            });
        }
        return value;
    }
    function strContains(value, search) {
        if (value && search) {
            return strIndexOf(value, search) !== -1;
        }
        return false;
    }
    function toISOString(date) {
        return date && date.toISOString() || "";
    }
    function getExceptionName(object) {
        if (isError(object)) {
            return object[_DYN_NAME$1 ];
        }
        return STR_EMPTY;
    }
    function createClassFromInterface(defaults) {
        return /** @class */ (function () {
            function class_1() {
                var _this = this;
                if (defaults) {
                    objForEachKey(defaults, function (field, value) {
                        _this[field] = value;
                    });
                }
            }
            return class_1;
        }());
    }

    var strConsole = "console";
    var strJSON = "JSON";
    var strCrypto = "crypto";
    var strMsCrypto = "msCrypto";
    var strMsie = "msie";
    var strTrident = "trident/";
    var _isTrident = null;
    var _navUserAgentCheck = null;
    var _beaconsSupported = null;
    function getConsole() {
        if (typeof console !== strShimUndefined) {
            return console;
        }
        return getInst(strConsole);
    }
    function hasJSON() {
        return Boolean((typeof JSON === strShimObject && JSON) || getInst(strJSON) !== null);
    }
    function getJSON() {
        if (hasJSON()) {
            return JSON || getInst(strJSON);
        }
        return null;
    }
    function getCrypto() {
        return getInst(strCrypto);
    }
    function getMsCrypto() {
        return getInst(strMsCrypto);
    }
    function isIE() {
        var nav = getNavigator();
        if (nav && (nav[_DYN_USER_AGENT ] !== _navUserAgentCheck || _isTrident === null)) {
            _navUserAgentCheck = nav[_DYN_USER_AGENT ];
            var userAgent = (_navUserAgentCheck || STR_EMPTY)[_DYN_TO_LOWER_CASE$1 ]();
            _isTrident = (strContains(userAgent, strMsie) || strContains(userAgent, strTrident));
        }
        return _isTrident;
    }
    function isBeaconsSupported(useCached) {
        if (_beaconsSupported === null || useCached === false) {
            _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
        }
        return _beaconsSupported;
    }
    function _getNamedValue(values, name) {
        if (values) {
            for (var i = 0; i < values[_DYN_LENGTH$1 ]; i++) {
                var value = values[i];
                if (value[_DYN_NAME$1 ]) {
                    if (value[_DYN_NAME$1 ] === name) {
                        return value;
                    }
                }
            }
        }
        return {};
    }
    function findMetaTag(name) {
        var doc = getDocument();
        if (doc && name) {
            return _getNamedValue(doc.querySelectorAll("meta"), name).content;
        }
        return null;
    }
    function findNamedServerTiming(name) {
        var value;
        var perf = getPerformance();
        if (perf) {
            var navPerf = perf.getEntriesByType("navigation") || [];
            value = _getNamedValue((navPerf[_DYN_LENGTH$1 ] > 0 ? navPerf[0] : {}).serverTiming, name).description;
        }
        return value;
    }

    var UInt32Mask = 0x100000000;
    var MaxUInt32 = 0xffffffff;
    var SEED1 = 123456789;
    var SEED2 = 987654321;
    var _mwcSeeded = false;
    var _mwcW = SEED1;
    var _mwcZ = SEED2;
    function _mwcSeed(seedValue) {
        if (seedValue < 0) {
            seedValue >>>= 0;
        }
        _mwcW = (SEED1 + seedValue) & MaxUInt32;
        _mwcZ = (SEED2 - seedValue) & MaxUInt32;
        _mwcSeeded = true;
    }
    function _autoSeedMwc() {
        try {
            var now = utcNow() & 0x7fffffff;
            _mwcSeed(((Math.random() * UInt32Mask) ^ now) + now);
        }
        catch (e) {
        }
    }
    function randomValue(maxValue) {
        if (maxValue > 0) {
            return Math.floor((random32() / MaxUInt32) * (maxValue + 1)) >>> 0;
        }
        return 0;
    }
    function random32(signed) {
        var value = 0;
        var c = getCrypto() || getMsCrypto();
        if (c && c.getRandomValues) {
            value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
        }
        if (value === 0 && isIE()) {
            if (!_mwcSeeded) {
                _autoSeedMwc();
            }
            value = mwcRandom32() & MaxUInt32;
        }
        if (value === 0) {
            value = Math.floor((UInt32Mask * Math.random()) | 0);
        }
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function mwcRandom32(signed) {
        _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
        _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
        var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function newId(maxLength) {
        if (maxLength === void 0) { maxLength = 22; }
        var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var number = random32() >>> 0;
        var chars = 0;
        var result = STR_EMPTY;
        while (result[_DYN_LENGTH$1 ] < maxLength) {
            chars++;
            result += base64chars.charAt(number & 0x3F);
            number >>>= 6;
            if (chars === 5) {
                number = (((random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
                chars = 0;
            }
        }
        return result;
    }

    var version = '3.2.2';
    var instanceName = "." + newId(6);
    var _dataUid = 0;
    function _canAcceptData(target) {
        return target[_DYN_NODE_TYPE ] === 1 || target[_DYN_NODE_TYPE ] === 9 || !(+target[_DYN_NODE_TYPE ]);
    }
    function _getCache(data, target) {
        var theCache = target[data.id];
        if (!theCache) {
            theCache = {};
            try {
                if (_canAcceptData(target)) {
                    objDefine(target, data.id, {
                        e: false,
                        v: theCache
                    });
                }
            }
            catch (e) {
            }
        }
        return theCache;
    }
    function createUniqueNamespace(name, includeVersion) {
        if (includeVersion === void 0) { includeVersion = false; }
        return normalizeJsName(name + (_dataUid++) + (includeVersion ? "." + version : STR_EMPTY) + instanceName);
    }
    function createElmNodeData(name) {
        var data = {
            id: createUniqueNamespace("_aiData-" + (name || STR_EMPTY) + "." + version),
            accept: function (target) {
                return _canAcceptData(target);
            },
            get: function (target, name, defValue, addDefault) {
                var theCache = target[data.id];
                if (!theCache) {
                    if (addDefault) {
                        theCache = _getCache(data, target);
                        theCache[normalizeJsName(name)] = defValue;
                    }
                    return defValue;
                }
                return theCache[normalizeJsName(name)];
            },
            kill: function (target, name) {
                if (target && target[name]) {
                    try {
                        delete target[name];
                    }
                    catch (e) {
                    }
                }
            }
        };
        return data;
    }

    function _isConfigDefaults(value) {
        return (value && isObject(value) && (value.isVal || value.fb || objHasOwn(value, "v") || objHasOwn(value, "mrg") || objHasOwn(value, "ref") || value.set));
    }
    function _getDefault(dynamicHandler, theConfig, cfgDefaults) {
        var defValue;
        var isDefaultValid = cfgDefaults.dfVal || isDefined;
        if (theConfig && cfgDefaults.fb) {
            var fallbacks = cfgDefaults.fb;
            if (!isArray(fallbacks)) {
                fallbacks = [fallbacks];
            }
            for (var lp = 0; lp < fallbacks[_DYN_LENGTH$1 ]; lp++) {
                var fallback = fallbacks[lp];
                var fbValue = theConfig[fallback];
                if (isDefaultValid(fbValue)) {
                    defValue = fbValue;
                }
                else if (dynamicHandler) {
                    fbValue = dynamicHandler.cfg[fallback];
                    if (isDefaultValid(fbValue)) {
                        defValue = fbValue;
                    }
                    dynamicHandler.set(dynamicHandler.cfg, asString(fallback), fbValue);
                }
                if (isDefaultValid(defValue)) {
                    break;
                }
            }
        }
        if (!isDefaultValid(defValue) && isDefaultValid(cfgDefaults.v)) {
            defValue = cfgDefaults.v;
        }
        return defValue;
    }
    function _resolveDefaultValue(dynamicHandler, theConfig, cfgDefaults) {
        var theValue = cfgDefaults;
        if (cfgDefaults && _isConfigDefaults(cfgDefaults)) {
            theValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        if (theValue) {
            if (_isConfigDefaults(theValue)) {
                theValue = _resolveDefaultValue(dynamicHandler, theConfig, theValue);
            }
            var newValue_1;
            if (isArray(theValue)) {
                newValue_1 = [];
                newValue_1[_DYN_LENGTH$1 ] = theValue[_DYN_LENGTH$1 ];
            }
            else if (isPlainObject(theValue)) {
                newValue_1 = {};
            }
            if (newValue_1) {
                objForEachKey(theValue, function (key, value) {
                    if (value && _isConfigDefaults(value)) {
                        value = _resolveDefaultValue(dynamicHandler, theConfig, value);
                    }
                    newValue_1[key] = value;
                });
                theValue = newValue_1;
            }
        }
        return theValue;
    }
    function _applyDefaultValue(dynamicHandler, theConfig, name, defaultValue) {
        var isValid;
        var setFn;
        var defValue;
        var cfgDefaults = defaultValue;
        var mergeDf;
        var reference;
        var readOnly;
        var blkDynamicValue;
        if (_isConfigDefaults(cfgDefaults)) {
            isValid = cfgDefaults.isVal;
            setFn = cfgDefaults.set;
            readOnly = cfgDefaults[_DYN_RD_ONLY ];
            blkDynamicValue = cfgDefaults[_DYN_BLK_VAL ];
            mergeDf = cfgDefaults.mrg;
            reference = cfgDefaults.ref;
            if (!reference && isUndefined(reference)) {
                reference = !!mergeDf;
            }
            defValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        else {
            defValue = defaultValue;
        }
        if (blkDynamicValue) {
            dynamicHandler[_DYN_BLK_VAL ](theConfig, name);
        }
        var theValue;
        var usingDefault = true;
        var cfgValue = theConfig[name];
        if (cfgValue || !isNullOrUndefined(cfgValue)) {
            theValue = cfgValue;
            usingDefault = false;
            if (isValid && theValue !== defValue && !isValid(theValue)) {
                theValue = defValue;
                usingDefault = true;
            }
            if (setFn) {
                theValue = setFn(theValue, defValue, theConfig);
                usingDefault = theValue === defValue;
            }
        }
        if (!usingDefault) {
            if (isPlainObject(theValue) || isArray(defValue)) {
                if (mergeDf && defValue && (isPlainObject(defValue) || isArray(defValue))) {
                    objForEachKey(defValue, function (dfName, dfValue) {
                        _applyDefaultValue(dynamicHandler, theValue, dfName, dfValue);
                    });
                }
            }
        }
        else if (defValue) {
            theValue = _resolveDefaultValue(dynamicHandler, theConfig, defValue);
        }
        else {
            theValue = defValue;
        }
        dynamicHandler.set(theConfig, name, theValue);
        if (reference) {
            dynamicHandler.ref(theConfig, name);
        }
        if (readOnly) {
            dynamicHandler[_DYN_RD_ONLY ](theConfig, name);
        }
    }

    var CFG_HANDLER_LINK = symbolFor("[[ai_dynCfg_1]]");
    var BLOCK_DYNAMIC = symbolFor("[[ai_blkDynCfg_1]]");
    var FORCE_DYNAMIC = symbolFor("[[ai_frcDynCfg_1]]");
    function _cfgDeepCopy(source) {
        if (source) {
            var target_1;
            if (isArray(source)) {
                target_1 = [];
                target_1[_DYN_LENGTH$1 ] = source[_DYN_LENGTH$1 ];
            }
            else if (isPlainObject(source)) {
                target_1 = {};
            }
            if (target_1) {
                objForEachKey(source, function (key, value) {
                    target_1[key] = _cfgDeepCopy(value);
                });
                return target_1;
            }
        }
        return source;
    }
    function getDynamicConfigHandler(value) {
        if (value) {
            var handler = value[CFG_HANDLER_LINK] || value;
            if (handler.cfg && (handler.cfg === value || handler.cfg[CFG_HANDLER_LINK] === handler)) {
                return handler;
            }
        }
        return null;
    }
    function blockDynamicConversion(value) {
        if (value && (isPlainObject(value) || isArray(value))) {
            try {
                value[BLOCK_DYNAMIC] = true;
            }
            catch (e) {
            }
        }
        return value;
    }
    function _canMakeDynamic(getFunc, state, value) {
        var result = false;
        if (value && !getFunc[state.blkVal]) {
            result = value[FORCE_DYNAMIC];
            if (!result && !value[BLOCK_DYNAMIC]) {
                result = isPlainObject(value) || isArray(value);
            }
        }
        return result;
    }
    function throwInvalidAccess(message) {
        throwTypeError("InvalidAccess:" + message);
    }

    var arrayMethodsToPatch = [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ];
    var _throwDynamicError = function (logger, name, desc, e) {
        logger && logger[_DYN_THROW_INTERNAL ](3 , 108 , "".concat(desc, " [").concat(name, "] failed - ") + dumpObj(e));
    };
    function _patchArray(state, target, name) {
        if (isArray(target)) {
            arrForEach(arrayMethodsToPatch, function (method) {
                var orgMethod = target[method];
                target[method] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = orgMethod[_DYN_APPLY ](this, args);
                    _makeDynamicObject(state, target, name, "Patching");
                    return result;
                };
            });
        }
    }
    function _getOwnPropGetter(target, name) {
        var propDesc = objGetOwnPropertyDescriptor(target, name);
        return propDesc && propDesc.get;
    }
    function _createDynamicProperty(state, theConfig, name, value) {
        var detail = {
            n: name,
            h: [],
            trk: function (handler) {
                if (handler && handler.fn) {
                    if (arrIndexOf(detail.h, handler) === -1) {
                        detail.h[_DYN_PUSH$1 ](handler);
                    }
                    state.trk(handler, detail);
                }
            },
            clr: function (handler) {
                var idx = arrIndexOf(detail.h, handler);
                if (idx !== -1) {
                    detail.h[_DYN_SPLICE ](idx, 1);
                }
            }
        };
        var checkDynamic = true;
        var isObjectOrArray = false;
        function _getProperty() {
            if (checkDynamic) {
                isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                if (value && !value[CFG_HANDLER_LINK] && isObjectOrArray) {
                    value = _makeDynamicObject(state, value, name, "Converting");
                }
                checkDynamic = false;
            }
            var activeHandler = state.act;
            if (activeHandler) {
                detail.trk(activeHandler);
            }
            return value;
        }
        _getProperty[state.prop] = {
            chng: function () {
                state.add(detail);
            }
        };
        function _setProperty(newValue) {
            if (value !== newValue) {
                if (!!_getProperty[state.ro] && !state.upd) {
                    throwInvalidAccess("[" + name + "] is read-only:" + dumpObj(theConfig));
                }
                if (checkDynamic) {
                    isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                    checkDynamic = false;
                }
                var isReferenced = isObjectOrArray && _getProperty[state.rf];
                if (isObjectOrArray) {
                    if (isReferenced) {
                        objForEachKey(value, function (key) {
                            value[key] = newValue ? newValue[key] : UNDEFINED_VALUE;
                        });
                        try {
                            objForEachKey(newValue, function (key, theValue) {
                                _setDynamicProperty(state, value, key, theValue);
                            });
                            newValue = value;
                        }
                        catch (e) {
                            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "Assigning", e);
                            isObjectOrArray = false;
                        }
                    }
                    else if (value && value[CFG_HANDLER_LINK]) {
                        objForEachKey(value, function (key) {
                            var getter = _getOwnPropGetter(value, key);
                            if (getter) {
                                var valueState = getter[state.prop];
                                valueState && valueState.chng();
                            }
                        });
                    }
                }
                if (newValue !== value) {
                    var newIsObjectOrArray = newValue && _canMakeDynamic(_getProperty, state, newValue);
                    if (!isReferenced && newIsObjectOrArray) {
                        newValue = _makeDynamicObject(state, newValue, name, "Converting");
                    }
                    value = newValue;
                    isObjectOrArray = newIsObjectOrArray;
                }
                state.add(detail);
            }
        }
        objDefine(theConfig, detail.n, { g: _getProperty, s: _setProperty });
    }
    function _setDynamicProperty(state, target, name, value) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            if (!isDynamic) {
                _createDynamicProperty(state, target, name, value);
            }
            else {
                target[name] = value;
            }
        }
        return target;
    }
    function _setDynamicPropertyState(state, target, name, flags) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            var inPlace = flags && flags[0 ];
            var rdOnly = flags && flags[1 ];
            var blkProp = flags && flags[2 ];
            if (!isDynamic) {
                if (blkProp) {
                    try {
                        blockDynamicConversion(target);
                    }
                    catch (e) {
                        _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "Blocking", e);
                    }
                }
                try {
                    _setDynamicProperty(state, target, name, target[name]);
                    getter = _getOwnPropGetter(target, name);
                }
                catch (e) {
                    _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "State", e);
                }
            }
            if (inPlace) {
                getter[state.rf] = inPlace;
            }
            if (rdOnly) {
                getter[state.ro] = rdOnly;
            }
            if (blkProp) {
                getter[state.blkVal] = true;
            }
        }
        return target;
    }
    function _makeDynamicObject(state, target, name, desc) {
        try {
            objForEachKey(target, function (key, value) {
                _setDynamicProperty(state, target, key, value);
            });
            if (!target[CFG_HANDLER_LINK]) {
                objDefineProp(target, CFG_HANDLER_LINK, {
                    get: function () {
                        return state[_DYN_HDLR ];
                    }
                });
                _patchArray(state, target, name);
            }
        }
        catch (e) {
            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, desc, e);
        }
        return target;
    }

    var symPrefix = "[[ai_";
    var symPostfix = "]]";
    function _createState(cfgHandler) {
        var _a;
        var dynamicPropertySymbol = newSymbol(symPrefix + "get" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReadOnly = newSymbol(symPrefix + "ro" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReferenced = newSymbol(symPrefix + "rf" + cfgHandler.uid + symPostfix);
        var dynamicPropertyBlockValue = newSymbol(symPrefix + "blkVal" + cfgHandler.uid + symPostfix);
        var dynamicPropertyDetail = newSymbol(symPrefix + "dtl" + cfgHandler.uid + symPostfix);
        var _waitingHandlers = null;
        var _watcherTimer = null;
        var theState;
        function _useHandler(activeHandler, callback) {
            var prevWatcher = theState.act;
            try {
                theState.act = activeHandler;
                if (activeHandler && activeHandler[dynamicPropertyDetail]) {
                    arrForEach(activeHandler[dynamicPropertyDetail], function (detail) {
                        detail.clr(activeHandler);
                    });
                    activeHandler[dynamicPropertyDetail] = [];
                }
                callback({
                    cfg: cfgHandler.cfg,
                    set: cfgHandler.set.bind(cfgHandler),
                    setDf: cfgHandler[_DYN_SET_DF ].bind(cfgHandler),
                    ref: cfgHandler.ref.bind(cfgHandler),
                    rdOnly: cfgHandler[_DYN_RD_ONLY ].bind(cfgHandler)
                });
            }
            catch (e) {
                var logger = cfgHandler[_DYN_LOGGER ];
                if (logger) {
                    logger[_DYN_THROW_INTERNAL ](1 , 107 , dumpObj(e));
                }
                throw e;
            }
            finally {
                theState.act = prevWatcher || null;
            }
        }
        function _notifyWatchers() {
            if (_waitingHandlers) {
                var notifyHandlers = _waitingHandlers;
                _waitingHandlers = null;
                _watcherTimer && _watcherTimer[_DYN_CANCEL ]();
                _watcherTimer = null;
                var watcherFailures_1 = [];
                arrForEach(notifyHandlers, function (handler) {
                    if (handler) {
                        if (handler[dynamicPropertyDetail]) {
                            arrForEach(handler[dynamicPropertyDetail], function (detail) {
                                detail.clr(handler);
                            });
                            handler[dynamicPropertyDetail] = null;
                        }
                        if (handler.fn) {
                            try {
                                _useHandler(handler, handler.fn);
                            }
                            catch (e) {
                                watcherFailures_1[_DYN_PUSH$1 ](e);
                            }
                        }
                    }
                });
                if (_waitingHandlers) {
                    try {
                        _notifyWatchers();
                    }
                    catch (e) {
                        watcherFailures_1[_DYN_PUSH$1 ](e);
                    }
                }
                if (watcherFailures_1[_DYN_LENGTH$1 ] > 0) {
                    throwAggregationError("Watcher error(s): ", watcherFailures_1);
                }
            }
        }
        function _addWatcher(detail) {
            if (detail && detail.h[_DYN_LENGTH$1 ] > 0) {
                if (!_waitingHandlers) {
                    _waitingHandlers = [];
                }
                if (!_watcherTimer) {
                    _watcherTimer = scheduleTimeout(function () {
                        _watcherTimer = null;
                        _notifyWatchers();
                    }, 0);
                }
                for (var idx = 0; idx < detail.h[_DYN_LENGTH$1 ]; idx++) {
                    var handler = detail.h[idx];
                    if (handler && arrIndexOf(_waitingHandlers, handler) === -1) {
                        _waitingHandlers[_DYN_PUSH$1 ](handler);
                    }
                }
            }
        }
        function _trackHandler(handler, detail) {
            if (handler) {
                var details = handler[dynamicPropertyDetail] = handler[dynamicPropertyDetail] || [];
                if (arrIndexOf(details, detail) === -1) {
                    details[_DYN_PUSH$1 ](detail);
                }
            }
        }
        theState = (_a = {
                prop: dynamicPropertySymbol,
                ro: dynamicPropertyReadOnly,
                rf: dynamicPropertyReferenced
            },
            _a[_DYN_BLK_VAL ] = dynamicPropertyBlockValue,
            _a[_DYN_HDLR ] = cfgHandler,
            _a.add = _addWatcher,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.use = _useHandler,
            _a.trk = _trackHandler,
            _a);
        return theState;
    }

    function _createAndUseHandler(state, configHandler) {
        var handler = {
            fn: configHandler,
            rm: function () {
                handler.fn = null;
                state = null;
                configHandler = null;
            }
        };
        objDefine(handler, "toJSON", { v: function () { return "WatcherHandler" + (handler.fn ? "" : "[X]"); } });
        state.use(handler, configHandler);
        return handler;
    }
    function _createDynamicHandler(logger, target, inPlace) {
        var _a;
        var dynamicHandler = getDynamicConfigHandler(target);
        if (dynamicHandler) {
            return dynamicHandler;
        }
        var uid = createUniqueNamespace("dyncfg", true);
        var newTarget = (target && inPlace !== false) ? target : _cfgDeepCopy(target);
        var theState;
        function _notifyWatchers() {
            theState[_DYN_NOTIFY ]();
        }
        function _setValue(target, name, value) {
            try {
                target = _setDynamicProperty(theState, target, name, value);
            }
            catch (e) {
                _throwDynamicError(logger, name, "Setting value", e);
            }
            return target[name];
        }
        function _watch(configHandler) {
            return _createAndUseHandler(theState, configHandler);
        }
        function _block(configHandler, allowUpdate) {
            theState.use(null, function (details) {
                var prevUpd = theState.upd;
                try {
                    if (!isUndefined(allowUpdate)) {
                        theState.upd = allowUpdate;
                    }
                    configHandler(details);
                }
                finally {
                    theState.upd = prevUpd;
                }
            });
        }
        function _ref(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[0 ] = true, _a))[name];
        }
        function _rdOnly(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[1 ] = true, _a))[name];
        }
        function _blkPropValue(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[2 ] = true, _a))[name];
        }
        function _applyDefaults(theConfig, defaultValues) {
            if (defaultValues) {
                objForEachKey(defaultValues, function (name, value) {
                    _applyDefaultValue(cfgHandler, theConfig, name, value);
                });
            }
            return theConfig;
        }
        var cfgHandler = (_a = {
                uid: null,
                cfg: newTarget
            },
            _a[_DYN_LOGGER ] = logger,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.set = _setValue,
            _a[_DYN_SET_DF ] = _applyDefaults,
            _a[_DYN_WATCH ] = _watch,
            _a.ref = _ref,
            _a[_DYN_RD_ONLY ] = _rdOnly,
            _a[_DYN_BLK_VAL ] = _blkPropValue,
            _a._block = _block,
            _a);
        objDefine(cfgHandler, "uid", {
            c: false,
            e: false,
            w: false,
            v: uid
        });
        theState = _createState(cfgHandler);
        _makeDynamicObject(theState, newTarget, "config", "Creating");
        return cfgHandler;
    }
    function _logInvalidAccess(logger, message) {
        if (logger) {
            logger[_DYN_WARN_TO_CONSOLE ](message);
            logger[_DYN_THROW_INTERNAL ](2 , 108 , message);
        }
        else {
            throwInvalidAccess(message);
        }
    }
    function createDynamicConfig(config, defaultConfig, logger, inPlace) {
        var dynamicHandler = _createDynamicHandler(logger, config || {}, inPlace);
        if (defaultConfig) {
            dynamicHandler[_DYN_SET_DF ](dynamicHandler.cfg, defaultConfig);
        }
        return dynamicHandler;
    }
    function onConfigChange(config, configHandler, logger) {
        var handler = config[CFG_HANDLER_LINK] || config;
        if (handler.cfg && (handler.cfg === config || handler.cfg[CFG_HANDLER_LINK] === handler)) {
            return handler[_DYN_WATCH ](configHandler);
        }
        _logInvalidAccess(logger, STR_NOT_DYNAMIC_ERROR + dumpObj(config));
        return createDynamicConfig(config, null, logger)[_DYN_WATCH ](configHandler);
    }

    var _aiNamespace = null;
    function _getExtensionNamespace() {
        var target = getInst("Microsoft");
        if (target) {
            _aiNamespace = target["ApplicationInsights"];
        }
        return _aiNamespace;
    }
    function getDebugExt(config) {
        var ns = _aiNamespace;
        if (!ns && config.disableDbgExt !== true) {
            ns = _aiNamespace || _getExtensionNamespace();
        }
        return ns ? ns["ChromeDbgExt"] : null;
    }

    var _a;
    var STR_WARN_TO_CONSOLE = "warnToConsole";
    var AiNonUserActionablePrefix = "AI (Internal): ";
    var AiUserActionablePrefix = "AI: ";
    var AIInternalMessagePrefix = "AITR_";
    var defaultValues = {
        loggingLevelConsole: 0,
        loggingLevelTelemetry: 1,
        maxMessageLimit: 25,
        enableDebug: false
    };
    var _logFuncs = (_a = {},
        _a[0 ] = null,
        _a[1 ] = "errorToConsole",
        _a[2 ] = STR_WARN_TO_CONSOLE,
        _a[3 ] = "debugToConsole",
        _a);
    function _sanitizeDiagnosticText(text) {
        if (text) {
            return "\"" + text[_DYN_REPLACE ](/\"/g, STR_EMPTY) + "\"";
        }
        return STR_EMPTY;
    }
    function _logToConsole(func, message) {
        var theConsole = getConsole();
        if (!!theConsole) {
            var logFunc = "log";
            if (theConsole[func]) {
                logFunc = func;
            }
            if (isFunction(theConsole[logFunc])) {
                theConsole[logFunc](message);
            }
        }
    }
    var _InternalLogMessage = /** @class */ (function () {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) { isUserAct = false; }
            var _self = this;
            _self[_DYN_MESSAGE_ID ] = msgId;
            _self[_DYN_MESSAGE$1 ] =
                (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                    msgId;
            var strProps = STR_EMPTY;
            if (hasJSON()) {
                strProps = getJSON().stringify(properties);
            }
            var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY) +
                (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY);
            _self[_DYN_MESSAGE$1 ] += diagnosticText;
        }
        _InternalLogMessage.dataType = "MessageData";
        return _InternalLogMessage;
    }());
    function safeGetLogger(core, config) {
        return (core || {})[_DYN_LOGGER ] || new DiagnosticLogger(config);
    }
    var DiagnosticLogger = /** @class */ (function () {
        function DiagnosticLogger(config) {
            this.identifier = "DiagnosticLogger";
            this.queue = [];
            var _messageCount = 0;
            var _messageLogged = {};
            var _loggingLevelConsole;
            var _loggingLevelTelemetry;
            var _maxInternalMessageLimit;
            var _enableDebug;
            var _unloadHandler;
            dynamicProto(DiagnosticLogger, this, function (_self) {
                _unloadHandler = _setDefaultsFromConfig(config || {});
                _self.consoleLoggingLevel = function () { return _loggingLevelConsole; };
                _self[_DYN_THROW_INTERNAL ] = function (severity, msgId, msg, properties, isUserAct) {
                    if (isUserAct === void 0) { isUserAct = false; }
                    var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                    if (_enableDebug) {
                        throw dumpObj(message);
                    }
                    else {
                        var logFunc = _logFuncs[severity] || STR_WARN_TO_CONSOLE;
                        if (!isUndefined(message[_DYN_MESSAGE$1 ])) {
                            if (isUserAct) {
                                var messageKey = +message[_DYN_MESSAGE_ID ];
                                if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE$1 ]);
                                    _messageLogged[messageKey] = true;
                                }
                            }
                            else {
                                if (_loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE$1 ]);
                                }
                            }
                            _logInternalMessage(severity, message);
                        }
                        else {
                            _debugExtMsg("throw" + (severity === 1  ? "Critical" : "Warning"), message);
                        }
                    }
                };
                _self.debugToConsole = function (message) {
                    _logToConsole("debug", message);
                    _debugExtMsg("warning", message);
                };
                _self[_DYN_WARN_TO_CONSOLE ] = function (message) {
                    _logToConsole("warn", message);
                    _debugExtMsg("warning", message);
                };
                _self.errorToConsole = function (message) {
                    _logToConsole("error", message);
                    _debugExtMsg("error", message);
                };
                _self.resetInternalMessageCount = function () {
                    _messageCount = 0;
                    _messageLogged = {};
                };
                _self[_DYN_LOG_INTERNAL_MESSAGE ] = _logInternalMessage;
                _self[_DYN_UNLOAD ] = function (isAsync) {
                    _unloadHandler && _unloadHandler.rm();
                    _unloadHandler = null;
                };
                function _logInternalMessage(severity, message) {
                    if (_areInternalMessagesThrottled()) {
                        return;
                    }
                    var logMessage = true;
                    var messageKey = AIInternalMessagePrefix + message[_DYN_MESSAGE_ID ];
                    if (_messageLogged[messageKey]) {
                        logMessage = false;
                    }
                    else {
                        _messageLogged[messageKey] = true;
                    }
                    if (logMessage) {
                        if (severity <= _loggingLevelTelemetry) {
                            _self.queue[_DYN_PUSH$1 ](message);
                            _messageCount++;
                            _debugExtMsg((severity === 1  ? "error" : "warn"), message);
                        }
                        if (_messageCount === _maxInternalMessageLimit) {
                            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                            var throttleMessage = new _InternalLogMessage(23 , throttleLimitMessage, false);
                            _self.queue[_DYN_PUSH$1 ](throttleMessage);
                            if (severity === 1 ) {
                                _self.errorToConsole(throttleLimitMessage);
                            }
                            else {
                                _self[_DYN_WARN_TO_CONSOLE ](throttleLimitMessage);
                            }
                        }
                    }
                }
                function _setDefaultsFromConfig(config) {
                    return onConfigChange(createDynamicConfig(config, defaultValues, _self).cfg, function (details) {
                        var config = details.cfg;
                        _loggingLevelConsole = config[_DYN_LOGGING_LEVEL_CONSOL4 ];
                        _loggingLevelTelemetry = config.loggingLevelTelemetry;
                        _maxInternalMessageLimit = config.maxMessageLimit;
                        _enableDebug = config.enableDebug;
                    });
                }
                function _areInternalMessagesThrottled() {
                    return _messageCount >= _maxInternalMessageLimit;
                }
                function _debugExtMsg(name, data) {
                    var dbgExt = getDebugExt(config || {});
                    if (dbgExt && dbgExt[_DYN_DIAG_LOG ]) {
                        dbgExt[_DYN_DIAG_LOG ](name, data);
                    }
                }
            });
        }
        DiagnosticLogger.__ieDyn=1;
        return DiagnosticLogger;
    }());
    function _getLogger(logger) {
        return (logger || new DiagnosticLogger());
    }
    function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
        if (isUserAct === void 0) { isUserAct = false; }
        _getLogger(logger)[_DYN_THROW_INTERNAL ](severity, msgId, msg, properties, isUserAct);
    }

    function generateW3CId() {
        var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var oct = STR_EMPTY, tmp;
        for (var a = 0; a < 4; a++) {
            tmp = random32();
            oct +=
                hexValues[tmp & 0xF] +
                    hexValues[tmp >> 4 & 0xF] +
                    hexValues[tmp >> 8 & 0xF] +
                    hexValues[tmp >> 12 & 0xF] +
                    hexValues[tmp >> 16 & 0xF] +
                    hexValues[tmp >> 20 & 0xF] +
                    hexValues[tmp >> 24 & 0xF] +
                    hexValues[tmp >> 28 & 0xF];
        }
        var clockSequenceHi = hexValues[8 + (random32() & 0x03) | 0];
        return strSubstr(oct, 0, 8) + strSubstr(oct, 9, 4) + "4" + strSubstr(oct, 13, 3) + clockSequenceHi + strSubstr(oct, 16, 3) + strSubstr(oct, 19, 12);
    }

    var TRACE_PARENT_REGEX = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]{1,64})?$/i;
    var DEFAULT_VERSION = "00";
    var INVALID_VERSION = "ff";
    var INVALID_TRACE_ID = "00000000000000000000000000000000";
    var INVALID_SPAN_ID = "0000000000000000";
    var SAMPLED_FLAG = 0x01;
    function _isValid(value, len, invalidValue) {
        if (value && value[_DYN_LENGTH$1 ] === len && value !== invalidValue) {
            return !!value.match(/^[\da-f]*$/i);
        }
        return false;
    }
    function _formatValue(value, len, defValue) {
        if (_isValid(value, len)) {
            return value;
        }
        return defValue;
    }
    function _formatFlags(value) {
        if (isNaN(value) || value < 0 || value > 255) {
            value = 0x01;
        }
        var result = value.toString(16);
        while (result[_DYN_LENGTH$1 ] < 2) {
            result = "0" + result;
        }
        return result;
    }
    function createTraceParent(traceId, spanId, flags, version) {
        var _a;
        return _a = {},
            _a[_DYN_VERSION ] = _isValid(version, 2, INVALID_VERSION) ? version : DEFAULT_VERSION,
            _a[_DYN_TRACE_ID ] = isValidTraceId(traceId) ? traceId : generateW3CId(),
            _a[_DYN_SPAN_ID ] = isValidSpanId(spanId) ? spanId : strLeft(generateW3CId(), 16),
            _a.traceFlags = flags >= 0 && flags <= 0xFF ? flags : 1,
            _a;
    }
    function parseTraceParent(value, selectIdx) {
        var _a;
        if (!value) {
            return null;
        }
        if (isArray(value)) {
            value = value[0] || "";
        }
        if (!value || !isString(value) || value[_DYN_LENGTH$1 ] > 8192) {
            return null;
        }
        if (value.indexOf(",") !== -1) {
            var values = value[_DYN_SPLIT$1 ](",");
            value = values[selectIdx > 0 && values[_DYN_LENGTH$1 ] > selectIdx ? selectIdx : 0];
        }
        var match = TRACE_PARENT_REGEX.exec(strTrim(value));
        if (!match ||
            match[1] === INVALID_VERSION ||
            match[2] === INVALID_TRACE_ID ||
            match[3] === INVALID_SPAN_ID) {
            return null;
        }
        return _a = {
                version: (match[1] || STR_EMPTY)[_DYN_TO_LOWER_CASE$1 ](),
                traceId: (match[2] || STR_EMPTY)[_DYN_TO_LOWER_CASE$1 ](),
                spanId: (match[3] || STR_EMPTY)[_DYN_TO_LOWER_CASE$1 ]()
            },
            _a[_DYN_TRACE_FLAGS ] = parseInt(match[4], 16),
            _a;
    }
    function isValidTraceId(value) {
        return _isValid(value, 32, INVALID_TRACE_ID);
    }
    function isValidSpanId(value) {
        return _isValid(value, 16, INVALID_SPAN_ID);
    }
    function isValidTraceParent(value) {
        if (!value ||
            !_isValid(value[_DYN_VERSION ], 2, INVALID_VERSION) ||
            !_isValid(value[_DYN_TRACE_ID ], 32, INVALID_TRACE_ID) ||
            !_isValid(value[_DYN_SPAN_ID ], 16, INVALID_SPAN_ID) ||
            !_isValid(_formatFlags(value[_DYN_TRACE_FLAGS ]), 2)) {
            return false;
        }
        return true;
    }
    function isSampledFlag(value) {
        if (isValidTraceParent(value)) {
            return (value[_DYN_TRACE_FLAGS ] & SAMPLED_FLAG) === SAMPLED_FLAG;
        }
        return false;
    }
    function formatTraceParent(value) {
        if (value) {
            var flags = _formatFlags(value[_DYN_TRACE_FLAGS ]);
            if (!_isValid(flags, 2)) {
                flags = "01";
            }
            var version = value[_DYN_VERSION ] || DEFAULT_VERSION;
            if (version !== "00" && version !== "ff") {
                version = DEFAULT_VERSION;
            }
            return "".concat(version.toLowerCase(), "-").concat(_formatValue(value.traceId, 32, INVALID_TRACE_ID).toLowerCase(), "-").concat(_formatValue(value.spanId, 16, INVALID_SPAN_ID).toLowerCase(), "-").concat(flags.toLowerCase());
        }
        return "";
    }
    function findW3cTraceParent(selectIdx) {
        var name = "traceparent";
        var traceParent = parseTraceParent(findMetaTag(name), selectIdx);
        if (!traceParent) {
            traceParent = parseTraceParent(findNamedServerTiming(name), selectIdx);
        }
        return traceParent;
    }

    var strOnPrefix = "on";
    var strAttachEvent = "attachEvent";
    var strAddEventHelper = "addEventListener";
    var strDetachEvent = "detachEvent";
    var strRemoveEventListener = "removeEventListener";
    var strEvents = "events";
    createUniqueNamespace("aiEvtPageHide");
    createUniqueNamespace("aiEvtPageShow");
    var rRemoveEmptyNs = /\.[\.]+/g;
    var rRemoveTrailingEmptyNs = /[\.]+$/;
    var _guid = 1;
    var elmNodeData = createElmNodeData("events");
    var eventNamespace = /^([^.]*)(?:\.(.+)|)/;
    function _normalizeNamespace(name) {
        if (name && name[_DYN_REPLACE ]) {
            return name[_DYN_REPLACE ](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, STR_EMPTY);
        }
        return name;
    }
    function _getEvtNamespace(eventName, evtNamespace) {
        var _a;
        if (evtNamespace) {
            var theNamespace_1 = STR_EMPTY;
            if (isArray(evtNamespace)) {
                theNamespace_1 = STR_EMPTY;
                arrForEach(evtNamespace, function (name) {
                    name = _normalizeNamespace(name);
                    if (name) {
                        if (name[0] !== ".") {
                            name = "." + name;
                        }
                        theNamespace_1 += name;
                    }
                });
            }
            else {
                theNamespace_1 = _normalizeNamespace(evtNamespace);
            }
            if (theNamespace_1) {
                if (theNamespace_1[0] !== ".") {
                    theNamespace_1 = "." + theNamespace_1;
                }
                eventName = (eventName || STR_EMPTY) + theNamespace_1;
            }
        }
        var parsedEvent = (eventNamespace.exec(eventName || STR_EMPTY) || []);
        return _a = {},
            _a[_DYN_TYPE ] = parsedEvent[1],
            _a.ns = ((parsedEvent[2] || STR_EMPTY).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, STR_EMPTY)[_DYN_SPLIT$1 ](".").sort()).join("."),
            _a;
    }
    function _getRegisteredEvents(target, evtName, addDefault) {
        if (addDefault === void 0) { addDefault = true; }
        var aiEvts = elmNodeData.get(target, strEvents, {}, addDefault);
        var registeredEvents = aiEvts[evtName];
        if (!registeredEvents) {
            registeredEvents = aiEvts[evtName] = [];
        }
        return registeredEvents;
    }
    function _doDetach(obj, evtName, handlerRef, useCapture) {
        if (obj && evtName && evtName[_DYN_TYPE ]) {
            if (obj[strRemoveEventListener]) {
                obj[strRemoveEventListener](evtName[_DYN_TYPE ], handlerRef, useCapture);
            }
            else if (obj[strDetachEvent]) {
                obj[strDetachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
            }
        }
    }
    function _doAttach(obj, evtName, handlerRef, useCapture) {
        var result = false;
        if (obj && evtName && evtName[_DYN_TYPE ] && handlerRef) {
            if (obj[strAddEventHelper]) {
                obj[strAddEventHelper](evtName[_DYN_TYPE ], handlerRef, useCapture);
                result = true;
            }
            else if (obj[strAttachEvent]) {
                obj[strAttachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
                result = true;
            }
        }
        return result;
    }
    function _doUnregister(target, events, evtName, unRegFn) {
        var idx = events[_DYN_LENGTH$1 ];
        while (idx--) {
            var theEvent = events[idx];
            if (theEvent) {
                if (!evtName.ns || evtName.ns === theEvent.evtName.ns) {
                    if (!unRegFn || unRegFn(theEvent)) {
                        _doDetach(target, theEvent.evtName, theEvent[_DYN_HANDLER ], theEvent.capture);
                        events[_DYN_SPLICE ](idx, 1);
                    }
                }
            }
        }
    }
    function _unregisterEvents(target, evtName, unRegFn) {
        if (evtName[_DYN_TYPE ]) {
            _doUnregister(target, _getRegisteredEvents(target, evtName[_DYN_TYPE ]), evtName, unRegFn);
        }
        else {
            var eventCache = elmNodeData.get(target, strEvents, {});
            objForEachKey(eventCache, function (evtType, events) {
                _doUnregister(target, events, evtName, unRegFn);
            });
            if (objKeys(eventCache)[_DYN_LENGTH$1 ] === 0) {
                elmNodeData.kill(target, strEvents);
            }
        }
    }
    function mergeEvtNamespace(theNamespace, namespaces) {
        var newNamespaces;
        if (namespaces) {
            if (isArray(namespaces)) {
                newNamespaces = [theNamespace].concat(namespaces);
            }
            else {
                newNamespaces = [theNamespace, namespaces];
            }
            newNamespaces = (_getEvtNamespace("xx", newNamespaces).ns)[_DYN_SPLIT$1 ](".");
        }
        else {
            newNamespaces = theNamespace;
        }
        return newNamespaces;
    }
    function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
        var _a;
        if (useCapture === void 0) { useCapture = false; }
        var result = false;
        if (target) {
            try {
                var evtName = _getEvtNamespace(eventName, evtNamespace);
                result = _doAttach(target, evtName, handlerRef, useCapture);
                if (result && elmNodeData.accept(target)) {
                    var registeredEvent = (_a = {
                            guid: _guid++,
                            evtName: evtName
                        },
                        _a[_DYN_HANDLER ] = handlerRef,
                        _a.capture = useCapture,
                        _a);
                    _getRegisteredEvents(target, evtName.type)[_DYN_PUSH$1 ](registeredEvent);
                }
            }
            catch (e) {
            }
        }
        return result;
    }
    function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        if (target) {
            try {
                var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
                var found_1 = false;
                _unregisterEvents(target, evtName_1, function (regEvent) {
                    if ((evtName_1.ns && !handlerRef) || regEvent[_DYN_HANDLER ] === handlerRef) {
                        found_1 = true;
                        return true;
                    }
                    return false;
                });
                if (!found_1) {
                    _doDetach(target, evtName_1, handlerRef, useCapture);
                }
            }
            catch (e) {
            }
        }
    }

    var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var SampleRate = "sampleRate";
    var ProcessLegacy = "ProcessLegacy";
    var HttpMethod = "http.method";
    var DEFAULT_BREEZE_ENDPOINT = "https://dc.services.visualstudio.com";
    var DEFAULT_BREEZE_PATH = "/v2/track";
    var strNotSpecified = "not_specified";
    var strIkey = "iKey";

    var RequestHeaders = createValueMap({
        requestContextHeader: [0 , "Request-Context"],
        requestContextTargetKey: [1 , "appId"],
        requestContextAppIdFormat: [2 , "appId=cid-v1:"],
        requestIdHeader: [3 , "Request-Id"],
        traceParentHeader: [4 , "traceparent"],
        traceStateHeader: [5 , "tracestate"],
        sdkContextHeader: [6 , "Sdk-Context"],
        sdkContextHeaderAppIdRequest: [7 , "appId"],
        requestContextHeaderLowerCase: [8 , "request-context"]
    });

    var _DYN_SPLIT = "split";
    var _DYN_LENGTH = "length";
    var _DYN_TO_LOWER_CASE = "toLowerCase";
    var _DYN_INGESTIONENDPOINT = "ingestionendpoint";
    var _DYN_TO_STRING = "toString";
    var _DYN_PUSH = "push";
    var _DYN_REMOVE_ITEM = "removeItem";
    var _DYN_NAME = "name";
    var _DYN_MESSAGE = "message";
    var _DYN_COUNT = "count";
    var _DYN_PRE_TRIGGER_DATE = "preTriggerDate";
    var _DYN_DISABLED = "disabled";
    var _DYN_INTERVAL = "interval";
    var _DYN_DAYS_OF_MONTH = "daysOfMonth";
    var _DYN_DATE = "date";
    var _DYN_GET_UTCDATE = "getUTCDate";
    var _DYN_STRINGIFY = "stringify";
    var _DYN_PATHNAME = "pathname";
    var _DYN_CORRELATION_HEADER_E0 = "correlationHeaderExcludePatterns";
    var _DYN_EXTENSION_CONFIG = "extensionConfig";
    var _DYN_EXCEPTIONS = "exceptions";
    var _DYN_PARSED_STACK = "parsedStack";
    var _DYN_PROPERTIES = "properties";
    var _DYN_MEASUREMENTS = "measurements";
    var _DYN_SIZE_IN_BYTES = "sizeInBytes";
    var _DYN_TYPE_NAME = "typeName";
    var _DYN_SEVERITY_LEVEL = "severityLevel";
    var _DYN_PROBLEM_GROUP = "problemGroup";
    var _DYN_IS_MANUAL = "isManual";
    var _DYN__CREATE_FROM_INTERFA1 = "CreateFromInterface";
    var _DYN_ASSEMBLY = "assembly";
    var _DYN_FILE_NAME = "fileName";
    var _DYN_HAS_FULL_STACK = "hasFullStack";
    var _DYN_LEVEL = "level";
    var _DYN_METHOD = "method";
    var _DYN_LINE = "line";
    var _DYN_DURATION = "duration";
    var _DYN_RECEIVED_RESPONSE = "receivedResponse";

    function dataSanitizeKeyAndAddUniqueness(logger, key, map) {
        var origLength = key[_DYN_LENGTH ];
        var field = dataSanitizeKey(logger, key);
        if (field[_DYN_LENGTH ] !== origLength) {
            var i = 0;
            var uniqueField = field;
            while (map[uniqueField] !== undefined) {
                i++;
                uniqueField = strSubstring(field, 0, 150  - 3) + dsPadNumber(i);
            }
            field = uniqueField;
        }
        return field;
    }
    function dataSanitizeKey(logger, name) {
        var nameTrunc;
        if (name) {
            name = strTrim(asString(name));
            if (name[_DYN_LENGTH ] > 150 ) {
                nameTrunc = strSubstring(name, 0, 150 );
                _throwInternal(logger, 2 , 57 , "name is too long.  It has been truncated to " + 150  + " characters.", { name: name }, true);
            }
        }
        return nameTrunc || name;
    }
    function dataSanitizeString(logger, value, maxLength) {
        if (maxLength === void 0) { maxLength = 1024 ; }
        var valueTrunc;
        if (value) {
            maxLength = maxLength ? maxLength : 1024 ;
            value = strTrim(asString(value));
            if (value[_DYN_LENGTH ] > maxLength) {
                valueTrunc = strSubstring(value, 0, maxLength);
                _throwInternal(logger, 2 , 61 , "string value is too long. It has been truncated to " + maxLength + " characters.", { value: value }, true);
            }
        }
        return valueTrunc || value;
    }
    function dataSanitizeUrl(logger, url) {
        return dataSanitizeInput(logger, url, 2048 , 66 );
    }
    function dataSanitizeMessage(logger, message) {
        var messageTrunc;
        if (message) {
            if (message[_DYN_LENGTH ] > 32768 ) {
                messageTrunc = strSubstring(message, 0, 32768 );
                _throwInternal(logger, 2 , 56 , "message is too long, it has been truncated to " + 32768  + " characters.", { message: message }, true);
            }
        }
        return messageTrunc || message;
    }
    function dataSanitizeException(logger, exception) {
        var exceptionTrunc;
        if (exception) {
            var value = "" + exception;
            if (value[_DYN_LENGTH ] > 32768 ) {
                exceptionTrunc = strSubstring(value, 0, 32768 );
                _throwInternal(logger, 2 , 52 , "exception is too long, it has been truncated to " + 32768  + " characters.", { exception: exception }, true);
            }
        }
        return exceptionTrunc || exception;
    }
    function dataSanitizeProperties(logger, properties) {
        if (properties) {
            var tempProps_1 = {};
            objForEachKey(properties, function (prop, value) {
                if (isObject(value) && hasJSON()) {
                    try {
                        value = getJSON()[_DYN_STRINGIFY ](value);
                    }
                    catch (e) {
                        _throwInternal(logger, 2 , 49 , "custom property is not valid", { exception: e }, true);
                    }
                }
                value = dataSanitizeString(logger, value, 8192 );
                prop = dataSanitizeKeyAndAddUniqueness(logger, prop, tempProps_1);
                tempProps_1[prop] = value;
            });
            properties = tempProps_1;
        }
        return properties;
    }
    function dataSanitizeMeasurements(logger, measurements) {
        if (measurements) {
            var tempMeasurements_1 = {};
            objForEachKey(measurements, function (measure, value) {
                measure = dataSanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements_1);
                tempMeasurements_1[measure] = value;
            });
            measurements = tempMeasurements_1;
        }
        return measurements;
    }
    function dataSanitizeId(logger, id) {
        return id ? dataSanitizeInput(logger, id, 128 , 69 )[_DYN_TO_STRING ]() : id;
    }
    function dataSanitizeInput(logger, input, maxLength, _msgId) {
        var inputTrunc;
        if (input) {
            input = strTrim(asString(input));
            if (input[_DYN_LENGTH ] > maxLength) {
                inputTrunc = strSubstring(input, 0, maxLength);
                _throwInternal(logger, 2 , _msgId, "input is too long, it has been truncated to " + maxLength + " characters.", { data: input }, true);
            }
        }
        return inputTrunc || input;
    }
    function dsPadNumber(num) {
        var s = "00" + num;
        return strSubstr(s, s[_DYN_LENGTH ] - 3);
    }

    var _document = getDocument() || {};
    var _htmlAnchorIdx = 0;
    var _htmlAnchorElement = [null, null, null, null, null];
    function urlParseUrl(url) {
        var anchorIdx = _htmlAnchorIdx;
        var anchorCache = _htmlAnchorElement;
        var tempAnchor = anchorCache[anchorIdx];
        if (!_document.createElement) {
            tempAnchor = { host: urlParseHost(url, true) };
        }
        else if (!anchorCache[anchorIdx]) {
            tempAnchor = anchorCache[anchorIdx] = _document.createElement("a");
        }
        tempAnchor.href = url;
        anchorIdx++;
        if (anchorIdx >= anchorCache[_DYN_LENGTH ]) {
            anchorIdx = 0;
        }
        _htmlAnchorIdx = anchorIdx;
        return tempAnchor;
    }
    function urlGetAbsoluteUrl(url) {
        var result;
        var a = urlParseUrl(url);
        if (a) {
            result = a.href;
        }
        return result;
    }
    function urlGetPathName(url) {
        var result;
        var a = urlParseUrl(url);
        if (a) {
            result = a[_DYN_PATHNAME ];
        }
        return result;
    }
    function urlGetCompleteUrl(method, absoluteUrl) {
        if (method) {
            return method.toUpperCase() + " " + absoluteUrl;
        }
        return absoluteUrl;
    }
    function urlParseHost(url, inclPort) {
        var fullHost = urlParseFullHost(url, inclPort) || "";
        if (fullHost) {
            var match = fullHost.match(/(www\d{0,5}\.)?([^\/:]{1,256})(:\d{1,20})?/i);
            if (match != null && match[_DYN_LENGTH ] > 3 && isString(match[2]) && match[2][_DYN_LENGTH ] > 0) {
                return match[2] + (match[3] || "");
            }
        }
        return fullHost;
    }
    function urlParseFullHost(url, inclPort) {
        var result = null;
        if (url) {
            var match = url.match(/(\w{1,150}):\/\/([^\/:]{1,256})(:\d{1,20})?/i);
            if (match != null && match[_DYN_LENGTH ] > 2 && isString(match[2]) && match[2][_DYN_LENGTH ] > 0) {
                result = match[2] || "";
                if (inclPort && match[_DYN_LENGTH ] > 2) {
                    var protocol = (match[1] || "")[_DYN_TO_LOWER_CASE ]();
                    var port = match[3] || "";
                    if (protocol === "http" && port === ":80") {
                        port = "";
                    }
                    else if (protocol === "https" && port === ":443") {
                        port = "";
                    }
                    result += port;
                }
            }
        }
        return result;
    }

    var _internalEndpoints = [
        DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH,
        "https://breeze.aimon.applicationinsights.io" + DEFAULT_BREEZE_PATH,
        "https://dc-int.services.visualstudio.com" + DEFAULT_BREEZE_PATH
    ];
    var _correlationIdPrefix = "cid-v1:";
    function isInternalApplicationInsightsEndpoint(endpointUrl) {
        return arrIndexOf(_internalEndpoints, endpointUrl[_DYN_TO_LOWER_CASE ]()) !== -1;
    }
    function correlationIdSetPrefix(prefix) {
        _correlationIdPrefix = prefix;
    }
    function correlationIdGetPrefix() {
        return _correlationIdPrefix;
    }
    function correlationIdCanIncludeCorrelationHeader(config, requestUrl, currentHost) {
        if (!requestUrl || (config && config.disableCorrelationHeaders)) {
            return false;
        }
        if (config && config[_DYN_CORRELATION_HEADER_E0 ]) {
            for (var i = 0; i < config.correlationHeaderExcludePatterns[_DYN_LENGTH ]; i++) {
                if (config[_DYN_CORRELATION_HEADER_E0 ][i].test(requestUrl)) {
                    return false;
                }
            }
        }
        var requestHost = urlParseUrl(requestUrl).host[_DYN_TO_LOWER_CASE ]();
        if (requestHost && (strIndexOf(requestHost, ":443") !== -1 || strIndexOf(requestHost, ":80") !== -1)) {
            requestHost = (urlParseFullHost(requestUrl, true) || "")[_DYN_TO_LOWER_CASE ]();
        }
        if ((!config || !config.enableCorsCorrelation) && (requestHost && requestHost !== currentHost)) {
            return false;
        }
        var includedDomains = config && config.correlationHeaderDomains;
        if (includedDomains) {
            var matchExists_1;
            arrForEach(includedDomains, function (domain) {
                var regex = new RegExp(domain.toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"));
                matchExists_1 = matchExists_1 || regex.test(requestHost);
            });
            if (!matchExists_1) {
                return false;
            }
        }
        var excludedDomains = config && config.correlationHeaderExcludedDomains;
        if (!excludedDomains || excludedDomains[_DYN_LENGTH ] === 0) {
            return true;
        }
        for (var i = 0; i < excludedDomains[_DYN_LENGTH ]; i++) {
            var regex = new RegExp(excludedDomains[i].toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"));
            if (regex.test(requestHost)) {
                return false;
            }
        }
        return requestHost && requestHost[_DYN_LENGTH ] > 0;
    }
    function correlationIdGetCorrelationContext(responseHeader) {
        if (responseHeader) {
            var correlationId = correlationIdGetCorrelationContextValue(responseHeader, RequestHeaders[1 ]);
            if (correlationId && correlationId !== _correlationIdPrefix) {
                return correlationId;
            }
        }
    }
    function correlationIdGetCorrelationContextValue(responseHeader, key) {
        if (responseHeader) {
            var keyValues = responseHeader[_DYN_SPLIT ](",");
            for (var i = 0; i < keyValues[_DYN_LENGTH ]; ++i) {
                var keyValue = keyValues[i][_DYN_SPLIT ]("=");
                if (keyValue[_DYN_LENGTH ] === 2 && keyValue[0] === key) {
                    return keyValue[1];
                }
            }
        }
    }
    function AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName) {
        var target, name = commandName, data = commandName;
        if (absoluteUrl && absoluteUrl[_DYN_LENGTH ] > 0) {
            var parsedUrl = urlParseUrl(absoluteUrl);
            target = parsedUrl.host;
            if (!name) {
                if (parsedUrl[_DYN_PATHNAME ] != null) {
                    var pathName = (parsedUrl.pathname[_DYN_LENGTH ] === 0) ? "/" : parsedUrl[_DYN_PATHNAME ];
                    if (pathName.charAt(0) !== "/") {
                        pathName = "/" + pathName;
                    }
                    data = parsedUrl[_DYN_PATHNAME ];
                    name = dataSanitizeString(logger, method ? method + " " + pathName : pathName);
                }
                else {
                    name = dataSanitizeString(logger, absoluteUrl);
                }
            }
        }
        else {
            target = commandName;
            name = commandName;
        }
        return {
            target: target,
            name: name,
            data: data
        };
    }
    function dateTimeUtilsNow() {
        var perf = getPerformance();
        if (perf && perf.now && perf.timing) {
            var now = perf.now() + perf.timing.navigationStart;
            if (now > 0) {
                return now;
            }
        }
        return utcNow();
    }
    function dateTimeUtilsDuration(start, end) {
        var result = null;
        if (start !== 0 && end !== 0 && !isNullOrUndefined(start) && !isNullOrUndefined(end)) {
            result = end - start;
        }
        return result;
    }
    function createDistributedTraceContextFromTrace(telemetryTrace, parentCtx) {
        var trace = telemetryTrace || {};
        return {
            getName: function () {
                return trace[_DYN_NAME ];
            },
            setName: function (newValue) {
                parentCtx && parentCtx.setName(newValue);
                trace[_DYN_NAME ] = newValue;
            },
            getTraceId: function () {
                return trace.traceID;
            },
            setTraceId: function (newValue) {
                parentCtx && parentCtx.setTraceId(newValue);
                if (isValidTraceId(newValue)) {
                    trace.traceID = newValue;
                }
            },
            getSpanId: function () {
                return trace.parentID;
            },
            setSpanId: function (newValue) {
                parentCtx && parentCtx.setSpanId(newValue);
                if (isValidSpanId(newValue)) {
                    trace.parentID = newValue;
                }
            },
            getTraceFlags: function () {
                return trace.traceFlags;
            },
            setTraceFlags: function (newTraceFlags) {
                parentCtx && parentCtx.setTraceFlags(newTraceFlags);
                trace.traceFlags = newTraceFlags;
            }
        };
    }

    var StorageType = createEnumStyle({
        LocalStorage: 0 ,
        SessionStorage: 1
    });
    var DistributedTracingModes = createEnumStyle({
        AI: 0 ,
        AI_AND_W3C: 1 ,
        W3C: 2
    });
    var EventPersistence = createEnumStyle({
        Normal: 1 ,
        Critical: 2
    });

    var _canUseLocalStorage = undefined;
    var _canUseSessionStorage = undefined;
    var _storagePrefix = "";
    function _getLocalStorageObject() {
        if (utlCanUseLocalStorage()) {
            return _getVerifiedStorageObject(StorageType.LocalStorage);
        }
        return null;
    }
    function _getVerifiedStorageObject(storageType) {
        try {
            if (isNullOrUndefined(getGlobal())) {
                return null;
            }
            var uid = (new Date)[_DYN_TO_STRING ]();
            var storage = getInst(storageType === StorageType.LocalStorage ? "localStorage" : "sessionStorage");
            var name_1 = _storagePrefix + uid;
            storage.setItem(name_1, uid);
            var fail = storage.getItem(name_1) !== uid;
            storage[_DYN_REMOVE_ITEM ](name_1);
            if (!fail) {
                return storage;
            }
        }
        catch (exception) {
        }
        return null;
    }
    function _getSessionStorageObject() {
        if (utlCanUseSessionStorage()) {
            return _getVerifiedStorageObject(StorageType.SessionStorage);
        }
        return null;
    }
    function utlDisableStorage() {
        _canUseLocalStorage = false;
        _canUseSessionStorage = false;
    }
    function utlSetStoragePrefix(storagePrefix) {
        _storagePrefix = storagePrefix || "";
    }
    function utlEnableStorage() {
        _canUseLocalStorage = utlCanUseLocalStorage(true);
        _canUseSessionStorage = utlCanUseSessionStorage(true);
    }
    function utlCanUseLocalStorage(reset) {
        if (reset || _canUseLocalStorage === undefined) {
            _canUseLocalStorage = !!_getVerifiedStorageObject(StorageType.LocalStorage);
        }
        return _canUseLocalStorage;
    }
    function utlGetLocalStorage(logger, name) {
        var storage = _getLocalStorageObject();
        if (storage !== null) {
            try {
                return storage.getItem(name);
            }
            catch (e) {
                _canUseLocalStorage = false;
                _throwInternal(logger, 2 , 1 , "Browser failed read of local storage. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return null;
    }
    function utlSetLocalStorage(logger, name, data) {
        var storage = _getLocalStorageObject();
        if (storage !== null) {
            try {
                storage.setItem(name, data);
                return true;
            }
            catch (e) {
                _canUseLocalStorage = false;
                _throwInternal(logger, 2 , 3 , "Browser failed write to local storage. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return false;
    }
    function utlRemoveStorage(logger, name) {
        var storage = _getLocalStorageObject();
        if (storage !== null) {
            try {
                storage[_DYN_REMOVE_ITEM ](name);
                return true;
            }
            catch (e) {
                _canUseLocalStorage = false;
                _throwInternal(logger, 2 , 5 , "Browser failed removal of local storage item. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return false;
    }
    function utlCanUseSessionStorage(reset) {
        if (reset || _canUseSessionStorage === undefined) {
            _canUseSessionStorage = !!_getVerifiedStorageObject(StorageType.SessionStorage);
        }
        return _canUseSessionStorage;
    }
    function utlGetSessionStorageKeys() {
        var keys = [];
        if (utlCanUseSessionStorage()) {
            objForEachKey(getInst("sessionStorage"), function (key) {
                keys[_DYN_PUSH ](key);
            });
        }
        return keys;
    }
    function utlGetSessionStorage(logger, name) {
        var storage = _getSessionStorageObject();
        if (storage !== null) {
            try {
                return storage.getItem(name);
            }
            catch (e) {
                _canUseSessionStorage = false;
                _throwInternal(logger, 2 , 2 , "Browser failed read of session storage. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return null;
    }
    function utlSetSessionStorage(logger, name, data) {
        var storage = _getSessionStorageObject();
        if (storage !== null) {
            try {
                storage.setItem(name, data);
                return true;
            }
            catch (e) {
                _canUseSessionStorage = false;
                _throwInternal(logger, 2 , 4 , "Browser failed write to session storage. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return false;
    }
    function utlRemoveSessionStorage(logger, name) {
        var storage = _getSessionStorageObject();
        if (storage !== null) {
            try {
                storage[_DYN_REMOVE_ITEM ](name);
                return true;
            }
            catch (e) {
                _canUseSessionStorage = false;
                _throwInternal(logger, 2 , 6 , "Browser failed removal of session storage item. " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return false;
    }

    var THROTTLE_STORAGE_PREFIX = "appInsightsThrottle";
    var ThrottleMgr = /** @class */ (function () {
        function ThrottleMgr(core, namePrefix) {
            var _self = this;
            var _canUseLocalStorage;
            var _logger;
            var _config;
            var _localStorageObj;
            var _isTriggered;
            var _namePrefix;
            var _queue;
            var _isReady = false;
            var _isSpecificDaysGiven = false;
            _initConfig();
            _self["_getDbgPlgTargets"] = function () {
                return [_queue];
            };
            _self.getConfig = function () {
                return _config;
            };
            _self.canThrottle = function (msgId) {
                var localObj = _getLocalStorageObjByKey(msgId);
                var cfg = _getCfgByKey(msgId);
                return _canThrottle(cfg, _canUseLocalStorage, localObj);
            };
            _self.isTriggered = function (msgId) {
                return _isTrigger(msgId);
            };
            _self.isReady = function () {
                return _isReady;
            };
            _self.flush = function (msgId) {
                try {
                    var queue = _getQueueByKey(msgId);
                    if (queue && queue[_DYN_LENGTH ] > 0) {
                        var items = queue.slice(0);
                        _queue[msgId] = [];
                        arrForEach(items, function (item) {
                            _flushMessage(item.msgID, item[_DYN_MESSAGE ], item.severity, false);
                        });
                        return true;
                    }
                }
                catch (err) {
                }
                return false;
            };
            _self.flushAll = function () {
                try {
                    if (_queue) {
                        var result_1 = true;
                        objForEachKey(_queue, function (key) {
                            var isFlushed = _self.flush(parseInt(key));
                            result_1 = result_1 && isFlushed;
                        });
                        return result_1;
                    }
                }
                catch (err) {
                }
                return false;
            };
            _self.onReadyState = function (isReady, flushAll) {
                if (flushAll === void 0) { flushAll = true; }
                _isReady = isNullOrUndefined(isReady) ? true : isReady;
                if (_isReady && flushAll) {
                    return _self.flushAll();
                }
                return null;
            };
            _self.sendMessage = function (msgID, message, severity) {
                return _flushMessage(msgID, message, severity, true);
            };
            function _flushMessage(msgID, message, severity, saveUnsentMsg) {
                if (_isReady) {
                    var isSampledIn = _canSampledIn(msgID);
                    if (!isSampledIn) {
                        return;
                    }
                    var cfg = _getCfgByKey(msgID);
                    var localStorageObj = _getLocalStorageObjByKey(msgID);
                    var canThrottle = _canThrottle(cfg, _canUseLocalStorage, localStorageObj);
                    var throttled = false;
                    var number = 0;
                    var isTriggered = _isTrigger(msgID);
                    try {
                        if (canThrottle && !isTriggered) {
                            number = Math.min(cfg.limit.maxSendNumber, localStorageObj[_DYN_COUNT ] + 1);
                            localStorageObj[_DYN_COUNT ] = 0;
                            throttled = true;
                            _isTriggered[msgID] = true;
                            localStorageObj[_DYN_PRE_TRIGGER_DATE ] = new Date();
                        }
                        else {
                            _isTriggered[msgID] = canThrottle;
                            localStorageObj[_DYN_COUNT ] += 1;
                        }
                        var localStorageName = _getLocalStorageName(msgID);
                        _resetLocalStorage(_logger, localStorageName, localStorageObj);
                        for (var i = 0; i < number; i++) {
                            _sendMessage(msgID, _logger, message, severity);
                        }
                    }
                    catch (e) {
                    }
                    return {
                        isThrottled: throttled,
                        throttleNum: number
                    };
                }
                else {
                    if (!!saveUnsentMsg) {
                        var queue = _getQueueByKey(msgID);
                        queue[_DYN_PUSH ]({
                            msgID: msgID,
                            message: message,
                            severity: severity
                        });
                    }
                }
                return null;
            }
            function _initConfig() {
                _logger = safeGetLogger(core);
                _isTriggered = {};
                _localStorageObj = {};
                _queue = {};
                _config = {};
                _setCfgByKey(109 );
                _namePrefix = isNotNullOrUndefined(namePrefix) ? namePrefix : "";
                core.addUnloadHook(onConfigChange(core.config, function (details) {
                    var coreConfig = details.cfg;
                    _canUseLocalStorage = utlCanUseLocalStorage();
                    var configMgr = coreConfig.throttleMgrCfg || {};
                    objForEachKey(configMgr, function (key, cfg) {
                        _setCfgByKey(parseInt(key), cfg);
                    });
                }));
            }
            function _getCfgByKey(msgID) {
                return _config[msgID] || _config[109 ];
            }
            function _setCfgByKey(msgID, config) {
                var _a, _b;
                try {
                    var cfg = config || {};
                    var curCfg = {};
                    curCfg[_DYN_DISABLED ] = !!cfg[_DYN_DISABLED ];
                    var configInterval = cfg[_DYN_INTERVAL ] || {};
                    _isSpecificDaysGiven = (configInterval === null || configInterval === void 0 ? void 0 : configInterval.daysOfMonth) && (configInterval === null || configInterval === void 0 ? void 0 : configInterval.daysOfMonth[_DYN_LENGTH ]) > 0;
                    curCfg[_DYN_INTERVAL ] = _getIntervalConfig(configInterval);
                    var limit = {
                        samplingRate: ((_a = cfg.limit) === null || _a === void 0 ? void 0 : _a.samplingRate) || 100,
                        maxSendNumber: ((_b = cfg.limit) === null || _b === void 0 ? void 0 : _b.maxSendNumber) || 1
                    };
                    curCfg.limit = limit;
                    _config[msgID] = curCfg;
                }
                catch (e) {
                }
            }
            function _getIntervalConfig(interval) {
                interval = interval || {};
                var monthInterval = interval === null || interval === void 0 ? void 0 : interval.monthInterval;
                var dayInterval = interval === null || interval === void 0 ? void 0 : interval.dayInterval;
                if (isNullOrUndefined(monthInterval) && isNullOrUndefined(dayInterval)) {
                    interval.monthInterval = 3;
                    if (!_isSpecificDaysGiven) {
                        interval[_DYN_DAYS_OF_MONTH ] = [28];
                        _isSpecificDaysGiven = true;
                    }
                }
                interval = {
                    monthInterval: interval === null || interval === void 0 ? void 0 : interval.monthInterval,
                    dayInterval: interval === null || interval === void 0 ? void 0 : interval.dayInterval,
                    daysOfMonth: interval === null || interval === void 0 ? void 0 : interval.daysOfMonth
                };
                return interval;
            }
            function _canThrottle(config, canUseLocalStorage, localStorageObj) {
                if (config && !config[_DYN_DISABLED ] && canUseLocalStorage && isNotNullOrUndefined(localStorageObj)) {
                    var curDate = _getThrottleDate();
                    var date = localStorageObj[_DYN_DATE ];
                    var interval = config[_DYN_INTERVAL ];
                    var monthCheck = 1;
                    if (interval === null || interval === void 0 ? void 0 : interval.monthInterval) {
                        var monthExpand = (curDate.getUTCFullYear() - date.getUTCFullYear()) * 12 + curDate.getUTCMonth() - date.getUTCMonth();
                        monthCheck = _checkInterval(interval.monthInterval, 0, monthExpand);
                    }
                    var dayCheck = 1;
                    if (_isSpecificDaysGiven) {
                        dayCheck = arrIndexOf(interval[_DYN_DAYS_OF_MONTH ], curDate[_DYN_GET_UTCDATE ]());
                    }
                    else if (interval === null || interval === void 0 ? void 0 : interval.dayInterval) {
                        var daySpan = Math.floor((curDate.getTime() - date.getTime()) / 86400000);
                        dayCheck = _checkInterval(interval.dayInterval, 0, daySpan);
                    }
                    return monthCheck >= 0 && dayCheck >= 0;
                }
                return false;
            }
            function _getLocalStorageName(msgKey, prefix) {
                var fix = isNotNullOrUndefined(prefix) ? prefix : "";
                if (msgKey) {
                    return THROTTLE_STORAGE_PREFIX + fix + "-" + msgKey;
                }
                return null;
            }
            function _isTriggeredOnCurDate(preTriggerDate) {
                try {
                    if (preTriggerDate) {
                        var curDate = new Date();
                        return preTriggerDate.getUTCFullYear() === curDate.getUTCFullYear() &&
                            preTriggerDate.getUTCMonth() === curDate.getUTCMonth() &&
                            preTriggerDate[_DYN_GET_UTCDATE ]() === curDate[_DYN_GET_UTCDATE ]();
                    }
                }
                catch (e) {
                }
                return false;
            }
            function _getLocalStorageObj(value, logger, storageName) {
                try {
                    var storageObj = {
                        date: _getThrottleDate(),
                        count: 0
                    };
                    if (value) {
                        var obj = JSON.parse(value);
                        var curObj = {
                            date: _getThrottleDate(obj[_DYN_DATE ]) || storageObj[_DYN_DATE ],
                            count: obj[_DYN_COUNT ] || storageObj[_DYN_COUNT ],
                            preTriggerDate: obj.preTriggerDate ? _getThrottleDate(obj[_DYN_PRE_TRIGGER_DATE ]) : undefined
                        };
                        return curObj;
                    }
                    else {
                        _resetLocalStorage(logger, storageName, storageObj);
                        return storageObj;
                    }
                }
                catch (e) {
                }
                return null;
            }
            function _getThrottleDate(dateStr) {
                try {
                    if (dateStr) {
                        var date = new Date(dateStr);
                        if (!isNaN(date.getDate())) {
                            return date;
                        }
                    }
                    else {
                        return new Date();
                    }
                }
                catch (e) {
                }
                return null;
            }
            function _resetLocalStorage(logger, storageName, obj) {
                try {
                    return utlSetLocalStorage(logger, storageName, strTrim(JSON[_DYN_STRINGIFY ](obj)));
                }
                catch (e) {
                }
                return false;
            }
            function _checkInterval(interval, start, current) {
                if (interval <= 0) {
                    return 1;
                }
                return (current >= start) && (current - start) % interval == 0 ? Math.floor((current - start) / interval) + 1 : -1;
            }
            function _sendMessage(msgID, logger, message, severity) {
                _throwInternal(logger, severity || 1 , msgID, message);
            }
            function _canSampledIn(msgID) {
                try {
                    var cfg = _getCfgByKey(msgID);
                    return randomValue(1000000) <= cfg.limit.samplingRate;
                }
                catch (e) {
                }
                return false;
            }
            function _getLocalStorageObjByKey(key) {
                try {
                    var curObj = _localStorageObj[key];
                    if (!curObj) {
                        var localStorageName = _getLocalStorageName(key, _namePrefix);
                        curObj = _getLocalStorageObj(utlGetLocalStorage(_logger, localStorageName), _logger, localStorageName);
                        _localStorageObj[key] = curObj;
                    }
                    return _localStorageObj[key];
                }
                catch (e) {
                }
                return null;
            }
            function _isTrigger(key) {
                var isTrigger = _isTriggered[key];
                if (isNullOrUndefined(isTrigger)) {
                    isTrigger = false;
                    var localStorageObj = _getLocalStorageObjByKey(key);
                    if (localStorageObj) {
                        isTrigger = _isTriggeredOnCurDate(localStorageObj[_DYN_PRE_TRIGGER_DATE ]);
                    }
                    _isTriggered[key] = isTrigger;
                }
                return _isTriggered[key];
            }
            function _getQueueByKey(key) {
                _queue = _queue || {};
                if (isNullOrUndefined(_queue[key])) {
                    _queue[key] = [];
                }
                return _queue[key];
            }
        }
        return ThrottleMgr;
    }());

    var _FIELDS_SEPARATOR = ";";
    var _FIELD_KEY_VALUE_SEPARATOR = "=";
    function parseConnectionString(connectionString) {
        if (!connectionString) {
            return {};
        }
        var kvPairs = connectionString[_DYN_SPLIT ](_FIELDS_SEPARATOR);
        var result = arrReduce(kvPairs, function (fields, kv) {
            var kvParts = kv[_DYN_SPLIT ](_FIELD_KEY_VALUE_SEPARATOR);
            if (kvParts[_DYN_LENGTH ] === 2) {
                var key = kvParts[0][_DYN_TO_LOWER_CASE ]();
                var value = kvParts[1];
                fields[key] = value;
            }
            return fields;
        }, {});
        if (objKeys(result)[_DYN_LENGTH ] > 0) {
            if (result.endpointsuffix) {
                var locationPrefix = result.location ? result.location + "." : "";
                result[_DYN_INGESTIONENDPOINT ] = result[_DYN_INGESTIONENDPOINT ] || ("https://" + locationPrefix + "dc." + result.endpointsuffix);
            }
            result[_DYN_INGESTIONENDPOINT ] = result[_DYN_INGESTIONENDPOINT ] || DEFAULT_BREEZE_ENDPOINT;
            if (strEndsWith(result[_DYN_INGESTIONENDPOINT ], "/")) {
                result[_DYN_INGESTIONENDPOINT ] = result[_DYN_INGESTIONENDPOINT ].slice(0, -1);
            }
        }
        return result;
    }
    var ConnectionStringParser = {
        parse: parseConnectionString
    };

    var Envelope = /** @class */ (function () {
        function Envelope(logger, data, name) {
            var _this = this;
            var _self = this;
            _self.ver = 1;
            _self.sampleRate = 100.0;
            _self.tags = {};
            _self[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            _self.data = data;
            _self.time = toISOString(new Date());
            _self.aiDataContract = {
                time: 1 ,
                iKey: 1 ,
                name: 1 ,
                sampleRate: function () {
                    return (_this.sampleRate === 100) ? 4  : 1 ;
                },
                tags: 1 ,
                data: 1
            };
        }
        return Envelope;
    }());

    var Event$1 = /** @class */ (function () {
        function Event(logger, name, properties, measurements) {
            this.aiDataContract = {
                ver: 1 ,
                name: 1 ,
                properties: 0 ,
                measurements: 0
            };
            var _self = this;
            _self.ver = 2;
            _self[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        Event.envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
        Event.dataType = "EventData";
        return Event;
    }());

    var NoMethod = "<no_method>";
    var strError = "error";
    var strStack = "stack";
    var strStackDetails = "stackDetails";
    var strErrorSrc = "errorSrc";
    var strMessage = "message";
    var strDescription = "description";
    function _stringify(value, convertToString) {
        var result = value;
        if (result && !isString(result)) {
            if (JSON && JSON[_DYN_STRINGIFY ]) {
                result = JSON[_DYN_STRINGIFY ](value);
                if (convertToString && (!result || result === "{}")) {
                    if (isFunction(value[_DYN_TO_STRING ])) {
                        result = value[_DYN_TO_STRING ]();
                    }
                    else {
                        result = "" + value;
                    }
                }
            }
            else {
                result = "" + value + " - (Missing JSON.stringify)";
            }
        }
        return result || "";
    }
    function _formatMessage(theEvent, errorType) {
        var evtMessage = theEvent;
        if (theEvent) {
            if (evtMessage && !isString(evtMessage)) {
                evtMessage = theEvent[strMessage] || theEvent[strDescription] || evtMessage;
            }
            if (evtMessage && !isString(evtMessage)) {
                evtMessage = _stringify(evtMessage, true);
            }
            if (theEvent["filename"]) {
                evtMessage = evtMessage + " @" + (theEvent["filename"] || "") + ":" + (theEvent["lineno"] || "?") + ":" + (theEvent["colno"] || "?");
            }
        }
        if (errorType && errorType !== "String" && errorType !== "Object" && errorType !== "Error" && strIndexOf(evtMessage || "", errorType) === -1) {
            evtMessage = errorType + ": " + evtMessage;
        }
        return evtMessage || "";
    }
    function _isExceptionDetailsInternal(value) {
        try {
            if (isObject(value)) {
                return "hasFullStack" in value && "typeName" in value;
            }
        }
        catch (e) {
        }
        return false;
    }
    function _isExceptionInternal(value) {
        try {
            if (isObject(value)) {
                return ("ver" in value && "exceptions" in value && "properties" in value);
            }
        }
        catch (e) {
        }
        return false;
    }
    function _isStackDetails(details) {
        return details && details.src && isString(details.src) && details.obj && isArray(details.obj);
    }
    function _convertStackObj(errorStack) {
        var src = errorStack || "";
        if (!isString(src)) {
            if (isString(src[strStack])) {
                src = src[strStack];
            }
            else {
                src = "" + src;
            }
        }
        var items = src[_DYN_SPLIT ]("\n");
        return {
            src: src,
            obj: items
        };
    }
    function _getOperaStack(errorMessage) {
        var stack = [];
        var lines = errorMessage[_DYN_SPLIT ]("\n");
        for (var lp = 0; lp < lines[_DYN_LENGTH ]; lp++) {
            var entry = lines[lp];
            if (lines[lp + 1]) {
                entry += "@" + lines[lp + 1];
                lp++;
            }
            stack[_DYN_PUSH ](entry);
        }
        return {
            src: errorMessage,
            obj: stack
        };
    }
    function _getStackFromErrorObj(errorObj) {
        var details = null;
        if (errorObj) {
            try {
                if (errorObj[strStack]) {
                    details = _convertStackObj(errorObj[strStack]);
                }
                else if (errorObj[strError] && errorObj[strError][strStack]) {
                    details = _convertStackObj(errorObj[strError][strStack]);
                }
                else if (errorObj["exception"] && errorObj.exception[strStack]) {
                    details = _convertStackObj(errorObj.exception[strStack]);
                }
                else if (_isStackDetails(errorObj)) {
                    details = errorObj;
                }
                else if (_isStackDetails(errorObj[strStackDetails])) {
                    details = errorObj[strStackDetails];
                }
                else if (getWindow() && getWindow()["opera"] && errorObj[strMessage]) {
                    details = _getOperaStack(errorObj[_DYN_MESSAGE ]);
                }
                else if (errorObj["reason"] && errorObj.reason[strStack]) {
                    details = _convertStackObj(errorObj.reason[strStack]);
                }
                else if (isString(errorObj)) {
                    details = _convertStackObj(errorObj);
                }
                else {
                    var evtMessage = errorObj[strMessage] || errorObj[strDescription] || "";
                    if (isString(errorObj[strErrorSrc])) {
                        if (evtMessage) {
                            evtMessage += "\n";
                        }
                        evtMessage += " from " + errorObj[strErrorSrc];
                    }
                    if (evtMessage) {
                        details = _convertStackObj(evtMessage);
                    }
                }
            }
            catch (e) {
                details = _convertStackObj(e);
            }
        }
        return details || {
            src: "",
            obj: null
        };
    }
    function _formatStackTrace(stackDetails) {
        var stack = "";
        if (stackDetails) {
            if (stackDetails.obj) {
                arrForEach(stackDetails.obj, function (entry) {
                    stack += entry + "\n";
                });
            }
            else {
                stack = stackDetails.src || "";
            }
        }
        return stack;
    }
    function _parseStack(stack) {
        var parsedStack;
        var frames = stack.obj;
        if (frames && frames[_DYN_LENGTH ] > 0) {
            parsedStack = [];
            var level_1 = 0;
            var totalSizeInBytes_1 = 0;
            arrForEach(frames, function (frame) {
                var theFrame = frame[_DYN_TO_STRING ]();
                if (_StackFrame.regex.test(theFrame)) {
                    var parsedFrame = new _StackFrame(theFrame, level_1++);
                    totalSizeInBytes_1 += parsedFrame[_DYN_SIZE_IN_BYTES ];
                    parsedStack[_DYN_PUSH ](parsedFrame);
                }
            });
            var exceptionParsedStackThreshold = 32 * 1024;
            if (totalSizeInBytes_1 > exceptionParsedStackThreshold) {
                var left = 0;
                var right = parsedStack[_DYN_LENGTH ] - 1;
                var size = 0;
                var acceptedLeft = left;
                var acceptedRight = right;
                while (left < right) {
                    var lSize = parsedStack[left][_DYN_SIZE_IN_BYTES ];
                    var rSize = parsedStack[right][_DYN_SIZE_IN_BYTES ];
                    size += lSize + rSize;
                    if (size > exceptionParsedStackThreshold) {
                        var howMany = acceptedRight - acceptedLeft + 1;
                        parsedStack.splice(acceptedLeft, howMany);
                        break;
                    }
                    acceptedLeft = left;
                    acceptedRight = right;
                    left++;
                    right--;
                }
            }
        }
        return parsedStack;
    }
    function _getErrorType(errorType) {
        var typeName = "";
        if (errorType) {
            typeName = errorType.typeName || errorType[_DYN_NAME ] || "";
            if (!typeName) {
                try {
                    var funcNameRegex = /function (.{1,200})\(/;
                    var results = (funcNameRegex).exec((errorType).constructor[_DYN_TO_STRING ]());
                    typeName = (results && results[_DYN_LENGTH ] > 1) ? results[1] : "";
                }
                catch (e) {
                }
            }
        }
        return typeName;
    }
    function _formatErrorCode(errorObj) {
        if (errorObj) {
            try {
                if (!isString(errorObj)) {
                    var errorType = _getErrorType(errorObj);
                    var result = _stringify(errorObj, false);
                    if (!result || result === "{}") {
                        if (errorObj[strError]) {
                            errorObj = errorObj[strError];
                            errorType = _getErrorType(errorObj);
                        }
                        result = _stringify(errorObj, true);
                    }
                    if (strIndexOf(result, errorType) !== 0 && errorType !== "String") {
                        return errorType + ":" + result;
                    }
                    return result;
                }
            }
            catch (e) {
            }
        }
        return "" + (errorObj || "");
    }
    var Exception = /** @class */ (function () {
        function Exception(logger, exception, properties, measurements, severityLevel, id) {
            this.aiDataContract = {
                ver: 1 ,
                exceptions: 1 ,
                severityLevel: 0 ,
                properties: 0 ,
                measurements: 0
            };
            var _self = this;
            _self.ver = 2;
            if (!_isExceptionInternal(exception)) {
                if (!properties) {
                    properties = {};
                }
                if (id) {
                    properties.id = id;
                }
                _self[_DYN_EXCEPTIONS ] = [new _ExceptionDetails(logger, exception, properties)];
                _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
                _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
                if (severityLevel) {
                    _self[_DYN_SEVERITY_LEVEL ] = severityLevel;
                }
                if (id) {
                    _self.id = id;
                }
            }
            else {
                _self[_DYN_EXCEPTIONS ] = exception[_DYN_EXCEPTIONS ] || [];
                _self[_DYN_PROPERTIES ] = exception[_DYN_PROPERTIES ];
                _self[_DYN_MEASUREMENTS ] = exception[_DYN_MEASUREMENTS ];
                if (exception[_DYN_SEVERITY_LEVEL ]) {
                    _self[_DYN_SEVERITY_LEVEL ] = exception[_DYN_SEVERITY_LEVEL ];
                }
                if (exception.id) {
                    _self.id = exception.id;
                    exception[_DYN_PROPERTIES ].id = exception.id;
                }
                if (exception[_DYN_PROBLEM_GROUP ]) {
                    _self[_DYN_PROBLEM_GROUP ] = exception[_DYN_PROBLEM_GROUP ];
                }
                if (!isNullOrUndefined(exception[_DYN_IS_MANUAL ])) {
                    _self[_DYN_IS_MANUAL ] = exception[_DYN_IS_MANUAL ];
                }
            }
        }
        Exception.CreateAutoException = function (message, url, lineNumber, columnNumber, error, evt, stack, errorSrc) {
            var _a;
            var errorType = _getErrorType(error || evt || message);
            return _a = {},
                _a[_DYN_MESSAGE ] = _formatMessage(message, errorType),
                _a.url = url,
                _a.lineNumber = lineNumber,
                _a.columnNumber = columnNumber,
                _a.error = _formatErrorCode(error || evt || message),
                _a.evt = _formatErrorCode(evt || message),
                _a[_DYN_TYPE_NAME ] = errorType,
                _a.stackDetails = _getStackFromErrorObj(stack || error || evt),
                _a.errorSrc = errorSrc,
                _a;
        };
        Exception.CreateFromInterface = function (logger, exception, properties, measurements) {
            var exceptions = exception[_DYN_EXCEPTIONS ]
                && arrMap(exception[_DYN_EXCEPTIONS ], function (ex) { return _ExceptionDetails[_DYN__CREATE_FROM_INTERFA1 ](logger, ex); });
            var exceptionData = new Exception(logger, __assignFn(__assignFn({}, exception), { exceptions: exceptions }), properties, measurements);
            return exceptionData;
        };
        Exception.prototype.toInterface = function () {
            var _a;
            var _b = this, exceptions = _b.exceptions, properties = _b.properties, measurements = _b.measurements, severityLevel = _b.severityLevel, problemGroup = _b.problemGroup, id = _b.id, isManual = _b.isManual;
            var exceptionDetailsInterface = exceptions instanceof Array
                && arrMap(exceptions, function (exception) { return exception.toInterface(); })
                || undefined;
            return _a = {
                    ver: "4.0"
                },
                _a[_DYN_EXCEPTIONS ] = exceptionDetailsInterface,
                _a.severityLevel = severityLevel,
                _a.properties = properties,
                _a.measurements = measurements,
                _a.problemGroup = problemGroup,
                _a.id = id,
                _a.isManual = isManual,
                _a;
        };
        Exception.CreateSimpleException = function (message, typeName, assembly, fileName, details, line) {
            var _a;
            return {
                exceptions: [
                    (_a = {},
                        _a[_DYN_HAS_FULL_STACK ] = true,
                        _a.message = message,
                        _a.stack = details,
                        _a.typeName = typeName,
                        _a)
                ]
            };
        };
        Exception.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception";
        Exception.dataType = "ExceptionData";
        Exception.formatError = _formatErrorCode;
        return Exception;
    }());
    var _ExceptionDetails = /** @class */ (function () {
        function _ExceptionDetails(logger, exception, properties) {
            this.aiDataContract = {
                id: 0 ,
                outerId: 0 ,
                typeName: 1 ,
                message: 1 ,
                hasFullStack: 0 ,
                stack: 0 ,
                parsedStack: 2
            };
            var _self = this;
            if (!_isExceptionDetailsInternal(exception)) {
                var error = exception;
                var evt = error && error.evt;
                if (!isError(error)) {
                    error = error[strError] || evt || error;
                }
                _self[_DYN_TYPE_NAME ] = dataSanitizeString(logger, _getErrorType(error)) || strNotSpecified;
                _self[_DYN_MESSAGE ] = dataSanitizeMessage(logger, _formatMessage(exception || error, _self[_DYN_TYPE_NAME ])) || strNotSpecified;
                var stack = exception[strStackDetails] || _getStackFromErrorObj(exception);
                _self[_DYN_PARSED_STACK ] = _parseStack(stack);
                if (isArray(_self[_DYN_PARSED_STACK ])) {
                    arrMap(_self[_DYN_PARSED_STACK ], function (frame) {
                        frame[_DYN_ASSEMBLY ] = dataSanitizeString(logger, frame[_DYN_ASSEMBLY ]);
                        frame[_DYN_FILE_NAME ] = dataSanitizeString(logger, frame[_DYN_FILE_NAME ]);
                    });
                }
                _self[strStack] = dataSanitizeException(logger, _formatStackTrace(stack));
                _self.hasFullStack = isArray(_self.parsedStack) && _self.parsedStack[_DYN_LENGTH ] > 0;
                if (properties) {
                    properties[_DYN_TYPE_NAME ] = properties[_DYN_TYPE_NAME ] || _self[_DYN_TYPE_NAME ];
                }
            }
            else {
                _self[_DYN_TYPE_NAME ] = exception[_DYN_TYPE_NAME ];
                _self[_DYN_MESSAGE ] = exception[_DYN_MESSAGE ];
                _self[strStack] = exception[strStack];
                _self[_DYN_PARSED_STACK ] = exception[_DYN_PARSED_STACK ] || [];
                _self[_DYN_HAS_FULL_STACK ] = exception[_DYN_HAS_FULL_STACK ];
            }
        }
        _ExceptionDetails.prototype.toInterface = function () {
            var _a;
            var _self = this;
            var parsedStack = _self[_DYN_PARSED_STACK ] instanceof Array
                && arrMap(_self[_DYN_PARSED_STACK ], function (frame) { return frame.toInterface(); });
            var exceptionDetailsInterface = (_a = {
                    id: _self.id,
                    outerId: _self.outerId,
                    typeName: _self[_DYN_TYPE_NAME ],
                    message: _self[_DYN_MESSAGE ],
                    hasFullStack: _self[_DYN_HAS_FULL_STACK ],
                    stack: _self[strStack]
                },
                _a[_DYN_PARSED_STACK ] = parsedStack || undefined,
                _a);
            return exceptionDetailsInterface;
        };
        _ExceptionDetails.CreateFromInterface = function (logger, exception) {
            var parsedStack = (exception[_DYN_PARSED_STACK ] instanceof Array
                && arrMap(exception[_DYN_PARSED_STACK ], function (frame) { return _StackFrame[_DYN__CREATE_FROM_INTERFA1 ](frame); }))
                || exception[_DYN_PARSED_STACK ];
            var exceptionDetails = new _ExceptionDetails(logger, __assignFn(__assignFn({}, exception), { parsedStack: parsedStack }));
            return exceptionDetails;
        };
        return _ExceptionDetails;
    }());
    var _StackFrame = /** @class */ (function () {
        function _StackFrame(sourceFrame, level) {
            this.aiDataContract = {
                level: 1 ,
                method: 1 ,
                assembly: 0 ,
                fileName: 0 ,
                line: 0
            };
            var _self = this;
            _self[_DYN_SIZE_IN_BYTES ] = 0;
            if (typeof sourceFrame === "string") {
                var frame = sourceFrame;
                _self[_DYN_LEVEL ] = level;
                _self[_DYN_METHOD ] = NoMethod;
                _self[_DYN_ASSEMBLY ] = strTrim(frame);
                _self[_DYN_FILE_NAME ] = "";
                _self[_DYN_LINE ] = 0;
                var matches = frame.match(_StackFrame.regex);
                if (matches && matches[_DYN_LENGTH ] >= 5) {
                    _self[_DYN_METHOD ] = strTrim(matches[2]) || _self[_DYN_METHOD ];
                    _self[_DYN_FILE_NAME ] = strTrim(matches[4]);
                    _self[_DYN_LINE ] = parseInt(matches[5]) || 0;
                }
            }
            else {
                _self[_DYN_LEVEL ] = sourceFrame[_DYN_LEVEL ];
                _self[_DYN_METHOD ] = sourceFrame[_DYN_METHOD ];
                _self[_DYN_ASSEMBLY ] = sourceFrame[_DYN_ASSEMBLY ];
                _self[_DYN_FILE_NAME ] = sourceFrame[_DYN_FILE_NAME ];
                _self[_DYN_LINE ] = sourceFrame[_DYN_LINE ];
                _self[_DYN_SIZE_IN_BYTES ] = 0;
            }
            _self.sizeInBytes += _self.method[_DYN_LENGTH ];
            _self.sizeInBytes += _self.fileName[_DYN_LENGTH ];
            _self.sizeInBytes += _self.assembly[_DYN_LENGTH ];
            _self[_DYN_SIZE_IN_BYTES ] += _StackFrame.baseSize;
            _self.sizeInBytes += _self.level.toString()[_DYN_LENGTH ];
            _self.sizeInBytes += _self.line.toString()[_DYN_LENGTH ];
        }
        _StackFrame.CreateFromInterface = function (frame) {
            return new _StackFrame(frame, null );
        };
        _StackFrame.prototype.toInterface = function () {
            var _self = this;
            return {
                level: _self[_DYN_LEVEL ],
                method: _self[_DYN_METHOD ],
                assembly: _self[_DYN_ASSEMBLY ],
                fileName: _self[_DYN_FILE_NAME ],
                line: _self[_DYN_LINE ]
            };
        };
        _StackFrame.regex = /^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/;
        _StackFrame.baseSize = 58;
        return _StackFrame;
    }());

    var DataPoint = /** @class */ (function () {
        function DataPoint() {
            this.aiDataContract = {
                name: 1 ,
                kind: 0 ,
                value: 1 ,
                count: 0 ,
                min: 0 ,
                max: 0 ,
                stdDev: 0
            };
            this.kind = 0 ;
        }
        return DataPoint;
    }());

    var Metric = /** @class */ (function () {
        function Metric(logger, name, value, count, min, max, stdDev, properties, measurements) {
            this.aiDataContract = {
                ver: 1 ,
                metrics: 1 ,
                properties: 0
            };
            var _self = this;
            _self.ver = 2;
            var dataPoint = new DataPoint();
            dataPoint[_DYN_COUNT ] = count > 0 ? count : undefined;
            dataPoint.max = isNaN(max) || max === null ? undefined : max;
            dataPoint.min = isNaN(min) || min === null ? undefined : min;
            dataPoint[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            dataPoint.value = value;
            dataPoint.stdDev = isNaN(stdDev) || stdDev === null ? undefined : stdDev;
            _self.metrics = [dataPoint];
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        Metric.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric";
        Metric.dataType = "MetricData";
        return Metric;
    }());

    var strEmpty = "";
    function stringToBoolOrDefault(str, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        if (str === undefined || str === null) {
            return defaultValue;
        }
        return str.toString()[_DYN_TO_LOWER_CASE ]() === "true";
    }
    function msToTimeSpan(totalms) {
        if (isNaN(totalms) || totalms < 0) {
            totalms = 0;
        }
        totalms = Math.round(totalms);
        var ms = strEmpty + totalms % 1000;
        var sec = strEmpty + Math.floor(totalms / 1000) % 60;
        var min = strEmpty + Math.floor(totalms / (1000 * 60)) % 60;
        var hour = strEmpty + Math.floor(totalms / (1000 * 60 * 60)) % 24;
        var days = Math.floor(totalms / (1000 * 60 * 60 * 24));
        ms = ms[_DYN_LENGTH ] === 1 ? "00" + ms : ms[_DYN_LENGTH ] === 2 ? "0" + ms : ms;
        sec = sec[_DYN_LENGTH ] < 2 ? "0" + sec : sec;
        min = min[_DYN_LENGTH ] < 2 ? "0" + min : min;
        hour = hour[_DYN_LENGTH ] < 2 ? "0" + hour : hour;
        return (days > 0 ? days + "." : strEmpty) + hour + ":" + min + ":" + sec + "." + ms;
    }
    function getExtensionByName(extensions, identifier) {
        var extension = null;
        arrForEach(extensions, function (value) {
            if (value.identifier === identifier) {
                extension = value;
                return -1;
            }
        });
        return extension;
    }
    function isCrossOriginError(message, url, lineNumber, columnNumber, error) {
        return !error && isString(message) && (message === "Script error." || message === "Script error");
    }

    var PageView = /** @class */ (function () {
        function PageView(logger, name, url, durationMs, properties, measurements, id) {
            this.aiDataContract = {
                ver: 1 ,
                name: 0 ,
                url: 0 ,
                duration: 0 ,
                properties: 0 ,
                measurements: 0 ,
                id: 0
            };
            var _self = this;
            _self.ver = 2;
            _self.id = dataSanitizeId(logger, id);
            _self.url = dataSanitizeUrl(logger, url);
            _self[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            if (!isNaN(durationMs)) {
                _self[_DYN_DURATION ] = msToTimeSpan(durationMs);
            }
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        PageView.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview";
        PageView.dataType = "PageviewData";
        return PageView;
    }());

    var RemoteDependencyData = /** @class */ (function () {
        function RemoteDependencyData(logger, id, absoluteUrl, commandName, value, success, resultCode, method, requestAPI, correlationContext, properties, measurements) {
            if (requestAPI === void 0) { requestAPI = "Ajax"; }
            this.aiDataContract = {
                id: 1 ,
                ver: 1 ,
                name: 0 ,
                resultCode: 0 ,
                duration: 0 ,
                success: 0 ,
                data: 0 ,
                target: 0 ,
                type: 0 ,
                properties: 0 ,
                measurements: 0 ,
                kind: 0 ,
                value: 0 ,
                count: 0 ,
                min: 0 ,
                max: 0 ,
                stdDev: 0 ,
                dependencyKind: 0 ,
                dependencySource: 0 ,
                commandName: 0 ,
                dependencyTypeName: 0
            };
            var _self = this;
            _self.ver = 2;
            _self.id = id;
            _self[_DYN_DURATION ] = msToTimeSpan(value);
            _self.success = success;
            _self.resultCode = resultCode + "";
            _self.type = dataSanitizeString(logger, requestAPI);
            var dependencyFields = AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName);
            _self.data = dataSanitizeUrl(logger, commandName) || dependencyFields.data;
            _self.target = dataSanitizeString(logger, dependencyFields.target);
            if (correlationContext) {
                _self.target = "".concat(_self.target, " | ").concat(correlationContext);
            }
            _self[_DYN_NAME ] = dataSanitizeString(logger, dependencyFields[_DYN_NAME ]);
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
        }
        RemoteDependencyData.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency";
        RemoteDependencyData.dataType = "RemoteDependencyData";
        return RemoteDependencyData;
    }());

    var Trace = /** @class */ (function () {
        function Trace(logger, message, severityLevel, properties, measurements) {
            this.aiDataContract = {
                ver: 1 ,
                message: 1 ,
                severityLevel: 0 ,
                properties: 0
            };
            var _self = this;
            _self.ver = 2;
            message = message || strNotSpecified;
            _self[_DYN_MESSAGE ] = dataSanitizeMessage(logger, message);
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
            if (severityLevel) {
                _self[_DYN_SEVERITY_LEVEL ] = severityLevel;
            }
        }
        Trace.envelopeType = "Microsoft.ApplicationInsights.{0}.Message";
        Trace.dataType = "MessageData";
        return Trace;
    }());

    var PageViewPerformance = /** @class */ (function () {
        function PageViewPerformance(logger, name, url, unused, properties, measurements, cs4BaseData) {
            this.aiDataContract = {
                ver: 1 ,
                name: 0 ,
                url: 0 ,
                duration: 0 ,
                perfTotal: 0 ,
                networkConnect: 0 ,
                sentRequest: 0 ,
                receivedResponse: 0 ,
                domProcessing: 0 ,
                properties: 0 ,
                measurements: 0
            };
            var _self = this;
            _self.ver = 2;
            _self.url = dataSanitizeUrl(logger, url);
            _self[_DYN_NAME ] = dataSanitizeString(logger, name) || strNotSpecified;
            _self[_DYN_PROPERTIES ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
            if (cs4BaseData) {
                _self.domProcessing = cs4BaseData.domProcessing;
                _self[_DYN_DURATION ] = cs4BaseData[_DYN_DURATION ];
                _self.networkConnect = cs4BaseData.networkConnect;
                _self.perfTotal = cs4BaseData.perfTotal;
                _self[_DYN_RECEIVED_RESPONSE ] = cs4BaseData[_DYN_RECEIVED_RESPONSE ];
                _self.sentRequest = cs4BaseData.sentRequest;
            }
        }
        PageViewPerformance.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance";
        PageViewPerformance.dataType = "PageviewPerformanceData";
        return PageViewPerformance;
    }());

    var Data = /** @class */ (function () {
        function Data(baseType, data) {
            this.aiDataContract = {
                baseType: 1 ,
                baseData: 1
            };
            this.baseType = baseType;
            this.baseData = data;
        }
        return Data;
    }());

    var SeverityLevel = createEnumStyle({
        Verbose: 0 ,
        Information: 1 ,
        Warning: 2 ,
        Error: 3 ,
        Critical: 4
    });

    var ConfigurationManager = /** @class */ (function () {
        function ConfigurationManager() {
        }
        ConfigurationManager.getConfig = function (config, field, identifier, defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            var configValue;
            if (identifier && config[_DYN_EXTENSION_CONFIG ] && config[_DYN_EXTENSION_CONFIG ][identifier] && !isNullOrUndefined(config[_DYN_EXTENSION_CONFIG ][identifier][field])) {
                configValue = config[_DYN_EXTENSION_CONFIG ][identifier][field];
            }
            else {
                configValue = config[field];
            }
            return !isNullOrUndefined(configValue) ? configValue : defaultValue;
        };
        return ConfigurationManager;
    }());

    function _aiNameFunc(baseName) {
        var aiName = "ai." + baseName + ".";
        return function (name) {
            return aiName + name;
        };
    }
    var _aiApplication = _aiNameFunc("application");
    var _aiDevice = _aiNameFunc("device");
    var _aiLocation = _aiNameFunc("location");
    var _aiOperation = _aiNameFunc("operation");
    var _aiSession = _aiNameFunc("session");
    var _aiUser = _aiNameFunc("user");
    var _aiCloud = _aiNameFunc("cloud");
    var _aiInternal = _aiNameFunc("internal");
    var ContextTagKeys = /** @class */ (function (_super) {
        __extendsFn(ContextTagKeys, _super);
        function ContextTagKeys() {
            return _super.call(this) || this;
        }
        return ContextTagKeys;
    }(createClassFromInterface({
        applicationVersion: _aiApplication("ver"),
        applicationBuild: _aiApplication("build"),
        applicationTypeId: _aiApplication("typeId"),
        applicationId: _aiApplication("applicationId"),
        applicationLayer: _aiApplication("layer"),
        deviceId: _aiDevice("id"),
        deviceIp: _aiDevice("ip"),
        deviceLanguage: _aiDevice("language"),
        deviceLocale: _aiDevice("locale"),
        deviceModel: _aiDevice("model"),
        deviceFriendlyName: _aiDevice("friendlyName"),
        deviceNetwork: _aiDevice("network"),
        deviceNetworkName: _aiDevice("networkName"),
        deviceOEMName: _aiDevice("oemName"),
        deviceOS: _aiDevice("os"),
        deviceOSVersion: _aiDevice("osVersion"),
        deviceRoleInstance: _aiDevice("roleInstance"),
        deviceRoleName: _aiDevice("roleName"),
        deviceScreenResolution: _aiDevice("screenResolution"),
        deviceType: _aiDevice("type"),
        device