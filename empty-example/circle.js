class Circle{

  constructor(n,x,y){
    this.x=x;
    this.y=y;
    this.r=150;
    this.col;
    this.obj;
    this.text;
    this.n=n;


    if(n==0){
      this.col=color(0,0,255,100);
      this.obj=new Bubble();
      this.text="Bubble sort";
    }
    else if(n==1){
      this.col=color(0,255,0,100);
      this.obj=new Insertion();
      this.text="Insertion sort";
    }
    else{
      this.col=color(255,0,0,100);
      this.obj=new Selection();
      this.text="Selection sort";
    }
  }

  touch(x,y){
    var d=dist(x,y,this.x,this.y);
    if(d<this.r/2){
      return true;
    }
    return false;
  }

  show(){
    fill(this.col);
    ellipse(this.x,this.y,this.r);
    textSize(20);
    text(this.text,this.x-this.r/3,this.y-this.r-10);
  }

  bigger(){
    fill(this.col);
    ellipse(this.x,this.y,this.r*1.5);
  }

}
