<template>
    <div>

                            <div class="main">
                                <div class="office-copy">
                                    <div class="logo">
                                        <img src="media/ghalamandi/logo.png">
                                        <h4 class="company-name">
                                            Craveteck ({{data.type}} Gate Pass)
                                        </h4>
                                        <h5 class="company-address">
                                            House no#68, St no #2, Qasim Park, Phase 2
                                        </h5>
                                        <p>
                                            <span><b>Ph:</b>048-9875613 | 048-9875613 | 048-9875613</span>
                                        </p>
                                    </div>
                                    <div class="row" style="padding-right: 10px;">
                                        <div class="col-6">
                                            <h4 class="title">
                                                Office Copy
                                            </h4>
                                        </div>
                                        <div class="col-6 text-right">
                                            <h4 class="deal-no">
                                                <p>Deal No #{{ data.du_id }}</p>
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="office-data">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td class="barcode text-center" style="padding: 10px 0px 10px 0px;">
<!--                                                    <img src="media/ghalamandi/barcode.jpg">-->
                                                    <barcode height="40" width="2" v-bind:value="barcodeValue" format="CODE39"></barcode>
                                                </td>
                                            </tr>
                                            <tr class="data datatwo">
                                                <td class="issuance-date">
                                                    <label>Issuance Date:</label>
                                                    <p>{{ data.updated_at }}</p>
                                                </td>
                                                <td  class="deal-date">
                                                    <label>Deal Date:</label>
                                                    <p>{{data.deal_date }}</p>
                                                </td>
                                            </tr>
                                            <tr class="data datathree">
                                                <td class="party-name">
                                                    <div class="party-data">
                                                        <label>Party Name:</label>
                                                        <p>{{ data.party_name_name }}</p>
                                                    </div>
                                                    <div class="party-data">
                                                        <label>Total Bags:</label>
                                                        <p>{{ data.total_bags }} Bags</p>
                                                    </div>
                                                    <div class="party-data">
                                                        <label>Bags Weight:</label>
                                                        <p>{{ data.total_weight_kgs }} kg</p>
                                                    </div>

                                                </td>
                                                <td  class="commodity">
                                                    <table class="">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Commodities:</th>
                                                            <th scope="col">Crop :</th>
                                                            <th scope="col">Rate:</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td >
                                                                <p v-for="item in data.data">{{ item.commodity }}</p>
                                                            </td>
                                                            <td class="crop_title">
                                                                <p v-for="item in data.data">Mesoor</p>
                                                            </td>
                                                            <td class="price">
                                                                <p v-for="item in data.data">{{ item.rate }}</p>
                                                            </td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
<!--                                            <tr class="data datafour">-->
<!--                                                <td class="godown">-->
<!--                                                    Godown-->
<!--                                                </td>-->

<!--                                                <td class="party-name godown-item">-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Vehicle Charges:</label>-->
<!--                                                        <p v-if="data.vehicle_expense">Rs {{ data.vehicle_expense }}</p>-->
<!--                                                        <p v-else="data.vehicle_expense">Rs 0</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data" v-for="item in typeExpenses">-->
<!--                                                        <label>{{ item.name }}:</label>-->
<!--                                                        <p>Rs {{ item.price }}</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Total Expenses :</label>-->
<!--                                                        <p>Rs {{ data.total_expenses }}</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Bag Type:</label>-->
<!--                                                        <p>Plastic</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Total Bill:</label>-->
<!--                                                        <p>Rs {{ data.total_bill }} </p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Net Total:</label>-->
<!--                                                        <p>Rs {{ data.net_bill }} </p>-->
<!--                                                    </div>-->
<!---->
<!--                                                </td>-->
<!--                                            </tr>-->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="factory-copy">
                                    <div class="logo">
                                        <img src="media/ghalamandi/logo.png">
                                        <h4 class="company-name">
                                            Craveteck ({{data.type}} Gate Pass)
                                        </h4>
                                        <h5 class="company-address">
                                            House no#68, St no #2, Qasim Park, Phase 2
                                        </h5>
                                        <p>
                                            <span><b>Ph:</b>048-9875613 | 048-9875613 | 048-9875613</span>
                                        </p>
                                    </div>
                                    <div class="row" style="padding-right: 10px;">
                                        <div class="col-6">
                                            <h4 class="title">
                                                Factory Copy
                                            </h4>
                                        </div>
                                        <div class="col-6 text-right">
