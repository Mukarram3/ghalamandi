<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
        ]);

        $role = Role::create([
            'user_id' => Auth::user()->id,
            'name' => $request->name,
            ]);

        foreach ($request->permissions as $item) {
            $perm = Permission::find($item);
            $role->givePermissionTo($perm->name);
        }
        return response(['type'=>'success','message'=>'Role created successfully....']);
    }

    public function edit($id)
    {
        $item = Role::find($id);

        return response()->json($item);
    }

    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $roles = Role::paginate($per_page);
//        dd($roles);
        $data = [];
        $permissions = [];
        $data['pagination'] = $roles;
        foreach($roles as $key => $item) {

//            if (count($item->permissions) != 0) {
//                $permissions = $item->permissions->pluck('name');
//            } else {
//                $permissions = 'N/A';
//            }
            $data['data'][$key]['id'] = $item->id;
            $data['data'][$key]['name'] = $item->name;
            $data['data'][$key]['permissions'] = $item->permissions;
        }
        return response()->json($data);
    }
    public function update(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
        ]);

        $role=Role::find($request->id);
        if ($role){
            $permissions = [];
            $role->update([
                'user_id' => Auth::user()->id,
                'name' => $request->name
            ]);
            foreach ($request->permissions as $item) {
                array_push($permissions, $item);
            }
                $role->syncPermissions($permissions);
            return response(['type'=>'success','message'=>'Role updated successfully...']);
        }
        return response(['type'=>'error','message'=>'something went wrong']);

    }
    public function delete(Request $request){
        $item=Role::find($request->id);
        if ($item){
            $item->delete();
            return response(['type'=>'success','message'=>'Role Deleted successfully...']);
        }
    }
}
