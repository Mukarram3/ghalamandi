Vue.component('invoice-generate', {
    template: '<div>    <div class="main">' +
        '        <div class="office-copy">' +
        '            <div class="logo">' +
        '                <img src="../../../../../../public/media/ghalamandi/logo.png">' +
        '                <h4 class="company-name">' +
        '                    Craveteck' +
        '                </h4>' +
        '                <h5 class="company-address">' +
        '                    House no#68, St no #2, Qasim Park, Phase 2' +
        '                </h5>' +
        '                <p>' +
        '                    <span><b>Ph:</b>048-9875613 | 048-9875613 | 048-9875613</span>' +
        '                </p>' +
        '            </div>' +
        '            <h4 class="title">' +
        '                Office Copy' +
        '            </h4>' +
        '            <div class="office-data">' +
        '                <table>' +
        '                    <tbody>' +
        '                    <tr class="data dataone">' +
        '                        <td class="barcode">' +
        '                            <label>Bar Code</label>' +
        '                            <img src="../../../../../../public/media/ghalamandi/barcode.jpg">' +
        '                        </td>' +
        '                        <td class="deal-no">' +
        '                            <label>Sr.No:</label>' +
        '                            <p>Deal No #0716461</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datatwo">' +
        '                        <td class="issuance-date">' +
        '                            <label>Issuance Date:</label>' +
        '                            <p>15/06/2021</p>' +
        '                        </td>' +
        '                        <td  class="deal-date">' +
        '                            <label>Deal Date:</label>' +
        '                            <p> 13/06/2021</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datathree">' +
        '                        <td class="party-name">' +
        '                            <div class="party-data">' +
        '                                <label>Party Name:</label>' +
        '                                <p>وقار الظفر</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Total Bags:</label>' +
        '                                <p>280 Bags</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Bags Weight:</label>' +
        '                                <p>1400 kg</p>' +
        '                            </div>' +
        '' +
        '                        </td>' +
        '                        <td  class="commodity">' +
        '                            <table class="table table-bordered">' +
        '                                <thead>' +
        '                                <tr>' +
        '                                    <th scope="col">Commodity:</th>' +
        '                                    <th scope="col">Crop :</th>' +
        '                                    <th scope="col">Rate:</th>' +
        '                                </tr>' +
        '                                </thead>' +
        '                                <tbody>' +
        '                                <tr>' +
        '                                    <td>' +
        '                                        <p>Massor Breek</p>' +
        '                                        <p>Massor Mothi</p>' +
        '                                        <p>Mongi Bareek</p>' +
        '                                        <p>Mongi Bareek</p>' +
        '                                    </td>' +
        '                                    <td >' +
        '                                        <p>Massor</p>' +
        '                                        <p>Kara Mongi</p>' +
        '                                        <p>Kara Massor</p>' +
        '                                        <p>Daal Channa</p>' +
        '                                    </td>' +
        '                                    <td >' +
        '                                        <p>3400</p>' +
        '                                        <p>4000</p>' +
        '                                        <p>3000</p>' +
        '                                        <p>5400</p>' +
        '                                    </td>' +
        '                                </tr>' +
        '' +
        '                                </tbody>' +
        '                            </table>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datafour">' +
        '                        <td class="godown">' +
        '                            Godown' +
        '                        </td>' +
        '' +
        '                        <td class="party-name godown-item">' +
        '                            <div class="party-data">' +
        '                                <label>Vehicle Charges:</label>' +
        '                                <p>Rs 22,540</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Labour Charges:</label>' +
        '                                <p>Rs 1400</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Mansihian:</label>' +
        '                                <p>Rs 400</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Expenses :</label>' +
        '                                <p>Rs 24100</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Bag Type:</label>' +
        '                                <p>Plastic</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Total Bill:</label>' +
        '                                <p>Rs 1,900,080 </p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Net Total:</label>' +
        '                                <p>Rs 1,873,980 </p>' +
        '                            </div>' +
        '' +
        '                        </td>' +
        '                    </tr>' +
        '                    </tbody>' +
        '                </table>' +
        '            </div>' +
        '        </div>' +
        '        <div class="factory-copy">' +
        '            <div class="logo">' +
        '                <h4 class="company-name">' +
        '                    Craveteck' +
        '                </h4>' +
        '                <h5 class="company-address">' +
        '                    House no#68, St no #2, Qasim Park, Phase 2' +
        '                </h5>' +
        '                <p>' +
        '                    <span><b>Ph:</b>048-9875613 | 048-9875613 | 048-9875613</span>' +
        '                </p>' +
        '            </div>' +
        '            <h4 class="title">' +
        '                Factory Copy' +
        '            </h4>' +
        '            <div class="factory-data">' +
        '                <table>' +
        '                    <tbody>' +
        '                    <tr class="data dataone">' +
        '                        <td class="barcode">' +
        '                            <label>Bar Code</label>' +
        '                            <img src="../../../../../../public/media/ghalamandi/barcode.jpg">' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data dataone">' +
        '                        <td class="deal-no">' +
        '                            <label>Sr.No:</label>' +
        '                            <p>Deal No #0716461</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datatwo">' +
        '                        <td class="issuance-date">' +
        '                            <label>Issuance Date:</label>' +
        '                            <p>15/06/2021</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datatwo">' +
        '                        <td  class="deal-date">' +
        '                            <label>Deal Date:</label>' +
        '                            <p> 13/06/2021</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datathree">' +
        '                        <td class="party-name">' +
        '                            <div class="party-data">' +
        '                                <label>Party Name:</label>' +
        '                                <p>وقار الظفر</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Total Bags:</label>' +
        '                                <p>280 Bags</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Bags Weight:</label>' +
        '                                <p>1400 kg</p>' +
        '                            </div>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datathree">' +
        '                        <td  class="commodity">' +
        '                            <table class="table table-bordered">' +
        '                                <thead>' +
        '                                <tr>' +
        '                                    <th scope="col">Commodity:</th>' +
        '                                    <th scope="col">Crop :</th>' +
        '                                    <th scope="col">Rate:</th>' +
        '                                </tr>' +
        '                                </thead>' +
        '                                <tbody>' +
        '                                <tr>' +
        '                                    <td >' +
        '                                        <p>Massor Breek</p>' +
        '                                        <p>Massor Mothi</p>' +
        '                                        <p>Mongi Bareek</p>' +
        '                                        <p>Mongi Bareek</p>' +
        '                                    </td>' +
        '                                    <td class="crop_title">' +
        '                                        <p>Massor</p>' +
        '                                        <p>Kara Mongi</p>' +
        '                                        <p>Kara Massor</p>' +
        '                                        <p>Daal Channa</p>' +
        '                                    </td>' +
        '                                    <td class="price">' +
        '                                        <p>3400</p>' +
        '                                        <p>4000</p>' +
        '                                        <p>3000</p>' +
        '                                        <p>5400</p>' +
        '                                    </td>' +
        '                                </tr>' +
        '' +
        '                                </tbody>' +
        '                            </table>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datafour">' +
        '                        <td class="godown">' +
        '                            Godown' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datafour">' +
        '                        <td class="party-name godown-item">' +
        '                            <div class="party-data">' +
        '                                <label>Vehicle Charges:</label>' +
        '                                <p>Rs 22,540</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Labour Charges:</label>' +
        '                                <p>Rs 1400</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Mansihian:</label>' +
        '                                <p>Rs 400</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Expenses :</label>' +
        '                                <p>Rs 24100</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Bag Type:</label>' +
        '                                <p>Plastic</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Total Bill:</label>' +
        '                                <p>Rs 1,900,080 </p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Net Total:</label>' +
        '                                <p>Rs 1,873,980 </p>' +
        '                            </div>' +
        '' +
        '                        </td>' +
        '                    </tr>' +
        '                    </tbody>' +
        '                </table>' +
        '            </div>' +
        '        </div>' +
        '        <div class="factory-copy receiving-copy">' +
        '            <div class="logo">' +
        '                <h4 class="company-name">' +
        '                    Craveteck' +
        '                </h4>' +
        '                <h5 class="company-address">' +
        '                    House no#68, St no #2, Qasim Park, Phase 2' +
        '                </h5>' +
        '                <p>' +
        '                    <span><b>Ph:</b>048-9875613 | 048-9875613 | 048-9875613</span>' +
        '                </p>' +
        '            </div>' +
        '            <h4 class="title">' +
        '                Receiving Copy' +
        '            </h4>' +
        '            <div class="factory-data">' +
        '                <table>' +
        '                    <tbody>' +
        '                    <tr class="data dataone">' +
        '                        <td class="barcode">' +
        '                            <label>Bar Code</label>' +
        '                            <img src="../../../../../../public/media/ghalamandi/barcode.jpg">' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data dataone">' +
        '                        <td class="deal-no">' +
        '                            <label>Sr.No:</label>' +
        '                            <p>Deal No #0716461</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datatwo">' +
        '                        <td class="issuance-date">' +
        '                            <label>Issuance Date:</label>' +
        '                            <p>15/06/2021</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datatwo">' +
        '                        <td  class="deal-date">' +
        '                            <label>Deal Date:</label>' +
        '                            <p> 13/06/2021</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datathree">' +
        '                        <td class="party-name">' +
        '                            <div class="party-data">' +
        '                                <label>Party Name:</label>' +
        '                                <p>وقار الظفر</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Total Bags:</label>' +
        '                                <p>280 Bags</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Bags Weight:</label>' +
        '                                <p>1400 kg</p>' +
        '                            </div>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datathree">' +
        '                        <td  class="commodity">' +
        '                            <table class="table table-bordered">' +
        '                                <thead>' +
        '                                <tr>' +
        '                                    <th scope="col">Commodity:</th>' +
        '                                    <th scope="col">Crop :</th>' +
        '                                    <th scope="col">Rate:</th>' +
        '                                </tr>' +
        '                                </thead>' +
        '                                <tbody>' +
        '                                <tr>' +
        '                                    <td >' +
        '                                        <p>Massor Breek</p>' +
        '                                        <p>Massor Mothi</p>' +
        '                                        <p>Mongi Bareek</p>' +
        '                                        <p>Mongi Bareek</p>' +
        '                                    </td>' +
        '                                    <td class="crop_title">' +
        '                                        <p>Massor</p>' +
        '                                        <p>Kara Mongi</p>' +
        '                                        <p>Kara Massor</p>' +
        '                                        <p>Daal Channa</p>' +
        '                                    </td>' +
        '                                    <td class="price">' +
        '                                        <p>3400</p>' +
        '                                        <p>4000</p>' +
        '                                        <p>3000</p>' +
        '                                        <p>5400</p>' +
        '                                    </td>' +
        '                                </tr>' +
        '' +
        '                                </tbody>' +
        '                            </table>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datafour">' +
        '                        <td class="godown">' +
        '                            Godown' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr class="data datafour">' +
        '                        <td class="party-name godown-item">' +
        '                            <div class="party-data">' +
        '                                <label>Vehicle Charges:</label>' +
        '                                <p>Rs 22,540</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Labour Charges:</label>' +
        '                                <p>Rs 1400</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Mansihian:</label>' +
        '                                <p>Rs 400</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Expenses :</label>' +
        '                                <p>Rs 24100</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Bag Type:</label>' +
        '                                <p>Plastic</p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Total Bill:</label>' +
        '                                <p>Rs 1,900,080 </p>' +
        '                            </div>' +
        '                            <div class="party-data">' +
        '                                <label>Net Total:</label>' +
        '                                <p>Rs 1,873,980 </p>' +
        '                            </div>' +
        '' +
        '                        </td>' +
        '                    </tr>' +
        '                    </tbody>' +
        '                </table>' +
        '            </div>' +
        '        </div>' +
        '    </div></div>'
});

var vm = new Vue({
    el: '#invoice'
});

