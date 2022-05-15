<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required|email:rfc,dns',
        ]);

            $user = new User();
            $user->user_id = Auth::user()->id;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->gender = $request->gender;
            $user->status = $request->status;
            $user->date_of_birth = $request->date_of_birth;
            $user->salary = $request->salary;
            $user->password = Hash::make($request->password);
            $user->save();


        if(isset($request->role)) {
            foreach($request->role as $role){
                $roleCheck=Role::findByName($role);
                if ($roleCheck){
                    $user->assignRole($roleCheck);

                }
            }
        }
        return response(['type'=>'success','message'=>'User created successfully....']);
    }
    public function fetch(Request $request){
        $per_page = trim($request->per_page,"/");
        $users = User::with('roles')->paginate($per_page);

        return response()->json($users);
    }

    public function edit($id)
    {
        $item = User::find($id);
        $roles = [];
        $assignedRoles = $item->roles->pluck('name');
        foreach ($assignedRoles as $role) {
            array_push($roles, $role);
        }
        $data = [];
        $data['data'] = $item;
        $data['roles'] = json_encode($roles);

        return response()->json($data);
    }

    public function fetchRole(){
        $roles = Role::all();
        $data = [];
        foreach($roles as$key => $item) {
            $data[$key] = $item->name;
        }

        return response()->json(array_values($data));
    }
    public function update(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required|email:rfc,dns',
        ]);

        $user=User::find($request->id);
        if ($user){
            $roles = [];
            if(isset($request->role)) {
                foreach($request->role as $role){
                    $roleCheck=Role::findByName($role);
                    array_push($roles, $roleCheck);
                }
                if ($roles){
                    $user->syncRoles($roles);

                }
            }
            $user->user_id = Auth::user()->id;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->gender = isset($request->gender) ? $request->gender : $user->gender;
            $user->status = isset($request->status) ? $request->status : $user->status;
            $user->date_of_birth = $request->date_of_birth;
            $user->salary = $request->salary;
            $user->password = Hash::make($request->password);
            $user->update();


            return response(['type'=>'success','message'=>'User updated successfully...']);
        }
        return response(['type'=>'error','message'=>'something went wrong']);

    }
    public function delete(Request $request){
        $user=User::find($request->id);
        if ($user){
            $user->delete();
            return response(['type'=>'success','message'=>'User Deleted successfully...']);
        }
    }
}
