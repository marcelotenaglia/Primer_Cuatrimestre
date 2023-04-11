import * as rls from "readline-sync";

function areatriangulo (base:number , altura:number)  : number {
    return ((base*altura)/2);
};

console.log ("el area del triangulo es de" ,areatriangulo (12,4), "metros cuadrados");
