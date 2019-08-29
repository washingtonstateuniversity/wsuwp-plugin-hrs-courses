/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/blocks/course-datetime/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/course-datetime/block.json ***!
  \***********************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrscourses/course-datetime\",\"category\":\"common\",\"attributes\":{\"blockValue\":{\"type\":\"string\",\"source\":\"meta\",\"meta\":\"_wsuwp_hrs_courses_datetime\"}}}");

/***/ }),

/***/ "./src/blocks/course-datetime/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/course-datetime/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourseDateEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;
function CourseDateEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  var blockValue = attributes.blockValue,
      placeholder = attributes.placeholder;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'components-base-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "components-base-control__label"
  }, __('Course date'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    label: __('Course date and time'),
    placeholder: placeholder || __('Add date and / or time…'),
    keepPlaceholderOnFocus: true,
    value: blockValue,
    onChange: function onChange(value) {
      return setAttributes({
        blockValue: value
      });
    },
    formattingControls: []
  }));
}

/***/ }),

/***/ "./src/blocks/course-datetime/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/course-datetime/index.js ***!
  \*********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/course-datetime/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/course-datetime/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/course-datetime/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/course-datetime/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Course Date and Time'),
  category: category,
  description: __('The date and/or time of the course.'),
  icon: 'calendar-alt',
  keywords: [__('courses')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/course-datetime/save.js":
/*!********************************************!*\
  !*** ./src/blocks/course-datetime/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/*
 * No data is saved to the block. Data is saved to post meta via attributes.
 *
 * Because this is similar to a dynamic block it doesn’t need to override the
 * default save implementation on the client. Instead, it needs a server
 * component. The contents in the front of your site depend on the function
 * called by the `render_callback` property of `register_block_type`.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/blocks/course-location/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/course-location/block.json ***!
  \***********************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrscourses/course-location\",\"category\":\"common\",\"attributes\":{\"blockValue\":{\"type\":\"string\",\"source\":\"meta\",\"meta\":\"_wsuwp_hrs_courses_location\"}}}");

/***/ }),

/***/ "./src/blocks/course-location/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/course-location/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourseLocationEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;
function CourseLocationEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  var blockValue = attributes.blockValue,
      placeholder = attributes.placeholder;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'components-base-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "components-base-control__label"
  }, __('Course location'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    label: __('Course location'),
    placeholder: placeholder || __('Add location…', 'wsuwp-hrs-courses'),
    keepPlaceholderOnFocus: true,
    value: blockValue,
    onChange: function onChange(value) {
      return setAttributes({
        blockValue: value
      });
    },
    formattingControls: ['bold', 'italic']
  }));
}

/***/ }),

/***/ "./src/blocks/course-location/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/course-location/index.js ***!
  \*********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/course-location/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/course-location/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/course-location/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/course-location/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Course Location'),
  category: category,
  description: __('The meeting location of the course.'),
  icon: 'location-alt',
  keywords: [__('location')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/course-location/save.js":
/*!********************************************!*\
  !*** ./src/blocks/course-location/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/*
 * No data is saved to the block. Data is saved to post meta via attributes.
 *
 * Because this is similar to a dynamic block it doesn’t need to override the
 * default save implementation on the client. Instead, it needs a server
 * component. The contents in the front of your site depend on the function
 * called by the `render_callback` property of `register_block_type`.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/blocks/course-online/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/course-online/block.json ***!
  \*********************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrscourses/course-online\",\"category\":\"common\",\"attributes\":{\"onlineLearningUrl\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"href\"},\"onlineLearningLink\":{\"type\":\"string\",\"default\":\"Online Learning\"}}}");

/***/ }),

/***/ "./src/blocks/course-online/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/course-online/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourseLocationEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    URLInput = _wp$blockEditor.URLInput;
function CourseLocationEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  var onlineLearningUrl = attributes.onlineLearningUrl,
      onlineLearningLink = attributes.onlineLearningLink;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Online Course Settings', 'wsuwp-hrs-courses')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Online Course Link Text', 'wsuwp-hrs-courses'),
    help: __('Enter link text here to override the default online course URL link text.', 'wsuwp-hrs-courses'),
    value: onlineLearningLink,
    onChange: function onChange(value) {
      return setAttributes({
        onlineLearningLink: value
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'components-base-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "components-base-control__label"
  }, __('Online course URL'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    autoFocus: false // eslint-disable-line jsx-a11y/no-autofocus
    ,
    value: onlineLearningUrl,
    onChange: function onChange(value) {
      return setAttributes({
        onlineLearningUrl: value
      });
    }
  })));
}

/***/ }),

