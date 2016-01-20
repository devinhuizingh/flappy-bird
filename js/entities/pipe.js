var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {
    console.log("Creating Pipe entity");
	var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = .8;
    physics.position.x = .8; 
    //physics.acceleration.x = 0;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    
    this.components = {
    physics: physics,
    graphics: graphics,


    };
};

exports.Pipe = Pipe;