function RulesRiverCrossing() {
    this.self =
        "<table class='world'>" +
            "<tr class='sky'>"+
                "<td id='"+constants.bankLeft+"' class='slot'>{leftBank}</td>" +
                "<td class='river-sky'>{boat}</td>"+
                "<td id='"+constants.bankRight+"' class='slot'>{rightBank}</td>" +
            "</tr>" +
            "<tr id='ground'>"+
                "<td class='bank' id='bank-left-ground'>" +
                "</td>" +
                "<td id='river'></div>" +
                "<td class='bank' id='bank-right-ground'>" +
                "</td>" +
            "</tr>"+
        "</table>";
    this.rightBank = this.bankRule;
    this.leftBank = this.bankRule;
}

RulesRiverCrossing.prototype.bankRule = function(bank) {
    var locationRules = new RulesLocation();
    return jsonT(bank, locationRules);
}

RulesRiverCrossing.prototype.boat = function(boat) {
    var clazz;
    if( boat.justMoved ) {
        if( boat.bank == constants.bankLeft ) {
            clazz = "boat-right-to-left";
        } else {
            clazz = "boat-left-to-right";
        }
    } else {
        if( boat.bank == constants.bankLeft ) {
            clazz = "boat-left";
        } else {
            clazz = "boat-right";
        }
    }
    var result = "<div id='"+constants.boat+"' class='"+clazz+"'>";
    var locationRules = new RulesLocation();
    result += jsonT(boat, locationRules);
    result += "</div>";
    return result;
}

