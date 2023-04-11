import * as rls from "readline-sync";

let name : string = rls.question("ingrese su nombre : ");

while (name.length > 0) {
    let practica : number = rls.questionFloat ("ingrese su nota de practica : ");
    let problemas : number = rls.questionFloat ("ingrese su nota de problemas : ");
    let teoria : number = rls.questionFloat ("ingrese su nota de teoria : ");

    let resultado : number = ((practica * 0.1) + (problemas * 0.5) + (teoria * 0.4));

if ( practica >= 0 && practica <= 10 && problemas >= 0 && problemas <= 10 && teoria >= 0 && teoria <= 10 ) {
    console.log ("su nota total es : ", resultado);    
} else {
    console.log ("error");
}

name = rls.question ("ingrese su nombre : ");

}