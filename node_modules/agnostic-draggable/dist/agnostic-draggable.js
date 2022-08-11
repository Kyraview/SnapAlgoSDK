(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.agnosticDraggable = {}));
}(this, (function (exports) { 'use strict';

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$2(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   *
   * _.isUndefined(null);
   * // => false
   */

  function isUndefined(value) {
    return value === undefined;
  }

  var isUndefined_1 = isUndefined;

  var Plugin = /*#__PURE__*/function () {
    function Plugin(container) {
      _classCallCheck(this, Plugin);

      _defineProperty(this, "container", null);

      _defineProperty(this, "constraintPosition", function (pos) {
        return pos;
      });

      this.container = container;
    }

    _createClass(Plugin, [{
      key: "supported",
      get: function get() {
        return false;
      }
    }, {
      key: "startEvent",
      get: function get() {
        if (this.isResizable()) {
          return 'resize:start';
        }

        if (this.isSortable()) {
          return 'sort:start';
        }

        return 'drag:start';
      }
    }, {
      key: "moveEvent",
      get: function get() {
        if (this.isResizable()) {
          return 'resize:change';
        }

        if (this.isSortable()) {
          return 'sort:move';
        }

        return 'drag:move';
      }
    }, {
      key: "stopEvent",
      get: function get() {
        if (this.isResizable()) {
          return 'resize:stop';
        }

        if (this.isSortable()) {
          return 'sort:stop';
        }

        return 'drag:stop';
      }
    }, {
      key: "isDraggable",
      value: function isDraggable() {
        return this.container && !isUndefined_1(this.container.dragging);
      }
    }, {
      key: "isSortable",
      value: function isSortable() {
        return this.container && !isUndefined_1(this.container.items);
      }
    }, {
      key: "isResizable",
      value: function isResizable() {
        return this.container && !isUndefined_1(this.container.resizing);
      }
    }, {
      key: "attach",
      value: function attach() {
        if (this.supported) {
          this.container.on(this.startEvent, this.onDragStart);
          this.container.on(this.moveEvent, this.onDragMove);
          this.container.on(this.stopEvent, this.onDragStop);
        }
      }
    }, {
      key: "detach",
      value: function detach() {
        if (this.supported) {
          this.container.off(this.startEvent, this.onDragStart);
          this.container.off(this.moveEvent, this.onDragMove);
          this.container.off(this.stopEvent, this.onDragStop);
        }
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(event) {}
    }, {
      key: "onDragMove",
      value: function onDragMove(event) {}
    }, {
      key: "onDragStop",
      value: function onDragStop(event) {}
    }]);

    return Plugin;
  }();

  /**
   * Returns the owner document of a given element.
   * 
   * @param node the element
   */
  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  /**
   * Returns the actively focused element safely.
   *
   * @param doc the document to check
   */

  function activeElement(doc) {
    if (doc === void 0) {
      doc = ownerDocument();
    }

    // Support: IE 9 only
    // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
    try {
      var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
      // document.activeElement from an <iframe>

      if (!active || !active.nodeName) return null;
      return active;
    } catch (e) {
      /* ie throws if no active element */
      return doc.body;
    }
  }

  /**
   * Checks if a given element has a CSS class.
   * 
   * @param element the element
   * @param className the CSS class name
   */
  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  /**
   * Adds a CSS class to a given element.
   * 
   * @param element the element
   * @param className the CSS class name
   */

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
  }

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  /* eslint-disable no-return-assign */
  var optionsSupported = false;
  var onceSupported = false;

  try {
    var options = {
      get passive() {
        return optionsSupported = true;
      },

      get once() {
        // eslint-disable-next-line no-multi-assign
        return onceSupported = optionsSupported = true;
      }

    };

    if (canUseDOM) {
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, true);
    }
  } catch (e) {
    /* */
  }

  /**
   * An `addEventListener` ponyfill, supports the `once` option
   * 
   * @param node the element
   * @param eventName the event name
   * @param handle the handler
   * @param options event options
   */
  function addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== 'boolean' && !onceSupported) {
      var once = options.once,
          capture = options.capture;
      var wrappedHandler = handler;

      if (!onceSupported && once) {
        wrappedHandler = handler.__once || function onceHandler(event) {
          this.removeEventListener(eventName, onceHandler, capture);
          handler.call(this, event);
        };

        handler.__once = wrappedHandler;
      }

      node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
    }

    node.addEventListener(eventName, handler, options);
  }

  /**
   * Returns the owner window of a given element.
   * 
   * @param node the element
   */

  function ownerWindow(node) {
    var doc = ownerDocument(node);
    return doc && doc.defaultView || window;
  }

  /**
   * Returns one or all computed style properties of an element.
   * 
   * @param node the element
   * @param psuedoElement the style property
   */

  function getComputedStyle$1(node, psuedoElement) {
    return ownerWindow(node).getComputedStyle(node, psuedoElement);
  }

  var rUpper = /([A-Z])/g;
  function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase();
  }

  /**
   * Copyright 2013-2014, Facebook, Inc.
   * All rights reserved.
   * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
   */
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }

  var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
  function isTransform(value) {
    return !!(value && supportedTransforms.test(value));
  }

  function style(node, property) {
    var css = '';
    var transforms = '';

    if (typeof property === 'string') {
      return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));
    }

    Object.keys(property).forEach(function (key) {
      var value = property[key];

      if (!value && value !== 0) {
        node.style.removeProperty(hyphenateStyleName(key));
      } else if (isTransform(key)) {
        transforms += key + "(" + value + ") ";
      } else {
        css += hyphenateStyleName(key) + ": " + value + ";";
      }
    });

    if (transforms) {
      css += "transform: " + transforms + ";";
    }

    node.style.cssText += ";" + css;
  }

  /**
   * A `removeEventListener` ponyfill
   * 
   * @param node the element
   * @param eventName the event name
   * @param handle the handler
   * @param options event options
   */
  function removeEventListener(node, eventName, handler, options) {
    var capture = options && typeof options !== 'boolean' ? options.capture : options;
    node.removeEventListener(eventName, handler, capture);

    if (handler.__once) {
      node.removeEventListener(eventName, handler.__once, capture);
    }
  }

  function listen(node, eventName, handler, options) {
    addEventListener(node, eventName, handler, options);
    return function () {
      removeEventListener(node, eventName, handler, options);
    };
  }

  /* https://github.com/component/raf */
  var prev$1 = new Date().getTime();

  function fallback(fn) {
    var curr = new Date().getTime();
    var ms = Math.max(0, 16 - (curr - prev$1));
    var handle = setTimeout(fn, ms);
    prev$1 = curr;
    return handle;
  }

  var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
  var rafImpl = fallback; // eslint-disable-next-line import/no-mutable-exports

  var getKey = function getKey(vendor, k) {
    return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
  };

  if (canUseDOM) {
    vendors.some(function (vendor) {
      var rafMethod = getKey(vendor, 'request');

      if (rafMethod in window) {
        getKey(vendor, 'cancel'); // @ts-ignore

        rafImpl = function rafImpl(cb) {
          return window[rafMethod](cb);
        };
      }

      return !!rafImpl;
    });
  }

  /**
   * Gets or sets an attribute of a given element.
   * 
   * @param node the element
   * @param attr the attribute to get or set
   * @param val the attribute value
   */
  function attribute(node, attr, val) {
    if (node) {
      if (typeof val === 'undefined') {
        return node.getAttribute(attr);
      }

      if (!val && val !== '') {
        node.removeAttribute(attr);
      } else {
        node.setAttribute(attr, String(val));
      }
    }
  }

  var matchesImpl;
  /**
   * Checks if a given element matches a selector.
   * 
   * @param node the element
   * @param selector the selector
   */

  function matches(node, selector) {
    if (!matchesImpl) {
      var body = document.body;
      var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;

      matchesImpl = function matchesImpl(n, s) {
        return nativeMatch.call(n, s);
      };
    }

    return matchesImpl(node, selector);
  }

  /**
   * Returns the closest parent element that matches a given selector.
   * 
   * @param node the reference element
   * @param selector the selector to match
   * @param stopAt stop traversing when this element is found
   */

  function closest(node, selector, stopAt) {
    if (node.closest && !stopAt) node.closest(selector);
    var nextNode = node;

    do {
      if (matches(nextNode, selector)) return nextNode;
      nextNode = nextNode.parentElement;
    } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);

    return null;
  }

  /* eslint-disable no-bitwise, no-cond-assign */

  /**
   * Checks if an element contains another given element.
   * 
   * @param context the context element
   * @param node the element to check
   */
  function contains(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
  }

  Function.prototype.bind.call(Function.prototype.call, [].slice);

  var toArray$2 = Function.prototype.bind.call(Function.prototype.call, [].slice);
  /**
   * Runs `querySelectorAll` on a given element.
   * 
   * @param element the element
   * @param selector the selector
   */

  function qsa(element, selector) {
    return toArray$2(element.querySelectorAll(selector));
  }

  function isDocument(element) {
    return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
  }

  function isWindow(node) {
    if ('window' in node && node.window === node) return node;
    if (isDocument(node)) return node.defaultView || false;
    return false;
  }

  function getscrollAccessor(offset) {
    var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

    function scrollAccessor(node, val) {
      var win = isWindow(node);

      if (val === undefined) {
        return win ? win[offset] : node[prop];
      }

      if (win) {
        win.scrollTo(win[offset], val);
      } else {
        node[prop] = val;
      }
    }

    return scrollAccessor;
  }

  /**
   * Gets or sets the scroll left position of a given element.
   * 
   * @param node the element
   * @param val the position to set
   */

  var scrollLeft = getscrollAccessor('pageXOffset');

  /**
   * Gets or sets the scroll top position of a given element.
   * 
   * @param node the element
   * @param val the position to set
   */

  var scrollTop = getscrollAccessor('pageYOffset');

  /**
   * Returns the offset of a given element, including top and left positions, width and height.
   * 
   * @param node the element
   */

  function offset(node) {
    var doc = ownerDocument(node);
    var box = {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    };
    var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

    if (!docElem || !contains(docElem, node)) return box;
    if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
    box = {
      top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
      left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
      width: box.width,
      height: box.height
    };
    return box;
  }

  /**
   * Returns the height of a given element.
   * 
   * @param node the element
   * @param client whether to use `clientHeight` if possible
   */

  function height(node, client) {
    var win = isWindow(node);
    return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
  }

  var regExpInputs = /^(?:input|select|textarea|button)$/i;
  /**
   * Checks if a given element is an input (input, select, textarea or button).
   * 
   * @param node the element to check
   */

  function isInput(node) {
    return node ? regExpInputs.test(node.nodeName) : false;
  }

  var isHTMLElement = function isHTMLElement(e) {
    return !!e && 'offsetParent' in e;
  };

  function offsetParent(node) {
    var doc = ownerDocument(node);
    var parent = node && node.offsetParent;

    while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && style(parent, 'position') === 'static') {
      parent = parent.offsetParent;
    }

    return parent || doc.documentElement;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var nodeName = function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
  };
  /**
   * Returns the relative position of a given element.
   * 
   * @param node the element
   * @param offsetParent the offset parent
   */


  function position$1(node, offsetParent$1) {
    var parentOffset = {
      top: 0,
      left: 0
    };
    var offset$1; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent

    if (style(node, 'position') === 'fixed') {
      offset$1 = node.getBoundingClientRect();
    } else {
      var parent = offsetParent$1 || offsetParent(node);
      offset$1 = offset(node);
      if (nodeName(parent) !== 'html') parentOffset = offset(parent);
      var borderTop = String(style(parent, 'borderTopWidth') || 0);
      parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0;
      var borderLeft = String(style(parent, 'borderLeftWidth') || 0);
      parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0;
    }

    var marginTop = String(style(node, 'marginTop') || 0);
    var marginLeft = String(style(node, 'marginLeft') || 0); // Subtract parent offsets and node margins

    return _extends({}, offset$1, {
      top: offset$1.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
      left: offset$1.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
    });
  }

  /**
   * Removes a given node from the DOM.
   * 
   * @param node the node to remove
   */
  function remove(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
      return node;
    }

    return null;
  }

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }
  /**
   * Removes a CSS class from a given element.
   * 
   * @param element the element
   * @param className the CSS class name
   */


  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (typeof element.className === 'string') {
      element.className = replaceClassName(element.className, className);
    } else {
      element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
  }

  /* eslint-disable no-cond-assign, no-continue */
  /**
   * Find the first scrollable parent of an element.
   *
   * @param element Starting element
   * @param firstPossible Stop at the first scrollable parent, even if it's not currently scrollable
   */

  function scrollParent$1(element, firstPossible) {
    var position = style(element, 'position');
    var excludeStatic = position === 'absolute';
    var ownerDoc = element.ownerDocument;
    if (position === 'fixed') return ownerDoc || document; // @ts-ignore

    while ((element = element.parentNode) && !isDocument(element)) {
      var isStatic = excludeStatic && style(element, 'position') === 'static';
      var style$1 = (style(element, 'overflow') || '') + (style(element, 'overflow-y') || '') + style(element, 'overflow-x');
      if (isStatic) continue;

      if (/(auto|scroll)/.test(style$1) && (firstPossible || height(element) < element.scrollHeight)) {
        return element;
      }
    }

    return ownerDoc || document;
  }

  /**
   * Returns the width of a given element.
   * 
   * @param node the element
   * @param client whether to use `clientWidth` if possible
   */

  function getWidth(node, client) {
    var win = isWindow(node);
    return win ? win.innerWidth : client ? node.clientWidth : offset(node).width;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$h =
    /* global globalThis -- safe */
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$d = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$c = fails$d;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$c(function () {
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var objectPropertyIsEnumerable = {};

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var createPropertyDescriptor$3 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString$3 = {}.toString;

  var classofRaw = function (it) {
    return toString$3.call(it).slice(8, -1);
  };

  var fails$b = fails$d;
  var classof$4 = classofRaw;

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$b(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$4(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$6 = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$5 = requireObjectCoercible$6;

  var toIndexedObject$5 = function (it) {
    return IndexedObject$2(requireObjectCoercible$5(it));
  };

  var isObject$b = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var isObject$a = isObject$b;

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive$3 = function (input, PREFERRED_STRING) {
    if (!isObject$a(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$a(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$a(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$a(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty$5 = {}.hasOwnProperty;

  var has$6 = function (it, key) {
    return hasOwnProperty$5.call(it, key);
  };

  var global$g = global$h;
  var isObject$9 = isObject$b;

  var document$1 = global$g.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject$9(document$1) && isObject$9(document$1.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$4 = descriptors;
  var fails$a = fails$d;
  var createElement$1 = documentCreateElement$1;

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$4 && !fails$a(function () {
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$3 = descriptors;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;
  var toIndexedObject$4 = toIndexedObject$5;
  var toPrimitive$2 = toPrimitive$3;
  var has$5 = has$6;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$4(O);
    P = toPrimitive$2(P, true);
    if (IE8_DOM_DEFINE$1) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has$5(O, P)) return createPropertyDescriptor$2(!propertyIsEnumerableModule.f.call(O, P), O[P]);
  };

  var objectDefineProperty = {};

  var isObject$8 = isObject$b;

  var anObject$8 = function (it) {
    if (!isObject$8(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  var DESCRIPTORS$2 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var anObject$7 = anObject$8;
  var toPrimitive$1 = toPrimitive$3;

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$2 ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject$7(O);
    P = toPrimitive$1(P, true);
    anObject$7(Attributes);
    if (IE8_DOM_DEFINE) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$1 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$6 = DESCRIPTORS$1 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var redefine$2 = {exports: {}};

  var global$f = global$h;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;

  var setGlobal$3 = function (key, value) {
    try {
      createNonEnumerableProperty$5(global$f, key, value);
    } catch (error) {
      global$f[key] = value;
    } return value;
  };

  var global$e = global$h;
  var setGlobal$2 = setGlobal$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$e[SHARED] || setGlobal$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  var functionToString = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof store$2.inspectSource != 'function') {
    store$2.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource$2 = store$2.inspectSource;

  var global$d = global$h;
  var inspectSource$1 = inspectSource$2;

  var WeakMap$2 = global$d.WeakMap;

  var nativeWeakMap = typeof WeakMap$2 === 'function' && /native code/.test(inspectSource$1(WeakMap$2));

  var shared$3 = {exports: {}};

  var store$1 = sharedStore;

  (shared$3.exports = function (key, value) {
    return store$1[key] || (store$1[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.9.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });

  var id = 0;
  var postfix = Math.random();

  var uid$2 = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var shared$2 = shared$3.exports;
  var uid$1 = uid$2;

  var keys$2 = shared$2('keys');

  var sharedKey$2 = function (key) {
    return keys$2[key] || (keys$2[key] = uid$1(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$c = global$h;
  var isObject$7 = isObject$b;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
  var objectHas = has$6;
  var shared$1 = sharedStore;
  var sharedKey$1 = sharedKey$2;
  var hiddenKeys$3 = hiddenKeys$4;

  var WeakMap$1 = global$c.WeakMap;
  var set, get, has$4;

  var enforce = function (it) {
    return has$4(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$7(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP) {
    var store = shared$1.state || (shared$1.state = new WeakMap$1());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function (it, metadata) {
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store, it) || {};
    };
    has$4 = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey$1('state');
    hiddenKeys$3[STATE] = true;
    set = function (it, metadata) {
      metadata.facade = it;
      createNonEnumerableProperty$4(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return objectHas(it, STATE) ? it[STATE] : {};
    };
    has$4 = function (it) {
      return objectHas(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$4,
    enforce: enforce,
    getterFor: getterFor
  };

  var global$b = global$h;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
  var has$3 = has$6;
  var setGlobal$1 = setGlobal$3;
  var inspectSource = inspectSource$2;
  var InternalStateModule = internalState;

  var getInternalState = InternalStateModule.get;
  var enforceInternalState = InternalStateModule.enforce;
  var TEMPLATE = String(String).split('String');

  (redefine$2.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$3(value, 'name')) {
        createNonEnumerableProperty$3(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global$b) {
      if (simple) O[key] = value;
      else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty$3(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });

  var global$a = global$h;

  var path$1 = global$a;

  var path = path$1;
  var global$9 = global$h;

  var aFunction$5 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$3 = function (namespace, method) {
    return arguments.length < 2 ? aFunction$5(path[namespace]) || aFunction$5(global$9[namespace])
      : path[namespace] && path[namespace][method] || global$9[namespace] && global$9[namespace][method];
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger
  var toInteger$3 = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var toInteger$2 = toInteger$3;

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$6 = function (argument) {
    return argument > 0 ? min$2(toInteger$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toInteger$1 = toInteger$3;

  var max$1 = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$2 = function (index, length) {
    var integer = toInteger$1(index);
    return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
  };

  var toIndexedObject$3 = toIndexedObject$5;
  var toLength$5 = toLength$6;
  var toAbsoluteIndex$1 = toAbsoluteIndex$2;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$3($this);
      var length = toLength$5(O.length);
      var index = toAbsoluteIndex$1(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var has$2 = has$6;
  var toIndexedObject$2 = toIndexedObject$5;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$2(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has$2(hiddenKeys$2, key) && has$2(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$2(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$2 = getBuiltIn$3;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$6 = anObject$8;

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$6(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var has$1 = has$6;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$3 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$3.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var fails$9 = fails$d;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails$9(detection)
      : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';

  var isForced_1 = isForced$1;

  var global$8 = global$h;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
  var redefine$1 = redefine$2.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced = isForced_1;

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$8;
    } else if (STATIC) {
      target = global$8[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$8[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$2(sourceProperty, 'sham', true);
      }
      // extend global
      redefine$1(target, key, sourceProperty, options);
    }
  };

  var aFunction$4 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  var aFunction$3 = aFunction$4;

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction$3(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var requireObjectCoercible$4 = requireObjectCoercible$6;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$3 = function (argument) {
    return Object(requireObjectCoercible$4(argument));
  };

  var classof$3 = classofRaw;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  var isArray$9 = Array.isArray || function isArray(arg) {
    return classof$3(arg) == 'Array';
  };

  var classof$2 = classofRaw;
  var global$7 = global$h;

  var engineIsNode = classof$2(global$7.process) == 'process';

  var getBuiltIn$1 = getBuiltIn$3;

  var engineUserAgent = getBuiltIn$1('navigator', 'userAgent') || '';

  var global$6 = global$h;
  var userAgent$1 = engineUserAgent;

  var process = global$6.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match$1, version;

  if (v8) {
    match$1 = v8.split('.');
    version = match$1[0] + match$1[1];
  } else if (userAgent$1) {
    match$1 = userAgent$1.match(/Edge\/(\d+)/);
    if (!match$1 || match$1[1] >= 74) {
      match$1 = userAgent$1.match(/Chrome\/(\d+)/);
      if (match$1) version = match$1[1];
    }
  }

  var engineV8Version = version && +version;

  var IS_NODE = engineIsNode;
  var V8_VERSION$2 = engineV8Version;
  var fails$8 = fails$d;

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$8(function () {
    /* global Symbol -- required for testing */
    return !Symbol.sham &&
      // Chrome 38 Symbol has incorrect toString conversion
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      (IS_NODE ? V8_VERSION$2 === 38 : V8_VERSION$2 > 37 && V8_VERSION$2 < 41);
  });

  var NATIVE_SYMBOL$1 = nativeSymbol;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    /* global Symbol -- safe */
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$5 = global$h;
  var shared = shared$3.exports;
  var has = has$6;
  var uid = uid$2;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$5 = global$5.Symbol;
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid;

  var wellKnownSymbol$8 = function (name) {
    if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (NATIVE_SYMBOL && has(Symbol$5, name)) {
        WellKnownSymbolsStore[name] = Symbol$5[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    } return WellKnownSymbolsStore[name];
  };

  var isObject$6 = isObject$b;
  var isArray$8 = isArray$9;
  var wellKnownSymbol$7 = wellKnownSymbol$8;

  var SPECIES$4 = wellKnownSymbol$7('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    var C;
    if (isArray$8(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray$8(C.prototype))) C = undefined;
      else if (isObject$6(C)) {
        C = C[SPECIES$4];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var bind$1 = functionBindContext;
  var IndexedObject$1 = indexedObject;
  var toObject$2 = toObject$3;
  var toLength$4 = toLength$6;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$2($this);
      var self = IndexedObject$1(O);
      var boundFunction = bind$1(callbackfn, that, 3);
      var length = toLength$4(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push.call(target, value); // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push.call(target, value); // filterOut
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$2(7)
  };

  var fails$7 = fails$d;
  var wellKnownSymbol$6 = wellKnownSymbol$8;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$3 = wellKnownSymbol$6('species');

  var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$7(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$3] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$g = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$g({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var fails$6 = fails$d;

  var arrayMethodIsStrict$5 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$6(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$4 = arrayMethodIsStrict$5;

  var STRICT_METHOD$4 = arrayMethodIsStrict$4('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD$4 ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;

  var $$f = _export;
  var forEach$2 = arrayForEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  $$f({ target: 'Array', proto: true, forced: [].forEach != forEach$2 }, {
    forEach: forEach$2
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var global$4 = global$h;
  var DOMIterables = domIterables;
  var forEach$1 = arrayForEach;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;

  for (var COLLECTION_NAME in DOMIterables) {
    var Collection = global$4[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach$1) try {
      createNonEnumerableProperty$1(CollectionPrototype, 'forEach', forEach$1);
    } catch (error) {
      CollectionPrototype.forEach = forEach$1;
    }
  }

  var aFunction$2 = aFunction$4;
  var isObject$5 = isObject$b;

  var slice$2 = [].slice;
  var factories = {};

  var construct = function (C, argsLength, args) {
    if (!(argsLength in factories)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
      factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  var functionBind = Function.bind || function bind(that /* , ...args */) {
    var fn = aFunction$2(this);
    var partArgs = slice$2.call(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = partArgs.concat(slice$2.call(arguments));
      return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
    };
    if (isObject$5(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
  };

  var $$e = _export;
  var bind = functionBind;

  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  $$e({ target: 'Function', proto: true }, {
    bind: bind
  });

  var toPrimitive = toPrimitive$3;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;

  var createProperty$2 = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var $$d = _export;
  var isObject$4 = isObject$b;
  var isArray$7 = isArray$9;
  var toAbsoluteIndex = toAbsoluteIndex$2;
  var toLength$3 = toLength$6;
  var toIndexedObject$1 = toIndexedObject$5;
  var createProperty$1 = createProperty$2;
  var wellKnownSymbol$5 = wellKnownSymbol$8;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('slice');

  var SPECIES$2 = wellKnownSymbol$5('species');
  var nativeSlice = [].slice;
  var max = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$d({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$1(this);
      var length = toLength$3(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$7(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || isArray$7(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$4(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  // a string of all valid unicode whitespaces
  var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var requireObjectCoercible$3 = requireObjectCoercible$6;
  var whitespaces$3 = whitespaces$4;

  var whitespace$1 = '[' + whitespaces$3 + ']';
  var ltrim = RegExp('^' + whitespace$1 + whitespace$1 + '*');
  var rtrim = RegExp(whitespace$1 + whitespace$1 + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$1 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible$3($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$1(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$1(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$1(3)
  };

  var global$3 = global$h;
  var trim$2 = stringTrim.trim;
  var whitespaces$2 = whitespaces$4;

  var $parseFloat = global$3.parseFloat;
  var FORCED$3 = 1 / $parseFloat(whitespaces$2 + '-0') !== -Infinity;

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED$3 ? function parseFloat(string) {
    var trimmedString = trim$2(String(string));
    var result = $parseFloat(trimmedString);
    return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

  var $$c = _export;
  var parseFloatImplementation = numberParseFloat;

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  $$c({ global: true, forced: parseFloat != parseFloatImplementation }, {
    parseFloat: parseFloatImplementation
  });

  var global$2 = global$h;
  var trim$1 = stringTrim.trim;
  var whitespaces$1 = whitespaces$4;

  var $parseInt = global$2.parseInt;
  var hex = /^[+-]?0[Xx]/;
  var FORCED$2 = $parseInt(whitespaces$1 + '08') !== 8 || $parseInt(whitespaces$1 + '0x16') !== 22;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
    var S = trim$1(String(string));
    return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
  } : $parseInt;

  var $$b = _export;
  var parseIntImplementation = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$b({ global: true, forced: parseInt != parseIntImplementation }, {
    parseInt: parseIntImplementation
  });

  var $$a = _export;
  var fails$5 = fails$d;
  var isArray$6 = isArray$9;
  var isObject$3 = isObject$b;
  var toObject$1 = toObject$3;
  var toLength$2 = toLength$6;
  var createProperty = createProperty$2;
  var arraySpeciesCreate = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
  var wellKnownSymbol$4 = wellKnownSymbol$8;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$4('isConcatSpreadable');
  var MAX_SAFE_INTEGER$2 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$5(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject$3(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$6(O);
  };

  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$a({ target: 'Array', proto: true, forced: FORCED$1 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$1(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength$2(E.length);
          if (n + len > MAX_SAFE_INTEGER$2) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER$2) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var $$9 = _export;
  var IndexedObject = indexedObject;
  var toIndexedObject = toIndexedObject$5;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$5;

  var nativeJoin = [].join;

  var ES3_STRINGS = IndexedObject != Object;
  var STRICT_METHOD$3 = arrayMethodIsStrict$3('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$9({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$3 }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet = /*#__PURE__*/function () {
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          before = _this.prepend ? _this.container.firstChild : _this.before;
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  var MS = '-ms-';
  var MOZ = '-moz-';
  var WEBKIT = '-webkit-';

  var COMMENT = 'comm';
  var RULESET = 'rule';
  var DECLARATION = 'decl';
  var IMPORT = '@import';
  var KEYFRAMES = '@keyframes';

  /**
   * @param {number}
   * @return {number}
   */
  var abs = Math.abs;

  /**
   * @param {number}
   * @return {string}
   */
  var from = String.fromCharCode;

  /**
   * @param {string} value
   * @param {number} length
   * @return {number}
   */
  function hash (value, length) {
  	return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
  }

  /**
   * @param {string} value
   * @return {string}
   */
  function trim (value) {
  	return value.trim()
  }

  /**
   * @param {string} value
   * @param {RegExp} pattern
   * @return {string?}
   */
  function match (value, pattern) {
  	return (value = pattern.exec(value)) ? value[0] : value
  }

  /**
   * @param {string} value
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @return {string}
   */
  function replace (value, pattern, replacement) {
  	return value.replace(pattern, replacement)
  }

  /**
   * @param {string} value
   * @param {string} value
   * @return {number}
   */
  function indexof (value, search) {
  	return value.indexOf(search)
  }

  /**
   * @param {string} value
   * @param {number} index
   * @return {number}
   */
  function charat (value, index) {
  	return value.charCodeAt(index) | 0
  }

  /**
   * @param {string} value
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function substr (value, begin, end) {
  	return value.slice(begin, end)
  }

  /**
   * @param {string} value
   * @return {number}
   */
  function strlen (value) {
  	return value.length
  }

  /**
   * @param {any[]} value
   * @return {number}
   */
  function sizeof (value) {
  	return value.length
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @return {any}
   */
  function append (value, array) {
  	return array.push(value), value
  }

  /**
   * @param {string[]} array
   * @param {function} callback
   * @return {string}
   */
  function combine (array, callback) {
  	return array.map(callback).join('')
  }

  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = '';

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string} type
   * @param {string[]} props
   * @param {object[]} children
   * @param {number} length
   */
  function node (value, root, parent, type, props, children, length) {
  	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {string} type
   */
  function copy (value, root, type) {
  	return node(value, root.root, root.parent, type, root.props, root.children, 0)
  }

  /**
   * @return {number}
   */
  function char () {
  	return character
  }

  /**
   * @return {number}
   */
  function prev () {
  	character = position > 0 ? charat(characters, --position) : 0;

  	if (column--, character === 10)
  		column = 1, line--;

  	return character
  }

  /**
   * @return {number}
   */
  function next () {
  	character = position < length ? charat(characters, position++) : 0;

  	if (column++, character === 10)
  		column = 1, line++;

  	return character
  }

  /**
   * @return {number}
   */
  function peek () {
  	return charat(characters, position)
  }

  /**
   * @return {number}
   */
  function caret () {
  	return position
  }

  /**
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function slice$1 (begin, end) {
  	return substr(characters, begin, end)
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function token (type) {
  	switch (type) {
  		// \0 \t \n \r \s whitespace token
  		case 0: case 9: case 10: case 13: case 32:
  			return 5
  		// ! + , / > @ ~ isolate token
  		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
  		// ; { } breakpoint token
  		case 59: case 123: case 125:
  			return 4
  		// : accompanied token
  		case 58:
  			return 3
  		// " ' ( [ opening delimit token
  		case 34: case 39: case 40: case 91:
  			return 2
  		// ) ] closing delimit token
  		case 41: case 93:
  			return 1
  	}

  	return 0
  }

  /**
   * @param {string} value
   * @return {any[]}
   */
  function alloc (value) {
  	return line = column = 1, length = strlen(characters = value), position = 0, []
  }

  /**
   * @param {any} value
   * @return {any}
   */
  function dealloc (value) {
  	return characters = '', value
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function delimit (type) {
  	return trim(slice$1(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function whitespace (type) {
  	while (character = peek())
  		if (character < 33)
  			next();
  		else
  			break

  	return token(type) > 2 || token(character) > 3 ? '' : ' '
  }

  /**
   * @param {number} index
   * @param {number} count
   * @return {string}
   */
  function escaping (index, count) {
  	while (--count && next())
  		// not 0-9 A-F a-f
  		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
  			break

  	return slice$1(index, caret() + (count < 6 && peek() == 32 && next() == 32))
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function delimiter (type) {
  	while (next())
  		switch (character) {
  			// ] ) " '
  			case type:
  				return position
  			// " '
  			case 34: case 39:
  				return delimiter(type === 34 || type === 39 ? type : character)
  			// (
  			case 40:
  				if (type === 41)
  					delimiter(type);
  				break
  			// \
  			case 92:
  				next();
  				break
  		}

  	return position
  }

  /**
   * @param {number} type
   * @param {number} index
   * @return {number}
   */
  function commenter (type, index) {
  	while (next())
  		// //
  		if (type + character === 47 + 10)
  			break
  		// /*
  		else if (type + character === 42 + 42 && peek() === 47)
  			break

  	return '/*' + slice$1(index, position - 1) + '*' + from(type === 47 ? type : next())
  }

  /**
   * @param {number} index
   * @return {string}
   */
  function identifier (index) {
  	while (!token(peek()))
  		next();

  	return slice$1(index, position)
  }

  /**
   * @param {string} value
   * @return {object[]}
   */
  function compile (value) {
  	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string[]} rule
   * @param {string[]} rules
   * @param {string[]} rulesets
   * @param {number[]} pseudo
   * @param {number[]} points
   * @param {string[]} declarations
   * @return {object}
   */
  function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  	var index = 0;
  	var offset = 0;
  	var length = pseudo;
  	var atrule = 0;
  	var property = 0;
  	var previous = 0;
  	var variable = 1;
  	var scanning = 1;
  	var ampersand = 1;
  	var character = 0;
  	var type = '';
  	var props = rules;
  	var children = rulesets;
  	var reference = rule;
  	var characters = type;

  	while (scanning)
  		switch (previous = character, character = next()) {
  			// " ' [ (
  			case 34: case 39: case 91: case 40:
  				characters += delimit(character);
  				break
  			// \t \n \r \s
  			case 9: case 10: case 13: case 32:
  				characters += whitespace(previous);
  				break
  			// \
  			case 92:
  				characters += escaping(caret() - 1, 7);
  				continue
  			// /
  			case 47:
  				switch (peek()) {
  					case 42: case 47:
  						append(comment(commenter(next(), caret()), root, parent), declarations);
  						break
  					default:
  						characters += '/';
  				}
  				break
  			// {
  			case 123 * variable:
  				points[index++] = strlen(characters) * ampersand;
  			// } ; \0
  			case 125 * variable: case 59: case 0:
  				switch (character) {
  					// \0 }
  					case 0: case 125: scanning = 0;
  					// ;
  					case 59 + offset:
  						if (property > 0 && (strlen(characters) - length))
  							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
  						break
  					// @ ;
  					case 59: characters += ';';
  					// { rule/at-rule
  					default:
  						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

  						if (character === 123)
  							if (offset === 0)
  								parse(characters, root, reference, reference, props, rulesets, length, points, children);
  							else
  								switch (atrule) {
  									// d m s
  									case 100: case 109: case 115:
  										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
  										break
  									default:
  										parse(characters, reference, reference, reference, [''], children, length, points, children);
  								}
  				}

  				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
  				break
  			// :
  			case 58:
  				length = 1 + strlen(characters), property = previous;
  			default:
  				if (variable < 1)
  					if (character == 123)
  						--variable;
  					else if (character == 125 && variable++ == 0 && prev() == 125)
  						continue

  				switch (characters += from(character), character * variable) {
  					// &
  					case 38:
  						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
  						break
  					// ,
  					case 44:
  						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
  						break
  					// @
  					case 64:
  						// -
  						if (peek() === 45)
  							characters += delimit(next());

  						atrule = peek(), offset = strlen(type = characters += identifier(caret())), character++;
  						break
  					// -
  					case 45:
  						if (previous === 45 && strlen(characters) == 2)
  							variable = 0;
  				}
  		}

  	return rulesets
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} index
   * @param {number} offset
   * @param {string[]} rules
   * @param {number[]} points
   * @param {string} type
   * @param {string[]} props
   * @param {string[]} children
   * @param {number} length
   * @return {object}
   */
  function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
  	var post = offset - 1;
  	var rule = offset === 0 ? rules : [''];
  	var size = sizeof(rule);

  	for (var i = 0, j = 0, k = 0; i < index; ++i)
  		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
  			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
  				props[k++] = z;

  	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
  }

  /**
   * @param {number} value
   * @param {object} root
   * @param {object?} parent
   * @return {object}
   */
  function comment (value, root, parent) {
  	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} length
   * @return {object}
   */
  function declaration (value, root, parent, length) {
  	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
  }

  /**
   * @param {string} value
   * @param {number} length
   * @return {string}
   */
  function prefix (value, length) {
  	switch (hash(value, length)) {
  		// color-adjust
  		case 5103:
  			return WEBKIT + 'print-' + value + value
  		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
  		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
  		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
  		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
  		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
  		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
  		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
  		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
  			return WEBKIT + value + value
  		// appearance, user-select, transform, hyphens, text-size-adjust
  		case 5349: case 4246: case 4810: case 6968: case 2756:
  			return WEBKIT + value + MOZ + value + MS + value + value
  		// flex, flex-direction
  		case 6828: case 4268:
  			return WEBKIT + value + MS + value + value
  		// order
  		case 6165:
  			return WEBKIT + value + MS + 'flex-' + value + value
  		// align-items
  		case 5187:
  			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
  		// align-self
  		case 5443:
  			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value
  		// align-content
  		case 4675:
  			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value
  		// flex-shrink
  		case 5548:
  			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
  		// flex-basis
  		case 5292:
  			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
  		// flex-grow
  		case 6060:
  			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
  		// transition
  		case 4554:
  			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
  		// cursor
  		case 6187:
  			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
  		// background, background-image
  		case 5495: case 3959:
  			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
  		// justify-content
  		case 4968:
  			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
  		// (margin|padding)-inline-(start|end)
  		case 4095: case 3583: case 4068: case 2532:
  			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
  		// (min|max)?(width|height|inline-size|block-size)
  		case 8116: case 7059: case 5753: case 5535:
  		case 5445: case 5701: case 4933: case 4677:
  		case 5533: case 5789: case 5021: case 4765:
  			// stretch, max-content, min-content, fill-available
  			if (strlen(value) - 1 - length > 6)
  				switch (charat(value, length + 1)) {
  					// (m)ax-content, (m)in-content
  					case 109:
  						// -
  						if (charat(value, length + 4) !== 45)
  							break
  					// (f)ill-available, (f)it-content
  					case 102:
  						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
  					// (s)tretch
  					case 115:
  						return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value
  				}
  			break
  		// position: sticky
  		case 4949:
  			// (s)ticky?
  			if (charat(value, length + 1) !== 115)
  				break
  		// display: (flex|inline-flex)
  		case 6444:
  			switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
  				// stic(k)y
  				case 107:
  					return replace(value, ':', ':' + WEBKIT) + value
  				// (inline-)?fl(e)x
  				case 101:
  					return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
  			}
  			break
  		// writing-mode
  		case 5936:
  			switch (charat(value, length + 11)) {
  				// vertical-l(r)
  				case 114:
  					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
  				// vertical-r(l)
  				case 108:
  					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
  				// horizontal(-)tb
  				case 45:
  					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
  			}

  			return WEBKIT + value + MS + value + value
  	}

  	return value
  }

  /**
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function serialize (children, callback) {
  	var output = '';
  	var length = sizeof(children);

  	for (var i = 0; i < length; i++)
  		output += callback(children[i], i, children, callback) || '';

  	return output
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function stringify (element, index, children, callback) {
  	switch (element.type) {
  		case IMPORT: case DECLARATION: return element.return = element.return || element.value
  		case COMMENT: return ''
  		case RULESET: element.value = element.props.join(',');
  	}

  	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
  }

  /**
   * @param {function[]} collection
   * @return {function}
   */
  function middleware (collection) {
  	var length = sizeof(collection);

  	return function (element, index, children, callback) {
  		var output = '';

  		for (var i = 0; i < length; i++)
  			output += collection[i](element, index, children, callback) || '';

  		return output
  	}
  }

  /**
   * @param {function} callback
   * @return {function}
   */
  function rulesheet (callback) {
  	return function (element) {
  		if (!element.root)
  			if (element = element.return)
  				callback(element);
  	}
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   */
  function prefixer (element, index, children, callback) {
  	if (!element.return)
  		switch (element.type) {
  			case DECLARATION: element.return = prefix(element.value, element.length);
  				break
  			case KEYFRAMES:
  				return serialize([copy(replace(element.value, '@', '@' + WEBKIT), element, '')], callback)
  			case RULESET:
  				if (element.length)
  					return combine(element.props, function (value) {
  						switch (match(value, /(::plac\w+|:read-\w+)/)) {
  							// :read-(only|write)
  							case ':read-only': case ':read-write':
  								return serialize([copy(replace(value, /:(read-\w+)/, ':' + MOZ + '$1'), element, '')], callback)
  							// :placeholder
  							case '::placeholder':
  								return serialize([
  									copy(replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1'), element, ''),
  									copy(replace(value, /:(plac\w+)/, ':' + MOZ + '$1'), element, ''),
  									copy(replace(value, /:(plac\w+)/, MS + 'input-$1'), element, '')
  								], callback)
  						}

  						return ''
  					})
  		}
  }

  function memoize(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (token(character)) {
        case 0:
          // &\f
          if (character === 38 && peek() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += identifier(position - 1);
          break;

        case 2:
          parsed[index] += delimit(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = peek() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += from(character);
      }
    } while (character = next());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return dealloc(toRules(alloc(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
    !element.length) {
      return;
    }

    var value = element.value,
        parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  var defaultStylisPlugins = [prefixer];

  var createCache = function createCache(options) {
    var key = options.key;

    if ( key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');

        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }
        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    var inserted = {}; // $FlowFixMe

    var container;
    var nodesToHydrate = [];

    {
      container = options.container || document.head;
      Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;

    var omnipresentPlugins = [compat, removeLabel];

    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return serialize(compile(styles), serializer);
      };

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    if (interpolation.__emotion_styles !== undefined) {

      return interpolation;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }

          if (interpolation.styles !== undefined) {
            var next = interpolation.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = interpolation.styles + ";";

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }

          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)


    if (registered == null) {
      return interpolation;
    }

    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];

        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (_key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {

                  string += _key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {

      styles += strings[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {

        styles += strings[i];
      }
    }


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + // $FlowFixMe we know it's not null
      match[1];
    }

    var name = murmur2(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  };

  var isBrowser = "object" !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false ) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }

    if (cache.inserted[serialized.name] === undefined) {
      var current = serialized;

      do {
        cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        current = current.next;
      } while (current !== undefined);
    }
  };

  function insertWithoutScoping(cache, serialized) {
    if (cache.inserted[serialized.name] === undefined) {
      return cache.insert('', serialized, cache.sheet, true);
    }
  }

  function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles);
  }

  var createEmotion = function createEmotion(options) {
    var cache = createCache(options); // $FlowFixMe

    cache.sheet.speedy = function (value) {

      this.isSpeedy = value;
    };

    cache.compat = true;

    var css = function css() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = serializeStyles(args, cache.registered, undefined);
      insertStyles(cache, serialized, false);
      return cache.key + "-" + serialized.name;
    };

    var keyframes = function keyframes() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var serialized = serializeStyles(args, cache.registered);
      var animation = "animation-" + serialized.name;
      insertWithoutScoping(cache, {
        name: serialized.name,
        styles: "@keyframes " + animation + "{" + serialized.styles + "}"
      });
      return animation;
    };

    var injectGlobal = function injectGlobal() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var serialized = serializeStyles(args, cache.registered);
      insertWithoutScoping(cache, serialized);
    };

    var cx = function cx() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return merge(cache.registered, css, classnames(args));
    };

    return {
      css: css,
      cx: cx,
      injectGlobal: injectGlobal,
      keyframes: keyframes,
      hydrate: function hydrate(ids) {
        ids.forEach(function (key) {
          cache.inserted[key] = true;
        });
      },
      flush: function flush() {
        cache.registered = {};
        cache.inserted = {};
        cache.sheet.flush();
      },
      // $FlowFixMe
      sheet: cache.sheet,
      cache: cache,
      getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
      merge: merge.bind(null, cache.registered, css)
    };
  };

  var classnames = function classnames(args) {
    var cls = '';

    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      if (arg == null) continue;
      var toAdd = void 0;

      switch (typeof arg) {
        case 'boolean':
          break;

        case 'object':
          {
            if (Array.isArray(arg)) {
              toAdd = classnames(arg);
            } else {
              toAdd = '';

              for (var k in arg) {
                if (arg[k] && k) {
                  toAdd && (toAdd += ' ');
                  toAdd += k;
                }
              }
            }

            break;
          }

        default:
          {
            toAdd = arg;
          }
      }

      if (toAdd) {
        cls && (cls += ' ');
        cls += toAdd;
      }
    }

    return cls;
  };

  var _createEmotion = createEmotion({
    key: 'css'
  }),
      injectGlobal = _createEmotion.injectGlobal;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$1(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach$1;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor$1;

  var createBaseFor = _createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor$1 = createBaseFor();

  var _baseFor = baseFor$1;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes$1;

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$2 = freeGlobal || freeSelf || Function('return this')();

  var _root = root$2;

  var root$1 = _root;

  /** Built-in value references. */
  var Symbol$4 = root$1.Symbol;

  var _Symbol = Symbol$4;

  var Symbol$3 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$6.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$4.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto$5 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$5.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString$1;

  var Symbol$2 = _Symbol,
      getRawTag = _getRawTag,
      objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$6(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  var _baseGetTag = baseGetTag$6;

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

  function isObjectLike$6(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike$6;

  var baseGetTag$5 = _baseGetTag,
      isObjectLike$5 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$5(value) && baseGetTag$5(value) == argsTag$1;
  }

  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
      isObjectLike$4 = isObjectLike_1;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike$4(value) && hasOwnProperty$3.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments$1;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
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

  var isArray$5 = Array.isArray;

  var isArray_1 = isArray$5;

  var isBuffer$1 = {exports: {}};

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  (function (module, exports) {
  var root = _root,
      stubFalse = stubFalse_1;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  module.exports = isBuffer;
  }(isBuffer$1, isBuffer$1.exports));

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex$1(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex$1;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength$2(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength$2;

  var baseGetTag$4 = _baseGetTag,
      isLength$1 = isLength_1,
      isObjectLike$3 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag$1 = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray$1(value) {
    return isObjectLike$3(value) &&
      isLength$1(value.length) && !!typedArrayTags[baseGetTag$4(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray$1;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$1(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary$1;

  var _nodeUtil = {exports: {}};

  (function (module, exports) {
  var freeGlobal = _freeGlobal;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  }(_nodeUtil, _nodeUtil.exports));

  var baseIsTypedArray = _baseIsTypedArray,
      baseUnary = _baseUnary,
      nodeUtil = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  var isTypedArray_1 = isTypedArray$1;

  var baseTimes = _baseTimes,
      isArguments = isArguments_1,
      isArray$4 = isArray_1,
      isBuffer = isBuffer$1.exports,
      isIndex = _isIndex,
      isTypedArray = isTypedArray_1;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys$1(value, inherited) {
    var isArr = isArray$4(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$2.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys$1;

  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype$1(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$2;

    return value === proto;
  }

  var _isPrototype = isPrototype$1;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg$2;

  var overArg$1 = _overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys$1 = overArg$1(Object.keys, Object);

  var _nativeKeys = nativeKeys$1;

  var isPrototype = _isPrototype,
      nativeKeys = _nativeKeys;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys$1(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys$1;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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

  function isObject$2(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject$2;

  var baseGetTag$3 = _baseGetTag,
      isObject$1 = isObject_1;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$1(value) {
    if (!isObject$1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$3(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$1;

  var isFunction = isFunction_1,
      isLength = isLength_1;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$2(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  var isArrayLike_1 = isArrayLike$2;

  var arrayLikeKeys = _arrayLikeKeys,
      baseKeys = _baseKeys,
      isArrayLike$1 = isArrayLike_1;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$1(object) {
    return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  var keys_1 = keys$1;

  var baseFor = _baseFor,
      keys = keys_1;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn$1(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  var _baseForOwn = baseForOwn$1;

  var isArrayLike = isArrayLike_1;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach$1(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var _createBaseEach = createBaseEach$1;

  var baseForOwn = _baseForOwn,
      createBaseEach = _createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach$1 = createBaseEach(baseForOwn);

  var _baseEach = baseEach$1;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity$1(value) {
    return value;
  }

  var identity_1 = identity$1;

  var identity = identity_1;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction$1(value) {
    return typeof value == 'function' ? value : identity;
  }

  var _castFunction = castFunction$1;

  var arrayEach = _arrayEach,
      baseEach = _baseEach,
      castFunction = _castFunction,
      isArray$3 = isArray_1;

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forEach(collection, iteratee) {
    var func = isArray$3(collection) ? arrayEach : baseEach;
    return func(collection, castFunction(iteratee));
  }

  var forEach_1 = forEach;

  var overArg = _overArg;

  /** Built-in value references. */
  var getPrototype$1 = overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype$1;

  var baseGetTag$2 = _baseGetTag,
      getPrototype = _getPrototype,
      isObjectLike$2 = isObjectLike_1;

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike$2(value) || baseGetTag$2(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */

  function arrayReduce$1(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  var _arrayReduce = arrayReduce$1;

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */

  function basePropertyOf$1(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  var _basePropertyOf = basePropertyOf$1;

  var basePropertyOf = _basePropertyOf;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter$1 = basePropertyOf(deburredLetters);

  var _deburrLetter = deburrLetter$1;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function arrayMap$1(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap$1;

  var baseGetTag$1 = _baseGetTag,
      isObjectLike$1 = isObjectLike_1;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$1(value) {
    return typeof value == 'symbol' ||
      (isObjectLike$1(value) && baseGetTag$1(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol$1;

  var Symbol$1 = _Symbol,
      arrayMap = _arrayMap,
      isArray$2 = isArray_1,
      isSymbol = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString$1(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$2(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString$1) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  var _baseToString = baseToString$1;

  var baseToString = _baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
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
  function toString$2(value) {
    return value == null ? '' : baseToString(value);
  }

  var toString_1 = toString$2;

  var deburrLetter = _deburrLetter,
      toString$1 = toString_1;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to compose unicode character classes. */
  var rsComboMarksRange$1 = '\\u0300-\\u036f',
      reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
      rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;

  /** Used to compose unicode capture groups. */
  var rsCombo$1 = '[' + rsComboRange$1 + ']';

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo$1, 'g');

  /**
   * Deburrs `string` by converting
   * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
   * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
   * letters to basic Latin letters and removing
   * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to deburr.
   * @returns {string} Returns the deburred string.
   * @example
   *
   * _.deburr('déjà vu');
   * // => 'deja vu'
   */
  function deburr$1(string) {
    string = toString$1(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
  }

  var deburr_1 = deburr$1;

  /** Used to match words composed of alphanumeric characters. */

  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords$1(string) {
    return string.match(reAsciiWord) || [];
  }

  var _asciiWords = asciiWords$1;

  /** Used to detect strings that need a more robust regexp to match words. */

  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord$1(string) {
    return reHasUnicodeWord.test(string);
  }

  var _hasUnicodeWord = hasUnicodeWord$1;

  /** Used to compose unicode character classes. */

  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos$1 = "['\u2019]",
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords$1(string) {
    return string.match(reUnicodeWord) || [];
  }

  var _unicodeWords = unicodeWords$1;

  var asciiWords = _asciiWords,
      hasUnicodeWord = _hasUnicodeWord,
      toString = toString_1,
      unicodeWords = _unicodeWords;

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words$1(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }

  var words_1 = words$1;

  var arrayReduce = _arrayReduce,
      deburr = deburr_1,
      words = words_1;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]";

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder$1(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
  }

  var _createCompounder = createCompounder$1;

  var createCompounder = _createCompounder;

  /**
   * Converts `string` to
   * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the kebab cased string.
   * @example
   *
   * _.kebabCase('Foo Bar');
   * // => 'foo-bar'
   *
   * _.kebabCase('fooBar');
   * // => 'foo-bar'
   *
   * _.kebabCase('__FOO_BAR__');
   * // => 'foo-bar'
   */
  var kebabCase = createCompounder(function(result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
  });

  var kebabCase_1 = kebabCase;

  var AbstractEvent = /*#__PURE__*/function () {
    function AbstractEvent() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AbstractEvent);

      _defineProperty(this, "data", null);

      _defineProperty(this, "canceled", false);

      this.data = data;
    }

    _createClass(AbstractEvent, [{
      key: "type",
      get: function get() {
        return this.constructor.type;
      }
    }, {
      key: "cancelable",
      get: function get() {
        return this.constructor.cancelable;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.cancelable) {
          this.canceled = true;
        }
      }
    }]);

    return AbstractEvent;
  }();

  _defineProperty(AbstractEvent, "type", 'event');

  _defineProperty(AbstractEvent, "cancelable", false);

  var SensorEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(SensorEvent, _AbstractEvent);

    var _super = _createSuper(SensorEvent);

    function SensorEvent() {
      _classCallCheck(this, SensorEvent);

      return _super.apply(this, arguments);
    }

    _createClass(SensorEvent, [{
      key: "pageX",
      get: function get() {
        return this.data.pageX || null;
      }
    }, {
      key: "pageY",
      get: function get() {
        return this.data.pageY || null;
      }
    }, {
      key: "target",
      get: function get() {
        return this.data.target || null;
      },
      set: function set(value) {
        this.data.target = value;
      }
    }, {
      key: "caller",
      get: function get() {
        return this.data.caller || null;
      }
    }, {
      key: "originalEvent",
      get: function get() {
        return this.data.originalEvent || null;
      }
    }, {
      key: "preventDefault",
      value: function preventDefault() {
        var _this$originalEvent;

        (_this$originalEvent = this.originalEvent) === null || _this$originalEvent === void 0 ? void 0 : _this$originalEvent.preventDefault();
      }
    }, {
      key: "stopPropagation",
      value: function stopPropagation() {
        var _this$originalEvent2;

        (_this$originalEvent2 = this.originalEvent) === null || _this$originalEvent2 === void 0 ? void 0 : _this$originalEvent2.stopPropagation();
      }
    }]);

    return SensorEvent;
  }(AbstractEvent);

  var MouseDownEvent = /*#__PURE__*/function (_SensorEvent) {
    _inherits(MouseDownEvent, _SensorEvent);

    var _super = _createSuper(MouseDownEvent);

    function MouseDownEvent() {
      _classCallCheck(this, MouseDownEvent);

      return _super.apply(this, arguments);
    }

    return MouseDownEvent;
  }(SensorEvent);

  _defineProperty(MouseDownEvent, "type", 'mouse:down');

  _defineProperty(MouseDownEvent, "cancelable", true);

  var MouseStartEvent = /*#__PURE__*/function (_SensorEvent2) {
    _inherits(MouseStartEvent, _SensorEvent2);

    var _super2 = _createSuper(MouseStartEvent);

    function MouseStartEvent() {
      _classCallCheck(this, MouseStartEvent);

      return _super2.apply(this, arguments);
    }

    return MouseStartEvent;
  }(SensorEvent);

  _defineProperty(MouseStartEvent, "type", 'mouse:start');

  _defineProperty(MouseStartEvent, "cancelable", true);

  var MouseMoveEvent = /*#__PURE__*/function (_SensorEvent3) {
    _inherits(MouseMoveEvent, _SensorEvent3);

    var _super3 = _createSuper(MouseMoveEvent);

    function MouseMoveEvent() {
      _classCallCheck(this, MouseMoveEvent);

      return _super3.apply(this, arguments);
    }

    return MouseMoveEvent;
  }(SensorEvent);

  _defineProperty(MouseMoveEvent, "type", 'mouse:move');

  var MouseStopEvent = /*#__PURE__*/function (_SensorEvent4) {
    _inherits(MouseStopEvent, _SensorEvent4);

    var _super4 = _createSuper(MouseStopEvent);

    function MouseStopEvent() {
      _classCallCheck(this, MouseStopEvent);

      return _super4.apply(this, arguments);
    }

    return MouseStopEvent;
  }(SensorEvent);

  _defineProperty(MouseStopEvent, "type", 'mouse:stop');

  var toArray$1 = Function.prototype.bind.call(Function.prototype.call, [].slice);

  var show = function show(element) {
    if (element) {
      var previous = element.previousDisplay || null;
      style(element, {
        display: previous || ''
      });
    }
  };

  var hide = function hide(element) {
    if (element) {
      element.previousDisplay = style(element, 'display') || null;
      style(element, {
        display: 'none'
      });
    }
  };

  var disableSelection = function disableSelection(element) {
    if (element) {
      var eventName = 'onselectstart' in document.createElement('div') ? 'selectstart' : 'mousedown';
      return listen(element, eventName, function (event) {
        return event.preventDefault();
      });
    }

    return null;
  };

  var getParents = function getParents(element) {
    var until = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var nextNode = element;
    var parents = [];

    while (nextNode && nextNode.parentNode && nextNode.parentNode !== document) {
      if (until && matches(nextNode.parentNode, until)) {
        break;
      }

      parents.push(nextNode.parentNode);
      nextNode = nextNode.parentNode;
    }

    return parents;
  };

  var getSibling = function getSibling(element, direction, skip) {
    var sibling = null;
    var nextNode = element;
    var prop = direction === 'previous' ? 'previousElementSibling' : 'nextElementSibling';

    while (nextNode && nextNode[prop]) {
      if (skip && matches(nextNode[prop], skip)) {
        nextNode = nextNode[prop];
      } else {
        sibling = nextNode[prop];
        break;
      }
    }

    return sibling;
  };

  var getChildIndex = function getChildIndex(element) {
    var index = 0;
    var nextNode = element;

    while (nextNode && nextNode.previousElementSibling) {
      nextNode = nextNode.previousElementSibling;
      index++;
    }

    return index;
  };

  var containsStrict = function containsStrict(reference, element) {
    return reference !== element && contains(reference, element);
  };

  var insertBefore = function insertBefore(element, reference) {
    if (element && reference && reference.parentNode) {
      reference.parentNode.insertBefore(element, reference);
    }

    return element;
  };

  var insertAfter = function insertAfter(element, reference) {
    if (element && reference && reference.parentNode) {
      if (reference.nextSibling) {
        reference.parentNode.insertBefore(element, reference.nextSibling);
      } else {
        reference.parentNode.appendChild(element);
      }
    }

    return element;
  };

  var createElement = function createElement(tag) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var contents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var node = document.createElement(tag);

    if (isPlainObject_1(attrs)) {
      forEach_1(attrs, function (value, name) {
        attribute(node, name, value);
      });
    }

    if (parent && parent.nodeType === 1) {
      parent.appendChild(node);
    }

    if (contents) {
      node.innerHTML = contents;
    }

    return node;
  };

  var createMouseStopEvent = function createMouseStopEvent(target) {
    return new MouseStopEvent({
      target: target,
      originalEvent: createMouseEvent('mouseup', target)
    });
  };

  var createMouseEvent = function createMouseEvent(type, target) {
    var eventOptions = {
      button: 0,
      bubbles: true,
      cancelable: true,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      clientX: 1,
      clientY: 1,
      screenX: 0,
      screenY: 0,
      view: document.defaultView,
      target: target,
      relatedTarget: document.documentElement
    };
    return new MouseEvent('mouseup', eventOptions);
  };

  var triggerEvent = function triggerEvent(element, type) {
    if (element) {
      var event = document.createEvent('HTMLEvents');
      event.initEvent(type, false, true);
      element.dispatchEvent(event);
    }
  };

  var blurActiveElement = function blurActiveElement(event) {
    var active = activeElement();

    if (!containsStrict(active, event.target) && active !== document.body) {
      triggerEvent(active, 'blur');
    }
  };

  var isFloating = function isFloating(element) {
    return /(left|right)/.test(style(element, 'float') || /(inline|table-cell)/.test(style(element, 'display')));
  };

  var getPaddingAndBorder = function getPaddingAndBorder(element) {
    var dimensions = [];
    var borders = [style(element, 'borderTop'), style(element, 'borderRight'), style(element, 'borderBottom'), style(element, 'borderLeft')];
    var paddings = [style(element, 'paddingTop'), style(element, 'paddingRight'), style(element, 'paddingBottom'), style(element, 'paddingLeft')];

    for (var i = 0; i < 4; i++) {
      dimensions[i] = (parseFloat(borders[i]) || 0) + (parseFloat(paddings[i]) || 0);
    }

    return {
      width: dimensions[1] + dimensions[3],
      height: dimensions[0] + dimensions[2]
    };
  };

  var setPositionRelative = function setPositionRelative(element) {
    var pos = style(element, 'position');

    if (!/^(?:r|a|f)/.test(pos)) {
      style(element, {
        position: 'relative'
      });
    }
  };

  var setPositionAbsolute = function setPositionAbsolute(element) {
    var pos = style(element, 'position');

    if (!/^(?:fixed|absolute)/.test(pos)) {
      style(element, {
        position: 'absolute'
      });
    }
  };

  var styleAsNumber = function styleAsNumber(element, prop) {
    return parseInt(style(element, prop), 10) || 0;
  };

  var scrollParent = function scrollParent(element) {
    var includeHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var position = style(element, 'position');
    var excludeStatic = position === 'absolute';

    if (position === 'fixed') {
      return document;
    }

    var regex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
    var filtered = getParents(element).filter(function (parent) {
      if (excludeStatic && style(parent, 'position') === 'static') {
        return false;
      }

      return regex.test(style(parent, 'overflow') + style(parent, 'overflowX') + style(parent, 'overflowY'));
    });
    return filtered.length > 0 ? filtered[0] : document;
  };

  var intersect = function intersect(source, target, tolerance, event) {
    switch (tolerance) {
      case 'fit':
        return source.left >= target.left && source.top >= target.top && source.right >= target.right && source.bottom >= target.bottom;

      case 'intersect':
        return target.left < source.left + source.width / 2 && target.right > source.right - source.width / 2 && target.top < source.top + source.height / 2 && target.bottom > source.bottom - source.height / 2;

      case 'pointer':
        return event.pageX > target.left && event.pageX < target.right && event.pageY > target.top && event.pageY < target.bottom;

      case 'touch':
        return (source.left >= target.left && source.left <= target.right || source.right >= target.left && source.right <= target.right || source.left < target.left && source.right > target.right) && (source.top >= target.top && source.top <= target.top || source.bottom >= target.bottom && source.bottom <= target.bottom || source.top < target.top && source.bottom > target.bottom);

      default:
        return false;
    }
  };

  var isRoot = function isRoot(element) {
    var includeBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return element === document || element === document.documentElement || includeBody && element === document.body;
  };

  var injectStyles = function injectStyles(className, rules) {
    var buffer = [".".concat(className, " {")];
    forEach_1(rules, function (value, name) {
      buffer.push("".concat(kebabCase_1(name), ": ").concat(value, ";"));
    });
    buffer.push('}');
    injectGlobal(buffer.join('\n'));
  };

  var instance = null;
  var DragDropManager = function DragDropManager() {
    var _this = this;

    _classCallCheck(this, DragDropManager);

    _defineProperty(this, "draggable", null);

    _defineProperty(this, "droppables", {});

    _defineProperty(this, "getDroppables", function (scope) {
      return _this.droppables[scope] || [];
    });

    _defineProperty(this, "addDroppable", function (droppable, scope) {
      if (droppable && scope) {
        if (!_this.droppables[scope]) {
          _this.droppables[scope] = [];
        }

        _this.droppables[scope].push(droppable);
      }
    });

    _defineProperty(this, "removeDroppable", function (droppable, scope) {
      if (droppable && _this.droppables[scope]) {
        _this.droppables[scope] = _this.droppables[scope].filter(function (item) {
          return item !== droppable;
        });
      }
    });

    _defineProperty(this, "prepareOffsets", function (draggable, event) {
      var type = event.type;
      _this.draggable = draggable;

      _this.getDroppables(draggable.scope).forEach(function (droppable) {
        droppable.refreshVisibility();

        if (droppable.visible) {
          if (droppable.accept(draggable)) {
            if (type === 'mouse:start') {
              droppable.activate(event);
            }

            droppable.refreshProportions();
          }
        }
      });
    });

    _defineProperty(this, "onDragMove", function (draggable, event) {
      _this.getDroppables(draggable.scope).forEach(function (droppable) {
        var intersects = droppable.intersect(draggable, event);

        if (intersects && !droppable.isOver || !intersects && droppable.isOver) {
          var parentDroppable;
          var element = droppable.element;
          var _droppable$options = droppable.options,
              greedy = _droppable$options.greedy,
              scope = _droppable$options.scope;

          if (greedy) {
            var parents = getParents(element).filter(function (element) {
              return element[droppable.dataProperty] && element[droppable.dataProperty].options.scope === scope;
            });

            if (parents.length > 0) {
              parentDroppable = parents[0][droppable.dataProperty];
              parentDroppable.greedyChild = intersects;

              if (intersects) {
                parentDroppable.out(event);
              }
            }
          }

          if (intersects) {
            droppable.over(event);
          } else {
            droppable.out(event);
          }

          if (parentDroppable && !intersects) {
            parentDroppable.over(event);
          }
        }
      });
    });

    _defineProperty(this, "onDragStop", function (draggable, event) {
      _this.prepareOffsets(draggable, event);
    });

    _defineProperty(this, "drop", function (draggable, event) {
      var dropped = null;

      _this.getDroppables(draggable.scope).forEach(function (droppable) {
        if (droppable.intersect(draggable, event)) {
          dropped = droppable.drop(event) || dropped;
        }

        if (droppable.accept(draggable)) {
          droppable.deactivate(event);
        }
      });

      _this.draggable = null;
      return dropped;
    });
  };

  if (!instance) {
    instance = new DragDropManager();
  }

  var DragDropManager$1 = instance;

  var AutoScroll = /*#__PURE__*/function (_Plugin) {
    _inherits(AutoScroll, _Plugin);

    var _super = _createSuper(AutoScroll);

    function AutoScroll(container) {
      var _this;

      _classCallCheck(this, AutoScroll);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "scrollParent", null);

      _defineProperty(_assertThisInitialized(_this), "scrollParentOffset", null);

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (event) {
        if (!_this.scroll) {
          return;
        }

        var helperAttrs = _this.container.helperAttrs;

        if (!_this.scrollParent) {
          _this.scrollParent = helperAttrs.scrollParent;
        }

        if (!isRoot(_this.scrollParent, false)) {
          _this.scrollParentOffset = offset(_this.scrollParent);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragMove", function (event) {
        if (!_this.scroll) {
          return;
        }

        var scrolled = false;
        var sensorEvent = event.sensorEvent;

        var _assertThisInitialize = _assertThisInitialized(_this),
            scrollParent = _assertThisInitialize.scrollParent,
            scrollParentOffset = _assertThisInitialize.scrollParentOffset;

        var helperSize = _this.container.helperSize;
        var click = _this.container.offset.click;
        var _this$container$optio = _this.container.options,
            axis = _this$container$optio.axis,
            scrollSensitivity = _this$container$optio.scrollSensitivity,
            scrollSpeed = _this$container$optio.scrollSpeed;
        var pos = {
          x: sensorEvent.pageX - click.left - (isRoot(_this.scrollParent, false) ? scrollLeft(document) : 0),
          y: sensorEvent.pageY - click.top - (isRoot(_this.scrollParent, false) ? scrollTop(document) : 0)
        };

        if (!isRoot(_this.scrollParent, false)) {
          if (!axis || axis !== 'y') {
            if (scrollParentOffset.left + scrollParent.offsetWidth - (pos.x + helperSize.width) < scrollSensitivity) {
              scrollParent.scrollLeft = scrollParent.scrollLeft + scrollSpeed;
              scrolled = true;
            } else if (pos.x - scrollParentOffset.left < scrollSensitivity) {
              scrollParent.scrollLeft = scrollParent.scrollLeft - scrollSpeed;
              scrolled = true;
            }
          }

          if (!axis || axis !== 'x') {
            if (scrollParentOffset.top + scrollParent.offsetHeight - (pos.y + helperSize.height) < scrollSensitivity) {
              scrollParent.scrollTop = scrollParent.scrollTop + scrollSpeed;
              scrolled = true;
            } else if (pos.y - scrollParentOffset.top < scrollSensitivity) {
              scrollParent.scrollTop = scrollParent.scrollTop - scrollSpeed;
              scrolled = true;
            }
          }
        } else {
          if (!axis || axis !== 'y') {
            if (pos.x < scrollSensitivity) {
              scrollLeft(document, scrollLeft(document) - scrollSpeed);
              scrolled = true;
            } else if (window.innerWidth - (pos.x + helperSize.width) < scrollSensitivity) {
              scrollLeft(document, scrollLeft(document) + scrollSpeed);
              scrolled = true;
            }
          }

          if (!axis || axis !== 'x') {
            if (pos.y < scrollSensitivity) {
              scrollTop(document, scrollTop(document) - scrollSpeed);
              scrolled = true;
            } else if (window.innerHeight - (pos.y + helperSize.height) < scrollSensitivity) {
              scrollTop(document, scrollTop(document) + scrollSpeed);
              scrolled = true;
            }
          }
        }

        if (scrolled) {
          DragDropManager$1.prepareOffsets(_this.container, sensorEvent);
        }
      });

      _this.attach();

      return _this;
    }

    _createClass(AutoScroll, [{
      key: "supported",
      get: function get() {
        return this.isDraggable() || this.isSortable();
      }
    }, {
      key: "scroll",
      get: function get() {
        var options = this.container.options;
        return options.scroll;
      }
    }]);

    return AutoScroll;
  }(Plugin);

  var AxisConstraint = /*#__PURE__*/function (_Plugin) {
    _inherits(AxisConstraint, _Plugin);

    var _super = _createSuper(AxisConstraint);

    function AxisConstraint(container) {
      var _this;

      _classCallCheck(this, AxisConstraint);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "constraintPosition", function (pos) {
        var startEvent = _this.container.startEvent;

        if (_this.axis === 'y') {
          pos.pageX = startEvent.pageX;
        } else if (_this.axis === 'x') {
          pos.pageY = startEvent.pageY;
        }

        return pos;
      });

      _this.attach();

      return _this;
    }

    _createClass(AxisConstraint, [{
      key: "supported",
      get: function get() {
        return this.isDraggable() || this.isSortable();
      }
    }, {
      key: "axis",
      get: function get() {
        var _this$container$optio = this.container.options.axis,
            axis = _this$container$optio === void 0 ? null : _this$container$optio;
        return axis;
      }
    }]);

    return AxisConstraint;
  }(Plugin);

  var SortableEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(SortableEvent, _AbstractEvent);

    var _super = _createSuper(SortableEvent);

    function SortableEvent() {
      _classCallCheck(this, SortableEvent);

      return _super.apply(this, arguments);
    }

    _createClass(SortableEvent, [{
      key: "sortable",
      get: function get() {
        return this.data.sortable || null;
      }
    }]);

    return SortableEvent;
  }(AbstractEvent);

  _defineProperty(SortableEvent, "type", 'sortable');

  var SortableInitEvent = /*#__PURE__*/function (_SortableEvent) {
    _inherits(SortableInitEvent, _SortableEvent);

    var _super2 = _createSuper(SortableInitEvent);

    function SortableInitEvent() {
      _classCallCheck(this, SortableInitEvent);

      return _super2.apply(this, arguments);
    }

    return SortableInitEvent;
  }(SortableEvent);

  _defineProperty(SortableInitEvent, "type", 'sortable:init');

  var SortableActivateEvent = /*#__PURE__*/function (_SortableEvent2) {
    _inherits(SortableActivateEvent, _SortableEvent2);

    var _super3 = _createSuper(SortableActivateEvent);

    function SortableActivateEvent() {
      _classCallCheck(this, SortableActivateEvent);

      return _super3.apply(this, arguments);
    }

    _createClass(SortableActivateEvent, [{
      key: "sensorEvent",
      get: function get() {
        return this.data.sensorEvent || null;
      }
    }, {
      key: "draggable",
      get: function get() {
        return this.data.draggable || null;
      }
    }, {
      key: "peerSortable",
      get: function get() {
        return this.data.sortable || null;
      }
    }]);

    return SortableActivateEvent;
  }(SortableEvent);

  _defineProperty(SortableActivateEvent, "type", 'sortable:activate');

  var SortableOverEvent = /*#__PURE__*/function (_SortableActivateEven) {
    _inherits(SortableOverEvent, _SortableActivateEven);

    var _super4 = _createSuper(SortableOverEvent);

    function SortableOverEvent() {
      _classCallCheck(this, SortableOverEvent);

      return _super4.apply(this, arguments);
    }

    return SortableOverEvent;
  }(SortableActivateEvent);

  _defineProperty(SortableOverEvent, "type", 'sortable:over');

  var SortableChangeEvent = /*#__PURE__*/function (_SortableEvent3) {
    _inherits(SortableChangeEvent, _SortableEvent3);

    var _super5 = _createSuper(SortableChangeEvent);

    function SortableChangeEvent() {
      _classCallCheck(this, SortableChangeEvent);

      return _super5.apply(this, arguments);
    }

    return SortableChangeEvent;
  }(SortableEvent);

  _defineProperty(SortableChangeEvent, "type", 'sortable:change');

  var SortableRemoveEvent = /*#__PURE__*/function (_SortableEvent4) {
    _inherits(SortableRemoveEvent, _SortableEvent4);

    var _super6 = _createSuper(SortableRemoveEvent);

    function SortableRemoveEvent() {
      _classCallCheck(this, SortableRemoveEvent);

      return _super6.apply(this, arguments);
    }

    _createClass(SortableRemoveEvent, [{
      key: "item",
      get: function get() {
        return this.data.item || null;
      }
    }, {
      key: "previousIndex",
      get: function get() {
        return this.data.previousIndex || null;
      }
    }, {
      key: "peerSortable",
      get: function get() {
        return this.data.peerSortable || null;
      }
    }]);

    return SortableRemoveEvent;
  }(SortableEvent);

  _defineProperty(SortableRemoveEvent, "type", 'sortable:remove');

  var SortableReceiveEvent = /*#__PURE__*/function (_SortableEvent5) {
    _inherits(SortableReceiveEvent, _SortableEvent5);

    var _super7 = _createSuper(SortableReceiveEvent);

    function SortableReceiveEvent() {
      _classCallCheck(this, SortableReceiveEvent);

      return _super7.apply(this, arguments);
    }

    _createClass(SortableReceiveEvent, [{
      key: "item",
      get: function get() {
        return this.data.item || null;
      }
    }, {
      key: "newIndex",
      get: function get() {
        return this.data.newIndex || null;
      }
    }, {
      key: "draggable",
      get: function get() {
        return this.data.draggable || null;
      }
    }, {
      key: "peerSortable",
      get: function get() {
        return this.data.peerSortable || null;
      }
    }]);

    return SortableReceiveEvent;
  }(SortableEvent);

  _defineProperty(SortableReceiveEvent, "type", 'sortable:receive');

  var SortableUpdateEvent = /*#__PURE__*/function (_SortableEvent6) {
    _inherits(SortableUpdateEvent, _SortableEvent6);

    var _super8 = _createSuper(SortableUpdateEvent);

    function SortableUpdateEvent() {
      _classCallCheck(this, SortableUpdateEvent);

      return _super8.apply(this, arguments);
    }

    _createClass(SortableUpdateEvent, [{
      key: "item",
      get: function get() {
        return this.data.item || null;
      }
    }, {
      key: "previousIndex",
      get: function get() {
        return this.data.previousIndex || null;
      }
    }, {
      key: "newIndex",
      get: function get() {
        return this.data.newIndex || null;
      }
    }, {
      key: "peerSortable",
      get: function get() {
        return this.data.peerSortable || null;
      }
    }]);

    return SortableUpdateEvent;
  }(SortableEvent);

  _defineProperty(SortableUpdateEvent, "type", 'sortable:update');

  var SortableOutEvent = /*#__PURE__*/function (_SortableActivateEven2) {
    _inherits(SortableOutEvent, _SortableActivateEven2);

    var _super9 = _createSuper(SortableOutEvent);

    function SortableOutEvent() {
      _classCallCheck(this, SortableOutEvent);

      return _super9.apply(this, arguments);
    }

    return SortableOutEvent;
  }(SortableActivateEvent);

  _defineProperty(SortableOutEvent, "type", 'sortable:out');

  var SortableDeactivateEvent = /*#__PURE__*/function (_SortableActivateEven3) {
    _inherits(SortableDeactivateEvent, _SortableActivateEven3);

    var _super10 = _createSuper(SortableDeactivateEvent);

    function SortableDeactivateEvent() {
      _classCallCheck(this, SortableDeactivateEvent);

      return _super10.apply(this, arguments);
    }

    return SortableDeactivateEvent;
  }(SortableActivateEvent);

  _defineProperty(SortableDeactivateEvent, "type", 'sortable:deactivate');

  var SortableDestroyEvent = /*#__PURE__*/function (_SortableEvent7) {
    _inherits(SortableDestroyEvent, _SortableEvent7);

    var _super11 = _createSuper(SortableDestroyEvent);

    function SortableDestroyEvent() {
      _classCallCheck(this, SortableDestroyEvent);

      return _super11.apply(this, arguments);
    }

    return SortableDestroyEvent;
  }(SortableEvent);

  _defineProperty(SortableDestroyEvent, "type", 'sortable:destroy');

  var draggableProp = 'draggableInstance';
  var draggableEl = 'ui-draggable';
  var draggableHandle = 'ui-draggable-handle';
  var draggableHelper = 'ui-draggable-helper';
  var droppableProp = 'droppableInstance';
  var droppableEl = 'ui-droppable';
  var droppableActive = 'ui-droppable-active';
  var droppableHover = 'ui-droppable-hover';
  var sortableProp = 'sortableInstance';
  var sortableEl = 'ui-sortable';
  var sortableHandle = 'ui-sortable-handle';
  var sortableHelper = 'ui-sortable-helper';
  var sortablePlaceholder = 'ui-sortable-placeholder';
  var resizableProp = 'resizableInstance';
  var resizableEl = 'ui-resizable';
  var resizableWrapper = 'ui-resizable-wrapper';
  var resizableAutoHide = 'ui-resizable-autohide';
  var resizableHandle = 'ui-resizable-handle';
  var resizableHandleProp = 'resizableDirection';
  var resizableHelper = 'ui-resizable-helper';
  var resizableResizing = 'ui-resizable-resizing';
  var resizableGhost = 'ui-resizable-ghost';
  var resizableDirections = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];
  var resizableCornerIcons = {
    ne: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16"><g><polygon points="16,0 16,16 0,0" fill="darkgray" /></g></svg>',
    nw: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16"><g><polygon points="0,0 0,16 16,0" fill="darkgray" /></g></svg>',
    se: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16"><g><polygon points="0,16 16,16 16,0" fill="darkgray" /></g></svg>',
    sw: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16"><g><polygon points="0,0 0,16 16,16" fill="darkgray" /></g></svg>'
  };
  var resizableDirectionStyles = {
    n: {
      cursor: 'n-resize',
      height: '7px',
      width: '100%',
      top: '-5px',
      left: '0'
    },
    s: {
      cursor: 's-resize',
      height: '7px',
      width: '100%',
      bottom: '-5px',
      left: '0'
    },
    e: {
      cursor: 'e-resize',
      width: '7px',
      right: '-5px',
      top: '0',
      height: '100%'
    },
    w: {
      cursor: 'w-resize',
      width: '7px',
      left: '-5px',
      top: '0',
      height: '100%'
    },
    nw: {
      cursor: 'nw-resize',
      width: '12px',
      height: '12px',
      left: '1px',
      top: '1px',
      backgroundImage: "url('data:image/svg+xml;utf8,".concat(encodeURIComponent(resizableCornerIcons.nw), "')"),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    ne: {
      cursor: 'ne-resize',
      width: '12px',
      height: '12px',
      right: '1px',
      top: '1px',
      backgroundImage: "url('data:image/svg+xml;utf8,".concat(encodeURIComponent(resizableCornerIcons.ne), "')"),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    se: {
      cursor: 'se-resize',
      width: '12px',
      height: '12px',
      right: '1px',
      bottom: '1px',
      backgroundImage: "url('data:image/svg+xml;utf8,".concat(encodeURIComponent(resizableCornerIcons.se), "')"),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    sw: {
      cursor: 'sw-resize',
      width: '12px',
      height: '12px',
      left: '1px',
      bottom: '1px',
      backgroundImage: "url('data:image/svg+xml;utf8,".concat(encodeURIComponent(resizableCornerIcons.sw), "')"),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  };

  var ConnectToSortable = /*#__PURE__*/function (_Plugin) {
    _inherits(ConnectToSortable, _Plugin);

    var _super = _createSuper(ConnectToSortable);

    function ConnectToSortable(container) {
      var _this;

      _classCallCheck(this, ConnectToSortable);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (event) {
        if (_this.connectToSortable) {
          _this.container.connectedSortables = [];
          qsa(document, _this.connectToSortable).forEach(function (element) {
            var sortable = element[sortableProp];

            if (sortable && !sortable.disabled) {
              _this.container.connectedSortables.push(sortable);

              sortable.refreshPositions();
              sortable.trigger(new SortableActivateEvent({
                sortable: sortable,
                sensorEvent: event.sensorEvent,
                draggable: _this.container
              }));
            }
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragMove", function (event) {
        var sensorEvent = event.sensorEvent;

        if (_this.connectToSortable) {
          _this.container.connectedSortables.forEach(function (sortable) {
            var intersecting = false;
            var _this$container = _this.container,
                helperSize = _this$container.helperSize,
                position = _this$container.position;
            var _this$container$offse = _this.container.offset,
                click = _this$container$offse.click,
                parent = _this$container$offse.parent;
            sortable.helperSize = helperSize;
            sortable.offset.click = click;
            sortable.position.absolute = position.absolute;

            if (sortable.intersectsWith(sortable.elementProportions)) {
              intersecting = true;

              _this.container.connectedSortables.forEach(function (innerSortable) {
                innerSortable.helperSize = helperSize;
                innerSortable.offset.click = click;
                innerSortable.position.absolute = position.absolute;

                if (innerSortable !== sortable && innerSortable.intersectsWith(innerSortable.elementProportions) && containsStrict(sortable.element, innerSortable.element)) {
                  intersecting = false;
                }
              });
            }

            if (intersecting) {
              if (!sortable.isDraggableOver) {
                if (!_this.container.previousHelperParent) {
                  _this.container.previousHelperParent = _this.container.helper.parentNode;
                }

                _this.container.helper[sortableProp] = sortable;
                sortable.element.appendChild(_this.container.helper);
                sortable.previousHelper = sortable.options.helper;

                sortable.options.helper = function () {
                  return _this.container.helper;
                };

                sortable.currentItem = _this.container.helper;
                sortable.connectedDraggable = _this.container;
                sensorEvent.target = sortable.currentItem;
                sortable.over(null, _this.container);
                sortable.isDraggableOver = true;
                sortable.onDragStart({
                  detail: sensorEvent
                }, true, true);
                sortable.offset.click = click;
                sortable.offset.parent.left -= parent.left - sortable.offset.parent.left;
                sortable.offset.parent.top -= parent.top - sortable.offset.parent.top;

                _this.container.connectedSortables.forEach(function (sortable) {
                  return sortable.refreshPositions();
                });
              }

              if (sortable.currentItem) {
                sortable.onDragMove({
                  detail: sensorEvent
                }, false, true);
                event.position = sortable.position.current;
              }
            } else if (!intersecting && sortable.isDraggableOver) {
              sortable.previousRevert = sortable.options.revert;
              sortable.options.revert = false;
              sortable.out(null, _this.container);
              sortable.isDraggableOver = false;
              sortable.cancelHelperRemoval = sortable.helper === sortable.currentItem;

              if (sortable.placeholder) {
                sortable.placeholder.parentNode.removeChild(sortable.placeholder);
              }

              sortable.onDragStop({
                detail: sensorEvent
              }, true);
              sortable.options.helper = sortable.previousHelper;
              sortable.previousHelper = null;
              sortable.options.revert = sortable.previousRevert;
              sortable.previousRevert = null;

              _this.container.previousHelperParent.appendChild(_this.container.helper);

              _this.container.helper[sortableProp] = null;

              _this.container.calculateOffsets(sensorEvent);

              _this.container.calculatePosition(sensorEvent);

              _this.container.connectedSortables.forEach(function (sortable) {
                return sortable.refreshPositions();
              });

              event.position = _this.container.position.current;
            }
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStop", function (event) {
        var sensorEvent = event.sensorEvent;

        if (_this.connectToSortable) {
          _this.container.cancelHelperRemoval = false;

          _this.container.connectedSortables.forEach(function (sortable) {
            if (sortable.isDraggableOver) {
              delete _this.container.helper[sortableProp];
              _this.container.cancelHelperRemoval = true;
              sortable.cancelHelperRemoval = false;
              sortable.options.helper = sortable.previousHelper;
              sortable.previousHelper = null;
              sortable.previousRevert = sortable.options.revert;
              sortable.options.revert = false;
              event.droppedSortable = sortable;
              sortable.out(null, _this.container);
              sortable.isDraggableOver = false;
              sortable.currentItemStyle = {
                position: style(sortable.placeholder, 'position'),
                left: styleAsNumber(sortable.placeholder, 'left'),
                top: styleAsNumber(sortable.placeholder, 'top')
              };
              sortable.onDragStop({
                detail: sensorEvent
              }, true);
              sortable.options.revert = sortable.previousRevert;
              sortable.previousRevert = null;
              sortable.currentItem = null;
              sortable.connectedDraggable = null;
              _this.container.helper[sortableProp] = null;

              _this.container.connectedSortables.forEach(function (sortable) {
                return sortable.refreshPositions();
              });
            } else {
              sortable.cancelHelperRemoval = false;
            }

            sortable.trigger(new SortableDeactivateEvent({
              sortable: sortable,
              sensorEvent: sensorEvent,
              draggable: _this.container
            }));
            sortable.currentItem = null;
            sortable.connectedDraggable = null;
          });

          _this.container.connectedSortables = [];
        }
      });

      _this.attach();

      return _this;
    }

    _createClass(ConnectToSortable, [{
      key: "supported",
      get: function get() {
        return this.isSortable();
      }
    }, {
      key: "connectToSortable",
      get: function get() {
        var connectToSortable = this.container.options.connectToSortable;
        return connectToSortable || null;
      }
    }]);

    return ConnectToSortable;
  }(Plugin);

  var $$8 = _export;
  var isArray$1 = isArray$9;

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  $$8({ target: 'Array', stat: true }, {
    isArray: isArray$1
  });

  var DragContainmentConstraint = /*#__PURE__*/function (_Plugin) {
    _inherits(DragContainmentConstraint, _Plugin);

    var _super = _createSuper(DragContainmentConstraint);

    function DragContainmentConstraint(container) {
      var _this;

      _classCallCheck(this, DragContainmentConstraint);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "constraintPosition", function (pos) {
        if (_this.containment) {
          var _this$containment = _slicedToArray(_this.containment, 4),
              xMin = _this$containment[0],
              yMin = _this$containment[1],
              xMax = _this$containment[2],
              yMax = _this$containment[3];

          var containmentContainer = _this.container.containmentContainer;
          var click = _this.container.offset.click;

          if (containmentContainer) {
            var containerOffset = offset(containmentContainer);
            xMin += containerOffset.left;
            yMin += containerOffset.top;
            xMax += containerOffset.left;
            yMax += containerOffset.top;
          }

          if (pos.pageX - click.left < xMin) {
            pos.pageX = xMin + click.left;
          }

          if (pos.pageY - click.top < yMin) {
            pos.pageY = yMin + click.top;
          }

          if (pos.pageX - click.left > xMax) {
            pos.pageX = xMax + click.left;
          }

          if (pos.pageY - click.top > yMax) {
            pos.pageY = yMax + click.top;
          }
        }

        return pos;
      });

      _this.attach();

      return _this;
    }

    _createClass(DragContainmentConstraint, [{
      key: "supported",
      get: function get() {
        return this.isDraggable() || this.isSortable();
      }
    }, {
      key: "containment",
      get: function get() {
        if (this.container.containmentCoords === undefined) {
          var containment = this.container.options.containment;
          var _this$container$offse = this.container.offset,
              parent = _this$container$offse.parent,
              relative = _this$container$offse.relative;
          var _this$container = this.container,
              helper = _this$container.helper,
              helperSize = _this$container.helperSize,
              margins = _this$container.margins;

          if (containment === 'window') {
            this.container.containmentCoords = [window.pageXOffset - parent.left - relative.left, window.pageYOffset - parent.top - relative.top, window.pageXOffset + window.innerWidth - helperSize.width - margins.left, window.pageYOffset + window.innerHeight - helperSize.height - margins.top];
          } else if (containment === 'document') {
            this.container.containmentCoords = [0, 0, getWidth(document) - helperSize.width - margins.left, height(document) - helperSize.height - margins.top];
          } else if (Array.isArray(containment) && containment.length === 4) {
            this.container.containmentCoords = containment;
          } else {
            var node = containment === 'parent' ? helper.parentNode : document.querySelector(containment);

            if (node) {
              var scrollable = /(scroll|auto)/.test(style(node, 'overflow'));
              this.container.containmentContainer = node;
              this.container.containmentCoords = [styleAsNumber(node, 'borderLeftWidth') + styleAsNumber(node, 'paddingLeft'), styleAsNumber(node, 'borderTopWidth') + styleAsNumber(node, 'paddingTop'), (scrollable ? Math.max(node.scrollWidth, node.offsetWidth) : node.offsetWidth) - styleAsNumber(node, 'borderRightWidth') - styleAsNumber(node, 'paddingRight') - helperSize.width - margins.left - margins.right, (scrollable ? Math.max(node.scrollHeight, node.offsetHeight) : node.offsetHeight) - styleAsNumber(node, 'borderBottomWidth') - styleAsNumber(node, 'paddingBottom') - helperSize.height - margins.top - margins.bottom];
            } else {
              this.container.containmentCoords = null;
            }
          }
        }

        return this.container.containmentCoords;
      }
    }]);

    return DragContainmentConstraint;
  }(Plugin);

  var DragGridConstraint = /*#__PURE__*/function (_Plugin) {
    _inherits(DragGridConstraint, _Plugin);

    var _super = _createSuper(DragGridConstraint);

    function DragGridConstraint(container) {
      var _this;

      _classCallCheck(this, DragGridConstraint);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "constraintPosition", function (pos) {
        if (_this.grid) {
          var xMin, xMax, yMin, yMax;

          var _this$grid = _slicedToArray(_this.grid, 2),
              x = _this$grid[0],
              y = _this$grid[1];

          var _this$container = _this.container,
              containmentCoords = _this$container.containmentCoords,
              containmentContainer = _this$container.containmentContainer,
              startEvent = _this$container.startEvent;
          var click = _this.container.offset.click;

          if (containmentCoords) {
            var _containmentCoords = _slicedToArray(containmentCoords, 4);

            xMin = _containmentCoords[0];
            yMin = _containmentCoords[1];
            xMax = _containmentCoords[2];
            yMax = _containmentCoords[3];

            if (containmentCoords && containmentContainer) {
              var containerOffset = offset(containmentContainer);
              xMin += containerOffset.left;
              yMin += containerOffset.top;
              xMax += containerOffset.left;
              yMax += containerOffset.top;
            }
          }

          var left = x ? startEvent.pageX + Math.round((pos.pageX - startEvent.pageX) / x) * x : startEvent.pageX;
          var top = y ? startEvent.pageY + Math.round((pos.pageY - startEvent.pageY) / y) * y : startEvent.pageY;

          if (containmentCoords) {
            if (left - click.left >= xMin || left - click.left > xMax) {
              pos.pageX = left;
            } else {
              pos.pageX = left + x;
            }

            if (top - click.top >= yMin || top - click.top > yMax) {
              pos.pageY = top;
            } else {
              pos.pageY = top + y;
            }
          } else {
            pos.pageX = left;
            pos.pageY = top;
          }
        }

        return pos;
      });

      _this.attach();

      return _this;
    }

    _createClass(DragGridConstraint, [{
      key: "supported",
      get: function get() {
        return this.isDraggable() || this.isSortable();
      }
    }, {
      key: "grid",
      get: function get() {
        var options = this.container.options;
        return Array.isArray(options.grid) && options.grid.length === 2 ? options.grid : null;
      }
    }]);

    return DragGridConstraint;
  }(Plugin);

  var ResizeContainmentConstraint = /*#__PURE__*/function (_Plugin) {
    _inherits(ResizeContainmentConstraint, _Plugin);

    var _super = _createSuper(ResizeContainmentConstraint);

    function ResizeContainmentConstraint(container) {
      var _this;

      _classCallCheck(this, ResizeContainmentConstraint);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "containmentContainer", null);

      _defineProperty(_assertThisInitialized(_this), "containmentAttrs", {
        offset: null,
        position: null,
        size: null
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (sensorEvent) {
        var helper = _this.container.helper;
        var containment = _this.container.options.containment;

        if (containment === 'document') {
          _this.containmentContainer = document;
          _this.containmentAttrs.offset = {
            left: 0,
            top: 0
          };
          _this.containmentAttrs.position = {
            left: 0,
            top: 0
          };
          _this.containmentAttrs.size = {
            width: getWidth(document),
            height: height(document) || document.body.parentNode.scrollHeight
          };
        } else {
          var paddings = [];
          var node = containment === 'parent' ? helper.parentNode : document.querySelector(containment);

          if (node) {
            _this.containmentContainer = node;
            ['Top', 'Right', 'Bottom', 'Left'].forEach(function (side) {
              paddings[side.toLowerCase()] = styleAsNumber(node, "padding".concat(side));
            });
            _this.containmentAttrs.offset = offset(node);
            _this.containmentAttrs.position = position$1(node);
            _this.containmentAttrs.size = {
              width: getWidth(node) - paddings.left - paddings.right,
              height: height(node) - paddings.top - paddings.bottom
            };
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragMove", function (sensorEvent) {
        var helperOffset = _this.container.offset.helper;
        var containmentPosition = {
          left: 0,
          top: 0
        };
        var size = sensorEvent.size,
            position = sensorEvent.position;
        var _this$container = _this.container,
            aspectRatio = _this$container.aspectRatio,
            helper = _this$container.helper;
        var containment = _this.container.options.containment;
        var _this$container$curre = _this.container.currentAttrs,
            currentSize = _this$container$curre.size,
            currentPosition = _this$container$curre.position;

        var _assertThisInitialize = _assertThisInitialized(_this),
            containmentContainer = _assertThisInitialize.containmentContainer;

        var _this$containmentAttr = _this.containmentAttrs,
            containmentSize = _this$containmentAttr.size,
            containmentOffset = _this$containmentAttr.offset;

        if (!containmentContainer) {
          return;
        }

        if (containmentContainer !== document && style(containmentContainer, 'position') === 'static') {
          containmentPosition = containmentOffset;
        } // console.log(currentSize);
        // console.log(currentPosition);


        if (currentPosition.left < 0) {
          size.width += currentPosition.left;

          if (aspectRatio) {
            size.height = size.width / aspectRatio;
          }

          position.left = 0;
        }

        if (currentPosition.top < 0) {
          size.height += currentPosition.top;

          if (aspectRatio) {
            size.width = size.height * aspectRatio;
          }

          position.top = 0;
        }

        if (containment === 'parent' && /absolute|relative/.test(style(containmentContainer, 'position'))) {
          helperOffset.left = containmentPosition.left + currentPosition.left;
          helperOffset.top = containmentPosition.top + currentPosition.top;
        } else {
          helperOffset = offset(helper);
        }

        if (currentSize.width + (helperOffset.left - containmentPosition.left) >= containmentSize.width) {
          size.width = containmentSize.width - (helperOffset.left - containmentPosition.left);

          if (aspectRatio) {
            size.height = currentSize.width / aspectRatio;
          }
        }

        if (currentSize.height + (helperOffset.top - containmentPosition.top) >= containmentSize.height) {
          size.height = containmentSize.height - (helperOffset.top - containmentPosition.top);

          if (aspectRatio) {
            size.width = currentSize.height * aspectRatio;
          }
        }
      });

      _this.attach();

      return _this;
    }

    _createClass(ResizeContainmentConstraint, [{
      key: "supported",
      get: function get() {
        return this.isResizable();
      }
    }]);

    return ResizeContainmentConstraint;
  }(Plugin);

  var ResizeGridConstraint = /*#__PURE__*/function (_Plugin) {
    _inherits(ResizeGridConstraint, _Plugin);

    var _super = _createSuper(ResizeGridConstraint);

    function ResizeGridConstraint(container) {
      var _this;

      _classCallCheck(this, ResizeGridConstraint);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "onDragMove", function (sensorEvent) {
        if (_this.grid) {
          var _this$grid = _slicedToArray(_this.grid, 2),
              x = _this$grid[0],
              y = _this$grid[1];

          var size = sensorEvent.size,
              position = sensorEvent.position;
          var _this$container = _this.container,
              currentDirection = _this$container.currentDirection,
              helper = _this$container.helper;
          var _this$container$origi = _this.container.originalAttrs,
              originalSize = _this$container$origi.size,
              originalPosition = _this$container$origi.position;
          var _this$container$optio = _this.container.options,
              minWidth = _this$container$optio.minWidth,
              maxWidth = _this$container$optio.maxWidth,
              minHeight = _this$container$optio.minHeight,
              maxHeight = _this$container$optio.maxHeight;
          var delta = {
            x: originalSize.width + Math.round((size.width - originalSize.width) / x) * x,
            y: originalSize.height + Math.round((size.height - originalSize.height) / y) * y
          };
          var newSize = {
            width: delta.x,
            height: delta.y
          };

          if (minWidth && minWidth > newSize.width) {
            newSize.width += x;
          }

          if (maxWidth && maxWidth < newSize.width) {
            newSize.width -= x;
          }

          if (minHeight && minHeight > newSize.height) {
            newSize.height += y;
          }

          if (maxHeight && maxHeight < newSize.height) {
            newSize.height -= y;
          }

          if (/^(se|s|e)$/.test(currentDirection)) {
            size.width = newSize.width;
            size.height = newSize.height;
          } else if (/^(ne)$/.test(currentDirection)) {
            size.width = newSize.width;
            size.height = newSize.height;
            position.top = originalPosition.top - delta.y;
          } else if (/^(sw)$/.test(currentDirection)) {
            size.width = newSize.width;
            size.height = newSize.height;
            position.left = originalPosition.left - delta.x;
          } else {
            var dimensions = getPaddingAndBorder(helper);

            if (newSize.width - x > 0) {
              size.width = newSize.width;
              position.left = originalPosition.left - delta.x;
            } else {
              size.width = x - dimensions.width;
              position.left = originalPosition.left + originalSize.width - newSize.width;
            }

            if (newSize.height - y > 0) {
              size.height = newSize.height;
              position.top = originalPosition.top - delta.y;
            } else {
              size.height = y - dimensions.height;
              position.top = originalPosition.top + originalSize.height - newSize.height;
            }
          }
        }
      });

      _this.attach();

      return _this;
    }

    _createClass(ResizeGridConstraint, [{
      key: "supported",
      get: function get() {
        return this.isResizable();
      }
    }, {
      key: "grid",
      get: function get() {
        var options = this.container.options;
        return Array.isArray(options.grid) && options.grid.length === 2 ? options.grid : null;
      }
    }]);

    return ResizeGridConstraint;
  }(Plugin);

  /*
   * anime.js v3.2.1
   * (c) 2020 Julian Garnier
   * Released under the MIT license
   * animejs.com
   */

  // Defaults

  var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: 'normal',
    autoplay: true,
    timelineOffset: 0
  };

  var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0
  };

  var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

  // Caching

  var cache = {
    CSS: {},
    springs: {}
  };

  // Utils

  function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  function stringContains(str, text) {
    return str.indexOf(text) > -1;
  }

  function applyArguments(func, args) {
    return func.apply(null, args);
  }

  var is = {
    arr: function (a) { return Array.isArray(a); },
    obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
    pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
    svg: function (a) { return a instanceof SVGElement; },
    inp: function (a) { return a instanceof HTMLInputElement; },
    dom: function (a) { return a.nodeType || is.svg(a); },
    str: function (a) { return typeof a === 'string'; },
    fnc: function (a) { return typeof a === 'function'; },
    und: function (a) { return typeof a === 'undefined'; },
    nil: function (a) { return is.und(a) || a === null; },
    hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
    rgb: function (a) { return /^rgb/.test(a); },
    hsl: function (a) { return /^hsl/.test(a); },
    col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
    key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
  };

  // Easings

  function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
  }

  // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

  function spring(string, duration) {

    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
    var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

    function solver(t) {
      var progress = duration ? (duration * t) / 1000 : t;
      if (zeta < 1) {
        progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
      } else {
        progress = (a + b * progress) * Math.exp(-progress * w0);
      }
      if (t === 0 || t === 1) { return t; }
      return 1 - progress;
    }

    function getDuration() {
      var cached = cache.springs[string];
      if (cached) { return cached; }
      var frame = 1/6;
      var elapsed = 0;
      var rest = 0;
      while(true) {
        elapsed += frame;
        if (solver(elapsed) === 1) {
          rest++;
          if (rest >= 16) { break; }
        } else {
          rest = 0;
        }
      }
      var duration = elapsed * frame * 1000;
      cache.springs[string] = duration;
      return duration;
    }

    return duration ? solver : getDuration;

  }

  // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

  function steps(steps) {
    if ( steps === void 0 ) steps = 10;

    return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
  }

  // BezierEasing https://github.com/gre/bezier-easing

  var bezier = (function () {

    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

    function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
    function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
    function C(aA1)      { return 3.0 * aA1 }

    function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
    function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
      } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
      return currentT;
    }

    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < 4; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) { return aGuessT; }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }

    function bezier(mX1, mY1, mX2, mY2) {

      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
      var sampleValues = new Float32Array(kSplineTableSize);

      if (mX1 !== mY1 || mX2 !== mY2) {
        for (var i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }

      function getTForX(aX) {

        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample;

        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= 0.001) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }

      }

      return function (x) {
        if (mX1 === mY1 && mX2 === mY2) { return x; }
        if (x === 0 || x === 1) { return x; }
        return calcBezier(getTForX(x), mY1, mY2);
      }

    }

    return bezier;

  })();

  var penner = (function () {

    // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

    var eases = { linear: function () { return function (t) { return t; }; } };

    var functionEasings = {
      Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
      Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
      Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
      Bounce: function () { return function (t) {
        var pow2, b = 4;
        while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
      }; },
      Elastic: function (amplitude, period) {
        if ( amplitude === void 0 ) amplitude = 1;
        if ( period === void 0 ) period = .5;

        var a = minMax(amplitude, 1, 10);
        var p = minMax(period, .1, 2);
        return function (t) {
          return (t === 0 || t === 1) ? t : 
            -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
        }
      }
    };

    var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

    baseEasings.forEach(function (name, i) {
      functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
    });

    Object.keys(functionEasings).forEach(function (name) {
      var easeIn = functionEasings[name];
      eases['easeIn' + name] = easeIn;
      eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
      eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
        1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
      eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
        (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
    });

    return eases;

  })();

  function parseEasings(easing, duration) {
    if (is.fnc(easing)) { return easing; }
    var name = easing.split('(')[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch (name) {
      case 'spring' : return spring(easing, duration);
      case 'cubicBezier' : return applyArguments(bezier, args);
      case 'steps' : return applyArguments(steps, args);
      default : return applyArguments(ease, args);
    }
  }

  // Strings

  function selectString(str) {
    try {
      var nodes = document.querySelectorAll(str);
      return nodes;
    } catch(e) {
      return;
    }
  }

  // Arrays

  function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for (var i = 0; i < len; i++) {
      if (i in arr) {
        var val = arr[i];
        if (callback.call(thisArg, val, i, arr)) {
          result.push(val);
        }
      }
    }
    return result;
  }

  function flattenArray(arr) {
    return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
  }

  function toArray(o) {
    if (is.arr(o)) { return o; }
    if (is.str(o)) { o = selectString(o) || o; }
    if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
    return [o];
  }

  function arrayContains(arr, val) {
    return arr.some(function (a) { return a === val; });
  }

  // Objects

  function cloneObject(o) {
    var clone = {};
    for (var p in o) { clone[p] = o[p]; }
    return clone;
  }

  function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
    return o;
  }

  function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
    return o;
  }

  // Colors

  function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
  }

  function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return ("rgba(" + r + "," + g + "," + b + ",1)");
  }

  function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
    function hue2rgb(p, q, t) {
      if (t < 0) { t += 1; }
      if (t > 1) { t -= 1; }
      if (t < 1/6) { return p + (q - p) * 6 * t; }
      if (t < 1/2) { return q; }
      if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
      return p;
    }
    var r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
  }

  function colorToRgb(val) {
    if (is.rgb(val)) { return rgbToRgba(val); }
    if (is.hex(val)) { return hexToRgba(val); }
    if (is.hsl(val)) { return hslToRgba(val); }
  }

  // Units

  function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) { return split[1]; }
  }

  function getTransformUnit(propName) {
    if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
    if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
  }

  // Values

  function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) { return val; }
    return val(animatable.target, animatable.id, animatable.total);
  }

  function getAttribute(el, prop) {
    return el.getAttribute(prop);
  }

  function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) { return cached; }
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = 'absolute';
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
  }

  function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
      var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
      return unit ? convertPxToUnit(el, value, unit) : value;
    }
  }

  function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
    if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
    if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
    if (el[prop] != null) { return 'object'; }
  }

  function getElementTransforms(el) {
    if (!is.dom(el)) { return; }
    var str = el.style.transform || '';
    var reg  = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
    return transforms;
  }

  function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
      animatable.transforms.list.set(propName, value);
      animatable.transforms['last'] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
  }

  function getOriginalTargetValue(target, propName, unit, animatable) {
    switch (getAnimationType(target, propName)) {
      case 'transform': return getTransformValue(target, propName, animatable, unit);
      case 'css': return getCSSValue(target, propName, unit);
      case 'attribute': return getAttribute(target, propName);
      default: return target[propName] || 0;
    }
  }

  function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) { return to; }
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ''));
    switch (operator[0][0]) {
      case '+': return x + y + u;
      case '-': return x - y + u;
      case '*': return x * y + u;
    }
  }

  function validateValue(val, unit) {
    if (is.col(val)) { return colorToRgb(val); }
    if (/\s/g.test(val)) { return val; }
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) { return unitLess + unit; }
    return unitLess;
  }

  // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
  // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, 'r');
  }

  function getRectLength(el) {
    return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
  }

  function getLineLength(el) {
    return getDistance(
      {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
      {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
    );
  }

  function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for (var i = 0 ; i < points.numberOfItems; i++) {
      var currentPos = points.getItem(i);
      if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
      previousPos = currentPos;
    }
    return totalLength;
  }

  function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
  }

  // Path animation

  function getTotalLength(el) {
    if (el.getTotalLength) { return el.getTotalLength(); }
    switch(el.tagName.toLowerCase()) {
      case 'circle': return getCircleLength(el);
      case 'rect': return getRectLength(el);
      case 'line': return getLineLength(el);
      case 'polyline': return getPolylineLength(el);
      case 'polygon': return getPolygonLength(el);
    }
  }

  function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute('stroke-dasharray', pathLength);
    return pathLength;
  }

  // Motion path

  function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while (is.svg(parentEl)) {
      if (!is.svg(parentEl.parentNode)) { break; }
      parentEl = parentEl.parentNode;
    }
    return parentEl;
  }

  function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
    return {
      el: parentSvgEl,
      viewBox: viewBox,
      x: viewBox[0] / 1,
      y: viewBox[1] / 1,
      w: width,
      h: height,
      vW: viewBox[2],
      vH: viewBox[3]
    }
  }

  function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function(property) {
      return {
        property: property,
        el: pathEl,
        svg: getParentSvg(pathEl),
        totalLength: getTotalLength(pathEl) * (p / 100)
      }
    }
  }

  function getPathProgress(path, progress, isPathTargetInsideSVG) {
    function point(offset) {
      if ( offset === void 0 ) offset = 0;

      var l = progress + offset >= 1 ? progress + offset : 0;
      return path.el.getPointAtLength(l);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(+1);
    var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch (path.property) {
      case 'x': return (p.x - svg.x) * scaleX;
      case 'y': return (p.y - svg.y) * scaleY;
      case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  }

  // Decompose value

  function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
    return {
      original: value,
      numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
      strings: (is.str(val) || unit) ? value.split(rgx) : []
    }
  }

  // Animatables

  function parseTargets(targets) {
    var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
    return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
  }

  function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function (t, i) {
      return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
    });
  }

  // Properties

  function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    // Override duration if easing is a spring
    if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
    if (is.arr(prop)) {
      var l = prop.length;
      var isFromTo = (l === 2 && !is.obj(prop[0]));
      if (!isFromTo) {
        // Duration divided by the number of tweens
        if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
      } else {
        // Transform [from, to] values shorthand to a valid tween value
        prop = {value: prop};
      }
    }
    var propArray = is.arr(prop) ? prop : [prop];
    return propArray.map(function (v, i) {
      var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
      // Default delay value should only be applied to the first tween
      if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
      // Default endDelay value should only be applied to the last tween
      if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
      return obj;
    }).map(function (k) { return mergeObjects(k, settings); });
  }


  function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
    .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
    var properties = {};
    var loop = function ( i ) {
      var propName = propertyNames[i];
      properties[propName] = keyframes.map(function (key) {
        var newKey = {};
        for (var p in key) {
          if (is.key(p)) {
            if (p == propName) { newKey.value = key[p]; }
          } else {
            newKey[p] = key[p];
          }
        }
        return newKey;
      });
    };

    for (var i = 0; i < propertyNames.length; i++) loop( i );
    return properties;
  }

  function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
    if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
    for (var p in params) {
      if (is.key(p)) {
        properties.push({
          name: p,
          tweens: normalizePropertyTweens(params[p], tweenSettings)
        });
      }
    }
    return properties;
  }

  // Tweens

  function normalizeTweenValues(tween, animatable) {
    var t = {};
    for (var p in tween) {
      var value = getFunctionValue(tween[p], animatable);
      if (is.arr(value)) {
        value = value.map(function (v) { return getFunctionValue(v, animatable); });
        if (value.length === 1) { value = value[0]; }
      }
      t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
  }

  function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function (t) {
      var tween = normalizeTweenValues(t, animatable);
      var tweenValue = tween.value;
      var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
      var toUnit = getUnit(to);
      var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
      var previousValue = previousTween ? previousTween.to.original : originalValue;
      var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
      var fromUnit = getUnit(from) || getUnit(originalValue);
      var unit = toUnit || fromUnit;
      if (is.und(to)) { to = previousValue; }
      tween.from = decomposeValue(from, unit);
      tween.to = decomposeValue(getRelativeValue(to, from), unit);
      tween.start = previousTween ? previousTween.end : 0;
      tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
      tween.easing = parseEasings(tween.easing, tween.duration);
      tween.isPath = is.pth(tweenValue);
      tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
      tween.isColor = is.col(tween.from.original);
      if (tween.isColor) { tween.round = 1; }
      previousTween = tween;
      return tween;
    });
  }

  // Tween progress

  var setProgressValue = {
    css: function (t, p, v) { return t.style[p] = v; },
    attribute: function (t, p, v) { return t.setAttribute(p, v); },
    object: function (t, p, v) { return t[p] = v; },
    transform: function (t, p, v, transforms, manual) {
      transforms.list.set(p, v);
      if (p === transforms.last || manual) {
        var str = '';
        transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
        t.style.transform = str;
      }
    }
  };

  // Set Value helper

  function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function (animatable) {
      for (var property in properties) {
        var value = getFunctionValue(properties[property], animatable);
        var target = animatable.target;
        var valueUnit = getUnit(value);
        var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
        var unit = valueUnit || getUnit(originalValue);
        var to = getRelativeValue(validateValue(value, unit), originalValue);
        var animType = getAnimationType(target, property);
        setProgressValue[animType](target, property, to, animatable.transforms, true);
      }
    });
  }

  // Animations

  function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
      var tweens = normalizeTweens(prop, animatable);
      var lastTween = tweens[tweens.length - 1];
      return {
        type: animType,
        property: prop.name,
        animatable: animatable,
        tweens: tweens,
        duration: lastTween.end,
        delay: tweens[0].delay,
        endDelay: lastTween.endDelay
      }
    }
  }

  function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function (animatable) {
      return properties.map(function (prop) {
        return createAnimation(animatable, prop);
      });
    })), function (a) { return !is.und(a); });
  }

  // Create Instance

  function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
    var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
    return timings;
  }

  var instanceID = 0;

  function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
      id: id,
      children: [],
      animatables: animatables,
      animations: animations,
      duration: timings.duration,
      delay: timings.delay,
      endDelay: timings.endDelay
    });
  }

  // Core

  var activeInstances = [];

  var engine = (function () {
    var raf;

    function play() {
      if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
        raf = requestAnimationFrame(step);
      }
    }
    function step(t) {
      // memo on algorithm issue:
      // dangerous iteration over mutable `activeInstances`
      // (that collection may be updated from within callbacks of `tick`-ed animation instances)
      var activeInstancesLength = activeInstances.length;
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
          i++;
        } else {
          activeInstances.splice(i, 1);
          activeInstancesLength--;
        }
      }
      raf = i > 0 ? requestAnimationFrame(step) : undefined;
    }

    function handleVisibilityChange() {
      if (!anime.suspendWhenDocumentHidden) { return; }

      if (isDocumentHidden()) {
        // suspend ticks
        raf = cancelAnimationFrame(raf);
      } else { // is back to active tab
        // first adjust animations to consider the time that ticks were suspended
        activeInstances.forEach(
          function (instance) { return instance ._onDocumentVisibility(); }
        );
        engine();
      }
    }
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return play;
  })();

  function isDocumentHidden() {
    return !!document && document.hidden;
  }

  // Public Instance

  function anime(params) {
    if ( params === void 0 ) params = {};


    var startTime = 0, lastTime = 0, now = 0;
    var children, childrenLength = 0;
    var resolve = null;

    function makePromise(instance) {
      var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
      instance.finished = promise;
      return promise;
    }

    var instance = createNewInstance(params);
    makePromise(instance);

    function toggleInstanceDirection() {
      var direction = instance.direction;
      if (direction !== 'alternate') {
        instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
      }
      instance.reversed = !instance.reversed;
      children.forEach(function (child) { return child.reversed = instance.reversed; });
    }

    function adjustTime(time) {
      return instance.reversed ? instance.duration - time : time;
    }

    function resetTime() {
      startTime = 0;
      lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }

    function seekChild(time, child) {
      if (child) { child.seek(time - child.timelineOffset); }
    }

    function syncInstanceChildren(time) {
      if (!instance.reversePlayback) {
        for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
      } else {
        for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
      }
    }

    function setAnimationsProgress(insTime) {
      var i = 0;
      var animations = instance.animations;
      var animationsLength = animations.length;
      while (i < animationsLength) {
        var anim = animations[i];
        var animatable = anim.animatable;
        var tweens = anim.tweens;
        var tweenLength = tweens.length - 1;
        var tween = tweens[tweenLength];
        // Only check for keyframes if there is more than one tween
        if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
        var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
        var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
        var strings = tween.to.strings;
        var round = tween.round;
        var numbers = [];
        var toNumbersLength = tween.to.numbers.length;
        var progress = (void 0);
        for (var n = 0; n < toNumbersLength; n++) {
          var value = (void 0);
          var toNumber = tween.to.numbers[n];
          var fromNumber = tween.from.numbers[n] || 0;
          if (!tween.isPath) {
            value = fromNumber + (eased * (toNumber - fromNumber));
          } else {
            value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
          }
          if (round) {
            if (!(tween.isColor && n > 2)) {
              value = Math.round(value * round) / round;
            }
          }
          numbers.push(value);
        }
        // Manual Array.reduce for better performances
        var stringsLength = strings.length;
        if (!stringsLength) {
          progress = numbers[0];
        } else {
          progress = strings[0];
          for (var s = 0; s < stringsLength; s++) {
            strings[s];
            var b = strings[s + 1];
            var n$1 = numbers[s];
            if (!isNaN(n$1)) {
              if (!b) {
                progress += n$1 + ' ';
              } else {
                progress += n$1 + b;
              }
            }
          }
        }
        setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
        anim.currentValue = progress;
        i++;
      }
    }

    function setCallback(cb) {
      if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
    }

    function countIteration() {
      if (instance.remaining && instance.remaining !== true) {
        instance.remaining--;
      }
    }

    function setInstanceProgress(engineTime) {
      var insDuration = instance.duration;
      var insDelay = instance.delay;
      var insEndDelay = insDuration - instance.endDelay;
      var insTime = adjustTime(engineTime);
      instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
      instance.reversePlayback = insTime < instance.currentTime;
      if (children) { syncInstanceChildren(insTime); }
      if (!instance.began && instance.currentTime > 0) {
        instance.began = true;
        setCallback('begin');
      }
      if (!instance.loopBegan && instance.currentTime > 0) {
        instance.loopBegan = true;
        setCallback('loopBegin');
      }
      if (insTime <= insDelay && instance.currentTime !== 0) {
        setAnimationsProgress(0);
      }
      if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
        setAnimationsProgress(insDuration);
      }
      if (insTime > insDelay && insTime < insEndDelay) {
        if (!instance.changeBegan) {
          instance.changeBegan = true;
          instance.changeCompleted = false;
          setCallback('changeBegin');
        }
        setCallback('change');
        setAnimationsProgress(insTime);
      } else {
        if (instance.changeBegan) {
          instance.changeCompleted = true;
          instance.changeBegan = false;
          setCallback('changeComplete');
        }
      }
      instance.currentTime = minMax(insTime, 0, insDuration);
      if (instance.began) { setCallback('update'); }
      if (engineTime >= insDuration) {
        lastTime = 0;
        countIteration();
        if (!instance.remaining) {
          instance.paused = true;
          if (!instance.completed) {
            instance.completed = true;
            setCallback('loopComplete');
            setCallback('complete');
            if (!instance.passThrough && 'Promise' in window) {
              resolve();
              makePromise(instance);
            }
          }
        } else {
          startTime = now;
          setCallback('loopComplete');
          instance.loopBegan = false;
          if (instance.direction === 'alternate') {
            toggleInstanceDirection();
          }
        }
      }
    }

    instance.reset = function() {
      var direction = instance.direction;
      instance.passThrough = false;
      instance.currentTime = 0;
      instance.progress = 0;
      instance.paused = true;
      instance.began = false;
      instance.loopBegan = false;
      instance.changeBegan = false;
      instance.completed = false;
      instance.changeCompleted = false;
      instance.reversePlayback = false;
      instance.reversed = direction === 'reverse';
      instance.remaining = instance.loop;
      children = instance.children;
      childrenLength = children.length;
      for (var i = childrenLength; i--;) { instance.children[i].reset(); }
      if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
      setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };

    // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
    instance._onDocumentVisibility = resetTime;

    // Set Value helper

    instance.set = function(targets, properties) {
      setTargetsValue(targets, properties);
      return instance;
    };

    instance.tick = function(t) {
      now = t;
      if (!startTime) { startTime = now; }
      setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };

    instance.seek = function(time) {
      setInstanceProgress(adjustTime(time));
    };

    instance.pause = function() {
      instance.paused = true;
      resetTime();
    };

    instance.play = function() {
      if (!instance.paused) { return; }
      if (instance.completed) { instance.reset(); }
      instance.paused = false;
      activeInstances.push(instance);
      resetTime();
      engine();
    };

    instance.reverse = function() {
      toggleInstanceDirection();
      instance.completed = instance.reversed ? false : true;
      resetTime();
    };

    instance.restart = function() {
      instance.reset();
      instance.play();
    };

    instance.remove = function(targets) {
      var targetsArray = parseTargets(targets);
      removeTargetsFromInstance(targetsArray, instance);
    };

    instance.reset();

    if (instance.autoplay) { instance.play(); }

    return instance;

  }

  // Remove targets from animation

  function removeTargetsFromAnimations(targetsArray, animations) {
    for (var a = animations.length; a--;) {
      if (arrayContains(targetsArray, animations[a].animatable.target)) {
        animations.splice(a, 1);
      }
    }
  }

  function removeTargetsFromInstance(targetsArray, instance) {
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }

  function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for (var i = activeInstances.length; i--;) {
      var instance = activeInstances[i];
      removeTargetsFromInstance(targetsArray, instance);
    }
  }

  // Stagger helpers

  function stagger(val, params) {
    if ( params === void 0 ) params = {};

    var direction = params.direction || 'normal';
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === 'first';
    var fromCenter = fromIndex === 'center';
    var fromLast = fromIndex === 'last';
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function (el, i, t) {
      if (fromFirst) { fromIndex = 0; }
      if (fromCenter) { fromIndex = (t - 1) / 2; }
      if (fromLast) { fromIndex = t - 1; }
      if (!values.length) {
        for (var index = 0; index < t; index++) {
          if (!grid) {
            values.push(Math.abs(fromIndex - index));
          } else {
            var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
            var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
            var toX = index%grid[0];
            var toY = Math.floor(index/grid[0]);
            var distanceX = fromX - toX;
            var distanceY = fromY - toY;
            var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            if (axis === 'x') { value = -distanceX; }
            if (axis === 'y') { value = -distanceY; }
            values.push(value);
          }
          maxValue = Math.max.apply(Math, values);
        }
        if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
        if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
      }
      var spacing = isRange ? (val2 - val1) / maxValue : val1;
      return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
    }
  }

  // Timeline

  function timeline(params) {
    if ( params === void 0 ) params = {};

    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
      var tlIndex = activeInstances.indexOf(tl);
      var children = tl.children;
      if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
      function passThrough(ins) { ins.passThrough = true; }
      for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
      var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
      insParams.targets = insParams.targets || params.targets;
      var tlDuration = tl.duration;
      insParams.autoplay = false;
      insParams.direction = tl.direction;
      insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
      passThrough(tl);
      tl.seek(insParams.timelineOffset);
      var ins = anime(insParams);
      passThrough(ins);
      children.push(ins);
      var timings = getInstanceTimings(children, params);
      tl.delay = timings.delay;
      tl.endDelay = timings.endDelay;
      tl.duration = timings.duration;
      tl.seek(0);
      tl.reset();
      if (tl.autoplay) { tl.play(); }
      return tl;
    };
    return tl;
  }

  anime.version = '3.2.1';
  anime.speed = 1;
  // TODO:#review: naming, documentation
  anime.suspendWhenDocumentHidden = true;
  anime.running = activeInstances;
  anime.remove = removeTargetsFromActiveInstances;
  anime.get = getOriginalTargetValue;
  anime.set = setTargetsValue;
  anime.convertPx = convertPxToUnit;
  anime.path = getPath;
  anime.setDashoffset = setDashoffset;
  anime.stagger = stagger;
  anime.timeline = timeline;
  anime.easing = parseEasings;
  anime.penner = penner;
  anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

  var ResizeAnimate = /*#__PURE__*/function (_Plugin) {
    _inherits(ResizeAnimate, _Plugin);

    var _super = _createSuper(ResizeAnimate);

    function ResizeAnimate(container) {
      var _this;

      _classCallCheck(this, ResizeAnimate);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "onDragStop", function (sensorEvent) {
        var _this$container$optio = _this.container.options,
            animate = _this$container$optio.animate,
            animateDuration = _this$container$optio.animateDuration;

        if (animate) {
          var styleProps = {};
          var _this$container = _this.container,
              element = _this$container.element,
              helper = _this$container.helper;
          var originalPosition = _this.container.originalAttrs.position;
          var position = _this.container.currentAttrs.position;
          styleProps.width = "".concat(getWidth(helper), "px");
          styleProps.height = "".concat(height(helper), "px");
          styleProps.top = "".concat(styleAsNumber(element, 'top') + (position.top - originalPosition.top), "px");
          styleProps.left = "".concat(styleAsNumber(element, 'left') + (position.left - originalPosition.left), "px");
          anime(_objectSpread2(_objectSpread2({}, styleProps), {
            targets: [element],
            duration: animateDuration,
            easing: 'linear',
            update: function update() {
              _this.container.currentAttrs.size = {
                width: getWidth(element),
                height: height(element)
              };
              _this.container.currentAttrs.position = {
                left: styleAsNumber(element, 'left'),
                top: styleAsNumber(element, 'top')
              };

              _this.container.updateResizableElements(_this.container.currentAttrs.size);
            }
          }));
        }
      });

      _this.attach();

      return _this;
    }

    _createClass(ResizeAnimate, [{
      key: "supported",
      get: function get() {
        return this.isResizable();
      }
    }]);

    return ResizeAnimate;
  }(Plugin);

  var ResizeGhost = /*#__PURE__*/function (_Plugin) {
    _inherits(ResizeGhost, _Plugin);

    var _super = _createSuper(ResizeGhost);

    function ResizeGhost(container) {
      var _this;

      _classCallCheck(this, ResizeGhost);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "ghost", null);

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (sensorEvent) {
        var ghost = _this.container.options.ghost;

        if (ghost) {
          var originalElement = _this.container.originalElement;
          var size = _this.container.currentAttrs.size;
          _this.ghost = originalElement.cloneNode(true);
          style(_this.ghost, {
            display: 'block',
            position: 'relative',
            width: "".concat(size.width, "px"),
            height: "".concat(size.height, "px"),
            top: '0px',
            left: '0px',
            margin: '0px',
            opacity: 0.25
          });
          addClass(_this.ghost, _this.container.ghostClass);

          _this.container.helper.appendChild(_this.ghost);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragMove", function (sensorEvent) {
        if (_this.ghost) {
          var size = _this.container.currentAttrs.size;
          style(_this.ghost, {
            width: "".concat(size.width, "px"),
            height: "".concat(size.height, "px")
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStop", function (sensorEvent) {
        if (_this.ghost) {
          _this.container.helper.removeChild(_this.ghost);

          _this.ghost = null;
        }
      });

      _this.attach();

      return _this;
    }

    _createClass(ResizeGhost, [{
      key: "supported",
      get: function get() {
        return this.isResizable();
      }
    }]);

    return ResizeGhost;
  }(Plugin);

  var $$7 = _export;
  var aFunction$1 = aFunction$4;
  var toObject = toObject$3;
  var fails$4 = fails$d;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$5;

  var test = [];
  var nativeSort = test.sort;

  // IE8-
  var FAILS_ON_UNDEFINED = fails$4(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$4(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('sort');

  var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$2;

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$7({ target: 'Array', proto: true, forced: FORCED }, {
    sort: function sort(comparefn) {
      return comparefn === undefined
        ? nativeSort.call(toObject(this))
        : nativeSort.call(toObject(this), aFunction$1(comparefn));
    }
  });

  var StackController = /*#__PURE__*/function (_Plugin) {
    _inherits(StackController, _Plugin);

    var _super = _createSuper(StackController);

    function StackController(container) {
      var _this;

      _classCallCheck(this, StackController);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (event) {
        if (_this.stack.length > 0) {
          var helper = _this.container.helper;

          var sorted = _this.stack.sort(function (a, b) {
            return styleAsNumber(a, 'zIndex') - styleAsNumber(b, 'zIndex');
          });

          var min = styleAsNumber(sorted[0], 'zIndex');
          sorted.forEach(function (element, idx) {
            style(element, {
              zIndex: min + idx
            });
          });
          style(helper, {
            zIndex: min + sorted.length
          });
        }
      });

      _this.attach();

      return _this;
    }

    _createClass(StackController, [{
      key: "supported",
      get: function get() {
        return this.isDraggable();
      }
    }, {
      key: "stack",
      get: function get() {
        var options = this.container.options;
        return options.stack ? qsa(document, options.stack) : [];
      }
    }]);

    return StackController;
  }(Plugin);

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var anObject$5 = anObject$8;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  var objectDefineProperties = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$5(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$1.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var getBuiltIn = getBuiltIn$3;

  var html$1 = getBuiltIn('document', 'documentElement');

  var anObject$4 = anObject$8;
  var defineProperties = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey = sharedKey$2;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$4(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
  };

  var wellKnownSymbol$3 = wellKnownSymbol$8;
  var create = objectCreate;
  var definePropertyModule = objectDefineProperty;

  var UNSCOPABLES = wellKnownSymbol$3('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$1 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$6 = _export;
  var $find = arrayIteration.find;
  var addToUnscopables = addToUnscopables$1;

  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$6({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var StyleDecorator = /*#__PURE__*/function (_Plugin) {
    _inherits(StyleDecorator, _Plugin);

    var _super = _createSuper(StyleDecorator);

    function StyleDecorator(container, property) {
      var _this;

      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, StyleDecorator);

      _this = _super.call(this, container);

      _defineProperty(_assertThisInitialized(_this), "property", null);

      _defineProperty(_assertThisInitialized(_this), "target", null);

      _defineProperty(_assertThisInitialized(_this), "previousValue", null);

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (event) {
        if (!_this.target) {
          _this.target = _this.container.helper;
        }

        if (_this.value !== null && !_this.isSortableInDraggable()) {
          _this.previousValue = _this.getPreviousValue();
          style(_this.target, _defineProperty({}, _this.property, _this.value));
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStop", function (event) {
        if (_this.previousValue !== null) {
          style(_this.target, _defineProperty({}, _this.property, _this.previousValue));
          _this.target = null;
        }
      });

      _this.property = property;
      _this.target = target ? target instanceof HTMLElement ? target : document.querySelector(target) : null;

      _this.attach();

      return _this;
    }

    _createClass(StyleDecorator, [{
      key: "supported",
      get: function get() {
        return this.isDraggable() || this.isSortable();
      }
    }, {
      key: "detach",
      value: function detach() {
        this.constructor.propertyCache = [];

        _get(_getPrototypeOf(StyleDecorator.prototype), "detach", this).call(this);
      }
    }, {
      key: "value",
      get: function get() {
        var options = this.container.options;
        return this.property && !isUndefined_1(options[this.property]) ? options[this.property] : null;
      }
    }, {
      key: "isSortableInDraggable",
      value: function isSortableInDraggable() {
        return this.isDraggable() && this.container.connectedDraggable;
      }
    }, {
      key: "getPreviousValue",
      value: function getPreviousValue() {
        var _this2 = this;

        var propertyCache = this.constructor.propertyCache;
        var entry = propertyCache.find(function (item) {
          return item.element === _this2.target && item.property === _this2.property;
        });

        if (!entry) {
          entry = {
            element: this.target,
            property: this.property,
            value: style(this.target, this.property)
          };
          propertyCache.push(entry);
        }

        return entry.value;
      }
    }]);

    return StyleDecorator;
  }(Plugin);

  _defineProperty(StyleDecorator, "propertyCache", []);

  var Sensor = /*#__PURE__*/function () {
    function Sensor(caller) {
      _classCallCheck(this, Sensor);

      _defineProperty(this, "caller", null);

      _defineProperty(this, "active", false);

      _defineProperty(this, "lastEvent", null);

      this.caller = caller;
    }

    _createClass(Sensor, [{
      key: "attach",
      value: function attach() {}
    }, {
      key: "detach",
      value: function detach() {}
    }, {
      key: "cancel",
      value: function cancel(sensorEvent) {}
    }, {
      key: "trigger",
      value: function trigger(sensorEvent) {
        var event = document.createEvent('Event');
        event.detail = sensorEvent;
        event.initEvent(sensorEvent.type, true, true);
        document.dispatchEvent(event);
        this.lastEvent = event;
      }
    }]);

    return Sensor;
  }();

  var preventDefault = function preventDefault(event) {
    event.preventDefault();
  };

  var MouseSensor = /*#__PURE__*/function (_Sensor) {
    _inherits(MouseSensor, _Sensor);

    var _super = _createSuper(MouseSensor);

    function MouseSensor(caller) {
      var _this;

      _classCallCheck(this, MouseSensor);

      _this = _super.call(this, caller);

      _defineProperty(_assertThisInitialized(_this), "pageX", null);

      _defineProperty(_assertThisInitialized(_this), "pageY", null);

      _defineProperty(_assertThisInitialized(_this), "startEvent", null);

      _defineProperty(_assertThisInitialized(_this), "mouseMoved", false);

      _defineProperty(_assertThisInitialized(_this), "cancel", function (event) {
        _this.onMouseUp(event);
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
        if (event.which !== 1 || event.button !== 0 || event.ctrlKey || event.metaKey) {
          return;
        }

        if (_this.caller.options.skip && event.target.nodeName && closest(event.target, _this.caller.options.skip)) {
          return;
        }

        if (_this.active) {
          _this.onMouseUp(event);
        }

        var mouseDown = new MouseDownEvent({
          pageX: event.pageX,
          pageY: event.pageY,
          target: event.target,
          caller: _this.caller,
          originalEvent: event
        });
        _this.pageX = event.pageX;
        _this.pageY = event.pageY;
        _this.startEvent = event;

        _this.trigger(mouseDown);

        if (mouseDown.canceled) {
          return;
        }

        document.addEventListener('dragstart', preventDefault);
        document.addEventListener('mousemove', _this.checkThresholds);
        document.addEventListener('mouseup', _this.onMouseUp);
      });

      _defineProperty(_assertThisInitialized(_this), "checkThresholds", function (event) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            startEvent = _assertThisInitialize.startEvent;

        var distance = _this.caller.options.distance;
        _this.pageX = event.pageX;
        _this.pageY = event.pageY;
        var delta = Math.max(Math.abs(event.pageX - startEvent.pageX), Math.abs(event.pageY - startEvent.pageY));

        if (delta >= distance) {
          document.removeEventListener('mousemove', _this.checkThresholds);

          _this.startDrag();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (event) {
        if (_this.active) {
          _this.trigger(new MouseMoveEvent({
            pageX: event.pageX,
            pageY: event.pageY,
            target: document.elementFromPoint(event.pageX, event.pageY),
            caller: _this.caller,
            originalEvent: event
          }));
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (event) {
        clearTimeout(_this.startTimeout);
        document.removeEventListener('dragstart', preventDefault);
        document.removeEventListener('mousemove', _this.checkThresholds);
        document.removeEventListener('mouseup', _this.onMouseUp);

        if (_this.active) {
          _this.active = false;

          _this.trigger(new MouseStopEvent({
            pageX: event.pageX,
            pageY: event.pageY,
            target: document.elementFromPoint(event.pageX, event.pageY),
            caller: _this.caller,
            originalEvent: event
          }));
        }

        document.removeEventListener('contextmenu', preventDefault);
        document.removeEventListener('mousemove', _this.onMouseMove);
        event.preventDefault();
      });

      _this.attach();

      return _this;
    }

    _createClass(MouseSensor, [{
      key: "attach",
      value: function attach() {
        document.addEventListener('mousedown', this.onMouseDown, true);
      }
    }, {
      key: "detach",
      value: function detach() {
        document.removeEventListener('mousedown', this.onMouseDown, true);
      }
    }, {
      key: "startDrag",
      value: function startDrag() {
        var startEvent = this.startEvent;
        var mouseStart = new MouseStartEvent({
          pageX: startEvent.pageX,
          pageY: startEvent.pageY,
          target: startEvent.target,
          caller: this.caller,
          originalEvent: startEvent
        });
        this.trigger(mouseStart);
        this.active = !mouseStart.canceled;

        if (this.active) {
          document.addEventListener('contextmenu', preventDefault, true);
          document.addEventListener('mousemove', this.onMouseMove);
        }
      }
    }]);

    return MouseSensor;
  }(Sensor);

  var $$5 = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$5({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$4 = _export;
  var $some = arrayIteration.some;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$5;

  var STRICT_METHOD$1 = arrayMethodIsStrict$1('some');

  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  $$4({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 }, {
    some: function some(callbackfn /* , thisArg */) {
      return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$3 = _export;
  var global$1 = global$h;
  var userAgent = engineUserAgent;

  var slice = [].slice;
  var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

  var wrap = function (scheduler) {
    return function (handler, timeout /* , ...arguments */) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
      } : handler, timeout);
    };
  };

  // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
  $$3({ global: true, bind: true, forced: MSIE }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap(global$1.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap(global$1.setInterval)
  });

  var events = {exports: {}};

  var R = typeof Reflect === 'object' ? Reflect : null;
  var ReflectApply = R && typeof R.apply === 'function'
    ? R.apply
    : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };

  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target)
        .concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target);
    };
  }

  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }

  var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
  };

  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  var defaultMaxListeners = 10;

  function checkListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }

  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
      }
      defaultMaxListeners = arg;
    }
  });

  EventEmitter.init = function() {

    if (this._events === undefined ||
        this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
  };

  function _getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };

  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = (type === 'error');

    var events = this._events;
    if (events !== undefined)
      doError = (doError && events.error === undefined);
    else if (!doError)
      return false;

    // If there is no 'error' event listener then throw.
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
      }
      // At least give some kind of context to the user
      var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
      err.context = er;
      throw err; // Unhandled 'error' event
    }

    var handler = events[type];

    if (handler === undefined)
      return false;

    if (typeof handler === 'function') {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    checkListener(listener);

    events = target._events;
    if (events === undefined) {
      events = target._events = Object.create(null);
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener !== undefined) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (existing === undefined) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
        // If we've already got an array, just append.
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }

      // Check for listener leak
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        // No error code for this since it is a Warning
        // eslint-disable-next-line no-restricted-syntax
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + String(type) + ' listeners ' +
                            'added. Use emitter.setMaxListeners() to ' +
                            'increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }

    return target;
  }

  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }

  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // Emits a 'removeListener' event if and only if the listener was removed.
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        checkListener(listener);

        events = this._events;
        if (events === undefined)
          return this;

        list = events[type];
        if (list === undefined)
          return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }

          if (list.length === 1)
            events[type] = list[0];

          if (events.removeListener !== undefined)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events, i;

        events = this._events;
        if (events === undefined)
          return this;

        // not listening for removeListener, no need to emit
        if (events.removeListener === undefined) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0)
              this._events = Object.create(null);
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners !== undefined) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

  function _listeners(target, type, unwrap) {
    var events = target._events;

    if (events === undefined)
      return [];

    var evlistener = events[type];
    if (evlistener === undefined)
      return [];

    if (typeof evlistener === 'function')
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];

    return unwrap ?
      unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }

  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };

  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;

    if (events !== undefined) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener !== undefined) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };

  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }

  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  function once(emitter, name) {
    return new Promise(function (resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }

      function resolver() {
        if (typeof emitter.removeListener === 'function') {
          emitter.removeListener('error', errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== 'error') {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }

  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') {
      eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
    }
  }

  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === 'function') {
      // EventTarget does not have `error` event semantics like Node
      // EventEmitters, we do not listen for `error` events here.
      emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }

  var EventEmitter$1 = events.exports;

  var CancelableEventEmitter = /*#__PURE__*/function (_EventEmitter) {
    _inherits(CancelableEventEmitter, _EventEmitter);

    var _super = _createSuper(CancelableEventEmitter);

    function CancelableEventEmitter() {
      var _this;

      _classCallCheck(this, CancelableEventEmitter);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "wrappedListeners", []);

      return _this;
    }

    _createClass(CancelableEventEmitter, [{
      key: "wrapListener",
      value: function wrapListener(listener) {
        var wrapped = this.wrappedListeners.find(function (item) {
          return item.listener === listener;
        });

        if (!wrapped) {
          wrapped = {
            listener: listener,
            wrapped: function wrapped(event) {
              if (!event || !event.canceled) {
                listener(event);
              }
            }
          };
          this.wrappedListeners.push(wrapped);
        } else {
          this.wrappedListeners = this.wrappedListeners.filter(function (item) {
            return item !== wrapped;
          });
        }

        return wrapped;
      }
    }, {
      key: "addListener",
      value: function addListener(type, listener) {
        _get(_getPrototypeOf(CancelableEventEmitter.prototype), "addListener", this).call(this, type, this.wrapListener(listener));
      }
    }, {
      key: "prependListener",
      value: function prependListener(type, listener) {
        _get(_getPrototypeOf(CancelableEventEmitter.prototype), "prependListener", this).call(this, type, this.wrapListener(listener));
      }
    }, {
      key: "removeListener",
      value: function removeListener(type, listener) {
        _get(_getPrototypeOf(CancelableEventEmitter.prototype), "off", this).call(this, type, this.wrapListener(listener));
      }
    }]);

    return CancelableEventEmitter;
  }(EventEmitter$1);

  var DraggableEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(DraggableEvent, _AbstractEvent);

    var _super = _createSuper(DraggableEvent);

    function DraggableEvent() {
      _classCallCheck(this, DraggableEvent);

      return _super.apply(this, arguments);
    }

    _createClass(DraggableEvent, [{
      key: "draggable",
      get: function get() {
        return this.data.draggable || null;
      }
    }]);

    return DraggableEvent;
  }(AbstractEvent);

  _defineProperty(DraggableEvent, "type", 'draggable');

  var DraggableInitEvent = /*#__PURE__*/function (_DraggableEvent) {
    _inherits(DraggableInitEvent, _DraggableEvent);

    var _super2 = _createSuper(DraggableInitEvent);

    function DraggableInitEvent() {
      _classCallCheck(this, DraggableInitEvent);

      return _super2.apply(this, arguments);
    }

    return DraggableInitEvent;
  }(DraggableEvent);

  _defineProperty(DraggableInitEvent, "type", 'draggable:init');

  var DraggableDestroyEvent = /*#__PURE__*/function (_DraggableEvent2) {
    _inherits(DraggableDestroyEvent, _DraggableEvent2);

    var _super3 = _createSuper(DraggableDestroyEvent);

    function DraggableDestroyEvent() {
      _classCallCheck(this, DraggableDestroyEvent);

      return _super3.apply(this, arguments);
    }

    return DraggableDestroyEvent;
  }(DraggableEvent);

  _defineProperty(DraggableDestroyEvent, "type", 'draggable:destroy');

  var DragEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(DragEvent, _AbstractEvent);

    var _super = _createSuper(DragEvent);

    function DragEvent() {
      _classCallCheck(this, DragEvent);

      return _super.apply(this, arguments);
    }

    _createClass(DragEvent, [{
      key: "source",
      get: function get() {
        return this.data.source || null;
      }
    }, {
      key: "helper",
      get: function get() {
        return this.data.helper || null;
      }
    }, {
      key: "sensorEvent",
      get: function get() {
        return this.data.sensorEvent || null;
      }
    }, {
      key: "originalEvent",
      get: function get() {
        return this.data.originalEvent || null;
      }
    }]);

    return DragEvent;
  }(AbstractEvent);

  _defineProperty(DragEvent, "type", 'drag');

  var DragStartEvent = /*#__PURE__*/function (_DragEvent) {
    _inherits(DragStartEvent, _DragEvent);

    var _super2 = _createSuper(DragStartEvent);

    function DragStartEvent() {
      _classCallCheck(this, DragStartEvent);

      return _super2.apply(this, arguments);
    }

    return DragStartEvent;
  }(DragEvent);

  _defineProperty(DragStartEvent, "type", 'drag:start');

  _defineProperty(DragStartEvent, "cancelable", true);

  var DragMoveEvent = /*#__PURE__*/function (_DragEvent2) {
    _inherits(DragMoveEvent, _DragEvent2);

    var _super3 = _createSuper(DragMoveEvent);

    function DragMoveEvent() {
      _classCallCheck(this, DragMoveEvent);

      return _super3.apply(this, arguments);
    }

    _createClass(DragMoveEvent, [{
      key: "position",
      get: function get() {
        return this.data.position || null;
      },
      set: function set(value) {
        this.data.position = value;
      }
    }]);

    return DragMoveEvent;
  }(DragEvent);

  _defineProperty(DragMoveEvent, "type", 'drag:move');

  _defineProperty(DragMoveEvent, "cancelable", true);

  var DragStopEvent = /*#__PURE__*/function (_DragEvent3) {
    _inherits(DragStopEvent, _DragEvent3);

    var _super4 = _createSuper(DragStopEvent);

    function DragStopEvent() {
      _classCallCheck(this, DragStopEvent);

      return _super4.apply(this, arguments);
    }

    _createClass(DragStopEvent, [{
      key: "droppable",
      get: function get() {
        return this.data.droppable || null;
      },
      set: function set(value) {
        this.data.droppable = value;
      }
    }]);

    return DragStopEvent;
  }(DragEvent);

  _defineProperty(DragStopEvent, "type", 'drag:stop');

  var Draggable = /*#__PURE__*/function () {
    function Draggable(element) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var listeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Draggable);

      _defineProperty(this, "element", null);

      _defineProperty(this, "margins", null);

      _defineProperty(this, "dragging", false);

      _defineProperty(this, "reverting", false);

      _defineProperty(this, "helper", null);

      _defineProperty(this, "helperSize", null);

      _defineProperty(this, "helperAttrs", null);

      _defineProperty(this, "startEvent", null);

      _defineProperty(this, "offset", {
        element: null,
        click: null,
        scroll: null,
        parent: null,
        relative: null
      });

      _defineProperty(this, "position", {
        original: null,
        current: null,
        absolute: null
      });

      _defineProperty(this, "emitter", new CancelableEventEmitter());

      _defineProperty(this, "options", {});

      _defineProperty(this, "plugins", []);

      _defineProperty(this, "sensors", []);

      _defineProperty(this, "pendingDestroy", false);

      _defineProperty(this, "cancelHelperRemoval", false);

      _defineProperty(this, "containmentCoords", undefined);

      _defineProperty(this, "containmentContainer", null);

      _defineProperty(this, "scrollListeners", []);

      _defineProperty(this, "connectedSortables", []);

      _defineProperty(this, "droppedSortable", null);

      _defineProperty(this, "setup", function () {
        _this.addPlugin(new AxisConstraint(_this));

        _this.addPlugin(new DragContainmentConstraint(_this));

        _this.addPlugin(new DragGridConstraint(_this));

        _this.addPlugin(new StyleDecorator(_this, 'cursor'));

        _this.addPlugin(new StyleDecorator(_this, 'opacity'));

        _this.addPlugin(new StyleDecorator(_this, 'zIndex'));

        _this.addPlugin(new StackController(_this));

        _this.addPlugin(new AutoScroll(_this));

        _this.addPlugin(new ConnectToSortable(_this));

        _this.addSensor(new MouseSensor(_this));

        document.addEventListener('mouse:down', _this.onMouseDown);
        document.addEventListener('mouse:start', _this.onDragStart);
        document.addEventListener('mouse:move', _this.onDragMove);
        document.addEventListener('mouse:stop', _this.onDragStop);

        if (_this.options.helper === 'original') {
          setPositionRelative(_this.element);
        }

        _this.element[_this.dataProperty] = _this;
        addClass(_this.element, _this.elementClass);

        _this.findHandles().forEach(function (handle) {
          addClass(handle, _this.handleClass);
        });

        _this.trigger(new DraggableInitEvent({
          draggable: _this
        }));
      });

      _defineProperty(this, "onMouseDown", function (event) {
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _this) {
          return;
        }

        if (_this.disabled || _this.reverting) {
          sensorEvent.cancel();
          return;
        }

        if (!_this.isInsideHandle(sensorEvent)) {
          sensorEvent.cancel();
          return;
        }
      });

      _defineProperty(this, "onDragStart", function (event) {
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _this) {
          return;
        }

        blurActiveElement(sensorEvent);
        _this.dragging = true;
        _this.helper = _this.createHelper(sensorEvent);

        if (!_this.helper) {
          sensorEvent.cancel();

          _this.clear();

          return;
        } else {
          addClass(_this.helper, _this.helperClass);
        }

        _this.startEvent = sensorEvent;

        _this.cacheMargins();

        _this.cacheHelperSize();

        _this.cacheHelperAttrs();

        _this.position.absolute = offset(_this.element);

        _this.calculateOffsets(sensorEvent);

        _this.calculatePosition(sensorEvent, false);

        var dragStart = new DragStartEvent({
          source: _this.element,
          helper: _this.helper,
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent
        });

        _this.trigger(dragStart);

        if (dragStart.canceled) {
          _this.onDragCancel(createMouseStopEvent(_this.helper));

          return;
        }

        _this.cacheHelperSize();

        DragDropManager$1.prepareOffsets(_this, sensorEvent);

        _this.onDragMove(event, true);

        _this.scrollListeners = getParents(_this.element, 'body').map(function (parent) {
          return listen(parent, 'scroll', function () {
            return DragDropManager$1.prepareOffsets(_this, event);
          });
        });
      });

      _defineProperty(this, "onDragCancel", function (event) {
        var sensorEvent = event.detail;

        _this.scrollListeners.forEach(function (listener) {
          return listener();
        });

        _this.scrollListeners = [];
        DragDropManager$1.onDragStop(_this, sensorEvent);

        if (_this.findHandles().some(function (handle) {
          return handle === sensorEvent.target;
        })) {
          triggerEvent(_this.element, 'focus');
        }

        _this.sensors.forEach(function (sensor) {
          return sensor.cancel(event);
        });

        _this.clear();
      });

      _defineProperty(this, "onDragMove", function (event) {
        var noPropagation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _this) {
          return;
        }

        var hasFixedParent = _this.helperAttrs.hasFixedParent;

        if (hasFixedParent) {
          _this.offset.parent = _this.getParentOffset();
        }

        _this.calculatePosition(sensorEvent);

        var dragMove = new DragMoveEvent({
          source: _this.element,
          helper: _this.helper,
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent,
          position: _this.position.current
        });

        if (!noPropagation) {
          _this.trigger(dragMove);
        } else {
          _this.plugins.forEach(function (plugin) {
            if (!dragMove.canceled) {
              plugin.onDragMove(dragMove);
            }
          });
        }

        if (dragMove.canceled) {
          return;
        } else {
          _this.position.current = dragMove.position;
        }

        style(_this.helper, {
          left: _this.position.current.left + 'px',
          top: _this.position.current.top + 'px'
        });
        DragDropManager$1.onDragMove(_this, sensorEvent);
      });

      _defineProperty(this, "onDragStop", function (event) {
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _this) {
          return;
        }

        var _this$options = _this.options,
            revert = _this$options.revert,
            revertDuration = _this$options.revertDuration;
        var original = _this.position.original;
        var dragStop = new DragStopEvent({
          source: _this.element,
          helper: _this.helper,
          droppable: DragDropManager$1.drop(_this, sensorEvent),
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent
        });

        if (revert === 'invalid' && !dragStop.droppable || revert === 'valid' && dragStop.droppable || isFunction_1(revert) && revert(_this.element, dragStop.droppable) || revert) {
          _this.reverting = true;
          anime({
            targets: [_this.helper],
            left: original.left + 'px',
            top: original.top + 'px',
            duration: revertDuration,
            easing: 'linear',
            complete: function complete() {
              _this.reverting = false;

              _this.trigger(dragStop);

              if (!dragStop.canceled) {
                _this.clear();
              }
            }
          });
        } else {
          _this.trigger(dragStop);

          if (!dragStop.canceled) {
            _this.clear();
          }
        }
      });

      if (element instanceof HTMLElement) {
        this.element = element;
      } else {
        throw new Error('Invalid element');
      }

      this.options = _objectSpread2(_objectSpread2({}, this.constructor.defaultOptions), isPlainObject_1(options) ? options : {});

      if (isPlainObject_1(listeners)) {
        forEach_1(listeners, function (callback, type) {
          _this.on(type, callback);
        });
      }

      setTimeout(function () {
        _this.setup();
      }, 0);
    }

    _createClass(Draggable, [{
      key: "addPlugin",
      value: function addPlugin(plugin) {
        if (plugin instanceof Plugin) {
          this.plugins.push(plugin);
        }
      }
    }, {
      key: "addSensor",
      value: function addSensor(sensor) {
        if (sensor instanceof Sensor) {
          this.sensors.push(sensor);
        }
      }
    }, {
      key: "setDisabled",
      value: function setDisabled(value) {
        this.options.disabled = !!value;
      }
    }, {
      key: "on",
      value: function on(type, callback) {
        this.emitter.on(type, callback);
      }
    }, {
      key: "off",
      value: function off(type, callback) {
        this.emitter.off(type, callback);
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.dragging) {
          this.onDragCancel(createMouseStopEvent(this.helper));
        } else {
          this.clear();
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this2 = this;

        if (this.dragging) {
          this.pendingDestroy = true;
          return;
        }

        this.plugins.forEach(function (plugin) {
          return plugin.detach();
        });
        this.sensors.forEach(function (sensor) {
          return sensor.detach();
        });
        document.removeEventListener('mouse:start', this.onDragStart);
        document.removeEventListener('mouse:move', this.onDragMove);
        document.removeEventListener('mouse:stop', this.onDragStop);
        delete this.element[this.dataProperty];
        removeClass(this.element, this.elementClass);
        this.findHandles().forEach(function (handle) {
          removeClass(handle, _this2.handleClass);
        });
        this.trigger(new DraggableDestroyEvent({
          draggable: this
        }));
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.options.disabled;
      }
    }, {
      key: "dataProperty",
      get: function get() {
        return draggableProp;
      }
    }, {
      key: "elementClass",
      get: function get() {
        return draggableEl;
      }
    }, {
      key: "handleClass",
      get: function get() {
        return draggableHandle;
      }
    }, {
      key: "helperClass",
      get: function get() {
        return draggableHelper;
      }
    }, {
      key: "scope",
      get: function get() {
        return this.options.scope;
      }
    }, {
      key: "proportions",
      get: function get() {
        var absolute = this.position.absolute;
        var margins = this.margins,
            helperSize = this.helperSize;
        return {
          left: absolute.left + margins.left,
          top: absolute.top + margins.top,
          right: absolute.left + margins.left + helperSize.width,
          bottom: absolute.top + margins.top + helperSize.height,
          width: helperSize.width,
          height: helperSize.height
        };
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        this.emitter.emit(event.type, event);

        if (/^drag:/.test(event.type)) {
          this.position.absolute = this.convertPosition(this.position.current, 'absolute');
        }
      }
    }, {
      key: "findHandles",
      value: function findHandles() {
        var handles = null;
        var handle = this.options.handle;

        if (handle) {
          handles = qsa(this.element, handle);
        } else {
          handles = [this.element];
        }

        return handles;
      }
    }, {
      key: "isInsideHandle",
      value: function isInsideHandle(event) {
        var inside = false;
        this.findHandles().forEach(function (handle) {
          if (!inside && (handle === event.target || containsStrict(handle, event.target))) {
            inside = true;
          }
        });
        return inside;
      }
    }, {
      key: "createHelper",
      value: function createHelper(event) {
        var helperNode = null;
        var _this$options2 = this.options,
            appendTo = _this$options2.appendTo,
            helper = _this$options2.helper;

        if (isFunction_1(helper)) {
          helperNode = helper.apply(this.element, [event]);
        } else if (helper === 'clone') {
          helperNode = this.element.cloneNode(true);
          helperNode.removeAttribute('id');
          helperNode.removeAttribute(this.dataProperty);
          helperNode[this.dataProperty] = this;
        } else {
          helperNode = this.element;
        }

        if (helperNode instanceof HTMLElement) {
          if (!closest(helperNode, 'body')) {
            var parent = appendTo === 'parent' ? this.element.parentNode : document.querySelector(appendTo);

            if (parent instanceof HTMLElement) {
              parent.appendChild(helperNode);
            }
          }

          if (isFunction_1(helper) && helperNode === this.element) {
            setPositionRelative(this.element);
          }

          if (helperNode !== this.element) {
            setPositionAbsolute(helperNode);
          }

          return helperNode;
        }

        return null;
      }
    }, {
      key: "cacheMargins",
      value: function cacheMargins() {
        this.margins = {
          left: styleAsNumber(this.element, 'marginLeft') || 0,
          top: styleAsNumber(this.element, 'marginTop') || 0,
          right: styleAsNumber(this.element, 'marginRight') || 0,
          bottom: styleAsNumber(this.element, 'marginBottom') || 0
        };
      }
    }, {
      key: "cacheHelperSize",
      value: function cacheHelperSize() {
        this.helperSize = {
          width: getWidth(this.helper),
          height: height(this.helper)
        };
      }
    }, {
      key: "cacheHelperAttrs",
      value: function cacheHelperAttrs() {
        this.helperAttrs = {
          cssPosition: style(this.helper, 'position'),
          scrollParent: scrollParent(this.helper, false),
          offsetParent: offsetParent(this.helper),
          hasFixedParent: getParents(this.helper).some(function (parent) {
            return style(parent, 'position') === 'fixed';
          })
        };
      }
    }, {
      key: "calculateOffsets",
      value: function calculateOffsets(event) {
        var absolute = this.position.absolute;
        this.offset.click = {
          left: event.pageX - absolute.left - this.margins.left,
          top: event.pageY - absolute.top - this.margins.top
        };
        this.offset.parent = this.getParentOffset();
        this.offset.relative = this.getRelativeOffset();
      }
    }, {
      key: "getParentOffset",
      value: function getParentOffset() {
        var _this$helperAttrs = this.helperAttrs,
            cssPosition = _this$helperAttrs.cssPosition,
            scrollParent = _this$helperAttrs.scrollParent,
            offsetParent = _this$helperAttrs.offsetParent;
        var result = isRoot(offsetParent) ? {
          left: 0,
          top: 0
        } : offset(offsetParent);

        if (cssPosition === 'absolute' && scrollParent !== document && containsStrict(scrollParent, offsetParent)) {
          result.left += scrollLeft(scrollParent);
          result.top += scrollTop(scrollParent);
        }

        return {
          left: result.left + styleAsNumber(offsetParent, 'borderLeftWidth') || 0,
          top: result.top + styleAsNumber(offsetParent, 'borderTopWidth') || 0
        };
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset() {
        var _this$helperAttrs2 = this.helperAttrs,
            cssPosition = _this$helperAttrs2.cssPosition,
            scrollParent = _this$helperAttrs2.scrollParent;

        if (cssPosition !== 'relative') {
          return {
            left: 0,
            top: 0
          };
        }

        var result = position$1(this.helper);
        var scrollIsRoot = scrollParent ? isRoot(scrollParent) : false;
        return {
          left: result.left - (styleAsNumber(this.helper, 'left') || 0) + (scrollIsRoot ? scrollLeft(scrollParent) : 0),
          top: result.top - (styleAsNumber(this.helper, 'top') || 0) + (scrollIsRoot ? scrollTop(scrollParent) : 0)
        };
      }
    }, {
      key: "constraintPosition",
      value: function constraintPosition(event) {
        var position = {
          pageX: event.pageX,
          pageY: event.pageY
        };
        this.plugins.forEach(function (plugin) {
          position = plugin.constraintPosition(position);
        });
        return position;
      }
    }, {
      key: "calculatePosition",
      value: function calculatePosition(event) {
        var constraint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var _ref = constraint ? this.constraintPosition(event) : event,
            pageX = _ref.pageX,
            pageY = _ref.pageY;

        var _this$helperAttrs3 = this.helperAttrs,
            cssPosition = _this$helperAttrs3.cssPosition,
            offsetParent = _this$helperAttrs3.offsetParent,
            scrollParent = _this$helperAttrs3.scrollParent;
        var scrollIsRoot = isRoot(scrollParent);

        if (!scrollIsRoot || !this.offset.scroll) {
          this.offset.scroll = {
            left: scrollIsRoot ? 0 : scrollLeft(scrollParent),
            top: scrollIsRoot ? 0 : scrollTop(scrollParent)
          };
        }

        if (cssPosition === 'relative' && scrollParent === document && scrollParent !== offsetParent) {
          this.offset.relative = this.getRelativeOffset();
        }

        var _this$offset = this.offset,
            click = _this$offset.click,
            scroll = _this$offset.scroll,
            parent = _this$offset.parent,
            relative = _this$offset.relative;
        var position = {
          left: pageX - click.left - parent.left - relative.left + (cssPosition === 'fixed' ? -scroll.left : scrollIsRoot ? 0 : scroll.left),
          top: pageY - click.top - parent.top - relative.top + (cssPosition === 'fixed' ? -scroll.top : scrollIsRoot ? 0 : scroll.top)
        };

        if (!this.position.original) {
          this.position.original = position;
        }

        this.position.current = position;
        this.position.absolute = this.convertPosition(position, 'absolute');
      }
    }, {
      key: "convertPosition",
      value: function convertPosition(position, to) {
        var _this$helperAttrs4 = this.helperAttrs,
            cssPosition = _this$helperAttrs4.cssPosition,
            scrollParent = _this$helperAttrs4.scrollParent;
        var _this$offset2 = this.offset,
            scroll = _this$offset2.scroll,
            parent = _this$offset2.parent,
            relative = _this$offset2.relative;
        var factor = to === 'absolute' ? 1 : -1;
        var scrollIsRoot = isRoot(scrollParent);
        return {
          left: position.left + parent.left * factor + relative.left * factor - (cssPosition === 'fixed' ? -scroll.left : (scrollIsRoot ? 0 : scroll.left) * factor),
          top: position.top + parent.top * factor + relative.top * factor - (cssPosition === 'fixed' ? -scroll.top : (scrollIsRoot ? 0 : scroll.top) * factor)
        };
      }
    }, {
      key: "clear",
      value: function clear() {
        if (this.helper) {
          var helper = this.options.helper;
          removeClass(this.helper, this.helperClass);
          this.dragging = false;

          if (this.helper && helper === 'clone' && !this.cancelHelperRemoval) {
            this.helper.parentNode.removeChild(this.helper);
          }

          this.cancelHelperRemoval = false;
          this.helper = null;
        }

        if (this.pendingDestroy) {
          this.destroy();
          this.pendingDestroy = false;
        }
      }
    }]);

    return Draggable;
  }();

  _defineProperty(Draggable, "defaultOptions", {
    appendTo: 'parent',
    axis: null,
    connectToSortable: null,
    containment: null,
    cursor: null,
    disabled: false,
    distance: 0,
    grid: null,
    handle: null,
    helper: 'original',
    opacity: null,
    revert: false,
    revertDuration: 200,
    scope: 'default',
    scroll: true,
    scrollSensitivity: 20,
    scrollSpeed: 10,
    stack: null,
    skip: 'input, textarea, button, select, option',
    zIndex: null
  });

  var DroppableEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(DroppableEvent, _AbstractEvent);

    var _super = _createSuper(DroppableEvent);

    function DroppableEvent() {
      _classCallCheck(this, DroppableEvent);

      return _super.apply(this, arguments);
    }

    _createClass(DroppableEvent, [{
      key: "droppable",
      get: function get() {
        return this.data.droppable || null;
      }
    }]);

    return DroppableEvent;
  }(AbstractEvent);

  _defineProperty(DroppableEvent, "type", 'droppable');

  var DroppableInitEvent = /*#__PURE__*/function (_DroppableEvent) {
    _inherits(DroppableInitEvent, _DroppableEvent);

    var _super2 = _createSuper(DroppableInitEvent);

    function DroppableInitEvent() {
      _classCallCheck(this, DroppableInitEvent);

      return _super2.apply(this, arguments);
    }

    return DroppableInitEvent;
  }(DroppableEvent);

  _defineProperty(DroppableInitEvent, "type", 'droppable:init');

  var DroppableActivateEvent = /*#__PURE__*/function (_DroppableEvent2) {
    _inherits(DroppableActivateEvent, _DroppableEvent2);

    var _super3 = _createSuper(DroppableActivateEvent);

    function DroppableActivateEvent() {
      _classCallCheck(this, DroppableActivateEvent);

      return _super3.apply(this, arguments);
    }

    _createClass(DroppableActivateEvent, [{
      key: "sensorEvent",
      get: function get() {
        return this.data.sensorEvent || null;
      }
    }, {
      key: "draggable",
      get: function get() {
        return this.data.draggable || null;
      }
    }]);

    return DroppableActivateEvent;
  }(DroppableEvent);

  _defineProperty(DroppableActivateEvent, "type", 'droppable:activate');

  var DroppableOverEvent = /*#__PURE__*/function (_DroppableActivateEve) {
    _inherits(DroppableOverEvent, _DroppableActivateEve);

    var _super4 = _createSuper(DroppableOverEvent);

    function DroppableOverEvent() {
      _classCallCheck(this, DroppableOverEvent);

      return _super4.apply(this, arguments);
    }

    return DroppableOverEvent;
  }(DroppableActivateEvent);

  _defineProperty(DroppableOverEvent, "type", 'droppable:over');

  var DroppableDropEvent = /*#__PURE__*/function (_DroppableActivateEve2) {
    _inherits(DroppableDropEvent, _DroppableActivateEve2);

    var _super5 = _createSuper(DroppableDropEvent);

    function DroppableDropEvent() {
      _classCallCheck(this, DroppableDropEvent);

      return _super5.apply(this, arguments);
    }

    return DroppableDropEvent;
  }(DroppableActivateEvent);

  _defineProperty(DroppableDropEvent, "type", 'droppable:drop');

  var DroppableOutEvent = /*#__PURE__*/function (_DroppableActivateEve3) {
    _inherits(DroppableOutEvent, _DroppableActivateEve3);

    var _super6 = _createSuper(DroppableOutEvent);

    function DroppableOutEvent() {
      _classCallCheck(this, DroppableOutEvent);

      return _super6.apply(this, arguments);
    }

    return DroppableOutEvent;
  }(DroppableActivateEvent);

  _defineProperty(DroppableOutEvent, "type", 'droppable:out');

  var DroppableDeactivateEvent = /*#__PURE__*/function (_DroppableActivateEve4) {
    _inherits(DroppableDeactivateEvent, _DroppableActivateEve4);

    var _super7 = _createSuper(DroppableDeactivateEvent);

    function DroppableDeactivateEvent() {
      _classCallCheck(this, DroppableDeactivateEvent);

      return _super7.apply(this, arguments);
    }

    return DroppableDeactivateEvent;
  }(DroppableActivateEvent);

  _defineProperty(DroppableDeactivateEvent, "type", 'droppable:deactivate');

  var DroppableDestroyEvent = /*#__PURE__*/function (_DroppableEvent3) {
    _inherits(DroppableDestroyEvent, _DroppableEvent3);

    var _super8 = _createSuper(DroppableDestroyEvent);

    function DroppableDestroyEvent() {
      _classCallCheck(this, DroppableDestroyEvent);

      return _super8.apply(this, arguments);
    }

    return DroppableDestroyEvent;
  }(DroppableEvent);

  _defineProperty(DroppableDestroyEvent, "type", 'droppable:destroy');

  var Droppable = /*#__PURE__*/function () {
    function Droppable(element) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var listeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Droppable);

      _defineProperty(this, "element", null);

      _defineProperty(this, "isOver", false);

      _defineProperty(this, "visible", true);

      _defineProperty(this, "greedyChild", false);

      _defineProperty(this, "emitter", new CancelableEventEmitter());

      _defineProperty(this, "options", {});

      _defineProperty(this, "size", null);

      _defineProperty(this, "offset", null);

      _defineProperty(this, "setup", function () {
        var scope = _this.options.scope;
        _this.element[_this.dataProperty] = _this;
        addClass(_this.element, _this.elementClass);
        DragDropManager$1.addDroppable(_this, scope);

        _this.trigger(new DroppableInitEvent({
          droppable: _this
        }));
      });

      if (element instanceof HTMLElement) {
        this.element = element;
      } else {
        throw new Error('Invalid element');
      }

      this.options = _objectSpread2(_objectSpread2({}, this.constructor.defaultOptions), isPlainObject_1(options) ? options : {});

      if (isPlainObject_1(listeners)) {
        forEach_1(listeners, function (callback, type) {
          _this.on(type, callback);
        });
      }

      setTimeout(this.setup, 0);
    }

    _createClass(Droppable, [{
      key: "setDisabled",
      value: function setDisabled(value) {
        this.options.disabled = !!value;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var scope = this.options.scope;
        delete this.element[this.dataProperty];
        removeClass(this.element, this.elementClass);
        DragDropManager$1.removeDroppable(this, scope);
        this.trigger(new DroppableDestroyEvent({
          droppable: this
        }));
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.options.disabled;
      }
    }, {
      key: "dataProperty",
      get: function get() {
        return droppableProp;
      }
    }, {
      key: "elementClass",
      get: function get() {
        return droppableEl;
      }
    }, {
      key: "activeClass",
      get: function get() {
        return droppableActive;
      }
    }, {
      key: "hoverClass",
      get: function get() {
        return droppableHover;
      }
    }, {
      key: "greedy",
      get: function get() {
        return this.options.greedy;
      }
    }, {
      key: "scope",
      get: function get() {
        return this.options.scope;
      }
    }, {
      key: "proportions",
      get: function get() {
        if (!this.offset) {
          this.offset = offset(this.element);
        }

        if (!this.size) {
          this.size = {
            width: getWidth(this.element),
            height: height(this.element)
          };
        }

        return {
          left: this.offset.left,
          top: this.offset.top,
          right: this.offset.left + this.size.width,
          bottom: this.offset.top + this.size.height,
          width: this.size.width,
          height: this.size.height
        };
      }
    }, {
      key: "refreshVisibility",
      value: function refreshVisibility() {
        this.visible = style(this.element, 'display') !== 'none';
      }
    }, {
      key: "refreshProportions",
      value: function refreshProportions() {
        this.offset = offset(this.element);
        this.size = {
          width: getWidth(this.element),
          height: height(this.element)
        };
      }
    }, {
      key: "intersect",
      value: function intersect$1(draggable, event) {
        var tolerance = this.options.tolerance;

        if (this.disabled || this.greedyChild || !this.visible) {
          return false;
        }

        return intersect(draggable.proportions, this.proportions, tolerance, event);
      }
    }, {
      key: "accept",
      value: function accept(draggable) {
        var accept = this.options.accept;

        if (this.disabled || !this.visible) {
          return false;
        }

        if (draggable) {
          return isFunction_1(accept) ? accept(draggable.currentItem || draggable.element) : matches(draggable.currentItem || draggable.element, accept);
        }

        return false;
      }
    }, {
      key: "activate",
      value: function activate(event) {
        var draggable = DragDropManager$1.draggable;
        addClass(this.element, this.activeClass);

        if (draggable) {
          this.trigger(new DroppableActivateEvent({
            droppable: this,
            sensorEvent: event,
            draggable: draggable
          }));
        }
      }
    }, {
      key: "over",
      value: function over(event) {
        var draggable = DragDropManager$1.draggable;

        if (draggable && (draggable.currentItem || draggable.element) !== this.element && this.accept(draggable)) {
          addClass(this.element, this.hoverClass);
          this.isOver = true;
          this.trigger(new DroppableOverEvent({
            droppable: this,
            sensorEvent: event,
            draggable: draggable
          }));
        }
      }
    }, {
      key: "drop",
      value: function drop(event) {
        var _this2 = this;

        var draggable = DragDropManager$1.draggable;
        var childIntersection = false;

        if (draggable && (draggable.currentItem && draggable.element) !== this.element) {
          var childDroppables = qsa(this.element, ':not(.ui-draggable-dragging)').filter(function (element) {
            return element[_this2.dataProperty];
          });
          childDroppables.forEach(function (child) {
            var droppable = child[_this2.dataProperty];

            if (!childIntersection && droppable.greedy && droppable.scope === draggable.scope && droppable.intersect(draggable, event) && droppable.accept(draggable)) {
              childIntersection = true;
            }
          });

          if (childIntersection) {
            return null;
          }

          if (this.accept(draggable)) {
            removeClass(this.element, this.activeClass);
            removeClass(this.element, this.hoverClass);
            this.isOver = false;
            this.trigger(new DroppableDropEvent({
              droppable: this,
              sensorEvent: event,
              draggable: draggable
            }));
            return this;
          }
        }

        return null;
      }
    }, {
      key: "out",
      value: function out(event) {
        var draggable = DragDropManager$1.draggable;

        if (draggable && (draggable.currentItem || draggable.element) !== this.element && this.accept(draggable)) {
          removeClass(this.element, this.hoverClass);
          this.isOver = false;
          this.trigger(new DroppableOutEvent({
            droppable: this,
            sensorEvent: event,
            draggable: draggable
          }));
        }
      }
    }, {
      key: "deactivate",
      value: function deactivate(event) {
        var draggable = DragDropManager$1.draggable;
        removeClass(this.element, this.activeClass);
        this.isOver = false;

        if (draggable) {
          this.trigger(new DroppableDeactivateEvent({
            droppable: this,
            sensorEvent: event,
            draggable: draggable
          }));
        }
      }
    }, {
      key: "on",
      value: function on(type, callback) {
        this.emitter.on(type, callback);
      }
    }, {
      key: "off",
      value: function off(type, callback) {
        this.emitter.off(type, callback);
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        this.emitter.emit(event.type, event);
      }
    }]);

    return Droppable;
  }();

  _defineProperty(Droppable, "defaultOptions", {
    accept: '*',
    disabled: false,
    greedy: false,
    scope: 'default',
    tolerance: 'intersect'
  });

  var SortEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(SortEvent, _AbstractEvent);

    var _super = _createSuper(SortEvent);

    function SortEvent() {
      _classCallCheck(this, SortEvent);

      return _super.apply(this, arguments);
    }

    _createClass(SortEvent, [{
      key: "source",
      get: function get() {
        return this.data.source || null;
      }
    }, {
      key: "helper",
      get: function get() {
        return this.data.helper || null;
      }
    }, {
      key: "placeholder",
      get: function get() {
        return this.data.placeholder || null;
      }
    }, {
      key: "sensorEvent",
      get: function get() {
        return this.data.sensorEvent || null;
      }
    }, {
      key: "originalEvent",
      get: function get() {
        return this.data.originalEvent || null;
      }
    }]);

    return SortEvent;
  }(AbstractEvent);

  _defineProperty(SortEvent, "type", 'sort');

  var SortStartEvent = /*#__PURE__*/function (_SortEvent) {
    _inherits(SortStartEvent, _SortEvent);

    var _super2 = _createSuper(SortStartEvent);

    function SortStartEvent() {
      _classCallCheck(this, SortStartEvent);

      return _super2.apply(this, arguments);
    }

    return SortStartEvent;
  }(SortEvent);

  _defineProperty(SortStartEvent, "type", 'sort:start');

  _defineProperty(SortStartEvent, "cancelable", true);

  var SortMoveEvent = /*#__PURE__*/function (_SortEvent2) {
    _inherits(SortMoveEvent, _SortEvent2);

    var _super3 = _createSuper(SortMoveEvent);

    function SortMoveEvent() {
      _classCallCheck(this, SortMoveEvent);

      return _super3.apply(this, arguments);
    }

    _createClass(SortMoveEvent, [{
      key: "position",
      get: function get() {
        return this.data.position || null;
      }
    }]);

    return SortMoveEvent;
  }(SortEvent);

  _defineProperty(SortMoveEvent, "type", 'sort:move');

  _defineProperty(SortMoveEvent, "cancelable", true);

  var SortStopEvent = /*#__PURE__*/function (_SortEvent3) {
    _inherits(SortStopEvent, _SortEvent3);

    var _super4 = _createSuper(SortStopEvent);

    function SortStopEvent() {
      _classCallCheck(this, SortStopEvent);

      return _super4.apply(this, arguments);
    }

    _createClass(SortStopEvent, [{
      key: "droppable",
      get: function get() {
        return this.data.droppable || null;
      }
    }]);

    return SortStopEvent;
  }(SortEvent);

  _defineProperty(SortStopEvent, "type", 'sort:stop');

  _defineProperty(SortStopEvent, "cancelable", true);

  var Sortable = /*#__PURE__*/function (_Draggable) {
    _inherits(Sortable, _Draggable);

    var _super = _createSuper(Sortable);

    function Sortable() {
      var _this;

      _classCallCheck(this, Sortable);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "connectedSortables", []);

      _defineProperty(_assertThisInitialized(_this), "currentConnectedSortable", null);

      _defineProperty(_assertThisInitialized(_this), "connectedDraggable", null);

      _defineProperty(_assertThisInitialized(_this), "items", []);

      _defineProperty(_assertThisInitialized(_this), "currentItem", null);

      _defineProperty(_assertThisInitialized(_this), "currentItemStyle", {});

      _defineProperty(_assertThisInitialized(_this), "currentItemProps", null);

      _defineProperty(_assertThisInitialized(_this), "elementProportions", null);

      _defineProperty(_assertThisInitialized(_this), "placeholder", null);

      _defineProperty(_assertThisInitialized(_this), "isOver", false);

      _defineProperty(_assertThisInitialized(_this), "isDraggableOver", false);

      _defineProperty(_assertThisInitialized(_this), "floating", false);

      _defineProperty(_assertThisInitialized(_this), "previousPosition", null);

      _defineProperty(_assertThisInitialized(_this), "resetCurrentItem", false);

      _defineProperty(_assertThisInitialized(_this), "rearrangeIteration", 0);

      _defineProperty(_assertThisInitialized(_this), "setup", function () {
        _this.addPlugin(new AxisConstraint(_assertThisInitialized(_this)));

        _this.addPlugin(new DragContainmentConstraint(_assertThisInitialized(_this)));

        _this.addPlugin(new DragGridConstraint(_assertThisInitialized(_this)));

        _this.addPlugin(new StyleDecorator(_assertThisInitialized(_this), 'cursor'));

        _this.addPlugin(new StyleDecorator(_assertThisInitialized(_this), 'opacity'));

        _this.addPlugin(new StyleDecorator(_assertThisInitialized(_this), 'zIndex'));

        _this.addPlugin(new AutoScroll(_assertThisInitialized(_this)));

        _this.addSensor(new MouseSensor(_assertThisInitialized(_this)));

        document.addEventListener('mouse:down', _this.onMouseDown);
        document.addEventListener('mouse:start', _this.onDragStart);
        document.addEventListener('mouse:move', _this.onDragMove);
        document.addEventListener('mouse:stop', _this.onDragStop);
        _this.element[_this.dataProperty] = _assertThisInitialized(_this);
        addClass(_this.element, _this.elementClass);

        _this.refresh();

        _this.offset.element = offset(_this.element);

        _this.trigger(new SortableInitEvent({
          sortable: _assertThisInitialized(_this)
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _assertThisInitialized(_this)) {
          return;
        }

        if (_this.disabled || _this.reverting) {
          sensorEvent.cancel();
          return;
        }

        if (!_this.findItem(sensorEvent)) {
          sensorEvent.cancel();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (event) {
        var noActivation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var forceOwnership = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _assertThisInitialized(_this) && !forceOwnership) {
          return;
        }

        if (_this.disabled || _this.reverting) {
          sensorEvent.cancel();
          return;
        }

        _this.refreshItems();

        _this.currentItem = _this.findItem(sensorEvent);

        if (!_this.currentItem) {
          sensorEvent.cancel();
          return;
        } else {
          _this.currentItemProps = {
            previous: _this.currentItem.previousElementSibling,
            parent: _this.currentItem.parentNode,
            previousIndex: getChildIndex(_this.currentItem)
          };

          _this.refreshPositions();
        }

        if (!_this.isInsideHandle(sensorEvent)) {
          sensorEvent.cancel();
          return;
        }

        _this.helper = _this.createHelper(sensorEvent);

        if (!_this.helper) {
          sensorEvent.cancel();
          return;
        }

        _this.createPlaceholder();

        addClass(_this.helper, _this.helperClass);

        _this.cacheMargins();

        _this.currentConnectedSortable = _assertThisInitialized(_this);
        _this.dragging = true;

        _this.cacheHelperSize();

        _this.helperAttrs = {
          scrollParent: scrollParent$1(_this.helper, false)
        };
        _this.startEvent = sensorEvent;

        _this.calculateOffsets(sensorEvent);

        _this.calculatePosition(sensorEvent, false);

        _this.items = _this.items.filter(function (item) {
          return item.element !== _this.currentItem;
        });
        setPositionAbsolute(_this.helper);
        _this.helperAttrs.cssPosition = 'absolute';

        if (_this.helper !== _this.currentItem) {
          hide(_this.currentItem);
        }

        var sortStart = new SortStartEvent({
          source: _this.currentItem,
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent
        });

        _this.trigger(sortStart);

        if (sortStart.canceled) {
          _this.onDragCancel(createMouseStopEvent(_this.helper));

          return;
        }

        _this.cacheHelperSize();

        if (!noActivation) {
          _this.connectedSortables.forEach(function (sortable) {
            sortable.trigger(new SortableActivateEvent({
              sortable: sortable,
              sensorEvent: sensorEvent,
              peerSortable: _assertThisInitialized(_this)
            }));
          });
        }

        DragDropManager$1.prepareOffsets(_assertThisInitialized(_this), sensorEvent);

        _this.onDragMove(event, true, forceOwnership);

        _this.scrollListeners = getParents(_this.element, 'body').map(function (parent) {
          return listen(parent, 'scroll', function () {
            return DragDropManager$1.prepareOffsets(_assertThisInitialized(_this), event);
          });
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onDragCancel", function (event) {
        var sensorEvent = event.detail;

        _this.scrollListeners.forEach(function (listener) {
          return listener();
        });

        _this.scrollListeners = [];
        DragDropManager$1.onDragStop(_assertThisInitialized(_this), sensorEvent);

        _this.sensors.forEach(function (sensor) {
          return sensor.cancel(event);
        });

        _this.clear();
      });

      _defineProperty(_assertThisInitialized(_this), "onDragMove", function (event) {
        var noPropagation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var forceOwnership = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var sensorEvent = event.detail;

        if ((sensorEvent.caller !== _assertThisInitialized(_this) || !_this.dragging) && !forceOwnership) {
          return;
        }

        _this.calculatePosition(sensorEvent);

        if (!_this.previousPosition) {
          _this.previousPosition = _this.position.absolute;
        }

        if (!noPropagation) {
          var sortMove = new SortMoveEvent({
            source: _this.currentItem,
            helper: _this.helper,
            placeholder: _this.placeholder,
            sensorEvent: sensorEvent,
            originalEvent: sensorEvent.originalEvent,
            position: _this.position.current
          });

          _this.trigger(sortMove);

          if (sortMove.canceled) {
            return;
          }
        }

        style(_this.helper, {
          left: _this.position.current.left + 'px',
          top: _this.position.current.top + 'px'
        });
        var foundItem = null;

        _this.items.forEach(function (item) {
          if (!foundItem && item.instance === _this.currentConnectedSortable) {
            var intersection = _this.getPointerIntersection(item);

            if (intersection) {
              var tolerance = _this.options.tolerance;
              var element = item.element;

              if (element !== _this.currentItem && element !== _this.placeholder[intersection === 1 ? 'nextElementSibling' : 'previousElementSibling'] && !containsStrict(_this.placeholder, element)) {
                var direction = intersection === 1 ? 'down' : 'up';

                if (tolerance === 'pointer' || _this.intersectsWithSides(item)) {
                  _this.rearrange(null, item, direction);

                  _this.trigger(new SortableChangeEvent({
                    sortable: _assertThisInitialized(_this)
                  }));

                  foundItem = item;
                }
              }
            }
          }
        });

        _this.contactSortables(sensorEvent);

        DragDropManager$1.onDragMove(_assertThisInitialized(_this), sensorEvent);
        _this.previousPosition = _this.position.absolute;
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStop", function (event) {
        var forceOwnership = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var sensorEvent = event.detail;

        if ((sensorEvent.caller !== _assertThisInitialized(_this) || !_this.dragging) && !forceOwnership) {
          return;
        }

        var _this$options = _this.options,
            revert = _this$options.revert,
            revertDuration = _this$options.revertDuration;
        var original = _this.position.original;
        var sortStop = new SortStopEvent({
          source: _this.currentItem,
          helper: _this.helper,
          droppable: DragDropManager$1.drop(_assertThisInitialized(_this), sensorEvent),
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent
        });

        if (revert === 'invalid' && !sortStop.droppable || revert === 'valid' && sortStop.droppable || isFunction_1(revert) && revert(_this.currentItem, sortStop.droppable) || revert) {
          _this.reverting = true;
          anime({
            targets: [_this.helper],
            left: original.left + 'px',
            top: original.top + 'px',
            duration: revertDuration,
            easing: 'linear',
            complete: function complete() {
              _this.reverting = false;

              _this.trigger(sortStop);

              if (!sortStop.canceled) {
                _this.clear();
              }
            }
          });
        } else {
          _this.trigger(sortStop);

          if (!sortStop.canceled) {
            _this.applyChanges();

            _this.clear();
          }
        }
      });

      return _this;
    }

    _createClass(Sortable, [{
      key: "cancel",
      value: function cancel() {
        this.resetCurrentItem = true;

        _get(_getPrototypeOf(Sortable.prototype), "cancel", this).call(this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this2 = this;

        if (this.dragging) {
          this.pendingDestroy = true;
          return;
        }

        this.plugins.forEach(function (plugin) {
          return plugin.detach();
        });
        this.sensors.forEach(function (sensor) {
          return sensor.detach();
        });
        document.removeEventListener('mouse:start', this.onDragStart);
        document.removeEventListener('mouse:move', this.onDragMove);
        document.removeEventListener('mouse:stop', this.onDragStop);
        delete this.element[this.dataProperty];
        removeClass(this.element, this.elementClass);
        this.items.forEach(function (item) {
          return delete item.element[_this2.dataProperty];
        });
        this.findHandles().forEach(function (handle) {
          removeClass(handle, _this2.handleClass);
        });
        this.trigger(new SortableDestroyEvent({
          sortable: this
        }));
      }
    }, {
      key: "dataProperty",
      get: function get() {
        return sortableProp;
      }
    }, {
      key: "elementClass",
      get: function get() {
        return sortableEl;
      }
    }, {
      key: "handleClass",
      get: function get() {
        return sortableHandle;
      }
    }, {
      key: "helperClass",
      get: function get() {
        return sortableHelper;
      }
    }, {
      key: "placeholderClass",
      get: function get() {
        return sortablePlaceholder;
      }
    }, {
      key: "over",
      value: function over() {
        var peerSortable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var draggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!this.isOver) {
          this.trigger(new SortableOverEvent({
            sortable: this,
            peerSortable: peerSortable,
            draggable: draggable
          }));
          this.isOver = true;
        }
      }
    }, {
      key: "out",
      value: function out() {
        var peerSortable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var draggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (this.isOver) {
          this.trigger(new SortableOutEvent({
            sortable: this,
            peerSortable: peerSortable,
            draggable: draggable
          }));
          this.isOver = false;
        }
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var _this3 = this;

        this.refreshItems();
        this.refreshPositions();
        this.findHandles().forEach(function (handle) {
          addClass(handle, _this3.handleClass);
        });
      }
    }, {
      key: "refreshItems",
      value: function refreshItems() {
        var _this4 = this;

        var connectWith = this.options.connectWith;
        this.connectedSortables = [this];
        this.items = this.findItems();
        var connectedSortables = connectWith ? qsa(document, connectWith) : [];
        connectedSortables.forEach(function (element) {
          var sortable = element[_this4.dataProperty];

          if (sortable && sortable !== _this4 && !sortable.disabled) {
            _this4.items = _this4.items.concat(sortable.findItems(null, _this4.currentItem));

            _this4.connectedSortables.push(sortable);
          }
        });
      }
    }, {
      key: "refreshPositions",
      value: function refreshPositions() {
        var _this5 = this;

        var axis = this.options.axis;
        this.floating = this.items.length ? axis === 'x' || isFloating(this.items[0].element) : false;

        if (this.helper && this.helperAttrs && this.helperAttrs.offsetParent) {
          this.offset.parent = this.getParentOffset();
        }

        this.items.forEach(function (item) {
          if (!_this5.currentConnectedSortable || _this5.currentConnectedSortable === _this5 || item.element === _this5.currentItem) {
            var _offset = offset(item.element),
                _width = _offset.width,
                _height = _offset.height,
                left = _offset.left,
                top = _offset.top;

            item.width = _width;
            item.height = _height;
            item.left = left;
            item.top = top;
          }
        });
        this.connectedSortables.forEach(function (sortable) {
          return sortable.cacheElementProportions();
        });
      }
    }, {
      key: "findItem",
      value: function findItem(event) {
        var _this6 = this;

        var currentItem = getParents(event.target).find(function (element) {
          return element !== _this6.element && element[_this6.dataProperty] === _this6;
        });

        if (!currentItem && event.target !== this.element && event.target[this.dataProperty] === this) {
          currentItem = event.target;
        }

        return currentItem;
      }
    }, {
      key: "findItems",
      value: function findItems() {
        var _this7 = this;

        var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var currentItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var response = [];
        var items = this.options.items;

        var mapToItem = function mapToItem(item) {
          item[_this7.dataProperty] = _this7;
          return {
            element: item,
            instance: _this7,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          };
        };

        if (isFunction_1(items)) {
          response = items({
            options: this.options,
            item: currentItem || this.currentItem
          });

          if (!Array.isArray(response)) {
            return [];
          }
        } else {
          response = items ? qsa(this.element, items) : toArray$1(this.element.childNodes).filter(function (node) {
            return node.nodeType === 1;
          });
        }

        return isFunction_1(filter) ? response.filter(filter).map(mapToItem) : response.map(mapToItem);
      }
    }, {
      key: "findClosestItem",
      value: function findClosestItem(event, sortable) {
        var _this8 = this;

        var closestItem = null;
        var distance = 10000;
        var floating = sortable.floating || isFloating(this.currentItem);
        var nearBottom = false;
        var posValue = null;
        var eventProp = floating ? 'pageX' : 'pageY';
        this.items.forEach(function (item) {
          if (containsStrict(sortable.element, item.element) && item.element !== _this8.currentItem) {
            nearBottom = false;
            posValue = offset(item.element)[floating ? 'left' : 'top'];

            if (event[eventProp] - posValue > item[floating ? 'width' : 'height'] / 2) {
              nearBottom = true;
            }

            if (Math.abs(event[eventProp] - posValue) < distance) {
              distance = Math.abs(event[eventProp] - posValue);
              closestItem = item;
            }
          }
        });
        return {
          item: closestItem,
          nearBottom: nearBottom
        };
      }
    }, {
      key: "findHandles",
      value: function findHandles() {
        var handles = [];
        var handle = this.options.handle;
        this.items.forEach(function (item) {
          if (handle) {
            handles = handles.concat(qsa(item.element, handle));
          } else {
            handles.push(item.element);
          }
        });
        return handles;
      }
    }, {
      key: "createHelper",
      value: function createHelper(event) {
        var helperNode = null;
        var _this$options2 = this.options,
            appendTo = _this$options2.appendTo,
            helper = _this$options2.helper,
            forceHelperSize = _this$options2.forceHelperSize;

        if (isFunction_1(helper)) {
          helperNode = helper.apply(this.element, [event, this.currentItem]);
        } else if (helper === 'clone') {
          helperNode = this.currentItem.cloneNode(true);
          helperNode.removeAttribute('id');
          helperNode.removeAttribute(this.dataProperty);
          helperNode[this.dataProperty] = this;
        } else {
          helperNode = this.currentItem;
        }

        if (helperNode instanceof HTMLElement) {
          if (!closest(helperNode, 'body')) {
            var parent = appendTo === 'parent' ? this.currentItem.parentNode : document.querySelector(appendTo);

            if (parent instanceof HTMLElement) {
              parent.appendChild(helperNode);
            } else {
              return null;
            }
          }

          if (helperNode === this.currentItem) {
            this.currentItemStyle = {
              width: getWidth(this.currentItem),
              height: height(this.currentItem),
              position: style(this.currentItem, 'position'),
              left: style(this.currentItem, 'left'),
              top: style(this.currentItem, 'top')
            };
          }

          if (!helperNode.style.width || forceHelperSize) {
            style(helperNode, {
              width: getWidth(this.currentItem) + 'px',
              boxSizing: 'border-box'
            });
          }

          if (!helperNode.style.height || forceHelperSize) {
            style(helperNode, {
              height: height(this.currentItem) + 'px',
              boxSizing: 'border-box'
            });
          }

          return helperNode;
        }

        return null;
      }
    }, {
      key: "createPlaceholder",
      value: function createPlaceholder() {
        if (!this.placeholder) {
          var nodeName = this.currentItem.nodeName.toLowerCase();
          var element = document.createElement(nodeName);
          element.className = this.currentItem.className;
          addClass(element, this.placeholderClass);
          removeClass(element, this.helperClass);

          if (nodeName === 'thead' || nodeName === 'tbody') {
            var tableRow = document.createElement('tr');
            element.appendChild(tableRow);
            this.createTableRowPlaceholder(this.currentItem.querySelector('tr'), tableRow, nodeName === 'thead' ? 'th' : 'tr');
          } else if (nodeName === 'tr') {
            this.createTableRowPlaceholder(this.currentItem, element, 'tr');
          } else if (nodeName === 'img') {
            element.setAttribute('src', this.currentItem.getAttribute('src'));
          }

          this.placeholder = insertAfter(element, this.currentItem);
          this.updatePlaceholder(this, element);
        } else {
          this.updatePlaceholder(this, this.placeholder);
        }
      }
    }, {
      key: "createTableRowPlaceholder",
      value: function createTableRowPlaceholder(sourceRow, newRow, childTag) {
        qsa(sourceRow, childTag).forEach(function (child) {
          var newChild = document.createElement(childTag);
          newChild.innerHTML = '&#160;';
          newChild.setAttribute('colspan', child.getAttribute('colspan'));
          newRow.appendChild(newChild);
        });
      }
    }, {
      key: "updatePlaceholder",
      value: function updatePlaceholder(sortable, placeholder) {
        var _sortable$options = sortable.options,
            forcePlaceholderSize = _sortable$options.forcePlaceholderSize,
            hidePlaceholder = _sortable$options.hidePlaceholder;

        if (hidePlaceholder) {
          style(placeholder, {
            visibility: 'hidden'
          });
        } else if (forcePlaceholderSize) {
          if (!getWidth(placeholder)) {
            style(placeholder, {
              width: getWidth(this.currentItem) + 'px'
            });
          }

          if (!height(placeholder)) {
            style(placeholder, {
              height: height(this.currentItem) + 'px'
            });
          }
        }
      }
    }, {
      key: "cacheMargins",
      value: function cacheMargins() {
        this.margins = {
          left: parseInt(style(this.currentItem, 'marginLeft'), 10) || 0,
          top: parseInt(style(this.currentItem, 'marginTop'), 10) || 0,
          right: parseInt(style(this.currentItem, 'marginRight'), 10) || 0,
          bottom: parseInt(style(this.currentItem, 'marginBottom'), 10) || 0
        };
      }
    }, {
      key: "cacheElementProportions",
      value: function cacheElementProportions() {
        this.elementProportions = offset(this.element);
      }
    }, {
      key: "calculateOffsets",
      value: function calculateOffsets(event) {
        var itemOffset = offset(this.currentItem);
        this.offset.click = {
          left: event.pageX - itemOffset.left - this.margins.left,
          top: event.pageY - itemOffset.top - this.margins.top
        };
        this.offset.parent = this.getParentOffset();
        this.offset.relative = this.getRelativeOffset();
      }
    }, {
      key: "getParentOffset",
      value: function getParentOffset() {
        this.helperAttrs.offsetParent = offsetParent(this.helper);
        return _get(_getPrototypeOf(Sortable.prototype), "getParentOffset", this).call(this);
      }
    }, {
      key: "calculatePosition",
      value: function calculatePosition(event) {
        var constraint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var _ref = constraint ? this.constraintPosition(event) : event,
            pageX = _ref.pageX,
            pageY = _ref.pageY;

        var scrollParent = this.helperAttrs.scrollParent;
        var _this$helperAttrs = this.helperAttrs,
            cssPosition = _this$helperAttrs.cssPosition,
            offsetParent = _this$helperAttrs.offsetParent;
        var scrollIsRoot = isRoot(scrollParent);

        if (cssPosition === 'absolute' && !(scrollParent !== document && containsStrict(scrollParent, offsetParent))) {
          scrollParent = offsetParent;
          scrollIsRoot = isRoot(scrollParent);
        }

        if (cssPosition === 'relative' && scrollParent === document && scrollParent !== offsetParent) {
          this.offset.relative = this.getRelativeOffset();
        }

        this.offset.scroll = {
          left: scrollLeft(scrollParent),
          top: scrollTop(scrollParent)
        };
        var _this$offset = this.offset,
            click = _this$offset.click,
            parent = _this$offset.parent,
            relative = _this$offset.relative,
            scroll = _this$offset.scroll;
        var position = {
          left: pageX - click.left - parent.left - relative.left + (cssPosition === 'fixed' ? -scroll.left : scrollIsRoot ? 0 : scroll.left),
          top: pageY - click.top - parent.top - relative.top + (cssPosition === 'fixed' ? -scroll.top : scrollIsRoot ? 0 : scroll.top)
        };

        if (!this.position.original) {
          this.position.original = position;
        }

        this.position.current = position;
        this.position.absolute = this.convertPosition(position, 'absolute');
      }
    }, {
      key: "convertPosition",
      value: function convertPosition(position, to) {
        var scrollParent = this.helperAttrs.scrollParent;
        var _this$helperAttrs2 = this.helperAttrs,
            cssPosition = _this$helperAttrs2.cssPosition,
            offsetParent = _this$helperAttrs2.offsetParent;
        var _this$offset2 = this.offset,
            parent = _this$offset2.parent,
            relative = _this$offset2.relative;
        var factor = to === 'absolute' ? 1 : -1;
        var scrollIsRoot = isRoot(scrollParent);

        if (cssPosition === 'absolute' && !(scrollParent !== document && containsStrict(scrollParent, offsetParent))) {
          scrollParent = offsetParent;
          scrollIsRoot = isRoot(scrollParent);
        }

        return {
          left: position.left + parent.left * factor + relative.left * factor - (cssPosition === 'fixed' ? -scrollLeft(scrollParent) : (scrollIsRoot ? 0 : scrollLeft(scrollParent)) * factor),
          top: position.top + parent.top * factor + relative.top * factor - (cssPosition === 'fixed' ? -scrollTop(scrollParent) : (scrollIsRoot ? 0 : scrollTop(scrollParent)) * factor)
        };
      }
    }, {
      key: "getDragDirection",
      value: function getDragDirection(axis) {
        var delta = this.position.absolute[axis === 'x' ? 'left' : 'top'] - this.previousPosition[axis === 'x' ? 'left' : 'top'];
        return delta !== 0 ? delta > 0 ? axis === 'x' ? 'right' : 'down' : axis === 'x' ? 'left' : 'up' : null;
      }
    }, {
      key: "getPointerIntersection",
      value: function getPointerIntersection(item) {
        var axis = this.options.axis;
        var click = this.offset.click;
        var absolute = this.position.absolute;
        var pointer = {
          x: absolute.left + click.left,
          y: absolute.top + click.top
        };
        var isOverItem = (axis === 'y' || pointer.x >= item.left && pointer.x < item.left + item.width) && (axis === 'x' || pointer.y >= item.top && pointer.y < item.top + item.height);

        if (!isOverItem) {
          return 0;
        }

        var dragDirectionX = this.getDragDirection('x');
        var dragDirectionY = this.getDragDirection('y');
        return this.floating ? dragDirectionX === 'right' || dragDirectionY === 'bottom' ? 2 : 1 : dragDirectionY === 'down' ? 2 : 1;
      }
    }, {
      key: "intersectsWith",
      value: function intersectsWith(compareWith) {
        var _this$options3 = this.options,
            axis = _this$options3.axis,
            tolerance = _this$options3.tolerance;
        var _this$helperSize = this.helperSize,
            width = _this$helperSize.width,
            height = _this$helperSize.height;
        var click = this.offset.click;
        var absolute = this.position.absolute;
        var proportions = {
          left: absolute.left + click.left,
          top: absolute.top + click.top,
          right: absolute.left + click.left + width,
          bottom: absolute.top + click.top + height,
          width: width,
          height: height
        };

        if (tolerance === 'pointer' || this.floating && width > compareWith.width || !this.floating && height > compareWith.height) {
          return (axis === 'y' || proportions.left > compareWith.left && proportions.left < compareWith.left + compareWith.width) && (axis === 'x' || proportions.top > compareWith.top && proportions.top < compareWith.top + compareWith.height);
        }

        return compareWith.left < absolute.left + width / 2 && compareWith.left + compareWith.width > absolute.left + width / 2 && compareWith.top < absolute.top + height / 2 && compareWith.top + compareWith.height > absolute.top + height / 2;
      }
    }, {
      key: "intersectsWithSides",
      value: function intersectsWithSides(item) {
        var width = item.width,
            height = item.height,
            left = item.left,
            top = item.top;
        var click = this.offset.click;
        var absolute = this.position.absolute;
        var pointer = {
          x: absolute.left + click.left,
          y: absolute.top + click.top
        };
        var itemCenter = {
          x: left + width / 2,
          y: top + height / 2
        };
        var dragDirectionX = this.getDragDirection('x');
        var dragDirectionY = this.getDragDirection('y');

        if (this.floating && dragDirectionX) {
          return dragDirectionX === 'right' && pointer.x >= itemCenter.x && pointer.x < itemCenter.x + width || dragDirectionX === 'left' && !(pointer.x >= itemCenter.x && pointer.x < itemCenter.x + width);
        }

        return dragDirectionY === 'down' && pointer.y >= itemCenter.y && pointer.y < itemCenter.y + height || dragDirectionY === 'up' && !(pointer.y >= itemCenter.y && pointer.y < itemCenter.y + height);
      }
    }, {
      key: "contactSortables",
      value: function contactSortables(event) {
        var _this9 = this;

        var activeSortable = null;
        var closestItem = null;
        var changeEvent = new SortableChangeEvent({
          sortable: this
        });
        this.connectedSortables.forEach(function (sortable) {
          if (!containsStrict(_this9.currentItem, sortable.element)) {
            if (_this9.intersectsWith(sortable.elementProportions)) {
              if (!activeSortable || !containsStrict(sortable.element, activeSortable.element)) {
                activeSortable = sortable;
              }
            } else {
              sortable.out(_this9);
            }
          }
        });

        if (activeSortable) {
          if (this.connectedSortables.length === 1) {
            activeSortable.over(null);
          } else {
            closestItem = this.findClosestItem(event, activeSortable);

            if (closestItem.item || this.options.dropOnEmpty) {
              if (this.currentConnectedSortable === activeSortable) {
                activeSortable.over(this);
              } else {
                if (closestItem.item) {
                  this.rearrange(null, closestItem.item, closestItem.nearBottom ? 'up' : 'down');
                } else {
                  this.rearrange(activeSortable.element);
                }

                this.trigger(changeEvent);
                activeSortable.over(this);
                activeSortable.trigger(changeEvent);
                this.currentConnectedSortable = activeSortable;
                this.updatePlaceholder(activeSortable, this.placeholder);
              }
            }
          }
        }
      }
    }, {
      key: "rearrange",
      value: function rearrange() {
        var _this10 = this;

        var parentEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var refItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (parentEl instanceof HTMLElement) {
          parentEl.appendChild(this.placeholder);
        } else if (refItem && refItem.element instanceof HTMLElement) {
          refItem.element.parentNode.insertBefore(this.placeholder, direction === 'down' ? refItem.element : refItem.element.nextSibling);
        } else {
          return;
        }

        this.rearrangeIteration = this.rearrangeIteration ? this.rearrangeIteration++ : 1;
        var iteration = this.rearrangeIteration;
        setTimeout(function () {
          if (iteration === _this10.rearrangeIteration) {
            _this10.refreshPositions();
          }
        });
      }
    }, {
      key: "applyChanges",
      value: function applyChanges() {
        var _this11 = this;

        var newIndex = null;

        if (this.helper && this.currentItem) {
          insertBefore(this.currentItem, this.placeholder);
          newIndex = getChildIndex(this.currentItem);

          if (this.helper === this.currentItem) {
            forEach_1(this.currentItemStyle, function (value, prop) {
              if (value === 'auto' || value === 'static') {
                _this11.currentItemStyle[prop] = '';
              }
            });
            style(this.currentItem, this.currentItemStyle);
          } else {
            show(this.currentItem);
          }

          if (this.resetCurrentItem) {
            var _this$currentItemProp = this.currentItemProps,
                previous = _this$currentItemProp.previous,
                parent = _this$currentItemProp.parent;

            if (previous) {
              insertAfter(this.currentItem, previous);
            } else {
              insertBefore(this.currentItem, parent.firstElementChild);
            }

            this.resetCurrentItem = false;
          }
        }

        if (this.connectedDraggable) {
          this.trigger(new SortableReceiveEvent({
            sortable: this,
            item: this.connectedDraggable.element,
            newIndex: newIndex,
            draggable: this.connectedDraggable
          }));
        }

        if (this.connectedDraggable || this.currentItemProps.previous !== getSibling(this.currentItem, 'previous', ".".concat(this.helperClass)) || this.currentItemProps.parent !== this.currentItem.parentNode) {
          this.trigger(new SortableUpdateEvent({
            sortable: this,
            item: this.currentItem,
            previousIndex: this.currentItemProps.previousIndex,
            newIndex: newIndex,
            peerSortable: this.currentConnectedSortable !== this ? this.currentConnectedSortable : null
          }));
        }

        if (this.currentConnectedSortable !== this) {
          this.trigger(new SortableRemoveEvent({
            sortable: this,
            item: this.currentItem,
            previousIndex: this.currentItemProps.previousIndex,
            peerSortable: this.currentConnectedSortable
          }));
          this.currentConnectedSortable.trigger(new SortableReceiveEvent({
            sortable: this.currentConnectedSortable,
            item: this.currentItem,
            newIndex: newIndex,
            peerSortable: this
          }));
          this.currentConnectedSortable.trigger(new SortableUpdateEvent({
            sortable: this.currentConnectedSortable,
            peerSortable: this,
            previousIndex: this.currentItemProps.previousIndex,
            newIndex: newIndex
          }));
        }

        this.connectedSortables.forEach(function (sortable) {
          sortable.out(_this11);
          sortable.trigger(new SortableDeactivateEvent({
            sortable: sortable,
            peerSortable: _this11
          }));
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        if (this.placeholder) {
          if (this.placeholder.parentNode) {
            this.placeholder.parentNode.removeChild(this.placeholder);
          }

          this.placeholder = null;
        }

        if (this.helper) {
          removeClass(this.helper, this.helperClass);

          if (this.helper !== this.currentItem && !this.cancelHelperRemoval) {
            this.helper.parentNode.removeChild(this.helper);
          }

          this.cancelHelperRemoval = false;
          this.helper = null;
        }

        this.connectedDraggable = null;
        this.currentItem = null;
        this.currentItemProps = null;
        this.dragging = false;

        if (this.pendingDestroy) {
          this.destroy();
          this.pendingDestroy = false;
        }
      }
    }]);

    return Sortable;
  }(Draggable);

  _defineProperty(Sortable, "defaultOptions", {
    appendTo: 'parent',
    axis: null,
    connectWith: null,
    containment: null,
    cursor: null,
    disabled: false,
    distance: 0,
    dropOnEmpty: true,
    forceHelperSize: false,
    forcePlaceholderSize: false,
    hidePlaceholder: false,
    grid: null,
    handle: null,
    helper: 'original',
    items: null,
    opacity: null,
    revert: false,
    revertDuration: 200,
    scope: 'default',
    scroll: true,
    scrollSensitivity: 20,
    scrollSpeed: 10,
    skip: 'input, textarea, button, select, option',
    tolerance: 'intersect',
    zIndex: null
  });

  var anObject$3 = anObject$8;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$3(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var regexpStickyHelpers = {};

  var fails$3 = fails$d;

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.
  function RE(s, f) {
    return RegExp(s, f);
  }

  regexpStickyHelpers.UNSUPPORTED_Y = fails$3(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  regexpStickyHelpers.BROKEN_CARET = fails$3(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec$3 = patchedExec;

  var $$2 = _export;
  var exec = regexpExec$3;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$2({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var redefine = redefine$2.exports;
  var fails$2 = fails$d;
  var wellKnownSymbol$2 = wellKnownSymbol$8;
  var regexpExec$2 = regexpExec$3;
  var createNonEnumerableProperty = createNonEnumerableProperty$6;

  var SPECIES$1 = wellKnownSymbol$2('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$2(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    return 'a'.replace(/./, '$0') === '$0';
  })();

  var REPLACE = wellKnownSymbol$2('replace');
  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$2(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol$2(KEY);

    var DELEGATES_TO_SYMBOL = !fails$2(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !(
        REPLACE_SUPPORTS_NAMED_GROUPS &&
        REPLACE_KEEPS_$0 &&
        !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      )) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec$2) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
    }

    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  };

  var toInteger = toInteger$3;
  var requireObjectCoercible$2 = requireObjectCoercible$6;

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible$2($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$2 = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  var classof$1 = classofRaw;
  var regexpExec$1 = regexpExec$3;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classof$1(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec$1.call(R, S);
  };

  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$2 = anObject$8;
  var toLength$1 = toLength$6;
  var requireObjectCoercible$1 = requireObjectCoercible$6;
  var advanceStringIndex$1 = advanceStringIndex$2;
  var regExpExec = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic$1('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible$1(this);
        var matcher = regexp == undefined ? undefined : regexp[MATCH];
        return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative(nativeMatch, regexp, this);
        if (res.done) return res.value;

        var rx = anObject$2(regexp);
        var S = String(this);

        if (!rx.global) return regExpExec(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  var isObject = isObject$b;
  var classof = classofRaw;
  var wellKnownSymbol$1 = wellKnownSymbol$8;

  var MATCH = wellKnownSymbol$1('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
  };

  var anObject$1 = anObject$8;
  var aFunction = aFunction$4;
  var wellKnownSymbol = wellKnownSymbol$8;

  var SPECIES = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$1(O).constructor;
    var S;
    return C === undefined || (S = anObject$1(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
  };

  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var isRegExp = isRegexp;
  var anObject = anObject$8;
  var requireObjectCoercible = requireObjectCoercible$6;
  var speciesConstructor = speciesConstructor$1;
  var advanceStringIndex = advanceStringIndex$2;
  var toLength = toLength$6;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var fails$1 = fails$d;

  var arrayPush = [].push;
  var min = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails$1(function () { return !RegExp(MAX_UINT32, 'y'); });

  // @@split logic
  fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, !SUPPORTS_Y);

  var fails = fails$d;
  var whitespaces = whitespaces$4;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $$1 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$1({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $ = _export;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict = arrayMethodIsStrict$5;

  var nativeIndexOf = [].indexOf;

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf.apply(this, arguments) || 0
        : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var root = _root;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsFinite = root.isFinite;

  /**
   * Checks if `value` is a finite primitive number.
   *
   * **Note:** This method is based on
   * [`Number.isFinite`](https://mdn.io/Number/isFinite).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
   * @example
   *
   * _.isFinite(3);
   * // => true
   *
   * _.isFinite(Number.MIN_VALUE);
   * // => true
   *
   * _.isFinite(Infinity);
   * // => false
   *
   * _.isFinite('3');
   * // => false
   */
  function isFinite(value) {
    return typeof value == 'number' && nativeIsFinite(value);
  }

  var _isFinite = isFinite;

  var baseGetTag = _baseGetTag,
      isArray = isArray_1,
      isObjectLike = isObjectLike_1;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
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
      (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
  }

  var isString_1 = isString;

  var ResizableEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(ResizableEvent, _AbstractEvent);

    var _super = _createSuper(ResizableEvent);

    function ResizableEvent() {
      _classCallCheck(this, ResizableEvent);

      return _super.apply(this, arguments);
    }

    _createClass(ResizableEvent, [{
      key: "resizable",
      get: function get() {
        return this.data.resizable || null;
      }
    }]);

    return ResizableEvent;
  }(AbstractEvent);

  _defineProperty(ResizableEvent, "type", 'resizable');

  var ResizableInitEvent = /*#__PURE__*/function (_ResizableEvent) {
    _inherits(ResizableInitEvent, _ResizableEvent);

    var _super2 = _createSuper(ResizableInitEvent);

    function ResizableInitEvent() {
      _classCallCheck(this, ResizableInitEvent);

      return _super2.apply(this, arguments);
    }

    return ResizableInitEvent;
  }(ResizableEvent);

  _defineProperty(ResizableInitEvent, "type", 'resizable:init');

  var ResizableDestroyEvent = /*#__PURE__*/function (_ResizableEvent2) {
    _inherits(ResizableDestroyEvent, _ResizableEvent2);

    var _super3 = _createSuper(ResizableDestroyEvent);

    function ResizableDestroyEvent() {
      _classCallCheck(this, ResizableDestroyEvent);

      return _super3.apply(this, arguments);
    }

    return ResizableDestroyEvent;
  }(ResizableEvent);

  _defineProperty(ResizableDestroyEvent, "type", 'resizable:destroy');

  var ResizeEvent = /*#__PURE__*/function (_AbstractEvent) {
    _inherits(ResizeEvent, _AbstractEvent);

    var _super = _createSuper(ResizeEvent);

    function ResizeEvent() {
      _classCallCheck(this, ResizeEvent);

      return _super.apply(this, arguments);
    }

    _createClass(ResizeEvent, [{
      key: "element",
      get: function get() {
        return this.data.element || null;
      }
    }, {
      key: "helper",
      get: function get() {
        return this.data.helper || null;
      }
    }, {
      key: "originalElement",
      get: function get() {
        return this.data.originalElement || null;
      }
    }, {
      key: "originalSize",
      get: function get() {
        return this.data.originalSize || null;
      }
    }, {
      key: "originalPosition",
      get: function get() {
        return this.data.originalPosition || null;
      }
    }, {
      key: "size",
      get: function get() {
        return this.data.size || null;
      }
    }, {
      key: "position",
      get: function get() {
        return this.data.position || null;
      }
    }, {
      key: "sensorEvent",
      get: function get() {
        return this.data.sensorEvent || null;
      }
    }, {
      key: "originalEvent",
      get: function get() {
        return this.data.originalEvent || null;
      }
    }]);

    return ResizeEvent;
  }(AbstractEvent);

  var ResizeStartEvent = /*#__PURE__*/function (_ResizeEvent) {
    _inherits(ResizeStartEvent, _ResizeEvent);

    var _super2 = _createSuper(ResizeStartEvent);

    function ResizeStartEvent() {
      _classCallCheck(this, ResizeStartEvent);

      return _super2.apply(this, arguments);
    }

    return ResizeStartEvent;
  }(ResizeEvent);

  _defineProperty(ResizeStartEvent, "type", 'resize:start');

  _defineProperty(ResizeStartEvent, "cancelable", true);

  var ResizeChangeEvent = /*#__PURE__*/function (_ResizeEvent2) {
    _inherits(ResizeChangeEvent, _ResizeEvent2);

    var _super3 = _createSuper(ResizeChangeEvent);

    function ResizeChangeEvent() {
      _classCallCheck(this, ResizeChangeEvent);

      return _super3.apply(this, arguments);
    }

    return ResizeChangeEvent;
  }(ResizeEvent);

  _defineProperty(ResizeChangeEvent, "type", 'resize:change');

  _defineProperty(ResizeChangeEvent, "cancelable", true);

  var ResizeStopEvent = /*#__PURE__*/function (_ResizeEvent3) {
    _inherits(ResizeStopEvent, _ResizeEvent3);

    var _super4 = _createSuper(ResizeStopEvent);

    function ResizeStopEvent() {
      _classCallCheck(this, ResizeStopEvent);

      return _super4.apply(this, arguments);
    }

    return ResizeStopEvent;
  }(ResizeEvent);

  _defineProperty(ResizeStopEvent, "type", 'resize:stop');

  _defineProperty(ResizeStopEvent, "cancelable", true);

  var resizeTransforms = {
    n: function n(originalAttrs, delta) {
      return {
        height: Math.max(originalAttrs.size.height - delta.y, 0),
        top: originalAttrs.position.top + delta.y
      };
    },
    s: function s(originalAttrs, delta) {
      return {
        height: Math.max(originalAttrs.size.height + delta.y, 0)
      };
    },
    e: function e(originalAttrs, delta) {
      return {
        width: Math.max(originalAttrs.size.width + delta.x, 0)
      };
    },
    w: function w(originalAttrs, delta) {
      return {
        width: Math.max(originalAttrs.size.width - delta.x, 0),
        left: originalAttrs.position.left + delta.x
      };
    },
    ne: function ne(originalAttrs, delta) {
      return {
        width: Math.max(originalAttrs.size.width + delta.x, 0),
        height: Math.max(originalAttrs.size.height - delta.y, 0),
        top: originalAttrs.position.top + delta.y
      };
    },
    nw: function nw(originalAttrs, delta) {
      return {
        width: Math.max(originalAttrs.size.width - delta.x, 0),
        height: Math.max(originalAttrs.size.height - delta.y, 0),
        top: originalAttrs.position.top + delta.y,
        left: originalAttrs.position.left + delta.x
      };
    },
    se: function se(originalAttrs, delta) {
      return {
        width: Math.max(originalAttrs.size.width + delta.x, 0),
        height: Math.max(originalAttrs.size.height + delta.y, 0)
      };
    },
    sw: function sw(originalAttrs, delta) {
      return {
        width: Math.max(originalAttrs.size.width - delta.x, 0),
        height: Math.max(originalAttrs.size.height + delta.y, 0),
        left: originalAttrs.position.left + delta.x
      };
    }
  };

  var wrappableElements = /^(canvas|textarea|input|select|button|img)$/i;

  var Resizable = /*#__PURE__*/function (_Draggable) {
    _inherits(Resizable, _Draggable);

    var _super = _createSuper(Resizable);

    function Resizable() {
      var _this;

      _classCallCheck(this, Resizable);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "originalElement", null);

      _defineProperty(_assertThisInitialized(_this), "originalResize", null);

      _defineProperty(_assertThisInitialized(_this), "pressing", false);

      _defineProperty(_assertThisInitialized(_this), "resizing", false);

      _defineProperty(_assertThisInitialized(_this), "wrapped", false);

      _defineProperty(_assertThisInitialized(_this), "currentHandle", null);

      _defineProperty(_assertThisInitialized(_this), "currentDirection", null);

      _defineProperty(_assertThisInitialized(_this), "handleDirections", []);

      _defineProperty(_assertThisInitialized(_this), "handleElements", []);

      _defineProperty(_assertThisInitialized(_this), "helper", null);

      _defineProperty(_assertThisInitialized(_this), "offset", {
        click: null,
        helper: null
      });

      _defineProperty(_assertThisInitialized(_this), "originalAttrs", {});

      _defineProperty(_assertThisInitialized(_this), "currentAttrs", {});

      _defineProperty(_assertThisInitialized(_this), "previousAttrs", {});

      _defineProperty(_assertThisInitialized(_this), "aspectRatio", null);

      _defineProperty(_assertThisInitialized(_this), "resizableElements", []);

      _defineProperty(_assertThisInitialized(_this), "listeners", []);

      _defineProperty(_assertThisInitialized(_this), "setup", function () {
        var autoHide = _this.options.autoHide;

        _this.addPlugin(new ResizeGridConstraint(_assertThisInitialized(_this)));

        _this.addPlugin(new ResizeContainmentConstraint(_assertThisInitialized(_this)));

        _this.addPlugin(new ResizeAnimate(_assertThisInitialized(_this)));

        _this.addPlugin(new ResizeGhost(_assertThisInitialized(_this)));

        _this.addSensor(new MouseSensor(_assertThisInitialized(_this)));

        document.addEventListener('mouse:down', _this.onMouseDown);
        document.addEventListener('mouse:stop', function () {
          _this.pressing = false;
        });
        document.addEventListener('mouse:start', _this.onDragStart);
        document.addEventListener('mouse:move', _this.onDragMove);
        document.addEventListener('mouse:stop', _this.onDragStop);
        _this.originalElement = _this.element;
        addClass(_this.element, _this.elementClass);
        style(_this.element, {
          position: 'relative'
        });

        if (_this.element.nodeName.match(wrappableElements)) {
          _this.createWrapper();
        } else {
          _this.element[_this.dataProperty] = _assertThisInitialized(_this);
        }

        _this.createHandles();

        if (autoHide) {
          addClass(_this.element, _this.autoHideClass);

          _this.listeners.push(listen(_this.element, 'mouseenter', function () {
            if (!_this.disabled) {
              removeClass(_this.element, _this.autoHideClass);

              _this.handleElements.forEach(function (h) {
                return show(h);
              });
            }
          }));

          _this.listeners.push(listen(_this.element, 'mouseleave', function () {
            if (!_this.disabled && !_this.resizing) {
              addClass(_this.element, _this.autoHideClass);

              _this.handleElements.forEach(function (h) {
                return hide(h);
              });
            }
          }));
        }

        _this.trigger(new ResizableInitEvent({
          resizable: _assertThisInitialized(_this)
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _assertThisInitialized(_this) || !_this.currentHandle || !_this.currentDirection) {
          return;
        }

        if (_this.disabled) {
          sensorEvent.cancel();
          return;
        }

        if (!_this.isInsideHandle(sensorEvent)) {
          sensorEvent.cancel();
          return;
        }

        _this.pressing = true;
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (event) {
        var handleCursor = null;
        var aspectRatio = _this.options.aspectRatio;
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _assertThisInitialized(_this) || !_this.currentHandle || !_this.currentDirection) {
          return;
        }

        _this.resizing = true;
        _this.helper = _this.createHelper(sensorEvent);
        _this.offset.click = {
          left: sensorEvent.pageX,
          top: sensorEvent.pageY
        };
        _this.offset.helper = offset(_this.helper);

        _this.initializeResize();

        _this.aspectRatio = _isFinite(aspectRatio) ? aspectRatio : null;
        var resizeStart = new ResizeStartEvent({
          source: _this.element,
          helper: _this.helper,
          originalElement: _this.originalElement,
          originalSize: _this.originalAttrs.size,
          originalPosition: _this.originalAttrs.position,
          size: _this.currentAttrs.size,
          position: _this.currentAttrs.position,
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent
        });

        _this.trigger(resizeStart);

        if (resizeStart.canceled) {
          _this.onDragCancel(createMouseStopEvent(_this.helper));

          return;
        }

        addClass(_this.helper, _this.resizingClass);
        handleCursor = style(_this.currentHandle, 'cursor');
        style(document.body, {
          cursor: !handleCursor || handleCursor === 'auto' ? "".concat(_this.elementClass, "-").concat(_this.currentDirection) : handleCursor
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onDragCancel", function (event) {
        _this.sensors.forEach(function (sensor) {
          return sensor.cancel(event);
        });

        _this.clear();
      });

      _defineProperty(_assertThisInitialized(_this), "onDragMove", function (event) {
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _assertThisInitialized(_this) || !_this.currentHandle || !_this.currentDirection) {
          return;
        }

        _this.previousAttrs = {
          size: _objectSpread2({}, _this.currentAttrs.size),
          position: _objectSpread2({}, _this.currentAttrs.position)
        };

        _this.calculateResize(sensorEvent);

        var resizeChange = new ResizeChangeEvent({
          element: _this.element,
          helper: _this.helper,
          originalElement: _this.originalElement,
          originalSize: _this.originalAttrs.size,
          originalPosition: _this.originalAttrs.position,
          size: _this.currentAttrs.size,
          position: _this.currentAttrs.position,
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent
        });

        _this.trigger(resizeChange);

        if (resizeChange.canceled) {
          return;
        } else {
          _this.currentAttrs.size = _objectSpread2({}, resizeChange.size);
          _this.currentAttrs.position = _objectSpread2({}, resizeChange.position);
        }

        _this.applyResize();

        if (_this.helper === _this.element) {
          _this.updateResizableElements();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDragStop", function (event) {
        var styleProps = {};
        var _this$options = _this.options,
            animate = _this$options.animate,
            flex = _this$options.flex;
        var _this$originalAttrs = _this.originalAttrs,
            originalSize = _this$originalAttrs.size,
            originalPosition = _this$originalAttrs.position;
        var _this$currentAttrs = _this.currentAttrs,
            size = _this$currentAttrs.size,
            position = _this$currentAttrs.position;
        var sensorEvent = event.detail;

        if (sensorEvent.caller !== _assertThisInitialized(_this) || !_this.currentHandle || !_this.currentDirection) {
          return;
        }

        styleProps[flex ? 'flexBasis' : 'width'] = "".concat(getWidth(_this.helper), "px");
        styleProps.height = "".concat(height(_this.helper), "px");
        styleProps.top = "".concat(styleAsNumber(_this.helper, 'top'), "px");
        styleProps.left = "".concat(styleAsNumber(_this.helper, 'left'), "px");
        style(_this.helper, size);

        if (!animate) {
          style(_this.element, styleProps);

          _this.updateResizableElements();
        }

        var resizeStop = new ResizeStopEvent({
          source: _this.element,
          helper: _this.helper,
          originalElement: _this.originalElement,
          originalSize: _this.originalAttrs.size,
          originalPosition: _this.originalAttrs.position,
          size: size,
          position: position,
          sensorEvent: sensorEvent,
          originalEvent: sensorEvent.originalEvent
        });

        _this.trigger(resizeStop);

        if (resizeStop.canceled) {
          var _style;

          style(_this.element, (_style = {}, _defineProperty(_style, flex ? 'flexBasis' : 'width', "".concat(originalSize.width, "px")), _defineProperty(_style, "height", "".concat(originalSize.height, "px")), _defineProperty(_style, "top", "".concat(originalPosition.top, "px")), _defineProperty(_style, "left", "".concat(originalPosition.left, "px")), _style));

          _this.clear();

          _this.updateResizableElements();
        } else {
          _this.clear();
        }
      });

      return _this;
    }

    _createClass(Resizable, [{
      key: "cancel",
      value: function cancel() {
        if (this.resizing) {
          this.onDragCancel(createMouseStopEvent(this.helper));
        } else {
          this.clear();
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.resizing) {
          this.pendingDestroy = true;
          return;
        }

        this.plugins.forEach(function (plugin) {
          return plugin.detach();
        });
        this.sensors.forEach(function (sensor) {
          return sensor.detach();
        });
        document.removeEventListener('mouse:start', this.onDragStart);
        document.removeEventListener('mouse:move', this.onDragMove);
        document.removeEventListener('mouse:stop', this.onDragStop);
        removeClass(this.element, this.elementClass);

        if (this.wrapped) {
          this.destroyWrapper();
        } else {
          delete this.element[this.dataProperty];
        }

        if (this.originalElement && this.originalResize) {
          style(this.originalElement, {
            resize: this.originalResize
          });
        }

        this.destroyHandles();
        this.listeners.forEach(function (listener) {
          return listener();
        });
        this.trigger(new ResizableDestroyEvent({
          sortable: this
        }));
      }
    }, {
      key: "dataProperty",
      get: function get() {
        return resizableProp;
      }
    }, {
      key: "elementClass",
      get: function get() {
        return resizableEl;
      }
    }, {
      key: "wrapperClass",
      get: function get() {
        return resizableWrapper;
      }
    }, {
      key: "autoHideClass",
      get: function get() {
        return resizableAutoHide;
      }
    }, {
      key: "handleClass",
      get: function get() {
        return resizableHandle;
      }
    }, {
      key: "handleDirectionProperty",
      get: function get() {
        return resizableHandleProp;
      }
    }, {
      key: "helperClass",
      get: function get() {
        return resizableHelper;
      }
    }, {
      key: "resizingClass",
      get: function get() {
        return resizableResizing;
      }
    }, {
      key: "ghostClass",
      get: function get() {
        return resizableGhost;
      }
    }, {
      key: "createWrapper",
      value: function createWrapper() {
        var wrapper = createElement('div', null, this.element.parentNode);
        addClass(wrapper, this.wrapperClass);
        style(wrapper, {
          position: style(this.element, 'position'),
          width: getWidth(this.element),
          height: height(this.element),
          top: style(this.element, 'top'),
          left: style(this.element, 'left'),
          marginTop: style(this.originalElement, 'marginTop'),
          marginRight: style(this.originalElement, 'marginRight'),
          marginBottom: style(this.originalElement, 'marginBottom'),
          marginLeft: style(this.originalElement, 'marginLeft')
        });
        wrapper[this.dataProperty] = this;
        style(this.originalElement, {
          display: 'block',
          position: 'static',
          zoom: 1
        });
        this.originalResize = style(this.originalElement, 'resize');
        style(this.originalElement, {
          resize: 'none'
        });
        this.resizableElements.push(this.originalElement);
        this.updateResizableElements();
        this.wrapped = true;
      }
    }, {
      key: "destroyWrapper",
      value: function destroyWrapper() {
        var _style2;

        var wrapper = this.element;
        var flex = this.options.flex;
        style(this.originalElement, (_style2 = {
          position: style(wrapper, 'position')
        }, _defineProperty(_style2, flex ? 'flexBasis' : 'width', getWidth(wrapper)), _defineProperty(_style2, "height", height(wrapper)), _defineProperty(_style2, "top", style(wrapper, 'top')), _defineProperty(_style2, "left", style(wrapper, 'left')), _style2));
        insertAfter(this.originalElement, wrapper);
        remove(wrapper);
        delete wrapper[this.dataProperty];
      }
    }, {
      key: "createHandles",
      value: function createHandles() {
        var _this2 = this;

        var handles = this.options.handles;
        var _this$options2 = this.options,
            autoHide = _this$options2.autoHide,
            zIndex = _this$options2.zIndex;

        if (!handles || !isString_1(handles)) {
          handles = 'e,s,se';
        } else if (handles === 'all') {
          handles = resizableDirections.join(',');
        }

        this.handleDirections = handles.split(',').map(function (h) {
          return h.trim();
        });
        this.handleDirections.forEach(function (dir) {
          if (resizableDirections.indexOf(dir) !== -1) {
            var handleEl = createElement('div', null, _this2.element);
            addClass(handleEl, _this2.handleClass);
            addClass(handleEl, "".concat(_this2.elementClass, "-").concat(dir));

            if (!Resizable.injectedStyles[dir]) {
              injectStyles("".concat(_this2.elementClass, "-").concat(dir), _objectSpread2(_objectSpread2({}, resizableDirectionStyles[dir]), {
                display: 'block',
                position: 'absolute'
              }));
              Resizable.injectedStyles = true;
            }

            disableSelection(handleEl);
            style(handleEl, {
              zIndex: zIndex + (dir.length === 2 ? 1 : 0)
            });

            _this2.listeners.push(listen(handleEl, 'mouseover', function (e) {
              if (!_this2.pressing) {
                _this2.currentHandle = e.target;
                _this2.currentDirection = e.target[_this2.handleDirectionProperty];
              }
            }));

            handleEl[_this2.handleDirectionProperty] = dir;

            if (autoHide) {
              hide(handleEl);
            }

            if (_this2.wrapped && isInput(_this2.originalElement)) {
              var paddingValue = /sw|ne|nw|se|n|s/.test(dir) ? height(handleEl) : getWidth(handleEl);
              var paddingDirection = /ne|nw|n/.test(dir) ? 'Top' : /se|sw|s/.test(dir) ? 'Bottom' : /^e$/.test(dir) ? 'Right' : 'Left';
              style(handleEl, _defineProperty({}, "padding".concat(paddingDirection), paddingValue));

              _this2.updateResizableElements();
            }

            _this2.handleElements.push(handleEl);
          }
        });
      }
    }, {
      key: "findHandles",
      value: function findHandles() {
        return this.handleElements;
      }
    }, {
      key: "destroyHandles",
      value: function destroyHandles() {
        var _this3 = this;

        this.handleElements.forEach(function (handle) {
          delete handle[_this3.handleDirectionProperty];
          remove(handle);
        });
      }
    }, {
      key: "createHelper",
      value: function createHelper() {
        var helper;
        var _this$options3 = this.options,
            animate = _this$options3.animate,
            flex = _this$options3.flex,
            ghost = _this$options3.ghost,
            zIndex = _this$options3.zIndex;
        var elementOffset = offset(this.element);

        if (animate || ghost) {
          var _style4;

          helper = createElement('div', null, document.body);
          addClass(helper, this.helperClass);
          style(helper, (_style4 = {}, _defineProperty(_style4, flex ? 'flexBasis' : 'width', "".concat(getWidth(this.element), "px")), _defineProperty(_style4, "height", "".concat(height(this.element), "px")), _defineProperty(_style4, "position", 'absolute'), _defineProperty(_style4, "left", "".concat(elementOffset.left, "px")), _defineProperty(_style4, "top", "".concat(elementOffset.top, "px")), _defineProperty(_style4, "zIndex", (zIndex || 1) + 1), _style4));
          disableSelection(helper);
        } else {
          helper = this.element;
        }

        return helper;
      }
    }, {
      key: "initializeResize",
      value: function initializeResize() {
        var position = {
          top: styleAsNumber(this.helper, 'top'),
          left: styleAsNumber(this.helper, 'left')
        };
        this.originalAttrs = {
          size: {
            width: getWidth(this.element),
            height: height(this.element)
          },
          position: _objectSpread2({}, position)
        };
        this.currentAttrs = {
          size: _objectSpread2({}, this.originalAttrs.size),
          position: _objectSpread2({}, position)
        };
      }
    }, {
      key: "calculateResize",
      value: function calculateResize(event) {
        var pageX = event.pageX,
            pageY = event.pageY;
        var aspectRatio = this.aspectRatio,
            currentDirection = this.currentDirection;
        var click = this.offset.click;
        var _this$currentAttrs2 = this.currentAttrs,
            currentSize = _this$currentAttrs2.size,
            currentPosition = _this$currentAttrs2.position;
        var delta = {
          y: pageY - click.top,
          x: pageX - click.left
        };
        var styleProps = resizeTransforms[this.currentDirection](this.originalAttrs, delta);

        if (aspectRatio) {
          if (_isFinite(styleProps.width)) {
            styleProps.height = styleProps.width / aspectRatio;
          } else if (_isFinite(styleProps.height)) {
            styleProps.width = styleProps.height * aspectRatio;
          }

          if (currentDirection === 'sw') {
            styleProps.left = currentPosition.left + (currentSize.width - styleProps.width);
            styleProps.top = null;
          }

          if (currentDirection === 'nw') {
            styleProps.top = currentPosition.top + (currentSize.height - styleProps.height);
            styleProps.left = currentPosition.left + (currentSize.width - styleProps.width);
          }
        }

        styleProps = this.applyBoundaries(styleProps);
        this.offset.helper = offset(this.helper);

        if (_isFinite(styleProps.width)) {
          this.currentAttrs.size.width = styleProps.width;
        }

        if (_isFinite(styleProps.height)) {
          this.currentAttrs.size.height = styleProps.height;
        }

        if (_isFinite(styleProps.top)) {
          this.currentAttrs.position.top = styleProps.top;
        }

        if (_isFinite(styleProps.left)) {
          this.currentAttrs.position.left = styleProps.left;
        }
      }
    }, {
      key: "applyBoundaries",
      value: function applyBoundaries(styleProps) {
        var boundaries = {
          minWidth: _isFinite(this.options.minWidth) ? Math.max(this.options.minWidth, 0) : 0,
          maxWidth: _isFinite(this.options.maxWidth) ? this.options.maxWidth : Infinity,
          minHeight: _isFinite(this.options.minHeight) ? Math.max(this.options.minHeight, 0) : 0,
          maxHeight: _isFinite(this.options.maxHeight) ? this.options.maxHeight : Infinity
        };
        var _this$originalAttrs2 = this.originalAttrs,
            originalSize = _this$originalAttrs2.size,
            originalPosition = _this$originalAttrs2.position;
        var isWest = /sw|nw|w/.test(this.currentDirection);
        var isNorth = /nw|ne|n/.test(this.currentDirection);

        if (_isFinite(styleProps.width) && boundaries.minWidth > styleProps.width) {
          styleProps.width = boundaries.minWidth;

          if (isWest) {
            styleProps.left = originalPosition.left + originalSize.width - boundaries.minWidth;
          }
        }

        if (_isFinite(styleProps.width) && boundaries.maxWidth < styleProps.width) {
          styleProps.width = boundaries.maxWidth;

          if (isWest) {
            styleProps.left = originalPosition.left + originalSize.width - boundaries.maxWidth;
          }
        }

        if (_isFinite(styleProps.height) && boundaries.minHeight > styleProps.height) {
          styleProps.height = boundaries.minHeight;

          if (isNorth) {
            styleProps.top = originalPosition.top + originalSize.height - boundaries.minHeight;
          }
        }

        if (_isFinite(styleProps.height) && boundaries.maxHeight < styleProps.height) {
          styleProps.height = boundaries.maxHeight;

          if (isNorth) {
            styleProps.top = originalPosition.top + originalSize.height - boundaries.maxHeight;
          }
        }

        return styleProps;
      }
    }, {
      key: "applyResize",
      value: function applyResize() {
        var styleProps = {};
        var flex = this.options.flex;
        var _this$currentAttrs3 = this.currentAttrs,
            size = _this$currentAttrs3.size,
            position = _this$currentAttrs3.position;
        var _this$previousAttrs = this.previousAttrs,
            prevSize = _this$previousAttrs.size,
            prevPosition = _this$previousAttrs.position;

        if (size.width !== prevSize.width) {
          styleProps[flex ? 'flexBasis' : 'width'] = "".concat(size.width, "px");
        }

        if (size.height !== prevSize.height) {
          styleProps.height = "".concat(size.height, "px");
        }

        if (position.top !== prevPosition.top) {
          styleProps.top = "".concat(position.top, "px");
        }

        if (position.left !== prevPosition.left) {
          styleProps.left = "".concat(position.left, "px");
        }

        style(this.helper, styleProps);
        return styleProps;
      }
    }, {
      key: "updateResizableElements",
      value: function updateResizableElements() {
        var dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!this.resizableElements.length) {
          return;
        }

        var flex = this.options.flex;
        var finalDimensions = dimensions && dimensions.width && dimensions.height ? dimensions : {
          width: getWidth(this.helper || this.element),
          height: height(this.helper || this.element)
        };
        this.resizableElements.forEach(function (el) {
          var _style5;

          var innerDimensions = getPaddingAndBorder(el);
          style(el, (_style5 = {}, _defineProperty(_style5, flex ? 'flexBasis' : 'width', "".concat(finalDimensions.width - innerDimensions.width, "px")), _defineProperty(_style5, "height", "".concat(finalDimensions.height - innerDimensions.height, "px")), _style5));
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        this.resizing = false;
        this.originalAttrs = {};
        this.currentAttrs = {};
        this.previousAttrs = {};
        this.offset = {
          click: null,
          helper: null
        };
        this.aspectRatio = null;

        if (this.helper && this.helper !== this.element) {
          this.helper.parentNode.removeChild(this.helper);
          this.helper = null;
        }

        style(document.body, {
          cursor: 'auto'
        });
        removeClass(this.element, this.resizingClass);

        if (this.pendingDestroy) {
          this.destroy();
          this.pendingDestroy = false;
        }
      }
    }]);

    return Resizable;
  }(Draggable);

  _defineProperty(Resizable, "defaultOptions", {
    alsoResize: null,
    animate: false,
    animateDuration: 500,
    aspectRatio: false,
    autoHide: false,
    containment: null,
    disabled: false,
    distance: 0,
    flex: false,
    ghost: false,
    grid: null,
    handles: 'e,s,se',
    maxHeight: null,
    maxWidth: null,
    minHeight: null,
    minWidth: null,
    zIndex: 1
  });

  _defineProperty(Resizable, "injectedStyles", {});

  var index = {
    Plugin: Plugin,
    Sensor: Sensor,
    Draggable: Draggable,
    Droppable: Droppable,
    DragDropManager: DragDropManager$1,
    Sortable: Sortable,
    Resizable: Resizable
  };

  exports.DragDropManager = DragDropManager$1;
  exports.Draggable = Draggable;
  exports.Droppable = Droppable;
  exports.Plugin = Plugin;
  exports.Resizable = Resizable;
  exports.Sensor = Sensor;
  exports.Sortable = Sortable;
  exports['default'] = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=agnostic-draggable.js.map
