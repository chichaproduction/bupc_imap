
  var mapOptions = {
    center: [65.385044, 100.486671],
    zoom: 3,
    minZoom: 3,
    maxZoom: 4
  }

//   var map = new L.map('map', mapOptions);

//   var map = L.map('map', {
//     crs: L.CRS.Simple,
//     minZoom: 7
// });

// var bounds = [[0,0], [4000,4000]];
// var image = L.imageOverlay('img/Main MAP.jpg', bounds).addTo(map);
// map.fitBounds(bounds);

// center of the map
var center = [400.300, 0.30];

// Create the map
var map = L.map('map', mapOptions);

// // Set up the OSM layer
// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
//     maxZoom: 18
//   }).addTo(map);

// // add a marker in the given location
// L.marker(center).addTo(map);
// L.marker([-35.8650, 154.2094]).addTo(map);

var imageUrl = 'img/Main MAP.png',
imageBounds = [center, [10.8650, 200.2094]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);


// TEST AREA
//Handle click on polygon
var circle = L.circle([60.8650, 50], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

var cb = L.polygon([
  [64.509, 16],
  [69.600, 33],
  [69.100, 38],
  [67.600, 38],
  [62.509, 21],
  [63.509, 16],
]).addTo(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
