/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Assets/fonts/assistant-v18-latin-regular.woff2 */ "./src/Assets/fonts/assistant-v18-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Assets/fonts/assistant-v18-latin-700.woff2 */ "./src/Assets/fonts/assistant-v18-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Assets/fonts/quicksand-v30-latin-regular.woff2 */ "./src/Assets/fonts/quicksand-v30-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Assets/fonts/quicksand-v30-latin-700.woff2 */ "./src/Assets/fonts/quicksand-v30-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* assistant-regular - latin */
@font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: "Assistant 400";
	font-style: normal;
	font-weight: 400;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

/* assistant-700 - latin */
@font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: "Assistant 700";
	font-style: normal;
	font-weight: 700;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

/* quicksand-regular - latin */
@font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: "Quicksand 400";
	font-style: normal;
	font-weight: 400;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

/* quicksand-700 - latin */
@font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: "Quicksand 700";
	font-style: normal;
	font-weight: 700;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

:root {
	--light-blue-opq: rgba(217, 217, 252, 0.8);
	--light-blue: #7f7fdb;
	--navy-blue: #130e3d;
	--purple-clr: #42215f;
	--light-gray: #adadad;
	--dark-gray: #646363;
	--dark-clr: #141420;
	--dark-opq: rgba(16, 16, 53, 0.4);
	--light-clr: #fefefe;
	--green-clr: #2fbe03cb;
	--red-clr: #ff1a1af5;
}

body {
	height: 100vh;
	background-color: var(--light-clr);
}

h1,
h2 {
	font-family: 'Assistant 700';
}

em {
	font-size: 1rem;
}

i {
	font-size: 1.4em;
}

button {
	font-family: var(--font-As);
	font-weight: 600;
	font-size: 1.7rem;
	cursor: pointer;
}

.disable {
	opacity: 0;
	pointer-events: none;
}

.modal-info {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--dark-opq);
	transition: opacity 300ms ease-in;
}

.modal-info-content {
	background-color: var(--light-clr);
	color: var(--dark-clr);
	text-align: center;
	width: 620px;
	overflow: hidden;
}

.modal-info-header {
	padding: 20px;
	background-color: var(--purple-clr);
	color: var(--light-clr);
}

.modal-info-header h1 {
	font-size: 2.1rem;
	font-weight: 600;
}

.form-container {
	padding: 30px;
	padding-bottom: 40px;
	font-family: var(--font-Qs);
	font-size: 1.3rem;
	font-weight: 500;
}

.form-container form {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
}

.form-control {
	width: 100%;
	position: relative;
}

.form-control label {
	display: inline-block;
	padding: 10px;
}

.form-control input {
	display: block;
	font-size: 1.2rem;
	border: 1px solid var(--light-gray);
	color: var(--dark-clr);
	width: 100%;
	height: 35px;
	padding: 1.3rem;
	border-radius: 5px;
}

.form-control i {
	position: absolute;
	top: 55px;
	border-radius: 50%;
	right: 10px;
	transition: opacity 300ms ease-in;
}

.form-control :nth-child(3) {
	color: var(--green-clr);
}

.form-control :nth-child(4) {
	color: var(--red-clr);
}

.form-control.success input {
	border: 2px solid var(--green-clr);
}

.form-control.error input {
	border: 2px solid var(--red-clr);
}

.show-error-text {
	display: block;
	padding: 2px;
	text-align: left;
	color: var(--red-clr);
}

.form-container button {
	background-color: var(--purple-clr);
	color: var(--light-clr);
	margin-top: 1.5rem;
	border: none;
	width: 100%;
	padding: 5px;
}

