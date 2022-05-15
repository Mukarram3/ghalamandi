<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Arrival;
use App\Models\Bag;
use App\Models\Commodity;
use App\Models\Customer;
use App\Models\Deal;
use App\Models\DealCommodity;
use App\Models\DealDeduction;
use App\Models\DealExpense;
use App\Models\Deduction;
use App\Models\DeductionItems;
use App\Models\Expense;
use App\Models\ExpenseVal;
use App\Models\Template;
use App\Models\TemplateType;
use App\Models\Unit;
use App\Models\UnitStock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DealController extends Controller
{
    public function last()
    {
        $last = Deal::latest()->first();
        if ($last) {
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }

    public function create(Request $request)
    {
//        dd($request->all());
        $this->validate($request, [
            'du_id' => 'required|numeric',
            'customer_id' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $deal = Deal::create([
                'user_id' => Auth::user()->id,
                'du_id' => $request->du_id,
                'customer_id' => $request->customer_id,
                'broker_id' => $request->broker_id,
                'deal_date' => isset($request->deal_date) ? $request->deal_date : now(),
                'delivery_date' => $request->delivery_date,
                'desc' => $request->desc,
                'type' => $request->type,
            ]);

            if ($request->desserts2) {
                foreach ($request->desserts2 as $item) {
                    $item = (object)$item;

                    DealCommodity::create([
                        'deal_id' => $deal->id,
                        'commodity_id' => $item->id,
                        'qty' => $item->quantity,
                        'weight_per_bag' => $item->weight_per_bag,
                        'rate' => $item->rate,
                        'rate_unit' => $item->rate_unit,
                        'total_weight_kgs' => $item->total_weight_kgs,
                        'total_weight' => $item->total_weight,
                        'total_amount' => $item->total_amount,
                    ]);
                }
            }

            DB::commit();
            return response(['type' => 'success', 'message' => 'Deal created successfully....']);
        } catch (\PDOException $e) {
            DB::rollBack();
            return response(['type' => 'error', 'message' => 'Error While Saving Transactions...']);
        }
    }

    public function edit($id)
    {
        $item = Deal::find($id);
        $deal = [];

        $deal['form'] = $item;

        if ($item->deal_commodities) {
            foreach ($item->deal_commodities as $k => $row) {
                $commodity = $row->commodity_id;
                if ($row->commodity) {
                    $commodity = $row->commodity;
                    $commodity = $commodity->name;
                }

                $deal['data'][$k]['deal_commodity_id'] = $row->id;
                $deal['data'][$k]['id'] = $row->commodity_id;
                $deal['data'][$k]['deal_id'] = $row->deal_id;
                $deal['data'][$k]['commodity'] = $commodity;
                $deal['data'][$k]['quantity'] = $row->qty;
                $deal['data'][$k]['weight_per_bag'] = $row->weight_per_bag;
                $deal['data'][$k]['rate_unit'] = $row->rate_unit;
                $deal['data'][$k]['rate'] = $row->rate;
                $deal['data'][$k]['total_weight'] = $row->total_weight;
                $deal['data'][$k]['total_weight_kgs'] = $row->total_weight_kgs;
                $deal['data'][$k]['total_amount'] = $row->total_amount;
                $deal['data'][$k]['row'] = $k + 1;
            }
        }

        return response()->json($deal);
    }

    public function update(Request $request)
    {
//        dd($request->all());
        $this->validate($request, [
            'du_id' => 'required|numeric',
            'customer_id' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $deal = Deal::where('du_id', $request->du_id)->first();

            $deal->update([
                'user_id' => Auth::user()->id,
                'du_id' => $request->du_id,
                'customer_id' => $request->customer_id,
                'broker_id' => $request->broker_id,
                'deal_date' => isset($request->deal_date) ? $request->deal_date : now(),
                'delivery_date' => $request->delivery_date,
                'desc' => $request->desc,
                'type' => $request->type,
            ]);

            if ($request->desserts2) {
                if ($deal->deal_commodities) {
                    foreach ($deal->deal_commodities as $item) {
                        $item->forceDelete();
                    }
                }
                foreach ($request->desserts2 as $item) {
                    $item = (object)$item;

                    DealCommodity::create([
                        'deal_id' => $deal->id,
                        'commodity_id' => $item->id,
                        'qty' => $item->quantity,
                        'weight_per_bag' => $item->weight_per_bag,
                        'rate' => $item->rate,
                        'rate_unit' => $item->rate_unit,
                        'total_weight_kgs' => $item->total_weight_kgs,
                        'total_weight' => $item->total_weight,
                        'total_amount' => $item->total_amount,
                    ]);
                }
            }

            DB::commit();
            return response(['type' => 'success', 'message' => 'Deal updated successfully...']);

        } catch (\PDOException $e) {
            DB::rollBack();
            return response(['type' => 'error', 'message' => 'Error While Saving Transactions...']);
        }
    }

    public function updateInvoice(Request $request)
    {
//        dd($request->all(), $request->commodities);
        $this->validate($request, [
            'du_id' => 'required|numeric',
            'customer_id' => 'required',
        ]);

        $bag_weight = 0;
        $bag_price = 0;

        $barCode = substr(str_shuffle("ABCDEF0123456789"), 0, 13);

        try {
            DB::beginTransaction();
            $deal = Deal::where('id', $request->du_id)->first();

            if ($request->type == 'Purchase') {
                foreach ($deal->deal_commodities as $item) {
                $unit = Unit::where('kgs', $item->weight_per_bag)->first();
                $commodity = Commodity::find($item->commodity_id);
                    $commodity->update([
                        'stock' => $commodity->stock + $item->total_weight_kgs,
                    ]);
                    UnitStock::create([
                        'commodity_id' => $item->commodity_id,
                        'unit_id' => $unit->id,
                        'unit_kgs' => $item->weight_per_bag,
                        'qty' => $item->qty,
                        'amount' => $item->total_amount,
                    ]);
                }
            }

            if ($request->type == 'Sale') {
                foreach ($deal->deal_commodities as $item) {
//                    $unit = Unit::where('kgs', $item->weight_per_bag)->first();
                    $commodity = Commodity::find($item->commodity_id);
                    $commodity->update([
                        'stock' => $commodity->stock - $item->total_weight_kgs,
                    ]);
//                    UnitStock::create([
//                        'commodity_id' => $item->commodity_id,
//                        'unit_id' => $unit->id,
//                        'unit_kgs' => $item->weight_per_bag,
//                        'qty' => $item->qty,
//                        'amount' => $item->total_amount,
//                    ]);
                }
            }

            if ($request->bag_id) {
                $bag = Bag::find($request->bag_id);
                $bag_weight = $bag->weight;
                $bag_price = $bag->price;
            }

            if ($request->types) {
                if (count($deal->templates) > 0) {
                    foreach ($deal->templates as $item) {
                        $item->forceDelete();
                    }
                }
                foreach ($request->types as $k => $item) {
                    DealExpense::create([
                        'deal_id' => $deal->id,
                        'expense_id' => $item['id'],
                        'type' => $item['payment_type'],
                        'amount' => $item['price'],
                        'transaction_status' => isset($item['expense_status']) ? $item['expense_status'] : 'cr',
                    ]);
                }
            }

            if ($request->deductions) {
                if (count($deal->deductions) > 0) {
                    foreach ($deal->deductions as $item) {
                        $item->forceDelete();
                    }
                }
                foreach ($request->deductions as $key => $item) {
                    foreach ($item['items'] as $k => $row) {
                        DealDeduction::create([
                            'deal_id' => $deal->id,
                            'commodity_id' => $item['id'],
                            'deduction_id' => $row['deduction_id'],
                            'deduction_type' => $row['type'],
                            'deduction' => $row['def_value'],
                        ]);
                    }
                }
            }

            $deal->update([
                'customer_id' => $request->party_id ? $request->party_id : $deal->customer_id,
                'broker_id' => $request->broker_id ? $request->broker_id : $deal->broker_id,
                'brokerage' => isset($request->brokerage) ? $request->brokerage : 0,
                'local_vehicle_freight' => $request->local_vehicle_freight,
                'invoice_id' => $request->du_id,
                'deal_date' => $request->deal_date,
                'delivery_date' => $request->delivery_date,
                'type' => $request->type,
                'status' => $request->status,
                'bag_weight' => $bag_weight,
                'bag_price' => $bag_price,
                'barCode' => $barCode,
                'deduction_weight' => $request->deduction_weight,
                'deduction_amount' => $request->deduction_amount,
                'expense_amount' => $request->expense_amount,
                'total_weight' => $request->gross_weight,
                'total_amount' => $request->gross_amount,
                'net_weight' => $request->net_weight,
                'net_amount' => $request->net_amount,
            ]);

            DB::commit();
            return response(['type' => 'success', 'message' => 'Invoice Updated successfully....', 'id' => $deal->id]);
        } catch (\PDOException $e) {

            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function fetchUnit()
    {
        $units = Unit::select('name as text','kgs as id','is_default')->get();
        return response()->json($units);
    }

    public function fetchCommodity(Request $request)
    {
        $commodities = Commodity::where('name', 'LIKE', '%' . $request->q . '%')->get();
        return response()->json(['items' => $commodities]);
    }

    public function fetchParty()
    {
        $party = Customer::select('id','name as text')
            ->where('type', 'Customer')->orWhere('type', 'Supplier')->get();

        return response()->json($party);
    }

    public function fetchBroker()
    {
        $brokers = Customer::select('id','name as text')
            ->where('type', 'Broker')->get();
        return response()->json($brokers);
    }

    public function fetchBag()
    {
        $bags = Bag::select('id','name as text')->get();
        return response()->json($bags);
    }

    public function fetchDeduction(Request $request)
    {
        $name = trim($request->name, "/");
        $item = Deduction::where('name', $name)->first();
        $items = [];
        if ($item->deductions) {
            $items = $item->deductions;
        }

        return response()->json($items);
    }

    public function fetchTemplate()
    {
        $templates = Template::all();

        return response()->json($templates);
    }
    public function fetchDeductionData()
    {
        $deductions = Deduction::all();

        return response()->json($deductions);
    }

    public function fetchTemplateTypes($id)
    {
        $items = TemplateType::where('temp_id', $id)->get();
        $data = [];
        foreach ($items as $k => $row) {
            $expense = Expense::find($row->expense_id);
            $data[$k] = $expense;
        }
        return response()->json($data);
    }

    public function fetch(Request $request)
    {
        $per_page = trim($request->per_page, "/");
        $arrivals = Arrival::paginate($per_page);
        return response()->json($arrivals);
    }

    public function fetchPurchase(Request $request)
    {
        $per_page = trim($request->per_page, "/");
        $deals = Deal::with('user')->where('type', 'Purchase')->paginate($per_page);
        $deal = [];
        $deal['pagination'] = $deals;
        foreach ($deals as $key => $item) {
            $customer1 = Customer::find($item->customer_id);

            if ($customer1) {
                $customer = $customer1->name;
            } else {
                $customer = 'None';
            }

            $broker1 = Customer::find($item->broker_id);
            $broker = 'None';
            if ($broker1) {
                $broker = $broker1->name;
            }

            $deal['data'][$key]['id'] = $item->id;
            $deal['data'][$key]['du_id'] = $item->du_id;
            $deal['data'][$key]['customer_id'] = $item->customer_id;
            $deal['data'][$key]['broker_id'] = $item->broker_id;
            $deal['data'][$key]['broker'] = $broker;
            $deal['data'][$key]['party_name'] = $customer;
            $deal['data'][$key]['deal_date'] = $item->deal_date;
            $deal['data'][$key]['delivery_date'] = $item->delivery_date;
            $deal['data'][$key]['type'] = $item->type;
            $deal['data'][$key]['desc'] = $item->desc;
            $deal['data'][$key]['user'] = $item->user->name;
        }
        return response()->json($deal);
    }

    public function fetchSale(Request $request)
    {
        $per_page = trim($request->per_page, "/");
        $deals = Deal::with('user')->where('type', 'Sale')->paginate($per_page);
        $deal = [];
        $deal['pagination'] = $deals;
        foreach ($deals as $key => $item) {
            $customer1 = Customer::find($item->customer_id);

            if ($customer1) {
                $customer = $customer1->name;
            } else {
                $customer = 'None';
            }

            $broker1 = Customer::find($item->broker_id);
            $broker = 'None';
            if ($broker1) {
                $broker = $broker1->name;
            }
            $deal['data'][$key]['id'] = $item->id;
            $deal['data'][$key]['du_id'] = $item->du_id;
            $deal['data'][$key]['customer_id'] = $item->customer_id;
            $deal['data'][$key]['broker_id'] = $item->broker_id;
            $deal['data'][$key]['broker'] = $broker;
            $deal['data'][$key]['party_name'] = $customer;
            $deal['data'][$key]['deal_date'] = $item->deal_date;
            $deal['data'][$key]['delivery_date'] = $item->delivery_date;
            $deal['data'][$key]['type'] = $item->type;
            $deal['data'][$key]['desc'] = $item->desc;
            $deal['data'][$key]['user'] = $item->user->name;
        }
        return response()->json($deal);
    }

    public function show($id)
    {
        $item = Deal::find($id);

        $customer = Customer::find($item->customer_id);
        $broker = Customer::find($item->broker_id);
        $deal['id'] = $item->id;
        $deal['du_id'] = $item->du_id;
        $deal['party_name'] = $customer ? $customer->name: 'N/A';
        $deal['broker'] = $broker ? $broker->name : 'N/A';
        $deal['customer_id'] = $item->customer_id;
        $deal['broker_id'] = $item->broker_id;
        $deal['deal_date'] = $item->deal_date;
        $deal['delivery_date'] = $item->delivery_date;
        $deal['type'] = $item->type;
        $deal['desc'] = $item->desc;


        foreach ($item->deal_commodities as $k => $row) {
            $commodity = $row->commodity_id;
            if ($row->commodity) {
                $commodity = $row->commodity;
                $commodity = $commodity->name;
            }
            $deal[0][$k]['id'] = $row->id;
            $deal[0][$k]['commodity'] = $commodity;
            $deal[0][$k]['quantity'] = $row->qty;
            $deal[0][$k]['weight_per_bag'] = $row->weight_per_bag;
            $deal[0][$k]['rate_unit'] = $row->rate_unit;
            $deal[0][$k]['rate'] = $row->rate;
            $deal[0][$k]['total_weight'] = $row->total_weight;
            $deal[0][$k]['total_amount'] = $row->total_amount;
            $deal[0][$k]['deal_id'] = $row->deal_id;
        }

        return response()->json($deal);
    }

    public function delete(Request $request)
    {
        $deal = Deal::find($request->id);
        foreach ($deal->deal_commodities as $item) {
            $item->delete();
        }
        $deal->delete();
        return response(['type' => 'success', 'message' => 'Deal Deleted successfully...']);
    }

    public function dealCommodityDelete(Request $request)
    {

        $commodity = DealCommodity::find($request->deal_commodity_id);

        if ($commodity) {
            $commodity->delete();
            return response(['type' => 'success', 'message' => 'Deal Commodity Deleted successfully...']);
        } else {
            return response(['type' => 'error', 'message' => 'Deal Commodity Deleted successfully...']);
        }
    }

    public function getSelectPurchaseDeals(Request $request)
    {
        $deals = Deal::where('du_id', 'LIKE', '%' . $request->q . '%')->where('type', 'Purchase')->get();
        $deals->transform(function ($deal) {
            $deal->name = $deal->du_id;
            return $deal;
        });
        return response(['items' => $deals]);
    }

    public function getSelectSaleDeals(Request $request)
    {
        $deals = Deal::where('du_id', 'LIKE', '%' . $request->q . '%')->where('type', 'Sale')->get();
        $deals->transform(function ($deal) {
            $deal->name = $deal->du_id;
            return $deal;
        });
        return response(['items' => $deals]);
    }

    public function getDealCommodities()
    {
        $dealCommodities = DealCommodity::all();
        return response()->json($dealCommodities);
    }

    public function getDuidData($id)
    {
        $item = Deal::where('du_id', $id)->first();
        $deductions = Deduction::with('deductions')->get();
        $deal = [];
        $deal['form'] = $item;

        if ($item->deal_commodities) {
            foreach ($item->deal_commodities as $k => $row) {
                $commodity = $row->commodity_id;
                if ($row->commodity) {
                    $commodity = $row->commodity;
                    $commodity = $commodity->name;
                }

                $deal['data'][$k]['deal_commodity_id'] = $row->id;
                $deal['data'][$k]['id'] = $row->commodity_id;
                $deal['data'][$k]['commodity'] = $commodity;
                $deal['data'][$k]['quantity'] = $row->qty;
                $deal['data'][$k]['weight_per_bag'] = $row->weight_per_bag;
                $deal['data'][$k]['rate'] = $row->rate;
                $deal['data'][$k]['status'] = $row->status;
                $deal['data'][$k]['unit_id'] = $row->unit_id;
                $deal['data'][$k]['rate_unit'] = $row->rate_unit;
                $deal['data'][$k]['deal_id'] = $row->deal_id;
                $deal['data'][$k]['total_weight_kgs'] = $row->total_weight_kgs;
                $deal['data'][$k]['total_weight'] = $row->total_weight;
                $deal['data'][$k]['total_amount'] = $row->total_amount;
            }
        }
        $deal['deductions'] = $deductions;

        return response()->json($deal);
    }

    public function getDealData($id)
    {
        $item = Deal::find($id);
        $deal = [];
        $deal['form'] = $item;

        if ($item->types){
            foreach ($item->types as $ki => $row) {
                $deal['types'][$ki]['name'] = $row->name;
                $deal['types'][$ki]['price'] = $row->price;
            }
        }

        if ($item->deal_commodities) {
            foreach ($item->deal_commodities as $k => $row) {
                $commodity = $row->commodity_id;
                if ($row->commodity) {
                    $commodity = $row->commodity;
                    $commodity = $commodity->name;
                }

                $deal['data'][$k]['deal_commodity_id'] = $row->id;
                $deal['data'][$k]['id'] = $row->commodity_id;
                $deal['data'][$k]['commodity'] = $commodity;
                $deal['data'][$k]['quantity'] = $row->qty;
                $deal['data'][$k]['weight_per_bag'] = $row->weight_per_bag;
                $deal['data'][$k]['rate'] = $row->rate;
                $deal['data'][$k]['status'] = $row->status;
                $deal['data'][$k]['unit_id'] = $row->unit_id;
                $deal['data'][$k]['rate_unit'] = $row->rate_unit;
                $deal['data'][$k]['deal_id'] = $row->deal_id;
                $deal['data'][$k]['total_weight_kgs'] = $row->total_weight_kgs;
                $deal['data'][$k]['total_weight'] = $row->total_weight;
                $deal['data'][$k]['total_amount'] = $row->total_amount;
            }
        }

        return response()->json($deal);
    }

    public function getGatePassData($id)
    {
        $item = Deal::find($id);

        $deal = [];
        $total_bags = 0;
        $total_expenses = 0;
        $total_weight_kgs = 0;

        $total_expenses += $item->vehicle_expense;
        $total_bill = $item->total_amount - $item->deducted_amount;
        $net_bill = $total_bill - $total_expenses;

        if ($item->deal_commodities) {
            foreach ($item->deal_commodities as $k => $row) {
                $total_bags += $row->total_weight_kgs/$row->rate_unit;
                $total_weight_kgs = $row->total_weight_kgs;
                $commodity = $row->commodity_id;
                if ($row->commodity) {
                    $commodity = $row->commodity;
                    $commodity = $commodity->name;
                }
                $deal['data'][$k]['commodity'] = $commodity;
                $deal['data'][$k]['rate'] = $row->rate;
            }
        }

        $deal['id'] = $item->id;
        $deal['du_id'] = $item->du_id;
        $deal['party_name'] = $item->customer_id;
        $deal['party_name_name'] = Customer::find($item->customer_id)->name_urdu;
        $deal['deal_date'] = date('d-m-Y', strtotime($item->deal_date));
        $deal['created_at'] = date('d-m-Y', strtotime($item->created_at));
        $deal['updated_at'] = date('d-m-Y', strtotime($item->updated_at));
        $deal['delivery_date'] = date('d-m-Y', strtotime($item->delivery_date));
        $deal['type'] = $item->type;
        $deal['total_weight_kgs'] = $total_weight_kgs;
        $deal['barCode'] = $item->barCode;
        $deal['vehicle_expense'] = $item->vehicle_expense + $item->local_vehicle_freight;
        $deal['deducted_amount'] = $item->deducted_amount;
        $deal['total_bags'] = $total_bags;
        $deal['total_expenses'] = $total_expenses;
        $deal['total_bill'] = $total_bill;
        $deal['net_bill'] = $net_bill;

        return response()->json($deal);
    }
    public function getInvoiceData($id)
    {
        $deal = Deal::with('customer','templates','templates.expense','deductions.deduct','deal_commodities','arrivals', 'deal_commodities.commodity')->find($id);
        return response()->json($deal);
    }
}
