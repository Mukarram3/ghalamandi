<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleParentCommodities" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchParentCommodity"
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
                                    :headers="parentCommodityHeaders"
                                    :items="filteredListparentCommodities"
                                    :search="searchParentCommodity"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = parentCommoditiesTotal
                                    @pagination="paginateParentCommodities"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreParentCommodity(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteParentCommodity(item)"
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
            titleBags:'Activity Log (Parent Commodities)',
            show: true,

            searchParentCommodity: '',

            parentCommodityHeaders: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Name (Urdu)', value: 'name_urdu' },
                { text: 'Deleted At', value: 'deleted_at' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            parentCommodities:[],
            parentCommoditiesTotal: 0,
        }
    },
    computed: {
        filteredListparentCommodities(){
            return this.parentCommodities.filter( item =>{
                return item.name.toLowerCase().match(this.searchParentCommodity.toLowerCase());
            } )
        },
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Activity Log" }]);
    },
    methods: {
        paginateParentCommodities(e) {
            ApiService.get(`/api/activity-log/fetch-parent-commodities?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    console.log('Users Data: ', res.data);
                    this.parentCommodities = res.data.data;
                    this.parentCommoditiesTotal = res.data.total;
                });
        },
        restoreParentCommodity(item){
            var index = this.parentCommodities.indexOf(item)
            this.itemindex = this.parentCommodities.indexOf(item)
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

                    ApiService.post('/api/activity-log/restore-parent-commodity',item).then((res)=>{
                        console.log(res)
                        this.parentCommodities.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Restored Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },
        deleteParentCommodity(item){

            var index = this.parentCommodities.indexOf(item)
            this.itemindex = this.parentCommodities.indexOf(item)
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

                    ApiService.post('/api/activity-log/delete-parent-commodity',item).then((res)=>{
                        console.log(res)
                        this.parentCommodities.splice(index, 1);

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
