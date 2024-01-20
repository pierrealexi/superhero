<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class SuperheroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('superheroes')->insert([
            [
                'name' => 'Superman',
                'gender' => 'Male',
                'hairColor' => 'Black',
                'superPower' => 'Flight, Super Strength',
                'gadjets' => null,
                'vehicle' => null,
                'description' => 'The Man of Steel',
                'team_id' => 1, // Assurez-vous d'avoir une équipe avec cet ID dans la table 'team'
                'origin_land_id' => 1, // Assurez-vous d'avoir une terre d'origine avec cet ID dans la table 'origin_land'
                'cities_id' => 1, // Assurez-vous d'avoir une ville avec cet ID dans la table 'cities'
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

