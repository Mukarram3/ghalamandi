<template>
    <ul class="menu-nav">
        <router-link
            to="/dashboard"
            v-slot="{ href, navigate, isActive, isExactActive }"
        >
            <li
                aria-haspopup="true"
                data-menu-toggle="hover"
                class="menu-item"
                :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
            >
                <a :href="href" class="menu-link" @click="navigate">
                    <span class="menu-text"> Dashboard </span>
                </a>
            </li>
        </router-link>

        <!--    <router-link-->
        <!--      to="/builder"-->
        <!--      v-slot="{ href, navigate, isActive, isExactActive }"-->
        <!--    >-->
        <!--      <li-->
        <!--        aria-haspopup="true"-->
        <!--        data-menu-toggle="hover"-->
        <!--        class="menu-item"-->
        <!--        :class="[-->
        <!--          isActive && 'menu-item-active',-->
        <!--          isExactActive && 'menu-item-active'-->
        <!--        ]"-->
        <!--      >-->
        <!--        <a :href="href" class="menu-link" @click="navigate">-->
        <!--          <span class="menu-text"> Builder </span>-->
        <!--        </a>-->
        <!--      </li>-->
        <!--    </router-link>-->
        <li
            aria-haspopup="true"
            data-menu-toggle="click"
            class="menu-item menu-item-submenu menu-item-open-dropdown"
            v-bind:class="{ 'menu-item-active': hasActiveChildren('vuetify') }"
        >
            <a href="#" class="menu-link menu-toggle">
                <span class="menu-text"> Activity Logs </span>
            </a>
            <div class="menu-submenu menu-submenu-fixed">
                <div class="menu-subnav megamenu" style="max-width: 800px;">
                    <ul class="menu-content">
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Activity Logs </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/activity-log/user"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Users </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/unit"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Units </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/bag"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Bags </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/arrival"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Arrivals </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/arrival-type"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Arrival Types </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Profit Margins </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/activity-log/category"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Crops </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/parent-commodity"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Parent Commodities </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/commodity"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Commodities </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/customer"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[isActive && 'menu-item-active',isExactActive && 'menu-item-active']"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Customers </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/deal"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Deals </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Staff Management </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/activity-log/deal-commodity"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Deal Commodities </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/deal-expense"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Deal Expenses </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/expense"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Expenses </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/lot"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Lots </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/template"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Templates </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Tools </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">

                                <router-link
                                    to="/activity-log/template-type"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Template Types </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/deduction"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Deductions </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/activity-log/deduction-item"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Deduction Items </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </li>

        <li
            aria-haspopup="true"
            data-menu-toggle="click"
            class="menu-item menu-item-submenu menu-item-open-dropdown"
            v-bind:class="{ 'menu-item-active': hasActiveChildren('/vue-bootstrap') }"
        >
            <a href="#" class="menu-link menu-toggle">
                <span class="menu-text"> Account </span>
            </a>
            <div class="menu-submenu menu-submenu-fixed">
                <div class="menu-subnav megamenu" style="max-width: 1000px;">
                    <ul class="menu-content">
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--&lt;!&ndash;                                <span class="menu-text"> Task Reports </span>&ndash;&gt;-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/role/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Roles & Permissions </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/user/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Users </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/account-type/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Account Type </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/account/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Accounts </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
<!--                        <li class="menu-item">-->
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Profit Margins </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
<!--                            <ul class="menu-inner">-->
<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/collapse"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Collapse </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/dropdown"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Dropdown </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/embed"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Embed </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form-checkbox"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form Checkbox </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form-file"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form File </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form-group"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form Group </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form-input"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form Input </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->
<!--                            </ul>-->
<!--                        </li>-->
<!--                        <li class="menu-item">-->
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Staff Management </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
<!--                            <ul class="menu-inner">-->
<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form-radio"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form Radio </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form-select"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form Select </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/form-textarea"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Form Textarea </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/image"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Image </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/input-group"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Input Group </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/jumbotron"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Jumbotron </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->
<!--                                <router-link-->
<!--                                    to="layout-grid-system"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Layout Grid System </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->
<!--                            </ul>-->
<!--                        </li>-->
<!--                        <li class="menu-item">-->
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Tools </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
<!--                            <ul class="menu-inner">-->
<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/link"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Link </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/list-group"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> List Group </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/media"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Media </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/modal"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Modal </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/nav"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Nav </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/navbar"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Navbar </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/pagination"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Pagination </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/pagination-nav"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Pagination Nav </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->
<!--                            </ul>-->
<!--                        </li>-->
<!--                        <li class="menu-item">-->
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Misc </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
<!--                            <ul class="menu-inner">-->
<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/notify-popover"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Popover </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/progress"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Progress </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/progress-spinner"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Spinner </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/table"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Table </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/tabs"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Tabs </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/notify-toasts"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Toasts </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vue-bootstrap/notify-tooltip"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Tooltip </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->
<!--                            </ul>-->
<!--                        </li>-->
                    </ul>
                </div>
            </div>
        </li>
        <li
            aria-haspopup="true"
            data-menu-toggle="click"
            class="menu-item menu-item-submenu menu-item-open-dropdown"
            v-bind:class="{ 'menu-item-active': hasActiveChildren('vuetify') }"
        >
            <a href="#" class="menu-link menu-toggle">
                <span class="menu-text"> Manage </span>
            </a>
            <div class="menu-submenu menu-submenu-fixed">
                <div class="menu-subnav megamenu" style="max-width: 800px;">
                    <ul class="menu-content">
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Task Reports </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/unit/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Units </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/bag/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Bags </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/crop/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Crops </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/parent-commodity/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Parent Commodities </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/commodity/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Commodities </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Profit Margins </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/purchase-deal/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Purchase Deals </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/sale-deal/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Sale Deals </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/arrival/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Arrivals </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/purchase-invoice/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Purchase Invoices </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/sale-invoice/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Sale Invoices </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Staff Management </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/chart-of-account"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Chart of Account </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/deduction/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Deductions </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/deduction-item/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Deduction Items </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/expense-head/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Expense Heads </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/expense/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Expenses </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <li class="menu-item">
<!--                            <h3 class="menu-heading menu-toggle">-->
<!--                                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                <span class="menu-text"> Tools </span>-->
<!--                                <i class="menu-arrow"></i>-->
<!--                            </h3>-->
                            <ul class="menu-inner">
                                <router-link
                                    to="/expense-template/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Expense Template </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/lot/index"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Lots </span>
                                        </a>
                                    </li>
                                </router-link>

