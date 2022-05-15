<template>
    <div>
        <div class="container pt-4">
            <h1 class="text-center font-weight-bold "><u>INVOICE</u></h1>
            <h2 class="text-center font-weight-bold "><u>SELLER BILL</u></h2>
            <div class="row">
                <div class="float-left w-50">
                    <p class="font-weight-bold d-inline-block">Invoice # :</p>
                    <p class="pb-2 ml-2 px-4 font-weight-bolder border-bottom border-dark align-middle d-inline-block"
                       style="width: 150px;">{{ data.du_id }}</p>
                </div>
                <div class="float-right w-50 text-right ">
                    <p class="font-weight-bold d-inline-block ">Deal Date :</p>
                    <p class="pb-2 ml-2 px-4 font-weight-bolder border-bottom border-dark align-middle d-inline-block"
                       style="width: 150px;">{{ data.deal_date }}</p>
                </div>
            </div>
            <div class="row">
                <div class="float-left w-50">
                    <p class=" d-inline-block">Client Name :</p>
                    <p class="font-weight-bolder d-inline-block">{{ data.customer.name_urdu }}</p>
                </div>
                <div class="float-right w-50 text-right">
                    <p class=" d-inline-block">Delivery Date :</p>
                    <p class="font-weight-bolder d-inline-block text-center" style="width: 150px;">{{ data.delivery_date }}</p>
                </div>
                <table class="table table-bordered">
                    <tr class="text-center">
                        <th>#</th>
                        <th>Commodity</th>
                        <th>No Of Bags</th>
                        <th>Weight (kgs)</th>
                        <th>Rate</th>
                        <th>Rate Per KG</th>
                        <th>Gross Amount</th>
                    </tr>
                    <tr class="text-center" v-for="(item, index) in data.deal_commodities">
                        <td>{{ index+1 }}</td>
                        <td>{{ item.commodity.name }}</td>
                        <td>{{ item.total_weight_kgs/item.rate_unit }}</td>
                        <td>{{ item.total_weight_kgs }}</td>
                        <td>{{ item.rate }}</td>
                        <td>{{ parseFloat(item.rate/item.total_weight_kgs).toFixed(2) }}</td>
                        <td>{{ item.total_amount }}</td>
                    </tr>
                    <tr v-if="data.templates.length > 0">
                        <h5 class="text-center">Expenses</h5>
                    </tr>
                    <tr v-for="(exp, ind) in data.templates">

                        <td class="row ml-0">
                            <div class="col-8">
                                <span colspan="2" rowspan="4" class="font-weight-bold text-left">
                                    <span v-if="exp.deduction_type == 'cr'" class="my-1 d-inline-block">{{ exp.expense.name }} -</span>
                                    <span v-else class="my-1 d-inline-block">{{ exp.expense.name }} +</span>
                                    <br>
                                </span>
                            </div>
                            <div class="col-4">
                                <span rowspan="4" class="font-weight-bold text-center">
                                    <span class="my-1 d-inline-block">{{ exp.expense.price }}</span>
                                    <br>
                                </span>
                            </div>
                        </td>
                    </tr>

                    <tr v-if="data.deductions.length > 0">
                        <h5 class="text-center">Deductions</h5>
                    </tr>
                    <tr v-for="(v, i) in data.deductions">
                        <td class="row ml-0">
                            <div class="col-8">
                                <span colspan="2" rowspan="4" class="font-weight-bold text-left">
                                    <span class="my-1 d-inline-block">{{ v.deduct.name }} -</span>
                                    <br>
                                </span>
                            </div>
                            <div class="col-4">
                                <span rowspan="4" class="font-weight-bold text-center">
                                    <span class="my-1 d-inline-block">{{ v.deduction }}</span>
                                    <br>
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td colspan="3" class="">
                            <span class="font-weight-bold">Total Amount</span>
                            <span class="float-right mr-2 font-weight-bolder">{{ data.total_amount }}</span>
                        </td>
                    </tr>
                    <tr>
<!--                        <td colspan="5" class=""></td>-->
                        <td colspan="3" class="">
                            <span class="font-weight-bold">Net Amount</span>
                            <span class="float-right mr-2 font-weight-bolder">{{ data.net_amount }}</span>
                        </td>
                    </tr>

                </table>
            </div>
            <div class="row">
                <div class="w-50">
                    <h3 class="pt-3 mt-5 px-2 text-center border-top border-dark font-weight-bolder d-inline-block">Checked
                        By</h3>
                </div>
                <div class="w-50 text-right">
                    <h3 class="pt-3 mt-5 px-2 text-center border-top border-dark font-weight-bolder d-inline-block">
                        Signature</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiService from "../../../core/services/api.service";

    export default {
        data(){
            return{
                title: 'Purchase Invoice',
                data:[],
                typeExpenses:[]
            }
        },
        mounted() {
        },
        methods: {
            getInvoiceDataFromApi(){
                ApiService.get('/api/deal/fetch-invoice',this.$route.params.id).then((res) => {
                    this.data = res.data;
                    console.log('Fetched Data: ', this.data);

                });
            },
            subtotal() {
                var subTotal = 0;
                $.each(this.data.deal_commodities, (index, value) => {
                    console.log('Calculations Sub Total: ', index, value)
                    subTotal += value.total_amount;
                });

                return subTotal;
            },
            netTotal() {
                var subTotal = 0;
                var netTotal = 0;
                var totalExpenseMinus = 0;
                var totalExpensePlus = 0;
                $.each(this.data.deal_commodities, (index, value) => {
                    subTotal += value.total_amount;
                });

                if(this.data.templates.length > 0) {
                    $.each(this.data.templates, (index, value) => {
                        if(value.deduction_type == 'cr') {
                            totalExpenseMinus += this.data.templates[index].amount;
                        } else if(value.deduction_type == 'dr') {
                            totalExpensePlus += this.data.templates[index].amount;
                        }
                    });
                }
                console.log('Calculations: ', totalExpenseMinus, totalExpensePlus);

                netTotal = subTotal - totalExpenseMinus + totalExpensePlus

                return netTotal;
            },
        },
        created() {
            this.getInvoiceDataFromApi();
        }
    }
</script>

<style scoped>

    @import './../../../../../../public/css/style.css';

</style>
