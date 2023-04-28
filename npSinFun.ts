import * as rls from "readline-sync";

const dim : number = rls.questionInt ("ingrese la dimension del array: ");
let arr : number [] = new Array (dim);

for (let i:number = 0 ; i < arr.length ; i++) {
    arr[i] = rls.questionInt(`ingrese numero en la posicion ${i + 1}: `);
}

let pos : number = 0;
let neg : number = 0;
let cero : number = 0;

for (let i : number = 0 ; i < arr.length ; i++) {
    if (arr[i] > 0) {
        pos++;
    } else {
        if (arr[i] < 0) {
            neg++;
    } else {
        cero++
    }
  }
}

console.log ("hay" ,pos, "numeros positivos");
console.log ("hay" ,neg, "numeros negativos");
console.log ("hay" ,cero, "ceros");