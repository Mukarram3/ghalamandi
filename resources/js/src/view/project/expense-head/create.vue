<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-if="true" v-bind:title="title" >
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/expense-head/index" class="btn btn-dark btn-sm">Back</router-link>
                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group
                                    id="input-group-1"
                                    label="Expense Name :*"
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

                                <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.desc"
                                        placeholder="Enter description"
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
                title:'Create Expense Head',
                titleRight:'List Expense Heads',
                is_update:false,
                submit_text:'Submit',
                form: {
                    name: '',
                    desc: ''

                },
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
                    { text: 'Description', value: 'desc' },
                    { text: 'Actions', value: 'actions', sortable: false },
                    ],
                errors: {},
                desserts:[],
                dessertsTotal: 0,
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
                    ApiService.post('/api/expense-head/create',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Expense head Created Successfully...`,

                            solid: true
                        })
                        this.redirectToIndex();

                    }).catch((error)=>{
                        if (error.response.status === 422) {
                            console.log(error.response.data.errors);
                            this.errors = error.response.data.errors || {};
                        }
                    })
            },
            redirectToIndex() {
                this.$router.push({name: 'index_expense_head'});
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.desc = ''
                this.form.name = ''
                this.show = false
                this.submit_text='Submit';
                this.$nextTick(() => {
                    this.show = true
                })
            },
        },
    }
</script>
