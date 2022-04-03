@extends('layouts.app')

@section('content')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="{{url('/')}}/{{$pageurl}}">
                    {{$pageName}}
                </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                Report Page
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
                    <th scope="col">Person</th>
                    <th scope="col">Category</th>
                    <th scope="col">Subcategory</th>
                    <th scope="col">Claimant</th>
                    <th scope="col">Severity</th>
                    <th scope="col">Remarks</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    <tr style="cursor:pointer" onclick="window.location='{{url('/')}}/{{$pageurl}}/{{$data->id}}';">
                        <td>
                            @if (null !== $data->person)
                                {{ $data->person->name }}
                            @endif
                        </td>
                        <td>
                            @if (null !== $data->category)
                                {{ $data->category->name }}
                            @endif
                        </td>
                        <td>
                            {{ $data->subcategory }}
                        </td>
                        <td>
                            {{ $data->claimant }}
                        </td>
                        <td>
                            {{ $data->severity }}
                        </td>
                        <td>
                            {{ $data->remarks }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div>
        <h2>Chatlogs</h2>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                @foreach (explode("=br=", $merge->chatlogs) as $chatset)
                    @if ($chatset !== '')
                    <h3 class="text-right">
                        <span class="badge badge-info text-wrap">
                            {{ explode("=splt=", $chatset)[0] }}
                        </span>
                    </h3>
                        <h3 class="text-left">
                            <span class="badge badge-primary text-wrap">
                                {{ explode("=splt=", $chatset)[1] }}
                            </span>
                        </h3>
                    @endif
                @endforeach
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
@endsection
