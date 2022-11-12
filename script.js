"use strict";

const bars = document.querySelector(".bars"),
    time = document.querySelector(".time"),
    menu = document.querySelector(".menu");

bars.addEventListener("click", function () {
    menu.classList.add("menu-active");
});

time.onclick = function () {
    menu.classList.remove("menu-active");
};