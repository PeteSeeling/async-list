export function renderFish(fish){

    const fishContainerEl = document.createElement('div');
    const speciesEl = document.createElement('p');
    const sizeEl = document.createElement('p');
    const habitatEl = document.createElement('p');
    const edibleEl = document.createElement('p');

    fishContainerEl.classList.add('fish-container');

    speciesEl.textContent = fish.species;
    speciesEl.classList.add('species');

    sizeEl.textContent = fish.size;
    sizeEl.classList.add('size');

    habitatEl.textContent = fish.habitat;
    habitatEl.classList.add('habitat');

    edibleEl.textContent = fish.edible;
    edibleEl.classList.add('edible');

    fishContainerEl.append(speciesEl, sizeEl, habitatEl, edibleEl);

    return fishContainerEl;
 
}