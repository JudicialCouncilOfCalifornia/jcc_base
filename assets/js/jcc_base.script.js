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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/mega-menu.js":
/*!****************************************!*\
  !*** ./src/js/components/mega-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  "use strict";

  Drupal.behaviors.megaMenu = {
    attach: function attach(context) {
      var mainLinks = $('#slick-menu li > a');
      mainLinks.once('megaMenuToggle').click(function (e) {
        if ($(this).hasClass('has-children')) {
          e.preventDefault();
          var megaId = $(this).attr('data-mega-menu-id');
          var subMenuTarget = $('#mega-menu #' + megaId + ' ul');
          mainLinks.removeClass('mega-menu-open');

          if (subMenuTarget.hasClass('display-none')) {
            $('#mega-menu ul').addClass('display-none');
            $(subMenuTarget).removeClass('display-none');
            $(this).addClass('mega-menu-open');
          } else {
            $('#mega-menu ul').addClass('display-none');
            $(this).removeClass('mega-menu-open');
          }
        }
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/js/components/messages.js":
/*!***************************************!*\
  !*** ./src/js/components/messages.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  Drupal.theme.message = function (_ref, _ref2) {
    var text = _ref.text;
    var type = _ref2.type,
        id = _ref2.id;
    var types = {
      error: {
        "class": 'error',
        label: Drupal.t('Error message'),
        role: 'alert'
      },
      info: {
        "class": 'info',
        label: Drupal.t('Informational message'),
        role: 'status'
      },
      status: {
        "class": 'success',
        label: Drupal.t('Success message'),
        role: 'status'
      },
      warning: {
        "class": 'warning',
        label: Drupal.t('Warning message'),
        role: 'alert'
      }
    };
    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', "usa-alert usa-alert--".concat(types[type]["class"]));
    messageWrapper.setAttribute('role', types[type].role);
    messageWrapper.setAttribute('aria-label', types[type].label);
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    messageWrapper.innerHTML = "\n      <div class=\"usa-alert__body\">\n        <p class=\"usa-alert__text\">\n          ".concat(text, "\n        </p>\n      </div>");
    return messageWrapper;
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/js/jcc_base.script.js":
/*!***********************************!*\
  !*** ./src/js/jcc_base.script.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/messages */ "./src/js/components/messages.js");
/* harmony import */ var _components_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_messages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mega_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mega-menu */ "./src/js/components/mega-menu.js");
/* harmony import */ var _components_mega_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_mega_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smooth_scroll_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smooth-scroll-links */ "./src/js/smooth-scroll-links.js");
/* harmony import */ var _smooth_scroll_links__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smooth_scroll_links__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/smooth-scroll-links.js":
/*!***************************************!*\
  !*** ./src/js/smooth-scroll-links.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.smoothScrollLinks = {
    attach: function attach(context) {
      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 100
            }, 1000);
            return false;
          }
        }
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/sass/jcc_base.style.scss":
/*!**************************************!*\
  !*** ./src/sass/jcc_base.style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi ./src/js/jcc_base.script.js ./src/sass/jcc_base.style.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /app/web/themes/contrib/jcc_base/src/js/jcc_base.script.js */"./src/js/jcc_base.script.js");
module.exports = __webpack_require__(/*! /app/web/themes/contrib/jcc_base/src/sass/jcc_base.style.scss */"./src/sass/jcc_base.style.scss");


/***/ })

/******/ });