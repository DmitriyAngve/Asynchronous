'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

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
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0].borders;
      if (!neighbour) return;
      return neighbour.forEach(code => {
        fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
          .then(response => response.json())
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
//     .then(response => response.json())
//     // err => alert(err) // After that chain stops
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       if (!neighbour) return;
//       return neighbour.forEach(code => {
//         fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
//           .then(response => response.json())
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

// VERSION 2.0 ??????

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfflfl';

//       if (!neighbour) return;

//       // Country #2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })

//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })

//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
//   // no matter if the promise is fulfilled or rejected this callback function is gonna be called always
// };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country #1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders;

      if (!neighbour) throw new Error('No neighbour found!');

      // Country #2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  // no matter if the promise is fulfilled or rejected this callback function is gonna be called always
};
btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('australia');
// then - calls only if promises fulfilled
// catch - call only if promises rejected
*/

////////////////////////////////////////////////////////////////////////
/////////////////////////////CODING CHALLEGE#1//////////////////////////
////////////////////////////////////////////////////////////////////////
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then(res => {
      console.log(res); // Response.ok: true
      if (!res.ok)
        throw new Error(`Problem with geolacation API ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.countryName}, ${data.city}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err.message}💥💥💥`);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

////////////////////////////////////////////////////////////////////////
///////////////////////The Event Loop in Practice///////////////////////
////////////////////////////////////////////////////////////////////////
/*
console.log('Test start'); // 1 (Outside of any callback)
setTimeout(() => console.log('0 sec timer'), 0); // 4
// Create a Promise, who immediately
Promise.resolve('Resolve promise 1').then(res => console.log(res)); // 3
console.log('Test end'); //2 (Second synchronous console.log)
*/
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolve promise 1').then(res => console.log(res));

Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 2000000000; i++) {}
  console.log(res);
});

console.log('Test end');
// Test start
//  Resolve promise 1
//  Resolve promise 2
//  0 sec timer
*/

////////////////////////////////////////////////////////////////////////
///////////////////////Building a Simple Promise////////////////////////
////////////////////////////////////////////////////////////////////////

// Promise constructor (Promises - special kind of object in JavaScript)
// Promise have only one argument - executor function
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You WIN 🎂');
  } else {
    reject('You LOST your money 💩');
  }
});
// Promise object always need .then() method (if above condition is met, then execute first console.log(resolve), if not - then execute second console.log(reject))
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
*/
/*
// Let's simulate this lottery draw by adding a simple timer, this timer will simulate the time data is passed between buying the lottery ticket
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🎂');
    } else {
      reject(new Error('You LOST your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying means to convert callback based asynchronous behavior to promise based

//Let's promisfying the setTimeout function and create a wait function
// Real-world example
const wait = function (seconds) {
  // No need specified reject parameter, because impossible for the timer to fail
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// consume that Promise
wait(1)
  .then(() => {
    console.log('1 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => console.log('4 seconds passed'));
// In the result of the first fetch, we would create a new fetch and return it

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// resolve is a static method on a promise constructor
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!!!')).catch(x => console.error(x));
*/
////////////////////////////////////////////////////////////////////////
//////////////////Promisifying the Geolocation API//////////////////////
////////////////////////////////////////////////////////////////////////

// This function accepts two callback, first for the success, and second for error
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// ); // This function offloaded its work to the background to the WEB API enviroment in the browser and immediately to the next line
// console.log('Getting position'); // Whatever this console.log is after the function mentioned above, this code is executed first

// Promisify a callback based API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)

    // The same as code above
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Promise was marked as successful by the resolve function
// getPosition().then(pos => console.log(pos)); // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1668834843709}
// "pos => console.log(pos)" - this callback was called in the den handler, and the position was passed in here finally we logged it to the console

//

// I'm modifying this function (whereAmI) so we don't have to pass in any coordinates

// Function that tell us where we are in the world based on the geolocation of our device

const whereAmI = function () {
  getPosition()
    .then(pos => {
      // Destruct object
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then(res => {
      console.log(res); // Response.ok: true
      if (!res.ok)
        throw new Error(`Problem with geolacation API ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.countryName}, ${data.city}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err.message}💥💥💥`);
    });
};

/*
const whereAmI = function () {
  getPosition()
    .then(pos => {
      // Destruct object
      const { lat = latitude, lng = longitude } = pos.coords;

      fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })

    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err.message} 💥💥💥`);
    });
};
*/
btn.addEventListener('click', whereAmI);
