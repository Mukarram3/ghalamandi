<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DeductionItems;
use App\Models\Deduction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeductionItemController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'deduction_id'=>'required',
            'name'=>'required',
            'type'=>'required',
        ]);

        $category=new DeductionItems();
        $category->user_id=Auth::user()->id;
        $category->deduction_id=$request->deduction_id;
        $category->name=$request->name;
        $category->type=$request->type;
        $category->def_value=$request->def_value;
        $category->deduction_kgs=$request->deduction_kgs;
        $category->status=$request->status;
        $category->save();
        return response(['type'=>'success','message'=>'Deduction Item created successfully....']);
    }
    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $expenses=DeductionItems::with('user','deduction')->paginate($per_page);

        return response()->json($expenses);
    }
    public function edit($id)
    {
        $item = DeductionItems::find($id);
        return response()->json($item);
    }
    public function fetchDeductions(){
        $items=Deduction::all();
        return response()->json($items);
    }
    public function update(Request $request)
    {
        $this->validate($request,[
            'deduction_id'=>'required',
            'name'=>'required',
            'type'=>'required',
        ]);

        $category=DeductionItems::find($request->id);
        if ($category){
            $category->user_id=Auth::user()->id;
            $category->deduction_id=$request->deduction_id;
            $category->name=$request->name;
            $category->type=$request->type;
            $category->def_value=$request->def_value;
            $category->deduction_kgs=$request->deduction_kgs;
            $category->status=$request->status;
            $category->update();
            return response(['type'=>'success','message'=>'Deduction Item updated successfully...']);
        }
        return response(['type'=>'error','message'=>'something went wrong']);

    }
    public function delete(Request $request){
        $category=DeductionItems::find($request->id);
        if ($category){
            $category->delete();
            return response(['type'=>'success','message'=>'Deduction Item Deleted successfully...']);
        }
    }
}
