var menuToggle = document.querySelector('#menuToggle');
var mapContainer = document.querySelector('#map');
var drawer = document.querySelector('#drawer');

menuToggle.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});

mapContainer.addEventListener('click', function() {
    drawer.classList.remove('open');
});

function addMarker(pos, map) {
    var marker = new google.maps.Marker({
        position: pos,
        map: map
    });
}

function Location(name, position) {
    this.name = name;
    this.position = position;
}

function ViewModel() {
    var self = this;

    self.locations = [
        new Location("Aquapark", {lat: 55.019988, lng: 82.888634}),
        new Location("Galileo", {lat: 55.009065, lng: 82.953222}),
        new Location("Pliny the Elder", {lat: 55.027040, lng: 82.920691}),
        new Location("Novosibirsk Zoo", {lat: 55.055385, lng: 82.879814}),
        new Location("Monument of Glory", {lat: 54.986975, lng: 82.874103}),
    ];

    self.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 55.022, lng: 82.912}
    });

    self.locations.forEach(function(location) {
        addMarker(location.position, self.map);
    });
}

ko.applyBindings(new ViewModel());
