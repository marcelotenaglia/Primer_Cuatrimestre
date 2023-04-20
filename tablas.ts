//Diseñar un algoritmo que muestre por pantalla la tabla de
//multiplicación del número ingresado por el usuario
//Para definir hasta qué número desea que muestre la tabla de
//multiplicación, el usuario también deberá ingresar dicho valor

import * as rls from "readline-sync";

let n1: number = rls.questionInt ("ingrese un numero: ");
let n2: number = rls.questionInt ("ingrese hasta que numero: ");
let result: string = "";

for (let i:number = 1 ; i <= n2 ; i++) {
    //if (i <= n2) {
       result = `${n1 * i}`;
    //   }
       console.log(n1 , "x" , i , "=" , result) ;
}