<!--                                <router-link-->
<!--                                    to="/vuetify/tabs"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Tabs </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vuetify/timelines"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Timelines </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vuetify/tooltips"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Tooltips </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    to="/vuetify/treeview"-->
<!--                                    v-slot="{ href, navigate, isActive, isExactActive }"-->
<!--                                >-->
<!--                                    <li-->
<!--                                        aria-haspopup="true"-->
<!--                                        class="menu-item"-->
<!--                                        :class="[-->
<!--                      isActive && 'menu-item-active',-->
<!--                      isExactActive && 'menu-item-active'-->
<!--                    ]"-->
<!--                                    >-->
<!--                                        <a :href="href" class="menu-link" @click="navigate">-->
<!--                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
<!--                                            <span class="menu-text"> Treeview </span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </router-link>-->
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li
            aria-haspopup="true"
            data-menu-toggle="click"
            class="menu-item menu-item-submenu menu-item-open-dropdown"
            v-bind:class="{ 'menu-item-active': hasActiveChildren('/custom') }"
        >
            <a href="#" class="menu-link menu-toggle">
                <span class="menu-text"> Reports </span>
            </a>
            <div class="menu-submenu menu-submenu-classic">
                <ul class="menu-subnav">
                    <li
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                        class="menu-item menu-item-submenu"
                    >
                        <a href="#" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-list-2"></i>
                            <span class="menu-text"> Error Pages </span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                            <ul class="menu-subnav">
                                <router-link
                                    to="/custom-error/error-1"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Error 1 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-error/error-2"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Error 2 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-error/error-3"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Error 3 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-error/error-4"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Error 4 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-error/error-5"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Error 5 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-error/error-6"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Error 6 </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </li>
                    <li
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                        class="menu-item menu-item-submenu"
                        v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-wizard/wizard')
            }"
                    >
                        <a href="#" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-mail-1"></i>
                            <span class="menu-text"> Wizard </span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                            <ul class="menu-subnav">
                                <router-link
                                    to="/custom-wizard/wizard-1"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Wizard 1 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-wizard/wizard-2"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Wizard 2 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-wizard/wizard-3"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Wizard 3 </span>
                                        </a>
                                    </li>
                                </router-link>

                                <router-link
                                    to="/custom-wizard/wizard-4"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Wizard 4 </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </li>

                    <li
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                        class="menu-item menu-item-submenu"
                        v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-plugins')
            }"
                    >
                        <a href="#" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-image-file"></i>
                            <span class="menu-text"> Plugins </span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                            <ul class="menu-subnav">
                                <router-link
                                    to="/custom-plugins/cropper"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Cropper </span>
                                        </a>
                                    </li>
                                </router-link>
                                <router-link
                                    to="/custom-plugins/treeselect"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text"> Treeselect </span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </li>

                    <li
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                        class="menu-item menu-item-submenu"
                        v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-pages')
            }"
                    >
                        <a href="#" class="menu-link menu-toggle">
                            <i class="menu-icon far fa-user"></i>
                            <span class="menu-text">Profile</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                            <ul class="menu-subnav">
                                <router-link
                                    to="/profile/profile-1"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text">Profile 1</span>
                                        </a>
                                    </li>
                                </router-link>
                                <router-link
                                    to="/profile/profile-2"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text">Profile 2</span>
                                        </a>
                                    </li>
                                </router-link>
                                <router-link
                                    to="/profile/profile-3"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text">Profile 3</span>
                                        </a>
                                    </li>
                                </router-link>
                                <router-link
                                    to="/profile/profile-4"
                                    v-slot="{ href, navigate, isActive, isExactActive }"
                                >
                                    <li
                                        aria-haspopup="true"
                                        data-menu-toggle="hover"
                                        class="menu-item"
                                        :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                                    >
                                        <a :href="href" class="menu-link" @click="navigate">
                                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                                            <span class="menu-text">Profile 4</span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "KTMenu",
    methods: {
        hasActiveChildren(match) {
            return this.$route["path"].indexOf(match) !== -1;
        }
    }
};
</script>
