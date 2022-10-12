// The document's last modification date and time are displayed
var myDate = new Date(document.lastModified);
theMonth = myDate.getMonth() + 1;
theDate = myDate.getDate();
theYear = myDate.getFullYear();
theTime = myDate.toLocaleTimeString();
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

// Displays the Year for Copyright Message
document.getElementById("year").innerHTML = myDate.getFullYear();

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

const productImages = shuffleArray(arr); // Shuffles product images to produce a more random reslut

// Function Returns Random Integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Renders a random product image out of an array of product images to the screen
// Checks to see what kind of image it is, then creates a link that takes the user to the page where the product is located
// The function is called when the user clicks the "Pick a random gift" button
// The function is also called by the <body> element in index.html on load
function randomGift() {
  numImages = productImages.length;
  randomProduct = productImages[getRandomInt(0, numImages - 1)];
  document.getElementById("randomImg").src = "./img/" + randomProduct;

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


function setName() {
  userName = document.getElementById("name").value;
  localStorage.setItem("name", userName);
  document.getElementById("userName").textContent = userName;
}

window.addEventListener("load", (event) => {
  randomGift()
  if (localStorage.getItem("name") === null) {
    setName()
  }else{
    document.getElementById("userName").textContent =
    localStorage.getItem("name");
  }
});
