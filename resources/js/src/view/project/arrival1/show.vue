<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title">
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/arrival/index" class="btn btn-dark btn-sm">Back</router-link>

                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                            <template>
                                <v-simple-table dense>
                                    <template v-slot:default>
                                        <tbody>
                                        <tr>
                                            <th>ID:</th>
                                            <td>{{ desserts.id }}</td>
                                        </tr>
                                        <tr>
                                            <th>Arrival ID:</th>
                                            <td>{{ desserts.arrival_id }}</td>
                                        </tr>
                                        <tr>
                                            <th>Deal ID:</th>
                                            <td>{{ desserts.deal_id }}</td>
                                        </tr>
                                        <tr>
                                            <th>Arrival Date:</th>
                                            <td>{{ desserts.arrival_date }}</td>
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
                    // align: 'd-none',
                    sortable: false,
                    value: 'id',
                },
                // {text: 'Sr', value: 'row', align: ' d-none'},
                {text: 'Transporter', value: 'transporter_name'},
                {text: 'Total bags', value: 'total_bags'},
                {text: 'Load Weight', value: 'load_weight'},
                {text: 'Arrival Weight', value: 'arrival_weight'},
                {text: 'Vehicle Number', value: 'vehicle_no'},
                {text: 'Vehicle Freights', value: 'vehicle_freight'},
                {text: 'Total Weight', value: 'total_weight'},
                {text: 'Net Weight', value: 'net_weight'},
                {text: 'Actions', value: 'actions', sortable: false},
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
            ApiService.get('/api/arrival/show', this.id).then((res) => {
                this.desserts = res.data;
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
