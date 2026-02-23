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
// ^Algo muy importante a mencionar incluso antes de entrar directamente a codificar con Node.JS, es hablar respecto a las librerías. Esto es fundamental porque dentro de Node.JS existe una forma muy concreta y estructurada de trabajar con ellas. A diferencia del entorno del navegador, donde podemos importar scripts mediante etiquetas `<script>`, en Node.JS las librerías se gestionan mediante el sistema de módulos. En la mayoría de los casos, para poder utilizar una librería debemos primero asignarla a una variable. Esto significa que la librería no se usa directamente, sino que se importa y se almacena en una constante o variable que representará ese módulo dentro de nuestro archivo. Adicionalmente, existen librerías que pasan por dos procesos: el primero es definir y asignar la librería a una variable; el segundo puede variar dependiendo del tipo de librería. Por ejemplo, existen librerías como `express` que requieren que la variable asignada sea ejecutada como si fuera una función, ya que internamente exponen una función que debe invocarse para inicializar su comportamiento. Esto depende completamente de cómo fue diseñada la librería. Cabe destacar que el uso unicamente de este metodo de crear o llamar librerias es una forma antigua, ya que actualmente se utiliza import, el cual se vera mas adelante.

// ~Asignacion de librerias a variables.
// ~La asignación de librerías a variables en Node.JS es prácticamente una regla obligatoria dentro del patrón tradicional de módulos CommonJS. Generalmente estas variables se declaran como constantes (`const`), ya que una vez que importamos una librería su referencia no debería cambiar durante la ejecución del programa. Para realizar esta asignación se utiliza la palabra reservada `require()`, que es una función propia del sistema de módulos de Node.JS. Dentro de `require()` se coloca el nombre de la librería como string. Este nombre debe coincidir exactamente con el nombre con el que fue instalada mediante npm o con el módulo interno de Node.JS que deseamos utilizar. Es importante entender que `require()` lo que hace es cargar el módulo y devolver su contenido exportado, el cual nosotros almacenamos en una variable para poder utilizarlo posteriormente en nuestro código. Algunas librerías simplemente exponen un conjunto de funciones o propiedades, mientras que otras exponen directamente una función que necesita ejecutarse después de ser importada.
// const express = require('express'); //* Importa la librería `express` y la asigna a la constante `express`. `require()` carga el módulo y devuelve su contenido exportado.

// ~Inicializacion de librerias asignadas a variables.
// ~Como se mencionó anteriormente, existen librerías que después de ser asignadas a una variable requieren un segundo paso: su inicialización. Esto ocurre cuando la librería exporta una función principal que debe ejecutarse para configurar o activar su comportamiento interno. En el caso de `express`, la variable `express` contiene una función, por lo que al ejecutarla mediante paréntesis `()`, estamos creando una instancia de la aplicación Express. Esta nueva instancia generalmente se guarda en otra constante, como `app`, la cual representará nuestra aplicación servidor. Este patrón es muy común en frameworks de backend y es importante comprender que no todas las librerías funcionan igual; algunas solo requieren ser importadas, mientras que otras necesitan ser ejecutadas o configuradas posteriormente.
// const app = express(); //* Ejecuta la función exportada por la librería `express`, creando una instancia de la aplicación y almacenándola en la constante `app`.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^File System
// ^El File System en Node.JS es una paquetería (módulo interno) que nos permite realizar operaciones de lectura, escritura y manipulación de archivos dentro del sistema. Esta librería forma parte del núcleo de Node.JS, por lo que no es necesario instalarla mediante npm, ya que viene incluida por defecto. Para poder utilizar esta librería es necesario asignarla a una variable, siguiendo el patrón tradicional del sistema de módulos CommonJS. Una vez que la librería es asignada a una variable, podremos trabajar directamente con ella utilizando el nombre de dicha variable seguido de un punto (`.`), lo cual desplegará todas las acciones disponibles que podemos realizar, como leer archivos, escribirlos, modificarlos, eliminarlos, entre otras. Además, dependiendo de lo que deseemos hacer con esta librería, incluso podemos asignar como variables ciertos archivos de nuestro sistema y trabajar directamente con su contenido desde el entorno de Node.JS.
console.log('=========== Fyle sistem. ==========='); //* Muestra en consola el encabezado de la sección File System.

// ~Asignacion de libreria fs a variable.
// ~El uso de la librería `fs` dentro de Node.JS únicamente consta de asignarla a una variable, ya que esta librería no requiere un proceso adicional de inicialización como ocurre con otras librerías como `express`. Para realizar esta asignación es suficiente con declarar una variable de tipo constante (`const`) con el nombre `fs` (que es el nombre convencionalmente usado), y posteriormente asignarla utilizando `require('fs')`. Con esto ya tendremos acceso a todas las funcionalidades que ofrece el módulo File System, y será todo lo necesario para comenzar a trabajar con archivos dentro de nuestro sistema.
const fs = require('fs'); //* Importa el módulo interno `fs` y lo asigna a la constante `fs`.

