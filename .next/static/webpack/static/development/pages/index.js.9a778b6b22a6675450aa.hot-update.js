webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Auth */ "./components/Auth/index.js");


var _this = undefined,
    _jsxFileName = "C:\\nodeJs\\nextCrurch\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    origem: '',
    destino: '',
    plano: ''
  }),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      destino = _useState2.destino,
      setDestino = _useState2.setDestino;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      plano = _useState3.plano,
      setPlano = _useState3.setPlano;

  function handleChange(evt) {
    var value = evt.target.value;
    var key = evt.target.name;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
    });
  }

  function save(evt) {
    console.log(evt);
  }

  return __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_components_Auth__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
};

_s(Index, "YJxlI9jsi+n6quyXHLKaOmGYPiM=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZGV4IiwidXNlU3RhdGUiLCJvcmlnZW0iLCJkZXN0aW5vIiwicGxhbm8iLCJmb3JtIiwic2V0Rm9ybSIsInNldERlc3Rpbm8iLCJzZXRQbGFubyIsImhhbmRsZUNoYW5nZSIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5IiwibmFtZSIsIm9sZCIsInNhdmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDO0FBQzdCQyxVQUFNLEVBQUUsRUFEcUI7QUFFN0JDLFdBQU8sRUFBRSxFQUZvQjtBQUc3QkMsU0FBSyxFQUFFO0FBSHNCLEdBQUQsQ0FGaEI7QUFBQSxNQUVUQyxJQUZTO0FBQUEsTUFFSEMsT0FGRzs7QUFBQSxtQkFRZ0JMLHNEQUFRLENBQUMsRUFBRCxDQVJ4QjtBQUFBLE1BUVJFLE9BUlEsY0FRUkEsT0FSUTtBQUFBLE1BUUNJLFVBUkQsY0FRQ0EsVUFSRDs7QUFBQSxtQkFTWU4sc0RBQVEsQ0FBQyxFQUFELENBVHBCO0FBQUEsTUFTUkcsS0FUUSxjQVNSQSxLQVRRO0FBQUEsTUFTREksUUFUQyxjQVNEQSxRQVRDOztBQVdoQixXQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUV2QixRQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixDQUFXRCxLQUF6QjtBQUNBLFFBQU1FLEdBQUcsR0FBR0gsR0FBRyxDQUFDRSxNQUFKLENBQVdFLElBQXZCO0FBQ0FSLFdBQU8sQ0FBQyxVQUFBUyxHQUFHO0FBQUEsNkNBQ0pBLEdBREkscUdBRU5GLEdBRk0sRUFFQUYsS0FGQTtBQUFBLEtBQUosQ0FBUDtBQUlIOztBQUVELFdBQVNLLElBQVQsQ0FBY04sR0FBZCxFQUFtQjtBQUNmTyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsR0FBWjtBQUNIOztBQUNELFNBQ0k7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQWtDSCxDQTFERDs7R0FBTVYsSzs7S0FBQUEsSztBQTREU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjlhNzc4YjZiMjJhNjY3NTQ1MGFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi8uLi9jb21wb25lbnRzL0F1dGgnXHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgb3JpZ2VtOiAnJyxcclxuICAgICAgICBkZXN0aW5vOiAnJyxcclxuICAgICAgICBwbGFubzogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBkZXN0aW5vLCBzZXREZXN0aW5vIH0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgeyBwbGFubywgc2V0UGxhbm8gfSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2dCkge1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWVcclxuICAgICAgICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmUoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZ0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJyA+XHJcblxyXG4gICAgICAgICAgICA8TG9naW4gLz5cclxuey8qICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTYnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9yaWdlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9yaWdlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGVzdGlubydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXN0aW5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCBweC0xMiBibG9jayBweS00IGZvbnQtYm9sZCAgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93JyBvbkNsaWNrPXtzYXZlfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9