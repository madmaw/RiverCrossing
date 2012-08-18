EntityChicken.prototype = new EntityAbstract(null, null);

function EntityChicken(id, type) {
    if( type == null ) {
        type = constants.entityTypeChicken;
    }
    EntityAbstract.apply(this, [id, type]);
}

