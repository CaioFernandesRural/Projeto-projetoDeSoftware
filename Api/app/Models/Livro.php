<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    use HasFactory;

    protected $table = 'livros';

    protected $fillable = [
        'titulo',
        'autor',
        'sinopse',
        'capa',
        'editora',
        'edicao',
        'idioma',
        'ano',
        'numPag',
        'sbn10',
        'sbn13',
    ];
}
