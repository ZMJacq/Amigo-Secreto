// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let agregarAmigo = document.getElementById("amigo");
    let Amigos = agregarAmigo.value;

    // También se puede colocar un =="" ó un == False
    if (!Amigos) {
        alert("Ingresa el nombre de un amigo");
        return;
    }
    listaAmigos.push(Amigos);
    agregarAmigo.value = "";
    
};