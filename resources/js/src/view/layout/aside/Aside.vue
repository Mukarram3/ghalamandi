<template>
  <div class="aside aside-left d-flex flex-column" id="kt_aside" ref="kt_aside">
    <!--begin::Brand-->
    <div
      class="aside-brand d-flex flex-column align-items-center flex-column-auto pt-5 pt-lg-18 pb-10"
    >
      <!--begin::Logo-->
      <div
        class="btn p-0 symbol symbol-60 symbol-light-primary"
        id="kt_quick_user_toggle"
      >
        <router-link to="/dashboard">
          <div class="symbol-label">
            <inline-svg
              alt="Logo"
              src="media/svg/avatars/001-boy.svg"
              class="h-75 align-self-end"
            />
          </div>
        </router-link>
      </div>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->
    <!--begin::Nav Wrapper-->
    <div
      class="aside-nav d-flex flex-column align-items-center flex-column-fluid pb-10"
    >
      <!--begin::Nav-->
      <ul class="nav flex-column">
        <!--begin::Item-->
        <li class="nav-item mb-2" v-b-tooltip.hover.right="'Dashboard'">
          <router-link to="/dashboard"
            class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
          >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" />
              <!--end::Svg Icon-->
            </span>
          </router-link>
        </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Roles & Permissions'">
              <router-link
                  to="/role/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Communication/Shield-thunder.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Users'">
              <router-link
                  to="/user/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Communication/Contact1.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Account Types'">
              <router-link
                  to="/account-type/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Communication/Add-user.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Accounts'">
              <router-link
                  to="/account/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Communication/Group.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Crops'">
              <router-link
                  to="/crop/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active">
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/General/Clipboard.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Units'">
              <router-link
                  to="/unit/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active">
            <span class="svg-icon svg-icon-xxl">
              <inline-svg src="media/svg/icons/Home/Weight2.svg" />
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Bags'">
              <router-link
                  to="/bag/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active">
            <span class="svg-icon svg-icon-xxl">
              <inline-svg src="media/svg/icons/Shopping/Bag1.svg" />
            </span>
              </router-link>
          </li>

<!--          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Parent Commodities'">-->
<!--              <router-link-->
<!--                  to="/parent-commodity/index"-->
<!--                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"-->
<!--              >-->
<!--            <span class="svg-icon svg-icon-xxl">-->
<!--              &lt;!&ndash;begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg&ndash;&gt;-->
<!--              <inline-svg src="media/svg/icons/Food/Carrot.svg" />-->
<!--                &lt;!&ndash;end::Svg Icon&ndash;&gt;-->
<!--            </span>-->
<!--              </router-link>-->
<!--          </li>-->

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Commodities'">
              <router-link
                  to="/commodity/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Food/Cookie.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>


          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Purchase Deals'">
              <router-link
                  to="/purchase-deal/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Files/Downloads-folder.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Sale Deals'">
              <router-link
                  to="/sale-deal/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Files/Upload-folder.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Arrivals'">
              <router-link
                  to="/arrival/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active">
            <span class="svg-icon svg-icon-xxl">
              <inline-svg src="media/svg/icons/Communication/Incoming-box.svg" />
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Purchase Invoices'">
              <router-link
                  to="/purchase-invoice/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Barcode-read.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Sale Invoices'">
              <router-link
                  to="/sale-invoice/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Barcode-read.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <!--begin::Item-->
          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Deduction Head'">
              <router-link
                  to="/deduction/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Wallet3.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <!--begin::Item-->
          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Deductions'">
              <router-link
                  to="/deduction-item/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Wallet3.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <!--begin::Item-->
          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Expense Head'">
              <router-link
                  to="/expense-head/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Money.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <!--begin::Item-->
          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Expenses'">
              <router-link
                  to="/expense/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Money.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Expense Templates'">
              <router-link
                  to="/expense-template/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Calculator.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

          <li class="nav-item mb-2" v-b-tooltip.hover.right="'Lots'">
              <router-link
                  to="/lot/index"
                  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
              >
            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Shopping/Sort3.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>

        <li
          class="nav-item mb-2"
          v-b-tooltip.hover.right="'Activity Log'"
        >

              <router-link to="/activity-log/index" class="nav-link btn btn-icon btn-hover-text-primary btn-lg">


            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/General/Shield-check.svg-->
              <inline-svg src="media/svg/icons/Devices/Display1.svg" />
              <!--end::Svg Icon-->
            </span>
              </router-link>
        </li>

          <li
              class="nav-item mb-2"
              v-b-tooltip.hover.right="'Chart Of Account'"
          >

              <router-link to="/chart-of-account" class="nav-link btn btn-icon btn-hover-text-primary btn-lg">


            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/General/Shield-check.svg-->
              <inline-svg src="media/svg/icons/Shopping/Chart-line1.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>
          <li
              class="nav-item mb-2"
              v-b-tooltip.hover.right="'Journal Voucher'"
          >

              <router-link to="/journal-voucher/create" class="nav-link btn btn-icon btn-hover-text-primary btn-lg">


            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/General/Shield-check.svg-->
              <inline-svg src="media/svg/icons/Files/File-plus.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>
          <li
              class="nav-item mb-2"
              v-b-tooltip.hover.right="'Debit Voucher'"
          >

              <router-link to="/debit-voucher/create" class="nav-link btn btn-icon btn-hover-text-primary btn-lg">


            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/General/Shield-check.svg-->
              <inline-svg src="media/svg/icons/Files/File-plus.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>
          <li
              class="nav-item mb-2"
              v-b-tooltip.hover.right="'Bag Sale Invoice'"
          >

              <router-link to="/bag-sale-invoice/create" class="nav-link btn btn-icon btn-hover-text-primary btn-lg">


            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/General/Shield-check.svg-->
              <inline-svg src="media/svg/icons/Files/File-plus.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>
          <li
              class="nav-item mb-2"
              v-b-tooltip.hover.right="'Stock Report'"
          >

              <router-link to="/stock-report/create" class="nav-link btn btn-icon btn-hover-text-primary btn-lg">


            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/General/Shield-check.svg-->
              <inline-svg src="media/svg/icons/Files/Export.svg" />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>
          <li
              class="nav-item mb-2"
              v-b-tooltip.hover.right="'Logout'"
          >

              <router-link to="/logout" class="nav-link btn btn-icon btn-hover-text-primary btn-lg">


            <span class="svg-icon svg-icon-xxl">
              <!--begin::Svg Icon | path:assets/media/svg/icons/General/Shield-check.svg-->
              <inline-svg src="media/svg/icons/logout.svg " />
                <!--end::Svg Icon-->
            </span>
              </router-link>
          </li>
        <!--end::Item-->
        <!--begin::Item-->
