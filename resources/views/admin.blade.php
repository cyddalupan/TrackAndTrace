@extends('layouts.app')

@section('content')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
                Admin
            </li>
        </ol>
    </nav>
    @if (session('message'))
        <div class="alert alert-warning" role="alert">
            {{ session('message') }}
        </div>
        <br>
    @endif
    <a href="{{url('/')}}/adminpage/create" class="btn btn-primary">
        <i class="fas fa-plus"></i>
        Add Admin
    </a>
    <br><br>
    <table class="table table-hover table-sm">
        <thead>
            <tr>
                @include('includes.th', ['dataname' => 'id','text' => '#'])
                @include('includes.th', ['dataname' => 'username','text' => 'Username'])
                @include('includes.th', ['dataname' => 'level','text' => 'Level'])
            </tr>
        </thead>
        <tbody>
            @foreach ($admins as $admin)
                <tr style="cursor:pointer" onclick="window.location='{{url('/')}}/adminpage/{{$admin->id}}';">
                    <th scope="row">
                        {{ $admin->id }}
                    </th>
                    <td>
                        {{ $admin->username }}
                    </td>
                    <td>
                        {{ $admin->level }}
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    @if ((int)$lastPage > 1)
        @include('includes.paginate')
    @endif
@endsection
