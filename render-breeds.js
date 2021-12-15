
export function renderDogBreed(breeds1){
    // const div = document.createElement('div');
    // const p = document.createElement('p');
 
    const breedContainerEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const sizeEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const lifespanEl = document.createElement('p');
    
    
    breedContainerEl.classList.add('breed-container');
   
    
    nameEl.textContent = breeds1.Name;
    nameEl.classList.add('name');

    sizeEl.textContent = breeds1.Size;
    sizeEl.classList.add('size');

    colorEl.textContent = (breeds1.Color);
    colorEl.classList.add('color');

    lifespanEl.textContent = (breeds1.Lifespan);
    lifespanEl.classList.add('lifespan');

    breedContainerEl.append(nameEl, sizeEl, colorEl, lifespanEl);
   
   
    return breedContainerEl;
   



}