function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 52.16478681573808,  
            lng: 5.453886574362138
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.447471210869864, lng: 5.406965713751027 },
        { lat: 52.09831680537423, lng: 5.064173183082606 },
        { lat: 52.309817038604116, lng: 4.763757558221749 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}