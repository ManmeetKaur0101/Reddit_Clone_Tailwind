
const sortTimeBtn = document.getElementById("sortTimeBtn");
const sortTime = document.getElementById("sortTime");

sortTimeBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (sortTime.classList.contains("hidden")) {
    sortTime.classList.remove("hidden");
    sortCountry.classList.add("hidden");
    veiwList.classList.add("hidden");

  } else {
    sortTime.classList.add("hidden");
    sortCountry.classList.add("hidden");
    veiwList.classList.add("hidden");

  }
});


const sortCountryBtn = document.getElementById("sortCountryBtn");
const sortCountry = document.getElementById("sortCountry");

sortCountryBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (sortCountry.classList.contains("hidden")) {
    sortCountry.classList.remove("hidden");
    veiwList.classList.add("hidden");
    sortTime.classList.add("hidden");

  } else {
    sortCountry.classList.add("hidden");
    veiwList.classList.add("hidden");
    sortTime.classList.add("hidden");

  }
});

const veiwBtn = document.getElementById("viewBtn");
const veiwList = document.getElementById("viewList");

veiwBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (veiwList.classList.contains("hidden")) {
    veiwList.classList.remove("hidden");
    sortTime.classList.add("hidden");
    sortCountry.classList.add("hidden");

  } else {
    veiwList.classList.add("hidden");
    sortTime.classList.add("hidden");
    sortCountry.classList.add("hidden");

  }
});
//close if clicked anywhereelse
document.addEventListener("click", function () {
  if (!veiwList.classList.contains("hidden") || !sortCountry.classList.contains("hidden") || !sortTime.classList.contains("hidden")) {

    sortTime.classList.add("hidden");
    sortCountry.classList.add("hidden");
    veiwList.classList.add("hidden");
  }
});