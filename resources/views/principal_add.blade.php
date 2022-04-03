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

                <form action="{{url('/')}}/{{$pageurl}}" method="POST">
                    @csrf
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input  id="name"
                                name="name" 
                                type="text" 
                                class="form-control"
                                placeholder="Name"
                                value="{{ old('name') }}">
                    </div>
                    <div class="form-group">
                        <label for="contact">Contact</label>
                        <input  id="contact"
                                name="contact" 
                                type="text" 
                                class="form-control"
                                placeholder="Contact"
                                value="{{ old('contact') }}">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input  id="address"
                                name="address" 
                                type="text" 
                                class="form-control"
                                placeholder="Address"
                                value="{{ old('address') }}">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input  id="email"
                                name="email" 
                                type="text" 
                                class="form-control"
                                placeholder="Email"
                                value="{{ old('email') }}">
                    </div>
                    <button type="submit" 
                            class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
@endsection
