//Create variables here
var dog, happyDog, database, foodS, foodStock, dogI

function preload()
{
  //load images here
  happyDog = loadImage("Images/dogImg1.png")
  dogI = loadImage("Images/dogImage.png")
  
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250 , 250 , 50 , 50)
  dog.addImage(dogI)
  dog.scale(0.5)
  database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value" , readStock);
}


function draw() {  
  background(46, 139, 87)

  if (keyWentDown) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  text(foodStock , 250 , 500);
  stroke(5)

}