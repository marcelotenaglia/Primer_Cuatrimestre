import * as rls from "readline-sync";

let i:number = rls.questionFloat ("ingrese una base: ");
let n:number = rls.questionFloat ("ingrese un exponente: ");

function potencias (i:number , n:number) : number {
    
    while (n < 0) {
        n = rls.questionFloat ("ingrese un exponente mayor o igual a cero ");
    }
    return (Math.pow (i,n)); 
} 

console.log (potencias (i , n));