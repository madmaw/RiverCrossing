function RulesRiverCrossing() {
    this.self =
        "<div class='world'>" +
            "<div class='sky'>"+
                "<div id='"+constants.bankLeft+"' class='slot'>{leftBank}</div>" +
                "<div class='river-sky'>"+
                    "<div id='"+constants.boat+"' class='boat-right-to-left'>boat:{boat}</div>" +
                "</div>" +
                "<div id='"+constants.bankRight+"' class='slot'>{rightBank}</div>" +
            "</div>" +
            "<div id='ground'>"+
                "<div id='bank-left-ground'>" +
                "</div>" +
                "<div id='river'></div>" +
                "<div id='bank-right-ground'>" +
                "</div>" +
            "</div>"+
        "</div>";
    this.rightBank = this.bankRule;
    this.leftBank = this.bankRule;
}

RulesRiverCrossing.prototype.bankRule = function(bank) {
    var locationRules = new RulesLocation();
    return jsonT(bank, locationRules);
}

RulesRiverCrossing.prototype.boat = function(boat) {
    var locationRules = new RulesLocation();
    return jsonT(boat, locationRules);
}

