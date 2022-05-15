<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,['name'=>'required']);
        $category=new Category();
        $category->user_id=Auth::user()->id;
        $category->name=$request->name;
        $category->name_urdu=$request->name_urdu;
        $category->code=$request->code;
        $category->save();
        return response(['type'=>'success','message'=>'Crop created successfully....']);
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $cats = Category::with('user')->paginate($per_page);
        return response()->json($cats);
    }
    public function update(Request $request){
        $this->validate($request,['name'=>'required']);
        $category=Category::find($request->id);
        if ($category){
            $category->user_id=Auth::user()->id;
            $category->name=$request->name;
            $category->name_urdu=$request->name_urdu;
            $category->code=$request->code;
            $category->update();
            return response(['type'=>'success','message'=>'Crop updated successfully...']);
        }
        return response(['type'=>'error','message'=>'something went wrong']);

    }
    public function edit($id)
    {
        $item = Category::find($id);

        return response()->json($item);
    }
    public function delete(Request $request){
        $category=Category::find($request->id);
        if ($category){
            $category->delete();
            return response(['type'=>'success','message'=>'Crop Deleted successfully...']);
        }
    }
    public function last()
    {
        $last = Category::latest()->first();
        if ($last){
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }
}
