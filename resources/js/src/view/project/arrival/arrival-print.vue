<template>
    <div>
        <div class="main">
            <div class="">
                <div class="row p-2 border border-dark mx-1 bg-light head ">
                    <div class="col-4">
                        <div class="contact">
                            <div class="name ">وقار الظفر</div>
                            <div class="num" >0344-0000000</div>
                        </div>
                    </div>
                    <div class="col-3">
                    <span class="logo p-2 offset-2">
                        <img src="media/ghalamandi/logo.png" alt="main logo image" class="img-fluid">
                    </span>
                    </div>
                    <div class="col-4 text-right">
                        <p class="main_p">کریو ٹک</p>
                    </div>
                </div>
                <p class="text-center font-weight-bolder mt-2" style="font-size: 30px;">دال  مونگ ،دال  مسور،دال  چنا،دال  ماش  دھلی،چنے  سفید،چنے  سیاہ،چھلکا  مونگ  ماش</p>
                <!-- <div class="bg-dark mb-4 w-100 d-block" style="height: 5px;"></div> -->
            </div>
            <div class="d-flex justify-content-between">
                <p class="waight text-right position-relative"> <span class="position-absolute"
                                                                      style="top: -10px; left: 8%;"> {{ arrival }}</span>تاریخ  اجراء</p>
                <p class="waight text-right position-relative"> <span class="position-absolute"
                                                                      style="top: -10px; left: 12%;">{{ data.bilty_no }}</span> بلٹی  نمبر</p>
            </div>
            <div class="row px-3">
                <table class="table table-bordered table1">
                    <tr class="font-weight-bold tr">
                        <th class="py-3 th"> آمد کے وقت وزن</th>
                        <th class="py-3 th">لوڈ کے وقت وزن</th>
                        <th class="py-3 th">گاڑی کا خرچ</th>
                        <th class="py-3 th">گاڑی نمبر</th>
                        <th class="py-3 th">ڈرائیور کا فون نمبر</th>
                        <th class="py-3 th">ڈرائیور کا نام</th>
                    </tr>
                    <tr class="font-weight-bold tr">
                        <td class="py-4 td">{{ data.arrival_weight }} کلو</td>
                        <td class="py-4 td">{{ data.load_weight }} کلو</td>
                        <td class="py-4 td">{{ data.vehicle_freight }}</td>
                        <td class="py-4 td">{{ data.vehicle_no }}</td>
                        <td class="py-4 td">{{ data.driver_phone }}</td>
                        <td class="py-4 td">{{ data.driver_name }}</td>
                    </tr>
                </table>

            </div>
            <div class="d-flex justify-content-between">
                <p class="waight text-right position-relative"> <span class="position-absolute"
                                                                      style="top: -10px; left: 8%;">{{data.receiver_name }}</span> وصول کنندہ کا نام</p>
                <p class="waight text-right position-relative"> <span class="position-absolute"
                                                                      style="top: -10px; left: 12%;">{{ data.transporter_name }}</span> ٹرانسپورٹر کا نام</p>
                <p class="waight text-right position-relative "> <span class="position-absolute"
                                                                       style="top: -10px; left: 8%;">{{ supplier }}</span> سپلائر کا نام</p>

            </div>
            <div class="row mb-5">
                <div class="col-6">
                    <p class="waight position-relative"> <span class="position-absolute"
                                                               style="top: -10px; left: 8%;">{{ data.deduction_weight }} کلو</span>کٹوٹی  وزن</p>
                    <p class="waight position-relative" style="margin-top: -3%;"> <span class="position-absolute"
                                                                                        style="top: -10px; left: 8%;">{{ data.total_weight }} کلو</span> کُل وزن</p>
                    <p class="waight position-relative"> <span class="position-absolute"
                                                               style="top: -10px; left: 8%;">{{ data.net_weight }} کلو</span> میزان وزن</p>
                </div>
            </div>


            <div class="container-fluid pt-5">
                <div class="row border-top border-bottom pb-2 mb-2 mx-1 border-dark">
                    <div class="col-6 p-3  note">
                        <div class=" p-2 d-inline-block">
                            <span class="p-2 font-weight-bolder rounded-circle bg-dark text-white ml-2">نوٹ</span> دال ماش دھلی
                            اور دال مونگ دھلی کا کوئی کلیم نہیں

                        </div>
                        <div class=""> <span class="d-inline-block mt-2">048-xxxxxxx</span> آفس رابطہ نمبر</div>
                    </div>
                    <div class="col-6 text-center address  p-3">
                        <div class="">
                            <span class="p-2 font-weight-bolder rounded-circle bg-dark text-white ml-3">ایڈریس</span> قاسم
                            پارک فیز 2 مراد آباد کالونی سرگودھا
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <span class="print_by"> <i>Print By</i> <b>Admin</b></span>
                            <span class="date">07/07/2021</span>
                            <span class="time">11:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>

import ApiService from "../../../core/services/api.service";

export default {
    data() {
        return {
            title: 'Arrival Invoice',
            data: [],
            supplier: '',
            arrival: '',
        }
    },
    mounted() {
    },
    methods: {
        printInvoice: function () {
            window.print();
        },
        getInvoiceDataFromApi() {
            ApiService.get('/api/arrival/fetch-invoice', this.$route.params.id).then((res) => {
                this.data = res.data['data'];
                this.supplier = res.data['data']['customer']['name_urdu'];
                this.arrival = res.data['arrival_date'];
                // console.log('Data: ', res.data['arrival_date']);
            });
        }
    },
    created() {
        this.getInvoiceDataFromApi();
    }
}
</script>

<style scoped>
@import './../../../../../../public/css/arrival-style.css';
</style>
