<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleDealCommodities" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchDealCommodity"
                                    placeholder="Search by id.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                        <div class="row">
                            <div class="col-md-12">
                                <v-data-table
                                    :headers="dealCommodityHeaders"
                                    :items="filteredListDealCommodities"
                                    :search="searchDealCommodity"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = dealCommoditiesTotal
                                    @pagination="paginateDealCommodities"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreDealCommodity(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteDealCommodity(item)"
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
            titleBags:'Activity Log (Deal Commodities)',
            show: true,

            searchDealCommodity: '',

            dealCommodityHeaders: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Deal Id', value: 'deal_id' },
                { text: 'Commodity Id', value: 'commodity_id' },
                { text: 'Deleted At', value: 'deleted_at' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            dealCommodities:[],
            dealCommoditiesTotal: 0,


        }
    },
    computed: {
        filteredListDealCommodities(){
            return this.dealCommodities.filter( item =>{
                return String(item.id).includes(this.searchDealCommodity);
            })
        },

    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Activity Log" }]);
    },
    methods: {
        paginateDealCommodities(e) {
            ApiService.get(`/api/activity-log/fetch-deal-commodities?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    this.dealCommodities = res.data.data;
                    this.dealCommoditiesTotal = res.data.total;
                });
        },
        restoreDealCommodity(item){
            var index = this.dealCommodities.indexOf(item)
            this.itemindex = this.dealCommodities.indexOf(item)
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, restore it!'
            }).then((result) => {
                if (result.isConfirmed) {

                    ApiService.post('/api/activity-log/restore-deal-commodity',item).then((res)=>{
                        console.log(res)
                        this.dealCommodities.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Restored Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },

        deleteDealCommodity(item){
            var index = this.dealCommodities.indexOf(item)
            this.itemindex = this.dealCommodities.indexOf(item)
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

                    ApiService.post('/api/activity-log/delete-deal-commodity',item).then((res)=>{
                        console.log(res)
                        this.dealCommodities.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Deleted Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },

    },
}
</script>
