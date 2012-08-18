function RiverCrossingState() {

    var chicken1 = new EntityChicken("chicken1");
    var chicken2 = new EntityChicken("chicken2");

    this.leftBank = new Location(constants.bankLeft);
    this.rightBank = new Location(constants.bankRight);
    this.boat = new Location(constants.boat);
    this.boat.bank = constants.bankLeft;
    this.boat.justMoved = false;
    this.leftBank.entities.push(chicken1);
    this.leftBank.entities.push(chicken2);

    this.draggableEntities = [];
    this.draggableEntities.push(chicken1);
    this.draggableEntities.push(chicken2);

    this.targetLocations = [];
    this.targetLocations.push(this.leftBank);
    this.targetLocations.push(this.rightBank);
    this.targetLocations.push(this.boat);
}

RiverCrossingState.prototype.moveEntityToLocation = function(entityId, locationId) {

    // TODO check it is allowed

    var result = false;
    // remove from location
    var movedEntity = null;
    outer: for( var i in this.targetLocations ) {
        var location = this.targetLocations[i];
        // does the location contain this entity?
        if( location.id != locationId ) {
            for( var j in location.entities ) {
                var entity = location.entities[j];
                if( entity.id == entityId ) {
                    location.entities.splice(j, 1);
                    movedEntity = entity;
                    break outer;
                }
            }
        }
    }
    // add to target location
    if( movedEntity != null ) {
        for( var i in this.targetLocations ) {
            var location = this.targetLocations[i];
            if( location.id == locationId ) {
                location.entities.push(movedEntity);
                result = true;
                break;
            }
        }
    }
    return result;
}

RiverCrossingState.prototype.moveBoatToOtherSide = function() {
    // TODO record what just happened
    if( this.boat.bank == constants.bankLeft ) {
        this.boat.bank = constants.bankRight;
    } else {
        this.boat.bank = constants.bankLeft;
    }
    this.boat.justMoved = true;
}

RiverCrossingState.prototype.resetActions = function() {
    this.boat.justMoved = false;
}