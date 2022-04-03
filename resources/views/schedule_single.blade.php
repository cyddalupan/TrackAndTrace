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
                
                <form action="{{url('/')}}/{{$pageurl}}/{{$current->id}}" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input  id="title"
                                name="title" 
                                type="text" 
                                class="form-control"
                                placeholder="Title"
                                value="{{$current->title}}">
                    </div>
                    <img style="max-width:100px; max-height:100px;" src="{{url('/')}}/../storage/app/{{ $current->image }}" alt="{{$current->titlt}}" class="img-thumbnail">
                    <div class="form-group">
                        <label for="photo">Image</label>
                        <input  id="photo"
                                name="photo" 
                                type="file" 
                                class="form-control"
                                placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <input  id="message"
                                name="message" 
                                type="text" 
                                class="form-control"
                                placeholder="Message"
                                value="{{$current->message}}">
                    </div>
                    <div class="form-group">
                        <label for="button_name_1">First Button Name*</label>
                        <input  id="button_name_1"
                                name="button_name_1" 
                                type="text" 
                                class="form-control"
                                placeholder="First Button Name*"
                                value="{{$current->button_name_1}}">
                    </div>
                    <div class="form-group">
                        <label for="button_link_1">First Button Link*</label>
                        <input  id="button_link_1"
                                name="button_link_1" 
                                type="text" 
                                class="form-control"
                                placeholder="First Button Link*"
                                value="{{$current->button_link_1}}">
                    </div>
                    <div class="form-group">
                        <label for="button_name_2">Second Button Name</label>
                        <input  id="button_name_2"
                                name="button_name_2" 
                                type="text" 
                                class="form-control"
                                placeholder="Second Button Name"
                                value="{{$current->button_name_2}}">
                    </div>
                    <div class="form-group">
                        <label for="button_link_2">Second Button Link</label>
                        <input  id="button_link_2"
                                name="button_link_2" 
                                type="text" 
                                class="form-control"
                                placeholder="Second Button Link"
                                value="{{$current->button_link_2}}">
                    </div>
                    <div class="form-group">
                        <label for="button_name_3">Third Button Name</label>
                        <input  id="button_name_3"
                                name="button_name_3" 
                                type="text" 
                                class="form-control"
                                placeholder="Title"
                                value="{{$current->button_name_3}}">
                    </div>
                    <div class="form-group">
                        <label for="button_link_3">Third Button Link</label>
                        <input  id="button_link_3"
                                name="button_link_3" 
                                type="text" 
                                class="form-control"
                                placeholder="Title"
                                value="{{$current->button_link_3}}">
                    </div>
                    <div class="form-group">
                        <label for="month">Month</label>
                        <select class="custom-select"
                                id="month"
                                name="month"
                                value="{{ $current->month }}">
                            @foreach ($months as $month)
                                <option value="{{$month}}"
                                    @if ($current->month == $month)
                                        selected
                                    @endif
                                >{{$month}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="year">Year</label>
                        <select class="custom-select"
                                id="year"
                                name="year"
                                value="{{ $current->year }}">
                            @foreach ($years as $year)
                                <option value="{{$year}}"
                                    @if ($current->year == $year)
                                        selected
                                    @endif
                                >{{$year}}</option>
                            @endforeach
                        </select>
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
