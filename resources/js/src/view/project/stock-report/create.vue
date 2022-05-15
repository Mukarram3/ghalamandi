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
                            <div>
                                <button type="button" class="btn btn-primary" v-on:click="onBtExport()" style="margin-bottom: 5px; font-weight: bold;">Export to Excel</button>
                            </div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
<!--                                <b-button type="reset" variant="danger">Reset</b-button>-->
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

            title: 'Stock Report',
            is_update: false,
            submit_text: 'Print',
            loading:false,
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
                field: "id"
            },
            {headerName: "Commodity", field: "name"},
            {headerName: "Crop", field: "category.name"},
            {headerName: "Stock", field: "stock"},
            {headerName: "Amount", field: "amount"},
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
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Stock Report"}]);
    },
    methods: {
        onBtExport() {
            console.log('Clicked!');
            this.gridApi.exportDataAsCsv();
        },
        onCellValueChanged(event) {
        },
        onCellStopEditing(event) {
            var rowNode = this.gridApi.getRowNode(event.rowIndex);
            var rowData = event.data;
            // console.log('Row Data: ', rowData);
            // console.log('Row Node: ', rowNode.data);
        },
        onFetchReportDataFromApi() {
            ApiService.get('/api/stock-report/fetch').then((res) => {
                if (res.data.length > 0) {
                    $.each(res.data,(key,value)=>{
                        this.rowData.push(value);
                    });
                }
                console.log('Row Data: ', res.data, this.rowData);
            });
        },

        onGridReady(params) {},
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
            this.errors = {};
            this.loading=true;

            // this.form={...this.form,transactions:this.rowData};
            //
            //     ApiService.post('/api/stock-report/create', this.form).then((res) => {
            //         this.$bvToast.toast(res.data.message, {
            //             title: `Stock Report Created Successfully...`,
            //
            //             solid: true
            //         })
            //
            //         // this.redirectToIndex();
            //     }).catch((error)=>{
            //         this.submit_text='Print';
            //         if (error.response.status === 422) {
            //             console.log(error.response.data.errors);
            //             this.errors = error.response.data.errors || {};
            //         }
            //         this.loading=false;
            //     })
        },
        redirectToIndex() {
            this.$router.push({name: 'stock_report_index'});
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
        },
        close() {
        },
        onReset(evt) {
            evt.preventDefault()
            this.rowData = [];

            this.show = false
            this.submit_text = 'Print';
            this.$nextTick(() => {
                this.show = true
            })
        },
    },
    created() {
        this.onFetchReportDataFromApi();
    }
}
</script>
