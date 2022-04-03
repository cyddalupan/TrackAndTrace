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
                    @include('includes.th', ['dataname' => 'quest_id','text' => 'Quest ID'])
                    <th scope="col">Message</th>
                    <th scope="col">Report Category</th>
                    <th scope="col">Wrong</th>
                    <th scope="col">Opt 1</th>
                    <th scope="col">Opt 2</th>
                    <th scope="col">Opt 3</th>
                    <th scope="col">Opt 4</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    @php(
                        $arr_options = explode(',',$data->quest->rule)
                    )
                    <tr style="cursor:pointer" onclick="window.location='{{url('/')}}/{{$pageurl}}/{{$data->id}}';">
                        <th scope="row">
                            {{ $data->quest_id }}
                        </th>
                        <th scope="row">
                            <div class="text-wrap" style="width: 300px;">
                                {{ $data->quest->message }}
                            </div>
                        </th>
                        <td>
                            @if (isset($data->category->name))
                                {{ $data->category->name }}
                            @endif
                        </td>
                        <td>
                            {{ $data->quest->wrong_redirect_id }}
                        </td>
                        <td>
                            @if(isset($arr_options[0]))
                                @if($arr_options[0] != ":")
                                    {{ $arr_options[0] }}
                                @endif
                            @endif
                        </td>
                        <td>
                            @if(isset($arr_options[1]))
                                {{ $arr_options[1] }}
                            @endif
                        </td>
                        <td>
                            @if(isset($arr_options[2]))
                                {{ $arr_options[2] }}
                            @endif
                        </td>
                        <td>
                            @if(isset($arr_options[3]))
                                {{ $arr_options[3] }}
                            @endif
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
