var bubbleArray=[];
var bubbleSize=200,ww;
var iterations=50;
var a=0,b=0,f,s;

class Bubble{

  constructor(){
    for(var s=0; s<bubbleSize; s++){
      bubbleArray[s]=random(height);
    }
    ww=width/bubbleSize;
  }

  display(){
    for(var kk=0; kk<iterations; kk++){

      if(bubbleArray[a]<bubbleArray[b]){
        var temp=bubbleArray[a];
        bubbleArray[a]=bubbleArray[b];
        bubbleArray[b]=temp;

        f=a;
        s=b;
      }

      b++;
      if(b==bubbleSize){
        a++;
        b=0;
      }
      if(a==bubbleSize){
        obj=null;
      }

      background(0);
      for(var r=0; r<bubbleSize; r++){
        if(r==f || r==s)
          fill(0,0,255,150);
        else
          fill(255);
        rect(r*ww,height,ww,-bubbleArray[r]);
      }
    }
  }



}
