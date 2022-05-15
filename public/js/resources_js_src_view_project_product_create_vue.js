(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_project_product_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "KTCard",
  props: {
    /**
     * String title
     */
    title: String,

    /**
     * Set card head size. Eg. md, lg, sm, etc.
     */
    headSize: String,

    /**
     * Set card to fluid
     */
    fluidHeight: Boolean,

    /**
     * Set card to fluid in half
     */
    fluidHalfHeight: Boolean,

    /**
     * Set overlay head
     */
    headOverlay: Boolean,

    /**
     * Set extra class for main card
     */
    cardClass: String,

    /**
     * Set extra class for card head
     */
    headClass: String,

    /**
     * Set extra class for card body
     */
    bodyClass: String,

    /**
     * Set card body to fit
     */
    bodyFit: Boolean,

    /**
     * Set card body to fluid
     */
    bodyFluid: Boolean,

    /**
     * Code examples
     */
    example: Boolean
  },
  components: {},
  methods: {},
  computed: {
    classes: function classes() {
      var cls = {
        "example example-compact": this.example,
        "height-fluid": this.fluidHeight,
        "height-fluid-half": this.fluidHalfHeight,
        "head-overlay": this.headOverlay
      };
      cls[this.headSizeClass] = this.headSizeClass; // append extra classes

      if (this.cardClass) {
        cls[this.cardClass] = true;
      }

      return cls;
    },
    hasTitleSlot: function hasTitleSlot() {
      return !!this.$slots["title"];
    },
    hasFootSlot: function hasFootSlot() {
      return !!this.$slots["foot"];
    },
    headSizeClass: function headSizeClass() {
      if (this.headSize) {
        return "head-".concat(this.headSize);
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/product/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/product/create_modal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_content_Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/Card.vue */ "./resources/js/src/view/content/Card.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
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
  components: {
    KTCard: _view_content_Card_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      title: 'Create Commodity',
      titleRight: 'List Commodities',
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.SET_BREADCRUMB, [{
      title: "Dashboard"
    }]);
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      alert(JSON.stringify(this.form));
      ApiService.post('/api/category/create', this.form).then(function (res) {
        console.log(res);

        _this.$bvToast.toast('Toast body content', {
          title: "Variant ".concat(variant || 'default'),
          variant: variant,
          solid: true
        });
      });
    },
    onReset: function onReset(evt) {
      var _this2 = this;

      evt.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = []; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/view/content/Card.vue":
/*!************************************************!*\
  !*** ./resources/js/src/view/content/Card.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=5cd570b7& */ "./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/project/product/create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/view/project/product/create_modal.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_4a0a677a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_modal.vue?vue&type=template&id=4a0a677a& */ "./resources/js/src/view/project/product/create.vue?vue&type=template&id=4a0a677a&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_modal.vue?vue&type=script&lang=js& */ "./resources/js/src/view/project/product/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _create_vue_vue_type_template_id_4a0a677a___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_4a0a677a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/project/product/create_modal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/view/content/Card.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/src/view/project/product/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/view/project/product/create_modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/product/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=5cd570b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&");


/***/ }),

/***/ "./resources/js/src/view/project/product/create.vue?vue&type=template&id=4a0a677a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/project/product/create_modal.vue?vue&type=template&id=4a0a677a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4a0a677a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4a0a677a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4a0a677a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_modal.vue?vue&type=template&id=4a0a677a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/product/create.vue?vue&type=template&id=4a0a677a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "card card-custom gutter-b", class: _vm.classes },
    [
      _vm.hasTitleSlot || _vm.title
        ? _c("div", { staticClass: "card-header", class: _vm.headClass }, [
            _c(
              "div",
              { staticClass: "card-title" },
              [
                _vm.hasTitleSlot ? _vm._t("title") : _vm._e(),
                _vm._v(" "),
                !_vm.hasTitleSlot
                  ? _c("h3", { staticClass: "card-label" }, [
                      _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
                    ])
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-toolbar" }, [_vm._t("toolbar")], 2)
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-body",
          class: {
            bodyClass: _vm.bodyClass,
            "body-fit": _vm.bodyFit,
            "body-fluid": _vm.bodyFluid
          }
        },
        [_vm._t("body")],
        2
      ),
      _vm._v(" "),
      _vm.hasFootSlot
        ? _c("div", { staticClass: "card-footer" }, [_vm._t("foot")], 2)
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/product/create.vue?vue&type=template&id=4a0a677a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/product/create_modal.vue?vue&type=template&id=4a0a677a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c("KTCard", {
            ref: "preview",
            attrs: { title: _vm.title },
            scopedSlots: _vm._u(
              [
                _vm.hasTitleSlot
                  ? {
                      key: "title",
                      fn: function() {
                        return [
                          _c(
                            "h3",
                            { staticClass: "card-title" },
                            [_vm._t("title")],
                            2
                          )
                        ]
                      },
                      proxy: true
                    }
                  : null,
                {
                  key: "toolbar",
                  fn: function() {
                    return [
                      _c("div", {
                        staticClass: "example-tools justify-content-center"
                      })
                    ]
                  },
                  proxy: true
                },
                {
                  key: "body",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _vm.show
                            ? _c(
                                "b-form",
                                {
                                  on: {
                                    submit: _vm.onSubmit,
                                    reset: _vm.onReset
                                  }
                                },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        id: "input-group-1",
                                        label: "Email address:",
                                        "label-for": "input-1",
                                        description:
                                          "We'll never share your email with anyone else."
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "email",
                                          required: "",
                                          placeholder: "Enter email"
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        id: "input-group-2",
                                        label: "Your Name:",
                                        "label-for": "input-2"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-2",
                                          required: "",
                                          placeholder: "Enter name"
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        id: "input-group-3",
                                        label: "Food:",
                                        "label-for": "input-3"
                                      }
                                    },
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          id: "input-3",
                                          options: _vm.foods,
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.food,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "food", $$v)
                                          },
                                          expression: "form.food"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    { attrs: { id: "input-group-4" } },
                                    [
                                      _c(
                                        "b-form-checkbox-group",
                                        {
                                          attrs: { id: "checkboxes-4" },
                                          model: {
                                            value: _vm.form.checked,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "checked", $$v)
                                            },
                                            expression: "form.checked"
                                          }
                                        },
                                        [
                                          _c(
                                            "b-form-checkbox",
                                            { attrs: { value: "me" } },
                                            [_vm._v("Check me out")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-checkbox",
                                            { attrs: { value: "that" } },
                                            [_vm._v("Check that out")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "submit",
                                        variant: "primary"
                                      }
                                    },
                                    [_vm._v("Submit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "reset",
                                        variant: "danger"
                                      }
                                    },
                                    [_vm._v("Reset")]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "b-card",
                            {
                              staticClass: "mt-3",
                              attrs: { header: "Form Data Result" }
                            },
                            [
                              _c("pre", { staticClass: "m-0" }, [
                                _vm._v(_vm._s(_vm.form))
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ],
              null,
              true
            )
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c("KTCard", {
            ref: "preview",
            attrs: { title: _vm.titleRight },
            scopedSlots: _vm._u(
              [
                _vm.hasTitleSlot
                  ? {
                      key: "title",
                      fn: function() {
                        return [
                          _c(
                            "h3",
                            { staticClass: "card-title" },
                            [_vm._t("title")],
                            2
                          )
                        ]
                      },
                      proxy: true
                    }
                  : null,
                {
                  key: "toolbar",
                  fn: function() {
                    return [
                      _c("div", {
                        staticClass: "example-tools justify-content-center"
                      })
                    ]
                  },
                  proxy: true
                },
                {
                  key: "body",
                  fn: function() {
                    return [_vm._v("\n                 Hello\n\n             ")]
                  },
                  proxy: true
                }
              ],
              null,
              true
            )
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
