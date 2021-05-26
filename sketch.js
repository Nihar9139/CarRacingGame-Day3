var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var car1,car2,car3,car4;
var Cars=[];

function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-140);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount==4){
    game.update(1);
  }
  if(gameState==1){
    clear();
    game.play();
  }
}