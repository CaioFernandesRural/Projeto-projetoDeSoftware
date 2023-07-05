<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    use HasFactory;
    protected $table = 'usuarios';
    protected $fillable = [
        'nome',
        'telefone',
        'email',
        'idade',
        'sexo',
        'cidade',
        'estado',
        'bio',
        'password',
        'data_nasc',
        'admin'
    ];
    //data de criação o laravel coloca
}