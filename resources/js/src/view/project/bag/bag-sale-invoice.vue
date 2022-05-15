<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
<!--                            <router-link to="/journal-voucher/index" class="btn btn-dark btn-sm">Back</router-link>-->
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-row>
                                    <b-col md="3">
                                        <div role="group">
                                            <label>Sale No.:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.sale_number"
                                                aria-describedby="input-live-help input-live-feedback"
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.sale_number" :errors="errors">
                                                <span v-for=" error in errors.sale_number ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>
                                    <b-col md="3">
                                        <label>Sale Date:</label>
                                        <b-form-datepicker
                                            v-model="form.sale_date"
                                            right
                                            today-button
                                            reset-button
                                            locale="en-US"
                                            aria-controls="example-input-1"
                                            @context="onContext"
                                        ></b-form-datepicker>
                                    </b-col>

                                    <b-col md="3">
                                        <div role="group">
                                            <b-form-group id="input-group-1" label="Party Type:" label-for="input-1" description="">
                                                <select2 class="form-control" :options="parties" :value="form.party_id"
                                                         v-model="form.party_id">
                                                </select2>
                                            </b-form-group>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.party_id" :errors="errors">
                                                <span v-for=" error in errors.party_id ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>

                                    <b-col md="3">
                                        <div role="group">
                                            <b-form-group id="input-group-1" label="Buyer:" label-for="input-1" description="">
                                                <select2 class="form-control" :options="buyers" :value="form.buyer_id"
                                                         v-model="form.buyer_id">
                                                </select2>
                                            </b-form-group>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.buyer_id" :errors="errors">
                                                <span v-for=" error in errors.buyer_id ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>
                                    <b-col md="3">
                                        <div role="group">
                                            <b-form-group id="input-group-1" label="Account No:" label-for="input-1" description="">
                                                <select2 @close="onChange" class="form-control" :options="bags" :value="form.bag_id"
                                                         v-model="form.bag_id">
                                                </select2>
                                            </b-form-group>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.bag_id" :errors="errors">
                                                <span v-for=" error in errors.bag_id ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>

                                </b-row>
                                <b-row class="mb-3">
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

                                    <b-col md="4">
                                            <div role="group">
                                                <label>Previous Credit:</label>
                                                <b-form-input
                                                    id="input-live"
                                                    v-model="form.previous_credit"
                                                    aria-describedby="input-live-help input-live-feedback"
                                                    trim
                                                ></b-form-input>
                                                <b-form-invalid-feedback style="display: block;" v-if="errors.previous_credit" :errors="errors">
                                                    <span v-for=" error in errors.previous_credit ">{{ error }}</span><br>
                                                </b-form-invalid-feedback>
                                            </div>
                                    </b-col>
                                    <b-col md="4">
                                        <div role="group">
                                            <label>Total Receivable:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.total_receivable"
                                                aria-describedby="input-live-help input-live-feedback"
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.total_receivable" :errors="errors">
                                                <span v-for=" error in errors.total_receivable ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>
                                    <b-col md="4">
                                        <div role="group">
                                            <label>Received Amount:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.received_amount"
                                                aria-describedby="input-live-help input-live-feedback"
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.received_amount" :errors="errors">
                                                <span v-for=" error in errors.received_amount ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>
                                </b-row>


                                <b-button type="submit" variant="primary"><span aria-hidden="true" v-if="loading" class="spinner-grow spinner-grow-sm"></span>{{ submit_text }}</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>

                    </template>
                </KTCard>
            </div>
        </div>

    </div>
</template>

<script>

import 'vuetify/dist/vuetify.min.css'
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {AgGridVue} from 'ag-grid-vue';
import KTCard from "@/view/content/Card.vue";
import Select2MultipleControl from "v-select2-multiple-component";
import ApiService from "../../../core/services/api.service";
import select2 from './../../../../components/select2';
import Swal from "sweetalert2";


