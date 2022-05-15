<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Arrival;
use App\Models\ArrivalType;
use App\Models\Commodity;
use App\Models\Customer;
use App\Models\Deal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ArrivalController extends Controller
{
    public function last()
    {
        $last = Arrival::latest()->first();
        if ($last){
            $arrival_id = $last->id + 1;
        } else {
            $arrival_id = 1;
        }
        return response()->json($arrival_id);
    }

    public function create(Request $request)
    {
//        dd($request->all());
        $this->validate($request, [
            'deal_id' => 'required|numeric',
        ]);

        $vehicle_expenses = 0;

        try {
            DB::beginTransaction();

            $arrival = Arrival::create([
                'user_id' => Auth::user()->id,
                'arrival_id' => $request->arrival_id,
                'arrival_date' => isset($request->arrival_date) ? $request->arrival_date : now(),
                'deal_id' => $request->deal_id,
                'total_weight' => $request->total_weight,
            ]);

                if ($request->desserts2) {
                    foreach ($request->desserts2 as $item) {
                        $item = (object)$item;

                        $vehicle_expenses += $item->vehicle_freight;

                        ArrivalType::create([
                            'arrival_id' => $arrival->id,
                            'deal_id' => $item->deal_id,
                            'commodity' => $item->commodity,
                            'customer_id' => $item->customer_id,
                            'total_bags' => $item->total_bags,
                            'vehicle_no' => $item->vehicle_no,
                            'load_weight' => $item->load_weight,
                            'arrival_weight' => $item->arrival_weight,
                            'vehicle_freight' => $item->vehicle_freight,
                            'bilty_no' => $item->bilty_no,
                            'transporter_name' => $item->transporter_name,
                            'receiver_name' => $item->receiver_name,
                            'driver_name' => $item->driver_name,
                            'driver_phone' => $item->driver_phone,
                        ]);
                    }
                    $deal = Deal::find($request->deal_id);
                    $deal->update([
                        'vehicle_expense' => $vehicle_expenses,
                    ]);
                }

            DB::commit();
            return response(['type' => 'success', 'message' => 'Arrival Record created successfully....']);

        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function getArrivalData($id)
    {
        $item = Arrival::find($id);

        $arrival = [];
        $total_deduction = 0;
        if ($item->types){
            foreach ($item->types as $key => $row) {
                $total_deduction += $row->deduction_weight;
                $arrival['data'][$key]['id'] = $row->id;
                $arrival['data'][$key]['deal_id'] = $row->deal_id;
                $arrival['data'][$key]['commodity'] = $row->commodity;
                $arrival['data'][$key]['customer_id'] = $row->customer_id;
                $arrival['data'][$key]['total_bags'] = $row->total_bags;
                $arrival['data'][$key]['bilty_no'] = $row->bilty_no;
                $arrival['data'][$key]['vehicle_no'] = $row->vehicle_no;
                $arrival['data'][$key]['load_weight'] = $row->load_weight;
                $arrival['data'][$key]['arrival_weight'] = $row->arrival_weight;
                $arrival['data'][$key]['vehicle_freight'] = $row->vehicle_freight;
                $arrival['data'][$key]['transporter_name'] = $row->transporter_name;
                $arrival['data'][$key]['receiver_name'] = $row->receiver_name;
                $arrival['data'][$key]['driver_name'] = $row->driver_name;
                $arrival['data'][$key]['driver_phone'] = $row->driver_phone;
                $arrival['data'][$key]['deduction_weight'] = $row->deduction_weight;
            }
        }

        $arrival['form']['id'] = $item->id;
        $arrival['form']['arrival_id'] = $item->arrival_id;
        $arrival['form']['deal_id'] = $item->deal_id;
        $arrival['form']['arrival_date'] = $item->arrival_date;
        $arrival['form']['deduction_weight'] = $total_deduction;
        $arrival['form']['total_weight'] = $item->total_weight;
        $arrival['form']['net_weight'] = $item->net_weight;

        return response()->json($arrival);
    }

    public function edit($id)
    {
        $item = Arrival::find($id);
        $arrival=[];
        $arrival['form'] = $item;
        return response()->json($item);
    }

    public function update(Request $request)
    {
//        dd($request->all());
        $this->validate($request, [
            'deal_id' => 'required|numeric',
        ]);

        try {
            DB::beginTransaction();

            $arrival = Arrival::find($request->id);

            $arrival->update([
                'user_id' => Auth::user()->id,
                'arrival_id' => $request->arrival_id,
                'arrival_date' => isset($request->arrival_date) ? $request->arrival_date : now(),
                'deal_id' => $request->deal_id,
                'total_weight' => $request->total_weight,
            ]);

                if ($arrival->types) {
                    foreach ($arrival->types as $row) {
                        $row->delete();
                    }
                }

                if ($request->desserts2) {
                    foreach ($request->desserts2 as $item) {
                        $item = (object)$item;

                        ArrivalType::create([
                            'arrival_id' => $arrival->id,
                            'deal_id' => $item->deal_id,
                            'commodity' => $item->commodity,
                            'customer_id' => $item->customer_id,
                            'total_bags' => $item->total_bags,
                            'vehicle_no' => $item->vehicle_no,
                            'load_weight' => $item->load_weight,
                            'arrival_weight' => $item->arrival_weight,
                            'vehicle_freight' => $item->vehicle_freight,
                            'bilty_no' => $item->bilty_no,
                            'transporter_name' => $item->transporter_name,
                            'receiver_name' => $item->receiver_name,
                            'driver_name' => $item->driver_name,
                            'driver_phone' => $item->driver_phone,
                        ]);
                    }
                }

            DB::commit();
                return response(['type' => 'success', 'message' => 'Arrival Record updated successfully...']);
        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
                return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $arrivals = Arrival::with('user')->paginate($per_page);

        return response()->json($arrivals);
    }

    public function fetchParty()
    {
        $party = Customer::where('type', 'Supplier')->get();
        return response()->json($party);
    }

    public function delete(Request $request)
    {
        $arrival = Arrival::find($request->id);
        if ($arrival) {
            foreach ($arrival->types as $item) {
                $item->delete();
            }
            $arrival->delete();
        }
        return response(['type' => 'success', 'message' => 'Arrival Record Deleted successfully...']);

        if ($template) {
            foreach ($template->types as $item) {
                $item->delete();
            }
            $template->delete();
            return response(['type' => 'success', 'message' => 'Expense Template Deleted successfully...']);
        }
    }

    public function getSelectDeals(Request $request)
    {
        $arrivals = Deal::where('id', 'LIKE', '%' . $request->q . '%')->get();
        $arrivals->transform(function ($arrival) {
            $arrival->name = $arrival->id;
            return $arrival;
        });
        return response(['items' => $arrivals]);
    }

    public function getDealData($id)
    {
        $item = Deal::where('id', $id)->first();
        $arrival = [];
        $bags = 0;
        if ($item->deal_commodities) {
            foreach ($item->deal_commodities as $k => $row) {
                $bags += $row->qty;
                $commodity = Commodity::find($row->commodity_id);
                $arrival['commodities'][$k] = $commodity->name;
            }
        }
        $arrival['deal_id'] = $item->id;
        $arrival['customer_id'] = $item->customer_id;
        $arrival['total_bags'] = $bags;

        return response()->json($arrival);
    }

    public function show($id)
    {
        $item = Arrival::find($id);

        $arrival = [];
        $total_deduction = 0;
        if ($item->types){
            foreach ($item->types as $key => $row) {
                $total_deduction += $row->deduction_weight;
                $arrival['data'][$key]['id'] = $row->id;
                $arrival['data'][$key]['deal_id'] = $row->deal_id;
                $arrival['data'][$key]['commodity'] = $row->commodity;
                $arrival['data'][$key]['customer_id'] = $row->customer_id;
                $arrival['data'][$key]['total_bags'] = $row->total_bags;
                $arrival['data'][$key]['bilty_no'] = $row->bilty_no;
                $arrival['data'][$key]['vehicle_no'] = $row->vehicle_no;
                $arrival['data'][$key]['load_weight'] = $row->load_weight;
                $arrival['data'][$key]['arrival_weight'] = $row->arrival_weight;
                $arrival['data'][$key]['vehicle_freight'] = $row->vehicle_freight;
                $arrival['data'][$key]['transporter_name'] = $row->transporter_name;
                $arrival['data'][$key]['receiver_name'] = $row->receiver_name;
                $arrival['data'][$key]['driver_name'] = $row->driver_name;
                $arrival['data'][$key]['driver_phone'] = $row->driver_phone;
                $arrival['data'][$key]['deduction_weight'] = $row->deduction_weight;
            }
        }

        $arrival['id'] = $item->id;
        $arrival['arrival_id'] = $item->arrival_id;
        $arrival['deal_id'] = $item->deal_id;
        $arrival['arrival_date'] = $item->arrival_date;
        $arrival['deduction_weight'] = $total_deduction;
        $arrival['total_weight'] = $item->total_weight;
        $arrival['net_weight'] = $item->net_weight;

        return response()->json($arrival);
    }

    public function getInvoiceData($id)
    {
        $item = Arrival::find($id);
        $data = [];
        $supplier = $item->customer->name_urdu;
        $data['data']['supplier_name'] = $supplier;
        $data['arrival_date'] = date('d-m-Y', strtotime($item->arrival_date));
        $data['data'] = $item;
        return response()->json($data);
    }
}
