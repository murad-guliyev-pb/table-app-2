module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gAcQ");


/***/ }),

/***/ "gAcQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (req, res) {
  setTimeout(() => {
    res.status(200).json([{
      id: "1",
      name: "Name One",
      surname: "Surname One",
      dateOfBirth: "01-01-1991",
      position: "Position One",
      phoneNumber: "+994511111"
    }, {
      id: "2",
      name: "Name Two",
      surname: "Surname Two",
      dateOfBirth: "02-02-1992",
      position: "Position Two",
      phoneNumber: "+994511112"
    }, {
      id: "3",
      name: "Name Three",
      surname: "Surname Three",
      dateOfBirth: "03-03-1993",
      position: "Position Three",
      phoneNumber: "+994511113"
    }, {
      id: "4",
      name: "Name Four",
      surname: "Surname Four",
      dateOfBirth: "04-04-1994",
      position: "Position Four",
      phoneNumber: "+994511114"
    }, {
      id: "5",
      name: "Name Five",
      surname: "Surname Five",
      dateOfBirth: "05-05-1995",
      position: "Position Five",
      phoneNumber: "+994511115"
    }, {
      id: "6",
      name: "Name Six",
      surname: "Surname Six",
      dateOfBirth: "06-06-1996",
      position: "Position Six",
      phoneNumber: "+994511116"
    }, {
      id: "7",
      name: "Name Seven",
      surname: "Surname Seven",
      dateOfBirth: "07-07-1997",
      position: "Position Seven",
      phoneNumber: "+994511117"
    }, {
      id: "8",
      name: "Name Eight",
      surname: "Surname Eight",
      dateOfBirth: "08-08-1998",
      position: "Position Eight",
      phoneNumber: "+994511118"
    }, {
      id: "9",
      name: "Name Nine",
      surname: "Surname Nine",
      dateOfBirth: "09-09-1999",
      position: "Position Eight",
      phoneNumber: "+994511119"
    }, {
      id: "10",
      name: "Name Ten",
      surname: "Surname Ten",
      dateOfBirth: "10-10-2000",
      position: "Position Ten",
      phoneNumber: "+994511120"
    }, {
      id: "11",
      name: "Name Eleven",
      surname: "Surname Eleven",
      dateOfBirth: "11-11-2001",
      position: "Position Eleven",
      phoneNumber: "+994511121"
    }, {
      id: "12",
      name: "Name Twelve",
      surname: "Surname Twelve",
      dateOfBirth: "12-12-2002",
      position: "Position Twelve",
      phoneNumber: "+994511122"
    }]);
  }, 700);
});

/***/ })

/******/ });