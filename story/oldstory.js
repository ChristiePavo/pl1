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
    mapTypeID: "hybrid",
  });
  const image = {
   "images/retrieversm.png";
  const dogmarker = new google.maps.Marker({
    position: myLatlng,
    map,
    icon: image,
    title: "Click to zoom",
  });
  
  dogmarker.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(dogmarker.getPosition());
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
  
  setdogMarkers(map);
     
// Data for the dog markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const dogspots = [
  ["deer crossing", 44.058461224255396, -78.4803871031043, 1],
  ["chance for tennis ball", 44.06182996685024, -78.48169558980015, 2],
  ["squirrel haven", 44.070573494998946, -78.48604451309998, 3],
  ["George gives treats", 44.073677666147496, -78.50357598960898, 4],
  ["Nasty dog to avoid", 44.06167086036685, -78.5002585261826, 5],
  ["Other Piper to visit", 44.06056979459591, -78.49244097079963, 6],
];

function setdogMarkers(map) {
  // Adds dog markers to the map.
  
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down. 
  
  // adds a marker of a golder retriver 
  // image taken from creative commons site https://www.pngall.com/golden-retrievers-png/download/39136
   const image = {
     "images/retrieversm.png",
  // This marker is 40 pixels wide by 34 pixels high
    size: new google.maps.Size(40, 34),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is (0, 34).
 //   anchor: new google.maps.Point(0, 34),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
//  const shape = {
//    coords: [1, 1, 1, 20, 18, 20, 18, 1],
//    type: "poly",
//  };

for (let i = 0; i < dogspots.length; i++) {
    const spot = dogspots[i];

    new google.maps.Marker({
     position: { lat: spot[1], lng: spot[2] },
      map,
      icon: image,
 //     shape: shape,
      title: spot[0],
      zIndex: spot[3],
    });
  }
}
 
