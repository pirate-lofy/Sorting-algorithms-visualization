var arr=[];
var sz=2000,w,it;
var i=0,j=0;
var first,second;
var it=1;


class Selection{

  constructor(){
    for(var i=0; i<sz; i++){
      arr[i]=random(height);
    }
    w=width/sz;
  }

  display(){
    for(var s=0; s<it; s++){
      //for(var i=0; i<sz-1; i++){
      var min=5314342323,ind;
      for(var a=i; a<sz; a++)
        if(arr[a]<min){
            min=arr[a];
            ind=a;
        }

        var temp=arr[i];
        arr[i]=arr[ind];
        arr[ind]=temp;
        first=i;
        second=ind;

        i++;
        if(i==sz){
          obj=null;
        }


        background(0);

        for(var a=0; a<sz; a++){
          if(a==first|| a==second){
            fill(0,255,0,150);
            stroke(0,255,0,150);
          }
          else {
            fill(127, 63, 120,150);
            stroke(127, 63, 120,150);
          }
          rect(a*w,height,w,-arr[a]);
        }


    }
  }

}
