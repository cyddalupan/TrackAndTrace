<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
     <!-- Bootstrap CSS 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css">-->
  <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}">
    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
    <title>Track</title>
  </head>
  <body>
    <nav class="navbar navbar-light bg-light justify-content-between">
        <span class="navbar-brand mb-0 h1">
            <i class="fas fa-route"></i>
            Track and Trace
        </span>
        <div class="right">
          <a  data-toggle="modal" data-target="#staticBackdrop" 
              style="cursor:pointer; font-size:15px; margin-right:20px;">
            <i class="fas fa-bell"></i><span class="badge badge-danger">
              <?php echo $_SESSION['count']; ?>
            </span>
          </a>
          <a href="{{url('/')}}/logout">
              <span class="navbar-brand mb-0 h1">
                  <i class="fas fa-sign-out-alt"></i>
                  Logout
              </span>
          </a>
        </div>
    </nav>
    <br>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <ul class="nav flex-column">
                  @if ($_SESSION['admin_level'] == 2)
                      <li class="nav-item">
                          <a class="nav-link" href="{{url('/')}}/">
                              <i class="fas fa-tachometer-alt"></i>
                              Dashboard
                          </a>
                      </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 2)
                      <li class="nav-item">
                          <a class="nav-link" href="{{url('/')}}/facebookuser">
                              <i class="fab fa-facebook-square"></i>
                              Facebook User
                          </a>
                      </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 2)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/messageflow">
                          <i class="far fa-file-word"></i>
                          Message Flow
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 2)
                  <li class="nav-item">
                    <a class="nav-link" href="{{url('/')}}/people">
                        <i class="fas fa-user-friends"></i>
                        People
                    </a>
                    <ul>
                      <li>
                        <a class="nav-link" href="{{url('/')}}/connectedpeople">
                          Connected
                        </a>
                      </li>
                      <li>
                        <a class="nav-link" href="{{url('/')}}/notconnectedpeople">
                          Not Connected
                        </a>
                      </li>
                    </ul>
                  </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 2)
                  <li class="nav-item">
                    <a class="nav-link" href="{{url('/')}}/issue">
                        <i class="fas fa-file-signature"></i>
                        Issues
                    </a>
                    <ul>
                      <li>
                        <a class="nav-link" href="{{url('/')}}/open_group">
                          Open
                        </a>
                      </li>
                      <li>
                        <a class="nav-link" href="{{url('/')}}/close_group">
                          Closed
                        </a>
                      </li>
                    </ul>
                  </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 1)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/applicantstatus">
                          <i class="fas fa-stream"></i>
                          Applicant Status
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 2)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/principal">
                          <i class="fas fa-mail-bulk"></i>
                          Principals
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 2 || $_SESSION['admin_level'] == 3)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/agent">
                          <i class="fas fa-users-cog"></i>
                          Agent
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 1)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/country">
                          <i class="far fa-flag"></i>
                          Countries
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 1)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/reportcategory">
                          <i class="fas fa-object-ungroup"></i>
                          Report Categories
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 2)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/schedule">
                          <i class="far fa-calendar-alt"></i>
                          Schedule Message
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 1)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/adminpage">
                        <i class="fas fa-chalkboard-teacher"></i>
                        Admin
                      </a>
                    </li>
                  @endif
                  @if ($_SESSION['admin_level'] == 1)
                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/')}}/agency">
                          <i class="fas fa-atlas"></i>
                          Agency
                      </a>
                    </li>
                  @endif
                </ul>
            </div>
            <div class="col-md-10">
                @yield('content')
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Notifications</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <?php foreach ($_SESSION['notifications'] as $key => $value) { ?>
              <?php echo $value->fb_users_name; ?>: <?php echo $value->user_message; ?>
              <hr>
            <?php }  ?>
          </div>
        </div>
      </div>
    </div>

    <!-- font awesome -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js" integrity="sha256-MAgcygDRahs+F/Nk5Vz387whB4kSK9NXlDN3w58LLq0=" crossorigin="anonymous"></script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
