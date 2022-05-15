<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true"  v-bind:title="titleExpenses" >

                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="searchExpense"
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
                                    :headers="expenseHeaders"
                                    :items="filteredListExpenses"
                                    :search="searchExpense"
                                    :items-per-page="5"
                                    :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                    :server-items-length = expensesTotal
                                    @pagination="paginateExpenses"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="restoreExpense(item)"
                                        >
                                            mdi-arrow-up-bold-box-outline
                                        </v-icon>
                                        <v-icon
                                            small
                                            @click="deleteExpense(item)"
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
            titleBags:'Activity Log (Expenses)',
            show: true,

            searchExpense: '',

            expenseHeaders: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Payment Type', value: 'payment_type' },
                { text: 'Price', value: 'price' },
                { text: 'Deleted At', value: 'deleted_at' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            expenses:[],
            expensesTotal: 0,
        }
    },
    computed: {
        filteredListExpenses(){
            return this.expenses.filter( item =>{
                return item.name.toLowerCase().match(this.searchExpense.toLowerCase());
            } )
        },
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Activity Log" }]);
    },
    methods: {
        paginateExpenses(e) {
            ApiService.get(`/api/activity-log/fetch-expenses?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    this.expenses = res.data.data;
                    this.expensesTotal = res.data.total;
                });
        },
        restoreExpense(item){
            var index = this.expenses.indexOf(item)
            this.itemindex = this.expenses.indexOf(item)
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

                    ApiService.post('/api/activity-log/restore-expense',item).then((res)=>{
                        console.log(res)
                        this.expenses.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Record Restored Successfully...`,

                            solid: true
                        })
                    })

                }
            })
        },
        deleteExpense(item){
            var index = this.expenses.indexOf(item)
            this.itemindex = this.expenses.indexOf(item)
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

                    ApiService.post('/api/activity-log/delete-expense',item).then((res)=>{
                        console.log(res)
                        this.expenses.splice(index, 1);

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
