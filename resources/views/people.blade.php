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
        <table style="width:1200px" class="table table-hover table-sm">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    @include('includes.th', ['dataname' => 'name','text' => 'Name'])
                    @include('includes.th', ['dataname' => 'contact','text' => 'Contact'])
                    @include('includes.th', ['dataname' => 'address','text' => 'Address'])
                    @include('includes.th', ['dataname' => 'birthday','text' => 'Birthday'])
                    @include('includes.th', ['dataname' => 'passport_number','text' => 'Passport Number'])
                    <th scope="col">Usertype</th>
                    <th scope="col">Country</th>
                    <th scope="col">Principal</th>
                    <th scope="col">Encoder</th>
                    <th scope="col">Agent</th>
                    <th scope="col">Applicant Status</th>
                    @include('includes.th', ['dataname' => 'hire_date','text' => 'Date Hired'])
                    @include('includes.th', ['dataname' => 'deployed_date','text' => 'Date Deployed'])
                    @include('includes.th', ['dataname' => 'last_report_at','text' => 'Last Report Date'])
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    <tr style="cursor:pointer" onclick="window.location='{{url('/')}}/{{$pageurl}}/{{$data->id}}';">
                        <td>
                            @if (null !== $data->image)
                                <img style="max-width:100px; max-height:100px;" src="{{url('/')}}/../storage/app/{{ $data->image }}" alt="{{$data->name}}" class="img-thumbnail">
                            @else
                                <img style="max-width:100px; max-height:100px;" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="{{$data->name}}" class="img-thumbnail">
                            @endif
                        </td>
                        <th scope="row">
                            {{ $data->name }}
                        </th>
                        <th scope="row">
                            {{ $data->contact }}
                        </th>
                        <td>
                            {{ $data->address }}
                        </td>
                        <td>
                            {{ $data->birthday }}
                        </td>
                        <td>
                            {{ $data->passport_number }}
                        </td>
                        <td>
                            @if (null !== $data->usertype)
                                {{ $data->usertype->name }}
                            @endif
                        </td>
                        <td>
                            @if (null !== $data->country)
                                {{ $data->country->name }}
                            @endif
                        </td>
                        <td>
                            @if (null !== $data->principal)
                                {{ $data->principal->name }}
                            @endif
                        </td>
                        <td>
                            @if (null !== $data->encoder)
                                {{ $data->encoder->username }}
                            @endif
                        </td>
                        <td>
                            @if (null !== $data->agent)
                                {{ $data->agent->name }}
                            @endif
                        </td>
                        <td>
                            @if (null !== $data->applicantstatus)
                                {{ $data->applicantstatus->name }}
                            @endif
                        </td>
                        <td>
                            {{ $data->hire_date }}
                        </td>
                        <td>
                            {{ $data->deployed_date }}
                        </td>
                        <td>
                            {{ $data->last_report_at }}
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
