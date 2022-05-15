<template>
    <div>

        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleTemplateTypes" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchTemplateType"
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
                                    :headers="templateTypeHeaders"
                                    :items="filteredListTemplateTypes"
                                    :search="searchTemplateType"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = templateTypesTotal
                                    @pagination="paginateTemplateTypes"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreTemplateType(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteTemplateType(item)"
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
            titleBags:'Activity Log (Template Types)',
            show: true,

            searchTemplateType: '',

            templateTypeHeaders: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Template Id', value: 'temp_id' },
                { text: 'Expense Id', value: 'expense_id' },
                { text: 'Deleted At', value: 'deleted_at' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            templateTypes:[],
            templateTypesTotal: 0,


        }
    },
    computed: {
        filteredListTemplateTypes(){
            return this.templateTypes.filter( item =>{
                return String(item.id).includes(this.searchTemplateType);
            })
        },

    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Activity Log" }]);
    },
    methods: {
        paginateTemplateTypes(e) {
            ApiService.get(`/api/activity-log/fetch-template-types?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    this.templateTypes = res.data.data;
                    this.templateTypesTotal = res.data.total;
                });
        },
        restoreTemplateType(item){
            var index = this.templateTypes.indexOf(item)
            this.itemindex = this.templateTypes.indexOf(item)
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

                    ApiService.post('/api/activity-log/restore-template-type',item).then((res)=>{
                        console.log(res)
                        this.templateTypes.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Restored Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },
        deleteTemplateType(item){
            var index = this.templateTypes.indexOf(item)
            this.itemindex = this.templateTypes.indexOf(item)
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

                    ApiService.post('/api/activity-log/delete-template-type',item).then((res)=>{
                        console.log(res)
                        this.templateTypes.splice(index, 1);

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
