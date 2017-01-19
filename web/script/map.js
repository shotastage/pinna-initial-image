
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
        var name = arg[i]['name'];
        var PinLatLng = {
            lat: lat,
            lng: lng
        };
        maker[i] = new google.maps.Marker({
            position: PinLatLng,
            map: map
        });
        listener[i] = google.maps.event.addListener(maker[i], "click", function () {
            if (name.match("youtu.be")) {
                var video_id = name.split("https://youtu.be/")[0];
            } else if (name.match("youtube.com")) {
                var video_id = name.split("https://www.youtube.com/watch?v=")[0];
            }
            var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video_id +'" frameborder="0" allowfullscreen></iframe>';
            document.getElementById("insert-area").innerHTML = html;
            document.getElementById("popup-trigger").click();
        });
    }
}

// Mapの初期化
window.onload = function () {
    init(pins);
}
