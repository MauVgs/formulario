window.onload = function(){

    let datos = new this.Array();
    
    let btm = document.getElementById("btnGuardar");

    if(btm){
        btm.addEventListener("click", guardar);
    }else{
        alert('Error');
    }

    function guardar(){

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
        
        
        mostrarDatos();

    }

    function mostrarDatos(){

        var fila;
        var columna;
        for(var i=0;i<datos.length;i++){
    
            var fila=document.createElement("tr");
    
            var columna=document.createElement("td");
    
            columna.appendChild(document.createTextNode(datos[i].Nombre));
            columna.appendChild(document.createTextNode(datos[i].Apellido));
            columna.appendChild(document.createTextNode(datos[i].Ciudad));
            columna.appendChild(document.createTextNode(datos[i].Escuela));
            columna.appendChild(document.createTextNode(datos[i].Edad));
    
            fila.appendChild(columna)
    
        }
    
        document.body.table.appendChild(fila);
            
        }

}