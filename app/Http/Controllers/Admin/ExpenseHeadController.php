<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ExpenseHead;
use Illuminate\Http\Request;

class ExpenseHeadController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
        ]);
        $category=new ExpenseHead();
        $category->name=$request->name;
        $category->desc=$request->desc;
        $category->save();
        return response(['type'=>'success','message'=>'Expense-Head created successfully....']);
    }
    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $data = ExpenseHead::paginate($per_page);
        return response()->json($data);
    }
    public function update(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
        ]);

        $category=ExpenseHead::find($request->id);
        if ($category){
            $category->name=$request->name;
            $category->desc=$request->desc;
            $category->update();
            return response(['type'=>'success','message'=>'Expense-Head updated successfully...']);
        }
        return response(['type'=>'error','message'=>'something went wrong']);

    }

    public function edit($id)
    {
        $item = ExpenseHead::find($id);

        return response()->json($item);
    }

    public function delete(Request $request){
        $item=ExpenseHead::find($request->id);
        if ($item){
            $item->delete();
            return response(['type'=>'success','message'=>'Expense-Head Deleted successfully...']);
        }
    }
}
