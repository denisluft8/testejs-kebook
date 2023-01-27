const slideRight = document.getElementById("slide-right");
const slideLeft = document.getElementById(".slide-left");
const mensal = document.getElementById("toggle-on");
const anual = document.getElementById("toggle-off");
let valorTotal = document.querySelector(".valor-total");
let slideValue = document.querySelector(".slide__value");
let slideInput = document.querySelector(".slide__input");
let valorT = parseInt(slideInput.getAttribute("value"));
let tipoPlano = false;

function slider() {
  valorT = parseInt(slideInput.getAttribute("value"));
  console.log(valorT);
  slideInput.setAttribute("value", slideInput.value);
  slideValue.innerHTML = slideInput.getAttribute("value");
  valorTotal.innerHTML =
    tipoPlano == true
      ? `R$${slideInput.value * 1200},00`
      : `R$${slideInput.value * 100},00`;
}

function addValue() {
  const valueToAdd = parseInt(valorT) + 1;
  valorT = valueToAdd;
  slideInput.setAttribute("value", valueToAdd);
  console.log(valueToAdd);
  slideInput.setAttribute("value", valueToAdd);
  slideValue.innerHTML = slideInput.getAttribute("value");
  valorTotal.innerHTML =
    tipoPlano == true
      ? `R$${slideInput.value * 1200},00`
      : `R$${slideInput.value * 100},00`;
}

anual.addEventListener("click", () => (tipoPlano = true));
mensal.addEventListener("click", () => (tipoPlano = false));

slideInput.addEventListener("input", slider);
slideRight.addEventListener("click", addValue);
