function validar_contrasena(contrasena) {

    if (contrasena.length >= 8) {
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;

        for (var i = 0; i < contrasena.length; i++) {
            if (contrasena.charCodeAt(i) >= 65 && contrasena.charCodeAt(i) <= 90) {
                mayuscula = true;
            } else if (contrasena.charCodeAt(i) >= 97 && contrasena.charCodeAt(i) <= 122) {
                minuscula = true;
            } else if (contrasena.charCodeAt(i) >= 48 && contrasena.charCodeAt(i) <= 57) {
                numero = true;
            } else {
                caracter_raro = true;
            }
        }
        if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
            return true;
        }
    }
    return false;
}

function validarRegistro() {
    debugger
    // otra forma de obtener los valores de un input de un formulario es con 
    // document.forms, le indicamos el nombre de nuestro formulario y luego el nombre del input
    // document.forms["formName"]["inputName"]
    var nombreC = document.forms["registro"]["nombresCompletos"].value
    var tipoDocumento = document.forms["registro"]["tipoDocumento"].value
        // alert(tipoDocumento)
    var numDocumento = document.forms["registro"]["numeroDocumento"].value
    var genero = document.forms["registro"]["genero"].value
        // alert(genero)
    var fechaNacimiento = document.forms["registro"]["fechaNacimiento"].value
    var telefonoCelular = document.forms["registro"]["telefonoCelular"].value
    var telefonoFijo = document.forms["registro"]["telefonoFijo"].value
    var correo = document.forms["registro"]["email"].value
    var contrasena = document.forms["registro"]["contrasena"].value
    var contrasenaR = document.forms["registro"]["contrasenaR"].value

    var isCheck = document.forms["registro"]["chekTerCon"].checked
        //   console.log(isCheck)





    /**
     * EL LOCAL STORAGE es un almacenamiento de datos DENTRO DEL NAVEGADOR DEL USUARIO
     * En este se almacenan generalmente tokens de identificación o de inicio de sesión
     * EN este ejercicio guardaremos los datos del formulario
     * 
     * El localStorage funciona con un sistema clave:valor
     * con la función getItem(key) inficamos la clave y nos retornará el valor
     * si no existe la clave correspondiente, nos devolverá "null"
     * 
     * con setItem(key, value) almacenamos un nuevo valor para la clave respectiva
     */

    if (localStorage.getItem(correo) == null) {
        // alert("Su cuenta no existe")
        /**
         * Para almacenar toda la información del formulario podemos crear un objeto con los atributos correspondientes
         */
        var usuario = {
            'nombre': nombreC,
            'tipoDocumento': tipoDocumento,
            'numDocumento': numDocumento,
            'genero': genero,
            'fechaNacimiento': fechaNacimiento,
            'telefonoCelular': telefonoCelular,
            'telefonoFijo': telefonoFijo,
            'correo': correo,
            'contrasena': contrasena

        }


        // Aqui van las VALIDACIONES
        var contr = validar_contrasena(contrasena)
        if (contrasena != contrasenaR || contr == false || isCheck == false) {

            return false;
            alert("Inconsistencia en el ingreso de los datos")
        } else {

            /**
             * Luego "convertir" ese objeto en cadena de texto para que se pueda almacenar
             */
            var localUser = JSON.stringify(usuario)
                /**
                 * Y luego guardamos los datos en el localStorage
                 */
            localStorage.setItem(correo, localUser)

            return true;

        }



    } else {

        return false
        alert("Este usuario ya se encuentra en nuestro sistema")

    }


}