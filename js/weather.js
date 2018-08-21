/**
 * Created by zsq on 2016/11/13.
 */
//调用jsonp函数请求当前所在城市
jsonp('https://api.map.baidu.com/api?v=2.0&ak=Dv1NMU23dh1sGS9n2tUouDEYY96Dfzh3&s=1&callback=getCity');
window.onload = function () {
    //请求天气车数据
    btn.addEventListener('click',function () {
        jsonp(createUrl()[0]);
        jsonp(createUrl()[1]);
    });
    text.addEventListener('keydown', function (e){
        if (e.keyCode == 13) {
            jsonp(createUrl()[0]);
            jsonp(createUrl()[1]);
        }
    });
}

function getCity() {
    function city(result) {
        //去掉城市名后的"市"
        var city = result.name.substring(0, result.name.length - 1);
        //请求当前城市的天气数据
        jsonp(createUrl(city)[0]);
        jsonp(createUrl(city)[1]);
    }
    var cityName = new BMap.LocalCity();
    cityName.get(city);
}

// 数据请求函数
function jsonp(url) {
    var script = document.createElement('script');
    script.src = url;
    document.body.insertBefore(script, document.body.firstChild);
    document.body.removeChild(script);
}

//数据请求成功回调函数，用于将获取到的数据放入页面相应位置
function getWeather(response) {
    var oSpan = document.getElementsByClassName('info');
    var data = response.result;
    oSpan[0].innerHTML = data[0].weather;
    oSpan[1].innerHTML = data[0].temp_low+'~'+data[0].temp_high+'°';
    //根据返回数据，替换不同天气图片
    changeImg(response);
}

function getTodayWeather(response) {
    var oSpan = document.getElementsByClassName('info');
    var data = response.results;
    // oSpan[7].innerHTML = data[0].pm25;
    // oSpan[8].innerHTML = data[0].index[4].zs;
    // oSpan[9].innerHTML = data[0].index[1].zs;
    // oSpan[10].innerHTML = data[0].index[2].zs;
    // oSpan[11].innerHTML = data[0].index[0].zs;
}

//根据获取到的数据更改页面中相应的图片
function changeImg(data) {
    var firstImg = document.getElementsByTagName("img")[0];
    var firstWeatherId = data.result[0].weatid;
    chooseImg(firstWeatherId, firstImg);

    var aImg = document.getElementById('future_container').getElementsByTagName('img');
    for (var j = 0; j < aImg.length; j++) {
        var weatherId = data.result[j + 1].weatid;
        chooseImg(weatherId, aImg[j]);
    }
}

//选择图片
function chooseImg(id, index) {
    switch (id) {
        case '0':
            index.src = 'images/0.png';
            break;
        case '1':
            index.src = 'images/1.png';
            break;
        case '2':
            index.src = 'images/2.png';
            break;
        case '3':
            index.src = 'images/3.png';
            break;
        case '4':
            index.src = 'images/4.png';
            break;
        case '5':
            index.src = 'images/5.png';
            break;
        case '6':
            index.src = 'images/6.png';
            break;
        case '7':
            index.src = 'images/7.png';
            break;
        case '8':
            index.src = 'images/8.png';
            break;
        case '9':
            index.src = 'images/9.png';
            break;
        case '10':
            index.src = 'images/10.png';
            break;
        case '11':
            index.src = 'images/11.png';
            break;
        case '12':
            index.src = 'images/12.png';
            break;
        case '13':
            index.src = 'images/13.png';
            break;
        case '14':
            index.src = 'images/14.png';
            break;
        case '15':
            index.src = 'images/15.png';
            break;
        case '16':
            index.src = 'images/16.png';
            break;
        case '17':
            index.src = 'images/17.png';
            break;
        case '18':
            index.src = 'images/18.png';
            break;
        case '19':
            index.src = 'images/19.png';
            break;
        case '20':
            index.src = 'images/20.png';
            break;
        case '21':
            index.src = 'images/21.png';
            break;
        case '22':
            index.src = 'images/22.png';
            break;
        case '23':
            index.src = 'images/23.png';
            break;
        case '24':
            index.src = 'images/24.png';
            break;
        case '25':
            index.src = 'images/25.png';
            break;
        case '26':
            index.src = 'images/26.png';
            break;
        case '27':
            index.src = 'images/27.png';
            break;
        case '28':
            index.src = 'images/28.png';
            break;
        case '29':
            index.src = 'images/29.png';
            break;
        case '30':
            index.src = 'images/30.png';
            break;
        case '31':
            index.src = 'images/31.png';
            break;
        case '32':
            index.src = 'images/32.png';
            break;
        default:
            index.src = 'images/8.png';
    }
}

//根据城市名创建请求数据及url
function createUrl() {
    var cityName = '';
    if (arguments.length == 0) {
        cityName = document.getElementById('text').value;
    } else {
        cityName = arguments[0];
    }
    var urls = [];
    urls[0] = 'https://sapi.k780.com/?app=weather.future&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=getWeather&weaid=' + encodeURI(cityName);
    urls[1] = 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=FK9mkfdQsloEngodbFl4FeY3&callback=getTodayWeather&location=' + encodeURI(cityName);
    return urls;
}