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
                View Page
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

                <form action="{{url('/')}}/{{$pageurl}}/{{$current->id}}" method="POST">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="person_id">Facebook User</label>
                        <select class="custom-select"
                                id="person_id"
                                name="person_id"
                                value="{{$current->person_id}}">
                            <option value="0">--none--</option>
                            @foreach ($persons as $person)
                                <option value="{{$person->id}}"
                                    @if ($current->person_id === $person->id)
                                        selected
                                    @endif
                                >{{$person->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input  id="name"
                                name="name" 
                                type="text" 
                                class="form-control"
                                placeholder="Name"
                                value="{{$current->name}}">
                    </div>
                    <button type="submit" 
                            class="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div class="text-right">
                    <form action="{{url('/')}}/{{$pageurl}}/{{$current->id}}" method="POST">
                        @method('DELETE')
                        @csrf
                        <button type="submit"
                                class="btn btn-link text-danger">
                            Delete {{$pageName}}
                        </button>
                    </form>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
@endsection
