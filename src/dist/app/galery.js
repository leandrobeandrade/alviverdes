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

/***/ "./src/app/galery.ts":
/*!***************************!*\
  !*** ./src/app/galery.ts ***!
  \***************************/
/***/ (() => {

eval("\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    // Add the 'js' class to the body\n    document.body.classList.add(\"js\");\n    // Get references to the elements\n    let hamburger = document.querySelector(\".hamburger\");\n    let nav = document.getElementById(\"site-nav\");\n    let masthead = document.getElementById(\"masthead\");\n    // Add click event listener to the hamburger\n    hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener(\"click\", function () {\n        // Toggle 'is-active' class on hamburger, nav, and masthead\n        hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle(\"is-active\");\n        nav === null || nav === void 0 ? void 0 : nav.classList.toggle(\"is-active\");\n        masthead === null || masthead === void 0 ? void 0 : masthead.classList.toggle(\"is-active\");\n    });\n});\n\n\n//# sourceURL=webpack://alviverdes.io/./src/app/galery.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/galery.ts"]();
/******/ 	
/******/ })()
;