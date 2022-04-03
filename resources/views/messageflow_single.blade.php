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
                
                <form action="{{url('/')}}/{{$pageurl}}/{{$current->id}}" method="POST">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="message">Message</label>
                        <input  id="message"
                                name="message" 
                                type="text" 
                                class="form-control"
                                placeholder="Message"
                                value="{{$current->quest->message}}">
                    </div>
					{{-- <div class="form-group">
                        <label for="image_url">Image URL</label>
                        <input  id="image_url"
                                name="image_url" 
                                type="text" 
                                class="form-control"
                                placeholder=""
                                value="{{$current->quest->image_url}}">
                    </div> --}}
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="option">Option</label>
                                    <input  id="option"
                                            name="option" 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Option"
                                            value="{{$rules[0]['option']}}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="quest">Quest ID</label>
                                    <input  id="quest"
                                            name="quest" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Option"
                                            value="{{$rules[0]['quest']}}">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input  id="option2"
                                            name="option2" 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Option"
                                            value="{{$rules[1]['option']}}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest2"
                                            name="quest2" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{$rules[1]['quest']}}">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input  id="option3"
                                            name="option3" 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Option"
                                            value="{{$rules[2]['option']}}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest3"
                                            name="quest3" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{$rules[2]['quest']}}">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input  id="option4"
                                            name="option4" 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Option"
                                            value="{{$rules[3]['option']}}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest4"
                                            name="quest4" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{$rules[3]['quest']}}">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input  id="option5"
                                            name="option5" 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Option"
                                            value="{{$rules[4]['option']}}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest5"
                                            name="quest5" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{$rules[4]['quest']}}">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input  id="option6"
                                            name="option6" 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Option"
                                            value="{{$rules[5]['option']}}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest6"
                                            name="quest6" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{$rules[5]['quest']}}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="wrongid">Wrong reply redirect to quest?</label>
                        <input  id="wrongid"
                                name="wrongid" 
                                type="number" 
                                class="form-control"
                                placeholder="Wrong reply redirect to quest?"
                                value="{{$current->quest->wrong_redirect_id}}">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select class="custom-select"
                                id="category"
                                name="category"
                                value="{{$current->report_category_id}}">
                            <option value="0">-- No Report --</option>
                            @foreach ($categories as $category)
                                <option value="{{$category->id}}"
                                    @if ($current->report_category_id === $category->id)
                                        selected
                                    @endif
                                >{{$category->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="subcategory">Sub Category</label>
                        <input  id="subcategory"
                                name="subcategory" 
                                type="text" 
                                class="form-control"
                                placeholder="Sub Category"
                                value="{{$current->subcategory}}">
                    </div>
                    <div class="form-group">
                        <label for="claimant">Claimant</label>
                        <input  id="claimant"
                                name="claimant" 
                                type="text" 
                                class="form-control"
                                placeholder="Claimant"
                                value="{{$current->claimant}}">
                    </div>
                    <div class="form-group">
                        <label for="severity">Severity</label>
                        <input  id="severity"
                                name="severity" 
                                type="text" 
                                class="form-control"
                                placeholder="Severity"
                                value="{{$current->severity}}">
                    </div>
                    <div class="form-group">
                        <label for="remarks">Remarks</label>
                        <input  id="remarks"
                                name="remarks" 
                                type="text" 
                                class="form-control"
                                placeholder="Remarks"
                                value="{{$current->remarks}}">
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
            <div  style="height:1200px" class="col-md-4 overflow-auto">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($quests as $quest)
                            <tr>
                                <th scope="row">{{$quest->id}}</th>
                                <td>{{$quest->message}}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
