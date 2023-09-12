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
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})
		format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
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
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___})
		format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
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
	--light-purple: #cda4f1;
	--lighter-purple: #936cb6;
	--purple-clr: #532e74;
	--light-gray: #adadad;
	--dark-gray: #282a32;
	--dark-clr: #141420;
	--dark-opq: rgba(22, 12, 27, 0.8);
	--light-clr: #fefefe;
	--green-clr: #2fbe03cb;
	--red-clr: #ff1a1af5;
}

body {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(160deg, var(--light-purple), var(--lighter-purple), var(--purple-clr));
}

h1,
h2 {
	font-family: "Assistant 700";
}

p {
	font-family: "Quicksand 400";
}

small {
	font-size: 1.2rem;
	font-family: "Quicksand 400";
}

em {
	font-size: 1rem;
}

i {
	font-size: 1.4em;
}

li {
	list-style-type: none;
}

a {
	color: var(--light-clr);
	text-decoration: none;
}

button {
	font-family: "Assistant 700";
	font-weight: 600;
	font-size: 1.7rem;
	cursor: pointer;
}

input::placeholder {
	color: var(--dark-clr);
}

.disable {
	opacity: 0;
	pointer-events: none;
}

/*************************/
/** Info Modal Styling **/
/************************/

.overlay {
	z-index: 10;
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--dark-opq);
	transition: opacity 300ms ease-in-out;
}

.modal-info-content {
	background-color: var(--light-clr);
	color: var(--dark-gray);
	font-weight: bold;
	text-align: center;
	width: 620px;
	max-width: 100%;
	overflow: auto;
}

.modal-info-header {
	padding: 20px;
	background-color: var(--purple-clr);
	color: var(--light-clr);
}

.modal-info-header h1 {
	font-size: 1.9rem;
	font-weight: 600;
}

.form-container {
	padding: 30px;
	padding-bottom: 40px;
	font-family: "Quicksand 400";
	font-size: 1.45rem;
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
	font-family: "Quicksand 400";
	font-weight: bold;
	border: none;
	background-color: var(--light-gray);
	color: var(--dark-gray);
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

.survey-btn {
	background-color: var(--purple-clr);
	color: var(--light-clr);
	margin-top: 1.5rem;
	border: none;
	width: 100%;
	padding: 5px;
	transition: background-color 150ms ease-in-out;
}

.survey-btn:hover,
.survey-btn:focus {
	background-color: #6b318d;
}

/***************************/
/** Survey Modal Styling **/
/**************************/

.survey-one-container {
	background-color: var(--light-clr);
	color: var(--dark-clr);
	text-align: center;
	width: 650px;
	max-width: 100%;
	padding-bottom: 25px;
	overflow: auto;
}

.survey-header {
	height: 100px;
	background-color: var(--purple-clr);
	color: var(--light-clr);
}

.survey-one-container h1,
.survey-two-container h1 {
	font-size: 1.6rem;
	margin-block: 10px;
}

.survey-one-container small,
.survey-two-container small {
	padding-left: 40px;
}

.survey-form-control {
	padding-block: 5px;
	padding-inline: 35px;
	display:  flex;
	justify-content: space-between;
}

.survey-form-control p {
	font-size: 1.3rem;
}

.survey-one-container button {
	width: 50%;
}

/*******************************/
/** Survey Two Modal Styling **/
/*****************************/

.survey-two-container {
	background-color: var(--light-clr);
	color: var(--dark-clr);
	text-align: center;
	width: 600px;
	max-width: 100%;
	padding-bottom: 25px;
	overflow: auto;
}

.survey-two-container input[type="text"] {
	width: 100%;
	padding: 8px;
	padding-left: 20px;
	color: var(--navy-blue);
	font-size: 1rem;
	border: 1px solid var(--purple-clr);
}

.survey-two-container button {
	width: 50%;
	padding: 8px;
}

/********************************/
/** Survey Three Modal Styling **/
/*******************************/

.survey-three-modal {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--dark-opq);
	transition: opacity 300ms linear;
}

.survey-three-container {
	background-color: var(--light-clr);
	color: var(--dark-clr);
	text-align: center;
	width: 600px;
	max-width: 100%;
	padding-bottom: 25px;
	overflow: auto;
}

.survey-three-container .survey-header {
	display: flex;
	align-items: center;
	justify-content: center;
}

.survey-three-container form {
	padding: 30px;
}

.survey-three-container h2 {
	margin-bottom: 1rem;
}

.survey-three-container textarea {
	font-size: 1.1rem;
	font-family: 'Assistant 400';
	color:  var(--dark-clr);
	padding-block: .5rem;
	padding-inline: 1.1rem;
	height: 150px;
	width: 100%;
}

/********************************/
/**      Web Page Styling      **/
/*******************************/

.web-content-container {
	width: 900px;
	height: 600px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	background-color: var(--dark-gray);
	color: var(--light-clr);
	border-radius: 5px;
	overflow-x: hidden;
	position: relative;
}

.web-content-container .header {
	width: 100%;
	min-height: 130px;
	display: flex;
	padding-block: 1rem;
	padding-inline: 2.5rem;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid var(--light-clr);
}

.web-content-container .user-logIn {
	height: 95px;
	width: 95px;
	padding: .3rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: .3rem;
	border: 2px solid var(--light-clr);
	border-radius:  50%;
	transition: transform 150ms linear;
}

.user-logIn p {
	font-size: 1.1rem;
	font-weight: bold;
}

.web-content-container .user-logIn:hover {
	transform: scale(1.02);
}

.navbar ul {
	display: flex;
	align-items: center;
}

.navbar li {
	padding: 1rem;
}

.navbar a {
	cursor: pointer;
	font-size: 1.1rem;
	font-weight: bold;
}

.navbar a:hover {
	color: var(--light-purple);
}

.selected {
	color: var(--light-purple);
}

.content-container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.button-right,
.button-left {
	z-index: 1;
	background-color: transparent;
	border: none;
	color: var(--light-clr);
	position: absolute;
}

.button-left {
	top: 60%;
	left: 10px;
}

.button-right {
	top: 60%;
	right: 10px;
}

.button-right:hover,
.button-left:hover {
	color: var(--purple-clr);
}

.movies-container {
	height: 100%;
	padding-inline: 1rem;
	display: flex;
	gap: .5rem;
	align-items: center;
	transition: transform 350ms linear;
}

.content-control {
	height: 300px;
	width: 200px;
	text-align: center;
}

.content-control .placeholder-movie {
	cursor: pointer;
	height: 90%;
	padding: 20px;
	background: linear-gradient(340deg, var(--light-gray), var(--light-clr));
	margin-bottom: .5rem;
}

.placeholder-movie .placeholder-img {
	background-color: var(--dark-opq);
	height: 200px;
	width: 150px;
}

.content-nav {
	position: absolute;
	display: flex;
	width: 200px;
	justify-content: space-evenly;
	top: 90%;	
	left: 38%;
}

.content-nav button {
	border: none;
	border-radius: 5px;
	height: 4px;
	width: 55px;
}

.content-nav button:hover {
	background-color: var(--lighter-purple);
}

/* The switch - the box around the slider */
.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.current-slide {
	background-color: var(--lighter-purple);
}

[data-slides='0'] {
	transform: translateX(0%);
}

[data-slides='1'] {
	transform: translateX(-50%);
}

[data-slides='2'] {
	transform: translateX(-100%);
}

/* The slider */

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--light-gray);
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: var(--light-clr);
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: var(--purple-clr);
}

input:focus + .slider {
	box-shadow: 0 0 1px var(--purple-clr);
}

