function RiverCrossingRules() {
    this.self =
        "<div id='world'>" +
            "<div id='sky'>"+
                "{leftBank}" +
                "<div id='river-sky'>"+
                    "<div id='boat-right-to-left' class='boat'></div>" +
                "</div>" +
                "{rightBank}" +
            "</div>" +
            "<div id='ground'>"+
                "<div id='bank-left'>" +
                "</div>" +
                "<div id='river'></div>" +
                "<div id='bank-right'>" +
                "</div>" +
            "</div>"+
        "</div>";
    this.rightBank = "<div id='bank-right-sky' class='slot'>{$.maxEntities} *** {$.entities}</div>";
    this.leftBank = "<div id='bank-left-sky' class='slot'>{$.maxEntities} *** {$.entities}</div>";
    this.entities = function(entities) {
        var string = "";
        for( var i in entities ) {
            string += i;
        }
        return string;
    };

}

