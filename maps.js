function initMap() {
  
  var position = {lat: 53.5444, lng: -113.4909};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 2
  });

  function addMarker(latitude, longitude, message) {
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(latitude), lng: parseFloat(longitude)}
    });

    var infoWindow = new google.maps.InfoWindow({
      content: message
    });

    marker.setMap(map);
    infoWindow.open(map, marker);

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }

  return addMarker;
}

$(function(){
  addIt = initMap();

  $("#addMarker").click(function(){
    addIt(
      $("form input[name=latitude]").val(),
      $("form input[name=longitude]").val(),
      $("form input[name=message]").val()
    );
  });

});


 

