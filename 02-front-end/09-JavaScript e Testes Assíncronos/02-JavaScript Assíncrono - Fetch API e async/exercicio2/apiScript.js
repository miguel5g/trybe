// apiScript.js
const API_URL = 'https://api.coincap.io/v2/assets';

function renderCoin({ symbol, name, priceUsd }) {
  const listElement = document.querySelector('ol');
  const coinElement = document.createElement('li');

  coinElement.innerText = `${name} (${symbol}): ${Number(priceUsd).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'USD',
  })}`;

  listElement.appendChild(coinElement);
}

function getCoins() {
  return fetch(API_URL).then((response) => response.json());
}

window.onload = async () => {
  const coins = await getCoins();

  for (const coin of coins.data.slice(0, 10)) {
    renderCoin(coin);
  }
};
