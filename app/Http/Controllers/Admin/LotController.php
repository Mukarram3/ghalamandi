<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LotController extends Controller
{
    public function last()
    {
        $last = Lot::latest()->first();
        if ($last){
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }
    public function create(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
//            'number'=>'required',
        ]);
        $item=new Lot();
        $item->user_id=Auth::user()->id;
        $item->name=$request->name;
        $item->number=$request->number;
        $item->code=$request->code;
        $item->save();
        return response(['type'=>'success','message'=>'Lot created successfully....']);
    }
    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $arrivals = Lot::with('user')->paginate($per_page);
        return response()->json($arrivals);
    }

    public function edit($id)
    {
        $item = Lot::find($id);

        return response()->json($item);
    }

    public function update(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
//            'number'=>'required',
        ]);

        $item=Lot::find($request->id);
        if ($item){
            $item->user_id=Auth::user()->id;
            $item->name=$request->name;
            $item->number=$request->number;
            $item->code=$request->code;
            $item->update();
            return response(['type'=>'success','message'=>'Lot updated successfully...']);
        }
        return response(['type'=>'error','message'=>'something went wrong']);

    }
    public function delete(Request $request){
        $item=Lot::find($request->id);
        if ($item){
            $item->delete();
            return response(['type'=>'success','message'=>'Lot Deleted successfully...']);
        }
    }
}
