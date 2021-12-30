class Boat {
    constructor(x, y, width, height, Boatpos) {
        var options = {
            restituition: 0.8, 
            friction: 1.0,
            density: 1.0,
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("./assets/boat.png")
        this.Boatpos = Boatpos
        World.add(world, this.body)
    }

    remove(index){
        setTimeout(() => {
            Matter.World.remove(world,boats[index].body)
            delete boats[index];
        },2000)
        
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, this.Boatpos, this.width, this.height);
        pop();
    }
}