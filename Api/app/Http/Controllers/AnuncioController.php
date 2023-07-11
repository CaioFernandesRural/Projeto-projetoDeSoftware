<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use Illuminate\Http\Request;

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
}
