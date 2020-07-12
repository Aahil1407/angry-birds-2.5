class chain {
    constructor (bodyA,bodyB) {

        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length : 10,
            stiffness:0.04

        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)

    }
    display(){
        var point = this.chain.bodyA.position
        var point1 = this.chain.bodyB.position

        line (point.x,point.y,point1.x,point1.y)
    }
    

    
}