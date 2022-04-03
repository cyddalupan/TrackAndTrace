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
            <div class="col-md-6">
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
                
                <form action="{{url('/')}}/{{$pageurl}}/{{$current->id}}" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input  id="name"
                                name="name" 
                                type="text" 
                                class="form-control"
                                placeholder="Name"
                                value="{{$current->name}}">
                    </div>
                    <div class="form-group">
                        <label for="contact">Contact</label>
                        <input  id="contact"
                                name="contact" 
                                type="text" 
                                class="form-control"
                                placeholder="Contact"
                                value="{{$current->contact}}">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input  id="address"
                                name="address" 
                                type="text" 
                                class="form-control"
                                placeholder="Address"
                                value="{{$current->address}}">
                    </div>
                    <div class="form-group">
                        <label for="birthday">Birthday</label>
                        <input  id="birthday"
                                name="birthday" 
                                type="date" 
                                class="form-control"
                                placeholder="Birthday"
                                value="{{$current->birthday}}">
                    </div>
                    <div class="form-group">
                        <label for="passport_number">Passport Number</label>
                        <input  id="passport_number"
                                name="passport_number" 
                                type="text" 
                                class="form-control"
                                placeholder="Passport Number"
                                value="{{$current->passport_number}}">
                    </div>
                    @if (null !== $current->image)
                        <img style="max-width:100px; max-height:100px;" src="{{url('/')}}/../storage/app/{{ $current->image }}" alt="{{$current->name}}" class="img-thumbnail">
                    @else
                        <img style="max-width:100px; max-height:100px;" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="{{$current->name}}" class="img-thumbnail">
                    @endif
                    <div class="form-group">
                        <label for="photo">Image</label>
                        <input  id="photo"
                                name="photo" 
                                type="file" 
                                class="form-control"
                                placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="category">User Type</label>
                        <select class="custom-select"
                                id="usertype_id"
                                name="usertype_id"
                                value="{{$current->usertype_id}}">
                            @foreach ($usertypes as $usertype)
                                <option value="{{$usertype->id}}"
                                    @if ($current->usertype_id === $usertype->id)
                                        selected
                                    @endif
                                >{{$usertype->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Country</label>
                        <select class="custom-select"
                                id="country_id"
                                name="country_id"
                                value="{{$current->country_id}}">
                            @foreach ($countries as $country)
                                <option value="{{$country->id}}"
                                    @if ($current->country_id === $country->id)
                                        selected
                                    @endif
                                >{{$country->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Principal</label>
                        <select class="custom-select"
                                id="principal_id"
                                name="principal_id"
                                value="{{$current->principal_id}}">
                            @foreach ($principals as $principal)
                                <option value="{{$principal->id}}"
                                    @if ($current->principal_id === $principal->id)
                                        selected
                                    @endif
                                >{{$principal->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Agent</label>
                        <select class="custom-select"
                                id="agent_id"
                                name="agent_id"
                                value="{{$current->agent_id}}">
                            @foreach ($agents as $agent)
                                <option value="{{$agent->id}}"
                                    @if ($current->agent_id === $agent->id)
                                        selected
                                    @endif
                                >{{$agent->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Applicant Status</label>
                        <select class="custom-select"
                                id="applicant_status_id"
                                name="applicant_status_id"
                                value="{{$current->applicant_status_id}}">
                            @foreach ($applicantstatuses as $applicantstatus)
                                <option value="{{$applicantstatus->id}}"
                                    @if ($current->applicant_status_id === $applicantstatus->id)
                                        selected
                                    @endif
                                >{{$applicantstatus->name}}</option>
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
                                value="{{$current->hire_date}}">
                    </div>
                    <div class="form-group">
                        <label for="deployed_date">Date Deployed</label>
                        <input  id="deployed_date"
                                name="deployed_date" 
                                type="date" 
                                class="form-control"
                                placeholder="Date Deployed"
                                value="{{$current->deployed_date}}">
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
            <div class="col-md-6">
                @foreach ($current->myreports as $report)
                    <div class="card text-center">
                        <div class="card-header">
                            @if ($report->report_category_id)
                                {{$categoryArr[$report->report_category_id]}}
                            @endif
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-info">Sample chatlog</li>
                                <li class="list-group-item">Sample Reply</li>
                                <li class="list-group-item list-group-item-info">Sample chatlog</li>
                                <li class="list-group-item">Sample Reply</li>
                            </ul>
                        </div>
                        <div class="card-footer text-muted">
                            {{$report->remarks}}
                        </div>
                    </div>
                    <br>
                @endforeach
            </div>
        </div>
    </div>
@endsection