input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* assistant-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Assistant 400\";\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url(\"../src/Assets/fonts/assistant-v18-latin-regular.woff2\")\n\t\tformat(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* assistant-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Assistant 700\";\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url(\"../src/Assets/fonts/assistant-v18-latin-700.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* quicksand-regular - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Quicksand 400\";\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url(\"../src/Assets/fonts/quicksand-v30-latin-regular.woff2\")\n\t\tformat(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* quicksand-700 - latin */\n@font-face {\n\tfont-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n\tfont-family: \"Quicksand 700\";\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: url(\"../src/Assets/fonts/quicksand-v30-latin-700.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n*,\n*::before,\n*::after {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n\t--light-blue-opq: rgba(217, 217, 252, 0.8);\n\t--light-blue: #7f7fdb;\n\t--navy-blue: #130e3d;\n\t--light-purple: #cda4f1;\n\t--lighter-purple: #936cb6;\n\t--purple-clr: #532e74;\n\t--light-gray: #adadad;\n\t--dark-gray: #282a32;\n\t--dark-clr: #141420;\n\t--dark-opq: rgba(22, 12, 27, 0.8);\n\t--light-clr: #fefefe;\n\t--green-clr: #2fbe03cb;\n\t--red-clr: #ff1a1af5;\n}\n\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground: linear-gradient(160deg, var(--light-purple), var(--lighter-purple), var(--purple-clr));\n}\n\nh1,\nh2 {\n\tfont-family: \"Assistant 700\";\n}\n\np {\n\tfont-family: \"Quicksand 400\";\n}\n\nsmall {\n\tfont-size: 1.2rem;\n\tfont-family: \"Quicksand 400\";\n}\n\nem {\n\tfont-size: 1rem;\n}\n\ni {\n\tfont-size: 1.4em;\n}\n\nli {\n\tlist-style-type: none;\n}\n\na {\n\tcolor: var(--light-clr);\n\ttext-decoration: none;\n}\n\nbutton {\n\tfont-family: \"Assistant 700\";\n\tfont-weight: 600;\n\tfont-size: 1.7rem;\n\tcursor: pointer;\n}\n\ninput::placeholder {\n\tcolor: var(--dark-clr);\n}\n\n.disable {\n\topacity: 0;\n\tpointer-events: none;\n}\n\n/*************************/\n/** Info Modal Styling **/\n/************************/\n\n.overlay {\n\tz-index: 10;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--dark-opq);\n\ttransition: opacity 300ms ease-in-out;\n}\n\n.modal-info-content {\n\tbackground-color: var(--light-clr);\n\tcolor: var(--dark-gray);\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 620px;\n\tmax-width: 100%;\n\toverflow: auto;\n}\n\n.modal-info-header {\n\tpadding: 20px;\n\tbackground-color: var(--purple-clr);\n\tcolor: var(--light-clr);\n}\n\n.modal-info-header h1 {\n\tfont-size: 1.9rem;\n\tfont-weight: 600;\n}\n\n.form-container {\n\tpadding: 30px;\n\tpadding-bottom: 40px;\n\tfont-family: \"Quicksand 400\";\n\tfont-size: 1.45rem;\n}\n\n.form-container form {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tflex-direction: column;\n}\n\n.form-control {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.form-control label {\n\tdisplay: inline-block;\n\tpadding: 10px;\n}\n\n.form-control input {\n\tdisplay: block;\n\tfont-size: 1.2rem;\n\tfont-family: \"Quicksand 400\";\n\tfont-weight: bold;\n\tborder: none;\n\tbackground-color: var(--light-gray);\n\tcolor: var(--dark-gray);\n\twidth: 100%;\n\theight: 35px;\n\tpadding: 1.3rem;\n\tborder-radius: 5px;\n}\n\n.form-control i {\n\tposition: absolute;\n\ttop: 55px;\n\tborder-radius: 50%;\n\tright: 10px;\n\ttransition: opacity 300ms ease-in;\n}\n\n.form-control :nth-child(3) {\n\tcolor: var(--green-clr);\n}\n\n.form-control :nth-child(4) {\n\tcolor: var(--red-clr);\n}\n\n.form-control.success input {\n\tborder: 2px solid var(--green-clr);\n}\n\n.form-control.error input {\n\tborder: 2px solid var(--red-clr);\n}\n\n.show-error-text {\n\tdisplay: block;\n\tpadding: 2px;\n\ttext-align: left;\n\tcolor: var(--red-clr);\n}\n\n.survey-btn {\n\tbackground-color: var(--purple-clr);\n\tcolor: var(--light-clr);\n\tmargin-top: 1.5rem;\n\tborder: none;\n\twidth: 100%;\n\tpadding: 5px;\n\ttransition: background-color 150ms ease-in-out;\n}\n\n.survey-btn:hover,\n.survey-btn:focus {\n\tbackground-color: #6b318d;\n}\n\n/***************************/\n/** Survey Modal Styling **/\n/**************************/\n\n.survey-one-container {\n\tbackground-color: var(--light-clr);\n\tcolor: var(--dark-clr);\n\ttext-align: center;\n\twidth: 650px;\n\tmax-width: 100%;\n\tpadding-bottom: 25px;\n\toverflow: auto;\n}\n\n.survey-header {\n\theight: 100px;\n\tbackground-color: var(--purple-clr);\n\tcolor: var(--light-clr);\n}\n\n.survey-one-container h1,\n.survey-two-container h1 {\n\tfont-size: 1.6rem;\n\tmargin-block: 10px;\n}\n\n.survey-one-container small,\n.survey-two-container small {\n\tpadding-left: 40px;\n}\n\n.survey-form-control {\n\tpadding-block: 5px;\n\tpadding-inline: 35px;\n\tdisplay:  flex;\n\tjustify-content: space-between;\n}\n\n.survey-form-control p {\n\tfont-size: 1.3rem;\n}\n\n.survey-one-container button {\n\twidth: 50%;\n}\n\n/*******************************/\n/** Survey Two Modal Styling **/\n/*****************************/\n\n.survey-two-container {\n\tbackground-color: var(--light-clr);\n\tcolor: var(--dark-clr);\n\ttext-align: center;\n\twidth: 600px;\n\tmax-width: 100%;\n\tpadding-bottom: 25px;\n\toverflow: auto;\n}\n\n.survey-two-container input[type=\"text\"] {\n\twidth: 100%;\n\tpadding: 8px;\n\tpadding-left: 20px;\n\tcolor: var(--navy-blue);\n\tfont-size: 1rem;\n\tborder: 1px solid var(--purple-clr);\n}\n\n.survey-two-container button {\n\twidth: 50%;\n\tpadding: 8px;\n}\n\n/********************************/\n/** Survey Three Modal Styling **/\n/*******************************/\n\n.survey-three-modal {\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--dark-opq);\n\ttransition: opacity 300ms linear;\n}\n\n.survey-three-container {\n\tbackground-color: var(--light-clr);\n\tcolor: var(--dark-clr);\n\ttext-align: center;\n\twidth: 600px;\n\tmax-width: 100%;\n\tpadding-bottom: 25px;\n\toverflow: auto;\n}\n\n.survey-three-container .survey-header {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.survey-three-container form {\n\tpadding: 30px;\n}\n\n.survey-three-container h2 {\n\tmargin-bottom: 1rem;\n}\n\n.survey-three-container textarea {\n\tfont-size: 1.1rem;\n\tfont-family: 'Assistant 400';\n\tcolor:  var(--dark-clr);\n\tpadding-block: .5rem;\n\tpadding-inline: 1.1rem;\n\theight: 150px;\n\twidth: 100%;\n}\n\n/********************************/\n/**      Web Page Styling      **/\n/*******************************/\n\n.web-content-container {\n\twidth: 900px;\n\theight: 600px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tflex-direction: column;\n\tbackground-color: var(--dark-gray);\n\tcolor: var(--light-clr);\n\tborder-radius: 5px;\n\toverflow-x: hidden;\n\tposition: relative;\n}\n\n.web-content-container .header {\n\twidth: 100%;\n\tmin-height: 130px;\n\tdisplay: flex;\n\tpadding-block: 1rem;\n\tpadding-inline: 2.5rem;\n\talign-items: center;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--light-clr);\n}\n\n.web-content-container .user-logIn {\n\theight: 95px;\n\twidth: 95px;\n\tpadding: .3rem;\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: .3rem;\n\tborder: 2px solid var(--light-clr);\n\tborder-radius:  50%;\n\ttransition: transform 150ms linear;\n}\n\n.user-logIn p {\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n.web-content-container .user-logIn:hover {\n\ttransform: scale(1.02);\n}\n\n.navbar ul {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.navbar li {\n\tpadding: 1rem;\n}\n\n.navbar a {\n\tcursor: pointer;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n}\n\n.navbar a:hover {\n\tcolor: var(--light-purple);\n}\n\n.selected {\n\tcolor: var(--light-purple);\n}\n\n.content-container {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.button-right,\n.button-left {\n\tz-index: 1;\n\tbackground-color: transparent;\n\tborder: none;\n\tcolor: var(--light-clr);\n\tposition: absolute;\n}\n\n.button-left {\n\ttop: 60%;\n\tleft: 10px;\n}\n\n.button-right {\n\ttop: 60%;\n\tright: 10px;\n}\n\n.button-right:hover,\n.button-left:hover {\n\tcolor: var(--purple-clr);\n}\n\n.movies-container {\n\theight: 100%;\n\tpadding-inline: 1rem;\n\tdisplay: flex;\n\tgap: .5rem;\n\talign-items: center;\n\ttransition: transform 350ms linear;\n}\n\n.content-control {\n\theight: 300px;\n\twidth: 200px;\n\ttext-align: center;\n}\n\n.content-control .placeholder-movie {\n\tcursor: pointer;\n\theight: 90%;\n\tpadding: 20px;\n\tbackground: linear-gradient(340deg, var(--light-gray), var(--light-clr));\n\tmargin-bottom: .5rem;\n}\n\n.placeholder-movie .placeholder-img {\n\tbackground-color: var(--dark-opq);\n\theight: 200px;\n\twidth: 150px;\n}\n\n.content-nav {\n\tposition: absolute;\n\tdisplay: flex;\n\twidth: 200px;\n\tjustify-content: space-evenly;\n\ttop: 90%;\t\n\tleft: 38%;\n}\n\n.content-nav button {\n\tborder: none;\n\tborder-radius: 5px;\n\theight: 4px;\n\twidth: 55px;\n}\n\n.content-nav button:hover {\n\tbackground-color: var(--lighter-purple);\n}\n\n/* The switch - the box around the slider */\n.switch {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 60px;\n\theight: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n\n.current-slide {\n\tbackground-color: var(--lighter-purple);\n}\n\n[data-slides='0'] {\n\ttransform: translateX(0%);\n}\n\n[data-slides='1'] {\n\ttransform: translateX(-50%);\n}\n\n[data-slides='2'] {\n\ttransform: translateX(-100%);\n}\n\n/* The slider */\n\n.slider {\n\tposition: absolute;\n\tcursor: pointer;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--light-gray);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\n.slider:before {\n\tposition: absolute;\n\tcontent: \"\";\n\theight: 26px;\n\twidth: 26px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: var(--light-clr);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\ninput:checked + .slider {\n\tbackground-color: var(--purple-clr);\n}\n\ninput:focus + .slider {\n\tbox-shadow: 0 0 1px var(--purple-clr);\n}\n\ninput:checked + .slider:before {\n\t-webkit-transform: translateX(26px);\n\t-ms-transform: translateX(26px);\n\ttransform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n\tborder-radius: 34px;\n}\n\n.slider.round:before {\n\tborder-radius: 50%;\n}\n"],"sourceRoot":""}]);
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
	modalInfo.classList.add('overlay')
    modalInfo.setAttribute('id', 'modal-info')

    modalInfo.innerHTML += `
    <div class="modal-info-content container-style">
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
							<small role="alert" class="show-error-text" aria-hidden="true"></small>
						</div>
						<div class="form-control">
							<label for="last-name">Last name</label>
							<input type="text" name="last-name" id="last-name" placeholder="Smith" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small role="alert" class="show-error-text" aria-hidden="true"></small>
						</div>
						<div class="form-control">
							<label for="email">Email Address</label>
							<input type="email" name="email" id="email" placeholder="johnsmith1@email.com" required/>
							<i class="fa-regular fa-circle-check disable"></i>
							<i class="fa-regular fa-circle-xmark disable"></i>
							<small role="alert" class="show-error-text" aria-hidden="true"></small>
						</div>
						<div class="form-control">
							<label for="Age">Age <em>(optional)</em></label>
							<input type="number" name="age" id="age" min="15" max="120" placeholder='15'/>
						</div>
                        <button type="submit" class="survey-btn">Submit</button>
					</form>
				</div>
			</div>
    `
    return modalInfo
}



/***/ }),

/***/ "./src/Components/CreateSurveyOneModal.js":
/*!************************************************!*\
  !*** ./src/Components/CreateSurveyOneModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSurveyOneModal)
/* harmony export */ });
function createSurveyOneModal() {
	const surveyModal = document.createElement("div");
	surveyModal.id = "survey-one-modal";
	surveyModal.className = "survey-one-modal disable";
    surveyModal.classList.add('overlay')

	surveyModal.innerHTML += `
        <div class="survey-one-container container-style">
            <form  action="" id="modal-survey-form">
                <div class="survey-header"></div>

                <div class="question-one" id="question-one">
                    <h1>How did you learn about us?</h1>
                    <div class="survey-form-control">
                        <p>Social Media (Facebook,Twitter,Instagram, etc.)</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>Youtube, Twitch, other sites</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>Friends, Colleagues, Family</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>TV ads</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="survey-form-control">
                        <p>Others</p>
                        <label class="switch">
                            <input type="radio" name="question-one" data-question-one>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <small role="alert" class="show-error-text" aria-hidden="true"></small>
                </div>

                <div class="question-two" id="question-two">
                    <h1>How often do you watch movies?</h1>
                <div class="survey-form-control">
                    <p>Less than once a month</p>
                    <label class="switch">
                        <input type="radio" name="question-two" data-question-two="1">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Once or twice a month</p>
                    <label class="switch">
                        <input type="radio" name="question-two" data-question-two="2">
                        <span class="slider round"></span>
                    </label>
                    </div>
                    <div class="survey-form-control">
                    <p>Three to four times a month</p>
                    <label class="switch">
                        <input type="radio" name="question-two" data-question-two="3">
                        <span class="slider round"></span>
                    </label>
                    </div>
                    <div class="survey-form-control">
                    <p>More than four times a month</p>
                        <label class="switch">
                            <input type="radio" name="question-two" data-question-two"4">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <small role="alert" class="show-error-text" aria-hidden="true"></small>
                </div>

                <button type="submit" class="survey-btn" id="survey-one-btn">Submit</button>
            </form>
        </div>
    `;

	return surveyModal;
}




/***/ }),

/***/ "./src/Components/CreateSurveyThree.js":
/*!*********************************************!*\
  !*** ./src/Components/CreateSurveyThree.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSurveyThree)
/* harmony export */ });
function createSurveyThree() {
	const surveyThreeModal = document.createElement("div");
	surveyThreeModal.id = "survey-three-modal";
	surveyThreeModal.className = "survey-three-modal disable";
    surveyThreeModal.classList.add('overlay')

	surveyThreeModal.innerHTML += `
        <div class="survey-three-container container-style">
            <div class="survey-header">
                <h1>Thank you for your patience!</h1>
            </div>
            
            <form action="" id="modal-survey-three-form">
                <h2 class="long-text">Feel free to leave suggestions and comments to help us improve thank you!</h2>
                <textarea  placeholder=" Comment Here"></textarea>
                <button type="submit" class="survey-btn" id="survey-three-btn">Submit</button>
            </form>
            
        </div>
    `;

	return surveyThreeModal;
}


/***/ }),

/***/ "./src/Components/CreateSurveyTwoModal.js":
/*!************************************************!*\
  !*** ./src/Components/CreateSurveyTwoModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSurveyTwoModal)
/* harmony export */ });
function createSurveyTwoModal() {
	const surveyTwoModal = document.createElement("div");
	surveyTwoModal.id = "survey-two-modal";
	surveyTwoModal.className = "survey-two-modal disable";
    surveyTwoModal.classList.add('overlay')

	surveyTwoModal.innerHTML += `
        <div class="survey-two-container container-style">
            <form  action="" id="modal-survey-two-form">
                <div class="survey-header"></div>

            <div class="question-three" id="question-three">
                <h1> What kind of movies and TV shows do you usually watch?</h1>
                <div class="survey-form-control">
                    <p>Action</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Horror</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Comedy</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Romance</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Drama</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Animation</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Suspense</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                    <p>Others</p>
                    <label class="switch">
                        <input type="checkbox" name="survey-three-others" data-question-three>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                        <input type="text" name="survey-three" placeholder="If others please specify">                 
                </div>
                <small role="alert" class="show-error-text" aria-hidden="true"></small>
            </div>

            <div class="question-four" id="question-four">
                <h1>Would you like recieve movie updates from us?</h1>
                <div class="survey-form-control">
                    <p>Yes</p>
                    <label class="switch">
                        <input type="radio" name="survey-four" data-question-four>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="survey-form-control">
                <p>No</p>
                    <label class="switch">
                        <input type="radio" name="survey-four" data-question-four>
                        <span class="slider round"></span>
                    </label>
                </div> 
                <small role="alert" class="show-error-text" aria-hidden="true"></small>
            </div>

                <button type="submit" class="survey-btn" id="survey-two-btn">Submit</button>
            </form>
        </div>
    `;

	return surveyTwoModal;
}


/***/ }),

/***/ "./src/Components/CreateWebPage.js":
/*!*****************************************!*\
  !*** ./src/Components/CreateWebPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWebPage)
/* harmony export */ });

function createWebPage (){
    const webContentContainer = document.createElement('div')
    webContentContainer.className = 'web-content-container'
    webContentContainer.id = 'web-content-container'

    webContentContainer.innerHTML += `

        <div class="header">
            <div class="user-logIn">
                <i class="fa-regular fa-user"></i>
                <p>Log In</p>
            </div>
            <nav class="navbar">
                <ul>
                    <li><a href="" class="selected">Popular</a></li>
                    <li><a href="">Recent</a></li>
                    <li><a href="" >Favorite</a></li>
                </ul>
            </nav>
        </div>

        <div class="content-container">

        <button class="button-left">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

            <div class="movies-container" data-slides='0'>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie One</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Two</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Three</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Four</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Five</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Six</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Seven</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Eight</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Nine</p>
                </div>
            </div>

            <button class="button-right">
                <i class="fa-solid fa-chevron-right"></i>
            </button>

            <div class="content-nav">
                <button class="content-indicator-first current-slide"></button>
                <button class="content-indicator-second"></button>
                <button class="content-indicator-third"></button>
            </div>

        </div>
    `

    return webContentContainer
}


