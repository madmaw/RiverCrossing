EntityChicken.prototype = new EntityAbstract(null, null);

function EntityChicken(id, type) {
    if( type == null ) {
        type = constants.entityTypeChicken;
    }
    EntityAbstract.apply(this, [id, type]);
}

EntityChicken.prototype.canEat = function(entity) {
    var result;
    if( entity.type == constants.entityTypeGrain && !entity.eaten ) {
        result = true;
    } else {
        result = false;
    }
    return result;
}