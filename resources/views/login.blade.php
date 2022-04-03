@extends('layouts.blank')

@section('content')
<div class="container">
    <div class="row">
      <div class="col-md">
      </div>
      <div class="col-sm">
        <br><br>
        @if (session('message'))
            <br><br>
            <div class="alert alert-danger" role="alert">
                {{ session('message') }}
            </div>
        @endif
        <br><br>
        <form action="login/login" method="POST">
            @csrf
            <div class="form-group">
              <label for="username">Username</label>
              <input id="username" name="username" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" class="form-control" id="password">
            </div>
            <button type="submit"
                    class="btn btn-primary btn-block" 
                    style="width: 246px; border-radius: 5px; height: 44px; margin-top: 22px;">Submit</button>
            <br>
            <fb:login-button scope="public_profile,email" onlogin="checkLoginState();" class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width="">
                </fb:login-button>

            <div id="status"></div>
        </form>
      </div>
      <div class="col-md">
      </div>
    </div>
  </div>
@endsection
