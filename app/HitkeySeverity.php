<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HitkeySeverity extends Model
{
    use SoftDeletes;
    
    public function category()
    {
        return $this->belongsTo('App\ReportCategory', 'category_id');
    }
    
    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }
}
