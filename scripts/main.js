let worldMapBounds = [
  [65, -180],
  [-60, 180],
];

let map1 = L.map("map1", {
  fullScreenControl: false,
  attributionControl: false,
  zoomSnap: 0.5,
  minZoom: 1.5,
  maxZoom: 5,
  maxBounds: worldMapBounds,
});

let map2 = L.map("map2", {
  fullScreenControl: false,
  attributionControl: false,
  zoomSnap: 0.5,
  minZoom: 1.5,
  maxZoom: 5,
  maxBounds: worldMapBounds,
});

let map3 = L.map("map3", {
  fullScreenControl: false,
  attributionControl: false,
  zoomSnap: 0.5,
  minZoom: 1.5,
  maxZoom: 5,
  maxBounds: worldMapBounds,
});

let map4 = L.map("map4", {
  fullScreenControl: false,
  attributionControl: false,
  zoomSnap: 0.5,
  minZoom: 1.5,
  maxZoom: 5,
  maxBounds: worldMapBounds,
});

map1.fitBounds(worldMapBounds);
map2.fitBounds(worldMapBounds);
map3.fitBounds(worldMapBounds);
map4.fitBounds(worldMapBounds);


let iconLogoNavy = L.icon({
  iconUrl: "images/logo_navy.png",
  iconSize: [30, 30],
  popupAnchor: [0, -15],
});

let iconLogoNavyBorder = L.icon({
  iconUrl: "images/logo_navy_border.png",
  iconSize: [30, 30],
  popupAnchor: [0, -15],
});

let iconLogoWhite = L.icon({
  iconUrl: "images/logo_white.png",
  iconSize: [30, 30],
  popupAnchor: [0, -15],
});

let popupStyle = {
  closeButton: false,
};

function styleCountries1(feature) {
  return {
    color: "#000000",
    fillColor: "#F5CD05",
    fillOpacity: 1,
    opacity: 1,
    weight: 0.25,
  };
}

function styleCountries2(feature) {
  return {
    color: "#3d3d3d",
    fillColor: "#F5CD05",
    fillOpacity: 1,
    opacity: 1,
    weight: 0.5,
  };
}

function styleCountries3(feature) {
  return {
    color: "#ffffff",
    fillColor: "#0b8f62",
    fillOpacity: 1,
    opacity: 1,
    weight: 0.5,
  };
}

function styleCountries4(feature) {
  return {
    color: "#ffffff",
    fillColor: "#0a1449",
    fillOpacity: 1,
    opacity: 1,
    weight: 0.5,
  };
}

function onEachMarker(feature, layer) {
  let popupContent =
    '<p class="popup-title">' + feature.properties.location + "</p>";

  layer.bindPopup(popupContent, popupStyle);
}

let layerCountries1 = L.geoJSON(geojsonCountries, {
  style: styleCountries1,
}).addTo(map1);

let layerCountries2 = L.geoJSON(geojsonCountries, {
  style: styleCountries2,
}).addTo(map2);

let layerCountries3 = L.geoJSON(geojsonCountries, {
  style: styleCountries3,
}).addTo(map3);

let layerCountries4 = L.geoJSON(geojsonCountries, {
  style: styleCountries4,
}).addTo(map4);

let layerLocations1 = L.geoJson(geojsonLocations, {
  onEachFeature: onEachMarker,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: iconLogoNavy });
  },
}).addTo(map1);

let layerLocations2 = L.geoJson(geojsonLocations, {
  onEachFeature: onEachMarker,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: iconLogoWhite });
  },
}).addTo(map2);

let layerLocations3 = L.geoJson(geojsonLocations, {
  onEachFeature: onEachMarker,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: iconLogoNavy });
  },
}).addTo(map3);

let layerLocations4 = L.geoJson(geojsonLocations, {
  onEachFeature: onEachMarker,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: iconLogoWhite });
  },
}).addTo(map4);
