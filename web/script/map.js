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







// 現在地を取得しMapを更新
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
      console.log(errorMessage);
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
        console.log(errorMessage);
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
