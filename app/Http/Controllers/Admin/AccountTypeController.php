<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AccountType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountTypeController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);

        $item = new AccountType();
        $item->user_id = Auth::user()->id;
        $item->name = $request->name;
        $item->save();
        return response(['type' => 'success', 'message' => 'Account Type created successfully....']);
    }

    public function edit($id)
    {
        $item = AccountType::find($id);
        return response()->json($item);
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $bags = AccountType::with('user')->paginate($per_page);

        return response()->json($bags);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        $bag = AccountType::find($request->id);
        if ($bag) {
            $bag->user_id = Auth::user()->id;
            $bag->name = $request->name;
            $bag->update();
            return response(['type' => 'success', 'message' => 'Account Type updated successfully...',
                'data' => $bag]);
        }
        return response(['type' => 'error', 'message' => 'something went wrong']);

    }

    public function delete(Request $request)
    {
        $bag = AccountType::find($request->id);
        if ($bag) {
            $bag->delete();
            return response(['type' => 'success', 'message' => 'Account Type Deleted successfully...']);
        }
    }
}
