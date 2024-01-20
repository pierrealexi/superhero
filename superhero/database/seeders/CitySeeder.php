<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ajoute des exemples de villes
        DB::table('cities')->insert([
            [
                'name' => 'Metropolis',
                'planet' => 'Earth',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Gotham City',
                'planet' => 'Earth',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
