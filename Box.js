class Box {
    constructor(x,y,width,height) {
      var options = {
     
        isStatic:false,
        density: 0.4,
        friction:1

    }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
   this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      //fill(158, 11, 58);
      rect(pos.x, pos.y, this.width, this.height);
   

      if(this.body.speed>=9){
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);

        //image(this.image, this.body.position.x,  this.body.position.y, this.width, this.height);
        
        pop();
   
 }
  }

  score(){

    if(this.Visibility<0 && this.Visibility>-105 ){
    
    score = score + 1
    
    }
    
     }

}


