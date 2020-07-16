// Creating map options
var mapOptions = {
    center: [51.487296, -0.125161],
    zoom: 14
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    minZoom: 1,
    maxZoom: 19,
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
