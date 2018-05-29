window.cipher = {
    encode: (offset, string) => {
        let resultado = "";//resultado es la variable donde se va guardar lo que queremos y definimos mas abajo
        for (let i = 0; i < mensaje_encode.length; i++) {//este for recorre el string 
            //con la siguiente linea obtiene el numero de posicion de cada letra  del string y lo almacena en la variable posicion
            let posicion = mensaje_encode.charCodeAt(i);//con al charcodeat obtengo el numero de Posicion en el Ascci
            //aqui ya tengo el numero de Ascci; y con las condicionales veo que caso es MAYUSCULA, minuscula o espacios
            if (posicion > 64 && posicion <= 90) {
                resultado += String.fromCharCode(((posicion - 65 + offset) % 26) + 65);
            }
            else if (posicion > 96 && posicion < 123) {
                resultado += String.fromCharCode(posicion + offset);
            }
            else if (posicion == 32) {
                resultado += " ";
            }

            document.getElementById("txt_resultado").innerHTML = resultado;

        }

    }
    //decode:()

}




function decode() {
    console.log("hola, soy DECODE");


}
//cipher.encode(2,'ALIDA');