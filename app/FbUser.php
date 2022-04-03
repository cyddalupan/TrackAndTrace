<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FbUser extends Model
{
    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }

    public function reports()
    {
        return $this->belongsTo('App\Report','fb_id','fb_id');
    }
    
    
    public function people()
    {
        return $this->belongsTo('App\Person','fb_person_id');
    }
    
    
}
