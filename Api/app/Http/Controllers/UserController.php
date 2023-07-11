<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTGuard;

class UserController extends Controller
{
    public function register(Request $request) {

        $user = User::where('email', $request['email']) -> first();

        if($user) {
            $response['status'] = 0;
            $response['message'] = 'This email already exists';
            $response['code'] = 409;
        } else {
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
            'email' => $user->email
        ])->attempt($credentials);

        $response['data'] = $data;
        $response['status'] = 1;
        $response['code'] = 200;
        $response['message'] = 'Log in Successfully';
        return response()->json($response);
    
    }
}
