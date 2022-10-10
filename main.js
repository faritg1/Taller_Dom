///ejercicio 1
const cambiarcolor = document.querySelector("#select1");

cambiarcolor.addEventListener("change",()=>{

    let select = document.getElementById("select1");

    /* Evaluamos su respectiva posicion, referencia y color. */

    document.getElementById("texto_1").value = select.selectedIndex;
    document.getElementById("texto_2").value = select.options[select.selectedIndex].text
    document.getElementById("texto_3").value = select.options[select.selectedIndex].value;


    let valuecolor = select.options[select.selectedIndex].value;

    document.getElementById("valuecolor").value = ("#"+valuecolor)

})


////ejercicio 2

const fncontrolarcaracteres = ()=>{

    let tamTxterea = document.getElementById("des");

    if(tamTxterea.value.length <= 0)
    {
        /* Si el campo de texto es vacio, mostrara un alerta */
        alert("Campo de texto vacio");
    }
    else if (tamTxterea.value.length > 50)
    {
        /* Campo tendra una capacidad maxima de 50 caracteres */
        alert("Texto maximo de 50max");
    }
    else
    {
        /* Se evalua su valor del campo, al estar en un rango >0 & <50 */
        alert("tamaño de texto correcto")
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", fncontrolarcaracteres);


/////ejercicio 3
//Deficion de variables y requerimientos
/* Tendra unos parametros que indican en las variables */
let patronletra = /^[a-zA-Z]/;
let patronvocal = /[aeiouAEIOUáéíóú]/
let texto1 = "--> texto contiene letra y contiene una vocal"
let texto2 = "--> texto NO contiene letra o NO contiene una vocal"

function validarletras(){

    let palabra = document.getElementById("txtcar").value

    if(patronletra.test(palabra) && patronvocal.test(palabra))
    {
        /* Evalua si contiene algun parametro dado, si es asi su valor es true */
        document.getElementById("rtaregular").innerHTML = texto1;
    }
    else
    {
        /* Sino, su valor sera false */
        document.getElementById("rtaregular").innerHTML = texto2;
    }
}

let btn2 = document.getElementById("btnregular")
btn2.addEventListener("click",validarletras)

////ejercicio 3.1
//Deficion de variables y requerimientos
/* Tendra unos parametros que indican en las variables */
let patronletra2 = /^[a-zA-Z0-9]*$/;
let patronnumeros = /[0-9]{1}/
let texto3 = "--> Correcto"
let texto4 = "--> Texto debe contener 6 caracteres: Letras/Vocales/Numeros"

function validarcajatexto(){

    let entradareg = document.getElementById("txtreg").value

    if(patronletra2.test(entradareg) && patronnumeros.test(entradareg) && entradareg.length>5)
    {
        document.getElementById("rtaregular2").innerHTML = texto3;
    }
    else
    {
        document.getElementById("rtaregular2").innerHTML = texto4;
    }
}

let btn3 = document.getElementById("btnregular2")
btn3.addEventListener("click",validarcajatexto)

////ejercicio 3.2
/* Tendra unos parametros que indican en las variables */
//^607 su prioridad es comenzar con el valor indicado
let numeros = /^607[0-9]{7}/;
let texto5 = "--> Correcto"
let texto6 = "--> Falta algo"

function validarnumeros(){
    let entradanum = document.getElementById("txtnum").value

    if(numeros.test(entradanum) && entradanum.length===10)
    {
        document.getElementById("rtanum").innerHTML = texto5;
    }
    else
    {
        document.getElementById("rtanum").innerHTML = texto6;
    }
}

let btn4 = document.getElementById("btnnum") 
btn4.addEventListener("click", validarnumeros)


///Ejercicio 4
let texto = document.getElementById("text")
texto.addEventListener("input", ()=>{
    /* Su valor se mostrar en un id, con una etiqueta (p) */
    document.getElementById("rtateclado").innerHTML = texto.value
})

const fnCaracteres = ()=>{
    let cantidadCar = document.getElementById("tamtext").value.length;
    let disponibles = 50 -parseInt(cantidadCar);
    document.getElementById("cantidad").innerHTML = disponibles;
}

document.getElementById("tamtext").addEventListener("keyup",fnCaracteres);

///Ejercicio 5

//paso_1 con onclick para las imagenes

/* function muestra(num)
{
    let imagen = document.images[num].src
    let grande = document.images["pantalla"]
    grande.src = imagen
} */

//paso_2 con ID

const imguno = document.querySelector("#img1")
const imgdos = document.querySelector("#img2")
const imgtres = document.querySelector("#img3")
const imgcuarto = document.querySelector("#img4")

function muestra(num)
{
    let imagen = document.images[num].src
    let grande = document.images["pantalla"]
    grande.src = imagen
} 

imguno.addEventListener("click",()=> muestra(1))
imgdos.addEventListener("click",()=> muestra(2))
imgtres.addEventListener("click",()=> muestra(3))
imgcuarto.addEventListener("click",()=> muestra(4))


//ejercicio 6

//creacion de nodos
const nuevoelmento = document.createElement("p")

//opcion 1
const nuevotexto = document.createTextNode("Insertando nuevo texto coex")

//opcion 2
const nuevonodo = nuevoelmento.appendChild(nuevotexto)

function fncrear(){

    //opcion 2
    // let contenedor = document.getElementById("nuevotexto").appendChild(nuevoelmento)

    let contenedor = document.getElementById("nuevotexto");
    contenedor.appendChild(nuevonodo);
}

function fncopiar(){
    let copiarnodo = document.getElementById("nuevotexto");
    copia = copiarnodo.cloneNode(true)
    document.getElementById("copia").appendChild(copia)
}

function fneliminar(){
    let eliminarnodo = document.getElementById("nuevotexto");
    eliminarnodo.parentNode.removeChild(eliminarnodo);

}


let btn5 = document.getElementById("btncrear")
btn5.addEventListener("click",fncrear)

let btn6 = document.getElementById("btnduplicar")
btn6.addEventListener("click",fncopiar)

let btn7 = document.getElementById("btneliminar")
btn7.addEventListener("click",fneliminar)


//ejercicio 7

let listaelementos = document.querySelector("#elementos");


function fnagregarelemento(evento){
    //preventDefault evita refrescar la pagina
    evento.preventDefault();

    let newelement = document.getElementById("txtelemento").value

    //crear elemento li
    let li = document.createElement("li")

    //crear nuevo button 
    let btndelete = document.createElement("button")

    //agregar elementos a las clases
    li.className = "list-group-item"
    btndelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"

    //agregar el nodo de textonde 

    li.appendChild(document.createTextNode(newelement))
    btndelete.appendChild(document.createTextNode("X"))

    listaelementos.appendChild(li)
    li.appendChild(btndelete)
}

//enviar el evento submit 
let form = document.querySelector("#frmlista")
form.addEventListener("submit",fnagregarelemento)


function fneliminarelemento(evento){
    // comprobar los elementos de la clase 'delete'
    if(evento.target.classList.contains("delete")){
        // mostrar en pantalla mensaje de confirmación
        if(confirm("¿Deseas elimar este Elemento?")){
            let li = evento.target.parentElement;
            listaelementos.removeChild(li);
        }
    }

}

listaelementos.addEventListener("click", fneliminarelemento );
