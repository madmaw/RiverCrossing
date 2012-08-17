function RiverCrossingState() {
    this.leftBank = new Location(3);
    this.rightBank = new Location(3);
    this.boat = new Location(1);
    this.boatBank = constants.bankLeft;
    this.leftBank.setEntity(0, new EntityChicken());
}

