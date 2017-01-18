// Mapオブジェクト
var map;
// デフォルトズーム
var zoom = 15;
// デフォルトの座標 35.658513, 139.701504
var latlng = new google.maps.LatLng(35.658513, 139.701504);

// Google Map のPinオブジェクト
var maker = [];




// Gmap イニシャライザ
function initialize(data) {
    var pin_list = data;

    var Options = {
        zoom: zoom, /*拡大比率*/
        center: latlng, /*表示枠内の中心点*/
        mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
        disableDefaultUI: true, /* デフォルトのUIを無効化 */
        styles: mapStyle
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), Options);

    for (var i = 0; i < pin_list.length; i++) {
        PinLatLng = {
            lat: pin_list[i]['lat'],
            lng: pin_list[i]['lng']
        };
        maker[i] = new google.maps.Marker({
            position: PinLatLng,
            map: map
        });
    }
}




initialize(pins);


// Mapの初期化
window.onload = function () {
  initialize(pins);
}

document.getElementsByTagName("body")[0].addEventListener('onpageshow', function () {
	initialize(pins);
}, false);
