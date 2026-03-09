const { envs } = require('./config/env'); // Todo - Importamos el objeto "envs", el cual exportamos desde el archivo env.js, para poder ser utilizado y leido desde este archivo.
const { startServer } = require('./server/server') // Todo - Importamos la funcion "startServer", la cual exportamos desde el archivo server.js, para poder ser utilizada y ejecutada desde este archivo.

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// *Funcion agnóstica async autocovocada.
// *Agnóstica por que no tiene nombre y se encuentra dentro de parentesis, async por que es una funcion de tipo async y autoconvocada por que la ejecutamos con los parentesis finales. 
(async() => { 
    main();
})()