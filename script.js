let price = 400000;
let quantityValue = 0;
let addBtn = document.querySelector(".add-btn");
let subtractBtn = document.querySelector(".subtract-btn");
let total = document.querySelector(".valor-total");
let quantity = document.querySelector(".cantidad");
let priceSpan = document.querySelector(".precio-inicial");
priceSpan.innerHTML = price;

function Addup() {
  quantity.innerHTML = ++quantityValue; // eslint-disable-line
  total.innerHTML = precio * quantityValue; // eslint-disable-line
}

function takeAway() {
  quantity.innerHTML = --quantityValue;// eslint-disable-line
  total.innerHTML = precio * quantityValue; // eslint-disable-line
  if (quantityValue < 0) {
    quantity.innerHTML = ++quantityValue; // eslint-disable-line
    total.innerHTML = 0;
  }
}

addBtn.addEventListener("click", Addup);
subtractBtn.addEventListener("click", takeAway);
