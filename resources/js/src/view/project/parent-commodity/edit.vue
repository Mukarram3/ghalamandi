<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true" v-bind:title="title">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/commodity/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-2" label="Commodity Code :" label-for="input32">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.code"
                                        disabled
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-1"
                                    label="Crop :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <select class="form-control" v-model="form.category_id">
                                        <option value="" disabled hidden>Choose Crop</option>
                                        <option v-for="option in categories" :value="option.id">{{
                                                option.name
                                            }}
                                        </option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.category_id"
                                                             :errors="errors">
                                        <span v-for="error in errors.category_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>

                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Commodity Name :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter Commodity Name..."
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name"
                                                             :errors="errors">
                                        <span v-for="error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Commodity Name (Urdu):*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name_urdu"
                                        type="text"
                                        placeholder="Enter Commodity Name (Urdu)"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name_urdu"
                                                             :errors="errors">
                                        <span v-for="error in errors.name_urdu ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Default Weight in Kgs" label-for="input-2">
                                    <select class="form-control" v-model="form.unit_id">
                                        <option value="" disabled hidden>Choose Unit</option>
                                        <option v-for="option in units" :value="option.id">{{ option.name }}</option>
                                    </select>

                                    <b-form-invalid-feedback style="display: block;" v-if="errors.kgs" :errors="errors">
                                        <span v-for="error in errors.units ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Bag Type" label-for="input-2">
                                    <select class="form-control" v-model="form.bag_id">
                                        <option value="" disabled hidden>Choose Bag Type</option>
                                        <option v-for="option in bags" :value="option.id">{{ option.name }}</option>
                                    </select>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Status" label-for="input-2">
                                    <select class="form-control" v-model="form.status">
                                        <option value="" disabled hidden>Choose Status</option>
                                        <option v-for="option in statusOptions">{{ option }}</option>
                                    </select>

                                    <b-form-invalid-feedback style="display: block;" v-if="errors.status"
                                                             :errors="errors">
                                        <span v-for="error in errors.status ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-button variant="primary" v-html="submit_text" type="submit">

                                </b-button>
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

export default {
    components: {KTCard},
    data() {
        return {
            title: 'Update Parent Commodity',
            titleRight: 'List Parent Commodities',
            is_update: false,
            submit_text: 'Update',
            form: {
                name_urdu: '',
                name: '',
                code: '',
                category_id: '',
                unit_id: '',
                bag_id: '',
                status: ''

            },
            errors: {},
            show: true,
            search: '',
            categories: [],
            units: [],
            bags: [],
            statusOptions: ['active', 'inactive'],
            itemindex: 0,

            desserts: [],
            dessertsTotal: 0,
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Commodities"}]);
    },
    methods: {

        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.submit_text = '<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
            ApiService.post('/api/commodity/update', this.form).then((res) => {
                console.log(res)
                this.$bvToast.toast(res.data.message, {
                    title: `Parent Commodity updated Successfully...`,
                    solid: true
                })
                // this.desserts.splice(this.itemindex, 1, res.data.data);
                this.redirectToIndex();
            }).catch((error) => {
                this.submit_text = 'Update';
                if (error.response.status === 422) {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors || {};
                }
            })
        },
        redirectToIndex() {
            this.$router.push({name: 'index_parent_commodity'});
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.kgs = ''
            this.form.name = ''
            this.form.code = ''
            this.form.category_id = ''
            this.form.unit_id = ''
            this.form.bag_id = ''
            this.form.status = ''
            this.show = false
            this.submit_text = 'Update';
            this.$nextTick(() => {
                this.show = true
            })
        },
        getCategories() {
            ApiService.get('/api/commodity/fetch-categories').then((res) => {
                this.categories = res.data;
                console.log('Categories: ', res.data);
            }).catch((error) => {

            });
        },
        getUnits() {
            ApiService.get('/api/commodity/fetch-units').then((res) => {
                this.units = res.data;
            }).catch((error) => {

            });
        },
        getBags() {
            ApiService.get('/api/commodity/fetch-bags').then((res) => {
                this.bags = res.data;
                console.log('Bags: ', this.bags);
            }).catch((error) => {

            });
        },
        getEditDataFromApi: function () {
            ApiService.get('/api/commodity/edit', this.$route.params.id).then((res) => {
                console.log('Data: ', res.data);
                this.form = res.data;
            });
        },
    },
    created() {
        this.getEditDataFromApi();
        this.getCategories();
        this.getUnits();
        this.getBags();
    }
}
</script>
