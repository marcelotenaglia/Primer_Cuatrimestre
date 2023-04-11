import * as rls from "readline-sync";

let cantDados : number = rls.questionInt ("ingrese la cantidad de dados que se tiran: ");
let probability : number = 1;

for (let i : number = 1 ; i <= cantDados ; i ++) {
    probability = (probability / 6);
}
if (cantDados <= 0) {
    console.log ("por favor, ingrese un numero positivo")
} else if (cantDados === 1){
    console.log ("la probabilidad de que salga 6 en " , cantDados , " dado es: " , probability);
} else {
    console.log ("la probabilidad de que salga 6 en " , cantDados , " dados es: " , probability);
}


