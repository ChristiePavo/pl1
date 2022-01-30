// Javascript template from https://developers.google.com/maps/documentation/javascript/examples/event-simple#maps_event_simple-javascript
// modified for my week 3 lab demo
function initMap() {
  const myLatlng = { lat: 44.063271493131865, lng: -78.50079749804347};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatlng ,
  });
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Click to zoom",
  });
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
  // adds a marker of a golder retriver to the Forest Centre
  // image taken from creative commons site https://www.pngall.com/golden-retrievers-png/download/39136
  const image =
    "images/retrieversm.png";
  const dogMarker = new google.maps.Marker({
    position: { lat: 44.07, lng: -78.5 },
    map,
    icon: image,
  });
}
  
 
