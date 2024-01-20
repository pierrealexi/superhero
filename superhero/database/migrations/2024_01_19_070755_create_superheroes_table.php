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
        if (!Schema::hasTable('superheroes')) {
        Schema::create('superheroes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('gender');
            $table->string('hairColor');
            $table->string('superPower');
            $table->string('gadjets')->nullable();
            $table->string('vehicle')->nullable();
            $table->text('description');
            $table->unsignedBigInteger('team_id');
            $table->unsignedBigInteger('origin_land_id');
            $table->unsignedBigInteger('cities_id');
            $table->timestamps();

            $table->foreign('team_id')->references('id')->on('team');
            $table->foreign('origin_land_id')->references('id')->on('origin_land');
            $table->foreign('cities_id')->references('id')->on('cities');
        });
    }
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('superheroes');
    }
};
