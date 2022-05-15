(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_project_arrival_arrival-print_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api.service */ "./resources/js/src/core/services/api.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      title: 'Arrival Invoice',
      data: [],
      supplier: '',
      arrival: ''
    };
  },
  mounted: function mounted() {},
  methods: {
    printInvoice: function printInvoice() {
      window.print();
    },
    getInvoiceDataFromApi: function getInvoiceDataFromApi() {
      var _this = this;

      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/arrival/fetch-invoice', this.$route.params.id).then(function (res) {
        _this.data = res.data['data'];
        _this.supplier = res.data['data']['customer']['name_urdu'];
        _this.arrival = res.data['arrival_date']; // console.log('Data: ', res.data['arrival_date']);
      });
    }
  },
  created: function created() {
    this.getInvoiceDataFromApi();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_arrival_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../public/css/arrival-style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/arrival-style.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_arrival_style_css__WEBPACK_IMPORTED_MODULE_1__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/arrival-style.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/arrival-style.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_Jameel_Noori_Nastaleeq_Kasheeda_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/Jameel Noori Nastaleeq Kasheeda.ttf */ "./public/fonts/Jameel Noori Nastaleeq Kasheeda.ttf");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Jameel_Noori_Nastaleeq_Kasheeda_ttf__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Jameel Noori Nastaleeq Kasheeda';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\nbody{\n    font-family: Jameel Noori Nastaleeq Kasheeda;\n    overflow-x: hidden;\n}\n.main_p{\n    font-size: 90px;\n    font-weight: bold;\n}\n.head{\n    border-bottom: 5px solid black !important;\n}\n.logo{\n    width: 180px;\n    height: auto;\n    display: inline-block;\n}\n.contact{\n    text-align: center;\n    margin-top: 30px;\n    font-weight: bolder;\n    font-size: 45px;\n}\n.name{\n    margin-bottom: -20px;\n}\n.table1 , .tr , .td , .th{\n    border: 2px solid black !important;\n    text-align: center;\n}\n.tr .th{\n    font-size: 23px;\n}\n.tr .td{\n    font-size: 22px;\n}\n.waight {\n    font-size: 22px;\n    font-weight: bolder;\n    margin: 30px;\n}\n.waight::before {\n    content: \"\";\n    width: 150px;\n    height: 2px;\n    background-color: black;\n    border: 2px solid black;\n    display: inline-block;\n    margin-right: 20px;\n}\n.note{\n    font-size: 22px;\n    text-align: center;\n    display: inline-block;\n\n}\n.address{\n    font-size: 24px;\n    font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/fonts/Jameel Noori Nastaleeq Kasheeda.ttf":
/*!**********************************************************!*\
  !*** ./public/fonts/Jameel Noori Nastaleeq Kasheeda.ttf ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Jameel Noori Nastaleeq Kasheeda.ttf?163413e8fbd8153ec428cb5879d78ad7");

/***/ }),

