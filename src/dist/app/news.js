/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/news.ts":
/*!*************************!*\
  !*** ./src/app/news.ts ***!
  \*************************/
/***/ (() => {

eval("\nlet textTruncate = document.querySelector('#main-card');\nfunction truncate() {\n    var _a;\n    const txt = (_a = textTruncate === null || textTruncate === void 0 ? void 0 : textTruncate.textContent) === null || _a === void 0 ? void 0 : _a.slice(0, 400);\n    if (textTruncate !== null)\n        textTruncate.textContent = `${txt} ...`;\n}\ntruncate();\n\n\n//# sourceURL=webpack://alviverdes.io/./src/app/news.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/news.ts"]();
/******/ 	
/******/ })()
;