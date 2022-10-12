// The Document's last modification Date and Time are displayed (home page)
var myDate = new Date(document.lastModified);
var theMonth = myDate.getMonth() + 1;
var theDate = myDate.getDate();
var theYear = myDate.getFullYear();
var theTime = myDate.toLocaleTimeString();

// Validating that the element exists to avoid errors on the other pages.
if (document.getElementById("modify") != null) {
  // Formatting Date and Time
  document.getElementById("modify").innerHTML =
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

// Validating that the modify element exists
if (document.getElementById("year") != null) {
  // Displays the Year for Copyright Message
  document.getElementById("year").innerHTML = myDate.getFullYear();
}

// Array of product image names found on the webstie
const arr = [
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
];

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

// Shuffles product images to produce a more random reslut
const productImages = shuffleArray(arr);

// Function Returns Random Integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Renders a random product image out of an array of product images to the screen
// Checks to see what kind of image it is, then creates a link that takes the user to the page where the product is located
// The function is called when the user clicks the "Pick a random gift" button
// The function is also called by the window on load
function randomGift() {
  numImages = productImages.length;
  randomProduct = productImages[getRandomInt(0, numImages - 1)];
  // Validating that the random image element exists
  if (document.getElementById("randomImg") != null) {
    document.getElementById("randomImg").src = "./img/" + randomProduct;
    // Checks to see what type of image it is
    if (randomProduct.includes("tv")) {
      document.getElementById("randomLink").href = "./tv.html";
    }
    if (randomProduct.includes("computer")) {
      document.getElementById("randomLink").href = "./computers.html";
    }
    if (randomProduct.includes("phone")) {
      document.getElementById("randomLink").href = "./phones.html";
    }
  }
}

// Displays the user's name in a welcome message on the homepage
// The fuction is called when the user presses the enter button
// The name is saved to local storage
function setName() {
  userName = document.getElementById("name").value;
  localStorage.setItem("name", userName);
  document.getElementById("userName").textContent = userName;
  document.getElementById("name").value = "";
}

// Generates Random Gift on Screen
// If name is found is found in local storage, the name is displayed to the screen
// If name is not found, the setName function is called
// The function is called every time the window is loaded
window.addEventListener("load", (event) => {
  randomGift();
   // Validating that the input element exists
  if (document.getElementById("name") != null) {
    if (localStorage.getItem("name") === null) {
      setName();
    } else {
      document.getElementById("userName").textContent =
        localStorage.getItem("name");
    }
  }
});
