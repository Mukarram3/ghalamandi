<template>
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
                title:'Create Broker',
                titleRight:'List Brokers',
                is_update:false,
                submit_text:'Submit',
                form: {
                    type: 'Broker',
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
                    ApiService.post('/api/customer/create',this.form).then((res)=>{
                        this.$bvToast.toast(res.data.message, {
                            title: `Broker Created Successfully...`,

                            solid: true
                        })
                        this.$root.$emit('onAddBroker', res.data);
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
                        this.$root.$emit('bv::hide::modal', 'modal-2')
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
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>
