import * as rls from "readline-sync";

let n1: number = rls.questionInt ("ingrese un numero: ");
let n2: number = rls.questionInt ("ingrese hasta que numero: ");
let result: string = "";

for (let i:number = 1 ; i <= n2 ; i++) {
    
       result = `${n1 * i}`;
    
       console.log(n1 , "x" , i , "=" , result) ;
}

