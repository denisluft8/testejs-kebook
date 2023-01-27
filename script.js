const mensal = document.getElementById("toggle-on");
const anual = document.getElementById("toggle-off");
let valorTotal = document.querySelector(".valor-total");
let slideValue = document.querySelector(".slide__value");
let slideInput = document.querySelector(".slide__input");
let tipoPlano = false;

function slider() {
  slideInput.setAttribute("value", slideInput.value);
  slideValue.innerHTML = slideInput.getAttribute("value");
  valorTotal.innerHTML =
    tipoPlano == true
      ? `R$${slideInput.value * 1200},00`
      : `R$${slideInput.value * 100},00`;
}

function planoMensal() {
  tipoPlano = false;
  valorTotal.innerHTML = `R$${slideInput.value * 100},00`;
}
function planoAnual() {
  tipoPlano = true;
  valorTotal.innerHTML = `R$${slideInput.value * 1200},00`;
}

mensal.addEventListener("click", planoMensal);
anual.addEventListener("click", planoAnual);

slideInput.addEventListener("input", slider);
