var array=[];
var insertSize=200,wid;
var insertIterations=1;
var ii=1,j,first,second;

class Insertion{

  constructor(){
    for(var k=0; k<insertSize; k++)
      array[k]=random(height);
    wid=width/insertSize;
  }

  display(){

    for(var k=0; k<insertIterations; k++){

      var key=array[ii];
      j=ii-1;

      while(j>=0 && array[j]>key){
        array[j+1]=array[j];
        j--;

        background(0);
        for(var r=0; r<insertSize; r++){
          if(r==j || r==j+1)
            fill(0,255,0,150);
          else
            fill(255);
          rect(r*wid,height,wid,-array[r]);
        }
      }
      array[j+1]=key;

      ii++;
      if(ii==insertSize){
        obj=null;
      }


    }
  }
}
