<template>
    <div>
        <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-row>
                    <b-col md="6">
                        <label>Name:</label>
                        <b-form-input
                            id="input-live-supplier_name"
                            v-model="form.name"
                            type="text"
                            placeholder="Enter Name"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>Name (Urdu):</label>
                        <b-form-input
                            id="input-live-name"
                            v-model="form.name_urdu"
                            type="text"
                            placeholder="Enter Urdu Name"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>Telephone Number:</label>
                        <b-form-input
                            id="input-live-telephone_number"
                            v-model="form.phone"
                            type="text"
                            placeholder="Enter Phone Number"
                        ></b-form-input>
                    </b-col>

                    <b-col md="6">
                        <label>Office Phone Number:</label>
                        <b-form-input
                            id="input-live-other_phone_number"
                            v-model="form.phone_2"
                            type="text"
                            placeholder="Enter Office Phone Number"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>CNIC:</label>
                        <b-form-input
                            id="input-live-CNIC"
                            v-model="form.cinic"
                            type="text"
                            placeholder="Enter CNIC"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>Description:</label>
                        <b-form-input
                            id="input-live-desc"
                            v-model="form.desc"
                            type="text"
                            placeholder="Enter Description"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>Company:</label>
                        <b-form-input
                            id="input-live-desc"
                            v-model="form.company"
                            type="text"
                            placeholder="Enter Company"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>City:</label>
                        <b-form-input
                            id="input-live-desc"
                            v-model="form.city"
                            type="text"
                            placeholder="Enter City"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>Address:</label>
                        <b-form-input
                            id="input-live-address"
                            v-model="form.address"
                            type="text"
                            placeholder="Enter Address"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>Unloading Office Address:</label>
                        <b-form-input
                            id="input-live-address"
                            v-model="form.unload_address"
                            type="text"
                            placeholder="Enter Unloading Office Address"
                        ></b-form-input>
                    </b-col>
                    <b-col md="6">
                        <label>Balance:</label>
                        <b-form-input
                            id="input-live-Balance"
                            v-model="form.balance"
                            type="text"
                            placeholder="Enter Balance"
                        ></b-form-input>
                    </b-col>
                </b-row>

                <b-button type="submit" variant="primary">{{ submit_text }}</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>

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
        name: 'Modal',
        components:{KTCard},
        data(){
            return{
                title:'Create Party',
                titleRight:'List Parties',
                is_update:false,
                submit_text:'Submit',
                form: {
                    type: 'Supplier',
                    name: '',
                    name_urdu: '',
                    phone: '',
                    phone_2: '',
                    desc: '',
                    company: '',
                    city: '',
                    cinic: '',
                    address: '',
                    unload_address: '',
                    balance: '',

                },
                show: true,
                search: '',
                errors:{},
                desserts:[]
            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
        },
        methods: {
                close() {
                    this.$emit('close');
                },
            onSubmit(evt) {
                evt.preventDefault()
                // alert(JSON.stringify(this.form))
                this.submit_text='Creating...';
                    ApiService.post('/api/customer/create',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Party Created Successfully...`,

                            solid: true
                        })
                        this.$root.$emit('onAddParty', res.data);

                        this.close();
                        this.form.name = ''
                        this.form.name_urdu = ''
                        this.form.phone = ''
                        this.form.phone_2 = ''
                        this.form.desc = ''
                        this.form.company = ''
                        this.form.cinic = ''
                        this.form.city = ''
                        this.form.address = ''
                        this.form.unload_address = ''
                        this.form.balance = ''
                        this.$root.$emit('bv::hide::modal', 'modal-1')

                        // this.getDataFromApi();
                    })
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.name = ''
                this.form.name_urdu = ''
                this.form.phone = ''
                this.form.phone_2 = ''
                this.form.desc = ''
                this.form.company = ''
                this.form.cinic = ''
                this.form.city = ''
                this.form.address = ''
                this.form.unload_address = ''
                this.form.balance = ''

                this.show = false
                this.submit_text='Submit';
                this.$nextTick(() => {
                    this.show = true
                })
            },
        },
    }
</script>


<style scoped>

</style>
