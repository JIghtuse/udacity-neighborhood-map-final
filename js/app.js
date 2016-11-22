function initMap() {
    var nsk = {lat: 55.018803, lng: 82.933952};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: nsk
    });
    var marker = new google.maps.Marker({
        position: nsk,
        map: map
    });
}
