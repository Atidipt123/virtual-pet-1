//Create variables here
var dog, happyDog, database, foodS, foodStock, dogI

function preload()
{
  //load images here
  happyDog = loadImage("Images/dogImg1.png")
  dogI = loadImage("Images/dogImg.png")
  
}

function setup() {
  createCanvas(500, 500);database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value" , readStock);
  dog = createSprite(250 , 250 , 50 , 50)
  dog.addImage(dogI)
  dog.scale = 0.5
}
  



function draw() {  
  background(46, 139, 87)

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }
  text("Food Remaining: "+foodS , 250 , 500)
  fill(250 , 0 , 250)
  drawSprites();

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if (x <= 0) {
    x = 0
  } else{
    x = x-1
  }

  database.ref('/').update({
    Food: x
  })
}