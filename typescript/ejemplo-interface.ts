interface personaInterface {
    name: string,
    age: number
}

function insertaPersona (personas: personaInterface) {
    // manda llamar con ajax el POST para insertar la persona
}

let nuevaPersona = {
    name: 'Jacobo',
    age: 12
}

insertaPersona(nuevaPersona)