// ~Uso de la libreria fs.
// ~El uso de la librería File System es relativamente directo, ya que únicamente debemos utilizar el nombre de la variable a la cual asignamos la librería (`fs`) seguido de un punto (`.`). Al hacer esto, el editor de código nos mostrará todas las funciones disponibles dentro del módulo, como `readFileSync`, `writeFileSync`, `appendFileSync`, entre otras. El uso específico dependerá de la acción que deseemos realizar. Por ejemplo, si queremos trabajar con un archivo, primero podemos asignarlo a una variable utilizando `fs.readFileSync`, o bien crear o modificar archivos utilizando funciones como `writeFileSync`. El patrón general es: nombreVariable.accion('rutaDelArchivo').
// ?Asignacion de un archivo a variable con fs.
// ?La asignación de un archivo a una variable mediante `fs` es bastante sencilla. Debemos declarar una variable que almacenará el contenido del archivo o que hará referencia a este. Para ello utilizamos `fs.readFileSync()`, donde `readFileSync` significa “leer archivo de forma síncrona”. La palabra “Sync” indica que el proceso se ejecuta de manera bloqueante, es decir, Node.JS esperará a que termine la lectura antes de continuar con la ejecución del código. Dentro de los paréntesis debemos especificar la ruta del archivo y el tipo de codificación que queremos usar (por ejemplo 'utf-8' para texto legible). Una vez hecho esto, si imprimimos la variable, veremos en consola todo el contenido del archivo leído. Cabe mencionar que existen métodos síncronos y asíncronos; en este ejemplo estamos utilizando la versión síncrona para simplificar el flujo de trabajo.
console.log('--- Asignacion de un archivo a variable con fs. ---'); //* Muestra encabezado del ejemplo.

const libro_1 = fs.readFileSync('../assets/docs/Libro_1.txt', 'utf-8'); //* Lee el archivo especificado y guarda su contenido en la variable `libro_1`.
console.log(libro_1); //* Imprime en consola el contenido completo del archivo leído.

// ?Crear copia de archivo asignado a variable con fs.
// ?Para crear una copia de un archivo que previamente asignamos a una variable, utilizamos el método `fs.writeFileSync()`. Este método nos permite crear un nuevo archivo o sobrescribir uno existente de manera síncrona. Dentro de los paréntesis debemos especificar dos elementos fundamentales: primero, la ruta y nombre del nuevo archivo que queremos crear (incluyendo su extensión); segundo, el contenido que se escribirá en ese archivo, que en este caso será la variable que contiene el texto original. De esta manera, estaremos generando una copia exacta del archivo previamente leído.
fs.writeFileSync('../assets/docs/Libro_1_copia.txt', libro_1); //* Crea un nuevo archivo con el mismo contenido que `libro_1`.

// ?Modificar archivo asignado a variable con fs.
// ?Un aspecto interesante respecto al uso de `fs` es que las modificaciones directas sobre archivos no se realizan editando el archivo en memoria y guardándolo automáticamente. En realidad, el flujo consiste en leer el archivo, modificar su contenido en una variable (por ejemplo utilizando métodos como `replace()`), y posteriormente escribir un nuevo archivo con el contenido modificado. Es decir, el proceso implica crear una nueva versión del archivo aplicando los cambios deseados. Esto ocurre porque el contenido leído se almacena como texto en memoria, y cualquier transformación se realiza sobre esa representación en memoria antes de volver a escribirla en el sistema.
console.log('--- Modificar archivo asignado a variable con fs. ---'); //* Encabezado del ejemplo de modificación.

