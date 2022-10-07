// Array of product image names found on the webstie
const productImages = ["tv1.png", "tv2.png", "tv3.png", "tv4.png", "computer1.png", "computer2.png", "computer3.png", "computer4.png"];

// Returns Random Integer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a random product image and loads it on the screen
// Function is called by the Body element On Load, as well as when the user clicks the Pick a random gift button
// The function also creates a link that takes the user to the page where the product is located
function randomGift(){
    numImages = productImages.length;
    var randomInt = getRandomInt(0,numImages-1);
    console.log(randomInt);
    randomProduct = productImages[randomInt]
    document.getElementById("randomImg").src = "./img/" + randomProduct;

    if(randomProduct.includes("tv")){
        document.getElementById("randomLink").href = "./tv.html";
    }
    if(randomProduct.includes("computer")){
        document.getElementById("randomLink").href = "./computers.html";
    }
}