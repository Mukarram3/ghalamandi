<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <KTCard ref="preview" v-if="true" v-bind:title="title" >
                    <template v-slot:title>
                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">

                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-1" label="Expense Head Name :*" label-for="input-1"
                                    description=""
                                >
                                    <select class="form-control" v-model="form.head_id" >
                                        <option :disabled="true">Choose Expense Head</option>
                                        <option v-for="option in items" v-bind:value="option.id" >{{ option.name }}</option>
                                    </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.head_id" :errors="errors">
                                        <span v-for=" error in errors.head_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.desc"
                                        placeholder="Enter expense description"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Amount :" label-for="input32">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.amount"
                                        placeholder="Enter expense amount"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.amount" :errors="errors">
                                        <span v-for=" error in errors.amount ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>


                                <b-button type="submit" v-html="submit_text" variant="primary">{{ submit_text }}</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>

                    </template>
                </KTCard>
            </div>
            <div class="col-md-6">
                <KTCard ref="preview" v-if="true" v-bind:title="titleRight" >
                    <template v-slot:title>
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
                                    placeholder="Search by Expense Head Name.."
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
    export default {
        components:{KTCard},
        data(){
            return{
                title:'Create Expense',
                titleRight:'List Expenses',
                is_update:false,
                submit_text:'Submit',
                form: {
                    desc: '',
                    head_id: 'Choose Expense Head',
                    amount: '',

                },
                items: [],
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
                    { text: 'Expense Head', value: 'head_id' },
                    { text: 'Description', value: 'desc' },
                    { text: 'Amount', value: 'amount' },
                    { text: 'Actions', value: 'actions', sortable: false },
                    ],
                desserts:[],
                dessertsTotal: 0,
                errors: {},
            }
        },
        computed: {
            filteredList(){
                return this.desserts.filter( item =>{
                    return item.head_id.toLowerCase().match(this.search.toLowerCase());
                } )
            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
        },
        methods: {
            paginate(e)
            {
                console.dir(e);
                ApiService.get(`/api/expense/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        this.desserts = res.data.data;
                        this.dessertsTotal = res.data.pagination.total;
                    });
            },
            onSubmit(evt) {
                evt.preventDefault()
                // console.log(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
                if(this.is_update){
                // console.log('Update:', this.submit_text);
                    ApiService.post('/api/expense/update',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Expense updated Successfully...`,
                            solid: true
                        })
                        this.form.desc = ''
                        this.form.head_id = ''
                        this.form.amount = ''
                        this.submit_text='Submit';
                        this.is_update=false;

                        this.getDataFromApi();
                    }).catch((error)=>{
                        this.submit_text='Update';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
                }else {
                    ApiService.post('/api/expense/create',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Expense Created Successfully...`,

                            solid: true
                        })
                        this.form.desc = ''
                        this.form.head_id = ''
                        this.form.amount = ''

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
                this.form.desc = ''
                this.form.head_id = ''
                this.form.amount = ''
                this.show = false
                this.submit_text='Submit';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            getExpenseDataFromApi(){
                ApiService.get('/api/expense/fetch-expense-head').then((res)=>{
                    this.items=res.data;
                });
            },
            // getDataFromApi(){
            //     var respoData=[];
            //     ApiService.get('/api/expense/fetch').then((res)=>{
            //        this.desserts = res.data;
            //
            //        console.log("Expenses: ", this.desserts);
            //     });
            //     this.desserts=respoData;
            // },
            editItem(item){
                console.log('item:', item);
                this.is_update=true;
                this.form=item;
                this.submit_text='Update';
            },
            deleteItem(item){
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

                        ApiService.post('/api/expense/delete',item).then((res)=>{
                            // console.log(res)
                            this.desserts.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Expense Created Successfully...`,

                                solid: true
                            })
                            this.form.descr = ''
                            this.form.head_id = ''
                            this.form.amount = ''
                            // this.onReset();

                            // this.getDataFromApi();
                        })

                    }
                })
            }



        },
        created() {
            // this.getDataFromApi();
            this.getExpenseDataFromApi();
        }
    }
</script>
