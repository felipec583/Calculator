let precio = 400000;
let quantityValue = 0;
let addBtn = document.querySelector(".add-btn");
let subtractBtn = document.querySelector(".subtract-btn");
let total = document.querySelector(".valor-total");
let quantity = document.querySelector(".cantidad");
let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

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
