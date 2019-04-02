const axios = require('axios'); //peticiones http servicio rest

const getClima = async(lat, lng) => {

        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=11155cc249b6733fed5a7e4fcf9a2061`);

        return resp.data.main.temp;
    }
    //se devuelve un json que es un objeto data y la temeperatura se encuentra ahi dentro en data




module.exports = {
    getClima
}