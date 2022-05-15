<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [\App\Http\Controllers\Auth\AuthController::class,'login']);
    Route::post('logout', [\App\Http\Controllers\Auth\AuthController::class,'logout']);
    Route::post('refresh', [\App\Http\Controllers\Auth\AuthController::class,'refresh']);
    Route::post('me', [\App\Http\Controllers\Auth\AuthController::class,'me']);
    Route::post('verify', [\App\Http\Controllers\Auth\AuthController::class,'verify']);
});

Route::group(['prefix'=>'role'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\RoleController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\RoleController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\RoleController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\RoleController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\RoleController::class,'delete']);
});

Route::group(['prefix'=>'user'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\UserController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\UserController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\UserController::class,'edit']);
    Route::get('/fetch-role',[\App\Http\Controllers\Admin\UserController::class,'fetchRole']);
    Route::post('/update',[\App\Http\Controllers\Admin\UserController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\UserController::class,'delete']);
});

Route::group(['prefix'=>'customer'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\CustomerController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\CustomerController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\CustomerController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\CustomerController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\CustomerController::class,'delete']);
    Route::get('/fetch-accounts',[\App\Http\Controllers\Admin\CustomerController::class,'fetchAccounts']);
    Route::get('/fetch-sub-accounts',[\App\Http\Controllers\Admin\CustomerController::class,'fetchSubAccounts']);
});

Route::group(['prefix'=>'commodity'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\CommodityController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\CommodityController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\CommodityController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\CommodityController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\CommodityController::class,'delete']);
    Route::get('/fetch-parent-commodities',[\App\Http\Controllers\Admin\CommodityController::class,'fetchParentCommodities']);
    Route::get('/fetch-categories',[\App\Http\Controllers\Admin\CommodityController::class,'fetchCategories']);
    Route::get('/fetch-units',[\App\Http\Controllers\Admin\CommodityController::class,'fetchUnits']);
    Route::get('/fetch-bags',[\App\Http\Controllers\Admin\CommodityController::class,'fetchBags']);
    Route::get('/last',[\App\Http\Controllers\Admin\CommodityController::class,'last']);
});

Route::group(['prefix'=>'parent-commodity'],function(){
    Route::get('/fetch',[\App\Http\Controllers\Admin\ParentCommodityController::class,'fetch']);
});
Route::group(['prefix'=>'stock-report'],function(){
    Route::get('/fetch',[\App\Http\Controllers\Admin\StockReportController::class,'fetch']);
});

Route::group(['prefix'=>'category'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\CategoryController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\CategoryController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\CategoryController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\CategoryController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\CategoryController::class,'delete']);
    Route::get('/last',[\App\Http\Controllers\Admin\CategoryController::class,'last']);
});

Route::group(['prefix'=>'purchase-deal'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\DealController::class,'create']);
    Route::post('create-invoice',[\App\Http\Controllers\Admin\DealController::class,'createPurchaseInvoice']);
    Route::get('/fetch-purchase',[\App\Http\Controllers\Admin\DealController::class,'fetchPurchase']);
    Route::get('/show/{id}',[\App\Http\Controllers\Admin\DealController::class,'show']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\DealController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\DealController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\DealController::class,'delete']);
    Route::post('/delete-deal-commodity',[\App\Http\Controllers\Admin\DealController::class,'dealCommodityDelete']);
    Route::get('/fetch-parties',[\App\Http\Controllers\Admin\DealController::class,'fetchParty']);
    Route::get('/fetch-brokers',[\App\Http\Controllers\Admin\DealController::class,'fetchBroker']);
    Route::get('/fetch-units',[\App\Http\Controllers\Admin\DealController::class,'fetchUnit']);
    Route::get('/fetch-rate-units',[\App\Http\Controllers\Admin\DealController::class,'fetchRateUnit']);
    Route::get('/fetch-commodities',[\App\Http\Controllers\Admin\DealController::class,'fetchCommodity'])->name('fetch-commodities');
    Route::get('/fetch-templates',[\App\Http\Controllers\Admin\DealController::class,'fetchTemplate']);
    Route::get('/fetch-template-types/{id}',[\App\Http\Controllers\Admin\DealController::class,'fetchTemplateTypes']);
});

