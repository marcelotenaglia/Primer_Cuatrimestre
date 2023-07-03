const lista = document.querySelector("#lista")
const input = document.querySelector("#input")
const enter = document.querySelector("#enter")
const hecho = "fa-check-circle" 
const sinHacer = "fa-circle"
const tachar = "line-through"
let id = 0
const LISTA = []



//funcion agregar tarea
function agregarTarea (tarea,id,realizado,eliminado) {

    if (eliminado) {return} //uso el return para terminar la ejecucion del programa si la condicion se cumple y nada de lo de abajo se ejecuta
    

    const REALIZADO = realizado ? hecho : sinHacer //REALIZADO y realizado no es lo mismo 
    const TACHAR = realizado ? tachar : ""

    const elemento = 
    `<li>
      <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
      <p class="text ${TACHAR}">${tarea}</p>
      <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
    </li>`
    lista.insertAdjacentHTML("beforeend",elemento) //hace que las tareas se agreguen abajo de la anterior
}


//funcion de tareaRealizada
function tareaRealizada (element) {
    element.classList.toggle(hecho)
    element.classList.toggle(sinHacer)
    element.parentNode.querySelector(".text").classList.toggle(tachar)
    LISTA[element.id].realizado = LISTA[element.id].realizado ? false : true
    //console.log(LISTA);
    //console.log(LISTA[element.id]);
    //console.log(LISTA[element.id].realizado);
}

//funcion tareaEliminada 
function tareaEliminada (element) {
    element.parentNode.parentNode.removeChild(element.parentNode) //indica que del elemento pasa al li y de li a ul (remueve al elemento li)
    LISTA[element.id].eliminado = true 
}



//metodo toggle agrega o quita una clase

//AGREGAR la TAREA dando un CLICK 
enter.addEventListener("click",() =>  {
    const tarea = input.value
    if (tarea) {
        agregarTarea (tarea,id,false,false)
        LISTA.push({   //agrega los elementos al ARRAY
            nombre:tarea,
            id:id,
            realizado:false,
            eliminado:false,
        }) 
    }
    input.value = ""
    id ++
})

//AGREGAR la TAREA presionando ENTER 
document.addEventListener("keyup",function(e){
    if (e.key==="Enter") { //e.key detecta la tecla enter
        const tarea = input.value
        if(tarea) {
            agregarTarea(tarea,id,false,false)
            LISTA.push({   //agrega los elementos al ARRAY
                nombre:tarea,
                id:id,
                realizado:false,
                eliminado:false,
            }) 
        }
        input.value = ""
        id++
    }
})

lista.addEventListener("click",function(e){
    const element = e.target 
    const elementData = element.attributes.data.value //busca el valor del atributo data en el ELEMENTO
    if (elementData === "realizado") {
        tareaRealizada (element)
    } else if (elementData === "eliminado"){
        tareaEliminada (element)
    }
})



