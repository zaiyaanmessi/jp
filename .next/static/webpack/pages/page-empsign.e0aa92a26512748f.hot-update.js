"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page-empsign",{

/***/ "./pages/page-empsign.js":
/*!*******************************!*\
  !*** ./pages/page-empsign.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmpSign)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* eslint-disable react/no-unescaped-entities */ /* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction EmpSign() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n    const handleLoginClick = async (e)=>{\n        e.preventDefault();\n        try {\n            const actionCodeSettings = {\n                url: 'http://localhost:3000/main',\n                handleCodeInApp: true\n            };\n            await (0,_firebase__WEBPACK_IMPORTED_MODULE_5__.sendSignInLinkToEmail)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, email, actionCodeSettings);\n            localStorage.setItem('emailForSignIn', email); // Store email for later use\n            setMessage(\"OTP sent to your email. Please check your inbox.\");\n        } catch (error) {\n            setMessage(\"Error: \" + error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pt-100 login-register\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row login-register-cover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-4 col-md-6 col-sm-12 mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-sm text-brand-2\",\n                                        children: \"Welcome back!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mt-10 mb-5 text-brand-1\",\n                                        children: \"Employer Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-sm text-muted mb-30\",\n                                        children: \"Access to all features. No credit card required.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn social-login hover-up mb-20\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"assets/imgs/template/icons/icon-google.svg\",\n                                                alt: \"jobbox\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Sign in with Google\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"divider-text-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Or continue with\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"login-register text-start mt-20\",\n                                onSubmit: handleLoginClick,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"form-label\",\n                                                htmlFor: \"input-1\",\n                                                children: \"Email address *\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"form-control\",\n                                                id: \"input-1\",\n                                                type: \"email\",\n                                                required: true,\n                                                value: email,\n                                                onChange: (e)=>setEmail(e.target.value),\n                                                placeholder: \"Enter your email\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"login_footer form-group d-flex justify-content-between\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            legacyBehavior: true,\n                                            href: \"/page-contact\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-muted\",\n                                                children: \"Forgot Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-brand-1 hover-up w-100\",\n                                            type: \"submit\",\n                                            onClick: ()=>window.location.href = '/index-3',\n                                            children: \"Send OTP\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-muted text-center\",\n                                        children: [\n                                            \"Don't have an Account?\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                legacyBehavior: true,\n                                                href: \"/page-register\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: \"Register\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this),\n                                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 45\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                                lineNumber: 49,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zaiyaannajam/Desktop/jp/pages/page-empsign.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(EmpSign, \"HC7aIyFpMlhNrCA4truyC34vG4c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = EmpSign;\nvar _c;\n$RefreshReg$(_c, \"EmpSign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlLWVtcHNpZ24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBOEMsR0FDOUMsNENBQTRDOztBQUNLO0FBQ3BCO0FBQ0k7QUFDTztBQUNrQjtBQUUzQyxTQUFTTTs7SUFDcEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVUsbUJBQW1CLE9BQU9DO1FBQzVCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDQSxNQUFNQyxxQkFBcUI7Z0JBQ3ZCQyxLQUFLO2dCQUNMQyxpQkFBaUI7WUFDckI7WUFFQSxNQUFNWixnRUFBcUJBLENBQUNELDJDQUFJQSxFQUFFSSxPQUFPTztZQUN6Q0csYUFBYUMsT0FBTyxDQUFDLGtCQUFrQlgsUUFBUSw0QkFBNEI7WUFDM0VHLFdBQVc7UUFFZixFQUFFLE9BQU9TLE9BQU87WUFDWlQsV0FBVyxZQUFZUyxNQUFNVixPQUFPO1FBQ3hDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ1YsaUVBQU1BO2tCQUNILDRFQUFDcUI7WUFBUUMsV0FBVTtzQkFDZiw0RUFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ0U7d0NBQUVGLFdBQVU7a0RBQXVCOzs7Ozs7a0RBQ3BDLDhEQUFDRzt3Q0FBR0gsV0FBVTtrREFBMEI7Ozs7OztrREFDeEMsOERBQUNFO3dDQUFFRixXQUFVO2tEQUEyQjs7Ozs7O2tEQUN4Qyw4REFBQ0k7d0NBQU9KLFdBQVU7OzBEQUNkLDhEQUFDSztnREFBSUMsS0FBSTtnREFBNkNDLEtBQUk7Ozs7OzswREFDMUQsOERBQUNDOzBEQUFPOzs7Ozs7Ozs7Ozs7a0RBRVosOERBQUNQO3dDQUFJRCxXQUFVO2tEQUNYLDRFQUFDUztzREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNDO2dDQUFLVixXQUFVO2dDQUFrQ1csVUFBVXJCOztrREFDeEQsOERBQUNXO3dDQUFJRCxXQUFVOzswREFDWCw4REFBQ1k7Z0RBQU1aLFdBQVU7Z0RBQWFhLFNBQVE7MERBQVU7Ozs7OzswREFHaEQsOERBQUNDO2dEQUNHZCxXQUFVO2dEQUNWZSxJQUFHO2dEQUNIQyxNQUFLO2dEQUNMQyxRQUFRO2dEQUNSQyxPQUFPaEM7Z0RBQ1BpQyxVQUFVLENBQUM1QixJQUFNSixTQUFTSSxFQUFFNkIsTUFBTSxDQUFDRixLQUFLO2dEQUN4Q0csYUFBWTs7Ozs7Ozs7Ozs7O2tEQUdwQiw4REFBQ3BCO3dDQUFJRCxXQUFVO2tEQUNYLDRFQUFDckIsa0RBQUlBOzRDQUFDMkMsY0FBYzs0Q0FBQ0MsTUFBSztzREFDdEIsNEVBQUNDO2dEQUFFeEIsV0FBVTswREFBYTs7Ozs7Ozs7Ozs7Ozs7OztrREFHbEMsOERBQUNDO3dDQUFJRCxXQUFVO2tEQUNmLDRFQUFDSTs0Q0FBT0osV0FBVTs0Q0FBaUNnQixNQUFLOzRDQUFTUyxTQUFTLElBQU1DLE9BQU9DLFFBQVEsQ0FBQ0osSUFBSSxHQUFHO3NEQUFZOzs7Ozs7Ozs7OztrREFLbkgsOERBQUN0Qjt3Q0FBSUQsV0FBVTs7NENBQXlCOzBEQUVwQyw4REFBQ3JCLGtEQUFJQTtnREFBQzJDLGNBQWM7Z0RBQUNDLE1BQUs7MERBQ3RCLDRFQUFDQzs4REFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBR1ZwQyx5QkFBVyw4REFBQ2M7a0RBQUdkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRDtHQWhGd0JKOztRQUNMSCxrREFBU0E7OztLQURKRyIsInNvdXJjZXMiOlsiL1VzZXJzL3phaXlhYW5uYWphbS9EZXNrdG9wL2pwL3BhZ2VzL3BhZ2UtZW1wc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBhdXRoLCBzZW5kU2lnbkluTGlua1RvRW1haWwgfSBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVtcFNpZ24oKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgaGFuZGxlTG9naW5DbGljayA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbkNvZGVTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWFpbicsICAvLyBXaGVyZSB0byByZWRpcmVjdCBhZnRlciB2ZXJpZmljYXRpb25cbiAgICAgICAgICAgICAgICBoYW5kbGVDb2RlSW5BcHA6IHRydWUsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhd2FpdCBzZW5kU2lnbkluTGlua1RvRW1haWwoYXV0aCwgZW1haWwsIGFjdGlvbkNvZGVTZXR0aW5ncyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWxGb3JTaWduSW4nLCBlbWFpbCk7IC8vIFN0b3JlIGVtYWlsIGZvciBsYXRlciB1c2VcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJPVFAgc2VudCB0byB5b3VyIGVtYWlsLiBQbGVhc2UgY2hlY2sgeW91ciBpbmJveC5cIik7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJFcnJvcjogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtMTAwIGxvZ2luLXJlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbG9naW4tcmVnaXN0ZXItY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc20gdGV4dC1icmFuZC0yXCI+V2VsY29tZSBiYWNrITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTEwIG1iLTUgdGV4dC1icmFuZC0xXCI+RW1wbG95ZXIgTG9naW48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNtIHRleHQtbXV0ZWQgbWItMzBcIj5BY2Nlc3MgdG8gYWxsIGZlYXR1cmVzLiBObyBjcmVkaXQgY2FyZCByZXF1aXJlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNvY2lhbC1sb2dpbiBob3Zlci11cCBtYi0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1ncy90ZW1wbGF0ZS9pY29ucy9pY29uLWdvb2dsZS5zdmdcIiBhbHQ9XCJqb2Jib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TaWduIGluIHdpdGggR29vZ2xlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXItdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9yIGNvbnRpbnVlIHdpdGg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luLXJlZ2lzdGVyIHRleHQtc3RhcnQgbXQtMjBcIiBvblN1Ym1pdD17aGFuZGxlTG9naW5DbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBodG1sRm9yPVwiaW5wdXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3MgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0LTFcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fZm9vdGVyIGZvcm0tZ3JvdXAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBocmVmPVwiL3BhZ2UtY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Gb3Jnb3QgUGFzc3dvcmQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWJyYW5kLTEgaG92ZXItdXAgdy0xMDBcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2luZGV4LTMnfT5cbiAgU2VuZCBPVFBcbjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gQWNjb3VudD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIGhyZWY9XCIvcGFnZS1yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJlZ2lzdGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UgJiYgPHA+e21lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cblxuXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTGluayIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXV0aCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsIkVtcFNpZ24iLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVMb2dpbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwidXJsIiwiaGFuZGxlQ29kZUluQXBwIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMiIsImJ1dHRvbiIsImltZyIsInNyYyIsImFsdCIsInN0cm9uZyIsInNwYW4iLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwibGVnYWN5QmVoYXZpb3IiLCJocmVmIiwiYSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page-empsign.js\n"));

/***/ })

});