/***/ }),

/***/ "./src/Modules/App.js":
/*!****************************!*\
  !*** ./src/Modules/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonEventListener: () => (/* binding */ buttonEventListener)
/* harmony export */ });
const buttonEventListener = () => {
	const buttonLeft = document.querySelector(".button-left");
	const buttonRight = document.querySelector(".button-right");
	/**@type {HTMLElement} */
	const slidesContainer = document.querySelector("[data-slides]");
	const firstIndicator = document.querySelector(".content-indicator-first");
	const secondIndicator = document.querySelector(".content-indicator-second");
	const thirdIndicator = document.querySelector(".content-indicator-third");
	const indicators = [firstIndicator, secondIndicator, thirdIndicator];

	buttonLeft.addEventListener("click", () => {
		const slide = parseInt(slidesContainer.dataset.slides) - 1;
		console.log(slide)

		if (slide < 0) return;

		slidesContainer.dataset.slides = `${slide}`;
		changeIndicator(slide)
	});

	buttonRight.addEventListener("click", () => {
		const slide = parseInt(slidesContainer.dataset.slides) + 1;

		if (slide > 2) return;

		slidesContainer.dataset.slides = `${slide}`;
		changeIndicator(slide)
	});

	indicators.forEach((indicator, index) => {

		indicator.addEventListener('click', () => {

			slidesContainer.dataset.slides = `${index}`
			changeIndicator(index)
		})
	})

	const changeIndicator = (slide) => {
		indicators.forEach((indicator, index) => {
			if (slide === index) {
				indicator.classList.add("current-slide");
			} else {
				indicator.classList.remove("current-slide");
			}
		});
	};

	// buttonLeft.addEventListener("click", () => {
	// 	if (slides.classList.contains("second-slide")) {
	// 		slides.classList.remove("second-slide");
	// 		slides.classList.add("first-slide");
	// 		thirdIndicator.classList.remove("current-slide");
	// 		firstIndicator.classList.remove("current-slide");
	// 		secondIndicator.classList.add("current-slide");
	// 	} else if (slides.classList.contains("first-slide")) {
	// 		slides.classList.remove("first-slide");
	// 		slides.classList.add("default-slide");
	// 		thirdIndicator.classList.remove("current-slide");
	// 		secondIndicator.classList.remove("current-slide");
	// 		firstIndicator.classList.add("current-slide");
	// 	}
	// });

	// buttonRight.addEventListener("click", (e) => {
	// 	if (slides.classList.contains("default-slide")) {
	// 		slides.classList.remove("default-slide");
	// 		slides.classList.add("first-slide");
	// 		firstIndicator.classList.remove("current-slide");
	// 		secondIndicator.classList.add("current-slide");
	// 	} else if (slides.classList.contains("first-slide")) {
	// 		slides.classList.remove("first-slide");
	// 		slides.classList.add("second-slide");
	// 		secondIndicator.classList.remove("current-slide");
	// 		thirdIndicator.classList.add("current-slide");
	// 	}
	// });

	// firstIndicator.addEventListener("click", () => {
	// 	slides.classList.remove("first-slide");
	// 	slides.classList.remove("second-slide");
	// 	slides.classList.add("default-slide");
	// 	secondIndicator.classList.remove("current-slide");
	// 	thirdIndicator.classList.remove("current-slide");
	// 	firstIndicator.classList.add("current-slide");
	// });

	// secondIndicator.addEventListener("click", () => {
	// 	slides.classList.remove("default-slide");
	// 	slides.classList.remove("second-slide");
	// 	slides.classList.add("first-slide");
	// 	thirdIndicator.classList.remove("current-slide");
	// 	firstIndicator.classList.remove("current-slide");
	// 	secondIndicator.classList.add("current-slide");
	// });

	// thirdIndicator.addEventListener("click", () => {
	// 	slides.classList.remove("first-slide");
	// 	slides.classList.remove("default-slide");
	// 	slides.classList.add("second-slide");
	// 	firstIndicator.classList.remove("current-slide");
	// 	secondIndicator.classList.remove("current-slide");
	// 	thirdIndicator.classList.add("current-slide");
	// });
};




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
/* harmony import */ var _SurveyOneModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyOneModal.js */ "./src/Modules/SurveyOneModal.js");


const loadModalInfo = () => {
	const modalInfoForm = document.querySelector("#modal-info-form");
	const modalInfo = document.querySelector("#modal-info");

	modalInfo.classList.remove("disable");

	modalInfoForm.addEventListener("submit", (e) => {
		e.preventDefault();
		checkInputs();
	});
};

const checkInputs = () => {
	const modalInfo = document.querySelector("#modal-info");
	/**@type {HTMLInputElement} */
	const firstName = document.querySelector("#first-name");
	/**@type {HTMLInputElement} */
	const lastName = document.querySelector("#last-name");
	/**@type {HTMLInputElement} */
	const email = document.querySelector("#email");

	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();

	if (firstNameValue === "") {
		showError(firstName.parentElement, "*Please provide your first name");
	} else if (checkForSpecialChars(firstNameValue)) {
		showError(
			firstName.parentElement,
			"*First name should'nt contain special characters"
		);
	} else if (checkForDigits(firstNameValue)) {
		showError(
			firstName.parentElement,
			"*First name should'nt contain numbers"
		);
	} else if (firstName.value.length < 3) {
		showError(
			firstName.parentElement,
			"*First name should be more than 3 letters"
		);
	} else {
		showSuccess(firstName.parentElement);
	}

	if (lastNameValue === "") {
		showError(lastName.parentElement, "*Please provide your last name");
	} else if (checkForSpecialChars(lastNameValue)) {
		showError(
			lastName.parentElement,
			"*Last name should'nt contain numbers"
		);
	} else if (checkForDigits(lastNameValue)) {
		showError(
			lastName.parentElement,
			"*Please provide a valid last name"
		);
	} else if (lastName.value.length < 3) {
		showError(
			lastName.parentElement,
			"*Last name should be more than 3 letters"
		);
	} else {
		showSuccess(lastName.parentElement);
	}

	if (emailValue === "") {
		showError(email.parentElement, "*Please provide your email address");
	} else if (!isValidEmail(emailValue)) {
		showError(
			email.parentElement,
			"*Please provide a valid email address ex. (digbick69@email.com)"
		);
	} else {
		showSuccess(email.parentElement);
	}

	if (
		email.parentElement.classList.contains("success") &&
		firstName.parentElement.classList.contains("success") &&
		lastName.parentElement.classList.contains("success")
	) {
		modalInfo.classList.add("disable");
		(0,_SurveyOneModal_js__WEBPACK_IMPORTED_MODULE_0__.loadSurveyOne)();
	}
};

const showError = (input, message) => {
	const errorText = input.querySelector(".show-error-text");
	const successIcon = input.querySelector(".fa-circle-check");
	const errorIcon = input.querySelector(".fa-circle-xmark");

	input.className = "form-control error";
	successIcon.classList.add("disable");
	errorIcon.classList.remove("disable");
	errorText.textContent = message;
	errorText.setAttribute("aria-hidden", "false");
};

const showSuccess = (input) => {
	const successText = input.querySelector(".show-error-text");
	const successIcon = input.querySelector(".fa-circle-check");
	const errorIcon = input.querySelector(".fa-circle-xmark");

	successText.textContent = "";
	successText.setAttribute("aria-hidden", "true");
	errorIcon.classList.add("disable");
	successIcon.classList.remove("disable");
	input.className = "form-control success";
};

const isValidEmail = (email) => {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const checkForSpecialChars = (name) => {
	return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name);
};

const checkForDigits = (name) => {
	return /\d/.test(name);
};




/***/ }),

/***/ "./src/Modules/SurveyOneModal.js":
/*!***************************************!*\
  !*** ./src/Modules/SurveyOneModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSurveyOne: () => (/* binding */ loadSurveyOne)
/* harmony export */ });
/* harmony import */ var _SurveyTwoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyTwoModal */ "./src/Modules/SurveyTwoModal.js");


_SurveyTwoModal__WEBPACK_IMPORTED_MODULE_0__.loadSurveyTwo

const loadSurveyOne = () => {
	const modalSurveyForm = document.querySelector("#modal-survey-form");
	const surveyOneModal = document.querySelector("#survey-one-modal");

	surveyOneModal.classList.remove("disable");

	modalSurveyForm.addEventListener("submit", (e) => {
		e.preventDefault();
		checkInputs();
	});
};

const checkInputs = () => {
	const surveyOneModal = document.querySelector("#survey-one-modal");
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionOneChecked = document.querySelectorAll(
		"[data-question-one]:checked"
	);
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionTwoChecked = document.querySelectorAll(
		"[data-question-two]:checked"
	);
	const showErrorOne = document.querySelector("#question-one small");
	const showErrorTwo = document.querySelector("#question-two small");

	if (questionOneChecked.length === 0) {
		showErrorOne.textContent = "*Please choose one of the answers";
		showErrorOne.setAttribute('aria-hidden', 'false');
	} else {
		showErrorOne.textContent = "";
		showErrorOne.setAttribute('aria-hidden', 'true');
	}

	if (questionTwoChecked.length === 0) {
		showErrorTwo.textContent = "*Please choose one of the answers";
		showErrorTwo.setAttribute('aria-hidden', 'false');
	} else {
		showErrorTwo.textContent = "";
		showErrorTwo.setAttribute('aria-hidden', 'true');
	}

	if (questionOneChecked.length >= 1 && questionTwoChecked.length >= 1) {
		console.log("Complete!");
		surveyOneModal.classList.add("disable");
		(0,_SurveyTwoModal__WEBPACK_IMPORTED_MODULE_0__.loadSurveyTwo)()
	}
};




/***/ }),

/***/ "./src/Modules/SurveyThreeModal.js":
/*!*****************************************!*\
  !*** ./src/Modules/SurveyThreeModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSurveyThree: () => (/* binding */ loadSurveyThree)
/* harmony export */ });
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ "./src/Modules/App.js");


const loadSurveyThree = () => {
	const surveyThreeModal = document.querySelector("#survey-three-modal");
	const  modalSurveyForm = document.querySelector("#modal-survey-three-form");

	surveyThreeModal.classList.remove("disable");

	modalSurveyForm.addEventListener("submit", (e) => {
		e.preventDefault();
        console.log('Complete!')
        surveyThreeModal.classList.add("disable");
		(0,_App_js__WEBPACK_IMPORTED_MODULE_0__.buttonEventListener)()
	});
};



/***/ }),

/***/ "./src/Modules/SurveyTwoModal.js":
/*!***************************************!*\
  !*** ./src/Modules/SurveyTwoModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSurveyTwo: () => (/* binding */ loadSurveyTwo)
/* harmony export */ });
/* harmony import */ var _SurveyThreeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyThreeModal */ "./src/Modules/SurveyThreeModal.js");


const loadSurveyTwo = () => {
	const modalSurveyForm = document.querySelector("#modal-survey-two-form");
	const surveyTwoModal = document.querySelector("#survey-two-modal");

	surveyTwoModal.classList.remove("disable");

	modalSurveyForm.addEventListener("submit", (e) => {
		e.preventDefault();
		checkInputs();
	});
};

const checkInputs = () => {

	const surveyTwoModal = document.querySelector("#survey-two-modal");
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionThreeChecked = document.querySelectorAll(
		"[data-question-three]:checked"
	);
	/**@type {NodeListOf<HTMLInputElement>} */
	const questionFourChecked = document.querySelectorAll(
		"[data-question-four]:checked"
	);
	const showErrorOne = document.querySelector("#question-three small");
	const showErrorTwo = document.querySelector("#question-four small");

	if (questionThreeChecked.length === 0) {
		showErrorOne.textContent = "*Please choose one of the answers or specify your favorite genre";
        showErrorOne.setAttribute('aria-hidden', 'false');
	} else {
		showErrorOne.textContent = "";
        showErrorOne.setAttribute('aria-hidden', 'true');
	}

	if (questionFourChecked.length === 0) {
		showErrorTwo.textContent = "*Please choose one of the answers";
        showErrorTwo.setAttribute('aria-hidden', 'false');
	} else {
		showErrorTwo.textContent = "";
        showErrorTwo.setAttribute('aria-hidden', 'true');
	}

	if (questionThreeChecked.length >= 1 && questionFourChecked.length >= 1) {
		console.log("Complete!");
		surveyTwoModal.classList.add("disable");
		(0,_SurveyThreeModal__WEBPACK_IMPORTED_MODULE_0__.loadSurveyThree)()
	}
};




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
/* harmony import */ var _Components_CreateWebPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/CreateWebPage.js */ "./src/Components/CreateWebPage.js");
/* harmony import */ var _Components_CreateInfoModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/CreateInfoModal.js */ "./src/Components/CreateInfoModal.js");
/* harmony import */ var _Components_CreateSurveyOneModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/CreateSurveyOneModal.js */ "./src/Components/CreateSurveyOneModal.js");
/* harmony import */ var _Components_CreateSurveyTwoModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/CreateSurveyTwoModal.js */ "./src/Components/CreateSurveyTwoModal.js");
/* harmony import */ var _Components_CreateSurveyThree_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/CreateSurveyThree.js */ "./src/Components/CreateSurveyThree.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");








