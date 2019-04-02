// comando node app -d "New York"

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;

//status 200 correcto 404 no encontrado 500 error servidor 400 hicimos mal la peticion
// el comando es con "" dobles "New York"
/* 
lugar.getLugrLatLng(argv.direccion)
    .then(console.log);

clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);

*/

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugrLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng); //el lat y lng son parte del JSon de la  appi

        return `El clima de ${coords.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);