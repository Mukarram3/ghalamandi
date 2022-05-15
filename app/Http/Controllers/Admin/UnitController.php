<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UnitController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, ['kgs' => 'numeric|required', 'name' => 'required']);

        if ($request->default == 'yes') {
            $oldUnites=Unit::where('is_default','yes')->update(['is_default' => 'no']);
        }
        $unit = new Unit();
        $unit->user_id = Auth::user()->id;
        $unit->name = $request->name;
        $unit->kgs = $request->kgs;
        $unit->is_default = $request->default;
        $unit->save();
        return response(['type' => 'success', 'message' => 'Unit created successfully....']);
    }

    public function edit($id)
    {

        $item = Unit::find($id);

        return response()->json($item);
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $units = Unit::with('user')->paginate($per_page);
        return response()->json($units);
    }

    public function update(Request $request)
    {
        $this->validate($request, ['kgs' => 'numeric', 'name' => 'required']);
        if ($request->default == 'yes') {
            $oldUnites=Unit::where('is_default','yes')->update(['is_default' => 'no']);
        }
        $unit = Unit::find($request->id);

            $unit->user_id = Auth::user()->id;
            $unit->name = $request->name;
            $unit->kgs = $request->kgs;
            $unit->is_default = $request->default;
            $unit->update();
            return response(['type' => 'success', 'message' => 'Unit updated successfully...']);
        return response(['type' => 'error', 'message' => 'something went wrong']);

    }

    public function delete(Request $request)
    {
        $category = Unit::find($request->id);
        if ($category) {
            $category->delete();
            return response(['type' => 'success', 'message' => 'Unit Deleted successfully...']);
        }
    }


}