.form-container button:hover,
.form-container button:focus {
	background-color: #5a2d81;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;CACC,kBAAkB,EAAE,sGAAsG;CAC1H,4BAA4B;CAC5B,kBAAkB;CAClB,gBAAgB;CAChB,4DAAiF,EAAE,4DAA4D;AAChJ;;AAEA,0BAA0B;AAC1B;CACC,kBAAkB,EAAE,sGAAsG;CAC1H,4BAA4B;CAC5B,kBAAkB;CAClB,gBAAgB;CAChB,4DAA6E,EAAE,4DAA4D;AAC5I;;AAEA,8BAA8B;AAC9B;CACC,kBAAkB,EAAE,sGAAsG;CAC1H,4BAA4B;CAC5B,kBAAkB;CAClB,gBAAgB;CAChB,4DAAiF,EAAE,4DAA4D;AAChJ;;AAEA,0BAA0B;AAC1B;CACC,kBAAkB,EAAE,sGAAsG;CAC1H,4BAA4B;CAC5B,kBAAkB;CAClB,gBAAgB;CAChB,4DAA6E,EAAE,4DAA4D;AAC5I;;AAEA;;;CAGC,UAAU;CACV,SAAS;CACT,sBAAsB;AACvB;;AAEA;CACC,0CAA0C;CAC1C,qBAAqB;CACrB,oBAAoB;CACpB,qBAAqB;CACrB,qBAAqB;CACrB,oBAAoB;CACpB,mBAAmB;CACnB,iCAAiC;CACjC,oBAAoB;CACpB,sBAAsB;CACtB,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,kCAAkC;AACnC;;AAEA;;CAEC,4BAA4B;AAC7B;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,2BAA2B;CAC3B,gBAAgB;CAChB,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,UAAU;CACV,oBAAoB;AACrB;;AAEA;CACC,eAAe;CACf,UAAU;CACV,OAAO;CACP,MAAM;CACN,YAAY;CACZ,aAAa;CACb,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,iCAAiC;CACjC,iCAAiC;AAClC;;AAEA;CACC,kCAAkC;CAClC,sBAAsB;CACtB,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,mCAAmC;CACnC,uBAAuB;AACxB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,oBAAoB;CACpB,2BAA2B;CAC3B,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,aAAa;AACd;;AAEA;CACC,cAAc;CACd,iBAAiB;CACjB,mCAAmC;CACnC,sBAAsB;CACtB,WAAW;CACX,YAAY;CACZ,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,kBAAkB;CAClB,WAAW;CACX,iCAAiC;AAClC;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,cAAc;CACd,YAAY;CACZ,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,mCAAmC;CACnC,uBAAuB;CACvB,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,YAAY;AACb;;AAEA;;CAEC,yBAAyB;AAC1B","sourcesContent":["/* assistant-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Assistant 400\";\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url(\"../src/Assets/fonts/assistant-v18-latin-regular.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* assistant-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Assistant 700\";\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url(\"../src/Assets/fonts/assistant-v18-latin-700.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* quicksand-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Quicksand 400\";\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url(\"../src/Assets/fonts/quicksand-v30-latin-regular.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* quicksand-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Quicksand 700\";\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url(\"../src/Assets/fonts/quicksand-v30-latin-700.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n*,\n*::before,\n*::after {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n\t--light-blue-opq: rgba(217, 217, 252, 0.8);\n\t--light-blue: #7f7fdb;\n\t--navy-blue: #130e3d;\n\t--purple-clr: #42215f;\n\t--light-gray: #adadad;\n\t--dark-gray: #646363;\n\t--dark-clr: #141420;\n\t--dark-opq: rgba(16, 16, 53, 0.4);\n\t--light-clr: #fefefe;\n\t--green-clr: #2fbe03cb;\n\t--red-clr: #ff1a1af5;\n}\n\nbody {\n\theight: 100vh;\n\tbackground-color: var(--light-clr);\n}\n\nh1,\nh2 {\n\tfont-family: 'Assistant 700';\n}\n\nem {\n\tfont-size: 1rem;\n}\n\ni {\n\tfont-size: 1.4em;\n}\n\nbutton {\n\tfont-family: var(--font-As);\n\tfont-weight: 600;\n\tfont-size: 1.7rem;\n\tcursor: pointer;\n}\n\n.disable {\n\topacity: 0;\n\tpointer-events: none;\n}\n\n.modal-info {\n\tposition: fixed;\n\tz-index: 1;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--dark-opq);\n\ttransition: opacity 300ms ease-in;\n}\n\n.modal-info-content {\n\tbackground-color: var(--light-clr);\n\tcolor: var(--dark-clr);\n\ttext-align: center;\n\twidth: 620px;\n\toverflow: hidden;\n}\n\n.modal-info-header {\n\tpadding: 20px;\n\tbackground-color: var(--purple-clr);\n\tcolor: var(--light-clr);\n}\n\n.modal-info-header h1 {\n\tfont-size: 2.1rem;\n\tfont-weight: 600;\n}\n\n.form-container {\n\tpadding: 30px;\n\tpadding-bottom: 40px;\n\tfont-family: var(--font-Qs);\n\tfont-size: 1.3rem;\n\tfont-weight: 500;\n}\n\n.form-container form {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tflex-direction: column;\n}\n\n.form-control {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.form-control label {\n\tdisplay: inline-block;\n\tpadding: 10px;\n}\n\n.form-control input {\n\tdisplay: block;\n\tfont-size: 1.2rem;\n\tborder: 1px solid var(--light-gray);\n\tcolor: var(--dark-clr);\n\twidth: 100%;\n\theight: 35px;\n\tpadding: 1.3rem;\n\tborder-radius: 5px;\n}\n\n.form-control i {\n\tposition: absolute;\n\ttop: 55px;\n\tborder-radius: 50%;\n\tright: 10px;\n\ttransition: opacity 300ms ease-in;\n}\n\n.form-control :nth-child(3) {\n\tcolor: var(--green-clr);\n}\n\n.form-control :nth-child(4) {\n\tcolor: var(--red-clr);\n}\n\n.form-control.success input {\n\tborder: 2px solid var(--green-clr);\n}\n\n.form-control.error input {\n\tborder: 2px solid var(--red-clr);\n}\n\n.show-error-text {\n\tdisplay: block;\n\tpadding: 2px;\n\ttext-align: left;\n\tcolor: var(--red-clr);\n}\n\n.form-container button {\n\tbackground-color: var(--purple-clr);\n\tcolor: var(--light-clr);\n\tmargin-top: 1.5rem;\n\tborder: none;\n\twidth: 100%;\n\tpadding: 5px;\n}\n\n.form-container button:hover,\n.form-container button:focus {\n\tbackground-color: #5a2d81;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Components/CreateInfoModal.js":
/*!*******************************************!*\
  !*** ./src/Components/CreateInfoModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createInfoModal)
/* harmony export */ });
function createInfoModal() {
    const modalInfo = document.createElement('div')
    modalInfo.className = 'modal-info'
    modalInfo.classList.add('disable')
    modalInfo.setAttribute('id', 'modal-info')

    modalInfo.innerHTML += `
    <div class="modal-info-content">
				<div class="modal-info-header">
					<h1>Tell us what TV shows and Movies</h1>
					<h1> you love to watch!</h1>
				</div>
				<div class="form-container">
					<form action="" id="modal-info-form">
						<div class="form-control">
							<label for="first-name">First name</label>
							<input type="text" name="first-name" id="first-name" placeholder="John" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small class="show-error-text"></small>
						</div>
						<div class="form-control">
							<label for="last-name">Last name</label>
							<input type="text" name="last-name" id="last-name" placeholder="Smith" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small class="show-error-text"></small>
						</div>
						<div class="form-control">
							<label for="email">Email Address</label>
							<input type="email" name="email" id="email" placeholder="johnsmith1@email.com" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small class="show-error-text"></small>
						</div>
						<div class="form-control">
							<label for="Age">Age <em>(optional)</em></label>
							<input type="number" name="age" id="age" min="15" max="120"/>
						</div>
                        <button type="submit">Submit</button>
					</form>
				</div>
			</div>
    `
    return modalInfo
}



