"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page-signin",{

/***/ "./pages/page-signin.js":
/*!******************************!*\
  !*** ./pages/page-signin.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* eslint-disable react/no-unescaped-entities */ /* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Signin() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n    const handleLoginClick = async (e)=>{\n        e.preventDefault();\n        try {\n            const actionCodeSettings = {\n                url: 'http://localhost:3000/main',\n                handleCodeInApp: true\n            };\n            await (0,_firebase__WEBPACK_IMPORTED_MODULE_5__.sendSignInLinkToEmail)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, email, actionCodeSettings);\n            localStorage.setItem('emailForSignIn', email); // Store email for later use\n            setMessage(\"OTP sent to your email. Please check your inbox.\");\n        } catch (error) {\n            setMessage(\"Error: \" + error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pt-100 login-register\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row login-register-cover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-4 col-md-6 col-sm-12 mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-sm text-brand-2\",\n                                        children: \"Welcome back!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mt-10 mb-5 text-brand-1\",\n                                        children: \"Member Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-sm text-muted mb-30\",\n                                        children: \"Access to all features. No credit card required.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn social-login hover-up mb-20\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"assets/imgs/template/icons/icon-google.svg\",\n                                                alt: \"jobbox\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Sign in with Google\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"divider-text-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Or continue with\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"login-register text-start mt-20\",\n                                onSubmit: handleLoginClick,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"form-label\",\n                                                htmlFor: \"input-1\",\n                                                children: \"Email address *\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"form-control\",\n                                                id: \"input-1\",\n                                                type: \"email\",\n                                                required: true,\n                                                value: email,\n                                                onChange: (e)=>setEmail(e.target.value),\n                                                placeholder: \"Enter your email\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"login_footer form-group d-flex justify-content-between\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            legacyBehavior: true,\n                                            href: \"/page-contact\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-muted\",\n                                                children: \"Forgot Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-brand-1 hover-up w-100\",\n                                            type: \"submit\",\n                                            onClick: ()=>window.location.href = '/index-3',\n                                            children: \"Send OTP\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-muted text-center\",\n                                        children: [\n                                            \"Don't have an Account?\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                legacyBehavior: true,\n                                                href: \"/page-register\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: \"Register\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this),\n                                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 45\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                                lineNumber: 49,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-signin.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Signin, \"HC7aIyFpMlhNrCA4truyC34vG4c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlLXNpZ25pbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4QyxHQUM5Qyw0Q0FBNEM7O0FBQ0s7QUFDcEI7QUFDSTtBQUNPO0FBQ2tCO0FBRTNDLFNBQVNNOztJQUNwQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxtQkFBbUIsT0FBT0M7UUFDNUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNBLE1BQU1DLHFCQUFxQjtnQkFDdkJDLEtBQUs7Z0JBQ0xDLGlCQUFpQjtZQUNyQjtZQUVBLE1BQU1aLGdFQUFxQkEsQ0FBQ0QsMkNBQUlBLEVBQUVJLE9BQU9PO1lBQ3pDRyxhQUFhQyxPQUFPLENBQUMsa0JBQWtCWCxRQUFRLDRCQUE0QjtZQUMzRUcsV0FBVztRQUVmLEVBQUUsT0FBT1MsT0FBTztZQUNaVCxXQUFXLFlBQVlTLE1BQU1WLE9BQU87UUFDeEM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDVixpRUFBTUE7a0JBQ0gsNEVBQUNxQjtZQUFRQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNYLDhEQUFDRTt3Q0FBRUYsV0FBVTtrREFBdUI7Ozs7OztrREFDcEMsOERBQUNHO3dDQUFHSCxXQUFVO2tEQUEwQjs7Ozs7O2tEQUN4Qyw4REFBQ0U7d0NBQUVGLFdBQVU7a0RBQTJCOzs7Ozs7a0RBQ3hDLDhEQUFDSTt3Q0FBT0osV0FBVTs7MERBQ2QsOERBQUNLO2dEQUFJQyxLQUFJO2dEQUE2Q0MsS0FBSTs7Ozs7OzBEQUMxRCw4REFBQ0M7MERBQU87Ozs7Ozs7Ozs7OztrREFFWiw4REFBQ1A7d0NBQUlELFdBQVU7a0RBQ1gsNEVBQUNTO3NEQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHZCw4REFBQ0M7Z0NBQUtWLFdBQVU7Z0NBQWtDVyxVQUFVckI7O2tEQUN4RCw4REFBQ1c7d0NBQUlELFdBQVU7OzBEQUNYLDhEQUFDWTtnREFBTVosV0FBVTtnREFBYWEsU0FBUTswREFBVTs7Ozs7OzBEQUdoRCw4REFBQ0M7Z0RBQ0dkLFdBQVU7Z0RBQ1ZlLElBQUc7Z0RBQ0hDLE1BQUs7Z0RBQ0xDLFFBQVE7Z0RBQ1JDLE9BQU9oQztnREFDUGlDLFVBQVUsQ0FBQzVCLElBQU1KLFNBQVNJLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7Z0RBQ3hDRyxhQUFZOzs7Ozs7Ozs7Ozs7a0RBR3BCLDhEQUFDcEI7d0NBQUlELFdBQVU7a0RBQ1gsNEVBQUNyQixrREFBSUE7NENBQUMyQyxjQUFjOzRDQUFDQyxNQUFLO3NEQUN0Qiw0RUFBQ0M7Z0RBQUV4QixXQUFVOzBEQUFhOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUdsQyw4REFBQ0M7d0NBQUlELFdBQVU7a0RBQ2YsNEVBQUNJOzRDQUFPSixXQUFVOzRDQUFpQ2dCLE1BQUs7NENBQVNTLFNBQVMsSUFBTUMsT0FBT0MsUUFBUSxDQUFDSixJQUFJLEdBQUc7c0RBQVk7Ozs7Ozs7Ozs7O2tEQUtuSCw4REFBQ3RCO3dDQUFJRCxXQUFVOzs0Q0FBeUI7MERBRXBDLDhEQUFDckIsa0RBQUlBO2dEQUFDMkMsY0FBYztnREFBQ0MsTUFBSzswREFDdEIsNEVBQUNDOzhEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHVnBDLHlCQUFXLDhEQUFDYztrREFBR2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhEO0dBaEZ3Qko7O1FBQ0xILGtEQUFTQTs7O0tBREpHIiwic291cmNlcyI6WyIvVXNlcnMvemFpeWFhbm5hamFtL0Rlc2t0b3AvanAvcGFnZXMvcGFnZS1zaWduaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgc2VuZFNpZ25JbkxpbmtUb0VtYWlsIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbmluKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbkNsaWNrID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uQ29kZVNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21haW4nLCAgLy8gV2hlcmUgdG8gcmVkaXJlY3QgYWZ0ZXIgdmVyaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDb2RlSW5BcHA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBzZW5kU2lnbkluTGlua1RvRW1haWwoYXV0aCwgZW1haWwsIGFjdGlvbkNvZGVTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbEZvclNpZ25JbicsIGVtYWlsKTsgLy8gU3RvcmUgZW1haWwgZm9yIGxhdGVyIHVzZVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiT1RQIHNlbnQgdG8geW91ciBlbWFpbC4gUGxlYXNlIGNoZWNrIHlvdXIgaW5ib3guXCIpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiRXJyb3I6IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTEwMCBsb2dpbi1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBsb2dpbi1yZWdpc3Rlci1jb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zbSB0ZXh0LWJyYW5kLTJcIj5XZWxjb21lIGJhY2shPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0xMCBtYi01IHRleHQtYnJhbmQtMVwiPk1lbWJlciBMb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zbSB0ZXh0LW11dGVkIG1iLTMwXCI+QWNjZXNzIHRvIGFsbCBmZWF0dXJlcy4gTm8gY3JlZGl0IGNhcmQgcmVxdWlyZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNvY2lhbC1sb2dpbiBob3Zlci11cCBtYi0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWdzL3RlbXBsYXRlL2ljb25zL2ljb24tZ29vZ2xlLnN2Z1wiIGFsdD1cImpvYmJveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U2lnbiBpbiB3aXRoIEdvb2dsZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlci10ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PciBjb250aW51ZSB3aXRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbi1yZWdpc3RlciB0ZXh0LXN0YXJ0IG10LTIwXCIgb25TdWJtaXQ9e2hhbmRsZUxvZ2luQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIGh0bWxGb3I9XCJpbnB1dC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0LTFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX2Zvb3RlciBmb3JtLWdyb3VwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBocmVmPVwiL3BhZ2UtY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1icmFuZC0xIGhvdmVyLXVwIHctMTAwXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9pbmRleC0zJ30+XHJcbiAgU2VuZCBPVFBcclxuPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIEFjY291bnQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIGhyZWY9XCIvcGFnZS1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSAmJiA8cD57bWVzc2FnZX08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwiU2lnbmluIiwicm91dGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlTG9naW5DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsInVybCIsImhhbmRsZUNvZGVJbkFwcCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaDIiLCJidXR0b24iLCJpbWciLCJzcmMiLCJhbHQiLCJzdHJvbmciLCJzcGFuIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImxlZ2FjeUJlaGF2aW9yIiwiaHJlZiIsImEiLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page-signin.js\n"));

/***/ })

});