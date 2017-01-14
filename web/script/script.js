// Mapオブジェクト
var map;
// デフォルトズーム
var zoom = 15;
// デフォルトの座標 35.658513, 139.701504
var latlng = new google.maps.LatLng(35.658513, 139.701504);

initialize();


// Mapの初期化
window.addEventListener('load', function () {
  initialize();
}, false);

window.addEventListener('hashchange', function () {
  initialize();
}, false);


setInterval(function () {
  var lat, lng;

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
			  // 取得したデータの整理
			  var data = position.coords ;

			  // データの整理
			  var lat = data.latitude;
			  var lng = data.longitude;

        latlng = new google.maps.LatLng(lat, lng);
        initialize();
	    },

		  // [第2引数] 取得に失敗した場合の関数
		  function(error) {
			  var errorInfo = [
				  "原因不明のエラーが発生しました…。" ,
				  "位置情報の取得が許可されませんでした…。" ,
				  "電波状況などで位置情報が取得できませんでした…。" ,
				  "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
        ];

			  // エラー番号
			  var errorNo = error.code ;

			  // エラーメッセージ
			  var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ];

			  // アラート表示
        alert(errorMessage);
		  },

		  // [第3引数] オプション
		  {
			  "enableHighAccuracy": false,
			  "timeout": 8000,
			  "maximumAge": 2000,
		  }
	  );
  } else {
    alert("Failed to get your location.\nPlease confirm settings or GPS modules.");
  }

}, 10000);







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

// 位置情報の取得



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
