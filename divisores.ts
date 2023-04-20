import * as rls from "readline-sync";

let num:number = rls.questionInt ("ingrese un numero: ");

function divisores (num:number) : string { 
   
    let div:string = "";

    for (let i:number = 1 ; i <= num ; i++) {
        if (num % i === 0 && i < num) {
            div = div += `${i}, `;
        } else if (num % i === 0 && i === num) {
            div = div + num ; 
        }
    }

    return (div);

}

console.log(divisores (num)) ;