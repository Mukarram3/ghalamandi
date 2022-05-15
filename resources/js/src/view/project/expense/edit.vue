<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true" v-bind:title="title" >
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/expense/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group1" label="Name :" label-for="input1">
                                    <b-form-input
                                        id="field_names"
                                        v-model="form.name"
                                        placeholder="Expense Name"
                                    >
                                    </b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group2" label="Payment Type :" label-for="input2">
                                    <select
                                        class="form-control"
                                        v-model="form.payment_type">
                                        <option value="" disabled hidden>Choose Payment Type</option>
                                        <option v-for="type in paymentType">{{ type }}
                                        </option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.payment_type" :errors="errors">
                                        <span v-for=" error in errors.payment_type ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group3" label="Account :" label-for="input3">
                                    <select
                                        class="form-control"
                                        v-model="form.expense_id">
                                        <option value="" disabled hidden>Choose Account</option>
                                        <option v-for="item in accounts" :value="item.id">{{ item.name }}
                                        </option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.expense_id" :errors="errors">
                                        <span v-for=" error in errors.expense_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group4" label="Price (per 50kg bag):" label-for="input4">
                                    <b-form-input
                                        id="field_prices"
                                        v-model="form.price"
                                        placeholder="Amount"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.price" :errors="errors">
                                        <span v-for=" error in errors.price ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
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
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import Swal from "sweetalert2";
    export default {
        components:{KTCard},
        data(){
            return{
                title:'Update Expense',
                titleRight:'List Expenses',
                is_update:false,
                submit_text:'Update',
                form: {
                    name: '',
                    code: '',
                    type: 'Choose Type',
                    desc: '',
                    payment_type:'',
                    expense_id:'',

                },
                items: [],
                checkbox: false,
                show: true,
                search: '',
                desserts:[],
                accounts: [],
                paymentType: ['percent', 'fixed', 'per-bag'],
                errors: {},
            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                // console.log(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';

                    ApiService.post('/api/expense/update',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Expense updated Successfully...`,
                            solid: true
                        })

                        this.redirectToIndex();
                    }).catch((error)=>{
                        this.submit_text='Update';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
            },
            redirectToIndex() {
                this.$router.push({name: 'index_expense'});
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.desc = ''
                this.form.head_id = ''
                this.form.amount = ''
                this.show = false
                this.submit_text='Update';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            getExpenseDataFromApi(){
                ApiService.get('/api/expense/fetch-expense-head').then((res)=>{
                    this.accounts=res.data;
                });
            },
            getEditDataFromApi: function () {
                ApiService.get('/api/expense/edit', this.$route.params.id).then((res) => {
                    console.log('Fetch Expense data: ',res.data)
                    this.form = res.data;
                });
            },
        },
        created() {
            this.getEditDataFromApi();
            this.getExpenseDataFromApi();
        }
    }
</script>
