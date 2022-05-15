<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/expense-template/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group
                                    id="input-group-1" label="Code :*" label-for="input-1">
                                    <b-form-input
                                        v-model="form.code"
                                        type="text"
                                        placeholder="Enter code"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-1" label="Template Name :*" label-for="input-1">
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter template name"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name"
                                                             :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-4" label="Type :*" label-for="input-4">
                                    <select class="form-control" v-model="form.type">
                                        <option :disabled="true">Choose Type</option>
                                        <option v-for="type in types">{{ type }}
                                        </option>
                                    </select>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.desc"
                                        placeholder="Enter description"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-5" label="Expenses :*" label-for="input-5">
                                    <table>
                                        <tr>
                                            <td><input type="checkbox" @click="selectAllFunc" v-model="allSelected"></td>
                                            <td>Select All</td>
                                        </tr>
                                        <tr v-for="option in options">
                                            <td><input type="checkbox" v-model="form.expenses" @click="select" :value="option.id"></td>
                                            <td> {{ option.name }}</td>
                                        </tr>
                                    </table>
                                </b-form-group>

                                <b-button @click="onSubmit" v-html="submit_text" type="submit" variant="primary">
                                    {{ submit_text }}
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
            title: 'Update Expense Template',
            titleRight: 'List Expense Templates',
            is_update: false,
            submit_text: 'Update',
            form: {
                name: '',
                code: '',
                type: 'Choose Type',
                desc: '',
                expenses: [],
            },
            id:'',
            types: ['sale', 'purchase', 'production'],
            options: [],
            show: true,
            search: '',
            desserts:[],
            dessertsTotal: 0,
            selected: [],
            allSelected: false,
            errors:{}
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Dashboard"}]);
    },
    methods: {
        selectAllFunc: function() {
            this.form.expenses = [];
            this.allSelected = !this.allSelected;
            if (this.allSelected) {
                this.options.map((option) => {
                    this.form.expenses.push(option.id.toString());
                });
            }
        },
        select: function() {
            this.allSelected = false;
        },
        getExpenses()
        {
            ApiService.get(`/api/expense-template/fetch-expenses`)
                .then((res) => {
                    console.log('Fetched Data: ', res.data.data);
                    this.options = res.data;
                });
        },
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.form.fieldNames = [];
            this.form.fieldNames = this.desserts;
            this.errors = {};
            this.submit_text = '<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';

            ApiService.post('/api/expense-template/update', this.form, this.desserts).then((res) => {
                console.log(res)
                this.$bvToast.toast(res.data.message, {
                    title: `Expense Template updated Successfully...`,
                    solid: true
                })
                this.$router.push({name: 'index_expense_template'});
            }).catch((error) => {
                this.submit_text = 'Update';
                if (error.response.status === 422) {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors || {};
                }
            })
        },
        onReset(evt) {
            evt.preventDefault()
            this.form.name = ''
            this.form.code = ''
            this.form.desc = ''
            this.show = false
            this.submit_text = 'update';
            this.$nextTick(() => {
                this.show = true
            })
        },
        // getTypesDataFromApi() {
        //     ApiService.get('/api/expense-template/fetch-expense-types', this.$route.params.id).then((res) => {
        //         this.desserts = res.data;
        //         // this.desserts = res.data;
        //         console.log('Fields: ', res.data);
        //     });
        // },
        // deleteType(item) {
        //     console.log('Delete Type: ', item);
        //     // if (this.is_update) {
        //         var index = this.desserts.indexOf(item)
        //         Swal.fire({
        //             title: 'Are you sure?',
        //             text: "You won't be able to revert this!",
        //             icon: 'warning',
        //             showCancelButton: true,
        //             confirmButtonColor: '#3085d6',
        //             cancelButtonColor: '#d33',
        //             confirmButtonText: 'Yes, delete it!'
        //         }).then((result) => {
        //             if (result.isConfirmed) {
        //
        //                 ApiService.post('/api/expense-template/delete-type', item).then((res) => {
        //                     this.desserts.splice(index, 1);
        //
        //                     this.$bvToast.toast(res.data.message, {
        //                         title: `Expense Template type Deleted Successfully...`,
        //
        //                         solid: true
        //                     })
        //                 })
        //
        //             }
        //         })
        // },
        getEditDataFromApi: function () {
            ApiService.get('/api/expense-template/edit', this.$route.params.id).then((res) => {
                this.form = res.data;
            });
        },
    },
    created() {
        this.getExpenses();
        this.getEditDataFromApi();
        this.getTypesDataFromApi();
    }
}
</script>

<style scoped>
.border {
    border: 1px solid black;
    padding: 3px;
    margin-bottom: 5px;
}
</style>
