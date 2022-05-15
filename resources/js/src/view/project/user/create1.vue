<template>
    <div>
        <div class="row">
            <div class="col-md-6">
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
                                <b-form-group id="input-group-1" label="Roles :*" label-for="input-1" description="">
                                    <select2-multiple-control v-model="form.role" :options="options"/>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-1"
                                    label="Name :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter name"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.email"
                                        placeholder="Enter email"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.email" :errors="errors">
                                        <span v-for=" error in errors.email ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-1" label="Gender :*" label-for="input-1"
                                              description="">
                                    <select class="form-control" v-model="form.gender">
                                        <option value="" disabled hidden>Choose Gender</option>
                                        <option v-for="gender in genders">{{
                                                gender
                                            }}
                                        </option>
                                    </select>
                                </b-form-group>

                                <b-form-group id="input-group-1" label="Status :*" label-for="input-1"
                                              description="">
                                    <select class="form-control" v-model="form.status">
                                        <option value="" disabled hidden>Choose Status</option>
                                        <option v-for="status in statusCollection">{{
                                                status
                                            }}
                                        </option>
                                    </select>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Birthday :" label-for="input-3">
                                    <b-form-input
                                        id="input-3"
                                        type="date"
                                        v-model="form.date_of_birth"
                                        placeholder="Enter birthday"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-4"
                                    label="Salary :*"
                                    label-for="input-4"
                                    description=""
                                >
                                    <b-form-input
                                        id="input-4"
                                        v-model="form.salary"
                                        type="text"
                                        placeholder="Enter salary"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-5"
                                    label="Password :*"
                                    label-for="input-5"
                                    description=""
                                >
                                    <b-form-input
                                        id="input-5"
                                        v-model="form.password"
                                        type="text"
                                        placeholder="Enter password"
                                    ></b-form-input>
                                </b-form-group>


                                <b-button type="submit" v-html="submit_text" variant="primary">{{ submit_text }}</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>

                    </template>
                </KTCard>
            </div>
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="titleRight">
                    <template v-slot:title v-if="true">
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
import {SET_BREADCRUMB} from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import Multiselect from 'vue-multiselect';
import Select2MultipleControl from "v-select2-multiple-component";

// // register globally
// Vue.component('multiselect', Multiselect)

export default {
    components: {
        KTCard,
        Select2MultipleControl
    },
    data() {
        return {
            title: 'Create User',
            titleRight: 'Users',
            is_update: false,
            submit_text: 'Submit',
            form: {
                role: '',
                name: '',
                email: '',
                gender: '',
                status: '',
                date_of_birth: '',
                salary: '',
                password: '',

            },
            options: [],
            genders: ['Male', 'Female', 'Other'],
            statusCollection: ['active', 'inactive', 'blocked'],
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
                {text: 'Role', value: 'role'},
                {text: 'Name', value: 'name'},
                {text: 'Email', value: 'email'},
                {text: 'Status', value: 'status'},
                {text: 'Salary', value: 'salary'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            errors:{},
            desserts: [],
            dessertsTotal: 0
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
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Manage Users"}]);
    },
    methods: {
        paginate(e)
        {
            console.dir(e);
            ApiService.get(`/api/user/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    console.log('Fetched Data: ', res.data);
                    this.desserts = res.data.data;
                    this.dessertsTotal = res.data.pagination.total;
                });
        },
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
            if (this.is_update) {
                // console.log('Update:', this.submit_text);
                ApiService.post('/api/user/update', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `User updated Successfully...`,
                        solid: true
                    })
                    this.form.role = ''
                    this.form.name = ''
                    this.form.email = ''
                    this.form.date_of_birth = ''
                    this.form.salary = ''
                    this.form.password = ''
                    this.form.gender = ''
                    this.form.status = ''

                    this.submit_text = 'Submit';
                    this.is_update = false;

                    this.getDataFromApi();
                }).catch((error)=>{
                    this.submit_text='Update';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                })
            } else {
                ApiService.post('/api/user/create', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `User Created Successfully...`,

                        solid: true
                    })
                    this.form.role = ''
                    this.form.name = ''
                    this.form.email = ''
                    this.form.date_of_birth = ''
                    this.form.salary = ''
                    this.form.password = ''
                    this.form.gender = ''
                    this.form.status = ''

                    this.getDataFromApi();
                }).catch((error)=>{
                    this.submit_text='Submit';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                })
            }


        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.role = ''
            this.form.name = ''
            this.form.email = ''
            this.form.date_of_birth = ''
            this.form.salary = ''
            this.form.password = ''
            this.form.gender = ''
            this.form.status = ''

            this.show = false
            this.submit_text = 'Submit';
            this.$nextTick(() => {
                this.show = true
            })
        },
        getUserDataFromApi() {
            ApiService.get('/api/user/fetch-role').then((res) => {
                console.log('Roles:', res.data);
                this.options = res.data;
            });
        },
        // getDataFromApi() {
        //     var respoData = [];
        //     ApiService.get('/api/user/fetch').then((res) => {
        //         this.desserts = res.data;
        //     });
        //     this.desserts = respoData;
        // },
        editItem(item) {
            this.is_update = true;
            this.form = item;
            // this.form.role = ''
            // this.form.name = item.name
            // this.form.email = item.email
            // this.form.date_of_birth = item.date_of_birth
            // this.form.salary = item.salary
            this.form.gender = ''
            this.form.status = ''

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

                    ApiService.post('/api/user/delete', item).then((res) => {
                        // console.log(res)
                        this.desserts.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `User Deleted Successfully...`,

                            solid: true
                        })
                        this.form.role = ''
                        this.form.name = ''
                        this.form.emai = ''
                        this.form.date_of_birth = ''
                        this.form.salary = ''
                        this.form.password = ''
                        this.form.gender = ''
                        this.form.status = ''
                        // this.onReset();

                        // this.getDataFromApi();
                    })

                }
            })
        }


    },
    created() {
        // this.getDataFromApi();
        this.getUserDataFromApi();
    }
}
</script>
