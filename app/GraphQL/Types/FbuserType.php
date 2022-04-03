<?php

namespace App\GraphQL\Types;

/**
 * Update Model
 * Class name
 * Attribute name
 */

use App\FbUser as MainModel;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class FbuserType extends GraphQLType
{    

    protected $attributes = [
        'name'          => 'Fbuser',
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