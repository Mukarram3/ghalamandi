<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="title">
                    <template v-slot:title>
                        <h3 class="card-title">
                            <slot name="title"></slot>
                        </h3>
                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">

                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group
                                    id="input-group-1" label="Expense Name :*" label-for="input-1">
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter expense name"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group
                                    id="input-group-1" label="Code :*" label-for="input-1">
                                    <b-form-input
                                        v-model="form.code"
                                        type="text"
                                        placeholder="Enter code"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group id="input-group-4" label="Type :*" label-for="input-4">
                                    <select class="form-control" v-model="form.type">
                                        <option :disabled="true">Choose Type</option>
                                        <option v-for="type in types">{{ type }}
                                        </option>
                                    </select>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.desc"
                                        placeholder="Enter description"
                                    ></b-form-input>
                                </b-form-group>

                                <div v-if="form.field_names.length">
                                  <div class="border"  v-for="(item,index) in form.field_names.length">
                                <b-row>
                                    <b-col md="5">
                                        <b-form-input
                                            id="field_names"
                                            v-model="form.field_names[index].name"
                                            placeholder="Expense Name"
                                        >
                                        </b-form-input>
                                    </b-col>
                                    <b-col md="5">
                                        <b-form-input
                                            id="field_prices"
                                            v-model="form.field_names[index].price"
                                            placeholder="Amount"
                                        ></b-form-input>
                                    </b-col>
                                    <b-col>
                                        <b-button class="btn btn-sm mt-1" style="float: right;" variant="danger" @click="deleteType(form.field_names[index])"><v-icon>mdi-delete</v-icon></b-button>
                                    </b-col>
                                </b-row>
                                    </div>
                                </div>

                                <br>

                                <b-button style="float: right;" variant="success" @click="AddField">Add</b-button>
                                <br><br>

                                <b-button @click="onSubmit" v-html="submit_text" type="submit" variant="primary">{{ submit_text }}</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>

                    </template>
                </KTCard>
            </div>
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="titleRight">
                    <template v-slot:title>
                        <h3 class="card-title">
                            <slot name="title"></slot>
                        </h3>
                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">

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
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.errors = {};
            this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
            if (this.is_update) {
                ApiService.post('/api/expense-template/update', this.form).then((res) => {
                    console.log(res)
                    this.$bvToast.toast(res.data.message, {
                        title: `Expense Template updated Successfully...`,
                        solid: true
                    })
                    this.form.name = ''
                    this.form.code = ''
                    this.form.desc = ''
                    this.form.field_names= [];
                    this.submit_text = 'Submit';
                    this.is_update = false;
                    this.getDataFromApi();
                }).catch((error)=>{
                    this.submit_text='Update';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                })
            } else {
                ApiService.post('/api/expense-template/create', this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Expense Template Created Successfully...`,

                        solid: true
                    })
                    this.form.name = ''
                    this.form.code = ''
                    this.form.desc = ''
                    this.form.field_names= [];
                    this.form.field_prices= [];

                    this.getDataFromApi();
                }).catch((error)=>{
                    this.submit_text='Submit';
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors || {};
                    }
                })
            }


        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.name = ''
            this.form.code = ''
            this.form.desc = ''
            this.form.field_names= [];
            this.show = false
            this.submit_text = 'Submit';
            this.$nextTick(() => {
                this.show = true
            })
        },
        getTypesDataFromApi() {
            ApiService.get('/api/expense-template/fetch-expense-types', this.id).then((res) => {
                this.form.field_names = res.data;
                console.log('Fields: ', res.data, this.form.field_names.length);
            });
        },
        // getDataFromApi() {
        //     var respoData = [];
        //     ApiService.get('/api/expense-template/fetch').then((res) => {
        //         this.desserts = res.data;
        //
        //     });
        //     this.desserts = respoData;
        // },
        editItem(item) {
            this.id = item.id;
            this.getTypesDataFromApi();
            this.is_update = true;
            // this.form = item;
            this.form.id = item.id
            this.form.name = item.name
            this.form.code = item.code
            this.form.desc = item.desc
            this.form.type = item.type
            this.submit_text = 'Update';
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
        // this.getDataFromApi();
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
