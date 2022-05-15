<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/role/index" class="btn btn-dark btn-sm">Back</router-link>
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

                                <b-button type="submit" v-html="submit_text" variant="primary">{{ submit_text }}</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

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
                desserts:[],
                dessertsTotal: 0,
                selected: [],
                allSelected: false,
                errors:{}
            }
        },

        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Manage Role" }]);
        },
        methods: {
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
                    ApiService.post('/api/role/create',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Role Created Successfully...`,

                            solid: true
                        })

                        this.redirectToInvoice();
                    }).catch((error)=>{
                        this.submit_text='Submit';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
            },
            redirectToInvoice() {
                this.$router.push({name: 'index_role'});
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
        }
    }
</script>
