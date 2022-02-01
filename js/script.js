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

nombre.addEventListener('input', leerDatos);
email.addEventListener('input', leerDatos);
mensaje.addEventListener('input', leerDatos);

function leerDatos(e){
    
    datos[e.target.id] = e.target.value;
    
    console.log(datos);
}
