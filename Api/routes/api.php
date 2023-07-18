<?php

use App\Http\Controllers\AnuncioController;
use App\Http\Controllers\LivroController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Models\Livro;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//User
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/usuarioEmail/{email}', [UserController::class, 'usuarioEmail']);
//Livro
Route::post('/register', [LivroController::class, 'register']);
Route::get('/todosLivros', [LivroController::class, 'todosLivros']);
Route::get('/cincoRecentes', [LivroController::class, 'cincoRecentes']);
Route::get('/livroPorId/{id}', [LivroController::class, 'livroPorId']);
//Anuncio
Route::post('/register', [AnuncioController::class, 'register']);
Route::get('/todosAnuncios', [AnuncioController::class, 'todosAnuncios']);
Route::get('/anunciosPorIdDono/{idDono}', [AnuncioController::class, 'anunciosPorIdDono']);