class Box{
    constructor (x,y,width,height){
     var option ={
         restitution:0.8
     }
    this.body=Bodies.rectangle(x,y,width,height,option)
    this.width=width
    this.height=height
    World.add(world,this.body)
    

    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position
        push ()
        translate(pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER)
        fill("white")
        rect(0,0,this.width,this.height)
        pop ()
    }

}