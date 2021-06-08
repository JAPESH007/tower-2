class Block{
  constructor(x, y, width, height) {
      super(x,y,50,50)
      this.Visibility=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("block.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        super.display();
      }
      else{
        World.remove(World,this.body)
        push()
        this.Visibility=this.Visibility-
        tint(255,this.Visibility)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
      }
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}