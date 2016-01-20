var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
    console.dir(entity);
};

PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    console.log("pipe drawing")
    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.rect(0, 0, 0.15, 0.6);
    context.fill();
    context.closePath();
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;

