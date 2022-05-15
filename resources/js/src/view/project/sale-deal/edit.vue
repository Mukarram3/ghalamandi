<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/sale-deal/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>

                            <b-row>
                                <b-col md="2">
                                    <div role="group">
                                        <label>DUID: <span style="color: #e70746;">*</span></label>
                                        <b-form-input
                                            id="input-live"
                                            v-model="form.du_id"
                                            aria-describedby="input-live-help input-live-feedback"
                                            disabled
                                            trim
                                        ></b-form-input>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.du_id" :errors="errors">
                                            <span v-for=" error in errors.du_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-col>

                                <b-col md="4">
                                    <label>Deal Date:<span style="color: #e70746;">*</span></label>

                                    <b-form-datepicker
                                        v-model="form.deal_date"
                                        right
                                        today-button
                                        reset-button
                                        locale="en-US"
                                        aria-controls="example-input-1"
                                        @context="onContext"
                                    ></b-form-datepicker>


                                </b-col>
                                <b-col md="3">

                                    <label>Select Party :<span style="color: #e70746;">*</span></label>
                                    <span style="color: #e70746; float:right; cursor: pointer;" v-b-modal.modal-1>Add Party</span>
                                    <div role="group">
                                        <select2 class="form-control" :options="parties" :value="form.customer_id" v-model="form.customer_id">

                                        </select2>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.customer_id" :errors="errors">
                                            <span v-for=" error in errors.customer_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                    </div>

                                </b-col>

                                <b-col md="3">

                                    <label>Select Broker:</label>
                                    <span style="color: #e70746; float:right; cursor: pointer;" v-b-modal.modal-2>Add Broker</span>
                                    <div role="group">
                                        <select2 class="form-control" v-bind:value="form.broker_id" :options="brokers" :value="form.broker_id" v-model="form.broker_id">

                                        </select2>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.broker_id" :errors="errors">
                                            <span v-for=" error in errors.broker_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="4">
                                    <label>Select Commodities:<span style="color: #e70746;">*</span></label>
                                    <select2ajax v-on:selectEvent="focusQuantity" ref="select2ajax" class="form-control" style="line-height: 0px !important;" v-model="form.selectedAjax"
                                                 v-bind:options="optionsAjax">
                                    </select2ajax>
                                </b-col>

                                <b-col md="2">
                                    <label>Quantity:<span style="color: #e70746;">*</span></label>
                                    <b-form-input
                                        ref="quantity"
                                        id="input-live-quantity"
                                        v-model="form.quantity"
                                        type="text"
                                        placeholder="Enter Quantity"
                                        @keyup="focusWeight"
                                    ></b-form-input>
                                </b-col>

                                <b-col md="2">
                                    <label>Weight per Bag:<span style="color: #e70746;">*</span></label>
                                    <select2 v-on:close="focusRate" ref="weight_per_bag" class="form-control weight_per_bag" :options="units" :value="form.weight_per_bag" v-model="form.weight_per_bag">
                                    </select2>
                                </b-col>

                                <b-col md="2">
                                    <label>Rate:<span style="color: #e70746;">*</span></label>
                                    <b-form-input @keyup="focusUnit" ref="rate" id="input-live-rate" v-model="form.rate" type="text"
                                                  placeholder="Enter Rate" autocomplete="off" trim
                                    ></b-form-input>
                                </b-col>

                                <b-col md="2">
                                    <label>Rate Unit:<span style="color: #e70746;">*</span></label>
                                    <select2 @change="addCart" ref="rate_unit" class="form-control rate_unit" :options="units" :value="form.rate_unit" v-model="form.rate_unit">
                                    </select2>
                                </b-col>

                                <b-col md="2">
                                    <label>Gross Weight:</label>
                                    <b-form-input disabled id="input-live-rate" v-model="form.gross_weight" type="text"
                                                  placeholder="Gross Weight" autocomplete="off" trim
                                    ></b-form-input>
                                </b-col>

                                <b-col md="2">
                                    <b-button style="margin-top: 20px;" @click="addCart" variant="info">Add Item</b-button>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="desserts"
                                        :search="search">

                                        <template v-slot:item.actions="{ item }">
                                            <!--                                            <v-icon-->
                                            <!--                                                small-->
                                            <!--                                                class="mr-2"-->
                                            <!--                                                @click="editItem(item)"-->
                                            <!--                                            >-->
                                            <!--                                                mdi-pencil-->
                                            <!--                                            </v-icon>-->
                                            <v-icon
                                                small
                                                @click="deleteItem(item)">
                                                mdi-delete
                                            </v-icon>
                                        </template>
                                    </v-data-table>

                                </b-col>
                            </b-row>
                            <b-row>

                                <b-col md="6">
                                    <label>Description:</label>
                                    <b-form-input id="input-live-desc" v-model="form.desc" type="text"
                                                  placeholder="Enter Description" autocomplete="off" trim
                                    ></b-form-input>
                                </b-col>

                                <b-col md="6">
                                    <b-form-group>
                                        <label>Delivery Date:</label>
                                        <b-form-datepicker
                                            v-model="form.delivery_date"
                                            right
                                            today-button
                                            reset-button
                                            locale="en-US"
                                            aria-controls="example-input-2"
                                            @context="onContext"
                                        ></b-form-datepicker>
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


        <b-modal  hide-footer size="xl" id="modal-1"  title="Add Party">
            <Modal></Modal>
        </b-modal>
        <b-modal  hide-footer size="xl" id="modal-2"  title="Add Broker">
            <Modal1></Modal1>
        </b-modal>

    </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import KTCard from "@/view/content/Card.vue";