<!--        <li class="nav-item mb-2" v-b-tooltip.hover.right="'User Management'">-->
<!--          <a-->
<!--            href="#"-->
<!--            class="nav-link btn btn-icon btn-hover-text-primary btn-lg"-->
<!--            data-toggle="tab"-->
<!--            data-target="#kt_aside_tab_5"-->
<!--            role="tab"-->
<!--          >-->
<!--            <span class="svg-icon svg-icon-xxl">-->
<!--              &lt;!&ndash;begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg&ndash;&gt;-->
<!--              <inline-svg src="media/svg/icons/Home/Library.svg" />-->
<!--              &lt;!&ndash;end::Svg Icon&ndash;&gt;-->
<!--            </span>-->
<!--          </a>-->
<!--        </li>-->
        <!--end::Item-->
        <!--begin::Item-->
<!--        <li-->
<!--          class="nav-item mb-2"-->
<!--          v-b-tooltip.hover.right="'Finance &amp; Accounting'"-->
<!--        >-->
<!--          <a-->
<!--            href="#"-->
<!--            class="nav-link btn btn-icon btn-hover-text-primary btn-lg"-->
<!--            data-toggle="tab"-->
<!--            data-target="#kt_aside_tab_6"-->
<!--            role="tab"-->
<!--          >-->
<!--            <span class="svg-icon svg-icon-xxl">-->
<!--              &lt;!&ndash;begin::Svg Icon | path:assets/media/svg/icons/Files/File-plus.svg&ndash;&gt;-->
<!--              <inline-svg src="media/svg/icons/Files/File-plus.svg" />-->
<!--              &lt;!&ndash;end::Svg Icon&ndash;&gt;-->
<!--            </span>-->
<!--          </a>-->
<!--        </li>-->
        <!--end::Item-->
      </ul>
      <!--end::Nav-->
    </div>
    <!--end::Nav Wrapper-->
    <!--begin::Footer-->
    <div
      class="aside-footer d-flex flex-column align-items-center flex-column-auto py-8"
    >
<!--      <KTQuickNotifications></KTQuickNotifications>-->
<!--      <KTQuickActions></KTQuickActions>-->
<!--      <KTQuickPanel></KTQuickPanel>-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import KTLayoutAside from "@/assets/js/layout/base/aside.js";
import KTQuickNotifications from "@/view/layout/extras/offcanvas/QuickNotifications.vue";
import KTQuickActions from "@/view/layout/extras/offcanvas/QuickActions.vue";
import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel.vue";

export default {
  name: "Aside",
  components: {
    KTQuickNotifications,
    KTQuickActions,
    KTQuickPanel
  },
  mounted() {
    this.$nextTick(() => {
      // Init Aside
      KTLayoutAside.init(this.$refs["kt_aside"]);
    });
  }
};
</script>
