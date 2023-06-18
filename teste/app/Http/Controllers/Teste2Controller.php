<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Teste2Controller extends Controller
{
    public function socorro(){

       $res = 3;

        return 'prova terça quarta e quinta, simplesmente intankavel<br> um mais um é: '. $res;
    }

    public function home(){
        //imagine que carregamos dados do banco
        $nome = "rogerinho";
        $animais = ['cachorro', 'papagaio', 'kazaquistão'];

        return view('homepage', ['nome' => $nome, 'nomecachorro' => 'Titus', 'animais' => $animais]);
    }
}
