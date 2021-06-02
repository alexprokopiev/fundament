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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/accordion.js":
/*!*************************!*\
  !*** ./js/accordion.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar accordion = function accordion(triggersSelector) {\n  var btns = document.querySelectorAll(triggersSelector);\n  btns.forEach(function (btn) {\n    btn.addEventListener(\"click\", function () {\n      this.classList.toggle(\"faq__item-title_active\");\n      this.nextElementSibling.classList.toggle(\"faq__item-text_active\");\n\n      if (this.classList.contains(\"faq__item-title_active\")) {\n        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + \"px\";\n      } else {\n        this.nextElementSibling.style.maxHeight = \"0px\";\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (accordion);\n\n//# sourceURL=webpack:///./js/accordion.js?");

/***/ }),

/***/ "./js/check.js":
/*!*********************!*\
  !*** ./js/check.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar check = function check() {\n  var inputs = document.querySelectorAll(\".calc__form-img\"),\n      checks = document.querySelectorAll(\".calc__form-check\");\n  inputs.forEach(function (input, i) {\n    input.addEventListener(\"click\", function () {\n      checks.forEach(function (check) {\n        check.style.display = \"none\";\n      });\n      checks[i].style.display = \"flex\";\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (check);\n\n//# sourceURL=webpack:///./js/check.js?");

/***/ }),

/***/ "./js/mask.js":
/*!********************!*\
  !*** ./js/mask.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar mask = function mask(selector) {\n  var setCursorPosition = function setCursorPosition(pos, elem) {\n    elem.focus();\n\n    if (elem.setSelectionRange) {\n      elem.setSelectionRange(pos, pos);\n    } else if (elem.createTextRange) {\n      var range = elem.createTextRange();\n      range.collapse(true);\n      range.moveEnd(\"character\", pos);\n      range.moveStart(\"character\", pos);\n      range.select();\n    }\n  };\n\n  function createMask(event) {\n    var matrix = \"+_ (___) ___ __ __\",\n        i = 0,\n        def = matrix.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n\n    if (def.length >= val.length) {\n      val = def;\n    }\n\n    this.value = matrix.replace(/./g, function (a) {\n      return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a;\n    });\n\n    if (event.type === \"blur\") {\n      if (this.value.length == 2) {\n        this.value = \"\";\n      }\n    } else {\n      setCursorPosition(this.value.length, this);\n    }\n  }\n\n  var inputs = document.querySelectorAll(selector);\n  inputs.forEach(function (input) {\n    input.addEventListener(\"input\", createMask);\n    input.addEventListener(\"focus\", createMask);\n    input.addEventListener(\"blur\", createMask);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mask);\n\n//# sourceURL=webpack:///./js/mask.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modal = function modal() {\n  function bindModal(modalSelector, closeSelector) {\n    var triggerSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var trigger = document.querySelectorAll(triggerSelector),\n        modal = document.querySelector(modalSelector),\n        close = document.querySelector(closeSelector),\n        scroll = calcScroll();\n\n    if (triggerSelector != false) {\n      trigger.forEach(function (item) {\n        item.addEventListener(\"click\", function (e) {\n          if (e.target) {\n            e.preventDefault();\n          }\n\n          modal.style.display = \"block\";\n          document.body.style.overflow = \"hidden\";\n          document.body.style.marginRight = \"\".concat(scroll, \"px\");\n        });\n      });\n    }\n\n    close.addEventListener(\"click\", function () {\n      modal.style.display = \"none\";\n      document.body.style.overflow = \"\";\n      document.body.style.marginRight = \"0px\";\n    });\n    modal.addEventListener(\"click\", function (e) {\n      if (e.target === modal) {\n        modal.style.display = \"none\";\n        document.body.style.overflow = \"\";\n        document.body.style.marginRight = \"0px\";\n      }\n    });\n  }\n\n  function calcScroll() {\n    var div = document.createElement(\"div\");\n    div.style.width = \"50px\";\n    div.style.height = \"50px\";\n    div.style.overflowY = \"scroll\";\n    div.style.visibility = \"hidden\";\n    document.body.appendChild(div);\n    var scrollWidth = div.offsetWidth - div.clientWidth;\n    div.remove();\n    return scrollWidth;\n  }\n\n  bindModal(\"#modal-call\", \"#modal-call-close\", \".show-modal-call\");\n  bindModal(\"#modal-confidence\", \"#modal-confidence-close\", \"#show-confidence\");\n  bindModal(\"#modal-thanks\", \"#modal-thanks-close\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/sendmail.js":
/*!************************!*\
  !*** ./js/sendmail.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sendmail = function sendmail() {\n  var form = document.querySelectorAll(\"form\"),\n      modals = document.querySelectorAll(\".overlay\"),\n      input = document.querySelectorAll(\"input:not([type=hidden])\"),\n      thanks = document.querySelector(\"#modal-thanks\");\n  form.forEach(function (formItem) {\n    formItem.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      var formData = new FormData(formItem);\n\n      function postData(data) {\n        var request = new XMLHttpRequest();\n        request.open(\"POST\", \"sendmail.php\");\n        request.addEventListener(\"readystatechange\", function () {\n          if (request.readyState === 4 && request.status == 200) {\n            modals.forEach(function (modal) {\n              modal.style.display = \"none\";\n            });\n            thanks.style.display = \"block\";\n          }\n        });\n        request.send(data);\n      }\n\n      function clearInput() {\n        for (var x = 0; x < input.length; x++) {\n          input[x].value = \"\";\n        }\n      }\n\n      postData(formData);\n      clearInput();\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendmail);\n\n//# sourceURL=webpack:///./js/sendmail.js?");

/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tabs = function tabs() {\n  var tab = document.querySelectorAll(\".samples__tab\"),\n      menu = document.querySelector(\".samples__tab-wrap\"),\n      tabContent = document.querySelectorAll(\".samples__content\");\n\n  function hideTabContent() {\n    for (var i = 0; i < tab.length; i++) {\n      tab[i].classList.remove(\"samples__tab_active\");\n    }\n\n    for (var _i = 0; _i < tabContent.length; _i++) {\n      tabContent[_i].classList.remove(\"samples__content_active\");\n    }\n  }\n\n  function showTabContent(a) {\n    tab[a].classList.add(\"samples__tab_active\");\n    tabContent[a].classList.add(\"samples__content_active\");\n  }\n\n  menu.addEventListener(\"click\", function (event) {\n    var target = event.target.closest(\".samples__tab\");\n\n    if (target && target.classList.contains(\"samples__tab\")) {\n      for (var i = 0; i < tab.length; i++) {\n        if (target == tab[i]) {\n          hideTabContent();\n          showTabContent(i);\n        }\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack:///./js/tabs.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ \"./style.sass\");\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/accordion */ \"./js/accordion.js\");\n/* harmony import */ var _js_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/check */ \"./js/check.js\");\n/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/tabs */ \"./js/tabs.js\");\n/* harmony import */ var _js_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/mask */ \"./js/mask.js\");\n/* harmony import */ var _js_sendmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/sendmail */ \"./js/sendmail.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/modal */ \"./js/modal.js\");\n\n\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  \"use strict\";\n\n  Object(_js_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".faq__item-title\");\n  Object(_js_check__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_js_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_js_mask__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"input[name=phone]\");\n  Object(_js_sendmail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_js_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./style.sass":
/*!********************!*\
  !*** ./style.sass ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.sass?");

/***/ })

/******/ });