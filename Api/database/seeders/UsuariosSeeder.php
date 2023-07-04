<?php

namespace Database\Seeders;

use App\Models\Usuarios;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 100; $i++){
            Usuarios::create([
                'nome' => $faker->name,
                'telefone' => $faker->phoneNumber(),
                'email' => $faker->email(),
                'idade' => $faker->numberBetween(1, 120),
                'sexo' => $faker->randomLetter(),
                'cidade' => $faker->city(),
                'estado' => $faker->randomLetter() . $faker->randomLetter(),
                'bio' => $faker->text(),
                'password' => $faker->password(),
                'data_nasc' => $faker->date(),
                'admin' => $faker->boolean(10)
            ]);
        }
    }
}
