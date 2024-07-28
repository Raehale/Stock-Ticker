import getfakeAPIStockData from './fakeStockAPI.js';

setInterval(function(){
  const stockData = getfakeAPIStockData();
  renderStockTicker(stockData);
}, 1500);

let oldPrice = null;

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name');
    const stockDisplaySymbol = document.getElementById('symbol');
    const stockDisplayPrice = document.getElementById('price');
    const stockDisplayPriceIcon = document.getElementById('price-icon');
    const stockDisplayTime = document.getElementById('time');

    const {name, sym, price, time} = stockData;

    const priceDirectionIcon = price > oldPrice ? 'green.svg' : price < oldPrice ? 'red.svg' : 'grey.svg';

    stockDisplayName.innerText = `${name}`;
    stockDisplaySymbol.innerText = `${sym}`;
    stockDisplayPrice.innerText = `${price}`;
    stockDisplayPriceIcon.innerHTML = `<img src="./svg/${priceDirectionIcon}" alt="arrow icon" />`
    stockDisplayTime.innerText = `${time}`;

    oldPrice = price;
}