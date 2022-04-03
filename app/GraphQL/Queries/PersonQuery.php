<?php

namespace App\GraphQL\Queries;

/**
 * Update Model
 * Class name
 * and type
 */

use App\Person as MainModel;
use Closure;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class PersonQuery extends Query
{
    protected $attributes = [
        'name' => 'query'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('person'));
    }

    public function args(): array
    {
        $table = new MainModel;
        $output = [];
        foreach($table->getTableColumns() as $column){
            $output[$column] = ['name' => $column, 'type' => Type::string()];
        }

        return $output;
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $table = new MainModel;
        foreach($table->getTableColumns() as $column){
            if (isset($args[$column])) {
                return MainModel::where($column , $args[$column])->get();
            }
        }

        return MainModel::all();
    }
}