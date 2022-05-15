<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/account/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-1" label="Account Type :*" label-for="input-1" description="">
                                    <select class="form-control" v-model="form.type">
                                        <option value="" disabled hidden>Choose Type</option>
                                        <option v-for="option in accounts"  :value="option.name">{{ option.name }}</option>
                                    </select>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-0"
                                    label="Name in English :*"
                                    label-for="input-0"
                                >
                                    <b-form-input
                                        id="input-0"
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter name in English"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-1"
                                    label="Name in Urdu :*"
                                    label-for="input-1"
                                >
                                    <b-form-input
                                        v-model="form.name_urdu"
                                        type="text"
                                        placeholder="Enter name in Urdu"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-2"
                                    label="Phone:"
                                    label-for="input-2"
                                >

                                    <b-form-input
                                        id="input-2"
                                        v-model="form.phone"
                                        placeholder="Enter phone number"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.phone" :errors="errors">
                                        <span v-for=" error in errors.phone ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-3"
                                    label="Office:"
                                    label-for="input-3"
                                >

                                    <b-form-input
                                        id="input-3"
                                        v-model="form.phone_2"
                                        placeholder="Enter office phone number"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-4" label="CNIC :" label-for="input-4">
                                    <b-form-input
                                        id="input-4"
                                        v-model="form.cinic"
                                        placeholder="Enter CNIC"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.cinic" :errors="errors">
                                        <span v-for=" error in errors.cinic ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-5" label="Description :" label-for="input-5">
                                    <b-form-input
                                        id="input-5"
                                        v-model="form.desc"
                                        placeholder="Enter description"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-6" label="Company :" label-for="input-6">
                                    <b-form-input
                                        id="input-6"
                                        v-model="form.company"
                                        placeholder="Enter company"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-7" label="City :" label-for="input-7">
                                    <b-form-input
                                        id="input-7"
                                        v-model="form.city"
                                        placeholder="Enter city"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-8" label="Address :" label-for="input-8">
                                    <b-form-input
                                        id="input-8"
                                        v-model="form.address"
                                        placeholder="Enter address"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-10" label="Unloading Office Address :" label-for="input-10">
                                    <b-form-input
                                        id="input-10"
                                        v-model="form.unload_address"
                                        placeholder="Enter unloading office address"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-9"
                                    label="Opening Balance :*"
                                    label-for="input-9"
                                    description=""
                                >
                                    <b-form-input
                                        id="input-9"
                                        v-model="form.balance"
                                        type="text"
                                        placeholder="Enter opening balance"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-checkbox
                                    id="checkbox-1"
                                    v-model="check_status"
                                    name="checkbox-1"
                                    value="true"
                                    @change="checkin"
                                    class="mb-3"
                                    unchecked-value="false"
                                >
                                    Attach to Existing Account
                                </b-form-checkbox>

                                <b-form-group v-if="check_status=='true'" id="input-group-1" label="Choose Account:*" label-for="input-1" description="">
                                    <select class="form-control" v-model="form.account_selected">
                                        <option value="" disabled hidden>Choose Account</option>
                                        <option v-for="option in allAccounts"  :value="option.name">{{ option.name }}</option>
                                    </select>
                                </b-form-group>

                                <b-form-group v-if="check_status=='false'" label="Choose Account:*" v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        id="radio-slots"
                                        v-model="form.account_selected"
                                        :options="accountOptions"
                                        :aria-describedby="ariaDescribedby"
                                        name="radio-options-slots"
                                    >
                                    </b-form-radio-group>
                                </b-form-group>

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
import KTCard from "@/view/content/Card.vue";
import ApiService from "@/core/services/api.service";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

import Select2MultipleControl from 'v-select2-multiple-component';

export default {
    components: {
        KTCard,
        Select2MultipleControl
    },
    data() {
        return {
            title: 'Create Account',
            titleRight: 'List Accounts',
            is_update: false,
            submit_text: 'Create',
            loading:false,
            check_status:'false',
            form: {
                type: '',
                name: '',
                name_urdu: '',
                phone: '',
                phone_2: '',
                desc: '',
                company: '',
                city: '',
                cinic: '',
                account_selected: '',
                address: '',
                unload_address: '',
                balance: '',

            },
            options: ['Buyer','Supplier','Broker'],
            accountOptions: ['Asset','Liability'],
            checkbox: false,
            show: true,
            search: '',
            accounts: [],
            allAccounts: [],
            desserts: [],
            dessertsTotal: 0,
            errors:{}
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Accounts"}]);
    },
    methods: {
        checkin(){
          console.log(this.check_status);
        },
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.loading=true;

                ApiService.post('/api/customer/create', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Account Created Successfully...`,

                        solid: true
                    })

                    this.redirectToIndex();
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
            this.$router.push({name: 'index_account'});
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.type = 'Select Type'
            this.form.name = ''
            this.form.name_urdu = ''
            this.form.phone = ''
            this.form.phone_2 = ''
            this.form.desc = ''
            this.form.company = ''
            this.form.cinic = ''
            this.form.city = ''
            this.form.address = ''
            this.form.unload_address = ''
            this.form.balance = ''

            this.show = false
            this.submit_text = 'Submit';
            this.$nextTick(() => {
                this.show = true
            })
        },
        getAccounts() {
            ApiService.get('/api/customer/fetch-accounts').then((res) => {
                this.accounts = res.data;
            }).catch((error) => {

            });
        },
        getSubAccounts() {
            ApiService.get('/api/customer/fetch-sub-accounts').then((res) => {
                this.allAccounts = res.data;
                console.log('Sub Accounts: ', res.data);
            }).catch((error) => {

            });
        },
    },
    created() {
        this.getAccounts();
        this.getSubAccounts();
    }
}
</script>
