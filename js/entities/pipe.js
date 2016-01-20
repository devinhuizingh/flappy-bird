var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {
    console.log("Creating Pipe entity");
	var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 5;
    physics.acceleration.x = -1;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    
    this.components = {
    physics: physics,
    graphics: graphics,


    };
};

exports.Pipe = Pipe;