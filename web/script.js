//
function initialize() {
  var latlng = new google.maps.LatLng(35.388471, 139.427608);
  var myOptions = {
    zoom: 18, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
    disableDefaultUI: true, /* デフォルトのUIを無効化 */
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    }
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
}




// カスタムコントロールボタン

function mapPlusButton(parent) {
  var UI = document.createElement('div');
  UI.classList.add("map-plus");
  parent.appendChild(UI);
}



function mapMinusButton(parent) {
  var UI = document.createElement('div');
  UI.classList.add("map-minus");
  parent.appendChild(UI);
}



// ユーティリティ
function attachStyle(map) {

}
