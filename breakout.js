var canvas = document.querySelector("canvas");
 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c1 = canvas.getContext("2d");
var mouse ={
  x:undefined , y:undefined
};
document.addEventListener("mousemove",function(event){
  mouse.x = event.x;
});

var k=0;
var score=0;
var lives=3;
var bricks=[];
var status=1;
for(var i=40;i<1200;i+=60){
  bricks[i]=[];
    for(var j=0;j<120;j+=30){
      bricks[i][j]={x:0,y:0,status:1};
      console.log(bricks[i][j]);
    }
}
//window.width
function drawbricks(){
for(var i=40;i<1200;i+=60)
  {
    for(var j=0;j<120;j+=30)
      { 
        if(bricks[i][j].status==1){
          var bricksx= i+10;
          var bricksy= j+10;
          bricks[i][j].x = bricksx;
          bricks[i][j].y = bricksy;
       c1.fillStyle = "red";
        c1.fillRect(bricksx,bricksy,50,20);
        }
      }
  }
}
function colldet(){
  for(var i=40;i<1200;i+=60)
  {
    for(var j=0;j<120;j+=30)
      { 
        var b= bricks[i][j];
        if(b.status==1){
          if(x1>b.x && x1<b.x+50 && y1>b.y && y1<b.y+20){
            dy=-dy;
            b.status=0;
            score +=1;
            if(score==80){
              alert("game over -you won xD");    
            }
            }
          }
        }
}
  }
  
function drawpaddle(){
  if(mouse.x-80<1200){
  c1.fillStyle ="blue";
  c1.fillRect(mouse.x-80,330,160,10);
}
}
var x1= 500;
var y1= 290;
var dx=2;
var dy=2;

function drawball(){
  c1.beginPath();
   c1.fillStyle = "blue";
  c1.arc(x1,y1,10,0,Math.PI*2,false);
  c1.fill();
}

function drawscores(){
  c1.font="16px Arial";
  c1.fillStyle ="red";
  c1.fillText("scores:"+score,1200,290);
}
function drawlives(){
  c1.font="16px Arial";
  c1.fillStyle ="red";
  c1.fillText("lives:"+lives,1200,260);
}
 function coordinates(){x1=500;
                y1=250;}

function draw(){
  c1.clearRect(0,0,canvas.width,canvas.height);
drawbricks();
  drawball();
drawscores();
drawlives();
  drawpaddle();
  requestAnimationFrame(draw);
  if(x1>1200  || x1<0){
    dx =-dx;
  }
  if(y1<0){
    dy =-dy;
  }
  if(y1==330 && (x1<mouse.x+80 && x1>mouse.x-80)){
    dy=-dy;
  }
 
              if(y1>330 && y1<333){
               if(lives>-1){ lives--;}
                score=0;
                for(var i=40;i<1200;i+=60)
  {
    for(var j=0;j<120;j+=30)
      { 
        bricks[i][j].status=1;
      }
  }
                setTimeout(coordinates,5000);
                if(lives===0){
    alert("GAME LOST");
                location=window.location.href;}
  }
  x1 +=dx;
  y1 +=dy;
  colldet();
}

draw();

