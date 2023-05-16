// // Loader
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

let body = document.querySelector("body");
let create_canvas = document.createElement("canvas");
create_canvas.className = "body_canvas";
create_canvas.id = "body_canvas";
body.append(create_canvas);

// Logo Animation
const logo_text = document.querySelector(".logo-text p");
logo_text.innerHTML = logo_text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span style= 'transform: rotate(${i * 9.5}deg)'>${char}</span>`
  )
  .join("");

// text animation
let str = document.querySelector(".intro h1");
let title = str.innerText.split("");
let span = "";
let delay = 0.1;
title.forEach((char) => {
  if (char == "\n") {
    span += '<div class="clearfix"></div>';
  } else if (char == " ") {
    span += " ";
  } else {
    span +=
      '<span style="--dealy: ' +
      delay.toFixed(2) +
      's" data-char="' +
      char +
      '">' +
      char +
      "</span>";
  }
  delay += 0.1;
});
str.innerHTML = span;

// let text = document.querySelector(".effect-shine span");
// let shadow = "";
// for (let i = 0; i < 10; i++) {
//   shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #6f6e6e";
// }
// text.style.textShadow = shadow;
