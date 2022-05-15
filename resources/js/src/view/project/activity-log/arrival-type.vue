<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleArrivalTypes" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchArrivalType"
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
                                    :headers="arrivalTypeHeaders"
                                    :items="filteredListArrivalTypes"
                                    :search="searchArrivalType"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = arrivalTypesTotal
                                    @pagination="paginateArrivalTypes"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreArrivalType(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteArrivalType(item)"
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
            titleArrivalTypes:'Activity Log (Arrival Types)',
            show: true,

            searchArrivalType: '',

            itemindex:0,
            arrivalTypeHeaders: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Arrival Id', value: 'arrival_id' },
                { text: 'Deal Id', value: 'deal_id' },
                { text: 'Deleted At', value: 'deleted_at' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            arrivalTypes:[],
            arrivalTypesTotal: 0,
        }
    },
    computed: {
        filteredListArrivalTypes(){
            return this.arrivalTypes.filter( item =>{
                return String(item.id).includes(this.searchArrivalType);
            })
        },

    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Activity Log" }]);
    },
    methods: {
        paginateArrivalTypes(e) {
            console.dir(e);
            ApiService.get(`/api/activity-log/fetch-arrival-types?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    this.arrivalTypes = res.data.data;
                    this.arrivalTypesTotal = res.data.total;
                });
        },

        restoreArrivalType(item){
            var index = this.arrivalTypes.indexOf(item)
            this.itemindex = this.arrivalTypes.indexOf(item)
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

                    ApiService.post('/api/activity-log/restore-arrival-type',item).then((res)=>{
                        console.log(res)
                        this.arrivalTypes.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Restored Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },

        deleteArrivalType(item){
            var index = this.arrivalTypes.indexOf(item)
            this.itemindex = this.arrivalTypes.indexOf(item)
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

                    ApiService.post('/api/activity-log/delete-arrival-type',item).then((res)=>{
                        console.log(res)
                        this.arrivalTypes.splice(index, 1);

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
