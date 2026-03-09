const express = require('express'); // Todo - Importamos la libreria express y la almacenamos en una variable para poder usar express y sus funciones mediante esta variable
const path = require('path') // Todo . Importamos la libreria path la cual nos permite trabajar con direcciones/archivos y leer nuestras carpetas.

const startServer = (options) => { // *Creamos una variable que va a almacenar una funcion, dicha funcion es una funcion flecha que recibe un parametro llamado "options".
    const { port, public_path = 'public'} = options; // *Declaramos una variable la cual desestructurara lo pasado mediante el parametro options, el cual pasamos dentro de options un objeto que contiene port y public_path, por lo que hace la desestructuracion es buscar dentro del objeto con los mismos nombres los valores, el const creara variables con el nombre como los busca y toma los valores de las claves para almacenarlos en las variables.
    console.log(port); // *Imprime en consola el valor "port".
    console.log(public_path) // *Imprime en consola el valor "public_path".

    const app = express(); // *Inicializa Express() detro de una variable llamada "app".
    app.use(express.static(public_path)); // *Utilizamos un Middleware para las rutas en general, donde hacemos publica y estatica la capeta que almacenamos en public_path, esto implica que los archivos dentro de esa carpeta pueden ser servidos directamente al navegador

        app.get(/.*/, (req, res) => {//*Establecemos una ruta, donde mediante /.*/ establecemos que cuando ninguna ruta anterior coincide dentro del servidor ejecute lo que se define en el handler.
            const indexPath = path.join(__dirname + `../../../${public_path}/index.html`); // *Creamos una variable la cual, almacenara una direccion de carpetas, donde __dirname especifica en la ruta la ubicacion de este archivo en este caso src/server, y que integre a la path lo demas. quedando como....
        res.sendFile(indexPath); // *Posteriormente usando el path que definimos retornaremos o mostraremos el archivo index.html 
    });

    app.listen(port, () => { // *Ejecutamos el servidor donde se crea un listener para ejecutar y escuchar todas las rutas.
        console.log(`Escuchando en el puerto: ${port}`) // *Mensaje en consola que indica donde se esta ejecutando el servidor.
    });
};

module.exports = { // *Mediante module.exports exportamos el contenido para poder ser utilizado/leido desde otros archivos.
    startServer // *Exportamos la funcion startServer para poder ser ejecutada desde cualquier archivo.
}