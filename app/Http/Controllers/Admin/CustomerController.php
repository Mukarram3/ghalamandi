<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\AccountType;
use App\Models\Customer;
use App\Models\SubAccount;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'phone' => 'required',
        ]);
        try {
            DB::beginTransaction();
                $acc = Account::where('name', $request->account_selected)->first();
                $account = SubAccount::create([
                    'account_id' => $acc->id,
                    'user_id' => Auth::user()->id,
                    'parent_id' => 3,
                    'code' => $this->last()->getData(),
                    'name' => $request->name,
                ]);


            $customer = new Customer();
            $customer->account_id = $account->id;
            $customer->type = $request->type;
            $customer->user_id = Auth::user()->id;
            $customer->name = $request->name;
            $customer->name_urdu = $request->name_urdu;
            $customer->phone = $request->phone;
            $customer->phone_2 = $request->phone_2;
            $customer->cinic = $request->cinic;
            $customer->company = $request->company;
            $customer->desc = $request->desc;
            $customer->city = $request->city;
            $customer->address = $request->address;
            $customer->unload_address = $request->unload_address;
            $customer->balance = $request->balance;
            $customer->save();


            DB::commit();
            return response(['type' => 'success', 'message' => 'Account created successfully....','account'=>$customer]);

        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function fetch(Request $request)
    {
        $per_page = trim($request->per_page, "/");
        $customers = Customer::with('user')->paginate($per_page);
        return response()->json($customers);
    }

    public function edit($id)
    {
        $item = Customer::find($id);

        return response()->json($item);
    }

    public function update(Request $request)
    {
//        dd($request->all());
        $this->validate($request, [
            'name' => 'required',
            'phone' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $customer = Customer::find($request->id);
            $acc = Account::where('name', $request->account_selected)->first();
            if ($customer->account) {
                $account = $customer->account;
                    $account->update([
                        'account_id' => $acc->id,
                        'user_id' => Auth::user()->id,
                        'parent_id' => 3,
                        'name' => $request->name,
                    ]);
            } else {
                $account = SubAccount::create([
                    'account_id' => $acc->id,
                    'user_id' => Auth::user()->id,
                    'parent_id' => 3,
                    'code' => $this->last()->getData(),
                    'name' => $request->name,
                ]);
            }
            $customer->account_id = $account->id;
            $customer->type = $request->type;
            $customer->user_id = Auth::user()->id;
            $customer->name = $request->name;
            $customer->name_urdu = $request->name_urdu;
            $customer->phone = $request->phone;
            $customer->phone_2 = $request->phone_2;
            $customer->cinic = $request->cinic;
            $customer->company = $request->company;
            $customer->desc = $request->desc;
            $customer->city = $request->city;
            $customer->address = $request->address;
            $customer->unload_address = $request->unload_address;
            $customer->balance = $request->balance;
            $customer->update();

            DB::commit();
            return response(['type' => 'success', 'message' => 'Account updated successfully...']);
        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response(['type' => 'error', 'message' => 'Error While Saving Transactions...']);
        }
    }

    public function delete(Request $request)
    {
        $customer = Customer::find($request->id);
        if ($customer) {
            if ($customer->account) {
                $customer->account->delete();
            }
            $customer->delete();
            return response(['type' => 'success', 'message' => 'Account Deleted successfully...']);
        }
    }

    public function last()
    {
        $last = Customer::latest()->first();
        if ($last) {
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }

    public function fetchAccounts()
    {
        $types = AccountType::all();
        return response()->json($types);
    }
    public function fetchSubAccounts()
    {
        $types = Account::all();
        return response()->json($types);
    }
}
