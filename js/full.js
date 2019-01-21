
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
var onPolyClick = function(event){
  //callFancyboxIframe('flrs.html')
  var label = event.target.options.label;
  var content = event.target.options.popup;
  var otherStuff = event.target.options.otherStuff;
  alert("Clicked on polygon with label:" +label +" and content:" +content +". Also otherStuff set to:" +otherStuff);
};
