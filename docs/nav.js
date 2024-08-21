






const topicHead = document.getElementById("Topic-head");
const topicContent = document.getElementById("Topic-content");

const navfooter = document.getElementById("navfooter");
const dropdown = document.getElementsByClassName("dropdown");


topicHead.addEventListener("click", function () {
  if (topicContent.classList.contains("hidden")) {
    topicContent.classList.remove("hidden");
    topicHead.classList.add("rotate-180");
  }

  else {
    topicContent.classList.add("hidden");
    topicHead.classList.remove("rotate-180")

  }
});


function checkDropdownState() {
  const isAnyOpen = Array.from(dropdown).some(dropdown => !dropdown.classList.contains('hidden'));

  if (isAnyOpen) {
    navfooter.classList.remove('fixed');
    navfooter.classList.add('relative');
    console.log("Dropdown open");
  } else {
    navfooter.classList.remove('relative');
    navfooter.classList.add('fixed');
    console.log("Dropdown closed");
  }
}






const internetHead = document.getElementById("internet");
const internetContent = document.getElementById("internet-content");

internetHead.addEventListener("click", function () {
  if (internetContent.classList.contains("hidden")) {
    internetContent.classList.remove("hidden");
    internetHead.classList.add("rotate-180")
    checkDropdownState();


  } else {
    internetContent.classList.add("hidden");
    internetHead.classList.remove("rotate-180")
    checkDropdownState();

  }
});


const contentMore = document.getElementById("see-more-btn-popularcom");
const contentMoreSpan = document.getElementById("community-see-more");

contentMore.addEventListener("click", function () {
  if (contentMoreSpan.classList.contains("hidden")) {
    contentMoreSpan.classList.remove("hidden");
    contentMore.textContent=("See Less");

  } else {
    contentMoreSpan.classList.add("hidden");
    contentMore.textContent=("See More");

  
  }
});



const gamesHead = document.getElementById("games");
const gamesContent = document.getElementById("games-content");

gamesHead.addEventListener("click", function () {
  if (gamesContent.classList.contains("hidden")) {
    gamesContent.classList.remove("hidden");
    gamesHead.classList.add("rotate-180")
    checkDropdownState();

  } else {
    gamesContent.classList.add("hidden");
    gamesHead.classList.remove("rotate-180")
    checkDropdownState();
  }
});



const QAHead = document.getElementById("QA");
const QAContent = document.getElementById("QA-content");

QAHead.addEventListener("click", function () {
  if (QAContent.classList.contains("hidden")) {
    QAContent.classList.remove("hidden");
    QAHead.classList.add("rotate-180");
   

    checkDropdownState();
    // if (!navfooter.classList.contains("fixed")) {
    //   navfooter.classList.add("bg-red-600");
    //   console.log("m-8 added");
    // }
    // else{
    //   console.log("this not worked")
    // }


  } else {
    QAContent.classList.add("hidden");
    QAHead.classList.remove("rotate-180")
    checkDropdownState();
    // if (!navfooter.classList.contains("fixed")) {
    //   navfooter.classList.add("bg-red-600");
    //   console.log("m-8 added");
    // }
    // else{
    //   console.log("this not worked")
    // }


  }
});




const techHead = document.getElementById("tech");
const techContent = document.getElementById("tech-content");

techHead.addEventListener("click", function () {
  if (techContent.classList.contains("hidden")) {
    techContent.classList.remove("hidden");
    techHead.classList.add("rotate-180")
    checkDropdownState();

  } else {
    techContent.classList.add("hidden");
    techHead.classList.remove("rotate-180")
    checkDropdownState();

  }
});



const popHead = document.getElementById("pop");
const popContent = document.getElementById("pop-content");

popHead.addEventListener("click", function () {
  if (popContent.classList.contains("hidden")) {
    popContent.classList.remove("hidden");
    popHead.classList.add("rotate-180")
    checkDropdownState();

  } else {
    popContent.classList.add("hidden");
    popHead.classList.remove("rotate-180")
    checkDropdownState();

  }
});


const moviesHead = document.getElementById("movies");
const moviesContent = document.getElementById("movies-content");

moviesHead.addEventListener("click", function () {
  if (moviesContent.classList.contains("hidden")) {
    moviesContent.classList.remove("hidden");
    moviesHead.classList.add("rotate-180")
    checkDropdownState();

  } else {
    moviesContent.classList.add("hidden");
    moviesHead.classList.remove("rotate-180")
    checkDropdownState();

  }
});



const SeeMoreNavBtn = document.getElementById("seeMoreNav-btn");
const SeeMoreNavContent = document.getElementById("seeMoreNav-content");

SeeMoreNavBtn.addEventListener("click", function () {
  if (SeeMoreNavContent.classList.contains("hidden")) {
    SeeMoreNavContent.classList.remove("hidden");
    SeeMoreNavBtn.textContent = "See Less";
    checkDropdownState();

  } else {
    SeeMoreNavContent.classList.add("hidden");
    SeeMoreNavBtn.textContent = "See More";
    checkDropdownState();

  }
});



const resourceHead = document.getElementById("resource-head");
const resourceContent = document.getElementById("resource-content");

resourceHead.addEventListener("click", function () {
  if (resourceContent.classList.contains("hidden")) {
    resourceContent.classList.remove("hidden");
    resourceHead.classList.add("rotate-180");
    checkDropdownState();

  } else {
    resourceContent.classList.add("hidden");
    resourceHead.classList.remove("rotate-180");
    checkDropdownState();

  }
});





const sidenav=document.getElementById("side-nav");
const hamBurgerMenu=document.getElementById("ham-burger-menu");
hamBurgerMenu.addEventListener("click",function(){
  if(sidenav.classList.contains("hidden")){
    sidenav.classList.remove("hidden");
    // sidenav.classList.remove("min-w-[200px]");
  }
  else{
    sidenav.classList.add("hidden");
  }
});



console.log(document.getElementById('side-nav').getBoundingClientRect());
