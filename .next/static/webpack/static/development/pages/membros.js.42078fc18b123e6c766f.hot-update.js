webpackHotUpdate("static\\development\\pages\\membros.js",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    origem: '',
    destino: '',
    plano: ''
  }),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      destino = _useState2.destino,
      setDestino = _useState2.setDestino;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      plano = _useState3.plano,
      setPlano = _useState3.setPlano;

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
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container mx-auto text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 20
    }
  }, __jsx("input", {
    type: "text",
    name: "origem",
    placeholder: "Origem",
    onChange: handleChange,
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
    placeholder: "Destino",
    name: "destino",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-blue-400 px-12 block py-4 font-bold  rounded-lg shadow-lg hover:shadow",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "Salvar")), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, JSON.stringify(form, null, 2)))));
};

_s(Membros, "YJxlI9jsi+n6quyXHLKaOmGYPiM=");

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
              user: json
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW1icm9zLmpzIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiTWVtYnJvcyIsIm1lbWJlcnMiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVzZVN0YXRlIiwib3JpZ2VtIiwiZGVzdGlubyIsInBsYW5vIiwiZm9ybSIsInNldEZvcm0iLCJzZXREZXN0aW5vIiwic2V0UGxhbm8iLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleSIsIm5hbWUiLCJvbGQiLCJzYXZlIiwic3R5bGVzIiwiaW5wdXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBYUMsS0FBSyxNQUFMLG9CQUFlQyxJQUFmLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQXZCLENBQWI7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFFekI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQU8sQ0FBQ0csSUFBUixDQUFhLENBQWIsQ0FBWjs7QUFIeUIsa0JBSURDLHNEQUFRLENBQUM7QUFDN0JDLFVBQU0sRUFBRSxFQURxQjtBQUU3QkMsV0FBTyxFQUFFLEVBRm9CO0FBRzdCQyxTQUFLLEVBQUU7QUFIc0IsR0FBRCxDQUpQO0FBQUEsTUFJbEJDLElBSmtCO0FBQUEsTUFJWkMsT0FKWTs7QUFBQSxtQkFVT0wsc0RBQVEsQ0FBQyxFQUFELENBVmY7QUFBQSxNQVVqQkUsT0FWaUIsY0FVakJBLE9BVmlCO0FBQUEsTUFVUkksVUFWUSxjQVVSQSxVQVZROztBQUFBLG1CQVdHTixzREFBUSxDQUFDLEVBQUQsQ0FYWDtBQUFBLE1BV2pCRyxLQVhpQixjQVdqQkEsS0FYaUI7QUFBQSxNQVdWSSxRQVhVLGNBV1ZBLFFBWFU7O0FBYXpCLFdBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBRXZCLFFBQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQXpCO0FBQ0EsUUFBTUUsR0FBRyxHQUFHSCxHQUFHLENBQUNFLE1BQUosQ0FBV0UsSUFBdkI7QUFDQVIsV0FBTyxDQUFDLFVBQUFTLEdBQUc7QUFBQSw2Q0FDSkEsR0FESSxxR0FFTkYsR0FGTSxFQUVBRixLQUZBO0FBQUEsS0FBSixDQUFQO0FBSUg7O0FBRUQsV0FBU0ssSUFBVCxDQUFjTixHQUFkLEVBQW1CO0FBQ2ZaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVyxHQUFaO0FBQ0g7O0FBQ0QsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxlQUFXLEVBQUMsUUFGaEI7QUFHSSxZQUFRLEVBQUVELFlBSGQ7QUFJSSxhQUFTLEVBQUVRLHlEQUFNLENBQUNDLEtBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETCxDQURILEVBU0k7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFDSSxhQUFTLEVBQUVELHlEQUFNLENBQUNDLEtBRHRCO0FBRUksZUFBVyxFQUFDLFNBRmhCO0FBR0ksUUFBSSxFQUFDLFNBSFQ7QUFJSSxZQUFRLEVBQUVULFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVEosRUFpQkk7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLDJFQUFsQjtBQUE4RixXQUFPLEVBQUVPLElBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQWpCSixFQW9CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tHLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCLENBREwsQ0FwQkosQ0FESixDQURKLENBREo7QUErQkgsQ0F6REQ7O0dBQU1ULE87O0tBQUFBLE87O0FBNEROQSxPQUFPLENBQUN5QixlQUFSO0FBQUEsOExBQTBCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0o5QixLQUFLLENBQUMsbUNBQUQsQ0FERDs7QUFBQTtBQUNoQkUsZUFEZ0I7QUFBQTtBQUFBLG1CQUVIQSxHQUFHLENBQUNDLElBQUosRUFGRzs7QUFBQTtBQUVoQkEsZ0JBRmdCO0FBQUEsNkNBSWY7QUFBRUssa0JBQUksRUFBR0w7QUFBVCxhQUplOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFlQyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWVtYnJvcy5qcy40MjA3OGZjMThiMTIzZTZjNzY2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG5jb25zdCBNZW1icm9zID0gKG1lbWJlcnMpID0+IHtcclxuXHJcbiAgICAvL2NvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9tZW1icm9zJywgZmV0Y2hlcilcclxuICAgIGNvbnNvbGUubG9nKG1lbWJlcnMudXNlclswXSlcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBvcmlnZW06ICcnLFxyXG4gICAgICAgIGRlc3Rpbm86ICcnLFxyXG4gICAgICAgIHBsYW5vOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IGRlc3Rpbm8sIHNldERlc3Rpbm8gfSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCB7IHBsYW5vLCBzZXRQbGFubyB9ID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZ0KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2dC50YXJnZXQubmFtZVxyXG4gICAgICAgIHNldEZvcm0ob2xkID0+ICh7XHJcbiAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgW2tleV06IHZhbHVlXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZShldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldnQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC02Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9yaWdlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9yaWdlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGVzdGlubydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXN0aW5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCBweC0xMiBibG9jayBweS00IGZvbnQtYm9sZCAgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93JyBvbkNsaWNrPXtzYXZlfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuTWVtYnJvcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tZW1icm9zJylcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgIC8vIGNvbnNvbGUubG9nKGpzb24pXHJcbiAgICByZXR1cm4geyB1c2VyOiAganNvbn1cclxuICB9XHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1icm9zIl0sInNvdXJjZVJvb3QiOiIifQ==