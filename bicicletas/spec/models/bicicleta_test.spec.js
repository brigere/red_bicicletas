const mongoose = require('mongoose');
const Bicicleta = require('../../models/bicicleta');

describe('testing Bicicletas', function(){

    beforeEach(function(done){

        mongoose.connect(
        'mongodb://localhost:27017/red_bicicletas',
        {useNewUrlParser:true,useUnifiedTopology:true});

        const db = mongoose.connection;
        db.on('error',console.error.bind(console,'MondoDB connection error: '));
        db.once('open',()=>{
            console.log('Database is Connected');
            done();
        });

    });

    // afterEach(function(done){
    //     Bicicleta.deleteMany({},(err,success)=>{
    //         if(err){console.log(err)}
    //         console.log('Database items deleted');
    //         done()
    //     });
    // });

    // describe('Bicicleta.cerateInstance', () => {
    //     it('Crea una instancia de Bicicleta',()=>{
    //         const newBicicleta = Bicicleta.createInstance({
    //             modelo:'urban',
    //             ubicacion:[-58.65,-35.9]
    //         });
    //         console.log(newBicicleta)
    //         expect(newBicicleta.modelo).toBe("urban");
    //     })

    // })
    
    describe('Bicicleta.allBicis',()=>{
        it('comienza vacia',(done)=>{
                Bicicleta.allBicis((err,bicicletas)=>{
                    expect(bicicletas.length).toBe(0)
                    done();
                })
        })
    })

    // describe('Bicicleta.createInstance',()=>{
    //     it('Crea una instancia de Bicicleta',function(done){
    //         let bici2 = Bicicleta.createInstance('urban',[-58,-38])
    //         expect(bici2.modelo).toBe('urban')
    //     })
    // })

    describe('Bicicleta.add', () => {
        it('Agrega un elemento',(done)=>{
            let newBici = Bicicleta.createInstance('carrera',[-37,-58])
            
            Bicicleta.create(newBici,(err,bici)=>{
                if(err){console.log(err)}
                expect(bici.modelo).toBe('carrera');
                expect(bici.ubicacion[0]).toBe(-37);
                expect(bici.ubicacion[1]).toBe(-58);

                done()
            })
        })
        
    })
    

})



//old tests
//se incia en cero la cantidad de bicicletas al inicio
//de cada test
// beforeEach(()=>{
//     Bicicleta.allBicis = []
// })

// describe('Bcileta.allBicis',()=>{
//     it('comienza vacio',()=>{
//         expect(Bicicleta.allBicis.length).toBe(0)
//     })
// })

// describe('Bicicleta.add', () => {
//     it('agregamos una bici',()=>{
//         // estado inicial
//         expect(Bicicleta.allBicis.length).toBe(0)

//         let newItem = new Bicicleta(1,'mountain',[-58.65,-38.9])
//         Bicicleta.add(newItem)

//         //estado final, luego de agregado un item
//         expect(Bicicleta.allBicis.length).toBe(1)
//         expect(Bicicleta.allBicis[0]).toBe(newItem)
//     })
// })

// describe('Bicleta.findById', () => {
//     it('debe retornar bicicleta con id 1',()=>{
//         let newItem = new Bicicleta(1,'urbana',[0,0])
//         Bicicleta.add(newItem)

//         let targetItem = Bicicleta.findById(1)
//         expect(targetItem.id).toBe(1)
//     })
    
// })

