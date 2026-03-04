require('dotenv').config(); // Todo - Importamos la libreria dotenv, la cual directamente ejecutamos .config() para ejecutarlo y asi guardar los valores en .ENV en process.env.
const { get } = require('env-var'); // Todo - Importamos de manera destructurada a get, el cual es una funcion de la libreria Env-var.la cual permite extraer informacion desde process.env.

const envs = { // *Creamos un objeto de nombre "envs", el cual almacenara como clave valor a PORT y PUBLIC_PATH.
    PORT: get('PORT').required().asPortNumber(), // *Como clave declaramos a PORT y como valor extremos de process.env a la variable PORT, el cual ademas se integran las condiciones de que tiene que ser obligatorio (que exista y extrerlo), ademas de transformarlo a numero de puerto.
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString() // *Como clave declaramos a PUBLIC_PATH y como valor extremos de process.env a la variable PUBLIC_PATH, el cual ademas se integran las condiciones de que si no extrae nada por defecto asigne "public", ademas de convertirla a a string los valores que extraiga.
};

module.exports = { // *Mediante module.exports exportamos el contenido para poder ser utilizado/leido desde otros archivos.
    envs // *Exportamos a el objeto envs que contiene a PATH y PUBLIC_PATH.
};