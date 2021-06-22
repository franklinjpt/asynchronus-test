const fetchData = require('../utils/fetchData');
const API = 'https://pokeapi.co/api/v2/pokemon';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const ability = await fetchData(data.results[0].url);
        const effectAbility = await fetchData(ability.abilities[0].ability.url);
        const name = data.results[0].name;
        console.log(name.charAt(0).toUpperCase() + name.slice(1));
        console.log(`Powerfull ability: ${ability.abilities[0].ability.name}`);
        console.log(`Effect: ${effectAbility.effect_entries[0].effect}`);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');