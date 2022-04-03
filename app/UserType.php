<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    public function getTableColumns() {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }
}
