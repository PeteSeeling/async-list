
export function renderCountries(countries){

    const countryContainerEl = document.createElement('div');
    const countryEl = document.createElement('p');
    const languageEl = document.createElement('p');
    const populationEl = document.createElement('p');
    const visitedEl = document.createElement('p');

    countryContainerEl.classList.add('country-container');

    countryEl.textContent = countries.country;
    countryEl.classList.add('country');

    languageEl.textContent = countries.language;
    languageEl.classList.add('language');

    populationEl.textContent = countries.population;
    populationEl.classList.add('population');

    visitedEl.textContent = countries.visited;
    visitedEl.classList.add('visited');

    countryContainerEl.append(countryEl, languageEl, populationEl, visitedEl);

    return countryContainerEl;

}