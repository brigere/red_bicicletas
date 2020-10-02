var map = L.map('mainMap').setView([-34.604865, -58.386619], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.ajax({
    dataType:'json',
    url:'/api/bicicletas',
    success: function(bicicletas){
        console.log(bicicletas);
        bicicletas.forEach(bici=>{
            let marker = new L.marker(bici.ubicacion,{title:bici.id}).addTo(map);
        });
    }
})