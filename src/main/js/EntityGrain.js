EntityGrain.prototype = new EntityAbstract(null, null);

function EntityGrain(id, type) {
    if( type == null ) {
        type = constants.entityTypeGrain;
    }
    EntityAbstract.apply(this, [id, type]);
}

EntityGrain.prototype.canEat = function(entity) {
    return false;
}