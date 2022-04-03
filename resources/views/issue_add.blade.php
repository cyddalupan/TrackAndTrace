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

                <form action="{{url('/')}}/{{$pageurl}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="category">Facebook User</label>
                        <select class="custom-select"
                                id="fb_id"
                                name="fb_id"
                                value="{{ old('fb_id') }}">
                            <option value="0">--none--</option>
                            @foreach ($fbusers as $fbuser)
                                <option value="{{$fbuser->id}}">{{$fbuser->fb_name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Person</label>
                        <select class="custom-select"
                                id="person_id"
                                name="person_id"
                                value="{{ old('person_id') }}">
                            <option value="0">--none--</option>
                            @foreach ($people as $person)
                                <option value="{{$person->id}}">{{$person->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Report Category</label>
                        <select class="custom-select"
                                id="report_category_id"
                                name="report_category_id"
                                value="{{ old('report_category_id') }}">
                            <option value="0">--none--</option>
                            @foreach ($categories as $category)
                                <option value="{{$category->id}}">{{$category->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="sub_category">Sub Category</label>
                        <input  id="sub_category"
                                name="sub_category" 
                                type="text" 
                                class="form-control"
                                placeholder="Sub Category"
                                value="{{ old('sub_category') }}">
                    </div>
                    <div class="form-group">
                        <label for="claimant">Claimant</label>
                        <input  id="claimant"
                                name="claimant" 
                                type="text" 
                                class="form-control"
                                placeholder="Claimant"
                                value="{{ old('claimant') }}">
                    </div>
                    <div class="form-group">
                        <label for="severity">Severity</label>
                        <input  id="severity"
                                name="severity" 
                                type="number" 
                                class="form-control"
                                placeholder="Severity"
                                value="{{ old('severity') }}">
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
