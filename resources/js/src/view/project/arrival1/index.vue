<template>
    <div>
        <div class="row">
            <div class="col-md-12">

                <KTCard ref="preview" v-bind:title="titleRight" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
                            <router-link to="/arrival/create" class="btn btn-dark btn-sm">Create</router-link>

                        </div>
                    </template>
                    <template v-slot:body>
                        <div>
                        <template>
                            <v-card-title>
                                <v-text-field
                                    v-model="search"
                                    placeholder="Search by receiver name.."
                                    append-icon="mdi-magnify"
                                    single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>
                        </template>
                            <b-row>
                                <b-col md="12">
                                    <template>

                                        <v-data-table
                                            :headers="headers"
                                            :items="filteredList"
                                            :search="search"
                                            :single-expand="singleExpand"
                                            :expanded.sync="expanded"
                                            :items-per-page="5"
                                            :footer-props="{itemsPerPageOptions: [5,10,15]}"
                                            :server-items-length = dessertsTotal
                                            @pagination="paginate"
                                            item-key="id"
                                            show-expand
                                            class="elevation-1">

                                            <template v-slot:item.actions="{ item }">
                                                <v-icon
                                                    small
                                                    class="mr-2"
                                                    @click="showItem(item)"
                                                >
                                                    mdi-eye
                                                </v-icon>
                                                <v-icon
                                                    small
                                                    class="mr-2"
                                                    @click="editItem(item)"
                                                >
                                                    mdi-pencil
                                                </v-icon>
                                                <v-icon
                                                    small
                                                    @click="deleteItem(item)">
                                                    mdi-delete
                                                </v-icon>
                                                <b-dropdown id="dropdown-dropleft" dropright text="Actions" size="sm" split variant="primary" class="m-2">
<!--                                                    <b-dropdown-item @click="showItem(item)">Show</b-dropdown-item>-->
<!--                                                    <b-dropdown-item @click="editItem(item)">Edit</b-dropdown-item>-->
<!--                                                    <b-dropdown-item @click="deleteItem(item)">Delete</b-dropdown-item>-->
                                                    <b-dropdown-item @click="invoiceGenerate(item)">Generate Invoice</b-dropdown-item>
                                                    <b-dropdown-item to="/purchase-deal/create">Generate Gate Pass</b-dropdown-item>
                                                    <b-dropdown-item href="#">Status Update</b-dropdown-item>
                                                </b-dropdown>
                                            </template>

                                            <template v-slot:expanded-item="{ headers, item }">
                                                <td :colspan="headers.length">
                                                    Id: {{ item.id }}
                                                </td>
                                            </template>
                                        </v-data-table>
                                    </template>

                                </b-col>
                            </b-row>
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
import Swal from "sweetalert2";

export default {
    components: {
        KTCard
    },
    data() {
        return {
            title: 'Arrivals',
            titleRight: 'List Arrivals',
            is_update: false,
            expanded: [],
            singleExpand: false,
            submit_text: 'Submit',
            options: [{id: '', text: ''}, {id: '', text: ''}],
            optionsAjax: [{id: -1, text: ''}],
            form: {
                arrival_id: '',
                deal_id: '',
                customer_id: '',
                arrival_date: '',
                bilty_no: '',
                receiver_name: '',
                driver_name: '',
                transporter_name: '',
                driver_phone: '',
                total_bags: '',
                vehicle_freight: '',
                load_weight: '',
                arrival_weight: '',
                vehicle_no: '',
                total_weight: '',
                net_weight: '',
            },
            row: 0,
            parties: [],
            StatusArr: ['loaded', 'arrived', 'scanned', 'production', 'completed', 'removed'],
            show: true,
            search: '',
            headers: [
                {
                    text: 'ID',
                    // align: 'd-none',
                    sortable: false,
                    value: 'id',
                },
                {text: 'Receiver', value: 'receiver_name'},
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
            index: '',
            desserts: [],
            dessertsTotal: 0,
            dealUrl: '/api/arrival/get-select-deals',
            errors:{},
            // showMenu: false,
        }
    },
    computed: {
        filteredList(){
            return this.desserts.filter( item =>{
                return item.receiver_name.toLowerCase().match(this.search.toLowerCase());
            } )
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Dashboard"}]);
    },
    methods: {
        paginate(e)
        {
            console.dir(e);
                ApiService.get(`/api/arrival/fetch?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                console.log('Fetched Data: ', res.data);
                this.desserts = res.data.data;
                this.dessertsTotal = res.data.total;
            });
        },
        invoiceGenerate(item)
        {
            this.$router.push({name: 'arrival_print', params: {id: item.id}});
        },
        // getDataFromApi() {
        //     var respoData = [];
        //     ApiService.get('/api/arrival/fetch').then((res) => {
        //         this.desserts = res.data;
        //     });
        //     this.desserts = respoData;
        // },
        editItem(item) {
            this.edit_id = item.id;
            this.is_update = true;
            this.$router.push({name: 'edit_arrival', params: {id: this.edit_id}});
            this.submit_text = 'Update';
        },
        showItem(item) {
            this.edit_id = item.id;
            this.$router.push({name: 'show_arrival', params: {id: this.edit_id}});
        },
        deleteItem(item) {
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

                    ApiService.post('/api/arrival/delete', item).then((res) => {

                        this.desserts.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Arrival Record Deleted Successfully...`,

                            solid: true
                        })
                        // this.onReset();

                        // this.getDataFromApi();
                    })

                }
            })
        }
    },
    created() {
        // this.getDataFromApi();
    }
}
</script>

<style>

</style>
