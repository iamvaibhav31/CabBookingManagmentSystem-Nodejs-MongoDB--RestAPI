const { getDistance } = require('geolib');

function getdistanceinKm(l1long, l1lati, l2long, l2lati) {
     const distance = getDistance(
          { latitude: parseFloat(l1lati), longitude: parseFloat(l1long) },
          { latitude: parseFloat(l2lati), longitude: parseFloat(l2long) }
     )

     return Math.round(distance / 1000)
}




module.exports = {
     getdistanceinKm,
}