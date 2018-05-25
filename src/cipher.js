window.cipher = {
    encode: encode,
    decode: decode
}

function encode(offset, mensaje_encode) {
    let vacio = "";
    for (let i = 0; i < mensaje_encode.length; i++) {
        let posicion = mensaje_encode.charCodeAt(i);
        if ((posicion > 64 && posicion < 91) || (posicion > 96 && posicion < 123)) {
            vacio += String.fromCharCode(posicion + offset);
        }
    document.getElementById("txt_resultado").innerHTML=vacio;

    }

}

function decode() {
    console.log("hola, soy DECODE");


}
//cipher.encode(2,'ALIDA');