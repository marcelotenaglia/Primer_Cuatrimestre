import * as rls from "readline-sync";

let num1:number = 1;
let numMax:number = 0;

while (num1 != 0) {
    num1 = rls.questionInt ("ingrese un numero: ");
    if (num1 >= numMax) {
        numMax = num1
    }
}

console.log("el numero maximo es: " , numMax);

  



