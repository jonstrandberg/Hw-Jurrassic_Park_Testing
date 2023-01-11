const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let veloceraptor
  let tyrannosaurus
  let brachiosaurus
  let park

beforeEach(function () {

  park = new Park("Dino Park", 20)

  veloceraptor = new Dinosaur("Veloceraptor", "carnivore", 100)
  tyrannosaurus = new Dinosaur("T-rex", "carnivore", 500)
  brachiosaurus = new Dinosaur("Brachiosaurus", "herbivore", 250)

})

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, "Dino Park")
  })


  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 20)
  })

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(tyrannosaurus)
    park.addDinosaur(veloceraptor)
    park.addDinosaur(brachiosaurus)
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [tyrannosaurus,veloceraptor, brachiosaurus])
  })

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(tyrannosaurus)
    park.addDinosaur(brachiosaurus)
    park.removeDinosaur(brachiosaurus)
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [tyrannosaurus])
  })

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(tyrannosaurus)
    park.addDinosaur(veloceraptor)
    park.addDinosaur(brachiosaurus)
    const actual = park.getMostAttractiveDinosaur()
    assert.deepStrictEqual(actual,tyrannosaurus)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(tyrannosaurus)
    park.addDinosaur(veloceraptor)
    park.addDinosaur(brachiosaurus)
    const actual = park.findBySpecies("Veloceraptor")
    const expected = [veloceraptor]
    assert.deepStrictEqual(actual,expected)
  })

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(tyrannosaurus)
    park.addDinosaur(veloceraptor)
    park.addDinosaur(brachiosaurus)
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 850)
  });


  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(tyrannosaurus)
    park.addDinosaur(veloceraptor)
    park.addDinosaur(brachiosaurus)
    const actual = park.totalVisitorsPerYear()
    assert.strictEqual(actual, 310250)
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(tyrannosaurus)
    park.addDinosaur(veloceraptor)
    park.addDinosaur(brachiosaurus)
    const actual = park.totalYearlyRevenue()
    assert.strictEqual(actual, 6205000)
  });
});
