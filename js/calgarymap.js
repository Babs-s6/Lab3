document.addEventListener('DOMContentLoaded', function () {

    var map = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        //id: 'omerbabiker6/ckzx02xym003t14p7eozax3eq',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoib21lcmJhYmlrZXI2IiwiYSI6ImNrend6OTE5ZzJyZm4yeXM4b3hvMXEzc2EifQ.gq0W9TkWYkpsppk6FccLgw'
    });

    var incidets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'omerbabiker6/ckzx02xym003t14p7eozax3eq',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoib21lcmJhYmlrZXI2IiwiYSI6ImNrend6OTE5ZzJyZm4yeXM4b3hvMXEzc2EifQ.gq0W9TkWYkpsppk6FccLgw'
    });

    var mymap = L.map('mapid', {layers: [map, incidets]}).setView([51.0447, -114.0719], 13);

    var baseMaps = {
        "Map": map
    };

    var overlayMaps = {
        "Incidets": incidets
    };

    L.control.layers(baseMaps, overlayMaps).addTo(mymap);

});
