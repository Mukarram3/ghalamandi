<template>

    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/purchase-invoice/index" class="btn btn-dark btn-sm">Back</router-link>

                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-row cols-lg="mb-1">
                                <b-col md="3">

                                    <label>Invoice#</label>
                                    <b-input type="text" disabled v-model="form.du_id"
                                             placeholder="Invoice #"></b-input>

                                </b-col>

                                <b-col md="3">

                                    <label>Deal Id</label>
                                    <Select2Ajax v-on:selectInvoiceEvent="getDuidDataFromApi" class="form-control"
                                                 :url="dealUrl" v-model="form.du_id"
                                                 :options="options"></Select2Ajax>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.du_id"
                                                             :errors="errors">
                                        <span v-for=" error in errors.du_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>

                                </b-col>

                                <b-col md="3">
                                    <label>Date</label>
                                    <b-form-datepicker
                                        v-model="form.deal_date"
                                        right
                                        today-button
                                        reset-button
                                        locale="en-US"
                                        aria-controls="example-input-1"
                                        @context="onContext"
                                    ></b-form-datepicker>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.deal_date"
                                                             :errors="errors">
                                        <span v-for=" error in errors.deal_date ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>

                                </b-col>
                                <b-col md="3">

                                    <label>Supplier :<span style="color: #e70746;">*</span></label>
                                    <div role="group">
                                        <select2 class="form-control" :options="parties" v-bind:value="form.customer_id"
                                                 v-model="form.customer_id"></select2>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.customer_id"
                                                                 :errors="errors">
                                            <span v-for=" error in errors.customer_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                    </div>

                                </b-col>
                                <b-col md="3">

                                    <label>Select Broker:</label>
                                    <div role="group">
                                        <select2 class="form-control" :options="brokers" :value="form.broker_id"
                                                 v-model="form.broker_id">

                                        </select2>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.broker_id"
                                                                 :errors="errors">
                                            <span v-for=" error in errors.broker_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                    </div>

                                </b-col>
                                <b-col md="3">

                                    <label>Brokerage</label>
                                    <b-input placeholder="Enter Brokerage" v-model="form.brokerage"
                                             type="text"></b-input>

                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12">

                                    <div>
                                        <ag-grid-vue
                                            style="width: 100%; height:400px ;"
                                            class="ag-theme-alpine"
                                            id="myGrid"
                                            :gridOptions="gridOptions"
                                            @grid-ready="onGridReady"
                                            :rowData="rowData"
                                            :columnDefs="columnDefs"
                                            :defaultColDef="defaultColDef"
                                            :pinnedTopRowData="pinnedTopRowData"
                                            @cell-value-changed="onCellValueChanged"
                                            @cell-editing-stopped="onCellStopEditing"
                                            :pinnedBottomRowData="pinnedBottomRowData"
                                            :frameworkComponents="frameworkComponents">
                                        </ag-grid-vue>
                                    </div>
                                </b-col>

                            </b-row>

                            <b-row>
                                <b-col md="12">

                                    <label>Expense Template</label>
                                    <select2 v-on:input="onChange" v-model="form.expense_template"
                                             :options="templates"></select2>
                                </b-col>

                                <b-col md="12" v-if="form.types.length > 0">
                                    <h4>Expenses</h4>
                                    <hr>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="4" v-for="(item,index) in form.types" :key="index">
                                    <b-row>
                                        <b-col >
                                            <label>{{ item.name }}
                                                <span v-if="item.payment_type=='percent'">(%)</span>
                                                <span v-if="item.payment_type=='fixed'">(Rs)</span>
                                                <span v-if="item.payment_type=='per-bag'">(Bag)</span>

                                            </label>
                                            <b-input @keyup="onKeyUpExpense" type="number" v-model="item.price"></b-input>
                                        </b-col>

                                        <b-col>
                                            <label>Amount</label>
                                            <b-input type="number" v-model="item.value"></b-input>
                                        </b-col>

                                        <b-col md="4">
                                            <b-form-group
                                                label="Type"
                                                v-slot="{ ariaDescribedby }">

                                                <b-form-radio-group
                                                    v-model="form.types[index].expense_status"
                                                    :options="ExpenseStatus"
                                                    aria-selected="true"
                                                    :checked="dr"
                                                    @change="onChangeType(item, index)"
                                                    :aria-describedby="ariaDescribedby"
                                                    button-variant="outline-primary"
                                                    size="sm"
                                                    name="radio-btn-outline"
                                                    buttons
                                                ></b-form-radio-group>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>

                            <b-row v-if="form.deductions.length > 0">
                                <b-col md="12">
                                    <h3>Deductions</h3>
                                <hr>
                                </b-col>
                            </b-row>

                            <b-row v-for="(ded,index) in form.deductions" :key="index">
                                <b-col md="12">
                                    <h3>{{ ded.commodity }}</h3>
                                </b-col>

                                <b-col md="4" v-for="(item,k) in ded.items" :key="k">
                                    <b-row>
                                        <b-col md="8">
                                            <b-form-group>
                                                <label>{{ item.name }} </label>
                                                <span v-if="item.type=='percent'">(%)</span>
                                                <span v-if="item.type=='fixed'">(Rs)</span>
                                                <span v-if="item.type=='weight'">(Weight)</span>
                                                <b-input type="number" @keyup="onKeyUp(item,index)" v-model="item.input"
                                                         :placeholder="item.name"></b-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group>
                                                <label>Amount</label>
                                                <b-input type="number" v-model="item.value"></b-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="4">
                                    <label>Gross Weight</label>
                                    <b-input placeholder="Gross Weight" @keyup="onKeyUpGross"
                                             v-model="form.gross_weight"
                                             type="text"></b-input>
                                </b-col>
                                <b-col md="4">
                                    <label>Deduction Weight</label>
                                    <b-input placeholder="Deduction Weight" @keyup="onKeyUpDeduction"
                                             v-model="form.deduction_weight"
                                             type="text"></b-input>
                                </b-col>
                                <b-col md="4">
                                    <label>Net Weight</label>
                                    <b-input placeholder="Net Weight" v-model="form.net_weight"
                                             type="text"></b-input>
                                </b-col>

                                <b-col md="4">
                                    <label>Gross Amount</label>
                                    <b-input placeholder="Gross Amount" @keyup="onKeyUpGrossAmount"
                                             v-model="form.gross_amount"
                                             type="text"></b-input>
                                </b-col>
                                <b-col md="4">
                                    <label>Deduction Amount</label>
                                    <b-input placeholder="Deduction Amount" @keyup="onKeyUpDeductionAmount"
                                             v-model="form.deduction_amount"
                                             type="text"></b-input>
                                </b-col>
                                <b-col md="4">
                                    <label>Expense Amount</label>
                                    <b-input placeholder="Expense Amount" @keyup="onKeyUpExpenseAmount"
                                             v-model="form.expense_amount"
                                             type="text"></b-input>
                                </b-col>
                                <b-col md="4">
                                    <label>Net Amount</label>
                                    <b-input placeholder="Net Amount" v-model="form.net_amount"
                                             type="text"></b-input>
                                </b-col>

                            </b-row>

                            <b-row>
                                <b-col md="3">
                                    <label>Local Vehicle Freights</label>
                                    <b-input placeholder="Total Weight" v-model="form.local_vehicle_freight"
                                             type="text"></b-input>
                                </b-col>


                                <b-col md="3">
                                    <label>Delivery Date</label>
                                    <b-form-datepicker
                                        v-model="form.delivery_date"
                                        right
                                        today-button
                                        reset-button
                                        locale="en-US"
                                        aria-controls="example-input-1"
                                        @context="onContext"
                                    ></b-form-datepicker>
                                </b-col>
                                <b-col md="3">
                                    <label>Choose Bag</label>
                                    <select2 class="form-control" :options="bags" v-bind:value="form.bag_id"
                                             v-model="form.bag_id"></select2>
                                    <!--                                    <select class="form-control" v-model="form.bag_id">-->
                                    <!--                                        <option value="" disabled hidden>Choose Bag</option>-->
                                    <!--                                        <option v-for="bag in bags" v-bind:value="bag.id">-->
                                    <!--                                            {{ bag.name }}-->
                                    <!--                                        </option>-->
                                    <!--                                    </select>-->
                                </b-col>
                                <b-col md="3">

                                    <label>Status</label>
                                    <select2 required :options="statuses" v-model="form.status"></select2>
                                </b-col>

                            </b-row>

                            <b-row>
                                <b-col md="12">
                                    <b-button type="submit" @click="onSubmit" variant="primary" v-html="submit_text">
                                        Submit
                                    </b-button>
                                    <b-button type="reset" variant="danger">Reset</b-button>

                                </b-col>
                            </b-row>


                        </div>

                    </template>
                </KTCard>
            </div>


        </div>
    </div>


