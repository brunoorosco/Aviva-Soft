module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Tabela/index.js":
/*!************************************!*\
  !*** ./components/Tabela/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MembrosTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\nodeJs\\testeLolDesign\\components\\Tabela\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MembrosTable(props) {
  console.log(props.children[1]); //    const { membros } = props;

  const {
    0: membros,
    1: setMembros
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([props.children[1].user[0]]);
  return __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("caption", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Membros"), __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Name"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Price"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "In Stock"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, membros.map(membros => {
    __jsx("tr", {
      key: membros.idmembros,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, membros.name), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, "teste"));
  }), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, membros.map(membros => {
    __jsx("p", {
      key: membros,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, " membros ");
  }))));
}

/***/ }),

/***/ "./pages/membros.js":
/*!**************************!*\
  !*** ./pages/membros.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tabela */ "./components/Tabela/index.js");
var _jsxFileName = "C:\\nodeJs\\testeLolDesign\\pages\\membros.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const fetcher = (...args) => fetch(...args).then(res => res.json());

const Membros = members => {
  //const { data, error } = useSWR('/api/membros', fetcher)
  //  console.log(members.user[0])
  const {
    0: membros,
    1: setMembros
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    origem: '',
    destino: '',
    plano: ''
  });
  const {
    destino,
    setDestino
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    plano,
    setPlano
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function handleChange(evt) {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm(old => _objectSpread(_objectSpread({}, old), {}, {
      [key]: value
    }));
  }

  function save(evt) {
    console.log(evt);
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container mx-auto text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 20
    }
  }, __jsx(_components_Tabela__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, " ", members, " ")), __jsx("pre", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, JSON.stringify(form, null, 2)))));
};

Membros.getInitialProps = async ctx => {
  const res = await fetch('http://localhost:3000/api/membros');
  const json = await res.json(); // console.log(json)

  return {
    user: json.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Membros);

/***/ }),

/***/ "./pages/styles.module.css":
/*!*********************************!*\
  !*** ./pages/styles.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"input": "styles_input__1zNJU"
};


/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/membros.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\nodeJs\testeLolDesign\pages\membros.js */"./pages/membros.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJlbGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWVtYnJvcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIk1lbWJyb3NUYWJsZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwibWVtYnJvcyIsInNldE1lbWJyb3MiLCJ1c2VTdGF0ZSIsInVzZXIiLCJtYXAiLCJpZG1lbWJyb3MiLCJuYW1lIiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiTWVtYnJvcyIsIm1lbWJlcnMiLCJmb3JtIiwic2V0Rm9ybSIsIm9yaWdlbSIsImRlc3Rpbm8iLCJwbGFubyIsInNldERlc3Rpbm8iLCJzZXRQbGFubyIsImhhbmRsZUNoYW5nZSIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5Iiwib2xkIiwic2F2ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FB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QUFDQyxTQUFPO0FBQUVULFFBQUksRUFBRVMsSUFBSSxDQUFDVDtBQUFiLEdBQVA7QUFDRCxDQUxIOztBQVFlVSxzRUFBZixFOzs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1lbWJyb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVtYnJvc1RhYmxlKHByb3BzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5jaGlsZHJlblsxXSlcclxuLy8gICAgY29uc3QgeyBtZW1icm9zIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFttZW1icm9zLCBzZXRNZW1icm9zXSA9IHVzZVN0YXRlKFtwcm9wcy5jaGlsZHJlblsxXS51c2VyWzBdXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8Y2FwdGlvbj5NZW1icm9zPC9jYXB0aW9uPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkluIFN0b2NrPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHttZW1icm9zLm1hcCgobWVtYnJvcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e21lbWJyb3MuaWRtZW1icm9zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttZW1icm9zLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnRlc3RlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShtZW1icm9zKX0gKi99XHJcbiAgICAgICAgICAgICAgICB7IG1lbWJyb3MubWFwKChtZW1icm9zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgPHAga2V5PXttZW1icm9zfT4gbWVtYnJvcyA8L3A+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBNZW1icm9zVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJlbGEnXHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG5jb25zdCBNZW1icm9zID0gKG1lbWJlcnMpID0+IHtcclxuXHJcbiAgICAvL2NvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9tZW1icm9zJywgZmV0Y2hlcilcclxuICAvLyAgY29uc29sZS5sb2cobWVtYmVycy51c2VyWzBdKVxyXG4gICAgY29uc3QgW21lbWJyb3MsIHNldE1lbWJyb3NdID0gdXNlU3RhdGUoe1xyXG5cclxuICAgIH0pXHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgb3JpZ2VtOiAnJyxcclxuICAgICAgICBkZXN0aW5vOiAnJyxcclxuICAgICAgICBwbGFubzogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBkZXN0aW5vLCBzZXREZXN0aW5vIH0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgeyBwbGFubywgc2V0UGxhbm8gfSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2dCkge1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWVcclxuICAgICAgICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmUoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZ0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtNic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbWJyb3NUYWJsZSA+IHttZW1iZXJzfSA8L01lbWJyb3NUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGZvcm0sIG51bGwsIDIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbk1lbWJyb3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbWVtYnJvcycpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAvLyBjb25zb2xlLmxvZyhqc29uKVxyXG4gICAgcmV0dXJuIHsgdXNlcjoganNvbi51c2VyfVxyXG4gIH1cclxuICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJyb3MiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbnB1dFwiOiBcInN0eWxlc19pbnB1dF9fMXpOSlVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9