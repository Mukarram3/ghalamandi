<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleDealExpenses" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchDealExpense"
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
                                    :headers="dealExpenseHeaders"
                                    :items="filteredListDealExpenses"
                                    :search="searchDealExpense"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = dealExpensesTotal
                                    @pagination="paginateDealExpenses"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreDealExpense(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteDealExpense(item)"
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
            titleBags:'Activity Log (Deal Expenses)',
            show: true,

            searchDealExpense: '',

            dealExpenseHeaders: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Deal Id', value: 'deal_id' },
                { text: 'Expense Id', value: 'expense_id' },
                { text: 'Deleted At', value: 'deleted_at' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            dealExpenses:[],
            dealExpensesTotal: 0,


        }
    },
    computed: {
        filteredListDealExpenses(){
            return this.dealExpenses.filter( item =>{
                return String(item.id).includes(this.searchDealCommodity);
            })
        },

    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Activity Log" }]);
    },
    methods: {
        paginateDealExpenses(e) {
            ApiService.get(`/api/activity-log/fetch-deal-expenses?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    this.dealExpenses = res.data.data;
                    this.dealExpensesTotal = res.data.total;
                });
        },
        restoreDealExpense(item){
            var index = this.dealExpenses.indexOf(item)
            this.itemindex = this.dealExpenses.indexOf(item)
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

                    ApiService.post('/api/activity-log/restore-deal-expense',item).then((res)=>{
                        console.log(res)
                        this.dealExpenses.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Restored Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },

        deleteDealExpense(item){
            var index = this.dealExpenses.indexOf(item)
            this.itemindex = this.dealExpenses.indexOf(item)
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

                    ApiService.post('/api/activity-log/delete-deal-expense',item).then((res)=>{
                        console.log(res)
                        this.dealExpenses.splice(index, 1);

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
