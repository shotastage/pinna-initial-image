

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

}, 15000);




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



for (var i = 0; i <= maker.length; i++ ) {
	maker[i].addListener('click', function () {
		alert(クリック);
	}, false);
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