/***/ "./resources/js/src/view/project/arrival/arrival-print.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/view/project/arrival/arrival-print.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrival_print_vue_vue_type_template_id_40082e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrival-print.vue?vue&type=template&id=40082e28&scoped=true& */ "./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=template&id=40082e28&scoped=true&");
/* harmony import */ var _arrival_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrival-print.vue?vue&type=script&lang=js& */ "./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=script&lang=js&");
/* harmony import */ var _arrival_print_vue_vue_type_style_index_0_id_40082e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css& */ "./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _arrival_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _arrival_print_vue_vue_type_template_id_40082e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _arrival_print_vue_vue_type_template_id_40082e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "40082e28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/project/arrival/arrival-print.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./arrival-print.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=template&id=40082e28&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=template&id=40082e28&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_template_id_40082e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_template_id_40082e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_template_id_40082e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./arrival-print.vue?vue&type=template&id=40082e28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=template&id=40082e28&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_style_index_0_id_40082e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_style_index_0_id_40082e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_style_index_0_id_40082e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_style_index_0_id_40082e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_arrival_print_vue_vue_type_style_index_0_id_40082e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=template&id=40082e28&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=template&id=40082e28&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "main" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("p", { staticClass: "waight text-right position-relative" }, [
          _c(
            "span",
            {
              staticClass: "position-absolute",
              staticStyle: { top: "-10px", left: "8%" }
            },
            [_vm._v(" " + _vm._s(_vm.arrival))]
          ),
          _vm._v("تاریخ  اجراء")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "waight text-right position-relative" }, [
          _c(
            "span",
            {
              staticClass: "position-absolute",
              staticStyle: { top: "-10px", left: "12%" }
            },
            [_vm._v(_vm._s(_vm.data.bilty_no))]
          ),
          _vm._v(" بلٹی  نمبر")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row px-3" }, [
        _c("table", { staticClass: "table table-bordered table1" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("tr", { staticClass: "font-weight-bold tr" }, [
            _c("td", { staticClass: "py-4 td" }, [
              _vm._v(_vm._s(_vm.data.arrival_weight) + " کلو")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-4 td" }, [
              _vm._v(_vm._s(_vm.data.load_weight) + " کلو")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-4 td" }, [
              _vm._v(_vm._s(_vm.data.vehicle_freight))
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-4 td" }, [
              _vm._v(_vm._s(_vm.data.vehicle_no))
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-4 td" }, [
              _vm._v(_vm._s(_vm.data.driver_phone))
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "py-4 td" }, [
              _vm._v(_vm._s(_vm.data.driver_name))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("p", { staticClass: "waight text-right position-relative" }, [
          _c(
            "span",
            {
              staticClass: "position-absolute",
              staticStyle: { top: "-10px", left: "8%" }
            },
            [_vm._v(_vm._s(_vm.data.receiver_name))]
          ),
          _vm._v(" وصول کنندہ کا نام")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "waight text-right position-relative" }, [
          _c(
            "span",
            {
              staticClass: "position-absolute",
              staticStyle: { top: "-10px", left: "12%" }
            },
            [_vm._v(_vm._s(_vm.data.transporter_name))]
          ),
          _vm._v(" ٹرانسپورٹر کا نام")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "waight text-right position-relative " }, [
          _c(
            "span",
            {
              staticClass: "position-absolute",
              staticStyle: { top: "-10px", left: "8%" }
            },
            [_vm._v(_vm._s(_vm.supplier))]
          ),
          _vm._v(" سپلائر کا نام")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-5" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("p", { staticClass: "waight position-relative" }, [
            _c(
              "span",
              {
                staticClass: "position-absolute",
                staticStyle: { top: "-10px", left: "8%" }
              },
              [_vm._v(_vm._s(_vm.data.deduction_weight) + " کلو")]
            ),
            _vm._v("کٹوٹی  وزن")
          ]),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "waight position-relative",
              staticStyle: { "margin-top": "-3%" }
            },
            [
              _c(
                "span",
                {
                  staticClass: "position-absolute",
                  staticStyle: { top: "-10px", left: "8%" }
                },
                [_vm._v(_vm._s(_vm.data.total_weight) + " کلو")]
              ),
              _vm._v(" کُل وزن")
            ]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "waight position-relative" }, [
            _c(
              "span",
              {
                staticClass: "position-absolute",
                staticStyle: { top: "-10px", left: "8%" }
              },
              [_vm._v(_vm._s(_vm.data.net_weight) + " کلو")]
            ),
            _vm._v(" میزان وزن")
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c(
        "div",
        { staticClass: "row p-2 border border-dark mx-1 bg-light head " },
        [
          _c("div", { staticClass: "col-4" }, [
            _c("div", { staticClass: "contact" }, [
              _c("div", { staticClass: "name " }, [_vm._v("وقار الظفر")]),
              _vm._v(" "),
              _c("div", { staticClass: "num" }, [_vm._v("0344-0000000")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("span", { staticClass: "logo p-2 offset-2" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: "media/ghalamandi/logo.png",
                  alt: "main logo image"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4 text-right" }, [
            _c("p", { staticClass: "main_p" }, [_vm._v("کریو ٹک")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "text-center font-weight-bolder mt-2",
          staticStyle: { "font-size": "30px" }
        },
        [
          _vm._v(
            "دال  مونگ ،دال  مسور،دال  چنا،دال  ماش  دھلی،چنے  سفید،چنے  سیاہ،چھلکا  مونگ  ماش"
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "font-weight-bold tr" }, [
      _c("th", { staticClass: "py-3 th" }, [_vm._v(" آمد کے وقت وزن")]),
      _vm._v(" "),
      _c("th", { staticClass: "py-3 th" }, [_vm._v("لوڈ کے وقت وزن")]),
      _vm._v(" "),
      _c("th", { staticClass: "py-3 th" }, [_vm._v("گاڑی کا خرچ")]),
      _vm._v(" "),
      _c("th", { staticClass: "py-3 th" }, [_vm._v("گاڑی نمبر")]),
      _vm._v(" "),
      _c("th", { staticClass: "py-3 th" }, [_vm._v("ڈرائیور کا فون نمبر")]),
      _vm._v(" "),
      _c("th", { staticClass: "py-3 th" }, [_vm._v("ڈرائیور کا نام")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid pt-5" }, [
      _c(
        "div",
        {
          staticClass: "row border-top border-bottom pb-2 mb-2 mx-1 border-dark"
        },
        [
          _c("div", { staticClass: "col-6 p-3  note" }, [
            _c("div", { staticClass: " p-2 d-inline-block" }, [
              _c(
                "span",
                {
                  staticClass:
                    "p-2 font-weight-bolder rounded-circle bg-dark text-white ml-2"
                },
                [_vm._v("نوٹ")]
              ),
              _vm._v(
                " دال ماش دھلی\n                        اور دال مونگ دھلی کا کوئی کلیم نہیں\n\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c("span", { staticClass: "d-inline-block mt-2" }, [
                _vm._v("048-xxxxxxx")
              ]),
              _vm._v(" آفس رابطہ نمبر")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 text-center address  p-3" }, [
            _c("div", {}, [
              _c(
                "span",
                {
                  staticClass:
                    "p-2 font-weight-bolder rounded-circle bg-dark text-white ml-3"
                },
                [_vm._v("ایڈریس")]
              ),
              _vm._v(
                " قاسم\n                        پارک فیز 2 مراد آباد کالونی سرگودھا\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex justify-content-between mt-2" }, [
              _c("span", { staticClass: "print_by" }, [
                _c("i", [_vm._v("Print By")]),
                _vm._v(" "),
                _c("b", [_vm._v("Admin")])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "date" }, [_vm._v("07/07/2021")]),
              _vm._v(" "),
              _c("span", { staticClass: "time" }, [_vm._v("11:00 AM")])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/arrival/arrival-print.vue?vue&type=style&index=0&id=40082e28&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("47ccb933", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);