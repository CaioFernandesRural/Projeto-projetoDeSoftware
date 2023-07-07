<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('anuncios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idDono');
            $table->unsignedBigInteger('idRequerente');
            $table->unsignedBigInteger('idLivro');
            $table->boolean('ativo');
            $table->boolean('emprestado');
            $table->date('dataInicioPrazo');
            $table->date('dataFimPrazo');
            $table->date('dataFim');
            $table->integer('avaliacao');
            $table->string('relato');
            $table->timestamps();

            $table->foreign('idDono')->references('id')->on('users');
            $table->foreign('idRequerente')->references('id')->on('users');
            $table->foreign('idLivro')->references('id')->on('livros');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anuncios');
    }
};
