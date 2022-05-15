<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="titleRight">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/expense-template/create" class="btn btn-dark btn-sm">Create</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="search"
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
import {SET_BREADCRUMB} from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

export default {
    components: {KTCard},
    data() {
        return {
            title: 'Create Expense Template',
            titleRight: 'List Expense Templates',
            is_update: false,
            submit_text: 'Submit',
            form: {
                name: '',
                code: '',
                type: 'Choose Type',
                desc: '',
                field_names: [{name: '', price: ''}],
            },
            id:'',
            types: ['sale', 'purchase', 'production'],
            show: true,
            search: '',
            headers: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                {text: 'Name', value: 'name'},
                {text: 'Code', value: 'code'},
                {text: 'Type', value: 'type'},
                {text: 'Description', value: 'desc'},
                {text: 'Created By', value: 'user.name'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            errors:{},
            desserts: [],
            dessertsTotal: 0,
        }
    },
    computed: {
        filteredList(){
            return this.desserts.filter( item =>{
                return item.name.toLowerCase().match(this.search.toLowerCase());
            } )
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Dashboard"}]);
    },
    methods: {
        paginate(e)
        {
            console.dir(e);
            ApiService.get(`/api/expense-template/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    console.log('Fetched Data: ', res.data);
                    this.desserts = res.data.data;
                    this.dessertsTotal = res.data.total;
                });
        },
        AddField: function() {
            this.form.field_names.push({name: '', price: ''});
        },
        getTypesDataFromApi() {
            ApiService.get('/api/expense-template/fetch-expense-types', this.id).then((res) => {
                this.form.field_names = res.data;
                console.log('Fields: ', res.data, this.form.field_names.length);
            });
        },
        editItem(item) {
            this.$router.push({name: 'edit_expense_template', params: {id: item.id}});
            // this.getTypesDataFromApi();
        },
        deleteItem(item) {
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

                    ApiService.post('/api/expense-template/delete', item).then((res) => {
                        console.log(res)
                        this.desserts.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Expense Template Deleted Successfully...`,

                            solid: true
                        })
                        this.form.name = ''
                        this.form.code = ''
                        this.form.desc = ''
                        this.form.field_names= [];
                        // this.onReset();

                        // this.getDataFromApi();
                    })

                }
            })
        },
        deleteType(item) {
            if(this.is_update) {
                var index = this.form.field_names.indexOf(item)
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

                        ApiService.post('/api/expense-template/delete-type', item).then((res) => {
                            this.form.field_names.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Expense Template type Deleted Successfully...`,

                                solid: true
                            })
                            this.getTypesDataFromApi();
                        })

                    }
                })
            }else {

                var index = this.form.field_names.indexOf(item)
                this.form.field_names.splice(index, 1);
            }
        }
    },
    created() {
        // this.getTypesDataFromApi();
    }
}
</script>

<style scoped>
.border {
    border: 1px solid black;
    padding: 3px;
    margin-bottom: 5px;
}
</style>
