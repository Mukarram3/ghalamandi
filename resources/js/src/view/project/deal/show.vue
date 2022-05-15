<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/purchase-deal/index" class="btn btn-dark btn-sm">Back</router-link>

                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <template>
                                <v-simple-table dense>
                                    <template v-slot:default>
                                        <tbody>
                                        <tr>
                                            <th>Deal ID:</th>
                                            <td>{{ desserts.id }}</td>
                                        </tr>
                                        <tr>
                                            <th>Customer:</th>
                                            <td>{{ desserts.party_name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Broker:</th>
                                            <td>{{ desserts.broker }}</td>
                                        </tr>
                                        <tr>
                                            <th>Deal Date:</th>
                                            <td>{{ desserts.deal_date }}</td>
                                        </tr>
                                        <tr>
                                            <th>Delivery Date:</th>
                                            <td>{{ desserts.delivery_date }}</td>
                                        </tr>
                                        <tr>
                                            <th>Description:</th>
                                            <td>{{ desserts.desc }}</td>
                                        </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </template>
                            <template v-if="desserts[0] != null">
                                <br>
                                <tr>
                                    <h6>Deal Details</h6>
                                </tr>
                                <br>
                                <v-simple-table dense>
                                    <template v-slot:default>
                                        <thead>
                                        <tr>
                                            <th class="text-left">
                                                Commodity Id
                                            </th>
                                            <th class="text-left">
                                                Commodity
                                            </th>
                                            <th class="text-left">
                                                Quantity
                                            </th>
                                            <th class="text-left">
                                                Weight per Bag
                                            </th>
                                            <th class="text-left">
                                                Rate Unit
                                            </th>
                                            <th class="text-left">
                                                Rate
                                            </th>
                                            <th class="text-left">
                                                No. of Bags
                                            </th>
                                            <th class="text-left">
                                                Total Weight (kgs)
                                            </th>
                                            <th class="text-left">
                                                Total Amount
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in desserts[0]" :key="item">
                                            <td>{{ item.id }}</td>
                                            <td>{{ item.commodity }}</td>
                                            <td>{{ item.quantity }}</td>
                                            <td>{{ item.weight_per_bag }}</td>
                                            <td>{{ item.rate_unit }}</td>
                                            <td>{{ item.rate }}</td>
                                            <td>{{ (item.quantity * item.weight_per_bag) / item.rate_unit }}</td>
                                            <td>{{ (item.quantity * item.weight_per_bag) }}</td>
                                            <td>{{ item.total_amount }}</td>
                                        </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </template>
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
import {SET_BREADCRUMB} from "@/core/services/store/breadcrumbs.module";

export default {
    components: {
        KTCard
    },
    data() {
        return {
            title: 'View Deal Details',
            titleRight: 'List Deals',
            is_update: false,
            submit_text: 'Submit',
            id: '',
            headers: [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                {text: 'Customer', value: 'party_name'},
                {text: 'Broker', value: 'broker'},
                {text: 'Deal Date', value: 'deal_date'},
                {text: 'Delivery date', value: 'delivery_date'},
                {text: 'Deal Type', value: 'deal_type'},
                {text: 'Actions', value: 'actions', sortable: false},
                {text: 'Deal Id', value: 'deal_id', align: ' d-none'},
            ],
            desserts: [],
        }
    },

    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Dashboard"}]);
    },
    methods: {
        getDataFromApi() {
            var respoData = [];
            this.id = this.$route.params.id;
            ApiService.get('/api/purchase-deal/show', this.id).then((res) => {
                this.desserts = res.data;
                console.log('Desserts: ', res.data);
            });
            this.desserts = respoData;
        },
    },
    created() {
        this.getDataFromApi();
    }
}
</script>


<style scoped>

</style>
