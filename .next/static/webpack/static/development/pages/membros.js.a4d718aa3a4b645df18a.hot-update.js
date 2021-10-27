webpackHotUpdate("static\\development\\pages\\membros.js",{

/***/ "./components/Tabela/index.js":
/*!************************************!*\
  !*** ./components/Tabela/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MembrosTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\nodeJs\\testeLolDesign\\components\\Tabela\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function MembrosTable(props) {
  var _this = this;

  var membros = props.membros;
  return __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("caption", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Our products"), __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Name"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Price"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "In Stock"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, membros.map(function (product) {
    return __jsx("tr", {
      key: product.idmembros,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, product.name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, product.price), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, product.stock));
  })));
}
_c = MembrosTable;

var _c;

$RefreshReg$(_c, "MembrosTable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/membros.js":
/*!**************************!*\
  !*** ./pages/membros.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Tabela */ "./components/Tabela/index.js");




var _this = undefined,
    _jsxFileName = "C:\\nodeJs\\testeLolDesign\\pages\\membros.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

var Membros = function Membros(members) {
  _s();

  //const { data, error } = useSWR('/api/membros', fetcher)
  console.log(members.user[0]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      membros = _useState[0],
      setMembros = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    origem: '',
    destino: '',
    plano: ''
  }),
      form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      destino = _useState3.destino,
      setDestino = _useState3.setDestino;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      plano = _useState4.plano,
      setPlano = _useState4.setPlano;

  function handleChange(evt) {
    var value = evt.target.value;
    var key = evt.target.name;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, value));
    });
  }

  function save(evt) {
    console.log(evt);
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container mx-auto text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 20
    }
  }, __jsx(_components_Tabela__WEBPACK_IMPORTED_MODULE_6__["default"], {
    members: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  })), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, JSON.stringify(form, null, 2)))));
};

_s(Membros, "Oaxd0evN7ydS2QYbzzMTgg9lCEk=");

_c = Membros;

Membros.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:3000/api/membros');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt("return", {
              user: json.user
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Membros);

var _c;

