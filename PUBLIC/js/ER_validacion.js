
function ER_validacion_numero_documento() {

    try {

        const ER_numero_documento = /^[0-9]{8,}$/

        const numero_documento = document.querySelector('#numero_documento');
        const FB_documento = document.querySelector('#FB_documento');

        if (ER_numero_documento.test(numero_documento.value)) {

            numero_documento.style.borderColor = 'green'
            FB_documento.innerHTML = '';
            FB_documento.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + numero_documento.value;
        


    } catch (error) {

        FB_documento.innerHTML = error;
        numero_documento.style.borderColor = 'red'
        FB_documento.style.color = 'red';


    }

}
function ER_validacion_nombre() {

    try {

        const ER_nombre = /^[A-Za-z\s]+$/

        const nombre = document.querySelector('#nombre');
        const FB_nombre = document.querySelector('#FB_nombre');

        nombre.value = nombre.value.toUpperCase()

        if (ER_nombre.test(nombre.value)) {

            nombre.style.borderColor = 'green'

            FB_nombre.innerHTML = '';
            FB_nombre.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + nombre.value;

    } catch (error) {

        FB_nombre.innerHTML = error;
        nombre.style.borderColor = 'red'

        FB_nombre.style.color = 'red'

    }

}

function ER_validacion_apellido() {

    try {

        const ER_apellido = /^[A-Za-z\s]+$/

        const apellido = document.querySelector('#apellido');
        const FB_apellido = document.querySelector('#FB_apellido');

        apellido.value = apellido.value.toUpperCase()

        if (ER_apellido.test(apellido.value)) {

            apellido.style.borderColor = 'green'

            FB_apellido.innerHTML = '';
            FB_apellido.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + apellido.value;

    } catch (error) {

        FB_apellido.innerHTML = error;
        apellido.style.borderColor = 'red'
        FB_apellido.style.color = 'red'

    }

}

function ER_validacion_edad() {

    try {

        const ER_edad = /^[0-9]{2,3}$/

        numero_documento.style.borderColor = 'green'

        const edad = document.querySelector('#edad');
        const FB_edad = document.querySelector('#FB_edad');

        edad.value = edad.value.toUpperCase()

        if (ER_edad.test(edad.value)) {

            edad.style.borderColor = 'green'
            FB_edad.innerHTML = '';
            FB_edad.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + edad.value;;

    } catch (error) {

        FB_edad.innerHTML = error;
        edad.style.borderColor = 'red'
        FB_edad.style.color = 'red'

    }

}

function ER_validacion_correo() {

    try {

        const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

        const correo = document.querySelector('#correo');
        const FB_correo = document.querySelector('#FB_correo');

        if (ER_correo.test(correo.value)) {

            correo.style.borderColor = 'green'

            FB_correo.innerHTML = '';
            FB_correo.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + correo.value;

    } catch (error) {

        FB_correo.innerHTML = error;
        correo.style.borderColor = 'red'
        FB_correo.style.color = 'red'

    }

}

function ER_validacion_telefono() {

    try {

        const ER_telefono = /^[0-9]{10}$/

        const telefono = document.querySelector('#telefono');
        const FB_telefono = document.querySelector('#FB_telefono');

        if (ER_telefono.test(telefono.value)) {

            telefono.style.borderColor = 'green'

            FB_telefono.innerHTML = '';
            FB_telefono.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + telefono.value;;

    } catch (error) {

        FB_telefono.innerHTML = error;
        telefono.style.borderColor = 'red'
        FB_telefono.style.color = 'red'

    }

}

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', (e)=> {

    e.preventDefault();

    ER_validacion_numero_documento();
    ER_validacion_nombre();
    ER_validacion_apellido();
    ER_validacion_edad();
    ER_validacion_correo();
    ER_validacion_telefono();


})


// module.exports = ER_validacion;