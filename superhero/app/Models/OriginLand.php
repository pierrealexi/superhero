<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OriginLand extends Model
{
    use HasFactory;
    protected $table = 'origin_lands';
    protected $fillale = ['name'];
}
