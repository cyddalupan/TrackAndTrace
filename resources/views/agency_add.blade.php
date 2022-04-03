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
                        <label for="fb_access_token">Access token</label>
                        <input  id="fb_access_token"
                                name="fb_access_token" 
                                type="text" 
                                class="form-control"
                                placeholder="Access token"
                                value="{{ old('fb_access_token') }}">
                    </div>
                    <div class="form-group">
                        <label for="fb_page_token">Page token</label>
                        <input  id="fb_page_token"
                                name="fb_page_token" 
                                type="text" 
                                class="form-control"
                                placeholder="Page token"
                                value="{{ old('fb_page_token') }}">
                    </div>
                    <div class="form-group">
                        <label for="owner">Owner</label>
                        <input  id="owner"
                                name="owner" 
                                type="text" 
                                class="form-control"
                                placeholder="Owner"
                                value="{{ old('owner') }}">
                    </div>
                    <div class="form-group">
                        <label for="status">Status</label>
                        <input  id="status"
                                name="status" 
                                type="text" 
                                class="form-control"
                                placeholder="Status"
                                value="{{ old('status') }}">
                    </div>
                    <div class="form-group">
                        <label for="remarks">Remarks</label>
                        <input  id="remarks"
                                name="remarks" 
                                type="text" 
                                class="form-control"
                                placeholder="Remarks"
                                value="{{ old('remarks') }}">
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
