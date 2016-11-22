var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function addMarker(location, map, label) {
    var marker = new google.maps.Marker({
        position: location,
        label: label,
        map: map
    });
}

function initMap() {
    var nsk = {lat: 55.022, lng: 82.911983};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: nsk
    });

    var locations = [
        {lat: 55.019988, lng: 82.888634},
        {lat: 55.009065, lng: 82.953222},
        {lat: 55.027040, lng: 82.920691},
        {lat: 55.055372, lng: 82.879887},
        {lat: 54.986975, lng: 82.874103}
    ];

    locations.forEach(function(location) {
        addMarker(location, map, labels[labelIndex++ % labels.length]);
    });
}
