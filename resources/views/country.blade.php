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
        <table style="max-width:1200px" class="table table-hover table-sm">
            <thead>
                <tr>
                    @include('includes.th', ['dataname' => 'name','text' => 'Name'])
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    <tr style="cursor:pointer" onclick="window.location='{{url('/')}}/{{$pageurl}}/{{$data->id}}';">
                        <td>
                            {{ $data->name }}
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
