<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Deduction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeductionController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
        ]);

        $category=new Deduction();
        $category->user_id=Auth::user()->id;
        $category->name=$request->name;
        $category->desc=$request->desc;
        $category->save();
        return response(['type'=>'success','message'=>'Deduction created successfully....']);
    }
    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $expenses=Deduction::with('user')->paginate($per_page);

        return response()->json($expenses);
    }
    public function edit($id)
    {
        $item = Deduction::find($id);

        return response()->json($item);
    }

    public function update(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
        ]);

        $category=Deduction::find($request->id);
        if ($category){
            $category->user_id=Auth::user()->id;
            $category->name=$request->name;
            $category->desc=$request->desc;
            $category->update();
            return response(['type'=>'success','message'=>'Deduction updated successfully...']);
        }
        return response(['type'=>'error','message'=>'something went wrong']);

    }
    public function delete(Request $request){
        $category=Deduction::find($request->id);
        if ($category){
            if ($category->deductions) {
                foreach ($category->deductions as $item) {
                    $item->delete();
                }
            }
            $category->delete();
            return response(['type'=>'success','message'=>'Deduction Deleted successfully...']);
        }
    }
}
