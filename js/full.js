
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
// var circle = L.circle([60.8650, 50], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 1000
// }).addTo(map);

//Buildings

//Cacapit Building
var cb = L.polygon([
  [64.962808, 15.738929],
  [69.600, 33],
  [69.100, 38],
  [67.600, 38],
  [62.509, 21],
  [63.509, 16],
]).addTo(map);

//Salceda Building
var cb = L.polygon([
  [58.70182, 87.427735],
  [61.881099, 87.427735],
  [62.128824, 86.460938],
  [62.486461, 86.352981],
  [63.719876, 88.724483],
  [70.432011, 108.529161],
  [70.750267, 111.325252],
  [69.678573, 115.453423],
  [69.255725, 115.498104],
  [69.130738, 115.058937],
  [67.00405, 114.903774],
  [66.377555, 120.085945],
  [68.59358, 126.002038],
  [68.914318, 129.541346],
  [67.711887, 133.845183],




]).addTo(map);

function onMapClick(e) {
  alert(e.latlng);
}

map.on('click', onMapClick);
