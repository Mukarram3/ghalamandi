<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/user/index" class="btn btn-dark btn-sm">Back</router-link>
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
            errors:{},
            desserts: [],
            dessertsTotal: 0
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Manage Users"}]);
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
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

                    this.redirectToIndex();
                }).catch((error)=>{
                    this.submit_text='Submit';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                })
        },
        redirectToIndex() {
            this.$router.push({name: 'index_user'});
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
    },
    created() {
        this.getUserDataFromApi();
    }
}
</script>
