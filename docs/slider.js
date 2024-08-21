const carousel = document.querySelector(".card-list")
arrowIcons = document.querySelectorAll(".arrowIcons");
firstImg = carousel.querySelectorAll(".card-items")[0];

let scrollWidth=carousel.scrollWidth-carousel.clientWidth;


const showHideButtons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";

  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + (0.005 * window.innerWidth);



arrowIcons.forEach(button => {
  button.addEventListener("click", () => {
    carousel.scrollLeft += button.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(()=>showHideButtons(),60);
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;

}
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);


document.querySelectorAll('.no-select').forEach(div => {
  div.style.userSelect = 'none';
});






