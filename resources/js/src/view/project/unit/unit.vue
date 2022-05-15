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
                                    label="Unit Name :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"

                                        placeholder="Enter Unit Name..."
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Weight in Kgs" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.kgs"

                                        placeholder="Weight In Kgs"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.kgs" :errors="errors">
                                        <span v-for=" error in errors.kgs ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Unit Code :" label-for="input32">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.code"

                                        placeholder="Enter Unit Code"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.code" :errors="errors">
                                        <span v-for=" error in errors.code ">{{ error }}</span><br>
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
                <KTCard ref="preview" v-if="true"  v-bind:title="titleRight" >
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
                title:'Create Unit',
                titleRight:'List Units',
                is_update:false,
                submit_text:'Submit',
                form: {
                    name_urdu: '',
                    name: '',

                },
                errors: {},
                show: true,
                search: '',
                itemindex:0,
                headers: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Weight in Kgs', value: 'kgs' },
                    { text: 'Code', value: 'code' },
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
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Manage Units" }]);
        },
        methods: {
            paginate(e)
            {
                console.dir(e);
                ApiService.get(`/api/unit/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
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
                    ApiService.post('/api/unit/update',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Unit updated Successfully...`,
                            solid: true
                        })
                        this.submit_text='Submit';
                        this.form.kgs = ''
                        this.form.name = ''
                        this.form.code = ''
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
                    ApiService.post('/api/unit/create',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Category Created Successfully...`,

                            solid: true
                        })

                        this.desserts.push(res.data.data);
                        this.form.kgs = ''
                        this.form.name = ''
                        this.form.code = ''
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
                this.form.name_urdu = ''
                this.form.name = ''
                this.form.code = ''
                this.show = false
                this.submit_text='Submit';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            // getDataFromApi(){
            //     var respoData=[];
            //     ApiService.get('/api/unit/fetch').then((res)=>{
            //         this.desserts=res.data;
            //         console.log(respoData)
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

                        ApiService.post('/api/unit/delete',item).then((res)=>{
                            console.log(res)
                            this.desserts.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `United Deleted...`,

                                solid: true
                            })
                            this.form.name_urdu = ''
                            this.form.name = ''
                            this.form.code = ''
                            // this.onReset();

                            // this.getDataFromApi();
                        })

                    }
                })
            }



        },
        created() {
            // this.getDataFromApi();
        }
    }
</script>