const root = document.querySelector('#root')

window.onload = () => {
    root.appendChild((0,_Components_CreateWebPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
    root.appendChild((0,_Components_CreateInfoModal_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
    root.appendChild((0,_Components_CreateSurveyOneModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])())
    root.appendChild((0,_Components_CreateSurveyTwoModal_js__WEBPACK_IMPORTED_MODULE_4__["default"])())
    root.appendChild((0,_Components_CreateSurveyThree_js__WEBPACK_IMPORTED_MODULE_5__["default"])())
    ;(0,_Modules_InfoModal_js__WEBPACK_IMPORTED_MODULE_0__.loadModalInfo)()
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtMQUF3RTtBQUNwSCw0Q0FBNEMsMEtBQW9FO0FBQ2hILDRDQUE0QyxrTEFBd0U7QUFDcEgsNENBQTRDLDBLQUFvRTtBQUNoSCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DLG1CQUFtQjtBQUNsRTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DLG1CQUFtQjtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLE1BQU0sd0JBQXdCLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixhQUFhLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUJBQW1CLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixhQUFhLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxh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eUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25HZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0NBQXNDLE1BQU07QUFDNUM7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUEsc0NBQXNDLE1BQU07QUFDNUM7QUFDQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7OztBQzFHcUI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQSxXQUFXLGtCQUFrQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBYTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SHdCOztBQUVqRCwwREFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFhO0FBQ2Y7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRHNCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFtQjtBQUNyQixFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHFEOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrRUFBZTtBQUNqQjtBQUNBOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRHpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzRDtBQUNJO0FBQ0k7QUFDVTtBQUNBO0FBQ047QUFDNUM7O0FBRXRCOztBQUVBO0FBQ0EscUJBQXFCLHdFQUFhO0FBQ2xDLHFCQUFxQiwwRUFBZTtBQUNwQyxxQkFBcUIsK0VBQW9CO0FBQ3pDLHFCQUFxQiwrRUFBb0I7QUFDekMscUJBQXFCLDRFQUFpQjtBQUN0QyxJQUFJLHFFQUFhO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9zcmMvQ29tcG9uZW50cy9DcmVhdGVJbmZvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL3NyYy9Db21wb25lbnRzL0NyZWF0ZVN1cnZleU9uZU1vZGFsLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9zcmMvQ29tcG9uZW50cy9DcmVhdGVTdXJ2ZXlUaHJlZS5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL0NvbXBvbmVudHMvQ3JlYXRlU3VydmV5VHdvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL3NyYy9Db21wb25lbnRzL0NyZWF0ZVdlYlBhZ2UuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS8uL3NyYy9Nb2R1bGVzL0FwcC5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL01vZHVsZXMvSW5mb01vZGFsLmpzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvLi9zcmMvTW9kdWxlcy9TdXJ2ZXlPbmVNb2RhbC5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL01vZHVsZXMvU3VydmV5VGhyZWVNb2RhbC5qcyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL01vZHVsZXMvU3VydmV5VHdvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZjYy1zdXJ2ZXkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmNjLXN1cnZleS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mY2Mtc3VydmV5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvQXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC12MTgtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9Bc3NldHMvZm9udHMvYXNzaXN0YW50LXYxOC1sYXRpbi03MDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvQXNzZXRzL2ZvbnRzL3F1aWNrc2FuZC12MzAtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9Bc3NldHMvZm9udHMvcXVpY2tzYW5kLXYzMC1sYXRpbi03MDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGFzc2lzdGFudC1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuXHRmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cblx0Zm9udC1mYW1pbHk6IFwiQXNzaXN0YW50IDQwMFwiO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pXG5cdFx0Zm9ybWF0KFwid29mZjJcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cbn1cblxuLyogYXNzaXN0YW50LTcwMCAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcblx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXG5cdGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudCA3MDBcIjtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xufVxuXG4vKiBxdWlja3NhbmQtcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcblx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZCA0MDBcIjtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KVxuXHRcdGZvcm1hdChcIndvZmYyXCIpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXG59XG5cbi8qIHF1aWNrc2FuZC03MDAgLSBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xuXHRmb250LWZhbWlseTogXCJRdWlja3NhbmQgNzAwXCI7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZjJcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG5cdC0tbGlnaHQtYmx1ZS1vcHE6IHJnYmEoMjE3LCAyMTcsIDI1MiwgMC44KTtcblx0LS1saWdodC1ibHVlOiAjN2Y3ZmRiO1xuXHQtLW5hdnktYmx1ZTogIzEzMGUzZDtcblx0LS1saWdodC1wdXJwbGU6ICNjZGE0ZjE7XG5cdC0tbGlnaHRlci1wdXJwbGU6ICM5MzZjYjY7XG5cdC0tcHVycGxlLWNscjogIzUzMmU3NDtcblx0LS1saWdodC1ncmF5OiAjYWRhZGFkO1xuXHQtLWRhcmstZ3JheTogIzI4MmEzMjtcblx0LS1kYXJrLWNscjogIzE0MTQyMDtcblx0LS1kYXJrLW9wcTogcmdiYSgyMiwgMTIsIDI3LCAwLjgpO1xuXHQtLWxpZ2h0LWNscjogI2ZlZmVmZTtcblx0LS1ncmVlbi1jbHI6ICMyZmJlMDNjYjtcblx0LS1yZWQtY2xyOiAjZmYxYTFhZjU7XG59XG5cbmJvZHkge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgdmFyKC0tbGlnaHQtcHVycGxlKSwgdmFyKC0tbGlnaHRlci1wdXJwbGUpLCB2YXIoLS1wdXJwbGUtY2xyKSk7XG59XG5cbmgxLFxuaDIge1xuXHRmb250LWZhbWlseTogXCJBc3Npc3RhbnQgNzAwXCI7XG59XG5cbnAge1xuXHRmb250LWZhbWlseTogXCJRdWlja3NhbmQgNDAwXCI7XG59XG5cbnNtYWxsIHtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZCA0MDBcIjtcbn1cblxuZW0ge1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbmkge1xuXHRmb250LXNpemU6IDEuNGVtO1xufVxuXG5saSB7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYSB7XG5cdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG5cdGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudCA3MDBcIjtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAxLjdyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcblx0Y29sb3I6IHZhcigtLWRhcmstY2xyKTtcbn1cblxuLmRpc2FibGUge1xuXHRvcGFjaXR5OiAwO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiogSW5mbyBNb2RhbCBTdHlsaW5nICoqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLm92ZXJsYXkge1xuXHR6LWluZGV4OiAxMDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3BxKTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLm1vZGFsLWluZm8tY29udGVudCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XG5cdGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogNjIwcHg7XG5cdG1heC13aWR0aDogMTAwJTtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tb2RhbC1pbmZvLWhlYWRlciB7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1jbHIpO1xuXHRjb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcbn1cblxuLm1vZGFsLWluZm8taGVhZGVyIGgxIHtcblx0Zm9udC1zaXplOiAxLjlyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDMwcHg7XG5cdHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXHRmb250LWZhbWlseTogXCJRdWlja3NhbmQgNDAwXCI7XG5cdGZvbnQtc2l6ZTogMS40NXJlbTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRyb2wgbGFiZWwge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wgaW5wdXQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZCA0MDBcIjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG5cdGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAzNXB4O1xuXHRwYWRkaW5nOiAxLjNyZW07XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm0tY29udHJvbCBpIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDU1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0cmlnaHQ6IDEwcHg7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbjtcbn1cblxuLmZvcm0tY29udHJvbCA6bnRoLWNoaWxkKDMpIHtcblx0Y29sb3I6IHZhcigtLWdyZWVuLWNscik7XG59XG5cbi5mb3JtLWNvbnRyb2wgOm50aC1jaGlsZCg0KSB7XG5cdGNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcbn1cblxuLmZvcm0tY29udHJvbC5zdWNjZXNzIGlucHV0IHtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4tY2xyKTtcbn1cblxuLmZvcm0tY29udHJvbC5lcnJvciBpbnB1dCB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJlZC1jbHIpO1xufVxuXG4uc2hvdy1lcnJvci10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDJweDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Y29sb3I6IHZhcigtLXJlZC1jbHIpO1xufVxuXG4uc3VydmV5LWJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1jbHIpO1xuXHRjb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcblx0bWFyZ2luLXRvcDogMS41cmVtO1xuXHRib3JkZXI6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiA1cHg7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zdXJ2ZXktYnRuOmhvdmVyLFxuLnN1cnZleS1idG46Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNmIzMThkO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqIFN1cnZleSBNb2RhbCBTdHlsaW5nICoqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4uc3VydmV5LW9uZS1jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xuXHRjb2xvcjogdmFyKC0tZGFyay1jbHIpO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA2NTBweDtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nLWJvdHRvbTogMjVweDtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zdXJ2ZXktaGVhZGVyIHtcblx0aGVpZ2h0OiAxMDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWNscik7XG5cdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xufVxuXG4uc3VydmV5LW9uZS1jb250YWluZXIgaDEsXG4uc3VydmV5LXR3by1jb250YWluZXIgaDEge1xuXHRmb250LXNpemU6IDEuNnJlbTtcblx0bWFyZ2luLWJsb2NrOiAxMHB4O1xufVxuXG4uc3VydmV5LW9uZS1jb250YWluZXIgc21hbGwsXG4uc3VydmV5LXR3by1jb250YWluZXIgc21hbGwge1xuXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5zdXJ2ZXktZm9ybS1jb250cm9sIHtcblx0cGFkZGluZy1ibG9jazogNXB4O1xuXHRwYWRkaW5nLWlubGluZTogMzVweDtcblx0ZGlzcGxheTogIGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnN1cnZleS1mb3JtLWNvbnRyb2wgcCB7XG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uc3VydmV5LW9uZS1jb250YWluZXIgYnV0dG9uIHtcblx0d2lkdGg6IDUwJTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiogU3VydmV5IFR3byBNb2RhbCBTdHlsaW5nICoqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4uc3VydmV5LXR3by1jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xuXHRjb2xvcjogdmFyKC0tZGFyay1jbHIpO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA2MDBweDtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nLWJvdHRvbTogMjVweDtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zdXJ2ZXktdHdvLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiA4cHg7XG5cdHBhZGRpbmctbGVmdDogMjBweDtcblx0Y29sb3I6IHZhcigtLW5hdnktYmx1ZSk7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHVycGxlLWNscik7XG59XG5cbi5zdXJ2ZXktdHdvLWNvbnRhaW5lciBidXR0b24ge1xuXHR3aWR0aDogNTAlO1xuXHRwYWRkaW5nOiA4cHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiBTdXJ2ZXkgVGhyZWUgTW9kYWwgU3R5bGluZyAqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4uc3VydmV5LXRocmVlLW1vZGFsIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3BxKTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XG59XG5cbi5zdXJ2ZXktdGhyZWUtY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcblx0Y29sb3I6IHZhcigtLWRhcmstY2xyKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogNjAwcHg7XG5cdG1heC13aWR0aDogMTAwJTtcblx0cGFkZGluZy1ib3R0b206IDI1cHg7XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc3VydmV5LXRocmVlLWNvbnRhaW5lciAuc3VydmV5LWhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VydmV5LXRocmVlLWNvbnRhaW5lciBmb3JtIHtcblx0cGFkZGluZzogMzBweDtcbn1cblxuLnN1cnZleS10aHJlZS1jb250YWluZXIgaDIge1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc3VydmV5LXRocmVlLWNvbnRhaW5lciB0ZXh0YXJlYSB7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRmb250LWZhbWlseTogJ0Fzc2lzdGFudCA0MDAnO1xuXHRjb2xvcjogIHZhcigtLWRhcmstY2xyKTtcblx0cGFkZGluZy1ibG9jazogLjVyZW07XG5cdHBhZGRpbmctaW5saW5lOiAxLjFyZW07XG5cdGhlaWdodDogMTUwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiogICAgICBXZWIgUGFnZSBTdHlsaW5nICAgICAgKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLndlYi1jb250ZW50LWNvbnRhaW5lciB7XG5cdHdpZHRoOiA5MDBweDtcblx0aGVpZ2h0OiA2MDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG5cdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2ViLWNvbnRlbnQtY29udGFpbmVyIC5oZWFkZXIge1xuXHR3aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogMTMwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmctYmxvY2s6IDFyZW07XG5cdHBhZGRpbmctaW5saW5lOiAyLjVyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNscik7XG59XG5cbi53ZWItY29udGVudC1jb250YWluZXIgLnVzZXItbG9nSW4ge1xuXHRoZWlnaHQ6IDk1cHg7XG5cdHdpZHRoOiA5NXB4O1xuXHRwYWRkaW5nOiAuM3JlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAuM3JlbTtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtY2xyKTtcblx0Ym9yZGVyLXJhZGl1czogIDUwJTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGxpbmVhcjtcbn1cblxuLnVzZXItbG9nSW4gcCB7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndlYi1jb250ZW50LWNvbnRhaW5lciAudXNlci1sb2dJbjpob3ZlciB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG5cbi5uYXZiYXIgdWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2YmFyIGxpIHtcblx0cGFkZGluZzogMXJlbTtcbn1cblxuLm5hdmJhciBhIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IDEuMXJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXZiYXIgYTpob3ZlciB7XG5cdGNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xufVxuXG4uc2VsZWN0ZWQge1xuXHRjb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbi1yaWdodCxcbi5idXR0b24tbGVmdCB7XG5cdHotaW5kZXg6IDE7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IG5vbmU7XG5cdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5idXR0b24tbGVmdCB7XG5cdHRvcDogNjAlO1xuXHRsZWZ0OiAxMHB4O1xufVxuXG4uYnV0dG9uLXJpZ2h0IHtcblx0dG9wOiA2MCU7XG5cdHJpZ2h0OiAxMHB4O1xufVxuXG4uYnV0dG9uLXJpZ2h0OmhvdmVyLFxuLmJ1dHRvbi1sZWZ0OmhvdmVyIHtcblx0Y29sb3I6IHZhcigtLXB1cnBsZS1jbHIpO1xufVxuXG4ubW92aWVzLWNvbnRhaW5lciB7XG5cdGhlaWdodDogMTAwJTtcblx0cGFkZGluZy1pbmxpbmU6IDFyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogLjVyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBsaW5lYXI7XG59XG5cbi5jb250ZW50LWNvbnRyb2wge1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHR3aWR0aDogMjAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtY29udHJvbCAucGxhY2Vob2xkZXItbW92aWUge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGhlaWdodDogOTAlO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzQwZGVnLCB2YXIoLS1saWdodC1ncmF5KSwgdmFyKC0tbGlnaHQtY2xyKSk7XG5cdG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4ucGxhY2Vob2xkZXItbW92aWUgLnBsYWNlaG9sZGVyLWltZyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3BxKTtcblx0aGVpZ2h0OiAyMDBweDtcblx0d2lkdGg6IDE1MHB4O1xufVxuXG4uY29udGVudC1uYXYge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAyMDBweDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdHRvcDogOTAlO1x0XG5cdGxlZnQ6IDM4JTtcbn1cblxuLmNvbnRlbnQtbmF2IGJ1dHRvbiB7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRoZWlnaHQ6IDRweDtcblx0d2lkdGg6IDU1cHg7XG59XG5cbi5jb250ZW50LW5hdiBidXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXB1cnBsZSk7XG59XG5cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDM0cHg7XG59XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uc3dpdGNoIGlucHV0IHtcblx0b3BhY2l0eTogMDtcblx0d2lkdGg6IDA7XG5cdGhlaWdodDogMDtcbn1cblxuLmN1cnJlbnQtc2xpZGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXB1cnBsZSk7XG59XG5cbltkYXRhLXNsaWRlcz0nMCddIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cblxuW2RhdGEtc2xpZGVzPScxJ10ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbltkYXRhLXNsaWRlcz0nMiddIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLyogVGhlIHNsaWRlciAqL1xuXG4uc2xpZGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcblx0dHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGhlaWdodDogMjZweDtcblx0d2lkdGg6IDI2cHg7XG5cdGxlZnQ6IDRweDtcblx0Ym90dG9tOiA0cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcblx0dHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtY2xyKTtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcblx0Ym94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wdXJwbGUtY2xyKTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcblx0Ym9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhCQUE4QjtBQUM5QjtDQUNDLGtCQUFrQixFQUFFLHNHQUFzRztDQUMxSCw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQjtpQkFDZ0IsRUFBRSw0REFB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Q0FDZixNQUFNO0NBQ04sT0FBTztDQUNQLFFBQVE7Q0FDUixTQUFTO0NBQ1QsbUNBQW1DO0NBQ25DLHdCQUF3QjtDQUN4QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0NBQ1gsU0FBUztDQUNULFdBQVc7Q0FDWCxrQ0FBa0M7Q0FDbEMsd0JBQXdCO0NBQ3hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQywrQkFBK0I7Q0FDL0IsMkJBQTJCO0FBQzVCOztBQUVBLG9CQUFvQjtBQUNwQjtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBhc3Npc3RhbnQtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBc3Npc3RhbnQgNDAwXFxcIjtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRzcmM6IHVybChcXFwiLi4vc3JjL0Fzc2V0cy9mb250cy9hc3Npc3RhbnQtdjE4LWxhdGluLXJlZ3VsYXIud29mZjJcXFwiKVxcblxcdFxcdGZvcm1hdChcXFwid29mZjJcXFwiKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xcbn1cXG5cXG4vKiBhc3Npc3RhbnQtNzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG5cXHRmb250LWZhbWlseTogXFxcIkFzc2lzdGFudCA3MDBcXFwiO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdHNyYzogdXJsKFxcXCIuLi9zcmMvQXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC12MTgtbGF0aW4tNzAwLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxufVxcblxcbi8qIHF1aWNrc2FuZC1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG5cXHRmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZCA0MDBcXFwiO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdHNyYzogdXJsKFxcXCIuLi9zcmMvQXNzZXRzL2ZvbnRzL3F1aWNrc2FuZC12MzAtbGF0aW4tcmVndWxhci53b2ZmMlxcXCIpXFxuXFx0XFx0Zm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxufVxcblxcbi8qIHF1aWNrc2FuZC03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kIDcwMFxcXCI7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0c3JjOiB1cmwoXFxcIi4uL3NyYy9Bc3NldHMvZm9udHMvcXVpY2tzYW5kLXYzMC1sYXRpbi03MDAud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWxpZ2h0LWJsdWUtb3BxOiByZ2JhKDIxNywgMjE3LCAyNTIsIDAuOCk7XFxuXFx0LS1saWdodC1ibHVlOiAjN2Y3ZmRiO1xcblxcdC0tbmF2eS1ibHVlOiAjMTMwZTNkO1xcblxcdC0tbGlnaHQtcHVycGxlOiAjY2RhNGYxO1xcblxcdC0tbGlnaHRlci1wdXJwbGU6ICM5MzZjYjY7XFxuXFx0LS1wdXJwbGUtY2xyOiAjNTMyZTc0O1xcblxcdC0tbGlnaHQtZ3JheTogI2FkYWRhZDtcXG5cXHQtLWRhcmstZ3JheTogIzI4MmEzMjtcXG5cXHQtLWRhcmstY2xyOiAjMTQxNDIwO1xcblxcdC0tZGFyay1vcHE6IHJnYmEoMjIsIDEyLCAyNywgMC44KTtcXG5cXHQtLWxpZ2h0LWNscjogI2ZlZmVmZTtcXG5cXHQtLWdyZWVuLWNscjogIzJmYmUwM2NiO1xcblxcdC0tcmVkLWNscjogI2ZmMWExYWY1O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB2YXIoLS1saWdodC1wdXJwbGUpLCB2YXIoLS1saWdodGVyLXB1cnBsZSksIHZhcigtLXB1cnBsZS1jbHIpKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQXNzaXN0YW50IDcwMFxcXCI7XFxufVxcblxcbnAge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kIDQwMFxcXCI7XFxufVxcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZCA0MDBcXFwiO1xcbn1cXG5cXG5lbSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pIHtcXG5cXHRmb250LXNpemU6IDEuNGVtO1xcbn1cXG5cXG5saSB7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBc3Npc3RhbnQgNzAwXFxcIjtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc2l6ZTogMS43cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay1jbHIpO1xcbn1cXG5cXG4uZGlzYWJsZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqIEluZm8gTW9kYWwgU3R5bGluZyAqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5vdmVybGF5IHtcXG5cXHR6LWluZGV4OiAxMDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3BxKTtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubW9kYWwtaW5mby1jb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNjIwcHg7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtaW5mby1oZWFkZXIge1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWNscik7XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxufVxcblxcbi5tb2RhbC1pbmZvLWhlYWRlciBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjlyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiAzMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiA0MHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kIDQwMFxcXCI7XFxuXFx0Zm9udC1zaXplOiAxLjQ1cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgbGFiZWwge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIGlucHV0IHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZCA0MDBcXFwiO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0cGFkZGluZzogMS4zcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCBpIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1NXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRyaWdodDogMTBweDtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW47XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgOm50aC1jaGlsZCgzKSB7XFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLWNscik7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wgOm50aC1jaGlsZCg0KSB7XFxuXFx0Y29sb3I6IHZhcigtLXJlZC1jbHIpO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sLnN1Y2Nlc3MgaW5wdXQge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuLWNscik7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wuZXJyb3IgaW5wdXQge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJlZC1jbHIpO1xcbn1cXG5cXG4uc2hvdy1lcnJvci10ZXh0IHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRwYWRkaW5nOiAycHg7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRjb2xvcjogdmFyKC0tcmVkLWNscik7XFxufVxcblxcbi5zdXJ2ZXktYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtY2xyKTtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG5cXHRtYXJnaW4tdG9wOiAxLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc3VydmV5LWJ0bjpob3ZlcixcXG4uc3VydmV5LWJ0bjpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzZiMzE4ZDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiogU3VydmV5IE1vZGFsIFN0eWxpbmcgKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5zdXJ2ZXktb25lLWNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay1jbHIpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNjUwcHg7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctYm90dG9tOiAyNXB4O1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uc3VydmV5LWhlYWRlciB7XFxuXFx0aGVpZ2h0OiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtY2xyKTtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG59XFxuXFxuLnN1cnZleS1vbmUtY29udGFpbmVyIGgxLFxcbi5zdXJ2ZXktdHdvLWNvbnRhaW5lciBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0bWFyZ2luLWJsb2NrOiAxMHB4O1xcbn1cXG5cXG4uc3VydmV5LW9uZS1jb250YWluZXIgc21hbGwsXFxuLnN1cnZleS10d28tY29udGFpbmVyIHNtYWxsIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5zdXJ2ZXktZm9ybS1jb250cm9sIHtcXG5cXHRwYWRkaW5nLWJsb2NrOiA1cHg7XFxuXFx0cGFkZGluZy1pbmxpbmU6IDM1cHg7XFxuXFx0ZGlzcGxheTogIGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3VydmV5LWZvcm0tY29udHJvbCBwIHtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnN1cnZleS1vbmUtY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0d2lkdGg6IDUwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqIFN1cnZleSBUd28gTW9kYWwgU3R5bGluZyAqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLnN1cnZleS10d28tY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdpZHRoOiA2MDBweDtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1ib3R0b206IDI1cHg7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zdXJ2ZXktdHdvLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDhweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0Y29sb3I6IHZhcigtLW5hdnktYmx1ZSk7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXB1cnBsZS1jbHIpO1xcbn1cXG5cXG4uc3VydmV5LXR3by1jb250YWluZXIgYnV0dG9uIHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKiBTdXJ2ZXkgVGhyZWUgTW9kYWwgU3R5bGluZyAqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uc3VydmV5LXRocmVlLW1vZGFsIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3BxKTtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcXG59XFxuXFxuLnN1cnZleS10aHJlZS1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstY2xyKTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjVweDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnN1cnZleS10aHJlZS1jb250YWluZXIgLnN1cnZleS1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1cnZleS10aHJlZS1jb250YWluZXIgZm9ybSB7XFxuXFx0cGFkZGluZzogMzBweDtcXG59XFxuXFxuLnN1cnZleS10aHJlZS1jb250YWluZXIgaDIge1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zdXJ2ZXktdGhyZWUtY29udGFpbmVyIHRleHRhcmVhIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LWZhbWlseTogJ0Fzc2lzdGFudCA0MDAnO1xcblxcdGNvbG9yOiAgdmFyKC0tZGFyay1jbHIpO1xcblxcdHBhZGRpbmctYmxvY2s6IC41cmVtO1xcblxcdHBhZGRpbmctaW5saW5lOiAxLjFyZW07XFxuXFx0aGVpZ2h0OiAxNTBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKiAgICAgIFdlYiBQYWdlIFN0eWxpbmcgICAgICAqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4ud2ViLWNvbnRlbnQtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogOTAwcHg7XFxuXFx0aGVpZ2h0OiA2MDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2ViLWNvbnRlbnQtY29udGFpbmVyIC5oZWFkZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi1oZWlnaHQ6IDEzMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZy1ibG9jazogMXJlbTtcXG5cXHRwYWRkaW5nLWlubGluZTogMi41cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saWdodC1jbHIpO1xcbn1cXG5cXG4ud2ViLWNvbnRlbnQtY29udGFpbmVyIC51c2VyLWxvZ0luIHtcXG5cXHRoZWlnaHQ6IDk1cHg7XFxuXFx0d2lkdGg6IDk1cHg7XFxuXFx0cGFkZGluZzogLjNyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IC4zcmVtO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNscik7XFxuXFx0Ym9yZGVyLXJhZGl1czogIDUwJTtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgbGluZWFyO1xcbn1cXG5cXG4udXNlci1sb2dJbiBwIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLndlYi1jb250ZW50LWNvbnRhaW5lciAudXNlci1sb2dJbjpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuLm5hdmJhciB1bCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFyIGxpIHtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubmF2YmFyIGEge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hdmJhciBhOmhvdmVyIHtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYnV0dG9uLXJpZ2h0LFxcbi5idXR0b24tbGVmdCB7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uYnV0dG9uLWxlZnQge1xcblxcdHRvcDogNjAlO1xcblxcdGxlZnQ6IDEwcHg7XFxufVxcblxcbi5idXR0b24tcmlnaHQge1xcblxcdHRvcDogNjAlO1xcblxcdHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uYnV0dG9uLXJpZ2h0OmhvdmVyLFxcbi5idXR0b24tbGVmdDpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXB1cnBsZS1jbHIpO1xcbn1cXG5cXG4ubW92aWVzLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctaW5saW5lOiAxcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAuNXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBsaW5lYXI7XFxufVxcblxcbi5jb250ZW50LWNvbnRyb2wge1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtY29udHJvbCAucGxhY2Vob2xkZXItbW92aWUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDBkZWcsIHZhcigtLWxpZ2h0LWdyYXkpLCB2YXIoLS1saWdodC1jbHIpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyLW1vdmllIC5wbGFjZWhvbGRlci1pbWcge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3BxKTtcXG5cXHRoZWlnaHQ6IDIwMHB4O1xcblxcdHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmNvbnRlbnQtbmF2IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0dG9wOiA5MCU7XFx0XFxuXFx0bGVmdDogMzglO1xcbn1cXG5cXG4uY29udGVudC1uYXYgYnV0dG9uIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGhlaWdodDogNHB4O1xcblxcdHdpZHRoOiA1NXB4O1xcbn1cXG5cXG4uY29udGVudC1uYXYgYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXB1cnBsZSk7XFxufVxcblxcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxufVxcblxcbi5jdXJyZW50LXNsaWRlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXB1cnBsZSk7XFxufVxcblxcbltkYXRhLXNsaWRlcz0nMCddIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbn1cXG5cXG5bZGF0YS1zbGlkZXM9JzEnXSB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG5bZGF0YS1zbGlkZXM9JzInXSB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcblxcbi5zbGlkZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG5cXHR0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGhlaWdodDogMjZweDtcXG5cXHR3aWR0aDogMjZweDtcXG5cXHRsZWZ0OiA0cHg7XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuXFx0dHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1jbHIpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcblxcdGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tcHVycGxlLWNscik7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcblxcdGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbmZvTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbEluZm8uY2xhc3NOYW1lID0gJ21vZGFsLWluZm8nXG4gICAgbW9kYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKVxuXHRtb2RhbEluZm8uY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpXG4gICAgbW9kYWxJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwtaW5mbycpXG5cbiAgICBtb2RhbEluZm8uaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaW5mby1jb250ZW50IGNvbnRhaW5lci1zdHlsZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaW5mby1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDE+VGVsbCB1cyB3aGF0IFRWIHNob3dzIGFuZCBNb3ZpZXM8L2gxPlxuXHRcdFx0XHRcdDxoMT4geW91IGxvdmUgdG8gd2F0Y2ghPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIlwiIGlkPVwibW9kYWwtaW5mby1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJmaXJzdC1uYW1lXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdC1uYW1lXCIgaWQ9XCJmaXJzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJKb2huXCIgcmVxdWlyZWQvPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLWNoZWNrIGRpc2FibGVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGlzYWJsZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0PHNtYWxsIHJvbGU9XCJhbGVydFwiIGNsYXNzPVwic2hvdy1lcnJvci10ZXh0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zbWFsbD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibGFzdC1uYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3QtbmFtZVwiIGlkPVwibGFzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJTbWl0aFwiIHJlcXVpcmVkLz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBkaXNhYmxlXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGRpc2FibGVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxzbWFsbCByb2xlPVwiYWxlcnRcIiBjbGFzcz1cInNob3ctZXJyb3ItdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc21hbGw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJqb2huc21pdGgxQGVtYWlsLmNvbVwiIHJlcXVpcmVkLz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBkaXNhYmxlXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGRpc2FibGVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxzbWFsbCByb2xlPVwiYWxlcnRcIiBjbGFzcz1cInNob3ctZXJyb3ItdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc21hbGw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIkFnZVwiPkFnZSA8ZW0+KG9wdGlvbmFsKTwvZW0+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYWdlXCIgaWQ9XCJhZ2VcIiBtaW49XCIxNVwiIG1heD1cIjEyMFwiIHBsYWNlaG9sZGVyPScxNScvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1cnZleS1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG4gICAgYFxuICAgIHJldHVybiBtb2RhbEluZm9cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3VydmV5T25lTW9kYWwoKSB7XG5cdGNvbnN0IHN1cnZleU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3VydmV5TW9kYWwuaWQgPSBcInN1cnZleS1vbmUtbW9kYWxcIjtcblx0c3VydmV5TW9kYWwuY2xhc3NOYW1lID0gXCJzdXJ2ZXktb25lLW1vZGFsIGRpc2FibGVcIjtcbiAgICBzdXJ2ZXlNb2RhbC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5JylcblxuXHRzdXJ2ZXlNb2RhbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LW9uZS1jb250YWluZXIgY29udGFpbmVyLXN0eWxlXCI+XG4gICAgICAgICAgICA8Zm9ybSAgYWN0aW9uPVwiXCIgaWQ9XCJtb2RhbC1zdXJ2ZXktZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktaGVhZGVyXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24tb25lXCIgaWQ9XCJxdWVzdGlvbi1vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkhvdyBkaWQgeW91IGxlYXJuIGFib3V0IHVzPzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb2NpYWwgTWVkaWEgKEZhY2Vib29rLFR3aXR0ZXIsSW5zdGFncmFtLCBldGMuKTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicXVlc3Rpb24tb25lXCIgZGF0YS1xdWVzdGlvbi1vbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cnZleS1mb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdXR1YmUsIFR3aXRjaCwgb3RoZXIgc2l0ZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uLW9uZVwiIGRhdGEtcXVlc3Rpb24tb25lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmllbmRzLCBDb2xsZWFndWVzLCBGYW1pbHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uLW9uZVwiIGRhdGEtcXVlc3Rpb24tb25lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UViBhZHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uLW9uZVwiIGRhdGEtcXVlc3Rpb24tb25lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5PdGhlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uLW9uZVwiIGRhdGEtcXVlc3Rpb24tb25lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCByb2xlPVwiYWxlcnRcIiBjbGFzcz1cInNob3ctZXJyb3ItdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24tdHdvXCIgaWQ9XCJxdWVzdGlvbi10d29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkhvdyBvZnRlbiBkbyB5b3Ugd2F0Y2ggbW92aWVzPzwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cnZleS1mb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TGVzcyB0aGFuIG9uY2UgYSBtb250aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uLXR3b1wiIGRhdGEtcXVlc3Rpb24tdHdvPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cnZleS1mb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+T25jZSBvciB0d2ljZSBhIG1vbnRoPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicXVlc3Rpb24tdHdvXCIgZGF0YS1xdWVzdGlvbi10d289XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlRocmVlIHRvIGZvdXIgdGltZXMgYSBtb250aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uLXR3b1wiIGRhdGEtcXVlc3Rpb24tdHdvPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LWZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Nb3JlIHRoYW4gZm91ciB0aW1lcyBhIG1vbnRoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxdWVzdGlvbi10d29cIiBkYXRhLXF1ZXN0aW9uLXR3b1wiNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCByb2xlPVwiYWxlcnRcIiBjbGFzcz1cInNob3ctZXJyb3ItdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1cnZleS1idG5cIiBpZD1cInN1cnZleS1vbmUtYnRuXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cblx0cmV0dXJuIHN1cnZleU1vZGFsO1xufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN1cnZleVRocmVlKCkge1xuXHRjb25zdCBzdXJ2ZXlUaHJlZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3VydmV5VGhyZWVNb2RhbC5pZCA9IFwic3VydmV5LXRocmVlLW1vZGFsXCI7XG5cdHN1cnZleVRocmVlTW9kYWwuY2xhc3NOYW1lID0gXCJzdXJ2ZXktdGhyZWUtbW9kYWwgZGlzYWJsZVwiO1xuICAgIHN1cnZleVRocmVlTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpXG5cblx0c3VydmV5VGhyZWVNb2RhbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LXRocmVlLWNvbnRhaW5lciBjb250YWluZXItc3R5bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPlRoYW5rIHlvdSBmb3IgeW91ciBwYXRpZW5jZSE8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGlkPVwibW9kYWwtc3VydmV5LXRocmVlLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJsb25nLXRleHRcIj5GZWVsIGZyZWUgdG8gbGVhdmUgc3VnZ2VzdGlvbnMgYW5kIGNvbW1lbnRzIHRvIGhlbHAgdXMgaW1wcm92ZSB0aGFuayB5b3UhPC9oMj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgIHBsYWNlaG9sZGVyPVwiIENvbW1lbnQgSGVyZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdXJ2ZXktYnRuXCIgaWQ9XCJzdXJ2ZXktdGhyZWUtYnRuXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuXHRyZXR1cm4gc3VydmV5VGhyZWVNb2RhbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN1cnZleVR3b01vZGFsKCkge1xuXHRjb25zdCBzdXJ2ZXlUd29Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN1cnZleVR3b01vZGFsLmlkID0gXCJzdXJ2ZXktdHdvLW1vZGFsXCI7XG5cdHN1cnZleVR3b01vZGFsLmNsYXNzTmFtZSA9IFwic3VydmV5LXR3by1tb2RhbCBkaXNhYmxlXCI7XG4gICAgc3VydmV5VHdvTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpXG5cblx0c3VydmV5VHdvTW9kYWwuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1cnZleS10d28tY29udGFpbmVyIGNvbnRhaW5lci1zdHlsZVwiPlxuICAgICAgICAgICAgPGZvcm0gIGFjdGlvbj1cIlwiIGlkPVwibW9kYWwtc3VydmV5LXR3by1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cnZleS1oZWFkZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXRocmVlXCIgaWQ9XCJxdWVzdGlvbi10aHJlZVwiPlxuICAgICAgICAgICAgICAgIDxoMT4gV2hhdCBraW5kIG9mIG1vdmllcyBhbmQgVFYgc2hvd3MgZG8geW91IHVzdWFsbHkgd2F0Y2g/PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LWZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5BY3Rpb248L3A+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJzdXJ2ZXktdGhyZWVcIiBkYXRhLXF1ZXN0aW9uLXRocmVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cnZleS1mb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+SG9ycm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwic3VydmV5LXRocmVlXCIgZGF0YS1xdWVzdGlvbi10aHJlZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbWVkeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInN1cnZleS10aHJlZVwiIGRhdGEtcXVlc3Rpb24tdGhyZWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LWZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Sb21hbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwic3VydmV5LXRocmVlXCIgZGF0YS1xdWVzdGlvbi10aHJlZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRyYW1hPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwic3VydmV5LXRocmVlXCIgZGF0YS1xdWVzdGlvbi10aHJlZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFuaW1hdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInN1cnZleS10aHJlZVwiIGRhdGEtcXVlc3Rpb24tdGhyZWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LWZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5TdXNwZW5zZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInN1cnZleS10aHJlZVwiIGRhdGEtcXVlc3Rpb24tdGhyZWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LWZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5PdGhlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJzdXJ2ZXktdGhyZWUtb3RoZXJzXCIgZGF0YS1xdWVzdGlvbi10aHJlZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VydmV5LXRocmVlXCIgcGxhY2Vob2xkZXI9XCJJZiBvdGhlcnMgcGxlYXNlIHNwZWNpZnlcIj4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzbWFsbCByb2xlPVwiYWxlcnRcIiBjbGFzcz1cInNob3ctZXJyb3ItdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLWZvdXJcIiBpZD1cInF1ZXN0aW9uLWZvdXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+V291bGQgeW91IGxpa2UgcmVjaWV2ZSBtb3ZpZSB1cGRhdGVzIGZyb20gdXM/PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VydmV5LWZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5ZZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzdXJ2ZXktZm91clwiIGRhdGEtcXVlc3Rpb24tZm91cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXJ2ZXktZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPHA+Tm88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzdXJ2ZXktZm91clwiIGRhdGEtcXVlc3Rpb24tZm91cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8c21hbGwgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJzaG93LWVycm9yLXRleHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1cnZleS1idG5cIiBpZD1cInN1cnZleS10d28tYnRuXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cblx0cmV0dXJuIHN1cnZleVR3b01vZGFsO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXZWJQYWdlICgpe1xuICAgIGNvbnN0IHdlYkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdlYkNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ3dlYi1jb250ZW50LWNvbnRhaW5lcidcbiAgICB3ZWJDb250ZW50Q29udGFpbmVyLmlkID0gJ3dlYi1jb250ZW50LWNvbnRhaW5lcidcblxuICAgIHdlYkNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MICs9IGBcblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1sb2dJblwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxwPkxvZyBJbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIiBjbGFzcz1cInNlbGVjdGVkXCI+UG9wdWxhcjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPlJlY2VudDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiID5GYXZvcml0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1sZWZ0XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZXMtY29udGFpbmVyXCIgZGF0YS1zbGlkZXM9JzAnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlaG9sZGVyLW1vdmllXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItaW1nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5Nb3ZpZSBPbmU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItbW92aWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPk1vdmllIFR3bzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1tb3ZpZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlaG9sZGVyLWltZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TW92aWUgVGhyZWU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItbW92aWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPk1vdmllIEZvdXI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItbW92aWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPk1vdmllIEZpdmU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItbW92aWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPk1vdmllIFNpeDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1tb3ZpZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlaG9sZGVyLWltZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TW92aWUgU2V2ZW48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItbW92aWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPk1vdmllIEVpZ2h0PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlaG9sZGVyLW1vdmllXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItaW1nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5Nb3ZpZSBOaW5lPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtbmF2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRlbnQtaW5kaWNhdG9yLWZpcnN0IGN1cnJlbnQtc2xpZGVcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29udGVudC1pbmRpY2F0b3Itc2Vjb25kXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRlbnQtaW5kaWNhdG9yLXRoaXJkXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgXG5cbiAgICByZXR1cm4gd2ViQ29udGVudENvbnRhaW5lclxufVxuIiwiY29uc3QgYnV0dG9uRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcblx0Y29uc3QgYnV0dG9uTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWxlZnRcIik7XG5cdGNvbnN0IGJ1dHRvblJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmlnaHRcIik7XG5cdC8qKkB0eXBlIHtIVE1MRWxlbWVudH0gKi9cblx0Y29uc3Qgc2xpZGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNsaWRlc11cIik7XG5cdGNvbnN0IGZpcnN0SW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWluZGljYXRvci1maXJzdFwiKTtcblx0Y29uc3Qgc2Vjb25kSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWluZGljYXRvci1zZWNvbmRcIik7XG5cdGNvbnN0IHRoaXJkSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWluZGljYXRvci10aGlyZFwiKTtcblx0Y29uc3QgaW5kaWNhdG9ycyA9IFtmaXJzdEluZGljYXRvciwgc2Vjb25kSW5kaWNhdG9yLCB0aGlyZEluZGljYXRvcl07XG5cblx0YnV0dG9uTGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IHNsaWRlID0gcGFyc2VJbnQoc2xpZGVzQ29udGFpbmVyLmRhdGFzZXQuc2xpZGVzKSAtIDE7XG5cdFx0Y29uc29sZS5sb2coc2xpZGUpXG5cblx0XHRpZiAoc2xpZGUgPCAwKSByZXR1cm47XG5cblx0XHRzbGlkZXNDb250YWluZXIuZGF0YXNldC5zbGlkZXMgPSBgJHtzbGlkZX1gO1xuXHRcdGNoYW5nZUluZGljYXRvcihzbGlkZSlcblx0fSk7XG5cblx0YnV0dG9uUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBzbGlkZSA9IHBhcnNlSW50KHNsaWRlc0NvbnRhaW5lci5kYXRhc2V0LnNsaWRlcykgKyAxO1xuXG5cdFx0aWYgKHNsaWRlID4gMikgcmV0dXJuO1xuXG5cdFx0c2xpZGVzQ29udGFpbmVyLmRhdGFzZXQuc2xpZGVzID0gYCR7c2xpZGV9YDtcblx0XHRjaGFuZ2VJbmRpY2F0b3Ioc2xpZGUpXG5cdH0pO1xuXG5cdGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yLCBpbmRleCkgPT4ge1xuXG5cdFx0aW5kaWNhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cdFx0XHRzbGlkZXNDb250YWluZXIuZGF0YXNldC5zbGlkZXMgPSBgJHtpbmRleH1gXG5cdFx0XHRjaGFuZ2VJbmRpY2F0b3IoaW5kZXgpXG5cdFx0fSlcblx0fSlcblxuXHRjb25zdCBjaGFuZ2VJbmRpY2F0b3IgPSAoc2xpZGUpID0+IHtcblx0XHRpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvciwgaW5kZXgpID0+IHtcblx0XHRcdGlmIChzbGlkZSA9PT0gaW5kZXgpIHtcblx0XHRcdFx0aW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXNsaWRlXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50LXNsaWRlXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIGJ1dHRvbkxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Ly8gXHRpZiAoc2xpZGVzLmNsYXNzTGlzdC5jb250YWlucyhcInNlY29uZC1zbGlkZVwiKSkge1xuXHQvLyBcdFx0c2xpZGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWNvbmQtc2xpZGVcIik7XG5cdC8vIFx0XHRzbGlkZXMuY2xhc3NMaXN0LmFkZChcImZpcnN0LXNsaWRlXCIpO1xuXHQvLyBcdFx0dGhpcmRJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnQtc2xpZGVcIik7XG5cdC8vIFx0XHRmaXJzdEluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gXHRcdHNlY29uZEluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gXHR9IGVsc2UgaWYgKHNsaWRlcy5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXJzdC1zbGlkZVwiKSkge1xuXHQvLyBcdFx0c2xpZGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXJzdC1zbGlkZVwiKTtcblx0Ly8gXHRcdHNsaWRlcy5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdC1zbGlkZVwiKTtcblx0Ly8gXHRcdHRoaXJkSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50LXNsaWRlXCIpO1xuXHQvLyBcdFx0c2Vjb25kSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50LXNsaWRlXCIpO1xuXHQvLyBcdFx0Zmlyc3RJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtc2xpZGVcIik7XG5cdC8vIFx0fVxuXHQvLyB9KTtcblxuXHQvLyBidXR0b25SaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0Ly8gXHRpZiAoc2xpZGVzLmNsYXNzTGlzdC5jb250YWlucyhcImRlZmF1bHQtc2xpZGVcIikpIHtcblx0Ly8gXHRcdHNsaWRlcy5jbGFzc0xpc3QucmVtb3ZlKFwiZGVmYXVsdC1zbGlkZVwiKTtcblx0Ly8gXHRcdHNsaWRlcy5jbGFzc0xpc3QuYWRkKFwiZmlyc3Qtc2xpZGVcIik7XG5cdC8vIFx0XHRmaXJzdEluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gXHRcdHNlY29uZEluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gXHR9IGVsc2UgaWYgKHNsaWRlcy5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXJzdC1zbGlkZVwiKSkge1xuXHQvLyBcdFx0c2xpZGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXJzdC1zbGlkZVwiKTtcblx0Ly8gXHRcdHNsaWRlcy5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLXNsaWRlXCIpO1xuXHQvLyBcdFx0c2Vjb25kSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50LXNsaWRlXCIpO1xuXHQvLyBcdFx0dGhpcmRJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtc2xpZGVcIik7XG5cdC8vIFx0fVxuXHQvLyB9KTtcblxuXHQvLyBmaXJzdEluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHQvLyBcdHNsaWRlcy5jbGFzc0xpc3QucmVtb3ZlKFwiZmlyc3Qtc2xpZGVcIik7XG5cdC8vIFx0c2xpZGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWNvbmQtc2xpZGVcIik7XG5cdC8vIFx0c2xpZGVzLmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0LXNsaWRlXCIpO1xuXHQvLyBcdHNlY29uZEluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gXHR0aGlyZEluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gXHRmaXJzdEluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gfSk7XG5cblx0Ly8gc2Vjb25kSW5kaWNhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdC8vIFx0c2xpZGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWZhdWx0LXNsaWRlXCIpO1xuXHQvLyBcdHNsaWRlcy5jbGFzc0xpc3QucmVtb3ZlKFwic2Vjb25kLXNsaWRlXCIpO1xuXHQvLyBcdHNsaWRlcy5jbGFzc0xpc3QuYWRkKFwiZmlyc3Qtc2xpZGVcIik7XG5cdC8vIFx0dGhpcmRJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnQtc2xpZGVcIik7XG5cdC8vIFx0Zmlyc3RJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnQtc2xpZGVcIik7XG5cdC8vIFx0c2Vjb25kSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXNsaWRlXCIpO1xuXHQvLyB9KTtcblxuXHQvLyB0aGlyZEluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHQvLyBcdHNsaWRlcy5jbGFzc0xpc3QucmVtb3ZlKFwiZmlyc3Qtc2xpZGVcIik7XG5cdC8vIFx0c2xpZGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWZhdWx0LXNsaWRlXCIpO1xuXHQvLyBcdHNsaWRlcy5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLXNsaWRlXCIpO1xuXHQvLyBcdGZpcnN0SW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50LXNsaWRlXCIpO1xuXHQvLyBcdHNlY29uZEluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gXHR0aGlyZEluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1zbGlkZVwiKTtcblx0Ly8gfSk7XG59O1xuXG5leHBvcnQgeyBidXR0b25FdmVudExpc3RlbmVyIH07XG4iLCJpbXBvcnQgeyBsb2FkU3VydmV5T25lIH0gZnJvbSBcIi4vU3VydmV5T25lTW9kYWwuanNcIjtcblxuY29uc3QgbG9hZE1vZGFsSW5mbyA9ICgpID0+IHtcblx0Y29uc3QgbW9kYWxJbmZvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtaW5mby1mb3JtXCIpO1xuXHRjb25zdCBtb2RhbEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWluZm9cIik7XG5cblx0bW9kYWxJbmZvLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuXG5cdG1vZGFsSW5mb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjaGVja0lucHV0cygpO1xuXHR9KTtcbn07XG5cbmNvbnN0IGNoZWNrSW5wdXRzID0gKCkgPT4ge1xuXHRjb25zdCBtb2RhbEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWluZm9cIik7XG5cdC8qKkB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqL1xuXHRjb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0LW5hbWVcIik7XG5cdC8qKkB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqL1xuXHRjb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdC1uYW1lXCIpO1xuXHQvKipAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuXG5cdGNvbnN0IGZpcnN0TmFtZVZhbHVlID0gZmlyc3ROYW1lLnZhbHVlLnRyaW0oKTtcblx0Y29uc3QgbGFzdE5hbWVWYWx1ZSA9IGxhc3ROYW1lLnZhbHVlLnRyaW0oKTtcblx0Y29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcblxuXHRpZiAoZmlyc3ROYW1lVmFsdWUgPT09IFwiXCIpIHtcblx0XHRzaG93RXJyb3IoZmlyc3ROYW1lLnBhcmVudEVsZW1lbnQsIFwiKlBsZWFzZSBwcm92aWRlIHlvdXIgZmlyc3QgbmFtZVwiKTtcblx0fSBlbHNlIGlmIChjaGVja0ZvclNwZWNpYWxDaGFycyhmaXJzdE5hbWVWYWx1ZSkpIHtcblx0XHRzaG93RXJyb3IoXG5cdFx0XHRmaXJzdE5hbWUucGFyZW50RWxlbWVudCxcblx0XHRcdFwiKkZpcnN0IG5hbWUgc2hvdWxkJ250IGNvbnRhaW4gc3BlY2lhbCBjaGFyYWN0ZXJzXCJcblx0XHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRm9yRGlnaXRzKGZpcnN0TmFtZVZhbHVlKSkge1xuXHRcdHNob3dFcnJvcihcblx0XHRcdGZpcnN0TmFtZS5wYXJlbnRFbGVtZW50LFxuXHRcdFx0XCIqRmlyc3QgbmFtZSBzaG91bGQnbnQgY29udGFpbiBudW1iZXJzXCJcblx0XHQpO1xuXHR9IGVsc2UgaWYgKGZpcnN0TmFtZS52YWx1ZS5sZW5ndGggPCAzKSB7XG5cdFx0c2hvd0Vycm9yKFxuXHRcdFx0Zmlyc3ROYW1lLnBhcmVudEVsZW1lbnQsXG5cdFx0XHRcIipGaXJzdCBuYW1lIHNob3VsZCBiZSBtb3JlIHRoYW4gMyBsZXR0ZXJzXCJcblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHNob3dTdWNjZXNzKGZpcnN0TmFtZS5wYXJlbnRFbGVtZW50KTtcblx0fVxuXG5cdGlmIChsYXN0TmFtZVZhbHVlID09PSBcIlwiKSB7XG5cdFx0c2hvd0Vycm9yKGxhc3ROYW1lLnBhcmVudEVsZW1lbnQsIFwiKlBsZWFzZSBwcm92aWRlIHlvdXIgbGFzdCBuYW1lXCIpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRm9yU3BlY2lhbENoYXJzKGxhc3ROYW1lVmFsdWUpKSB7XG5cdFx0c2hvd0Vycm9yKFxuXHRcdFx0bGFzdE5hbWUucGFyZW50RWxlbWVudCxcblx0XHRcdFwiKkxhc3QgbmFtZSBzaG91bGQnbnQgY29udGFpbiBudW1iZXJzXCJcblx0XHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRm9yRGlnaXRzKGxhc3ROYW1lVmFsdWUpKSB7XG5cdFx0c2hvd0Vycm9yKFxuXHRcdFx0bGFzdE5hbWUucGFyZW50RWxlbWVudCxcblx0XHRcdFwiKlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbGFzdCBuYW1lXCJcblx0XHQpO1xuXHR9IGVsc2UgaWYgKGxhc3ROYW1lLnZhbHVlLmxlbmd0aCA8IDMpIHtcblx0XHRzaG93RXJyb3IoXG5cdFx0XHRsYXN0TmFtZS5wYXJlbnRFbGVtZW50LFxuXHRcdFx0XCIqTGFzdCBuYW1lIHNob3VsZCBiZSBtb3JlIHRoYW4gMyBsZXR0ZXJzXCJcblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHNob3dTdWNjZXNzKGxhc3ROYW1lLnBhcmVudEVsZW1lbnQpO1xuXHR9XG5cblx0aWYgKGVtYWlsVmFsdWUgPT09IFwiXCIpIHtcblx0XHRzaG93RXJyb3IoZW1haWwucGFyZW50RWxlbWVudCwgXCIqUGxlYXNlIHByb3ZpZGUgeW91ciBlbWFpbCBhZGRyZXNzXCIpO1xuXHR9IGVsc2UgaWYgKCFpc1ZhbGlkRW1haWwoZW1haWxWYWx1ZSkpIHtcblx0XHRzaG93RXJyb3IoXG5cdFx0XHRlbWFpbC5wYXJlbnRFbGVtZW50LFxuXHRcdFx0XCIqUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIGV4LiAoZGlnYmljazY5QGVtYWlsLmNvbSlcIlxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd1N1Y2Nlc3MoZW1haWwucGFyZW50RWxlbWVudCk7XG5cdH1cblxuXHRpZiAoXG5cdFx0ZW1haWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWNjZXNzXCIpICYmXG5cdFx0Zmlyc3ROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3VjY2Vzc1wiKSAmJlxuXHRcdGxhc3ROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3VjY2Vzc1wiKVxuXHQpIHtcblx0XHRtb2RhbEluZm8uY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG5cdFx0bG9hZFN1cnZleU9uZSgpO1xuXHR9XG59O1xuXG5jb25zdCBzaG93RXJyb3IgPSAoaW5wdXQsIG1lc3NhZ2UpID0+IHtcblx0Y29uc3QgZXJyb3JUZXh0ID0gaW5wdXQucXVlcnlTZWxlY3RvcihcIi5zaG93LWVycm9yLXRleHRcIik7XG5cdGNvbnN0IHN1Y2Nlc3NJY29uID0gaW5wdXQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGUtY2hlY2tcIik7XG5cdGNvbnN0IGVycm9ySWNvbiA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlLXhtYXJrXCIpO1xuXG5cdGlucHV0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGVycm9yXCI7XG5cdHN1Y2Nlc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuXHRlcnJvckljb24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG5cdGVycm9yVGV4dC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdGVycm9yVGV4dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xufTtcblxuY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoaW5wdXQpID0+IHtcblx0Y29uc3Qgc3VjY2Vzc1RleHQgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctZXJyb3ItdGV4dFwiKTtcblx0Y29uc3Qgc3VjY2Vzc0ljb24gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZS1jaGVja1wiKTtcblx0Y29uc3QgZXJyb3JJY29uID0gaW5wdXQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGUteG1hcmtcIik7XG5cblx0c3VjY2Vzc1RleHQudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRzdWNjZXNzVGV4dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG5cdGVycm9ySWNvbi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcblx0c3VjY2Vzc0ljb24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG5cdGlucHV0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIHN1Y2Nlc3NcIjtcbn07XG5cbmNvbnN0IGlzVmFsaWRFbWFpbCA9IChlbWFpbCkgPT4ge1xuXHRyZXR1cm4gL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KGVtYWlsKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yU3BlY2lhbENoYXJzID0gKG5hbWUpID0+IHtcblx0cmV0dXJuIC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XSsvLnRlc3QobmFtZSk7XG59O1xuXG5jb25zdCBjaGVja0ZvckRpZ2l0cyA9IChuYW1lKSA9PiB7XG5cdHJldHVybiAvXFxkLy50ZXN0KG5hbWUpO1xufTtcblxuZXhwb3J0IHsgbG9hZE1vZGFsSW5mbyB9O1xuIiwiaW1wb3J0IHsgbG9hZFN1cnZleVR3byB9IGZyb20gXCIuL1N1cnZleVR3b01vZGFsXCI7XG5cbmxvYWRTdXJ2ZXlUd29cblxuY29uc3QgbG9hZFN1cnZleU9uZSA9ICgpID0+IHtcblx0Y29uc3QgbW9kYWxTdXJ2ZXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1zdXJ2ZXktZm9ybVwiKTtcblx0Y29uc3Qgc3VydmV5T25lTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1cnZleS1vbmUtbW9kYWxcIik7XG5cblx0c3VydmV5T25lTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG5cblx0bW9kYWxTdXJ2ZXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y2hlY2tJbnB1dHMoKTtcblx0fSk7XG59O1xuXG5jb25zdCBjaGVja0lucHV0cyA9ICgpID0+IHtcblx0Y29uc3Qgc3VydmV5T25lTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1cnZleS1vbmUtbW9kYWxcIik7XG5cdC8qKkB0eXBlIHtOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+fSAqL1xuXHRjb25zdCBxdWVzdGlvbk9uZUNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFwiW2RhdGEtcXVlc3Rpb24tb25lXTpjaGVja2VkXCJcblx0KTtcblx0LyoqQHR5cGUge05vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD59ICovXG5cdGNvbnN0IHF1ZXN0aW9uVHdvQ2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XCJbZGF0YS1xdWVzdGlvbi10d29dOmNoZWNrZWRcIlxuXHQpO1xuXHRjb25zdCBzaG93RXJyb3JPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0aW9uLW9uZSBzbWFsbFwiKTtcblx0Y29uc3Qgc2hvd0Vycm9yVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVzdGlvbi10d28gc21hbGxcIik7XG5cblx0aWYgKHF1ZXN0aW9uT25lQ2hlY2tlZC5sZW5ndGggPT09IDApIHtcblx0XHRzaG93RXJyb3JPbmUudGV4dENvbnRlbnQgPSBcIipQbGVhc2UgY2hvb3NlIG9uZSBvZiB0aGUgYW5zd2Vyc1wiO1xuXHRcdHNob3dFcnJvck9uZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd0Vycm9yT25lLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRzaG93RXJyb3JPbmUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdH1cblxuXHRpZiAocXVlc3Rpb25Ud29DaGVja2VkLmxlbmd0aCA9PT0gMCkge1xuXHRcdHNob3dFcnJvclR3by50ZXh0Q29udGVudCA9IFwiKlBsZWFzZSBjaG9vc2Ugb25lIG9mIHRoZSBhbnN3ZXJzXCI7XG5cdFx0c2hvd0Vycm9yVHdvLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0fSBlbHNlIHtcblx0XHRzaG93RXJyb3JUd28udGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdHNob3dFcnJvclR3by5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0fVxuXG5cdGlmIChxdWVzdGlvbk9uZUNoZWNrZWQubGVuZ3RoID49IDEgJiYgcXVlc3Rpb25Ud29DaGVja2VkLmxlbmd0aCA+PSAxKSB7XG5cdFx0Y29uc29sZS5sb2coXCJDb21wbGV0ZSFcIik7XG5cdFx0c3VydmV5T25lTW9kYWwuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG5cdFx0bG9hZFN1cnZleVR3bygpXG5cdH1cbn07XG5cbmV4cG9ydCB7IGxvYWRTdXJ2ZXlPbmUgfTtcbiIsImltcG9ydCB7IGJ1dHRvbkV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9BcHAuanNcIjtcblxuY29uc3QgbG9hZFN1cnZleVRocmVlID0gKCkgPT4ge1xuXHRjb25zdCBzdXJ2ZXlUaHJlZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdXJ2ZXktdGhyZWUtbW9kYWxcIik7XG5cdGNvbnN0ICBtb2RhbFN1cnZleUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLXN1cnZleS10aHJlZS1mb3JtXCIpO1xuXG5cdHN1cnZleVRocmVlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG5cblx0bW9kYWxTdXJ2ZXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb21wbGV0ZSEnKVxuICAgICAgICBzdXJ2ZXlUaHJlZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuXHRcdGJ1dHRvbkV2ZW50TGlzdGVuZXIoKVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRTdXJ2ZXlUaHJlZSB9IiwiaW1wb3J0IHsgbG9hZFN1cnZleVRocmVlIH0gZnJvbSBcIi4vU3VydmV5VGhyZWVNb2RhbFwiO1xuXG5jb25zdCBsb2FkU3VydmV5VHdvID0gKCkgPT4ge1xuXHRjb25zdCBtb2RhbFN1cnZleUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLXN1cnZleS10d28tZm9ybVwiKTtcblx0Y29uc3Qgc3VydmV5VHdvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1cnZleS10d28tbW9kYWxcIik7XG5cblx0c3VydmV5VHdvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG5cblx0bW9kYWxTdXJ2ZXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y2hlY2tJbnB1dHMoKTtcblx0fSk7XG59O1xuXG5jb25zdCBjaGVja0lucHV0cyA9ICgpID0+IHtcblxuXHRjb25zdCBzdXJ2ZXlUd29Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VydmV5LXR3by1tb2RhbFwiKTtcblx0LyoqQHR5cGUge05vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD59ICovXG5cdGNvbnN0IHF1ZXN0aW9uVGhyZWVDaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcIltkYXRhLXF1ZXN0aW9uLXRocmVlXTpjaGVja2VkXCJcblx0KTtcblx0LyoqQHR5cGUge05vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD59ICovXG5cdGNvbnN0IHF1ZXN0aW9uRm91ckNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFwiW2RhdGEtcXVlc3Rpb24tZm91cl06Y2hlY2tlZFwiXG5cdCk7XG5cdGNvbnN0IHNob3dFcnJvck9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3Rpb24tdGhyZWUgc21hbGxcIik7XG5cdGNvbnN0IHNob3dFcnJvclR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3Rpb24tZm91ciBzbWFsbFwiKTtcblxuXHRpZiAocXVlc3Rpb25UaHJlZUNoZWNrZWQubGVuZ3RoID09PSAwKSB7XG5cdFx0c2hvd0Vycm9yT25lLnRleHRDb250ZW50ID0gXCIqUGxlYXNlIGNob29zZSBvbmUgb2YgdGhlIGFuc3dlcnMgb3Igc3BlY2lmeSB5b3VyIGZhdm9yaXRlIGdlbnJlXCI7XG4gICAgICAgIHNob3dFcnJvck9uZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd0Vycm9yT25lLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgc2hvd0Vycm9yT25lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHR9XG5cblx0aWYgKHF1ZXN0aW9uRm91ckNoZWNrZWQubGVuZ3RoID09PSAwKSB7XG5cdFx0c2hvd0Vycm9yVHdvLnRleHRDb250ZW50ID0gXCIqUGxlYXNlIGNob29zZSBvbmUgb2YgdGhlIGFuc3dlcnNcIjtcbiAgICAgICAgc2hvd0Vycm9yVHdvLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0fSBlbHNlIHtcblx0XHRzaG93RXJyb3JUd28udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBzaG93RXJyb3JUd28uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdH1cblxuXHRpZiAocXVlc3Rpb25UaHJlZUNoZWNrZWQubGVuZ3RoID49IDEgJiYgcXVlc3Rpb25Gb3VyQ2hlY2tlZC5sZW5ndGggPj0gMSkge1xuXHRcdGNvbnNvbGUubG9nKFwiQ29tcGxldGUhXCIpO1xuXHRcdHN1cnZleVR3b01vZGFsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuXHRcdGxvYWRTdXJ2ZXlUaHJlZSgpXG5cdH1cbn07XG5cbmV4cG9ydCB7IGxvYWRTdXJ2ZXlUd28gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZE1vZGFsSW5mbyB9IGZyb20gXCIuL01vZHVsZXMvSW5mb01vZGFsLmpzXCJcbmltcG9ydCBjcmVhdGVXZWJQYWdlIGZyb20gXCIuL0NvbXBvbmVudHMvQ3JlYXRlV2ViUGFnZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUluZm9Nb2RhbCBmcm9tIFwiLi9Db21wb25lbnRzL0NyZWF0ZUluZm9Nb2RhbC5qc1wiO1xuaW1wb3J0IGNyZWF0ZVN1cnZleU9uZU1vZGFsIGZyb20gXCIuL0NvbXBvbmVudHMvQ3JlYXRlU3VydmV5T25lTW9kYWwuanNcIjtcbmltcG9ydCBjcmVhdGVTdXJ2ZXlUd29Nb2RhbCBmcm9tIFwiLi9Db21wb25lbnRzL0NyZWF0ZVN1cnZleVR3b01vZGFsLmpzXCI7XG5pbXBvcnQgY3JlYXRlU3VydmV5VGhyZWUgZnJvbSBcIi4vQ29tcG9uZW50cy9DcmVhdGVTdXJ2ZXlUaHJlZS5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoY3JlYXRlV2ViUGFnZSgpKVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb01vZGFsKCkpXG4gICAgcm9vdC5hcHBlbmRDaGlsZChjcmVhdGVTdXJ2ZXlPbmVNb2RhbCgpKVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoY3JlYXRlU3VydmV5VHdvTW9kYWwoKSlcbiAgICByb290LmFwcGVuZENoaWxkKGNyZWF0ZVN1cnZleVRocmVlKCkpXG4gICAgbG9hZE1vZGFsSW5mbygpXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==