'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${Number(
            data.population / 1000000
          ).toFixed()}M people</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
      </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

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
/*
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country${className}">
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
  // countriesContainer.style.opacity = 1;
};
*/
/*
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

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('portugal');
*/
/*
const renderCountry = function (data, className = '') {
  //COUNTRY PROPERTIES
  const flag = data.flags.svg;
  const countryName = data.name.common;
  const region = data.region;
  const population = (data.population / 1000000).toFixed(2);
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;
  //HTML
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">${countryName}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${population} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  //ajax call 1 for main country:
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    //NOTE:responseText is actually string in JSON format.Converting js object:
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country:
    renderCountry(data);

    //get neighbours:
    const neighbours = data.borders;
    if (!neighbours) return;
    //ajax call 2 for neighbours:
    neighbours.forEach(neighbour => {
      let request2 = new XMLHttpRequest();
      request2.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${neighbour}
        `
      );
      request2.send();
      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);
        console.log(data2);

        //render country:
        renderCountry(data2, 'neighbour');
      });
    });
  });
};

getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

////////////////////////////////////////////////////////////////////////
///////////////////////Promises and the Fetch API///////////////////////
////////////////////////////////////////////////////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); // the json() method here is a method that is available on all the response objects that is coming from the fetch function. Json() - async function, and it returns new promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//  Simplified version
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('italy'); // We get object "Response" for read data from the body we need to call json method on the response

////////////////////////////////////////////////////////////////////////
////////////////////////////Chaining Promises///////////////////////////
////////////////////////////////////////////////////////////////////////
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(responce => responce.json())
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0].borders;
      if (!neighbour) return;
      return neighbour.forEach(code => {
        fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
          .then(responce => responce.json())
          .then(data => renderCountry(data[0], 'neighbour'));
      });
    });
};

getCountryData('portugal');
*/
////////////////////////////////////////////////////////////////////////
//////////////////////////Handling Rejected Promises////////////////////
////////////////////////////////////////////////////////////////////////

// How to handle promise rejections
// We will deal with the error as a loss of Internet connection

// VERSION 3.1

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(responce => responce.json())
//     // err => alert(err) // After that chain stops
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       if (!neighbour) return;
//       return neighbour.forEach(code => {
//         fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
//           .then(responce => responce.json())
//           .then(data => renderCountry(data[0], 'neighbour'))
//           .catch(err => {
//             console.error(`${err} 💥💥💥`);
//             renderError(
//               `Something went wrong 💥💥 ${err.message}. Try again!`
//             ).finally(() => (countriesContainer.style.opacity = 1));
//           });
//       });
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// Try to simulate another error
// getCountryData('fkdmfdk');

// VERSION 2.0
const getCountryData = function (country) {
  fetch(`hhttps://restcountries.com/v3.1/alpha/${country}`)
    .then(
      responce => responce.json()
      // err => alert(err) // After that chain stops
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders;
      if (!neighbour) return;
      // Country #2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`);
    })
    .then(responce => responce.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
  // no matter if the promise is fulfilled or rejected this callback function is gonna be called always
};
btn.addEventListener('click', function () {
  getCountryData('portugal');
});
// then - calls only if promises fulfilled
// catch - call only if promises rejected
