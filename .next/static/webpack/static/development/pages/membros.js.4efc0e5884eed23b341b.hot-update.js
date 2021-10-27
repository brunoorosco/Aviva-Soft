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
var _jsxFileName = "C:\\nodeJs\\testeLolDesign\\components\\Tabela\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MembrosTable(props) {
  _s();

  var _this = this;

  console.log(props.children[1]); //    const { membros } = props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([props.children[1]]),
      membros = _useState[0],
      setMembros = _useState[1];

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
  }, membros.map(function (membros) {
    __jsx("tr", {
      key: membros.idmembros,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, membros.name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, membros.price));
  })));
}

_s(MembrosTable, "nfASKGFJDWIQ4PN5hGbk7K2DN5A=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmVsYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZW1icm9zVGFibGUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibWVtYnJvcyIsInNldE1lbWJyb3MiLCJtYXAiLCJpZG1lbWJyb3MiLCJuYW1lIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUFBOztBQUN4Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csUUFBTixDQUFlLENBQWYsQ0FBWixFQUR3QyxDQUU1Qzs7QUFGNEMsa0JBR1ZDLHNEQUFRLENBQUMsQ0FBQ0osS0FBSyxDQUFDRyxRQUFOLENBQWUsQ0FBZixDQUFELENBQUQsQ0FIRTtBQUFBLE1BR2pDRSxPQUhpQztBQUFBLE1BR3hCQyxVQUh3Qjs7QUFJeEMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLENBREosQ0FGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0YsT0FBRCxFQUFhO0FBQ3RCO0FBQUksU0FBRyxFQUFFQSxPQUFPLENBQUNHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtILE9BQU8sQ0FBQ0ksSUFBYixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSixPQUFPLENBQUNLLEtBQWIsQ0FGSjtBQUtILEdBTkEsQ0FETCxDQVRKLENBREo7QUFxQkg7O0dBekJ1QlgsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWVtYnJvcy5qcy40ZWZjMGU1ODg0ZWVkMjNiMzQxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbWJyb3NUYWJsZShwcm9wcykge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuY2hpbGRyZW5bMV0pXHJcbi8vICAgIGNvbnN0IHsgbWVtYnJvcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbbWVtYnJvcywgc2V0TWVtYnJvc10gPSB1c2VTdGF0ZShbcHJvcHMuY2hpbGRyZW5bMV1dKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDxjYXB0aW9uPk1lbWJyb3M8L2NhcHRpb24+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+SW4gU3RvY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge21lbWJyb3MubWFwKChtZW1icm9zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWVtYnJvcy5pZG1lbWJyb3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lbWJyb3MubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lbWJyb3MucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9