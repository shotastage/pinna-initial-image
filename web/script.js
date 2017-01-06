// Mapオブジェクト
var map;
// デフォルトズーム
var zoom = 18;
// デフォルトの座標
var latlng = new google.maps.LatLng(35.388471, 139.427608);


// Mapの初期化
window.addEventListener('load', function () {
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



function initialize() {
  var myOptions = {
    zoom: zoom, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
    disableDefaultUI: true /* デフォルトのUIを無効化 */
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
}





// ユーティリティ
function attachStyle(map) {

}
