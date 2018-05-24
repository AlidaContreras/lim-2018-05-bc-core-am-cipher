let offset,mensaje_encode,mensaje_decode,btnEncode,btnDecode; 
//Coneccion de los botones
    //ENCODE
    btnEncode=document.getElementById("buttonEncode");
    btnEncode.addEventListener("click",function(){
        cipher.encode();
    })
    //DECODE
    btnDecode=document.getElementById("buttonDecode")
    btnDecode.addEventListener("click",function(){
        cipher.decode();
    });
//coneccion de los campos de texto
    offset=document.getElementById("txt_offset").value;
    mensaje_encode=document.getElementById("txt_encode").value;
    mensaje_decode=document.getElementById("txt_encode").value;
    
    


    

    
