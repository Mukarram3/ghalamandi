<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Expense;
use App\Models\ExpenseHead;
use App\Models\SubAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ExpenseController extends Controller
{
    public function create(Request $request)
    {
//        dd($request->all());
        $this->validate($request,[
            'name'=>'required',
            'payment_type'=>'required',
            'expense_id'=>'required',
            'price'=>'required',
        ]);

        try {
            DB::beginTransaction();
            $acc = Account::where('name', 'expense')->first();
            $account = SubAccount::create([
                'account_id' => $acc->id,
                'user_id' => Auth::user()->id,
                'code' => $this->last()->getData(),
                'name' => $request->name,
            ]);

            $category=new Expense();
            $category->account_id=$account->id;
            $category->user_id=Auth::user()->id;
            $category->name=$request->name;
            $category->payment_type=$request->payment_type;
            $category->expense_id=$request->expense_id;
            $category->price=$request->price;
            $category->save();

            DB::commit();
            return response(['type'=>'success','message'=>'Expense created successfully....']);

        } catch (\PDOException $e) {
            dd($e);
            // Woopsy
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }
    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $expenses=Expense::with('user','expense')->paginate($per_page);

        return response()->json($expenses);
    }
    public function edit($id)
    {
        $item = Expense::find($id);

        return response()->json($item);
    }
    public function fetchExpense(){
        $category=ExpenseHead::all();
        return response()->json($category);
    }
    public function update(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'payment_type'=>'required',
            'expense_id'=>'required',
            'price'=>'required',
        ]);

        try {
            DB::beginTransaction();
            $category=Expense::find($request->id);
            if ($category->account) {
                $account = $category->account;
                $account->update([
                    'account_id' => 4,
                    'user_id' => Auth::user()->id,
                    'name' => $request->name,
                ]);
            } else {
                $account = SubAccount::create([
                    'account_id' => 4,
                    'user_id' => Auth::user()->id,
                    'code' => $this->last()->getData(),
                    'name' => $request->name,
                ]);
            }
            $category->account_id=$account->id;
            $category->user_id=Auth::user()->id;
            $category->name=$request->name;
            $category->expense_id=$request->expense_id;
            $category->payment_type=$request->payment_type;
            $category->price=$request->price;
            $category->update();

            DB::commit();
            return response(['type'=>'success','message'=>'Expense updated successfully...']);

        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }
    public function delete(Request $request){
        $item=Expense::find($request->id);
        if ($item){
            if ($item->account) {
                $item->account->delete();
            }
            $item->delete();
            return response(['type'=>'success','message'=>'Expense Deleted successfully...']);
        }
    }
    public function last()
    {
        $last = Expense::latest()->first();
        if ($last){
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }
}
