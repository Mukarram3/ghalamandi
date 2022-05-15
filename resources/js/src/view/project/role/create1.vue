<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
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
                                    label="Role Name :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter Name..."
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-1" label="Permissions :*" label-for="input-1" description="">
                                    <table>
                                        <tr>
                                            <td><input type="checkbox" @click="selectAllFunc" v-model="allSelected"></td>
                                            <td>Select All</td>
                                        </tr>
                                        <tr v-for="option in options">
                                            <td><input type="checkbox" v-model="form.permissions" @click="select" :value="option.id"></td>
                                            <td> {{ option.name }}</td>
                                        </tr>
                                    </table>
                                </b-form-group>

<!--                                <b-form-group id="input-group-2" label="Description:" label-for="input-2">-->
<!--                                    <b-form-input-->
<!--                                        id="input-2"-->
<!--                                        v-model="form.guard_name"-->
<!--                                        required-->
<!--                                        placeholder="Enter description"-->
<!--                                    ></b-form-input>-->
<!--                                </b-form-group>-->

                                <b-button type="submit" v-html="submit_text" variant="primary">{{ submit_text }}</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>

                    </template>
                </KTCard>
            </div>
            <div class="col-md-6">
                <KTCard ref="preview" v-bind:title="titleRight"  v-if="true" >
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
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import Swal from "sweetalert2";
    import Multiselect from "vue-multiselect";
    export default {
        components:{KTCard, Multiselect},
        data(){
            return{
                title:'Create Role',
                titleRight:'Roles',
                is_update:false,
                submit_text:'Submit',
                form: {
                    name: '',
                    permissions: []

                },
                options: [{id: 1, name: 'edit'}, {id: 2, name: 'delete'}, {id: 3, name: 'publish'}, {id: 4, name: 'unpublish'}],
                show: true,
                search: '',
                headers: [
                    {
                        text: 'ID',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Guard Name', value: 'guard_name' },
                    { text: 'Actions', value: 'actions', sortable: false },
                    ],
                desserts:[],
                dessertsTotal: 0,
                selected: [],
                allSelected: false,
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
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Manage Role" }]);
        },
        methods: {
            paginate(e)
            {
                console.dir(e);
                ApiService.get(`/api/role/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                    .then((res) => {
                        console.log('Fetched Data: ', res.data);
                        this.desserts = res.data.data;
                        this.dessertsTotal = res.data.total;
                    });
            },
            selectAllFunc: function() {
                this.form.permissions = [];
                this.allSelected = !this.allSelected;
                if (this.allSelected) {
                    this.options.map((option) => {
                        this.form.permissions.push(option.id.toString());
                    });
                }
            },
            select: function() {
                this.allSelected = false;
            },
            onSubmit(evt) {
                evt.preventDefault()
                // alert(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
                if(this.is_update){
                    ApiService.post('/api/role/update',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Role updated Successfully...`,
                            solid: true
                        })
                        this.form.permissions = ''
                        this.form.name = ''
                        this.submit_text='Submit';
                        this.is_update=false;

                        // this.paginate();
                    }).catch((error)=>{
                        this.submit_text='Update';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
                }else {
                    ApiService.post('/api/role/create',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Role Created Successfully...`,

                            solid: true
                        })
                        this.form.permissions = ''
                        this.form.name = ''

                        // this.paginate();
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
                this.form.permissions = ''
                this.form.name = ''
                this.show = false
                this.submit_text='Submit';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            // getDataFromApi(){
            //     var respoData=[];
            //     ApiService.get('/api/role/fetch').then((res)=>{
            //        this.desserts=res.data;
            //        console.log(respoData)
            //
            //     });
            //     this.desserts=respoData;
            // },
            editItem(item){
                console.log(item.id);
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

                        ApiService.post('/api/role/delete',item).then((res)=>{
                            console.log(res)
                            this.desserts.splice(index, 1);

                            this.$bvToast.toast(res.data.message, {
                                title: `Role Deleted Successfully...`,

                                solid: true
                            })
                            this.form.permissions = ''
                            this.form.name = ''
                            // this.onReset();

                            // this.getDataFromApi();
                        })

                    }
                })
            }



        },
        created() {
            // this.paginate();
        }
    }
</script>
