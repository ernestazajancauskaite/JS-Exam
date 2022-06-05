/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
const ENDPOINT = 'cars.json';
-------------------------------------------------------------------------- */
const ENDPOINT = 'cars.json';

const renderBrandCard = (data) => {
  const card = document.createElement('div')
  card.classList = 'card'
  const brand = document.createElement('h4');
  brand.innerText = `${data.brand}`;
  const models = document.createElement(`h5`);
  models.innerText = data.models;
  // Put it all together
  card.appendChild(brand);
  card.appendChild(models);
  return card
};

const updateList = async () => {
  const output = document.getElementById('output');
  try {
    // Load json data
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      data.forEach(e => output.appendChild(renderBrandCard(e)));
    }
  } catch (error) {
    console.error(error);
  }
};

updateList();