Route::group(['prefix'=>'sale-deal'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\DealController::class,'create']);
    Route::post('create-invoice',[\App\Http\Controllers\Admin\DealController::class,'createSaleInvoice']);
    Route::get('/fetch-sale',[\App\Http\Controllers\Admin\DealController::class,'fetchSale']);
    Route::get('/show/{id}',[\App\Http\Controllers\Admin\DealController::class,'show']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\DealController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\DealController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\DealController::class,'delete']);
    Route::post('/delete-deal-commodity',[\App\Http\Controllers\Admin\DealController::class,'dealCommodityDelete']);
    Route::get('/fetch-parties',[\App\Http\Controllers\Admin\DealController::class,'fetchParty']);
    Route::get('/fetch-brokers',[\App\Http\Controllers\Admin\DealController::class,'fetchBroker']);
    Route::get('/fetch-units',[\App\Http\Controllers\Admin\DealController::class,'fetchUnit']);
    Route::get('/fetch-commodities',[\App\Http\Controllers\Admin\DealController::class,'fetchCommodity'])->name('fetch-commodities');
    Route::get('/fetch-templates',[\App\Http\Controllers\Admin\DealController::class,'fetchTemplate']);
    Route::get('/fetch-template-types-sale/{id}',[\App\Http\Controllers\Admin\DealController::class,'fetchTemplateTypes']);

});

Route::group(['prefix'=>'deal'],function(){
   Route::get('/get-deal-commodities',[\App\Http\Controllers\Admin\DealController::class,'getDealCommodities']);
   Route::get('/get-select-purchase-deals',[\App\Http\Controllers\Admin\DealController::class,'getSelectPurchaseDeals']);
   Route::get('/get-select-sale-deals',[\App\Http\Controllers\Admin\DealController::class,'getSelectSaleDeals']);
    Route::get('/get-data/{id}',[\App\Http\Controllers\Admin\DealController::class,'getDuidData']);
    Route::post('/update-invoice/',[\App\Http\Controllers\Admin\DealController::class,'updateInvoice']);
    Route::get('/fetch-invoice/{id}',[\App\Http\Controllers\Admin\DealController::class,'getInvoiceData']);
    Route::get('/fetch-gatepass/{id}',[\App\Http\Controllers\Admin\DealController::class,'getGatePassData']);
    Route::get('/fetch-deal/{id}',[\App\Http\Controllers\Admin\DealController::class,'getDealData']);
    Route::get('/fetch-parties',[\App\Http\Controllers\Admin\DealController::class,'fetchParty']);
    Route::get('/fetch-brokers',[\App\Http\Controllers\Admin\DealController::class,'fetchBroker']);
    Route::get('/fetch-bags',[\App\Http\Controllers\Admin\DealController::class,'fetchBag']);
    Route::get('/fetch-deductions',[\App\Http\Controllers\Admin\DealController::class,'fetchDeduction']);
    Route::get('/fetch-deduction',[\App\Http\Controllers\Admin\DealController::class,'fetchDeductionData']);
    Route::get('/fetch-templates',[\App\Http\Controllers\Admin\DealController::class,'fetchTemplate']);
    Route::get('/last',[\App\Http\Controllers\Admin\DealController::class,'last']);
});

Route::group(['prefix'=>'expense'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\ExpenseController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\ExpenseController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\ExpenseController::class,'edit']);
    Route::get('/fetch-expense-head',[\App\Http\Controllers\Admin\ExpenseController::class,'fetchExpense']);
    Route::post('/update',[\App\Http\Controllers\Admin\ExpenseController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\ExpenseController::class,'delete']);
});

Route::group(['prefix'=>'journal-voucher'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\JournalVoucherController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\JournalVoucherController::class,'fetch']);
    Route::get('/fetch-accounts',[\App\Http\Controllers\Admin\JournalVoucherController::class,'fetchAccounts']);
    Route::get('/fetch-select-account',[\App\Http\Controllers\Admin\JournalVoucherController::class,'fetchSelectedAccount']);
    Route::get('/last',[\App\Http\Controllers\Admin\JournalVoucherController::class,'last']);
});

Route::group(['prefix'=>'debit-voucher'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\DebitVoucherController::class,'create']);
});

Route::group(['prefix'=>'expense-template'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\TemplateController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\TemplateController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\TemplateController::class,'edit']);
    Route::get('/fetch-expense-types/{id}',[\App\Http\Controllers\Admin\TemplateController::class,'fetchExpenseTypes']);
    Route::post('/update',[\App\Http\Controllers\Admin\TemplateController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\TemplateController::class,'delete']);
    Route::post('/delete-type',[\App\Http\Controllers\Admin\TemplateController::class,'deleteType']);
    Route::get('/last',[\App\Http\Controllers\Admin\TemplateController::class,'last']);
    Route::get('/fetch-expenses',[\App\Http\Controllers\Admin\TemplateController::class,'fetchExpenses']);
});