const Libro_1_modificacion = libro_1.replace(/Libro 1/ig, 'libro 2'); //* Reemplaza todas las coincidencias de "Libro 1" por el nuevo texto.
fs.writeFileSync('../assets/docs/Libro_2.txt', Libro_1_modificacion); //* Crea un nuevo archivo aplicando la modificación realizada.
const libro_2 = fs.readFileSync('../assets/docs/Libro_2.txt', 'utf-8'); //* Lee el archivo especificado y guarda su contenido en la variable `libro_2`.
console.log(libro_2); //* Imprime en consola el contenido completo del archivo modificado.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// !Proyectos con Node.JS
// !Anteriormente vimos teoria, funciones basicas, ejecutamos archivos JS de forma individual con Node.js, lo cual es útil para scripts pequeños. A partir de ahora, daremos el salto a proyectos estructurados de Node.js, donde aprenderemos a organizar aplicaciones extensas utilizando módulos, dependencias de npm y una estructura de carpetas profesional, permitiéndonos crear sistemas escalables y no solo archivos sueltos.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Npm init & package.json
// ^Una de las partes mas importantes del uso de Node.JS en proyectos es que este se puede trabajar en los mismos, por lo que para ello y poder trabajar con Node en los proyectos se debera utilizar la palabra npm init para instalar las dependencias necesarias al proyecto y que este pueda usar node, creando asi el package.json. Por otro lado otro de los componentes clave para el trabajo de Node ne poryectos es el archivo package.json el cual es el corazon de node dentro de nuestrs proyectos, ya que este funciona como un archivo de configuracion central que registra metadatos (nombre, versión), gestiona las dependencias (librerías externas) y define los scripts para ejecutar, probar o compilar la aplicación.
// ~Npm init.
// ~El comando Npm init es un comando reservado de node package manager de ahi lo e npm, el cual nops permite inicializar node en nuestros poryectos, el cual generara e package.json el cual es necesario para poder tener node en nuestor proyecto, la inicializacion e instalacion de Node en proyectos comunmenbte realiza ciertas preguntas clave para la instalacion correcta de Node. De igual manera existe otras manera de poderinicializar de manera mas rapida, pero es importante conocer la forma base, ya que esto nos permitira configurar o instalar Node de ciertas maneras. Por ende el comando npm inti debe ser ejecutado en una terminalk y en el directorio raiz de nuestro proyecto. Las preguntas que se nos hacen es para especificar el nombre del proyecto que usara package.jso, para especificar una vewrsion de node, descripcion del proyecto, entrada node, comando para bruevas, vincular a un repoositoriop de git, palabras clabe para ubicar enfuturo el proyecto en npm, autor(es),  licencias, y finalmente el permiso para crear el package.json, comunmente solanmente debemos teclrar lo que queremos modificar y usar entera para siguiente, estos aspectos son opcionales y podemos dar enter a cada uno ausando asi los valores por defecto.
// PS D:\Trabajos\Cursos\Node-Js-Course\Course\scripts> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (scripts) node_js_course
// version: (1.0.0)                                                                   
// description: Scripts and course section of the Node course.
// entry point: (index.js)
// test command:
// git repository:
// keywords:          
// author: Chris Alegria
// license:(ISC)
// About to write to D:\Trabajos\Cursos\Node-Js-Course\Course\scripts\package.json:

// {
//   "name": "node_js_course",
//   "version": "1.0.0",
//   "description": "Scripts and course section of the Node course.",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "Chris Alegria",
//   "license": "ISC"
// }

// Is this OK? (yes) yes

// ~Package.json.
// ~El archivo package.json es creado mediante npm init, el cual nos preguntara diversas cuestiones con las que trabajara nuestro package.json, ahora bien este archivo es indispensable ya que es el corazon de node dentro de nuestrs proyectos, ya que este funciona como un archivo de configuracion central que registra metadatos (nombre, versión), gestiona las dependencias (librerías externas) y define los scripts para ejecutar, probar o compilar la aplicación ademas esta presente ya que tanto los proyectos react como los proyectos angular se ejecuitan encima de node. 
// ?Contenido de Package.json.
// ?Dentro de nuestro package.json encontraremos nombre del proyecto con el que trabaja, version de node que usa, descripcion del proyecto, punto de entrada (donde sera el corazon de codigo que use node.), scripts de comandos para usar npm y hacer test. autor y licencias. Ademas dentro de este mismo archivo podemos especificar mas datos o informacion.
// {
//   "name": "node_js_course",
//   "version": "1.0.0",
//   "description": "Scripts and course section of the Node course.",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "node index.js",
//     "start": "node index.js",
//     "build": "node index.js"
//   },
//   "author": "Chris Alegria",
//   "license": "ISC"
// }

// ?Seccion de scripts dentro de package.json
// ?Como ya se comento previamen te la seccion de scripts dentro de nuestro package.json nos permite declarar comandops los cuales al ejecutarlos segun la seccion en los que los dimos de alta haran una cosa u otra. Ahora bien un ejemplo de esto es "start": "", el cual nos permite dar de alta un comando que al ejecutarlo ejecutara nuestro punto de entrada, tenemos ifualmente "dev": "" el cual a diferencia de start se usa para cuando esta en desarrollo y dejar a stary para produccion, tenemostambien "build": el cual prepara la aplicacion para produccion. Por lo que el comando a espeicifcar debera siempre contener la palabra node, ya que ejecutara dicho comando. Ahora bien, como podemos ver estos estan divididoa en 2 partes tenemos el lado izquierdo donde se tiene por ejemplo "star": aqui es donde asignaremos el nombre o palabra que queramos, y lo que esta al lado derecho sera el comando o lo que ejecutara node por ejemplo node index.js.
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "node index.js",
//     "start": "node index.js",
//     "build": "node index.js"
//   },

// ?