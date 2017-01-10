// Mapオブジェクト
var map;
// デフォルトズーム
var zoom = 15;
// デフォルトの座標 35.658513, 139.701504
var latlng = new google.maps.LatLng(35.658513, 139.701504);


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


// Create Pin クリック
document.getElementById("create_pin").addEventListener("click", function () {
  var create_pin = document.getElementById("create_window");
  create_pin.classList.toggle("visible");
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

// 位置情報の取得
function getLocation() {
  if( navigator.geolocation ) {
    return false;
  } else { 
    console.log("Failed to get your location.");
	  alert( "申し訳ございません。お使いの端末は位置情報の取得に対応していないか、その機能がOFFになっています。\n");
    return false;
  }
}


// 対応ブラウザ判定
function judgeBrowser() {
  var ua = U;

  var supported_browser_list = [
    "chrome",
    "safari",
    "firefox"
  ];

  var none_supported_browser_list = [
    ""
  ];
  
}
