window.cipher = {
    encode: (offset, string) => {
        let resultado = "";//resultado es la variable donde se va guardar lo que queremos y definimos mas abajo
        for (let i = 0; i < string.length; i++) {//este for recorre el string 
            //con la siguiente linea obtiene el numero de posicion de cada letra  del string y lo almacena en la variable posicion
            let posicion = string.charCodeAt(i);//con al charcodeat obtengo el numero de Posicion en el Ascci
            //aqui ya tengo el numero de Ascci; y con las condicionales veo que caso es MAYUSCULA, minuscula o espacios
            if (posicion > 64 && posicion <= 90) {
                resultado += String.fromCharCode(((posicion - 65 + Math.abs(offset)) % 26) + 65);//esta es la formula para que recorra de nuevo el abc
            }
            else if (posicion > 96 && posicion <= 122) {
                resultado += String.fromCharCode(((posicion - 97 + Math.abs(offset)) % 26) + 97);
            }
            else if (posicion == 32) {
                resultado += " ";
            }
        }//AQUI TERMINA EL FOR
        return (resultado)
    },
    //falta corregir 
    decode: (offset, string) => {
        let resultado = "";
        for (let i = 0; i < string.length; i++) {//este for recorre el string 
            //con la siguiente linea obtiene el numero de posicion de cada letra  del string y lo almacena en la variable posicion
            let posicion = string.charCodeAt(i);//con al charcodeat obtengo el numero de Posicion en el Ascci
            //aqui ya tengo el numero de Ascci; y con las condicionales veo que caso es MAYUSCULA, minuscula o espacios
            if (posicion > 64 && posicion <= 90) {
                resultado += String.fromCharCode((posicion - 90 - offset)%26 + 90);
                // HIJKLMNOPQRSTUVWXYZABCDEFG
            }
            else if (posicion >= 97 && posicion <= 122) {
                resultado += String.fromCharCode(((posicion - 97 - Math.abs(offset)) % 26) + 97);
                //resultado += String.fromCharCode(((posicion - 97 -(offset%26) +40) % 26) + 97);
                //abcdefghijklmnopqrstuvwxyz
            }
            else if (posicion == 32) {
                resultado += " ";
            }
        }//AQUI TERMINA EL FOR
        return (resultado)
    }
}
