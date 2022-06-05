/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
const ENDPOINT = 'https://api.github.com/users';
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

function fetchUsers() {
  console.log('You have clicked on "Show Users"!')
  fetch(ENDPOINT, {})
    .then(response => response.json())
    .then(data => console.log(data))
}

const btn = document.getElementById('btn')
btn.addEventListener('click', fetchUsers)

// render users (login avatar_url)
// socialCar 
// for loop? forEach() ? 
// 

const renderUserCard = (data) => {
  const card = document.createElement('div')
  card.classList = 'card'
  const login = document.createElement('h4');
  login.innerText = `${data.login}`;
  const avatarUrl = document.createElement(`h5`);
  avatarUrl.innerText = data.avatar_url;
  card.appendChild(login);
  card.appendChild(avatarUrl);
  return card
};

const updateList = async () => {
  const output = document.getElementById('output');
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      data.forEach(e => output.appendChild(renderUserCard(e)));
    }
  } catch (error) {
    console.error(error);
  }
};

updateList();