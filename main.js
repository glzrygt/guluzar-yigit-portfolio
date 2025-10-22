const map = new Map({
  target: 'fireMap',
  layers: [vectorLayer],
  view: new View({
    center: fromLonLat([29, 39]), // Bu koordinatlar Türkiye'yi merkeze almalı
    zoom: 5, // Zoom seviyesini 5 yaparak daha yakın bir görünüm elde edebilirsiniz
  }),
});
popup.style.left = evt.pixel[0] + 10 + 'px';  // Küçük bir offset ekleyin
popup.style.top = evt.pixel[1] + 10 + 'px';   // Küçük bir offset ekleyin
console.log(features);  // Feature'ları konsola yazdırarak doğru bir şekilde oluşturulup oluşturulmadığını kontrol edin
