<?php

use App\Http\Controllers\SuperheroController;
use Illuminate\Support\Facades\Route;


Route::get('/superheroes', [SuperheroController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
});
