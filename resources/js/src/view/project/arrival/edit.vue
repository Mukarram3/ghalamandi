<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/arrival/index" class="btn btn-dark btn-sm">Back</router-link>

                        </div>
                    </template>
                    <template v-slot:body>
                        <div>

                            <b-row>
                                <b-col md="2">
                                    <div role="group">
                                        <label>Arrival ID: <span style="color: #e70746;">*</span></label>
                                        <b-form-input
                                            id="input-live"
                                            v-model="form.arrival_id"
                                            aria-describedby="input-live-help input-live-feedback"
                                            placeholder="Enter DUID"
                                            trim
                                        ></b-form-input>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.arrival_id" :errors="errors">
                                            <span v-for=" error in errors.arrival_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-col>

                                <b-col md="2">
                                    <label>Arrival Date:<span style="color: #e70746;">*</span></label>

                                    <b-form-datepicker
                                        v-model="form.arrival_date"
                                        right
                                        today-button
                                        reset-button
                                        locale="en-US"
                                        aria-controls="example-input-1"
                                        @context="onContext"
                                    ></b-form-datepicker>


                                </b-col>

                                <b-col md="4">
                                    <label>Deal:<span style="color: #e70746;">*</span></label>
                                    <Select2Ajax v-on:selectDealEvent="getDealDataFromApi" class="form-control"
                                                 :url="dealUrl" v-model="form.deal_id"
                                                 :options="options"></Select2Ajax>
                                </b-col>

                                <b-col md="2">
                                    <label>Supplier:<span style="color: #e70746;">*</span></label>
                                    <div role="group">
                                        <select class="form-control" v-model="form.customer_id">
                                            <option value="" disabled hidden>Choose Supplier</option>
                                            <option v-for="party in parties" v-bind:value="party.id">
                                                {{ party.name }}
                                            </option>
                                        </select>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.customer_id" :errors="errors">
                                            <span v-for=" error in errors.customer_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-col>

                                <b-col md="2">
                                    <label>Total Bags:</label>
                                    <b-form-input

                                        v-model="form.total_bags"
                                        type="number"
                                        placeholder="Total Bags"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>

                                <b-col md="2">
                                    <b-form-group>
                                        <label>Load Weight</label>
                                        <b-input type="number" v-model="form.load_weight"
                                                 placeholder="Load Weight"></b-input>
                                    </b-form-group>
                                </b-col>
                                <b-col md="2">
                                    <b-form-group>
                                        <label>Arrival Weight</label>
                                        <b-input type="number" v-model="form.arrival_weight"
                                                 placeholder="Arrival Weight"></b-input>
                                    </b-form-group>
                                </b-col>

                                <b-col md="4">
                                    <label>Select Commodity:<span style="color: #e70746;">*</span></label>
                                    <div role="group">
                                        <select class="form-control" v-model="form.commodity">
                                            <option value="" disabled hidden>Choose commodity</option>
                                            <option v-for="item in commodities">
                                                {{ item }}
                                            </option>
                                        </select>
                                    </div>
                                </b-col>

                                <b-col md="2">
                                    <label>Vehicle Number:</label>
                                    <b-form-input

                                        v-model="form.vehicle_no"
                                        type="text"
                                        placeholder="Vehicle number"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>

                                <b-col md="2">
                                    <b-form-group>
                                        <label>Vehicle Freight/Expense</label>
                                        <b-input type="text" v-model="form.vehicle_freight"
                                                 placeholder="Vehicle Freight/Expense"></b-input>
                                    </b-form-group>
                                </b-col>

                                <b-col md="2">
                                    <label>Bilty Number:</label>
                                    <b-form-input

                                        v-model="form.bilty_no"
                                        type="text"
                                        placeholder="Bilty Number"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="2">
                                    <label>Receiver Name:</label>
                                    <b-form-input
                                        v-model="form.receiver_name"
                                        type="text"
                                        placeholder="Receiver Name"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="2">
                                    <label>Transporter:</label>
                                    <b-form-input
                                        v-model="form.transporter_name"
                                        type="text"
                                        placeholder="Transporter"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="2">
                                    <label>Driver Name:</label>
                                    <b-form-input
                                        v-model="form.driver_name"
                                        type="text"
                                        placeholder="Driver Name"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="2">
                                    <label>Driver Phone:</label>
                                    <b-form-input
                                        v-model="form.driver_phone"
                                        type="text"
                                        placeholder="Driver Phone"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="2">
                                    <b-button style="margin-top: 22px;" @click="addCart" variant="info">Add Truck</b-button>
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
                                            :pinnedBottomRowData="pinnedBottomRowData">
                                        </ag-grid-vue>
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="4">
                                    <label>Total Weight:</label>
                                    <b-form-input
                                        v-model="form.total_weight"
                                        type="number"
                                        placeholder="Total Calculated Weight"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12">
                                    <b-button @click="onSubmit" type="submit" variant="primary" v-html="submit_text">Submit</b-button>
                                    <b-button @click="onReset" type="reset" variant="danger">Reset</b-button>
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
import 'vuetify/dist/vuetify.min.css'
import {AgGridVue} from 'ag-grid-vue';
import KTCard from "@/view/content/Card.vue";
import ApiService from "@/core/services/api.service";
import {SET_BREADCRUMB} from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

