"use strict";

var wDrum = document.querySelector("button");
wDrum.addEventListener("click", handleClick);

function handleClick() {
  return function () {
    alert("click");
  };
}

var aDrum = document.querySelector("body > div > button.a.drum");
aDrum.addEventListener("click", newFunction());