(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_project_account_index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/account/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/account/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_content_Card_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/content/Card.vue */ "./resources/js/src/view/content/Card.vue");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var v_select2_multiple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! v-select2-multiple-component */ "./node_modules/v-select2-multiple-component/src/Select2MultipleControl.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    KTCard: _view_content_Card_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Select2MultipleControl: v_select2_multiple_component__WEBPACK_IMPORTED_MODULE_5__.default
  },
  data: function data() {
    return {
      title: 'Accounts',
      titleRight: 'List Accounts',
      is_update: false,
      submit_text: 'Submit',
      loading: false,
      form: {
        type: '',
        name: '',
        name_urdu: '',
        phone: '',
        phone_2: '',
        desc: '',
        company: '',
        city: '',
        cinic: '',
        address: '',
        balance: ''
      },
      checkbox: false,
      show: true,
      search: '',
      headers: [{
        text: 'ID',
        align: 'left',
        sortable: false,
        value: 'id'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Address',
        value: 'address'
      }, {
        text: 'Unloading Office Address',
        value: 'unload_address'
      }, {
        text: 'Type',
        value: 'type'
      }, {
        text: 'Company',
        value: 'company'
      }, {
        text: 'City',
        value: 'city'
      }, {
        text: 'Created By',
        value: 'user.name'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      desserts: [],
      dessertsTotal: 0,
      errors: {}
    };
  },
  computed: {
    filteredList: function filteredList() {
      var _this = this;

      return this.desserts.filter(function (item) {
        return item.name.toLowerCase().match(_this.search.toLowerCase());
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.SET_BREADCRUMB, [{
      title: "Suppliers & Customers"
    }]);
  },
  methods: {
    paginate: function paginate(e) {
      var _this2 = this;

      console.dir(e);
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.default.get("/api/customer/fetch?page=".concat(e.page, "&per_page=").concat(e.itemsPerPage)).then(function (res) {
        console.log('Fetched Data: ', res.data);
        _this2.desserts = res.data.data;
        _this2.dessertsTotal = res.data.total;
      });
    },
    editItem: function editItem(item) {
      this.$router.push({
        name: 'edit_account',
        params: {
          id: item.id
        }
      });
    },
    deleteItem: function deleteItem(item) {
      var _this3 = this;

      var index = this.desserts.indexOf(item);
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.default.post('/api/customer/delete', item).then(function (res) {
            // console.log(res)
            _this3.desserts.splice(index, 1);

            _this3.$bvToast.toast(res.data.message, {
              title: "Account Deleted Successfully...",
              solid: true
            });

            _this3.form.type = 'Select Type';
            _this3.form.name = '';
            _this3.form.name_urdu = '';
            _this3.form.phone = '';
            _this3.form.phone_2 = '';
            _this3.form.desc = '';
            _this3.form.company = '';
            _this3.form.cinic = '';
            _this3.form.city = '';
            _this3.form.address = '';
            _this3.form.balance = ''; // this.onReset();
            // this.getDataFromApi();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vuetify/dist/vuetify.min.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vuetify/dist/vuetify.min.css ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n* Vuetify v2.5.0\n* Forged by John Leider\n* Released under the MIT License.\n*/@-webkit-keyframes v-shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}@keyframes v-shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}.v-application .black{background-color:#000!important;border-color:#000!important}.v-application .black--text{color:#000!important;caret-color:#000!important}.v-application .white{background-color:#fff!important;border-color:#fff!important}.v-application .white--text{color:#fff!important;caret-color:#fff!important}.v-application .transparent{background-color:transparent!important;border-color:transparent!important}.v-application .transparent--text{color:transparent!important;caret-color:transparent!important}.v-application .red{background-color:#f44336!important;border-color:#f44336!important}.v-application .red--text{color:#f44336!important;caret-color:#f44336!important}.v-application .red.lighten-5{background-color:#ffebee!important;border-color:#ffebee!important}.v-application .red--text.text--lighten-5{color:#ffebee!important;caret-color:#ffebee!important}.v-application .red.lighten-4{background-color:#ffcdd2!important;border-color:#ffcdd2!important}.v-application .red--text.text--lighten-4{color:#ffcdd2!important;caret-color:#ffcdd2!important}.v-application .red.lighten-3{background-color:#ef9a9a!important;border-color:#ef9a9a!important}.v-application .red--text.text--lighten-3{color:#ef9a9a!important;caret-color:#ef9a9a!important}.v-application .red.lighten-2{background-color:#e57373!important;border-color:#e57373!important}.v-application .red--text.text--lighten-2{color:#e57373!important;caret-color:#e57373!important}.v-application .red.lighten-1{background-color:#ef5350!important;border-color:#ef5350!important}.v-application .red--text.text--lighten-1{color:#ef5350!important;caret-color:#ef5350!important}.v-application .red.darken-1{background-color:#e53935!important;border-color:#e53935!important}.v-application .red--text.text--darken-1{color:#e53935!important;caret-color:#e53935!important}.v-application .red.darken-2{background-color:#d32f2f!important;border-color:#d32f2f!important}.v-application .red--text.text--darken-2{color:#d32f2f!important;caret-color:#d32f2f!important}.v-application .red.darken-3{background-color:#c62828!important;border-color:#c62828!important}.v-application .red--text.text--darken-3{color:#c62828!important;caret-color:#c62828!important}.v-application .red.darken-4{background-color:#b71c1c!important;border-color:#b71c1c!important}.v-application .red--text.text--darken-4{color:#b71c1c!important;caret-color:#b71c1c!important}.v-application .red.accent-1{background-color:#ff8a80!important;border-color:#ff8a80!important}.v-application .red--text.text--accent-1{color:#ff8a80!important;caret-color:#ff8a80!important}.v-application .red.accent-2{background-color:#ff5252!important;border-color:#ff5252!important}.v-application .red--text.text--accent-2{color:#ff5252!important;caret-color:#ff5252!important}.v-application .red.accent-3{background-color:#ff1744!important;border-color:#ff1744!important}.v-application .red--text.text--accent-3{color:#ff1744!important;caret-color:#ff1744!important}.v-application .red.accent-4{background-color:#d50000!important;border-color:#d50000!important}.v-application .red--text.text--accent-4{color:#d50000!important;caret-color:#d50000!important}.v-application .pink{background-color:#e91e63!important;border-color:#e91e63!important}.v-application .pink--text{color:#e91e63!important;caret-color:#e91e63!important}.v-application .pink.lighten-5{background-color:#fce4ec!important;border-color:#fce4ec!important}.v-application .pink--text.text--lighten-5{color:#fce4ec!important;caret-color:#fce4ec!important}.v-application .pink.lighten-4{background-color:#f8bbd0!important;border-color:#f8bbd0!important}.v-application .pink--text.text--lighten-4{color:#f8bbd0!important;caret-color:#f8bbd0!important}.v-application .pink.lighten-3{background-color:#f48fb1!important;border-color:#f48fb1!important}.v-application .pink--text.text--lighten-3{color:#f48fb1!important;caret-color:#f48fb1!important}.v-application .pink.lighten-2{background-color:#f06292!important;border-color:#f06292!important}.v-application .pink--text.text--lighten-2{color:#f06292!important;caret-color:#f06292!important}.v-application .pink.lighten-1{background-color:#ec407a!important;border-color:#ec407a!important}.v-application .pink--text.text--lighten-1{color:#ec407a!important;caret-color:#ec407a!important}.v-application .pink.darken-1{background-color:#d81b60!important;border-color:#d81b60!important}.v-application .pink--text.text--darken-1{color:#d81b60!important;caret-color:#d81b60!important}.v-application .pink.darken-2{background-color:#c2185b!important;border-color:#c2185b!important}.v-application .pink--text.text--darken-2{color:#c2185b!important;caret-color:#c2185b!important}.v-application .pink.darken-3{background-color:#ad1457!important;border-color:#ad1457!important}.v-application .pink--text.text--darken-3{color:#ad1457!important;caret-color:#ad1457!important}.v-application .pink.darken-4{background-color:#880e4f!important;border-color:#880e4f!important}.v-application .pink--text.text--darken-4{color:#880e4f!important;caret-color:#880e4f!important}.v-application .pink.accent-1{background-color:#ff80ab!important;border-color:#ff80ab!important}.v-application .pink--text.text--accent-1{color:#ff80ab!important;caret-color:#ff80ab!important}.v-application .pink.accent-2{background-color:#ff4081!important;border-color:#ff4081!important}.v-application .pink--text.text--accent-2{color:#ff4081!important;caret-color:#ff4081!important}.v-application .pink.accent-3{background-color:#f50057!important;border-color:#f50057!important}.v-application .pink--text.text--accent-3{color:#f50057!important;caret-color:#f50057!important}.v-application .pink.accent-4{background-color:#c51162!important;border-color:#c51162!important}.v-application .pink--text.text--accent-4{color:#c51162!important;caret-color:#c51162!important}.v-application .purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.v-application .purple--text{color:#9c27b0!important;caret-color:#9c27b0!important}.v-application .purple.lighten-5{background-color:#f3e5f5!important;border-color:#f3e5f5!important}.v-application .purple--text.text--lighten-5{color:#f3e5f5!important;caret-color:#f3e5f5!important}.v-application .purple.lighten-4{background-color:#e1bee7!important;border-color:#e1bee7!important}.v-application .purple--text.text--lighten-4{color:#e1bee7!important;caret-color:#e1bee7!important}.v-application .purple.lighten-3{background-color:#ce93d8!important;border-color:#ce93d8!important}.v-application .purple--text.text--lighten-3{color:#ce93d8!important;caret-color:#ce93d8!important}.v-application .purple.lighten-2{background-color:#ba68c8!important;border-color:#ba68c8!important}.v-application .purple--text.text--lighten-2{color:#ba68c8!important;caret-color:#ba68c8!important}.v-application .purple.lighten-1{background-color:#ab47bc!important;border-color:#ab47bc!important}.v-application .purple--text.text--lighten-1{color:#ab47bc!important;caret-color:#ab47bc!important}.v-application .purple.darken-1{background-color:#8e24aa!important;border-color:#8e24aa!important}.v-application .purple--text.text--darken-1{color:#8e24aa!important;caret-color:#8e24aa!important}.v-application .purple.darken-2{background-color:#7b1fa2!important;border-color:#7b1fa2!important}.v-application .purple--text.text--darken-2{color:#7b1fa2!important;caret-color:#7b1fa2!important}.v-application .purple.darken-3{background-color:#6a1b9a!important;border-color:#6a1b9a!important}.v-application .purple--text.text--darken-3{color:#6a1b9a!important;caret-color:#6a1b9a!important}.v-application .purple.darken-4{background-color:#4a148c!important;border-color:#4a148c!important}.v-application .purple--text.text--darken-4{color:#4a148c!important;caret-color:#4a148c!important}.v-application .purple.accent-1{background-color:#ea80fc!important;border-color:#ea80fc!important}.v-application .purple--text.text--accent-1{color:#ea80fc!important;caret-color:#ea80fc!important}.v-application .purple.accent-2{background-color:#e040fb!important;border-color:#e040fb!important}.v-application .purple--text.text--accent-2{color:#e040fb!important;caret-color:#e040fb!important}.v-application .purple.accent-3{background-color:#d500f9!important;border-color:#d500f9!important}.v-application .purple--text.text--accent-3{color:#d500f9!important;caret-color:#d500f9!important}.v-application .purple.accent-4{background-color:#a0f!important;border-color:#a0f!important}.v-application .purple--text.text--accent-4{color:#a0f!important;caret-color:#a0f!important}.v-application .deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.v-application .deep-purple--text{color:#673ab7!important;caret-color:#673ab7!important}.v-application .deep-purple.lighten-5{background-color:#ede7f6!important;border-color:#ede7f6!important}.v-application .deep-purple--text.text--lighten-5{color:#ede7f6!important;caret-color:#ede7f6!important}.v-application .deep-purple.lighten-4{background-color:#d1c4e9!important;border-color:#d1c4e9!important}.v-application .deep-purple--text.text--lighten-4{color:#d1c4e9!important;caret-color:#d1c4e9!important}.v-application .deep-purple.lighten-3{background-color:#b39ddb!important;border-color:#b39ddb!important}.v-application .deep-purple--text.text--lighten-3{color:#b39ddb!important;caret-color:#b39ddb!important}.v-application .deep-purple.lighten-2{background-color:#9575cd!important;border-color:#9575cd!important}.v-application .deep-purple--text.text--lighten-2{color:#9575cd!important;caret-color:#9575cd!important}.v-application .deep-purple.lighten-1{background-color:#7e57c2!important;border-color:#7e57c2!important}.v-application .deep-purple--text.text--lighten-1{color:#7e57c2!important;caret-color:#7e57c2!important}.v-application .deep-purple.darken-1{background-color:#5e35b1!important;border-color:#5e35b1!important}.v-application .deep-purple--text.text--darken-1{color:#5e35b1!important;caret-color:#5e35b1!important}.v-application .deep-purple.darken-2{background-color:#512da8!important;border-color:#512da8!important}.v-application .deep-purple--text.text--darken-2{color:#512da8!important;caret-color:#512da8!important}.v-application .deep-purple.darken-3{background-color:#4527a0!important;border-color:#4527a0!important}.v-application .deep-purple--text.text--darken-3{color:#4527a0!important;caret-color:#4527a0!important}.v-application .deep-purple.darken-4{background-color:#311b92!important;border-color:#311b92!important}.v-application .deep-purple--text.text--darken-4{color:#311b92!important;caret-color:#311b92!important}.v-application .deep-purple.accent-1{background-color:#b388ff!important;border-color:#b388ff!important}.v-application .deep-purple--text.text--accent-1{color:#b388ff!important;caret-color:#b388ff!important}.v-application .deep-purple.accent-2{background-color:#7c4dff!important;border-color:#7c4dff!important}.v-application .deep-purple--text.text--accent-2{color:#7c4dff!important;caret-color:#7c4dff!important}.v-application .deep-purple.accent-3{background-color:#651fff!important;border-color:#651fff!important}.v-application .deep-purple--text.text--accent-3{color:#651fff!important;caret-color:#651fff!important}.v-application .deep-purple.accent-4{background-color:#6200ea!important;border-color:#6200ea!important}.v-application .deep-purple--text.text--accent-4{color:#6200ea!important;caret-color:#6200ea!important}.v-application .indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.v-application .indigo--text{color:#3f51b5!important;caret-color:#3f51b5!important}.v-application .indigo.lighten-5{background-color:#e8eaf6!important;border-color:#e8eaf6!important}.v-application .indigo--text.text--lighten-5{color:#e8eaf6!important;caret-color:#e8eaf6!important}.v-application .indigo.lighten-4{background-color:#c5cae9!important;border-color:#c5cae9!important}.v-application .indigo--text.text--lighten-4{color:#c5cae9!important;caret-color:#c5cae9!important}.v-application .indigo.lighten-3{background-color:#9fa8da!important;border-color:#9fa8da!important}.v-application .indigo--text.text--lighten-3{color:#9fa8da!important;caret-color:#9fa8da!important}.v-application .indigo.lighten-2{background-color:#7986cb!important;border-color:#7986cb!important}.v-application .indigo--text.text--lighten-2{color:#7986cb!important;caret-color:#7986cb!important}.v-application .indigo.lighten-1{background-color:#5c6bc0!important;border-color:#5c6bc0!important}.v-application .indigo--text.text--lighten-1{color:#5c6bc0!important;caret-color:#5c6bc0!important}.v-application .indigo.darken-1{background-color:#3949ab!important;border-color:#3949ab!important}.v-application .indigo--text.text--darken-1{color:#3949ab!important;caret-color:#3949ab!important}.v-application .indigo.darken-2{background-color:#303f9f!important;border-color:#303f9f!important}.v-application .indigo--text.text--darken-2{color:#303f9f!important;caret-color:#303f9f!important}.v-application .indigo.darken-3{background-color:#283593!important;border-color:#283593!important}.v-application .indigo--text.text--darken-3{color:#283593!important;caret-color:#283593!important}.v-application .indigo.darken-4{background-color:#1a237e!important;border-color:#1a237e!important}.v-application .indigo--text.text--darken-4{color:#1a237e!important;caret-color:#1a237e!important}.v-application .indigo.accent-1{background-color:#8c9eff!important;border-color:#8c9eff!important}.v-application .indigo--text.text--accent-1{color:#8c9eff!important;caret-color:#8c9eff!important}.v-application .indigo.accent-2{background-color:#536dfe!important;border-color:#536dfe!important}.v-application .indigo--text.text--accent-2{color:#536dfe!important;caret-color:#536dfe!important}.v-application .indigo.accent-3{background-color:#3d5afe!important;border-color:#3d5afe!important}.v-application .indigo--text.text--accent-3{color:#3d5afe!important;caret-color:#3d5afe!important}.v-application .indigo.accent-4{background-color:#304ffe!important;border-color:#304ffe!important}.v-application .indigo--text.text--accent-4{color:#304ffe!important;caret-color:#304ffe!important}.v-application .blue{background-color:#2196f3!important;border-color:#2196f3!important}.v-application .blue--text{color:#2196f3!important;caret-color:#2196f3!important}.v-application .blue.lighten-5{background-color:#e3f2fd!important;border-color:#e3f2fd!important}.v-application .blue--text.text--lighten-5{color:#e3f2fd!important;caret-color:#e3f2fd!important}.v-application .blue.lighten-4{background-color:#bbdefb!important;border-color:#bbdefb!important}.v-application .blue--text.text--lighten-4{color:#bbdefb!important;caret-color:#bbdefb!important}.v-application .blue.lighten-3{background-color:#90caf9!important;border-color:#90caf9!important}.v-application .blue--text.text--lighten-3{color:#90caf9!important;caret-color:#90caf9!important}.v-application .blue.lighten-2{background-color:#64b5f6!important;border-color:#64b5f6!important}.v-application .blue--text.text--lighten-2{color:#64b5f6!important;caret-color:#64b5f6!important}.v-application .blue.lighten-1{background-color:#42a5f5!important;border-color:#42a5f5!important}.v-application .blue--text.text--lighten-1{color:#42a5f5!important;caret-color:#42a5f5!important}.v-application .blue.darken-1{background-color:#1e88e5!important;border-color:#1e88e5!important}.v-application .blue--text.text--darken-1{color:#1e88e5!important;caret-color:#1e88e5!important}.v-application .blue.darken-2{background-color:#1976d2!important;border-color:#1976d2!important}.v-application .blue--text.text--darken-2{color:#1976d2!important;caret-color:#1976d2!important}.v-application .blue.darken-3{background-color:#1565c0!important;border-color:#1565c0!important}.v-application .blue--text.text--darken-3{color:#1565c0!important;caret-color:#1565c0!important}.v-application .blue.darken-4{background-color:#0d47a1!important;border-color:#0d47a1!important}.v-application .blue--text.text--darken-4{color:#0d47a1!important;caret-color:#0d47a1!important}.v-application .blue.accent-1{background-color:#82b1ff!important;border-color:#82b1ff!important}.v-application .blue--text.text--accent-1{color:#82b1ff!important;caret-color:#82b1ff!important}.v-application .blue.accent-2{background-color:#448aff!important;border-color:#448aff!important}.v-application .blue--text.text--accent-2{color:#448aff!important;caret-color:#448aff!important}.v-application .blue.accent-3{background-color:#2979ff!important;border-color:#2979ff!important}.v-application .blue--text.text--accent-3{color:#2979ff!important;caret-color:#2979ff!important}.v-application .blue.accent-4{background-color:#2962ff!important;border-color:#2962ff!important}.v-application .blue--text.text--accent-4{color:#2962ff!important;caret-color:#2962ff!important}.v-application .light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.v-application .light-blue--text{color:#03a9f4!important;caret-color:#03a9f4!important}.v-application .light-blue.lighten-5{background-color:#e1f5fe!important;border-color:#e1f5fe!important}.v-application .light-blue--text.text--lighten-5{color:#e1f5fe!important;caret-color:#e1f5fe!important}.v-application .light-blue.lighten-4{background-color:#b3e5fc!important;border-color:#b3e5fc!important}.v-application .light-blue--text.text--lighten-4{color:#b3e5fc!important;caret-color:#b3e5fc!important}.v-application .light-blue.lighten-3{background-color:#81d4fa!important;border-color:#81d4fa!important}.v-application .light-blue--text.text--lighten-3{color:#81d4fa!important;caret-color:#81d4fa!important}.v-application .light-blue.lighten-2{background-color:#4fc3f7!important;border-color:#4fc3f7!important}.v-application .light-blue--text.text--lighten-2{color:#4fc3f7!important;caret-color:#4fc3f7!important}.v-application .light-blue.lighten-1{background-color:#29b6f6!important;border-color:#29b6f6!important}.v-application .light-blue--text.text--lighten-1{color:#29b6f6!important;caret-color:#29b6f6!important}.v-application .light-blue.darken-1{background-color:#039be5!important;border-color:#039be5!important}.v-application .light-blue--text.text--darken-1{color:#039be5!important;caret-color:#039be5!important}.v-application .light-blue.darken-2{background-color:#0288d1!important;border-color:#0288d1!important}.v-application .light-blue--text.text--darken-2{color:#0288d1!important;caret-color:#0288d1!important}.v-application .light-blue.darken-3{background-color:#0277bd!important;border-color:#0277bd!important}.v-application .light-blue--text.text--darken-3{color:#0277bd!important;caret-color:#0277bd!important}.v-application .light-blue.darken-4{background-color:#01579b!important;border-color:#01579b!important}.v-application .light-blue--text.text--darken-4{color:#01579b!important;caret-color:#01579b!important}.v-application .light-blue.accent-1{background-color:#80d8ff!important;border-color:#80d8ff!important}.v-application .light-blue--text.text--accent-1{color:#80d8ff!important;caret-color:#80d8ff!important}.v-application .light-blue.accent-2{background-color:#40c4ff!important;border-color:#40c4ff!important}.v-application .light-blue--text.text--accent-2{color:#40c4ff!important;caret-color:#40c4ff!important}.v-application .light-blue.accent-3{background-color:#00b0ff!important;border-color:#00b0ff!important}.v-application .light-blue--text.text--accent-3{color:#00b0ff!important;caret-color:#00b0ff!important}.v-application .light-blue.accent-4{background-color:#0091ea!important;border-color:#0091ea!important}.v-application .light-blue--text.text--accent-4{color:#0091ea!important;caret-color:#0091ea!important}.v-application .cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.v-application .cyan--text{color:#00bcd4!important;caret-color:#00bcd4!important}.v-application .cyan.lighten-5{background-color:#e0f7fa!important;border-color:#e0f7fa!important}.v-application .cyan--text.text--lighten-5{color:#e0f7fa!important;caret-color:#e0f7fa!important}.v-application .cyan.lighten-4{background-color:#b2ebf2!important;border-color:#b2ebf2!important}.v-application .cyan--text.text--lighten-4{color:#b2ebf2!important;caret-color:#b2ebf2!important}.v-application .cyan.lighten-3{background-color:#80deea!important;border-color:#80deea!important}.v-application .cyan--text.text--lighten-3{color:#80deea!important;caret-color:#80deea!important}.v-application .cyan.lighten-2{background-color:#4dd0e1!important;border-color:#4dd0e1!important}.v-application .cyan--text.text--lighten-2{color:#4dd0e1!important;caret-color:#4dd0e1!important}.v-application .cyan.lighten-1{background-color:#26c6da!important;border-color:#26c6da!important}.v-application .cyan--text.text--lighten-1{color:#26c6da!important;caret-color:#26c6da!important}.v-application .cyan.darken-1{background-color:#00acc1!important;border-color:#00acc1!important}.v-application .cyan--text.text--darken-1{color:#00acc1!important;caret-color:#00acc1!important}.v-application .cyan.darken-2{background-color:#0097a7!important;border-color:#0097a7!important}.v-application .cyan--text.text--darken-2{color:#0097a7!important;caret-color:#0097a7!important}.v-application .cyan.darken-3{background-color:#00838f!important;border-color:#00838f!important}.v-application .cyan--text.text--darken-3{color:#00838f!important;caret-color:#00838f!important}.v-application .cyan.darken-4{background-color:#006064!important;border-color:#006064!important}.v-application .cyan--text.text--darken-4{color:#006064!important;caret-color:#006064!important}.v-application .cyan.accent-1{background-color:#84ffff!important;border-color:#84ffff!important}.v-application .cyan--text.text--accent-1{color:#84ffff!important;caret-color:#84ffff!important}.v-application .cyan.accent-2{background-color:#18ffff!important;border-color:#18ffff!important}.v-application .cyan--text.text--accent-2{color:#18ffff!important;caret-color:#18ffff!important}.v-application .cyan.accent-3{background-color:#00e5ff!important;border-color:#00e5ff!important}.v-application .cyan--text.text--accent-3{color:#00e5ff!important;caret-color:#00e5ff!important}.v-application .cyan.accent-4{background-color:#00b8d4!important;border-color:#00b8d4!important}.v-application .cyan--text.text--accent-4{color:#00b8d4!important;caret-color:#00b8d4!important}.v-application .teal{background-color:#009688!important;border-color:#009688!important}.v-application .teal--text{color:#009688!important;caret-color:#009688!important}.v-application .teal.lighten-5{background-color:#e0f2f1!important;border-color:#e0f2f1!important}.v-application .teal--text.text--lighten-5{color:#e0f2f1!important;caret-color:#e0f2f1!important}.v-application .teal.lighten-4{background-color:#b2dfdb!important;border-color:#b2dfdb!important}.v-application .teal--text.text--lighten-4{color:#b2dfdb!important;caret-color:#b2dfdb!important}.v-application .teal.lighten-3{background-color:#80cbc4!important;border-color:#80cbc4!important}.v-application .teal--text.text--lighten-3{color:#80cbc4!important;caret-color:#80cbc4!important}.v-application .teal.lighten-2{background-color:#4db6ac!important;border-color:#4db6ac!important}.v-application .teal--text.text--lighten-2{color:#4db6ac!important;caret-color:#4db6ac!important}.v-application .teal.lighten-1{background-color:#26a69a!important;border-color:#26a69a!important}.v-application .teal--text.text--lighten-1{color:#26a69a!important;caret-color:#26a69a!important}.v-application .teal.darken-1{background-color:#00897b!important;border-color:#00897b!important}.v-application .teal--text.text--darken-1{color:#00897b!important;caret-color:#00897b!important}.v-application .teal.darken-2{background-color:#00796b!important;border-color:#00796b!important}.v-application .teal--text.text--darken-2{color:#00796b!important;caret-color:#00796b!important}.v-application .teal.darken-3{background-color:#00695c!important;border-color:#00695c!important}.v-application .teal--text.text--darken-3{color:#00695c!important;caret-color:#00695c!important}.v-application .teal.darken-4{background-color:#004d40!important;border-color:#004d40!important}.v-application .teal--text.text--darken-4{color:#004d40!important;caret-color:#004d40!important}.v-application .teal.accent-1{background-color:#a7ffeb!important;border-color:#a7ffeb!important}.v-application .teal--text.text--accent-1{color:#a7ffeb!important;caret-color:#a7ffeb!important}.v-application .teal.accent-2{background-color:#64ffda!important;border-color:#64ffda!important}.v-application .teal--text.text--accent-2{color:#64ffda!important;caret-color:#64ffda!important}.v-application .teal.accent-3{background-color:#1de9b6!important;border-color:#1de9b6!important}.v-application .teal--text.text--accent-3{color:#1de9b6!important;caret-color:#1de9b6!important}.v-application .teal.accent-4{background-color:#00bfa5!important;border-color:#00bfa5!important}.v-application .teal--text.text--accent-4{color:#00bfa5!important;caret-color:#00bfa5!important}.v-application .green{background-color:#4caf50!important;border-color:#4caf50!important}.v-application .green--text{color:#4caf50!important;caret-color:#4caf50!important}.v-application .green.lighten-5{background-color:#e8f5e9!important;border-color:#e8f5e9!important}.v-application .green--text.text--lighten-5{color:#e8f5e9!important;caret-color:#e8f5e9!important}.v-application .green.lighten-4{background-color:#c8e6c9!important;border-color:#c8e6c9!important}.v-application .green--text.text--lighten-4{color:#c8e6c9!important;caret-color:#c8e6c9!important}.v-application .green.lighten-3{background-color:#a5d6a7!important;border-color:#a5d6a7!important}.v-application .green--text.text--lighten-3{color:#a5d6a7!important;caret-color:#a5d6a7!important}.v-application .green.lighten-2{background-color:#81c784!important;border-color:#81c784!important}.v-application .green--text.text--lighten-2{color:#81c784!important;caret-color:#81c784!important}.v-application .green.lighten-1{background-color:#66bb6a!important;border-color:#66bb6a!important}.v-application .green--text.text--lighten-1{color:#66bb6a!important;caret-color:#66bb6a!important}.v-application .green.darken-1{background-color:#43a047!important;border-color:#43a047!important}.v-application .green--text.text--darken-1{color:#43a047!important;caret-color:#43a047!important}.v-application .green.darken-2{background-color:#388e3c!important;border-color:#388e3c!important}.v-application .green--text.text--darken-2{color:#388e3c!important;caret-color:#388e3c!important}.v-application .green.darken-3{background-color:#2e7d32!important;border-color:#2e7d32!important}.v-application .green--text.text--darken-3{color:#2e7d32!important;caret-color:#2e7d32!important}.v-application .green.darken-4{background-color:#1b5e20!important;border-color:#1b5e20!important}.v-application .green--text.text--darken-4{color:#1b5e20!important;caret-color:#1b5e20!important}.v-application .green.accent-1{background-color:#b9f6ca!important;border-color:#b9f6ca!important}.v-application .green--text.text--accent-1{color:#b9f6ca!important;caret-color:#b9f6ca!important}.v-application .green.accent-2{background-color:#69f0ae!important;border-color:#69f0ae!important}.v-application .green--text.text--accent-2{color:#69f0ae!important;caret-color:#69f0ae!important}.v-application .green.accent-3{background-color:#00e676!important;border-color:#00e676!important}.v-application .green--text.text--accent-3{color:#00e676!important;caret-color:#00e676!important}.v-application .green.accent-4{background-color:#00c853!important;border-color:#00c853!important}.v-application .green--text.text--accent-4{color:#00c853!important;caret-color:#00c853!important}.v-application .light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.v-application .light-green--text{color:#8bc34a!important;caret-color:#8bc34a!important}.v-application .light-green.lighten-5{background-color:#f1f8e9!important;border-color:#f1f8e9!important}.v-application .light-green--text.text--lighten-5{color:#f1f8e9!important;caret-color:#f1f8e9!important}.v-application .light-green.lighten-4{background-color:#dcedc8!important;border-color:#dcedc8!important}.v-application .light-green--text.text--lighten-4{color:#dcedc8!important;caret-color:#dcedc8!important}.v-application .light-green.lighten-3{background-color:#c5e1a5!important;border-color:#c5e1a5!important}.v-application .light-green--text.text--lighten-3{color:#c5e1a5!important;caret-color:#c5e1a5!important}.v-application .light-green.lighten-2{background-color:#aed581!important;border-color:#aed581!important}.v-application .light-green--text.text--lighten-2{color:#aed581!important;caret-color:#aed581!important}.v-application .light-green.lighten-1{background-color:#9ccc65!important;border-color:#9ccc65!important}.v-application .light-green--text.text--lighten-1{color:#9ccc65!important;caret-color:#9ccc65!important}.v-application .light-green.darken-1{background-color:#7cb342!important;border-color:#7cb342!important}.v-application .light-green--text.text--darken-1{color:#7cb342!important;caret-color:#7cb342!important}.v-application .light-green.darken-2{background-color:#689f38!important;border-color:#689f38!important}.v-application .light-green--text.text--darken-2{color:#689f38!important;caret-color:#689f38!important}.v-application .light-green.darken-3{background-color:#558b2f!important;border-color:#558b2f!important}.v-application .light-green--text.text--darken-3{color:#558b2f!important;caret-color:#558b2f!important}.v-application .light-green.darken-4{background-color:#33691e!important;border-color:#33691e!important}.v-application .light-green--text.text--darken-4{color:#33691e!important;caret-color:#33691e!important}.v-application .light-green.accent-1{background-color:#ccff90!important;border-color:#ccff90!important}.v-application .light-green--text.text--accent-1{color:#ccff90!important;caret-color:#ccff90!important}.v-application .light-green.accent-2{background-color:#b2ff59!important;border-color:#b2ff59!important}.v-application .light-green--text.text--accent-2{color:#b2ff59!important;caret-color:#b2ff59!important}.v-application .light-green.accent-3{background-color:#76ff03!important;border-color:#76ff03!important}.v-application .light-green--text.text--accent-3{color:#76ff03!important;caret-color:#76ff03!important}.v-application .light-green.accent-4{background-color:#64dd17!important;border-color:#64dd17!important}.v-application .light-green--text.text--accent-4{color:#64dd17!important;caret-color:#64dd17!important}.v-application .lime{background-color:#cddc39!important;border-color:#cddc39!important}.v-application .lime--text{color:#cddc39!important;caret-color:#cddc39!important}.v-application .lime.lighten-5{background-color:#f9fbe7!important;border-color:#f9fbe7!important}.v-application .lime--text.text--lighten-5{color:#f9fbe7!important;caret-color:#f9fbe7!important}.v-application .lime.lighten-4{background-color:#f0f4c3!important;border-color:#f0f4c3!important}.v-application .lime--text.text--lighten-4{color:#f0f4c3!important;caret-color:#f0f4c3!important}.v-application .lime.lighten-3{background-color:#e6ee9c!important;border-color:#e6ee9c!important}.v-application .lime--text.text--lighten-3{color:#e6ee9c!important;caret-color:#e6ee9c!important}.v-application .lime.lighten-2{background-color:#dce775!important;border-color:#dce775!important}.v-application .lime--text.text--lighten-2{color:#dce775!important;caret-color:#dce775!important}.v-application .lime.lighten-1{background-color:#d4e157!important;border-color:#d4e157!important}.v-application .lime--text.text--lighten-1{color:#d4e157!important;caret-color:#d4e157!important}.v-application .lime.darken-1{background-color:#c0ca33!important;border-color:#c0ca33!important}.v-application .lime--text.text--darken-1{color:#c0ca33!important;caret-color:#c0ca33!important}.v-application .lime.darken-2{background-color:#afb42b!important;border-color:#afb42b!important}.v-application .lime--text.text--darken-2{color:#afb42b!important;caret-color:#afb42b!important}.v-application .lime.darken-3{background-color:#9e9d24!important;border-color:#9e9d24!important}.v-application .lime--text.text--darken-3{color:#9e9d24!important;caret-color:#9e9d24!important}.v-application .lime.darken-4{background-color:#827717!important;border-color:#827717!important}.v-application .lime--text.text--darken-4{color:#827717!important;caret-color:#827717!important}.v-application .lime.accent-1{background-color:#f4ff81!important;border-color:#f4ff81!important}.v-application .lime--text.text--accent-1{color:#f4ff81!important;caret-color:#f4ff81!important}.v-application .lime.accent-2{background-color:#eeff41!important;border-color:#eeff41!important}.v-application .lime--text.text--accent-2{color:#eeff41!important;caret-color:#eeff41!important}.v-application .lime.accent-3{background-color:#c6ff00!important;border-color:#c6ff00!important}.v-application .lime--text.text--accent-3{color:#c6ff00!important;caret-color:#c6ff00!important}.v-application .lime.accent-4{background-color:#aeea00!important;border-color:#aeea00!important}.v-application .lime--text.text--accent-4{color:#aeea00!important;caret-color:#aeea00!important}.v-application .yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.v-application .yellow--text{color:#ffeb3b!important;caret-color:#ffeb3b!important}.v-application .yellow.lighten-5{background-color:#fffde7!important;border-color:#fffde7!important}.v-application .yellow--text.text--lighten-5{color:#fffde7!important;caret-color:#fffde7!important}.v-application .yellow.lighten-4{background-color:#fff9c4!important;border-color:#fff9c4!important}.v-application .yellow--text.text--lighten-4{color:#fff9c4!important;caret-color:#fff9c4!important}.v-application .yellow.lighten-3{background-color:#fff59d!important;border-color:#fff59d!important}.v-application .yellow--text.text--lighten-3{color:#fff59d!important;caret-color:#fff59d!important}.v-application .yellow.lighten-2{background-color:#fff176!important;border-color:#fff176!important}.v-application .yellow--text.text--lighten-2{color:#fff176!important;caret-color:#fff176!important}.v-application .yellow.lighten-1{background-color:#ffee58!important;border-color:#ffee58!important}.v-application .yellow--text.text--lighten-1{color:#ffee58!important;caret-color:#ffee58!important}.v-application .yellow.darken-1{background-color:#fdd835!important;border-color:#fdd835!important}.v-application .yellow--text.text--darken-1{color:#fdd835!important;caret-color:#fdd835!important}.v-application .yellow.darken-2{background-color:#fbc02d!important;border-color:#fbc02d!important}.v-application .yellow--text.text--darken-2{color:#fbc02d!important;caret-color:#fbc02d!important}.v-application .yellow.darken-3{background-color:#f9a825!important;border-color:#f9a825!important}.v-application .yellow--text.text--darken-3{color:#f9a825!important;caret-color:#f9a825!important}.v-application .yellow.darken-4{background-color:#f57f17!important;border-color:#f57f17!important}.v-application .yellow--text.text--darken-4{color:#f57f17!important;caret-color:#f57f17!important}.v-application .yellow.accent-1{background-color:#ffff8d!important;border-color:#ffff8d!important}.v-application .yellow--text.text--accent-1{color:#ffff8d!important;caret-color:#ffff8d!important}.v-application .yellow.accent-2{background-color:#ff0!important;border-color:#ff0!important}.v-application .yellow--text.text--accent-2{color:#ff0!important;caret-color:#ff0!important}.v-application .yellow.accent-3{background-color:#ffea00!important;border-color:#ffea00!important}.v-application .yellow--text.text--accent-3{color:#ffea00!important;caret-color:#ffea00!important}.v-application .yellow.accent-4{background-color:#ffd600!important;border-color:#ffd600!important}.v-application .yellow--text.text--accent-4{color:#ffd600!important;caret-color:#ffd600!important}.v-application .amber{background-color:#ffc107!important;border-color:#ffc107!important}.v-application .amber--text{color:#ffc107!important;caret-color:#ffc107!important}.v-application .amber.lighten-5{background-color:#fff8e1!important;border-color:#fff8e1!important}.v-application .amber--text.text--lighten-5{color:#fff8e1!important;caret-color:#fff8e1!important}.v-application .amber.lighten-4{background-color:#ffecb3!important;border-color:#ffecb3!important}.v-application .amber--text.text--lighten-4{color:#ffecb3!important;caret-color:#ffecb3!important}.v-application .amber.lighten-3{background-color:#ffe082!important;border-color:#ffe082!important}.v-application .amber--text.text--lighten-3{color:#ffe082!important;caret-color:#ffe082!important}.v-application .amber.lighten-2{background-color:#ffd54f!important;border-color:#ffd54f!important}.v-application .amber--text.text--lighten-2{color:#ffd54f!important;caret-color:#ffd54f!important}.v-application .amber.lighten-1{background-color:#ffca28!important;border-color:#ffca28!important}.v-application .amber--text.text--lighten-1{color:#ffca28!important;caret-color:#ffca28!important}.v-application .amber.darken-1{background-color:#ffb300!important;border-color:#ffb300!important}.v-application .amber--text.text--darken-1{color:#ffb300!important;caret-color:#ffb300!important}.v-application .amber.darken-2{background-color:#ffa000!important;border-color:#ffa000!important}.v-application .amber--text.text--darken-2{color:#ffa000!important;caret-color:#ffa000!important}.v-application .amber.darken-3{background-color:#ff8f00!important;border-color:#ff8f00!important}.v-application .amber--text.text--darken-3{color:#ff8f00!important;caret-color:#ff8f00!important}.v-application .amber.darken-4{background-color:#ff6f00!important;border-color:#ff6f00!important}.v-application .amber--text.text--darken-4{color:#ff6f00!important;caret-color:#ff6f00!important}.v-application .amber.accent-1{background-color:#ffe57f!important;border-color:#ffe57f!important}.v-application .amber--text.text--accent-1{color:#ffe57f!important;caret-color:#ffe57f!important}.v-application .amber.accent-2{background-color:#ffd740!important;border-color:#ffd740!important}.v-application .amber--text.text--accent-2{color:#ffd740!important;caret-color:#ffd740!important}.v-application .amber.accent-3{background-color:#ffc400!important;border-color:#ffc400!important}.v-application .amber--text.text--accent-3{color:#ffc400!important;caret-color:#ffc400!important}.v-application .amber.accent-4{background-color:#ffab00!important;border-color:#ffab00!important}.v-application .amber--text.text--accent-4{color:#ffab00!important;caret-color:#ffab00!important}.v-application .orange{background-color:#ff9800!important;border-color:#ff9800!important}.v-application .orange--text{color:#ff9800!important;caret-color:#ff9800!important}.v-application .orange.lighten-5{background-color:#fff3e0!important;border-color:#fff3e0!important}.v-application .orange--text.text--lighten-5{color:#fff3e0!important;caret-color:#fff3e0!important}.v-application .orange.lighten-4{background-color:#ffe0b2!important;border-color:#ffe0b2!important}.v-application .orange--text.text--lighten-4{color:#ffe0b2!important;caret-color:#ffe0b2!important}.v-application .orange.lighten-3{background-color:#ffcc80!important;border-color:#ffcc80!important}.v-application .orange--text.text--lighten-3{color:#ffcc80!important;caret-color:#ffcc80!important}.v-application .orange.lighten-2{background-color:#ffb74d!important;border-color:#ffb74d!important}.v-application .orange--text.text--lighten-2{color:#ffb74d!important;caret-color:#ffb74d!important}.v-application .orange.lighten-1{background-color:#ffa726!important;border-color:#ffa726!important}.v-application .orange--text.text--lighten-1{color:#ffa726!important;caret-color:#ffa726!important}.v-application .orange.darken-1{background-color:#fb8c00!important;border-color:#fb8c00!important}.v-application .orange--text.text--darken-1{color:#fb8c00!important;caret-color:#fb8c00!important}.v-application .orange.darken-2{background-color:#f57c00!important;border-color:#f57c00!important}.v-application .orange--text.text--darken-2{color:#f57c00!important;caret-color:#f57c00!important}.v-application .orange.darken-3{background-color:#ef6c00!important;border-color:#ef6c00!important}.v-application .orange--text.text--darken-3{color:#ef6c00!important;caret-color:#ef6c00!important}.v-application .orange.darken-4{background-color:#e65100!important;border-color:#e65100!important}.v-application .orange--text.text--darken-4{color:#e65100!important;caret-color:#e65100!important}.v-application .orange.accent-1{background-color:#ffd180!important;border-color:#ffd180!important}.v-application .orange--text.text--accent-1{color:#ffd180!important;caret-color:#ffd180!important}.v-application .orange.accent-2{background-color:#ffab40!important;border-color:#ffab40!important}.v-application .orange--text.text--accent-2{color:#ffab40!important;caret-color:#ffab40!important}.v-application .orange.accent-3{background-color:#ff9100!important;border-color:#ff9100!important}.v-application .orange--text.text--accent-3{color:#ff9100!important;caret-color:#ff9100!important}.v-application .orange.accent-4{background-color:#ff6d00!important;border-color:#ff6d00!important}.v-application .orange--text.text--accent-4{color:#ff6d00!important;caret-color:#ff6d00!important}.v-application .deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.v-application .deep-orange--text{color:#ff5722!important;caret-color:#ff5722!important}.v-application .deep-orange.lighten-5{background-color:#fbe9e7!important;border-color:#fbe9e7!important}.v-application .deep-orange--text.text--lighten-5{color:#fbe9e7!important;caret-color:#fbe9e7!important}.v-application .deep-orange.lighten-4{background-color:#ffccbc!important;border-color:#ffccbc!important}.v-application .deep-orange--text.text--lighten-4{color:#ffccbc!important;caret-color:#ffccbc!important}.v-application .deep-orange.lighten-3{background-color:#ffab91!important;border-color:#ffab91!important}.v-application .deep-orange--text.text--lighten-3{color:#ffab91!important;caret-color:#ffab91!important}.v-application .deep-orange.lighten-2{background-color:#ff8a65!important;border-color:#ff8a65!important}.v-application .deep-orange--text.text--lighten-2{color:#ff8a65!important;caret-color:#ff8a65!important}.v-application .deep-orange.lighten-1{background-color:#ff7043!important;border-color:#ff7043!important}.v-application .deep-orange--text.text--lighten-1{color:#ff7043!important;caret-color:#ff7043!important}.v-application .deep-orange.darken-1{background-color:#f4511e!important;border-color:#f4511e!important}.v-application .deep-orange--text.text--darken-1{color:#f4511e!important;caret-color:#f4511e!important}.v-application .deep-orange.darken-2{background-color:#e64a19!important;border-color:#e64a19!important}.v-application .deep-orange--text.text--darken-2{color:#e64a19!important;caret-color:#e64a19!important}.v-application .deep-orange.darken-3{background-color:#d84315!important;border-color:#d84315!important}.v-application .deep-orange--text.text--darken-3{color:#d84315!important;caret-color:#d84315!important}.v-application .deep-orange.darken-4{background-color:#bf360c!important;border-color:#bf360c!important}.v-application .deep-orange--text.text--darken-4{color:#bf360c!important;caret-color:#bf360c!important}.v-application .deep-orange.accent-1{background-color:#ff9e80!important;border-color:#ff9e80!important}.v-application .deep-orange--text.text--accent-1{color:#ff9e80!important;caret-color:#ff9e80!important}.v-application .deep-orange.accent-2{background-color:#ff6e40!important;border-color:#ff6e40!important}.v-application .deep-orange--text.text--accent-2{color:#ff6e40!important;caret-color:#ff6e40!important}.v-application .deep-orange.accent-3{background-color:#ff3d00!important;border-color:#ff3d00!important}.v-application .deep-orange--text.text--accent-3{color:#ff3d00!important;caret-color:#ff3d00!important}.v-application .deep-orange.accent-4{background-color:#dd2c00!important;border-color:#dd2c00!important}.v-application .deep-orange--text.text--accent-4{color:#dd2c00!important;caret-color:#dd2c00!important}.v-application .brown{background-color:#795548!important;border-color:#795548!important}.v-application .brown--text{color:#795548!important;caret-color:#795548!important}.v-application .brown.lighten-5{background-color:#efebe9!important;border-color:#efebe9!important}.v-application .brown--text.text--lighten-5{color:#efebe9!important;caret-color:#efebe9!important}.v-application .brown.lighten-4{background-color:#d7ccc8!important;border-color:#d7ccc8!important}.v-application .brown--text.text--lighten-4{color:#d7ccc8!important;caret-color:#d7ccc8!important}.v-application .brown.lighten-3{background-color:#bcaaa4!important;border-color:#bcaaa4!important}.v-application .brown--text.text--lighten-3{color:#bcaaa4!important;caret-color:#bcaaa4!important}.v-application .brown.lighten-2{background-color:#a1887f!important;border-color:#a1887f!important}.v-application .brown--text.text--lighten-2{color:#a1887f!important;caret-color:#a1887f!important}.v-application .brown.lighten-1{background-color:#8d6e63!important;border-color:#8d6e63!important}.v-application .brown--text.text--lighten-1{color:#8d6e63!important;caret-color:#8d6e63!important}.v-application .brown.darken-1{background-color:#6d4c41!important;border-color:#6d4c41!important}.v-application .brown--text.text--darken-1{color:#6d4c41!important;caret-color:#6d4c41!important}.v-application .brown.darken-2{background-color:#5d4037!important;border-color:#5d4037!important}.v-application .brown--text.text--darken-2{color:#5d4037!important;caret-color:#5d4037!important}.v-application .brown.darken-3{background-color:#4e342e!important;border-color:#4e342e!important}.v-application .brown--text.text--darken-3{color:#4e342e!important;caret-color:#4e342e!important}.v-application .brown.darken-4{background-color:#3e2723!important;border-color:#3e2723!important}.v-application .brown--text.text--darken-4{color:#3e2723!important;caret-color:#3e2723!important}.v-application .blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.v-application .blue-grey--text{color:#607d8b!important;caret-color:#607d8b!important}.v-application .blue-grey.lighten-5{background-color:#eceff1!important;border-color:#eceff1!important}.v-application .blue-grey--text.text--lighten-5{color:#eceff1!important;caret-color:#eceff1!important}.v-application .blue-grey.lighten-4{background-color:#cfd8dc!important;border-color:#cfd8dc!important}.v-application .blue-grey--text.text--lighten-4{color:#cfd8dc!important;caret-color:#cfd8dc!important}.v-application .blue-grey.lighten-3{background-color:#b0bec5!important;border-color:#b0bec5!important}.v-application .blue-grey--text.text--lighten-3{color:#b0bec5!important;caret-color:#b0bec5!important}.v-application .blue-grey.lighten-2{background-color:#90a4ae!important;border-color:#90a4ae!important}.v-application .blue-grey--text.text--lighten-2{color:#90a4ae!important;caret-color:#90a4ae!important}.v-application .blue-grey.lighten-1{background-color:#78909c!important;border-color:#78909c!important}.v-application .blue-grey--text.text--lighten-1{color:#78909c!important;caret-color:#78909c!important}.v-application .blue-grey.darken-1{background-color:#546e7a!important;border-color:#546e7a!important}.v-application .blue-grey--text.text--darken-1{color:#546e7a!important;caret-color:#546e7a!important}.v-application .blue-grey.darken-2{background-color:#455a64!important;border-color:#455a64!important}.v-application .blue-grey--text.text--darken-2{color:#455a64!important;caret-color:#455a64!important}.v-application .blue-grey.darken-3{background-color:#37474f!important;border-color:#37474f!important}.v-application .blue-grey--text.text--darken-3{color:#37474f!important;caret-color:#37474f!important}.v-application .blue-grey.darken-4{background-color:#263238!important;border-color:#263238!important}.v-application .blue-grey--text.text--darken-4{color:#263238!important;caret-color:#263238!important}.v-application .grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.v-application .grey--text{color:#9e9e9e!important;caret-color:#9e9e9e!important}.v-application .grey.lighten-5{background-color:#fafafa!important;border-color:#fafafa!important}.v-application .grey--text.text--lighten-5{color:#fafafa!important;caret-color:#fafafa!important}.v-application .grey.lighten-4{background-color:#f5f5f5!important;border-color:#f5f5f5!important}.v-application .grey--text.text--lighten-4{color:#f5f5f5!important;caret-color:#f5f5f5!important}.v-application .grey.lighten-3{background-color:#eee!important;border-color:#eee!important}.v-application .grey--text.text--lighten-3{color:#eee!important;caret-color:#eee!important}.v-application .grey.lighten-2{background-color:#e0e0e0!important;border-color:#e0e0e0!important}.v-application .grey--text.text--lighten-2{color:#e0e0e0!important;caret-color:#e0e0e0!important}.v-application .grey.lighten-1{background-color:#bdbdbd!important;border-color:#bdbdbd!important}.v-application .grey--text.text--lighten-1{color:#bdbdbd!important;caret-color:#bdbdbd!important}.v-application .grey.darken-1{background-color:#757575!important;border-color:#757575!important}.v-application .grey--text.text--darken-1{color:#757575!important;caret-color:#757575!important}.v-application .grey.darken-2{background-color:#616161!important;border-color:#616161!important}.v-application .grey--text.text--darken-2{color:#616161!important;caret-color:#616161!important}.v-application .grey.darken-3{background-color:#424242!important;border-color:#424242!important}.v-application .grey--text.text--darken-3{color:#424242!important;caret-color:#424242!important}.v-application .grey.darken-4{background-color:#212121!important;border-color:#212121!important}.v-application .grey--text.text--darken-4{color:#212121!important;caret-color:#212121!important}.v-application .shades.black{background-color:#000!important;border-color:#000!important}.v-application .shades--text.text--black{color:#000!important;caret-color:#000!important}.v-application .shades.white{background-color:#fff!important;border-color:#fff!important}.v-application .shades--text.text--white{color:#fff!important;caret-color:#fff!important}.v-application .shades.transparent{background-color:transparent!important;border-color:transparent!important}.v-application .shades--text.text--transparent{color:transparent!important;caret-color:transparent!important}/*!\n * ress.css • v2.0.4\n * MIT License\n * github.com/filipelinhares/ress\n */html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%;word-break:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{padding:0;margin:0}hr{overflow:visible;height:0}details,main{display:block}summary{display:list-item}small{font-size:80%}[hidden]{display:none}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{background-color:transparent}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}pre{font-size:1em}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[disabled]{cursor:default}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}button,select{text-transform:none}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer;color:inherit}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,input,select,textarea{background-color:transparent;border-style:none}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;white-space:normal;max-width:100%}::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}img{border-style:none}progress{vertical-align:baseline}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true]{cursor:default}.v-application .elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}.v-application .elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.v-application .elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.v-application .elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.v-application .elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.v-application .elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.v-application .elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.v-application .elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.v-application .elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.v-application .elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.v-application .elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.v-application .elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.v-application .elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.v-application .elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.v-application .elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.v-application .elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.v-application .elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.v-application .elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.v-application .elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important}.v-application .elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important}.v-application .elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.v-application .elevation-3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important}.v-application .elevation-2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}.v-application .elevation-1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important}.v-application .elevation-0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-application .carousel-transition-enter{transform:translate(100%)}.v-application .carousel-transition-leave,.v-application .carousel-transition-leave-to{position:absolute;top:0;transform:translate(-100%)}.carousel-reverse-transition-enter{transform:translate(-100%)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;transform:translate(100%)}.dialog-transition-enter,.dialog-transition-leave-to{transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{transform:translateY(100%)}.dialog-top-transition-enter,.dialog-top-transition-leave-to{transform:translateY(-100%)}.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active,.picker-transition-enter-active,.picker-transition-leave-active{transition:.3s cubic-bezier(0,0,.2,1)}.picker-reverse-transition-enter,.picker-reverse-transition-leave-to,.picker-transition-enter,.picker-transition-leave-to{opacity:0}.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to,.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to{position:absolute!important}.picker-transition-enter{transform:translateY(100%)}.picker-reverse-transition-enter,.picker-transition-leave-to{transform:translateY(-100%)}.picker-reverse-transition-leave-to{transform:translateY(100%)}.picker-title-transition-enter-to,.picker-title-transition-leave{transform:translate(0)}.picker-title-transition-enter{transform:translate(-100%)}.picker-title-transition-leave-to{opacity:0;transform:translate(100%)}.picker-title-transition-leave,.picker-title-transition-leave-active,.picker-title-transition-leave-to{position:absolute!important}.tab-transition-enter{transform:translate(100%)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;transform:translate(100%)}.expand-transition-enter-active,.expand-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.expand-transition-move{transition:transform .6s}.expand-x-transition-enter-active,.expand-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.expand-x-transition-move{transition:transform .6s}.scale-transition-enter-active,.scale-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-transition-move{transition:transform .6s}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;transform:scale(0)}.scale-rotate-transition-enter-active,.scale-rotate-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-rotate-transition-move{transition:transform .6s}.scale-rotate-transition-enter,.scale-rotate-transition-leave,.scale-rotate-transition-leave-to{opacity:0;transform:scale(0) rotate(-45deg)}.scale-rotate-reverse-transition-enter-active,.scale-rotate-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-rotate-reverse-transition-move{transition:transform .6s}.scale-rotate-reverse-transition-enter,.scale-rotate-reverse-transition-leave,.scale-rotate-reverse-transition-leave-to{opacity:0;transform:scale(0) rotate(45deg)}.message-transition-enter-active,.message-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.message-transition-move{transition:transform .6s}.message-transition-enter,.message-transition-leave-to{opacity:0;transform:translateY(-15px)}.message-transition-leave,.message-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-y-transition-move{transition:transform .6s}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;transform:translateY(-15px)}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-y-reverse-transition-move{transition:transform .6s}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;transform:translateY(15px)}.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-y-transition-move{transition:transform .6s}.scroll-y-transition-enter,.scroll-y-transition-leave-to{opacity:0}.scroll-y-transition-enter{transform:translateY(-15px)}.scroll-y-transition-leave-to{transform:translateY(15px)}.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-y-reverse-transition-move{transition:transform .6s}.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{opacity:0}.scroll-y-reverse-transition-enter{transform:translateY(15px)}.scroll-y-reverse-transition-leave-to{transform:translateY(-15px)}.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-x-transition-move{transition:transform .6s}.scroll-x-transition-enter,.scroll-x-transition-leave-to{opacity:0}.scroll-x-transition-enter{transform:translateX(-15px)}.scroll-x-transition-leave-to{transform:translateX(15px)}.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-x-reverse-transition-move{transition:transform .6s}.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{opacity:0}.scroll-x-reverse-transition-enter{transform:translateX(15px)}.scroll-x-reverse-transition-leave-to{transform:translateX(-15px)}.slide-x-transition-enter-active,.slide-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-x-transition-move{transition:transform .6s}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;transform:translateX(-15px)}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-x-reverse-transition-move{transition:transform .6s}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;transform:translateX(15px)}.fade-transition-enter-active,.fade-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.fade-transition-move{transition:transform .6s}.fade-transition-enter,.fade-transition-leave-to{opacity:0!important}.fab-transition-enter-active,.fab-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.fab-transition-move{transition:transform .6s}.fab-transition-enter,.fab-transition-leave-to{transform:scale(0) rotate(-45deg)}.v-application .blockquote{padding:16px 0 16px 24px;font-size:18px;font-weight:300}.v-application code,.v-application kbd{border-radius:3px;font-size:85%;font-weight:400}.v-application code{padding:.2em .4em}.v-application kbd{padding:.2em .4rem;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.theme--light.v-application code{background-color:rgba(0,0,0,.05);color:currentColor}.theme--light.v-application kbd{background:#212529;color:#fff}.theme--dark.v-application code{background-color:hsla(0,0%,100%,.1);color:currentColor}.theme--dark.v-application kbd{background:#212529;color:#fff}html{font-size:16px;overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}html.overflow-y-hidden{overflow-y:hidden!important}.v-application{font-family:Roboto,sans-serif;line-height:1.5}.v-application ::-ms-clear,.v-application ::-ms-reveal{display:none}@supports(-webkit-touch-callout:none){body{cursor:pointer}}.v-application .theme--light.heading{color:rgba(0,0,0,.87)}.v-application .theme--dark.heading{color:#fff}.v-application ol,.v-application ul{padding-left:24px}.v-application .display-4{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .display-3,.v-application .display-4{font-weight:300;font-family:Roboto,sans-serif!important}.v-application .display-3{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .display-2{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .display-1,.v-application .display-2{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .display-1{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .headline{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .headline,.v-application .title{line-height:2rem;font-family:Roboto,sans-serif!important}.v-application .title{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .subtitle-2{font-size:.875rem!important;font-weight:500;letter-spacing:.0071428571em!important;line-height:1.375rem;font-family:Roboto,sans-serif!important}.v-application .subtitle-1{font-size:1rem!important;letter-spacing:.009375em!important;line-height:1.75rem}.v-application .body-2,.v-application .subtitle-1{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .body-2{font-size:.875rem!important;letter-spacing:.0178571429em!important;line-height:1.25rem}.v-application .body-1{font-size:1rem!important;letter-spacing:.03125em!important;line-height:1.5rem}.v-application .body-1,.v-application .caption{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .caption{font-size:.75rem!important;letter-spacing:.0333333333em!important;line-height:1.25rem}.v-application .overline{font-size:.75rem!important;font-weight:500;letter-spacing:.1666666667em!important;line-height:2rem;text-transform:uppercase;font-family:Roboto,sans-serif!important}.v-application p{margin-bottom:16px}@media only print{.v-application .hidden-print-only{display:none!important}}@media only screen{.v-application .hidden-screen-only{display:none!important}}@media only screen and (max-width:599px){.v-application .hidden-xs-only{display:none!important}}@media only screen and (min-width:600px)and (max-width:959px){.v-application .hidden-sm-only{display:none!important}}@media only screen and (max-width:959px){.v-application .hidden-sm-and-down{display:none!important}}@media only screen and (min-width:600px){.v-application .hidden-sm-and-up{display:none!important}}@media only screen and (min-width:960px)and (max-width:1263px){.v-application .hidden-md-only{display:none!important}}@media only screen and (max-width:1263px){.v-application .hidden-md-and-down{display:none!important}}@media only screen and (min-width:960px){.v-application .hidden-md-and-up{display:none!important}}@media only screen and (min-width:1264px)and (max-width:1903px){.v-application .hidden-lg-only{display:none!important}}@media only screen and (max-width:1903px){.v-application .hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1264px){.v-application .hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1904px){.v-application .hidden-xl-only{display:none!important}}.d-sr-only,.d-sr-only-focusable:not(:focus){border:0!important;clip:rect(0,0,0,0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.v-application .font-weight-thin{font-weight:100!important}.v-application .font-weight-light{font-weight:300!important}.v-application .font-weight-regular{font-weight:400!important}.v-application .font-weight-medium{font-weight:500!important}.v-application .font-weight-bold{font-weight:700!important}.v-application .font-weight-black{font-weight:900!important}.v-application .font-italic{font-style:italic!important}.v-application .transition-fast-out-slow-in{transition:.3s cubic-bezier(.4,0,.2,1)!important}.v-application .transition-linear-out-slow-in{transition:.3s cubic-bezier(0,0,.2,1)!important}.v-application .transition-fast-out-linear-in{transition:.3s cubic-bezier(.4,0,1,1)!important}.v-application .transition-ease-in-out{transition:.3s cubic-bezier(.4,0,.6,1)!important}.v-application .transition-fast-in-fast-out{transition:.3s cubic-bezier(.25,.8,.25,1)!important}.v-application .transition-swing{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.v-application .overflow-auto{overflow:auto!important}.v-application .overflow-hidden{overflow:hidden!important}.v-application .overflow-visible{overflow:visible!important}.v-application .overflow-x-auto{overflow-x:auto!important}.v-application .overflow-x-hidden{overflow-x:hidden!important}.v-application .overflow-y-auto{overflow-y:auto!important}.v-application .overflow-y-hidden{overflow-y:hidden!important}.v-application .d-none{display:none!important}.v-application .d-inline{display:inline!important}.v-application .d-inline-block{display:inline-block!important}.v-application .d-block{display:block!important}.v-application .d-table{display:table!important}.v-application .d-table-row{display:table-row!important}.v-application .d-table-cell{display:table-cell!important}.v-application .d-flex{display:flex!important}.v-application .d-inline-flex{display:inline-flex!important}.v-application .float-none{float:none!important}.v-application .float-left{float:left!important}.v-application .float-right{float:right!important}.v-application--is-rtl .float-end{float:left!important}.v-application--is-ltr .float-end,.v-application--is-rtl .float-start{float:right!important}.v-application--is-ltr .float-start{float:left!important}.v-application .flex-fill{flex:1 1 auto!important}.v-application .flex-row{flex-direction:row!important}.v-application .flex-column{flex-direction:column!important}.v-application .flex-row-reverse{flex-direction:row-reverse!important}.v-application .flex-column-reverse{flex-direction:column-reverse!important}.v-application .flex-grow-0{flex-grow:0!important}.v-application .flex-grow-1{flex-grow:1!important}.v-application .flex-shrink-0{flex-shrink:0!important}.v-application .flex-shrink-1{flex-shrink:1!important}.v-application .flex-wrap{flex-wrap:wrap!important}.v-application .flex-nowrap{flex-wrap:nowrap!important}.v-application .flex-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-start{justify-content:flex-start!important}.v-application .justify-end{justify-content:flex-end!important}.v-application .justify-center{justify-content:center!important}.v-application .justify-space-between{justify-content:space-between!important}.v-application .justify-space-around{justify-content:space-around!important}.v-application .align-start{align-items:flex-start!important}.v-application .align-end{align-items:flex-end!important}.v-application .align-center{align-items:center!important}.v-application .align-baseline{align-items:baseline!important}.v-application .align-stretch{align-items:stretch!important}.v-application .align-content-start{align-content:flex-start!important}.v-application .align-content-end{align-content:flex-end!important}.v-application .align-content-center{align-content:center!important}.v-application .align-content-space-between{align-content:space-between!important}.v-application .align-content-space-around{align-content:space-around!important}.v-application .align-content-stretch{align-content:stretch!important}.v-application .align-self-auto{align-self:auto!important}.v-application .align-self-start{align-self:flex-start!important}.v-application .align-self-end{align-self:flex-end!important}.v-application .align-self-center{align-self:center!important}.v-application .align-self-baseline{align-self:baseline!important}.v-application .align-self-stretch{align-self:stretch!important}.v-application .order-first{order:-1!important}.v-application .order-0{order:0!important}.v-application .order-1{order:1!important}.v-application .order-2{order:2!important}.v-application .order-3{order:3!important}.v-application .order-4{order:4!important}.v-application .order-5{order:5!important}.v-application .order-6{order:6!important}.v-application .order-7{order:7!important}.v-application .order-8{order:8!important}.v-application .order-9{order:9!important}.v-application .order-10{order:10!important}.v-application .order-11{order:11!important}.v-application .order-12{order:12!important}.v-application .order-last{order:13!important}.v-application .ma-0{margin:0!important}.v-application .ma-1{margin:4px!important}.v-application .ma-2{margin:8px!important}.v-application .ma-3{margin:12px!important}.v-application .ma-4{margin:16px!important}.v-application .ma-5{margin:20px!important}.v-application .ma-6{margin:24px!important}.v-application .ma-7{margin:28px!important}.v-application .ma-8{margin:32px!important}.v-application .ma-9{margin:36px!important}.v-application .ma-10{margin:40px!important}.v-application .ma-11{margin:44px!important}.v-application .ma-12{margin:48px!important}.v-application .ma-13{margin:52px!important}.v-application .ma-14{margin:56px!important}.v-application .ma-15{margin:60px!important}.v-application .ma-16{margin:64px!important}.v-application .ma-auto{margin:auto!important}.v-application .mx-0{margin-right:0!important;margin-left:0!important}.v-application .mx-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-0{margin-top:0!important}.v-application .mt-1{margin-top:4px!important}.v-application .mt-2{margin-top:8px!important}.v-application .mt-3{margin-top:12px!important}.v-application .mt-4{margin-top:16px!important}.v-application .mt-5{margin-top:20px!important}.v-application .mt-6{margin-top:24px!important}.v-application .mt-7{margin-top:28px!important}.v-application .mt-8{margin-top:32px!important}.v-application .mt-9{margin-top:36px!important}.v-application .mt-10{margin-top:40px!important}.v-application .mt-11{margin-top:44px!important}.v-application .mt-12{margin-top:48px!important}.v-application .mt-13{margin-top:52px!important}.v-application .mt-14{margin-top:56px!important}.v-application .mt-15{margin-top:60px!important}.v-application .mt-16{margin-top:64px!important}.v-application .mt-auto{margin-top:auto!important}.v-application .mr-0{margin-right:0!important}.v-application .mr-1{margin-right:4px!important}.v-application .mr-2{margin-right:8px!important}.v-application .mr-3{margin-right:12px!important}.v-application .mr-4{margin-right:16px!important}.v-application .mr-5{margin-right:20px!important}.v-application .mr-6{margin-right:24px!important}.v-application .mr-7{margin-right:28px!important}.v-application .mr-8{margin-right:32px!important}.v-application .mr-9{margin-right:36px!important}.v-application .mr-10{margin-right:40px!important}.v-application .mr-11{margin-right:44px!important}.v-application .mr-12{margin-right:48px!important}.v-application .mr-13{margin-right:52px!important}.v-application .mr-14{margin-right:56px!important}.v-application .mr-15{margin-right:60px!important}.v-application .mr-16{margin-right:64px!important}.v-application .mr-auto{margin-right:auto!important}.v-application .mb-0{margin-bottom:0!important}.v-application .mb-1{margin-bottom:4px!important}.v-application .mb-2{margin-bottom:8px!important}.v-application .mb-3{margin-bottom:12px!important}.v-application .mb-4{margin-bottom:16px!important}.v-application .mb-5{margin-bottom:20px!important}.v-application .mb-6{margin-bottom:24px!important}.v-application .mb-7{margin-bottom:28px!important}.v-application .mb-8{margin-bottom:32px!important}.v-application .mb-9{margin-bottom:36px!important}.v-application .mb-10{margin-bottom:40px!important}.v-application .mb-11{margin-bottom:44px!important}.v-application .mb-12{margin-bottom:48px!important}.v-application .mb-13{margin-bottom:52px!important}.v-application .mb-14{margin-bottom:56px!important}.v-application .mb-15{margin-bottom:60px!important}.v-application .mb-16{margin-bottom:64px!important}.v-application .mb-auto{margin-bottom:auto!important}.v-application .ml-0{margin-left:0!important}.v-application .ml-1{margin-left:4px!important}.v-application .ml-2{margin-left:8px!important}.v-application .ml-3{margin-left:12px!important}.v-application .ml-4{margin-left:16px!important}.v-application .ml-5{margin-left:20px!important}.v-application .ml-6{margin-left:24px!important}.v-application .ml-7{margin-left:28px!important}.v-application .ml-8{margin-left:32px!important}.v-application .ml-9{margin-left:36px!important}.v-application .ml-10{margin-left:40px!important}.v-application .ml-11{margin-left:44px!important}.v-application .ml-12{margin-left:48px!important}.v-application .ml-13{margin-left:52px!important}.v-application .ml-14{margin-left:56px!important}.v-application .ml-15{margin-left:60px!important}.v-application .ml-16{margin-left:64px!important}.v-application .ml-auto{margin-left:auto!important}.v-application--is-ltr .ms-0{margin-left:0!important}.v-application--is-rtl .ms-0{margin-right:0!important}.v-application--is-ltr .ms-1{margin-left:4px!important}.v-application--is-rtl .ms-1{margin-right:4px!important}.v-application--is-ltr .ms-2{margin-left:8px!important}.v-application--is-rtl .ms-2{margin-right:8px!important}.v-application--is-ltr .ms-3{margin-left:12px!important}.v-application--is-rtl .ms-3{margin-right:12px!important}.v-application--is-ltr .ms-4{margin-left:16px!important}.v-application--is-rtl .ms-4{margin-right:16px!important}.v-application--is-ltr .ms-5{margin-left:20px!important}.v-application--is-rtl .ms-5{margin-right:20px!important}.v-application--is-ltr .ms-6{margin-left:24px!important}.v-application--is-rtl .ms-6{margin-right:24px!important}.v-application--is-ltr .ms-7{margin-left:28px!important}.v-application--is-rtl .ms-7{margin-right:28px!important}.v-application--is-ltr .ms-8{margin-left:32px!important}.v-application--is-rtl .ms-8{margin-right:32px!important}.v-application--is-ltr .ms-9{margin-left:36px!important}.v-application--is-rtl .ms-9{margin-right:36px!important}.v-application--is-ltr .ms-10{margin-left:40px!important}.v-application--is-rtl .ms-10{margin-right:40px!important}.v-application--is-ltr .ms-11{margin-left:44px!important}.v-application--is-rtl .ms-11{margin-right:44px!important}.v-application--is-ltr .ms-12{margin-left:48px!important}.v-application--is-rtl .ms-12{margin-right:48px!important}.v-application--is-ltr .ms-13{margin-left:52px!important}.v-application--is-rtl .ms-13{margin-right:52px!important}.v-application--is-ltr .ms-14{margin-left:56px!important}.v-application--is-rtl .ms-14{margin-right:56px!important}.v-application--is-ltr .ms-15{margin-left:60px!important}.v-application--is-rtl .ms-15{margin-right:60px!important}.v-application--is-ltr .ms-16{margin-left:64px!important}.v-application--is-rtl .ms-16{margin-right:64px!important}.v-application--is-ltr .ms-auto{margin-left:auto!important}.v-application--is-rtl .ms-auto{margin-right:auto!important}.v-application--is-ltr .me-0{margin-right:0!important}.v-application--is-rtl .me-0{margin-left:0!important}.v-application--is-ltr .me-1{margin-right:4px!important}.v-application--is-rtl .me-1{margin-left:4px!important}.v-application--is-ltr .me-2{margin-right:8px!important}.v-application--is-rtl .me-2{margin-left:8px!important}.v-application--is-ltr .me-3{margin-right:12px!important}.v-application--is-rtl .me-3{margin-left:12px!important}.v-application--is-ltr .me-4{margin-right:16px!important}.v-application--is-rtl .me-4{margin-left:16px!important}.v-application--is-ltr .me-5{margin-right:20px!important}.v-application--is-rtl .me-5{margin-left:20px!important}.v-application--is-ltr .me-6{margin-right:24px!important}.v-application--is-rtl .me-6{margin-left:24px!important}.v-application--is-ltr .me-7{margin-right:28px!important}.v-application--is-rtl .me-7{margin-left:28px!important}.v-application--is-ltr .me-8{margin-right:32px!important}.v-application--is-rtl .me-8{margin-left:32px!important}.v-application--is-ltr .me-9{margin-right:36px!important}.v-application--is-rtl .me-9{margin-left:36px!important}.v-application--is-ltr .me-10{margin-right:40px!important}.v-application--is-rtl .me-10{margin-left:40px!important}.v-application--is-ltr .me-11{margin-right:44px!important}.v-application--is-rtl .me-11{margin-left:44px!important}.v-application--is-ltr .me-12{margin-right:48px!important}.v-application--is-rtl .me-12{margin-left:48px!important}.v-application--is-ltr .me-13{margin-right:52px!important}.v-application--is-rtl .me-13{margin-left:52px!important}.v-application--is-ltr .me-14{margin-right:56px!important}.v-application--is-rtl .me-14{margin-left:56px!important}.v-application--is-ltr .me-15{margin-right:60px!important}.v-application--is-rtl .me-15{margin-left:60px!important}.v-application--is-ltr .me-16{margin-right:64px!important}.v-application--is-rtl .me-16{margin-left:64px!important}.v-application--is-ltr .me-auto{margin-right:auto!important}.v-application--is-rtl .me-auto{margin-left:auto!important}.v-application .ma-n1{margin:-4px!important}.v-application .ma-n2{margin:-8px!important}.v-application .ma-n3{margin:-12px!important}.v-application .ma-n4{margin:-16px!important}.v-application .ma-n5{margin:-20px!important}.v-application .ma-n6{margin:-24px!important}.v-application .ma-n7{margin:-28px!important}.v-application .ma-n8{margin:-32px!important}.v-application .ma-n9{margin:-36px!important}.v-application .ma-n10{margin:-40px!important}.v-application .ma-n11{margin:-44px!important}.v-application .ma-n12{margin:-48px!important}.v-application .ma-n13{margin:-52px!important}.v-application .ma-n14{margin:-56px!important}.v-application .ma-n15{margin:-60px!important}.v-application .ma-n16{margin:-64px!important}.v-application .mx-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-n1{margin-top:-4px!important}.v-application .mt-n2{margin-top:-8px!important}.v-application .mt-n3{margin-top:-12px!important}.v-application .mt-n4{margin-top:-16px!important}.v-application .mt-n5{margin-top:-20px!important}.v-application .mt-n6{margin-top:-24px!important}.v-application .mt-n7{margin-top:-28px!important}.v-application .mt-n8{margin-top:-32px!important}.v-application .mt-n9{margin-top:-36px!important}.v-application .mt-n10{margin-top:-40px!important}.v-application .mt-n11{margin-top:-44px!important}.v-application .mt-n12{margin-top:-48px!important}.v-application .mt-n13{margin-top:-52px!important}.v-application .mt-n14{margin-top:-56px!important}.v-application .mt-n15{margin-top:-60px!important}.v-application .mt-n16{margin-top:-64px!important}.v-application .mr-n1{margin-right:-4px!important}.v-application .mr-n2{margin-right:-8px!important}.v-application .mr-n3{margin-right:-12px!important}.v-application .mr-n4{margin-right:-16px!important}.v-application .mr-n5{margin-right:-20px!important}.v-application .mr-n6{margin-right:-24px!important}.v-application .mr-n7{margin-right:-28px!important}.v-application .mr-n8{margin-right:-32px!important}.v-application .mr-n9{margin-right:-36px!important}.v-application .mr-n10{margin-right:-40px!important}.v-application .mr-n11{margin-right:-44px!important}.v-application .mr-n12{margin-right:-48px!important}.v-application .mr-n13{margin-right:-52px!important}.v-application .mr-n14{margin-right:-56px!important}.v-application .mr-n15{margin-right:-60px!important}.v-application .mr-n16{margin-right:-64px!important}.v-application .mb-n1{margin-bottom:-4px!important}.v-application .mb-n2{margin-bottom:-8px!important}.v-application .mb-n3{margin-bottom:-12px!important}.v-application .mb-n4{margin-bottom:-16px!important}.v-application .mb-n5{margin-bottom:-20px!important}.v-application .mb-n6{margin-bottom:-24px!important}.v-application .mb-n7{margin-bottom:-28px!important}.v-application .mb-n8{margin-bottom:-32px!important}.v-application .mb-n9{margin-bottom:-36px!important}.v-application .mb-n10{margin-bottom:-40px!important}.v-application .mb-n11{margin-bottom:-44px!important}.v-application .mb-n12{margin-bottom:-48px!important}.v-application .mb-n13{margin-bottom:-52px!important}.v-application .mb-n14{margin-bottom:-56px!important}.v-application .mb-n15{margin-bottom:-60px!important}.v-application .mb-n16{margin-bottom:-64px!important}.v-application .ml-n1{margin-left:-4px!important}.v-application .ml-n2{margin-left:-8px!important}.v-application .ml-n3{margin-left:-12px!important}.v-application .ml-n4{margin-left:-16px!important}.v-application .ml-n5{margin-left:-20px!important}.v-application .ml-n6{margin-left:-24px!important}.v-application .ml-n7{margin-left:-28px!important}.v-application .ml-n8{margin-left:-32px!important}.v-application .ml-n9{margin-left:-36px!important}.v-application .ml-n10{margin-left:-40px!important}.v-application .ml-n11{margin-left:-44px!important}.v-application .ml-n12{margin-left:-48px!important}.v-application .ml-n13{margin-left:-52px!important}.v-application .ml-n14{margin-left:-56px!important}.v-application .ml-n15{margin-left:-60px!important}.v-application .ml-n16{margin-left:-64px!important}.v-application--is-ltr .ms-n1{margin-left:-4px!important}.v-application--is-rtl .ms-n1{margin-right:-4px!important}.v-application--is-ltr .ms-n2{margin-left:-8px!important}.v-application--is-rtl .ms-n2{margin-right:-8px!important}.v-application--is-ltr .ms-n3{margin-left:-12px!important}.v-application--is-rtl .ms-n3{margin-right:-12px!important}.v-application--is-ltr .ms-n4{margin-left:-16px!important}.v-application--is-rtl .ms-n4{margin-right:-16px!important}.v-application--is-ltr .ms-n5{margin-left:-20px!important}.v-application--is-rtl .ms-n5{margin-right:-20px!important}.v-application--is-ltr .ms-n6{margin-left:-24px!important}.v-application--is-rtl .ms-n6{margin-right:-24px!important}.v-application--is-ltr .ms-n7{margin-left:-28px!important}.v-application--is-rtl .ms-n7{margin-right:-28px!important}.v-application--is-ltr .ms-n8{margin-left:-32px!important}.v-application--is-rtl .ms-n8{margin-right:-32px!important}.v-application--is-ltr .ms-n9{margin-left:-36px!important}.v-application--is-rtl .ms-n9{margin-right:-36px!important}.v-application--is-ltr .ms-n10{margin-left:-40px!important}.v-application--is-rtl .ms-n10{margin-right:-40px!important}.v-application--is-ltr .ms-n11{margin-left:-44px!important}.v-application--is-rtl .ms-n11{margin-right:-44px!important}.v-application--is-ltr .ms-n12{margin-left:-48px!important}.v-application--is-rtl .ms-n12{margin-right:-48px!important}.v-application--is-ltr .ms-n13{margin-left:-52px!important}.v-application--is-rtl .ms-n13{margin-right:-52px!important}.v-application--is-ltr .ms-n14{margin-left:-56px!important}.v-application--is-rtl .ms-n14{margin-right:-56px!important}.v-application--is-ltr .ms-n15{margin-left:-60px!important}.v-application--is-rtl .ms-n15{margin-right:-60px!important}.v-application--is-ltr .ms-n16{margin-left:-64px!important}.v-application--is-rtl .ms-n16{margin-right:-64px!important}.v-application--is-ltr .me-n1{margin-right:-4px!important}.v-application--is-rtl .me-n1{margin-left:-4px!important}.v-application--is-ltr .me-n2{margin-right:-8px!important}.v-application--is-rtl .me-n2{margin-left:-8px!important}.v-application--is-ltr .me-n3{margin-right:-12px!important}.v-application--is-rtl .me-n3{margin-left:-12px!important}.v-application--is-ltr .me-n4{margin-right:-16px!important}.v-application--is-rtl .me-n4{margin-left:-16px!important}.v-application--is-ltr .me-n5{margin-right:-20px!important}.v-application--is-rtl .me-n5{margin-left:-20px!important}.v-application--is-ltr .me-n6{margin-right:-24px!important}.v-application--is-rtl .me-n6{margin-left:-24px!important}.v-application--is-ltr .me-n7{margin-right:-28px!important}.v-application--is-rtl .me-n7{margin-left:-28px!important}.v-application--is-ltr .me-n8{margin-right:-32px!important}.v-application--is-rtl .me-n8{margin-left:-32px!important}.v-application--is-ltr .me-n9{margin-right:-36px!important}.v-application--is-rtl .me-n9{margin-left:-36px!important}.v-application--is-ltr .me-n10{margin-right:-40px!important}.v-application--is-rtl .me-n10{margin-left:-40px!important}.v-application--is-ltr .me-n11{margin-right:-44px!important}.v-application--is-rtl .me-n11{margin-left:-44px!important}.v-application--is-ltr .me-n12{margin-right:-48px!important}.v-application--is-rtl .me-n12{margin-left:-48px!important}.v-application--is-ltr .me-n13{margin-right:-52px!important}.v-application--is-rtl .me-n13{margin-left:-52px!important}.v-application--is-ltr .me-n14{margin-right:-56px!important}.v-application--is-rtl .me-n14{margin-left:-56px!important}.v-application--is-ltr .me-n15{margin-right:-60px!important}.v-application--is-rtl .me-n15{margin-left:-60px!important}.v-application--is-ltr .me-n16{margin-right:-64px!important}.v-application--is-rtl .me-n16{margin-left:-64px!important}.v-application .pa-0{padding:0!important}.v-application .pa-1{padding:4px!important}.v-application .pa-2{padding:8px!important}.v-application .pa-3{padding:12px!important}.v-application .pa-4{padding:16px!important}.v-application .pa-5{padding:20px!important}.v-application .pa-6{padding:24px!important}.v-application .pa-7{padding:28px!important}.v-application .pa-8{padding:32px!important}.v-application .pa-9{padding:36px!important}.v-application .pa-10{padding:40px!important}.v-application .pa-11{padding:44px!important}.v-application .pa-12{padding:48px!important}.v-application .pa-13{padding:52px!important}.v-application .pa-14{padding:56px!important}.v-application .pa-15{padding:60px!important}.v-application .pa-16{padding:64px!important}.v-application .px-0{padding-right:0!important;padding-left:0!important}.v-application .px-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-0{padding-top:0!important}.v-application .pt-1{padding-top:4px!important}.v-application .pt-2{padding-top:8px!important}.v-application .pt-3{padding-top:12px!important}.v-application .pt-4{padding-top:16px!important}.v-application .pt-5{padding-top:20px!important}.v-application .pt-6{padding-top:24px!important}.v-application .pt-7{padding-top:28px!important}.v-application .pt-8{padding-top:32px!important}.v-application .pt-9{padding-top:36px!important}.v-application .pt-10{padding-top:40px!important}.v-application .pt-11{padding-top:44px!important}.v-application .pt-12{padding-top:48px!important}.v-application .pt-13{padding-top:52px!important}.v-application .pt-14{padding-top:56px!important}.v-application .pt-15{padding-top:60px!important}.v-application .pt-16{padding-top:64px!important}.v-application .pr-0{padding-right:0!important}.v-application .pr-1{padding-right:4px!important}.v-application .pr-2{padding-right:8px!important}.v-application .pr-3{padding-right:12px!important}.v-application .pr-4{padding-right:16px!important}.v-application .pr-5{padding-right:20px!important}.v-application .pr-6{padding-right:24px!important}.v-application .pr-7{padding-right:28px!important}.v-application .pr-8{padding-right:32px!important}.v-application .pr-9{padding-right:36px!important}.v-application .pr-10{padding-right:40px!important}.v-application .pr-11{padding-right:44px!important}.v-application .pr-12{padding-right:48px!important}.v-application .pr-13{padding-right:52px!important}.v-application .pr-14{padding-right:56px!important}.v-application .pr-15{padding-right:60px!important}.v-application .pr-16{padding-right:64px!important}.v-application .pb-0{padding-bottom:0!important}.v-application .pb-1{padding-bottom:4px!important}.v-application .pb-2{padding-bottom:8px!important}.v-application .pb-3{padding-bottom:12px!important}.v-application .pb-4{padding-bottom:16px!important}.v-application .pb-5{padding-bottom:20px!important}.v-application .pb-6{padding-bottom:24px!important}.v-application .pb-7{padding-bottom:28px!important}.v-application .pb-8{padding-bottom:32px!important}.v-application .pb-9{padding-bottom:36px!important}.v-application .pb-10{padding-bottom:40px!important}.v-application .pb-11{padding-bottom:44px!important}.v-application .pb-12{padding-bottom:48px!important}.v-application .pb-13{padding-bottom:52px!important}.v-application .pb-14{padding-bottom:56px!important}.v-application .pb-15{padding-bottom:60px!important}.v-application .pb-16{padding-bottom:64px!important}.v-application .pl-0{padding-left:0!important}.v-application .pl-1{padding-left:4px!important}.v-application .pl-2{padding-left:8px!important}.v-application .pl-3{padding-left:12px!important}.v-application .pl-4{padding-left:16px!important}.v-application .pl-5{padding-left:20px!important}.v-application .pl-6{padding-left:24px!important}.v-application .pl-7{padding-left:28px!important}.v-application .pl-8{padding-left:32px!important}.v-application .pl-9{padding-left:36px!important}.v-application .pl-10{padding-left:40px!important}.v-application .pl-11{padding-left:44px!important}.v-application .pl-12{padding-left:48px!important}.v-application .pl-13{padding-left:52px!important}.v-application .pl-14{padding-left:56px!important}.v-application .pl-15{padding-left:60px!important}.v-application .pl-16{padding-left:64px!important}.v-application--is-ltr .ps-0{padding-left:0!important}.v-application--is-rtl .ps-0{padding-right:0!important}.v-application--is-ltr .ps-1{padding-left:4px!important}.v-application--is-rtl .ps-1{padding-right:4px!important}.v-application--is-ltr .ps-2{padding-left:8px!important}.v-application--is-rtl .ps-2{padding-right:8px!important}.v-application--is-ltr .ps-3{padding-left:12px!important}.v-application--is-rtl .ps-3{padding-right:12px!important}.v-application--is-ltr .ps-4{padding-left:16px!important}.v-application--is-rtl .ps-4{padding-right:16px!important}.v-application--is-ltr .ps-5{padding-left:20px!important}.v-application--is-rtl .ps-5{padding-right:20px!important}.v-application--is-ltr .ps-6{padding-left:24px!important}.v-application--is-rtl .ps-6{padding-right:24px!important}.v-application--is-ltr .ps-7{padding-left:28px!important}.v-application--is-rtl .ps-7{padding-right:28px!important}.v-application--is-ltr .ps-8{padding-left:32px!important}.v-application--is-rtl .ps-8{padding-right:32px!important}.v-application--is-ltr .ps-9{padding-left:36px!important}.v-application--is-rtl .ps-9{padding-right:36px!important}.v-application--is-ltr .ps-10{padding-left:40px!important}.v-application--is-rtl .ps-10{padding-right:40px!important}.v-application--is-ltr .ps-11{padding-left:44px!important}.v-application--is-rtl .ps-11{padding-right:44px!important}.v-application--is-ltr .ps-12{padding-left:48px!important}.v-application--is-rtl .ps-12{padding-right:48px!important}.v-application--is-ltr .ps-13{padding-left:52px!important}.v-application--is-rtl .ps-13{padding-right:52px!important}.v-application--is-ltr .ps-14{padding-left:56px!important}.v-application--is-rtl .ps-14{padding-right:56px!important}.v-application--is-ltr .ps-15{padding-left:60px!important}.v-application--is-rtl .ps-15{padding-right:60px!important}.v-application--is-ltr .ps-16{padding-left:64px!important}.v-application--is-rtl .ps-16{padding-right:64px!important}.v-application--is-ltr .pe-0{padding-right:0!important}.v-application--is-rtl .pe-0{padding-left:0!important}.v-application--is-ltr .pe-1{padding-right:4px!important}.v-application--is-rtl .pe-1{padding-left:4px!important}.v-application--is-ltr .pe-2{padding-right:8px!important}.v-application--is-rtl .pe-2{padding-left:8px!important}.v-application--is-ltr .pe-3{padding-right:12px!important}.v-application--is-rtl .pe-3{padding-left:12px!important}.v-application--is-ltr .pe-4{padding-right:16px!important}.v-application--is-rtl .pe-4{padding-left:16px!important}.v-application--is-ltr .pe-5{padding-right:20px!important}.v-application--is-rtl .pe-5{padding-left:20px!important}.v-application--is-ltr .pe-6{padding-right:24px!important}.v-application--is-rtl .pe-6{padding-left:24px!important}.v-application--is-ltr .pe-7{padding-right:28px!important}.v-application--is-rtl .pe-7{padding-left:28px!important}.v-application--is-ltr .pe-8{padding-right:32px!important}.v-application--is-rtl .pe-8{padding-left:32px!important}.v-application--is-ltr .pe-9{padding-right:36px!important}.v-application--is-rtl .pe-9{padding-left:36px!important}.v-application--is-ltr .pe-10{padding-right:40px!important}.v-application--is-rtl .pe-10{padding-left:40px!important}.v-application--is-ltr .pe-11{padding-right:44px!important}.v-application--is-rtl .pe-11{padding-left:44px!important}.v-application--is-ltr .pe-12{padding-right:48px!important}.v-application--is-rtl .pe-12{padding-left:48px!important}.v-application--is-ltr .pe-13{padding-right:52px!important}.v-application--is-rtl .pe-13{padding-left:52px!important}.v-application--is-ltr .pe-14{padding-right:56px!important}.v-application--is-rtl .pe-14{padding-left:56px!important}.v-application--is-ltr .pe-15{padding-right:60px!important}.v-application--is-rtl .pe-15{padding-left:60px!important}.v-application--is-ltr .pe-16{padding-right:64px!important}.v-application--is-rtl .pe-16{padding-left:64px!important}.v-application .rounded-0{border-radius:0!important}.v-application .rounded-sm{border-radius:2px!important}.v-application .rounded{border-radius:4px!important}.v-application .rounded-lg{border-radius:8px!important}.v-application .rounded-xl{border-radius:24px!important}.v-application .rounded-pill{border-radius:9999px!important}.v-application .rounded-circle{border-radius:50%!important}.v-application .rounded-t-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.v-application .rounded-t-sm{border-top-left-radius:2px!important;border-top-right-radius:2px!important}.v-application .rounded-t{border-top-left-radius:4px!important;border-top-right-radius:4px!important}.v-application .rounded-t-lg{border-top-left-radius:8px!important;border-top-right-radius:8px!important}.v-application .rounded-t-xl{border-top-left-radius:24px!important;border-top-right-radius:24px!important}.v-application .rounded-t-pill{border-top-left-radius:9999px!important;border-top-right-radius:9999px!important}.v-application .rounded-t-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.v-application .rounded-r-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.v-application .rounded-r-sm{border-top-right-radius:2px!important;border-bottom-right-radius:2px!important}.v-application .rounded-r{border-top-right-radius:4px!important;border-bottom-right-radius:4px!important}.v-application .rounded-r-lg{border-top-right-radius:8px!important;border-bottom-right-radius:8px!important}.v-application .rounded-r-xl{border-top-right-radius:24px!important;border-bottom-right-radius:24px!important}.v-application .rounded-r-pill{border-top-right-radius:9999px!important;border-bottom-right-radius:9999px!important}.v-application .rounded-r-circle{border-top-right-radius:50%!important;border-bottom-right-radius:50%!important}.v-application .rounded-b-0{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.v-application .rounded-b-sm{border-bottom-left-radius:2px!important;border-bottom-right-radius:2px!important}.v-application .rounded-b{border-bottom-left-radius:4px!important;border-bottom-right-radius:4px!important}.v-application .rounded-b-lg{border-bottom-left-radius:8px!important;border-bottom-right-radius:8px!important}.v-application .rounded-b-xl{border-bottom-left-radius:24px!important;border-bottom-right-radius:24px!important}.v-application .rounded-b-pill{border-bottom-left-radius:9999px!important;border-bottom-right-radius:9999px!important}.v-application .rounded-b-circle{border-bottom-left-radius:50%!important;border-bottom-right-radius:50%!important}.v-application .rounded-l-0{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.v-application .rounded-l-sm{border-top-left-radius:2px!important;border-bottom-left-radius:2px!important}.v-application .rounded-l{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important}.v-application .rounded-l-lg{border-top-left-radius:8px!important;border-bottom-left-radius:8px!important}.v-application .rounded-l-xl{border-top-left-radius:24px!important;border-bottom-left-radius:24px!important}.v-application .rounded-l-pill{border-top-left-radius:9999px!important;border-bottom-left-radius:9999px!important}.v-application .rounded-l-circle{border-top-left-radius:50%!important;border-bottom-left-radius:50%!important}.v-application .rounded-tl-0{border-top-left-radius:0!important}.v-application .rounded-tl-sm{border-top-left-radius:2px!important}.v-application .rounded-tl{border-top-left-radius:4px!important}.v-application .rounded-tl-lg{border-top-left-radius:8px!important}.v-application .rounded-tl-xl{border-top-left-radius:24px!important}.v-application .rounded-tl-pill{border-top-left-radius:9999px!important}.v-application .rounded-tl-circle{border-top-left-radius:50%!important}.v-application .rounded-tr-0{border-top-right-radius:0!important}.v-application .rounded-tr-sm{border-top-right-radius:2px!important}.v-application .rounded-tr{border-top-right-radius:4px!important}.v-application .rounded-tr-lg{border-top-right-radius:8px!important}.v-application .rounded-tr-xl{border-top-right-radius:24px!important}.v-application .rounded-tr-pill{border-top-right-radius:9999px!important}.v-application .rounded-tr-circle{border-top-right-radius:50%!important}.v-application .rounded-br-0{border-bottom-right-radius:0!important}.v-application .rounded-br-sm{border-bottom-right-radius:2px!important}.v-application .rounded-br{border-bottom-right-radius:4px!important}.v-application .rounded-br-lg{border-bottom-right-radius:8px!important}.v-application .rounded-br-xl{border-bottom-right-radius:24px!important}.v-application .rounded-br-pill{border-bottom-right-radius:9999px!important}.v-application .rounded-br-circle{border-bottom-right-radius:50%!important}.v-application .rounded-bl-0{border-bottom-left-radius:0!important}.v-application .rounded-bl-sm{border-bottom-left-radius:2px!important}.v-application .rounded-bl{border-bottom-left-radius:4px!important}.v-application .rounded-bl-lg{border-bottom-left-radius:8px!important}.v-application .rounded-bl-xl{border-bottom-left-radius:24px!important}.v-application .rounded-bl-pill{border-bottom-left-radius:9999px!important}.v-application .rounded-bl-circle{border-bottom-left-radius:50%!important}.v-application .text-left{text-align:left!important}.v-application .text-right{text-align:right!important}.v-application .text-center{text-align:center!important}.v-application .text-justify{text-align:justify!important}.v-application .text-start{text-align:start!important}.v-application .text-end{text-align:end!important}.v-application .text-decoration-line-through{text-decoration:line-through!important}.v-application .text-decoration-none{text-decoration:none!important}.v-application .text-decoration-overline{text-decoration:overline!important}.v-application .text-decoration-underline{text-decoration:underline!important}.v-application .text-wrap{white-space:normal!important}.v-application .text-no-wrap{white-space:nowrap!important}.v-application .text-pre{white-space:pre!important}.v-application .text-pre-line{white-space:pre-line!important}.v-application .text-pre-wrap{white-space:pre-wrap!important}.v-application .text-break{overflow-wrap:break-word!important;word-break:break-word!important}.v-application .text-truncate{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.v-application .text-none{text-transform:none!important}.v-application .text-capitalize{text-transform:capitalize!important}.v-application .text-lowercase{text-transform:lowercase!important}.v-application .text-uppercase{text-transform:uppercase!important}.v-application .text-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-h1,.v-application .text-h2{font-weight:300;font-family:Roboto,sans-serif!important}.v-application .text-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-h3,.v-application .text-h4{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .text-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-h5,.v-application .text-h6{line-height:2rem;font-family:Roboto,sans-serif!important}.v-application .text-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:Roboto,sans-serif!important}.v-application .text-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:Roboto,sans-serif!important}.v-application .text-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:Roboto,sans-serif!important}.v-application .text-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-body-2,.v-application .text-button{font-size:.875rem!important;font-family:Roboto,sans-serif!important}.v-application .text-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-caption,.v-application .text-overline{font-size:.75rem!important;font-family:Roboto,sans-serif!important}.v-application .text-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}@media(min-width:600px){.v-application .d-sm-none{display:none!important}.v-application .d-sm-inline{display:inline!important}.v-application .d-sm-inline-block{display:inline-block!important}.v-application .d-sm-block{display:block!important}.v-application .d-sm-table{display:table!important}.v-application .d-sm-table-row{display:table-row!important}.v-application .d-sm-table-cell{display:table-cell!important}.v-application .d-sm-flex{display:flex!important}.v-application .d-sm-inline-flex{display:inline-flex!important}.v-application .float-sm-none{float:none!important}.v-application .float-sm-left{float:left!important}.v-application .float-sm-right{float:right!important}.v-application--is-rtl .float-sm-end{float:left!important}.v-application--is-ltr .float-sm-end,.v-application--is-rtl .float-sm-start{float:right!important}.v-application--is-ltr .float-sm-start{float:left!important}.v-application .flex-sm-fill{flex:1 1 auto!important}.v-application .flex-sm-row{flex-direction:row!important}.v-application .flex-sm-column{flex-direction:column!important}.v-application .flex-sm-row-reverse{flex-direction:row-reverse!important}.v-application .flex-sm-column-reverse{flex-direction:column-reverse!important}.v-application .flex-sm-grow-0{flex-grow:0!important}.v-application .flex-sm-grow-1{flex-grow:1!important}.v-application .flex-sm-shrink-0{flex-shrink:0!important}.v-application .flex-sm-shrink-1{flex-shrink:1!important}.v-application .flex-sm-wrap{flex-wrap:wrap!important}.v-application .flex-sm-nowrap{flex-wrap:nowrap!important}.v-application .flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-sm-start{justify-content:flex-start!important}.v-application .justify-sm-end{justify-content:flex-end!important}.v-application .justify-sm-center{justify-content:center!important}.v-application .justify-sm-space-between{justify-content:space-between!important}.v-application .justify-sm-space-around{justify-content:space-around!important}.v-application .align-sm-start{align-items:flex-start!important}.v-application .align-sm-end{align-items:flex-end!important}.v-application .align-sm-center{align-items:center!important}.v-application .align-sm-baseline{align-items:baseline!important}.v-application .align-sm-stretch{align-items:stretch!important}.v-application .align-content-sm-start{align-content:flex-start!important}.v-application .align-content-sm-end{align-content:flex-end!important}.v-application .align-content-sm-center{align-content:center!important}.v-application .align-content-sm-space-between{align-content:space-between!important}.v-application .align-content-sm-space-around{align-content:space-around!important}.v-application .align-content-sm-stretch{align-content:stretch!important}.v-application .align-self-sm-auto{align-self:auto!important}.v-application .align-self-sm-start{align-self:flex-start!important}.v-application .align-self-sm-end{align-self:flex-end!important}.v-application .align-self-sm-center{align-self:center!important}.v-application .align-self-sm-baseline{align-self:baseline!important}.v-application .align-self-sm-stretch{align-self:stretch!important}.v-application .order-sm-first{order:-1!important}.v-application .order-sm-0{order:0!important}.v-application .order-sm-1{order:1!important}.v-application .order-sm-2{order:2!important}.v-application .order-sm-3{order:3!important}.v-application .order-sm-4{order:4!important}.v-application .order-sm-5{order:5!important}.v-application .order-sm-6{order:6!important}.v-application .order-sm-7{order:7!important}.v-application .order-sm-8{order:8!important}.v-application .order-sm-9{order:9!important}.v-application .order-sm-10{order:10!important}.v-application .order-sm-11{order:11!important}.v-application .order-sm-12{order:12!important}.v-application .order-sm-last{order:13!important}.v-application .ma-sm-0{margin:0!important}.v-application .ma-sm-1{margin:4px!important}.v-application .ma-sm-2{margin:8px!important}.v-application .ma-sm-3{margin:12px!important}.v-application .ma-sm-4{margin:16px!important}.v-application .ma-sm-5{margin:20px!important}.v-application .ma-sm-6{margin:24px!important}.v-application .ma-sm-7{margin:28px!important}.v-application .ma-sm-8{margin:32px!important}.v-application .ma-sm-9{margin:36px!important}.v-application .ma-sm-10{margin:40px!important}.v-application .ma-sm-11{margin:44px!important}.v-application .ma-sm-12{margin:48px!important}.v-application .ma-sm-13{margin:52px!important}.v-application .ma-sm-14{margin:56px!important}.v-application .ma-sm-15{margin:60px!important}.v-application .ma-sm-16{margin:64px!important}.v-application .ma-sm-auto{margin:auto!important}.v-application .mx-sm-0{margin-right:0!important;margin-left:0!important}.v-application .mx-sm-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-sm-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-sm-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-sm-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-sm-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-sm-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-sm-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-sm-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-sm-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-sm-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-sm-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-sm-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-sm-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-sm-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-sm-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-sm-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-sm-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-sm-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-sm-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-sm-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-sm-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-sm-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-sm-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-sm-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-sm-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-sm-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-sm-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-sm-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-sm-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-sm-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-sm-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-sm-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-sm-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-sm-0{margin-top:0!important}.v-application .mt-sm-1{margin-top:4px!important}.v-application .mt-sm-2{margin-top:8px!important}.v-application .mt-sm-3{margin-top:12px!important}.v-application .mt-sm-4{margin-top:16px!important}.v-application .mt-sm-5{margin-top:20px!important}.v-application .mt-sm-6{margin-top:24px!important}.v-application .mt-sm-7{margin-top:28px!important}.v-application .mt-sm-8{margin-top:32px!important}.v-application .mt-sm-9{margin-top:36px!important}.v-application .mt-sm-10{margin-top:40px!important}.v-application .mt-sm-11{margin-top:44px!important}.v-application .mt-sm-12{margin-top:48px!important}.v-application .mt-sm-13{margin-top:52px!important}.v-application .mt-sm-14{margin-top:56px!important}.v-application .mt-sm-15{margin-top:60px!important}.v-application .mt-sm-16{margin-top:64px!important}.v-application .mt-sm-auto{margin-top:auto!important}.v-application .mr-sm-0{margin-right:0!important}.v-application .mr-sm-1{margin-right:4px!important}.v-application .mr-sm-2{margin-right:8px!important}.v-application .mr-sm-3{margin-right:12px!important}.v-application .mr-sm-4{margin-right:16px!important}.v-application .mr-sm-5{margin-right:20px!important}.v-application .mr-sm-6{margin-right:24px!important}.v-application .mr-sm-7{margin-right:28px!important}.v-application .mr-sm-8{margin-right:32px!important}.v-application .mr-sm-9{margin-right:36px!important}.v-application .mr-sm-10{margin-right:40px!important}.v-application .mr-sm-11{margin-right:44px!important}.v-application .mr-sm-12{margin-right:48px!important}.v-application .mr-sm-13{margin-right:52px!important}.v-application .mr-sm-14{margin-right:56px!important}.v-application .mr-sm-15{margin-right:60px!important}.v-application .mr-sm-16{margin-right:64px!important}.v-application .mr-sm-auto{margin-right:auto!important}.v-application .mb-sm-0{margin-bottom:0!important}.v-application .mb-sm-1{margin-bottom:4px!important}.v-application .mb-sm-2{margin-bottom:8px!important}.v-application .mb-sm-3{margin-bottom:12px!important}.v-application .mb-sm-4{margin-bottom:16px!important}.v-application .mb-sm-5{margin-bottom:20px!important}.v-application .mb-sm-6{margin-bottom:24px!important}.v-application .mb-sm-7{margin-bottom:28px!important}.v-application .mb-sm-8{margin-bottom:32px!important}.v-application .mb-sm-9{margin-bottom:36px!important}.v-application .mb-sm-10{margin-bottom:40px!important}.v-application .mb-sm-11{margin-bottom:44px!important}.v-application .mb-sm-12{margin-bottom:48px!important}.v-application .mb-sm-13{margin-bottom:52px!important}.v-application .mb-sm-14{margin-bottom:56px!important}.v-application .mb-sm-15{margin-bottom:60px!important}.v-application .mb-sm-16{margin-bottom:64px!important}.v-application .mb-sm-auto{margin-bottom:auto!important}.v-application .ml-sm-0{margin-left:0!important}.v-application .ml-sm-1{margin-left:4px!important}.v-application .ml-sm-2{margin-left:8px!important}.v-application .ml-sm-3{margin-left:12px!important}.v-application .ml-sm-4{margin-left:16px!important}.v-application .ml-sm-5{margin-left:20px!important}.v-application .ml-sm-6{margin-left:24px!important}.v-application .ml-sm-7{margin-left:28px!important}.v-application .ml-sm-8{margin-left:32px!important}.v-application .ml-sm-9{margin-left:36px!important}.v-application .ml-sm-10{margin-left:40px!important}.v-application .ml-sm-11{margin-left:44px!important}.v-application .ml-sm-12{margin-left:48px!important}.v-application .ml-sm-13{margin-left:52px!important}.v-application .ml-sm-14{margin-left:56px!important}.v-application .ml-sm-15{margin-left:60px!important}.v-application .ml-sm-16{margin-left:64px!important}.v-application .ml-sm-auto{margin-left:auto!important}.v-application--is-ltr .ms-sm-0{margin-left:0!important}.v-application--is-rtl .ms-sm-0{margin-right:0!important}.v-application--is-ltr .ms-sm-1{margin-left:4px!important}.v-application--is-rtl .ms-sm-1{margin-right:4px!important}.v-application--is-ltr .ms-sm-2{margin-left:8px!important}.v-application--is-rtl .ms-sm-2{margin-right:8px!important}.v-application--is-ltr .ms-sm-3{margin-left:12px!important}.v-application--is-rtl .ms-sm-3{margin-right:12px!important}.v-application--is-ltr .ms-sm-4{margin-left:16px!important}.v-application--is-rtl .ms-sm-4{margin-right:16px!important}.v-application--is-ltr .ms-sm-5{margin-left:20px!important}.v-application--is-rtl .ms-sm-5{margin-right:20px!important}.v-application--is-ltr .ms-sm-6{margin-left:24px!important}.v-application--is-rtl .ms-sm-6{margin-right:24px!important}.v-application--is-ltr .ms-sm-7{margin-left:28px!important}.v-application--is-rtl .ms-sm-7{margin-right:28px!important}.v-application--is-ltr .ms-sm-8{margin-left:32px!important}.v-application--is-rtl .ms-sm-8{margin-right:32px!important}.v-application--is-ltr .ms-sm-9{margin-left:36px!important}.v-application--is-rtl .ms-sm-9{margin-right:36px!important}.v-application--is-ltr .ms-sm-10{margin-left:40px!important}.v-application--is-rtl .ms-sm-10{margin-right:40px!important}.v-application--is-ltr .ms-sm-11{margin-left:44px!important}.v-application--is-rtl .ms-sm-11{margin-right:44px!important}.v-application--is-ltr .ms-sm-12{margin-left:48px!important}.v-application--is-rtl .ms-sm-12{margin-right:48px!important}.v-application--is-ltr .ms-sm-13{margin-left:52px!important}.v-application--is-rtl .ms-sm-13{margin-right:52px!important}.v-application--is-ltr .ms-sm-14{margin-left:56px!important}.v-application--is-rtl .ms-sm-14{margin-right:56px!important}.v-application--is-ltr .ms-sm-15{margin-left:60px!important}.v-application--is-rtl .ms-sm-15{margin-right:60px!important}.v-application--is-ltr .ms-sm-16{margin-left:64px!important}.v-application--is-rtl .ms-sm-16{margin-right:64px!important}.v-application--is-ltr .ms-sm-auto{margin-left:auto!important}.v-application--is-rtl .ms-sm-auto{margin-right:auto!important}.v-application--is-ltr .me-sm-0{margin-right:0!important}.v-application--is-rtl .me-sm-0{margin-left:0!important}.v-application--is-ltr .me-sm-1{margin-right:4px!important}.v-application--is-rtl .me-sm-1{margin-left:4px!important}.v-application--is-ltr .me-sm-2{margin-right:8px!important}.v-application--is-rtl .me-sm-2{margin-left:8px!important}.v-application--is-ltr .me-sm-3{margin-right:12px!important}.v-application--is-rtl .me-sm-3{margin-left:12px!important}.v-application--is-ltr .me-sm-4{margin-right:16px!important}.v-application--is-rtl .me-sm-4{margin-left:16px!important}.v-application--is-ltr .me-sm-5{margin-right:20px!important}.v-application--is-rtl .me-sm-5{margin-left:20px!important}.v-application--is-ltr .me-sm-6{margin-right:24px!important}.v-application--is-rtl .me-sm-6{margin-left:24px!important}.v-application--is-ltr .me-sm-7{margin-right:28px!important}.v-application--is-rtl .me-sm-7{margin-left:28px!important}.v-application--is-ltr .me-sm-8{margin-right:32px!important}.v-application--is-rtl .me-sm-8{margin-left:32px!important}.v-application--is-ltr .me-sm-9{margin-right:36px!important}.v-application--is-rtl .me-sm-9{margin-left:36px!important}.v-application--is-ltr .me-sm-10{margin-right:40px!important}.v-application--is-rtl .me-sm-10{margin-left:40px!important}.v-application--is-ltr .me-sm-11{margin-right:44px!important}.v-application--is-rtl .me-sm-11{margin-left:44px!important}.v-application--is-ltr .me-sm-12{margin-right:48px!important}.v-application--is-rtl .me-sm-12{margin-left:48px!important}.v-application--is-ltr .me-sm-13{margin-right:52px!important}.v-application--is-rtl .me-sm-13{margin-left:52px!important}.v-application--is-ltr .me-sm-14{margin-right:56px!important}.v-application--is-rtl .me-sm-14{margin-left:56px!important}.v-application--is-ltr .me-sm-15{margin-right:60px!important}.v-application--is-rtl .me-sm-15{margin-left:60px!important}.v-application--is-ltr .me-sm-16{margin-right:64px!important}.v-application--is-rtl .me-sm-16{margin-left:64px!important}.v-application--is-ltr .me-sm-auto{margin-right:auto!important}.v-application--is-rtl .me-sm-auto{margin-left:auto!important}.v-application .ma-sm-n1{margin:-4px!important}.v-application .ma-sm-n2{margin:-8px!important}.v-application .ma-sm-n3{margin:-12px!important}.v-application .ma-sm-n4{margin:-16px!important}.v-application .ma-sm-n5{margin:-20px!important}.v-application .ma-sm-n6{margin:-24px!important}.v-application .ma-sm-n7{margin:-28px!important}.v-application .ma-sm-n8{margin:-32px!important}.v-application .ma-sm-n9{margin:-36px!important}.v-application .ma-sm-n10{margin:-40px!important}.v-application .ma-sm-n11{margin:-44px!important}.v-application .ma-sm-n12{margin:-48px!important}.v-application .ma-sm-n13{margin:-52px!important}.v-application .ma-sm-n14{margin:-56px!important}.v-application .ma-sm-n15{margin:-60px!important}.v-application .ma-sm-n16{margin:-64px!important}.v-application .mx-sm-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-sm-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-sm-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-sm-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-sm-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-sm-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-sm-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-sm-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-sm-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-sm-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-sm-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-sm-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-sm-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-sm-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-sm-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-sm-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-sm-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-sm-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-sm-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-sm-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-sm-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-sm-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-sm-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-sm-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-sm-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-sm-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-sm-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-sm-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-sm-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-sm-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-sm-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-sm-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-sm-n1{margin-top:-4px!important}.v-application .mt-sm-n2{margin-top:-8px!important}.v-application .mt-sm-n3{margin-top:-12px!important}.v-application .mt-sm-n4{margin-top:-16px!important}.v-application .mt-sm-n5{margin-top:-20px!important}.v-application .mt-sm-n6{margin-top:-24px!important}.v-application .mt-sm-n7{margin-top:-28px!important}.v-application .mt-sm-n8{margin-top:-32px!important}.v-application .mt-sm-n9{margin-top:-36px!important}.v-application .mt-sm-n10{margin-top:-40px!important}.v-application .mt-sm-n11{margin-top:-44px!important}.v-application .mt-sm-n12{margin-top:-48px!important}.v-application .mt-sm-n13{margin-top:-52px!important}.v-application .mt-sm-n14{margin-top:-56px!important}.v-application .mt-sm-n15{margin-top:-60px!important}.v-application .mt-sm-n16{margin-top:-64px!important}.v-application .mr-sm-n1{margin-right:-4px!important}.v-application .mr-sm-n2{margin-right:-8px!important}.v-application .mr-sm-n3{margin-right:-12px!important}.v-application .mr-sm-n4{margin-right:-16px!important}.v-application .mr-sm-n5{margin-right:-20px!important}.v-application .mr-sm-n6{margin-right:-24px!important}.v-application .mr-sm-n7{margin-right:-28px!important}.v-application .mr-sm-n8{margin-right:-32px!important}.v-application .mr-sm-n9{margin-right:-36px!important}.v-application .mr-sm-n10{margin-right:-40px!important}.v-application .mr-sm-n11{margin-right:-44px!important}.v-application .mr-sm-n12{margin-right:-48px!important}.v-application .mr-sm-n13{margin-right:-52px!important}.v-application .mr-sm-n14{margin-right:-56px!important}.v-application .mr-sm-n15{margin-right:-60px!important}.v-application .mr-sm-n16{margin-right:-64px!important}.v-application .mb-sm-n1{margin-bottom:-4px!important}.v-application .mb-sm-n2{margin-bottom:-8px!important}.v-application .mb-sm-n3{margin-bottom:-12px!important}.v-application .mb-sm-n4{margin-bottom:-16px!important}.v-application .mb-sm-n5{margin-bottom:-20px!important}.v-application .mb-sm-n6{margin-bottom:-24px!important}.v-application .mb-sm-n7{margin-bottom:-28px!important}.v-application .mb-sm-n8{margin-bottom:-32px!important}.v-application .mb-sm-n9{margin-bottom:-36px!important}.v-application .mb-sm-n10{margin-bottom:-40px!important}.v-application .mb-sm-n11{margin-bottom:-44px!important}.v-application .mb-sm-n12{margin-bottom:-48px!important}.v-application .mb-sm-n13{margin-bottom:-52px!important}.v-application .mb-sm-n14{margin-bottom:-56px!important}.v-application .mb-sm-n15{margin-bottom:-60px!important}.v-application .mb-sm-n16{margin-bottom:-64px!important}.v-application .ml-sm-n1{margin-left:-4px!important}.v-application .ml-sm-n2{margin-left:-8px!important}.v-application .ml-sm-n3{margin-left:-12px!important}.v-application .ml-sm-n4{margin-left:-16px!important}.v-application .ml-sm-n5{margin-left:-20px!important}.v-application .ml-sm-n6{margin-left:-24px!important}.v-application .ml-sm-n7{margin-left:-28px!important}.v-application .ml-sm-n8{margin-left:-32px!important}.v-application .ml-sm-n9{margin-left:-36px!important}.v-application .ml-sm-n10{margin-left:-40px!important}.v-application .ml-sm-n11{margin-left:-44px!important}.v-application .ml-sm-n12{margin-left:-48px!important}.v-application .ml-sm-n13{margin-left:-52px!important}.v-application .ml-sm-n14{margin-left:-56px!important}.v-application .ml-sm-n15{margin-left:-60px!important}.v-application .ml-sm-n16{margin-left:-64px!important}.v-application--is-ltr .ms-sm-n1{margin-left:-4px!important}.v-application--is-rtl .ms-sm-n1{margin-right:-4px!important}.v-application--is-ltr .ms-sm-n2{margin-left:-8px!important}.v-application--is-rtl .ms-sm-n2{margin-right:-8px!important}.v-application--is-ltr .ms-sm-n3{margin-left:-12px!important}.v-application--is-rtl .ms-sm-n3{margin-right:-12px!important}.v-application--is-ltr .ms-sm-n4{margin-left:-16px!important}.v-application--is-rtl .ms-sm-n4{margin-right:-16px!important}.v-application--is-ltr .ms-sm-n5{margin-left:-20px!important}.v-application--is-rtl .ms-sm-n5{margin-right:-20px!important}.v-application--is-ltr .ms-sm-n6{margin-left:-24px!important}.v-application--is-rtl .ms-sm-n6{margin-right:-24px!important}.v-application--is-ltr .ms-sm-n7{margin-left:-28px!important}.v-application--is-rtl .ms-sm-n7{margin-right:-28px!important}.v-application--is-ltr .ms-sm-n8{margin-left:-32px!important}.v-application--is-rtl .ms-sm-n8{margin-right:-32px!important}.v-application--is-ltr .ms-sm-n9{margin-left:-36px!important}.v-application--is-rtl .ms-sm-n9{margin-right:-36px!important}.v-application--is-ltr .ms-sm-n10{margin-left:-40px!important}.v-application--is-rtl .ms-sm-n10{margin-right:-40px!important}.v-application--is-ltr .ms-sm-n11{margin-left:-44px!important}.v-application--is-rtl .ms-sm-n11{margin-right:-44px!important}.v-application--is-ltr .ms-sm-n12{margin-left:-48px!important}.v-application--is-rtl .ms-sm-n12{margin-right:-48px!important}.v-application--is-ltr .ms-sm-n13{margin-left:-52px!important}.v-application--is-rtl .ms-sm-n13{margin-right:-52px!important}.v-application--is-ltr .ms-sm-n14{margin-left:-56px!important}.v-application--is-rtl .ms-sm-n14{margin-right:-56px!important}.v-application--is-ltr .ms-sm-n15{margin-left:-60px!important}.v-application--is-rtl .ms-sm-n15{margin-right:-60px!important}.v-application--is-ltr .ms-sm-n16{margin-left:-64px!important}.v-application--is-rtl .ms-sm-n16{margin-right:-64px!important}.v-application--is-ltr .me-sm-n1{margin-right:-4px!important}.v-application--is-rtl .me-sm-n1{margin-left:-4px!important}.v-application--is-ltr .me-sm-n2{margin-right:-8px!important}.v-application--is-rtl .me-sm-n2{margin-left:-8px!important}.v-application--is-ltr .me-sm-n3{margin-right:-12px!important}.v-application--is-rtl .me-sm-n3{margin-left:-12px!important}.v-application--is-ltr .me-sm-n4{margin-right:-16px!important}.v-application--is-rtl .me-sm-n4{margin-left:-16px!important}.v-application--is-ltr .me-sm-n5{margin-right:-20px!important}.v-application--is-rtl .me-sm-n5{margin-left:-20px!important}.v-application--is-ltr .me-sm-n6{margin-right:-24px!important}.v-application--is-rtl .me-sm-n6{margin-left:-24px!important}.v-application--is-ltr .me-sm-n7{margin-right:-28px!important}.v-application--is-rtl .me-sm-n7{margin-left:-28px!important}.v-application--is-ltr .me-sm-n8{margin-right:-32px!important}.v-application--is-rtl .me-sm-n8{margin-left:-32px!important}.v-application--is-ltr .me-sm-n9{margin-right:-36px!important}.v-application--is-rtl .me-sm-n9{margin-left:-36px!important}.v-application--is-ltr .me-sm-n10{margin-right:-40px!important}.v-application--is-rtl .me-sm-n10{margin-left:-40px!important}.v-application--is-ltr .me-sm-n11{margin-right:-44px!important}.v-application--is-rtl .me-sm-n11{margin-left:-44px!important}.v-application--is-ltr .me-sm-n12{margin-right:-48px!important}.v-application--is-rtl .me-sm-n12{margin-left:-48px!important}.v-application--is-ltr .me-sm-n13{margin-right:-52px!important}.v-application--is-rtl .me-sm-n13{margin-left:-52px!important}.v-application--is-ltr .me-sm-n14{margin-right:-56px!important}.v-application--is-rtl .me-sm-n14{margin-left:-56px!important}.v-application--is-ltr .me-sm-n15{margin-right:-60px!important}.v-application--is-rtl .me-sm-n15{margin-left:-60px!important}.v-application--is-ltr .me-sm-n16{margin-right:-64px!important}.v-application--is-rtl .me-sm-n16{margin-left:-64px!important}.v-application .pa-sm-0{padding:0!important}.v-application .pa-sm-1{padding:4px!important}.v-application .pa-sm-2{padding:8px!important}.v-application .pa-sm-3{padding:12px!important}.v-application .pa-sm-4{padding:16px!important}.v-application .pa-sm-5{padding:20px!important}.v-application .pa-sm-6{padding:24px!important}.v-application .pa-sm-7{padding:28px!important}.v-application .pa-sm-8{padding:32px!important}.v-application .pa-sm-9{padding:36px!important}.v-application .pa-sm-10{padding:40px!important}.v-application .pa-sm-11{padding:44px!important}.v-application .pa-sm-12{padding:48px!important}.v-application .pa-sm-13{padding:52px!important}.v-application .pa-sm-14{padding:56px!important}.v-application .pa-sm-15{padding:60px!important}.v-application .pa-sm-16{padding:64px!important}.v-application .px-sm-0{padding-right:0!important;padding-left:0!important}.v-application .px-sm-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-sm-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-sm-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-sm-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-sm-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-sm-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-sm-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-sm-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-sm-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-sm-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-sm-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-sm-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-sm-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-sm-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-sm-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-sm-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-sm-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-sm-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-sm-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-sm-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-sm-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-sm-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-sm-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-sm-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-sm-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-sm-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-sm-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-sm-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-sm-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-sm-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-sm-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-sm-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-sm-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-sm-0{padding-top:0!important}.v-application .pt-sm-1{padding-top:4px!important}.v-application .pt-sm-2{padding-top:8px!important}.v-application .pt-sm-3{padding-top:12px!important}.v-application .pt-sm-4{padding-top:16px!important}.v-application .pt-sm-5{padding-top:20px!important}.v-application .pt-sm-6{padding-top:24px!important}.v-application .pt-sm-7{padding-top:28px!important}.v-application .pt-sm-8{padding-top:32px!important}.v-application .pt-sm-9{padding-top:36px!important}.v-application .pt-sm-10{padding-top:40px!important}.v-application .pt-sm-11{padding-top:44px!important}.v-application .pt-sm-12{padding-top:48px!important}.v-application .pt-sm-13{padding-top:52px!important}.v-application .pt-sm-14{padding-top:56px!important}.v-application .pt-sm-15{padding-top:60px!important}.v-application .pt-sm-16{padding-top:64px!important}.v-application .pr-sm-0{padding-right:0!important}.v-application .pr-sm-1{padding-right:4px!important}.v-application .pr-sm-2{padding-right:8px!important}.v-application .pr-sm-3{padding-right:12px!important}.v-application .pr-sm-4{padding-right:16px!important}.v-application .pr-sm-5{padding-right:20px!important}.v-application .pr-sm-6{padding-right:24px!important}.v-application .pr-sm-7{padding-right:28px!important}.v-application .pr-sm-8{padding-right:32px!important}.v-application .pr-sm-9{padding-right:36px!important}.v-application .pr-sm-10{padding-right:40px!important}.v-application .pr-sm-11{padding-right:44px!important}.v-application .pr-sm-12{padding-right:48px!important}.v-application .pr-sm-13{padding-right:52px!important}.v-application .pr-sm-14{padding-right:56px!important}.v-application .pr-sm-15{padding-right:60px!important}.v-application .pr-sm-16{padding-right:64px!important}.v-application .pb-sm-0{padding-bottom:0!important}.v-application .pb-sm-1{padding-bottom:4px!important}.v-application .pb-sm-2{padding-bottom:8px!important}.v-application .pb-sm-3{padding-bottom:12px!important}.v-application .pb-sm-4{padding-bottom:16px!important}.v-application .pb-sm-5{padding-bottom:20px!important}.v-application .pb-sm-6{padding-bottom:24px!important}.v-application .pb-sm-7{padding-bottom:28px!important}.v-application .pb-sm-8{padding-bottom:32px!important}.v-application .pb-sm-9{padding-bottom:36px!important}.v-application .pb-sm-10{padding-bottom:40px!important}.v-application .pb-sm-11{padding-bottom:44px!important}.v-application .pb-sm-12{padding-bottom:48px!important}.v-application .pb-sm-13{padding-bottom:52px!important}.v-application .pb-sm-14{padding-bottom:56px!important}.v-application .pb-sm-15{padding-bottom:60px!important}.v-application .pb-sm-16{padding-bottom:64px!important}.v-application .pl-sm-0{padding-left:0!important}.v-application .pl-sm-1{padding-left:4px!important}.v-application .pl-sm-2{padding-left:8px!important}.v-application .pl-sm-3{padding-left:12px!important}.v-application .pl-sm-4{padding-left:16px!important}.v-application .pl-sm-5{padding-left:20px!important}.v-application .pl-sm-6{padding-left:24px!important}.v-application .pl-sm-7{padding-left:28px!important}.v-application .pl-sm-8{padding-left:32px!important}.v-application .pl-sm-9{padding-left:36px!important}.v-application .pl-sm-10{padding-left:40px!important}.v-application .pl-sm-11{padding-left:44px!important}.v-application .pl-sm-12{padding-left:48px!important}.v-application .pl-sm-13{padding-left:52px!important}.v-application .pl-sm-14{padding-left:56px!important}.v-application .pl-sm-15{padding-left:60px!important}.v-application .pl-sm-16{padding-left:64px!important}.v-application--is-ltr .ps-sm-0{padding-left:0!important}.v-application--is-rtl .ps-sm-0{padding-right:0!important}.v-application--is-ltr .ps-sm-1{padding-left:4px!important}.v-application--is-rtl .ps-sm-1{padding-right:4px!important}.v-application--is-ltr .ps-sm-2{padding-left:8px!important}.v-application--is-rtl .ps-sm-2{padding-right:8px!important}.v-application--is-ltr .ps-sm-3{padding-left:12px!important}.v-application--is-rtl .ps-sm-3{padding-right:12px!important}.v-application--is-ltr .ps-sm-4{padding-left:16px!important}.v-application--is-rtl .ps-sm-4{padding-right:16px!important}.v-application--is-ltr .ps-sm-5{padding-left:20px!important}.v-application--is-rtl .ps-sm-5{padding-right:20px!important}.v-application--is-ltr .ps-sm-6{padding-left:24px!important}.v-application--is-rtl .ps-sm-6{padding-right:24px!important}.v-application--is-ltr .ps-sm-7{padding-left:28px!important}.v-application--is-rtl .ps-sm-7{padding-right:28px!important}.v-application--is-ltr .ps-sm-8{padding-left:32px!important}.v-application--is-rtl .ps-sm-8{padding-right:32px!important}.v-application--is-ltr .ps-sm-9{padding-left:36px!important}.v-application--is-rtl .ps-sm-9{padding-right:36px!important}.v-application--is-ltr .ps-sm-10{padding-left:40px!important}.v-application--is-rtl .ps-sm-10{padding-right:40px!important}.v-application--is-ltr .ps-sm-11{padding-left:44px!important}.v-application--is-rtl .ps-sm-11{padding-right:44px!important}.v-application--is-ltr .ps-sm-12{padding-left:48px!important}.v-application--is-rtl .ps-sm-12{padding-right:48px!important}.v-application--is-ltr .ps-sm-13{padding-left:52px!important}.v-application--is-rtl .ps-sm-13{padding-right:52px!important}.v-application--is-ltr .ps-sm-14{padding-left:56px!important}.v-application--is-rtl .ps-sm-14{padding-right:56px!important}.v-application--is-ltr .ps-sm-15{padding-left:60px!important}.v-application--is-rtl .ps-sm-15{padding-right:60px!important}.v-application--is-ltr .ps-sm-16{padding-left:64px!important}.v-application--is-rtl .ps-sm-16{padding-right:64px!important}.v-application--is-ltr .pe-sm-0{padding-right:0!important}.v-application--is-rtl .pe-sm-0{padding-left:0!important}.v-application--is-ltr .pe-sm-1{padding-right:4px!important}.v-application--is-rtl .pe-sm-1{padding-left:4px!important}.v-application--is-ltr .pe-sm-2{padding-right:8px!important}.v-application--is-rtl .pe-sm-2{padding-left:8px!important}.v-application--is-ltr .pe-sm-3{padding-right:12px!important}.v-application--is-rtl .pe-sm-3{padding-left:12px!important}.v-application--is-ltr .pe-sm-4{padding-right:16px!important}.v-application--is-rtl .pe-sm-4{padding-left:16px!important}.v-application--is-ltr .pe-sm-5{padding-right:20px!important}.v-application--is-rtl .pe-sm-5{padding-left:20px!important}.v-application--is-ltr .pe-sm-6{padding-right:24px!important}.v-application--is-rtl .pe-sm-6{padding-left:24px!important}.v-application--is-ltr .pe-sm-7{padding-right:28px!important}.v-application--is-rtl .pe-sm-7{padding-left:28px!important}.v-application--is-ltr .pe-sm-8{padding-right:32px!important}.v-application--is-rtl .pe-sm-8{padding-left:32px!important}.v-application--is-ltr .pe-sm-9{padding-right:36px!important}.v-application--is-rtl .pe-sm-9{padding-left:36px!important}.v-application--is-ltr .pe-sm-10{padding-right:40px!important}.v-application--is-rtl .pe-sm-10{padding-left:40px!important}.v-application--is-ltr .pe-sm-11{padding-right:44px!important}.v-application--is-rtl .pe-sm-11{padding-left:44px!important}.v-application--is-ltr .pe-sm-12{padding-right:48px!important}.v-application--is-rtl .pe-sm-12{padding-left:48px!important}.v-application--is-ltr .pe-sm-13{padding-right:52px!important}.v-application--is-rtl .pe-sm-13{padding-left:52px!important}.v-application--is-ltr .pe-sm-14{padding-right:56px!important}.v-application--is-rtl .pe-sm-14{padding-left:56px!important}.v-application--is-ltr .pe-sm-15{padding-right:60px!important}.v-application--is-rtl .pe-sm-15{padding-left:60px!important}.v-application--is-ltr .pe-sm-16{padding-right:64px!important}.v-application--is-rtl .pe-sm-16{padding-left:64px!important}.v-application .text-sm-left{text-align:left!important}.v-application .text-sm-right{text-align:right!important}.v-application .text-sm-center{text-align:center!important}.v-application .text-sm-justify{text-align:justify!important}.v-application .text-sm-start{text-align:start!important}.v-application .text-sm-end{text-align:end!important}.v-application .text-sm-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-sm-h1,.v-application .text-sm-h2{font-weight:300;font-family:Roboto,sans-serif!important}.v-application .text-sm-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-sm-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-sm-h3,.v-application .text-sm-h4{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .text-sm-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-sm-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-sm-h5,.v-application .text-sm-h6{line-height:2rem;font-family:Roboto,sans-serif!important}.v-application .text-sm-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-sm-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:Roboto,sans-serif!important}.v-application .text-sm-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:Roboto,sans-serif!important}.v-application .text-sm-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:Roboto,sans-serif!important}.v-application .text-sm-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-sm-body-2,.v-application .text-sm-button{font-size:.875rem!important;font-family:Roboto,sans-serif!important}.v-application .text-sm-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-sm-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-sm-caption,.v-application .text-sm-overline{font-size:.75rem!important;font-family:Roboto,sans-serif!important}.v-application .text-sm-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:960px){.v-application .d-md-none{display:none!important}.v-application .d-md-inline{display:inline!important}.v-application .d-md-inline-block{display:inline-block!important}.v-application .d-md-block{display:block!important}.v-application .d-md-table{display:table!important}.v-application .d-md-table-row{display:table-row!important}.v-application .d-md-table-cell{display:table-cell!important}.v-application .d-md-flex{display:flex!important}.v-application .d-md-inline-flex{display:inline-flex!important}.v-application .float-md-none{float:none!important}.v-application .float-md-left{float:left!important}.v-application .float-md-right{float:right!important}.v-application--is-rtl .float-md-end{float:left!important}.v-application--is-ltr .float-md-end,.v-application--is-rtl .float-md-start{float:right!important}.v-application--is-ltr .float-md-start{float:left!important}.v-application .flex-md-fill{flex:1 1 auto!important}.v-application .flex-md-row{flex-direction:row!important}.v-application .flex-md-column{flex-direction:column!important}.v-application .flex-md-row-reverse{flex-direction:row-reverse!important}.v-application .flex-md-column-reverse{flex-direction:column-reverse!important}.v-application .flex-md-grow-0{flex-grow:0!important}.v-application .flex-md-grow-1{flex-grow:1!important}.v-application .flex-md-shrink-0{flex-shrink:0!important}.v-application .flex-md-shrink-1{flex-shrink:1!important}.v-application .flex-md-wrap{flex-wrap:wrap!important}.v-application .flex-md-nowrap{flex-wrap:nowrap!important}.v-application .flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-md-start{justify-content:flex-start!important}.v-application .justify-md-end{justify-content:flex-end!important}.v-application .justify-md-center{justify-content:center!important}.v-application .justify-md-space-between{justify-content:space-between!important}.v-application .justify-md-space-around{justify-content:space-around!important}.v-application .align-md-start{align-items:flex-start!important}.v-application .align-md-end{align-items:flex-end!important}.v-application .align-md-center{align-items:center!important}.v-application .align-md-baseline{align-items:baseline!important}.v-application .align-md-stretch{align-items:stretch!important}.v-application .align-content-md-start{align-content:flex-start!important}.v-application .align-content-md-end{align-content:flex-end!important}.v-application .align-content-md-center{align-content:center!important}.v-application .align-content-md-space-between{align-content:space-between!important}.v-application .align-content-md-space-around{align-content:space-around!important}.v-application .align-content-md-stretch{align-content:stretch!important}.v-application .align-self-md-auto{align-self:auto!important}.v-application .align-self-md-start{align-self:flex-start!important}.v-application .align-self-md-end{align-self:flex-end!important}.v-application .align-self-md-center{align-self:center!important}.v-application .align-self-md-baseline{align-self:baseline!important}.v-application .align-self-md-stretch{align-self:stretch!important}.v-application .order-md-first{order:-1!important}.v-application .order-md-0{order:0!important}.v-application .order-md-1{order:1!important}.v-application .order-md-2{order:2!important}.v-application .order-md-3{order:3!important}.v-application .order-md-4{order:4!important}.v-application .order-md-5{order:5!important}.v-application .order-md-6{order:6!important}.v-application .order-md-7{order:7!important}.v-application .order-md-8{order:8!important}.v-application .order-md-9{order:9!important}.v-application .order-md-10{order:10!important}.v-application .order-md-11{order:11!important}.v-application .order-md-12{order:12!important}.v-application .order-md-last{order:13!important}.v-application .ma-md-0{margin:0!important}.v-application .ma-md-1{margin:4px!important}.v-application .ma-md-2{margin:8px!important}.v-application .ma-md-3{margin:12px!important}.v-application .ma-md-4{margin:16px!important}.v-application .ma-md-5{margin:20px!important}.v-application .ma-md-6{margin:24px!important}.v-application .ma-md-7{margin:28px!important}.v-application .ma-md-8{margin:32px!important}.v-application .ma-md-9{margin:36px!important}.v-application .ma-md-10{margin:40px!important}.v-application .ma-md-11{margin:44px!important}.v-application .ma-md-12{margin:48px!important}.v-application .ma-md-13{margin:52px!important}.v-application .ma-md-14{margin:56px!important}.v-application .ma-md-15{margin:60px!important}.v-application .ma-md-16{margin:64px!important}.v-application .ma-md-auto{margin:auto!important}.v-application .mx-md-0{margin-right:0!important;margin-left:0!important}.v-application .mx-md-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-md-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-md-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-md-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-md-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-md-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-md-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-md-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-md-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-md-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-md-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-md-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-md-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-md-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-md-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-md-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-md-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-md-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-md-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-md-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-md-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-md-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-md-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-md-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-md-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-md-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-md-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-md-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-md-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-md-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-md-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-md-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-md-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-md-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-md-0{margin-top:0!important}.v-application .mt-md-1{margin-top:4px!important}.v-application .mt-md-2{margin-top:8px!important}.v-application .mt-md-3{margin-top:12px!important}.v-application .mt-md-4{margin-top:16px!important}.v-application .mt-md-5{margin-top:20px!important}.v-application .mt-md-6{margin-top:24px!important}.v-application .mt-md-7{margin-top:28px!important}.v-application .mt-md-8{margin-top:32px!important}.v-application .mt-md-9{margin-top:36px!important}.v-application .mt-md-10{margin-top:40px!important}.v-application .mt-md-11{margin-top:44px!important}.v-application .mt-md-12{margin-top:48px!important}.v-application .mt-md-13{margin-top:52px!important}.v-application .mt-md-14{margin-top:56px!important}.v-application .mt-md-15{margin-top:60px!important}.v-application .mt-md-16{margin-top:64px!important}.v-application .mt-md-auto{margin-top:auto!important}.v-application .mr-md-0{margin-right:0!important}.v-application .mr-md-1{margin-right:4px!important}.v-application .mr-md-2{margin-right:8px!important}.v-application .mr-md-3{margin-right:12px!important}.v-application .mr-md-4{margin-right:16px!important}.v-application .mr-md-5{margin-right:20px!important}.v-application .mr-md-6{margin-right:24px!important}.v-application .mr-md-7{margin-right:28px!important}.v-application .mr-md-8{margin-right:32px!important}.v-application .mr-md-9{margin-right:36px!important}.v-application .mr-md-10{margin-right:40px!important}.v-application .mr-md-11{margin-right:44px!important}.v-application .mr-md-12{margin-right:48px!important}.v-application .mr-md-13{margin-right:52px!important}.v-application .mr-md-14{margin-right:56px!important}.v-application .mr-md-15{margin-right:60px!important}.v-application .mr-md-16{margin-right:64px!important}.v-application .mr-md-auto{margin-right:auto!important}.v-application .mb-md-0{margin-bottom:0!important}.v-application .mb-md-1{margin-bottom:4px!important}.v-application .mb-md-2{margin-bottom:8px!important}.v-application .mb-md-3{margin-bottom:12px!important}.v-application .mb-md-4{margin-bottom:16px!important}.v-application .mb-md-5{margin-bottom:20px!important}.v-application .mb-md-6{margin-bottom:24px!important}.v-application .mb-md-7{margin-bottom:28px!important}.v-application .mb-md-8{margin-bottom:32px!important}.v-application .mb-md-9{margin-bottom:36px!important}.v-application .mb-md-10{margin-bottom:40px!important}.v-application .mb-md-11{margin-bottom:44px!important}.v-application .mb-md-12{margin-bottom:48px!important}.v-application .mb-md-13{margin-bottom:52px!important}.v-application .mb-md-14{margin-bottom:56px!important}.v-application .mb-md-15{margin-bottom:60px!important}.v-application .mb-md-16{margin-bottom:64px!important}.v-application .mb-md-auto{margin-bottom:auto!important}.v-application .ml-md-0{margin-left:0!important}.v-application .ml-md-1{margin-left:4px!important}.v-application .ml-md-2{margin-left:8px!important}.v-application .ml-md-3{margin-left:12px!important}.v-application .ml-md-4{margin-left:16px!important}.v-application .ml-md-5{margin-left:20px!important}.v-application .ml-md-6{margin-left:24px!important}.v-application .ml-md-7{margin-left:28px!important}.v-application .ml-md-8{margin-left:32px!important}.v-application .ml-md-9{margin-left:36px!important}.v-application .ml-md-10{margin-left:40px!important}.v-application .ml-md-11{margin-left:44px!important}.v-application .ml-md-12{margin-left:48px!important}.v-application .ml-md-13{margin-left:52px!important}.v-application .ml-md-14{margin-left:56px!important}.v-application .ml-md-15{margin-left:60px!important}.v-application .ml-md-16{margin-left:64px!important}.v-application .ml-md-auto{margin-left:auto!important}.v-application--is-ltr .ms-md-0{margin-left:0!important}.v-application--is-rtl .ms-md-0{margin-right:0!important}.v-application--is-ltr .ms-md-1{margin-left:4px!important}.v-application--is-rtl .ms-md-1{margin-right:4px!important}.v-application--is-ltr .ms-md-2{margin-left:8px!important}.v-application--is-rtl .ms-md-2{margin-right:8px!important}.v-application--is-ltr .ms-md-3{margin-left:12px!important}.v-application--is-rtl .ms-md-3{margin-right:12px!important}.v-application--is-ltr .ms-md-4{margin-left:16px!important}.v-application--is-rtl .ms-md-4{margin-right:16px!important}.v-application--is-ltr .ms-md-5{margin-left:20px!important}.v-application--is-rtl .ms-md-5{margin-right:20px!important}.v-application--is-ltr .ms-md-6{margin-left:24px!important}.v-application--is-rtl .ms-md-6{margin-right:24px!important}.v-application--is-ltr .ms-md-7{margin-left:28px!important}.v-application--is-rtl .ms-md-7{margin-right:28px!important}.v-application--is-ltr .ms-md-8{margin-left:32px!important}.v-application--is-rtl .ms-md-8{margin-right:32px!important}.v-application--is-ltr .ms-md-9{margin-left:36px!important}.v-application--is-rtl .ms-md-9{margin-right:36px!important}.v-application--is-ltr .ms-md-10{margin-left:40px!important}.v-application--is-rtl .ms-md-10{margin-right:40px!important}.v-application--is-ltr .ms-md-11{margin-left:44px!important}.v-application--is-rtl .ms-md-11{margin-right:44px!important}.v-application--is-ltr .ms-md-12{margin-left:48px!important}.v-application--is-rtl .ms-md-12{margin-right:48px!important}.v-application--is-ltr .ms-md-13{margin-left:52px!important}.v-application--is-rtl .ms-md-13{margin-right:52px!important}.v-application--is-ltr .ms-md-14{margin-left:56px!important}.v-application--is-rtl .ms-md-14{margin-right:56px!important}.v-application--is-ltr .ms-md-15{margin-left:60px!important}.v-application--is-rtl .ms-md-15{margin-right:60px!important}.v-application--is-ltr .ms-md-16{margin-left:64px!important}.v-application--is-rtl .ms-md-16{margin-right:64px!important}.v-application--is-ltr .ms-md-auto{margin-left:auto!important}.v-application--is-rtl .ms-md-auto{margin-right:auto!important}.v-application--is-ltr .me-md-0{margin-right:0!important}.v-application--is-rtl .me-md-0{margin-left:0!important}.v-application--is-ltr .me-md-1{margin-right:4px!important}.v-application--is-rtl .me-md-1{margin-left:4px!important}.v-application--is-ltr .me-md-2{margin-right:8px!important}.v-application--is-rtl .me-md-2{margin-left:8px!important}.v-application--is-ltr .me-md-3{margin-right:12px!important}.v-application--is-rtl .me-md-3{margin-left:12px!important}.v-application--is-ltr .me-md-4{margin-right:16px!important}.v-application--is-rtl .me-md-4{margin-left:16px!important}.v-application--is-ltr .me-md-5{margin-right:20px!important}.v-application--is-rtl .me-md-5{margin-left:20px!important}.v-application--is-ltr .me-md-6{margin-right:24px!important}.v-application--is-rtl .me-md-6{margin-left:24px!important}.v-application--is-ltr .me-md-7{margin-right:28px!important}.v-application--is-rtl .me-md-7{margin-left:28px!important}.v-application--is-ltr .me-md-8{margin-right:32px!important}.v-application--is-rtl .me-md-8{margin-left:32px!important}.v-application--is-ltr .me-md-9{margin-right:36px!important}.v-application--is-rtl .me-md-9{margin-left:36px!important}.v-application--is-ltr .me-md-10{margin-right:40px!important}.v-application--is-rtl .me-md-10{margin-left:40px!important}.v-application--is-ltr .me-md-11{margin-right:44px!important}.v-application--is-rtl .me-md-11{margin-left:44px!important}.v-application--is-ltr .me-md-12{margin-right:48px!important}.v-application--is-rtl .me-md-12{margin-left:48px!important}.v-application--is-ltr .me-md-13{margin-right:52px!important}.v-application--is-rtl .me-md-13{margin-left:52px!important}.v-application--is-ltr .me-md-14{margin-right:56px!important}.v-application--is-rtl .me-md-14{margin-left:56px!important}.v-application--is-ltr .me-md-15{margin-right:60px!important}.v-application--is-rtl .me-md-15{margin-left:60px!important}.v-application--is-ltr .me-md-16{margin-right:64px!important}.v-application--is-rtl .me-md-16{margin-left:64px!important}.v-application--is-ltr .me-md-auto{margin-right:auto!important}.v-application--is-rtl .me-md-auto{margin-left:auto!important}.v-application .ma-md-n1{margin:-4px!important}.v-application .ma-md-n2{margin:-8px!important}.v-application .ma-md-n3{margin:-12px!important}.v-application .ma-md-n4{margin:-16px!important}.v-application .ma-md-n5{margin:-20px!important}.v-application .ma-md-n6{margin:-24px!important}.v-application .ma-md-n7{margin:-28px!important}.v-application .ma-md-n8{margin:-32px!important}.v-application .ma-md-n9{margin:-36px!important}.v-application .ma-md-n10{margin:-40px!important}.v-application .ma-md-n11{margin:-44px!important}.v-application .ma-md-n12{margin:-48px!important}.v-application .ma-md-n13{margin:-52px!important}.v-application .ma-md-n14{margin:-56px!important}.v-application .ma-md-n15{margin:-60px!important}.v-application .ma-md-n16{margin:-64px!important}.v-application .mx-md-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-md-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-md-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-md-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-md-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-md-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-md-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-md-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-md-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-md-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-md-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-md-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-md-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-md-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-md-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-md-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-md-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-md-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-md-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-md-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-md-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-md-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-md-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-md-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-md-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-md-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-md-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-md-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-md-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-md-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-md-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-md-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-md-n1{margin-top:-4px!important}.v-application .mt-md-n2{margin-top:-8px!important}.v-application .mt-md-n3{margin-top:-12px!important}.v-application .mt-md-n4{margin-top:-16px!important}.v-application .mt-md-n5{margin-top:-20px!important}.v-application .mt-md-n6{margin-top:-24px!important}.v-application .mt-md-n7{margin-top:-28px!important}.v-application .mt-md-n8{margin-top:-32px!important}.v-application .mt-md-n9{margin-top:-36px!important}.v-application .mt-md-n10{margin-top:-40px!important}.v-application .mt-md-n11{margin-top:-44px!important}.v-application .mt-md-n12{margin-top:-48px!important}.v-application .mt-md-n13{margin-top:-52px!important}.v-application .mt-md-n14{margin-top:-56px!important}.v-application .mt-md-n15{margin-top:-60px!important}.v-application .mt-md-n16{margin-top:-64px!important}.v-application .mr-md-n1{margin-right:-4px!important}.v-application .mr-md-n2{margin-right:-8px!important}.v-application .mr-md-n3{margin-right:-12px!important}.v-application .mr-md-n4{margin-right:-16px!important}.v-application .mr-md-n5{margin-right:-20px!important}.v-application .mr-md-n6{margin-right:-24px!important}.v-application .mr-md-n7{margin-right:-28px!important}.v-application .mr-md-n8{margin-right:-32px!important}.v-application .mr-md-n9{margin-right:-36px!important}.v-application .mr-md-n10{margin-right:-40px!important}.v-application .mr-md-n11{margin-right:-44px!important}.v-application .mr-md-n12{margin-right:-48px!important}.v-application .mr-md-n13{margin-right:-52px!important}.v-application .mr-md-n14{margin-right:-56px!important}.v-application .mr-md-n15{margin-right:-60px!important}.v-application .mr-md-n16{margin-right:-64px!important}.v-application .mb-md-n1{margin-bottom:-4px!important}.v-application .mb-md-n2{margin-bottom:-8px!important}.v-application .mb-md-n3{margin-bottom:-12px!important}.v-application .mb-md-n4{margin-bottom:-16px!important}.v-application .mb-md-n5{margin-bottom:-20px!important}.v-application .mb-md-n6{margin-bottom:-24px!important}.v-application .mb-md-n7{margin-bottom:-28px!important}.v-application .mb-md-n8{margin-bottom:-32px!important}.v-application .mb-md-n9{margin-bottom:-36px!important}.v-application .mb-md-n10{margin-bottom:-40px!important}.v-application .mb-md-n11{margin-bottom:-44px!important}.v-application .mb-md-n12{margin-bottom:-48px!important}.v-application .mb-md-n13{margin-bottom:-52px!important}.v-application .mb-md-n14{margin-bottom:-56px!important}.v-application .mb-md-n15{margin-bottom:-60px!important}.v-application .mb-md-n16{margin-bottom:-64px!important}.v-application .ml-md-n1{margin-left:-4px!important}.v-application .ml-md-n2{margin-left:-8px!important}.v-application .ml-md-n3{margin-left:-12px!important}.v-application .ml-md-n4{margin-left:-16px!important}.v-application .ml-md-n5{margin-left:-20px!important}.v-application .ml-md-n6{margin-left:-24px!important}.v-application .ml-md-n7{margin-left:-28px!important}.v-application .ml-md-n8{margin-left:-32px!important}.v-application .ml-md-n9{margin-left:-36px!important}.v-application .ml-md-n10{margin-left:-40px!important}.v-application .ml-md-n11{margin-left:-44px!important}.v-application .ml-md-n12{margin-left:-48px!important}.v-application .ml-md-n13{margin-left:-52px!important}.v-application .ml-md-n14{margin-left:-56px!important}.v-application .ml-md-n15{margin-left:-60px!important}.v-application .ml-md-n16{margin-left:-64px!important}.v-application--is-ltr .ms-md-n1{margin-left:-4px!important}.v-application--is-rtl .ms-md-n1{margin-right:-4px!important}.v-application--is-ltr .ms-md-n2{margin-left:-8px!important}.v-application--is-rtl .ms-md-n2{margin-right:-8px!important}.v-application--is-ltr .ms-md-n3{margin-left:-12px!important}.v-application--is-rtl .ms-md-n3{margin-right:-12px!important}.v-application--is-ltr .ms-md-n4{margin-left:-16px!important}.v-application--is-rtl .ms-md-n4{margin-right:-16px!important}.v-application--is-ltr .ms-md-n5{margin-left:-20px!important}.v-application--is-rtl .ms-md-n5{margin-right:-20px!important}.v-application--is-ltr .ms-md-n6{margin-left:-24px!important}.v-application--is-rtl .ms-md-n6{margin-right:-24px!important}.v-application--is-ltr .ms-md-n7{margin-left:-28px!important}.v-application--is-rtl .ms-md-n7{margin-right:-28px!important}.v-application--is-ltr .ms-md-n8{margin-left:-32px!important}.v-application--is-rtl .ms-md-n8{margin-right:-32px!important}.v-application--is-ltr .ms-md-n9{margin-left:-36px!important}.v-application--is-rtl .ms-md-n9{margin-right:-36px!important}.v-application--is-ltr .ms-md-n10{margin-left:-40px!important}.v-application--is-rtl .ms-md-n10{margin-right:-40px!important}.v-application--is-ltr .ms-md-n11{margin-left:-44px!important}.v-application--is-rtl .ms-md-n11{margin-right:-44px!important}.v-application--is-ltr .ms-md-n12{margin-left:-48px!important}.v-application--is-rtl .ms-md-n12{margin-right:-48px!important}.v-application--is-ltr .ms-md-n13{margin-left:-52px!important}.v-application--is-rtl .ms-md-n13{margin-right:-52px!important}.v-application--is-ltr .ms-md-n14{margin-left:-56px!important}.v-application--is-rtl .ms-md-n14{margin-right:-56px!important}.v-application--is-ltr .ms-md-n15{margin-left:-60px!important}.v-application--is-rtl .ms-md-n15{margin-right:-60px!important}.v-application--is-ltr .ms-md-n16{margin-left:-64px!important}.v-application--is-rtl .ms-md-n16{margin-right:-64px!important}.v-application--is-ltr .me-md-n1{margin-right:-4px!important}.v-application--is-rtl .me-md-n1{margin-left:-4px!important}.v-application--is-ltr .me-md-n2{margin-right:-8px!important}.v-application--is-rtl .me-md-n2{margin-left:-8px!important}.v-application--is-ltr .me-md-n3{margin-right:-12px!important}.v-application--is-rtl .me-md-n3{margin-left:-12px!important}.v-application--is-ltr .me-md-n4{margin-right:-16px!important}.v-application--is-rtl .me-md-n4{margin-left:-16px!important}.v-application--is-ltr .me-md-n5{margin-right:-20px!important}.v-application--is-rtl .me-md-n5{margin-left:-20px!important}.v-application--is-ltr .me-md-n6{margin-right:-24px!important}.v-application--is-rtl .me-md-n6{margin-left:-24px!important}.v-application--is-ltr .me-md-n7{margin-right:-28px!important}.v-application--is-rtl .me-md-n7{margin-left:-28px!important}.v-application--is-ltr .me-md-n8{margin-right:-32px!important}.v-application--is-rtl .me-md-n8{margin-left:-32px!important}.v-application--is-ltr .me-md-n9{margin-right:-36px!important}.v-application--is-rtl .me-md-n9{margin-left:-36px!important}.v-application--is-ltr .me-md-n10{margin-right:-40px!important}.v-application--is-rtl .me-md-n10{margin-left:-40px!important}.v-application--is-ltr .me-md-n11{margin-right:-44px!important}.v-application--is-rtl .me-md-n11{margin-left:-44px!important}.v-application--is-ltr .me-md-n12{margin-right:-48px!important}.v-application--is-rtl .me-md-n12{margin-left:-48px!important}.v-application--is-ltr .me-md-n13{margin-right:-52px!important}.v-application--is-rtl .me-md-n13{margin-left:-52px!important}.v-application--is-ltr .me-md-n14{margin-right:-56px!important}.v-application--is-rtl .me-md-n14{margin-left:-56px!important}.v-application--is-ltr .me-md-n15{margin-right:-60px!important}.v-application--is-rtl .me-md-n15{margin-left:-60px!important}.v-application--is-ltr .me-md-n16{margin-right:-64px!important}.v-application--is-rtl .me-md-n16{margin-left:-64px!important}.v-application .pa-md-0{padding:0!important}.v-application .pa-md-1{padding:4px!important}.v-application .pa-md-2{padding:8px!important}.v-application .pa-md-3{padding:12px!important}.v-application .pa-md-4{padding:16px!important}.v-application .pa-md-5{padding:20px!important}.v-application .pa-md-6{padding:24px!important}.v-application .pa-md-7{padding:28px!important}.v-application .pa-md-8{padding:32px!important}.v-application .pa-md-9{padding:36px!important}.v-application .pa-md-10{padding:40px!important}.v-application .pa-md-11{padding:44px!important}.v-application .pa-md-12{padding:48px!important}.v-application .pa-md-13{padding:52px!important}.v-application .pa-md-14{padding:56px!important}.v-application .pa-md-15{padding:60px!important}.v-application .pa-md-16{padding:64px!important}.v-application .px-md-0{padding-right:0!important;padding-left:0!important}.v-application .px-md-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-md-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-md-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-md-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-md-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-md-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-md-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-md-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-md-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-md-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-md-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-md-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-md-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-md-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-md-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-md-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-md-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-md-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-md-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-md-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-md-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-md-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-md-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-md-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-md-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-md-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-md-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-md-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-md-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-md-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-md-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-md-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-md-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-md-0{padding-top:0!important}.v-application .pt-md-1{padding-top:4px!important}.v-application .pt-md-2{padding-top:8px!important}.v-application .pt-md-3{padding-top:12px!important}.v-application .pt-md-4{padding-top:16px!important}.v-application .pt-md-5{padding-top:20px!important}.v-application .pt-md-6{padding-top:24px!important}.v-application .pt-md-7{padding-top:28px!important}.v-application .pt-md-8{padding-top:32px!important}.v-application .pt-md-9{padding-top:36px!important}.v-application .pt-md-10{padding-top:40px!important}.v-application .pt-md-11{padding-top:44px!important}.v-application .pt-md-12{padding-top:48px!important}.v-application .pt-md-13{padding-top:52px!important}.v-application .pt-md-14{padding-top:56px!important}.v-application .pt-md-15{padding-top:60px!important}.v-application .pt-md-16{padding-top:64px!important}.v-application .pr-md-0{padding-right:0!important}.v-application .pr-md-1{padding-right:4px!important}.v-application .pr-md-2{padding-right:8px!important}.v-application .pr-md-3{padding-right:12px!important}.v-application .pr-md-4{padding-right:16px!important}.v-application .pr-md-5{padding-right:20px!important}.v-application .pr-md-6{padding-right:24px!important}.v-application .pr-md-7{padding-right:28px!important}.v-application .pr-md-8{padding-right:32px!important}.v-application .pr-md-9{padding-right:36px!important}.v-application .pr-md-10{padding-right:40px!important}.v-application .pr-md-11{padding-right:44px!important}.v-application .pr-md-12{padding-right:48px!important}.v-application .pr-md-13{padding-right:52px!important}.v-application .pr-md-14{padding-right:56px!important}.v-application .pr-md-15{padding-right:60px!important}.v-application .pr-md-16{padding-right:64px!important}.v-application .pb-md-0{padding-bottom:0!important}.v-application .pb-md-1{padding-bottom:4px!important}.v-application .pb-md-2{padding-bottom:8px!important}.v-application .pb-md-3{padding-bottom:12px!important}.v-application .pb-md-4{padding-bottom:16px!important}.v-application .pb-md-5{padding-bottom:20px!important}.v-application .pb-md-6{padding-bottom:24px!important}.v-application .pb-md-7{padding-bottom:28px!important}.v-application .pb-md-8{padding-bottom:32px!important}.v-application .pb-md-9{padding-bottom:36px!important}.v-application .pb-md-10{padding-bottom:40px!important}.v-application .pb-md-11{padding-bottom:44px!important}.v-application .pb-md-12{padding-bottom:48px!important}.v-application .pb-md-13{padding-bottom:52px!important}.v-application .pb-md-14{padding-bottom:56px!important}.v-application .pb-md-15{padding-bottom:60px!important}.v-application .pb-md-16{padding-bottom:64px!important}.v-application .pl-md-0{padding-left:0!important}.v-application .pl-md-1{padding-left:4px!important}.v-application .pl-md-2{padding-left:8px!important}.v-application .pl-md-3{padding-left:12px!important}.v-application .pl-md-4{padding-left:16px!important}.v-application .pl-md-5{padding-left:20px!important}.v-application .pl-md-6{padding-left:24px!important}.v-application .pl-md-7{padding-left:28px!important}.v-application .pl-md-8{padding-left:32px!important}.v-application .pl-md-9{padding-left:36px!important}.v-application .pl-md-10{padding-left:40px!important}.v-application .pl-md-11{padding-left:44px!important}.v-application .pl-md-12{padding-left:48px!important}.v-application .pl-md-13{padding-left:52px!important}.v-application .pl-md-14{padding-left:56px!important}.v-application .pl-md-15{padding-left:60px!important}.v-application .pl-md-16{padding-left:64px!important}.v-application--is-ltr .ps-md-0{padding-left:0!important}.v-application--is-rtl .ps-md-0{padding-right:0!important}.v-application--is-ltr .ps-md-1{padding-left:4px!important}.v-application--is-rtl .ps-md-1{padding-right:4px!important}.v-application--is-ltr .ps-md-2{padding-left:8px!important}.v-application--is-rtl .ps-md-2{padding-right:8px!important}.v-application--is-ltr .ps-md-3{padding-left:12px!important}.v-application--is-rtl .ps-md-3{padding-right:12px!important}.v-application--is-ltr .ps-md-4{padding-left:16px!important}.v-application--is-rtl .ps-md-4{padding-right:16px!important}.v-application--is-ltr .ps-md-5{padding-left:20px!important}.v-application--is-rtl .ps-md-5{padding-right:20px!important}.v-application--is-ltr .ps-md-6{padding-left:24px!important}.v-application--is-rtl .ps-md-6{padding-right:24px!important}.v-application--is-ltr .ps-md-7{padding-left:28px!important}.v-application--is-rtl .ps-md-7{padding-right:28px!important}.v-application--is-ltr .ps-md-8{padding-left:32px!important}.v-application--is-rtl .ps-md-8{padding-right:32px!important}.v-application--is-ltr .ps-md-9{padding-left:36px!important}.v-application--is-rtl .ps-md-9{padding-right:36px!important}.v-application--is-ltr .ps-md-10{padding-left:40px!important}.v-application--is-rtl .ps-md-10{padding-right:40px!important}.v-application--is-ltr .ps-md-11{padding-left:44px!important}.v-application--is-rtl .ps-md-11{padding-right:44px!important}.v-application--is-ltr .ps-md-12{padding-left:48px!important}.v-application--is-rtl .ps-md-12{padding-right:48px!important}.v-application--is-ltr .ps-md-13{padding-left:52px!important}.v-application--is-rtl .ps-md-13{padding-right:52px!important}.v-application--is-ltr .ps-md-14{padding-left:56px!important}.v-application--is-rtl .ps-md-14{padding-right:56px!important}.v-application--is-ltr .ps-md-15{padding-left:60px!important}.v-application--is-rtl .ps-md-15{padding-right:60px!important}.v-application--is-ltr .ps-md-16{padding-left:64px!important}.v-application--is-rtl .ps-md-16{padding-right:64px!important}.v-application--is-ltr .pe-md-0{padding-right:0!important}.v-application--is-rtl .pe-md-0{padding-left:0!important}.v-application--is-ltr .pe-md-1{padding-right:4px!important}.v-application--is-rtl .pe-md-1{padding-left:4px!important}.v-application--is-ltr .pe-md-2{padding-right:8px!important}.v-application--is-rtl .pe-md-2{padding-left:8px!important}.v-application--is-ltr .pe-md-3{padding-right:12px!important}.v-application--is-rtl .pe-md-3{padding-left:12px!important}.v-application--is-ltr .pe-md-4{padding-right:16px!important}.v-application--is-rtl .pe-md-4{padding-left:16px!important}.v-application--is-ltr .pe-md-5{padding-right:20px!important}.v-application--is-rtl .pe-md-5{padding-left:20px!important}.v-application--is-ltr .pe-md-6{padding-right:24px!important}.v-application--is-rtl .pe-md-6{padding-left:24px!important}.v-application--is-ltr .pe-md-7{padding-right:28px!important}.v-application--is-rtl .pe-md-7{padding-left:28px!important}.v-application--is-ltr .pe-md-8{padding-right:32px!important}.v-application--is-rtl .pe-md-8{padding-left:32px!important}.v-application--is-ltr .pe-md-9{padding-right:36px!important}.v-application--is-rtl .pe-md-9{padding-left:36px!important}.v-application--is-ltr .pe-md-10{padding-right:40px!important}.v-application--is-rtl .pe-md-10{padding-left:40px!important}.v-application--is-ltr .pe-md-11{padding-right:44px!important}.v-application--is-rtl .pe-md-11{padding-left:44px!important}.v-application--is-ltr .pe-md-12{padding-right:48px!important}.v-application--is-rtl .pe-md-12{padding-left:48px!important}.v-application--is-ltr .pe-md-13{padding-right:52px!important}.v-application--is-rtl .pe-md-13{padding-left:52px!important}.v-application--is-ltr .pe-md-14{padding-right:56px!important}.v-application--is-rtl .pe-md-14{padding-left:56px!important}.v-application--is-ltr .pe-md-15{padding-right:60px!important}.v-application--is-rtl .pe-md-15{padding-left:60px!important}.v-application--is-ltr .pe-md-16{padding-right:64px!important}.v-application--is-rtl .pe-md-16{padding-left:64px!important}.v-application .text-md-left{text-align:left!important}.v-application .text-md-right{text-align:right!important}.v-application .text-md-center{text-align:center!important}.v-application .text-md-justify{text-align:justify!important}.v-application .text-md-start{text-align:start!important}.v-application .text-md-end{text-align:end!important}.v-application .text-md-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-md-h1,.v-application .text-md-h2{font-weight:300;font-family:Roboto,sans-serif!important}.v-application .text-md-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-md-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-md-h3,.v-application .text-md-h4{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .text-md-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-md-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-md-h5,.v-application .text-md-h6{line-height:2rem;font-family:Roboto,sans-serif!important}.v-application .text-md-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-md-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:Roboto,sans-serif!important}.v-application .text-md-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:Roboto,sans-serif!important}.v-application .text-md-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:Roboto,sans-serif!important}.v-application .text-md-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-md-body-2,.v-application .text-md-button{font-size:.875rem!important;font-family:Roboto,sans-serif!important}.v-application .text-md-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-md-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-md-caption,.v-application .text-md-overline{font-size:.75rem!important;font-family:Roboto,sans-serif!important}.v-application .text-md-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:1264px){.v-application .d-lg-none{display:none!important}.v-application .d-lg-inline{display:inline!important}.v-application .d-lg-inline-block{display:inline-block!important}.v-application .d-lg-block{display:block!important}.v-application .d-lg-table{display:table!important}.v-application .d-lg-table-row{display:table-row!important}.v-application .d-lg-table-cell{display:table-cell!important}.v-application .d-lg-flex{display:flex!important}.v-application .d-lg-inline-flex{display:inline-flex!important}.v-application .float-lg-none{float:none!important}.v-application .float-lg-left{float:left!important}.v-application .float-lg-right{float:right!important}.v-application--is-rtl .float-lg-end{float:left!important}.v-application--is-ltr .float-lg-end,.v-application--is-rtl .float-lg-start{float:right!important}.v-application--is-ltr .float-lg-start{float:left!important}.v-application .flex-lg-fill{flex:1 1 auto!important}.v-application .flex-lg-row{flex-direction:row!important}.v-application .flex-lg-column{flex-direction:column!important}.v-application .flex-lg-row-reverse{flex-direction:row-reverse!important}.v-application .flex-lg-column-reverse{flex-direction:column-reverse!important}.v-application .flex-lg-grow-0{flex-grow:0!important}.v-application .flex-lg-grow-1{flex-grow:1!important}.v-application .flex-lg-shrink-0{flex-shrink:0!important}.v-application .flex-lg-shrink-1{flex-shrink:1!important}.v-application .flex-lg-wrap{flex-wrap:wrap!important}.v-application .flex-lg-nowrap{flex-wrap:nowrap!important}.v-application .flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-lg-start{justify-content:flex-start!important}.v-application .justify-lg-end{justify-content:flex-end!important}.v-application .justify-lg-center{justify-content:center!important}.v-application .justify-lg-space-between{justify-content:space-between!important}.v-application .justify-lg-space-around{justify-content:space-around!important}.v-application .align-lg-start{align-items:flex-start!important}.v-application .align-lg-end{align-items:flex-end!important}.v-application .align-lg-center{align-items:center!important}.v-application .align-lg-baseline{align-items:baseline!important}.v-application .align-lg-stretch{align-items:stretch!important}.v-application .align-content-lg-start{align-content:flex-start!important}.v-application .align-content-lg-end{align-content:flex-end!important}.v-application .align-content-lg-center{align-content:center!important}.v-application .align-content-lg-space-between{align-content:space-between!important}.v-application .align-content-lg-space-around{align-content:space-around!important}.v-application .align-content-lg-stretch{align-content:stretch!important}.v-application .align-self-lg-auto{align-self:auto!important}.v-application .align-self-lg-start{align-self:flex-start!important}.v-application .align-self-lg-end{align-self:flex-end!important}.v-application .align-self-lg-center{align-self:center!important}.v-application .align-self-lg-baseline{align-self:baseline!important}.v-application .align-self-lg-stretch{align-self:stretch!important}.v-application .order-lg-first{order:-1!important}.v-application .order-lg-0{order:0!important}.v-application .order-lg-1{order:1!important}.v-application .order-lg-2{order:2!important}.v-application .order-lg-3{order:3!important}.v-application .order-lg-4{order:4!important}.v-application .order-lg-5{order:5!important}.v-application .order-lg-6{order:6!important}.v-application .order-lg-7{order:7!important}.v-application .order-lg-8{order:8!important}.v-application .order-lg-9{order:9!important}.v-application .order-lg-10{order:10!important}.v-application .order-lg-11{order:11!important}.v-application .order-lg-12{order:12!important}.v-application .order-lg-last{order:13!important}.v-application .ma-lg-0{margin:0!important}.v-application .ma-lg-1{margin:4px!important}.v-application .ma-lg-2{margin:8px!important}.v-application .ma-lg-3{margin:12px!important}.v-application .ma-lg-4{margin:16px!important}.v-application .ma-lg-5{margin:20px!important}.v-application .ma-lg-6{margin:24px!important}.v-application .ma-lg-7{margin:28px!important}.v-application .ma-lg-8{margin:32px!important}.v-application .ma-lg-9{margin:36px!important}.v-application .ma-lg-10{margin:40px!important}.v-application .ma-lg-11{margin:44px!important}.v-application .ma-lg-12{margin:48px!important}.v-application .ma-lg-13{margin:52px!important}.v-application .ma-lg-14{margin:56px!important}.v-application .ma-lg-15{margin:60px!important}.v-application .ma-lg-16{margin:64px!important}.v-application .ma-lg-auto{margin:auto!important}.v-application .mx-lg-0{margin-right:0!important;margin-left:0!important}.v-application .mx-lg-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-lg-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-lg-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-lg-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-lg-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-lg-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-lg-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-lg-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-lg-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-lg-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-lg-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-lg-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-lg-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-lg-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-lg-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-lg-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-lg-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-lg-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-lg-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-lg-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-lg-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-lg-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-lg-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-lg-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-lg-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-lg-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-lg-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-lg-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-lg-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-lg-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-lg-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-lg-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-lg-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-lg-0{margin-top:0!important}.v-application .mt-lg-1{margin-top:4px!important}.v-application .mt-lg-2{margin-top:8px!important}.v-application .mt-lg-3{margin-top:12px!important}.v-application .mt-lg-4{margin-top:16px!important}.v-application .mt-lg-5{margin-top:20px!important}.v-application .mt-lg-6{margin-top:24px!important}.v-application .mt-lg-7{margin-top:28px!important}.v-application .mt-lg-8{margin-top:32px!important}.v-application .mt-lg-9{margin-top:36px!important}.v-application .mt-lg-10{margin-top:40px!important}.v-application .mt-lg-11{margin-top:44px!important}.v-application .mt-lg-12{margin-top:48px!important}.v-application .mt-lg-13{margin-top:52px!important}.v-application .mt-lg-14{margin-top:56px!important}.v-application .mt-lg-15{margin-top:60px!important}.v-application .mt-lg-16{margin-top:64px!important}.v-application .mt-lg-auto{margin-top:auto!important}.v-application .mr-lg-0{margin-right:0!important}.v-application .mr-lg-1{margin-right:4px!important}.v-application .mr-lg-2{margin-right:8px!important}.v-application .mr-lg-3{margin-right:12px!important}.v-application .mr-lg-4{margin-right:16px!important}.v-application .mr-lg-5{margin-right:20px!important}.v-application .mr-lg-6{margin-right:24px!important}.v-application .mr-lg-7{margin-right:28px!important}.v-application .mr-lg-8{margin-right:32px!important}.v-application .mr-lg-9{margin-right:36px!important}.v-application .mr-lg-10{margin-right:40px!important}.v-application .mr-lg-11{margin-right:44px!important}.v-application .mr-lg-12{margin-right:48px!important}.v-application .mr-lg-13{margin-right:52px!important}.v-application .mr-lg-14{margin-right:56px!important}.v-application .mr-lg-15{margin-right:60px!important}.v-application .mr-lg-16{margin-right:64px!important}.v-application .mr-lg-auto{margin-right:auto!important}.v-application .mb-lg-0{margin-bottom:0!important}.v-application .mb-lg-1{margin-bottom:4px!important}.v-application .mb-lg-2{margin-bottom:8px!important}.v-application .mb-lg-3{margin-bottom:12px!important}.v-application .mb-lg-4{margin-bottom:16px!important}.v-application .mb-lg-5{margin-bottom:20px!important}.v-application .mb-lg-6{margin-bottom:24px!important}.v-application .mb-lg-7{margin-bottom:28px!important}.v-application .mb-lg-8{margin-bottom:32px!important}.v-application .mb-lg-9{margin-bottom:36px!important}.v-application .mb-lg-10{margin-bottom:40px!important}.v-application .mb-lg-11{margin-bottom:44px!important}.v-application .mb-lg-12{margin-bottom:48px!important}.v-application .mb-lg-13{margin-bottom:52px!important}.v-application .mb-lg-14{margin-bottom:56px!important}.v-application .mb-lg-15{margin-bottom:60px!important}.v-application .mb-lg-16{margin-bottom:64px!important}.v-application .mb-lg-auto{margin-bottom:auto!important}.v-application .ml-lg-0{margin-left:0!important}.v-application .ml-lg-1{margin-left:4px!important}.v-application .ml-lg-2{margin-left:8px!important}.v-application .ml-lg-3{margin-left:12px!important}.v-application .ml-lg-4{margin-left:16px!important}.v-application .ml-lg-5{margin-left:20px!important}.v-application .ml-lg-6{margin-left:24px!important}.v-application .ml-lg-7{margin-left:28px!important}.v-application .ml-lg-8{margin-left:32px!important}.v-application .ml-lg-9{margin-left:36px!important}.v-application .ml-lg-10{margin-left:40px!important}.v-application .ml-lg-11{margin-left:44px!important}.v-application .ml-lg-12{margin-left:48px!important}.v-application .ml-lg-13{margin-left:52px!important}.v-application .ml-lg-14{margin-left:56px!important}.v-application .ml-lg-15{margin-left:60px!important}.v-application .ml-lg-16{margin-left:64px!important}.v-application .ml-lg-auto{margin-left:auto!important}.v-application--is-ltr .ms-lg-0{margin-left:0!important}.v-application--is-rtl .ms-lg-0{margin-right:0!important}.v-application--is-ltr .ms-lg-1{margin-left:4px!important}.v-application--is-rtl .ms-lg-1{margin-right:4px!important}.v-application--is-ltr .ms-lg-2{margin-left:8px!important}.v-application--is-rtl .ms-lg-2{margin-right:8px!important}.v-application--is-ltr .ms-lg-3{margin-left:12px!important}.v-application--is-rtl .ms-lg-3{margin-right:12px!important}.v-application--is-ltr .ms-lg-4{margin-left:16px!important}.v-application--is-rtl .ms-lg-4{margin-right:16px!important}.v-application--is-ltr .ms-lg-5{margin-left:20px!important}.v-application--is-rtl .ms-lg-5{margin-right:20px!important}.v-application--is-ltr .ms-lg-6{margin-left:24px!important}.v-application--is-rtl .ms-lg-6{margin-right:24px!important}.v-application--is-ltr .ms-lg-7{margin-left:28px!important}.v-application--is-rtl .ms-lg-7{margin-right:28px!important}.v-application--is-ltr .ms-lg-8{margin-left:32px!important}.v-application--is-rtl .ms-lg-8{margin-right:32px!important}.v-application--is-ltr .ms-lg-9{margin-left:36px!important}.v-application--is-rtl .ms-lg-9{margin-right:36px!important}.v-application--is-ltr .ms-lg-10{margin-left:40px!important}.v-application--is-rtl .ms-lg-10{margin-right:40px!important}.v-application--is-ltr .ms-lg-11{margin-left:44px!important}.v-application--is-rtl .ms-lg-11{margin-right:44px!important}.v-application--is-ltr .ms-lg-12{margin-left:48px!important}.v-application--is-rtl .ms-lg-12{margin-right:48px!important}.v-application--is-ltr .ms-lg-13{margin-left:52px!important}.v-application--is-rtl .ms-lg-13{margin-right:52px!important}.v-application--is-ltr .ms-lg-14{margin-left:56px!important}.v-application--is-rtl .ms-lg-14{margin-right:56px!important}.v-application--is-ltr .ms-lg-15{margin-left:60px!important}.v-application--is-rtl .ms-lg-15{margin-right:60px!important}.v-application--is-ltr .ms-lg-16{margin-left:64px!important}.v-application--is-rtl .ms-lg-16{margin-right:64px!important}.v-application--is-ltr .ms-lg-auto{margin-left:auto!important}.v-application--is-rtl .ms-lg-auto{margin-right:auto!important}.v-application--is-ltr .me-lg-0{margin-right:0!important}.v-application--is-rtl .me-lg-0{margin-left:0!important}.v-application--is-ltr .me-lg-1{margin-right:4px!important}.v-application--is-rtl .me-lg-1{margin-left:4px!important}.v-application--is-ltr .me-lg-2{margin-right:8px!important}.v-application--is-rtl .me-lg-2{margin-left:8px!important}.v-application--is-ltr .me-lg-3{margin-right:12px!important}.v-application--is-rtl .me-lg-3{margin-left:12px!important}.v-application--is-ltr .me-lg-4{margin-right:16px!important}.v-application--is-rtl .me-lg-4{margin-left:16px!important}.v-application--is-ltr .me-lg-5{margin-right:20px!important}.v-application--is-rtl .me-lg-5{margin-left:20px!important}.v-application--is-ltr .me-lg-6{margin-right:24px!important}.v-application--is-rtl .me-lg-6{margin-left:24px!important}.v-application--is-ltr .me-lg-7{margin-right:28px!important}.v-application--is-rtl .me-lg-7{margin-left:28px!important}.v-application--is-ltr .me-lg-8{margin-right:32px!important}.v-application--is-rtl .me-lg-8{margin-left:32px!important}.v-application--is-ltr .me-lg-9{margin-right:36px!important}.v-application--is-rtl .me-lg-9{margin-left:36px!important}.v-application--is-ltr .me-lg-10{margin-right:40px!important}.v-application--is-rtl .me-lg-10{margin-left:40px!important}.v-application--is-ltr .me-lg-11{margin-right:44px!important}.v-application--is-rtl .me-lg-11{margin-left:44px!important}.v-application--is-ltr .me-lg-12{margin-right:48px!important}.v-application--is-rtl .me-lg-12{margin-left:48px!important}.v-application--is-ltr .me-lg-13{margin-right:52px!important}.v-application--is-rtl .me-lg-13{margin-left:52px!important}.v-application--is-ltr .me-lg-14{margin-right:56px!important}.v-application--is-rtl .me-lg-14{margin-left:56px!important}.v-application--is-ltr .me-lg-15{margin-right:60px!important}.v-application--is-rtl .me-lg-15{margin-left:60px!important}.v-application--is-ltr .me-lg-16{margin-right:64px!important}.v-application--is-rtl .me-lg-16{margin-left:64px!important}.v-application--is-ltr .me-lg-auto{margin-right:auto!important}.v-application--is-rtl .me-lg-auto{margin-left:auto!important}.v-application .ma-lg-n1{margin:-4px!important}.v-application .ma-lg-n2{margin:-8px!important}.v-application .ma-lg-n3{margin:-12px!important}.v-application .ma-lg-n4{margin:-16px!important}.v-application .ma-lg-n5{margin:-20px!important}.v-application .ma-lg-n6{margin:-24px!important}.v-application .ma-lg-n7{margin:-28px!important}.v-application .ma-lg-n8{margin:-32px!important}.v-application .ma-lg-n9{margin:-36px!important}.v-application .ma-lg-n10{margin:-40px!important}.v-application .ma-lg-n11{margin:-44px!important}.v-application .ma-lg-n12{margin:-48px!important}.v-application .ma-lg-n13{margin:-52px!important}.v-application .ma-lg-n14{margin:-56px!important}.v-application .ma-lg-n15{margin:-60px!important}.v-application .ma-lg-n16{margin:-64px!important}.v-application .mx-lg-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-lg-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-lg-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-lg-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-lg-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-lg-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-lg-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-lg-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-lg-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-lg-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-lg-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-lg-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-lg-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-lg-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-lg-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-lg-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-lg-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-lg-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-lg-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-lg-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-lg-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-lg-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-lg-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-lg-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-lg-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-lg-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-lg-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-lg-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-lg-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-lg-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-lg-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-lg-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-lg-n1{margin-top:-4px!important}.v-application .mt-lg-n2{margin-top:-8px!important}.v-application .mt-lg-n3{margin-top:-12px!important}.v-application .mt-lg-n4{margin-top:-16px!important}.v-application .mt-lg-n5{margin-top:-20px!important}.v-application .mt-lg-n6{margin-top:-24px!important}.v-application .mt-lg-n7{margin-top:-28px!important}.v-application .mt-lg-n8{margin-top:-32px!important}.v-application .mt-lg-n9{margin-top:-36px!important}.v-application .mt-lg-n10{margin-top:-40px!important}.v-application .mt-lg-n11{margin-top:-44px!important}.v-application .mt-lg-n12{margin-top:-48px!important}.v-application .mt-lg-n13{margin-top:-52px!important}.v-application .mt-lg-n14{margin-top:-56px!important}.v-application .mt-lg-n15{margin-top:-60px!important}.v-application .mt-lg-n16{margin-top:-64px!important}.v-application .mr-lg-n1{margin-right:-4px!important}.v-application .mr-lg-n2{margin-right:-8px!important}.v-application .mr-lg-n3{margin-right:-12px!important}.v-application .mr-lg-n4{margin-right:-16px!important}.v-application .mr-lg-n5{margin-right:-20px!important}.v-application .mr-lg-n6{margin-right:-24px!important}.v-application .mr-lg-n7{margin-right:-28px!important}.v-application .mr-lg-n8{margin-right:-32px!important}.v-application .mr-lg-n9{margin-right:-36px!important}.v-application .mr-lg-n10{margin-right:-40px!important}.v-application .mr-lg-n11{margin-right:-44px!important}.v-application .mr-lg-n12{margin-right:-48px!important}.v-application .mr-lg-n13{margin-right:-52px!important}.v-application .mr-lg-n14{margin-right:-56px!important}.v-application .mr-lg-n15{margin-right:-60px!important}.v-application .mr-lg-n16{margin-right:-64px!important}.v-application .mb-lg-n1{margin-bottom:-4px!important}.v-application .mb-lg-n2{margin-bottom:-8px!important}.v-application .mb-lg-n3{margin-bottom:-12px!important}.v-application .mb-lg-n4{margin-bottom:-16px!important}.v-application .mb-lg-n5{margin-bottom:-20px!important}.v-application .mb-lg-n6{margin-bottom:-24px!important}.v-application .mb-lg-n7{margin-bottom:-28px!important}.v-application .mb-lg-n8{margin-bottom:-32px!important}.v-application .mb-lg-n9{margin-bottom:-36px!important}.v-application .mb-lg-n10{margin-bottom:-40px!important}.v-application .mb-lg-n11{margin-bottom:-44px!important}.v-application .mb-lg-n12{margin-bottom:-48px!important}.v-application .mb-lg-n13{margin-bottom:-52px!important}.v-application .mb-lg-n14{margin-bottom:-56px!important}.v-application .mb-lg-n15{margin-bottom:-60px!important}.v-application .mb-lg-n16{margin-bottom:-64px!important}.v-application .ml-lg-n1{margin-left:-4px!important}.v-application .ml-lg-n2{margin-left:-8px!important}.v-application .ml-lg-n3{margin-left:-12px!important}.v-application .ml-lg-n4{margin-left:-16px!important}.v-application .ml-lg-n5{margin-left:-20px!important}.v-application .ml-lg-n6{margin-left:-24px!important}.v-application .ml-lg-n7{margin-left:-28px!important}.v-application .ml-lg-n8{margin-left:-32px!important}.v-application .ml-lg-n9{margin-left:-36px!important}.v-application .ml-lg-n10{margin-left:-40px!important}.v-application .ml-lg-n11{margin-left:-44px!important}.v-application .ml-lg-n12{margin-left:-48px!important}.v-application .ml-lg-n13{margin-left:-52px!important}.v-application .ml-lg-n14{margin-left:-56px!important}.v-application .ml-lg-n15{margin-left:-60px!important}.v-application .ml-lg-n16{margin-left:-64px!important}.v-application--is-ltr .ms-lg-n1{margin-left:-4px!important}.v-application--is-rtl .ms-lg-n1{margin-right:-4px!important}.v-application--is-ltr .ms-lg-n2{margin-left:-8px!important}.v-application--is-rtl .ms-lg-n2{margin-right:-8px!important}.v-application--is-ltr .ms-lg-n3{margin-left:-12px!important}.v-application--is-rtl .ms-lg-n3{margin-right:-12px!important}.v-application--is-ltr .ms-lg-n4{margin-left:-16px!important}.v-application--is-rtl .ms-lg-n4{margin-right:-16px!important}.v-application--is-ltr .ms-lg-n5{margin-left:-20px!important}.v-application--is-rtl .ms-lg-n5{margin-right:-20px!important}.v-application--is-ltr .ms-lg-n6{margin-left:-24px!important}.v-application--is-rtl .ms-lg-n6{margin-right:-24px!important}.v-application--is-ltr .ms-lg-n7{margin-left:-28px!important}.v-application--is-rtl .ms-lg-n7{margin-right:-28px!important}.v-application--is-ltr .ms-lg-n8{margin-left:-32px!important}.v-application--is-rtl .ms-lg-n8{margin-right:-32px!important}.v-application--is-ltr .ms-lg-n9{margin-left:-36px!important}.v-application--is-rtl .ms-lg-n9{margin-right:-36px!important}.v-application--is-ltr .ms-lg-n10{margin-left:-40px!important}.v-application--is-rtl .ms-lg-n10{margin-right:-40px!important}.v-application--is-ltr .ms-lg-n11{margin-left:-44px!important}.v-application--is-rtl .ms-lg-n11{margin-right:-44px!important}.v-application--is-ltr .ms-lg-n12{margin-left:-48px!important}.v-application--is-rtl .ms-lg-n12{margin-right:-48px!important}.v-application--is-ltr .ms-lg-n13{margin-left:-52px!important}.v-application--is-rtl .ms-lg-n13{margin-right:-52px!important}.v-application--is-ltr .ms-lg-n14{margin-left:-56px!important}.v-application--is-rtl .ms-lg-n14{margin-right:-56px!important}.v-application--is-ltr .ms-lg-n15{margin-left:-60px!important}.v-application--is-rtl .ms-lg-n15{margin-right:-60px!important}.v-application--is-ltr .ms-lg-n16{margin-left:-64px!important}.v-application--is-rtl .ms-lg-n16{margin-right:-64px!important}.v-application--is-ltr .me-lg-n1{margin-right:-4px!important}.v-application--is-rtl .me-lg-n1{margin-left:-4px!important}.v-application--is-ltr .me-lg-n2{margin-right:-8px!important}.v-application--is-rtl .me-lg-n2{margin-left:-8px!important}.v-application--is-ltr .me-lg-n3{margin-right:-12px!important}.v-application--is-rtl .me-lg-n3{margin-left:-12px!important}.v-application--is-ltr .me-lg-n4{margin-right:-16px!important}.v-application--is-rtl .me-lg-n4{margin-left:-16px!important}.v-application--is-ltr .me-lg-n5{margin-right:-20px!important}.v-application--is-rtl .me-lg-n5{margin-left:-20px!important}.v-application--is-ltr .me-lg-n6{margin-right:-24px!important}.v-application--is-rtl .me-lg-n6{margin-left:-24px!important}.v-application--is-ltr .me-lg-n7{margin-right:-28px!important}.v-application--is-rtl .me-lg-n7{margin-left:-28px!important}.v-application--is-ltr .me-lg-n8{margin-right:-32px!important}.v-application--is-rtl .me-lg-n8{margin-left:-32px!important}.v-application--is-ltr .me-lg-n9{margin-right:-36px!important}.v-application--is-rtl .me-lg-n9{margin-left:-36px!important}.v-application--is-ltr .me-lg-n10{margin-right:-40px!important}.v-application--is-rtl .me-lg-n10{margin-left:-40px!important}.v-application--is-ltr .me-lg-n11{margin-right:-44px!important}.v-application--is-rtl .me-lg-n11{margin-left:-44px!important}.v-application--is-ltr .me-lg-n12{margin-right:-48px!important}.v-application--is-rtl .me-lg-n12{margin-left:-48px!important}.v-application--is-ltr .me-lg-n13{margin-right:-52px!important}.v-application--is-rtl .me-lg-n13{margin-left:-52px!important}.v-application--is-ltr .me-lg-n14{margin-right:-56px!important}.v-application--is-rtl .me-lg-n14{margin-left:-56px!important}.v-application--is-ltr .me-lg-n15{margin-right:-60px!important}.v-application--is-rtl .me-lg-n15{margin-left:-60px!important}.v-application--is-ltr .me-lg-n16{margin-right:-64px!important}.v-application--is-rtl .me-lg-n16{margin-left:-64px!important}.v-application .pa-lg-0{padding:0!important}.v-application .pa-lg-1{padding:4px!important}.v-application .pa-lg-2{padding:8px!important}.v-application .pa-lg-3{padding:12px!important}.v-application .pa-lg-4{padding:16px!important}.v-application .pa-lg-5{padding:20px!important}.v-application .pa-lg-6{padding:24px!important}.v-application .pa-lg-7{padding:28px!important}.v-application .pa-lg-8{padding:32px!important}.v-application .pa-lg-9{padding:36px!important}.v-application .pa-lg-10{padding:40px!important}.v-application .pa-lg-11{padding:44px!important}.v-application .pa-lg-12{padding:48px!important}.v-application .pa-lg-13{padding:52px!important}.v-application .pa-lg-14{padding:56px!important}.v-application .pa-lg-15{padding:60px!important}.v-application .pa-lg-16{padding:64px!important}.v-application .px-lg-0{padding-right:0!important;padding-left:0!important}.v-application .px-lg-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-lg-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-lg-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-lg-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-lg-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-lg-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-lg-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-lg-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-lg-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-lg-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-lg-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-lg-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-lg-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-lg-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-lg-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-lg-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-lg-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-lg-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-lg-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-lg-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-lg-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-lg-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-lg-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-lg-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-lg-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-lg-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-lg-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-lg-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-lg-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-lg-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-lg-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-lg-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-lg-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-lg-0{padding-top:0!important}.v-application .pt-lg-1{padding-top:4px!important}.v-application .pt-lg-2{padding-top:8px!important}.v-application .pt-lg-3{padding-top:12px!important}.v-application .pt-lg-4{padding-top:16px!important}.v-application .pt-lg-5{padding-top:20px!important}.v-application .pt-lg-6{padding-top:24px!important}.v-application .pt-lg-7{padding-top:28px!important}.v-application .pt-lg-8{padding-top:32px!important}.v-application .pt-lg-9{padding-top:36px!important}.v-application .pt-lg-10{padding-top:40px!important}.v-application .pt-lg-11{padding-top:44px!important}.v-application .pt-lg-12{padding-top:48px!important}.v-application .pt-lg-13{padding-top:52px!important}.v-application .pt-lg-14{padding-top:56px!important}.v-application .pt-lg-15{padding-top:60px!important}.v-application .pt-lg-16{padding-top:64px!important}.v-application .pr-lg-0{padding-right:0!important}.v-application .pr-lg-1{padding-right:4px!important}.v-application .pr-lg-2{padding-right:8px!important}.v-application .pr-lg-3{padding-right:12px!important}.v-application .pr-lg-4{padding-right:16px!important}.v-application .pr-lg-5{padding-right:20px!important}.v-application .pr-lg-6{padding-right:24px!important}.v-application .pr-lg-7{padding-right:28px!important}.v-application .pr-lg-8{padding-right:32px!important}.v-application .pr-lg-9{padding-right:36px!important}.v-application .pr-lg-10{padding-right:40px!important}.v-application .pr-lg-11{padding-right:44px!important}.v-application .pr-lg-12{padding-right:48px!important}.v-application .pr-lg-13{padding-right:52px!important}.v-application .pr-lg-14{padding-right:56px!important}.v-application .pr-lg-15{padding-right:60px!important}.v-application .pr-lg-16{padding-right:64px!important}.v-application .pb-lg-0{padding-bottom:0!important}.v-application .pb-lg-1{padding-bottom:4px!important}.v-application .pb-lg-2{padding-bottom:8px!important}.v-application .pb-lg-3{padding-bottom:12px!important}.v-application .pb-lg-4{padding-bottom:16px!important}.v-application .pb-lg-5{padding-bottom:20px!important}.v-application .pb-lg-6{padding-bottom:24px!important}.v-application .pb-lg-7{padding-bottom:28px!important}.v-application .pb-lg-8{padding-bottom:32px!important}.v-application .pb-lg-9{padding-bottom:36px!important}.v-application .pb-lg-10{padding-bottom:40px!important}.v-application .pb-lg-11{padding-bottom:44px!important}.v-application .pb-lg-12{padding-bottom:48px!important}.v-application .pb-lg-13{padding-bottom:52px!important}.v-application .pb-lg-14{padding-bottom:56px!important}.v-application .pb-lg-15{padding-bottom:60px!important}.v-application .pb-lg-16{padding-bottom:64px!important}.v-application .pl-lg-0{padding-left:0!important}.v-application .pl-lg-1{padding-left:4px!important}.v-application .pl-lg-2{padding-left:8px!important}.v-application .pl-lg-3{padding-left:12px!important}.v-application .pl-lg-4{padding-left:16px!important}.v-application .pl-lg-5{padding-left:20px!important}.v-application .pl-lg-6{padding-left:24px!important}.v-application .pl-lg-7{padding-left:28px!important}.v-application .pl-lg-8{padding-left:32px!important}.v-application .pl-lg-9{padding-left:36px!important}.v-application .pl-lg-10{padding-left:40px!important}.v-application .pl-lg-11{padding-left:44px!important}.v-application .pl-lg-12{padding-left:48px!important}.v-application .pl-lg-13{padding-left:52px!important}.v-application .pl-lg-14{padding-left:56px!important}.v-application .pl-lg-15{padding-left:60px!important}.v-application .pl-lg-16{padding-left:64px!important}.v-application--is-ltr .ps-lg-0{padding-left:0!important}.v-application--is-rtl .ps-lg-0{padding-right:0!important}.v-application--is-ltr .ps-lg-1{padding-left:4px!important}.v-application--is-rtl .ps-lg-1{padding-right:4px!important}.v-application--is-ltr .ps-lg-2{padding-left:8px!important}.v-application--is-rtl .ps-lg-2{padding-right:8px!important}.v-application--is-ltr .ps-lg-3{padding-left:12px!important}.v-application--is-rtl .ps-lg-3{padding-right:12px!important}.v-application--is-ltr .ps-lg-4{padding-left:16px!important}.v-application--is-rtl .ps-lg-4{padding-right:16px!important}.v-application--is-ltr .ps-lg-5{padding-left:20px!important}.v-application--is-rtl .ps-lg-5{padding-right:20px!important}.v-application--is-ltr .ps-lg-6{padding-left:24px!important}.v-application--is-rtl .ps-lg-6{padding-right:24px!important}.v-application--is-ltr .ps-lg-7{padding-left:28px!important}.v-application--is-rtl .ps-lg-7{padding-right:28px!important}.v-application--is-ltr .ps-lg-8{padding-left:32px!important}.v-application--is-rtl .ps-lg-8{padding-right:32px!important}.v-application--is-ltr .ps-lg-9{padding-left:36px!important}.v-application--is-rtl .ps-lg-9{padding-right:36px!important}.v-application--is-ltr .ps-lg-10{padding-left:40px!important}.v-application--is-rtl .ps-lg-10{padding-right:40px!important}.v-application--is-ltr .ps-lg-11{padding-left:44px!important}.v-application--is-rtl .ps-lg-11{padding-right:44px!important}.v-application--is-ltr .ps-lg-12{padding-left:48px!important}.v-application--is-rtl .ps-lg-12{padding-right:48px!important}.v-application--is-ltr .ps-lg-13{padding-left:52px!important}.v-application--is-rtl .ps-lg-13{padding-right:52px!important}.v-application--is-ltr .ps-lg-14{padding-left:56px!important}.v-application--is-rtl .ps-lg-14{padding-right:56px!important}.v-application--is-ltr .ps-lg-15{padding-left:60px!important}.v-application--is-rtl .ps-lg-15{padding-right:60px!important}.v-application--is-ltr .ps-lg-16{padding-left:64px!important}.v-application--is-rtl .ps-lg-16{padding-right:64px!important}.v-application--is-ltr .pe-lg-0{padding-right:0!important}.v-application--is-rtl .pe-lg-0{padding-left:0!important}.v-application--is-ltr .pe-lg-1{padding-right:4px!important}.v-application--is-rtl .pe-lg-1{padding-left:4px!important}.v-application--is-ltr .pe-lg-2{padding-right:8px!important}.v-application--is-rtl .pe-lg-2{padding-left:8px!important}.v-application--is-ltr .pe-lg-3{padding-right:12px!important}.v-application--is-rtl .pe-lg-3{padding-left:12px!important}.v-application--is-ltr .pe-lg-4{padding-right:16px!important}.v-application--is-rtl .pe-lg-4{padding-left:16px!important}.v-application--is-ltr .pe-lg-5{padding-right:20px!important}.v-application--is-rtl .pe-lg-5{padding-left:20px!important}.v-application--is-ltr .pe-lg-6{padding-right:24px!important}.v-application--is-rtl .pe-lg-6{padding-left:24px!important}.v-application--is-ltr .pe-lg-7{padding-right:28px!important}.v-application--is-rtl .pe-lg-7{padding-left:28px!important}.v-application--is-ltr .pe-lg-8{padding-right:32px!important}.v-application--is-rtl .pe-lg-8{padding-left:32px!important}.v-application--is-ltr .pe-lg-9{padding-right:36px!important}.v-application--is-rtl .pe-lg-9{padding-left:36px!important}.v-application--is-ltr .pe-lg-10{padding-right:40px!important}.v-application--is-rtl .pe-lg-10{padding-left:40px!important}.v-application--is-ltr .pe-lg-11{padding-right:44px!important}.v-application--is-rtl .pe-lg-11{padding-left:44px!important}.v-application--is-ltr .pe-lg-12{padding-right:48px!important}.v-application--is-rtl .pe-lg-12{padding-left:48px!important}.v-application--is-ltr .pe-lg-13{padding-right:52px!important}.v-application--is-rtl .pe-lg-13{padding-left:52px!important}.v-application--is-ltr .pe-lg-14{padding-right:56px!important}.v-application--is-rtl .pe-lg-14{padding-left:56px!important}.v-application--is-ltr .pe-lg-15{padding-right:60px!important}.v-application--is-rtl .pe-lg-15{padding-left:60px!important}.v-application--is-ltr .pe-lg-16{padding-right:64px!important}.v-application--is-rtl .pe-lg-16{padding-left:64px!important}.v-application .text-lg-left{text-align:left!important}.v-application .text-lg-right{text-align:right!important}.v-application .text-lg-center{text-align:center!important}.v-application .text-lg-justify{text-align:justify!important}.v-application .text-lg-start{text-align:start!important}.v-application .text-lg-end{text-align:end!important}.v-application .text-lg-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-lg-h1,.v-application .text-lg-h2{font-weight:300;font-family:Roboto,sans-serif!important}.v-application .text-lg-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-lg-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-lg-h3,.v-application .text-lg-h4{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .text-lg-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-lg-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-lg-h5,.v-application .text-lg-h6{line-height:2rem;font-family:Roboto,sans-serif!important}.v-application .text-lg-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-lg-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:Roboto,sans-serif!important}.v-application .text-lg-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:Roboto,sans-serif!important}.v-application .text-lg-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:Roboto,sans-serif!important}.v-application .text-lg-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-lg-body-2,.v-application .text-lg-button{font-size:.875rem!important;font-family:Roboto,sans-serif!important}.v-application .text-lg-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-lg-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-lg-caption,.v-application .text-lg-overline{font-size:.75rem!important;font-family:Roboto,sans-serif!important}.v-application .text-lg-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:1904px){.v-application .d-xl-none{display:none!important}.v-application .d-xl-inline{display:inline!important}.v-application .d-xl-inline-block{display:inline-block!important}.v-application .d-xl-block{display:block!important}.v-application .d-xl-table{display:table!important}.v-application .d-xl-table-row{display:table-row!important}.v-application .d-xl-table-cell{display:table-cell!important}.v-application .d-xl-flex{display:flex!important}.v-application .d-xl-inline-flex{display:inline-flex!important}.v-application .float-xl-none{float:none!important}.v-application .float-xl-left{float:left!important}.v-application .float-xl-right{float:right!important}.v-application--is-rtl .float-xl-end{float:left!important}.v-application--is-ltr .float-xl-end,.v-application--is-rtl .float-xl-start{float:right!important}.v-application--is-ltr .float-xl-start{float:left!important}.v-application .flex-xl-fill{flex:1 1 auto!important}.v-application .flex-xl-row{flex-direction:row!important}.v-application .flex-xl-column{flex-direction:column!important}.v-application .flex-xl-row-reverse{flex-direction:row-reverse!important}.v-application .flex-xl-column-reverse{flex-direction:column-reverse!important}.v-application .flex-xl-grow-0{flex-grow:0!important}.v-application .flex-xl-grow-1{flex-grow:1!important}.v-application .flex-xl-shrink-0{flex-shrink:0!important}.v-application .flex-xl-shrink-1{flex-shrink:1!important}.v-application .flex-xl-wrap{flex-wrap:wrap!important}.v-application .flex-xl-nowrap{flex-wrap:nowrap!important}.v-application .flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-xl-start{justify-content:flex-start!important}.v-application .justify-xl-end{justify-content:flex-end!important}.v-application .justify-xl-center{justify-content:center!important}.v-application .justify-xl-space-between{justify-content:space-between!important}.v-application .justify-xl-space-around{justify-content:space-around!important}.v-application .align-xl-start{align-items:flex-start!important}.v-application .align-xl-end{align-items:flex-end!important}.v-application .align-xl-center{align-items:center!important}.v-application .align-xl-baseline{align-items:baseline!important}.v-application .align-xl-stretch{align-items:stretch!important}.v-application .align-content-xl-start{align-content:flex-start!important}.v-application .align-content-xl-end{align-content:flex-end!important}.v-application .align-content-xl-center{align-content:center!important}.v-application .align-content-xl-space-between{align-content:space-between!important}.v-application .align-content-xl-space-around{align-content:space-around!important}.v-application .align-content-xl-stretch{align-content:stretch!important}.v-application .align-self-xl-auto{align-self:auto!important}.v-application .align-self-xl-start{align-self:flex-start!important}.v-application .align-self-xl-end{align-self:flex-end!important}.v-application .align-self-xl-center{align-self:center!important}.v-application .align-self-xl-baseline{align-self:baseline!important}.v-application .align-self-xl-stretch{align-self:stretch!important}.v-application .order-xl-first{order:-1!important}.v-application .order-xl-0{order:0!important}.v-application .order-xl-1{order:1!important}.v-application .order-xl-2{order:2!important}.v-application .order-xl-3{order:3!important}.v-application .order-xl-4{order:4!important}.v-application .order-xl-5{order:5!important}.v-application .order-xl-6{order:6!important}.v-application .order-xl-7{order:7!important}.v-application .order-xl-8{order:8!important}.v-application .order-xl-9{order:9!important}.v-application .order-xl-10{order:10!important}.v-application .order-xl-11{order:11!important}.v-application .order-xl-12{order:12!important}.v-application .order-xl-last{order:13!important}.v-application .ma-xl-0{margin:0!important}.v-application .ma-xl-1{margin:4px!important}.v-application .ma-xl-2{margin:8px!important}.v-application .ma-xl-3{margin:12px!important}.v-application .ma-xl-4{margin:16px!important}.v-application .ma-xl-5{margin:20px!important}.v-application .ma-xl-6{margin:24px!important}.v-application .ma-xl-7{margin:28px!important}.v-application .ma-xl-8{margin:32px!important}.v-application .ma-xl-9{margin:36px!important}.v-application .ma-xl-10{margin:40px!important}.v-application .ma-xl-11{margin:44px!important}.v-application .ma-xl-12{margin:48px!important}.v-application .ma-xl-13{margin:52px!important}.v-application .ma-xl-14{margin:56px!important}.v-application .ma-xl-15{margin:60px!important}.v-application .ma-xl-16{margin:64px!important}.v-application .ma-xl-auto{margin:auto!important}.v-application .mx-xl-0{margin-right:0!important;margin-left:0!important}.v-application .mx-xl-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-xl-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-xl-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-xl-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-xl-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-xl-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-xl-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-xl-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-xl-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-xl-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-xl-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-xl-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-xl-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-xl-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-xl-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-xl-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-xl-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-xl-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-xl-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-xl-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-xl-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-xl-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-xl-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-xl-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-xl-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-xl-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-xl-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-xl-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-xl-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-xl-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-xl-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-xl-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-xl-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-xl-0{margin-top:0!important}.v-application .mt-xl-1{margin-top:4px!important}.v-application .mt-xl-2{margin-top:8px!important}.v-application .mt-xl-3{margin-top:12px!important}.v-application .mt-xl-4{margin-top:16px!important}.v-application .mt-xl-5{margin-top:20px!important}.v-application .mt-xl-6{margin-top:24px!important}.v-application .mt-xl-7{margin-top:28px!important}.v-application .mt-xl-8{margin-top:32px!important}.v-application .mt-xl-9{margin-top:36px!important}.v-application .mt-xl-10{margin-top:40px!important}.v-application .mt-xl-11{margin-top:44px!important}.v-application .mt-xl-12{margin-top:48px!important}.v-application .mt-xl-13{margin-top:52px!important}.v-application .mt-xl-14{margin-top:56px!important}.v-application .mt-xl-15{margin-top:60px!important}.v-application .mt-xl-16{margin-top:64px!important}.v-application .mt-xl-auto{margin-top:auto!important}.v-application .mr-xl-0{margin-right:0!important}.v-application .mr-xl-1{margin-right:4px!important}.v-application .mr-xl-2{margin-right:8px!important}.v-application .mr-xl-3{margin-right:12px!important}.v-application .mr-xl-4{margin-right:16px!important}.v-application .mr-xl-5{margin-right:20px!important}.v-application .mr-xl-6{margin-right:24px!important}.v-application .mr-xl-7{margin-right:28px!important}.v-application .mr-xl-8{margin-right:32px!important}.v-application .mr-xl-9{margin-right:36px!important}.v-application .mr-xl-10{margin-right:40px!important}.v-application .mr-xl-11{margin-right:44px!important}.v-application .mr-xl-12{margin-right:48px!important}.v-application .mr-xl-13{margin-right:52px!important}.v-application .mr-xl-14{margin-right:56px!important}.v-application .mr-xl-15{margin-right:60px!important}.v-application .mr-xl-16{margin-right:64px!important}.v-application .mr-xl-auto{margin-right:auto!important}.v-application .mb-xl-0{margin-bottom:0!important}.v-application .mb-xl-1{margin-bottom:4px!important}.v-application .mb-xl-2{margin-bottom:8px!important}.v-application .mb-xl-3{margin-bottom:12px!important}.v-application .mb-xl-4{margin-bottom:16px!important}.v-application .mb-xl-5{margin-bottom:20px!important}.v-application .mb-xl-6{margin-bottom:24px!important}.v-application .mb-xl-7{margin-bottom:28px!important}.v-application .mb-xl-8{margin-bottom:32px!important}.v-application .mb-xl-9{margin-bottom:36px!important}.v-application .mb-xl-10{margin-bottom:40px!important}.v-application .mb-xl-11{margin-bottom:44px!important}.v-application .mb-xl-12{margin-bottom:48px!important}.v-application .mb-xl-13{margin-bottom:52px!important}.v-application .mb-xl-14{margin-bottom:56px!important}.v-application .mb-xl-15{margin-bottom:60px!important}.v-application .mb-xl-16{margin-bottom:64px!important}.v-application .mb-xl-auto{margin-bottom:auto!important}.v-application .ml-xl-0{margin-left:0!important}.v-application .ml-xl-1{margin-left:4px!important}.v-application .ml-xl-2{margin-left:8px!important}.v-application .ml-xl-3{margin-left:12px!important}.v-application .ml-xl-4{margin-left:16px!important}.v-application .ml-xl-5{margin-left:20px!important}.v-application .ml-xl-6{margin-left:24px!important}.v-application .ml-xl-7{margin-left:28px!important}.v-application .ml-xl-8{margin-left:32px!important}.v-application .ml-xl-9{margin-left:36px!important}.v-application .ml-xl-10{margin-left:40px!important}.v-application .ml-xl-11{margin-left:44px!important}.v-application .ml-xl-12{margin-left:48px!important}.v-application .ml-xl-13{margin-left:52px!important}.v-application .ml-xl-14{margin-left:56px!important}.v-application .ml-xl-15{margin-left:60px!important}.v-application .ml-xl-16{margin-left:64px!important}.v-application .ml-xl-auto{margin-left:auto!important}.v-application--is-ltr .ms-xl-0{margin-left:0!important}.v-application--is-rtl .ms-xl-0{margin-right:0!important}.v-application--is-ltr .ms-xl-1{margin-left:4px!important}.v-application--is-rtl .ms-xl-1{margin-right:4px!important}.v-application--is-ltr .ms-xl-2{margin-left:8px!important}.v-application--is-rtl .ms-xl-2{margin-right:8px!important}.v-application--is-ltr .ms-xl-3{margin-left:12px!important}.v-application--is-rtl .ms-xl-3{margin-right:12px!important}.v-application--is-ltr .ms-xl-4{margin-left:16px!important}.v-application--is-rtl .ms-xl-4{margin-right:16px!important}.v-application--is-ltr .ms-xl-5{margin-left:20px!important}.v-application--is-rtl .ms-xl-5{margin-right:20px!important}.v-application--is-ltr .ms-xl-6{margin-left:24px!important}.v-application--is-rtl .ms-xl-6{margin-right:24px!important}.v-application--is-ltr .ms-xl-7{margin-left:28px!important}.v-application--is-rtl .ms-xl-7{margin-right:28px!important}.v-application--is-ltr .ms-xl-8{margin-left:32px!important}.v-application--is-rtl .ms-xl-8{margin-right:32px!important}.v-application--is-ltr .ms-xl-9{margin-left:36px!important}.v-application--is-rtl .ms-xl-9{margin-right:36px!important}.v-application--is-ltr .ms-xl-10{margin-left:40px!important}.v-application--is-rtl .ms-xl-10{margin-right:40px!important}.v-application--is-ltr .ms-xl-11{margin-left:44px!important}.v-application--is-rtl .ms-xl-11{margin-right:44px!important}.v-application--is-ltr .ms-xl-12{margin-left:48px!important}.v-application--is-rtl .ms-xl-12{margin-right:48px!important}.v-application--is-ltr .ms-xl-13{margin-left:52px!important}.v-application--is-rtl .ms-xl-13{margin-right:52px!important}.v-application--is-ltr .ms-xl-14{margin-left:56px!important}.v-application--is-rtl .ms-xl-14{margin-right:56px!important}.v-application--is-ltr .ms-xl-15{margin-left:60px!important}.v-application--is-rtl .ms-xl-15{margin-right:60px!important}.v-application--is-ltr .ms-xl-16{margin-left:64px!important}.v-application--is-rtl .ms-xl-16{margin-right:64px!important}.v-application--is-ltr .ms-xl-auto{margin-left:auto!important}.v-application--is-rtl .ms-xl-auto{margin-right:auto!important}.v-application--is-ltr .me-xl-0{margin-right:0!important}.v-application--is-rtl .me-xl-0{margin-left:0!important}.v-application--is-ltr .me-xl-1{margin-right:4px!important}.v-application--is-rtl .me-xl-1{margin-left:4px!important}.v-application--is-ltr .me-xl-2{margin-right:8px!important}.v-application--is-rtl .me-xl-2{margin-left:8px!important}.v-application--is-ltr .me-xl-3{margin-right:12px!important}.v-application--is-rtl .me-xl-3{margin-left:12px!important}.v-application--is-ltr .me-xl-4{margin-right:16px!important}.v-application--is-rtl .me-xl-4{margin-left:16px!important}.v-application--is-ltr .me-xl-5{margin-right:20px!important}.v-application--is-rtl .me-xl-5{margin-left:20px!important}.v-application--is-ltr .me-xl-6{margin-right:24px!important}.v-application--is-rtl .me-xl-6{margin-left:24px!important}.v-application--is-ltr .me-xl-7{margin-right:28px!important}.v-application--is-rtl .me-xl-7{margin-left:28px!important}.v-application--is-ltr .me-xl-8{margin-right:32px!important}.v-application--is-rtl .me-xl-8{margin-left:32px!important}.v-application--is-ltr .me-xl-9{margin-right:36px!important}.v-application--is-rtl .me-xl-9{margin-left:36px!important}.v-application--is-ltr .me-xl-10{margin-right:40px!important}.v-application--is-rtl .me-xl-10{margin-left:40px!important}.v-application--is-ltr .me-xl-11{margin-right:44px!important}.v-application--is-rtl .me-xl-11{margin-left:44px!important}.v-application--is-ltr .me-xl-12{margin-right:48px!important}.v-application--is-rtl .me-xl-12{margin-left:48px!important}.v-application--is-ltr .me-xl-13{margin-right:52px!important}.v-application--is-rtl .me-xl-13{margin-left:52px!important}.v-application--is-ltr .me-xl-14{margin-right:56px!important}.v-application--is-rtl .me-xl-14{margin-left:56px!important}.v-application--is-ltr .me-xl-15{margin-right:60px!important}.v-application--is-rtl .me-xl-15{margin-left:60px!important}.v-application--is-ltr .me-xl-16{margin-right:64px!important}.v-application--is-rtl .me-xl-16{margin-left:64px!important}.v-application--is-ltr .me-xl-auto{margin-right:auto!important}.v-application--is-rtl .me-xl-auto{margin-left:auto!important}.v-application .ma-xl-n1{margin:-4px!important}.v-application .ma-xl-n2{margin:-8px!important}.v-application .ma-xl-n3{margin:-12px!important}.v-application .ma-xl-n4{margin:-16px!important}.v-application .ma-xl-n5{margin:-20px!important}.v-application .ma-xl-n6{margin:-24px!important}.v-application .ma-xl-n7{margin:-28px!important}.v-application .ma-xl-n8{margin:-32px!important}.v-application .ma-xl-n9{margin:-36px!important}.v-application .ma-xl-n10{margin:-40px!important}.v-application .ma-xl-n11{margin:-44px!important}.v-application .ma-xl-n12{margin:-48px!important}.v-application .ma-xl-n13{margin:-52px!important}.v-application .ma-xl-n14{margin:-56px!important}.v-application .ma-xl-n15{margin:-60px!important}.v-application .ma-xl-n16{margin:-64px!important}.v-application .mx-xl-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-xl-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-xl-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-xl-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-xl-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-xl-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-xl-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-xl-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-xl-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-xl-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-xl-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-xl-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-xl-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-xl-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-xl-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-xl-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-xl-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-xl-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-xl-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-xl-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-xl-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-xl-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-xl-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-xl-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-xl-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-xl-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-xl-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-xl-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-xl-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-xl-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-xl-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-xl-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-xl-n1{margin-top:-4px!important}.v-application .mt-xl-n2{margin-top:-8px!important}.v-application .mt-xl-n3{margin-top:-12px!important}.v-application .mt-xl-n4{margin-top:-16px!important}.v-application .mt-xl-n5{margin-top:-20px!important}.v-application .mt-xl-n6{margin-top:-24px!important}.v-application .mt-xl-n7{margin-top:-28px!important}.v-application .mt-xl-n8{margin-top:-32px!important}.v-application .mt-xl-n9{margin-top:-36px!important}.v-application .mt-xl-n10{margin-top:-40px!important}.v-application .mt-xl-n11{margin-top:-44px!important}.v-application .mt-xl-n12{margin-top:-48px!important}.v-application .mt-xl-n13{margin-top:-52px!important}.v-application .mt-xl-n14{margin-top:-56px!important}.v-application .mt-xl-n15{margin-top:-60px!important}.v-application .mt-xl-n16{margin-top:-64px!important}.v-application .mr-xl-n1{margin-right:-4px!important}.v-application .mr-xl-n2{margin-right:-8px!important}.v-application .mr-xl-n3{margin-right:-12px!important}.v-application .mr-xl-n4{margin-right:-16px!important}.v-application .mr-xl-n5{margin-right:-20px!important}.v-application .mr-xl-n6{margin-right:-24px!important}.v-application .mr-xl-n7{margin-right:-28px!important}.v-application .mr-xl-n8{margin-right:-32px!important}.v-application .mr-xl-n9{margin-right:-36px!important}.v-application .mr-xl-n10{margin-right:-40px!important}.v-application .mr-xl-n11{margin-right:-44px!important}.v-application .mr-xl-n12{margin-right:-48px!important}.v-application .mr-xl-n13{margin-right:-52px!important}.v-application .mr-xl-n14{margin-right:-56px!important}.v-application .mr-xl-n15{margin-right:-60px!important}.v-application .mr-xl-n16{margin-right:-64px!important}.v-application .mb-xl-n1{margin-bottom:-4px!important}.v-application .mb-xl-n2{margin-bottom:-8px!important}.v-application .mb-xl-n3{margin-bottom:-12px!important}.v-application .mb-xl-n4{margin-bottom:-16px!important}.v-application .mb-xl-n5{margin-bottom:-20px!important}.v-application .mb-xl-n6{margin-bottom:-24px!important}.v-application .mb-xl-n7{margin-bottom:-28px!important}.v-application .mb-xl-n8{margin-bottom:-32px!important}.v-application .mb-xl-n9{margin-bottom:-36px!important}.v-application .mb-xl-n10{margin-bottom:-40px!important}.v-application .mb-xl-n11{margin-bottom:-44px!important}.v-application .mb-xl-n12{margin-bottom:-48px!important}.v-application .mb-xl-n13{margin-bottom:-52px!important}.v-application .mb-xl-n14{margin-bottom:-56px!important}.v-application .mb-xl-n15{margin-bottom:-60px!important}.v-application .mb-xl-n16{margin-bottom:-64px!important}.v-application .ml-xl-n1{margin-left:-4px!important}.v-application .ml-xl-n2{margin-left:-8px!important}.v-application .ml-xl-n3{margin-left:-12px!important}.v-application .ml-xl-n4{margin-left:-16px!important}.v-application .ml-xl-n5{margin-left:-20px!important}.v-application .ml-xl-n6{margin-left:-24px!important}.v-application .ml-xl-n7{margin-left:-28px!important}.v-application .ml-xl-n8{margin-left:-32px!important}.v-application .ml-xl-n9{margin-left:-36px!important}.v-application .ml-xl-n10{margin-left:-40px!important}.v-application .ml-xl-n11{margin-left:-44px!important}.v-application .ml-xl-n12{margin-left:-48px!important}.v-application .ml-xl-n13{margin-left:-52px!important}.v-application .ml-xl-n14{margin-left:-56px!important}.v-application .ml-xl-n15{margin-left:-60px!important}.v-application .ml-xl-n16{margin-left:-64px!important}.v-application--is-ltr .ms-xl-n1{margin-left:-4px!important}.v-application--is-rtl .ms-xl-n1{margin-right:-4px!important}.v-application--is-ltr .ms-xl-n2{margin-left:-8px!important}.v-application--is-rtl .ms-xl-n2{margin-right:-8px!important}.v-application--is-ltr .ms-xl-n3{margin-left:-12px!important}.v-application--is-rtl .ms-xl-n3{margin-right:-12px!important}.v-application--is-ltr .ms-xl-n4{margin-left:-16px!important}.v-application--is-rtl .ms-xl-n4{margin-right:-16px!important}.v-application--is-ltr .ms-xl-n5{margin-left:-20px!important}.v-application--is-rtl .ms-xl-n5{margin-right:-20px!important}.v-application--is-ltr .ms-xl-n6{margin-left:-24px!important}.v-application--is-rtl .ms-xl-n6{margin-right:-24px!important}.v-application--is-ltr .ms-xl-n7{margin-left:-28px!important}.v-application--is-rtl .ms-xl-n7{margin-right:-28px!important}.v-application--is-ltr .ms-xl-n8{margin-left:-32px!important}.v-application--is-rtl .ms-xl-n8{margin-right:-32px!important}.v-application--is-ltr .ms-xl-n9{margin-left:-36px!important}.v-application--is-rtl .ms-xl-n9{margin-right:-36px!important}.v-application--is-ltr .ms-xl-n10{margin-left:-40px!important}.v-application--is-rtl .ms-xl-n10{margin-right:-40px!important}.v-application--is-ltr .ms-xl-n11{margin-left:-44px!important}.v-application--is-rtl .ms-xl-n11{margin-right:-44px!important}.v-application--is-ltr .ms-xl-n12{margin-left:-48px!important}.v-application--is-rtl .ms-xl-n12{margin-right:-48px!important}.v-application--is-ltr .ms-xl-n13{margin-left:-52px!important}.v-application--is-rtl .ms-xl-n13{margin-right:-52px!important}.v-application--is-ltr .ms-xl-n14{margin-left:-56px!important}.v-application--is-rtl .ms-xl-n14{margin-right:-56px!important}.v-application--is-ltr .ms-xl-n15{margin-left:-60px!important}.v-application--is-rtl .ms-xl-n15{margin-right:-60px!important}.v-application--is-ltr .ms-xl-n16{margin-left:-64px!important}.v-application--is-rtl .ms-xl-n16{margin-right:-64px!important}.v-application--is-ltr .me-xl-n1{margin-right:-4px!important}.v-application--is-rtl .me-xl-n1{margin-left:-4px!important}.v-application--is-ltr .me-xl-n2{margin-right:-8px!important}.v-application--is-rtl .me-xl-n2{margin-left:-8px!important}.v-application--is-ltr .me-xl-n3{margin-right:-12px!important}.v-application--is-rtl .me-xl-n3{margin-left:-12px!important}.v-application--is-ltr .me-xl-n4{margin-right:-16px!important}.v-application--is-rtl .me-xl-n4{margin-left:-16px!important}.v-application--is-ltr .me-xl-n5{margin-right:-20px!important}.v-application--is-rtl .me-xl-n5{margin-left:-20px!important}.v-application--is-ltr .me-xl-n6{margin-right:-24px!important}.v-application--is-rtl .me-xl-n6{margin-left:-24px!important}.v-application--is-ltr .me-xl-n7{margin-right:-28px!important}.v-application--is-rtl .me-xl-n7{margin-left:-28px!important}.v-application--is-ltr .me-xl-n8{margin-right:-32px!important}.v-application--is-rtl .me-xl-n8{margin-left:-32px!important}.v-application--is-ltr .me-xl-n9{margin-right:-36px!important}.v-application--is-rtl .me-xl-n9{margin-left:-36px!important}.v-application--is-ltr .me-xl-n10{margin-right:-40px!important}.v-application--is-rtl .me-xl-n10{margin-left:-40px!important}.v-application--is-ltr .me-xl-n11{margin-right:-44px!important}.v-application--is-rtl .me-xl-n11{margin-left:-44px!important}.v-application--is-ltr .me-xl-n12{margin-right:-48px!important}.v-application--is-rtl .me-xl-n12{margin-left:-48px!important}.v-application--is-ltr .me-xl-n13{margin-right:-52px!important}.v-application--is-rtl .me-xl-n13{margin-left:-52px!important}.v-application--is-ltr .me-xl-n14{margin-right:-56px!important}.v-application--is-rtl .me-xl-n14{margin-left:-56px!important}.v-application--is-ltr .me-xl-n15{margin-right:-60px!important}.v-application--is-rtl .me-xl-n15{margin-left:-60px!important}.v-application--is-ltr .me-xl-n16{margin-right:-64px!important}.v-application--is-rtl .me-xl-n16{margin-left:-64px!important}.v-application .pa-xl-0{padding:0!important}.v-application .pa-xl-1{padding:4px!important}.v-application .pa-xl-2{padding:8px!important}.v-application .pa-xl-3{padding:12px!important}.v-application .pa-xl-4{padding:16px!important}.v-application .pa-xl-5{padding:20px!important}.v-application .pa-xl-6{padding:24px!important}.v-application .pa-xl-7{padding:28px!important}.v-application .pa-xl-8{padding:32px!important}.v-application .pa-xl-9{padding:36px!important}.v-application .pa-xl-10{padding:40px!important}.v-application .pa-xl-11{padding:44px!important}.v-application .pa-xl-12{padding:48px!important}.v-application .pa-xl-13{padding:52px!important}.v-application .pa-xl-14{padding:56px!important}.v-application .pa-xl-15{padding:60px!important}.v-application .pa-xl-16{padding:64px!important}.v-application .px-xl-0{padding-right:0!important;padding-left:0!important}.v-application .px-xl-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-xl-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-xl-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-xl-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-xl-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-xl-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-xl-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-xl-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-xl-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-xl-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-xl-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-xl-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-xl-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-xl-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-xl-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-xl-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-xl-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-xl-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-xl-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-xl-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-xl-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-xl-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-xl-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-xl-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-xl-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-xl-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-xl-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-xl-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-xl-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-xl-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-xl-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-xl-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-xl-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-xl-0{padding-top:0!important}.v-application .pt-xl-1{padding-top:4px!important}.v-application .pt-xl-2{padding-top:8px!important}.v-application .pt-xl-3{padding-top:12px!important}.v-application .pt-xl-4{padding-top:16px!important}.v-application .pt-xl-5{padding-top:20px!important}.v-application .pt-xl-6{padding-top:24px!important}.v-application .pt-xl-7{padding-top:28px!important}.v-application .pt-xl-8{padding-top:32px!important}.v-application .pt-xl-9{padding-top:36px!important}.v-application .pt-xl-10{padding-top:40px!important}.v-application .pt-xl-11{padding-top:44px!important}.v-application .pt-xl-12{padding-top:48px!important}.v-application .pt-xl-13{padding-top:52px!important}.v-application .pt-xl-14{padding-top:56px!important}.v-application .pt-xl-15{padding-top:60px!important}.v-application .pt-xl-16{padding-top:64px!important}.v-application .pr-xl-0{padding-right:0!important}.v-application .pr-xl-1{padding-right:4px!important}.v-application .pr-xl-2{padding-right:8px!important}.v-application .pr-xl-3{padding-right:12px!important}.v-application .pr-xl-4{padding-right:16px!important}.v-application .pr-xl-5{padding-right:20px!important}.v-application .pr-xl-6{padding-right:24px!important}.v-application .pr-xl-7{padding-right:28px!important}.v-application .pr-xl-8{padding-right:32px!important}.v-application .pr-xl-9{padding-right:36px!important}.v-application .pr-xl-10{padding-right:40px!important}.v-application .pr-xl-11{padding-right:44px!important}.v-application .pr-xl-12{padding-right:48px!important}.v-application .pr-xl-13{padding-right:52px!important}.v-application .pr-xl-14{padding-right:56px!important}.v-application .pr-xl-15{padding-right:60px!important}.v-application .pr-xl-16{padding-right:64px!important}.v-application .pb-xl-0{padding-bottom:0!important}.v-application .pb-xl-1{padding-bottom:4px!important}.v-application .pb-xl-2{padding-bottom:8px!important}.v-application .pb-xl-3{padding-bottom:12px!important}.v-application .pb-xl-4{padding-bottom:16px!important}.v-application .pb-xl-5{padding-bottom:20px!important}.v-application .pb-xl-6{padding-bottom:24px!important}.v-application .pb-xl-7{padding-bottom:28px!important}.v-application .pb-xl-8{padding-bottom:32px!important}.v-application .pb-xl-9{padding-bottom:36px!important}.v-application .pb-xl-10{padding-bottom:40px!important}.v-application .pb-xl-11{padding-bottom:44px!important}.v-application .pb-xl-12{padding-bottom:48px!important}.v-application .pb-xl-13{padding-bottom:52px!important}.v-application .pb-xl-14{padding-bottom:56px!important}.v-application .pb-xl-15{padding-bottom:60px!important}.v-application .pb-xl-16{padding-bottom:64px!important}.v-application .pl-xl-0{padding-left:0!important}.v-application .pl-xl-1{padding-left:4px!important}.v-application .pl-xl-2{padding-left:8px!important}.v-application .pl-xl-3{padding-left:12px!important}.v-application .pl-xl-4{padding-left:16px!important}.v-application .pl-xl-5{padding-left:20px!important}.v-application .pl-xl-6{padding-left:24px!important}.v-application .pl-xl-7{padding-left:28px!important}.v-application .pl-xl-8{padding-left:32px!important}.v-application .pl-xl-9{padding-left:36px!important}.v-application .pl-xl-10{padding-left:40px!important}.v-application .pl-xl-11{padding-left:44px!important}.v-application .pl-xl-12{padding-left:48px!important}.v-application .pl-xl-13{padding-left:52px!important}.v-application .pl-xl-14{padding-left:56px!important}.v-application .pl-xl-15{padding-left:60px!important}.v-application .pl-xl-16{padding-left:64px!important}.v-application--is-ltr .ps-xl-0{padding-left:0!important}.v-application--is-rtl .ps-xl-0{padding-right:0!important}.v-application--is-ltr .ps-xl-1{padding-left:4px!important}.v-application--is-rtl .ps-xl-1{padding-right:4px!important}.v-application--is-ltr .ps-xl-2{padding-left:8px!important}.v-application--is-rtl .ps-xl-2{padding-right:8px!important}.v-application--is-ltr .ps-xl-3{padding-left:12px!important}.v-application--is-rtl .ps-xl-3{padding-right:12px!important}.v-application--is-ltr .ps-xl-4{padding-left:16px!important}.v-application--is-rtl .ps-xl-4{padding-right:16px!important}.v-application--is-ltr .ps-xl-5{padding-left:20px!important}.v-application--is-rtl .ps-xl-5{padding-right:20px!important}.v-application--is-ltr .ps-xl-6{padding-left:24px!important}.v-application--is-rtl .ps-xl-6{padding-right:24px!important}.v-application--is-ltr .ps-xl-7{padding-left:28px!important}.v-application--is-rtl .ps-xl-7{padding-right:28px!important}.v-application--is-ltr .ps-xl-8{padding-left:32px!important}.v-application--is-rtl .ps-xl-8{padding-right:32px!important}.v-application--is-ltr .ps-xl-9{padding-left:36px!important}.v-application--is-rtl .ps-xl-9{padding-right:36px!important}.v-application--is-ltr .ps-xl-10{padding-left:40px!important}.v-application--is-rtl .ps-xl-10{padding-right:40px!important}.v-application--is-ltr .ps-xl-11{padding-left:44px!important}.v-application--is-rtl .ps-xl-11{padding-right:44px!important}.v-application--is-ltr .ps-xl-12{padding-left:48px!important}.v-application--is-rtl .ps-xl-12{padding-right:48px!important}.v-application--is-ltr .ps-xl-13{padding-left:52px!important}.v-application--is-rtl .ps-xl-13{padding-right:52px!important}.v-application--is-ltr .ps-xl-14{padding-left:56px!important}.v-application--is-rtl .ps-xl-14{padding-right:56px!important}.v-application--is-ltr .ps-xl-15{padding-left:60px!important}.v-application--is-rtl .ps-xl-15{padding-right:60px!important}.v-application--is-ltr .ps-xl-16{padding-left:64px!important}.v-application--is-rtl .ps-xl-16{padding-right:64px!important}.v-application--is-ltr .pe-xl-0{padding-right:0!important}.v-application--is-rtl .pe-xl-0{padding-left:0!important}.v-application--is-ltr .pe-xl-1{padding-right:4px!important}.v-application--is-rtl .pe-xl-1{padding-left:4px!important}.v-application--is-ltr .pe-xl-2{padding-right:8px!important}.v-application--is-rtl .pe-xl-2{padding-left:8px!important}.v-application--is-ltr .pe-xl-3{padding-right:12px!important}.v-application--is-rtl .pe-xl-3{padding-left:12px!important}.v-application--is-ltr .pe-xl-4{padding-right:16px!important}.v-application--is-rtl .pe-xl-4{padding-left:16px!important}.v-application--is-ltr .pe-xl-5{padding-right:20px!important}.v-application--is-rtl .pe-xl-5{padding-left:20px!important}.v-application--is-ltr .pe-xl-6{padding-right:24px!important}.v-application--is-rtl .pe-xl-6{padding-left:24px!important}.v-application--is-ltr .pe-xl-7{padding-right:28px!important}.v-application--is-rtl .pe-xl-7{padding-left:28px!important}.v-application--is-ltr .pe-xl-8{padding-right:32px!important}.v-application--is-rtl .pe-xl-8{padding-left:32px!important}.v-application--is-ltr .pe-xl-9{padding-right:36px!important}.v-application--is-rtl .pe-xl-9{padding-left:36px!important}.v-application--is-ltr .pe-xl-10{padding-right:40px!important}.v-application--is-rtl .pe-xl-10{padding-left:40px!important}.v-application--is-ltr .pe-xl-11{padding-right:44px!important}.v-application--is-rtl .pe-xl-11{padding-left:44px!important}.v-application--is-ltr .pe-xl-12{padding-right:48px!important}.v-application--is-rtl .pe-xl-12{padding-left:48px!important}.v-application--is-ltr .pe-xl-13{padding-right:52px!important}.v-application--is-rtl .pe-xl-13{padding-left:52px!important}.v-application--is-ltr .pe-xl-14{padding-right:56px!important}.v-application--is-rtl .pe-xl-14{padding-left:56px!important}.v-application--is-ltr .pe-xl-15{padding-right:60px!important}.v-application--is-rtl .pe-xl-15{padding-left:60px!important}.v-application--is-ltr .pe-xl-16{padding-right:64px!important}.v-application--is-rtl .pe-xl-16{padding-left:64px!important}.v-application .text-xl-left{text-align:left!important}.v-application .text-xl-right{text-align:right!important}.v-application .text-xl-center{text-align:center!important}.v-application .text-xl-justify{text-align:justify!important}.v-application .text-xl-start{text-align:start!important}.v-application .text-xl-end{text-align:end!important}.v-application .text-xl-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-xl-h1,.v-application .text-xl-h2{font-weight:300;font-family:Roboto,sans-serif!important}.v-application .text-xl-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-xl-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-xl-h3,.v-application .text-xl-h4{font-weight:400;font-family:Roboto,sans-serif!important}.v-application .text-xl-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-xl-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-xl-h5,.v-application .text-xl-h6{line-height:2rem;font-family:Roboto,sans-serif!important}.v-application .text-xl-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-xl-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:Roboto,sans-serif!important}.v-application .text-xl-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:Roboto,sans-serif!important}.v-application .text-xl-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:Roboto,sans-serif!important}.v-application .text-xl-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-xl-body-2,.v-application .text-xl-button{font-size:.875rem!important;font-family:Roboto,sans-serif!important}.v-application .text-xl-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-xl-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-xl-caption,.v-application .text-xl-overline{font-size:.75rem!important;font-family:Roboto,sans-serif!important}.v-application .text-xl-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media print{.v-application .d-print-none{display:none!important}.v-application .d-print-inline{display:inline!important}.v-application .d-print-inline-block{display:inline-block!important}.v-application .d-print-block{display:block!important}.v-application .d-print-table{display:table!important}.v-application .d-print-table-row{display:table-row!important}.v-application .d-print-table-cell{display:table-cell!important}.v-application .d-print-flex{display:flex!important}.v-application .d-print-inline-flex{display:inline-flex!important}.v-application .float-print-none{float:none!important}.v-application .float-print-left{float:left!important}.v-application .float-print-right{float:right!important}.v-application--is-rtl .float-print-end{float:left!important}.v-application--is-ltr .float-print-end,.v-application--is-rtl .float-print-start{float:right!important}.v-application--is-ltr .float-print-start{float:left!important}}.theme--light.v-application{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-application .text--primary{color:rgba(0,0,0,.87)!important}.theme--light.v-application .text--secondary{color:rgba(0,0,0,.6)!important}.theme--light.v-application .text--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-application{background:#121212;color:#fff}.theme--dark.v-application .text--primary{color:#fff!important}.theme--dark.v-application .text--secondary{color:hsla(0,0%,100%,.7)!important}.theme--dark.v-application .text--disabled{color:hsla(0,0%,100%,.5)!important}.v-application{display:flex}.v-application a{cursor:pointer}.v-application--is-rtl{direction:rtl}.v-application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-application,.v-application--wrap{display:block}}}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:24px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__content{will-change:height}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}.theme--light.v-toolbar.v-sheet{background-color:#fff}.theme--dark.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-toolbar{border-radius:0}.v-sheet.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-toolbar.v-sheet--shaped{border-radius:24px 0}.v-toolbar{contain:layout;display:block;flex:1 1 auto;max-width:100%;transition:transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);position:relative;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-toolbar .v-input{padding-top:0;margin-top:0}.v-toolbar__content,.v-toolbar__extension{padding:4px 16px}.v-toolbar__content .v-btn.v-btn--icon.v-size--default,.v-toolbar__extension .v-btn.v-btn--icon.v-size--default{height:48px;width:48px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-left:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-right:-12px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-left:20px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-right:20px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-right:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-left:-12px}.v-toolbar__content>.v-tabs,.v-toolbar__extension>.v-tabs{height:inherit;margin-top:-4px;margin-bottom:-4px}.v-toolbar__content>.v-tabs>.v-slide-group.v-tabs-bar,.v-toolbar__extension>.v-tabs>.v-slide-group.v-tabs-bar{background-color:inherit;height:inherit}.v-toolbar__content>.v-tabs:first-child,.v-toolbar__extension>.v-tabs:first-child{margin-left:-16px}.v-toolbar__content>.v-tabs:last-child,.v-toolbar__extension>.v-tabs:last-child{margin-right:-16px}.v-toolbar__content,.v-toolbar__extension{align-items:center;display:flex;position:relative;z-index:0}.v-toolbar__image{position:absolute;top:0;bottom:0;width:100%;z-index:0;contain:strict}.v-toolbar__image,.v-toolbar__image .v-image{border-radius:inherit}.v-toolbar__items{display:flex;height:inherit}.v-toolbar__items>.v-btn{border-radius:0;height:100%!important;max-height:none}.v-toolbar__title{font-size:1.25rem;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-toolbar.v-toolbar--absolute{position:absolute;top:0;z-index:1}.v-toolbar.v-toolbar--bottom{top:auto;bottom:0}.v-toolbar.v-toolbar--collapse .v-toolbar__title{white-space:nowrap}.v-toolbar.v-toolbar--collapsed{max-width:112px;overflow:hidden}.v-application--is-ltr .v-toolbar.v-toolbar--collapsed{border-bottom-right-radius:24px}.v-application--is-rtl .v-toolbar.v-toolbar--collapsed{border-bottom-left-radius:24px}.v-toolbar.v-toolbar--collapsed .v-toolbar__extension,.v-toolbar.v-toolbar--collapsed .v-toolbar__title{display:none}.v-toolbar--dense .v-toolbar__content,.v-toolbar--dense .v-toolbar__extension{padding-top:0;padding-bottom:0}.v-toolbar--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-toolbar--floating{display:inline-flex}.v-toolbar--prominent .v-toolbar__content{align-items:flex-start}.v-toolbar--prominent .v-toolbar__title{font-size:1.5rem;padding-top:6px}.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{align-self:flex-end;padding-bottom:6px;padding-top:0}.theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-sheet--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-sheet{background-color:#1e1e1e;border-color:#1e1e1e;color:#fff}.theme--dark.v-sheet--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-sheet{border-radius:0}.v-sheet:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-sheet--shaped{border-radius:24px 0}.theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}.v-btn:not(.v-btn--outlined).accent,.v-btn:not(.v-btn--outlined).error,.v-btn:not(.v-btn--outlined).info,.v-btn:not(.v-btn--outlined).primary,.v-btn:not(.v-btn--outlined).secondary,.v-btn:not(.v-btn--outlined).success,.v-btn:not(.v-btn--outlined).warning{color:#fff}.theme--light.v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn.v-btn--disabled,.theme--light.v-btn.v-btn--disabled .v-btn__loading,.theme--light.v-btn.v-btn--disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--light.v-btn.v-btn--disabled.v-btn--has-bg{background-color:rgba(0,0,0,.12)!important}.theme--light.v-btn.v-btn--has-bg{background-color:#f5f5f5}.theme--light.v-btn.v-btn--outlined.v-btn--text{border-color:rgba(0,0,0,.12)}.theme--light.v-btn.v-btn--icon{color:rgba(0,0,0,.54)}.theme--light.v-btn:hover:before{opacity:.08}.theme--light.v-btn:focus:before{opacity:.24}.theme--light.v-btn--active:before,.theme--light.v-btn--active:hover:before{opacity:.18}.theme--light.v-btn--active:focus:before{opacity:.16}.theme--dark.v-btn{color:#fff}.theme--dark.v-btn.v-btn--disabled,.theme--dark.v-btn.v-btn--disabled .v-btn__loading,.theme--dark.v-btn.v-btn--disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn.v-btn--has-bg{background-color:#272727}.theme--dark.v-btn.v-btn--outlined.v-btn--text{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-btn.v-btn--icon{color:#fff}.theme--dark.v-btn:hover:before{opacity:.08}.theme--dark.v-btn:focus:before{opacity:.24}.theme--dark.v-btn--active:before,.theme--dark.v-btn--active:hover:before{opacity:.18}.theme--dark.v-btn--active:focus:before{opacity:.32}.v-btn{align-items:center;border-radius:4px;display:inline-flex;flex:0 0 auto;font-weight:500;letter-spacing:.0892857143em;justify-content:center;outline:0;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.v-btn.v-size--x-small{font-size:.625rem}.v-btn.v-size--small{font-size:.75rem}.v-btn.v-size--default,.v-btn.v-size--large{font-size:.875rem}.v-btn.v-size--x-large{font-size:1rem}.v-btn:before{background-color:currentColor;border-radius:inherit;bottom:0;color:inherit;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-btn:not(.v-btn--disabled){will-change:box-shadow}.v-btn:not(.v-btn--round).v-size--x-small{height:20px;min-width:36px;padding:0 8.8888888889px}.v-btn:not(.v-btn--round).v-size--small{height:28px;min-width:50px;padding:0 12.4444444444px}.v-btn:not(.v-btn--round).v-size--default{height:36px;min-width:64px;padding:0 16px}.v-btn:not(.v-btn--round).v-size--large{height:44px;min-width:78px;padding:0 19.5555555556px}.v-btn:not(.v-btn--round).v-size--x-large{height:52px;min-width:92px;padding:0 23.1111111111px}.v-btn>.v-btn__content .v-icon{color:inherit}.v-btn__content{align-items:center;color:inherit;display:flex;flex:1 0 auto;justify-content:inherit;line-height:normal;position:relative;transition:inherit;transition-property:opacity}.v-btn__content .v-icon.v-icon--left,.v-btn__content .v-icon.v-icon--right{font-size:18px;height:18px;width:18px}.v-application--is-ltr .v-btn__content .v-icon--left{margin-left:-4px;margin-right:8px}.v-application--is-ltr .v-btn__content .v-icon--right,.v-application--is-rtl .v-btn__content .v-icon--left{margin-left:8px;margin-right:-4px}.v-application--is-rtl .v-btn__content .v-icon--right{margin-left:-4px;margin-right:8px}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn--absolute.v-btn--right,.v-btn--fixed.v-btn--right{right:16px}.v-btn--absolute.v-btn--left,.v-btn--fixed.v-btn--left{left:16px}.v-btn--absolute.v-btn--top,.v-btn--fixed.v-btn--top{top:16px}.v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:16px}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%!important;max-width:auto}.v-btn--is-elevated{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-btn--is-elevated:after{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-btn--is-elevated:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab:after{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.v-btn--disabled{pointer-events:none}.v-btn--fab,.v-btn--icon{min-height:0;min-width:0;padding:0}.v-btn--fab.v-size--x-small .v-icon,.v-btn--icon.v-size--x-small .v-icon{height:18px;font-size:18px;width:18px}.v-btn--fab.v-size--default .v-icon,.v-btn--fab.v-size--small .v-icon,.v-btn--icon.v-size--default .v-icon,.v-btn--icon.v-size--small .v-icon{height:24px;font-size:24px;width:24px}.v-btn--fab.v-size--large .v-icon,.v-btn--icon.v-size--large .v-icon{height:28px;font-size:28px;width:28px}.v-btn--fab.v-size--x-large .v-icon,.v-btn--icon.v-size--x-large .v-icon{height:32px;font-size:32px;width:32px}.v-btn--icon.v-size--x-small{height:20px;width:20px}.v-btn--icon.v-size--small{height:28px;width:28px}.v-btn--icon.v-size--default{height:36px;width:36px}.v-btn--icon.v-size--large{height:44px;width:44px}.v-btn--icon.v-size--x-large{height:52px;width:52px}.v-btn--fab.v-btn--absolute,.v-btn--fab.v-btn--fixed{z-index:4}.v-btn--fab.v-size--x-small{height:32px;width:32px}.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--bottom{bottom:-16px}.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--top{top:-16px}.v-btn--fab.v-size--small{height:40px;width:40px}.v-btn--fab.v-size--small.v-btn--absolute.v-btn--bottom{bottom:-20px}.v-btn--fab.v-size--small.v-btn--absolute.v-btn--top{top:-20px}.v-btn--fab.v-size--default{height:56px;width:56px}.v-btn--fab.v-size--default.v-btn--absolute.v-btn--bottom{bottom:-28px}.v-btn--fab.v-size--default.v-btn--absolute.v-btn--top{top:-28px}.v-btn--fab.v-size--large{height:64px;width:64px}.v-btn--fab.v-size--large.v-btn--absolute.v-btn--bottom{bottom:-32px}.v-btn--fab.v-size--large.v-btn--absolute.v-btn--top{top:-32px}.v-btn--fab.v-size--x-large{height:72px;width:72px}.v-btn--fab.v-size--x-large.v-btn--absolute.v-btn--bottom{bottom:-36px}.v-btn--fab.v-size--x-large.v-btn--absolute.v-btn--top{top:-36px}.v-btn--loading{pointer-events:none;transition:none}.v-btn--loading .v-btn__content{opacity:0}.v-btn--outlined{border:thin solid}.v-btn--plain:before{display:none}.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content{opacity:.62}.v-btn--round{border-radius:50%}.v-btn--rounded{border-radius:28px}.v-btn--tile{border-radius:0}.v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{transition:none}.v-ripple__animation--in{transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(.4,0,.2,1)}.v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:\"liga\";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:\"\";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:\"\";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:\"\";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}.theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.42)}.theme--light.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.87)}.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat}.theme--light.v-text-field--filled>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.12)}.theme--light.v-text-field--solo>.v-input__control>.v-input__slot{background:#fff}.theme--light.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#424242}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:#fff}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:hsla(0,0%,100%,.7)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.38)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:rgba(0,0,0,.86)}.theme--light.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.26)}.theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:#fff}.theme--dark.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat}.theme--dark.v-text-field--filled>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.08)}.theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{background:#1e1e1e}.theme--dark.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#fff}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:rgba(0,0,0,.87)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:rgba(0,0,0,.6)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.24)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:#fff}.theme--dark.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.16)}.v-text-field{padding-top:12px;margin-top:4px}.v-text-field__prefix,.v-text-field__suffix{line-height:20px}.v-text-field input{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%}.v-text-field .v-input__control,.v-text-field .v-input__slot,.v-text-field fieldset{border-radius:inherit}.v-text-field.v-input--has-state .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-messages,.v-text-field .v-input__control,.v-text-field fieldset{color:inherit}.v-text-field.v-input--dense{padding-top:0}.v-text-field.v-input--dense .v-label{top:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:4px 0 2px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix{padding-right:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix{padding-left:4px}.v-text-field.v-input--dense[type=text]::-ms-clear{display:none}.v-text-field.v-input--dense .v-input__append-inner,.v-text-field.v-input--dense .v-input__prepend-inner{margin-top:0}.v-text-field .v-input__append-inner,.v-text-field .v-input__prepend-inner{align-self:flex-start;display:inline-flex;margin-top:4px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-text-field .v-input__prepend-inner{margin-right:auto;padding-right:4px}.v-application--is-ltr .v-text-field .v-input__append-inner,.v-application--is-rtl .v-text-field .v-input__prepend-inner{margin-left:auto;padding-left:4px}.v-application--is-rtl .v-text-field .v-input__append-inner{margin-right:auto;padding-right:4px}.v-text-field .v-counter{white-space:nowrap}.v-application--is-ltr .v-text-field .v-counter{margin-left:8px}.v-application--is-rtl .v-text-field .v-counter{margin-right:8px}.v-text-field .v-label{max-width:90%;overflow:hidden;text-overflow:ellipsis;top:6px;white-space:nowrap;pointer-events:none}.v-application--is-ltr .v-text-field .v-label{transform-origin:top left}.v-application--is-rtl .v-text-field .v-label{transform-origin:top right}.v-text-field .v-label--active{max-width:133%;transform:translateY(-18px) scale(.75);pointer-events:auto}.v-text-field>.v-input__control>.v-input__slot{cursor:text}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{bottom:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-text-field>.v-input__control>.v-input__slot:before{border-color:inherit;border-style:solid;border-width:thin 0 0}.v-text-field>.v-input__control>.v-input__slot:after{background-color:currentColor;border-color:currentcolor;border-style:solid;border-width:thin 0;transform:scaleX(0)}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.v-text-field__prefix,.v-text-field__suffix{align-self:center;cursor:default;transition:color .3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-text-field__prefix{text-align:right;padding-right:4px}.v-application--is-rtl .v-text-field__prefix{text-align:left;padding-left:4px}.v-text-field__suffix{white-space:nowrap}.v-application--is-ltr .v-text-field__suffix{padding-left:4px}.v-application--is-rtl .v-text-field__suffix{padding-right:4px}.v-application--is-ltr .v-text-field--reverse .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__prefix{text-align:right;padding-right:4px;padding-left:0}.v-application--is-ltr .v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__suffix{padding-left:4px;padding-right:0}.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot{display:flex;flex:1 1 auto;position:relative}.v-text-field:not(.v-text-field--is-booted) .v-label,.v-text-field:not(.v-text-field--is-booted) legend{transition:none}.v-text-field--filled,.v-text-field--full-width,.v-text-field--outlined{position:relative}.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width>.v-input__control>.v-input__slot,.v-text-field--outlined>.v-input__control>.v-input__slot{align-items:stretch;min-height:56px}.v-text-field--filled.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot{min-height:52px}.v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:40px}.v-text-field--outlined{border-radius:4px}.v-text-field--enclosed .v-input__append-inner,.v-text-field--enclosed .v-input__append-outer,.v-text-field--enclosed .v-input__prepend-inner,.v-text-field--enclosed .v-input__prepend-outer,.v-text-field--full-width .v-input__append-inner,.v-text-field--full-width .v-input__append-outer,.v-text-field--full-width .v-input__prepend-inner,.v-text-field--full-width .v-input__prepend-outer{margin-top:17px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer{margin-top:14px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer{margin-top:9px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer{margin-top:8px}.v-text-field--filled .v-label,.v-text-field--full-width .v-label{top:18px}.v-text-field--filled .v-label--active,.v-text-field--full-width .v-label--active{transform:translateY(-6px) scale(.75)}.v-text-field--filled.v-input--dense .v-label,.v-text-field--full-width.v-input--dense .v-label{top:17px}.v-text-field--filled.v-input--dense .v-label--active,.v-text-field--full-width.v-input--dense .v-label--active{transform:translateY(-10px) scale(.75)}.v-text-field--filled.v-input--dense.v-text-field--single-line .v-label,.v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label{top:11px}.v-text-field--filled{border-radius:4px 4px 0 0}.v-text-field--filled:not(.v-text-field--single-line) input{margin-top:22px}.v-text-field--filled.v-input--dense:not(.v-text-field--single-line).v-text-field--outlined input{margin-top:0}.v-text-field--filled .v-text-field__prefix,.v-text-field--filled .v-text-field__suffix{max-height:32px;margin-top:20px}.v-text-field--full-width{border-radius:0}.v-text-field--outlined .v-text-field__slot,.v-text-field--single-line .v-text-field__slot{align-items:center}.v-text-field.v-text-field--enclosed{margin:0;padding:0}.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__suffix{margin-top:0}.v-text-field.v-text-field--enclosed:not(.v-text-field--filled) .v-progress-linear__background{display:none}.v-text-field.v-text-field--enclosed .v-text-field__details,.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot{padding:0 12px}.v-text-field.v-text-field--enclosed .v-text-field__details{padding-top:0;margin-bottom:8px}.v-application--is-ltr .v-text-field--reverse input{text-align:right}.v-application--is-rtl .v-text-field--reverse input{text-align:left}.v-application--is-ltr .v-text-field--reverse .v-label{transform-origin:top right}.v-application--is-rtl .v-text-field--reverse .v-label{transform-origin:top left}.v-text-field--reverse .v-text-field__slot,.v-text-field--reverse>.v-input__control>.v-input__slot{flex-direction:row-reverse}.v-text-field--outlined>.v-input__control>.v-input__slot:after,.v-text-field--outlined>.v-input__control>.v-input__slot:before,.v-text-field--rounded>.v-input__control>.v-input__slot:after,.v-text-field--rounded>.v-input__control>.v-input__slot:before,.v-text-field--solo>.v-input__control>.v-input__slot:after,.v-text-field--solo>.v-input__control>.v-input__slot:before{display:none}.v-text-field--outlined,.v-text-field--solo{border-radius:4px}.v-text-field--outlined{margin-bottom:16px;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outlined .v-label{top:18px}.v-text-field--outlined .v-label--active{transform:translateY(-24px) scale(.75)}.v-text-field--outlined.v-input--dense .v-label{top:10px}.v-text-field--outlined.v-input--dense .v-label--active{transform:translateY(-16px) scale(.75)}.v-text-field--outlined fieldset{border-collapse:collapse;border:1px solid;bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:-5px;transition-duration:.3s;transition-property:color,border-width;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-text-field--outlined fieldset{padding-left:8px}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse fieldset,.v-application--is-rtl .v-text-field--outlined fieldset{padding-right:8px}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse fieldset{padding-left:8px}.v-text-field--outlined legend{line-height:11px;padding:0;transition:width .3s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-text-field--outlined legend{text-align:left}.v-application--is-rtl .v-text-field--outlined legend{text-align:right}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse legend{margin-left:auto}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse legend{margin-right:auto}.v-application--is-ltr .v-text-field--outlined.v-text-field--rounded legend{margin-left:12px}.v-application--is-rtl .v-text-field--outlined.v-text-field--rounded legend{margin-right:12px}.v-text-field--outlined>.v-input__control>.v-input__slot{background:transparent}.v-text-field--outlined .v-text-field__prefix{max-height:32px}.v-text-field--outlined .v-input__append-outer,.v-text-field--outlined .v-input__prepend-outer{margin-top:18px}.v-text-field--outlined.v-input--has-state fieldset,.v-text-field--outlined.v-input--is-focused fieldset{border:2px solid}.v-text-field--rounded{border-radius:28px}.v-text-field--rounded>.v-input__control>.v-input__slot{padding:0 24px}.v-text-field--shaped{border-radius:16px 16px 0 0}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px)}.v-text-field.v-text-field--solo .v-input__control{min-height:48px;padding:0}.v-text-field.v-text-field--solo .v-input__control input{caret-color:auto}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:38px}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-text-field.v-text-field--solo .v-input__append-inner,.v-text-field.v-text-field--solo .v-input__prepend-inner{align-self:center;margin-top:0}.v-text-field.v-text-field--solo .v-input__append-outer,.v-text-field.v-text-field--solo .v-input__prepend-outer{margin-top:12px}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:7px}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{transform:scaleX(1)}.v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:currentColor}.theme--light.v-select .v-select__selections{color:rgba(0,0,0,.87);min-height:10px}.theme--light.v-select.v-input--is-disabled .v-select__selections,.theme--light.v-select .v-select__selection--disabled{color:rgba(0,0,0,.38)}.theme--light.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections{color:#fff}.theme--dark.v-select .v-select__selections{color:#fff;min-height:10px}.theme--dark.v-select.v-input--is-disabled .v-select__selections,.theme--dark.v-select .v-select__selection--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections{color:rgba(0,0,0,.87)}.v-select{position:relative}.v-select:not(.v-select--is-multi).v-text-field--single-line .v-select__selections{flex-wrap:nowrap}.v-select>.v-input__control>.v-input__slot{cursor:pointer}.v-select .v-chip{flex:0 1 auto;margin:4px}.v-select .v-chip--selected:after{opacity:.22}.v-select .fade-transition-leave-active{position:absolute;left:0}.v-select.v-input--is-dirty ::-moz-placeholder{color:transparent!important}.v-select.v-input--is-dirty :-ms-input-placeholder{color:transparent!important}.v-select.v-input--is-dirty ::placeholder{color:transparent!important}.v-select:not(.v-input--is-dirty):not(.v-input--is-focused) .v-text-field__prefix{line-height:20px;top:7px;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-select.v-text-field--enclosed:not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__selections{padding-top:20px}.v-select.v-text-field--outlined:not(.v-text-field--single-line) .v-select__selections{padding:8px 0}.v-select.v-text-field--outlined:not(.v-text-field--single-line).v-input--dense .v-select__selections{padding:4px 0}.v-select.v-text-field input{flex:1 1;min-width:0;pointer-events:none;position:relative}.v-select.v-text-field:not(.v-text-field--single-line) input{margin-top:0}.v-select.v-select--is-menu-active .v-input__icon--append .v-icon{transform:rotate(180deg)}.v-select.v-select--chips input{margin:0}.v-select.v-select--chips .v-select__selections{min-height:42px}.v-select.v-select--chips.v-input--dense .v-select__selections{min-height:40px}.v-select.v-select--chips .v-chip--select.v-chip--active:before{opacity:.2}.v-select.v-select--chips.v-select--chips--small .v-select__selections{min-height:26px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections{min-height:68px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-input--dense .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-input--dense .v-select__selections{min-height:40px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small .v-select__selections{min-height:26px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small.v-input--dense .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small.v-input--dense .v-select__selections{min-height:38px}.v-select.v-text-field--reverse .v-select__selections,.v-select.v-text-field--reverse .v-select__slot{flex-direction:row-reverse}.v-select__selections{align-items:center;display:flex;flex:1 1;flex-wrap:wrap;line-height:18px;max-width:100%;min-width:0}.v-select__selection{max-width:90%}.v-select__selection--comma{margin:7px 4px 7px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select.v-input--dense .v-select__selection--comma{margin:5px 4px 3px 0}.v-select.v-input--dense .v-chip{margin:0 4px}.v-select__slot{position:relative;align-items:center;display:flex;max-width:100%;min-width:0;width:100%}.v-select:not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{align-self:flex-end}.theme--light.v-input,.theme--light.v-input input,.theme--light.v-input textarea{color:rgba(0,0,0,.87)}.theme--light.v-input input::-moz-placeholder,.theme--light.v-input textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input:-ms-input-placeholder,.theme--light.v-input textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input::-moz-placeholder, .theme--light.v-input textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input:-ms-input-placeholder, .theme--light.v-input textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input::placeholder,.theme--light.v-input textarea::placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input--is-disabled,.theme--light.v-input--is-disabled input,.theme--light.v-input--is-disabled textarea{color:rgba(0,0,0,.38)}.theme--dark.v-input,.theme--dark.v-input input,.theme--dark.v-input textarea{color:#fff}.theme--dark.v-input input::-moz-placeholder,.theme--dark.v-input textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input:-ms-input-placeholder,.theme--dark.v-input textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input::-moz-placeholder, .theme--dark.v-input textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input:-ms-input-placeholder, .theme--dark.v-input textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input::placeholder,.theme--dark.v-input textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input--is-disabled,.theme--dark.v-input--is-disabled input,.theme--dark.v-input--is-disabled textarea{color:hsla(0,0%,100%,.5)}.v-input{align-items:flex-start;display:flex;flex:1 1 auto;font-size:16px;letter-spacing:normal;max-width:100%;text-align:left}.v-input .v-progress-linear{top:calc(100% - 1px);left:0}.v-input input{max-height:32px}.v-input input:invalid,.v-input textarea:invalid{box-shadow:none}.v-input input:active,.v-input input:focus,.v-input textarea:active,.v-input textarea:focus{outline:none}.v-input .v-label{height:20px;line-height:20px;letter-spacing:normal}.v-input__append-outer,.v-input__prepend-outer{display:inline-flex;margin-bottom:4px;margin-top:4px;line-height:1}.v-input__append-outer .v-icon,.v-input__prepend-outer .v-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-input__append-outer{margin-left:9px}.v-application--is-ltr .v-input__prepend-outer,.v-application--is-rtl .v-input__append-outer{margin-right:9px}.v-application--is-rtl .v-input__prepend-outer{margin-left:9px}.v-input__control{display:flex;flex-direction:column;height:auto;flex-grow:1;flex-wrap:wrap;min-width:0;width:100%}.v-input__icon{align-items:center;display:inline-flex;height:24px;flex:1 0 auto;justify-content:center;min-width:24px;width:24px}.v-input__icon--clear{border-radius:50%}.v-input__icon--clear .v-icon--disabled{visibility:hidden}.v-input__slot{align-items:center;color:inherit;display:flex;margin-bottom:8px;min-height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-input--dense>.v-input__control>.v-input__slot{margin-bottom:4px}.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--is-loading>.v-input__control>.v-input__slot:after,.v-input--is-loading>.v-input__control>.v-input__slot:before{display:none}.v-input--hide-details>.v-input__control>.v-input__slot{margin-bottom:0}.v-input--has-state.error--text .v-label{-webkit-animation:v-shake .6s cubic-bezier(.25,.8,.5,1);animation:v-shake .6s cubic-bezier(.25,.8,.5,1)}.theme--light.v-label{color:rgba(0,0,0,.6)}.theme--light.v-label--is-disabled{color:rgba(0,0,0,.38)}.theme--dark.v-label{color:hsla(0,0%,100%,.7)}.theme--dark.v-label--is-disabled{color:hsla(0,0%,100%,.5)}.v-label{font-size:16px;line-height:1;min-height:8px;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--light.v-messages{color:rgba(0,0,0,.6)}.theme--dark.v-messages{color:hsla(0,0%,100%,.7)}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;position:relative}.v-application--is-ltr .v-messages{text-align:left}.v-application--is-rtl .v-messages{text-align:right}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}.theme--light.v-counter{color:rgba(0,0,0,.6)}.theme--dark.v-counter{color:hsla(0,0%,100%,.7)}.v-counter{flex:0 1 auto;font-size:12px;min-height:12px;line-height:12px}.theme--light.v-list-item--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){color:rgba(0,0,0,.87)!important}.theme--light.v-list-item .v-list-item__mask{color:rgba(0,0,0,.38);background:#eee}.theme--light.v-list-item .v-list-item__action-text,.theme--light.v-list-item .v-list-item__subtitle{color:rgba(0,0,0,.6)}.theme--light.v-list-item:hover:before{opacity:.04}.theme--light.v-list-item--active:before,.theme--light.v-list-item--active:hover:before,.theme--light.v-list-item:focus:before{opacity:.12}.theme--light.v-list-item--active:focus:before,.theme--light.v-list-item.v-list-item--highlighted:before{opacity:.16}.theme--dark.v-list-item--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){color:#fff!important}.theme--dark.v-list-item .v-list-item__mask{color:hsla(0,0%,100%,.5);background:#494949}.theme--dark.v-list-item .v-list-item__action-text,.theme--dark.v-list-item .v-list-item__subtitle{color:hsla(0,0%,100%,.7)}.theme--dark.v-list-item:hover:before{opacity:.08}.theme--dark.v-list-item--active:before,.theme--dark.v-list-item--active:hover:before,.theme--dark.v-list-item:focus:before{opacity:.24}.theme--dark.v-list-item--active:focus:before,.theme--dark.v-list-item.v-list-item--highlighted:before{opacity:.32}.v-list-item{align-items:center;display:flex;flex:1 1 100%;letter-spacing:normal;min-height:48px;outline:none;padding:0 16px;position:relative;text-decoration:none}.v-list-item--disabled{pointer-events:none}.v-list-item--selectable{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.v-list-item:after{content:\"\";min-height:inherit;font-size:0}.v-list-item__action{align-self:center;margin:12px 0}.v-list-item__action .v-input,.v-list-item__action .v-input--selection-controls__input,.v-list-item__action .v-input__control,.v-list-item__action .v-input__slot{margin:0!important}.v-list-item__action .v-input{padding:0}.v-list-item__action .v-input .v-messages{display:none}.v-list-item__action-text{font-size:.75rem}.v-list-item__avatar{align-self:center;justify-content:flex-start}.v-list-item__avatar,.v-list-item__avatar.v-list-item__avatar--horizontal{margin-bottom:8px;margin-top:8px}.v-application--is-ltr .v-list-item__avatar.v-list-item__avatar--horizontal:first-child{margin-left:-16px}.v-application--is-rtl .v-list-item__avatar.v-list-item__avatar--horizontal:first-child{margin-right:-16px}.v-application--is-ltr .v-list-item__avatar.v-list-item__avatar--horizontal:last-child{margin-left:-16px}.v-application--is-rtl .v-list-item__avatar.v-list-item__avatar--horizontal:last-child{margin-right:-16px}.v-list-item__content{align-items:center;align-self:center;display:flex;flex-wrap:wrap;flex:1 1;overflow:hidden;padding:12px 0}.v-list-item__content>*{line-height:1.1;flex:1 0 100%}.v-list-item__content>:not(:last-child){margin-bottom:2px}.v-list-item__icon{align-self:flex-start;margin:16px 0}.v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child),.v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child),.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child){margin-left:16px}.v-application--is-ltr .v-list-item__avatar:first-child,.v-application--is-rtl .v-list-item__action:last-of-type:not(:only-child),.v-application--is-rtl .v-list-item__avatar:last-of-type:not(:only-child),.v-application--is-rtl .v-list-item__icon:last-of-type:not(:only-child){margin-right:16px}.v-application--is-rtl .v-list-item__avatar:first-child{margin-left:16px}.v-application--is-ltr .v-list-item__action:first-child,.v-application--is-ltr .v-list-item__icon:first-child{margin-right:32px}.v-application--is-rtl .v-list-item__action:first-child,.v-application--is-rtl .v-list-item__icon:first-child{margin-left:32px}.v-list-item__action,.v-list-item__avatar,.v-list-item__icon{display:inline-flex;min-width:24px}.v-list-item .v-list-item__subtitle,.v-list-item .v-list-item__title{line-height:1.2}.v-list-item__subtitle,.v-list-item__title{flex:1 1 100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list-item__title{align-self:center;font-size:1rem}.v-list-item__title>.v-badge{margin-top:16px}.v-list-item__subtitle{font-size:.875rem}.v-list--dense .v-list-item,.v-list-item--dense{min-height:40px}.v-list--dense .v-list-item .v-list-item__icon,.v-list-item--dense .v-list-item__icon{height:24px;margin-top:8px;margin-bottom:8px}.v-list--dense .v-list-item .v-list-item__content,.v-list-item--dense .v-list-item__content{padding:8px 0}.v-list--dense .v-list-item .v-list-item__subtitle,.v-list--dense .v-list-item .v-list-item__title,.v-list-item--dense .v-list-item__subtitle,.v-list-item--dense .v-list-item__title{font-size:.8125rem;font-weight:500;line-height:1rem}.v-list--dense .v-list-item.v-list-item--two-line,.v-list-item--dense.v-list-item--two-line{min-height:60px}.v-list--dense .v-list-item.v-list-item--three-line,.v-list-item--dense.v-list-item--three-line{min-height:76px}.v-list-item--link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list-item--link:before{background-color:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-list .v-list-item--active,.v-list .v-list-item--active .v-icon{color:inherit}.v-list-item__action--stack{align-items:flex-end;align-self:stretch;justify-content:space-between;white-space:nowrap;flex-direction:column}.v-list--three-line .v-list-item .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list--three-line .v-list-item .v-list-item__icon,.v-list--two-line .v-list-item .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list--two-line .v-list-item .v-list-item__icon,.v-list-item--three-line .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list-item--three-line .v-list-item__icon,.v-list-item--two-line .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list-item--two-line .v-list-item__icon{margin-bottom:16px;margin-top:16px}.v-list--two-line .v-list-item,.v-list-item--two-line{min-height:64px}.v-list--two-line .v-list-item .v-list-item__icon,.v-list-item--two-line .v-list-item__icon{margin-bottom:32px}.v-list--three-line .v-list-item,.v-list-item--three-line{min-height:88px}.v-list--three-line .v-list-item .v-list-item__action,.v-list--three-line .v-list-item .v-list-item__avatar,.v-list-item--three-line .v-list-item__action,.v-list-item--three-line .v-list-item__avatar{align-self:flex-start;margin-top:16px;margin-bottom:16px}.v-list--three-line .v-list-item .v-list-item__content,.v-list-item--three-line .v-list-item__content{align-self:stretch}.v-list--three-line .v-list-item .v-list-item__subtitle,.v-list-item--three-line .v-list-item__subtitle{white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box}.v-simple-checkbox{align-self:center;line-height:normal;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-simple-checkbox .v-icon{cursor:pointer}.v-simple-checkbox--disabled{cursor:default}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}.theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}.v-list.accent>.v-list-item,.v-list.error>.v-list-item,.v-list.info>.v-list-item,.v-list.primary>.v-list-item,.v-list.secondary>.v-list-item,.v-list.success>.v-list-item,.v-list.warning>.v-list-item{color:#fff}.theme--light.v-list{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-list .v-list--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list .v-list-group--active:after,.theme--light.v-list .v-list-group--active:before{background:rgba(0,0,0,.12)}.theme--dark.v-list{background:#1e1e1e;color:#fff}.theme--dark.v-list .v-list--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list .v-list-group--active:after,.theme--dark.v-list .v-list-group--active:before{background:hsla(0,0%,100%,.12)}.v-sheet.v-list{border-radius:0}.v-sheet.v-list:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-list.v-sheet--shaped{border-radius:0}.v-list{display:block;padding:8px 0;position:static;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}.v-list--disabled{pointer-events:none}.v-list--flat .v-list-item:before{display:none}.v-list--dense .v-subheader{font-size:.75rem;height:40px;padding:0 8px}.v-list--nav .v-list-item:not(:last-child):not(:only-child),.v-list--rounded .v-list-item:not(:last-child):not(:only-child){margin-bottom:8px}.v-list--nav.v-list--dense .v-list-item:not(:last-child):not(:only-child),.v-list--nav .v-list-item--dense:not(:last-child):not(:only-child),.v-list--rounded.v-list--dense .v-list-item:not(:last-child):not(:only-child),.v-list--rounded .v-list-item--dense:not(:last-child):not(:only-child){margin-bottom:4px}.v-list--nav{padding-left:8px;padding-right:8px}.v-list--nav .v-list-item{padding:0 8px}.v-list--nav .v-list-item,.v-list--nav .v-list-item:before{border-radius:4px}.v-application--is-ltr .v-list.v-sheet--shaped .v-list-item,.v-application--is-ltr .v-list.v-sheet--shaped .v-list-item:before,.v-application--is-ltr .v-list.v-sheet--shaped .v-list-item>.v-ripple__container{border-bottom-right-radius:32px!important;border-top-right-radius:32px!important}.v-application--is-rtl .v-list.v-sheet--shaped .v-list-item,.v-application--is-rtl .v-list.v-sheet--shaped .v-list-item:before,.v-application--is-rtl .v-list.v-sheet--shaped .v-list-item>.v-ripple__container{border-bottom-left-radius:32px!important;border-top-left-radius:32px!important}.v-application--is-ltr .v-list.v-sheet--shaped.v-list--two-line .v-list-item,.v-application--is-ltr .v-list.v-sheet--shaped.v-list--two-line .v-list-item:before,.v-application--is-ltr .v-list.v-sheet--shaped.v-list--two-line .v-list-item>.v-ripple__container{border-bottom-right-radius:42.6666666667px!important;border-top-right-radius:42.6666666667px!important}.v-application--is-rtl .v-list.v-sheet--shaped.v-list--two-line .v-list-item,.v-application--is-rtl .v-list.v-sheet--shaped.v-list--two-line .v-list-item:before,.v-application--is-rtl .v-list.v-sheet--shaped.v-list--two-line .v-list-item>.v-ripple__container{border-bottom-left-radius:42.6666666667px!important;border-top-left-radius:42.6666666667px!important}.v-application--is-ltr .v-list.v-sheet--shaped.v-list--three-line .v-list-item,.v-application--is-ltr .v-list.v-sheet--shaped.v-list--three-line .v-list-item:before,.v-application--is-ltr .v-list.v-sheet--shaped.v-list--three-line .v-list-item>.v-ripple__container{border-bottom-right-radius:58.6666666667px!important;border-top-right-radius:58.6666666667px!important}.v-application--is-rtl .v-list.v-sheet--shaped.v-list--three-line .v-list-item,.v-application--is-rtl .v-list.v-sheet--shaped.v-list--three-line .v-list-item:before,.v-application--is-rtl .v-list.v-sheet--shaped.v-list--three-line .v-list-item>.v-ripple__container{border-bottom-left-radius:58.6666666667px!important;border-top-left-radius:58.6666666667px!important}.v-application--is-ltr .v-list.v-sheet--shaped{padding-right:8px}.v-application--is-rtl .v-list.v-sheet--shaped{padding-left:8px}.v-list--rounded{padding:8px}.v-list--rounded .v-list-item,.v-list--rounded .v-list-item:before,.v-list--rounded .v-list-item>.v-ripple__container{border-radius:32px!important}.v-list--rounded.v-list--two-line .v-list-item,.v-list--rounded.v-list--two-line .v-list-item:before,.v-list--rounded.v-list--two-line .v-list-item>.v-ripple__container{border-radius:42.6666666667px!important}.v-list--rounded.v-list--three-line .v-list-item,.v-list--rounded.v-list--three-line .v-list-item:before,.v-list--rounded.v-list--three-line .v-list-item>.v-ripple__container{border-radius:58.6666666667px!important}.v-list--subheader{padding-top:0}.v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon{align-self:center;margin:0;min-width:48px;justify-content:flex-end}.v-list-group--sub-group{align-items:center;display:flex;flex-wrap:wrap}.v-list-group__header.v-list-item--active:not(:hover):not(:focus):before{opacity:0}.v-list-group__items{flex:1 1 auto}.v-list-group__items .v-list-group__items,.v-list-group__items .v-list-item{overflow:hidden}.v-list-group--active>.v-list-group__header.v-list-group__header--sub-group>.v-list-group__header__prepend-icon .v-icon,.v-list-group--active>.v-list-group__header>.v-list-group__header__append-icon .v-icon{transform:rotate(-180deg)}.v-list-group--active>.v-list-group__header .v-list-group__header__prepend-icon .v-icon,.v-list-group--active>.v-list-group__header .v-list-item,.v-list-group--active>.v-list-group__header .v-list-item__content{color:inherit}.v-application--is-ltr .v-list-group--sub-group .v-list-item__action:first-child,.v-application--is-ltr .v-list-group--sub-group .v-list-item__avatar:first-child,.v-application--is-ltr .v-list-group--sub-group .v-list-item__icon:first-child{margin-right:16px}.v-application--is-rtl .v-list-group--sub-group .v-list-item__action:first-child,.v-application--is-rtl .v-list-group--sub-group .v-list-item__avatar:first-child,.v-application--is-rtl .v-list-group--sub-group .v-list-item__icon:first-child{margin-left:16px}.v-application--is-ltr .v-list-group--sub-group .v-list-group__header{padding-left:32px}.v-application--is-rtl .v-list-group--sub-group .v-list-group__header{padding-right:32px}.v-application--is-ltr .v-list-group--sub-group .v-list-group__items .v-list-item{padding-left:40px}.v-application--is-rtl .v-list-group--sub-group .v-list-group__items .v-list-item{padding-right:40px}.v-list-group--sub-group.v-list-group--active .v-list-item__icon.v-list-group__header__prepend-icon .v-icon{transform:rotate(-180deg)}.v-application--is-ltr .v-list-group--no-action>.v-list-group__items>.v-list-item{padding-left:72px}.v-application--is-rtl .v-list-group--no-action>.v-list-group__items>.v-list-item{padding-right:72px}.v-application--is-ltr .v-list-group--no-action.v-list-group--sub-group>.v-list-group__items>.v-list-item{padding-left:88px}.v-application--is-rtl .v-list-group--no-action.v-list-group--sub-group>.v-list-group__items>.v-list-item{padding-right:88px}.v-application--is-ltr .v-list--dense .v-list-group--sub-group .v-list-group__header{padding-left:24px}.v-application--is-rtl .v-list--dense .v-list-group--sub-group .v-list-group__header{padding-right:24px}.v-application--is-ltr .v-list--dense.v-list--nav .v-list-group--no-action>.v-list-group__items>.v-list-item{padding-left:64px}.v-application--is-rtl .v-list--dense.v-list--nav .v-list-group--no-action>.v-list-group__items>.v-list-item{padding-right:64px}.v-application--is-ltr .v-list--dense.v-list--nav .v-list-group--no-action.v-list-group--sub-group>.v-list-group__items>.v-list-item{padding-left:80px}.v-application--is-rtl .v-list--dense.v-list--nav .v-list-group--no-action.v-list-group--sub-group>.v-list-group__items>.v-list-item{padding-right:80px}.v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}.v-list-item-group .v-list-item--active{color:inherit}.v-item-group{flex:0 1 auto;position:relative;max-width:100%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:\"\";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}.v-menu{display:none}.v-menu--attached{display:inline}.v-menu__content{position:absolute;display:inline-block;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;will-change:transform;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);border-radius:4px}.v-menu__content--active{pointer-events:none}.v-menu__content--auto .v-list-item{transition-property:transform,opacity;transition-duration:.3s;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-menu__content--fixed{position:fixed}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list-item{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list-item{transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list-item{opacity:0;transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list-item--active{opacity:1;transform:none!important;pointer-events:auto}.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}.theme--light.v-banner.v-sheet{background-color:transparent}.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper{border-bottom:thin solid rgba(0,0,0,.12)}.theme--dark.v-banner.v-sheet{background-color:transparent}.theme--dark.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper{border-bottom:thin solid hsla(0,0%,100%,.12)}.v-sheet.v-banner{border-radius:0}.v-sheet.v-banner:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-banner.v-sheet--shaped{border-radius:24px 0}.v-banner{position:relative;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}.v-banner__actions{align-items:center;align-self:flex-end;display:flex;flex:1 0 auto;justify-content:flex-end;margin-bottom:-8px}.v-application--is-ltr .v-banner__actions{margin-left:90px}.v-application--is-rtl .v-banner__actions{margin-right:90px}.v-application--is-ltr .v-banner__actions>*{margin-left:8px}.v-application--is-rtl .v-banner__actions>*{margin-right:8px}.v-banner__content{align-items:center;display:flex;flex:1 1 auto;overflow:hidden}.v-banner__text{flex:1 1 auto;line-height:20px;max-width:100%}.v-banner__icon{display:inline-flex;flex:0 0 auto}.v-application--is-ltr .v-banner__icon{margin-right:24px}.v-application--is-rtl .v-banner__icon{margin-left:24px}.v-banner__wrapper{align-items:center;display:flex;flex:1 1 auto}.v-application--is-ltr .v-banner__wrapper{padding:16px 8px 16px 24px}.v-application--is-rtl .v-banner__wrapper{padding:16px 24px 16px 8px}.v-banner--single-line .v-banner__actions{margin-bottom:0;align-self:center}.v-banner--single-line .v-banner__text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-banner--single-line .v-banner__wrapper{padding-top:8px;padding-bottom:8px}.v-application--is-ltr .v-banner--has-icon .v-banner__wrapper{padding-left:16px}.v-application--is-rtl .v-banner--has-icon .v-banner__wrapper{padding-right:16px}.v-banner--is-mobile .v-banner__actions{flex:1 0 100%;margin-left:0;margin-right:0;padding-top:12px}.v-banner--is-mobile .v-banner__wrapper{flex-wrap:wrap;padding-top:16px}.v-application--is-ltr .v-banner--is-mobile .v-banner__wrapper{padding-left:16px}.v-application--is-rtl .v-banner--is-mobile .v-banner__wrapper{padding-right:16px}.v-banner--is-mobile.v-banner--has-icon .v-banner__wrapper{padding-top:24px}.v-banner--is-mobile.v-banner--single-line .v-banner__actions{flex:initial;padding-top:0}.v-application--is-ltr .v-banner--is-mobile.v-banner--single-line .v-banner__actions{margin-left:36px}.v-application--is-rtl .v-banner--is-mobile.v-banner--single-line .v-banner__actions{margin-right:36px}.v-banner--is-mobile.v-banner--single-line .v-banner__wrapper{flex-wrap:nowrap;padding-top:10px}.v-application--is-ltr .v-banner--is-mobile .v-banner__icon{margin-right:16px}.v-application--is-rtl .v-banner--is-mobile .v-banner__icon{margin-left:16px}.v-application--is-ltr .v-banner--is-mobile .v-banner__content{padding-right:8px}.v-application--is-rtl .v-banner--is-mobile .v-banner__content{padding-left:8px}.v-banner--is-mobile .v-banner__content .v-banner__wrapper{flex-wrap:nowrap;padding-top:10px}.theme--light.v-bottom-navigation{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active){color:rgba(0,0,0,.6)!important}.theme--dark.v-bottom-navigation{background-color:#2e2e2e;color:#fff}.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-navigation{bottom:0;display:flex;left:0;justify-content:center;width:100%;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-item-group.v-bottom-navigation .v-btn{background-color:transparent;border-radius:0;box-shadow:none;flex:0 1 auto;font-size:.75rem;height:inherit;max-width:168px;min-width:80px;position:relative;text-transform:none}.v-item-group.v-bottom-navigation .v-btn:after{content:none}.v-item-group.v-bottom-navigation .v-btn .v-btn__content{flex-direction:column-reverse;height:inherit}.v-item-group.v-bottom-navigation .v-btn .v-btn__content>:not(.v-icon){line-height:1.2}.v-item-group.v-bottom-navigation .v-btn.v-btn--active{color:inherit}.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before{opacity:0}.v-item-group.v-bottom-navigation--absolute,.v-item-group.v-bottom-navigation--fixed{z-index:4}.v-item-group.v-bottom-navigation--absolute{position:absolute}.v-item-group.v-bottom-navigation--active{transform:translate(0)}.v-item-group.v-bottom-navigation--fixed{position:fixed}.v-item-group.v-bottom-navigation--grow .v-btn{width:100%}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{flex-direction:row-reverse}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content>.v-icon{margin-bottom:0;margin-right:16px}.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content>:not(.v-icon){opacity:0;position:absolute;top:calc(100% - 12px);transform:scale(.9);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>.v-icon{transform:translateY(-8px)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>:not(.v-icon){opacity:1;top:calc(100% - 22px);transform:scale(1)}.bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{transform:translateY(100%)}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:0 1 auto;margin:0;overflow:visible}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%}@media only screen and (max-width:599px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}.theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}.theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}.theme--light.v-calendar-events .v-event-timed{border:1px solid!important}.theme--light.v-calendar-events .v-event-more{background-color:#fff}.theme--light.v-calendar-events .v-event-more.v-outside{background-color:#f7f7f7}.theme--dark.v-calendar-events .v-event-timed{border:1px solid!important}.theme--dark.v-calendar-events .v-event-more{background-color:#303030}.theme--dark.v-calendar-events .v-event-more.v-outside{background-color:#202020}.v-calendar .v-event{line-height:20px;margin-right:-1px;border-radius:4px}.v-calendar .v-event,.v-calendar .v-event-more{position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;cursor:pointer;z-index:1}.v-calendar .v-event-more{font-weight:700}.v-calendar .v-event-timed-container{position:absolute;top:0;bottom:0;left:0;right:0;margin-right:10px;pointer-events:none}.v-calendar .v-event-timed{position:absolute;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:12px;cursor:pointer;border-radius:4px;pointer-events:all}.v-calendar.v-calendar-events .v-calendar-weekly__head-weekday{margin-right:-1px}.v-calendar.v-calendar-events .v-calendar-weekly__day{overflow:visible;margin-right:-1px}.theme--light.v-calendar-weekly{background-color:#fff;border-top:1px solid #e0e0e0;border-left:1px solid #e0e0e0}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:rgba(0,0,0,.38)}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#f7f7f7}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weeknumber{background-color:#f1f3f4;border-right:1px solid #e0e0e0}.theme--light.v-calendar-weekly .v-calendar-weekly__day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#f7f7f7}.theme--light.v-calendar-weekly .v-calendar-weekly__weeknumber{background-color:#f1f3f4;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;color:#000}.theme--dark.v-calendar-weekly{background-color:#303030;border-top:1px solid #9e9e9e;border-left:1px solid #9e9e9e}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#202020}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weeknumber{background-color:#202020;border-right:1px solid #9e9e9e}.theme--dark.v-calendar-weekly .v-calendar-weekly__day{border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#202020}.theme--dark.v-calendar-weekly .v-calendar-weekly__weeknumber{background-color:#202020;border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;color:#fff}.v-calendar-weekly{width:100%;height:100%;display:flex;flex-direction:column;min-height:0}.v-calendar-weekly__head{display:flex}.v-calendar-weekly__head,.v-calendar-weekly__head-weekday{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-calendar-weekly__head-weekday{flex:1 0 20px;padding:0 4px;font-size:11px;overflow:hidden;text-align:center;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.v-calendar-weekly__head-weeknumber{position:relative;flex:0 0 24px}.v-calendar-weekly__week{display:flex;flex:1;height:unset;min-height:0}.v-calendar-weekly__weeknumber{display:flex;flex:0 0 24px;height:unset;min-height:0;padding-top:14.5px;text-align:center}.v-calendar-weekly__weeknumber>small{width:100%!important}.v-calendar-weekly__day{flex:1;width:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;padding:0;min-width:0}.v-calendar-weekly__day.v-present .v-calendar-weekly__day-month{color:currentColor}.v-calendar-weekly__day-label{text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;box-shadow:none;text-align:center;margin:4px 0 0}.v-calendar-weekly__day-label .v-btn{font-size:12px;text-transform:none}.v-calendar-weekly__day-month{position:absolute;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:none;top:0;left:36px;height:32px;line-height:32px}.theme--light.v-calendar-daily{background-color:#fff;border-left:1px solid #e0e0e0;border-top:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-head:after{background:#e0e0e0;background:linear-gradient(90deg,transparent,#e0e0e0)}.theme--light.v-calendar-daily .v-calendar-daily_head-day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:rgba(0,0,0,.38)}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#424242}.theme--light.v-calendar-daily .v-calendar-daily__day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.theme--light.v-calendar-daily .v-calendar-daily__interval:after{border-top:1px solid #e0e0e0}.theme--dark.v-calendar-daily{background-color:#303030;border-left:1px solid #9e9e9e;border-top:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-head:after{background:#9e9e9e;background:linear-gradient(90deg,transparent,#9e9e9e)}.theme--dark.v-calendar-daily .v-calendar-daily_head-day{border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#eee}.theme--dark.v-calendar-daily .v-calendar-daily__day{border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.theme--dark.v-calendar-daily .v-calendar-daily__interval:after{border-top:1px solid #9e9e9e}.v-calendar-daily{display:flex;flex-direction:column;overflow:hidden;height:100%}.v-calendar-daily__head{flex:none;display:flex}.v-calendar-daily__intervals-head{flex:none;position:relative}.v-calendar-daily__intervals-head:after{position:absolute;bottom:0;height:1px;left:0;right:0;content:\"\"}.v-calendar-daily_head-day{flex:1 1 auto;width:0;position:relative}.v-calendar-daily_head-weekday{padding:3px 0 0;font-size:11px;text-transform:uppercase}.v-calendar-daily_head-day-label,.v-calendar-daily_head-weekday{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center}.v-calendar-daily_head-day-label{padding:0 0 3px;cursor:pointer}.v-calendar-daily__body{flex:1 1 60%;overflow:hidden;display:flex;position:relative;flex-direction:column}.v-calendar-daily__scroll-area{overflow-y:scroll;flex:1 1 auto;display:flex;align-items:flex-start}.v-calendar-daily__pane{width:100%;overflow-y:hidden;flex:none;display:flex;align-items:flex-start}.v-calendar-daily__day-container{display:flex;flex:1;width:100%;height:100%}.v-calendar-daily__intervals-body{flex:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-calendar-daily__interval{text-align:right;padding-right:8px;border-bottom:none;position:relative}.v-calendar-daily__interval:after{width:8px;position:absolute;height:1px;display:block;content:\"\";right:0;bottom:-1px}.v-calendar-daily__interval-text{display:block;position:relative;top:-6px;font-size:10px;padding-right:4px}.v-calendar-daily__day{flex:1;width:0;position:relative}.theme--light.v-calendar-category .v-calendar-category__column,.theme--light.v-calendar-category .v-calendar-category__column-header{border-right:1px solid #e0e0e0}.theme--dark.v-calendar-category .v-calendar-category__column,.theme--dark.v-calendar-category .v-calendar-category__column-header{border-right:1px solid #9e9e9e}.v-calendar-category .v-calendar-category__category{text-align:center}.v-calendar-category .v-calendar-daily__day-container .v-calendar-category__columns{position:absolute;height:100%;width:100%;top:0}.v-calendar-category .v-calendar-category__columns{display:flex}.v-calendar-category .v-calendar-category__columns .v-calendar-category__column,.v-calendar-category .v-calendar-category__columns .v-calendar-category__column-header{flex:1 1 auto;width:0;position:relative}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}.v-window{overflow:hidden}.v-window__container{height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:\"\";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}.v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}.theme--light.v-color-picker .v-color-picker__input input{border:thin solid rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-color-picker span{color:rgba(0,0,0,.6)}.theme--light.v-color-picker .v-color-picker__color,.theme--light.v-color-picker .v-color-picker__dot{background-color:hsla(0,0%,100%,0)}.theme--dark.v-color-picker .v-color-picker__input input{border:thin solid hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-color-picker span{color:hsla(0,0%,100%,.7)}.theme--dark.v-color-picker .v-color-picker__color,.theme--dark.v-color-picker .v-color-picker__dot{background-color:hsla(0,0%,100%,.12)}.v-color-picker{align-self:flex-start;border-radius:4px;contain:content;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-color-picker__controls{display:flex;flex-direction:column;padding:16px}.v-color-picker--flat,.v-color-picker--flat .v-color-picker__track:not(.v-input--is-disabled) .v-slider__thumb{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-color-picker__edit{margin-top:24px;display:flex}.v-color-picker__input{width:100%;display:flex;flex-wrap:wrap;justify-content:center;text-align:center}.v-application--is-ltr .v-color-picker__input:not(:last-child){margin-right:8px}.v-application--is-rtl .v-color-picker__input:not(:last-child){margin-left:8px}.v-color-picker__input input{border-radius:4px;margin-bottom:8px;min-width:0;outline:none;text-align:center;width:100%;height:28px}.v-color-picker__input span{font-size:.75rem}.v-color-picker__canvas{position:relative;overflow:hidden;contain:strict}.v-color-picker__canvas-dot{position:absolute;top:0;left:0;width:15px;height:15px;background:transparent;border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1.5px rgba(0,0,0,.3)}.v-color-picker__canvas-dot--disabled{box-shadow:0 0 0 1.5px hsla(0,0%,100%,.7),inset 0 0 1px 1.5px rgba(0,0,0,.3)}.v-color-picker__canvas:hover .v-color-picker__canvas-dot{will-change:transform}.v-color-picker .v-input__slider{border-radius:5px}.v-color-picker .v-input__slider .v-slider{margin:0}.v-color-picker__alpha:not(.v-input--is-disabled) .v-slider{border-radius:5px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat}.v-color-picker__sliders{display:flex;flex:1 0 auto;flex-direction:column}.v-color-picker__dot{position:relative;height:30px;width:30px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat;border-radius:50%;overflow:hidden}.v-application--is-ltr .v-color-picker__dot{margin-right:24px}.v-application--is-rtl .v-color-picker__dot{margin-left:24px}.v-color-picker__dot>div{width:100%;height:100%}.v-application--is-ltr .v-color-picker__hue:not(.v-input--is-disabled){background:linear-gradient(90deg,red 0,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)}.v-application--is-rtl .v-color-picker__hue:not(.v-input--is-disabled){background:linear-gradient(270deg,red 0,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)}.v-color-picker__track{position:relative;width:100%}.v-color-picker__preview{align-items:center;display:flex}.v-color-picker__preview .v-slider{min-height:10px}.v-color-picker__preview .v-slider:not(.v-slider--disabled) .v-slider__thumb{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.v-color-picker__preview .v-slider:not(.v-slider--disabled) .v-slider__track-container{opacity:0}.v-color-picker__preview:not(.v-color-picker__preview--hide-alpha) .v-color-picker__hue{margin-bottom:24px}.theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{cursor:default;display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;padding:0;width:100%;display:none}.v-slider__track-container{position:absolute;border-radius:0}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{width:12px;height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb,.v-slider__thumb:before{position:absolute;border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{content:\"\";color:inherit;width:36px;height:36px;background:currentColor;opacity:.3;left:-12px;top:-12px;transform:scale(.1);pointer-events:none}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{opacity:0;background-color:rgba(0,0,0,.5);transition:.3s cubic-bezier(.25,.8,.5,1);border-radius:0}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--horizontal{min-height:32px;margin-left:8px;margin-right:8px}.v-slider--horizontal .v-slider__track-container{width:100%;height:2px;left:0;top:50%;transform:translateY(-50%)}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{left:0;height:2px;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{min-height:150px;margin-top:12px;margin-bottom:12px}.v-slider--vertical .v-slider__track-container{height:100%;width:2px;left:50%;top:0;transform:translateX(-50%)}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{top:0;width:2px;height:100%;left:50%;transform:translateX(-50%)}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);left:12px}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);right:12px}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{width:8px;height:8px;left:-4px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-right:0;margin-left:12px}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}.v-color-picker__swatches{overflow-y:auto}.v-color-picker__swatches>div{display:flex;flex-wrap:wrap;justify-content:center;padding:8px}.v-color-picker__swatch{display:flex;flex-direction:column;margin-bottom:10px}.v-color-picker__color{position:relative;height:18px;max-height:18px;width:45px;margin:2px 4px;border-radius:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat;cursor:pointer}.v-color-picker__color>div{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}.v-data-footer{display:flex;flex-wrap:wrap;align-items:center;font-size:.75rem;padding:0 8px}.v-data-footer .v-btn{color:inherit}.v-application--is-ltr .v-data-footer__icons-before .v-btn:last-child{margin-right:7px}.v-application--is-ltr .v-data-footer__icons-after .v-btn:first-child,.v-application--is-rtl .v-data-footer__icons-before .v-btn:last-child{margin-left:7px}.v-application--is-rtl .v-data-footer__icons-after .v-btn:first-child{margin-right:7px}.v-data-footer__pagination{display:block;text-align:center}.v-application--is-ltr .v-data-footer__pagination{margin:0 32px 0 24px}.v-application--is-rtl .v-data-footer__pagination{margin:0 24px 0 32px}.v-data-footer__select{display:flex;align-items:center;flex:0 0 0;justify-content:flex-end;white-space:nowrap}.v-application--is-ltr .v-data-footer__select{margin-left:auto;margin-right:14px}.v-application--is-rtl .v-data-footer__select{margin-left:14px;margin-right:auto}.v-data-footer__select .v-select{flex:0 1 0;padding:0;position:static}.v-application--is-ltr .v-data-footer__select .v-select{margin:13px 0 13px 34px}.v-application--is-rtl .v-data-footer__select .v-select{margin:13px 34px 13px 0}.v-data-footer__select .v-select__selections{flex-wrap:nowrap}.v-data-footer__select .v-select__selections .v-select__selection--comma{font-size:.75rem}.theme--light.v-data-table tbody tr.v-data-table__selected{background:#f5f5f5}.theme--light.v-data-table .v-row-group__header,.theme--light.v-data-table .v-row-group__summary{background:#eee}.theme--light.v-data-table .v-data-footer{border-top:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table .v-data-table__empty-wrapper{color:rgba(0,0,0,.38)}.theme--dark.v-data-table tbody tr.v-data-table__selected{background:#505050}.theme--dark.v-data-table .v-row-group__header,.theme--dark.v-data-table .v-row-group__summary{background:#616161}.theme--dark.v-data-table .v-data-footer{border-top:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table .v-data-table__empty-wrapper{color:hsla(0,0%,100%,.5)}.v-data-table{border-radius:4px}.v-data-table>.v-data-table__wrapper tbody tr.v-data-table__expanded{border-bottom:0}.v-data-table>.v-data-table__wrapper tbody tr.v-data-table__expanded__content{box-shadow:inset 0 4px 8px -5px rgba(50,50,50,.75),inset 0 -4px 8px -5px rgba(50,50,50,.75)}.v-data-table>.v-data-table__wrapper tbody tr:first-child:hover td:first-child{border-top-left-radius:4px}.v-data-table>.v-data-table__wrapper tbody tr:first-child:hover td:last-child{border-top-right-radius:4px}.v-data-table>.v-data-table__wrapper tbody tr:last-child:hover td:first-child{border-bottom-left-radius:4px}.v-data-table>.v-data-table__wrapper tbody tr:last-child:hover td:last-child{border-bottom-right-radius:4px}.v-data-table>.v-data-table__wrapper .v-data-table__mobile-table-row{display:initial}.v-data-table>.v-data-table__wrapper .v-data-table__mobile-row{height:auto;min-height:48px}.v-data-table__empty-wrapper{text-align:center}.v-data-table__mobile-row{align-items:center;display:flex;justify-content:space-between}.v-data-table__mobile-row__header{font-weight:600}.v-application--is-ltr .v-data-table__mobile-row__header{padding-right:16px}.v-application--is-rtl .v-data-table__mobile-row__header{padding-left:16px}.v-application--is-ltr .v-data-table__mobile-row__cell{text-align:right}.v-application--is-rtl .v-data-table__mobile-row__cell{text-align:left}.v-row-group__header td,.v-row-group__summary td{height:35px}.v-data-table__expand-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.v-data-table__expand-icon--active{transform:rotate(-180deg)}.theme--light.v-data-table .v-data-table-header th.sortable .v-data-table-header__icon{color:rgba(0,0,0,.38)}.theme--light.v-data-table .v-data-table-header th.sortable.active,.theme--light.v-data-table .v-data-table-header th.sortable.active .v-data-table-header__icon,.theme--light.v-data-table .v-data-table-header th.sortable:hover{color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table-header__sort-badge{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--dark.v-data-table .v-data-table-header th.sortable .v-data-table-header__icon{color:hsla(0,0%,100%,.5)}.theme--dark.v-data-table .v-data-table-header th.sortable.active,.theme--dark.v-data-table .v-data-table-header th.sortable.active .v-data-table-header__icon,.theme--dark.v-data-table .v-data-table-header th.sortable:hover{color:#fff}.theme--dark.v-data-table .v-data-table-header__sort-badge{background-color:hsla(0,0%,100%,.12);color:#fff}.v-data-table-header th.sortable{pointer-events:auto;cursor:pointer;outline:0}.v-data-table-header th.sortable .v-data-table-header__icon{line-height:.9}.v-data-table-header th.active .v-data-table-header__icon,.v-data-table-header th:hover .v-data-table-header__icon{transform:none;opacity:1}.v-data-table-header th.desc .v-data-table-header__icon{transform:rotate(-180deg)}.v-data-table-header__icon{display:inline-block;opacity:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;border:0;border-radius:50%;min-width:18px;min-height:18px;height:18px;width:18px}.v-data-table-header-mobile th{height:auto}.v-data-table-header-mobile__wrapper{display:flex}.v-data-table-header-mobile__wrapper .v-select{margin-bottom:8px}.v-data-table-header-mobile__wrapper .v-select .v-chip{height:24px}.v-data-table-header-mobile__wrapper .v-select .v-chip__close.desc .v-icon{transform:rotate(-180deg)}.v-data-table-header-mobile__select{min-width:56px;display:flex;align-items:center;justify-content:center}.theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}.theme--light.v-small-dialog__actions,.theme--light.v-small-dialog__menu-content{background:#fff}.theme--dark.v-small-dialog__actions,.theme--dark.v-small-dialog__menu-content{background:#1e1e1e}.v-small-dialog{display:block}.v-small-dialog__activator{cursor:pointer}.v-small-dialog__activator__content{display:inline-block}.v-small-dialog__content{padding:0 16px}.v-small-dialog__actions{padding:8px;text-align:right;white-space:pre}.v-virtual-table{position:relative}.v-virtual-table__wrapper{display:flex}.v-virtual-table__table{width:100%;height:100%;overflow-x:auto}.theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;vertical-align:top;position:relative}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{color:#fff;border-top-left-radius:4px;border-top-right-radius:4px;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){opacity:.6;cursor:pointer}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{height:auto;overflow:hidden;position:relative;z-index:0;flex:1 0 auto;display:flex;flex-direction:column;align-items:center;margin:0 auto}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-top-right-radius:0;border-bottom-right-radius:0;width:170px;position:absolute;top:0;height:100%;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-right:170px;margin-left:0}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-date-picker-title{display:flex;justify-content:space-between;flex-direction:column;flex-wrap:wrap;line-height:1}.v-application--is-ltr .v-date-picker-title .v-picker__title__btn{text-align:left}.v-application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;text-align:left;font-weight:500;position:relative;overflow:hidden;padding-bottom:8px;margin-bottom:-8px}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}.theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{padding:4px 16px;align-items:center;display:flex;justify-content:space-between;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;text-align:center;position:relative;overflow:hidden}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}.theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{position:relative;padding:0 12px;height:242px}.v-date-picker-table table{transition:.3s cubic-bezier(.25,.8,.5,1);top:0;table-layout:fixed;width:100%}.v-date-picker-table td,.v-date-picker-table th{text-align:center;position:relative}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{z-index:auto;margin:0;font-size:12px}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{width:33.333333%;height:56px;vertical-align:middle;text-align:center}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:140px;min-width:40px;width:100%}.v-date-picker-table--date th{padding:8px 0;font-weight:600}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table__current .v-date-picker-table__events{margin-bottom:-1px}.v-date-picker-table--disabled{pointer-events:none}.v-date-picker-years{font-size:16px;font-weight:400;height:290px;list-style-type:none;overflow:auto;text-align:center}.v-date-picker-years.v-date-picker-years{padding:0}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{padding:0;height:290px}.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:\"\";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}.theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}.theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:24px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}.container.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.container.fill-height>.row{flex:1 1 100%;max-width:calc(100% + 24px)}.container.fill-height>.layout{height:100%;flex:1 1 auto}.container.fill-height>.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:flex;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.reverse{flex-direction:row-reverse}.layout.column{flex-direction:column}.layout.column.reverse{flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}@media (min-width:0){.flex.xs12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xs12{order:12}.flex.xs11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xs11{order:11}.flex.xs10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xs10{order:10}.flex.xs9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xs9{order:9}.flex.xs8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xs8{order:8}.flex.xs7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xs7{order:7}.flex.xs6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xs6{order:6}.flex.xs5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xs5{order:5}.flex.xs4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xs4{order:4}.flex.xs3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xs3{order:3}.flex.xs2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xs2{order:2}.flex.xs1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xs1{order:1}.v-application--is-ltr .flex.offset-xs12{margin-left:100%}.v-application--is-rtl .flex.offset-xs12{margin-right:100%}.v-application--is-ltr .flex.offset-xs11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xs11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xs10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xs10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xs9{margin-left:75%}.v-application--is-rtl .flex.offset-xs9{margin-right:75%}.v-application--is-ltr .flex.offset-xs8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xs8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xs7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xs7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xs6{margin-left:50%}.v-application--is-rtl .flex.offset-xs6{margin-right:50%}.v-application--is-ltr .flex.offset-xs5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xs5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xs4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xs4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xs3{margin-left:25%}.v-application--is-rtl .flex.offset-xs3{margin-right:25%}.v-application--is-ltr .flex.offset-xs2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xs2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xs1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xs1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xs0{margin-left:0}.v-application--is-rtl .flex.offset-xs0{margin-right:0}}@media (min-width:600px){.flex.sm12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-sm12{order:12}.flex.sm11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-sm11{order:11}.flex.sm10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-sm10{order:10}.flex.sm9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-sm9{order:9}.flex.sm8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-sm8{order:8}.flex.sm7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-sm7{order:7}.flex.sm6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-sm6{order:6}.flex.sm5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-sm5{order:5}.flex.sm4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-sm4{order:4}.flex.sm3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-sm3{order:3}.flex.sm2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-sm2{order:2}.flex.sm1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-sm1{order:1}.v-application--is-ltr .flex.offset-sm12{margin-left:100%}.v-application--is-rtl .flex.offset-sm12{margin-right:100%}.v-application--is-ltr .flex.offset-sm11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-sm11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-sm10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-sm10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-sm9{margin-left:75%}.v-application--is-rtl .flex.offset-sm9{margin-right:75%}.v-application--is-ltr .flex.offset-sm8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-sm8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-sm7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-sm7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-sm6{margin-left:50%}.v-application--is-rtl .flex.offset-sm6{margin-right:50%}.v-application--is-ltr .flex.offset-sm5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-sm5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-sm4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-sm4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-sm3{margin-left:25%}.v-application--is-rtl .flex.offset-sm3{margin-right:25%}.v-application--is-ltr .flex.offset-sm2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-sm2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-sm1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-sm1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-sm0{margin-left:0}.v-application--is-rtl .flex.offset-sm0{margin-right:0}}@media (min-width:960px){.flex.md12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-md12{order:12}.flex.md11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-md11{order:11}.flex.md10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-md10{order:10}.flex.md9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-md9{order:9}.flex.md8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-md8{order:8}.flex.md7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-md7{order:7}.flex.md6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-md6{order:6}.flex.md5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-md5{order:5}.flex.md4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-md4{order:4}.flex.md3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-md3{order:3}.flex.md2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-md2{order:2}.flex.md1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-md1{order:1}.v-application--is-ltr .flex.offset-md12{margin-left:100%}.v-application--is-rtl .flex.offset-md12{margin-right:100%}.v-application--is-ltr .flex.offset-md11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-md11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-md10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-md10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-md9{margin-left:75%}.v-application--is-rtl .flex.offset-md9{margin-right:75%}.v-application--is-ltr .flex.offset-md8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-md8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-md7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-md7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-md6{margin-left:50%}.v-application--is-rtl .flex.offset-md6{margin-right:50%}.v-application--is-ltr .flex.offset-md5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-md5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-md4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-md4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-md3{margin-left:25%}.v-application--is-rtl .flex.offset-md3{margin-right:25%}.v-application--is-ltr .flex.offset-md2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-md2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-md1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-md1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-md0{margin-left:0}.v-application--is-rtl .flex.offset-md0{margin-right:0}}@media (min-width:1264px){.flex.lg12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-lg12{order:12}.flex.lg11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-lg11{order:11}.flex.lg10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-lg10{order:10}.flex.lg9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-lg9{order:9}.flex.lg8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-lg8{order:8}.flex.lg7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-lg7{order:7}.flex.lg6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-lg6{order:6}.flex.lg5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-lg5{order:5}.flex.lg4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-lg4{order:4}.flex.lg3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-lg3{order:3}.flex.lg2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-lg2{order:2}.flex.lg1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-lg1{order:1}.v-application--is-ltr .flex.offset-lg12{margin-left:100%}.v-application--is-rtl .flex.offset-lg12{margin-right:100%}.v-application--is-ltr .flex.offset-lg11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-lg11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-lg10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-lg10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-lg9{margin-left:75%}.v-application--is-rtl .flex.offset-lg9{margin-right:75%}.v-application--is-ltr .flex.offset-lg8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-lg8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-lg7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-lg7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-lg6{margin-left:50%}.v-application--is-rtl .flex.offset-lg6{margin-right:50%}.v-application--is-ltr .flex.offset-lg5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-lg5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-lg4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-lg4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-lg3{margin-left:25%}.v-application--is-rtl .flex.offset-lg3{margin-right:25%}.v-application--is-ltr .flex.offset-lg2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-lg2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-lg1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-lg1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-lg0{margin-left:0}.v-application--is-rtl .flex.offset-lg0{margin-right:0}}@media (min-width:1904px){.flex.xl12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xl12{order:12}.flex.xl11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xl11{order:11}.flex.xl10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xl10{order:10}.flex.xl9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xl9{order:9}.flex.xl8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xl8{order:8}.flex.xl7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xl7{order:7}.flex.xl6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xl6{order:6}.flex.xl5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xl5{order:5}.flex.xl4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xl4{order:4}.flex.xl3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xl3{order:3}.flex.xl2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xl2{order:2}.flex.xl1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xl1{order:1}.v-application--is-ltr .flex.offset-xl12{margin-left:100%}.v-application--is-rtl .flex.offset-xl12{margin-right:100%}.v-application--is-ltr .flex.offset-xl11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xl11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xl10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xl10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xl9{margin-left:75%}.v-application--is-rtl .flex.offset-xl9{margin-right:75%}.v-application--is-ltr .flex.offset-xl8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xl8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xl7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xl7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xl6{margin-left:50%}.v-application--is-rtl .flex.offset-xl6{margin-right:50%}.v-application--is-ltr .flex.offset-xl5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xl5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xl4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xl4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xl3{margin-left:25%}.v-application--is-rtl .flex.offset-xl3{margin-right:25%}.v-application--is-ltr .flex.offset-xl2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xl2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xl1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xl1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xl0{margin-left:0}.v-application--is-rtl .flex.offset-xl0{margin-right:0}}.child-flex>*,.flex{flex:1 1 auto;max-width:100%}.child-flex>.grow-shrink-0,.flex.grow-shrink-0{flex-grow:0;flex-shrink:0}.grow,.spacer{flex-grow:1!important}.grow{flex-shrink:0!important}.shrink{flex-grow:0!important;flex-shrink:1!important}.fill-height{height:100%}.container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.row+.row{margin-top:12px}.row+.row--dense{margin-top:4px}.row--dense{margin:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.row.no-gutters{margin:0}.row.no-gutters>.col,.row.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-3{margin-left:25%}.v-application--is-rtl .offset-3{margin-right:25%}.v-application--is-ltr .offset-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-6{margin-left:50%}.v-application--is-rtl .offset-6{margin-right:50%}.v-application--is-ltr .offset-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-9{margin-left:75%}.v-application--is-rtl .offset-9{margin-right:75%}.v-application--is-ltr .offset-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-11{margin-right:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-sm-0{margin-left:0}.v-application--is-rtl .offset-sm-0{margin-right:0}.v-application--is-ltr .offset-sm-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-sm-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-sm-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-sm-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-sm-3{margin-left:25%}.v-application--is-rtl .offset-sm-3{margin-right:25%}.v-application--is-ltr .offset-sm-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-sm-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-sm-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-sm-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-sm-6{margin-left:50%}.v-application--is-rtl .offset-sm-6{margin-right:50%}.v-application--is-ltr .offset-sm-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-sm-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-sm-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-sm-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-sm-9{margin-left:75%}.v-application--is-rtl .offset-sm-9{margin-right:75%}.v-application--is-ltr .offset-sm-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-sm-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-sm-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-md-0{margin-left:0}.v-application--is-rtl .offset-md-0{margin-right:0}.v-application--is-ltr .offset-md-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-md-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-md-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-md-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-md-3{margin-left:25%}.v-application--is-rtl .offset-md-3{margin-right:25%}.v-application--is-ltr .offset-md-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-md-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-md-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-md-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-md-6{margin-left:50%}.v-application--is-rtl .offset-md-6{margin-right:50%}.v-application--is-ltr .offset-md-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-md-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-md-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-md-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-md-9{margin-left:75%}.v-application--is-rtl .offset-md-9{margin-right:75%}.v-application--is-ltr .offset-md-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-md-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-md-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-lg-0{margin-left:0}.v-application--is-rtl .offset-lg-0{margin-right:0}.v-application--is-ltr .offset-lg-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-lg-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-lg-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-lg-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-lg-3{margin-left:25%}.v-application--is-rtl .offset-lg-3{margin-right:25%}.v-application--is-ltr .offset-lg-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-lg-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-lg-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-lg-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-lg-6{margin-left:50%}.v-application--is-rtl .offset-lg-6{margin-right:50%}.v-application--is-ltr .offset-lg-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-lg-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-lg-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-lg-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-lg-9{margin-left:75%}.v-application--is-rtl .offset-lg-9{margin-right:75%}.v-application--is-ltr .offset-lg-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-lg-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-lg-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-xl-0{margin-left:0}.v-application--is-rtl .offset-xl-0{margin-right:0}.v-application--is-ltr .offset-xl-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-xl-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-xl-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-xl-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-xl-3{margin-left:25%}.v-application--is-rtl .offset-xl-3{margin-right:25%}.v-application--is-ltr .offset-xl-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-xl-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-xl-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-xl-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-xl-6{margin-left:50%}.v-application--is-rtl .offset-xl-6{margin-right:50%}.v-application--is-ltr .offset-xl-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-xl-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-xl-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-xl-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-xl-9{margin-left:75%}.v-application--is-rtl .offset-xl-9{margin-right:75%}.v-application--is-ltr .offset-xl-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-xl-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-xl-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-xl-11{margin-right:91.6666666667%}}.theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#363636}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;left:0;max-width:100%;overflow:hidden;pointer-events:auto;top:0;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform;transition-property:transform,visibility,width}.v-navigation-drawer:not([data-booted=true]){transition:none!important}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer .v-list:not(.v-select-list){background:inherit}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer__content{height:100%;overflow-y:auto;overflow-x:hidden}.v-navigation-drawer__image{border-radius:inherit;height:100%;position:absolute;top:0;bottom:0;z-index:-1;contain:strict;width:100%}.v-navigation-drawer__image .v-image{border-radius:inherit}.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile{max-height:50%;top:auto;bottom:0;min-width:100%}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{z-index:1}.v-navigation-drawer--fixed{z-index:6}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--clipped:not(.v-navigation-drawer--temporary):not(.v-navigation-drawer--is-mobile){z-index:4}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list-item>:first-child{margin-left:0;margin-right:0}.v-navigation-drawer--mini-variant .v-list-item>:not(:first-child){position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;display:initial}.v-navigation-drawer--mini-variant .v-list-group--no-action .v-list-group__items,.v-navigation-drawer--mini-variant .v-list-group--sub-group{display:none}.v-navigation-drawer--mini-variant.v-navigation-drawer--custom-mini-variant .v-list-item{justify-content:center}.v-navigation-drawer--temporary{z-index:7}.v-navigation-drawer--mobile{z-index:6}.v-navigation-drawer--close{visibility:hidden}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.theme--light.v-overflow-btn.theme--light.v-overflow-btn>.v-input__control>.v-input__slot{border-color:rgba(0,0,0,.12)}.theme--light.v-overflow-btn:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:#fff}.theme--light.v-overflow-btn.v-overflow-btn--segmented .v-input__append-inner{border-left:thin solid rgba(0,0,0,.12)}.theme--dark.v-overflow-btn.theme--dark.v-overflow-btn>.v-input__control>.v-input__slot{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:#1e1e1e}.theme--dark.v-overflow-btn.v-overflow-btn--segmented .v-input__append-inner{border-left:thin solid hsla(0,0%,100%,.12)}.v-autocomplete__content.v-menu__content{box-shadow:0 4px 6px 0 rgba(32,33,36,.28)}.v-autocomplete__content.v-menu__content .v-select-list{border-radius:0 0 4px 4px}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-input__slot{border-width:2px 0;border-style:solid}.v-overflow-btn .v-input__slot:before{display:none}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn.v-input--dense .v-select__slot{height:38px}.v-overflow-btn.v-input--dense input{cursor:pointer}.v-application--is-ltr .v-overflow-btn.v-input--dense input{margin-left:16px}.v-application--is-rtl .v-overflow-btn.v-input--dense input{margin-right:16px}.v-application--is-ltr .v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-application--is-rtl .v-overflow-btn .v-select__selection--comma:first-child{margin-right:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after,.v-overflow-btn .v-input__slot:before{display:none}.v-overflow-btn .v-label{top:calc(50% - 10px)}.v-application--is-ltr .v-overflow-btn .v-label{margin-left:16px}.v-application--is-rtl .v-overflow-btn .v-label{margin-right:16px}.v-overflow-btn .v-input__append-inner{align-items:center;align-self:auto;flex-shrink:0;height:48px;margin-top:0;padding:0 4px;width:42px}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-bottom:12px;margin-top:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{border-color:transparent!important;box-shadow:0 1px 6px 0 rgba(32,33,36,.28)}.v-overflow-btn.v-input--is-focused .v-input__slot{border-radius:4px}.v-overflow-btn.v-select--is-menu-active .v-input__slot{border-radius:4px 4px 0 0}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-input__slot{border-width:thin 0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0;height:48px;width:100%}.v-application--is-ltr .v-overflow-btn--segmented .v-select__selections .v-btn{margin-right:-16px}.v-application--is-rtl .v-overflow-btn--segmented .v-select__selections .v-btn{margin-left:-16px}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text;padding:8px 16px}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}.theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}.v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}.v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}.theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}.theme--light.v-input--range-slider.v-input--slider.v-input--is-disabled .v-slider.v-slider .v-slider__thumb{background:#fafafa}.theme--dark.v-input--range-slider.v-input--slider.v-input--is-disabled .v-slider.v-slider .v-slider__thumb{background:#424242}.v-input--range-slider.v-input--is-disabled .v-slider__track-fill{display:none}.v-input--range-slider.v-input--is-disabled.v-input--slider .v-slider.v-slider .v-slider__thumb{border-color:transparent}.v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}.theme--light.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0))}.theme--light.v-skeleton-loader .v-skeleton-loader__avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__button,.theme--light.v-skeleton-loader .v-skeleton-loader__chip,.theme--light.v-skeleton-loader .v-skeleton-loader__divider,.theme--light.v-skeleton-loader .v-skeleton-loader__heading,.theme--light.v-skeleton-loader .v-skeleton-loader__image,.theme--light.v-skeleton-loader .v-skeleton-loader__text{background:rgba(0,0,0,.12)}.theme--light.v-skeleton-loader .v-skeleton-loader__actions,.theme--light.v-skeleton-loader .v-skeleton-loader__article,.theme--light.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__card-text,.theme--light.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--light.v-skeleton-loader .v-skeleton-loader__table-thead{background:#fff}.theme--dark.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))}.theme--dark.v-skeleton-loader .v-skeleton-loader__avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__button,.theme--dark.v-skeleton-loader .v-skeleton-loader__chip,.theme--dark.v-skeleton-loader .v-skeleton-loader__divider,.theme--dark.v-skeleton-loader .v-skeleton-loader__heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__image,.theme--dark.v-skeleton-loader .v-skeleton-loader__text{background:hsla(0,0%,100%,.12)}.theme--dark.v-skeleton-loader .v-skeleton-loader__actions,.theme--dark.v-skeleton-loader .v-skeleton-loader__article,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead{background:#1e1e1e}.v-skeleton-loader{border-radius:4px;position:relative;vertical-align:top}.v-skeleton-loader__actions{padding:16px 16px 8px;text-align:right}.v-skeleton-loader__actions .v-skeleton-loader__button{display:inline-block}.v-application--is-ltr .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-right:12px}.v-application--is-rtl .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-left:12px}.v-skeleton-loader .v-skeleton-loader__list-item,.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader .v-skeleton-loader__list-item-text,.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-two-line{border-radius:4px}.v-skeleton-loader .v-skeleton-loader__actions:after,.v-skeleton-loader .v-skeleton-loader__article:after,.v-skeleton-loader .v-skeleton-loader__card-avatar:after,.v-skeleton-loader .v-skeleton-loader__card-heading:after,.v-skeleton-loader .v-skeleton-loader__card-text:after,.v-skeleton-loader .v-skeleton-loader__card:after,.v-skeleton-loader .v-skeleton-loader__date-picker-days:after,.v-skeleton-loader .v-skeleton-loader__date-picker-options:after,.v-skeleton-loader .v-skeleton-loader__date-picker:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar:after,.v-skeleton-loader .v-skeleton-loader__list-item-text:after,.v-skeleton-loader .v-skeleton-loader__list-item-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item:after,.v-skeleton-loader .v-skeleton-loader__paragraph:after,.v-skeleton-loader .v-skeleton-loader__sentences:after,.v-skeleton-loader .v-skeleton-loader__table-cell:after,.v-skeleton-loader .v-skeleton-loader__table-heading:after,.v-skeleton-loader .v-skeleton-loader__table-row-divider:after,.v-skeleton-loader .v-skeleton-loader__table-row:after,.v-skeleton-loader .v-skeleton-loader__table-tbody:after,.v-skeleton-loader .v-skeleton-loader__table-tfoot:after,.v-skeleton-loader .v-skeleton-loader__table-thead:after,.v-skeleton-loader .v-skeleton-loader__table:after{display:none}.v-application--is-ltr .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 0 16px 16px}.v-application--is-rtl .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 16px 0}.v-skeleton-loader__article .v-skeleton-loader__paragraph{padding:16px}.v-skeleton-loader__bone{border-radius:inherit;overflow:hidden;position:relative}.v-skeleton-loader__bone:after{-webkit-animation:loading 1.5s infinite;animation:loading 1.5s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.v-skeleton-loader__avatar{border-radius:50%;height:48px;width:48px}.v-skeleton-loader__button{border-radius:4px;height:36px;width:64px}.v-skeleton-loader__card .v-skeleton-loader__image{border-radius:0}.v-skeleton-loader__card-heading .v-skeleton-loader__heading{margin:16px}.v-skeleton-loader__card-text{padding:16px}.v-skeleton-loader__chip{border-radius:16px;height:32px;width:96px}.v-skeleton-loader__date-picker{border-radius:inherit}.v-skeleton-loader__date-picker .v-skeleton-loader__list-item:first-child .v-skeleton-loader__text{max-width:88px;width:20%}.v-skeleton-loader__date-picker .v-skeleton-loader__heading{max-width:256px;width:40%}.v-skeleton-loader__date-picker-days{display:flex;flex-wrap:wrap;padding:0 12px;margin:0 auto}.v-skeleton-loader__date-picker-days .v-skeleton-loader__avatar{border-radius:4px;flex:1 1 auto;margin:4px;height:40px;width:40px}.v-skeleton-loader__date-picker-options{align-items:center;display:flex;padding:16px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:auto}.v-application--is-ltr .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-right:8px}.v-application--is-rtl .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:8px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__text.v-skeleton-loader__bone:first-child{margin-bottom:0;max-width:50%;width:456px}.v-skeleton-loader__divider{border-radius:1px;height:2px}.v-skeleton-loader__heading{border-radius:12px;height:24px;width:45%}.v-skeleton-loader__image{height:200px;border-radius:0}.v-skeleton-loader__image~.v-skeleton-loader__card-heading{border-radius:0}.v-skeleton-loader__image::first-child,.v-skeleton-loader__image::last-child{border-radius:inherit}.v-skeleton-loader__list-item{height:48px}.v-skeleton-loader__list-item-three-line{flex-wrap:wrap}.v-skeleton-loader__list-item-three-line>*{flex:1 0 100%;width:100%}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__list-item-avatar{height:48px}.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-two-line{height:72px}.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-three-line{height:88px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar{align-self:flex-start}.v-skeleton-loader__list-item,.v-skeleton-loader__list-item-avatar,.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-three-line,.v-skeleton-loader__list-item-two-line{align-content:center;align-items:center;display:flex;flex-wrap:wrap;padding:0 16px}.v-application--is-ltr .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-right:16px}.v-application--is-rtl .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-left:16px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:only-child{margin-bottom:0}.v-skeleton-loader__paragraph,.v-skeleton-loader__sentences{flex:1 0 auto}.v-skeleton-loader__paragraph:not(:last-child){margin-bottom:6px}.v-skeleton-loader__paragraph .v-skeleton-loader__text:first-child{max-width:100%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){max-width:50%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3),.v-skeleton-loader__sentences .v-skeleton-loader__text:nth-child(2){max-width:70%}.v-skeleton-loader__sentences:not(:last-child){margin-bottom:6px}.v-skeleton-loader__table-heading{align-items:center;display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-heading .v-skeleton-loader__heading{max-width:15%}.v-skeleton-loader__table-heading .v-skeleton-loader__text{max-width:40%}.v-skeleton-loader__table-thead{display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-thead .v-skeleton-loader__heading{max-width:5%}.v-skeleton-loader__table-tbody{padding:16px 16px 0}.v-skeleton-loader__table-tfoot{align-items:center;display:flex;justify-content:flex-end;padding:16px}.v-application--is-ltr .v-skeleton-loader__table-tfoot>*{margin-left:8px}.v-application--is-rtl .v-skeleton-loader__table-tfoot>*{margin-right:8px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:first-child{max-width:128px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:nth-child(2){max-width:64px}.v-skeleton-loader__table-row{display:flex;justify-content:space-between}.v-skeleton-loader__table-cell{align-items:center;display:flex;height:48px;width:88px}.v-skeleton-loader__table-cell .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__text{border-radius:6px;flex:1 0 auto;height:12px;margin-bottom:6px}.v-skeleton-loader--boilerplate .v-skeleton-loader__bone:after{display:none}.v-skeleton-loader--is-loading{overflow:hidden}.v-skeleton-loader--tile,.v-skeleton-loader--tile .v-skeleton-loader__bone{border-radius:0}@-webkit-keyframes loading{to{transform:translateX(100%)}}@keyframes loading{to{transform:translateX(100%)}}.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}.v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}.theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.6)}.v-application--is-ltr .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.v-application--is-rtl .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.v-application--is-rtl .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid hsla(0,0%,100%,.12)}.v-sheet.v-stepper{border-radius:4px}.v-sheet.v-stepper:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-stepper.v-sheet--shaped{border-radius:24px 4px}.v-stepper{border-radius:4px;overflow:hidden;position:relative}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:.75rem;justify-content:center;height:24px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-stepper__step__step{margin-right:8px}.v-application--is-rtl .v-stepper__step__step{margin-left:8px}.v-stepper__step__step .v-icon.v-icon{font-size:1.25rem}.v-stepper__step__step .v-icon.v-icon.v-icon--svg{height:1.25rem;width:1.25rem}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:1.5rem;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{align-items:flex-start;display:flex;flex-direction:column;line-height:1}.v-application--is-ltr .v-stepper__label{text-align:left}.v-application--is-rtl .v-stepper__label{text-align:right}.v-stepper__label small{font-size:.75rem;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{padding:16px 60px 16px 23px;width:auto}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{margin:-8px 36px -16px -36px}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-application--is-rtl .v-stepper--vertical .v-stepper__step__step{margin-left:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-bottom:11px;margin-left:0;margin-right:0}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-left:0;margin-right:0}}.theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}.theme--light.v-system-bar{background-color:#e0e0e0;color:rgba(0,0,0,.6)}.theme--light.v-system-bar .v-icon{color:rgba(0,0,0,.6)}.theme--light.v-system-bar--lights-out{background-color:hsla(0,0%,100%,.7)!important}.theme--dark.v-system-bar{background-color:#000;color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar .v-icon{color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar--lights-out{background-color:rgba(0,0,0,.2)!important}.v-system-bar{align-items:center;display:flex;font-size:.875rem;font-weight:400;padding:0 8px}.v-system-bar .v-icon{font-size:1rem;margin-right:4px}.v-system-bar--absolute,.v-system-bar--fixed{left:0;top:0;width:100%;z-index:3}.v-system-bar--fixed{position:fixed}.v-system-bar--absolute{position:absolute}.v-system-bar--window .v-icon{font-size:1.25rem;margin-right:8px}.theme--light.v-tabs>.v-tabs-bar{background-color:#fff}.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-tabs .v-tab:hover:before{opacity:.04}.theme--light.v-tabs .v-tab--active:before,.theme--light.v-tabs .v-tab--active:hover:before,.theme--light.v-tabs .v-tab:focus:before{opacity:.12}.theme--light.v-tabs .v-tab--active:focus:before{opacity:.16}.theme--dark.v-tabs>.v-tabs-bar{background-color:#1e1e1e}.theme--dark.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:hsla(0,0%,100%,.6)}.theme--dark.v-tabs .v-tab:hover:before{opacity:.08}.theme--dark.v-tabs .v-tab--active:before,.theme--dark.v-tabs .v-tab--active:hover:before,.theme--dark.v-tabs .v-tab:focus:before{opacity:.24}.theme--dark.v-tabs .v-tab--active:focus:before{opacity:.32}.theme--light.v-tabs-items{background-color:#fff}.theme--dark.v-tabs-items{background-color:#1e1e1e}.v-tabs-bar.accent .v-tab,.v-tabs-bar.accent .v-tabs-slider,.v-tabs-bar.error .v-tab,.v-tabs-bar.error .v-tabs-slider,.v-tabs-bar.info .v-tab,.v-tabs-bar.info .v-tabs-slider,.v-tabs-bar.primary .v-tab,.v-tabs-bar.primary .v-tabs-slider,.v-tabs-bar.secondary .v-tab,.v-tabs-bar.secondary .v-tabs-slider,.v-tabs-bar.success .v-tab,.v-tabs-bar.success .v-tabs-slider,.v-tabs-bar.warning .v-tab,.v-tabs-bar.warning .v-tabs-slider{color:#fff}.v-tabs{flex:1 1 auto;width:100%}.v-tabs .v-menu__activator{height:100%}.v-tabs:not(.v-tabs--vertical) .v-tab{white-space:normal}.v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:initial;visibility:hidden}.v-tabs-bar{border-radius:inherit;height:48px}.v-tabs-bar.v-item-group>*{cursor:auto}.v-tab{align-items:center;cursor:pointer;display:flex;flex:0 1 auto;font-size:.875rem;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;min-width:90px;max-width:360px;outline:none;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-tab.v-tab{color:inherit}.v-tab:before{bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-tab:before,.v-tabs-slider{background-color:currentColor}.v-tabs-slider{height:100%;width:100%}.v-tabs-slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-left:42px}.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-right:42px}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-right:auto}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-left:auto}.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*{margin-right:auto}.v-tabs--fixed-tabs>.v-tabs-bar .v-tab{flex:1 1 auto;width:100%}.v-tabs--grow>.v-tabs-bar .v-tab{flex:1 0 auto;max-width:none}.v-tabs--icons-and-text>.v-tabs-bar{height:72px}.v-tabs--icons-and-text>.v-tabs-bar .v-tab{flex-direction:column-reverse}.v-tabs--icons-and-text>.v-tabs-bar .v-tab>:first-child{margin-bottom:6px}.v-tabs--overflow>.v-tabs-bar .v-tab{flex:1 0 auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-left:auto}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-right:auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-right:0}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-left:0}.v-tabs--vertical{display:flex}.v-tabs--vertical>.v-tabs-bar{flex:1 0 auto;height:auto}.v-tabs--vertical>.v-tabs-bar .v-slide-group__next,.v-tabs--vertical>.v-tabs-bar .v-slide-group__prev{display:none}.v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content{flex-direction:column}.v-tabs--vertical>.v-tabs-bar .v-tab{height:48px}.v-tabs--vertical>.v-tabs-bar .v-tabs-slider{height:100%}.v-tabs--vertical>.v-window{flex:0 1 100%}.v-tabs--vertical.v-tabs--icons-and-text>.v-tabs-bar .v-tab{height:72px}.v-tab--active{color:inherit}.v-tab--active.v-tab:not(:focus):before{opacity:0}.v-tab--active .v-btn.v-btn--flat,.v-tab--active .v-icon{color:inherit}.v-tab--disabled{pointer-events:none;opacity:.5}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#1e1e1e}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:\"\";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:flex;padding-bottom:24px}.v-timeline-item__body{position:relative;height:100%;flex:1 1 auto}.v-timeline-item__divider{position:relative;min-width:96px;display:flex;align-items:center;justify-content:center}.v-timeline-item__dot{z-index:2;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{border-radius:50%;display:flex;justify-content:center;align-items:center}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after,.v-timeline-item__body>.v-card:not(.v-card--flat):before{content:\"\";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after{border-right-color:inherit}.v-timeline-item__body>.v-card:not(.v-card--flat):before{top:calc(50% - 8px)}.v-timeline--align-top .v-timeline-item__dot{align-self:start}.v-timeline--align-top .v-timeline-item__body>.v-card:before{top:12px}.v-timeline--align-top .v-timeline-item__body>.v-card:after{top:10px}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense):before{right:auto;left:calc(50% - 1px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before{right:47px;left:auto}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense:before{right:auto;left:47px}.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before{left:auto;right:47px}.v-timeline--dense .v-timeline-item{flex-direction:row-reverse!important}.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 96px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.v-timeline--reverse.v-timeline--dense .v-timeline-item{flex-direction:row!important}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}.theme--light.v-time-picker-clock{background:#e0e0e0}.theme--light.v-time-picker-clock .v-time-picker-clock__item--disabled{color:rgba(0,0,0,.26)}.theme--light.v-time-picker-clock .v-time-picker-clock__item--disabled.v-time-picker-clock__item--active{color:hsla(0,0%,100%,.3)}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__hand{background-color:#bdbdbd}.theme--light.v-time-picker-clock--indeterminate:after{color:#bdbdbd}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__item--active{background-color:#bdbdbd}.theme--dark.v-time-picker-clock{background:#616161}.theme--dark.v-time-picker-clock .v-time-picker-clock__item--disabled,.theme--dark.v-time-picker-clock .v-time-picker-clock__item--disabled.v-time-picker-clock__item--active{color:hsla(0,0%,100%,.3)}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__hand{background-color:#757575}.theme--dark.v-time-picker-clock--indeterminate:after{color:#757575}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__item--active{background-color:#757575}.v-time-picker-clock{border-radius:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;padding-top:100%;flex:1 0 auto}.v-time-picker-clock__container{display:flex;flex-direction:column;flex-basis:290px;justify-content:center;padding:10px}.v-time-picker-clock__ampm{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:10px}.v-time-picker-clock__hand{height:calc(50% - 4px);width:2px;bottom:50%;left:calc(50% - 1px);transform-origin:center bottom;position:absolute;will-change:transform;z-index:1}.v-time-picker-clock__hand:before{background:transparent;border:2px solid;border-color:inherit;border-radius:100%;width:10px;height:10px;top:-4px}.v-time-picker-clock__hand:after,.v-time-picker-clock__hand:before{content:\"\";position:absolute;left:50%;transform:translate(-50%,-50%)}.v-time-picker-clock__hand:after{height:8px;width:8px;top:100%;border-radius:100%;border-style:solid;border-color:inherit;background-color:inherit}.v-time-picker-clock__hand--inner:after{height:14px}.v-picker--full-width .v-time-picker-clock__container{max-width:290px}.v-time-picker-clock__inner{position:absolute;bottom:27px;left:27px;right:27px;top:27px}.v-time-picker-clock__item{align-items:center;border-radius:100%;cursor:default;display:flex;font-size:16px;justify-content:center;height:40px;position:absolute;text-align:center;width:40px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transform:translate(-50%,-50%)}.v-time-picker-clock__item>span{z-index:1}.v-time-picker-clock__item:after,.v-time-picker-clock__item:before{content:\"\";border-radius:100%;position:absolute;top:50%;left:50%;height:14px;width:14px;transform:translate(-50%,-50%);height:40px;width:40px}.v-time-picker-clock__item--active{color:#fff;cursor:default;z-index:2}.v-time-picker-clock__item--disabled{pointer-events:none}.v-picker--landscape .v-time-picker-clock__container{flex-direction:row}.v-picker--landscape .v-time-picker-clock__ampm{flex-direction:column}.v-time-picker-title{color:#fff;display:flex;line-height:1;justify-content:flex-end}.v-time-picker-title__time{white-space:nowrap;direction:ltr}.v-time-picker-title__time .v-picker__title__btn,.v-time-picker-title__time span{align-items:center;display:inline-flex;height:70px;font-size:70px;justify-content:center}.v-time-picker-title__ampm{align-self:flex-end;display:flex;flex-direction:column;font-size:16px;text-transform:uppercase}.v-application--is-ltr .v-time-picker-title__ampm{margin:0 0 6px 8px}.v-application--is-rtl .v-time-picker-title__ampm{margin:0 8px 6px 0}.v-time-picker-title__ampm div:only-child{flex-direction:row}.v-time-picker-title__ampm--readonly .v-picker__title__btn.v-picker__title__btn--active{opacity:.6}.v-picker__title--landscape .v-time-picker-title{flex-direction:column;justify-content:center;height:100%}.v-picker__title--landscape .v-time-picker-title__time{text-align:right}.v-picker__title--landscape .v-time-picker-title__time .v-picker__title__btn,.v-picker__title--landscape .v-time-picker-title__time span{height:55px;font-size:55px}.v-picker__title--landscape .v-time-picker-title__ampm{margin:16px 0 0;align-self:auto;text-align:center}.v-picker--time .v-picker__title--landscape{padding:0}.v-picker--time .v-picker__title--landscape .v-time-picker-title__time{text-align:center}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}.theme--light.v-treeview{color:rgba(0,0,0,.87)}.theme--light.v-treeview--hoverable .v-treeview-node__root:hover:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root:hover:before{opacity:.04}.theme--light.v-treeview--hoverable .v-treeview-node__root--active:before,.theme--light.v-treeview--hoverable .v-treeview-node__root--active:hover:before,.theme--light.v-treeview--hoverable .v-treeview-node__root:focus:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:hover:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root:focus:before{opacity:.12}.theme--light.v-treeview--hoverable .v-treeview-node__root--active:focus:before,.theme--light.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:focus:before{opacity:.16}.theme--light.v-treeview .v-treeview-node__root.v-treeview-node--active:before,.theme--light.v-treeview .v-treeview-node__root.v-treeview-node--active:hover:before{opacity:.12}.theme--light.v-treeview .v-treeview-node__root.v-treeview-node--active:focus:before{opacity:.16}.theme--light.v-treeview .v-treeview-node--disabled>.v-treeview-node__root>.v-treeview-node__content{color:rgba(0,0,0,.38)!important}.theme--dark.v-treeview{color:#fff}.theme--dark.v-treeview--hoverable .v-treeview-node__root:hover:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root:hover:before{opacity:.08}.theme--dark.v-treeview--hoverable .v-treeview-node__root--active:before,.theme--dark.v-treeview--hoverable .v-treeview-node__root--active:hover:before,.theme--dark.v-treeview--hoverable .v-treeview-node__root:focus:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:hover:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root:focus:before{opacity:.24}.theme--dark.v-treeview--hoverable .v-treeview-node__root--active:focus:before,.theme--dark.v-treeview .v-treeview-node--click>.v-treeview-node__root--active:focus:before{opacity:.32}.theme--dark.v-treeview .v-treeview-node__root.v-treeview-node--active:before,.theme--dark.v-treeview .v-treeview-node__root.v-treeview-node--active:hover:before{opacity:.24}.theme--dark.v-treeview .v-treeview-node__root.v-treeview-node--active:focus:before{opacity:.32}.theme--dark.v-treeview .v-treeview-node--disabled>.v-treeview-node__root>.v-treeview-node__content{color:hsla(0,0%,100%,.5)!important}.v-treeview-node.v-treeview-node--shaped .v-treeview-node__root,.v-treeview-node.v-treeview-node--shaped .v-treeview-node__root:before{border-bottom-right-radius:24px!important;border-top-right-radius:24px!important}.v-treeview-node.v-treeview-node--shaped .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview-node.v-treeview-node--rounded .v-treeview-node__root,.v-treeview-node.v-treeview-node--rounded .v-treeview-node__root:before{border-radius:24px!important}.v-treeview-node.v-treeview-node--rounded .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview-node--click>.v-treeview-node__root,.v-treeview-node--click>.v-treeview-node__root>.v-treeview-node__content>*{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node.v-treeview-node--active .v-treeview-node__content .v-icon{color:inherit}.v-treeview-node__root{display:flex;align-items:center;min-height:48px;padding-left:8px;padding-right:8px;position:relative}.v-treeview-node__root:before{background-color:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-treeview-node__root:after{content:\"\";font-size:0;min-height:inherit}.v-treeview-node__children{transition:all .2s cubic-bezier(0,0,.2,1)}.v-treeview--dense .v-treeview-node__root{min-height:40px}.v-treeview--dense.v-treeview-node--shaped .v-treeview-node__root,.v-treeview--dense.v-treeview-node--shaped .v-treeview-node__root:before{border-bottom-right-radius:20px!important;border-top-right-radius:20px!important}.v-treeview--dense.v-treeview-node--shaped .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview--dense.v-treeview-node--rounded .v-treeview-node__root,.v-treeview--dense.v-treeview-node--rounded .v-treeview-node__root:before{border-radius:20px!important}.v-treeview--dense.v-treeview-node--rounded .v-treeview-node__root{margin-top:8px;margin-bottom:8px}.v-treeview-node__checkbox{width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-treeview-node__checkbox{margin-left:6px}.v-application--is-rtl .v-treeview-node__checkbox{margin-right:6px}.v-treeview-node__toggle{width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node__toggle--loading{-webkit-animation:progress-circular-rotate 1s linear infinite;animation:progress-circular-rotate 1s linear infinite}.v-application--is-ltr .v-treeview-node__toggle{transform:rotate(-90deg)}.v-application--is-ltr .v-treeview-node__toggle--open{transform:none}.v-application--is-rtl .v-treeview-node__toggle{transform:rotate(90deg)}.v-application--is-rtl .v-treeview-node__toggle--open{transform:none}.v-treeview-node__prepend{min-width:24px}.v-application--is-ltr .v-treeview-node__prepend{margin-right:6px}.v-application--is-rtl .v-treeview-node__prepend{margin-left:6px}.v-treeview-node__append{min-width:24px}.v-application--is-ltr .v-treeview-node__append{margin-left:6px}.v-application--is-rtl .v-treeview-node__append{margin-right:6px}.v-treeview-node__level{width:24px}.v-treeview-node__label{flex:1;font-size:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-treeview-node__content{align-items:center;display:flex;flex-basis:0%;flex-grow:1;flex-shrink:0;min-width:0}.v-treeview-node__content .v-btn{flex-grow:0!important;flex-shrink:1!important}.v-application--is-ltr .v-treeview-node__content{margin-left:6px}.v-application--is-rtl .v-treeview-node__content{margin-right:6px}.v-virtual-scroll{display:block;flex:1 1 auto;height:100%;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-virtual-scroll__item{left:0;position:absolute;right:0}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v9.17.2
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'footer', 'hideClass', 'html', 'icon', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'text', 'title', 'titleText'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);

    if (typeof resolveValue !== 'undefined') {
      resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
      resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
    } else {
      resolveValue = {
        isDismissed: true,
        isConfirmed: false
      };
    } // Resolve Swal promise


    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.17.2';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

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

/***/ "./resources/js/src/view/project/account/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/view/project/account/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_08318199___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=08318199& */ "./resources/js/src/view/project/account/index.vue?vue&type=template&id=08318199&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/view/project/account/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_08318199___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_08318199___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/project/account/index.vue"
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

/***/ "./resources/js/src/view/project/account/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/view/project/account/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/account/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/src/view/project/account/index.vue?vue&type=template&id=08318199&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/project/account/index.vue?vue&type=template&id=08318199& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08318199___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08318199___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08318199___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=08318199& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/account/index.vue?vue&type=template&id=08318199&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/account/index.vue?vue&type=template&id=08318199&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/project/account/index.vue?vue&type=template&id=08318199& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-md-12" },
        [
           true
            ? _c("KTCard", {
                ref: "preview",
                attrs: { title: _vm.titleRight },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "title",
                      fn: function() {
                        return undefined
                      },
                      proxy: true
                    },
                    {
                      key: "toolbar",
                      fn: function() {
                        return [
                          _c(
                            "div",
                            {
                              staticClass:
                                "example-tools justify-content-center"
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-dark btn-sm",
                                  attrs: { to: "/account/create" }
                                },
                                [_vm._v("Create")]
                              )
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "body",
                      fn: function() {
                        return [
                          [
                            _c(
                              "v-card-title",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    placeholder: "Search by name..",
                                    "append-icon": "mdi-magnify",
                                    "single-line": "",
                                    "hide-details": ""
                                  },
                                  model: {
                                    value: _vm.search,
                                    callback: function($$v) {
                                      _vm.search = $$v
                                    },
                                    expression: "search"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("v-data-table", {
                                  attrs: {
                                    headers: _vm.headers,
                                    items: _vm.filteredList,
                                    search: _vm.search,
                                    "items-per-page": 5,
                                    "footer-props": {
                                      itemsPerPageOptions: [5, 10, 15]
                                    },
                                    "server-items-length": _vm.dessertsTotal
                                  },
                                  on: { pagination: _vm.paginate },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "item.actions",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _c(
                                              "v-icon",
                                              {
                                                staticClass: "mr-2",
                                                attrs: { small: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editItem(item)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        mdi-pencil\n                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { small: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.deleteItem(item)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        mdi-delete\n                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    1051053205
                                  )
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  false,
                  3728516051
                )
              })
            : 0
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/dist/vuetify.min.css":
/*!***************************************************!*\
  !*** ./node_modules/vuetify/dist/vuetify.min.css ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vuetify.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vuetify/dist/vuetify.min.css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ec973c76", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);