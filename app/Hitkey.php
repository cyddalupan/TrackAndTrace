<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hitkey extends Model
{
    use SoftDeletes;
    
    public function severities()
    {
        return $this->hasMany('App\HitkeySeverity');
    }

    public function unique()
    {
        return $this->belongsTo('App\UniqueChat', 'unique_chat_id');
    }

    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }
}
