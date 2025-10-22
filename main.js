// OpenLayers modüllerini import ediyoruz
import Map from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/Map.js';
import View from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/View.js';
import { fromLonLat } from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/proj.js';
import VectorLayer from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/layer/Vector.js';
import VectorSource from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/source/Vector.js';
import Feature from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/Feature.js';
import { Style, Fill, Stroke, Circle } from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/style.js';
import { Point } from 'https://cdn.jsdelivr.net/npm/ol@v9.1.0/geom.js';

// Şehirlerin verilerini burada saklıyoruz (isim, koordinatlar ve renk)
const fireData = [
  { name: 'İzmir', coords: [27.1384, 38.4192], color: '#ff4f4f', date: '12 July 2025' },
  { name: 'Muğla', coords: [28.3636, 37.2153], color: '#ff884f', date: '20 July 2025' },
  { name: 'Antalya', coords: [30.7133, 36.8969], color: '#ffbb33', date: '25 July 2025' },
  { name: 'Çanakkale', coords: [26.4086, 40.1451], color: '#ff0066', date: '03 August 2025' },
  { name: 'Adana', coords: [35.3213, 37.0022], color: '#ff9900', date: '15 August 2025' }
];

// Harita üzerinde gösterilecek feature'ları oluşturuyoruz
const features = fireData.map(f => {
  const feature = new Feature({
    geometry: new Point(fromLonLat(f.coords)), // Koordinatları harita projeksiyonuna dönüştürme
    name: f.name,
    date: f.date
  });
  feature.setStyle(new Style({
    image: new Circle({
      radius: 10,
      fill: new Fill({ color: f.color }), // Her şehir için belirlenen renk
      stroke: new Stroke({ color: '#fff', width: 2 }) // Beyaz kenarlık
    })
  }));
  return feature;
});

// Harita katmanını oluşturuyoruz
const vectorLayer = new VectorLayer({
  source: new VectorSource({ features })
});

// Harita nesnesini oluşturuyoruz
const map = new Map({
  target: 'fireMap',  // Haritanın yerleştirileceği element ID'si
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),  // OpenStreetMap katmanı
    }),
    vectorLayer // Şehirlerin bulunduğu vektör katmanını ekliyoruz
  ],
  view: new View({
    center: fromLonLat([29, 39]),  // Türkiye'nin merkezine yakın bir yer
    zoom: 5  // Başlangıç zoom seviyesi
  })
});

// Popup için div öğesini oluşturuyoruz
const popup = document.createElement('div');
popup.style.position = 'absolute';
popup.style.background = 'white';
popup.style.padding = '5px';
popup.style.border = '1px solid #ff004f';
popup.style.display = 'none'; // Başlangıçta görünmesin
popup.style.pointerEvents = 'none';
popup.style.zIndex = '1000'; // Popup'un katmanını üstte tutmak için z-index ekliyoruz
document.body.appendChild(popup);

// Mouse hareketlerini takip ederek feature üzerinde popup gösteriyoruz
map.on('pointermove', (evt) => {
  const feature = map.forEachFeatureAtPixel(evt.pixel, (f) => f); // Mouse'un hangi feature üzerine geldiğini alıyoruz
  if (feature) {
    const name = feature.get('name');  // Şehir adı
    const date = feature.get('date');  // Tarih
    popup.style.display = 'block';  // Popup'ı göster
    popup.style.left = evt.pixel[0] + 15 + 'px';  // Popup'ı mouse'un bulunduğu konuma göre yerleştir
    popup.style.top = evt.pixel[1] + 15 + 'px';
    popup.innerHTML = `${name}<br><small>${date}</small>`;  // Popup içeriği
  } else {
    popup.style.display = 'none';  // Feature dışındaki yerlerde popup'ı gizle
  }
});
