let price = 400000;
let quantityValue = 0;
let addBtn = document.querySelector(".add-btn");
let subtractBtn = document.querySelector(".subtract-btn");
let total = document.querySelector(".valor-total");
let quantity = document.querySelector(".cantidad");
let priceSpan = document.querySelector(".precio-inicial");
priceSpan.innerHTML = price;

function Addup() {
  quantity.innerHTML = ++quantityValue;
  total.innerHTML = precio * quantityValue;
}

function takeAway() {
  quantity.innerHTML = --quantityValue;
  total.innerHTML = precio * quantityValue;
  if (quantityValue < 0) {
    quantity.innerHTML = ++quantityValue;
    total.innerHTML = 0;
  }
}

addBtn.addEventListener("click", Addup);
subtractBtn.addEventListener("click", takeAway);
