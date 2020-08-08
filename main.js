const key = 'AIzaSyCxe3ZrTFj6i92x-duy3G9Sb0R2cJrB_nc';
var map;

function createMap() {
    var options = {
        center: { lat: 43.654, lng: -79.383 },
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.Hybrid,
    };

    map = new google.maps.Map(document.getElementById('map'), options);

    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function () {
            var position = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            }, function () {
            handleLocationError('Geolocation service failed', map.center());
            })
            } else {
                handleLocationError('No geolocation available', map.center());

            }
            }

            function handleLocationError(content, position) {
                info.window.setPosition(position);
                infoWindow.setContent(content);
                infoWindow.open(map);
            }
        







