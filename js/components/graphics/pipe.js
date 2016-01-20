var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    console.log("drawing a pipe")
    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.arc(10, 10, 10, 10, 10 * Math.PI);
    context.fill();
    //context.closePath();
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;

