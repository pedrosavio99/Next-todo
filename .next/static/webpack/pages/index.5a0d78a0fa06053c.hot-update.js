"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userInput = ref[0], setInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todolist = ref1[0], settodolist = ref1[1];\n    var handleChange = function(value_to_change) {\n        value_to_change.preventDefault();\n        setInput(value_to_change.target.value);\n    // console.log(userInput)\n    };\n    var handleSubmit = function(value_to_change) {\n        value_to_change.preventDefault();\n        settodolist([\n            userInput\n        ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todolist)));\n        setInput(\"\");\n    };\n    var handleDelete = function(value_to_change) {\n        var updateList = todolist.filter(function(todoItem) {\n            return todolist.indexOf(todoItem) != todolist.indexOf(value_to_change);\n        });\n        settodolist(updateList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Next TodoList\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter a todo\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 90\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todolist.length >= 1 ? todolist.map(function(todo, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(value_to_change) {\n                                    value_to_change.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 55\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 32\n                    }, _this);\n                }) : \"Enter a todo item\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\Next\\\\todolistnext\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUFnQztBQUVoQyxJQUFNQyxLQUFLLEdBQUcsV0FBTTs7SUFDaEIsSUFBOEJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBbkNFLFNBQVMsR0FBY0YsR0FBWSxHQUExQixFQUFFRyxRQUFRLEdBQUlILEdBQVksR0FBaEI7SUFDMUIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBcENJLFFBQVEsR0FBZ0JKLElBQVksR0FBNUIsRUFBQ0ssV0FBVyxHQUFJTCxJQUFZLEdBQWhCO0lBRTFCLElBQU1NLFlBQVksR0FBRyxTQUFDQyxlQUFlLEVBQUk7UUFDckNBLGVBQWUsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2hDTCxRQUFRLENBQUNJLGVBQWUsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDdEMseUJBQXlCO0tBQzVCO0lBQ0QsSUFBTUMsWUFBWSxHQUFHLFNBQUNKLGVBQWUsRUFBSTtRQUVyQ0EsZUFBZSxDQUFDQyxjQUFjLEVBQUU7UUFDaENILFdBQVcsQ0FBQztZQUNSSCxTQUFTO1NBRVosQ0FIVyxNQUdYLENBREcscUZBQUdFLFFBQVEsQ0FBUkEsQ0FDTixDQUFDO1FBRUZELFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDZjtJQUNELElBQU1TLFlBQVksR0FBRyxTQUFDTCxlQUFlLEVBQUk7UUFDckMsSUFBTU0sVUFBVSxHQUFHVCxRQUFRLENBQUNVLE1BQU0sQ0FBQ0MsU0FBQUEsUUFBUTttQkFBR1gsUUFBUSxDQUFDWSxPQUFPLENBQUNELFFBQVEsQ0FBQyxJQUFFWCxRQUFRLENBQUNZLE9BQU8sQ0FBQ1QsZUFBZSxDQUFDO1NBQUEsQ0FBQztRQUM1R0YsV0FBVyxDQUFDUSxVQUFVLENBQUM7S0FDMUI7SUFDRCxxQkFDSSw4REFBQ0ksS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsZUFBYTs7Ozs7cUJBQUs7MEJBQ3RCLDhEQUFDQyxNQUFJOztrQ0FDRCw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUVDLFdBQVcsRUFBQyxjQUFjO3dCQUFDQyxRQUFRLEVBQUVqQixZQUFZOzs7Ozs2QkFBRztvQkFBQSxHQUFDO2tDQUFBLDhEQUFDa0IsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFZCxZQUFZO2tDQUFFLFFBQU07Ozs7OzZCQUFTOzs7Ozs7cUJBQ3BIOzBCQUNQLDhEQUFDZSxJQUFFOzBCQUVLdEIsUUFBUSxDQUFDdUIsTUFBTSxJQUFHLENBQUMsR0FBR3ZCLFFBQVEsQ0FBQ3dCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRztvQkFDOUMscUJBQU8sOERBQUNDLElBQUU7OzRCQUFjRixJQUFJOzRCQUFDLEdBQUM7MENBQUEsOERBQUNMLFFBQU07Z0NBQUNDLE9BQU8sRUFDekMsU0FBQ2xCLGVBQWUsRUFBSztvQ0FDckJBLGVBQWUsQ0FBQ0MsY0FBYyxFQUFFO29DQUNoQ0ksWUFBWSxDQUFDaUIsSUFBSSxDQUFDO2lDQUNyQjswQ0FBRSxRQUFNOzs7OztxQ0FBUzs7dUJBSkZDLEtBQUs7Ozs7NkJBSUU7aUJBQzFCLENBQUMsR0FBRyxtQkFBbUI7Ozs7O3FCQUUzQjs7Ozs7O2FBQ0gsQ0FDVDtDQUNKO0dBMUNLN0IsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBNENYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0W3RvZG9saXN0LHNldHRvZG9saXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZV90b19jaGFuZ2UpID0+e1xyXG4gICAgICAgIHZhbHVlX3RvX2NoYW5nZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0SW5wdXQodmFsdWVfdG9fY2hhbmdlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodmFsdWVfdG9fY2hhbmdlKSA9PntcclxuICAgICAgICBcclxuICAgICAgICB2YWx1ZV90b19jaGFuZ2UucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldHRvZG9saXN0KFtcclxuICAgICAgICAgICAgdXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvbGlzdFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHNldElucHV0KCcnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKHZhbHVlX3RvX2NoYW5nZSkgPT57XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTGlzdCA9IHRvZG9saXN0LmZpbHRlcih0b2RvSXRlbSA9PnRvZG9saXN0LmluZGV4T2YodG9kb0l0ZW0pIT10b2RvbGlzdC5pbmRleE9mKHZhbHVlX3RvX2NoYW5nZSkpXHJcbiAgICAgICAgc2V0dG9kb2xpc3QodXBkYXRlTGlzdClcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+TmV4dCBUb2RvTGlzdDwvaDM+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdG9kb1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5sZW5ndGggPj0xID8gdG9kb2xpc3QubWFwKCh0b2RvLCBpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57dG9kb30gPGJ1dHRvbiBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZV90b19jaGFuZ2UpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV90b19jaGFuZ2UucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBcIkVudGVyIGEgdG9kbyBpdGVtXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbmRleCIsInVzZXJJbnB1dCIsInNldElucHV0IiwidG9kb2xpc3QiLCJzZXR0b2RvbGlzdCIsImhhbmRsZUNoYW5nZSIsInZhbHVlX3RvX2NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ1cGRhdGVMaXN0IiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwiZGl2IiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxlbmd0aCIsIm1hcCIsInRvZG8iLCJpbmRleCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});