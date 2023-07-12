<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class AnuncioController extends Controller
{
    public function register(Request $request){
        $anuncio = Anuncio::create([
            'idDono' => $request->idDono,
            'idLivro' => $request->idLivro,
            'ativo' => true,
            'dataInicioPrazo' => $request->dataInicioPrazo,
            'dataFimPrazo' => $request->dataFimPrazo,
        ]);
        $response['status'] = 1;
        $response['message'] = 'Anuncio Registered Successfully';
        $response['code'] = 200;

        return response()->json($response);
    }
    public function todosAnuncios(){
        $Anuncios = Anuncio::all();

        if($Anuncios->isEmpty()){
            $response['status'] = 0;
            $response['message'] = 'Nenhum Anuncio';
            $response['code'] = 404;
            return response()->json($response);
        }

        return response()->json($Anuncios);
    }
    public function anunciosPorIdDono($idDono){
        $anuncios = Anuncio::where('idDono', $idDono)->get();

        if($anuncios->isEmpty()){
            $response['status'] = 0;
            $response['message'] = 'Anuncio não encontrado';
            $response['code'] = 404;
            return response()->json($response);
        }
        return response()->json($anuncios);
    }
}
