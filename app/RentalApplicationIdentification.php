<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RentalApplicationIdentification extends Model
{

    public function application()
    {
        return $this->belongsTo(RentalApplication::class);
    }

}
