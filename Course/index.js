// ^Node.JS.
// ^Node.js es un entorno de ejecución de **código abierto** que permite ejecutar **JavaScript del lado del servidor**, construido sobre el motor **V8 de Google Chrome**. Su principal objetivo es habilitar el desarrollo de aplicaciones backend utilizando JavaScript, adoptando un modelo de ejecución **asíncrono y basado en eventos (event-driven)** que lo hace especialmente eficiente para manejar múltiples solicitudes concurrentes sin bloquear el hilo principal. A diferencia de JavaScript en el navegador, Node.js proporciona acceso a recursos del sistema como el **sistema de archivos**, la **red**, los **procesos del sistema** y la creación de **servidores HTTP**, lo que lo convierte en una herramienta fundamental para el desarrollo de APIs, microservicios y aplicaciones escalables. Gracias a su arquitectura no bloqueante y su amplio ecosistema de paquetes mediante **npm**, Node.js permite construir soluciones backend modernas, rápidas y altamente mantenibles.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~¿Qué es Node.js?.
// ~Es un entorno de ejecución de JavaScript que permite ejecutar código de JavaScript en el lado del servidor. Utiliza el motor V8 de Google Chrome para ejecutar código JavaScript de forma rápida y eficiente fuera del navegador web. Node.js es especialmente conocido por su capacidad de manejar conexiones de red de manera asíncrona y escalable, lo que lo hace ideal para construir aplicaciones web en tiempo real y servicios de red. Además, cuenta con un amplio ecosistema de bibliotecas y módulos que facilitan el desarrollo de aplicaciones web y de servidor.

// ~Características de Node.js.
// ~Node.js cuenta con diversas características, de las cuales las principales son los servidores HTTP, el desarrollo de aplicaciones en tiempo real, las entradas/salidas asíncronas y el manejo de paquetes y dependencias. Como se puede ver, todas estas características están más enfocadas al lado backend, centrándose un poco más en el apartado de:

// ?Servidor HTTP.
// ?Node.js permite crear servidores web de forma sencilla. Con el módulo http, se puede crear un servidor HTTP básico para manejar solicitudes y respuestas web. Esto es especialmente útil para construir aplicaciones web y APIs.

// ?Entrada/salida asíncrona (I/O):
// ?Node.js puede manejar múltiples solicitudes de entrada/salida simultáneamente sin bloquear el hilo principal de ejecución. Esto es fundamental para aplicaciones web que necesitan manejar muchas conexiones concurrentes.

// ?Desarrollo de aplicaciones en tiempo real.
// ?Node.js es muy adecuado para construir aplicaciones en tiempo real, como chats, juegos multijugador, sistemas de notificaciones en tiempo real, etc., gracias a su capacidad para manejar conexiones de red de manera asíncrona.

// ?Manejo de paquetes y dependencias.
// ?Node.js cuenta con un gestor de paquetes integrado llamado npm (Node Package Manager). npm es una herramienta muy poderosa que permite instalar, gestionar y compartir paquetes de código de JavaScript fácilmente.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Consola de Node.JS.
// ^Node.JS incluye una terminal propia conocida como REPL (Read-Eval-Print Loop), la cual se debe inicializar dentro de una terminal del sistema como PowerShell, CMD o la terminal integrada de VS Code. Esta consola nos permite ejecutar y poner en marcha el motor V8, que es el motor de JavaScript desarrollado por Google y utilizado por Node.JS para interpretar y ejecutar código. Esta consola es muy similar a la que encontramos en navegadores como Chrome cuando abrimos las herramientas de desarrollador, ya que nos permite escribir código JavaScript directamente y ejecutarlo en tiempo real. Dependiendo del tipo de código que ejecutemos, la consola puede devolver `undefined` si la instrucción no retorna explícitamente un valor, o bien mostrar el resultado evaluado. Esta consola contiene diversas funcionalidades y comandos internos que nos permiten interactuar con el entorno de Node.JS, probar fragmentos de código, realizar pruebas rápidas y comprender cómo funciona el entorno fuera del navegador.
// ~Comprobar version de Node.JS.
// ~Para comprobar que tenemos instalado correctamente Node.JS en nuestro sistema, podemos utilizar un comando específico que nos mostrará la versión actualmente instalada. Esto es fundamental para verificar que la instalación fue exitosa y que el entorno está correctamente configurado. Además, conocer la versión es importante porque ciertas funcionalidades pueden depender de versiones específicas. Para realizar esta comprobación utilizamos el comando `node --version`, el cual al ejecutarlo en la terminal nos mostrará un número de versión indicando que Node.JS está disponible y funcionando correctamente.
// node --version  //* Comando que muestra la versión instalada de Node.JS.
// v20.11.1        //* Ejemplo de salida en consola mostrando la versión actual instalada.

