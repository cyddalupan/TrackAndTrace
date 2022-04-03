<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agent extends Model
{
    use SoftDeletes;
    
    public function person()
    {
        return $this->belongsTo('App\Person');
    }

    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }
}
