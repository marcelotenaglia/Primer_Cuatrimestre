import * as rls from "readline-sync";

function potencias () : number {
    let i:number = rls.questionFloat ("ingrese una base: ");
    let n:number = rls.questionFloat ("ingrese un exponente: ");
    while (n < 0) {
        n = rls.questionFloat ("ingrese un exponente mayor o igual a cero ");
    }
    return (Math.pow (i,n)); 
} 

console.log ("el resultado de la operacion es:" , potencias ());