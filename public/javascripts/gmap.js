var map;
  var laSalleBajio  = {
      lat:21.147937699292566,
      lng:-101.70620429365023
      
  }
  function initMap() {
      var mapDiv = document.getElementById('map');
      var mapOptions = {
        center: laSalleBajio,
        zoom:20,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
     map = new google.maps.Map(mapDiv,mapOptions);
}