import Select2MultipleControl from "v-select2-multiple-component";
import Select2Ajax from "@/view/project/componenet/select2AjaxArrival.vue";
import select2 from './../../../../components/select2';

export default {
    components: {
        KTCard, Select2MultipleControl, Select2Ajax, select2, AgGridVue
    },
    data() {
        return {
            title: 'Update Arrival',
            titleRight: 'List Arrivals',
            is_update: false,
            submit_text: 'Update',
            columnDefs: null,
            rowData: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            defaultColDef: null,
            pinnedTopRowData: null,
            pinnedBottomRowData: null,
            statuses:[{id:'completed',text:'Completed'},{id:'pending',text:'Pending'}],
            expanded: [],
            singleExpand: true,
            expenses: [],
            firstLoad: false,
            loading: false,
            options: [{id: '', text: ''}, {id: '', text: ''}],
            optionsAjax: [{id: -1, text: ''}],
            form: {
                arrival_id: '',
                deal_id: '',
                commodity: '',
                customer_id: '',
                arrival_date: '',
                bilty_no: '',
                receiver_name: '',
                driver_name: '',
                transporter_name: '',
                driver_phone: '',
                total_bags: '',
                vehicle_freight: '',
                load_weight: '',
                arrival_weight: '',
                deduction_weight: '',
                vehicle_no: '',
                total_weight: '',
                net_weight: '',
                desserts2:[]
            },
            row: 0,
            parties: [],
            commodities: [],
            StatusArr: ['loaded', 'arrived', 'scanned', 'production', 'completed', 'removed'],
            show: true,
            search: '',
            headers: [
                {
                    headerName: "ID",
                    align: "left",
                    sortable: false,
                    field: "id"
                },
                {text: 'Deal', value: 'deal_id'},
                {text: 'Customer', value: 'customer_id'},
                {text: 'Total bags', value: 'total_bags'},
                {text: 'Bilty No', value: 'bilty_no'},
                {text: 'Receiver', value: 'receiver_name'},
                {text: 'Transporter Name', value: 'transporter_name'},
                {text: 'Driver Name', value: 'driver_name'},
                {text: 'Driver Phone', value: 'driver_phone'},
                {text: 'Vehicle Freights', value: 'vehicle_freight'},
                {text: 'Vehicle No', value: 'vehicle_no'},
                {text: 'Load Weight', value: 'load_weight'},
                {text: 'Arrival Weight', value: 'arrival_weight'},
                {text: 'Total Weight', value: 'total_weight'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            index: '',
            desserts: [],
            dealUrl: '/api/arrival/get-select-deals',
            errors:{},
        }
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
            {headerName: 'Deal', field: 'deal_id'},
            {headerName: 'Customer', field: 'customer_id'},
            {headerName: 'Total bags', field: 'total_bags'},
            {headerName: 'Bilty No', field: 'bilty_no'},
            {headerName: 'Receiver', field: 'receiver_name'},
            {headerName: 'Transporter Name', field: 'transporter_name'},
            {headerName: 'Driver Name', field: 'driver_name'},
            {headerName: 'Driver Phone', field: 'driver_phone'},
            {headerName: 'Vehicle Freights', field: 'vehicle_freight'},
            {headerName: 'Vehicle No', field: 'vehicle_no'},
            {headerName: 'Load Weight', field: 'load_weight'},
            {headerName: 'Arrival Weight', field: 'arrival_weight'},

            {
                valueSetter: params => {
                    console.log(params);
                    conosle.log('Hello Setter');
                    params.data.name = params.newValue;
                    return true;
                }

            }

        ];

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
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Dashboard"}]);
    },
    methods: {
        calulateTotals() {
            let items = [];
            this.gridApi.forEachNode(node => {

                // this.form.total_channi=parseFloat(rowData.channi);
                items.push(node.data);
            });
            console.log('Items: ', items)
            var deductionWeight=0
            var arrivalWeight=0;
            for (var i=0;i<items.length;i++){
                deductionWeight=deductionWeight+ parseFloat(items[i].deduction_weight);
                arrivalWeight=arrivalWeight+parseFloat(items[i].arrival_weight);
            }
            this.form.deduction_weight=deductionWeight;
            this.form.total_weight=arrivalWeight;
            this.form.net_weight=arrivalWeight-deductionWeight;
        },
        onCellValueChanged(event) {

        },
        onCellStopEditing(event) {
            console.log('On Cell Editing Stop');

            console.log(event);
            var rowNode = this.gridApi.getRowNode(event.rowIndex);

            var rowData = event.data;
            var arrivalWeight = rowData.arrival_weight;
            rowData.arrival_weight = arrivalWeight;
            rowNode.setData(rowData);
            this.calulateTotals();
        },
        onGridReady(params) {
        },
        addCart: function (event) {
            this.row++;
            if ((this.form.commodity=='') ||(this.form.deal_id=='') || (this.form.customer_id=="") || (this.form.total_bags=="")
                || (this.form.bilty_no=='') || (this.form.receiver_name=='') || (this.form.transporter_name=='') || (this.form.driver_name=='')
                || (this.form.driver_phone=='') || (this.form.vehicle_freight=='') || (this.form.vehicle_no=='') || (this.form.load_weight=='')
                || (this.form.arrival_weight=='')) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please Fill All Fields',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                    }
                    return false;
                })
            }else {

                var temp = {
                    id: this.row,
                    commodity: this.form.commodity,
                    deal_id: this.form.deal_id,
                    customer_id: this.form.customer_id,
                    total_bags: this.form.total_bags,
                    bilty_no: this.form.bilty_no,
                    receiver_name: this.form.receiver_name,
                    transporter_name: this.form.transporter_name,
                    driver_name: this.form.driver_name,
                    driver_phone: this.form.driver_phone,
                    vehicle_freight: this.form.vehicle_freight,
                    vehicle_no: this.form.vehicle_no,
                    load_weight: this.form.load_weight,
                    arrival_weight: this.form.arrival_weight,
                };

                this.desserts.push(temp);
                this.rowData = this.desserts;

                var arrivalWeight = 0

                for (var i=0;i<this.desserts.length;i++){
                    arrivalWeight=arrivalWeight+parseFloat(this.desserts[i].arrival_weight);
                    this.form.total_weight=arrivalWeight;
                }

                this.form.bilty_no = '';
                this.form.receiver_name = '';
                this.form.transporter_name = '';
                this.form.driver_name = '';
                this.form.driver_phone = '';
                this.form.vehicle_freight = '';
                this.form.vehicle_no = '';
                this.form.load_weight = '';
                this.form.arrival_weight = '';
            }
        },
        getDealDataFromApi: function (e) {
            this.firstLoad = true;
            this.loading = true;
            this.form.deal_id = $('.select2ajaxarrival').select2('data')[0]['text'];
            console.log('Deal Id', this.form.deal_id);
            ApiService.get('/api/arrival/get-data', this.form.deal_id).then((res) => {
                this.form.deal_id = res.data.deal_id;
                this.form.customer_id = res.data.customer_id;
                this.form.total_bags = res.data.total_bags;
                this.commodities = res.data['commodities'];

                this.firstLoad = false;
                this.loading = false;

            }).catch((error) => {
                this.firstLoad = false;
                this.loading = false;
                this.$bvToast.toast('Error', {
                    title: `Something Went Wrong...`,

                    solid: true
                })
            });
        },
        onSubmit: function (evt) {
            // evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.form.desserts2 = this.desserts;
            this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
            ApiService.post('/api/arrival/update', this.form).then((res) => {
                this.$bvToast.toast(res.data.message, {
                    title: `Arrival Record Created Successfully...`,

                    solid: true
                })

                this.submit_text='Update';

                this.redirect();
            }).catch((error)=>{
                this.submit_text='Update';
                if (error.response.status === 422) {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors || {};
                }
            })

        },
        redirect() {
            this.$router.push({name: 'index_arrival'});
        },
        onContext(event) {
            console.log(event);
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.deal_id = ''
            this.form.customer_id = ''
            this.form.arrival_date = ''
            this.form.bilty_no = ''
            this.form.receiver_name = ''
            this.form.driver_name = ''
            this.form.driver_phone = ''
            this.form.total_bags = ''
            this.form.vehicle_freight = ''
            this.form.load_weight = ''
            this.form.arrival_weight = ''
            this.form.vehicle_no = ''
            this.form.deduction_weight = ''
            this.form.total_weight = ''
            this.form.net_weight = ''

            this.show = false
            this.submit_text = 'Update';
            this.$nextTick(() => {
                this.show = true
            })
        },
        getPartyDataFromApi() {
            ApiService.get('/api/arrival/fetch-parties').then((res) => {
                this.parties = res.data;
            });
        },
        editItem(item) {
            this.index = this.desserts.map(function (x) {
                return x.row;
            }).indexOf(item.row);
            this.form = this.desserts[this.index];
            this.desserts.splice(this.index, 1);
        },
        deleteItem(item) {
            // alert(item.id);
            var index = this.desserts.indexOf(item)
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

                    this.desserts.splice(index, 1);

                    this.$bvToast.toast('Arrival Deleted successfully...', {
                        title: `Arrival Deleted Successfully...`,

                        solid: true
                    });
                    this.form.deal_id = '';
                    this.form.customer_id = '';
                    this.form.total_bags = '';
                    this.form.bilty_no = '';
                    this.form.receiver_name = '';
                    this.form.transporter_name = '';
                    this.form.driver_name = '';
                    this.form.driver_phone = '';
                    this.form.vehicle_freight = '';
                    this.form.vehicle_no = '';
                    this.form.load_weight = '';
                    this.form.arrival_weight = '';
                    this.form.deduction_weight = '';
                    this.form.total_weight = '';
                    this.form.net_weight = '';
                }
            })
        },
        getArrivalDataFromApi() {
            this.firstLoad = true;
            this.loading = true;
            ApiService.get('/api/arrival/fetch-arrival', this.$route.params.id).then((res) => {
                this.brokers = res.data;
                console.log('Arrival Data: ', res.data['data']);

                this.firstLoad = false;
                this.loading = false;
                this.desserts = res.data['data'];
                this.rowData = res.data['data'];
                this.form = res.data['form'];
                // this.form.deal_date=res.data.form.deal_date;
                // this.form.party_id=res.data.form.party_id;
                // this.form.broker_id=res.data.form.broker_id;
                // this.form.delivery_date=res.data.form.delivery_date;
                // this.form.status=res.data.form.status;
                // this.form.exact_weight = res.data.form.exact_weight;
                // this.form.deducted_amount=res.data.form.deducted_amount
                // this.form.types = res.data.types;

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
                //         this.actual_total = totalAmount- res.data.form.deducted_amount;
                //     }
                // }
            });
        },
    },
    created() {
        this.getArrivalDataFromApi();
        this.getPartyDataFromApi();
    }
}
</script>
<style scoped>
.select2-container--default.select2-container--focus .select2-selection--multiple {
    border: 1px solid #E4E6EF !important;
    border-radius: 7px;
}

.select2-container--default .select2-selection--multiple {
    border: 1px solid #E4E6EF !important;
    min-height: 36px;
}

.select2-selection {
    border-radius: 0px !important;
    text-align: left !important;
}

.select2-dropdown {
    border-radius: 0px !important;
}
</style>
