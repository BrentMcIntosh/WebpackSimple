(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Please Click This!\";\n  var element = document.createElement(\"button\");\n  element.innerHTML = text;\n\n  element.onclick = function () {\n    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./lazy */ \"./src/lazy.js\")).then(function (lazy) {\n      element.textContent = lazy.default;\n    }).catch(function (err) {\n      console.error(err);\n    });\n  };\n\n  return element;\n});\n\n//# sourceURL=webpack:///./src/component.js?");

/***/ })

}]);