EntityChicken.prototype = new EntityAbstract(null);

function EntityChicken(type) {
    if( type == null ) {
        type = constants.entityTypeChicken;
    }
    EntityAbstract.apply(this, [type]);
}

