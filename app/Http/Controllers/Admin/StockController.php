<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Commodity;
use App\Models\Deal;
use App\Models\Lot;
use App\Models\Stock;
use App\Models\Unit;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'commodity_id'=>'required',
            'lot_id'=>'required',
            'deal_id'=>'required',
            'unit_id'=>'required',
            'rate'=>'required',
            'qty'=>'required|numeric',
        ]);

        $allStock = Stock::all();
        if ($allStock) {
            $total_stock_weight = null;
            foreach ($allStock as $key => $stock) {
                $total_stock_weight += $stock->qty * $stock->total_kg;
            }
        }
        $unit = Unit::find($request->unit_id)->kgs;
        $total_amount_rate = $request->qty * $unit * $request->rate;
        $weight_in_kgs = $request->qty * $unit;
        $item = new Stock();
        $item->commodity_id = $request->commodity_id;
        $item->lot_id = $request->lot_id;
        $item->deal_id = $request->deal_id;
        $item->unit_id = $request->unit_id;
        $item->unit_kgs = $unit;
        $item->rate = $request->rate;
        $item->qty = $request->qty;
        $item->total_kg = $weight_in_kgs;
        $item->total_amount = $total_amount_rate;
        $item->total_stock_qty_kg = $total_stock_weight;
        $item->save();

        return response(['type' => 'success', 'message' => 'Stock created successfully....']);
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $items = Stock::paginate($per_page);
        $data = [];
        $data['pagination'] = $items;
        foreach ($items as $key => $item) {
            $data['data'][$key]['id'] = $item->id;
            $data['data'][$key]['unit_id'] = $item->unit_id;
            $data['data'][$key]['deal_id'] = $item->deal_id;
            $data['data'][$key]['lot_id'] = $item->lot_id;
            $data['data'][$key]['commodity_id'] = $item->commodity_id;
            $data['data'][$key]['unit'] = $item->unit->name;
            $data['data'][$key]['lot'] = $item->lot->name;
            $data['data'][$key]['commodity'] = $item->commodity->name;
            $data['data'][$key]['unit_kgs'] = $item->unit_kgs;
            $data['data'][$key]['rate'] = $item->rate;
            $data['data'][$key]['qty'] = $item->qty;
            $data['data'][$key]['total_kg'] = $item->total_kg;
            $data['data'][$key]['total_amount'] = $item->total_amount;
            $data['data'][$key]['total_stock_qty_kg'] = $item->total_stock_qty_kg;
        }
        return response()->json($data);
    }

    public function fetchUnit()
    {
        $item = Unit::all();
        return response()->json($item);
    }

    public function fetchLot()
    {
        $item = Lot::all();
        return response()->json($item);
    }

    public function fetchDeal()
    {
        $item = Deal::all();
        return response()->json($item);
    }

    public function fetchCommodity()
    {
        $item = Commodity::all();
        return response()->json($item);
    }

    public function edit($id)
    {
        $item = Stock::find($id);

        return response()->json($item);
    }

    public function update(Request $request)
    {
        $this->validate($request,[
            'commodity_id'=>'required',
            'lot_id'=>'required',
            'deal_id'=>'required',
            'unit_id'=>'required',
            'rate'=>'required',
            'qty'=>'required|numeric',
        ]);

        $item = Stock::find($request->id);
        $allStock = Stock::all();
        if ($allStock) {
            $total_stock_weight = null;
            foreach ($allStock as $key => $stock) {
                $total_stock_weight += $stock->qty * $stock->total_kg;
            }
        }
        $unit = Unit::find($request->unit_id)->kgs;
        $total_amount_rate = $request->qty * $unit * $request->rate;
        $weight_in_kgs = $request->qty * $unit;
        if ($item) {
            $item->commodity_id = $request->commodity_id;
            $item->lot_id = $request->lot_id;
            $item->deal_id = $request->deal_id;
            $item->unit_id = $request->unit_id;
            $item->unit_kgs = $unit;
            $item->rate = $request->rate;
            $item->qty = $request->qty;
            $item->total_kg = $weight_in_kgs;
            $item->total_amount = $total_amount_rate;
            $item->total_stock_qty_kg = $total_stock_weight;
            $item->update();
            return response(['type' => 'success', 'message' => 'Stock updated successfully...']);
        }
        return response(['type' => 'error', 'message' => 'something went wrong']);

    }

    public function delete(Request $request)
    {
        $item = Stock::find($request->id);
        if ($item) {
            $item->delete();
            return response(['type' => 'success', 'message' => 'Stock Deleted successfully...']);
        }
    }
}
