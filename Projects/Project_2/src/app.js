const { envs } = require('./config/env')

// *Funcion que imprime un mensaje.
const main = () => {
    console.log(envs)
}

// *Funcion agnóstica async autocovocada.
// *Agnóstica por que no tiene nombre y se encuentra dentro de parentesis, async por que es una funcion de tipo async y autoconvocada por que la ejecutamos con los parentesis finales. 
(async() => {
    main();
})()