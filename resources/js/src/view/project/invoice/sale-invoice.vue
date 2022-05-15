<template>

    <div>

        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">

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

                                    <label>Supplier</label>
                                    <select class="form-control" v-model="form.party_id">
                                        <option value="" disabled hidden>Choose Party</option>
                                        <option v-for="party in parties" v-bind:value="party.id">
                                            {{ party.name }}
                                        </option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.party_id"
                                                             :errors="errors">
                                        <span v-for=" error in errors.party_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>

                                </b-col>
                                <b-col md="3">

                                    <label>Broker</label>
                                    <select class="form-control" v-model="form.broker_id">
                                        <option value="" disabled hidden>Choose Broker</option>
                                        <option v-for="broker in brokers" v-bind:value="broker.id">
                                            {{ broker.name }}
                                        </option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.broker_id"
                                                             :errors="errors">
                                        <span v-for=" error in errors.broker_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>

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
                                            :frameworkComponents="frameworkComponents"></ag-grid-vue>
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
                                </b-col>
                            </b-row>

                            <b-row v-for="(item,index) in form.types" :key="index">

                                <b-col md="10">
                                    <label>{{ item.name }}</label>
                                    <b-input type="number" v-model="form.types[index].price"></b-input>
                                </b-col>

                                <b-col md="2">
                                    <b-form-group
                                        label="Type"
                                        v-slot="{ ariaDescribedby }">

                                        <b-form-radio-group
                                            v-model="form.types[index].expense_status"
                                            :options="ExpenseStatus"
                                            :aria-describedby="ariaDescribedby"
                                            button-variant="outline-primary"
                                            size="sm"
                                            name="radio-btn-outline"
                                            buttons
                                        ></b-form-radio-group>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <!--                            <div v-if="showBag">-->
                            <!--                                <b-row>-->
                            <!--                                    <b-col md="12">-->
                            <!--                                        <h4>Bag Details</h4>-->
                            <!--                                    </b-col>-->
                            <!--                                </b-row>-->
                            <!--                                <b-row>-->
                            <!--                                    <b-col md="12">-->

                            <!--                                        <label>Choose Bag</label>-->
                            <!--                                        <select class="form-control" v-model="form.bags">-->
                            <!--                                            <option value="" disabled hidden>Choose Bag</option>-->
                            <!--                                            <option v-for="bag in bags" v-bind:value="bag.id">-->
                            <!--                                                {{ bag.name }}-->
                            <!--                                            </option>-->
                            <!--                                        </select>-->
                            <!--                                    </b-col>-->
                            <!--                                </b-row>-->
                            <!--                            </div>-->

                            <b-row v-if="form.deductions.length > 0">
                                <b-col md="12">
                                    <h4>Deductions</h4>
                                </b-col>
                            </b-row>

                            <b-row v-for="(val,ind) in form.deductions" :key="ind">
                                <b-col md="12">
                                    <h5>Commodity: {{form.commodities[ind].commodity}}</h5>
                                    <hr>
                                </b-col>
                                <b-col md="6" v-for="(v,i) in val" :key="i">
                                    <label>Name: {{ v.name }} | Type: {{ v.type }}</label>
                                    <b-input type="number" v-model="form.deductions[ind][i].def_value"></b-input>
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
                                    <select class="form-control" v-model="form.bag_id">
                                        <option value="" disabled hidden>Choose Bag</option>
                                        <option v-for="bag in bags" v-bind:value="bag.id">
                                            {{ bag.name }}
                                        </option>
                                    </select>
                                </b-col>
                                <b-col md="3">

                                    <label>Status</label>
                                    <select2 :options="statuses" v-model="form.status"></select2>
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

    export default {
        data() {
            return {
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
                submit_text: 'Submit',
                expanded: [],
                singleExpand: true,
                expenses: [],
                firstLoad: false,
                loading: false,
                showBag: false,
                form: {
                    du_id: '',
                    deal_date: '',
                    delivery_date: '',
                    party_id: '',
                    broker_id: '',
                    brokerage: '',
                    invoice_id: '',
                    total_weight: '',
                    total_amount: '',
                    total_est_amount: '',
                    expense_status: 'dr',
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
                deductions:[],
                parties: [],
                ExpenseStatus: [{text: '+', value: 'dr'}, {text: '-', value: 'cr'}],
                selectedPartyName: '',
                selectedBrokerName: '',
                brokers: [],
                value: '',
                formatted: '',
                selected: '',
                myValue: '',
                errors: {},
                dealUrl: '/api/deal/get-select-sale-deals',
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
            DeductionRenderer,
            DeleteRenderer

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
                // {headerName: "Total Weight", field: "total_weight"},
                {headerName: "Total Amount", field: "total_amount"},
                {
                    headerName: "Deduction",
                    field: 'deduction',
                    width: 130,
                    editable: true,
                    // cellEditor: 'select',
                    cellEditor:'agSelectCellEditor',

                    cellEditorParams: {
                        values: this.deductions,
                    },
                },
                {
                    headerName: "Action",
                    field: 'action',
                    width: 130,
                    editable: true,
                    cellEditor: 'select',
                    cellRenderer: 'DeleteRenderer',
                    cellEditorParams: {
                        cellRenderer: 'DeleteRenderer',
                        // values: ['Without Bag', 'With Bag'],
                    },
                },
                // {
                //     valueSetter: params => {
                //         console.log(params);
                //         conosle.log('Hello Setter');
                //         params.data.name = params.newValue;
                //         return true;
                //     }
                // },
            ];

            this.frameworkComponents = {
                deductionCellRenderer: DeductionRenderer,
                deleteCellRenderer: DeleteRenderer,
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
        },
        methods: {
            calulateTotals() {
                let items = [];
                this.gridApi.forEachNode(node => {
                    // this.form.total_channi=parseFloat(rowData.channi);
                    items.push(node.data);
                });
                var totalChanni=0;
                var totalKat=0;
                var totalBardana=0
                var actualWeight=0;
                var actualTotal=0;
                var totalAmount=0;
                for (var i=0;i<items.length;i++){
                    totalBardana=totalBardana+ parseFloat(items[i].bardana);
                    totalChanni= totalChanni+parseFloat(items[i].channi);
                    totalKat= totalKat+parseFloat(items[i].kaat);
                    actualWeight=actualWeight+parseFloat(items[i].actual_weight);
                    actualTotal=actualTotal+parseFloat(items[i].total_amount);
                    totalAmount=totalAmount+(parseFloat(items[i].total_weight)*parseFloat(items[i].rate));
                }
                this.total_kaat=totalKat;
                this.total_bardana=totalBardana;
                this.total_channi=totalChanni;
                this.form.exact_weight=actualWeight;
                this.actual_total=actualTotal;
                this.form.deducted_amount=totalAmount-actualTotal;

                console.log('Calculations');
                // console.log(totalChanni)

            },
            onCellValueChanged(event) {

            },
            onCellStopEditing(event) {
                console.log('On Cell Editing Stop', event);
                var rowNode = this.gridApi.getRowNode(event.rowIndex);
                var rowData = event.data;

                console.log('Row Data', rowNode.data);
                this.form.deductions = [];
                ApiService.get('/api/deal/fetch-deductions?name='+rowNode.data.deduction).then((res) => {
                    console.log('Deductions: ',res.data);
                    this.form.deductions.push(res.data);
                    this.form.commodities.push(rowNode.data);
                });

                // var rowNode = this.gridApi.getRowNode(event.rowIndex);
                // // var newPrice=Math.random()*1000;
                //
                // // rowNode.setDataValue('channi', newPrice);
                //
                // var rowData = event.data;
                // var totalWeight = rowData.unit_kgs * rowData.quantity;
                // rowData.total_weight = totalWeight;
                // rowData.actual_weight = (parseFloat(totalWeight) - parseFloat(rowData.kaat) - parseFloat(rowData.channi) - parseFloat(rowData.bardana));
                // rowData.total_amount = (totalWeight - rowData.kaat - rowData.channi - rowData.bardana) * rowData.rate;

                // rowNode.setData(rowData);
                // this.calulateTotals();
            },
            onGridReady(params) {
            },
            onSubmit: function (evt) {
                // evt.preventDefault()
                // alert(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
                ApiService.post('/api/sale-deal/create-invoice', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Invoice Created Successfully...`,

                        solid: true
                    })
                    this.submit_text='Submit';
                    this.form.du_id = ''
                    this.form.customer_id = ''
                    this.form.deal_date = ''
                    this.form.broker_id = ''
                    this.form.commodity = ''
                    this.form.rate = ''
                    this.form.rate_unit = ''
                    this.form.quantity = ''
                    this.form.weight = ''
                    this.form.total_weight = ''
                    this.form.total_amount = ''
                    this.form.total_est_amount = ''
                    this.form.total_bags = ''
                    this.form.delivery_date = ''
                    this.form.types = []
                    this.desserts = []
                    this.form.expense_template = ''
                    this.form.other_items = ''
                    this.form.deal_type = ''

                    this.redirectToInvoice(res.data.id);

                }).catch((error)=>{
                    this.submit_text='Submit';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                })
            },
            redirectToInvoice(id) {
                this.$router.push({name: 'invoice_sale', params: {id: id}});
            },
            getDuidDataFromApi: function (e) {
                this.firstLoad = true;
                this.loading = true;
                this.form.du_id = $('.select2ajaxinvoice').select2('data')[0]['text'];
                ApiService.get('/api/deal/get-data', this.form.du_id).then((res) => {

                    this.firstLoad = false;
                    this.loading = false;
                    this.rowData = res.data['data'];
                    this.form.deal_date = res.data.form.deal_date;
                    this.form.party_id = res.data.form.customer_id;
                    this.form.broker_id = res.data.form.broker_id;
                    this.form.delivery_date = res.data.form.delivery_date;

                    $.each(res.data.deductions,(index,value)=>{
                        console.log('Deduction',value);
                        this.deductions.push(value.name)
                    })
                    // console.log('Deduction',this.deductions);

                    // console.log('My Fetched Data: ', this.rowData);
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
            getDealCommodities() {
                ApiService.get('/api/deal/get-deal-commodities').then((resp) => {
                    this.desserts = resp.data;
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
            getBagDataFromApi() {
                ApiService.get('/api/deal/fetch-bags').then((res) => {
                    this.bags = res.data;
                });
            },
            onChange: function (inputval) {
                console.log(inputval);
                ApiService.get('/api/sale-deal/fetch-template-types-sale', inputval).then((res) => {
                    this.form.types = res.data;
                });
            },

        },
        created() {
            this.getBagDataFromApi();
            this.getPartyDataFromApi();
            this.getBrokerDataFromApi();
            this.getTemplateDataFromApi();
        },
        computed:{

        }

    }
</script>
