<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="titleRight" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/account/create" class="btn btn-dark btn-sm">Create</router-link>
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
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

import Select2MultipleControl from 'v-select2-multiple-component';

export default {
    components: {
        KTCard,
        Select2MultipleControl
    },
    data() {
        return {
            title: 'Accounts',
            titleRight: 'List Accounts',
            is_update: false,
            submit_text: 'Submit',
            loading:false,
            form: {
                type: '',
                name: '',
                name_urdu: '',
                phone: '',
                phone_2: '',
                desc: '',
                company: '',
                city: '',
                cinic: '',
                address: '',
                balance: '',

            },
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
                {text: 'Name', value: 'name'},
                {text: 'Address', value: 'address'},
                {text: 'Unloading Office Address', value: 'unload_address'},
                {text: 'Type', value: 'type'},
                {text: 'Company', value: 'company'},
                {text: 'City', value: 'city'},
                {text: 'Created By', value: 'user.name'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            desserts: [],
            dessertsTotal: 0,
            errors:{}
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
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Suppliers & Customers"}]);
    },
    methods: {
        paginate(e)
        {
            console.dir(e);
            ApiService.get(`/api/customer/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    console.log('Fetched Data: ', res.data);
                    this.desserts = res.data.data;
                    this.dessertsTotal = res.data.total;
                });
        },
        editItem(item) {
            this.$router.push({name: 'edit_account', params: {id: item.id}});
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

                    ApiService.post('/api/customer/delete', item).then((res) => {
                        // console.log(res)
                        this.desserts.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Account Deleted Successfully...`,

                            solid: true
                        })
                        this.form.type = 'Select Type'
                        this.form.name = ''
                        this.form.name_urdu = ''
                        this.form.phone = ''
                        this.form.phone_2 = ''
                        this.form.desc = ''
                        this.form.company = ''
                        this.form.cinic = ''
                        this.form.city = ''
                        this.form.address = ''
                        this.form.balance = ''
                        // this.onReset();

                        // this.getDataFromApi();
                    })

                }
            })
        }
    },
}
</script>
