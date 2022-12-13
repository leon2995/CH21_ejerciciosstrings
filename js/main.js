let nombre = "Jorge Alexis";
nombre = nombre.toUpperCase();
let letra="";
let contFinal = 0;

for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp = 1;
    for (let contador = index+1; contador < nombre.length; contador++) {
        if (nombre.charAt(index) == nombre.charAt(contador)) 
            contTemp++;
    }// for cont
    if (contTemp > contFinal) {
        contFinal = contTemp;
        letra = nombre.charAt(index);
    } // cont temp > contfinal
}// for index
console.log(letra, contFinal);

function CharAtCadena(cadena) {
    cadena = cadena.sort;
    /* for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < cadena.length; j++) {
            if ( cadena[i] == cadena[j+1] ) {
                return cadena[i];
            }
        }        
    } */
}

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
   /*  console.log(exampleFormControlTextarea1.value);
    console.log("[" + exampleFormControlTextarea1.value.replaceAll(" "," ")+"]"); */
    
    if (exampleFormControlTextarea1.value.trim().length < 20){
        alertError.innerHTML = "El mensaje debe de contener 20 caracteres o más";
        alertError.style.display= "block";
        exampleFormControlTextarea1.focus(); 
        exampleFormControlTextarea1.select();
    }//if

    if (exampleFormControlInput1.value.match(emailRegex)== null) {
        alertError.style.display= "block";
        alertError.innerHTML +="<br/>El correo electrónico no es valido.";
    }//

    let RFCRegex= / ^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$ /;
    if (exampleFormControlInput2.value.match(RFCRegex)== null) {
        alertError.style.display= "block";
        alertError.innerHTML +="<br/>El RFC no es valido.";
    }//
});