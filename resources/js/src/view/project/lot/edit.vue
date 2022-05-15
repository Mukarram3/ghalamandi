<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" >
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/lot/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-3" label="Lot Code:" label-for="input-3">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.code"
                                        disabled
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Lot Name :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"

                                        placeholder="Enter name"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Lot Number:" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.number"

                                        placeholder="Enter number"
                                    ></b-form-input>
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
    export default {
        components:{KTCard},
        data(){
            return{
                title:'Update Lot',
                titleRight:'List Lots',
                is_update:false,
                submit_text:'Update',
                form: {
                    name: '',
                    number: '',
                    code: ''

                },
                show: true,
                search: '',
                errors:{},
                desserts:[],
            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                // alert(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';

                    ApiService.post('/api/lot/update',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Lot updated Successfully...`,
                            solid: true
                        })

                        this.redirectToIndex();
                    }).catch((error)=>{
                        this.submit_text='Update';
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
            },
            redirectToIndex() {
                this.$router.push({name: 'index_lot'});
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.name = ''
                this.form.number = ''
                // this.form.code = ''
                this.show = false
                this.submit_text='Update';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            getEditDataFromApi: function () {
                ApiService.get('/api/lot/edit', this.$route.params.id).then((res) => {
                    this.form = res.data;
                });
            },
        },
        created() {
            this.getEditDataFromApi();
        }
    }
</script>
