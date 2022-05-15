<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bag;
use App\Models\Category;
use App\Models\Commodity;
use App\Models\ParentCommodity;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ParentCommodityController extends Controller
{
    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $data = Commodity::where('parent_id', null)->with(['category','user'])->paginate($per_page);
        return response()->json($data);
    }

//    public function create(Request $request)
//    {
//        $this->validate($request,[
//            'category_id'=>'required',
//            'name'=>'required',
//            'code'=>'required',
//            ]);
//
//        $commodity=new ParentCommodity();
//        $commodity->user_id=Auth::user()->id;
//        $commodity->name=$request->name;
//        $commodity->name_urdu=$request->name_urdu;
//        $commodity->code=$request->code;
//        $commodity->category_id=$request->category_id;
//        $commodity->status=$request->status;
//        $commodity->save();
//
//
//        $commodity=ParentCommodity::with(['category'])->find($commodity->id);
//
//        return response(['type'=>'success','message'=>'Parent Commodity created successfully....','data'=>$commodity]);
//    }

//    public function update(Request $request){
//        $this->validate($request,[
//            'category_id'=>'required',
//            'name'=>'required',
//            'code'=>'required',
//        ]);
//        $commodity=ParentCommodity::find($request->id);
//
//        if ($commodity){
//            $commodity->user_id=Auth::user()->id;
//            $commodity->name=$request->name;
//            $commodity->name_urdu=$request->name_urdu;
//            $commodity->code=$request->code;
//            $commodity->category_id=$request->category_id;
//            $commodity->status=$request->status;
//            $commodity->update();
//            return response(['type'=>'success','message'=>'ParentCommodity updated successfully...', 'data'=>$commodity]);
//        }
//        return response(['type'=>'error','message'=>'something went wrong']);
//
//    }
//
//    public function edit($id)
//    {
//        $item = ParentCommodity::find($id);
//        return response()->json($item);
//    }
//
//    public function delete(Request $request){
//        $item=ParentCommodity::find($request->id);
//        if ($item){
//            $item->delete();
//            return response(['type'=>'success','message'=>'Parent Commodity Deleted successfully...']);
//        }
//    }
//    public function last()
//    {
//        $last = ParentCommodity::latest()->first();
//        if ($last){
//            $id = $last->id + 1;
//        } else {
//            $id = 1;
//        }
//        return response()->json($id);
//    }
}
