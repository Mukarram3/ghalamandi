<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DebitVoucherController extends Controller
{
    public function create(Request $request) {
        dd($request->all());

        try {
            DB::beginTransaction();


            DB::commit();
            return response(['type' => 'success', 'message' => 'Debit Voucher created successfully....']);

        } catch (\PDOException $e) {
            // Woopsy
            dd($e);
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }
}
