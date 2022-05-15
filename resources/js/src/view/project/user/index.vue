<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="titleRight">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/user/create" class="btn btn-dark btn-sm">Create</router-link>
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

                                    <template v-slot:item.roles="{ item }">
                                        <v-item
                                            v-for="role in item.roles"
                                            :key="role.id"
                                        >
                                            {{ role.name }},
                                        </v-item>
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
import Multiselect from 'vue-multiselect';
import Select2MultipleControl from "v-select2-multiple-component";

// // register globally
// Vue.component('multiselect', Multiselect)

export default {
    components: {
        KTCard,
        Select2MultipleControl
    },
    data() {
        return {
            title: 'Create User',
            titleRight: 'List Users',
            is_update: false,
            submit_text: 'Submit',
            form: {
                role: '',
                name: '',
                email: '',
                gender: '',
                status: '',
                date_of_birth: '',
                salary: '',
                password: '',

            },
            options: [],
            genders: ['Male', 'Female', 'Other'],
            statusCollection: ['active', 'inactive', 'blocked'],
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
                {text: 'Roles', value: 'roles'},
                {text: 'Name', value: 'name'},
                {text: 'Email', value: 'email'},
                {text: 'Status', value: 'status'},
                {text: 'Salary', value: 'salary'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            errors:{},
            desserts: [],
            dessertsTotal: 0
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
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Manage Users"}]);
    },
    methods: {
        paginate(e)
        {
            console.dir(e);
            ApiService.get(`/api/user/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    this.desserts = res.data.data;
                    console.log('Fetched Data: ', this.desserts);
                    this.dessertsTotal = res.data.total;
                });
        },
        editItem(item) {
            this.$router.push({name: 'edit_user', params: {id: item.id}});
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

                    ApiService.post('/api/user/delete', item).then((res) => {
                        // console.log(res)
                        this.desserts.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `User Deleted Successfully...`,

                            solid: true
                        })
                        this.form.role = ''
                        this.form.name = ''
                        this.form.emai = ''
                        this.form.date_of_birth = ''
                        this.form.salary = ''
                        this.form.password = ''
                        this.form.gender = ''
                        this.form.status = ''
                        // this.onReset();

                        // this.getDataFromApi();
                    })

                }
            })
        }
    },
}
</script>
