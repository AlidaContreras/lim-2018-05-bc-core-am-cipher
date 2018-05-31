let offset, string, resultado, btnEncode, btnDecode;
//se tiene que declarar la variable que llama a cada ID de los textbox
//dentro de cada evento porque si no esta dentro cuando se haga clic no va a poder encontrarlo
//Coneccion de los botones
//ENCODE
btnEncode = document.getElementById("buttonEncode");
btnEncode.addEventListener("click", () => {
    string = document.getElementById("txt_ingresado").value;
    offset = parseInt(document.getElementById("txt_offset").value);
    resultado = cipher.encode(offset, string);
    document.getElementById("txt_resultado").innerHTML= resultado;
})

//DECODE
btnDecode = document.getElementById("buttonDecode")
btnDecode.addEventListener("click", function () {
    string = document.getElementById("txt_ingresado").value;
    offset = parseInt(document.getElementById("txt_offset").value);
    resultado = cipher.decode(offset, string);
    document.getElementById("txt_resultado").innerHTML=resultado;
});








