$(document).ready(function() {

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://pokeapi.co/api/v2/pokemon-species",
    "method": "GET",
    "headers": {}
  };

  $.ajax(settings).then(function (response) {
    console.log(response);
  });

  console.log("");
});