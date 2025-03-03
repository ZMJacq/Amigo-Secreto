// Array de los amigos
let listaAmigos = [];

function agregarAmigo() {
    let agregarAmigo = document.getElementById("amigo");
    let amigos = agregarAmigo.value;

    // También se puede colocar un =="" ó un == False para negar la funcion, en este caso, si no temgo.
    if (!amigos) {
        alert("Ingresa el nombre de un amigo");
        return;
    }
    listaAmigos.push(amigos);
    agregarAmigo.value = "";
    mostrarAmigo()
};

function mostrarAmigo(){
    let amigosEnLista = document.getElementById("listaAmigos");
    // Limpia la lista de amigos.
    amigosEnLista.innerHTML = "";
    
    for ( let i = 0; i < listaAmigos.length; i++ ) {
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        amigosEnLista.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert("Ingresa amigos para sortear");
    return;
    }

    let amigoEnSorteo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let amigoSecreto = document.createElement("resultad");
    amigoSecreto.innerHTML = `El amigo secreto es: ${amigoSecreto}`
    }
    