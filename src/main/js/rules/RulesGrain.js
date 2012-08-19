function RulesGrain() {

    this.self =
        "<a id='{id}' draggable='true' class='entity'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='16' height='16'>"+
                "<rect x='0' y='0' width='16' height='16' fill='{eaten}'/>"+
            "</svg>"+
        "</a>";

}

RulesGrain.prototype.eaten = function(b) {
    if(b) {
        return 'black';
    } else {
        return 'brown';
    }
}


