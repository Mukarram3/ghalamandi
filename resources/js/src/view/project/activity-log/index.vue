<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleArrival" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchArrival"
                                    placeholder="Search by id.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="headers"
                                    :items="filteredList"
                                    :search="searchArrival"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = dessertsTotal
                                    @pagination="paginateArrivals"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreArrival(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteArrival(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleArrivalTypes" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchArrivalType"
                                    placeholder="Search by id.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="arrivalTypeHeaders"
                                    :items="filteredListArrivalTypes"
                                    :search="searchArrivalType"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = arrivalTypesTotal
                                    @pagination="paginateArrivalTypes"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreArrivalType(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteArrivalType(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleBags" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchBag"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="bagHeaders"
                                    :items="filteredListBags"
                                    :search="searchBag"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = bagsTotal
                                    @pagination="paginateBags"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreBag(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteBag(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleCrops" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchCrop"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="cropHeaders"
                                    :items="filteredListCrops"
                                    :search="searchCrop"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = cropsTotal
                                    @pagination="paginateCrops"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreCategory(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteCategory(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleParentCommodities" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchParentCommodity"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="parentCommodityHeaders"
                                    :items="filteredListparentCommodities"
                                    :search="searchParentCommodity"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = parentCommoditiesTotal
                                    @pagination="paginateParentCommodities"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreParentCommodity(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteParentCommodity(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleCommodities" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchCommodity"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="commodityHeaders"
                                    :items="filteredListCommodities"
                                    :search="searchCommodity"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = commoditiesTotal
                                    @pagination="paginateCommodities"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreCommodity(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteCommodity(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleCustomers" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchCustomer"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="customerHeaders"
                                    :items="filteredListCustomers"
                                    :search="searchCustomer"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = customersTotal
                                    @pagination="paginateCustomers"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreCustomer(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteCustomer(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleDeals" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchDeal"
                                    placeholder="Search by id.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="dealHeaders"
                                    :items="filteredListDeals"
                                    :search="searchDeal"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = dealsTotal
                                    @pagination="paginateDeals"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreDeal(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteDeal(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleDealCommodities" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchDealCommodity"
                                    placeholder="Search by id.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="dealCommodityHeaders"
                                    :items="filteredListDealCommodities"
                                    :search="searchDealCommodity"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = dealCommoditiesTotal
                                    @pagination="paginateDealCommodities"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreDealCommodity(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteDealCommodity(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleDealExpenses" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchDealExpense"
                                    placeholder="Search by id.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="dealExpenseHeaders"
                                    :items="filteredListDealExpenses"
                                    :search="searchDealExpense"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = dealExpensesTotal
                                    @pagination="paginateDealExpenses"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreDealExpense(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteDealExpense(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleExpenses" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchExpense"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="expenseHeaders"
                                    :items="filteredListExpenses"
                                    :search="searchExpense"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = expensesTotal
                                    @pagination="paginateExpenses"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreExpense(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteExpense(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleLots" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchLot"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="lotHeaders"
                                    :items="filteredListLots"
                                    :search="searchLot"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = lotsTotal
                                    @pagination="paginateLots"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreLot(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteLot(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleTemplates" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchTemplate"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="templateHeaders"
                                    :items="filteredListTemplates"
                                    :search="searchTemplate"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = templatesTotal
                                    @pagination="paginateTemplates"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreTemplate(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteTemplate(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleTemplateTypes" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchTemplateType"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="templateTypeHeaders"
                                    :items="filteredListTemplateTypes"
                                    :search="searchTemplateType"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = templateTypesTotal
                                    @pagination="paginateTemplateTypes"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreTemplateType(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteTemplateType(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleUnits" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchUnit"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="unitHeaders"
                                    :items="filteredListUnits"
                                    :search="searchUnit"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = unitsTotal
                                    @pagination="paginateUnits"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreUnit(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteUnit(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleUsers" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchUser"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="userHeaders"
                                    :items="filteredListUsers"
                                    :search="searchUser"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = usersTotal
                                    @pagination="paginateUsers"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreUser(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteUser(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
                        </div>
                    </template>
                </KTCard>
            </div>
        </div>

    </div>
</template>


<script>
    import 'vuetify/dist/vuetify.min.css'
    import KTCard from "@/view/content/Card.vue";
    import ApiService from "@/core/services/api.service";
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import Swal from "sweetalert2";

    export default {
        components:{KTCard},
        data(){
            return{
                titleArrival:'Activity Log (Arrivals)',
                titleArrivalTypes:'Activity Log (Arrival Types)',
                titleBags:'Activity Log (Bags)',
                titleCrops:'Activity Log (Crops)',
                titleCommodities:'Activity Log (Commodities)',
                titleCustomers:'Activity Log (Customers)',
                titleDeals:'Activity Log (Deals)',
                titleDealCommodities:'Activity Log (Deal Commodities)',
                titleDealExpenses:'Activity Log (Deal Expenses)',
                titleExpenses:'Activity Log (Expenses)',
                titleLots:'Activity Log (Lots)',
                titleTemplates:'Activity Log (Templates)',
                titleTemplateTypes:'Activity Log (Template Types)',
                titleUnits:'Activity Log (Units)',
                titleUsers:'Activity Log (Users)',
                titleParentCommodities:'Activity Log (Parent Commodities)',
                show: true,

                searchArrival: '',
                searchArrivalType: '',
                searchBag: '',
                searchCrop: '',
                searchCommodity: '',
                searchCustomer: '',
                searchDeal: '',
                searchDealCommodity: '',
                searchDealExpense: '',
                searchExpense: '',
                searchLot: '',
                searchTemplate: '',
                searchTemplateType: '',
                searchUnit: '',
                searchUser: '',
                searchParentCommodity: '',

                itemindex:0,
                headers: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Deal Id', value: 'deal_id' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                desserts:[],
                dessertsTotal: 0,

                arrivalTypeHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Arrival Id', value: 'arrival_id' },
                    { text: 'Deal Id', value: 'deal_id' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                arrivalTypes:[],
                arrivalTypesTotal: 0,

                bagHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Price', value: 'price' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                bags:[],
                bagsTotal: 0,

                cropHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Name (Urdu)', value: 'name_urdu' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                crops:[],
                cropsTotal: 0,

                commodityHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Name (Urdu)', value: 'name_urdu' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                commodities:[],
                commoditiesTotal: 0,

                customerHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Name (Urdu)', value: 'name_urdu' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                customers:[],
                customersTotal: 0,

                dealHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'description', value: 'desc' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                deals:[],
                dealsTotal: 0,

                dealCommodityHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Deal Id', value: 'deal_id' },
                    { text: 'Commodity Id', value: 'commodity_id' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                dealCommodities:[],
                dealCommoditiesTotal: 0,

                dealExpenseHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Deal Id', value: 'deal_id' },
                    { text: 'Expense Id', value: 'expense_id' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                dealExpenses:[],
                dealExpensesTotal: 0,

                expenseHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Payment Type', value: 'payment_type' },
                    { text: 'Price', value: 'price' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                expenses:[],
                expensesTotal: 0,

                lotHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                lots:[],
                lotsTotal: 0,

                templateHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Description', value: 'desc' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                templates:[],
                templatesTotal: 0,

                templateTypeHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Template Id', value: 'temp_id' },
                    { text: 'Expense Id', value: 'expense_id' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                templateTypes:[],
                templateTypesTotal: 0,

                unitHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Weight', value: 'kgs' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                units:[],
                unitsTotal: 0,

                userHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Email', value: 'email' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                users:[],
                usersTotal: 0,

                parentCommodityHeaders: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Name (Urdu)', value: 'name_urdu' },
                    { text: 'Deleted At', value: 'deleted_at' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                parentCommodities:[],
                parentCommoditiesTotal: 0,

            }
        },
        computed: {
            filteredList(){
                return this.desserts.filter( item =>{
                    return String(item.id).includes(this.searchArrival);
                })
            },
            filteredListArrivalTypes(){
                return this.arrivalTypes.filter( item =>{
                    return String(item.id).includes(this.searchArrivalType);
                })
            },
            filteredListBags(){
                return this.bags.filter( item =>{
                    return item.name.toLowerCase().match(this.searchBag.toLowerCase());
                } )
            },
            filteredListCrops(){
                return this.crops.filter( item =>{
                    return item.name.toLowerCase().match(this.searchCrop.toLowerCase());
                } )
            },
            filteredListCommodities(){
                return this.commodities.filter( item =>{
                    return item.name.toLowerCase().match(this.searchCommodity.toLowerCase());
                } )
            },
            filteredListCustomers(){
                return this.customers.filter( item =>{
                    return item.name.toLowerCase().match(this.searchCustomer.toLowerCase());
                } )
            },
            filteredListDeals(){
                return this.deals.filter( item =>{
                    return String(item.id).includes(this.searchDeal);
                })
            },
            filteredListDealCommodities(){
                return this.dealCommodities.filter( item =>{
                    return String(item.id).includes(this.searchDealCommodity);
                })
            },
            filteredListDealExpenses(){
                return this.dealExpenses.filter( item =>{
                    return String(item.id).includes(this.searchDealCommodity);
                })
            },
            filteredListExpenses(){
                return this.expenses.filter( item =>{
                    return item.name.toLowerCase().match(this.searchExpense.toLowerCase());
                } )
            },
            filteredListLots(){
                return this.lots.filter( item =>{
                    return item.name.toLowerCase().match(this.searchLot.toLowerCase());
                } )
            },
            filteredListTemplates(){
                return this.templates.filter( item =>{
                    return item.name.toLowerCase().match(this.searchTemplate.toLowerCase());
                } )
            },
            filteredListTemplateTypes(){
                return this.templateTypes.filter( item =>{
                    return String(item.id).includes(this.searchTemplateType);
                })
            },
            filteredListUnits(){
                return this.units.filter( item =>{
                    return item.name.toLowerCase().match(this.searchUnit.toLowerCase());
                } )
            },
            filteredListUsers(){
                return this.users.filter( item =>{
                    return item.name.toLowerCase().match(this.searchUser.toLowerCase());
                } )
            },
            filteredListparentCommodities(){
                return this.parentCommodities.filter( item =>{
                    return item.name.toLowerCase().match(this.searchParentCommodity.toLowerCase());
                } )
            },
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Manage Bags" }]);
        },
        methods: {
            paginateArrivals(e) {
                console.dir(e);
                ApiService.get(`/api/activity-log/fetch-arrivals?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.desserts = res.data.data;
                        this.dessertsTotal = res.data.total;
                    });
            },
            paginateArrivalTypes(e) {
                console.dir(e);
                ApiService.get(`/api/activity-log/fetch-arrival-types?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.arrivalTypes = res.data.data;
                        this.arrivalTypesTotal = res.data.total;
                    });
            },
            paginateBags(e) {
                console.dir(e);
                ApiService.get(`/api/activity-log/fetch-bags?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.bags = res.data.data;
                        this.bagsTotal = res.data.total;
                    });
            },
            paginateCrops(e) {
                console.dir(e);
                ApiService.get(`/api/activity-log/fetch-categories?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.crops = res.data.data;
                        this.cropsTotal = res.data.total;
                    });
            },
            paginateCommodities(e) {
                console.dir(e);
                ApiService.get(`/api/activity-log/fetch-commodities?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.commodities = res.data.data;
                        this.commoditiesTotal = res.data.total;
                    });
            },
            paginateCustomers(e) {
                console.dir(e);
                ApiService.get(`/api/activity-log/fetch-customers?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.customers = res.data.data;
                        this.customersTotal = res.data.total;
                    });
            },
            paginateDeals(e) {
                ApiService.get(`/api/activity-log/fetch-deals?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.deals = res.data.data;
                        this.dealsTotal = res.data.total;
                    });
            },
            paginateDealCommodities(e) {
                ApiService.get(`/api/activity-log/fetch-deal-commodities?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.dealCommodities = res.data.data;
                        this.dealCommoditiesTotal = res.data.total;
                    });
            },
            paginateDealExpenses(e) {
                ApiService.get(`/api/activity-log/fetch-deal-expenses?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.dealExpenses = res.data.data;
                        this.dealExpensesTotal = res.data.total;
                    });
            },
            paginateExpenses(e) {
                ApiService.get(`/api/activity-log/fetch-expenses?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.expenses = res.data.data;
                        this.expensesTotal = res.data.total;
                    });
            },
            paginateLots(e) {
                ApiService.get(`/api/activity-log/fetch-lots?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.lots = res.data.data;
                        this.lotsTotal = res.data.total;
                    });
            },
            paginateTemplates(e) {
                ApiService.get(`/api/activity-log/fetch-templates?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.templates = res.data.data;
                        this.templatesTotal = res.data.total;
                    });
            },
            paginateTemplateTypes(e) {
                ApiService.get(`/api/activity-log/fetch-template-types?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.templateTypes = res.data.data;
                        this.templateTypesTotal = res.data.total;
                    });
            },
            paginateUnits(e) {
                ApiService.get(`/api/activity-log/fetch-units?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        console.log('Units Data: ', res.data);
                        this.units = res.data.data;
                        this.unitsTotal = res.data.total;
                    });
            },
            paginateUsers(e) {
                ApiService.get(`/api/activity-log/fetch-users?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        console.log('Users Data: ', res.data);
                        this.users = res.data.data;
                        this.usersTotal = res.data.total;
                    });
            },
            paginateParentCommodities(e) {
                ApiService.get(`/api/activity-log/fetch-parent-commodities?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        console.log('Users Data: ', res.data);
                        this.parentCommodities = res.data.data;
                        this.parentCommoditiesTotal = res.data.total;
                    });
            },

            restoreParentCommodity(item){
                var index = this.parentCommodities.indexOf(item)
                this.itemindex = this.parentCommodities.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-parent-commodity',item).then((res)=>{
                            console.log(res)
                            this.parentCommodities.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreArrival(item){
                var index = this.desserts.indexOf(item)
                this.itemindex = this.desserts.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-arrival',item).then((res)=>{
                            console.log(res)
                            this.desserts.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreArrivalType(item){
                var index = this.arrivalTypes.indexOf(item)
                this.itemindex = this.arrivalTypes.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-arrival-type',item).then((res)=>{
                            console.log(res)
                            this.arrivalTypes.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreBag(item){
                var index = this.bags.indexOf(item)
                this.itemindex = this.bags.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-bag',item).then((res)=>{
                            console.log(res)
                            this.bags.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreCategory(item){
                var index = this.crops.indexOf(item)
                this.itemindex = this.crops.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-category',item).then((res)=>{
                            console.log(res)
                            this.crops.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreCommodity(item){
                var index = this.commodities.indexOf(item)
                this.itemindex = this.commodities.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-commodity',item).then((res)=>{
                            console.log(res)
                            this.commodities.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreCustomer(item){
                var index = this.customers.indexOf(item)
                this.itemindex = this.customers.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-customer',item).then((res)=>{
                            console.log(res)
                            this.customers.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreDeal(item){
                var index = this.deals.indexOf(item)
                this.itemindex = this.deals.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-deal',item).then((res)=>{
                            console.log(res)
                            this.deals.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreDealCommodity(item){
                var index = this.dealCommodities.indexOf(item)
                this.itemindex = this.dealCommodities.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-deal-commodity',item).then((res)=>{
                            console.log(res)
                            this.dealCommodities.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreDealExpense(item){
                var index = this.dealExpenses.indexOf(item)
                this.itemindex = this.dealExpenses.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-deal-expense',item).then((res)=>{
                            console.log(res)
                            this.dealExpenses.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreExpense(item){
                var index = this.expenses.indexOf(item)
                this.itemindex = this.expenses.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-expense',item).then((res)=>{
                            console.log(res)
                            this.expenses.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreLot(item){
                var index = this.lots.indexOf(item)
                this.itemindex = this.lots.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-lot',item).then((res)=>{
                            console.log(res)
                            this.lots.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreTemplate(item){
                var index = this.templates.indexOf(item)
                this.itemindex = this.templates.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-template',item).then((res)=>{
                            console.log(res)
                            this.templates.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreTemplateType(item){
                var index = this.templateTypes.indexOf(item)
                this.itemindex = this.templateTypes.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-template-type',item).then((res)=>{
                            console.log(res)
                            this.templateTypes.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreUnit(item){
                var index = this.units.indexOf(item)
                this.itemindex = this.units.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-unit',item).then((res)=>{
                            console.log(res)
                            this.units.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            restoreUser(item){
                var index = this.users.indexOf(item)
                this.itemindex = this.users.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, restore it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/restore-user',item).then((res)=>{
                            console.log(res)
                            this.users.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Restored Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },

            deleteParentCommodity(item){

                var index = this.parentCommodities.indexOf(item)
                this.itemindex = this.parentCommodities.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-parent-commodity',item).then((res)=>{
                            console.log(res)
                            this.parentCommodities.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },

            deleteArrival(item){

                var index = this.desserts.indexOf(item)
                this.itemindex = this.desserts.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-arrival',item).then((res)=>{
                            console.log(res)
                            this.desserts.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteArrivalType(item){
                var index = this.arrivalTypes.indexOf(item)
                this.itemindex = this.arrivalTypes.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-arrival-type',item).then((res)=>{
                            console.log(res)
                            this.arrivalTypes.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteBag(item){
                var index = this.bags.indexOf(item)
                this.itemindex = this.bags.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-bag',item).then((res)=>{
                            console.log(res)
                            this.bags.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteCategory(item){
                var index = this.crops.indexOf(item)
                this.itemindex = this.crops.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-category',item).then((res)=>{
                            console.log(res)
                            this.crops.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteCommodity(item){
                var index = this.commodities.indexOf(item)
                this.itemindex = this.commodities.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-commodity',item).then((res)=>{
                            console.log(res)
                            this.commodities.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteCustomer(item){
                var index = this.customers.indexOf(item)
                this.itemindex = this.customers.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-customer',item).then((res)=>{
                            console.log(res)
                            this.customers.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteDeal(item){
                var index = this.deals.indexOf(item)
                this.itemindex = this.deals.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-deal',item).then((res)=>{
                            console.log(res)
                            this.deals.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteDealCommodity(item){
                var index = this.dealCommodities.indexOf(item)
                this.itemindex = this.dealCommodities.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-deal-commodity',item).then((res)=>{
                            console.log(res)
                            this.dealCommodities.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteDealExpense(item){
                var index = this.dealExpenses.indexOf(item)
                this.itemindex = this.dealExpenses.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-deal-expense',item).then((res)=>{
                            console.log(res)
                            this.dealExpenses.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteExpense(item){
                var index = this.expenses.indexOf(item)
                this.itemindex = this.expenses.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-expense',item).then((res)=>{
                            console.log(res)
                            this.expenses.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteLot(item){
                var index = this.lots.indexOf(item)
                this.itemindex = this.lots.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-lot',item).then((res)=>{
                            console.log(res)
                            this.lots.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteTemplate(item){
                var index = this.templates.indexOf(item)
                this.itemindex = this.templates.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-template',item).then((res)=>{
                            console.log(res)
                            this.templates.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteTemplateType(item){
                var index = this.templateTypes.indexOf(item)
                this.itemindex = this.templateTypes.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-template-type',item).then((res)=>{
                            console.log(res)
                            this.templateTypes.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteUnit(item){
                var index = this.units.indexOf(item)
                this.itemindex = this.units.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-unit',item).then((res)=>{
                            console.log(res)
                            this.units.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
            deleteUser(item){
                var index = this.users.indexOf(item)
                this.itemindex = this.users.indexOf(item)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/activity-log/delete-user',item).then((res)=>{
                            console.log(res)
                            this.users.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Record Deleted Successfully...`,

                                solid: true
                            })
                        })

                    }
                })
            },
        },
    }
</script>