import ApiService from "@/core/services/api.service";
import {SET_BREADCRUMB} from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

import Modal from "@/view/project/party/create_modal.vue";
import Modal1 from "@/view/project/broker/create_modal.vue";

import Select2MultipleControl from "v-select2-multiple-component";
import select2 from './../../../../components/select2';
import select2ajax from './../../../../components/select2ajax-sale';

export default {
    components: {
        KTCard, Select2MultipleControl, Modal, Modal1, select2ajax, select2
    },
    data() {
        return {
            title: 'Update Purchase Deal',
            titleRight: 'List Deals',
            is_update: true,
            submit_text: 'Update',

            expanded: [],
            singleExpand: true,

            value: '',
            formatted: '',
            selected: '',
            options: [{id: '', text: ''}, {id: '', text: ''}],
            optionsAjax: [{id: -1, text: ''}],
            form: {
                du_id: '0',
                customer_id: '',
                deal_date: '',
                broker_id: '',
                commodity: '',
                rate: '',
                rate_unit: '',
                weight_per_bag: '',
                quantity: '',
                total_weight: '',
                total_amount: '',
                total_est_amount: 0,
                total_bags: '',
                delivery_date: '',
                expense_template: '',
                desc: '',
                deal_type: '',
                type: 'Sale',
                status: '',
                gross_weight: '',
                selectedAjax: '-1',
                desserts2: [],
                types: [],
            },
            row: 1,
            isModalVisible: false,
            isBrokerModalVisible: false,
            templates: [],
            parties: [],
            dealTypes: ['Arrival', 'Normal', 'Exmill'],
            StatusArr: ['loaded', 'arrived', 'scanned', 'production', 'completed', 'removed'],
            brokers: [],
            commodities: [],
            units: [],
            weight_per_bag_id: '',
            rate_unit_id: '',
            show: true,
            search: '',
            headers: [
                {
                    text: 'Sr',
                    align: 'd-none',
                    sortable: false,
                    value: 'row',
                },
                {text: 'ID', value: 'id', align: ' d-none'},
                {text: 'Commodity', value: 'commodity'},
                {text: 'Quantity', value: 'quantity'},
                {text: 'Weight per Bag', value: 'weight_per_bag'},
                {text: 'Rate', value: 'rate'},
                {text: 'No. of Bags', value: 'no_of_bags'},
                {text: 'Total Weight (kgs)', value: 'total_weight_kgs'},
                {text: 'Total Amount', value: 'total_amount'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            index: '',
            calcArray: [],
            desserts: [],
            errors:{},
            // showMenu: false,
        }
    },

    mounted() {
        // this.form.du_id = this._uid;
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Dashboard"}]);
        this.$root.$on('onAddParty', (e)=>{
            console.log('Hello I am Add Party');
            console.log(e);
            this.parties.push({id:e.account.id,text:e.account.name,selected:true});
            this.form.customer_id=e.account.id;
        });

        this.$root.$on('onAddBroker', (e)=>{
            console.log('Hello I am Add Party');
            console.log(e);
            this.brokers.push({id:e.account.id,text:e.account.name,selected:true});
            this.form.broker_id=e.account.id;
        });
    },
    methods: {
        focusQuantity: function(event){
            if (event.key=='Enter'){
                setTimeout(() => {
                    this.$refs.quantity.focus()
                }, 300)
            } else {
                setTimeout(() => {this.$refs.quantity.focus()}, 300)
            }
        },
        focusWeight: function (event) {
            this.form.gross_weight = event.target.value * this.form.weight_per_bag;
            if (event.key=='Enter') {
                // this.$nextTick(() => this.$refs.weight_per_bag.select2('open'))
                // $( this.$refs.weight_per_bag).select2('open');
                $('.weight_per_bag').focus();
                $('.weight_per_bag').select2('open');
            }
        },
        focusRate(event) {
            this.form.gross_weight = event.target.value * this.form.quantity;
            // if (event.type=='change') {
            //     setTimeout(() => {this.$refs.rate.focus()}, 300);
            // }
            if (event.key=='Enter'){
                setTimeout(() => {
                    setTimeout(() => {this.$refs.rate.focus()}, 300);
                }, 300)
            } else {
                setTimeout(() => {this.$refs.rate.focus()}, 300);
            }
        },
        focusUnit: function (event) {
            if (event.key=='Enter') {
                $('.rate_unit').focus();
                $('.rate_unit').select2('open');
                // this.$nextTick(() => this.$refs.rate_unit.focus())
            }
        },
        unitChange(event) {
            this.$refs.quantity.focus();
            let get_val = event.target.selectedOptions[0].getAttribute("unit_id");
            this.unit_id = get_val;
            // console.log("Value from the Attribute: ", get_val)
        },
        onChange: function (event) {
            ApiService.get('/api/purchase-deal/fetch-template-types', event.target.value).then((res) => {
                this.form.types = res.data;
            });
        },
        addCart: function (event) {
            // this.$refs.select2ajax.focus();
            this.row++;
            var commodity = $('.sale-select2').select2('data')[0];
            // console.log('AddCart: ', );
            if ((commodity==undefined) || (this.form.weight_per_bag==undefined) || (this.form.rate=="") || (this.form.quantity=="")) {
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
                if (this.form.rate_unit== undefined || this.form.rate_unit=='') {
                    this.form.rate_unit = 40;
                }
                var temp = {
                    id: commodity.id,
                    commodity: commodity.name,
                    rate: this.form.rate,
                    row: this.row,
                    rate_unit: this.form.rate_unit,
                    weight_per_bag: this.form.weight_per_bag,
                    status: this.form.status,
                    quantity: this.form.quantity,
                    total_weight_kgs: this.form.quantity * this.form.weight_per_bag,
                    total_weight: this.form.quantity * this.form.weight_per_bag / this.form.rate_unit,
                    no_of_bags: (this.form.quantity * this.form.weight_per_bag) / this.form.rate_unit,
                    total_amount: (this.form.quantity * this.form.weight_per_bag / this.form.rate_unit) * this.form.rate,
                };
                if (this.desserts != undefined) {
                    this.desserts.push(temp);
                    this.form.desserts2 = this.desserts;
                } else {
                    this.desserts = [];
                    this.desserts.push(temp);
                    this.form.desserts2 = this.desserts;
                }

                this.form.commodity = ''
                this.form.rate = ''
                this.form.rate_unit = ''
                this.form.weight_per_bag = ''
                this.form.quantity = ''
                this.form.gross_weight = ''

                $('.sale-select2').focus();
                $('.sale-select2').select2('open');

                this.form.commodity = $('.sale-select2').select2('data')[0].id;
            }
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        showBrokerModal() {
            this.isBrokerModalVisible = true;
        },
        closeBrokerModal() {
            this.isBrokerModalVisible = false;
        },
        redirect() {
            this.$router.push({name: 'index_deal_sale'});
        },
        onSubmit: function (evt) {
            // evt.preventDefault()
            // alert(JSON.stringify(this.form))

            if (this.form.desserts2.length == 0){
                this.$bvToast.toast('Your cart is empty...', {
                    title: `Error`,
                    solid: true
                })
                return;
            }

            this.errors = {};
            this.submit_text = '<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
            ApiService.post('/api/sale-deal/update', this.form, this.desserts).then((res) => {
                // console.log(res)
                this.$bvToast.toast(res.data.message, {
                    title: `Deal updated Successfully...`,
                    solid: true
                })
                this.submit_text = 'Update';
                this.redirect();
            }).catch((error) => {
                this.submit_text = 'Update';
                if (error.response.status === 422) {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors || {};
                }
            })
        },
        onContext(event) {
            // console.log(event);
        },
        onReset() {
            // evt.preventDefault()
            // this.form.customer_id = ''
            // this.form.broker_id = ''
            this.form.commodity = ''
            this.form.rate = ''
            this.form.weight_per_bag = ''
            this.form.quantity = ''
            this.form.weight = ''
            this.form.total_weight = ''
            this.form.total_amount = ''
            this.form.delivery_date = ''
            this.form.desc = ''
            this.desserts = []

            this.show = false
            this.submit_text = 'Update';
            this.$nextTick(() => {
                this.show = true
            })
        },
        editItem(item) {
            this.index = this.desserts.map(function (x) {
                return x.row;
            }).indexOf(item.row);
            // console.log(this.desserts);

            this.form.commodity = this.desserts[this.index].commodity;
            this.form.rate = this.desserts[this.index].rate;
            this.form.rate_unit = this.desserts[this.index].rate_unit;
            this.form.weight_per_bag = this.desserts[this.index].weight_per_bag;
            this.form.quantity = this.desserts[this.index].quantity;
            this.form.status = this.desserts[this.index].status;

            this.desserts.splice(this.index, 1);
        },
        deleteItem(item) {
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

                    ApiService.post('/api/sale-deal/delete-deal-commodity',item).then((res)=>{
                        // console.log(res)
                        this.desserts.splice(index, 1);
                        this.form.desserts2.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Deal Commodity Deleted Successfully...`,

                            solid: true
                        })
                        this.form.commodity = ''
                        this.form.rate = ''
                        this.form.rate_unit = ''
                        this.form.weight_per_bag = ''
                        this.form.quantity = ''
                    })
                }
            })
        },
        getTemplateDataFromApi() {
            ApiService.get('/api/sale-deal/fetch-templates').then((res) => {
                // console.log('Templates: ', res.data);
                this.templates = res.data;
            });
        },
        getPartyDataFromApi() {
            ApiService.get('/api/sale-deal/fetch-parties').then((res) => {
                // console.log('Parties: ', res.data);
                this.parties = res.data;
            });
        },
        getBrokerDataFromApi() {
            ApiService.get('/api/sale-deal/fetch-brokers').then((res) => {
                this.brokers = res.data;
            });
        },
        getUnitDataFromApi() {
            ApiService.get('/api/sale-deal/fetch-units').then((res) => {
                // console.log('Units: ', res.data);
                this.units = res.data;
            });
        },
        getCommodityDataFromApi() {
            ApiService.get('/api/sale-deal/fetch-commodities').then((res) => {
                // console.log('Commodities: ', res.data);
                this.commodities = res.data;
            });
        },
        getEditDataFromApi: function () {
            ApiService.get('/api/sale-deal/edit', this.$route.params.id).then((res) => {
                this.desserts = res.data['data'];
                // this.form = res.data['form'];
                console.log('Form Data: ',res.data['form'].id);

                this.form.du_id = res.data['form'].du_id;
                this.form.customer_id = res.data['form'].customer_id;
                this.form.deal_date = res.data['form'].deal_date;
                this.form.delivery_date = res.data['form'].delivery_date;
                this.form.broker_id = res.data['form'].broker_id;
                this.form.desc = res.data['form'].desc;
            });
        },
    },
    created() {
        this.getEditDataFromApi();
        this.getPartyDataFromApi();
        this.getBrokerDataFromApi();
        this.getUnitDataFromApi();
        this.getCommodityDataFromApi();
        this.getTemplateDataFromApi();

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
