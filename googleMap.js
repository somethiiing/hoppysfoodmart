function init_map() {
    var myOptions = {
        zoom: 17,
        center: new google.maps.LatLng(37.3712463, -122.04915840000001),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(37.3712463, -122.04915840000001)
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>Hoppy\'s Food Mart</strong><br>625 S. Mary Ave, Sunnyvale CA 94087<br>'
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);