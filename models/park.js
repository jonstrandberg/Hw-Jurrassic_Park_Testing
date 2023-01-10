const Park = function(name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function (){
    return this.dinosaurs.length
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(indexOfDinosaur, 2)
}

// Park.prototype.mostAttractiveDinosaur = function() {
//     let 
//     for (dinosaur of this.dinosaurs) {
//         if dinosaur.guestsAttractedPerDay > 
//     }

// }

Park.prototype.particularSpecies = function (species) {
    let sameSpecies= []
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            sameSpecies.push(dinosar.species)
        }
    }
}


Park.prototype.totalVisitors = function () {
    let totalNumberVisitors = 0 
    for (dinosaur of this.dinosaurs) {
        totalNumberVisitors +=
        dinosasaur.guestsAttractedPerDay }
    return totalNumberVisitors
}

Park.prototype.visitorsPerYear = function () {
    return this.totalVisitors () * 365
}


module.exports = Park;