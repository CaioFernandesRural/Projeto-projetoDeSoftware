<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    public function todos(){
        $usuarios = User::all();
        return response()->json($usuarios);
    }
    public function cadastro(Request $request){
        $usuario = new User;
        $usuario->nome = $request->nome;
        $usuario->telefone = $request->telefone;
        $usuario->email = $request->email;
        $usuario->idade = $request->idade;
        $usuario->sexo = $request->sexo;
        $usuario->cidade = $request->cidade;
        $usuario->estado = $request->estado;
        $usuario->bio = $request->bio;
        $usuario->password = $request->password;
        $usuario->data_nasc = $request->data_nasc;
        $usuario->admin = $request->admin;
        $usuario->save();
        return response()->json([
            'message' => 'usuario adicionado'
        ], 201);
    }
    public function pegaEmail($email){
        $usuario = User::where('email', $email)->first();

        if(!empty($usuario)){
            return response()->json($usuario);
        } else {
            return response()->json([
                'message' => "não encontrado"
            ], 404);
        }
    }
}
