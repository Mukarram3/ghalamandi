(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_project_invoice_invoice-print_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=script&lang=js& ***!
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
      title: 'Purchase Invoice',
      data: [],
      typeExpenses: []
    };
  },
  mounted: function mounted() {},
  methods: {
    getInvoiceDataFromApi: function getInvoiceDataFromApi() {
      var _this = this;

      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/deal/fetch-invoice', this.$route.params.id).then(function (res) {
        _this.data = res.data;
        console.log('Fetched Data: ', _this.data);
      });
    },
    subtotal: function subtotal() {
      var subTotal = 0;
      $.each(this.data.deal_commodities, function (index, value) {
        console.log('Calculations Sub Total: ', index, value);
        subTotal += value.total_amount;
      });
      return subTotal;
    },
    netTotal: function netTotal() {
      var _this2 = this;

      var subTotal = 0;
      var netTotal = 0;
      var totalExpenseMinus = 0;
      var totalExpensePlus = 0;
      $.each(this.data.deal_commodities, function (index, value) {
        subTotal += value.total_amount;
      });

      if (this.data.templates.length > 0) {
        $.each(this.data.templates, function (index, value) {
          if (value.deduction_type == 'cr') {
            totalExpenseMinus += _this2.data.templates[index].amount;
          } else if (value.deduction_type == 'dr') {
            totalExpensePlus += _this2.data.templates[index].amount;
          }
        });
      }

      console.log('Calculations: ', totalExpenseMinus, totalExpensePlus);
      netTotal = subTotal - totalExpenseMinus + totalExpensePlus;
      return netTotal;
    }
  },
  created: function created() {
    this.getInvoiceDataFromApi();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../public/css/style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/style.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/style.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/style.css ***!
  \********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Jameel_Noori_Nastaleeq_Kasheeda_ttf__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media print{@page {size: landscape}}\n@page {\n    size: landscape;\n}\n\n@font-face {\n    font-family: 'Jameel Noori Nastaleeq Kasheeda';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins', sans-serif;\n}\n\nh1,h2,h3,h4,h5,h6,p{\n    margin-block-start: 0em;\n    margin-block-end: 0em;\n}\n\ninput:focus-visible {\n    outline: 0px;\n}\n\n.main{\n    width: 100%;\n    height: 100vh;\n}\n\n.logo {\n    text-align: center;\n}\n\n.logo img{\n    width: 100px;\n}\n\n.office-copy{\n    width: 49.5%;\n    height: 100%;\n    float: left;\n}\n\n.factory-copy, .receiving-copy{\n    width: 25%;\n    height: 85%;\n    float: left;\n    border-left: 1px solid #000;\n    border-left-style: dashed;\n}\n\nh4.title{\n    margin-left: 10px;\n    font-weight: 500;\n}\n\n.office-data{\n    padding: 0 5px 0 10px;\n}\n\ntable {\n    width: 100%;\n}\n\n.factory-data table{\n    width: 95%;\n    margin: 0 auto;\n}\n\n.dataone, .datatwo, .datathree , .datafour,\n.datafive{\n    display: flex;\n    margin-bottom: 10px;\n}\n\n.data label{\n    font-size: 13px;\n}\n\n.dataone *, .datatwo *, .datathree *, .datafour *{\n    width: 50%;\n}\n\n.data td{\n    display: flex;\n    width: 50%;\n}\n\n\n.data td label, .data td.party-name .party-data label{\n    width: 54%;\n}\n\n.data p{\n    font-size: 12px;\n    text-align: right;\n}\n\n.data td.barcode{\n    width: 50%;\n    margin-right: 10px;\n    display: flex;\n}\n\n.dataone img{\n    width: 100% !important;\n    height: 43px;\n}\n\n.issuance-date ,\n.deal-date , .party-name ,\n.commodity , .crop,\n.rate , .tbags, .bag-weight,\n.godown\n{\n    display: block;\n    width: 100%;\n    height: 40px;\n    font-size: 18px;\n    padding: 9px;\n    border-radius: 3px;\n    border: 2px solid #dcdada;\n}\n\n.data td.issuance-date, .data td.party-name,\n.data td.tbags {\n    width: 48%;\n    margin-right: 10px;\n}\n\n.data td.party-name{\n    display: block;\n    width: 48%;\n    height: 98px;\n}\n\n.data td.party-name .party-data{\n    width: 100%;\n    height: 30px;\n    display: flex;\n}\n\n\n.data td.godown{\n    width: 47%;\n    margin-right: 10px;\n    padding: 10px 0px;\n    font-size: 14px;\n    line-height: 19px;\n    padding-left: 7px;\n}\n\n.data td.commodity{\n    height: auto;\n}\n\n.data td.commodity table{\n    width: 100%;\n}\n\n.data td.commodity table thead tr th{\n    text-align: left;\n    font-weight: 500;\n    font-size: 14px;\n}\n\n.data td.commodity table tbody td{\n    display: table-cell;\n}\n\n.data td.commodity table p{\n    text-align: left;\n    font-size: 12px;\n    width: 98%;\n}\n\n.party-name p{\n    font-family: 'Jameel Noori Nastaleeq Kasheeda';\n    text-align: right;\n    font-weight: 700;\n    font-size: 20px;\n    margin-top: -12px;\n}\n\n.data td.party-name.godown-item{\n    height: 215px;\n    margin: 0;\n}\n\n\n.factory-data .data{\n    margin-bottom: 4px;\n}\n\n.factory-data .data td{\n    width: 92%;\n    margin: 0;\n    padding: 5px;\n    height: 35px;\n    justify-content: space-between;\n}\n\n.factory-data .data td.godown {\n    width: 92% !important;\n}\n\n.factory-data .data td.barcode {\n    width: 95%;\n    margin: 0;\n    height: 40px;\n}\n\n.factory-data .data *{\n    width: unset;\n}\n\n.factory-data .data td.commodity table p {\n    width: auto;\n}\n\n.factory-data .data td.party-name .party-data{\n    justify-content: space-between;\n    height: 21px;\n}\n.price p {\n    width: 37px !important;\n}\n.crop_title p {\n    width: 90px !important;\n}\n\n.factory-data .data td.party-name{\n    height: auto;\n}\n\n.factory-data .data td.party-name .party-data p{\n    font-size: 17px;\n    margin-top: -8px;\n}\n\n.factory-data .data td.commodity{\n    height: auto;\n    padding: 0 5px;\n}\n\n.factory-data .data td label{\n    line-height: 22px;\n}\n\n.factory-data .data td.commodity table tbody td{\n    padding: 0;\n}\n\n.factory-data .data td.party-name .party-data label {\n    width: 55%;\n}\n\n@media print{\n    .main{\n        height: 100vh;\n        /*-webkit-transform: rotate(-90deg);*/\n        /*-moz-transform:rotate(-90deg);*/\n        /*filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);*/\n    }\n    .card.card-custom > .card-header{\n        display: none;\n    }\n    .btn:not(:disabled):not(.disabled) {\n        display: none;\n    }\n    .rounded-top-xl{\n        display: none;\n    }\n    .footer{\n        display: none;\n    }\n    #kt_footer{\n        display: none !important;\n    }\n    #kt_wrapper{\n        background-color: transparent !important;\n    }\n    #kt_scrolltop{\n        display: none;\n    }\n    }\n", ""]);
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

/***/ "./resources/js/src/view/project/invoice/invoice-print.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/view/project/invoice/invoice-print.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invoice_print_vue_vue_type_template_id_7f5a5154_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true& */ "./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true&");
/* harmony import */ var _invoice_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-print.vue?vue&type=script&lang=js& */ "./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=script&lang=js&");
/* harmony import */ var _invoice_print_vue_vue_type_style_index_0_id_7f5a5154_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css& */ "./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _invoice_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _invoice_print_vue_vue_type_template_id_7f5a5154_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _invoice_print_vue_vue_type_template_id_7f5a5154_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f5a5154",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/project/invoice/invoice-print.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice-print.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_template_id_7f5a5154_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_template_id_7f5a5154_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_template_id_7f5a5154_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_style_index_0_id_7f5a5154_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_style_index_0_id_7f5a5154_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_style_index_0_id_7f5a5154_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_style_index_0_id_7f5a5154_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_print_vue_vue_type_style_index_0_id_7f5a5154_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=template&id=7f5a5154&scoped=true& ***!
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
    _c("div", { staticClass: "container pt-4" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "float-left w-50" }, [
          _c("p", { staticClass: "font-weight-bold d-inline-block" }, [
            _vm._v("Invoice # :")
          ]),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                "pb-2 ml-2 px-4 font-weight-bolder border-bottom border-dark align-middle d-inline-block",
              staticStyle: { width: "150px" }
            },
            [_vm._v(_vm._s(_vm.data.du_id))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-right w-50 text-right " }, [
          _c("p", { staticClass: "font-weight-bold d-inline-block " }, [
            _vm._v("Deal Date :")
          ]),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                "pb-2 ml-2 px-4 font-weight-bolder border-bottom border-dark align-middle d-inline-block",
              staticStyle: { width: "150px" }
            },
            [_vm._v(_vm._s(_vm.data.deal_date))]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "float-left w-50" }, [
          _c("p", { staticClass: " d-inline-block" }, [
            _vm._v("Client Name :")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "font-weight-bolder d-inline-block" }, [
            _vm._v(_vm._s(_vm.data.customer.name_urdu))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-right w-50 text-right" }, [
          _c("p", { staticClass: " d-inline-block" }, [
            _vm._v("Delivery Date :")
          ]),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "font-weight-bolder d-inline-block text-center",
              staticStyle: { width: "150px" }
            },
            [_vm._v(_vm._s(_vm.data.delivery_date))]
          )
        ]),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "table table-bordered" },
          [
            _vm._m(2),
            _vm._v(" "),
            _vm._l(_vm.data.deal_commodities, function(item, index) {
              return _c("tr", { staticClass: "text-center" }, [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.commodity.name))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(item.total_weight_kgs / item.rate_unit))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.total_weight_kgs))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.rate))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      parseFloat(item.rate / item.total_weight_kgs).toFixed(2)
                    )
                  )
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.total_amount))])
              ])
            }),
            _vm._v(" "),
            _vm.data.templates.length > 0
              ? _c("tr", [
                  _c("h5", { staticClass: "text-center" }, [_vm._v("Expenses")])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.data.templates, function(exp, ind) {
              return _c("tr", [
                _c("td", { staticClass: "row ml-0" }, [
                  _c("div", { staticClass: "col-8" }, [
                    _c(
                      "span",
                      {
                        staticClass: "font-weight-bold text-left",
                        attrs: { colspan: "2", rowspan: "4" }
                      },
                      [
                        exp.deduction_type == "cr"
                          ? _c("span", { staticClass: "my-1 d-inline-block" }, [
                              _vm._v(_vm._s(exp.expense.name) + " -")
                            ])
                          : _c("span", { staticClass: "my-1 d-inline-block" }, [
                              _vm._v(_vm._s(exp.expense.name) + " +")
                            ]),
                        _vm._v(" "),
                        _c("br")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c(
                      "span",
                      {
                        staticClass: "font-weight-bold text-center",
                        attrs: { rowspan: "4" }
                      },
                      [
                        _c("span", { staticClass: "my-1 d-inline-block" }, [
                          _vm._v(_vm._s(exp.expense.price))
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ]
                    )
                  ])
                ])
              ])
            }),
            _vm._v(" "),
            _vm.data.deductions.length > 0
              ? _c("tr", [
                  _c("h5", { staticClass: "text-center" }, [
                    _vm._v("Deductions")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.data.deductions, function(v, i) {
              return _c("tr", [
                _c("td", { staticClass: "row ml-0" }, [
                  _c("div", { staticClass: "col-8" }, [
                    _c(
                      "span",
                      {
                        staticClass: "font-weight-bold text-left",
                        attrs: { colspan: "2", rowspan: "4" }
                      },
                      [
                        _c("span", { staticClass: "my-1 d-inline-block" }, [
                          _vm._v(_vm._s(v.deduct.name) + " -")
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c(
                      "span",
                      {
                        staticClass: "font-weight-bold text-center",
                        attrs: { rowspan: "4" }
                      },
                      [
                        _c("span", { staticClass: "my-1 d-inline-block" }, [
                          _vm._v(_vm._s(v.deduction))
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ]
                    )
                  ])
                ])
              ])
            }),
            _vm._v(" "),
            _c("tr"),
            _vm._v(" "),
            _c("tr"),
            _vm._v(" "),
            _c("tr", [
              _c("td", { attrs: { colspan: "3" } }, [
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Total Amount")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "float-right mr-2 font-weight-bolder" },
                  [_vm._v(_vm._s(_vm.data.total_amount))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { attrs: { colspan: "3" } }, [
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Net Amount")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "float-right mr-2 font-weight-bolder" },
                  [_vm._v(_vm._s(_vm.data.net_amount))]
                )
              ])
            ])
          ],
          2
        )
      ]),
      _vm._v(" "),
      _vm._m(3)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "text-center font-weight-bold " }, [
      _c("u", [_vm._v("INVOICE")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "text-center font-weight-bold " }, [
      _c("u", [_vm._v("SELLER BILL")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("th", [_vm._v("#")]),
      _vm._v(" "),
      _c("th", [_vm._v("Commodity")]),
      _vm._v(" "),
      _c("th", [_vm._v("No Of Bags")]),
      _vm._v(" "),
      _c("th", [_vm._v("Weight (kgs)")]),
      _vm._v(" "),
      _c("th", [_vm._v("Rate")]),
      _vm._v(" "),
      _c("th", [_vm._v("Rate Per KG")]),
      _vm._v(" "),
      _c("th", [_vm._v("Gross Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "w-50" }, [
        _c(
          "h3",
          {
            staticClass:
              "pt-3 mt-5 px-2 text-center border-top border-dark font-weight-bolder d-inline-block"
          },
          [_vm._v("Checked\n                        By")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-50 text-right" }, [
        _c(
          "h3",
          {
            staticClass:
              "pt-3 mt-5 px-2 text-center border-top border-dark font-weight-bolder d-inline-block"
          },
          [_vm._v("\n                        Signature")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/invoice/invoice-print.vue?vue&type=style&index=0&id=7f5a5154&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("603019c0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);