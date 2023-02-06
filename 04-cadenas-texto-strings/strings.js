let miNombre = "Paulo Ricardo";
let miApellido = " Ramalho e Silva";

let estudiante = miNombre + miApellido;
console.log(estudiante);


let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudianteLetras = estudiante.length;
console.log(estudianteLetras);

let nombrePrimer = estudiante.charAt(0);
console.log(nombrePrimer);

let apellidoUlt = miApellido.charAt(miApellido.length - 1);
console.log(apellidoUlt);

let miApellidoSin = "Ramalho e Silva";

let existeNombre = miApellido.indexOf("Paulo");
console.log(existeNombre);