/*const inputs = document.querySelectorAll("input")
inputs[10].addEventListener("click",handleSubmit)
function handleSubmit () {
    console.log(`nombre/s : ${inputs[0].value}`);
    console.log(`apellido/s : ${inputs[1].value}`);
    console.log(`fecha de nacimiento : ${inputs[2].value}`);
    console.log(`DNI : ${inputs[3].value}`);
    console.log(`nacionalidad : ${inputs[4].value}`);
    console.log(`domicilio : ${inputs[5].value}`);
    console.log(`ciudad : ${inputs[6].value}`);
    console.log(`cp : ${inputs[7].value}`);
    console.log(`email : ${inputs[8].value}`);
    console.log(`telefono celular : ${inputs[9].value}`);
}*/

const user = {
    nombre: "",
    apellido: "",
    fechaDeNacimiento: "",
    dni: "",
    nacionalidad: "",
    domicilio: "",
    ciudad: "",
    codigoPostal: "",
    email: "",
    celular: "",
}

const inputs = document.querySelectorAll("input")

const form = document.querySelector("form")
form.addEventListener ("submit" , handleSubmit)

function handleSubmit (e) {
    e.preventDefault();
    user.nombre = inputs[0].value;
    user.apellido = inputs[1].value;
    user.fechaDeNacimiento = inputs[2].value;
    user.dni = inputs[3].value;
    user.nacionalidad = inputs[4].value;
    user.domicilio = inputs[5].value;
    user.ciudad = inputs[6].value;
    user.codigoPostal = inputs[7].value;
    user.email = inputs[8].value;
    user.celular = inputs[9].value;
    console.log (user);
}