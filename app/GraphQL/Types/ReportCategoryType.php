<?php

namespace App\GraphQL\Types;

/**
 * Update Model
 * Class name
 * Attribute name
 */

use App\ReportCategory as MainModel;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ReportCategoryType extends GraphQLType
{    

    protected $attributes = [
        'name'          => 'ReportCategory',
        'model'         => MainModel::class,
    ];

    public function fields(): array
    {

        $table = new MainModel;
        $output = [];
        foreach($table->getTableColumns() as $column){
            $output[$column] = ['type' => Type::string()];
        }

        return $output;
    }
}