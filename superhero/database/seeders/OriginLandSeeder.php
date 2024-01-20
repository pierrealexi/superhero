<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class OriginLandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ajoute des exemples de terres d'origine
        DB::table('origin_lands')->insert([
            [
                'name' => 'Krypton',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Earth',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
