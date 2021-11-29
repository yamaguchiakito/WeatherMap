// UTCをミリ秒に
function utcToJSTime(utcTime) {
    return utcTime * 1000;
}

// データ取得
function ajaxRequest(lat, long) {
    const url = 'http://api.openweathermap.org/data/2.5/weather';
    const appId = 'c79b8ff1d56f9c7d9a242382f719ceb4';

    $.ajax({
        url: url,
        data: {
            appid: appId,
            lat: lat,
            lon: long,
            // units: 'metric',
            lang: 'ja'
        }
    })
    .done(function(data) {
        // 都市名、国名
        $('#place').text("現在の天気");

        // 天気予報データ
        data.list.forEach(function(forecast, index) {
            // const dateTime = new Date(utcToJSTime(forecast.dt));
            // const month = dateTime.getMonth() + 1;
            // const date = dateTime.getDate();
            // const hours = dateTime.getHours();
            // const min = String(dateTime.getMinutes()).padStart(2, '0');
            // const temperature = Math.round(forecast.main.temp);
            const description = forecast.weather[0].description;
            const iconPath = `images/${forecast.weather[0].icon}.svg`;

            // 現在の天気とそれ以外で出力を変える
          
                const currentWeather = `
                <div class="icon"><img src="${iconPath}"></div>
                <div class="info">
                    <p>
                        <span class="description">現在の天気：${description}</span>
                    </p>
                </div>`;
                $('#weather').html(currentWeather);

        });
    })
    .fail(function() {
        console.log('$.ajax failed!');
    })
}

/*
function a(){
    ajaxRequest(35.1834122,137.1108532);
}
a();
*/
