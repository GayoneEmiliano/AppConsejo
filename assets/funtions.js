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