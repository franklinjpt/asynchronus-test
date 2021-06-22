const fetchData = require('../utils/fetchData');
const API = 'https://pokeapi.co/api/v2/pokemon';

fetchData(API)
    .then(data => {
        console.log(data.results[0].name);
        return fetchData(data.results[0].url)
    })
    .then(data => {
        console.log(`Powerfull ability: ${data.abilities[0].ability.name}`);
        return fetchData(data.abilities[0].ability.url)
    })
    .then(data => {
        console.log(`Effect: ${data.effect_entries[0].effect}`);
    })
    .catch(error => console.error(error));