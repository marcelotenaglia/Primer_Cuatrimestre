import * as rls from "readline-sync";

let name : string = rls.question ("ingrese el nombre del alumno: ");
let nota1 : number = rls.questionInt ("ingrese nota del primer trimestre: ");
let nota2 : number = rls.questionInt ("ingrese nota del segundo trimestre: ");
let nota3 : number = rls.questionInt ("ingrese nota del tercer trimestre: ");
let promAnual : number;

function promedio (nota1 : number , nota2 : number , nota3 : number) : number {
   if (nota1 >= 0 && nota2 >= 0 && nota3 >= 0){
    promAnual = (nota1+nota2+nota3)/3
   } else {
    console.log ("error al cargar notas.")
   }     
   return promAnual
}

console.log ("el promedio anual es: ", promedio (nota1,nota2,nota3)); 