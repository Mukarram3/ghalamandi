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
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-1" label="Customer Type :*" label-for="input-1" description="">
                                    <select class="form-control" v-model="form.type">
                                        <option value="" disabled hidden>Choose Type</option>
                                        <option v-for="option in options" >{{ option }}</option>
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
                                        placeholder="Enter phone"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.phone" :errors="errors">
                                        <span v-for=" error in errors.phone ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-3"
                                    label="Phone 2:"
                                    label-for="input-3"
                                >

                                    <b-form-input
                                        id="input-3"
                                        v-model="form.phone_2"
                                        placeholder="Enter phone 2"
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



                                <b-form-group
                                    id="input-group-9"
                                    label="Balance :*"
                                    label-for="input-9"
                                    description=""
                                >
                                    <b-form-input
                                        id="input-9"
                                        v-model="form.balance"
                                        type="text"
                                        placeholder="Enter balance"
                                    ></b-form-input>
                                </b-form-group>

                                <b-button type="submit" variant="primary"><span aria-hidden="true" v-if="loading" class="spinner-grow spinner-grow-sm"></span>{{ submit_text }}</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>

                    </template>
                </KTCard>
            </div>
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="titleRight" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">

                        </div>
                    </template>
                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="search"
                                    placeholder="Search by name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="headers"
                                    :items="filteredList"
                                    :search="search"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = dessertsTotal
                                    @pagination="paginate"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="editItem(item)"
                                        >
                                            mdi-pencil
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteItem(item)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>

                                </v-data-table>
                            </div>
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
            title: 'Supplier & Customers',
            titleRight: 'List Suppliers & Customers',
            is_update: false,
            submit_text: 'Submit',
            loading:false,
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
                address: '',
                balance: '',

            },
            options: ['Buyer','Supplier','Broker'],
            checkbox: false,
            show: true,
            search: '',
            headers: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                {text: 'Name', value: 'name'},
                {text: 'Address', value: 'address'},
                {text: 'Type', value: 'type'},
                {text: 'Company', value: 'company'},
                {text: 'City', value: 'city'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            desserts: [],
            dessertsTotal: 0,
            errors:{}
        }
    },
    computed: {
        filteredList(){
            return this.desserts.filter( item =>{
                return item.name.toLowerCase().match(this.search.toLowerCase());
            } )
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Suppliers & Customers"}]);
    },
    methods: {
        paginate(e)
        {
            console.dir(e);
            ApiService.get(`/api/customer/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    console.log('Fetched Data: ', res.data);
                    this.desserts = res.data.data;
                    this.dessertsTotal = res.data.total;
                });
        },
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.loading=true;

            if (this.is_update) {
                // console.log('Update:', this.submit_text);
                ApiService.post('/api/customer/update', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Customer updated Successfully...`,
                        solid: true
                    })
                    this.loading=false;
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
                    this.form.balance = ''

                    this.submit_text = 'Submit';
                    this.is_update = false;

                    this.getDataFromApi();
                }).catch((error)=>{
                    this.submit_text='Update';
                    this.loading=false;
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                })
            } else {
                ApiService.post('/api/customer/create', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Customer Created Successfully...`,

                        solid: true
                    })
                    this.loading=false;
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
                    this.form.balance = ''

                    this.getDataFromApi();
                }).catch((error)=>{
                    this.submit_text='Submit';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                    this.loading=false;
                })
            }
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
            this.form.balance = ''

            this.show = false
            this.submit_text = 'Submit';
            this.$nextTick(() => {
                this.show = true
            })
        },
        // getDataFromApi() {
        //     var respoData = [];
        //     ApiService.get('/api/customer/fetch').then((res) => {
        //         this.desserts = res.data;
        //     });
        //     this.desserts = respoData;
        // },
        editItem(item) {
            this.is_update = true;
            this.form = item;
            this.submit_text = 'Update';
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

                    ApiService.post('/api/customer/delete', item).then((res) => {
                        // console.log(res)
                        this.desserts.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Customer Created Successfully...`,

                            solid: true
                        })
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
                        this.form.balance = ''
                        // this.onReset();

                        // this.getDataFromApi();
                    })

                }
            })
        }


    },
    created() {
        // this.getDataFromApi();
    }
}
</script>
