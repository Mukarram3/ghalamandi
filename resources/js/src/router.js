import Vue from "vue";
import Router from "vue-router";
import Multiselect from "vue-multiselect";
import Select2MultipleControl from 'v-select2-multiple-component';
import select2ajax from './../components/select2ajax';


Vue.use(Router);
Vue.component('multiselect', Multiselect);
Vue.component('Select2MultipleControl', Select2MultipleControl);
Vue.component('select2ajax', select2ajax);

export default new Router({
    mode:'history',
    components: {
        select2ajax
    },
    routes: [
        {
            path: "/invoice-print/:id",
            name: "invoice-print",
            component: () => import("@/view/project/invoice/invoice-print.vue")
        },
        {
            path: "/logout",
            name: "logout",
            component: () => import("@/view/project/auth/logout")
        },
        {
            path: "/gate-pass-print/:id",
            name: "gate-pass-print",
            component: () => import("@/view/project/invoice/gate-pass-print.vue")
        },
        {
            path: "/journal-voucher",
            name: "journal-voucher",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create",
                    component: () => import("@/view/project/journal-voucher/create.vue")
                },
            ]
        },
        {
            path: "/debit-voucher",
            name: "debit-voucher",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create",
                    component: () => import("@/view/project/debit-voucher/create.vue")
                },
            ]
        },
        {
            path: "/bag-sale-invoice",
            name: "bag-sale-invoice",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create",
                    component: () => import("@/view/project/bag/bag-sale-invoice.vue")
                },
            ]
        },
        {
            path: "/stock-report",
            name: "stock-report",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create",
                    component: () => import("@/view/project/stock-report/create.vue")
                },
            ]
        },
        {
            path: "/role",
            name: "role",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_role",
                    component: () => import("@/view/project/role/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_role",
                    component: () => import("@/view/project/role/edit.vue")
                },
                {
                    path: "index",
                    name: "index_role",
                    component: () => import("@/view/project/role/index.vue")
                },

            ]
        },
        {
            path: "/user",
            name: "user",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_user",
                    component: () => import("@/view/project/user/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_user",
                    component: () => import("@/view/project/user/edit.vue")
                },
                {
                    path: "index",
                    name: "index_user",
                    component: () => import("@/view/project/user/index.vue")
                },

            ]
        },
        {
            path: "/account-type",
            name: "account_type",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_account_type",
                    component: () => import("@/view/project/account-type/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_account_type",
                    component: () => import("@/view/project/account-type/edit.vue")
                },
                {
                    path: "index",
                    name: "index_account_type",
                    component: () => import("@/view/project/account-type/index.vue")
                },
            ]
        },
        {
            path: "/account",
            name: "account",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_account",
                    component: () => import("@/view/project/account/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_account",
                    component: () => import("@/view/project/account/edit.vue")
                },
                {
                    path: "index",
                    name: "index_account",
                    component: () => import("@/view/project/account/index.vue")
                },
            ]
        },
        {
            path: "/parent-commodity",
            name: "parent_commodity",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_parent_commodity",
                    component: () => import("@/view/project/parent-commodity/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_parent_commodity",
                    component: () => import("@/view/project/parent-commodity/edit.vue")
                },
                {
                    path: "index",
                    name: "index_parent_commodity",
                    component: () => import("@/view/project/parent-commodity/index.vue")
                },
            ]
        },
        {
            path: "/commodity",
            name: "commodity",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_commodity",
                    component: () => import("@/view/project/commodity/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_commodity",
                    component: () => import("@/view/project/commodity/edit.vue")
                },
                {
                    path: "index",
                    name: "index_commodity",
                    component: () => import("@/view/project/commodity/index.vue")
                },
            ]
        },
        {
            path: "/crop",
            name: "category",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_category",
                    component: () => import("@/view/project/category/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_category",
                    component: () => import("@/view/project/category/edit.vue")
                },
                {
                    path: "index",
                    name: "index_category",
                    component: () => import("@/view/project/category/index.vue")
                },
            ]
        },
        {
            path: "/bag",
            name: "bag",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_bag",
                    component: () => import("@/view/project/bag/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_bag",
                    component: () => import("@/view/project/bag/edit.vue")
                },
                {
                    path: "index",
                    name: "index_bag",
                    component: () => import("@/view/project/bag/index.vue")
                },
            ]
        },
        {
            path: "/unit",
            name: "unit",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_unit",
                    component: () => import("@/view/project/unit/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_unit",
                    component: () => import("@/view/project/unit/edit.vue")
                },
                {
                    path: "index",
                    name: "index_unit",
                    component: () => import("@/view/project/unit/index.vue")
                },
            ]
        },
        {
            path: "/expense-head",
            name: "expense-head",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_expense_head",
                    component: () => import("@/view/project/expense-head/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_expense_head",
                    component: () => import("@/view/project/expense-head/edit.vue")
                },
                {
                    path: "index",
                    name: "index_expense_head",
                    component: () => import("@/view/project/expense-head/index.vue")
                },
            ]
        },
        {
            path: "/expense",
            name: "expense",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_expense",
                    component: () => import("@/view/project/expense/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_expense",
                    component: () => import("@/view/project/expense/edit.vue")
                },
                {
                    path: "index",
                    name: "index_expense",
                    component: () => import("@/view/project/expense/index.vue")
                },
            ]
        },
        {
            path: "/deduction",
            name: "deduction",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_deduction",
                    component: () => import("@/view/project/deduction/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_deduction",
                    component: () => import("@/view/project/deduction/edit.vue")
                },
                {
                    path: "index",
                    name: "index_deduction",
                    component: () => import("@/view/project/deduction/index.vue")
                },
            ]
        },
        {
            path: "/deduction-item",
            name: "deduction_item",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_deduction_item",
                    component: () => import("@/view/project/deduction-item/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_deduction_item",
                    component: () => import("@/view/project/deduction-item/edit.vue")
                },
                {
                    path: "index",
                    name: "index_deduction_item",
                    component: () => import("@/view/project/deduction-item/index.vue")
                },
            ]
        },
        {
            path: "/lot",
            name: "lot",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_lot",
                    component: () => import("@/view/project/lot/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_lot",
                    component: () => import("@/view/project/lot/edit.vue")
                },
                {
                    path: "index",
                    name: "index_lot",
                    component: () => import("@/view/project/lot/index.vue")
                },
            ]
        },
        {
            path: "/expense-template",
            name: "expense-template",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_expense_template",
                    component: () => import("@/view/project/expense-template/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_expense_template",
                    component: () => import("@/view/project/expense-template/edit.vue")
                },
                {
                    path: "index",
                    name: "index_expense_template",
                    component: () => import("@/view/project/expense-template/index.vue")
                },
            ]
        },
        {
            path: "/stock",
            name: "stock",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_stock",
                    component: () => import("@/view/project/stock/create.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_stock",
                    component: () => import("@/view/project/stock/edit.vue")
                },
                {
                    path: "index",
                    name: "index_stock",
                    component: () => import("@/view/project/stock/index.vue")
                },
            ]
        },
        {
            path: "/purchase-deal",
            name: "purchase_deal",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_deal_purchase",
                    component: () => import("@/view/project/deal/create.vue")
                },
                {
                    path: "index",
                    name: "index_deal_purchase",
                    component: () => import("@/view/project/deal/index.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_deal_purchase",
                    component: () => import("@/view/project/deal/edit.vue")
                },
                {
                    path: "show/:id",
                    name: "show_deal_purchase",
                    component: () => import("@/view/project/deal/show.vue")
                },
            ]
        },
        {
            path: "/sale-deal",
            name: "sale_deal",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create_deal_sale",
                    component: () => import("@/view/project/sale-deal/create.vue")
                },
                {
                    path: "index",
                    name: "index_deal_sale",
                    component: () => import("@/view/project/sale-deal/index.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_deal_sale",
                    component: () => import("@/view/project/sale-deal/edit.vue")
                },
                {
                    path: "show/:id",
                    name: "show_deal_sale",
                    component: () => import("@/view/project/sale-deal/show.vue")
                },
            ]
        },
        {
            path: "/purchase-invoice",
            name: "purchase-invoice",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create",
                    component: () => import("@/view/project/invoice/purchase-invoice.vue")
                },
                {
                    path: "index",
                    name: "index",
                    component: () => import("@/view/project/invoice/purchase-index.vue")
                },
                {
                    path: "invoice/:id",
                    name: "invoice_purchase",
                    component: () => import("@/view/project/invoice/invoice-print.vue")
                },
                {
                    path: "gate-pass/:id",
                    name: "gate-pass-purchase",
                    component: () => import("@/view/project/invoice/gate-pass-print.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_invoice_purchase",
                    component: () => import("@/view/project/invoice/purchase-edit.vue")
                },
            ]
        },
        {
            path: "/sale-invoice",
            name: "sale-invoice",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create",
                    component: () => import("@/view/project/invoice/sale-invoice.vue")
                },
                {
                    path: "index",
                    name: "index",
                    component: () => import("@/view/project/invoice/sale-index.vue")
                },
                {
                    path: "invoice/:id",
                    name: "invoice_sale",
                    component: () => import("@/view/project/invoice/invoice-print.vue")
                },
                {
                    path: "gate-pass/:id",
                    name: "gate-pass-sale",
                    component: () => import("@/view/project/invoice/gate-pass-print.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_invoice_sale",
                    component: () => import("@/view/project/invoice/sale-edit.vue")
                },
            ]
        },
        {
            path: "/arrival",
            name: "arrival",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "create",
                    name: "create",
                    component: () => import("@/view/project/arrival/create.vue")
                },
                {
                    path: "index",
                    name: "index_arrival",
                    component: () => import("@/view/project/arrival/index.vue")
                },
                {
                    path: "edit/:id",
                    name: "edit_arrival",
                    component: () => import("@/view/project/arrival/edit.vue")
                },
                {
                    path: "show/:id",
                    name: "show_arrival",
                    component: () => import("@/view/project/arrival/show.vue")
                },
                {
                    path: "arrival/:id",
                    name: "arrival_print",
                    component: () => import("@/view/project/arrival/arrival-print.vue")
                },
            ]
        },
        {
            path: "/chart-of-account",
            name: "chart-of-account",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "/",
                    name: "index_chart_of_account",
                    component: () => import("@/view/project/chart-of-account/index.vue")
                },
            ]
        },
        {
            path: "/activity-log",
            name: "activity-log",
            component: () => import("@/view/layout/Layout.vue"),
            children: [
                {
                    path: "index",
                    name: "index_activity_log",
                    component: () => import("@/view/project/activity-log/index.vue")
                },
                {
                    path: "arrival",
                    name: "arrival_activity_log",
                    component: () => import("@/view/project/activity-log/arrival.vue")
                },
                {
                    path: "arrival-type",
                    name: "arrival_type_activity_log",
                    component: () => import("@/view/project/activity-log/arrival-type.vue")
                },
                {
                    path: "bag",
                    name: "bag_activity_log",
                    component: () => import("@/view/project/activity-log/bag.vue")
                },
                {
                    path: "category",
                    name: "category_activity_log",
                    component: () => import("@/view/project/activity-log/category.vue")
                },
                {
                    path: "commodity",
                    name: "commodity_activity_log",
                    component: () => import("@/view/project/activity-log/commodity.vue")
                },
                {
                    path: "customer",
                    name: "customer_activity_log",
                    component: () => import("@/view/project/activity-log/customer.vue")
                },
                {
                    path: "deal",
                    name: "deal_activity_log",
                    component: () => import("@/view/project/activity-log/deal.vue")
                },
                {
                    path: "deal-commodity",
                    name: "deal_commodity_activity_log",
                    component: () => import("@/view/project/activity-log/deal-commodity.vue")
                },
                {
                    path: "deal-expense",
                    name: "deal_expense_activity_log",
                    component: () => import("@/view/project/activity-log/deal-expense.vue")
                },
                {
                    path: "expense",
                    name: "expense_activity_log",
                    component: () => import("@/view/project/activity-log/expense.vue")
                },
                {
                    path: "lot",
                    name: "lot_activity_log",
                    component: () => import("@/view/project/activity-log/lot.vue")
                },
                {
                    path: "template",
                    name: "template_activity_log",
                    component: () => import("@/view/project/activity-log/template.vue")
                },
                {
                    path: "template-type",
                    name: "template_type_activity_log",
                    component: () => import("@/view/project/activity-log/template-type.vue")
                },
                {
                    path: "unit",
                    name: "unit_activity_log",
                    component: () => import("@/view/project/activity-log/unit.vue")
                },
                {
                    path: "user",
                    name: "user_activity_log",
                    component: () => import("@/view/project/activity-log/user.vue")
                },
                {
                    path: "parent-commodity",
                    name: "parent_commodity_activity_log",
                    component: () => import("@/view/project/activity-log/parent-commodity.vue")
                },
                {
                    path: "deduction",
                    name: "deduction_activity_log",
                    component: () => import("@/view/project/activity-log/deduction.vue")
                },
                {
                    path: "deduction-item",
                    name: "deduction_item_activity_log",
                    component: () => import("@/view/project/activity-log/deduction-item.vue")
                },
            ]
        },
    {
      path: "/",
      redirect: "/login",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue")
        },
        {
          path: "/vue-bootstrap",
          name: "vue-bootstrap",
          component: () =>
            import("@/view/pages/vue-bootstrap/VueBootstrap.vue"),
          children: [
            {
              path: "alert",
              name: "vue-bootstrap-alert",
              component: () => import("@/view/pages/vue-bootstrap/Alert.vue")
            },
            {
              path: "badge",
              name: "vue-bootstrap-badge",
              component: () => import("@/view/pages/vue-bootstrap/Badge.vue")
            },
            {
              path: "button",
              name: "vue-bootstrap-button",
              component: () => import("@/view/pages/vue-bootstrap/Button.vue")
            },
            {
              path: "button-group",
              name: "vue-bootstrap-button-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/ButtonGroup.vue")
            },
            {
              path: "button-toolbar",
              name: "vue-bootstrap-button-toolbar",
              component: () =>
                import("@/view/pages/vue-bootstrap/ButtonToolbar.vue")
            },
            {
              path: "card",
              name: "vue-bootstrap-card",
              component: () => import("@/view/pages/vue-bootstrap/Card.vue")
            },
            {
              path: "carousel",
              name: "vue-bootstrap-carousel",
              component: () => import("@/view/pages/vue-bootstrap/Carousel.vue")
            },
            {
              path: "collapse",
              name: "vue-bootstrap-collapse",
              component: () => import("@/view/pages/vue-bootstrap/Collapse.vue")
            },
            {
              path: "dropdown",
              name: "vue-bootstrap-dropdown",
              component: () => import("@/view/pages/vue-bootstrap/Dropdown.vue")
            },
            {
              path: "embed",
              name: "vue-bootstrap-embed",
              component: () => import("@/view/pages/vue-bootstrap/Embed.vue")
            },
            {
              path: "form",
              name: "vue-bootstrap-form",
              component: () => import("@/view/pages/vue-bootstrap/Form.vue")
            },
            {
              path: "form-checkbox",
              name: "vue-bootstrap-form-checkbox",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormCheckbox.vue")
            },
            {
              path: "form-file",
              name: "vue-bootstrap-form-file",
              component: () => import("@/view/pages/vue-bootstrap/FormFile.vue")
            },
            {
              path: "form-group",
              name: "vue-bootstrap-form-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormGroup.vue")
            },
            {
              path: "form-input",
              name: "vue-bootstrap-form-input",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormInput.vue")
            },
            {
              path: "form-radio",
              name: "vue-bootstrap-form-radio",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormRadio.vue")
            },
            {
              path: "form-select",
              name: "vue-bootstrap-form-select",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormSelect.vue")
            },
            {
              path: "form-textarea",
              name: "vue-bootstrap-form-textarea",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormTextarea.vue")
            },
            {
              path: "image",
              name: "vue-bootstrap-image",
              component: () => import("@/view/pages/vue-bootstrap/Image.vue")
            },
            {
              path: "input-group",
              name: "vue-bootstrap-input-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/InputGroup.vue")
            },
            {
              path: "jumbotron",
              name: "vue-bootstrap-jumbotron",
              component: () =>
                import("@/view/pages/vue-bootstrap/Jumbotron.vue")
            },
            {
              path: "layout-grid-system",
              name: "vue-bootstrap-layout-grid-system",
              component: () =>
                import("@/view/pages/vue-bootstrap/LayoutGridSystem.vue")
            },
            {
              path: "link",
              name: "vue-bootstrap-link",
              component: () => import("@/view/pages/vue-bootstrap/Link.vue")
            },
            {
              path: "list-group",
              name: "vue-bootstrap-list-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/ListGroup.vue")
            },
            {
              path: "media",
              name: "vue-bootstrap-media",
              component: () => import("@/view/pages/vue-bootstrap/Media.vue")
            },
            {
              path: "modal",
              name: "vue-bootstrap-modal",
              component: () => import("@/view/pages/vue-bootstrap/Modal.vue")
            },
            {
              path: "nav",
              name: "vue-bootstrap-nav",
              component: () => import("@/view/pages/vue-bootstrap/Nav.vue")
            },
            {
              path: "navbar",
              name: "vue-bootstrap-navbar",
              component: () => import("@/view/pages/vue-bootstrap/Navbar.vue")
            },
            {
              path: "pagination",
              name: "vue-bootstrap-pagination",
              component: () =>
                import("@/view/pages/vue-bootstrap/Pagination.vue")
            },
            {
              path: "pagination-nav",
              name: "vue-bootstrap-pagination-nav",
              component: () =>
                import("@/view/pages/vue-bootstrap/PaginationNav.vue")
            },
            {
              path: "notify-popover",
              name: "vue-bootstrap-popover",
              component: () => import("@/view/pages/vue-bootstrap/Popover.vue")
            },
            {
              path: "notify-toasts",
              name: "vue-bootstrap-toasts",
              component: () => import("@/view/pages/vue-bootstrap/Toasts.vue")
            },
            {
              path: "notify-tooltip",
              name: "vue-bootstrap-tooltip",
              component: () => import("@/view/pages/vue-bootstrap/Tooltip.vue")
            },
            {
              path: "progress",
              name: "vue-bootstrap-progress",
              component: () => import("@/view/pages/vue-bootstrap/Progress.vue")
            },
            {
              path: "progress-spinner",
              name: "vue-bootstrap-spinner",
              component: () => import("@/view/pages/vue-bootstrap/Spinner.vue")
            },
            {
              path: "table",
              name: "vue-bootstrap-table",
              component: () => import("@/view/pages/vue-bootstrap/Table.vue")
            },
            {
              path: "tabs",
              name: "vue-bootstrap-tabs",
              component: () => import("@/view/pages/vue-bootstrap/Tabs.vue")
            }
          ]
        },
        {
          path: "/vuetify",
          name: "vuetify",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "alerts",
              name: "vuetify-alerts",
              component: () => import("@/view/pages/vuetify/Alerts.vue")
            },
            {
              path: "avatars",
              name: "vuetify-avatars",
              component: () => import("@/view/pages/vuetify/Avatars.vue")
            },
            {
              path: "badges",
              name: "vuetify-badges",
              component: () => import("@/view/pages/vuetify/Badges.vue")
            },
            {
              path: "buttons",
              name: "vuetify-buttons",
              component: () => import("@/view/pages/vuetify/Buttons.vue")
            },
            {
              path: "calendars",
              name: "vuetify-calendars",
              component: () => import("@/view/pages/vuetify/Calendars.vue")
            },
            {
              path: "cards",
              name: "vuetify-cards",
              component: () => import("@/view/pages/vuetify/Cards.vue")
            },
            {
              path: "chips",
              name: "vuetify-chips",
              component: () => import("@/view/pages/vuetify/Chips.vue")
            },
            {
              path: "dialog",
              name: "vuetify-dialog",
              component: () => import("@/view/pages/vuetify/Dialog.vue")
            },
            {
              path: "forms-autocompletes",
              name: "vuetify-autocompletes",
              component: () =>
                import("@/view/pages/vuetify/forms/Autocompletes.vue")
            },
            {
              path: "forms-file-inputs",
              name: "vuetify-file-inputs",
              component: () =>
                import("@/view/pages/vuetify/forms/FileInputs.vue")
            },
            {
              path: "forms",
              name: "vuetify-forms",
              component: () => import("@/view/pages/vuetify/forms/Forms.vue")
            },
            {
              path: "forms-selection-controls",
              name: "vuetify-selection-controls",
              component: () =>
                import("@/view/pages/vuetify/forms/SelectionControls.vue")
            },
            {
              path: "forms-selects",
              name: "vuetify-selects",
              component: () => import("@/view/pages/vuetify/forms/Selects.vue")
            },
            {
              path: "forms-textareas",
              name: "vuetify-textareas",
              component: () =>
                import("@/view/pages/vuetify/forms/Textareas.vue")
            },
            {
              path: "forms-text-fields",
              name: "vuetify-text-fields",
              component: () =>
                import("@/view/pages/vuetify/forms/TextFields.vue")
            },
            {
              path: "tables-simple-tables",
              name: "vuetify-simple-tables",
              component: () =>
                import("@/view/pages/vuetify/tables/SimpleTables.vue")
            },
            {
              path: "tables-data-tables",
              name: "vuetify-data-tables",
              component: () =>
                import("@/view/pages/vuetify/tables/DataTables.vue")
            },
            {
              path: "tabs",
              name: "vuetify-tabs",
              component: () => import("@/view/pages/vuetify/Tabs.vue")
            },
            {
              path: "timelines",
              name: "vuetify-timelines",
              component: () => import("@/view/pages/vuetify/Timelines.vue")
            },
            {
              path: "tooltips",
              name: "vuetify-tooltips",
              component: () => import("@/view/pages/vuetify/Tooltips.vue")
            },
            {
              path: "treeview",
              name: "vuetify-treeview",
              component: () => import("@/view/pages/vuetify/Treeview.vue")
            }
          ]
        },
        {
          path: "/custom-wizard",
          name: "wizard",
          component: () => import("@/view/pages/wizard/Wizard.vue"),
          children: [
            {
              path: "wizard-1",
              name: "wizard-1",
              component: () => import("@/view/pages/wizard/Wizard-1.vue")
            },
            {
              path: "wizard-2",
              name: "wizard-2",
              component: () => import("@/view/pages/wizard/Wizard-2.vue")
            },
            {
              path: "wizard-3",
              name: "wizard-3",
              component: () => import("@/view/pages/wizard/Wizard-3.vue")
            },
            {
              path: "wizard-4",
              name: "wizard-4",
              component: () => import("@/view/pages/wizard/Wizard-4.vue")
            }
          ]
        },
        {
          path: "/custom-plugins",
          name: "plugins",
          component: () => import("@/view/pages/plugins/Plugins.vue"),
          children: [
            {
              path: "cropper",
              name: "cropper",
              component: () => import("@/view/pages/plugins/Cropper.vue")
            },
            {
              path: "treeselect",
              name: "treeselect",
              component: () => import("@/view/pages/plugins/Treeselect.vue")
            }
          ]
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/view/pages/profile/Profile.vue"),
          children: [
            {
              path: "profile-1",
              name: "profile-1",
              component: () => import("@/view/pages/profile/Profile-1.vue")
            },
            {
              path: "profile-2",
              name: "profile-2",
              component: () => import("@/view/pages/profile/Profile-2.vue")
            },
            {
              path: "profile-3",
              name: "profile-3",
              component: () => import("@/view/pages/profile/Profile-3.vue")
            },
            {
              path: "profile-4",
              name: "profile-4",
              component: () => import("@/view/pages/profile/Profile-4.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/custom-error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        },
        {
          path: "error-2",
          name: "error-2",
          component: () => import("@/view/pages/error/Error-2.vue")
        },
        {
          path: "error-3",
          name: "error-3",
          component: () => import("@/view/pages/error/Error-3.vue")
        },
        {
          path: "error-4",
          name: "error-4",
          component: () => import("@/view/pages/error/Error-4.vue")
        },
        {
          path: "error-5",
          name: "error-5",
          component: () => import("@/view/pages/error/Error-5.vue")
        },
        {
          path: "error-6",
          name: "error-6",
          component: () => import("@/view/pages/error/Error-6.vue")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