export default {
    components: {
        AgGridVue,
        KTCard,
        select2,
    },
    data() {
        return {
            columnDefs: null,
            rowData: [],
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            defaultColDef: null,
            pinnedTopRowData: null,
            pinnedBottomRowData: null,
            frameworkComponents: null,

            title: 'Create Bag Sale Invoice',
            titleRight: 'List Bag Sale Invoices',
            is_update: false,
            submit_text: 'Create',
            loading:false,
            form: {
                sale_number: '',
                sale_date: '',
                party_id: '',
                buyer_id: '',
                previous_credit: '',
                total_receivable: '',
                received_amount: '',
            },
            show: true,
            search: '',
            sr: 0,
            parties: [],
            buyers: [],
            bags: [],
            desserts: [],
            dessertsTotal: 0,
            errors:{}
        }
    },
    beforeMount() {
        this.gridOptions = {};
        this.columnDefs = [
            {
                headerName: "ID",
                align: "left",
                sortable: false,
                valueGetter: "node.rowIndex + 1"
            },
            // // {headerName: "Bag Type", field: "bag_type"},
            // {
            //     headerName: "Bag Type",
            //     field: 'bag_type',
            //     width: 130,
            //     editable: true,
            //     cellEditor: 'select',
            //
            //     cellEditorParams: {
            //         values: this.bags,
            //     },
            // },
            {headerName: "Bag Class", field: "name"},
            {headerName: "Quantity", field: "qty"},
            {headerName: "Price", field: "price"},
            {headerName: "/n Bags", field: "no_of_bags"},
            {headerName: "Value", field: "value"},
        ];

        this.frameworkComponents = {
            // btnCellRenderer: BtnCellRenderer,
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
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Bag Sale Invoice"}]);
    },
    methods: {
        onCellValueChanged(event) {
        },
        onCellStopEditing(event) {
            var rowNode = this.gridApi.getRowNode(event.rowIndex);
            var rowData = event.data;
            console.log('Row Data: ', rowData);
            rowData.value = parseFloat(rowNode.data.no_of_bags) * parseFloat(rowNode.data.price) * parseFloat(rowNode.data.qty);
            rowNode.setData(rowData);
            console.log('Row Node: ', rowNode);

            var totalAmount = 0;
            $.each(this.rowData, (index, value) => {
                    totalAmount += parseFloat(value.value);
            });

            this.form.total_receivable = totalAmount;
        },
        onChange(e) {
            ApiService.get('/api/bag/fetch-select-bag?id=' + e.target.value).then((res) => {
                this.rowData.push(res.data);
                var newArr = [];
                newArr = this.checkDuplicate(this.rowData);
                console.log('Row Data: ', this.rowData, newArr);
            });
        },
        checkDuplicate(arr) {
            let reduced = arr.reduce((acc, current) => {
                if (acc.find(item => item.id === current.id))
                    return acc;
                else
                    return acc.concat(current);
            }, []);

            if(reduced.length != arr.length){
                arr.splice(-1);
                this.sr -=1;
                console.log("Yes");
            }else {
                console.log("No");
                this.sr +=1;
            }

            return arr;

        },
        onGridReady(params) {},
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.loading=true;

            this.form={...this.form,transactions:this.rowData};

                ApiService.post('/api/bag/create-bag-sale-invoice', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Bag Sale Invoice Created Successfully...`,

                        solid: true
                    })

                    // this.redirectToIndex();
                }).catch((error)=>{
                    this.submit_text='Submit';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                    this.loading=false;
                })
        },
        redirectToIndex() {
            this.$router.push({name: 'bag_sale_invoice_index'});
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
        onReset(evt) {
            evt.preventDefault()
            this.form.party_id = ''
            this.form.buyer_id = ''

            this.rowData = [];

            this.show = false
            this.submit_text = 'Submit';
            this.$nextTick(() => {
                this.show = true
            })
        },
        getBags() {
            ApiService.get('/api/deal/fetch-bags').then((res) => {
                this.bags = res.data;
                console.log('Accounts: ', this.bags);
            });
        },
        getParties() {
            ApiService.get('/api/deal/fetch-parties').then((res) => {
                this.parties = res.data;
            });
        },
        getBuyers() {
            ApiService.get('/api/bag/fetch-buyers').then((res) => {
                this.buyers = res.data;
                console.log('Buyers: ', this.buyers);
            });
        },
        getLast() {
            ApiService.get('/api/bag/last').then((res) => {
                this.form.sale_number = res.data;
            });
        },
        currentDateTime() {
            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

            this.form.sale_date = date +' '+ time;
        }
    },
    created() {
        this.getLast();
        this.getBags();
        this.getParties();
        this.getBuyers();
        this.currentDateTime();
    }
}
</script>