/***/ "./src/blocks/course-online/icon.js":
/*!******************************************!*\
  !*** ./src/blocks/course-online/icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M3 3h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm13 2H4v8h12V5zm-3 1H5v4zm6 11v-1H1v1c0 .6.5 1 1.1 1h15.8c.6 0 1.1-.4 1.1-1z"
})));

/***/ }),

/***/ "./src/blocks/course-online/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/course-online/index.js ***!
  \*******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/course-online/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/course-online/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/course-online/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/course-online/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/course-online/icon.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */





var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Course Online URL'),
  category: category,
  description: __('The URLs for an online course.'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  keywords: [__('link')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/course-online/save.js":
/*!******************************************!*\
  !*** ./src/blocks/course-online/save.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var RichText = wp.blockEditor.RichText;
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var onlineLearningUrl = attributes.onlineLearningUrl,
      onlineLearningLink = attributes.onlineLearningLink;

  if (!onlineLearningUrl) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    class: "svg-icon",
    viewBox: "0 0 20 20",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M3 3h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm13 2H4v8h12V5zm-3 1H5v4zm6 11v-1H1v1c0 .6.5 1 1.1 1h15.8c.6 0 1.1-.4 1.1-1z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "a",
    class: "course-recorded-video__link",
    href: onlineLearningUrl,
    value: onlineLearningLink
  }));
}

/***/ }),

/***/ "./src/blocks/course-presenter/block.json":
/*!************************************************!*\
  !*** ./src/blocks/course-presenter/block.json ***!
  \************************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrscourses/course-presenter\",\"category\":\"common\",\"attributes\":{\"blockValue\":{\"type\":\"string\",\"source\":\"meta\",\"meta\":\"_wsuwp_hrs_courses_presenter\"}}}");

/***/ }),

/***/ "./src/blocks/course-presenter/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/course-presenter/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoursePresenterEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;
function CoursePresenterEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  var blockValue = attributes.blockValue,
      placeholder = attributes.placeholder;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'components-base-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "components-base-control__label"
  }, __('Course presenter(s)'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    label: __('Course date and time'),
    placeholder: placeholder || __('Add presenter(s)…'),
    keepPlaceholderOnFocus: true,
    value: blockValue,
    onChange: function onChange(value) {
      return setAttributes({
        blockValue: value
      });
    },
    formattingControls: ['bold']
  }));
}

/***/ }),

/***/ "./src/blocks/course-presenter/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/course-presenter/index.js ***!
  \**********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/course-presenter/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/course-presenter/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/course-presenter/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/course-presenter/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Course Presenter(s)'),
  category: category,
  description: __('The course presenter(s).'),
  icon: 'id',
  keywords: [__('courses'), __('people'), __('presenters')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/course-presenter/save.js":
/*!*********************************************!*\
  !*** ./src/blocks/course-presenter/save.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/*
 * No data is saved to the block. Data is saved to post meta via attributes.
 *
 * Because this is similar to a dynamic block it doesn’t need to override the
 * default save implementation on the client. Instead, it needs a server
 * component. The contents in the front of your site depend on the function
 * called by the `render_callback` property of `register_block_type`.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/blocks/course-video/block.json":
/*!********************************************!*\
  !*** ./src/blocks/course-video/block.json ***!
  \********************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrscourses/course-video\",\"category\":\"common\",\"attributes\":{\"recordedVideoUrl\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\"a\",\"attribute\":\"href\"},\"recordedVideoLink\":{\"type\":\"string\",\"default\":\"Video Recording\"}}}");

/***/ }),

/***/ "./src/blocks/course-video/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/course-video/edit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourseLocationEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    URLInput = _wp$blockEditor.URLInput;
function CourseLocationEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  var recordedVideoUrl = attributes.recordedVideoUrl,
      recordedVideoLink = attributes.recordedVideoLink;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Course Video Settings', 'wsuwp-hrs-courses')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Course Video Link Text', 'wsuwp-hrs-courses'),
    help: __('Enter link text here to override the default video URL link text.', 'wsuwp-hrs-courses'),
    value: recordedVideoLink,
    onChange: function onChange(value) {
      return setAttributes({
        recordedVideoLink: value
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'components-base-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "components-base-control__label"
  }, __('Course video URL', 'wsuwp-hrs-courses'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    autoFocus: false // eslint-disable-line jsx-a11y/no-autofocus
    ,
    value: recordedVideoUrl,
    onChange: function onChange(value) {
      return setAttributes({
        recordedVideoUrl: value
      });
    }
  })));
}

/***/ }),

/***/ "./src/blocks/course-video/icon.js":
/*!*****************************************!*\
  !*** ./src/blocks/course-video/icon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"
})));

/***/ }),

/***/ "./src/blocks/course-video/index.js":
/*!******************************************!*\
  !*** ./src/blocks/course-video/index.js ***!
  \******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/course-video/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/course-video/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/course-video/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/course-video/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/course-video/icon.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */





