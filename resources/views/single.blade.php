@extends('layouts.app')

@section('content')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="{{url('/')}}/adminpage">
                Admin
                </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                {{$current->username}}
            </li>
        </ol>
    </nav>
    <br><br>
    <div class="container">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-8">
                @if (session('message'))
                    <div class="alert alert-success" role="alert">
                        {{ session('message') }}
                    </div>
                    <br>
                @endif

                @if ($errors->any())
                    @foreach ($errors->all() as $error)
                        <div class="alert alert-danger" role="alert">
                            {{ $error }}
                        </div>
                    @endforeach
                @endif
                
                <form action="{{url('/')}}/adminpage/{{$current->id}}" method="POST">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input  id="username"
                                name="username" 
                                type="text" 
                                class="form-control"
                                value="{{$current->username}}">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input  type="password" 
                                name="password" 
                                class="form-control" 
                                id="password">
                    </div>
                    <div class="form-group">
                        <label for="agency_id">Agency</label>
                        <select class="custom-select"
                                id="agency_id"
                                name="agency_id"
                                value="{{$current->agency_id}}">
                            <option value="0"></option>
                            @foreach ($agencies as $agency)
                                <option value="{{$agency->id}}"
                                    @if ($current->agency_id === $agency->id)
                                        selected
                                    @endif
                                >{{$agency->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="level">Level</label>
                        <input  type="number"
                                name="level"
                                class="form-control"
                                id="level"
                                value="{{$current->level}}">
                    </div>
                    <button type="submit" 
                            class="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div class="text-right">
                    <form action="{{url('/')}}/adminpage/{{$current->id}}" method="POST">
                        @method('DELETE')
                        @csrf
                        <button type="submit"
                                class="btn btn-link text-danger">
                            Delete Admin
                        </button>
                    </form>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
@endsection
