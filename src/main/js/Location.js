function Location(maxEntities) {
    this.maxEntities = maxEntities;
    this.entities = [];
    for( var i=0; i<maxEntities; i++ ) {
        this.entities[i] = null;
    }
}

Location.prototype.setEntity = function(position, entity) {
    this.entities[position] = entity;
}
