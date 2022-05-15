<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" >
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/stock/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-1" label="Choose Deal :*" label-for="input-1"
                                >
                                    <select class="form-control" v-model="form.deal_id" >
                                        <option value="" disabled hidden>Choose Deal</option>
                                        <option v-for="option in deals" v-bind:value="option.id" >{{ option.id }}</option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.deal_id" :errors="errors">
                                        <span v-for=" error in errors.deal_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Choose Lot :*" label-for="input-2"
                                >
                                    <select class="form-control" v-model="form.lot_id" >
                                        <option value="" disabled hidden>Choose Lot</option>
                                        <option v-for="option in lots" v-bind:value="option.id" >{{ option.name }}</option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.lot_id" :errors="errors">
                                        <span v-for=" error in errors.lot_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-3" label="Choose Unit :*" label-for="input-3"
                                >
                                    <select class="form-control" v-model="form.unit_id" >
                                        <option value="" disabled hidden>Choose Unit</option>
                                        <option v-for="option in units" v-bind:value="option.id" >{{ option.name }}</option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.unit_id" :errors="errors">
                                        <span v-for=" error in errors.unit_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-4" label="Choose Commodity :*" label-for="input-4"
                                >
                                    <select class="form-control" v-model="form.commodity_id" >
                                        <option value="" disabled hidden>Choose Commodity</option>
                                        <option v-for="option in commodities" v-bind:value="option.id" >{{ option.name }}</option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.commodity_id" :errors="errors">
                                        <span v-for=" error in errors.commodity_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-5" label="Quantity:" label-for="input-5">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.qty"
                                        placeholder="Enter quantity"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-6" label="Rate :" label-for="input-6">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.rate"
                                        placeholder="Enter Rate"
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
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import Swal from "sweetalert2";
    export default {
        components:{KTCard},
        data(){
            return{
                title:'Update Stock',
                titleRight:'List Stocks',
                is_update:false,
                submit_text:'Update',
                form: {
                    lot_id: '',
                    commodity_id: '',
                    deal_id: '',
                    unit_id: '',
                    unit_kgs: '',
                    rate: '',
                    qty: '',
                    total_kg: '',
                    total_amount: '',
                    total_stock_qty_kg: '',
                },
                deals: [],
                lots: [],
                units: [],
                commodities: [],
                checkbox: false,
                show: true,
                errors:{}
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

                    ApiService.post('/api/stock/update',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Stock updated Successfully...`,
                            solid: true
                        })
                        this.$router.push({name: 'index_stock'});
                    }).catch((error)=>{
                        this.submit_text='Update';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
                },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.lot_id = ''
                this.form.commodity_id = ''
                this.form.deal_id = ''
                this.form.unit_id = ''
                this.form.rate = ''
                this.form.qty = ''

                this.show = false
                this.submit_text='Update';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            getUnitDataFromApi(){
                ApiService.get('/api/stock/fetch-units').then((res)=>{
                    this.units=res.data;
                });
            },
            getLotDataFromApi(){
                ApiService.get('/api/stock/fetch-lots').then((res)=>{
                    this.lots=res.data;
                });
            },
            getDealDataFromApi(){
                ApiService.get('/api/stock/fetch-deals').then((res)=>{
                    this.deals=res.data;
                });
            },
            getCommodityDataFromApi(){
                ApiService.get('/api/stock/fetch-commodities').then((res)=>{
                    this.commodities=res.data;
                });
            },
            getEditDataFromApi: function () {
                ApiService.get('/api/stock/edit', this.$route.params.id).then((res) => {
                    this.form = res.data;
                });
            },
        },
        created() {
            this.getEditDataFromApi();
            this.getUnitDataFromApi();
            this.getLotDataFromApi();
            this.getDealDataFromApi();
            this.getCommodityDataFromApi();
        }
    }
</script>
