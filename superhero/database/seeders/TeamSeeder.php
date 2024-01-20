<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Supprime toutes les entrées existantes dans la table
        DB::table('cities')->truncate();
        
        DB::table('teams')->insert([
            [
                'name' => 'Justice League',
                'nbmembers' => 6, // Nombre de membres dans la Justice League
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Avengers',
                'nbmembers' => 7, // Nombre de membres dans les Avengers
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
