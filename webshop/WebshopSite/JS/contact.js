var map = L.map("map").setView([51.0759, 4.2812], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([51.07595, 4.28142]).addTo(map);

marker.bindPopup("Hoogstraat 83.").openPopup();
