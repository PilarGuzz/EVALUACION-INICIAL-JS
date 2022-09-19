

function insert() {
    let dni = prompt("Introduzca DNI: ");
    let filas = document.getElementsByTagName("tr");


    let nombre = prompt("Introduzca nombre: ");
    let apellidos = prompt("Introduzca apellidos: ");

    let miTabla = document.getElementById("tabla");
    let miFila = document.createElement("tr"); 
    let miColNum = document.createElement("td"); 
    let miColDNI = document.createElement("td"); 
    let miColNom = document.createElement("td"); 
    let miColAps = document.createElement("td"); 

    let numero = document.getElementsByTagName("tr").length


    let miNum = document.createTextNode(numero);
    let miDNI = document.createTextNode(dni);
    let miNombre = document.createTextNode(nombre);
    let miAps = document.createTextNode(apellidos);

    miColNum.appendChild(miNum); //Agrego texto a la columna
    miColDNI.appendChild(miDNI); 
    miColNom.appendChild(miNombre); 
    miColAps.appendChild(miAps); 

    miFila.appendChild(miColNum); // Agrego columna a la fila
    miFila.appendChild(miColDNI); 
    miFila.appendChild(miColNom); 
    miFila.appendChild(miColAps); 

    miTabla.appendChild(miFila); //Agrego fila a la tabla

    console.log(document.getElementsByTagName("tr").length)
};


function borrado(){

    let miTabla = document.getElementById("tabla");
    let posicion = prompt("Introduzca posicion: ");
    let nodoABorrar = miTabla.getElementsByTagName("tr")[posicion];
    miTabla.removeChild(nodoABorrar);
}

function modificar() {
    
}