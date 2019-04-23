<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppvueController extends Controller
{
    public function index() {
        return view('app');
    }
}
