const burger = document.querySelector(".burgerContainer");

burger.addEventListener("click", toggleBurger);

function toggleBurger() {
    burger.classList.toggle("change");
};