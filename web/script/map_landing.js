
// Mapオブジェクト
var map;

// デフォルトズーム
var zoom = 15;
// デフォルトの座標 35.658513, 139.701504
var latlng = new google.maps.LatLng(35.658513, 139.701504);



// Gmap イニシャライザ
function init() {
    var Options = {
        zoom: zoom,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: mapStyle
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), Options);
}

// Mapの初期化
window.onload = function () {
    init();
}
