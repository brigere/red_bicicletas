function Bicicleta(id,modelo,ubicacion){
    this.id=id;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
    
}

Bicicleta.allBicis = [];
Bicicleta.add = (aBici)=>{
    Bicicleta.allBicis.push(aBici)
};

Bicicleta.removeById = (id)=>{
    Bicicleta.allBicis.splice(id,1)
}

let biciB = new Bicicleta(2,'mountain',[-34.60596,-58.380252]);
let biciC = new Bicicleta(3,'urbana',[-34.60561,-58.38034]);
let biciD = new Bicicleta(4,'urbana',[-34.615,-58.37]);
let biciE = new Bicicleta(5,'urbana',[-34.604,-58.387]);

Bicicleta.add(biciB);
Bicicleta.add(biciC);
Bicicleta.add(biciD);
Bicicleta.add(biciE);


Bicicleta.allBicis.forEach(bici => {
    console.log(bici.ubicacion)
})

module.exports = Bicicleta