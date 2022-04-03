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
                Add new
            </li>
        </ol>
    </nav>
    <br><br>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>Create New</h1>
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
                        <label for="message">Message</label>
                        <input  id="message"
                                name="message" 
                                type="text" 
                                class="form-control"
                                placeholder="Message"
                                value="{{ old('message') }}">
                    </div>
					{{-- <div class="form-group">
                        <label for="image_url">Image URL</label>
                        <input  id="image_url"
                                name="image_url" 
                                type="text" 
                                class="form-control"
                                placeholder=""
                                value="{{ old('image_url') }}">
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
                                            value="{{ old('option') }}">
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
                                            value="{{ old('quest') }}">
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
                                            value="{{ old('option2') }}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest2"
                                            name="quest2" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{ old('quest2') }}">
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
                                            value="{{ old('option3') }}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest3"
                                            name="quest3" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{ old('quest3') }}">
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
                                            value="{{ old('option4') }}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest4"
                                            name="quest4" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{ old('quest4') }}">
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
                                            value="{{ old('option5') }}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest5"
                                            name="quest5" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{ old('quest5') }}">
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
                                            value="{{ old('option6') }}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input  id="quest6"
                                            name="quest6" 
                                            type="number" 
                                            class="form-control"
                                            placeholder="Quest ID"
                                            value="{{ old('quest6') }}">
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
                                value="{{ old('wrongid') }}">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select class="custom-select"
                                id="category"
                                name="category"
                                value="{{ old('category') }}">
                            <option value="0">-- No Report --</option>
                            @foreach ($categories as $category)
                                <option value="{{$category->id}}">{{$category->name}}</option>
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
                                value="{{ old('subcategory') }}">
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
                                type="text" 
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
