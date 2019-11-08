window.onload = function(){

    
    
    let btm = document.getElementById("btnGuardar");

    if(btm){
        btm.addEventListener("click", guardar);
    }else{
        alert('Error');
    }
}

function guardar(){

    let datos = new Array();

    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("apellido").value;
    let ciudad = document.getElementById("ciudad").value;
    let escuela = document.getElementById("escuela").value;
    let edad = document.getElementById("edad").value;

    datos.push({
        "Nombre": nombre,
        "Apellido": apellido,
        "Ciudad": ciudad,
        "Escuela": escuela,
        "Edad": edad
    });
    
    document.getElementById("name").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("escuela").value = "";
    document.getElementById("edad").value = "";
    console.log(datos);

    mostrarDatos(datos);

}


function mostrarDatos(datos){

    let tabla = document.getElementById("tabla");
    console.log(datos.length);

    let i =0;
        let fila = document.createElement("tr");

        let columna = document.createElement("td");
        let columna2 = document.createElement("td");
        let columna3 = document.createElement("td");
        let columna4 = document.createElement("td");
        let columna5 = document.createElement("td");

        
        columna.appendChild(document.createTextNode(datos[i].Nombre));
        columna2.appendChild(document.createTextNode(datos[i].Apellido));
        columna3.appendChild(document.createTextNode(datos[i].Ciudad));
        columna4.appendChild(document.createTextNode(datos[i].Escuela));
        columna5.appendChild(document.createTextNode(datos[i].Edad));

        fila.appendChild(columna);
        fila.appendChild(columna2);
        fila.appendChild(columna3);
        fila.appendChild(columna4);
        fila.appendChild(columna5);
        tabla.appendChild(fila);
    
    
    document.body.appendChild(tabla);
}