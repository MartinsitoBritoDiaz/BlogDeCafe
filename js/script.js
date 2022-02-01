const entradaNombre = document.querySelector('#nombre');

// entradaNombre.addEventListener('input', function(e){
//     console.log(e.target.value);
// });

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('#formulario');

nombre.addEventListener('input', leerDatos);
email.addEventListener('input', leerDatos);
mensaje.addEventListener('input', leerDatos);

function leerDatos(e){
    
   datos[e.target.id] = e.target.value;
    
//     console.log(datos);
 }


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Validar Formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return;
    }
    
    mostrarAlerta('Enviado correctamente');
});


function mostrarAlerta(mensaje, paso = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(paso){
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// function mostrarError(mensaje){
//     const error = document.createElement('P');

//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

//     setTimeout(() => {
//         error.remove();
//     }, 5000);

// }

// function mostrarMensajeCorrecto(mensaje){
//     const correcto = document.createElement('P');

//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto');

//     formulario.appendChild(correcto);

//     setTimeout(() => {
//         correcto.remove();
//     }, 5000);
// }