Route::group(['prefix'=>'deduction'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\DeductionController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\DeductionController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\DeductionController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\DeductionController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\DeductionController::class,'delete']);
});

Route::group(['prefix'=>'deduction-item'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\DeductionItemController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\DeductionItemController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\DeductionItemController::class,'edit']);
    Route::get('/fetch-deductions',[\App\Http\Controllers\Admin\DeductionItemController::class,'fetchDeductions']);
    Route::post('/update',[\App\Http\Controllers\Admin\DeductionItemController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\DeductionItemController::class,'delete']);
});

Route::group(['prefix'=>'expense-head'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\ExpenseHeadController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\ExpenseHeadController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\ExpenseHeadController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\ExpenseHeadController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\ExpenseHeadController::class,'delete']);
});

Route::group(['prefix'=>'unit'],function(){
   Route::post('create',[\App\Http\Controllers\Admin\UnitController::class,'create']);
   Route::get('/fetch',[\App\Http\Controllers\Admin\UnitController::class,'fetch']);
   Route::get('/edit/{id}',[\App\Http\Controllers\Admin\UnitController::class,'edit']);
   Route::post('/update',[\App\Http\Controllers\Admin\UnitController::class,'update']);
   Route::post('/delete',[\App\Http\Controllers\Admin\UnitController::class,'delete']);
});

Route::group(['prefix'=>'bag'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\BagController::class,'create']);
    Route::get('/fetch-select-bag',[\App\Http\Controllers\Admin\BagController::class,'fetchSelectBag']);
    Route::post('create-bag-sale-invoice',[\App\Http\Controllers\Admin\BagController::class,'createBagSaleInvoice']);
    Route::get('/fetch-buyers',[\App\Http\Controllers\Admin\BagController::class,'fetchCustomers']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\BagController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\BagController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\BagController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\BagController::class,'delete']);
    Route::get('/last',[\App\Http\Controllers\Admin\BagController::class,'last']);
});

Route::group(['prefix'=>'account-type'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\AccountTypeController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\AccountTypeController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\AccountTypeController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\AccountTypeController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\AccountTypeController::class,'delete']);
});

Route::group(['prefix'=>'lot'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\LotController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\LotController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\LotController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\LotController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\LotController::class,'delete']);
    Route::get('/last',[\App\Http\Controllers\Admin\LotController::class,'last']);
});

Route::group(['prefix'=>'stock'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\StockController::class,'create']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\StockController::class,'fetch']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\StockController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\StockController::class,'update']);
    Route::post('/delete',[\App\Http\Controllers\Admin\StockController::class,'delete']);
    Route::get('/fetch-units',[\App\Http\Controllers\Admin\StockController::class,'fetchUnit']);
    Route::get('/fetch-commodities',[\App\Http\Controllers\Admin\StockController::class,'fetchCommodity'])->name('fetch-commodities');
    Route::get('/fetch-lots',[\App\Http\Controllers\Admin\StockController::class,'fetchLot']);
    Route::get('/fetch-deals',[\App\Http\Controllers\Admin\StockController::class,'fetchDeal']);
});

Route::group(['prefix'=>'arrival'],function(){
    Route::post('create',[\App\Http\Controllers\Admin\ArrivalController::class,'create']);
    Route::get('/fetch-parties',[\App\Http\Controllers\Admin\ArrivalController::class,'fetchParty']);
    Route::get('/get-select-deals',[\App\Http\Controllers\Admin\ArrivalController::class,'getSelectDeals']);
    Route::get('/get-data/{id}',[\App\Http\Controllers\Admin\ArrivalController::class,'getDealData']);
    Route::get('/edit/{id}',[\App\Http\Controllers\Admin\ArrivalController::class,'edit']);
    Route::post('/update',[\App\Http\Controllers\Admin\ArrivalController::class,'update']);
    Route::get('/fetch',[\App\Http\Controllers\Admin\ArrivalController::class,'fetch']);
    Route::post('/delete',[\App\Http\Controllers\Admin\ArrivalController::class,'delete']);
    Route::get('/show/{id}',[\App\Http\Controllers\Admin\ArrivalController::class,'show']);
    Route::get('/fetch-arrival/{id}',[\App\Http\Controllers\Admin\ArrivalController::class,'getArrivalData']);
    Route::get('/fetch-invoice/{id}',[\App\Http\Controllers\Admin\ArrivalController::class,'getInvoiceData']);
    Route::get('/last',[\App\Http\Controllers\Admin\ArrivalController::class,'last']);
});


