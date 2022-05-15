<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="title" >
                    <template v-slot:title>
                        <h3 class="card-title">
                            <slot name="title"></slot>
                        </h3>
                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">

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
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="titleRight" >
                    <template v-slot:title>
                        <h3 class="card-title">
                            <slot name="title"></slot>
                        </h3>
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
                                    placeholder="Search by Lot name.."
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
    export default {
        components:{KTCard},
        data(){
            return{
                title:'Create Stock',
                titleRight:'List Stocks',
                is_update:false,
                submit_text:'Submit',
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
                search: '',
                headers: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Lot', value: 'lot' },
                    { text: 'Unit', value: 'unit' },
                    // { text: 'Deal', value: 'deal' },
                    { text: 'Commodity', value: 'commodity' },
                    { text: 'Rate', value: 'rate' },
                    { text: 'Quantity', value: 'qty' },
                    { text: 'Weight (kgs)', value: 'total_kg' },
                    { text: 'Amount', value: 'total_amount' },
                    { text: 'Actions', value: 'actions', sortable: false },
                    ],
                desserts:[],
                dessertsTotal: 0,
                errors:{}
            }
        },
        computed: {
            filteredList(){
                return this.desserts.filter( item =>{
                    return item.lot.toLowerCase().match(this.search.toLowerCase());
                } )
            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
        },
        methods: {
            paginate(e)
            {
                console.dir(e);
                ApiService.get(`/api/stock/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        console.log('Fetched Data: ', res.data);
                        this.desserts = res.data.data;
                        this.dessertsTotal = res.data.pagination.total;
                    });
            },
            onSubmit(evt) {
                evt.preventDefault()
                // console.log(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
                if(this.is_update){
                    ApiService.post('/api/stock/update',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Stock updated Successfully...`,
                            solid: true
                        })
                        this.form.lot_id = ''
                        this.form.commodity_id = ''
                        this.form.deal_id = ''
                        this.form.unit_id = ''
                        this.form.rate = ''
                        this.form.qty = ''

                        this.submit_text='Submit';
                        this.is_update=false;

                        this.getDataFromApi();
                    }).catch((error)=>{
                        this.submit_text='Update';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
                }else {
                    ApiService.post('/api/stock/create',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Stock Created Successfully...`,

                            solid: true
                        })
                        this.form.lot_id = ''
                        this.form.commodity_id = ''
                        this.form.deal_id = ''
                        this.form.unit_id = ''
                        this.form.rate = ''
                        this.form.qty = ''

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
                this.form.lot_id = ''
                this.form.commodity_id = ''
                this.form.deal_id = ''
                this.form.unit_id = ''
                this.form.rate = ''
                this.form.qty = ''

                this.show = false
                this.submit_text='Submit';
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
            // getDataFromApi(){
            //     var respoData=[];
            //     ApiService.get('/api/stock/fetch').then((res)=>{
            //        this.desserts=res.data;
            //
            //     });
            //     this.desserts=respoData;
            // },
            editItem(item){
                console.log('item:', item);
                this.is_update=true;
                this.form=item;
                this.submit_text='Update';
            },
            deleteItem(item){
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

                        ApiService.post('/api/stock/delete',item).then((res)=>{
                            // console.log(res)
                            this.desserts.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Stock Deleted Successfully...`,

                                solid: true
                            })
                            this.form.lot_id = ''
                            this.form.commodity_id = ''
                            this.form.deal_id = ''
                            this.form.unit_id = ''
                            this.form.rate = ''
                            this.form.qty = ''

                            // this.onReset();

                            // this.getDataFromApi();
                        })

                    }
                })
            }



        },
        created() {
            // this.getDataFromApi();
            this.getUnitDataFromApi();
            this.getLotDataFromApi();
            this.getDealDataFromApi();
            this.getCommodityDataFromApi();
        }
    }
</script>
