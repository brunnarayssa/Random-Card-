/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { main } from "@popperjs/core";

window.onload = function() {
  const number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const pintaList = ["♦", "♥", "♠", "♣"];

  const handleClick = () => {
    const topPinta = document.querySelector(".pinta");
    const number = document.querySelector(".num");
    const bottomPinta = document.querySelector(".inv");

    if (topPinta.classList.contains("col-red")) {
      topPinta.classList.remove("col-red");
      bottomPinta.classList.remove("col-red");
      number.classList.remove("col-red");
    }

    const randomPinta = pintaList[Math.floor(Math.random() * pintaList.length)];

    topPinta.innerHTML = randomPinta;
    bottomPinta.innerHTML = randomPinta;
    console.log(randomPinta);

    if (
      (randomPinta === "♦", "♥", "♠", "♣" || randomPinta === "♦", "♥", "♠", "♣")
    ) {
      topPinta.classList.add("col-red");
      console.log("cambio de color");
      number.classList.add("col-red");
      console.log("cambio de color");

      bottomPinta.classList.add("col-red");
      console.log("cambio de color");
    }

    console.log("renderizado");
  };

  const button = document.querySelector(".btn");
  button.addEventListener("click", handleClick);

  handleClick();
  setInterval(handleClick, 10000);
};