// ~Inicializar la consola de Node.JS
// ~Como se mencionó previamente, Node.JS cuenta con su propia consola interactiva. Para ejecutarla debemos abrir una terminal del sistema, como PowerShell, CMD o cualquier terminal compatible, y escribir el comando `node`. Al hacerlo, la terminal cambiará a modo interactivo de Node.JS (REPL), lo cual significa que a partir de ese momento el motor V8 comenzará a ejecutarse y podremos escribir código JavaScript directamente. Esta consola funciona de manera muy similar a la consola de navegadores como Chrome, permitiéndonos declarar variables, crear objetos, ejecutar funciones y evaluar expresiones. Cada vez que ejecutamos una instrucción, el entorno evaluará el resultado y mostrará el valor retornado. Si la instrucción no devuelve nada explícitamente, el resultado será `undefined`, ya que ese es el valor por defecto cuando no existe retorno.
// node                               //* Comando que inicia el entorno interactivo de Node.JS.
// Welcome to Node.js v24.13.0.       //* Mensaje de bienvenida indicando la versión activa.
// Type ".help" for more information. //* Indica que podemos usar el comando .help para ver opciones disponibles.
// > const objeto = {nombre: 'Christian', edad: 23} //* Declaración de un objeto directamente en la consola.
// undefined                          //* Se muestra undefined porque la declaración no retorna ningún valor.
// > objeto.nombre                    //* Accedemos a la propiedad `nombre` del objeto creado.
// 'Christian'                        //* La consola evalúa y muestra el valor almacenado en esa propiedad.
// >                                  //* El símbolo > indica que la consola está lista para recibir más instrucciones.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Ejecucion de archivos JavaScript.
// ^Node.JS puede ser utilizado para ejecutar archivos de JavaScript directamente desde la terminal. Esto nos permite trabajar con JavaScript principalmente del lado del backend, ya que, como bien sabemos, también podemos trabajar con JavaScript del lado del frontend vinculándolo a un archivo HTML, donde todo lo que ejecutemos normalmente se mostrará en la consola del navegador. Sin embargo, ejecutar JavaScript con Node.JS nos permite trabajar directamente con el lenguaje sin necesidad de un entorno de navegador, es decir, sin depender de HTML ni de las herramientas del navegador. Para realizar esto, es necesario abrir una terminal y ubicarnos en el directorio donde se encuentra el archivo `.js` que queremos ejecutar. Una vez estando en el mismo directorio, únicamente deberemos ejecutar el comando `node nombreArchivoJS`, y de esta manera Node.JS ejecutará nuestro archivo. Es importante entender que esta ejecución es de una sola vez, es decir, cada vez que queramos volver a ejecutar el archivo deberemos volver a escribir el comando correspondiente en la terminal.
// node nombreArchivo.js  //* Comando que ejecuta un archivo JavaScript ubicado en el directorio actual utilizando Node.JS.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Librerias en Node.JS.
// ^Algo muy importante a mencionar incluso antes de entrar directamente a codificar con Node.JS, es hablar respecto a las librerías. Esto es fundamental porque dentro de Node.JS existe una forma muy concreta y estructurada de trabajar con ellas. A diferencia del entorno del navegador, donde podemos importar scripts mediante etiquetas `<script>`, en Node.JS las librerías se gestionan mediante el sistema de módulos. En la mayoría de los casos, para poder utilizar una librería debemos primero asignarla a una variable. Esto significa que la librería no se usa directamente, sino que se importa y se almacena en una constante o variable que representará ese módulo dentro de nuestro archivo. Adicionalmente, existen librerías que pasan por dos procesos: el primero es definir y asignar la librería a una variable; el segundo puede variar dependiendo del tipo de librería. Por ejemplo, existen librerías como `express` que requieren que la variable asignada sea ejecutada como si fuera una función, ya que internamente exponen una función que debe invocarse para inicializar su comportamiento. Esto depende completamente de cómo fue diseñada la librería.

// ~Asignacion de librerias a variables
// ~La asignación de librerías a variables en Node.JS es prácticamente una regla obligatoria dentro del patrón tradicional de módulos CommonJS. Generalmente estas variables se declaran como constantes (`const`), ya que una vez que importamos una librería su referencia no debería cambiar durante la ejecución del programa. Para realizar esta asignación se utiliza la palabra reservada `require()`, que es una función propia del sistema de módulos de Node.JS. Dentro de `require()` se coloca el nombre de la librería como string. Este nombre debe coincidir exactamente con el nombre con el que fue instalada mediante npm o con el módulo interno de Node.JS que deseamos utilizar. Es importante entender que `require()` lo que hace es cargar el módulo y devolver su contenido exportado, el cual nosotros almacenamos en una variable para poder utilizarlo posteriormente en nuestro código. Algunas librerías simplemente exponen un conjunto de funciones o propiedades, mientras que otras exponen directamente una función que necesita ejecutarse después de ser importada.
// const express = require('express'); //* Importa la librería `express` y la asigna a la constante `express`. `require()` carga el módulo y devuelve su contenido exportado.

// ~Inicializacion de librerias asignadas a variables
// ~Como se mencionó anteriormente, existen librerías que después de ser asignadas a una variable requieren un segundo paso: su inicialización. Esto ocurre cuando la librería exporta una función principal que debe ejecutarse para configurar o activar su comportamiento interno. En el caso de `express`, la variable `express` contiene una función, por lo que al ejecutarla mediante paréntesis `()`, estamos creando una instancia de la aplicación Express. Esta nueva instancia generalmente se guarda en otra constante, como `app`, la cual representará nuestra aplicación servidor. Este patrón es muy común en frameworks de backend y es importante comprender que no todas las librerías funcionan igual; algunas solo requieren ser importadas, mientras que otras necesitan ser ejecutadas o configuradas posteriormente.
// const app = express(); //* Ejecuta la función exportada por la librería `express`, creando una instancia de la aplicación y almacenándola en la constante `app`.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^File System
// ^El file system en Node.JS es una paqueteria, la cual nos permite la lectura y escritura de archivos, por lo cual para poder utilizar dicha libreria es necesario declarar una variable a la cual le asginaremos la libreria, ya que 