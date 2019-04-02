const axios = require('axios'); //peticiones http

const getLugrLatLng = async(dir) => {

    const encoderUrl = encodeURI(dir); //cambia el formato al url para los caracteres especiale 
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        //timeout: 1000,
        headers: { 'X-RapidAPI-Key': '854394e2b0mshb0afda89be07559p10b3b5jsna41001918471' }
    });

    const resp = await instance.get()

    //peticion rest
    /*
    instance.get()
        .then(resp => {
            console.log(resp.data.Results[0]);
        })
        .catch(err => {
            console.log('Error', err);
        });
    */
    if (resp.data.Results.length === 0) {

        throw new Error('No hay resultado')
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugrLatLng
}