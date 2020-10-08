// const Bicicleta = require('../../models/bicicleta');
// const request = require('request');
// const { head } = require('request');

// describe('bicicletas API',() =>{
//     describe('GET bicicletas',() =>{
//         it('Status 200',() =>{
//             expect(Bicicleta.allBicis.length).toBe(0)

//             let newBici = new Bicicleta(1,'urbana',[-38,-56])
//             Bicicleta.add(newBici)
    
//             request.get('http://localhost:3000/api/bicicletas',
//                 function(error,response,body){
//                     expect(response.statusCode).toBe(200)}
//                 )
//         })
//     })
//     describe('POST bicicletas/create', () => {
//         it('status 200',(done) =>{
//             let headers = {"content-type":"application/json"}
//             let newItem = {"id":2,"modelo":"urbana","lat":-34,"long":-54}
//             request.post({
//                 headers:headers,
//                 url:'http://localhost:3000/api/bicicletas/create',
//                 body:newItem
//             },function(error,response,body){
//                 expect(response.statusCode).toBe(200)
//                 done()
//             })

//         })
//     })
// })

