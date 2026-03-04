const express = require('express'); // Todo - Importamos la libreria express y la almacenamos en una variable para poder usar express y sus funciones mediante esta variable
const path = require('path') // Todo . Importamos la libreria path la cual nos permite trabajar con direcciones/archivos y leer nuestras carpetas.

const startServer = (options) => { // *Creamos una variable que va a almacenar una funcion, dicha funcion es una funcion flecha que recibe un parametro llamado "options".
    const { port, public_path = 'public'} = options; // *Declaramos una variable la cual desestructurara lo pasado mediante el parametro options, el cual pasamos dentro de options un objeto que contiene port y public_path, por lo que hace la desestructuracion es buscar dentro del objeto con los mismos nombres los valores, el const creara variables con el nombre como los busca y toma los valores de las claves para almacenarlos en las variables.
    console.log(port); // *Imprime en consola el valor "port".
    console.log(public_path) // *Imprime en consola el valor "public_path".

    const app = express();
};

module.exports = { // *Mediante module.exports exportamos el contenido para poder ser utilizado/leido desde otros archivos.
    startServer // *Exportamos la funcion startServer para poder ser ejecutada desde cualquier archivo.
}