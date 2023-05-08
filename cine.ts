import * as rls from "readline-sync";

let butacas : boolean [] = [true,true,false,true,false,false,false,true,false,true,true,true,true,false,false,true,false]
let full : number = 0;
let empty : number = 0;

for (let i : number = 0 ; i < butacas.length ; i++) {
    if (butacas[i] === true) {
        full++;
    } else {
        empty++;
    }
}

console.log ("hay" ,empty, "butacas vacias y" ,full, "butacas ocupadas");


/*let dim : number = rls.questionInt ("ingrese la dimension del arreglo: ");
let butacas : boolean [] = new Array (dim);
let full : number = 0;
let empty : number = 0;

function arrNum (arr1:number[]) : void {
    for (let i:number = 0 ; i < arr1.length ; i++) {
        arr1[i] = rls.questionInt(`ingrese numero en la posicion ${i + 1}: `);
    }
}

for (let i : number = 0 ; i < butacas.length ; i++) {
    if (butacas[i] === true) {
        full++;
    } else {
        empty++;
    }
}
console.log ("hay" ,empty, "butacas vacias y" ,full, "butacas ocupadas");
*/


