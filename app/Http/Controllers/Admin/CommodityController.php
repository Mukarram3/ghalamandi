<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bag;
use App\Models\Category;
use App\Models\Commodity;
use App\Models\ParentCommodity;
use App\Models\SubAccount;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CommodityController extends Controller
{
    public function create(Request $request){
        $this->validate($request,[
            'category_id'=>'required',
            'name'=>'required',
            'code'=>'required',
            'unit_id'=>'required',
            ]);
        try {
            DB::beginTransaction();
            $account = SubAccount::create([
                'account_id' => 1,
                'user_id' => Auth::user()->id,
                'parent_id' => 1,
                'code' => $this->last()->getData(),
                'name' => $request->name,
            ]);

            $unit=Unit::find($request->unit_id);

            $commodity=new Commodity();
            $commodity->account_id=$account->id;
            $commodity->category_id=$request->category_id;
            $commodity->user_id=Auth::user()->id;
            $commodity->name=$request->name;
            $commodity->name_urdu=$request->name_urdu;
            $commodity->kgs=$unit->kgs;
            $commodity->code=$request->code;
            $commodity->parent_id=$request->parent_id;
            $commodity->unit_id=$request->unit_id;
            $commodity->bag_id=$request->bag_id;
            $commodity->status=$request->status;
            $commodity->save();

            $commodity=Commodity::with(['unit','parent'])->find($commodity->id);

            DB::commit();
            return response(['type'=>'success','message'=>'Commodity created successfully....','data'=>$commodity]);
        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
        return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $data = Commodity::with(['unit','category','bag','user'])->paginate($per_page);
        return response()->json($data);
    }

    public function update(Request $request){
        $this->validate($request,[
            'category_id'=>'required',
            'name'=>'required',
            'code'=>'required',
            'unit_id'=>'required',
        ]);

        try {
            DB::beginTransaction();
            $unit=Unit::find($request->unit_id);
            $commodity=Commodity::find($request->id);

                if ($commodity->account) {
                    $account = $commodity->account;
                    $account->update([
                        'account_id' => 1,
                        'user_id' => Auth::user()->id,
                        'parent_id' => 1,
                        'name' => $request->name,
                    ]);
                } else {
                    $account = SubAccount::create([
                        'account_id' => 1,
                        'user_id' => Auth::user()->id,
                        'parent_id' => 1,
                        'code' => $this->last()->getData(),
                        'name' => $request->name,
                    ]);
                }
                $commodity->account_id = $account->id;
                $commodity->category_id = $request->category_id;
                $commodity->user_id = Auth::user()->id;
                $commodity->name = $request->name;
                $commodity->name_urdu = $request->name_urdu;
                $commodity->kgs = $unit->kgs;
                $commodity->code = $request->code;
                $commodity->parent_id = $request->parent_id;
                $commodity->unit_id = $request->unit_id;
                $commodity->bag_id = $request->bag_id;
                $commodity->status = $request->status;
                $commodity->update();

            DB::commit();
            return response(['type'=>'success','message'=>'Commodity updated successfully...', 'data'=>$commodity]);
        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function edit($id)
    {
        $item = Commodity::find($id);
        return response()->json($item);
    }

    public function delete(Request $request){
        $item=Commodity::find($request->id);
        if ($item){
            if ($item->account) {
                $item->account->delete();
            }
            $item->delete();
            return response(['type'=>'success','message'=>'Commodity Deleted successfully...']);
        }
    }
    public function fetchUnits(){
        $unites=Unit::all();
        return response()->json($unites);
    }
    public function fetchBags(){
        $bags=Bag::all();
        return response()->json($bags);
    }
    public function fetchParentCommodities(){
        $parents=Commodity::all();
        return response()->json($parents);
    }
    public function fetchCategories(){
        $categories=Category::all();
        return response()->json($categories);
    }
    public function last()
    {
        $last = Commodity::latest()->first();
        if ($last){
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }
}
