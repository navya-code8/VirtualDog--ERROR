//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;
var ground;

function preload()
{
  dogImg = loadImage("dogImg.png")
  happyDogImg = loadImage("dogImg1.png")

}


function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  ground = createSprite(250,480, 500, 40)
  ground.shapeColor = "Gainsboro"

  dog = createSprite(250,390, 100, 100);
  dog.addImage("dog", dogImg);
  dog.scale = 0.25

  foodStock = database.ref("food");
  foodStock.on("value", readStock)
  
}


function draw() {  
  background("skyblue");

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
  }


  drawSprites();

  fill("black");
  text("Food remaining: "+foodS, 250, 200);
  text("NOTE: Press up-arrow key to feed your dog!", 250, 100)
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }

  else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}