<!--                                            <h4 class="deal-no">-->
<!--                                                <p>Deal No #{{ data.du_id }}</p>-->
<!--                                            </h4>-->
                                        </div>
                                    </div>
                                    <div class="factory-data">
                                        <table>
                                            <tbody>
                                            <tr class="mb-4">
                                                <td class="barcode text-center" style="padding: 10px 0px 10px 0px;">
<!--                                                    <img src="media/ghalamandi/barcode.jpg">-->
                                                    <barcode height="40" width="1" v-bind:value="barcodeValue" format="CODE39"></barcode>
                                                </td>
                                            </tr>
                                            <tr class="data dataone">
                                                <td class="deal-no">
                                                    <p>Deal No #{{ data.du_id }}</p>
                                                </td>
                                            </tr>
                                            <tr class="data datatwo">
                                                <td class="issuance-date">
                                                    <label>Issuance Date:</label>
                                                    <p>{{ data.updated_at }}</p>
                                                </td>
                                            </tr>
                                            <tr class="data datatwo">
                                                <td  class="deal-date">
                                                    <label>Deal Date:</label>
                                                    <p>{{data.deal_date }}</p>
                                                </td>
                                            </tr>
                                            <tr class="data datathree">
                                                <td class="party-name">
                                                    <div class="party-data">
                                                        <label>Party Name:</label>
                                                        <p>{{ data.party_name_name }}</p>
                                                    </div>
                                                    <div class="party-data">
                                                        <label>Total Bags:</label>
                                                        <p>{{ data.total_bags }} Bags</p>
                                                    </div>
                                                    <div class="party-data">
                                                        <label>Bags Weight:</label>
                                                        <p>{{ data.total_weight_kgs }} kg</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="data datathree">
                                                <td  class="commodity">
                                                    <table class="table table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Commodities:</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td >
                                                                <p v-for="item in data.data">{{ item.commodity }}</p>
                                                            </td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
<!--                                            <tr class="data datafour">-->
<!--                                                <td class="godown">-->
<!--                                                    Godown-->
<!--                                                </td>-->
<!--                                            </tr>-->
<!--                                            <tr class="data datafour">-->
<!--                                                <td class="party-name godown-item">-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Vehicle Charges:</label>-->
<!--                                                        <p v-if="data.vehicle_expense">Rs {{ data.vehicle_expense }}</p>-->
<!--                                                        <p v-else="data.vehicle_expense">Rs 0</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data" v-for="item in typeExpenses">-->
<!--                                                        <label>{{ item.name }}:</label>-->
<!--                                                        <p>Rs {{ item.price }}</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Total Expenses :</label>-->
<!--                                                        <p>Rs {{ data.total_expenses }}</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Bag Type:</label>-->
<!--                                                        <p>Plastic</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Total Bill:</label>-->
<!--                                                        <p>Rs {{ data.total_bill }} </p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Net Total:</label>-->
<!--                                                        <p>Rs {{ data.net_bill }} </p>-->
<!--                                                    </div>-->

<!--                                                </td>-->
<!--                                            </tr>-->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="factory-copy receiving-copy">
                                    <div class="logo">
                                        <img src="media/ghalamandi/logo.png">
                                        <h4 class="company-name">
                                            Craveteck ({{data.type}} Gate Pass)
                                        </h4>
                                        <h5 class="company-address">
                                            House no#68, St no #2, Qasim Park, Phase 2
                                        </h5>
                                        <p>
                                            <span><b>Ph:</b>048-9875613 | 048-9875613 | 048-9875613</span>
                                        </p>
                                    </div>
                                    <div class="row" style="padding-right: 10px;">
                                        <div class="col-6">
                                            <h4 class="title">
                                                Receiving Copy
                                            </h4>
                                        </div>
                                        <div class="col-6 text-right">
                                        </div>
                                    </div>
                                    <div class="factory-data">
                                        <table>
                                            <tbody>
                                            <tr class="mb-4">
                                                <td class="barcode text-center" style="padding: 10px 0px 10px 0px;">
