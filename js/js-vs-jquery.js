$(function () {
    console.log("ready")
    // quiero imprimir el html dentro 
    //de cualquier elemento con clase: "mi-calse"

    // CON JS
    console.log('con js')
    let misClasesJS = document.getElementsByClassName("mi-clase") // HTML Collection
    for (let i = 0; i < misClasesJS.length; i++) {
        console.log(misClasesJS[i].innerHTML)        
    }

    // CON JQUERY
    console.log('con jquery')

    $('.mi-clase').each(function (i,e) { console.log(e.innerHTML) })
    //$('.mi-clase').each((i,e) => console.log(e.innerHTML))
})