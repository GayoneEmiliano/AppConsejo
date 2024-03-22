const cambiaJunta = (id) =>{
    console.log(id);
    let myVar = ''
    if(id == '1'){
        myVar += `<div class="m-4 p-2 " style="border: 1px solid #8cc434; border-radius: 15px;">
            <div class="imgContent mb-3" style="height: 150px;">
                <img src="../assets/img/juntaRoca.jpg" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
            <div id="infoJunta">
                <table class="table" >
                    <tbody>
                    <tr>
                        <th scope="row" class="text-light table-dark">Direccion</th>
                        <td class="text-light table-dark">Isidro Lobos n 1374</td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-light table-dark">Telefono</th>
                        <td class="text-light table-dark">2984-665650</td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-light table-dark">Email</th>
                        <td class="text-light table-dark">j.e.p.d.gralroca@hotmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>`
    }else if(id== '2'){
        myVar += `<div class="m-4 p-2 " style="border: 1px solid #8cc434; border-radius: 15px;">
            <div class="imgContent mb-3" style="height: 150px;">
                <img src="../assets/img/juntaViedma.jpeg" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
            <div id="infoJunta" style="overflow-x:auto;">
                <table class="table" >
                    <tbody>
                    <tr>
                        <th scope="row" class="text-light table-dark">Direccion</th>
                        <td class="text-light table-dark">Gallardo N 165</td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-light table-dark">Telefono</th>
                        <td class="text-light table-dark">2920-421833</td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-light table-dark">Email</th>
                        <td class="text-light table-dark">consejodiscapacidadrionegro@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>`
    }else if(id=='3'){
        myVar += `<div class="m-4 p-2 " style="border: 1px solid #8cc434; border-radius: 15px;">
            <div class="imgContent mb-3" style="height: 150px;">
                <img src="../assets/img/juntaCipo.jpeg" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
            <div id="infoJunta"  style="overflow-x:auto;">
                <table class="table" >
                    <tbody>
                    <tr>
                        <th scope="row" class="text-light table-dark">Direccion</th>
                        <td class="text-light table-dark">Felix salomano y Lago Nahuel Huapi</td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-light table-dark">Telefono</th>
                        <td class="text-light table-dark">299-4287323</td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-light table-dark">Email</th>
                        <td class="text-light table-dark">juntadiscapacidad.cipo@yahoo.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>`

    }

    document.getElementById('contentJuntaInfo').innerHTML = myVar

}

async function iniciarMap(){
    const coordJuntas = [
        ['Viedma', -40.8109785, -62.9886602, 1],
        ['El Bolson', -41.9607526, -71.5376008, 2],
        ['Bariloche', -41.1470595, -71.2989745, 3],
        ['Los Menucos', -40.8429138, -68.0852114, 4],
        ['Valcheta', -40.675814, -66.170154, 5],
        ['Sierra Grande', -41.6068469, -65.3558932, 6],
        ['Luis Beltran', -39.3088163, -65.7611452, 7],
        ['Allen', -38.9790878, -67.8258805, 8],
        ['Cipolleti', -38.9357152, -67.9683139, 9],
        ['Gral. Roca', -39.030553, -67.5843182, 10],
        ['Rio Colorado', -38.9930665, -64.0904999, 11],
        ['Gral Conesa', -40.1080658, -64.4588293, 12],
        ['San Antonio Oeste', -40.7308919, -64.9440177, 13],
        ['Villa Regina', -39.1021068, -67.0846562, 14],
    ]

    var coordIni = {lat:-39.0204977 ,lng: -67.5974414};
    var map = new google.maps.Map(document.getElementById('contentMap'),{
      zoom: 10,
      center: coordIni
    });

    // var marker = new google.maps.Marker({
    //   position: coordIni,
    //   map: map
    // });

    
    var infowindow = new google.maps.InfoWindow();

    var marker
    
    for (i = 0; i < coordJuntas.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coordJuntas[i][1], coordJuntas[i][2]),
        map: map
      });
      
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(coordJuntas[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));

    }
}


const seeModalJuntaIti = () =>{
    $('#modalseeJuntaItinerante').modal("show")
}