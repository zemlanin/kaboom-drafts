(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.kaboom = factory());
}(this, function () { 'use strict';

    var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
    function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

    var _baseZipObject = __commonjs(function (module) {
    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    module.exports = baseZipObject;
    });

    var require$$0 = (_baseZipObject && typeof _baseZipObject === 'object' && 'default' in _baseZipObject ? _baseZipObject['default'] : _baseZipObject);

    var eq = __commonjs(function (module) {
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    module.exports = eq;
    });

    var require$$0$1 = (eq && typeof eq === 'object' && 'default' in eq ? eq['default'] : eq);

    var _assignValue = __commonjs(function (module) {
    var eq = require$$0$1;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        object[key] = value;
      }
    }

    module.exports = assignValue;
    });

    var require$$1 = (_assignValue && typeof _assignValue === 'object' && 'default' in _assignValue ? _assignValue['default'] : _assignValue);

    var zipObject = __commonjs(function (module) {
    var assignValue = require$$1,
        baseZipObject = require$$0;

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    module.exports = zipObject;
    });

    var zipObject$1 = (zipObject && typeof zipObject === 'object' && 'default' in zipObject ? zipObject['default'] : zipObject);

    var isObject$1 = __commonjs(function (module) {
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    module.exports = isObject;
    });

    var require$$1$1 = (isObject$1 && typeof isObject$1 === 'object' && 'default' in isObject$1 ? isObject$1['default'] : isObject$1);

    var isFunction = __commonjs(function (module) {
    var isObject = require$$1$1;

    /** `Object#toString` result references. */
    var funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8 which returns 'object' for typed array and weak map constructors,
      // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }

    module.exports = isFunction;
    });

    var require$$3 = (isFunction && typeof isFunction === 'object' && 'default' in isFunction ? isFunction['default'] : isFunction);

    var isArray = __commonjs(function (module) {
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @type {Function}
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    module.exports = isArray;
    });

    var require$$1$2 = (isArray && typeof isArray === 'object' && 'default' in isArray ? isArray['default'] : isArray);

    var isObjectLike = __commonjs(function (module) {
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }

    module.exports = isObjectLike;
    });

    var require$$0$2 = (isObjectLike && typeof isObjectLike === 'object' && 'default' in isObjectLike ? isObjectLike['default'] : isObjectLike);

    var isString = __commonjs(function (module) {
    var isArray = require$$1$2,
        isObjectLike = require$$0$2;

    /** `Object#toString` result references. */
    var stringTag = '[object String]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
    }

    module.exports = isString;
    });

    var isString$1 = (isString && typeof isString === 'object' && 'default' in isString ? isString['default'] : isString);

    var identity = __commonjs(function (module) {
    /**
     * This method returns the first argument given to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    module.exports = identity;
    });

    var identity$1 = (identity && typeof identity === 'object' && 'default' in identity ? identity['default'] : identity);

    var isSymbol = __commonjs(function (module) {
    var isObjectLike = require$$0$2;

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }

    module.exports = isSymbol;
    });

    var require$$0$5 = (isSymbol && typeof isSymbol === 'object' && 'default' in isSymbol ? isSymbol['default'] : isSymbol);

    var _toKey = __commonjs(function (module) {
    var isSymbol = require$$0$5;

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0;

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    module.exports = toKey;
    });

    var require$$0$4 = (_toKey && typeof _toKey === 'object' && 'default' in _toKey ? _toKey['default'] : _toKey);

    var _isKey = __commonjs(function (module) {
    var isArray = require$$1$2,
        isSymbol = require$$0$5;

    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    module.exports = isKey;
    });

    var require$$1$3 = (_isKey && typeof _isKey === 'object' && 'default' in _isKey ? _isKey['default'] : _isKey);

    var _checkGlobal = __commonjs(function (module) {
    /**
     * Checks if `value` is a global object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {null|Object} Returns `value` if it's a global object, else `null`.
     */
    function checkGlobal(value) {
      return (value && value.Object === Object) ? value : null;
    }

    module.exports = checkGlobal;
    });

    var require$$0$10 = (_checkGlobal && typeof _checkGlobal === 'object' && 'default' in _checkGlobal ? _checkGlobal['default'] : _checkGlobal);

    var _root = __commonjs(function (module, exports, global) {
    var checkGlobal = require$$0$10;

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
      'function': true,
      'object': true
    };

    /** Detect free variable `exports`. */
    var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
      ? exports
      : undefined;

    /** Detect free variable `module`. */
    var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
      ? module
      : undefined;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

    /** Detect free variable `self`. */
    var freeSelf = checkGlobal(objectTypes[typeof self] && self);

    /** Detect free variable `window`. */
    var freeWindow = checkGlobal(objectTypes[typeof window] && window);

    /** Detect `this` as the global object. */
    var thisGlobal = checkGlobal(objectTypes[typeof __commonjs_global] && __commonjs_global);

    /**
     * Used as a reference to the global object.
     *
     * The `this` value is used if it's the global object to avoid Greasemonkey's
     * restricted `window` object, otherwise the `window` object is used.
     */
    var root = freeGlobal ||
      ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
        freeSelf || thisGlobal || Function('return this')();

    module.exports = root;
    });

    var require$$0$9 = (_root && typeof _root === 'object' && 'default' in _root ? _root['default'] : _root);

    var _Symbol = __commonjs(function (module) {
    var root = require$$0$9;

    /** Built-in value references. */
    var Symbol = root.Symbol;

    module.exports = Symbol;
    });

    var require$$1$4 = (_Symbol && typeof _Symbol === 'object' && 'default' in _Symbol ? _Symbol['default'] : _Symbol);

    var _baseToString = __commonjs(function (module) {
    var Symbol = require$$1$4,
        isSymbol = require$$0$5;

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0;

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    module.exports = baseToString;
    });

    var require$$0$8 = (_baseToString && typeof _baseToString === 'object' && 'default' in _baseToString ? _baseToString['default'] : _baseToString);

    var toString = __commonjs(function (module) {
    var baseToString = require$$0$8;

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    module.exports = toString;
    });

    var require$$0$7 = (toString && typeof toString === 'object' && 'default' in toString ? toString['default'] : toString);

    var _isKeyable = __commonjs(function (module) {
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    module.exports = isKeyable;
    });

    var require$$0$14 = (_isKeyable && typeof _isKeyable === 'object' && 'default' in _isKeyable ? _isKeyable['default'] : _isKeyable);

    var _getMapData = __commonjs(function (module) {
    var isKeyable = require$$0$14;

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    module.exports = getMapData;
    });

    var require$$0$13 = (_getMapData && typeof _getMapData === 'object' && 'default' in _getMapData ? _getMapData['default'] : _getMapData);

    var _mapCacheSet = __commonjs(function (module) {
    var getMapData = require$$0$13;

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }

    module.exports = mapCacheSet;
    });

    var require$$0$12 = (_mapCacheSet && typeof _mapCacheSet === 'object' && 'default' in _mapCacheSet ? _mapCacheSet['default'] : _mapCacheSet);

    var _mapCacheHas = __commonjs(function (module) {
    var getMapData = require$$0$13;

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    module.exports = mapCacheHas;
    });

    var require$$1$6 = (_mapCacheHas && typeof _mapCacheHas === 'object' && 'default' in _mapCacheHas ? _mapCacheHas['default'] : _mapCacheHas);

    var _mapCacheGet = __commonjs(function (module) {
    var getMapData = require$$0$13;

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    module.exports = mapCacheGet;
    });

    var require$$2$1 = (_mapCacheGet && typeof _mapCacheGet === 'object' && 'default' in _mapCacheGet ? _mapCacheGet['default'] : _mapCacheGet);

    var _mapCacheDelete = __commonjs(function (module) {
    var getMapData = require$$0$13;

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      return getMapData(this, key)['delete'](key);
    }

    module.exports = mapCacheDelete;
    });

    var require$$3$1 = (_mapCacheDelete && typeof _mapCacheDelete === 'object' && 'default' in _mapCacheDelete ? _mapCacheDelete['default'] : _mapCacheDelete);

    var _toSource = __commonjs(function (module) {
    /** Used to resolve the decompiled source of functions. */
    var funcToString = Function.prototype.toString;

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to process.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    module.exports = toSource;
    });

    var require$$0$18 = (_toSource && typeof _toSource === 'object' && 'default' in _toSource ? _toSource['default'] : _toSource);

    var _isHostObject = __commonjs(function (module) {
    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */
    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;
      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }
      return result;
    }

    module.exports = isHostObject;
    });

    var require$$2$2 = (_isHostObject && typeof _isHostObject === 'object' && 'default' in _isHostObject ? _isHostObject['default'] : _isHostObject);

    var isNative = __commonjs(function (module) {
    var isFunction = require$$3,
        isHostObject = require$$2$2,
        isObject = require$$1$1,
        toSource = require$$0$18;

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = Function.prototype.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /**
     * Checks if `value` is a native function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (!isObject(value)) {
        return false;
      }
      var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    module.exports = isNative;
    });

    var require$$0$17 = (isNative && typeof isNative === 'object' && 'default' in isNative ? isNative['default'] : isNative);

    var _getNative = __commonjs(function (module) {
    var isNative = require$$0$17;

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = object[key];
      return isNative(value) ? value : undefined;
    }

    module.exports = getNative;
    });

    var require$$0$16 = (_getNative && typeof _getNative === 'object' && 'default' in _getNative ? _getNative['default'] : _getNative);

    var _Map = __commonjs(function (module) {
    var getNative = require$$0$16,
        root = require$$0$9;

    /* Built-in method references that are verified to be native. */
    var Map = getNative(root, 'Map');

    module.exports = Map;
    });

    var require$$0$15 = (_Map && typeof _Map === 'object' && 'default' in _Map ? _Map['default'] : _Map);

    var _assocIndexOf = __commonjs(function (module) {
    var eq = require$$0$1;

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    module.exports = assocIndexOf;
    });

    var require$$0$20 = (_assocIndexOf && typeof _assocIndexOf === 'object' && 'default' in _assocIndexOf ? _assocIndexOf['default'] : _assocIndexOf);

    var _listCacheSet = __commonjs(function (module) {
    var assocIndexOf = require$$0$20;

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    module.exports = listCacheSet;
    });

    var require$$0$19 = (_listCacheSet && typeof _listCacheSet === 'object' && 'default' in _listCacheSet ? _listCacheSet['default'] : _listCacheSet);

    var _listCacheHas = __commonjs(function (module) {
    var assocIndexOf = require$$0$20;

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    module.exports = listCacheHas;
    });

    var require$$1$8 = (_listCacheHas && typeof _listCacheHas === 'object' && 'default' in _listCacheHas ? _listCacheHas['default'] : _listCacheHas);

    var _listCacheGet = __commonjs(function (module) {
    var assocIndexOf = require$$0$20;

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    module.exports = listCacheGet;
    });

    var require$$2$3 = (_listCacheGet && typeof _listCacheGet === 'object' && 'default' in _listCacheGet ? _listCacheGet['default'] : _listCacheGet);

    var _listCacheDelete = __commonjs(function (module) {
    var assocIndexOf = require$$0$20;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype;

    /** Built-in value references. */
    var splice = arrayProto.splice;

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }

    module.exports = listCacheDelete;
    });

    var require$$3$2 = (_listCacheDelete && typeof _listCacheDelete === 'object' && 'default' in _listCacheDelete ? _listCacheDelete['default'] : _listCacheDelete);

    var _listCacheClear = __commonjs(function (module) {
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
    }

    module.exports = listCacheClear;
    });

    var require$$4$1 = (_listCacheClear && typeof _listCacheClear === 'object' && 'default' in _listCacheClear ? _listCacheClear['default'] : _listCacheClear);

    var _ListCache = __commonjs(function (module) {
    var listCacheClear = require$$4$1,
        listCacheDelete = require$$3$2,
        listCacheGet = require$$2$3,
        listCacheHas = require$$1$8,
        listCacheSet = require$$0$19;

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    module.exports = ListCache;
    });

    var require$$1$7 = (_ListCache && typeof _ListCache === 'object' && 'default' in _ListCache ? _ListCache['default'] : _ListCache);

    var _nativeCreate = __commonjs(function (module) {
    var getNative = require$$0$16;

    /* Built-in method references that are verified to be native. */
    var nativeCreate = getNative(Object, 'create');

    module.exports = nativeCreate;
    });

    var require$$0$22 = (_nativeCreate && typeof _nativeCreate === 'object' && 'default' in _nativeCreate ? _nativeCreate['default'] : _nativeCreate);

    var _hashSet = __commonjs(function (module) {
    var nativeCreate = require$$0$22;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    module.exports = hashSet;
    });

    var require$$0$21 = (_hashSet && typeof _hashSet === 'object' && 'default' in _hashSet ? _hashSet['default'] : _hashSet);

    var _hashHas = __commonjs(function (module) {
    var nativeCreate = require$$0$22;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }

    module.exports = hashHas;
    });

    var require$$1$9 = (_hashHas && typeof _hashHas === 'object' && 'default' in _hashHas ? _hashHas['default'] : _hashHas);

    var _hashGet = __commonjs(function (module) {
    var nativeCreate = require$$0$22;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    module.exports = hashGet;
    });

    var require$$2$5 = (_hashGet && typeof _hashGet === 'object' && 'default' in _hashGet ? _hashGet['default'] : _hashGet);

    var _hashDelete = __commonjs(function (module) {
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }

    module.exports = hashDelete;
    });

    var require$$3$3 = (_hashDelete && typeof _hashDelete === 'object' && 'default' in _hashDelete ? _hashDelete['default'] : _hashDelete);

    var _hashClear = __commonjs(function (module) {
    var nativeCreate = require$$0$22;

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }

    module.exports = hashClear;
    });

    var require$$4$2 = (_hashClear && typeof _hashClear === 'object' && 'default' in _hashClear ? _hashClear['default'] : _hashClear);

    var _Hash = __commonjs(function (module) {
    var hashClear = require$$4$2,
        hashDelete = require$$3$3,
        hashGet = require$$2$5,
        hashHas = require$$1$9,
        hashSet = require$$0$21;

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    module.exports = Hash;
    });

    var require$$2$4 = (_Hash && typeof _Hash === 'object' && 'default' in _Hash ? _Hash['default'] : _Hash);

    var _mapCacheClear = __commonjs(function (module) {
    var Hash = require$$2$4,
        ListCache = require$$1$7,
        Map = require$$0$15;

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    module.exports = mapCacheClear;
    });

    var require$$4 = (_mapCacheClear && typeof _mapCacheClear === 'object' && 'default' in _mapCacheClear ? _mapCacheClear['default'] : _mapCacheClear);

    var _MapCache = __commonjs(function (module) {
    var mapCacheClear = require$$4,
        mapCacheDelete = require$$3$1,
        mapCacheGet = require$$2$1,
        mapCacheHas = require$$1$6,
        mapCacheSet = require$$0$12;

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    module.exports = MapCache;
    });

    var require$$0$11 = (_MapCache && typeof _MapCache === 'object' && 'default' in _MapCache ? _MapCache['default'] : _MapCache);

    var memoize = __commonjs(function (module) {
    var MapCache = require$$0$11;

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Assign cache to `_.memoize`.
    memoize.Cache = MapCache;

    module.exports = memoize;
    });

    var require$$1$5 = (memoize && typeof memoize === 'object' && 'default' in memoize ? memoize['default'] : memoize);

    var _stringToPath = __commonjs(function (module) {
    var memoize = require$$1$5,
        toString = require$$0$7;

    /** Used to match property names within property paths. */
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoize(function(string) {
      var result = [];
      toString(string).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    module.exports = stringToPath;
    });

    var require$$0$6 = (_stringToPath && typeof _stringToPath === 'object' && 'default' in _stringToPath ? _stringToPath['default'] : _stringToPath);

    var _castPath = __commonjs(function (module) {
    var isArray = require$$1$2,
        stringToPath = require$$0$6;

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }

    module.exports = castPath;
    });

    var require$$2 = (_castPath && typeof _castPath === 'object' && 'default' in _castPath ? _castPath['default'] : _castPath);

    var _baseGet = __commonjs(function (module) {
    var castPath = require$$2,
        isKey = require$$1$3,
        toKey = require$$0$4;

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    module.exports = baseGet;
    });

    var require$$0$3 = (_baseGet && typeof _baseGet === 'object' && 'default' in _baseGet ? _baseGet['default'] : _baseGet);

    var get = __commonjs(function (module) {
    var baseGet = require$$0$3;

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is used in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    module.exports = get;
    });

    var get$1 = (get && typeof get === 'object' && 'default' in get ? get['default'] : get);

    var baseFn = function baseFn (bindings, bindingNames, handlers) {
      return function () {
        var result
        var bs = Object.assign({}, bindings, zipObject$1(bindingNames, arguments))

        for (var j = 0; j < handlers.length; j++) {
          result = bindings.resolve(bs, handlers[j].map(identity$1))
        }

        bs = null
        return result
      }
    }

    var boomFuncs = {
      call: function (bindings, args) {
        var funcName = args[0]

        var func = bindings.resolve(bindings, funcName)
        if (!require$$3(func)) {
          console.error(
            'function `%s` is not found in current namespace %o\n%s',
            funcName, bindings,
            bindings.node.dataset[bindings.prefix + 'Do'].replace(/^\n|\n\s*$/g, '')
          )

          return null
        }

        return func.apply(
          null,
          func._boomWithBindings
            ? [bindings].concat(args.splice(1))
            : args.splice(1).map(bindings.resolve.bind(null, bindings))
        )
      },
      resolve: function (bindings, expr) {
        if (require$$1$2(expr)) { return bindings.call(bindings, expr) }
        if (isString$1(expr)) { return get$1(bindings, expr) }
        if (isObject(expr)) { return expr }
      },
      listen: function (bindings, evSymbol, bindingNames) {
        return bindings.events[evSymbol](
          bindings.node,
          baseFn(bindings, bindingNames, Array.prototype.splice.call(arguments, 3))
        )
      },
      log: console.log.bind(console),
      error: console.error.bind(console),
    }

    boomFuncs.call._boomWithBindings = true
    boomFuncs.resolve._boomWithBindings = true
    boomFuncs.listen._boomWithBindings = true

    function boom (prefix, bindings) {
      return function (node) {
        var extendedBindings = Object.assign(
          {node: node, prefix: prefix},
          boomFuncs,
          bindings
        )

        if (node.dataset[prefix + 'DoParams']) {
          extendedBindings = Object.assign(
            extendedBindings,
            {params: JSON.parse(node.dataset[prefix + 'DoParams'].replace(/^\s*\/\/.*$/gm, ''))}
          )
        }

        JSON
          .parse(node.dataset[prefix + 'Do'].replace(/^\s*\/\/.*$/gm, ''))
          .forEach(boomFuncs.resolve.bind(null, extendedBindings))

        extendedBindings = null
      }
    }

    return boom;

}));