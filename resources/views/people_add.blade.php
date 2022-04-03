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
                        <label for="birthday">Birthday</label>
                        <input  id="birthday"
                                name="birthday" 
                                type="date" 
                                class="form-control"
                                placeholder="Birthday"
                                value="{{ old('birthday') }}">
                    </div>
                    <div class="form-group">
                        <label for="passport_number">Passport Number</label>
                        <input  id="passport_number"
                                name="passport_number" 
                                type="text" 
                                class="form-control"
                                placeholder="Passport Number"
                                value="{{ old('passport_number') }}">
                    </div>
                    <div class="form-group">
                        <label for="photo">Image</label>
                        <input  id="photo"
                                name="photo" 
                                type="file" 
                                class="form-control"
                                placeholder="Image"
                                value="{{ old('username') }}">
                    </div>
                    <div class="form-group">
                        <label for="category">User Type</label>
                        <select class="custom-select"
                                id="usertype_id"
                                name="usertype_id"
                                value="{{ old('usertype_id') }}">
                            @foreach ($usertypes as $usertype)
                                <option value="{{$usertype->id}}">{{$usertype->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Country</label>
                        <select class="custom-select"
                                id="country_id"
                                name="country_id"
                                value="{{ old('country_id') }}">
                            @foreach ($countries as $country)
                                <option value="{{$country->id}}">{{$country->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Principal</label>
                        <select class="custom-select"
                                id="principal_id"
                                name="principal_id"
                                value="{{ old('principal_id') }}">
                            @foreach ($principals as $principal)
                                <option value="{{$principal->id}}">{{$principal->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Agent</label>
                        <select class="custom-select"
                                id="agent_id"
                                name="agent_id"
                                value="{{ old('agent_id') }}">
                            @foreach ($agents as $agent)
                                <option value="{{$agent->id}}">{{$agent->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Applicant Status</label>
                        <select class="custom-select"
                                id="applicant_status_id"
                                name="applicant_status_id"
                                value="{{ old('applicant_status_id') }}">
                            @foreach ($applicantstatuses as $applicantstatus)
                                <option value="{{$applicantstatus->id}}">{{$applicantstatus->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="hire_date">Hire Date</label>
                        <input  id="hire_date"
                                name="hire_date" 
                                type="date" 
                                class="form-control"
                                placeholder="Hire Date"
                                value="{{ old('hire_date') }}">
                    </div>
                    <div class="form-group">
                        <label for="deployed_date">Date Deployed</label>
                        <input  id="deployed_date"
                                name="deployed_date" 
                                type="date" 
                                class="form-control"
                                placeholder="Date Deployed"
                                value="{{ old('deployed_date') }}">
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
