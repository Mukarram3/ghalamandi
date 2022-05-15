<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="titleRight" >
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/stock/create" class="btn btn-dark btn-sm">Create</router-link>
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
            editItem(item){
                this.$router.push({name: 'edit_stock', params: {id: item.id}});
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
                        })

                    }
                })
            }
        }
    }
</script>
