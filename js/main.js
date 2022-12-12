let cadena = "abraham"
let indices = [];
for(let i = 0; i < cadena.length; i++) {
	if (cadena[i].charAt() === "a") indices.push(i);
}
console.log(indices);
//primer ejercicio

let cadena1 = "Laura aline";
let cadena2 = "";

for (let i = cadena1.length - 1; i >= 0; i--) {
     cadena2 += cadena1[i];
}
console.log(cadena2);
//segundo ejercicio