<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css">

    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
    <title>Track</title>
  </head>
  <body>
      <script>
      ccredirect = 0;
    function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
        console.log('statusChangeCallback');
        console.log(response);                   // The current login status of the person.
        if (response.status === 'connected') {   // Logged into your webpage and Facebook.
          testAPI();  
        } else {                                 // Not logged into your webpage or we are unable to tell.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into this webpage.';
        }
      }
    
    
      function checkLoginState() {               // Called when a person is finished with the Login Button.
        ccredirect = 1;
        FB.getLoginStatus(function(response) {   // See the onlogin handler
          statusChangeCallback(response);
        });
      }
      
      window.fbAsyncInit = function() {
        FB.init({
          appId            : '505850150240934',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v7.0'
        });
        FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
          statusChangeCallback(response);        // Returns the login status.
        });
      };
    
      
      (function(d, s, id) {                      // Load the SDK asynchronously
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    
     
      function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me?fields=id,name,email,picture', function(response) {
          console.log('Successful login for: ' + response.name);
          console.log('ID: ' + response.id);
          console.log('EMIL: ' + response.email);
          console.log('PROPAYL: ' + response.picture.data.url);
          console.log('ccredirect',ccredirect);
          if(ccredirect == 1){
              window.location.href = "https://c19healthcare.net/mbs/data/public_html/login/fbredirect/"+response.id+"/"+response.name+"/"+response.email+"/"+response.picture.data.url.replace(/\//g, "-sl-");
          }
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });
      }
    </script>
    <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
    
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">
            <i class="fas fa-route"></i>
            Track and Trace
        </span>
    </nav>
    @yield('content')

    <!-- font awesome -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js" integrity="sha256-MAgcygDRahs+F/Nk5Vz387whB4kSK9NXlDN3w58LLq0=" crossorigin="anonymous"></script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
