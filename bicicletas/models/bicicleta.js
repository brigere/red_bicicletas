function Bicicleta(id,modelo,ubicacion){
    this.id=id;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
    
}

Bicicleta.allBicis = [];
Bicicleta.add = (aBici)=>{
    Bicicleta.allBicis.push(aBici)
};

let biciA = new Bicicleta(1,'urbana',[-34.6056, -58.386623]);
let biciB = new Bicicleta(2,'mountain',[-34.60596,-58.380252]);
let biciC = new Bicicleta(3,'urbana',[-34.60561,-58.38034]);

Bicicleta.add(biciA);
Bicicleta.add(biciB);
Bicicleta.add(biciC);

Bicicleta.allBicis.forEach(bici => {
    console.log(bici.ubicacion)
})

module.exports = Bicicleta