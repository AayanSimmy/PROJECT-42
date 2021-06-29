class Drop{
constructor(x,y){
  var options={
        friction:1.0,
        density:1.0
    }
    this.raindrop=Bodies.circle(x,y,5,options)
World.add(world,this.raindrop)
}

display(){
  fill("blue")
  ellipse(this.raindrop.position.x,this.raindrop.position.y,5,5)
}
updateY(){
if(this.raindrop.position.y>700){
  Matter.Body.setPosition(this.raindrop, {x:random(0,400), y:random(0,400)})
}}
}