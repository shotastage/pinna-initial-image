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






//イニシャライザ
function initialize() {
    var mapStyle = [
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                { "hue": "#7fc8ed" },
                { "saturation": 55 },
                { "lightness": -6 },
                { "visibility": "on" }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                { "hue": "#7fc8ed" },
                { "saturation": 55 },
                { "lightness": -6  },
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                { "hue": "#83cead" },
            {
                "saturation": 1
            },
            {
                "lightness": -15
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#f3f4f4"
            },
            {
                "saturation": -84
            },
            {
                "lightness": 59
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbbbbb"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -35
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -22
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#d7e4e4"
            },
            {
                "saturation": -60
            },
            {
                "lightness": 23
            },
            {
                "visibility": "on"
            }
        ]
    }
]


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
