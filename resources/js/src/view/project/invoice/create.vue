<template>
    <v-app id="inspire">
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

                                        <label>DuId</label>
                                        <Select2Ajax v-on:selectInvoiceEvent="getDuidDataFromApi" class="form-control" :url="dealUrl" v-model="form.du_id"
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

                                        <label>Party</label>
                                        <select class="form-control" v-model="form.party_id">
                                            <option value="" disabled hidden>Choose Party</option>
                                            <option v-bind:value="form.party_id" selected disabled>{{ selectedPartyName }}</option>
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
                                            <option v-bind:value="form.broker_id" selected disabled>{{ selectedBrokerName }}</option>
                                            <option v-for="broker in brokers" v-bind:value="broker.id">
                                                {{ broker.name }}
                                            </option>
                                        </select>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.broker_id"
                                                                 :errors="errors">
                                            <span v-for=" error in errors.broker_id ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>

                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="3">

                                        <label>Invoice#</label>
                                    <b-input type="text" disabled  v-model="form.du_id" placeholder="Invoice #"></b-input>

                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12">
                                    <v-card >
                                        <v-skeleton-loader v-if="firstLoad" :loading="loading" type="table"></v-skeleton-loader>
                                        <v-data-table
                                            height="300"
                                            outlined
                                            dense
                                            v-show="!firstLoad"
                                            fixed-header
                                            :headers="headers"
                                            :items="desserts"
                                            :loading="loading"
                                            item-key="name"
                                            class="elevation-1">
                                            <template v-slot:body="{ items, headers }">
                                                <tbody>
                                                <tr v-for="(item,idx,k) in items" :key="idx">
                                                    <td v-for="(header,key) in headers" :key="key">
                                                        <v-edit-dialog
                                                            outlined
                                                            dense
                                                            large
                                                            :return-value.sync="item[header.value]"
                                                            @save="save(item,item[header.value])"
                                                            @cancel="cancel"
                                                            @open="open(item,header.value)"
                                                            @close="close"
                                                        > {{item[header.value]}}
                                                            <template v-slot:input>
                                                                <b-input
                                                                    style="margin-top: 20px;"
                                                                    v-model="item[header.value]"
                                                                    label="Edit"
                                                                    single-line
                                                                ></b-input>
                                                            </template>
                                                        </v-edit-dialog>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-data-table>
                                    </v-card>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="3">

                                        <label>Total Weight</label>
                                        <b-input placeholder="Total Weight" v-model="form.total_weight" type="text"></b-input>

                                </b-col>
                                <b-col md="3">

                                        <label>Total Amount</label>
                                        <b-input placeholder="Total Amount" v-model="form.total_amount" type="text"></b-input>

                                </b-col>

                                <b-col md="3">

                                        <label>Total Est. Expense</label>
                                        <b-input placeholder="Total Expense" v-model="form.total_est_amount" type="text"></b-input>

                                </b-col>

                                <b-col md="3">

                                    <label>Total Channi</label>
                                    <b-input placeholder="Total Channi"  v-model="form.total_channi" type="text"></b-input>


                                </b-col>

                            </b-row>
                            <b-row>

                                <b-col md="3">

                                        <label>Exact Weight</label>
                                        <b-input placeholder="Exact Weight"  v-model="form.exact_weight" type="text"></b-input>


                                </b-col>

                                <b-col md="3">

                                        <label>Deducted Amount</label>
                                        <b-input placeholder="Deducted Amount"  v-model="form.deducted_amount" type="text"></b-input>


                                </b-col>

                                <b-col md="3">

                                        <label>Actual Total</label>
                                        <b-input  placeholder="Actual Amount"  v-model="form.actual_total" type="text"></b-input>


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

                                        <label>Status</label>
                                        <select2 :options="options"  v-model="form.status"></select2>


                                </b-col>
                                <b-col md="3">

                                    <label>Expense Template</label>
                                    <select2 @change="onChange" class="form-control" :options="form.expense_template">
                                        <option value="" disabled hidden>Choose Expense Template</option>
                                        <option v-for="template in templates" v-bind:value="template.id">
                                            {{ template.name }}
                                        </option>
                                    </select2>


                                </b-col>

                            </b-row>
                            <b-row>
                                <b-col md="12">
                                    <h4>Expenses</h4>
                                </b-col>

                            </b-row>
                            <b-row>

                                <b-col v-for="(expense,index) in expenses" :key="index" md="2">
                                    <label>{{ expense.name }}</label>
                                    <b-input type="number" :value="expense.price" :placeholder="expense.name"></b-input>
                                </b-col>

                            </b-row>

                            <b-row>
                                <b-col md="12">
                                    <b-button type="submit" variant="primary" v-html="submit_text">Submit</b-button>
                                    <b-button type="reset" variant="danger">Reset</b-button>

                                </b-col>
                            </b-row>


                        </div>

                    </template>
                </KTCard>
            </div>
        </div>

    </div>
    </v-app>

</template>

