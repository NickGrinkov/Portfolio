/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-family: \"IM Fell English SC\", serif;\n  font-size: 20px; }\n  * li {\n    list-style-type: none; }\n  * a {\n    text-decoration: none;\n    color: black; }\n  * img {\n    max-width: 100%;\n    height: auto; }\n  * h2 {\n    text-decoration: underline; }\n\n.show {\n  display: flex; }\n\n.hide {\n  display: none; }\n\n.anime {\n  position: absolute;\n  top: 1000%; }\n\n.wrapper {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  padding: 0 3%; }\n  @media (min-width: 768px) {\n    .wrapper {\n      max-width: 1200px;\n      margin: 0 auto; } }\n  .wrapper .burger {\n    display: inline-block;\n    cursor: pointer;\n    position: absolute;\n    top: 40px;\n    left: 80%; }\n    @media (min-width: 768px) {\n      .wrapper .burger {\n        display: none; } }\n  .wrapper .bar1,\n  .wrapper .bar2,\n  .wrapper .bar3 {\n    width: 30px;\n    height: 5px;\n    background-color: #333;\n    margin: 6px 0;\n    transition: 0.4s; }\n  .wrapper .change .bar1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-9px, 6px); }\n  .wrapper .change .bar2 {\n    opacity: 0; }\n  .wrapper .change .bar3 {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-8px, -8px); }\n  .wrapper .header {\n    width: 100%;\n    height: 100px; }\n    @media (min-width: 768px) {\n      .wrapper .header {\n        display: flex;\n        width: 90%;\n        margin: 0 auto; } }\n    .wrapper .header_list {\n      padding: 20px;\n      padding-left: 15px;\n      padding-top: 100px; }\n      @media (min-width: 768px) {\n        .wrapper .header_list {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          height: 100px;\n          width: 100%;\n          padding: 0; } }\n    .wrapper .header_list_item {\n      display: flex;\n      font-size: 35px;\n      border: 1px solid black;\n      padding: 5px; }\n      @media (min-width: 768px) {\n        .wrapper .header_list_item {\n          font-size: 35px;\n          padding: 0;\n          border: none; } }\n  .wrapper .present {\n    width: 100%;\n    margin-bottom: 50px; }\n    .wrapper .present_wrapper {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 53%;\n      height: 150px;\n      margin-left: 7%; }\n      @media (min-width: 768px) {\n        .wrapper .present_wrapper {\n          display: flex;\n          width: 50%; } }\n    .wrapper .present_name {\n      font-size: 25px; }\n      @media (min-width: 768px) {\n        .wrapper .present_name {\n          font-size: 40px; } }\n    .wrapper .present_info {\n      font-size: 20px;\n      text-align: center; }\n      @media (min-width: 768px) {\n        .wrapper .present_info {\n          font-size: 30px; } }\n    @media (min-width: 768px) {\n      .wrapper .present_img {\n        width: 100%; } }\n  .wrapper .inform {\n    background-color: #fdeed9;\n    margin-bottom: 50px;\n    padding: 30px 0;\n    box-sizing: border-box; }\n    .wrapper .inform_wrapper {\n      display: flex;\n      flex-direction: column;\n      align-self: center;\n      margin: 0 auto;\n      width: 90%; }\n    .wrapper .inform_header {\n      display: flex;\n      justify-content: center;\n      font-size: 40px;\n      margin-bottom: 50px; }\n    .wrapper .inform_text {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-between;\n      height: 300px; }\n      .wrapper .inform_text_item {\n        display: flex;\n        justify-content: center;\n        text-align: center; }\n  .wrapper .skills {\n    margin-bottom: 50px; }\n    .wrapper .skills img {\n      width: 50px; }\n    .wrapper .skills_wrapper {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 450px;\n      width: 90%;\n      margin: 0 auto; }\n      @media (min-width: 768px) {\n        .wrapper .skills_wrapper {\n          height: 250px; } }\n    .wrapper .skills_header {\n      display: flex;\n      justify-content: center;\n      font-size: 40px; }\n    .wrapper .skills_prog {\n      display: flex;\n      justify-content: center; }\n    .wrapper .skills_list {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 350px; }\n      @media (min-width: 768px) {\n        .wrapper .skills_list {\n          display: flex;\n          flex-direction: row;\n          height: 100px;\n          width: 60%;\n          margin: 0 auto; } }\n      .wrapper .skills_list_item {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n        .wrapper .skills_list_item p {\n          display: flex;\n          justify-content: center; }\n  .wrapper .portfolio {\n    background-color: #fdeed9; }\n    .wrapper .portfolio_wrapper {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 90%;\n      margin: 0 auto; }\n    .wrapper .portfolio_header {\n      display: flex;\n      justify-content: center;\n      font-size: 40px;\n      margin: 40px 0; }\n    .wrapper .portfolio_item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-align: center;\n      margin-bottom: 70px; }\n      .wrapper .portfolio_item a {\n        display: flex;\n        justify-content: center;\n        margin-top: 30px;\n        text-decoration: underline; }\n  .wrapper .contacts img {\n    width: 50px; }\n  .wrapper .contacts_wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    width: 90%;\n    margin: 0 auto;\n    padding: 100px 0;\n    height: 500px; }\n  .wrapper .contacts_header {\n    display: flex;\n    justify-content: center;\n    font-size: 40px; }\n  .wrapper .contacts_text {\n    display: flex;\n    justify-content: center;\n    text-align: center; }\n  .wrapper .contacts_btn {\n    width: 250px;\n    padding: 10px;\n    border-radius: 15px;\n    background-color: black;\n    color: white; }\n  .wrapper .contacts_list {\n    display: flex;\n    justify-content: space-between;\n    width: 50%; }\n    .wrapper .contacts_list_item {\n      display: flex;\n      justify-content: center; }\n  .wrapper .contacts_network {\n    display: flex;\n    justify-content: center;\n    text-align: center; }\n", "",{"version":3,"sources":["webpack://./src/scss/style.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"IM Fell English SC\", serif;\r\n  font-size: 20px;\r\n  li {\r\n    list-style-type: none;\r\n  }\r\n  a {\r\n    text-decoration: none;\r\n    color: black;\r\n  }\r\n  img {\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n  h2 {\r\n    text-decoration: underline;\r\n  }\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.anime {\r\n  position: absolute;\r\n  top: 1000%;\r\n}\r\n\r\n$headers-font: 40px;\r\n$wrappers-width: 90%;\r\n\r\n.wrapper {\r\n  position: relative;\r\n  max-width: 768px;\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  @media (min-width: 768px) {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n  .burger {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 80%;\r\n    @media (min-width: 768px) {\r\n      display: none;\r\n    }\r\n  }\r\n  .bar1,\r\n  .bar2,\r\n  .bar3 {\r\n    width: 30px;\r\n    height: 5px;\r\n    background-color: #333;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n  \r\n  .change .bar1 {\r\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\r\n    transform: rotate(-45deg) translate(-9px, 6px);\r\n  }\r\n\r\n  \r\n  .change .bar2 {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .change .bar3 {\r\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\r\n    transform: rotate(45deg) translate(-8px, -8px);\r\n  }\r\n  .header {\r\n    width: 100%;\r\n    height: 100px;\r\n    @media (min-width: 768px) {\r\n        display: flex;\r\n        width: $wrappers-width;\r\n        margin: 0 auto;\r\n    }\r\n    &_list {\r\n      padding: 20px;\r\n      padding-left: 15px;\r\n      padding-top: 100px;\r\n      @media (min-width: 768px) {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;  \r\n        height: 100px;\r\n        width: 100%;\r\n        padding: 0;\r\n      }\r\n    }\r\n    &_list_item {\r\n      display: flex;\r\n      font-size: 35px;\r\n      border: 1px solid black;\r\n      padding: 5px;\r\n      @media (min-width: 768px) {\r\n        font-size: 35px;\r\n        padding: 0;\r\n        border: none;\r\n      }\r\n    }\r\n  }\r\n  .present {\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n    &_wrapper {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      width: 53%;\r\n      height: 150px;\r\n      margin-left: 7%;\r\n      @media (min-width: 768px) {\r\n        display: flex;\r\n        width: 50%;\r\n      }\r\n    }\r\n    &_name {\r\n      font-size: 25px;\r\n      @media (min-width: 768px) {\r\n        font-size: 40px;\r\n      }\r\n    }\r\n    &_info {\r\n      font-size: 20px;\r\n      text-align: center;\r\n      @media (min-width: 768px) {\r\n        font-size: 30px;\r\n      }\r\n    }\r\n    &_img {\r\n      @media (min-width: 768px) {\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n  .inform {\r\n    background-color: #fdeed9;\r\n    margin-bottom: 50px;\r\n    padding: 30px 0;\r\n    box-sizing: border-box;\r\n    &_wrapper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-self: center;\r\n      margin: 0 auto;\r\n      width: $wrappers-width;\r\n    }\r\n    &_header {\r\n      display: flex;\r\n      justify-content: center;\r\n      font-size: $headers-font;\r\n      margin-bottom: 50px;\r\n    }\r\n    &_text {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n      height: 300px;\r\n      &_item {\r\n        display: flex;\r\n        justify-content: center;\r\n        text-align: center;\r\n      }\r\n    }\r\n  }\r\n  .skills {\r\n    margin-bottom: 50px;\r\n    img {\r\n      width: 50px;\r\n    }\r\n    &_wrapper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      height: 450px;\r\n      width: $wrappers-width;\r\n      margin: 0 auto;\r\n      @media (min-width: 768px) {\r\n        height: 250px;\r\n      }\r\n    }\r\n    &_header {\r\n      display: flex;\r\n      justify-content: center;\r\n      font-size: $headers-font;\r\n    }\r\n    &_prog {\r\n      display: flex;\r\n      justify-content: center;\r\n    }\r\n    &_list {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      height: 350px;\r\n      @media (min-width: 768px) {\r\n        display: flex;\r\n        flex-direction: row;\r\n        height: 100px;\r\n        width: 60%;\r\n        margin: 0 auto;\r\n      }\r\n      &_item {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        p {\r\n          display: flex;\r\n          justify-content: center;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .portfolio {\r\n    background-color: #fdeed9;\r\n    &_wrapper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      width: $wrappers-width;\r\n      margin: 0 auto;\r\n    }\r\n    &_header {\r\n      display: flex;\r\n      justify-content: center;\r\n      font-size: $headers-font;\r\n      margin: 40px 0;\r\n    }\r\n    &_item {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      text-align: center;\r\n      margin-bottom: 70px;\r\n      a {\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-top: 30px;\r\n        text-decoration: underline;\r\n      }\r\n    }\r\n  }\r\n  .contacts {\r\n    img {\r\n      width: 50px;\r\n    }\r\n    &_wrapper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      width: $wrappers-width;\r\n      margin: 0 auto;\r\n      padding: 100px 0;\r\n      height: 500px;\r\n    }\r\n    &_header {\r\n      display: flex;\r\n      justify-content: center;\r\n      font-size: $headers-font;\r\n    }\r\n    &_text {\r\n      display: flex;\r\n      justify-content: center;\r\n      text-align: center;\r\n    }\r\n    &_btn {\r\n      width: 250px;\r\n      padding: 10px;\r\n      border-radius: 15px;\r\n      background-color: black;\r\n      color: white;\r\n    }\r\n    &_list {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      width: 50%;\r\n      &_item {\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n    &_network {\r\n      display: flex;\r\n      justify-content: center;\r\n      text-align: center;\r\n    }\r\n  }\r\n}\r\n\r\n// .wrapper {\r\n//     position: relative;\r\n//     max-width: 1200px;\r\n//     width: 100%;\r\n//     margin: 0 auto;\r\n//     padding: 0 3%;\r\n//     @media (min-width: 320px) and (max-width: 768px) {\r\n//         width: 100%;\r\n//         padding: 20px;\r\n//     }\r\n//   .header {\r\n//     width: 100%;\r\n//     height: 100px;\r\n//     &_list {\r\n//         height: 100px;\r\n//         width: 100%;\r\n//         margin: auto;\r\n//         display: flex;\r\n//         align-items: center;\r\n//         @media (min-width: 320px) and (max-width: 768px) {\r\n//             display: flex;\r\n//             flex-direction: column;\r\n//             margin-bottom: 100px;\r\n//         }\r\n//     }\r\n//     &_list_item {\r\n//         display: flex;\r\n//         justify-content: center;\r\n//         @media (min-width: 320px) and (max-width: 768px) {\r\n//             font-size: 30px;\r\n//         }\r\n//     }\r\n//   }\r\n//   .present {\r\n//     width: 100%;\r\n//     margin-bottom: 50px;\r\n//     @media (min-width: 320px) and (max-width: 768px) {\r\n//         margin-top: 120px;\r\n//     }\r\n//     &_wrapper {\r\n//       display: flex;\r\n//       align-items: center;\r\n//       width: $wrappers-width;\r\n//       height: 150px;\r\n//       @media (min-width: 320px) and (max-width: 768px) {\r\n//         display: flex;\r\n//         flex-direction: column;\r\n//         margin: 0 auto;\r\n//         margin-bottom: 60px;\r\n//       }\r\n//     }\r\n//     &_name {\r\n//       font-size: 50px;\r\n//     }\r\n//   }\r\n//   .inform {\r\n//     background-color: #fdeed9;\r\n//     margin-bottom: 50px;\r\n//     padding: 30px 0;\r\n//     box-sizing: border-box;\r\n//     &_wrapper {\r\n//       display: flex;\r\n//       flex-direction: column;\r\n//       align-self: center;\r\n//       margin: 0 auto;\r\n//       width: $wrappers-width;\r\n//     }\r\n//     &_header {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//       font-size: $headers-font;\r\n//       margin-bottom: 50px;\r\n//     }\r\n//     &_text {\r\n//       display: flex;\r\n//       flex-direction: column;\r\n//       align-items: center;\r\n//       justify-content: space-between;\r\n//       height: 300px;\r\n//       &_item {\r\n//         display: flex;\r\n//         justify-content: center;\r\n//         text-align: center;\r\n//       }\r\n//     }\r\n//   }\r\n//   .skills {\r\n//     margin-bottom: 50px;\r\n//     img {\r\n//       width: 50px;\r\n//     }\r\n//     &_wrapper {\r\n//       display: flex;\r\n//       flex-direction: column;\r\n//       justify-content: space-between;\r\n//       height: 300px;\r\n//       width: $wrappers-width;\r\n//       margin: 0 auto;\r\n//       padding: 30px;\r\n//       @media (min-width: 320px) and (max-width: 768px) {\r\n//         justify-content: space-between;\r\n//         height: 450px;\r\n//       }\r\n//     }\r\n//     &_header {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//       font-size: $headers-font;\r\n//     }\r\n//     &_prog {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//     }\r\n//     &_list {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//       @media (min-width: 320px) and (max-width: 768px) {\r\n//         display: flex;\r\n//         flex-direction: column;\r\n//       }\r\n//       &_item {\r\n//         display: flex;\r\n//         flex-direction: column;\r\n//         justify-content: center;\r\n//         align-items: center;\r\n//         p {\r\n//           display: flex;\r\n//           justify-content: center;\r\n//         }\r\n//       }\r\n//     }\r\n//   }\r\n//   .portfolio {\r\n//     background-color: #fdeed9;\r\n//     img {\r\n//       width: 1200px;\r\n//     }\r\n//     &_wrapper {\r\n//       display: flex;\r\n//       flex-direction: column;\r\n//       align-items: center;\r\n//       width: $wrappers-width;\r\n//       margin: 0 auto;\r\n//     }\r\n//     &_header {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//       font-size: $headers-font;\r\n//       margin: 40px 0;\r\n//     }\r\n//     &_item {\r\n//       display: flex;\r\n//       flex-direction: column;\r\n//       align-items: center;\r\n//       margin-bottom: 70px;\r\n//       a {\r\n//         display: flex;\r\n//         justify-content: center;\r\n//         margin-top: 30px;\r\n//         text-decoration: underline;\r\n//       }\r\n//     }\r\n//   }\r\n//   .contacts {\r\n//     img {\r\n//       width: 50px;\r\n//     }\r\n//     &_wrapper {\r\n//       display: flex;\r\n//       flex-direction: column;\r\n//       justify-content: space-between;\r\n//       align-items: center;\r\n//       width: $wrappers-width;\r\n//       margin: 0 auto;\r\n//       padding: 100px;\r\n//       height: 500px;\r\n//     }\r\n//     &_header {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//       font-size: $headers-font;\r\n//     }\r\n//     &_text {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//       text-align: center;\r\n//     }\r\n//     &_btn {\r\n//       width: 250px;\r\n//       padding: 10px;\r\n//       border-radius: 15px;\r\n//       background-color: black;\r\n//       color: white;\r\n//     }\r\n//     &_list {\r\n//       display: flex;\r\n//       width: 50%;\r\n//       &_item {\r\n//         display: flex;\r\n//         justify-content: center;\r\n//       }\r\n//     }\r\n//     &_network {\r\n//       display: flex;\r\n//       justify-content: center;\r\n//       text-align: center;\r\n//     }\r\n//   }\r\n// }\r\n\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");


const burger = document.querySelector('.burger')
const wrapperContent = document.querySelector('.wrapper_content')
const headerList = document.querySelector('.header_list')
const header = document.querySelector('.header')
const headerItems = document.getElementsByClassName('header_list_item')

function showContent() {
    headerList.classList.toggle('hide')
    header.classList.toggle('hide')
    wrapperContent.classList.toggle('hide')
    burger.classList.toggle('change')
}


 if(document.documentElement.clientWidth < 768 ) {
    burger.addEventListener('click', showContent)

    for (let i = 0; i < headerItems.length; i++) {
    headerItems[i].addEventListener('click', showContent)
    }
 } else {
     ''
 }








})();

/******/ })()
;
//# sourceMappingURL=index.js.map