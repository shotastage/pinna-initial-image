

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
      initialize(pins);
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
        initialize(pins);
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






// マーカーのインスタンスを作成する
var marker = new google.maps.Marker( {
	map: map ,	// 地図
	position: new google.maps.LatLng( 35.792621, 139.806513 ) ,	// 位置座標
	icon: "./marker.png" ,	// マーカー画像
	clickable: true ,	// クリック
	crossOnDrag: true ,	// ドラッグ操作中の十字マーク
	draggable: true ,	// ドラッグ操作
	label: "●" ,	// ラベル
	opacity: false ,	// 不透明度
	title: "SYNCER" ,	// タイトル (ツールチップの内容)
	visible: true ,	// 表示状態
});


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