</template>
<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {AgGridVue} from 'ag-grid-vue';
import KTCard from "@/view/content/Card.vue";

import Modal from "@/view/project/party/create_modal.vue";
import Modal1 from "@/view/project/broker/create_modal.vue";
import Select2Ajax from "@/view/project/componenet/select2Ajax.vue";

import Select2MultipleControl from "v-select2-multiple-component";
import select2ajax from './../../../../components/select2ajax-sale';
import select2 from './../../../../components/select2';
import ApiService from "../../../core/services/api.service";
import DeductionRenderer from "../../../../components/deduction";
import DeleteRenderer from "../../../../components/delete";
import BtnCellRenderer from "../../../../components/delete";

export default {
    data() {
        return {
            dr: 'dr',
            columnDefs: null,
            rowData: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            defaultColDef: null,
            pinnedTopRowData: null,
            pinnedBottomRowData: null,
            frameworkComponents: null,
            countryCellRenderer: null,

            actual_total: '',
            statuses: [{id: 'completed', text: 'Completed'}, {id: 'pending', text: 'Pending'}],
            title: 'Create Purchase Invoice',
            titleRight: 'Create Purchase Invoices',
            is_update: false,
            submit_text: 'Create',
            expanded: [],
            singleExpand: true,
            expenses: [],
            firstLoad: false,
            loading: false,
            showBag: false,
            form: {
                du_id: '',
                type: 'Purchase',
                deal_date: '',
                delivery_date: '',
                party_id: '',
                broker_id: '',
                brokerage: '',
                gross_weight: '',
                gross_amount: '',
                net_weight: '',
                net_amount: '',
                deduction_amount: '',
                expense_amount: '',
                deduction_weight: '',
                invoice_id: '',
                total_weight: '',
                total_amount: '',
                total_est_amount: '',
                expense_status: 'cr',
                exact_weight: "",
                deducted_amount: "",
                actual_total: "",
                status: '',
                local_vehicle_freight: '',
                expense_template: '',
                types: [],
                bag_id: '',
                deductions: [],
                commodities: [],
            },
            templates: [],
            deductions: [],
            parties: [],
            ExpenseStatus: [{text: '+', value: 'dr'}, {text: '-', value: 'cr'}],
            selectedPartyName: '',
            selectedBrokerName: '',
            brokers: [],
            value: '',
            formatted: '',
            // selected: '',
            myValue: '',
            errors: {},
            dealUrl: '/api/deal/get-select-purchase-deals',
            options: [{id: '1', text: 'Option 1'}, {id: '2', text: 'Option 2'}],
            optionsAjax: [{id: -1, text: ''}],
            desserts: [],
            bags: [],

        }
    },
    components: {
        AgGridVue,
        KTCard, Select2MultipleControl,
        Modal,
        Modal1,
        select2ajax,
        select2,
        Select2Ajax,
    },
    beforeMount() {
        this.gridOptions = {};
        this.columnDefs = [
            {
                headerName: "ID",
                align: "left",
                sortable: false,
                field: "id"
            },
            {headerName: "Commodity", field: "commodity"},
            {headerName: "Quantity", field: "quantity"},
            {headerName: "weight per Bag", field: "weight_per_bag"},
            {headerName: "Rate", field: "rate"},
            {headerName: "Rate Unit", field: "rate_unit"},
            {headerName: "Total Weight (kgs)", field: "total_weight_kgs"},
            {headerName: "Total Amount", field: "total_amount"},
            {
                headerName: "Deduction",
                field: 'deduction',
                width: 130,
                editable: true,
                cellEditor: 'select',

                cellEditorParams: {
                    values: this.deductions,
                },
            },
            {
                field: 'Action',
                cellRenderer: 'btnCellRenderer',
                cellRendererParams: {
                    clicked: function (id) {
                        console.log(`${id} was clicked`);
                    }
                },
                minWidth: 130,
            },
        ];

        this.frameworkComponents = {
            btnCellRenderer: BtnCellRenderer,
        };

        this.defaultColDef = {
            flex: 1,
            minWidth: 110,
            editable: true,
            resizable: true,
        };

    },
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
        this.form.du_id = this.$route.params.id;
    },
    methods: {
        onChangeType (item, index) {
            this.onKeyUpExpense();
        },
        // calulateTotals() {
        //     let items = [];
        //     this.gridApi.forEachNode(node => {
        //         // this.form.total_channi=parseFloat(rowData.channi);
        //         items.push(node.data);
        //     });
        //     var actualWeight = 0;
        //     var totalAmount = 0;
        //     for (var i = 0; i < items.length; i++) {
        //         console.log('Item: ', items[i]);
        //         actualWeight = (parseFloat(items[i].quantity) * parseFloat(items[i].weight_per_bag));
        //         totalAmount = (actualWeight * parseFloat(items[i].rate))/ parseFloat(items[i].rate_unit);
        //
        //         console.log('Calculations: ', actualWeight, totalAmount);
        //     }
        //
        //     this.total_weight_kgs = actualWeight;
        //     this.total_amount = totalAmount;
        //
        // },
        onKeyUpGross(event) {
            this.form.gross_weight = event.target.value;
        },
        onKeyUpDeduction(event) {
            this.form.net_weight = this.form.gross_weight - event.target.value;
        },
        onKeyUpGrossAmount(event) {
            this.form.gross_amount = event.target.value;
        },
        onKeyUpExpenseAmount(event) {
            this.form.net_amount = this.form.gross_amount - event.target.value;
        },
        onKeyUpDeductionAmount(event) {
            this.form.net_amount = this.form.gross_amount - event.target.value;
        },

        onKeyUp(item, key) {
            this.form.deduction_amount = this.totalDeductionCal().totalDeduction;
            this.form.net_amount = this.form.gross_amount - this.form.deduction_amount;
            this.form.deduction_weight = this.totalDeductionCal().totalWeight;
            this.form.net_weight = this.form.gross_weight - this.form.deduction_weight;
            console.log('Total Deductions', this.totalDeductionCal())
        },
        onKeyUpExpense() {
            this.form.expense_amount = this.totalExpenseCal();
            this.form.net_amount = this.form.gross_amount - this.form.expense_amount;
            console.log('Total Expense', this.totalExpenseCal())
        },

        totalExpenseCal() {
            var totalExpense = 0;
                $.each(this.form.types, (index, item) => {
                    // console.log('Item Exp: ', index, item);
                    if (item.price > 0) {
                        if (item.payment_type == 'percent') {
                            // console.log('percent', item);
                            if (item.expense_status == 'dr') {
                                item.value = ((this.form.gross_amount * item.price) / 100);
                                totalExpense += ((this.form.gross_amount * item.price) / 100);
                            } else {
                                item.value = ((this.form.gross_amount * item.price) / 100);
                                totalExpense -= ((this.form.gross_amount * item.price) / 100);
                            }
                        } else if (item.payment_type == 'per-bag') {
                            var bags = 0;
                            $.each(this.rowData, (k, i) => {
                                bags += i.total_weight;
                            });
                            if (item.expense_status == 'dr') {
                            console.log('per-bag: dr', item);
                                item.value = (item.price * Math.ceil(bags));
                                totalExpense += (item.price * Math.ceil(bags));
                            } else {
                            console.log('per-bag: cr', item);
                                item.value = (item.price * Math.ceil(bags));
                                totalExpense -= (item.price * Math.ceil(bags));
                            }
                        } else {
                            // console.log('fix', item);
                            if (item.expense_status == 'dr') {
                                item.value = parseFloat(item.price);
                                totalExpense += parseFloat(item.price);
                            } else {
                                item.value = parseFloat(item.price);
                                totalExpense -= parseFloat(item.price);
                            }
                        }
                    }
                })
            return totalExpense;
        },
        totalDeductionCal() {
            var totalDeduction = 0;
            var totaldeductedWeight = 0;
            $.each(this.form.deductions, (key, value) => {
                $.each(value.items, (index, item) => {
                    if (item.input > 0) {
                        if (item.type == 'percent') {
                            // console.log('percent', item.input);
                            item.value = ((this.form.gross_amount * item.input) / 100);
                            totalDeduction += ((this.form.gross_amount * item.input) / 100);
                        } else if (item.type == 'weight') {
                            // console.log('weight', item.input);
                            item.value = (item.input * (this.form.gross_amount / this.form.gross_weight));
                            totaldeductedWeight += parseFloat(item.input);
                            // totalDeduction += (item.input);
                            totalDeduction += (item.input * (this.form.gross_amount / this.form.gross_weight));

                        } else {
                            // console.log('fix', item.input);
                            item.value = parseFloat(item.input);
                            totalDeduction += parseFloat(item.input);
                        }
                    }
                })
            })
            return {totalDeduction: totalDeduction, totalWeight: totaldeductedWeight};
        },
        onCellValueChanged(event) {

        },
        onCellStopEditing(event) {
            console.log('On Cell Editing Stop', event);
            var rowNode = this.gridApi.getRowNode(event.rowIndex);
            var rowData = event.data;

            ApiService.get('/api/deal/fetch-deductions?name=' + rowNode.data.deduction).then((res) => {
                // console.log('Deductions: ', res.data);
                var checkif = false;
                var indexKey = -1;
                $.each(this.form.deductions, (key, value) => {
                    if (value.id == rowData.id) {

                        checkif = true;
                        indexKey = key;
                    }
                });

                if (checkif == true) {
                    this.form.deductions.splice(indexKey, 1, {
                        commodity: rowData.commodity,
                        id: rowData.id,
                        items: res.data
                    });
                } else {
                    this.form.deductions.push(
                        {commodity: rowData.commodity, id: rowData.id, items: res.data}
                    )
                }
                // console.log('Deduction Item',this.form.deductions)


                // this.form.deductions.push(res.data);
                // this.form.commodities.push(rowNode.data);
            });
            let items = [];
            this.gridApi.forEachNode(function (node) {
                items.push(node.data);
            });
            console.log('Row Data: ', rowData)

            var totalWeight = rowData.weight_per_bag * rowData.quantity;
            rowData.total_weight_kgs = parseFloat(totalWeight);
            rowData.total_amount = (totalWeight * rowData.rate) / rowData.rate_unit;

            rowNode.setData(rowData);
            // this.calulateTotals();
        },
        onGridReady(params) {
        },
        onSubmit: function (evt) {
            // evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.submit_text = '<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
            ApiService.post('/api/deal/update-invoice/', this.form).then((res) => {
                this.$bvToast.toast(res.data.message, {
                    title: `Invoice Created Successfully...`,

                    solid: true
                })
                this.submit_text = 'Create';

                this.redirectToInvoice(res.data.id);

            }).catch((error) => {
                this.submit_text = 'Create';
                if (error.response.status === 422) {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors || {};
                }
            })
        },
        redirectToInvoice(id) {
            this.$router.push({name: 'invoice_purchase', params: {id: id}});
        },
        getDuidDataFromApi: function (e) {
            this.firstLoad = true;
            this.loading = true;
            this.form.du_id = $('.select2ajaxinvoice').select2('data')[0]['text'];
            ApiService.get('/api/deal/get-data', this.form.du_id).then((res) => {
                console.log(res.data);
                this.firstLoad = false;
                this.loading = false;
                this.rowData = res.data['data'];
                this.form.deal_date = res.data.form.deal_date;
                this.form.party_id = res.data.form.customer_id;
                this.form.broker_id = res.data.form.broker_id;
                this.form.delivery_date = res.data.form.delivery_date;

                $.each(res.data.deductions, (index, value) => {

                    this.deductions.push(value.name)
                })
                // console.log('Deduction',this.deductions);

                // console.log('My Fetched Data: ', this.rowData);

                // if (res.data['data']) {
                //     if (res.data['data'].length > 0) {
                //         const totalWeight = res.data['data'].reduce((sum, item) => {
                //             return sum + item.total_weight;
                //         }, 0)
                //         const totalAmount = res.data['data'].reduce((sum, item) => {
                //             return sum + item.total_amount;
                //         }, 0)
                //         this.form.total_weight = totalWeight;
                //         this.form.total_amount = totalAmount;
                //
                //     }
                // }
            }).catch((error) => {
                this.firstLoad = false;
                this.loading = false;
                this.$bvToast.toast('Error', {
                    title: `Something Went Wrong...`,

                    solid: true
                })
            });
        },
        onContext(event) {
            console.log(event);
        },
        save(item, value) {
            console.log(item);
            console.log(value);
        },
        cancel() {
        },
        open(event, header_value) {
            console.log('Event: ', event);
            console.log(header_value);
            // event.target.setSelectionRange(0, 2000);
        },
        close() {
        },
        getDealDataFromApi() {
            this.firstLoad = true;
            this.loading = true;
            ApiService.get('/api/deal/fetch-deal', this.$route.params.id).then((res) => {
                this.firstLoad = false;
                this.loading = false;
                this.rowData = res.data['data'];
                this.form.deal_date = res.data.form.deal_date;
                this.form.party_id = res.data.form.customer_id;
                this.form.broker_id = res.data.form.broker_id;
                this.form.delivery_date = res.data.form.delivery_date;

                // console.log('Deal Commodities: ', res.data)
                var total_weight = 0;
                var total_amount = 0;
                $.each(res.data['data'], function (key, value) {
                    console.log('Deal Commodities: ', key, value)
                    total_weight += value.total_weight_kgs;
                });
                $.each(res.data['data'], function (key, value) {
                    total_amount += value.total_amount;
                });

                this.form.gross_weight = total_weight;
                this.form.gross_amount = total_amount;

                console.log('Deal Data: ', res.data);

                this.getDeductionDataFromApi();


                // if (res.data['data']) {
                //     if (res.data['data'].length > 0) {
                //         const totalWeight = res.data['data'].reduce((sum, item) => {
                //             return sum + item.total_weight;
                //         }, 0)
                //         const totalAmount = res.data['data'].reduce((sum, item) => {
                //             return sum + item.total_amount;
                //         }, 0)
                //         this.form.total_weight = totalWeight;
                //         this.form.total_amount = totalAmount;
                //         this.actual_total = totalAmount - res.data.form.deducted_amount;
                //     }
                // }
            });
        },
        getDealCommodities() {
            ApiService.get('/api/deal/get-deal-commodities').then((res) => {
                this.desserts = res.data;
            })
        },
        getTemplateDataFromApi() {
            ApiService.get('/api/deal/fetch-templates').then((res) => {
                console.log('Get Expense Templates: ', res.data);
                this.templates = $.map(res.data, function (obj) {
                    obj.text = obj.name;
                    return obj;
                });
            });
        },
        getPartyDataFromApi() {
            ApiService.get('/api/deal/fetch-parties').then((res) => {
                // console.log('Parties: ', res.data);
                this.parties = res.data;
            });
        },
        getBrokerDataFromApi() {
            ApiService.get('/api/deal/fetch-brokers').then((res) => {
                this.brokers = res.data;
            });
        },
        onChange: function (inputval) {
            ApiService.get('/api/purchase-deal/fetch-template-types', inputval).then((res) => {
                this.form.types = res.data;
            });
        },
        getBagDataFromApi() {
            ApiService.get('/api/deal/fetch-bags').then((res) => {
                this.bags = res.data;
            });
        },
        getDeductionDataFromApi() {
            ApiService.get('/api/deal/fetch-deduction').then((res) => {
                $.each(res.data, (index, value) => {

                    this.deductions.push(value.name)
                })
                console.log('Fetch Deduction: ', this.deductions);
            });
        },
    },
    created() {
        // this.getDeductionDataFromApi();
        this.getBagDataFromApi();
        this.getDealDataFromApi();
        this.getPartyDataFromApi();
        this.getBrokerDataFromApi();
        this.getTemplateDataFromApi();
    },
    computed: {}

}
</script>