<!--                                                    <img src="media/ghalamandi/barcode.jpg">-->
                                                    <barcode height="40" width="1" v-bind:value="barcodeValue" format="CODE39"></barcode>
                                                </td>
                                            </tr>
                                            <tr class="data dataone">
                                                <td class="deal-no">
                                                    <p>Deal No #{{ data.du_id }}</p>
                                                </td>
                                            </tr>
                                            <tr class="data datatwo">
                                                <td class="issuance-date">
                                                    <label>Issuance Date:</label>
                                                    <p>{{ data.updated_at }}</p>
                                                </td>
                                            </tr>
                                            <tr class="data datatwo">
                                                <td  class="deal-date">
                                                    <label>Deal Date:</label>
                                                    <p>{{data.deal_date}}</p>
                                                </td>
                                            </tr>
                                            <tr class="data datathree">
                                                <td class="party-name">
                                                    <div class="party-data">
                                                        <label>Party Name:</label>
                                                        <p>{{ data.party_name_name }}</p>
                                                    </div>
                                                    <div class="party-data">
                                                        <label>Total Bags:</label>
                                                        <p>{{ data.total_bags }} Bags</p>
                                                    </div>
                                                    <div class="party-data">
                                                        <label>Bags Weight:</label>
                                                        <p>{{ data.total_weight_kgs }} kg</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="data datathree">
                                                <td  class="commodity">
                                                    <table class="table">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Commodities:</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td >
                                                                <p v-for="item in data.data">{{ item.commodity }}</p>
                                                            </td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
<!--                                            <tr class="data datafour">-->
<!--                                                <td class="godown">-->
<!--                                                    Godown-->
<!--                                                </td>-->
<!--                                            </tr>-->
<!--                                            <tr class="data datafour">-->
<!--                                                <td class="party-name godown-item">-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Vehicle Charges:</label>-->
<!--                                                        <p v-if="data.vehicle_expense">Rs {{ data.vehicle_expense }}</p>-->
<!--                                                        <p v-else="data.vehicle_expense">Rs 0</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data" v-for="item in typeExpenses">-->
<!--                                                        <label>{{ item.name }}:</label>-->
<!--                                                        <p>Rs {{ item.price }}</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Total Expenses :</label>-->
<!--                                                        <p>Rs {{ data.total_expenses }}</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Bag Type:</label>-->
<!--                                                        <p>Plastic</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Total Bill:</label>-->
<!--                                                        <p>Rs {{ data.total_bill }} </p>-->
<!--                                                    </div>-->
<!--                                                    <div class="party-data">-->
<!--                                                        <label>Net Total:</label>-->
<!--                                                        <p>Rs {{ data.net_bill }} </p>-->
<!--                                                    </div>-->

<!--                                                </td>-->
<!--                                            </tr>-->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
</template>

<script>

    import ApiService from "../../../core/services/api.service";
    import VueBarcode from 'vue-barcode';
    export default {
        data(){
            return{
                title: 'Purchase Gate Pass',
                data:[],
                typeExpenses:[],
                barcodeValue: '1829888812312',
                barcodeOptions:{
                    width: 1
                }
            }
        },
        components: {
            'barcode': VueBarcode
        },
            mounted() {
        },
        methods: {
            printInvoice: function() {
                window.print();
            },
            getInvoiceDataFromApi(){
                ApiService.get('/api/deal/fetch-gatepass',this.$route.params.id).then((res) => {
                    console.log('Fetch: ', res.data)
                    this.data = res.data;
                    this.typeExpenses = res.data.types;
                    // this.barcodeValue = res.data.barCode;

                });
            }
        },
        created() {
            this.getInvoiceDataFromApi();
        }
    }
</script>

<style scoped>
    @import './../../../../../../public/css/style.css';
    /*.dataone *, .datatwo *, .datathree *, .datafour * {*/
    /*    width: none !important;*/
    /*}*/
</style>
