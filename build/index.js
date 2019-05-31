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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_js/blocks/coursedate/block.json":
/*!**********************************************!*\
  !*** ./src/_js/blocks/coursedate/block.json ***!
  \**********************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = {"name":"hrscourses/course-date-time","category":"common","attributes":{"blockValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_datetime"}}};

/***/ }),

/***/ "./src/_js/blocks/coursedate/edit.js":
/*!*******************************************!*\
  !*** ./src/_js/blocks/coursedate/edit.js ***!
  \*******************************************/
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

/***/ "./src/_js/blocks/coursedate/index.js":
/*!********************************************!*\
  !*** ./src/_js/blocks/coursedate/index.js ***!
  \********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/_js/blocks/coursedate/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/_js/blocks/coursedate/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/_js/blocks/coursedate/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/_js/blocks/coursedate/save.js");
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

/***/ "./src/_js/blocks/coursedate/save.js":
/*!*******************************************!*\
  !*** ./src/_js/blocks/coursedate/save.js ***!
  \*******************************************/
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

/***/ "./src/_js/blocks/courselocation/block.json":
/*!**************************************************!*\
  !*** ./src/_js/blocks/courselocation/block.json ***!
  \**************************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = {"name":"hrscourses/course-location","category":"common","attributes":{"blockValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_location"}}};

/***/ }),

/***/ "./src/_js/blocks/courselocation/edit.js":
/*!***********************************************!*\
  !*** ./src/_js/blocks/courselocation/edit.js ***!
  \***********************************************/
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

/***/ "./src/_js/blocks/courselocation/index.js":
/*!************************************************!*\
  !*** ./src/_js/blocks/courselocation/index.js ***!
  \************************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/_js/blocks/courselocation/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/_js/blocks/courselocation/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/_js/blocks/courselocation/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/_js/blocks/courselocation/save.js");
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

/***/ "./src/_js/blocks/courselocation/save.js":
/*!***********************************************!*\
  !*** ./src/_js/blocks/courselocation/save.js ***!
  \***********************************************/
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

/***/ "./src/_js/blocks/courseonline/block.json":
/*!************************************************!*\
  !*** ./src/_js/blocks/courseonline/block.json ***!
  \************************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = {"name":"hrscourses/course-online","category":"common","attributes":{"onlineLearningUrl":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"onlineLearningLink":{"type":"string","default":"Online Learning"}}};

/***/ }),

/***/ "./src/_js/blocks/courseonline/edit.js":
/*!*********************************************!*\
  !*** ./src/_js/blocks/courseonline/edit.js ***!
  \*********************************************/
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

/***/ "./src/_js/blocks/courseonline/index.js":
/*!**********************************************!*\
  !*** ./src/_js/blocks/courseonline/index.js ***!
  \**********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/_js/blocks/courseonline/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/_js/blocks/courseonline/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/_js/blocks/courseonline/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/_js/blocks/courseonline/save.js");
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
  icon: 'location-alt',
  keywords: [__('link')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/_js/blocks/courseonline/save.js":
/*!*********************************************!*\
  !*** ./src/_js/blocks/courseonline/save.js ***!
  \*********************************************/
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
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var onlineLearningUrl = attributes.onlineLearningUrl,
      onlineLearningLink = attributes.onlineLearningLink;

  if (!onlineLearningUrl) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "a",
    className: "".concat(className, " course-recorded-video__link"),
    href: onlineLearningUrl,
    value: onlineLearningLink
  });
}

/***/ }),

/***/ "./src/_js/blocks/coursepresenter/block.json":
/*!***************************************************!*\
  !*** ./src/_js/blocks/coursepresenter/block.json ***!
  \***************************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = {"name":"hrscourses/course-presenter","category":"common","attributes":{"blockValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_presenter"}}};

/***/ }),

/***/ "./src/_js/blocks/coursepresenter/edit.js":
/*!************************************************!*\
  !*** ./src/_js/blocks/coursepresenter/edit.js ***!
  \************************************************/
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

/***/ "./src/_js/blocks/coursepresenter/index.js":
/*!*************************************************!*\
  !*** ./src/_js/blocks/coursepresenter/index.js ***!
  \*************************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/_js/blocks/coursepresenter/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/_js/blocks/coursepresenter/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/_js/blocks/coursepresenter/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/_js/blocks/coursepresenter/save.js");
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

/***/ "./src/_js/blocks/coursepresenter/save.js":
/*!************************************************!*\
  !*** ./src/_js/blocks/coursepresenter/save.js ***!
  \************************************************/
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

/***/ "./src/_js/blocks/coursevideo/block.json":
/*!***********************************************!*\
  !*** ./src/_js/blocks/coursevideo/block.json ***!
  \***********************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = {"name":"hrscourses/course-video","category":"common","attributes":{"recordedVideoUrl":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"recordedVideoLink":{"type":"string","default":"Video Recording"}}};

/***/ }),

/***/ "./src/_js/blocks/coursevideo/edit.js":
/*!********************************************!*\
  !*** ./src/_js/blocks/coursevideo/edit.js ***!
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

/***/ "./src/_js/blocks/coursevideo/index.js":
/*!*********************************************!*\
  !*** ./src/_js/blocks/coursevideo/index.js ***!
  \*********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/_js/blocks/coursevideo/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/_js/blocks/coursevideo/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/_js/blocks/coursevideo/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/_js/blocks/coursevideo/save.js");
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
  icon: 'location-alt',
  keywords: [__('media')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/_js/blocks/coursevideo/save.js":
/*!********************************************!*\
  !*** ./src/_js/blocks/coursevideo/save.js ***!
  \********************************************/
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
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var recordedVideoUrl = attributes.recordedVideoUrl,
      recordedVideoLink = attributes.recordedVideoLink;

  if (!recordedVideoUrl) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "a",
    className: "".concat(className, " course-recorded-video__link"),
    href: recordedVideoUrl,
    value: recordedVideoLink
  });
}

/***/ }),

/***/ "./src/_js/blocks/index.js":
/*!*********************************!*\
  !*** ./src/_js/blocks/index.js ***!
  \*********************************/
/*! exports provided: registerCoursesBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCoursesBlocks", function() { return registerCoursesBlocks; });
/* harmony import */ var _coursedate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursedate */ "./src/_js/blocks/coursedate/index.js");
/* harmony import */ var _courselocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courselocation */ "./src/_js/blocks/courselocation/index.js");
/* harmony import */ var _coursepresenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coursepresenter */ "./src/_js/blocks/coursepresenter/index.js");
/* harmony import */ var _coursevideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coursevideo */ "./src/_js/blocks/coursevideo/index.js");
/* harmony import */ var _courseonline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courseonline */ "./src/_js/blocks/courseonline/index.js");
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
  [_coursedate__WEBPACK_IMPORTED_MODULE_0__, _courselocation__WEBPACK_IMPORTED_MODULE_1__, _coursepresenter__WEBPACK_IMPORTED_MODULE_2__, _coursevideo__WEBPACK_IMPORTED_MODULE_3__, _courseonline__WEBPACK_IMPORTED_MODULE_4__].forEach(function (block) {
    if (!block) {
      return;
    }

    var settings = block.settings,
        name = block.name;
    registerBlockType(name, settings);
  });
};

/***/ }),

/***/ "./src/_js/index.js":
/*!**************************!*\
  !*** ./src/_js/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/_js/blocks/index.js");
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map