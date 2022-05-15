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
                                <b-col md="3">
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

                                <b-col md="3">
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

                                <b-col md="3">
                                    <label>Deal:<span style="color: #e70746;">*</span></label>
                                    <Select2Ajax v-on:selectDealEvent="getDealDataFromApi" class="form-control"
                                                 :url="dealUrl" v-model="form.deal_id"
                                                 :options="options"></Select2Ajax>
                                </b-col>

                                <b-col md="3">
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
                            </b-row>

                            <b-row>
                                <b-col md="3">
                                    <label>Vehicle Number:</label>
                                    <b-form-input

                                        v-model="form.vehicle_no"
                                        type="text"
                                        placeholder="Vehicle number"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="3">
                                    <b-form-group>
                                        <label>Load Weight</label>
                                        <b-input type="text" v-model="form.load_weight"
                                                 placeholder="Load Weight"></b-input>
                                    </b-form-group>
                                </b-col>
                                <b-col md="3">
                                    <b-form-group>
                                        <label>Arrival Weight</label>
                                        <b-input type="text" v-model="form.arrival_weight"
                                                 placeholder="Arrival Weight"></b-input>
                                    </b-form-group>
                                </b-col>
                                <b-col md="3">
                                    <b-form-group>
                                        <label>Vehicle Freight/Expense</label>
                                        <b-input type="text" v-model="form.vehicle_freight"
                                                 placeholder="Vehicle Freight/Expense"></b-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="3">
                                    <label>Total Bags:</label>
                                    <b-form-input

                                        v-model="form.total_bags"
                                        type="text"
                                        placeholder="Total Bags"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="3">
                                    <label>Bilty Number:</label>
                                    <b-form-input

                                        v-model="form.bilty_no"
                                        type="text"
                                        placeholder="Bilty Number"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="3">
                                    <label>Receiver Name:</label>
                                    <b-form-input
                                        v-model="form.receiver_name"
                                        type="text"
                                        placeholder="Receiver Name"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="3">
                                    <label>Transporter:</label>
                                    <b-form-input
                                        v-model="form.transporter_name"
                                        type="text"
                                        placeholder="Transporter"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="3">
                                    <label>Driver Name:</label>
                                    <b-form-input
                                        v-model="form.driver_name"
                                        type="text"
                                        placeholder="Driver Name"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="3">
                                    <label>Driver Phone:</label>
                                    <b-form-input
                                        v-model="form.driver_phone"
                                        type="text"
                                        placeholder="Driver Phone"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>

                                <b-col md="3">
                                    <label>Deduction Weight:</label>
                                    <b-form-input
                                        @keyup="calculateNetWeight"
                                        v-model="form.deduction_weight"
                                        type="text"
                                        placeholder="Deduction Weight"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>

                                <b-col md="3">
                                    <label>Total Weight:</label>
                                    <b-form-input
                                        @keyup="calculateNetWeight"
                                        v-model="form.total_weight"
                                        type="text"
                                        placeholder="Total Calculated Weight"
                                        autocomplete="off"
                                        trim
                                    ></b-form-input>
                                </b-col>
                                <b-col md="3">
                                    <b-form-group>
                                        <label>Net Weight</label>
                                        <b-input type="text" v-model="form.net_weight" disabled
                                                 placeholder="Net Weight"></b-input>
                                    </b-form-group>
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
import KTCard from "@/view/content/Card.vue";
import ApiService from "@/core/services/api.service";
import {SET_BREADCRUMB} from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

import Select2MultipleControl from "v-select2-multiple-component";
import Select2Ajax from "@/view/project/componenet/select2AjaxArrival.vue";
import select2 from './../../../../components/select2';

export default {
    components: {
        KTCard, Select2MultipleControl, Select2Ajax, select2
    },
    data() {
        return {
            title: 'Update Arrival',
            titleRight: 'List Arrivals',
            is_update: false,
            submit_text: 'Update',
            options: [{id: '', text: ''}, {id: '', text: ''}],
            optionsAjax: [{id: -1, text: ''}],
            form: {
                arrival_id: '',
                deal_id: '',
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
                vehicle_no: '',
                deduction_weight: '',
                total_weight: '',
                net_weight: '',
            },
            row: 0,
            parties: [],
            StatusArr: ['loaded', 'arrived', 'scanned', 'production', 'completed', 'removed'],
            show: true,
            search: '',
            index: '',
            desserts: [],
            dealUrl: '/api/arrival/get-select-deals',
            errors: {},
            // showMenu: false,
        }
    },
    mounted() {
        this.form.arrival_id = this._uid;
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Dashboard"}]);
    },
    methods: {
        calculateNetWeight(){
            if(this.form.total_weight && this.form.deduction_weight){
                this.form.net_weight = this.form.total_weight - this.form.deduction_weight;
                console.log('Net Weight Calculated: ', this.form.net_weight);
            }
        },
        getDealDataFromApi: function (e) {
            this.firstLoad = true;
            this.loading = true;
            this.form.deal_id = $('.select2ajaxarrival').select2('data')[0]['text'];
            console.log('Deal Id', this.form.deal_id);
            ApiService.get('/api/arrival/get-data', this.form.deal_id).then((res) => {
                // this.form = res.data;
                this.form.deal_id = res.data.deal_id;
                this.form.customer_id = res.data.customer_id;
                this.form.total_bags = res.data.total_bags;
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
            this.submit_text = '<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
            ApiService.post('/api/arrival/update', this.form).then((res) => {
                this.$bvToast.toast(res.data.message, {
                    title: `Arrival Record updated Successfully...`,
                    solid: true
                })
                this.form.deal_id = ''
                this.form.customer_id = ''
                this.form.arrival_date = ''
                this.form.bilty_no = ''
                this.form.receiver_name = ''
                this.form.transporter_name = ''
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

                this.redirectToInvoice();

                this.submit_text = 'Update';
                // this.redirect();
            }).catch((error) => {
                this.submit_text = 'Update';
                if (error.response.status === 422) {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors || {};
                }
            })
        },
        redirectToInvoice() {
            this.$router.push({name: 'index_arrival'});
        },
        onContext(event) {
            // console.log(event);
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
        getEditDataFromApi: function () {
            ApiService.get('/api/arrival/edit', this.$route.params.id).then((res) => {
                this.form = res.data;
            });
        },
    },
    created() {
        this.getEditDataFromApi();
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
