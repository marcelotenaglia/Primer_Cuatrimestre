import * as rls from "readline-sync";

let dividendo:number = rls.questionInt ("ingrese un dividendo: ");
let divisor:number = rls.questionInt ("ingrese un divisor: ");

function esMultiplo (dividendo:number , divisor:number) : boolean { 
   
  
    if (dividendo % divisor === 0){
        return (true);
    } else {
        return (false);
    }
    
}

console.log(esMultiplo (dividendo , divisor)) ;
 

