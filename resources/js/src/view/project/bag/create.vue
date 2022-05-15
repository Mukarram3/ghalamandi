<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true" v-bind:title="title" >
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/bag/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group
                                    id="input-group-1"
                                    label="Bag Name :*"
                                    label-for="input-1"
                                    description=""
                                >
                                    <b-form-input
                                        v-model="form.name"
                                        type="text"

                                        placeholder="Enter bag name..."
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.name" :errors="errors">
                                        <span v-for=" error in errors.name ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Weight (grams)" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.weight"

                                        placeholder="Enter weight in grams"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.weight" :errors="errors">
                                        <span v-for=" error in errors.weight ">{{ error }}</span><br>
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Price :" label-for="input32">
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.price"

                                        placeholder="Enter price"
                                    ></b-form-input>
                                    <b-form-invalid-feedback style="display: block;" v-if="errors.price" :errors="errors">
                                        <span v-for=" error in errors.price ">{{ error }}</span><br>
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
                title:'Create Bag',
                titleRight:'List Bags',
                is_update:false,
                submit_text:'Submit',
                form: {
                    name: '',
                    weight: '',
                    price: '',

                },
                errors: {},
                show: true,
                search: '',
                itemindex:0,

            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Manage Bags" }]);
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                // alert(JSON.stringify(this.form))
                this.errors = {};
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
                    ApiService.post('/api/bag/create',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Bag Created Successfully...`,

                            solid: true
                        })

                        this.redirectToIndex();
                    }).catch((error)=>{
                        if (error.response.status === 422) {
                            this.$bvToast.toast('Error', {
                                title: `Something went wrong...`,
                                solid: true
                            })
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
            },
            redirectToIndex() {
                this.$router.push({name: 'index_bag'});
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.weight = ''
                this.form.name = ''
                this.form.price = ''
                this.show = false
                this.submit_text='Submit';
                this.$nextTick(() => {
                    this.show = true
                })
            },
        }
    }
</script>