Route::group(['prefix'=>'chart-of-account'],function(){
    Route::get('/fetch',[\App\Http\Controllers\Admin\AccountController::class,'fetch']);
    Route::get('/last',[\App\Http\Controllers\Admin\AccountController::class,'last']);
    Route::post('/update',[\App\Http\Controllers\Admin\AccountController::class,'update']);
    Route::post('/store',[\App\Http\Controllers\Admin\AccountController::class,'store']);
    Route::get('/fetch-sub-account/{id}',[\App\Http\Controllers\Admin\AccountController::class,'fetchSubAccount']);
    Route::post('/delete',[\App\Http\Controllers\Admin\AccountController::class,'delete']);
});


Route::group(['prefix'=>'activity-log'],function(){
    Route::get('/fetch-arrivals',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchArrival']);
    Route::get('/fetch-arrival-types',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchArrivalType']);
    Route::get('/fetch-bags',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchBags']);
    Route::get('/fetch-categories',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchCategories']);
    Route::get('/fetch-commodities',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchCommodities']);
    Route::get('/fetch-customers',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchCustomers']);
    Route::get('/fetch-deals',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchDeals']);
    Route::get('/fetch-deal-commodities',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchDealCommodities']);
    Route::get('/fetch-deal-expenses',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchDealExpenses']);
    Route::get('/fetch-expenses',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchExpenses']);
    Route::get('/fetch-lots',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchLots']);
    Route::get('/fetch-templates',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchTemplates']);
    Route::get('/fetch-template-types',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchTemplateTypes']);
    Route::get('/fetch-units',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchUnits']);
    Route::get('/fetch-users',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchUsers']);
    Route::get('/fetch-parent-commodities',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchParentCommodities']);
    Route::get('/fetch-deductions',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchDeductions']);
    Route::get('/fetch-deduction-items',[\App\Http\Controllers\Admin\ActivityLogController::class,'fetchDeductionItems']);

    Route::post('/restore-arrival',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreArrival']);
    Route::post('/restore-arrival-type',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreArrivalType']);
    Route::post('/restore-bag',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreBag']);
    Route::post('/restore-category',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreCategory']);
    Route::post('/restore-commodity',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreCommodity']);
    Route::post('/restore-customer',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreCustomer']);
    Route::post('/restore-deal',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreDeal']);
    Route::post('/restore-deal-commodity',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreDealCommodity']);
    Route::post('/restore-deal-expense',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreDealExpense']);
    Route::post('/restore-expense',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreExpense']);
    Route::post('/restore-lot',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreLot']);
    Route::post('/restore-template',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreTemplate']);
    Route::post('/restore-template-type',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreTemplateType']);
    Route::post('/restore-unit',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreUnit']);
    Route::post('/restore-user',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreUser']);
    Route::post('/restore-parent-commodity',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreParentCommodity']);
    Route::post('/restore-deduction',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreDeduction']);
    Route::post('/restore-deduction-item',[\App\Http\Controllers\Admin\ActivityLogController::class,'restoreDeductionItem']);

    Route::post('/delete-arrival',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteArrival']);
    Route::post('/delete-arrival-type',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteArrivalType']);
    Route::post('/delete-bag',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteBag']);
    Route::post('/delete-category',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteCategory']);
    Route::post('/delete-commodity',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteCommodity']);
    Route::post('/delete-customer',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteCustomer']);
    Route::post('/delete-deal',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteDeal']);
    Route::post('/delete-deal-commodity',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteDealCommodity']);
    Route::post('/delete-deal-expense',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteDealExpense']);
    Route::post('/delete-expense',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteExpense']);
    Route::post('/delete-lot',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteLot']);
    Route::post('/delete-template',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteTemplate']);
    Route::post('/delete-template-type',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteTemplateType']);
    Route::post('/delete-unit',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteUnit']);
    Route::post('/delete-user',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteUser']);
    Route::post('/delete-parent-commodity',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteParentCommodity']);
    Route::post('/delete-deduction',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteDeduction']);
    Route::post('/delete-deduction-item',[\App\Http\Controllers\Admin\ActivityLogController::class,'deleteDeductionItem']);
});
