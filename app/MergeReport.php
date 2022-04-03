<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MergeReport extends Model
{
    use SoftDeletes;
  
    public function report()
    {
        return $this->belongsTo('App\Report', 'merge_id', 'id');
    }
  
    public function person()
    {
        return $this->hasOne('App\Person', 'id', 'person_id');
    }
}
