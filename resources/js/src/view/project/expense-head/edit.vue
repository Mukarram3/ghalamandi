<template>
    <div>
        <div class="row">
            <div class="col-md-12">
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
                title:'Update Expense Head',
                titleRight:'List Expense Heads',
                is_update:false,
                submit_text:'Update',
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
                    ApiService.post('/api/expense-head/update',this.form).then((res)=>{
                        console.log(res)
                        this.$bvToast.toast(res.data.message, {
                            title: `Expense head updated Successfully...`,
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
                this.submit_text='Update';
                this.$nextTick(() => {
                    this.show = true
                })
            },
            getEditDataFromApi: function () {
                ApiService.get('/api/expense-head/edit', this.$route.params.id).then((res) => {
                    this.form = res.data;
                });
            },
        },
        created() {
            this.getEditDataFromApi();
        }
    }
</script>
