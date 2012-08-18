function RulesLocation() {
}

RulesLocation.prototype.self = function(location) {
    var result = "";
    for( var i in location.entities ) {
        var entity = location.entities[i];
        if( entity.type == constants.entityTypeChicken ) {
            result += jsonT(entity, new RulesChicken());
        } else {
            result += entity.id;
        }
    }
    return result;
}
