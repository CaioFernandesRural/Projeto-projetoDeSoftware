<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTGuard;

use function PHPUnit\Framework\isEmpty;

class UserController extends Controller
{
    public function register(Request $request) {

        $user = User::where('email', $request['email']) -> first();

        if($user) {
            $response['status'] = 0;
            $response['message'] = 'This email already exists';
            $response['code'] = 409;
        } else {
            // Verifique se o arquivo de foto de perfil foi enviado
            if ($request->hasFile('fotoPerfil')) {
                $file = $request->file('fotoPerfil');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('uploads', $fileName, 'public');
            } else {
            $filePath = null; // Defina o valor padrão se nenhum arquivo foi enviado
            }

            $user = User::create([
                'nome'      => $request->nome,
                'email'     => $request->email,
                'password'  => bcrypt($request->password),
                'telefone'  => $request->telefone,
                'idade'     => $request->idade,
                'sexo'      => $request->sexo,
                'cidade'    => $request->cidade,
                'estado'    => $request->estado,
                'bio'       => $request->bio,
                'fotoPerfil' => $filePath,
                'admin'     => $request->admin
            ]);
            $response['status'] = 1;
            $response['message'] = 'User Registered Successfully';
            $response['code'] = 200;
        }
        return response()->json($response);
    }

    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
        try {
            if(!JWTAuth::attempt($credentials)) {
                $response['status'] = 0;
                $response['code'] = 401;
                $response['data'] = null;
                $response['message'] = 'Email or password is incorrect';
                return response()->json($response);
            }
        } catch(JWTException $e) {
            $response['data'] = null;
            $response['code'] = 500;
            $response['message'] = 'Could not create token';
            return response()->json($response);
        }

        $user = auth()->user();
        $data['token'] = auth()->claims([
            'user_id' => $user->id,
            'email' => $user->email,
            'nome' => $user->nome,
            'telefone' => $user->telefone,
            'idade' => $user->idade,
            'sexo' => $user->sexo,
            'cidade' => $user->cidade,
            'estado' => $user->estado,
            'bio' => $user->bio,
            'fotoPerfil' => $user->fotoPerfil,
        ])->attempt($credentials);

        $response['data'] = $data;
        $response['status'] = 1;
        $response['code'] = 200;
        $response['message'] = 'Log in Successfully';
        return response()->json($response);
    
    }
    public function usuarioPorId($id){
        $usuario = User::where('id', $id)->get();

        if($usuario->isEmpty()){
            $response['status'] = 0;
            $response['message'] = 'Usuario não encontrado';
            $response['code'] = 404;
            return response()->json($response);
        }
        return response()->json($usuario);
    }
}
