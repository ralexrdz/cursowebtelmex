// On ready con JS
document.addEventListener("DOMContentLoaded", function() {
    console.log("JS ready")
    
    // quiero imprimir el html dentro 
    //de cualquier elemento con clase: "mi-calse"
    // CON JS
    console.log('con js')
    let misClasesJS = document.getElementsByClassName("mi-clase") // HTML Collection
    for (let i = 0; i < misClasesJS.length; i++) {
        console.log(misClasesJS[i].innerHTML)        
    }

    // Agregar un hijo
    elem.appendChild(hijo)
})

$(function () {
    console.log("JQ ready")
    // quiero imprimir el html dentro 
    //de cualquier elemento con clase: "mi-calse"
    // CON JQUERY
    console.log('con jquery')

    $('.mi-clase').each(function (i,e) { console.log(e.innerHTML) })
    //$('.mi-clase').each((i,e) => console.log(e.innerHTML))

    elem.append(hijo)


})

