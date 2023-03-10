


    function getLocation() {
        return new Promise(function (resolve, reject) {
            try {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(position.coords);
                });
            } catch (e) {
                reject(new Error(e));
            }
        });
    }


    const getWeather = (coords) => {
        const apiKey = "1379499064cd5de4dba4f3bca87fa4aa";
        const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
        const req = new XMLHttpRequest();

        return new Promise(function (resolve, reject){
            try{
                req.open('GET', url);
                req.onload = function () {
                    if (req.status === 200) {
                        resolve(JSON.parse(req.response));
                    } else {
                        reject(new Error(req.statusText));
                    }
                };
                req.send();
            }catch (e){
                return new Error(req.statusText);
            }
        })
    }

    const getWeatherFunc = async () => {
         const pos = await getLocation();
         const data = await getWeather(pos);
         console.log(data);

        document.getElementById('weather').innerHTML = data.main.temp;

    }

    getWeatherFunc();
    /*function getWeather(coords, callback) {

        req.open('GET', url);
        req.onload = function () {
            if (req.status === 200) {
                callback(JSON.parse(req.responseText));
            } else {
                callback(new Error(req.statusText));
            }
        };
        req.send();
    }*/

    /*const coords = getLocation().then(location => console.log(location));
    getWeather(coords).then(weather => console.log(weather));*/