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

// loop through image array

//shuffles array elements
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// photo array
const images = [
  "./photo/photo-1.JPG",
  "./photo/photo-2.JPG",
  "./photo/photo-3.JPG",
];

shuffle(images);
console.log(images);

// photo element selection

const photoContain = document.getElementsByClassName("image");
console.log(photoContain);

// button element selection

const musicBtn = document.querySelector(".music-button");
const danceBtn = document.querySelector(".dance-button");
const progBtn = document.querySelector(".prog-button");

// text content for each photo element
let randomNum = Math.trunc(Math.random() * 3);

for (let i = 0; i < photoContain.length; i++) {
  let shuffle = document.createElement("img");
  shuffle.setAttribute("src", "./photo/photo-" + i + ".jpg");

  // 3 randomly generated numbers between array elements 0-2
  // console.log(i);
}
