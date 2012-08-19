EntityFox.prototype = new EntityAbstract(null, null);

function EntityFox(id, type) {
    if( type == null ) {
        type = constants.entityTypeFox;
    }
    EntityAbstract.apply(this, [id, type]);
}

EntityFox.prototype.canEat = function(entity) {
    var result;
    if( entity.type == constants.entityTypeChicken && !entity.eaten ) {
        result = true;
    } else {
        result = false;
    }
    return result;
}