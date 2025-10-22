// Harita Başlatma
var map = L.map('map').setView([39.9, 32.85], 6);  // Türkiye'nin merkezi

// OpenStreetMap Katmanını Ekleme
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// GeoJSON Verisini Haritaya Ekleyin
function getColor(d) {
    return d > 500 ? '#800026' :
           d > 200  ? '#BD0026' :
           d > 100  ? '#E31A1C' :
           d > 50   ? '#FC4E2A' :
           d > 20   ? '#FD8D3C' :
           d > 10   ? '#FEB24C' :
           '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.severity),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// GeoJSON Verisi Örneği
var fireData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "İstanbul",
                "fireDate": "2025-07-15",
                "severity": 300
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [28.5, 41.0],
                        [28.6, 41.0],
                        [28.6, 41.1],
                        [28.5, 41.1],
                        [28.5, 41.0]
                    ]
                ]
            }
        },
        // Diğer iller için veriler eklenebilir
    ]
};

// GeoJSON Verisini Haritaya Ekleyin
L.geoJSON(fireData, {
    style: style,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3>' +
                        '<p>Fire Date: ' + feature.properties.fireDate + '</p>' +
                        '<p>Severity: ' + feature.properties.severity + '</p>');
    }
}).addTo(map);
