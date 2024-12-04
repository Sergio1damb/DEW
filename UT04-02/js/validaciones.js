export function mostrarError(campo, mensajePersonalizado) {
    const mensajePorDefecto = campo.validationMessage;

    const elementoError = document.getElementById(`error-${campo.name}`);
    elementoError.textContent = mensajePersonalizado || mensajePorDefecto;
    campo.classList.add("error");

    const listaMensajes = document.getElementById('mensajes-validacion');
    const mensajeElemento = document.createElement('li');
    mensajeElemento.textContent = `Campo "${campo.name}": ${mensajePorDefecto}`;

    const mensajesExistentes = Array.from(listaMensajes.children).map(li => li.textContent);
    if (!mensajesExistentes.some(msg => msg.includes(`Campo "${campo.name}":`))) {
        listaMensajes.appendChild(mensajeElemento);
    }
}

export function limpiarError(campo) {
    const elementoError = document.getElementById(`error-${campo.name}`);
    elementoError.textContent = '';
    campo.classList.remove("error");

    const listaMensajes = document.getElementById('mensajes-validacion');
    const mensajes = Array.from(listaMensajes.children);

    const mensajeElemento = mensajes.find(li => li.textContent.includes(`Campo "${campo.name}":`));
    if (mensajeElemento) {
        listaMensajes.removeChild(mensajeElemento);
    }
}

export function validarCampo(campo, mensaje) {
    limpiarError(campo);
    if (!campo.value.trim()) {
        mostrarError(campo, mensaje);
        campo.focus();
        return false;
    }
    return true;
}

export function validarLongitud(campo, min, max, mensaje) {
    limpiarError(campo);
    if (campo.value.length < min || campo.value.length > max) {
        mostrarError(campo, mensaje);
        campo.focus();
        return false;
    }
    return true;
}

export function validarContrasenia(campo, mensaje) {
    limpiarError(campo);
    const patron = /^\d{8}$/;
    if (!patron.test(campo.value)) {
        mostrarError(campo, mensaje);
        campo.focus();
        return false;
    }
    return true;
}

export function validarTelefono(campo, mensaje) {
    limpiarError(campo);
    const patron = /^\(\+34\)\d{9}$/;
    if (!patron.test(campo.value)) {
        mostrarError(campo, mensaje);
        campo.focus();
        return false;
    }
    return true;
}

export function validarCodigoPostal(campo, mensaje) {
    limpiarError(campo);
    const patron = /^[38]\d{4}$/;
    if (!patron.test(campo.value)) {
        mostrarError(campo, mensaje);
        campo.focus();
        return false;
    }
    return true;
}

export function validarDniNie(tipoDocumento, dni, mensaje) {
    limpiarError(dni);
    let patron, letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (tipoDocumento.value === "dni") {
        patron = /^[0-9]{8}[A-Z]$/;
        if (!patron.test(dni.value)) {
            mostrarError(dni, mensaje);
            dni.focus();
            return false;
        }
        let numeros = parseInt(dni.value.slice(0, 8), 10);
        let letra = dni.value.slice(-1);
        if (letras[numeros % 23] !== letra) {
            mostrarError(dni, "La letra del DNI es incorrecta.");
            dni.focus();
            return false;
        }
    } else if (tipoDocumento.value === "nie") {
        patron = /^[XYZ][0-9]{7}[A-Z]$/;
        if (!patron.test(dni.value)) {
            mostrarError(dni, mensaje);
            dni.focus();
            return false;
        }
        let prefijo = dni.value.charAt(0);
        let numeros = dni.value.slice(1, -1);
        if (prefijo === "X") numeros = "0" + numeros;
        else if (prefijo === "Y") numeros = "1" + numeros;
        else if (prefijo === "Z") numeros = "2" + numeros;

        let letra = dni.value.slice(-1);
        if (letras[parseInt(numeros, 10) % 23] !== letra) {
            mostrarError(dni, "La letra del NIE es incorrecta.");
            dni.focus();
            return false;
        }
    }
    return true;
}

export function validarTipoCuenta(particular, empresa, mensaje) {
    limpiarError(particular);
    if (!particular.checked && !empresa.checked) {
        mostrarError(particular, mensaje);
        return false;
    }
    return true;
}

export function obtenerAficionesSeleccionadas(aficiones) {
    const codigosAficiones = {
        musica: "MU",
        deporte: "DE",
        videojuegos: "VI",
        manualidades: "MA",
        artes: "AR",
        lectura: "LE"
    };

    const codigosSeleccionados = aficiones
        .filter(aficion => aficion.checked)
        .map(aficion => codigosAficiones[aficion.value]);

    return codigosSeleccionados.join(", ");
}

export function validarAficiones(aficiones, mensaje) {
    limpiarError(aficiones[0]);
    const codigosSeleccionados = obtenerAficionesSeleccionadas(aficiones);

    if (codigosSeleccionados.split(",").length < 2) {
        mostrarError(aficiones[0], mensaje);
        return false;
    }

    return true;
}