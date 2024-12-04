export const DOM = {
    formulario: document.getElementById("formulario"),

    nombre_usuario: document.getElementById("NombreUsuario"),
    contrasena: document.getElementById("Contrasena"),
    mostrar_contrasena: document.getElementById("mostrar_contraseña"),

    nombre: document.getElementById("Nombre"),
    apellidos: document.getElementById("Apellidos"),
    telefono: document.getElementById("Telefono"),
    codigo_postal: document.getElementById("CodigoPostal"),
    tipo_documento: document.getElementById("TipoDocumento"),
    dni: document.getElementById("DniNie"),

    particular: document.getElementById("CuentaComoParticular"),
    empresa: document.getElementById("CuentaComoEmpresa"),

    anio_nacimiento: document.getElementById("AnioNacimiento"),

    aficiones: [
        document.getElementById("AficionesMusica"),
        document.getElementById("AficionesDeporte"),
        document.getElementById("AficionesVideojuegos"),
        document.getElementById("AficionesManualidades"),
        document.getElementById("AficionesArtes"),
        document.getElementById("AficionesLectura"),
    ],

    titulo: document.getElementById("PublicacionTitulo"),
    descripcion: document.getElementById("PublicacionDescripcion"),
    contador_titulo: document.getElementById("titulo-count"),
    contador_descripcion: document.getElementById("descripcion-count"),
};
