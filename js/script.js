

    var arrayEnderecos = ['Vila Cardia','Edson Francisco da Silva','Nova esperança',
    'Gasparine','Mary Dota','Bela Vista','Vista Alegre'];
    var cidade = "Bauru SP Brasil";

    var enderecoCompleto = arrayEnderecos.map(function(item){
        return item.concat(" ",cidade);
    });

    function Show(){
        console.log(enderecoCompleto);
    }

    var map = L.map('map', {
        center: [-22.32273, -49.078889], 
        zoom: 10, 
        zoomControl: false
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click', function(ev){
        console.log(ev.latlng);
    })

    /*
    L.Routing.control({
        waypoints: [
            L.latLng(57.74, 11.94),
            L.latLng(57.6792, 11.949)
        ]
    }).addTo(map);*/