<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Person extends Model
{
    use SoftDeletes;
    
    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }

    public function reports()
    {
        return $this->belongsTo('App\Report');
    }

    public function myreports()
    {
        return $this->hasMany('App\Report', 'person_id', 'id');
    }

    public function facebook()
    {
        return $this->hasOne('App\FbUser', 'fb_person_id', 'id');
    }

    public function usertype()
    {
        return $this->belongsTo('App\UserType', 'usertype_id', 'id');
    }

    public function country()
    {
        return $this->belongsTo('App\Country', 'country_id', 'id');
    }

    public function principal()
    {
        return $this->belongsTo('App\Principal', 'principal_id', 'id');
    }

    public function agent()
    {
        return $this->belongsTo('App\Agent', 'agent_id', 'id');
    }

    public function applicantstatus()
    {
        return $this->belongsTo('App\ApplicantStatus', 'applicant_status_id', 'id');
    }

    public function encoder()
    {
        return $this->belongsTo('App\Admin', 'encoder_id', 'id');
    }
}