<script>
    import KTCard from "@/view/content/Card.vue";

    import Modal from "@/view/project/party/create_modal.vue";
    import Modal1 from "@/view/project/broker/create_modal.vue";
    import Select2Ajax from "@/view/project/componenet/select2Ajax.vue";

    import Select2MultipleControl from "v-select2-multiple-component";
    import select2ajax from './../../../../components/select2ajax-sale';
    import select2 from './../../../../components/select2';
    import ApiService from "../../../core/services/api.service";

    export default {
        components: {
            KTCard, Select2MultipleControl, Modal, Modal1, select2ajax, select2, Select2Ajax
        },
        data() {
            return {
                title: 'Create Invoice',
                titleRight: 'Create Invoices',
                is_update: false,
                submit_text: 'Submit',
                expanded: [],
                singleExpand: true,
                expenses:[],
                firstLoad: false,
                loading:false,
                form:{
                    du_id:'',
                    deal_date:'',
                    delivery_date:'',
                    party_id:'',
                    broker_id:'',
                    invoice_id:'',
                    total_weight:'',
                    total_amount:'',
                    total_est_amount:'',
                    total_channi:'',
                    exact_weight:'',
                    deducted_amount:'',
                    actual_total:'',
                    status:'',
                    expense_template:'',
                },
                templates: [],
                parties: [],
                selectedPartyName: '',
                selectedBrokerName: '',
                brokers: [],
                value: '',
                formatted: '',
                selected: '',
                myValue: '',
                errors: [],
                dealUrl: '/api/deal/get-select-deals',
                // myOptions: ['op1', 'op2', 'op3'] ,
                result1: '',
                // selectedAjax: '-1',
                options: [{id: '1', text: 'Option 1'}, {id: '2', text: 'Option 2'}],
                optionsAjax: [{id: -1, text: ''}],
                headers: [
                    {
                        text: "ID",
                        align: "left",
                        sortable: false,
                        value: "id"
                    },
                    { text: "Commodity", value: "commodity" },
                    { text: "Unit", value: "unit_kgs" },
                    { text: "Rate", value: "rate" },
                    { text: "Quantity", value: "quantity" },
                    { text: "Total Weight", value: "total_weight" },
                    { text: "Bardana", value: "bardana" },
                    { text: "Kaat", value: "kaat" },
                    { text: "Channi", value: "channi" },
                    { text: "Actual Weight", value: "actual_weight" },
                    { text: "Total Amount (After)", value: "total_amount" },
                    { text: "Note", value: "note" },
                ],
                desserts: []
            }
        },
        methods:{
            getDuidDataFromApi: function (e) {
                this.firstLoad=true;
                this.loading = true;
                this.form.du_id = $('.select2ajaxinvoice').select2('data')[0]['text'];
                ApiService.get('/api/deal/get-data', this.form.du_id).then((res) => {
                    this.selectedPartyName = res.data['form']['party_name_name'];
                    this.selectedBrokerName = res.data['form']['broker_name'];
                    // console.log(res.data);
                    this.firstLoad=false;
                    this.loading = false;
                    this.desserts = res.data['data'];
                    this.form = res.data['form'];
                    // // this.form.types = res.data['types'];

                    if(res.data['data']) {
                        if (res.data['data'].length > 0) {
                            const totalWeight = res.data['data'].reduce((sum, item) => {
                                return sum + item.total_weight;
                            }, 0)
                            const totalAmount = res.data['data'].reduce((sum, item) => {
                                return sum + item.total_amount;
                            }, 0)
                            this.form.total_weight = totalWeight;
                            this.form.total_amount = totalAmount;
                        }
                    }
                }).catch((error)=>{
                    this.firstLoad=false;
                    this.loading = false;
                    this.$bvToast.toast('Error', {
                        title: `Something Went Wrong...`,

                        solid: true
                    })
                });
            },
            onContext(event){
                console.log(event);
            },
            save(item,value) {
                console.log(item);
                console.log(value);
            },
            cancel() {},
            open(event,header_value) {
                console.log('Event: ', event);
                console.log(header_value);
                // event.target.setSelectionRange(0, 2000);
            },
            close() {},
            getDealCommodities(){
                ApiService.get('/api/deal/get-deal-commodities').then((resp)=>{
                    this.desserts=resp.data;
                })
            },
            getTemplateDataFromApi() {
                ApiService.get('/api/deal/fetch-templates').then((res) => {
                    this.templates = res.data;
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
            onChange: function (event) {
                ApiService.get('/api/purchase-deal/fetch-template-types', event.target.value).then((res) => {
                   this.expenses = res.data;
                });
            },
        },
        mounted() {
            // this.getDealCommodities();
        },
        created() {
            this.getPartyDataFromApi();
            this.getBrokerDataFromApi();
            this.getTemplateDataFromApi();
        }
    }
</script>
<style>
    .element .v-data-table__wrapper::-webkit-scrollbar {
        width: 24px;
        height: 8px;
        background-color: #143861;
    }
</style>
