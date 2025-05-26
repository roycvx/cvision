
console.log("Lógica de Elección de Provincias")

let datosProvincias = null // Para guardar el json, de la respuesta de la petición

fetch('/static/applicants/js/provincias.json') // Realizamos la peticion 
    .then(response => response.json())
    .then(response => {

        datosProvincias = response
        mostrarProvincias() // Muestra las opciones

    })
    .catch(error => console.log("Hubo un error!:", error))



function mostrarProvincias() { // Mostrar Provincias

    let selectProvincia = document.getElementById("provincias")

    datosProvincias.provincia.forEach((provincia, index) => {

        console.log(provincia.nombre)
        selectProvincia.insertAdjacentHTML("beforeend", `<option name="${index}" id="" value="${provincia.nombre}">${provincia.nombre}</option>`)

    })

    selectProvincia.addEventListener('change', () => {

        let selectDistritos = document.getElementById("distritos")

        let provinciaSeleccionada = selectProvincia.value
        let posicion = datosProvincias.provincia.findIndex(p => p.nombre === provinciaSeleccionada)

        document.getElementById("distritos").innerHTML = ""
        selectDistritos.insertAdjacentHTML("beforeend", `<option>Seleccione su distrito</option>`)

        mostrarDistritosPorProvincias(posicion)

    })
}

function mostrarDistritosPorProvincias(provincia) {

    let selectDistritos = document.getElementById("distritos")

    console.log("PROVINCIA", provincia)
    console.log("DISTRITOS")


    datosProvincias.provincia[provincia].distrito.forEach((distrito, index) => {

        selectDistritos.insertAdjacentHTML("beforeend", `<option name="" id="" value="${index}">${distrito.nombre} </option>`)
        console.log(distrito.nombre)

    });

    selectDistritos.addEventListener("change", () => {

        let distrito = parseInt(document.getElementById("distritos").value)

        let selectCorregimientos = document.getElementById("corregimientos")

        selectCorregimientos.innerHTML = ""
        selectCorregimientos.insertAdjacentHTML("beforeend", `<option>Seleccione su corregimiento</option>`)


        mostrarCorregimientosPorDistritos(provincia, distrito)

    })

}

function mostrarCorregimientosPorDistritos(provincia, distrito) {


    let selectCorregimientos = document.getElementById("corregimientos")

    datosProvincias.provincia[provincia].distrito[distrito].corregimientos.forEach((corregimiento) => {

        selectCorregimientos.insertAdjacentHTML("beforeend", `<option name="" id="" value="">${corregimiento} </option>`)

        console.log(corregimiento)
    })

}