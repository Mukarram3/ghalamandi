<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bag;
use App\Models\BagInvoiceRecord;
use App\Models\BagSaleInvoice;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BagController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'price' => 'required|numeric',
            'name' => 'required',
            'weight' => 'required|numeric'
        ]);

        $bag = new Bag();
        $bag->user_id = Auth::user()->id;
        $bag->name = $request->name;
        $bag->weight = $request->weight;
        $bag->price = $request->price;
        $bag->save();
        return response(['type' => 'success', 'message' => 'Bag created successfully....', 'data' => $bag]);
    }

    public function fetchSelectBag(Request $request) {
        $id = trim($request->id, "/");
        $data = bag::find($id);
        return response()->json($data);
    }

    public function createBagSaleInvoice(Request $request)
    {
//        dd($request->all());

        try {
            DB::beginTransaction();

            $bagInvoice = BagSaleInvoice::create([
                'sale_number' => $request->sale_number,
                'sale_date' => $request->sale_date,
                'buyer_id' => $request->buyer_id,
                'party_type_id' => $request->party_id,
                'total_receivable' => $request->total_receivable,
                'previous_credit' => $request->previous_credit,
                'received_amount' => $request->received_amount,
            ]);

            foreach ($request->transactions as $item) {
                BagInvoiceRecord::create([
                    'bag_invoice_id' => $bagInvoice->id,
                    'bag_class' => $item['name'],
                    'price' => $item['price'],
                    'qty' => $item['qty'],
                    'value' => $item['value'],
                    'no_of_bags' => $item['no_of_bags'],
                ]);
            }

            DB::commit();
            return response(['type' => 'success', 'message' => 'Bag Sale Invoice created successfully....']);

        } catch (\PDOException $e) {
            // Woopsy
            dd($e);
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }



    public function edit($id)
    {
        $item = Bag::find($id);

        return response()->json($item);
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $bags = Bag::with('user')->paginate($per_page);
        return response()->json($bags);
    }
    public function fetchCustomers(Request $request){
        $party = Customer::select('id','name as text')->where('type', 'Buyer')->get();
        return response()->json($party);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'price' => 'required|numeric',
            'name' => 'required',
            'weight' => 'required|numeric'
        ]);

        $bag = Bag::find($request->id);
        if ($bag) {
            $bag->user_id = Auth::user()->id;
            $bag->name = $request->name;
            $bag->weight = $request->weight;
            $bag->price = $request->price;
            $bag->update();
            return response(['type' => 'success', 'message' => 'Bag updated successfully...',
                'data' => $bag]);
        }
        return response(['type' => 'error', 'message' => 'something went wrong']);

    }

    public function last()
    {
        $last = Bag::latest()->first();
        if ($last){
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }

    public function delete(Request $request)
    {
        $bag = Bag::find($request->id);
        if ($bag) {
            $bag->delete();
            return response(['type' => 'success', 'message' => 'Bag Deleted successfully...']);
        }
    }
}
