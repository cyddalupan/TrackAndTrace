@extends('layouts.app')

@section('content')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
                Facebook User
            </li>
        </ol>
    </nav>
    <table class="table table-hover table-sm">
        <thead>
            <tr>
                @include('includes.th', ['dataname' => 'img','text' => 'Photo'])
                @include('includes.th', ['dataname' => 'fb_id','text' => 'Facebook ID'])
                @include('includes.th', ['dataname' => 'fb_name','text' => 'Facebook Name'])
                @include('includes.th', ['dataname' => 'last_chat_at','text' => 'Last Chat'])
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($facebookusers as $fbuser)
                <tr>
                    <th scope="row">
                        @if ($fbuser->img !== 'failed')
                            <img style="max-width:100px; max-height:100px;" src="{{$fbuser->img}}" alt="{{$fbuser->fb_name}}" class="img-thumbnail">
                        @else
                            <img style="max-width:100px; max-height:100px;" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="{{$fbuser->fb_name}}" class="img-thumbnail">
                        @endif                   
                    </th>
                    <td>
                        {{$fbuser->fb_id}}
                    </td>
                    <td>
                        {{$fbuser->fb_name}}
                    </td>
                    <td>
                        {{$fbuser->last_chat_at}}
                    </td>
                    <td>
                        @if ((int)$fbuser->fb_quest_id === 10)
                            <form action="{{url('/')}}/{{$pageurl}}/{{$fbuser->id}}" method="POST">
                                @method('PUT')
                                @csrf
                                <input type="hidden" name="fb_quest_id" value="5">
                                <button type="submit"
                                        class="btn btn-warning">
                                    Un-Block
                                </button>
                            </form>
                        @else
                            <form action="{{url('/')}}/{{$pageurl}}/{{$fbuser->id}}" method="POST">
                                @method('PATCH')
                                @csrf
                                <input type="hidden" name="fb_quest_id" value="10">
                                <button type="submit"
                                        class="btn btn-danger">
                                    Block
                                </button>
                            </form>
                        @endif
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    @if ((int)$lastPage > 1)
        @include('includes.paginate')
    @endif
@endsection