/***/ }),

/***/ "./src/Modules/InfoModal.js":
/*!**********************************!*\
  !*** ./src/Modules/InfoModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadModalInfo: () => (/* binding */ loadModalInfo)
/* harmony export */ });
const modalInfo = document.querySelector('#modal-info')
/**@type {HTMLInputElement} */
const firstName = document.querySelector('#first-name')
/**@type {HTMLInputElement} */
const lastName = document.querySelector('#last-name')
/**@type {HTMLInputElement} */
const email = document.querySelector('#email')
/**@type {HTMLInputElement} */
const age = document.querySelector('#age')


const loadModalInfo = () => {
    const modalInfoForm = document.querySelector('#modal-info-form')

    modalInfo.classList.remove('disable')

    modalInfoForm.addEventListener('click', (e) => {
        e.preventDefault()

        checkInputs()
    })
}

const checkInputs = () => {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()

    if (firstNameValue === '') {
        showError(firstName.parentElement, '*Please provide your first name')
    } else {
        showSuccess(firstName.parentElement)
    }

    if (lastNameValue === '') {
        showError(lastName.parentElement, '*Please provide your last name')
    } else {
        showSuccess(lastName.parentElement)
    }

    if (emailValue === '') {
        showError(email.parentElement, '*Please provide your email address')
    } else if (!isValidEmail(emailValue)) {
        showError(email.parentElement, '*Please provide a valid email address ex. (digbick69@email.com)')
    } else {
        showSuccess(email.parentElement)
    }
}

