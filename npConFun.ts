// Almacene en un arreglo de dimensión N números (la
//cantidad es ingresada por el usuario)
// Muestre cuántos números son positivos, cuántos son
//negativos y cuántos ceros hay

import * as rls from "readline-sync";

let N : number = rls.questionInt("ingrese la dimension del arreglo: ");
let arr : number [] = new Array (N);

function arrNum (arr1:number[]) : void {
    for (let i:number = 0 ; i < arr1.length ; i++) {
        arr1[i] = rls.questionInt(`ingrese numero en la posicion ${i + 1}: `);
    }

    let pos : number = 0;
    let neg : number = 0;
    let cero : number = 0;

    for (let i:number = 0 ; i < arr.length ; i++) {
        if (arr[i] === 0) {
        cero++;
       } else if (arr[i] < 0) {
        neg++
       } else {
        pos++
       }

}
console.log ("hay" , cero , "ceros");
console.log ("hay" , neg , "numeros negativos");
console.log ("hay" , pos , "numeros positivos");
}

arrNum(arr);
