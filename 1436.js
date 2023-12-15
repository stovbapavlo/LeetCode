const startCities = [];
const endCities = [];

for (const path of paths) {
    startCities.push(path[0]);
    endCities.push(path[1]);
}


const destinationCity = endCities.filter(city => !startCities.includes(city))[0];

//return destinationCity;