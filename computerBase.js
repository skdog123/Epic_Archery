class ComputerBase{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width
        this.height=height
        this.image=loadImage("assets/base2.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
       push() 
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
       pop()
    }
}