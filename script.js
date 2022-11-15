'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////////////////
/////////////////////AJAX Call: XMLHttpRequest//////////////////////////
////////////////////////////////////////////////////////////////////////

//////////////////////////////VERSION 3.1//////////////////////////
/*
// Let's reuse code to create more element like this
const getCountryData = function (country) {
  // Old school request
  const request = new XMLHttpRequest();
  // Open request
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // ("GET") - type of http request
  // send request
  request.send();
  console.log(request.responseText);

  // For load event register a callback
  request.addEventListener('load', function () {
    // Let's convert JSON from big string to JavaScript object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
       <div class="country__data">
      <h3 class="country__name">${data.altSpellings[3]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies.KGS)[0]
      }</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('kyrgyzstan');
*/

//////////////////////////////VERSION 2.0//////////////////////////
/*
// Let's reuse code to create more element like this
const getCountryData = function (country) {
  // Old school request
  const request = new XMLHttpRequest();
  // Open request
  request.open('GET', `https://restcountries.com/v2/name/${country}`); // ("GET") - type of http request
  // send request
  request.send();
  console.log(request.responseText);

  // For load event register a callback
  request.addEventListener('load', function () {
    // Let's convert JSON from big string to JavaScript object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
         <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('argentina');
getCountryData('chile');
getCountryData('uruguay');
getCountryData('germany');
getCountryData('france');


*/

////////////////////////////////////////////////////////////////////////
//////////////////////////////CALLBACK HELL/////////////////////////////
////////////////////////////////////////////////////////////////////////

const renderCountry = function (data) {
  const html = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
           <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`); //
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    //   const neighbour = data.borders?.[0];
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();
    // console.log(request.responseText);

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2);
    });
  });
};
getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('chile');
// getCountryAndNeighbour('uruguay');
// getCountryAndNeighbour('germany');
// getCountryAndNeighbour('france');
