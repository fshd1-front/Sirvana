let imgList = document.getElementById("img-list");
let caroBtns = document.getElementsByClassName("caro-btn");
let left = document.getElementById("left");
let right = document.getElementById("right");
let sliderNews = document.getElementsByClassName("redit");

let newsone = document.getElementById("newsone");
let oneone = document.getElementsByClassName("slider__news--box");

let status = 0;
let positionUit = -100;
let position = 0;
function slideImg(x) {
  let i;
  for (i = 0; i < caroBtns.length; i++) {
    if (caroBtns[i] != left && caroBtns[i] != right) {
      caroBtns[i].style.backgroundColor = "#ffffff44";
    }
  }
   let j;
  for (j = 0; j < sliderNews.length; j++) {
    sliderNews[j].style.backgroundColor = "rgba(255, 255, 255, 0)";
    sliderNews[j].style.borderRight = "3px solid aqua";
    oneone[j].style.opacity = "0.1";
  }
  if (x == 0) {
    if (imgList.style.left == "0%" || imgList.style.left === "") {
      position -= 200;
      i = 1 + position / -100;
      caroBtns[i].style.backgroundColor = "#fff";
      sliderNews[position / -100].style.backgroundColor =
        "rgba(255, 255, 255, 0.09)";
      sliderNews[position / -100].style.borderRight = "0";
      oneone[position / -100].style.opacity = "1";
    } else {
      position += 100;
      i = 1 + position / -100;
      caroBtns[i].style.backgroundColor = "#fff";
      sliderNews[position / -100].style.backgroundColor =
        "rgba(255, 255, 255, 0.09)";
      sliderNews[position / -100].style.borderRight = "0";
      oneone[position / -100].style.opacity = "1";
    }
    imgList.style.left = position + "%";
  } else if (x == 4) {
    if (imgList.style.left == "-200%") {
      position += 200;
      i = 1 + position / -100;
      caroBtns[i].style.backgroundColor = "#fff";
      sliderNews[0].style.backgroundColor = "rgba(255, 255, 255, 0.09)";
      sliderNews[0].style.borderRight = "0";
      oneone[0].style.opacity = "1";
    } else {
      position -= 100;
      console.log(position);
      i = 1 + position / -100;
      caroBtns[i].style.backgroundColor = "#fff";
      sliderNews[-position / 100].style.backgroundColor =
        "rgba(255, 255, 255, 0.09)";
      sliderNews[-position / 100].style.borderRight = "0";
      oneone[-position / 100].style.opacity = "1";
    }
    imgList.style.left = position + "%";
  } else {
    position = (x - 1) * positionUit;
    imgList.style.left = position + "%";
    console.log(position);
  }

  if (x == 1 || x == 2 || x == 3) {
    caroBtns[x].style.backgroundColor = "#fff";
    sliderNews[x - 1].style.backgroundColor = "rgba(255, 255, 255, 0.09)";
    sliderNews[x - 1].style.borderRight = "0";
    oneone[position / -100].style.opacity = "1";
  }
}


// function tagfinder(c) {
//   let k;
//   for (k = 0; k < sliderNews.length; k++) {
//     sliderNews[k].style.backgroundColor = "red";
//     sliderNews[k].style.borderRight = "3px solid aqua";
//     oneone[k].style.opacity = "0.1";
//   }

//   if (x == 1 || x == 2 || x == 3) {
//     sliderNews[x - 1].style.backgroundColor = "rgba(255, 255, 255, 0.09)";
//     sliderNews[x - 1].style.borderRight = "0";
//     oneone[position / -100].style.opacity = "1";
//   }
// }
