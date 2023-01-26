let slideValue = document.querySelector(".slide__value");
const slideRight = document.querySelector(".slideRight");
const slideLeft = document.querySelector(".slideLeft");
let slideInput = (document.querySelector(".slide__input").oninput =
  function () {
    let value = ((this.value - this.min) / (this.max - this.min)) * 10;
    this.style.background = `linear-gradient(to right, #ff18ca 0%, #f5a901 ${
      value * 10
    }%, #EEEEF0 ${value * 10}%,  #d4d4d9 100%)`;
    slideValue.innerHTML = this.value;
  });
