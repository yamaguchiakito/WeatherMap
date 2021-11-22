function weatherIcon() {
    //var images_src = new Array("images/0.jpeg","pics/1.jpeg","pics/2.jpeg","pics/3.jpeg","pics/4.jpeg","pics/5.jpeg","pics/6.jpeg","pics/7.jpeg","pics/8.jpeg","pics/9.jpeg","pics/10.jpeg","pics/11.jpeg","pics/12.jpeg","pics/13.jpeg","pics/14.jpeg","pics/15.jpeg","pics/16.jpeg","pics/17.jpeg","pics/18.jpeg");
    //天気
    angular.module('myApp', [])
    .controller('MyController', ['$scope', '$http', function($scope, $http) {
        $scope.onclick = function(w) {
        $http.jsonp('http://api.openweathermap.org/data/2.5/weather',
            {
                params: {
                    callback: 'JSON_CALLBACK',  // 1コールバック関数の名前
                    id: $scope.city,            // コード
                    lat: 35.1834122,
                    lon: 137.1108532,
                    APPID: 'c79b8ff1d56f9c7d9a242382f719ceb4'  // キー
                }
            }
        )
        // Web APIの結果に基づいて天気アイコンを表示
        .success(function(data) 
            {
                $scope.weather =  'http://openweathermap.org/img/w/' + data.weather[0].icon +'.png';
            }
        )
        .error(function(err) 
            {
                console.log(err);
            }
        );
        };
    }]);
}