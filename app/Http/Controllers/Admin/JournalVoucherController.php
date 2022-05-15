<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JournalVoucher;
use App\Models\Ledger;
use App\Models\SubAccount;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class JournalVoucherController extends Controller
{
    public function create(Request $request) {
        dd($request->all());
        $balance = 0;
//        $this->validate($request, [
//            'name' => 'required',
//            'phone' => 'required',
//        ]);
        try {
            DB::beginTransaction();

            $trx=new Transaction();
            $trx->trx=Str::random(11);
            $trx->total_debit=$request->debit;
            $trx->total_credit=$request->credit;
            $trx->total_amount=$request->balance;
            $trx->narration=$request->narration;
            $trx->save();

            foreach ($request->transactions as $transaction){

                $oldLedger=Ledger::where('account_id',$transaction['id'])->get()->last();

                $ledger=new Ledger();
                $ledger->trx_id=$trx->id;
                $ledger->account_id=$transaction['id'];
                $ledger->desc=isset($transaction['narration']) ? $transaction['narration'] : '';
                if (isset($transaction['debit'])){
                   $ledger->debit=$transaction['debit'];
                   $ledger->type='Dr';
                    if ($oldLedger){
                        $ledger->balance=$oldLedger->balance+$transaction['debit'];
                    }else{
                        $ledger->balance=$transaction['debit'];
                    }
                }
                if (isset($transaction['credit'])){
                    $ledger->credit=$transaction['credit'];
                    $ledger->type='Cr';
                    if ($oldLedger){
                        $ledger->balance=$oldLedger->balance-$transaction['credit'];
                    }else{
                        $ledger->balance=(-1)*$transaction['credit'];
                    }
                }
                $ledger->save();
            }


            DB::commit();
            return response(['type' => 'success', 'message' => 'Record created successfully....']);

        } catch (\PDOException $e) {
            // Woopsy
            dd($e);
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }
    public function fetchAccounts() {
        $data = SubAccount::select('name as text','id')->get();
        return response()->json($data);
    }
    public function fetchSelectedAccount(Request $request) {
        $id = trim($request->id, "/");
//        dd($request->all(), $id);
        $data = SubAccount::find($id);
        return response()->json($data);
    }
    public function last()
    {
        $last = Transaction::latest()->first();
        if ($last) {
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }
}
