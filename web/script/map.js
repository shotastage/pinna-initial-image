
// Mapオブジェクト
var map;

// デフォルトズーム
var zoom = 15;
// デフォルトの座標 35.658513, 139.701504
var latlng = new google.maps.LatLng(35.658513, 139.701504);

// Google Map のPinオブジェクト
var maker = [];

// イベントリスナ
var listener = [];



// Gmap イニシャライザ
function init(arg) {
    var Options = {
        zoom: zoom,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: mapStyle
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), Options);

    for (var i = 0; i < arg.length; i++) {
        var lat = arg[i]['lat'];
        var lng = arg[i]['lng'];
        var PinLatLng = {
            lat: lat,
            lng: lng
        };
        maker[i] = new google.maps.Marker({
            position: PinLatLng,
            map: map
        });
        listener[i] = google.maps.event.addListener(maker[i], "click", function () {
            alert("CLICK");
        });
    }
}

// Mapの初期化
window.onload = function () {
    init(pins);
}
