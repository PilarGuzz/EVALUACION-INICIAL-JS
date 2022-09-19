function inicializar(){

    let lista = [];
    let nombre;
    let listaLetra = []

    for (let index = 0; index < 5; index++) {
        nombre = (prompt("Introduce nombre")).toUpperCase();

        while(lista.includes(nombre)){
            
            nombre = (prompt("Nombre repetido, introduza otro")).toUpperCase();
        }
        let letra = nombre.substring(0, 1);
        listaLetra.push(letra);
        lista.push(nombre);
    }
    console.log(lista);
    console.log(listaLetra.sort());
}
