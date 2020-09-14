var homeScreen,mapScreen
var btnStart
var canvas
var lvl1Btn,lvl2Btn,lvl3Btn,lvl4Btn,lvl5Btn
var fireboyImg,watergirlImg,homeScreenImg,mapScreenImg,btnStartImg
var fireboy, watergirl
var gameState
var lvl1Group,lvl2Group ,lvl3Group ,lvl4Group ,lvl5Group                     


function preload(){
fireboyImg = loadImage("Sprites/FIREBOY.png")
watergirlImg = loadImage("Sprites/WATERGIRL.png")
homeScreenImg = loadImage("Sprites/HOMESCREEN.jpg")
mapScreenImg = loadImage("Sprites/MAP.jpeg")
btnStartImg = loadImage("Sprites/btnStart.png")
}

function setup(){

canvas = createCanvas(windowWidth, windowHeight);
btnStart = createSprite(windowWidth/2,windowHeight/2+170,150,100);
lvl1Group = new Group()
lvl2Group = new Group()
lvl3Group = new Group()
lvl4Group = new Group()
lvl5Group = new Group()

btnStart.scale = 3

gameState="start"

}

function draw(){
 background(homeScreenImg);

if(mousePressedOver(btnStart)){
    homeScreen.visisble = hide;
mapScreen = createSprite(windowWidth/2,windowHeight/2,windowWidth-40,windowHeight-40);
mapScreen.shapeColor="green"
}

lvl1Group.add(lvl1Btn)
lvl2Group.add(lvl2Btn)
lvl3Group.add(lvl3Btn)
lvl4Group.add(lvl4Btn)
lvl5Group.add(lvl5Btn)

//mapScreen.addImage(mapScreenImg)
btnStart.addImage(btnStartImg)

textSize(50)
text(mouseX +","+ mouseY,mouseX,mouseY)

drawSprites()
}

