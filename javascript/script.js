// Variables
const myDate = new Date(document.lastModified);
const theMonth = myDate.getMonth() + 1;
const theDate = myDate.getDate();
const theYear = myDate.getFullYear();
const theTime = myDate.toLocaleTimeString();
const modified = document.getElementById("modify");
const copyrightYear = document.getElementById("year");
const randomImg = document.getElementById("randomImg");
const randomLink = document.getElementById("randomLink");
const userName = document.getElementById("userName");
let nameInput = document.getElementById("nameInput");
const elToggle = document.getElementById("toggle");
const elContent = document.getElementById("elContent");
const money = document.getElementById("money");
const playAnimation = document.getElementById("play");
const animate = document.getElementById("animate");
const benefits = document.getElementById("benefit-heading");
const homecards = document.getElementById("home-cards");
const form = document.getElementById("form");
const { body } = document;
const array = [
  "tv1.png",
  "tv2.png",
  "tv3.png",
  "tv4.png",
  "computer1.png",
  "computer2.png",
  "computer3.png",
  "computer4.png",
  "phone1.png",
  "phone2.png",
  "phone3.png",
  "phone4.png",
  "headphones1.png",
  "headphones2.png",
  "headphones3.png",
  "headphones4.png",
  "gaming1.png",
  "gaming2.png",
  "gaming3.png",
  "gaming4.png",
];
const productImages = shuffleArray(array); // Shuffles product images to produce a more random reslut

// Shows and Hides the Disclaimer message on the homepage
if (elToggle) {
  elToggle.addEventListener("click", function () {
    if (elContent.style.display === "none") {
      // SHOWS the message
      elContent.style.display = "block";
      elToggle.innerHTML = "Hide -";
    } else {
      // HIDES the message
      elContent.style.display = "none";
      elToggle.innerHTML = "Show >";
    }
  });
}

// The Document's last modification Date and Time are formatted and displayed (on home page)
// Validating that the element exists to avoid errors on the other pages.
if (modified) {
  modified.innerHTML =
    "<I>" +
    theMonth +
    "/" +
    theDate +
    "/" +
    theYear +
    "  at  " +
    theTime +
    "</I>";
}

// Displays the Year for Copyright Message
// Validating that the copyright year element exists
if (copyrightYear) {
  copyrightYear.innerHTML = myDate.getFullYear();
}

// Shuffle Function
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Function Returns Random Integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Renders a random product image out of an array of product images to the screen
// Checks to see what kind of image it is, then creates a link that takes the user to the page where the product is located
// The function is called when the user clicks the "Random Gift" button
// The function is also called by the window on load
function randomGift() {
  const numImages = productImages.length;
  const randomProduct = productImages[getRandomInt(0, numImages - 1)];
  // Validating that the random image element exists
  if (randomImg) {
    randomImg.src = "./img/" + randomProduct;
    // Checks to see what type of image it is
    if (randomProduct.includes("tv")) {
      randomLink.href = "./tv.html";
    }
    if (randomProduct.includes("computer")) {
      randomLink.href = "./computers.html";
    }
    if (randomProduct.includes("phone")) {
      randomLink.href = "./phones.html";
    }
    if (randomProduct.includes("headphones")) {
      randomLink.href = "./audio.html";
    }
    if (randomProduct.includes("gaming")) {
      randomLink.href = "./gaming.html";
    }
    randomImg.addEventListener(
      "mouseover",
      () => {
        randomImg.src = "./img/gift.png";
      },
      false
    );
    randomImg.addEventListener(
      "mouseout",
      () => {
        randomImg.src = "./img/" + randomProduct;
      },
      false
    );
  }
}

// Displays the user's name in a welcome message on the homepage
// The fuction is called when the user presses the "Enter" button
// The name is saved to local storage
function setName() {
  localStorage.setItem("name", nameInput.value);
  userName.textContent = nameInput.value;
  nameInput.value = "";
}

// Changes the background on the homepage
function changeBackground(number) {
  // Chech if background is already showing
  let prevBG;
  if (body.className) {
    prevBG = body.className;
  }
  // Reset CSS class for body
  body.className = "";
  switch (number) {
    case "1":
      return prevBG === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return prevBG === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return prevBG === "background-3"
        ? false
        : body.classList.add("background-3");
    default:
      break;
  }
}

// Checks to see if an element is on the screen
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <=
      (window.innerWidth - 30 || document.documentElement.clientWidth - 30)
  );
}

// Plays the animation on the rewards page when the user clicks the "Save" button
if (playAnimation) {
  animate.style.display = "none";
  playAnimation.onclick = function () {
    animate.style.display = "block";
    let start = Date.now();
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;
      money.style.left = timePassed / 3.5 + "px";
      if (timePassed > 8000 || !isInViewport(money)) {
        clearInterval(timer);
        animate.style.display = "none";
      }
    }, 20);
  };
}

// Uses XMLHttpRequest object to load the benefits table from benefits.xml
function loadDoc() {
  try {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "benefits.xml");
    xhttp.onload = function () {
      document.getElementById("table").innerHTML = this.response;
    };
    xhttp.send();
    scrollWin();
  } catch (error) {
    console.log(error);
  }
  function scrollWin() {
    window.scrollBy(0, 1000);
  }
}
// Event Listener on h1 element to load the benefits table
if (benefits) {
  benefits.addEventListener("click", loadDoc);
}

// Generates Random Gift on Screen
// If name is found is found in local storage, the name is displayed to the screen
// If name is not found, the setName function is called
// The function is called every time the window is loaded
window.addEventListener("load", (event) => {
  randomGift();
  // Validating that the input element exists
  if (nameInput) {
    if (localStorage.getItem("name") === null) {
      setName();
    } else {
      userName.textContent = localStorage.getItem("name");
    }
  }
});

// jQuery

// Adds and removes hover class to the images on the home page, and the product pages
$(".flex-container > div")
  .on("mouseenter", function () {
    $(this).addClass("grow");
  })
  .on("mouseleave", function () {
    $(this).removeClass("grow");
  });

// Adds a Date Picker and Select Menu from jQuery UI to the form on the rewards page
// Also validates the form using the jQuery Validation Plugin
if (form) {
  $(function () {
    $("#date").datepicker({
      showAnim: "slideDown",
    });
    $("#gender").selectmenu();
    $("#form").validate({
      errorElement: "div",
    });
  });
}
