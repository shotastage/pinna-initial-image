

if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(
  	function(position) {
			// 取得したデータの整理
			var data = position.coords ;

			// データの整理
			var lat = data.latitude;
			var lng = data.longitude;

      latlng = new google.maps.LatLng(lat, lng);
      //initialize(pins);
			init(pins);
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



/*
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
        //initialize(pins);
				 init(pins);
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

}, 15000);*/




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

document.getElementById("logout").addEventListener("click", function () {
	if (window.localStorage) {
		window.localStorage.setItem("login_status", true);
    window.location.href = "/login/";
	} else {
		window.location.href = "/logout/";
	}
}, false);
