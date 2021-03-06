// Javascript templated from 
// https://developers.google.com/maps/documentation/javascript/examples/event-simple#maps_event_simple-javascript
// https://developers.google.com/maps/documentation/javascript/examples/event-simple
// https://developers.google.com/maps/documentation/javascript/examples/icon-simple
// https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
// modified for my week 3 lab demo
function initMap() {
  var myLatlng = { lat: 44.063271493131865, lng: -78.50079749804347};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatlng,
  });
  
  var marker= new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Click to zoom",
  });
  
  marker.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker.getPosition());
  });
  
  
  // adding simple polyline to show Piper's favourite walk
  const dogWalkCoordinates = [
    {lat: 44.05702684784443, lng:-78.48639804016226},
    {lat: 44.05855275335276, lng: -78.47995972665657},
    {lat: 44.07599811000987, lng: -78.48882454796582},
    {lat: 44.072468883017926, lng: -78.5046908840712},
    {lat: 44.07322025242667, lng: -78.5049592559165},
    {lat: 44.07424101140935, lng: -78.50432779424877},
    {lat: 44.07347377590891, lng: -78.50414207022884},
    {lat: 44.07236627060101, lng: -78.50469924228862},
    {lat: 44.0590592329152, lng: -78.49908179118238},
    {lat: 44.06051995910029, lng: -78.49224966780604},
    {lat: 44.057953268305084, lng: -78.49067684056696},
    {lat: 44.057283093251755, lng: -78.48990885075072},
    {lat: 44.0564355080569, lng: -78.4891408609345},
    {lat: 44.05702684784443, lng: -78.48639804016226},
  ];
  const dogWalkPath = new google.maps.Polyline({
    path: dogWalkCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
  dogWalkPath.setMap(map);
  // setdogMarkers(map);

  // adds a marker of a golder retriver 
  // image taken from creative commons site https://www.pngall.com/golden-retrievers-png/download/39136
  const image = 
   "images/retrieversm.png";
   var myLatlng1 = { lat: 44.058461224255396, lng: -78.4803871031043}; 
   var marker = new google.maps.Marker({
    position: myLatlng1,
    map,
    icon: image,
    title: "deer crossing",
  });
  var myLatlng2 = { lat: 44.06182996685024, lng: -78.48169558980015}; 
   var marker = new google.maps.Marker({
    position: myLatlng2,
    map,
    icon: image,
    title: "chance for tennis ball",
  });

  var myLatlng3 = { lat: 44.067349, lng: -78.484474}; 
  var marker = new google.maps.Marker({
   position: myLatlng3,
   map,
   icon: image,
   title: "squirrel haven",
 });

 var myLatlng4 = { lat: 44.073677666147496, lng: -78.50357598960898}; 
  var marker = new google.maps.Marker({
   position: myLatlng4,
   map,
   icon: image,
   title: "George gives treats",
 });

 var myLatlng5 = { lat: 44.05903351017362, lng: -78.49902100027727}; 
  var marker = new google.maps.Marker({
   position: myLatlng5,
   map,
   icon: image,
   title: "Nasty dog to avoid",
 });

 var myLatlng6 = { lat: 44.06056979459591, lng: -78.49244097079963}; 
  var marker = new google.maps.Marker({
   position: myLatlng6,
   map,
   icon: image,
   title: "Other Piper to visit",
 });
  
}