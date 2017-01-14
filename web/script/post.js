
function getCurrentLocation() {

    var lat;
	var lng;


    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
			    // 取得したデータの整理
			    var data = position.coords ;

			    // データの整理
			    lat = data.latitude ;
			    lng = data.longitude ;
			    var alt = data.altitude ;
			    var accLatlng = data.accuracy ;
			    var accAlt = data.altitudeAccuracy ;
			    var heading = data.heading ;			//0=北,90=東,180=南,270=西
			    var speed = data.speed ;
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
		    } ,

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

    var position = {
        latitude: lat,
        altitude: lng
    }

    return position;
}


function allocate(str) {
    var type, style, embedded_frame;

    var db = {
        type:           "music provider",
        style:             'width = "0"',
        embedded_frame: '<iframe></iframe>'
    }

    if (str.match("youtube") || str.match("youtu.be")) {
        db["type"] = "youtube";
        db["style"] = 'width="560" height="315"';
        db["embedded_frame"] = '<iframe' + style + 'src="' + str + '" frameborder="0" allowfullscreen></iframe>';
    }

    if (str.match("apple") || str.match("itunes")) {
        db["type"] = "apple";
        db["style"] = 'height="110px" width="100%" frameborder="0"';
        db["embedded_frame"] = '<iframe src="//tools.applemusic.com/embed/v1/song/' + str + '?country=jp"' + style + '></iframe>';
    }

    if (str.match("spotify")) {
        db["type"] = "spotify";
        db["style"] = 'height="110px" width="100%" frameborder="0"';
        db["embedded_frame"] = '<iframe src="//tools.applemusic.com/embed/v1/song/' + str + '?country=jp"' + style + '></iframe>';
    } else {
        db["type"] = "spotify";
        db["style"] = 'height="110px" width="100%"';
        db["embedded_frame"] = '<iframe></iframe>';
    }

    return db;
}


document.getElementById("post_pin").addEventListener("click", function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
			    // 取得したデータの整理
			    var data = position.coords ;

			    // データの整理
			    var lat = data.latitude ;
			    var lng = data.longitude ;

                 document.getElementById("position").innerHTML = "Your location: " + lat + ', ' + lng;
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
		    } ,

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

});
