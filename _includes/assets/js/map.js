// Creating map options
var mapOptions = {
    center: [51.489837, -0.118741],
    zoom: 14
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
    detectRetina: true
});

// Adding layer to the map
map.addLayer(layer);

// Creating a marker
var marker = L.marker([51.489837, -0.118741]);
marker.bindPopup("<span class='text-xl text-right text-gray-900 font-display'>64 Tyers Street<br>London SE11 5AE</span>");

// Adding marker to the map
marker.addTo(map);
marker.openPopup();
