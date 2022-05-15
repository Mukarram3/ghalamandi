<template>
    <div>

        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleUnits" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchUnit"
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
                                    :headers="unitHeaders"
                                    :items="filteredListUnits"
                                    :search="searchUnit"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = unitsTotal
                                    @pagination="paginateUnits"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreUnit(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteUnit(item)"
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
            titleBags:'Activity Log (Units)',
            show: true,

            searchUnit: '',

            unitHeaders: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Weight', value: 'kgs' },
                { text: 'Deleted At', value: 'deleted_at' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            units:[],
            unitsTotal: 0,


        }
    },
    computed: {
        filteredListUnits(){
            return this.units.filter( item =>{
                return item.name.toLowerCase().match(this.searchUnit.toLowerCase());
            } )
        },

    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Activity Log" }]);
    },
    methods: {
        paginateUnits(e) {
            ApiService.get(`/api/activity-log/fetch-units?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    console.log('Units Data: ', res.data);
                    this.units = res.data.data;
                    this.unitsTotal = res.data.total;
                });
        },
        restoreUnit(item){
            var index = this.units.indexOf(item)
            this.itemindex = this.units.indexOf(item)
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

                    ApiService.post('/api/activity-log/restore-unit',item).then((res)=>{
                        console.log(res)
                        this.units.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Restored Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },
        deleteUnit(item){
            var index = this.units.indexOf(item)
            this.itemindex = this.units.indexOf(item)
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

                    ApiService.post('/api/activity-log/delete-unit',item).then((res)=>{
                        console.log(res)
                        this.units.splice(index, 1);

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
