<?php

namespace App\Http\Controllers;

use App\Models\Livro;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class LivroController extends Controller
{
    public function register(Request $request){

        //não precisa checar se um livro é único

        $livro = Livro::create([
            'titulo' => $request->titulo,
            'autor' => $request->autor,
            'sinopse' => $request->sinopse,
            'capa' => $request->capa,
            'editora' => $request->editora,
            'edicao' => $request->edicao,
            'idioma' => $request->idioma,
            'ano' => $request->ano,
            'numPag' => $request->numPag,
            'sbn10' => $request->sbn10,
            'sbn13' => $request->sbn13,
        ]);
        $response['status'] = 1;
        $response['message'] = 'Livro Registered Successfully';
        $response['code'] = 200;

        return response()->json($response);
    }

    public function cincoRecentes(){
        $livros = Livro::orderBy('created_at', 'desc')->take(5)->get();

        if($livros->isEmpty()){
            $response['status'] = 0;
            $response['message'] = 'Nenhum livro';
            $response['code'] = 404;
            return response()->json($response);
        }

        return response()->json($livros);
    }

    public function todosLivros(){
        $livros = Livro::all();

        if($livros->isEmpty()){
            $response['status'] = 0;
            $response['message'] = 'Nenhum livro';
            $response['code'] = 404;
            return response()->json($response);
        }

        return response()->json($livros);
    }
    public function livroPorId($id){
        $livro = Livro::find($id);

        if(isEmpty($livro)){
            $response['status'] = 0;
            $response['message'] = 'Nenhum livro';
            $response['code'] = 404;
            return response()->json($response);
        }
        return response()->json($livro);
    }
}
