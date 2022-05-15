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
                                    <b-col md="4">
                                        <div role="group">
                                            <label>Voucher No.:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.voucher_number"
                                                aria-describedby="input-live-help input-live-feedback"
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.voucher_number" :errors="errors">
                                                <span v-for=" error in errors.voucher_number ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>
                                    <b-col md="4">
                                        <label>Voucher Date:</label>
                                        <b-form-datepicker
                                            v-model="form.voucher_date"
                                            right
                                            today-button
                                            reset-button
                                            locale="en-US"
                                            aria-controls="example-input-1"
                                            @context="onContext"
                                        ></b-form-datepicker>
                                    </b-col>
                                    <b-col md="4">
                                        <div role="group">
                                            <label>Balance:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.balance"
                                                aria-describedby="input-live-help input-live-feedback"
                                                disabled
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.balance" :errors="errors">
                                                <span v-for=" error in errors.balance ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>

                                    <b-col md="2">
                                        <div role="group">
                                            <b-form-group id="input-group-1" label="Account No:" label-for="input-1" description="">
                                                <select2 @close="onChange" class="form-control" :options="accounts" :value="form.account_id"
                                                         v-model="form.account_id">
                                                </select2>
                                            </b-form-group>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.account_id" :errors="errors">
                                                <span v-for=" error in errors.account_id ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>

                                    <b-col md="3">
                                        <div role="group">
                                            <label>Account Name:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.account_name"
                                                aria-describedby="input-live-help input-live-feedback"
                                                disabled
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.account_name" :errors="errors">
                                                <span v-for=" error in errors.account_name ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>

                                    <b-col md="3">
                                        <div role="group">
                                            <label>Narration:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.narration"
                                                aria-describedby="input-live-help input-live-feedback"
                                                trim
                                            ></b-form-input>
                                        </div>
                                    </b-col>
                                    <b-col md="2">
                                        <div role="group">
                                            <label>Debit:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.debit"
                                                aria-describedby="input-live-help input-live-feedback"
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.debit" :errors="errors">
                                                <span v-for=" error in errors.debit ">{{ error }}</span><br>
                                            </b-form-invalid-feedback>
                                        </div>
                                    </b-col>
                                    <b-col md="2">
                                        <div role="group">
                                            <label>Credit:</label>
                                            <b-form-input
                                                id="input-live"
                                                v-model="form.credit"
                                                aria-describedby="input-live-help input-live-feedback"
                                                trim
                                            ></b-form-input>
                                            <b-form-invalid-feedback style="display: block;" v-if="errors.credit" :errors="errors">
                                                <span v-for=" error in errors.credit ">{{ error }}</span><br>
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

            title: 'Create Journal Voucher',
            titleRight: 'List Journal Vouchers',
            is_update: false,
            submit_text: 'Create',
            loading:false,
            form: {
                voucher_number: '',
                voucher_date: '',
                account_number: '',
                account_name: '',
                narration: '',
                debit: '',
                credit: '',
                balance: '',

            },
            show: true,
            search: '',
            sr: 0,
            accounts: [],
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
            {headerName: "Account Number", field: "id"},
            {headerName: "Account Name", field: "name"},
            {headerName: "Narration", field: "narration"},
            {headerName: "Debit", field: "debit",
                editable: function(params) {
                    return params.node.data.credit == undefined;
                },
            },
            {headerName: "Credit", field: "credit",
                editable: function(params) {
                    return params.node.data.debit == undefined;
                },
            },
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
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Journal Voucher"}]);
    },
    methods: {
        onCellValueChanged(event) {
        },
        onCellStopEditing(event) {
            var rowNode = this.gridApi.getRowNode(event.rowIndex);
            var rowData = event.data;
            // console.log('Row Data: ', rowData);
            // console.log('Row Node: ', rowNode.data);

            var debitVar = 0;
            var creditVar = 0;
            $.each(this.rowData, (index, value) => {
                // this.sr += 1;
                if (value.debit > 0) {
                    debitVar += parseFloat(value.debit);
                }
                if (value.credit > 0) {
                    creditVar += parseFloat(value.credit);
                }
            });

            this.form.debit = parseFloat(debitVar);
            this.form.credit = parseFloat(creditVar);

        },
        onChange(e) {
            ApiService.get('/api/journal-voucher/fetch-select-account?id=' + e.target.value).then((res) => {
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

            if(this.form.debit != this.form.credit){
                this.$bvToast.toast('Debit and Credit value are not equal...', {
                    title: `ERROR`,

                    solid: true
                })
                return;
            }

            this.form={...this.form,transactions:this.rowData};

                ApiService.post('/api/journal-voucher/create', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Journal Voucher Created Successfully...`,

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
            this.$router.push({name: 'journal_voucher_index'});
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
            this.form.voucher_number = ''
            this.form.voucher_date = ''
            this.form.account_number = ''
            this.form.account_name = ''
            this.form.narration = ''
            this.form.balance = ''
            this.form.debit = ''
            this.form.credit = ''

            this.rowData = [];

            this.show = false
            this.submit_text = 'Submit';
            this.$nextTick(() => {
                this.show = true
            })
        },
        getAccounts() {
            ApiService.get('/api/journal-voucher/fetch-accounts').then((res) => {
                this.accounts = res.data;
                console.log('Accounts: ', this.accounts);
            });
        },
        getLast() {
            ApiService.get('/api/journal-voucher/last').then((res) => {
                this.form.voucher_number = res.data;
            });
        },
        currentDateTime() {
            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

            this.form.voucher_date = date +' '+ time;
        }
    },
    created() {
        this.getLast();
        this.getAccounts();
        this.currentDateTime();
    }
}
</script>
