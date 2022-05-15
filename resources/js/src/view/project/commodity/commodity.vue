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

                                <b-form-group
                                    id="input-group-1"
                                    label="Category :*"
                                    label-for="input-1"
                                    description=""
                                >
                                        <select class="form-control" v-model="form.category_id">
                                            <option value="" disabled hidden>Choose Category</option>
                                            <option v-for="option in categories" :value="option.id" >{{ option.name }}</option>
                                        </select>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.category_id" :errors="errors">
                                        <span v-for="error in errors.category_id ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>

                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Commodity Name :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter Commodity Name..."
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for="error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                    <b-form-group
                                        id="input-group-1"
                                        label="Commodity Name (Urdu):*"
                                        label-for="input-1"
                                        description=""
                                    >
                                    <b-form-input
                                    v-model="form.name_urdu"
                                    type="text"
                                    placeholder="Enter Commodity Name (Urdu)"
                                ></b-form-input>
                                        <b-form-invalid-feedback style="display: block;" v-if="errors.name_urdu" :errors="errors">
                                            <span v-for="error in errors.name_urdu ">{{ error }}</span><br>
                                        </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Weight in Kgs" label-for="input-2">
                                    <select class="form-control" v-model="form.unit_id">
                                        <option value="" disabled hidden>Choose Unit</option>
                                        <option v-for="option in units" :value="option.id" >{{ option.name }}</option>
                                    </select>

                                    <b-form-invalid-feedback style="display: block;" v-if="errors.kgs" :errors="errors">
                                        <span v-for="error in errors.units ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Commodity Code :" label-for="input32">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.code"
                                        placeholder="Enter category name (Urdu)"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Bag type" label-for="input32">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.bag_type"
                                        placeholder="Bag type"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Status" label-for="input-2">
                                    <select class="form-control" v-model="form.status">
                                        <option value="" disabled hidden>Choose Status</option>
                                        <option v-for="option in statusOptions" >{{ option }}</option>
                                    </select>

                                    <b-form-invalid-feedback style="display: block;" v-if="errors.status" :errors="errors">
                                        <span v-for="error in errors.status ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-button variant="primary" v-html="submit_text" type="submit">

                                </b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>

                    </template>
                </KTCard>
            </div>
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="titleRight" >
                    <template v-if="true" v-slot:title>

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
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import Swal from "sweetalert2";
    export default {
        components:{KTCard},
        data(){
            return{
                title:'Create Commodity',
                titleRight:'List Commodities',
                is_update:false,
                submit_text:'Submit',
                form: {
                    name_urdu: '',
                    name: '',
                    code: '',
                    category_id: '',
                    unit_id: '',
                    bag_type:'',
                    status:''

                },
                errors: {},
                show: true,
                search: '',
                categories:[],
                units:[],
                statusOptions:['active', 'inactive'],
                itemindex:0,
                headers: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Name (Urdu)', value: 'name_urdu' },
                    { text: 'Category', value: 'category.name' },
                    { text: 'Unit', value: 'unit.name' },
                    { text: 'Code', value: 'code' },
                    { text: 'Bag Type', value: 'bag_type' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                desserts:[],
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
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Commodities" }]);
        },
        methods: {
            paginate(e)
            {
                console.dir(e);
                ApiService.get(`/api/commodity/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        console.log('Fetched Data: ', res.data);
                        this.desserts = res.data.data;
                        this.dessertsTotal = res.data.total;
                    });
            },
            onSubmit(evt) {
                evt.preventDefault()
                // alert(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
                if(this.is_update){
                    ApiService.post('/api/commodity/update',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Unit updated Successfully...`,
                            solid: true
                        })
                        this.submit_text='Submit';
                        this.form.kgs = ''
                        this.form.name = ''
                        this.form.code = ''
                        this.form.category_id = ''
                        this.form.unit_id = ''
                        this.form.bag_type = ''
                        this.form.status = ''
                        this.submit_text='Submit';
                        this.is_update=false;
                        this.errors={}
                        console.log(this.itemindex);
                        console.log(res.data.data);
                        // this.desserts[this.itemindex]=res.data.data;
                        this.desserts.splice(this.itemindex, 1, res.data.data);
                        this.submit_text='Submit';
                    }).catch((error)=>{
                        this.submit_text='Update';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
                }else {
                    ApiService.post('/api/commodity/create',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Category Created Successfully...`,

                            solid: true
                        })

                        this.desserts.push(res.data.data);
                        this.submit_text='Submit';
                        this.form.kgs = ''
                        this.form.name = ''
                        this.form.code = ''
                        this.form.category_id = ''
                        this.form.unit_id = ''
                        this.form.bag_type = ''
                        this.form.status = ''

                        this.submit_text='Submit';
                        // this.onReset();
                        this.errors={}
                        this.submit_text='Submit';
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
                this.form.kgs = ''
                this.form.name = ''
                this.form.code = ''
                this.form.category_id = ''
                this.form.unit_id = ''
                this.form.bag_type = ''
                this.form.status = ''
                this.show = false
                this.submit_text='Submit';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            // getDataFromApi(){
            //     var respoData=[];
            //     ApiService.get('/api/commodity/fetch').then((res)=>{
            //         this.desserts=res.data;
            //         console.log('Response: ', res.data)
            //
            //     });
            //     this.desserts=respoData;
            // },
            editItem(item){
                console.log(item.id);
                this.itemindex = this.desserts.indexOf(item)
                console.log(this.itemindex);
                this.is_update=true;
                this.form=item;
                this.submit_text='Update';
            },
            deleteItem(item){
                var index = this.desserts.indexOf(item)
                this.itemindex = this.desserts.indexOf(item)
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

                        ApiService.post('/api/commodity/delete',item).then((res)=>{
                            console.log(res)
                            this.desserts.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `United Deleted...`,

                                solid: true
                            })
                            this.form.kgs = ''
                            this.form.name = ''
                            this.form.code = ''
                            this.form.category_id = ''
                            this.form.unit_id = ''
                            this.form.bag_type = ''
                            this.form.status = ''
                            // this.onReset();

                            // this.getDataFromApi();
                        })

                    }
                })
            },
            getCategories(){
                ApiService.get('/api/commodity/fetch-categories').then((res)=>{
                    this.categories=res.data;
                    console.log('Categories: ', res.data);
                }).catch((error)=>{

                } );
            } ,
            getUnits(){
                ApiService.get('/api/commodity/fetch-units').then((res)=>{
                    this.units=res.data;
                }).catch((error)=>{

                } );
            }
            },
        created() {
            // this.getDataFromApi();
            this.getCategories();
            this.getUnits();
        }
    }
</script>
