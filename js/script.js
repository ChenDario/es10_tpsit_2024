import { negozi } from "./negozi.js";

function buildMap(){
  const map = L.map('map').setView([43.783633, 12], 6);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
  }).addTo(map);

  return map
}

function trovaNegozi(map){
  for(let negozio of negozi){
    const marker = L.marker([negozio.latitude, negozio.longitude]).addTo(map);
    marker.bindPopup('<b>' + negozio.city + '</b><br>' + negozio.address).openPopup();
  }
}

function main(){
  const map = buildMap();
  trovaNegozi(map);
}

document.addEventListener("DOMContentLoaded", main)


const modelli = ["Xiaomi Note 11S", "Samsung Galaxy A14", "Lenovo Tab M10 Plus", "Logitech M90", "Logitech K120", "HP 250 G9"];
const prezzi = [148, 129.90, 199, 6.49, 12.99, 148];

const config = {
  type: 'bar',
  data: {
      labels: modelli, // array con i modelli dei prodotti
      datasets: [
          {
              label: 'Prezzo in euro',
              data: prezzi // array con i prezzi dei prodotti
          }
      ]
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Prodotti di elettronica' // titolo del grafico
          }
      }
  }
};

const container = document.querySelector('#container');

// creo l'elemento HTML canvas che conterrà il grafico
const myCanvas = document.createElement('canvas');

new Chart(myCanvas, config);
container.appendChild(myCanvas);

