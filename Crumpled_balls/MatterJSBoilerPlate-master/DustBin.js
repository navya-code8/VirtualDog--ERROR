
class DustBin{

    constructor(x,y,width,height){
        this.color = "whiteJ";
        this.body = Bodies.rectangle(x,y,width,height, {restitution:1,isStatic:true});
        this.image= loadImage("dustbingreen.png")
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color)
        image(this.image,pos.x, pos.y, 100, 120);

    }
}