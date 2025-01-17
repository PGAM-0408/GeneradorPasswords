// Elementos del DOM (HTML) que vamos a usar
let cantidad = document.getElementById('cantidad'); // El usuario ingresa el número de caracteres
let boton = document.getElementById('generar'); // Botón para generar una contraseña
let contrasena = document.getElementById('contrasena'); // esto enseñara la contraseña generada
let seguridad = document.getElementById('seguridad'); // muestra si la contraseña es segura o no

// Los caracteres para la contraseña
let cadenacaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?';

// Función para evaluar la seguridad de la contraseña
function evaluar() {
    // Esto evalua si es segura
    let expresionSegura = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*!?])[A-Za-z\d@#$%&*!?]{8,}$/;
    
    // Si la contraseña cumple con la condiciones segura si no no lo es
    if (contrasena.value.match(expresionSegura)) {
        seguridad.innerHTML = 'Segura'; // Muestra que es segura
    } else {
        seguridad.innerHTML = 'No segura'; // Muestra que no es segura
    }

}

// Función para generar la contraseña
function generar() {
    seguridad.innerHTML = ""; // Limpia el mensaje 

    // Convierte el valor de 'cantidad' a número
    let numeroDigitado = parseInt(cantidad.value);

    // Verifica si la cantidad es menor a 8 si si es asi muestra un mensaje 
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor a 8");
        return; //Comparte el valor
    }

    let password = ''; // Guarda la contraseña generada

    // Bucle para generar la contraseña con caracteres aleatorios 
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenacaracteres[Math.floor(Math.random() * cadenacaracteres.length)];
        password += caracterAleatorio; // Agrega el carácter aleatorio a la contraseña
    }

    // Muestra la contraseña generada en el input
    contrasena.value = password;

    // Llama a la función para evaluar si la contraseña es segura
    evaluar();
}

// Función para limpiar 
function limpiar() {
    contrasena.value = ""; // Limpia el campo de la contraseña
    cantidad.value = ""; // Limpia el campo de la cantidad de caracteres
    seguridad.innerHTML = ""; // Limpia el mensaje de seguridad
}
