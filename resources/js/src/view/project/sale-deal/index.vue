<template>
    <div>

                <KTCard ref="preview" v-bind:title="title" v-if="true">
                                        <template v-slot:title>

                                        </template>
                                        <template v-slot:toolbar>
                                            <div class="example-tools justify-content-center">
                                                <router-link to="/sale-deal/create" class="btn btn-dark btn-sm">Create</router-link>

                                            </div>
                                        </template>
                    <template v-slot:body>
                        <div>
                            <template>
                                <v-card-title>
                                    <v-text-field
                                        v-model="search"
                                        placeholder="Search by party name.."
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
                                            </template>
                                            <b-dropdown id="dropdown-dropleft" dropright text="Actions" size="sm" split variant="primary" class="m-2">
                                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                                <b-dropdown-item to="/purchase-deal/create">Generate Invoice</b-dropdown-item>
                                                <b-dropdown-item to="/purchase-deal/create">Generate Gate Pass</b-dropdown-item>
                                                <b-dropdown-item href="#">Status Update</b-dropdown-item>
                                            </b-dropdown>
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
            title: 'Sale Deals',
            titleRight: 'List Sale Deals',
            is_update: false,
            submit_text: 'Submit',
            expanded: [],
            singleExpand: false,

            value: '',
            formatted: '',
            selected: '',
            myValue: '',
            // myOptions: ['op1', 'op2', 'op3'] ,
            result1: '',
            // selectedAjax: '-1',
            options: [{id: '', text: ''}, {id: '', text: ''}],
            optionsAjax: [{id: -1, text: ''}],
            form: {
                du_id: '',
                party_name: '',
                deal_date: '',
                broker: '',
                commodity: '',
                rate: '',
                rate_unit: '',
                unit_id: '',
                quantity: '',
                total_weight: '',
                total_amount: '',
                total_est_amount: '',
                total_bags: '',
                delivery_date: '',
                expense_template: '',
                other_items: '',
                deal_type: '',
                selectedAjax: '-1',
                desserts2: [],
            },
            isModalVisible: false,
            isBrokerModalVisible: false,
            templates: [],
            parties: [],
            dealTypes: ['Arrival', 'Normal', 'Exmill'],
            StatusArr: ['loaded', 'arrived', 'scanned', 'production', 'completed', 'removed'],
            brokers: [],
            commodities: [],
            units: [],
            unit_id: '',
            edit_id: '',
            show: true,
            search: '',
            headers: [
                {
                    align: 'left',
                    value: 'id',
                    text: 'Id',
                    sortable: false,
                },
                {text: 'Customer', value: 'party_name'},
                {text: 'Broker', value: 'broker'},
                {text: 'Deal Date', value: 'deal_date'},
                {text: 'Delivery date', value: 'delivery_date'},
                {text: 'Description', value: 'desc'},
                {text: 'Created By', value: 'user'},
                {text: 'Actions', value: 'actions', sortable: false},
                {text: 'Deal Id', value: 'deal_id', align: ' d-none'},
            ],
            desserts: [],
            dessertsTotal: 0,
        }
    },
    computed: {
        filteredList(){
            return this.desserts.filter( item =>{
                return item.party_name.toLowerCase().match(this.search.toLowerCase());
            } )
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Sale Deals"}]);
    },
    methods: {
        paginate(e)
        {
            console.dir(e);
            ApiService.get(`/api/sale-deal/fetch-sale?page=${e.page}&per_page=${e.itemsPerPage}`)
                .then((res) => {
                    this.desserts = res.data.data;
                    this.dessertsTotal = res.data.pagination.total;
                });
        },
        editItem(item) {
            this.edit_id = item.id;
            this.is_update = true;
            this.$router.push({name: 'edit_deal_sale', params: {id: this.edit_id}});
            this.submit_text = 'Update';
        },
        showItem(item) {
            this.edit_id = item.id;
            this.$router.push({name: 'show_deal_sale', params: {id: this.edit_id}});
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

                    ApiService.post('/api/sale-deal/delete', item).then((res) => {
                        console.log(res)
                        this.desserts.splice(index, 1);

                        this.$bvToast.toast(res.data.message, {
                            title: `Deal Deleted Successfully...`,

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
