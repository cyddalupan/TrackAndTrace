@extends('layouts.app')

@section('content')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
                {{$pageName}}
            </li>
        </ol>
    </nav>
    @if (session('message'))
        <div class="alert alert-warning" role="alert">
            {{ session('message') }}
        </div>
        <br>
    @endif
    <a href="{{url('/')}}/{{$pageurl}}/create" class="btn btn-primary">
        <i class="fas fa-plus"></i>
        Add {{$pageName}}
    </a>
    <br><br>
    <div class="table-responsive">
        <table style="width:1200px" class="table table-hover table-sm">
            <thead>
                <tr>
                    @include('includes.th', ['dataname' => 'person_name','text' => 'Name'])
                    @include('includes.th', ['dataname' => 'categories_text','text' => 'Categories'])
                    @include('includes.th', ['dataname' => 'subcategories_text','text' => 'Subcategories'])
                    @include('includes.th', ['dataname' => 'claimant_text','text' => 'Claimant'])
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    <tr style="cursor:pointer" onclick="window.location='{{url('/')}}/group_issue/{{$data->id}}';">
                        <td>
                            {{ $data->person_name }}
                        </td>
                        <td>
                            @foreach (explode("=br=", $data->categories_text) as $categories)
                                @if ($categories !== '')
                                    <span class="badge badge-primary">
                                        {{ $categories }}
                                    </span>
                                @endif
                            @endforeach
                        </td>
                        <td>
                            @foreach (explode("=br=", $data->subcategories_text) as $subcategory)
                                @if ($subcategory !== '')
                                    <span class="badge badge-success">
                                        {{ $subcategory }}
                                    </span>
                                @endif
                            @endforeach
                        </td>
                        <td>
                            @foreach (explode("=br=", $data->claimant_text) as $claimant)
                                @if ($claimant !== '')
                                    <span class="badge badge-info">
                                        {{ $claimant }}
                                    </span>
                                @endif
                            @endforeach
                        </td>
                        <td>
                            @if ($data->is_closed)
                                <a href="{{url('/')}}/group_issue/open/{{$data->id}}" class="btn btn-dark">
                                    Re-Open
                                </a>
                            @else
                                <a href="{{url('/')}}/group_issue/close/{{$data->id}}" class="btn btn-danger">
                                    Close
                                </a>
                            @endif
                        
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @if ((int)$lastPage > 1)
        @include('includes.paginate')
    @endif
@endsection
