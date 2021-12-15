// import functions and grab DOM elements
import { getDogBreeds } from './fetch-breeds.js';
import { renderDogBreed } from './render-breeds.js';

import { getCountries } from './fetch-countries.js';
import { renderCountries } from './render-countries.js';

import { getFish } from './fetch-fish.js';
import { renderFish } from './render-fish.js';

// let state

// set event listeners 
  // get user input
const breedContainerEl = document.getElementById('dog-breed-container');
const countryContainerEl = document.getElementById('countries-container');
const fishContainerEl = document.getElementById('fish-container');

window.addEventListener('load', async() => {

    const breeds = await getDogBreeds();

    for (let breed of breeds.data){

        const breedsEl = renderDogBreed(breed);

        breedContainerEl.append(breedsEl);
    }
    
    const countries = await getCountries();
    
    for (let country of countries.data){
        const countriesEl = renderCountries(country);

        countryContainerEl.append(countriesEl);

    }

    const fish = await getFish();

    for (let fishes of fish.data){
        const fishEl = renderFish(fishes);
        console.log(fishes);
        fishContainerEl.append(fishEl);
    }


});





 // use user input to update state 
  // update DOM to reflect the new state
