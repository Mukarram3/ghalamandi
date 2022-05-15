<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\SubAccount;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function last()
    {
        $last = SubAccount::latest()->first();
        if ($last){
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }
    public function fetch(Request $request){

        $type='';
        if ($request->id!=0){

            if($request->type=='main') {
                $type = 'account';
                $subAccounts = SubAccount::where('account_id', $request->id)->whereNull('parent_id')->get();
            }else{
                $subAccounts = SubAccount::where('parent_id', $request->id)->get();

            }

        }else{
            $subAccounts = Account::with('subaccounts')->get();
            $type='main';
        }



        return response()->json(['dt'=>$subAccounts,'type'=>$type]);
    }

    public function fetchSubAccount($id){
        $subAccounts = SubAccount::find($id);
        return response()->json($subAccounts);
    }
    public function update(Request $request){
        $account=SubAccount::find($request->id);
        if ($account) {
            $account->name = $request->name;
            $account->code=$request->code;
            $account->desc=$request->desc;
            $account->update();
        }
        return response(['type'=>'success','message'=>'Account Updated Successfully...']);
    }
    public function store(Request $request){
        if ($request->type!='main') {
            $account = Account::find($request->account_id);
        }else{
            $account = Account::find($request->id);
        }
        if ($account){
            $subAccount=new SubAccount();
            $subAccount->code=$request->code;
            $subAccount->name=$request->name;
            $subAccount->desc=$request->desc;
            $subAccount->account_id=$account->id;
            if ($request->type!='main'){
                $subAccount->parent_id=$request->id;
            }
            $subAccount->save();

        }

        return response(['type'=>'success','message'=>'Account Created Successfully...','dt'=>$subAccount]);
    }

    public function delete(Request $request)
    {
        $item = SubAccount::find($request->id);
        if ($item) {
            $item->delete();
            return response(['type' => 'success', 'message' => 'Account Deleted successfully...']);
        }
    }
}
