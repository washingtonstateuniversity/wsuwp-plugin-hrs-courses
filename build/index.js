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
var TextControl = wp.components.TextControl;
function CourseDateEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  var blockValue = attributes.blockValue,
      placeholder = attributes.placeholder;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: __('Course date and time'),
    placeholder: placeholder || __('Add date and / or time…'),
    value: blockValue,
    onChange: function onChange(value) {
      return setAttributes({
        blockValue: value
      });
    }
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
function save() {
  // No data is saved to the block. Data is saved to post meta via attributes.
  return null;
}

/***/ }),

/***/ "./src/_js/blocks/courselocation/block.json":
/*!**************************************************!*\
  !*** ./src/_js/blocks/courselocation/block.json ***!
  \**************************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = {"name":"hrscourses/course-location","category":"common","attributes":{"blockValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_location"},"onlineValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_online"},"onlineValueToggle":{"type":"boolean","default":false,"source":"meta","meta":"_wsuwp_hrs_courses_is_online"}}};

/***/ }),

/***/ "./src/_js/blocks/courselocation/edit.js":
/*!***********************************************!*\
  !*** ./src/_js/blocks/courselocation/edit.js ***!
  \***********************************************/
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
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput;
function CourseDateEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected;
  var blockValue = attributes.blockValue,
      onlineValue = attributes.onlineValue,
      onlineValueToggle = attributes.onlineValueToggle,
      placeholder = attributes.placeholder;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Online Location Settings', 'wsuwp-hrs-courses')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Online Location Available', 'wsuwp-hrs-courses'),
    checked: onlineValueToggle,
    onChange: function onChange(checked) {
      return setAttributes({
        onlineValueToggle: checked
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
  })), onlineValueToggle && isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    className: "block-library-button__inline-link",
    onSubmit: function onSubmit(event) {
      return event.preventDefault();
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "media-video"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    value: onlineValue,
    onChange: function onChange(value) {
      return setAttributes({
        onlineValue: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
    icon: "editor-break",
    label: __('Apply course URL'),
    type: "submit"
  })));
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
function save() {
  // No data is saved to the block. Data is saved to post meta via attributes.
  return null;
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
  [_coursedate__WEBPACK_IMPORTED_MODULE_0__, _courselocation__WEBPACK_IMPORTED_MODULE_1__].forEach(function (block) {
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