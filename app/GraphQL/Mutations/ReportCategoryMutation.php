<?php

namespace App\GraphQL\Mutations;

/**
 * Update Model
 * Class name
 * and type
 */

use App\ReportCategory as MainModel;
use CLosure;
use GraphQL;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Mutation;

class ReportCategoryMutation extends Mutation
{       
    protected $attributes = [
        'name' => 'ReportCategory'
    ];

    public function type(): Type
    {
        return GraphQL::type('report_category');
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
        if(isset($args['id'])){
            $data = MainModel::find($args['id']);
        } else {
            $data = new MainModel;
        }
        if(!$data) {
            return null;
        }

        $table = new MainModel;
        foreach($table->getTableColumns() as $column){
            if(isset($args[$column])) $data[$column] = $args[$column];
        }
        $data->save();

        return $data;
    }
}