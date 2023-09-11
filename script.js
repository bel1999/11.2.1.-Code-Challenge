document.addEventListener("DOMContentLoaded", () => {

    let boton = document.getElementById("boton");

    boton.addEventListener("click", () => {

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let fecha = document.getElementById("fecha").value;
        let texto = document.getElementById("texto");

        fetch("https://jsonplaceholder.typicode.com/users", {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: "POST",
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                fecha: fecha
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            texto.innerHTML = `
                <h5 class="mt-5">Se guardó exitosamente a la persona ${data.nombre} ${data.apellido} nacida en ${data.fecha}</h5>`;
        })

    });
    
});

