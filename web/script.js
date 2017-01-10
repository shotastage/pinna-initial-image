// Mapオブジェクト
var map;
// デフォルトズーム
var zoom = 15;
// デフォルトの座標 35.659112, 139.703349
var latlng = new google.maps.LatLng(35.659112, 139.703349);


// Mapの初期化
window.addEventListener('load', function () {
  initialize();
}, false);

window.addEventListener('hashchange', function () {
  initialize();
}, false);


// ズームクリック
document.getElementById("map_plus").addEventListener("click", function () {
  zoom = zoom + 1;
  map.setZoom(zoom);
}, false);
// フェードクリック
document.getElementById("map_minus").addEventListener("click", function () {
  zoom = zoom - 1;
  map.setZoom(zoom);
}, false);






// Gmap イニシャライザ
function initialize() {
    var Options = {
        zoom: zoom, /*拡大比率*/
        center: latlng, /*表示枠内の中心点*/
        //mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
        disableDefaultUI: true, /* デフォルトのUIを無効化 */
        styles: mapStyle
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), Options);
}


// ピン作成
function createMapPin(lat, lng, pin_title) {
  var LatLng = {
    lat: lat,
    lng: lng
  };

  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: zoom
  });

  var marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    title: title
  });


  marker.setMap(map);
}

// ユーティリティ
function attachStyle(map) {

}
