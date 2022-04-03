<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Report extends Model
{
    use SoftDeletes;
    
    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }

    public function person()
    {
        return $this->belongsTo('App\Person');
    }

    public function category()
    {
        return $this->belongsTo('App\ReportCategory','report_category_id','id');
    }

    public function fbuser()
    {
        return $this->belongsTo('App\FbUser','fb_id','fb_id');
    }

    public function severities()
    {
        return $this->hasMany('App\ReportSeverity');
    }
}