const showError = (input, message) => {
    const errorText = input.querySelector('.show-error-text')
    const successIcon = input.querySelector('.fa-circle-check')
    const errorIcon = input.querySelector('.fa-circle-xmark')

    input.clasName = 'form-control error'
    successIcon.classList.add('disable')
    errorIcon.classList.remove('disable')
    errorText.textContent = message
}

const showSuccess = (input) => {
    const successText = input.querySelector('.show-error-text')
    const successIcon = input.querySelector('.fa-circle-check')
    const errorIcon = input.querySelector('.fa-circle-xmark')
    
    successText.textContent = ''
    errorIcon.classList.add('disable')
    successIcon.classList.remove('disable')
    input.clasName = 'form-control success'
}

const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}



/***/ }),

/***/ "./src/Assets/fonts/assistant-v18-latin-700.woff2":
/*!********************************************************!*\
  !*** ./src/Assets/fonts/assistant-v18-latin-700.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da3434ca29151d4de400.woff2";

/***/ }),

/***/ "./src/Assets/fonts/assistant-v18-latin-regular.woff2":
/*!************************************************************!*\
  !*** ./src/Assets/fonts/assistant-v18-latin-regular.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d675450fe85a95c9547.woff2";

/***/ }),

/***/ "./src/Assets/fonts/quicksand-v30-latin-700.woff2":
/*!********************************************************!*\
  !*** ./src/Assets/fonts/quicksand-v30-latin-700.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81492e5c850f70b1d3cc.woff2";

/***/ }),

/***/ "./src/Assets/fonts/quicksand-v30-latin-regular.woff2":
/*!************************************************************!*\
  !*** ./src/Assets/fonts/quicksand-v30-latin-regular.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cef2e5802d843cf31dba.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_InfoModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/InfoModal.js */ "./src/Modules/InfoModal.js");
/* harmony import */ var _Components_CreateInfoModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/CreateInfoModal.js */ "./src/Components/CreateInfoModal.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




const root = document.querySelector('#root')

