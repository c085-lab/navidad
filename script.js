const contenedores = document.querySelectorAll(".contenedor");

contenedores.forEach(function(contenedor) {

    const titulo = contenedor.querySelector("h3");
    const texto = contenedor.querySelector("p");

    titulo.addEventListener("click", function() {
        texto.classList.toggle("oculto");
    });

});
const personajes = document.querySelectorAll("#Personajes .contenedor");

personajes.forEach(function(personaje) {

    const boton = personaje.querySelector(".boton");
    const texto = personaje.querySelector("p");

    boton.addEventListener("click", function() {
        texto.classList.toggle("oculto");
    });

});
const entrada = document.querySelector("#nuevoRegalo");
const botonAgregar = document.querySelector("#agregarRegalo");
const lista = document.querySelector("#listaRegalos");

botonAgregar.addEventListener("click", function() {

    const regalo = entrada.value.trim();

    if (regalo !== "") {

        const nuevoElemento = document.createElement("li");

        nuevoElemento.textContent = regalo;

        lista.appendChild(nuevoElemento);

        entrada.value = "";

    } else {
        alert("Escribe un regalo primero");
    }

});
const botonesComida = document.querySelectorAll(".agregarComida");
const carrito = document.querySelector("#carrito");
const total = document.querySelector("#total");

let suma = 0;

botonesComida.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        const elemento = document.createElement("li");

        elemento.textContent = nombre + " - Bs. " + precio;

        carrito.appendChild(elemento);

        suma = suma + precio;

        total.textContent = "Total: Bs. " + suma;

    });

});