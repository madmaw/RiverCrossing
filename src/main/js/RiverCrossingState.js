function RiverCrossingState() {

    var chicken = new EntityChicken("chicken");
    var fox = new EntityFox("fox");
    var grain = new EntityGrain("grain");

    this.leftBank = new Location(constants.bankLeft);
    this.rightBank = new Location(constants.bankRight);
    this.boat = new Location(constants.boat);
    this.boat.bank = constants.bankLeft;
    this.boat.justMoved = false;
    this.leftBank.entities.push(chicken);
    this.leftBank.entities.push(fox);
    this.leftBank.entities.push(grain);

    this.draggableEntities = [];
    this.draggableEntities.push(chicken);
    this.draggableEntities.push(fox);
    this.draggableEntities.push(grain);

    this.targetLocations = [];
    this.targetLocations.push(this.leftBank);
    this.targetLocations.push(this.rightBank);
    this.targetLocations.push(this.boat);
}

RiverCrossingState.prototype.moveEntityToLocation = function(entityId, locationId) {

    // check it is allowed
    var sourceLocation = null;
    var targetLocation = null;
    var movedEntity = null;
    var movedEntityIndex = null;
    outer: for( var i in this.targetLocations ) {
        var location = this.targetLocations[i];
        // does the location contain this entity?
        if( location.id != locationId ) {
            for( var j in location.entities ) {
                var entity = location.entities[j];
                if( entity.id == entityId ) {
                    movedEntity = entity;
                    movedEntityIndex = j;
                    sourceLocation = location;
                    break outer;
                }
            }
        }
    }
    var result = false;
    // remove from location
    // add to target location
    if( movedEntity != null ) {
        for( var i in this.targetLocations ) {
            var location = this.targetLocations[i];
            if( location.id == locationId ) {
                targetLocation = location;
                break;
            }
        }
    }
    if( sourceLocation != null && targetLocation != null && movedEntity != null ) {
        if( targetLocation == this.boat &&
            (this.boat.bank == constants.bankLeft && sourceLocation == this.leftBank ||
             this.boat.bank == constants.bankRight && sourceLocation == this.rightBank)
        ) {
            result = true;
        } else {
            if( sourceLocation == this.boat &&
                (this.boat.bank == constants.bankLeft && targetLocation == this.leftBank ||
                 this.boat.bank == constants.bankRight && targetLocation == this.rightBank)
            ) {
                result = true;
            } else {
                result = false;
            }
        }
    } else {
        result = false;
    }
    if( result ) {
        sourceLocation.entities.splice(movedEntityIndex, 1);
        targetLocation.entities.push(movedEntity);
    }
    return result;
}

RiverCrossingState.prototype.moveBoatToOtherSide = function() {
    // record what just happened
    if( this.boat.bank == constants.bankLeft ) {
        this.boat.bank = constants.bankRight;
    } else {
        this.boat.bank = constants.bankLeft;
    }
    // eat something?
    if( this.boat.bank == constants.bankLeft ) {
        this.checkEat(this.rightBank);
    } else {
        this.checkEat(this.leftBank);
    }
    this.boat.justMoved = true;
}

RiverCrossingState.prototype.resetActions = function() {
    this.boat.justMoved = false;
    for(var i in this.draggableEntities ) {
        var entity = this.draggableEntities[i];
        entity.justAte = false;
        entity.justEaten = false;
    }
}

RiverCrossingState.prototype.checkEat = function(location) {
    for( var i in location.entities ) {
        var entity = location.entities[i];
        for( var j = parseInt(i)+1; j<location.entities.length; j++ ) {
            var compare = location.entities[j];
            if( entity.canEat(compare) ) {
                entity.justAte = true;
                compare.justEaten = true;
                compare.eaten = true;
            } else if( compare.canEat(entity) ) {
                entity.justEaten = true;
                compare.justAte = true;
                entity.eaten = true;
            }
        }
    }
}