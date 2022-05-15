<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Commodity;
use App\Models\Deal;
use Illuminate\Http\Request;

class StockReportController extends Controller
{
    public function fetch(){
        $commodities=Commodity::with('category')->get();

        return response()->json($commodities);
    }
}