var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Course Video URL'),
  category: category,
  description: __('The URLs for a course video.'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  keywords: [__('media')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/course-video/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/course-video/save.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var RichText = wp.blockEditor.RichText;
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var recordedVideoUrl = attributes.recordedVideoUrl,
      recordedVideoLink = attributes.recordedVideoLink;

  if (!recordedVideoUrl) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    className: 'svg-icon',
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "a",
    className: 'course-recorded-video__link',
    href: recordedVideoUrl,
    value: recordedVideoLink
  }));
}

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! exports provided: registerCoursesBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCoursesBlocks", function() { return registerCoursesBlocks; });
/* harmony import */ var _course_datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-datetime */ "./src/blocks/course-datetime/index.js");
/* harmony import */ var _course_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-location */ "./src/blocks/course-location/index.js");
/* harmony import */ var _course_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-presenter */ "./src/blocks/course-presenter/index.js");
/* harmony import */ var _course_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-video */ "./src/blocks/course-video/index.js");
/* harmony import */ var _course_online__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-online */ "./src/blocks/course-online/index.js");
/* harmony import */ var _list_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-courses */ "./src/blocks/list-courses/index.js");
/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Internal dependencies
 */







/**
 * Function to register WSUWP HRS Courses blocks.
 *
 * @example
 * ```js
 * import { registerCoursesBlocks } from './blocks';
 *
 * registerCoursesBlocks();
 * ```
 */

var registerCoursesBlocks = function registerCoursesBlocks() {
  [_course_datetime__WEBPACK_IMPORTED_MODULE_0__, _course_location__WEBPACK_IMPORTED_MODULE_1__, _course_presenter__WEBPACK_IMPORTED_MODULE_2__, _course_video__WEBPACK_IMPORTED_MODULE_3__, _course_online__WEBPACK_IMPORTED_MODULE_4__, _list_courses__WEBPACK_IMPORTED_MODULE_5__].forEach(function (block) {
    if (!block) {
      return;
    }

    var settings = block.settings,
        name = block.name;
    registerBlockType(name, settings);
  });
};

/***/ }),

/***/ "./src/blocks/list-courses/block.json":
/*!********************************************!*\
  !*** ./src/blocks/list-courses/block.json ***!
  \********************************************/
/*! exports provided: name, category, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrscourses/list-courses\",\"category\":\"widgets\",\"supports\":{\"align\":true,\"html\":false}}");

/***/ }),

/***/ "./src/blocks/list-courses/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/list-courses/edit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var Component = wp.element.Component;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    Disabled = _wp$components.Disabled,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    QueryControls = _wp$components.QueryControls,
    RangeControl = _wp$components.RangeControl,
    Spinner = _wp$components.Spinner,
    ToggleControl = _wp$components.ToggleControl,
    Toolbar = _wp$components.Toolbar,
    RadioControl = _wp$components.RadioControl,
    ServerSideRender = _wp$components.ServerSideRender;
/**
 * Module constants
 */

var LEARNING_PROGRAMS_LIST_QUERY = {
  per_page: -1
};
var MAX_POST_COLUMNS = 6;

var ListCoursesEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ListCoursesEdit, _Component);

  function ListCoursesEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ListCoursesEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ListCoursesEdit).apply(this, arguments));
    _this.state = {
      taxLearningProgramsList: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ListCoursesEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isStillMounted = true;
      this.fetchRequest = apiFetch({
        path: addQueryArgs("/wp/v2/learning_program", LEARNING_PROGRAMS_LIST_QUERY)
      }).then(function (taxLearningProgramsList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            taxLearningProgramsList: taxLearningProgramsList
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            taxLearningProgramsList: []
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          ListCourses = _this$props.ListCourses;
      var taxLearningProgramsList = this.state.taxLearningProgramsList;
      var displayCourseContentRadio = attributes.displayCourseContentRadio,
          displayCourseContent = attributes.displayCourseContent,
          displayPostDate = attributes.displayPostDate,
          postLayout = attributes.postLayout,
          columns = attributes.columns,
          order = attributes.order,
          orderBy = attributes.orderBy,
          learningPrograms = attributes.learningPrograms,
          coursesToShow = attributes.coursesToShow,
          excerptLength = attributes.excerptLength;
      var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Course Content Settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Display course content'),
        checked: displayCourseContent,
        onChange: function onChange(value) {
          return setAttributes({
            displayCourseContent: value
          });
        }
      }), displayCourseContent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RadioControl, {
        label: "Show:",
        selected: displayCourseContentRadio,
        options: [{
          label: 'Excerpt',
          value: 'excerpt'
        }, {
          label: 'Full post',
          value: 'full_post'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            displayCourseContentRadio: value
          });
        }
      }), displayCourseContent && displayCourseContentRadio === 'excerpt' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        label: __('Max number of words in excerpt'),
        value: excerptLength,
        onChange: function onChange(value) {
          return setAttributes({
            excerptLength: value
          });
        },
        min: 10,
        max: 100
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Post Meta Settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Display post date'),
        checked: displayPostDate,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostDate: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Sorting and Filtering')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(QueryControls, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        order: order,
        orderBy: orderBy
      }, {
        numberOfItems: coursesToShow,
        categoriesList: taxLearningProgramsList,
        selectedCategoryId: learningPrograms,
        onCategoryChange: function onCategoryChange(value) {
          return setAttributes({
            learningPrograms: '' !== value ? value : undefined
          });
        },
        onOrderChange: function onOrderChange(value) {
          return setAttributes({
            order: value
          });
        },
        onOrderByChange: function onOrderByChange(value) {
          return setAttributes({
            orderBy: value
          });
        },
        onNumberOfItemsChange: function onNumberOfItemsChange(value) {
          return setAttributes({
            coursesToShow: value
          });
        }
      })), postLayout === 'grid' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        label: __('Columns'),
        value: columns,
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        },
        min: 2,
        max: !hasPosts ? MAX_POST_COLUMNS : Math.min(MAX_POST_COLUMNS, ListCourses.length),
        required: true
      })));
      var hasPosts = Array.isArray(ListCourses) && ListCourses.length;

      if (!hasPosts) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Placeholder, {
          icon: "admin-post",
          label: __('List Courses')
        }, !Array.isArray(ListCourses) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Spinner, null) : __('No courses found.')));
      }

      var layoutControls = [{
        icon: 'list-view',
        title: __('List View'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'list'
          });
        },
        isActive: postLayout === 'list'
      }, {
        icon: 'grid-view',
        title: __('Grid View'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'grid'
          });
        },
        isActive: postLayout === 'grid'
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Toolbar, {
        controls: layoutControls
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Disabled, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ServerSideRender, {
        block: "hrscourses/list-courses",
        attributes: attributes
      })));
    }
  }]);

  return ListCoursesEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      coursesToShow = _props$attributes.coursesToShow,
      order = _props$attributes.order,
      orderBy = _props$attributes.orderBy,
      learningPrograms = _props$attributes.learningPrograms;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords;

  var ListCoursesQuery = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["pickBy"])({
    learningPrograms: learningPrograms,
    order: order,
    orderby: orderBy,
    per_page: coursesToShow
  }, function (value) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(value);
  });
  return {
    ListCourses: getEntityRecords('postType', 'wsuwp_hrs_courses', ListCoursesQuery)
  };
})(ListCoursesEdit));

/***/ }),

/***/ "./src/blocks/list-courses/icon.js":
/*!*****************************************!*\
  !*** ./src/blocks/list-courses/icon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    Rect = _wp$components.Rect,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Rect, {
  x: "11",
  y: "7",
  width: "6",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Rect, {
  x: "11",
  y: "11",
  width: "6",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Rect, {
  x: "11",
  y: "15",
  width: "6",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Rect, {
  x: "7",
  y: "7",
  width: "2",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Rect, {
  x: "7",
  y: "11",
  width: "2",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Rect, {
  x: "7",
  y: "15",
  width: "2",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M20.1,3H3.9C3.4,3,3,3.4,3,3.9v16.2C3,20.5,3.4,21,3.9,21h16.2c0.4,0,0.9-0.5,0.9-0.9V3.9C21,3.4,20.5,3,20.1,3z M19,19H5V5h14V19z"
})));

/***/ }),

/***/ "./src/blocks/list-courses/index.js":
/*!******************************************!*\
  !*** ./src/blocks/list-courses/index.js ***!
  \******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/list-courses/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/list-courses/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/list-courses/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/list-courses/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/list-courses/save.js");
/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    _x = _wp$i18n._x;
/**
 * Internal dependencies
 */





var name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_2__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_2__.supports;

var settings = {
  title: __('List Courses'),
  category: category,
  description: __('Display a list of the most recent courses.'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  keywords: [__('recent posts')],
  supports: supports,
  styles: [{
    name: 'default',
    label: _x('Default', 'block style'),
    isDefault: true
  }, {
    name: 'bulleted',
    label: _x('Bullets', 'block style')
  }],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/blocks/list-courses/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/list-courses/save.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/*
 * No data is saved to the block. Data is saved to post meta via attributes.
 *
 * Because this is similar to a dynamic block it doesn’t need to override the
 * default save implementation on the client. Instead, it needs a server
 * component. The contents in the front of your site depend on the function
 * called by the `render_callback` property of `register_block_type`.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/**
 * Internal dependencies
 */

Object(_blocks__WEBPACK_IMPORTED_MODULE_0__["registerCoursesBlocks"])();

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map