import { DOM } from './dom.js';
import * as validaciones from './validaciones.js';

DOM.titulo.addEventListener("input", caracteresTitulo);
DOM.descripcion.addEventListener("input", caracteresDescripcion);

DOM.mostrar_contrasena.addEventListener("change", function () {
  if (this.checked) {
    DOM.contrasena.type = "text"; 
  } else {
    DOM.contrasena.type = "password"; 
  }
});

function caracteresTitulo() {
  const tituloLength = DOM.titulo.value.length;
  DOM.contador_titulo.textContent = `${tituloLength} / 15 caracteres`;
}

function caracteresDescripcion() {
  const descripcionLength = DOM.descripcion.value.length;
  DOM.contador_descripcion.textContent = `${descripcionLength} / 120 caracteres`;
}

DOM.formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  const validacionesFormulario = [
    () => validaciones.validarCampo(DOM.nombre_usuario, "El campo NombreUsuario es obligatorio") && validaciones.validarLongitud(DOM.nombre_usuario, 4, 20, "El campo NombreUsuario debe tener entre 4 y 20 caracteres"),
    () => validaciones.validarCampo(DOM.contrasena, "El campo Contraseña es obligatorio") && validaciones.validarContrasenia(DOM.contrasena, "La contraseña debe estar formada por 8 números"),
    () => validaciones.validarCampo(DOM.nombre, "El campo Nombre es obligatorio") && validaciones.validarLongitud(DOM.nombre, 4, 20, "El campo Nombre debe tener entre 4 y 20 caracteres"),
    () => validaciones.validarCampo(DOM.apellidos, "El campo Apellidos es obligatorio") && validaciones.validarLongitud(DOM.apellidos, 4, 20, "El campo Apellidos debe tener entre 4 y 20 caracteres"),
    () => validaciones.validarCampo(DOM.telefono, "El campo Teléfono es obligatorio") && validaciones.validarTelefono(DOM.telefono, "El teléfono debe tener el formato (+34)922123123"),
    () => validaciones.validarCampo(DOM.codigo_postal, "El campo Código Postal es obligatorio") && validaciones.validarCodigoPostal(DOM.codigo_postal, "El Código Postal debe empezar con 38 y tener 5 dígitos"),
    () => validaciones.validarCampo(DOM.tipo_documento, "El campo Tipo de Documento es obligatorio"),
    () => validaciones.validarCampo(DOM.dni, "El campo DNI/NIE es obligatorio") && validaciones.validarDniNie(DOM.tipo_documento, DOM.dni, "El DNI/NIE no es válido"),
    () => validaciones.validarTipoCuenta(DOM.particular, DOM.empresa, "Debes seleccionar el tipo de cuenta"),
    () => validaciones.validarCampo(DOM.anio_nacimiento, "El campo Año de Nacimiento es obligatorio"),
    () => validaciones.validarAficiones(DOM.aficiones, "Debes seleccionar al menos 2 aficiones"),
    () => validaciones.validarCampo(DOM.titulo, "El campo Título es obligatorio") && validaciones.validarLongitud(DOM.titulo, 4, 15, "El campo Título debe tener entre 4 y 15 caracteres"),
    () => validaciones.validarCampo(DOM.descripcion, "El campo Descripción es obligatorio") && validaciones.validarLongitud(DOM.descripcion, 4, 120, "El campo Descripción debe tener entre 4 y 120 caracteres")
  ];

  for (const validacion of validacionesFormulario) {
    if (!validacion()) {
      isValid = false;
    }
  }

  if (isValid) {
    DOM.formulario.submit();
  }
});