const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function () {
    return this.dinosaurs.length
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.getMostAttractiveDinosaur = function () {
    let mostAttractiveDino = this.dinosaurs[0];

    for (const dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
            mostAttractiveDino = dino;
        }
    }
    return mostAttractiveDino;
}

Park.prototype.findBySpecies = function (species) {
    const foundDinosaurs = [];

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            foundDinosaurs.push(dinosaur);
        }
    }

    return foundDinosaurs;
}


Park.prototype.totalVisitorsPerDay = function () {
    let totalDailyVisitors = 0;

    for (const dinosaur of this.dinosaurs) {
        totalDailyVisitors += dinosaur.guestsAttractedPerDay;
    }

    return totalDailyVisitors;
}

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitorsPerDay() * 365;
}

Park.prototype.totalYearlyRevenue = function () {
    return this.ticketPrice * this.totalVisitorsPerYear();
}

module.exports = Park;
