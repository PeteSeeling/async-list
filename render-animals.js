
export function renderAnimals(animals){

    const animalContainerEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const sizeEl = document.createElement('p');
    const countryEl = document.createElement('p');
    const colorEl = document.createElement('p');

    animalContainerEl.classList.add('animal-container');

    nameEl.textContent = animals.name;
    nameEl.classList.add('name');

    sizeEl.textContent = animals.size;
    sizeEl.classList.add('size');

    countryEl.textContent = animals.country;
    countryEl.classList.add('country');

    colorEl.textContent = animals.color;
    colorEl.classList.add('color');

    animalContainerEl.append(nameEl, sizeEl, countryEl, colorEl);

    return animalContainerEl;
}