// Javascript templated from 
// https://developers.google.com/maps/documentation/javascript/examples/event-simple#maps_event_simple-javascript
// https://developers.google.com/maps/documentation/javascript/examples/icon-simple
// https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
// modified for my week 3 lab demo
function initMap() {
  const myLatlng = { lat: 44.063271493131865, lng: -78.50079749804347};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatlng,
//    mapTypeID: "hybrid",
  });
//  const image = {
//   "images/retrieversm.png";
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
//    icon: image,
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
}
