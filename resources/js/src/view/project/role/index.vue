<template>
    <div>
        <div class="row">
            <div class="col-md-12">

                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/role/create" class="btn btn-dark btn-sm">Create</router-link>
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

                                        <template v-slot:item.permissions="{ item }">
                                            <v-item
                                                v-for="permission in item.permissions"
                                                :key="permission.id"
                                            >
                                                {{ permission.name }},
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
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import Swal from "sweetalert2";
    import Multiselect from "vue-multiselect";
    export default {
        components:{KTCard, Multiselect},
        data(){
            return{
                title:'Roles',
                titleRight:'List Roles',
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
                    { text: 'Permissions', value: 'permissions' },
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
                        console.log('Fetched Data: ', res.data.data);
                        this.desserts = res.data.data;
                        this.dessertsTotal = res.data.pagination.total;
                    });
            },

            editItem(item){
                this.$router.push({name: 'edit_role', params: {id: item.id}});
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
    }
</script>