$RefreshReg$(_c, "Membros");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmVsYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW1icm9zLmpzIl0sIm5hbWVzIjpbIk1lbWJyb3NUYWJsZSIsInByb3BzIiwibWVtYnJvcyIsIm1hcCIsInByb2R1Y3QiLCJpZG1lbWJyb3MiLCJuYW1lIiwicHJpY2UiLCJzdG9jayIsImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiTWVtYnJvcyIsIm1lbWJlcnMiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVzZVN0YXRlIiwic2V0TWVtYnJvcyIsIm9yaWdlbSIsImRlc3Rpbm8iLCJwbGFubyIsImZvcm0iLCJzZXRGb3JtIiwic2V0RGVzdGlubyIsInNldFBsYW5vIiwiaGFuZGxlQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJvbGQiLCJzYXZlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFBQSxNQUNoQ0MsT0FEZ0MsR0FDcEJELEtBRG9CLENBQ2hDQyxPQURnQztBQUV4QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLENBREYsQ0FGRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQUMsT0FBTztBQUFBLFdBQ2xCO0FBQUksU0FBRyxFQUFFQSxPQUFPLENBQUNDLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELE9BQU8sQ0FBQ0UsSUFBYixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRixPQUFPLENBQUNHLEtBQWIsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsT0FBTyxDQUFDSSxLQUFiLENBSEYsQ0FEa0I7QUFBQSxHQUFuQixDQURILENBVEYsQ0FERjtBQXFCRDtLQXZCcUJSLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBYUMsS0FBSyxNQUFMLG9CQUFlQyxJQUFmLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQXZCLENBQWI7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFFekI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQU8sQ0FBQ0csSUFBUixDQUFhLENBQWIsQ0FBWjs7QUFIeUIsa0JBSUtDLHNEQUFRLENBQUMsRUFBRCxDQUpiO0FBQUEsTUFJbEJqQixPQUprQjtBQUFBLE1BSVRrQixVQUpTOztBQUFBLG1CQU9ERCxzREFBUSxDQUFDO0FBQzdCRSxVQUFNLEVBQUUsRUFEcUI7QUFFN0JDLFdBQU8sRUFBRSxFQUZvQjtBQUc3QkMsU0FBSyxFQUFFO0FBSHNCLEdBQUQsQ0FQUDtBQUFBLE1BT2xCQyxJQVBrQjtBQUFBLE1BT1pDLE9BUFk7O0FBQUEsbUJBYU9OLHNEQUFRLENBQUMsRUFBRCxDQWJmO0FBQUEsTUFhakJHLE9BYmlCLGNBYWpCQSxPQWJpQjtBQUFBLE1BYVJJLFVBYlEsY0FhUkEsVUFiUTs7QUFBQSxtQkFjR1Asc0RBQVEsQ0FBQyxFQUFELENBZFg7QUFBQSxNQWNqQkksS0FkaUIsY0FjakJBLEtBZGlCO0FBQUEsTUFjVkksUUFkVSxjQWNWQSxRQWRVOztBQWdCekIsV0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkI7QUFFdkIsUUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7QUFDQSxRQUFNRSxHQUFHLEdBQUdILEdBQUcsQ0FBQ0UsTUFBSixDQUFXekIsSUFBdkI7QUFDQW1CLFdBQU8sQ0FBQyxVQUFBUSxHQUFHO0FBQUEsNkNBQ0pBLEdBREkscUdBRU5ELEdBRk0sRUFFQUYsS0FGQTtBQUFBLEtBQUosQ0FBUDtBQUlIOztBQUVELFdBQVNJLElBQVQsQ0FBY0wsR0FBZCxFQUFtQjtBQUNmYixXQUFPLENBQUNDLEdBQVIsQ0FBWVksR0FBWjtBQUNIOztBQUNELFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssTUFBQywwREFBRDtBQUFjLFdBQU8sTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURMLENBREgsRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tNLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCLENBREwsQ0FMSixDQURKLENBREosQ0FESjtBQWdCSCxDQTdDRDs7R0FBTVYsTzs7S0FBQUEsTzs7QUFnRE5BLE9BQU8sQ0FBQ3VCLGVBQVI7QUFBQSw4TEFBMEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSjVCLEtBQUssQ0FBQyxtQ0FBRCxDQUREOztBQUFBO0FBQ2hCRSxlQURnQjtBQUFBO0FBQUEsbUJBRUhBLEdBQUcsQ0FBQ0MsSUFBSixFQUZHOztBQUFBO0FBRWhCQSxnQkFGZ0I7QUFBQSw2Q0FJZjtBQUFFSyxrQkFBSSxFQUFFTCxJQUFJLENBQUNLO0FBQWIsYUFKZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZUosc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1lbWJyb3MuanMuYTRkNzE4YWEzYTRiNjQ1ZGYxOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbWJyb3NUYWJsZShwcm9wcykge1xyXG4gICAgY29uc3QgeyBtZW1icm9zIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8Y2FwdGlvbj5PdXIgcHJvZHVjdHM8L2NhcHRpb24+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5JbiBTdG9jazwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge21lbWJyb3MubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtwcm9kdWN0LmlkbWVtYnJvc30+XHJcbiAgICAgICAgICAgICAgPHRkPntwcm9kdWN0Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3Quc3RvY2t9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG4gIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IE1lbWJyb3NUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmVsYSdcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbmNvbnN0IE1lbWJyb3MgPSAobWVtYmVycykgPT4ge1xyXG5cclxuICAgIC8vY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL21lbWJyb3MnLCBmZXRjaGVyKVxyXG4gICAgY29uc29sZS5sb2cobWVtYmVycy51c2VyWzBdKVxyXG4gICAgY29uc3QgW21lbWJyb3MsIHNldE1lbWJyb3NdID0gdXNlU3RhdGUoe1xyXG5cclxuICAgIH0pXHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgb3JpZ2VtOiAnJyxcclxuICAgICAgICBkZXN0aW5vOiAnJyxcclxuICAgICAgICBwbGFubzogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBkZXN0aW5vLCBzZXREZXN0aW5vIH0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgeyBwbGFubywgc2V0UGxhbm8gfSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2dCkge1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWVcclxuICAgICAgICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmUoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZ0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtNic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbWJyb3NUYWJsZSBtZW1iZXJzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShmb3JtLCBudWxsLCAyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5NZW1icm9zLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21lbWJyb3MnKVxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgLy8gY29uc29sZS5sb2coanNvbilcclxuICAgIHJldHVybiB7IHVzZXI6IGpzb24udXNlcn1cclxuICB9XHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1icm9zIl0sInNvdXJjZVJvb3QiOiIifQ==