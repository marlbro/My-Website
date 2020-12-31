"use strict";

/////////// things i want online
/// 1) cycle through images for each button
///
/// 2) each button should have box with message display
///
/// 3) videos up on my site? music? randomly played things?
///
/// 4) professional work? this website is just a test of what ive learned
///////////////////////

// const images = document.querySelectorAll(".image");
// const overlay = document.querySelector(".overlay");
// const photoRow = document.querySelector(".photo-container");

// photo array
const images = [
  "./photo/photo-1.JPG",
  "./photo/photo-1.JPG",
  "./photo/photo-2.JPG",
  "./photo/photo-3.JPG",
];

// photo element selection
const centerBtn = document.getElementById("center");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const photo = document.querySelector(".image");

// button element selection
const musicBtn = document.querySelector(".music-button");
const danceBtn = document.querySelector(".dance-button");
const progBtn = document.querySelector(".prog-button");

// 3 randomly generated numbers between array elements 1-3
const randomNum = Math.trunc(Math.random() * 3) + 1;
const randomNum1 = Math.trunc(Math.random() * 3) + 1;
const randomNum2 = Math.trunc(Math.random() * 3) + 1;

// text content for each photo element
centerBtn.value = danceBtn;

console.log(randomNum);
console.log(leftBtn);

if (randomNum === randomNum2 && randomNum1) {
}

// each element displays random photo
leftBtn.src = `${images[randomNum]}`;
rightBtn.src = `${images[randomNum1]}`;
centerBtn.src = `${images[randomNum2]}`;

// loop through image array
for (let i = 0; i < images.length; i++) {}

// cycle through images for each button

// const theLoop = function () {
// for (i = 0; i < photoButtons[i]; i++);
