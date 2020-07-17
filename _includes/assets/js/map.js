// Creating map options
var mapOptions = {
    center: [51.487296, -0.125161],
    zoom: 14
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHV2YWxyZW1pIiwiYSI6ImNrY3EwbjdpODEwbXYzM3BiNG1wamlnYjcifQ.f5jpxqWg8DfhZ2ZtyxWqSg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'duvalremi/ckcq128li0k5l1iuoyhoah895',
    tileSize: 512,
    zoomOffset: -1,
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
