<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Casegen extends Model
{
    use SoftDeletes;
    
    public function quest()
    {
        return $this->belongsTo('App\FbQuest');
    }

    public function category()
    {
        return $this->belongsTo('App\ReportCategory', 'report_category_id', 'id');
    }

    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }
}
