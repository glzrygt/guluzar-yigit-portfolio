// Initialize the map with OpenLayers
var map = new ol.Map({
  target: 'map',  // Map will be rendered in the 'map' div
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()  // OpenStreetMap as the base layer
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([27.1287, 38.4192]),  // İzmir coordinates
    zoom: 10  // Initial zoom level for İzmir
  })
});

// Style for the fire emoji
var fireIconStyle = new ol.style.Style({
  text: new ol.style.Text({
    text: '🔥',  // Fire emoji
    font: '40px Arial',  // Font size
    fill: new ol.style.Fill({
      color: '#ff004f'  // Red color for the emoji
    }),
    stroke: new ol.style.Stroke({
      color: '#fff',  // White stroke around the emoji
      width: 2
    })
  })
});

// Coordinates for the fire markers (Germiyan, Nohutalan, Ildır)
var fireMarkers = [
  { lat: 38.35028, lon: 26.50972 },  // Germiyan
  { lat: 38.2494, lon: 26.2900 },    // Nohutalan
  { lat: 38.2228, lon: 26.2946 }     // Ildır
];

// Convert fireMarkers array to OpenLayers features (for placing markers)
var fireFeatures = fireMarkers.map(function(marker) {
  var feature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([marker.lon, marker.lat]))  // Convert coordinates to OpenLayers format
  });
  feature.setStyle(fireIconStyle);  // Apply the fire emoji style to each feature (marker)
  return feature;
});

// Create a vector source and add the features (markers)
var vectorSource = new ol.source.Vector({
  features: fireFeatures
});

// Create a vector layer to hold the fire markers
var vectorLayer = new ol.layer.Vector({
  source: vectorSource
});

// Add the vector layer to the map
map.addLayer(vectorLayer);

// Add animation to fire markers (slight shaking effect)
var animationDuration = 2000;  // Animation duration in milliseconds
fireFeatures.forEach(function(feature) {
  // Slightly move the marker to the right
  feature.getGeometry().setCoordinates(ol.proj.fromLonLat([feature.getGeometry().getCoordinates()[0] + 0.0001, feature.getGeometry().getCoordinates()[1]]));
  setTimeout(function() {
    // Move the marker back to its original position
    feature.getGeometry().setCoordinates(ol.proj.fromLonLat([feature.getGeometry().getCoordinates()[0] - 0.0001, feature.getGeometry().getCoordinates()[1]]));
  }, animationDuration);
});

