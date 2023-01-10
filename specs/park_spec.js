const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let veloceraptor
  let tyrannosaurus
  let brachiosaurus 

  beforeEach(function () {

    park = new Park("Dino Park", 20)
    
    veloceraptor = new Dinosaur("Veloceraptor", "carnivore", 100)
    tyrannosaurus = new Dinosaur("T-rex", "carnivore", 500)
    brachiosaurus = new Dinosaur("Brachiosaurus","herbivore", 250)

    })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, "Dino Park")
  })


  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 20)
  })

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 0)
  })

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(Tyrannosaurus)
    park.addDinosaur(Veloceraptor)
    park.addDinosaur(Brachiosaurus)
    const actual = park.numberOfDinosaurs
    assert.strictEqual(actual, 3)
  })

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(Tyrannosaurus)
    park.addDinosaur(Veloceraptor)
    park.addDinosaur(Brachiosaurus)
    park.removeDinosaur(Brachiosaurus)
    const actual = park.numberOfDinosaurs
    assert.strictEqual(actual, 2)
  })

  // xit('should be able to find the dinosaur that attracts the most visitors', function(){
  //   park.addDinosaur(Tyrannosaurus)
  //   park.addDinosaur(Veloceraptor)
  //   park.addDinosaur(Brachiosaurus)
  //   const actual = park.getMostAttractiveDinosaur()
  //   assert.strictEqual(actual, (Tyrannosaurus))
  // });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(Tyrannosaurus)
    park.addDinosaur(Veloceraptor)
    park.addDinosaur(Brachiosaurus)
    const actual = park.particularSpecies
    assert.deepStrictEqual(actual, ("Veloceraptor"))
  })

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(Tyrannosaurus)
    park.addDinosaur(Veloceraptor)
    park.addDinosaur(Brachiosaurus)
    const actual = park.totalVisitors
    assert.strictEqual(actual, 850)
  });


  it('should be able to calculate the total number of visitors per year', function () {
  park.addDinosaur(Tyrannosaurus)
  park.addDinosaur(Veloceraptor)
  park.addDinosaur(Brachiosaurus)
  const actual = park.visitorsPerYear
  assert.strictEqual(actual, 310250)
  });

  it('should be able to calculate total revenue for one year');
  park.addDinosaur(Tyrannosaurus)
  park.addDinosaur(Veloceraptor)
  park.addDinosaur(Brachiosaurus)
  
});
