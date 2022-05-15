<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use App\Models\Template;
use App\Models\TemplateType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TemplateController extends Controller
{
    public function last()
    {
        $last = Template::latest()->first();
        if ($last){
            $id = $last->id + 1;
        } else {
            $id = 1;
        }
        return response()->json($id);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $template = Template::create([
                'user_id' => Auth::user()->id,
                'name' => $request->name,
                'code' => $request->code,
                'type' => $request->type,
                'desc' => $request->desc,
            ]);

            foreach ($request->expenses as $item) {
//                $item = (int)$item;
                if ($item != null) {
                    TemplateType::create([
                        'temp_id' => $template->id,
                        'expense_id' => $item,
                    ]);
                }
            }

            DB::commit();
            return response(['type' => 'success', 'message' => 'Expense Template created successfully....']);

        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function fetch(Request $request)
    {
        $per_page = trim($request->per_page, "/");
        $data = Template::with('user')->paginate($per_page);
        return response()->json($data);
    }

    public function edit($id)
    {
        $item = Template::find($id);

        return response()->json($item);
    }

    public function fetchExpenses()
    {
        $data = Expense::all();
        return response()->json($data);
    }
    public function fetchExpenseTypes($id)
    {
        $types = TemplateType::where('temp_id', $id)->get();
        return response()->json($types);
    }

    public function update(Request $request)
    {
//        dd($request->all());
        $this->validate($request, [
            'name' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $template = Template::find($request->id);

            $template->update([
                'user_id' => Auth::user()->id,
                'name' => $request->name,
                'code' => $request->code,
                'type' => $request->type,
                'desc' => $request->desc,
            ]);

            if ($request->expenses) {
                if ($template->types) {
                    foreach ($template->types as $item) {
                        $item->delete();
                    }
                }
                foreach ($request->expenses as $item) {
                    if ($item != null) {
                        TemplateType::create([
                            'temp_id' => $template->id,
                            'expense_id' => $item,
                        ]);
                    }
                }
            }

            DB::commit();
            return response(['type' => 'success', 'message' => 'Expense Template updated successfully...']);

        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response(['type'=>'error','message'=>'Error While Saving Transactions...']);
        }
    }

    public function delete(Request $request)
    {
        $template = Template::find($request->id);
        if ($template) {
            foreach ($template->types as $item) {
                $item->delete();
            }
            $template->delete();
            return response(['type' => 'success', 'message' => 'Expense Template Deleted successfully...']);
        }
    }

//    public function deleteType(Request $request)
//    {
////        dd($request->all());
//        $template = TemplateType::find($request->id);
//        if ($template) {
//            $template->delete();
//            return response(['type' => 'success', 'message' => 'Expense Template Deleted successfully...']);
//        } else {
//            return response(['type' => 'error', 'message' => 'Expense Template Deleted successfully...']);
//        }
//    }
}