window.onload = () => {
    root.append((0,_Components_CreateInfoModal_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
    ;(0,_Modules_InfoModal_js__WEBPACK_IMPORTED_MODULE_0__.loadModalInfo)()
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDUTtBQUN4Qzs7QUFFdEI7O0FBRUE7QUFDQSxnQkFBZ0IsMEVBQWU7QUFDL0IsSUFBSSxxRUFBYTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL0NvbXBvbmVudHMvQ3JlYXRlSW5mb01vZGFsLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9zcmMvTW9kdWxlcy9JbmZvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvQXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC12MTgtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9Bc3NldHMvZm9udHMvYXNzaXN0YW50LXYxOC1sYXRpbi03MDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvQXNzZXRzL2ZvbnRzL3F1aWNrc2FuZC12MzAtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9Bc3NldHMvZm9udHMvcXVpY2tzYW5kLXYzMC1sYXRpbi03MDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGFzc2lzdGFudC1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuXHRmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cblx0Zm9udC1mYW1pbHk6IFwiQXNzaXN0YW50IDQwMFwiO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXG59XG5cbi8qIGFzc2lzdGFudC03MDAgLSBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xuXHRmb250LWZhbWlseTogXCJBc3Npc3RhbnQgNzAwXCI7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZjJcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cbn1cblxuLyogcXVpY2tzYW5kLXJlZ3VsYXIgLSBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xuXHRmb250LWZhbWlseTogXCJRdWlja3NhbmQgNDAwXCI7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZjJcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cbn1cblxuLyogcXVpY2tzYW5kLTcwMCAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcblx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZCA3MDBcIjtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcblx0LS1saWdodC1ibHVlLW9wcTogcmdiYSgyMTcsIDIxNywgMjUyLCAwLjgpO1xuXHQtLWxpZ2h0LWJsdWU6ICM3ZjdmZGI7XG5cdC0tbmF2eS1ibHVlOiAjMTMwZTNkO1xuXHQtLXB1cnBsZS1jbHI6ICM0MjIxNWY7XG5cdC0tbGlnaHQtZ3JheTogI2FkYWRhZDtcblx0LS1kYXJrLWdyYXk6ICM2NDYzNjM7XG5cdC0tZGFyay1jbHI6ICMxNDE0MjA7XG5cdC0tZGFyay1vcHE6IHJnYmEoMTYsIDE2LCA1MywgMC40KTtcblx0LS1saWdodC1jbHI6ICNmZWZlZmU7XG5cdC0tZ3JlZW4tY2xyOiAjMmZiZTAzY2I7XG5cdC0tcmVkLWNscjogI2ZmMWExYWY1O1xufVxuXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcbn1cblxuaDEsXG5oMiB7XG5cdGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50IDcwMCc7XG59XG5cbmVtIHtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG5pIHtcblx0Zm9udC1zaXplOiAxLjRlbTtcbn1cblxuYnV0dG9uIHtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtQXMpO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDEuN3JlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzYWJsZSB7XG5cdG9wYWNpdHk6IDA7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubW9kYWwtaW5mbyB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogMTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHR3aWR0aDogMTAwdnc7XG5cdGhlaWdodDogMTAwdmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9wcSk7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbjtcbn1cblxuLm1vZGFsLWluZm8tY29udGVudCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XG5cdGNvbG9yOiB2YXIoLS1kYXJrLWNscik7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDYyMHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtaW5mby1oZWFkZXIge1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtY2xyKTtcblx0Y29sb3I6IHZhcigtLWxpZ2h0LWNscik7XG59XG5cbi5tb2RhbC1pbmZvLWhlYWRlciBoMSB7XG5cdGZvbnQtc2l6ZTogMi4xcmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuXHRwYWRkaW5nOiAzMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtUXMpO1xuXHRmb250LXNpemU6IDEuM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRyb2wgbGFiZWwge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wgaW5wdXQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xuXHRjb2xvcjogdmFyKC0tZGFyay1jbHIpO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAzNXB4O1xuXHRwYWRkaW5nOiAxLjNyZW07XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm0tY29udHJvbCBpIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDU1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0cmlnaHQ6IDEwcHg7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbjtcbn1cblxuLmZvcm0tY29udHJvbCA6bnRoLWNoaWxkKDMpIHtcblx0Y29sb3I6IHZhcigtLWdyZWVuLWNscik7XG59XG5cbi5mb3JtLWNvbnRyb2wgOm50aC1jaGlsZCg0KSB7XG5cdGNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcbn1cblxuLmZvcm0tY29udHJvbC5zdWNjZXNzIGlucHV0IHtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4tY2xyKTtcbn1cblxuLmZvcm0tY29udHJvbC5lcnJvciBpbnB1dCB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJlZC1jbHIpO1xufVxuXG4uc2hvdy1lcnJvci10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDJweDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Y29sb3I6IHZhcigtLXJlZC1jbHIpO1xufVxuXG4uZm9ybS1jb250YWluZXIgYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWNscik7XG5cdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xuXHRtYXJnaW4tdG9wOiAxLjVyZW07XG5cdGJvcmRlcjogbm9uZTtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDVweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3Zlcixcbi5mb3JtLWNvbnRhaW5lciBidXR0b246Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWEyZDgxO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4QkFBOEI7QUFDOUI7Q0FDQyxrQkFBa0IsRUFBRSxzR0FBc0c7Q0FDMUgsNEJBQTRCO0NBQzVCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsNERBQWlGLEVBQUUsNERBQTREO0FBQ2hKOztBQUVBLDBCQUEwQjtBQUMxQjtDQUNDLGtCQUFrQixFQUFFLHNHQUFzRztDQUMxSCw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw0REFBNkUsRUFBRSw0REFBNEQ7QUFDNUk7O0FBRUEsOEJBQThCO0FBQzlCO0NBQ0Msa0JBQWtCLEVBQUUsc0dBQXNHO0NBQzFILDRCQUE0QjtDQUM1QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLDREQUFpRixFQUFFLDREQUE0RDtBQUNoSjs7QUFFQSwwQkFBMEI7QUFDMUI7Q0FDQyxrQkFBa0IsRUFBRSxzR0FBc0c7Q0FDMUgsNEJBQTRCO0NBQzVCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsNERBQTZFLEVBQUUsNERBQTREO0FBQzVJOztBQUVBOzs7Q0FHQyxVQUFVO0NBQ1YsU0FBUztDQUNULHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0NBQWtDO0FBQ25DOztBQUVBOztDQUVDLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixVQUFVO0NBQ1YsT0FBTztDQUNQLE1BQU07Q0FDTixZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1DQUFtQztDQUNuQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQiwyQkFBMkI7Q0FDM0IsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLG1DQUFtQztDQUNuQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBOztDQUVDLHlCQUF5QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBhc3Npc3RhbnQtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBc3Npc3RhbnQgNDAwXFxcIjtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRzcmM6IHVybChcXFwiLi4vc3JjL0Fzc2V0cy9mb250cy9hc3Npc3RhbnQtdjE4LWxhdGluLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG59XFxuXFxuLyogYXNzaXN0YW50LTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBc3Npc3RhbnQgNzAwXFxcIjtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRzcmM6IHVybChcXFwiLi4vc3JjL0Fzc2V0cy9mb250cy9hc3Npc3RhbnQtdjE4LWxhdGluLTcwMC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xcbn1cXG5cXG4vKiBxdWlja3NhbmQtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmQgNDAwXFxcIjtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRzcmM6IHVybChcXFwiLi4vc3JjL0Fzc2V0cy9mb250cy9xdWlja3NhbmQtdjMwLWxhdGluLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG59XFxuXFxuLyogcXVpY2tzYW5kLTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmQgNzAwXFxcIjtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRzcmM6IHVybChcXFwiLi4vc3JjL0Fzc2V0cy9mb250cy9xdWlja3NhbmQtdjMwLWxhdGluLTcwMC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tbGlnaHQtYmx1ZS1vcHE6IHJnYmEoMjE3LCAyMTcsIDI1MiwgMC44KTtcXG5cXHQtLWxpZ2h0LWJsdWU6ICM3ZjdmZGI7XFxuXFx0LS1uYXZ5LWJsdWU6ICMxMzBlM2Q7XFxuXFx0LS1wdXJwbGUtY2xyOiAjNDIyMTVmO1xcblxcdC0tbGlnaHQtZ3JheTogI2FkYWRhZDtcXG5cXHQtLWRhcmstZ3JheTogIzY0NjM2MztcXG5cXHQtLWRhcmstY2xyOiAjMTQxNDIwO1xcblxcdC0tZGFyay1vcHE6IHJnYmEoMTYsIDE2LCA1MywgMC40KTtcXG5cXHQtLWxpZ2h0LWNscjogI2ZlZmVmZTtcXG5cXHQtLWdyZWVuLWNscjogIzJmYmUwM2NiO1xcblxcdC0tcmVkLWNscjogI2ZmMWExYWY1O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG5cXHRmb250LWZhbWlseTogJ0Fzc2lzdGFudCA3MDAnO1xcbn1cXG5cXG5lbSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pIHtcXG5cXHRmb250LXNpemU6IDEuNGVtO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LUFzKTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc2l6ZTogMS43cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRpc2FibGUge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1pbmZvIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcHEpO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLm1vZGFsLWluZm8tY29udGVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay1jbHIpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNjIwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1vZGFsLWluZm8taGVhZGVyIHtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1jbHIpO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbn1cXG5cXG4ubW9kYWwtaW5mby1oZWFkZXIgaDEge1xcblxcdGZvbnQtc2l6ZTogMi4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuXFx0cGFkZGluZzogMzBweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1Rcyk7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIGxhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCBpbnB1dCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstY2xyKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0cGFkZGluZzogMS4zcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCBpIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1NXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW47XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgOm50aC1jaGlsZCgzKSB7XFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLWNscik7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgOm50aC1jaGlsZCg0KSB7XFxuXFx0Y29sb3I6IHZhcigtLXJlZC1jbHIpO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sLnN1Y2Nlc3MgaW5wdXQge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuLWNscik7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wuZXJyb3IgaW5wdXQge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJlZC1jbHIpO1xcbn1cXG5cXG4uc2hvdy1lcnJvci10ZXh0IHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRwYWRkaW5nOiAycHg7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRjb2xvcjogdmFyKC0tcmVkLWNscik7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBidXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1jbHIpO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgYnV0dG9uOmhvdmVyLFxcbi5mb3JtLWNvbnRhaW5lciBidXR0b246Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1YTJkODE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbmZvTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbEluZm8uY2xhc3NOYW1lID0gJ21vZGFsLWluZm8nXG4gICAgbW9kYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKVxuICAgIG1vZGFsSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWluZm8nKVxuXG4gICAgbW9kYWxJbmZvLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWluZm8tY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaW5mby1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDE+VGVsbCB1cyB3aGF0IFRWIHNob3dzIGFuZCBNb3ZpZXM8L2gxPlxuXHRcdFx0XHRcdDxoMT4geW91IGxvdmUgdG8gd2F0Y2ghPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIlwiIGlkPVwibW9kYWwtaW5mby1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJmaXJzdC1uYW1lXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdC1uYW1lXCIgaWQ9XCJmaXJzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJKb2huXCIgcmVxdWlyZWQvPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLWNoZWNrIGRpc2FibGVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGlzYWJsZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzPVwic2hvdy1lcnJvci10ZXh0XCI+PC9zbWFsbD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibGFzdC1uYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3QtbmFtZVwiIGlkPVwibGFzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJTbWl0aFwiIHJlcXVpcmVkLz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBkaXNhYmxlXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGRpc2FibGVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzcz1cInNob3ctZXJyb3ItdGV4dFwiPjwvc21hbGw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJqb2huc21pdGgxQGVtYWlsLmNvbVwiIHJlcXVpcmVkLz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBkaXNhYmxlXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGRpc2FibGVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzcz1cInNob3ctZXJyb3ItdGV4dFwiPjwvc21hbGw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIkFnZVwiPkFnZSA8ZW0+KG9wdGlvbmFsKTwvZW0+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYWdlXCIgaWQ9XCJhZ2VcIiBtaW49XCIxNVwiIG1heD1cIjEyMFwiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuICAgIGBcbiAgICByZXR1cm4gbW9kYWxJbmZvXG59XG5cbiIsImNvbnN0IG1vZGFsSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbmZvJylcbi8qKkB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqL1xuY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0LW5hbWUnKVxuLyoqQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovXG5jb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0LW5hbWUnKVxuLyoqQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpXG4vKipAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbmNvbnN0IGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZ2UnKVxuXG5cbmNvbnN0IGxvYWRNb2RhbEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxJbmZvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbmZvLWZvcm0nKVxuXG4gICAgbW9kYWxJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKVxuXG4gICAgbW9kYWxJbmZvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNoZWNrSW5wdXRzKClcbiAgICB9KVxufVxuXG5jb25zdCBjaGVja0lucHV0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmaXJzdE5hbWVWYWx1ZSA9IGZpcnN0TmFtZS52YWx1ZS50cmltKClcbiAgICBjb25zdCBsYXN0TmFtZVZhbHVlID0gbGFzdE5hbWUudmFsdWUudHJpbSgpXG4gICAgY29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKVxuXG4gICAgaWYgKGZpcnN0TmFtZVZhbHVlID09PSAnJykge1xuICAgICAgICBzaG93RXJyb3IoZmlyc3ROYW1lLnBhcmVudEVsZW1lbnQsICcqUGxlYXNlIHByb3ZpZGUgeW91ciBmaXJzdCBuYW1lJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U3VjY2VzcyhmaXJzdE5hbWUucGFyZW50RWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAobGFzdE5hbWVWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgc2hvd0Vycm9yKGxhc3ROYW1lLnBhcmVudEVsZW1lbnQsICcqUGxlYXNlIHByb3ZpZGUgeW91ciBsYXN0IG5hbWUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTdWNjZXNzKGxhc3ROYW1lLnBhcmVudEVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHNob3dFcnJvcihlbWFpbC5wYXJlbnRFbGVtZW50LCAnKlBsZWFzZSBwcm92aWRlIHlvdXIgZW1haWwgYWRkcmVzcycpXG4gICAgfSBlbHNlIGlmICghaXNWYWxpZEVtYWlsKGVtYWlsVmFsdWUpKSB7XG4gICAgICAgIHNob3dFcnJvcihlbWFpbC5wYXJlbnRFbGVtZW50LCAnKlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyBleC4gKGRpZ2JpY2s2OUBlbWFpbC5jb20pJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U3VjY2VzcyhlbWFpbC5wYXJlbnRFbGVtZW50KVxuICAgIH1cbn1cblxuY29uc3Qgc2hvd0Vycm9yID0gKGlucHV0LCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgZXJyb3JUZXh0ID0gaW5wdXQucXVlcnlTZWxlY3RvcignLnNob3ctZXJyb3ItdGV4dCcpXG4gICAgY29uc3Qgc3VjY2Vzc0ljb24gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCcuZmEtY2lyY2xlLWNoZWNrJylcbiAgICBjb25zdCBlcnJvckljb24gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCcuZmEtY2lyY2xlLXhtYXJrJylcblxuICAgIGlucHV0LmNsYXNOYW1lID0gJ2Zvcm0tY29udHJvbCBlcnJvcidcbiAgICBzdWNjZXNzSWNvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJylcbiAgICBlcnJvckljb24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpXG4gICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZVxufVxuXG5jb25zdCBzaG93U3VjY2VzcyA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3NUZXh0ID0gaW5wdXQucXVlcnlTZWxlY3RvcignLnNob3ctZXJyb3ItdGV4dCcpXG4gICAgY29uc3Qgc3VjY2Vzc0ljb24gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCcuZmEtY2lyY2xlLWNoZWNrJylcbiAgICBjb25zdCBlcnJvckljb24gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCcuZmEtY2lyY2xlLXhtYXJrJylcbiAgICBcbiAgICBzdWNjZXNzVGV4dC50ZXh0Q29udGVudCA9ICcnXG4gICAgZXJyb3JJY29uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKVxuICAgIHN1Y2Nlc3NJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKVxuICAgIGlucHV0LmNsYXNOYW1lID0gJ2Zvcm0tY29udHJvbCBzdWNjZXNzJ1xufVxuXG5jb25zdCBpc1ZhbGlkRW1haWwgPSAoZW1haWwpID0+IHtcbiAgICByZXR1cm4gL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KGVtYWlsKVxufVxuXG5leHBvcnQgeyBsb2FkTW9kYWxJbmZvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRNb2RhbEluZm8gfSBmcm9tIFwiLi9Nb2R1bGVzL0luZm9Nb2RhbC5qc1wiXG5pbXBvcnQgY3JlYXRlSW5mb01vZGFsIGZyb20gXCIuL0NvbXBvbmVudHMvQ3JlYXRlSW5mb01vZGFsLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgcm9vdC5hcHBlbmQoY3JlYXRlSW5mb01vZGFsKCkpXG4gICAgbG9hZE1vZGFsSW5mbygpXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==