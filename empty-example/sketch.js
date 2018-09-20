var circles=[];
var obj;
var par;

function setup(){
  createCanvas(1535,750);
  circles[0]=new Circle(0,150,430);
  circles[1]=new Circle(1,700,430);
  circles[2]=new Circle(2,1250,430);
  obj=null;

}

function draw(){
  background(0);
  if(obj==null){
    fill(random(255),random(255),random(255),random(200));
    textSize(50);
    text("BigNrz",630,100);
    for(var k=0; k<3; k++){
      if(circles[k].touch(mouseX,mouseY))
        circles[k].bigger();
      else circles[k].show();
    }
  }

  else {
    obj.display();

  }
}


function mousePressed(){
  for(var k=0; k<3; k++){
    if(circles[k].touch(mouseX,mouseY))
      obj=circles[k].obj;
}
}
