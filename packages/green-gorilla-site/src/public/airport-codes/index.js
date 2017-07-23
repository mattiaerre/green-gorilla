const emptySearchBox = () => {
  const searchBox = document.getElementById('search-box');
  searchBox.value = null;
};

const emptyListItems = () => {
  const unorderedList = document.getElementById('airport-codes');
  unorderedList.innerHTML = null;
};

const fetchAirportCodes = ({ id, city, country }) => {
  const graphqlQuery = `
  {
    airportCodes(id:"${id}", city:"${city}", country:"${country}") {
      id
      name
      city
      country
      iata
      icao
    }
  }
  `;
  const url = `/graphql?query=${encodeURI(graphqlQuery)}`;
  return fetch(url)
    .then(response => (response.json()))
    .then(({ data: { airportCodes } }) => (airportCodes));
};

const makeListItems = (airportCodes) => {
  const unorderedList = document.getElementById('airport-codes');
  airportCodes.forEach((airportCode) => {
    const item = document.createElement('li');
    item.className = 'airport-code';
    item.innerHTML = `${airportCode.iata} - ${airportCode.name}, ${airportCode.city} (${airportCode.country})`;
    item.onclick = () => {
      emptySearchBox();
      emptyListItems();
      fetchAirportCodes({ id: airportCode.id, city: '', country: '' })
        .then((data) => {
          const airportInfo = document.getElementById('airport-info');
          airportInfo.innerHTML = JSON.stringify(data[0], null, 2);
        });
    };
    unorderedList.appendChild(item);
  });
};

(() => {
  const searchBox = document.getElementById('search-box');
  searchBox.onkeyup = (e) => {
    const query = e.target.value;
    let _ = false;
    ['Shift', 'Meta'].forEach((key) => {
      if (e.key === key) { _ = true; }
    });
    if (_) { return; }
    if (query.length >= 3) {
      fetchAirportCodes({ id: '', city: e.target.value, country: '' })
        .then((airportCodes) => {
          emptyListItems();
          makeListItems(airportCodes);
        });
      // todo: debounce
      /*
      const timeoutId = setTimeout(() => {
      }, 0);
      clearTimeout(timeoutId);
      */
    }
    if (query.length === 0) { emptyListItems(); }
  };
})();
