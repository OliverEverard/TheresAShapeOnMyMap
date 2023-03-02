var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// create a marker on the map
//var marker = L.marker([51.5, -0.09]).addTo(map);

var myGeoJSON = L.geoJSON(null, {
  style: myStyle
}).addTo(map);
$.getJSON("TheresAShapeOnMyMap.geojson", function(data) {
  myGeoJSON.addData(data);
})
