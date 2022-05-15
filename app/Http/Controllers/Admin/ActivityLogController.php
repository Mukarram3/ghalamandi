<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Arrival;
use App\Models\ArrivalType;
use App\Models\Bag;
use App\Models\Category;
use App\Models\Commodity;
use App\Models\Customer;
use App\Models\Deal;
use App\Models\DealCommodity;
use App\Models\DealExpense;
use App\Models\Deduction;
use App\Models\DeductionItems;
use App\Models\Expense;
use App\Models\Lot;
use App\Models\ParentCommodity;
use App\Models\Template;
use App\Models\TemplateType;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Http\Request;

class ActivityLogController extends Controller
{
    public function fetchArrival(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $arrivals = Arrival::onlyTrashed()->paginate($per_page);
        return response()->json($arrivals);
    }
    public function fetchArrivalType(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $arrivaltypes = ArrivalType::onlyTrashed()->paginate($per_page);
        return response()->json($arrivaltypes);
    }
    public function fetchBags(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $bags = Bag::onlyTrashed()->paginate($per_page);
        return response()->json($bags);
    }
    public function fetchCategories(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $categories = Category::onlyTrashed()->paginate($per_page);
        return response()->json($categories);
    }
    public function fetchCommodities(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $commodities = Commodity::onlyTrashed()->paginate($per_page);
        return response()->json($commodities);
    }
    public function fetchCustomers(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $customers = Customer::onlyTrashed()->paginate($per_page);
        return response()->json($customers);
    }
    public function fetchDeals(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $deals = Deal::onlyTrashed()->paginate($per_page);
        return response()->json($deals);
    }
    public function fetchDealCommodities(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $dealCommodities = DealCommodity::onlyTrashed()->paginate($per_page);
        return response()->json($dealCommodities);
    }
    public function fetchDealExpenses(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $dealExpenses = DealExpense::onlyTrashed()->paginate($per_page);
        return response()->json($dealExpenses);
    }
    public function fetchExpenses(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $expenses = Expense::onlyTrashed()->paginate($per_page);
        return response()->json($expenses);
    }
    public function fetchLots(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $lots = Lot::onlyTrashed()->paginate($per_page);
        return response()->json($lots);
    }
    public function fetchTemplates(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $templates = Template::onlyTrashed()->paginate($per_page);
        return response()->json($templates);
    }
    public function fetchTemplateTypes(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $templateTypes = TemplateType::onlyTrashed()->paginate($per_page);
        return response()->json($templateTypes);
    }
    public function fetchUnits(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $units = Unit::onlyTrashed()->paginate($per_page);
        return response()->json($units);
    }
    public function fetchUsers(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $users = User::onlyTrashed()->paginate($per_page);
        return response()->json($users);
    }
    public function fetchParentCommodities(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $items = Commodity::where('parent_id', null)->onlyTrashed()->paginate($per_page);
        return response()->json($items);
    }
    public function fetchDeductions(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $items = Deduction::onlyTrashed()->paginate($per_page);
        return response()->json($items);
    }
    public function fetchDeductionItems(Request $request)
    {
        $per_page = trim($request->per_page,"/");
        $items = DeductionItems::onlyTrashed()->paginate($per_page);
        return response()->json($items);
    }


    public function restoreParentCommodity(Request $request)
    {
        $item = Commodity::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreArrival(Request $request)
    {
        $item = Arrival::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreArrivalType(Request $request)
    {
        $item = ArrivalType::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreBag(Request $request)
    {
        $item = Bag::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreCategory(Request $request)
    {
        $item = Category::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreCommodity(Request $request)
    {
        $item = Commodity::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreCustomer(Request $request)
    {
        $item = Customer::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreDeal(Request $request)
    {
        $item = Deal::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreDealCommodity(Request $request)
    {
        $item = DealCommodity::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreDealExpense(Request $request)
    {
        $item = DealExpense::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreExpense(Request $request)
    {
        $item = Expense::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreLot(Request $request)
    {
        $item = Lot::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreTemplate(Request $request)
    {
        $item = Template::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreTemplateType(Request $request)
    {
        $item = TemplateType::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreUnit(Request $request)
    {
        $item = Unit::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreUser(Request $request)
    {
        $item = User::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreDeduction(Request $request)
    {
        $item = Deduction::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }
    public function restoreDeductionItem(Request $request)
    {
        $item = DeductionItems::withTrashed()->find($request->id);
        if ($item) {
            $item->restore();
            return response(['type' => 'success', 'message' => 'Record Restored successfully...']);
        }
    }

    public function deleteArrival(Request $request)
    {
//        dd($request->all());
        $item = Arrival::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteArrivalType(Request $request)
    {
        $item = ArrivalType::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteBag(Request $request)
    {
        $item = Bag::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteCategory(Request $request)
    {
        $item = Category::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteCommodity(Request $request)
    {
        $item = Commodity::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteCustomer(Request $request)
    {
        $item = Customer::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteDeal(Request $request)
    {
        $item = Deal::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteDealCommodity(Request $request)
    {
        $item = DealCommodity::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteDealExpense(Request $request)
    {
        $item = DealExpense::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteExpense(Request $request)
    {
        $item = Expense::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteLot(Request $request)
    {
        $item = Lot::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteTemplate(Request $request)
    {
        $item = Template::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteTemplateType(Request $request)
    {
        $item = TemplateType::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteUnit(Request $request)
    {
        $item = Unit::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteUser(Request $request)
    {
        $item = User::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteParentCommodity(Request $request)
    {
        $item = Commodity::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteDeduction(Request $request)
    {
        $item = Deduction::withTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
    public function deleteDeductionItem(Request $request)
    {
        $item = DeductionItems::onlyTrashed()->find($request->id);
        if ($item) {
            $item->forceDelete();
            return response(['type' => 'success', 'message' => 'Record Deleted successfully...']);
        }
    }
}
