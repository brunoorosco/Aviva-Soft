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

  console.log(props); //    const { membros } = props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([props.children[1].user]),
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
    }, membros.price), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, membros.stock));
  })));
}

_s(MembrosTable, "V9DA7OFLev3FEc9sKVClXMUSYxM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmVsYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZW1icm9zVGFibGUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImNoaWxkcmVuIiwidXNlciIsIm1lbWJyb3MiLCJzZXRNZW1icm9zIiwibWFwIiwiaWRtZW1icm9zIiwibmFtZSIsInByaWNlIiwic3RvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUFBOztBQUN4Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosRUFEd0MsQ0FFNUM7O0FBRjRDLGtCQUdWRyxzREFBUSxDQUFDLENBQUNILEtBQUssQ0FBQ0ksUUFBTixDQUFlLENBQWYsRUFBa0JDLElBQW5CLENBQUQsQ0FIRTtBQUFBLE1BR2pDQyxPQUhpQztBQUFBLE1BR3hCQyxVQUh3Qjs7QUFJeEMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLENBREosQ0FGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0YsT0FBRCxFQUFhO0FBQ3RCO0FBQUksU0FBRyxFQUFFQSxPQUFPLENBQUNHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtILE9BQU8sQ0FBQ0ksSUFBYixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSixPQUFPLENBQUNLLEtBQWIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0wsT0FBTyxDQUFDTSxLQUFiLENBSEo7QUFLSCxHQU5BLENBREwsQ0FUSixDQURKO0FBcUJIOztHQXpCdUJiLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1lbWJyb3MuanMuZjllYjU3NTU1M2NhMjhkNTlmMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW1icm9zVGFibGUocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4vLyAgICBjb25zdCB7IG1lbWJyb3MgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW21lbWJyb3MsIHNldE1lbWJyb3NdID0gdXNlU3RhdGUoW3Byb3BzLmNoaWxkcmVuWzFdLnVzZXJdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDxjYXB0aW9uPk1lbWJyb3M8L2NhcHRpb24+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+SW4gU3RvY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge21lbWJyb3MubWFwKChtZW1icm9zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWVtYnJvcy5pZG1lbWJyb3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lbWJyb3MubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lbWJyb3MucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttZW1icm9zLnN0b2NrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==