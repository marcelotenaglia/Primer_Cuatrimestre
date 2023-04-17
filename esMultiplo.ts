import * as rls from "readline-sync";

function esMultiplo () : boolean {
    let multiplo:boolean;
    let dividendo:number = rls.questionInt ("ingrese un dividendo: ");
    let divisor:number = rls.questionInt ("ingrese un divisor: ");
    if (dividendo % divisor === 0){
        multiplo = true;
        console.log (multiplo);
    } else {
        multiplo = false;
        console.log (multiplo);
    }
    return (multiplo);
}

esMultiplo ();

