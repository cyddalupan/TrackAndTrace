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
        <table style="max-width:1200px" class="table table-hover table-sm">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    @include('includes.th', ['dataname' => 'title','text' => 'Title'])
                    @include('includes.th', ['dataname' => 'message','text' => 'Message'])
                    <th scope="col">Schedule</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    <tr style="cursor:pointer" onclick="window.location='{{url('/')}}/{{$pageurl}}/{{$data->id}}';">
                        <td>
                            <img style="max-width:100px; max-height:100px;" src="{{url('/')}}/../storage/app/{{ $data->image }}" alt="{{$data->title}}" class="img-thumbnail">
                        </td>
                        <td>
                            {{ $data->title }}
                        </td>
                        <td>
                            {{ $data->message }}
                        </td>
                        <td>
                            {{ $data->month }}-{{ $data->year }}
                        </td>
                        <td>
                            <a href="{{url('/')}}/schedule_send/{{$data->id}}" class="btn btn-primary">
                                Test Send
                            </a>
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
