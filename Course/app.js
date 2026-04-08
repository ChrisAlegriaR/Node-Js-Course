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
// const fs = require('fs'); //* Forma vieja de importacion: Importa el módulo interno `fs` y lo asigna a la constante `fs`.
import * as fs from 'node:fs'; // *Forma nueva de importacion.

// ~Uso de la libreria fs.
// ~El uso de la librería File System es relativamente directo, ya que únicamente debemos utilizar el nombre de la variable a la cual asignamos la librería (`fs`) seguido de un punto (`.`). Al hacer esto, el editor de código nos mostrará todas las funciones disponibles dentro del módulo, como `readFileSync`, `writeFileSync`, `appendFileSync`, entre otras. El uso específico dependerá de la acción que deseemos realizar. Por ejemplo, si queremos trabajar con un archivo, primero podemos asignarlo a una variable utilizando `fs.readFileSync`, o bien crear o modificar archivos utilizando funciones como `writeFileSync`. El patrón general es: nombreVariable.accion('rutaDelArchivo').
// ?Asignacion de un archivo a variable con fs.
// ?La asignación de un archivo a una variable mediante `fs` es bastante sencilla. Debemos declarar una variable que almacenará el contenido del archivo o que hará referencia a este. Para ello utilizamos `fs.readFileSync()`, donde `readFileSync` significa “leer archivo de forma síncrona”. La palabra “Sync” indica que el proceso se ejecuta de manera bloqueante, es decir, Node.JS esperará a que termine la lectura antes de continuar con la ejecución del código. Dentro de los paréntesis debemos especificar la ruta del archivo y el tipo de codificación que queremos usar (por ejemplo 'utf-8' para texto legible). Una vez hecho esto, si imprimimos la variable, veremos en consola todo el contenido del archivo leído. Cabe mencionar que existen métodos síncronos y asíncronos; en este ejemplo estamos utilizando la versión síncrona para simplificar el flujo de trabajo.
console.log('--- Asignacion de un archivo a variable con fs. ---'); //* Muestra encabezado del ejemplo.

const libro_1 = fs.readFileSync('./assets/docs/Libro_1.txt', 'utf-8'); //* Lee el archivo especificado y guarda su contenido en la variable `libro_1`.
console.log(libro_1); //* Imprime en consola el contenido completo del archivo leído.

// ?Crear copia de archivo asignado a variable con fs.
// ?Para crear una copia de un archivo que previamente asignamos a una variable, utilizamos el método `fs.writeFileSync()`. Este método nos permite crear un nuevo archivo o sobrescribir uno existente de manera síncrona. Dentro de los paréntesis debemos especificar dos elementos fundamentales: primero, la ruta y nombre del nuevo archivo que queremos crear (incluyendo su extensión); segundo, el contenido que se escribirá en ese archivo, que en este caso será la variable que contiene el texto original. De esta manera, estaremos generando una copia exacta del archivo previamente leído.
fs.writeFileSync('./assets/docs/Libro_1_copia.txt', libro_1); //* Crea un nuevo archivo con el mismo contenido que `libro_1`.

// ?Modificar archivo asignado a variable con fs.
// ?Un aspecto interesante respecto al uso de `fs` es que las modificaciones directas sobre archivos no se realizan editando el archivo en memoria y guardándolo automáticamente. En realidad, el flujo consiste en leer el archivo, modificar su contenido en una variable (por ejemplo utilizando métodos como `replace()`), y posteriormente escribir un nuevo archivo con el contenido modificado. Es decir, el proceso implica crear una nueva versión del archivo aplicando los cambios deseados. Esto ocurre porque el contenido leído se almacena como texto en memoria, y cualquier transformación se realiza sobre esa representación en memoria antes de volver a escribirla en el sistema.
console.log('--- Modificar archivo asignado a variable con fs. ---'); //* Encabezado del ejemplo de modificación.

const Libro_1_modificacion = libro_1.replace(/Libro 1/ig, 'libro 2'); //* Reemplaza todas las coincidencias de "Libro 1" por el nuevo texto.
fs.writeFileSync('./assets/docs/Libro_2.txt', Libro_1_modificacion); //* Crea un nuevo archivo aplicando la modificación realizada.
const libro_2 = fs.readFileSync('./assets/docs/Libro_2.txt', 'utf-8'); //* Lee el archivo especificado y guarda su contenido en la variable `libro_2`.
console.log(libro_2); //* Imprime en consola el contenido completo del archivo modificado.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// !Proyectos con Node.JS
// !Anteriormente vimos teoria, funciones basicas, ejecutamos archivos JS de forma individual con Node.js, lo cual es útil para scripts pequeños. A partir de ahora, daremos el salto a proyectos estructurados de Node.js, donde aprenderemos a organizar aplicaciones extensas utilizando módulos, dependencias de npm y una estructura de carpetas profesional, permitiéndonos crear sistemas escalables y no solo archivos sueltos.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Npm init & package.json
// ^Una de las partes más importantes del uso de Node.JS en proyectos es que este entorno no solo se ejecuta de manera aislada, sino que puede y debe integrarse formalmente dentro de proyectos estructurados. Para poder trabajar con Node.JS en un proyecto es necesario inicializarlo correctamente, y para ello se utiliza el comando `npm init`. Este comando prepara el entorno del proyecto para trabajar con Node, generando automáticamente el archivo `package.json`. Por otro lado, uno de los componentes clave en el trabajo con Node dentro de proyectos es precisamente el archivo `package.json`, el cual puede considerarse el corazón de Node dentro de nuestros proyectos, ya que funciona como un archivo de configuración central que registra metadatos (nombre, versión), gestiona las dependencias (librerías externas) y define los scripts que permiten ejecutar, probar o compilar la aplicación.

// ~Npm init.
// ~El comando `npm init` es un comando propio de Node Package Manager (de ahí la abreviatura npm). Este comando nos permite inicializar Node dentro de nuestros proyectos, generando el archivo `package.json`, el cual es indispensable para que el proyecto pueda trabajar formalmente con Node. La inicialización comúnmente realiza una serie de preguntas clave que ayudan a configurar correctamente el entorno. Aunque existe una versión más rápida como `npm init -y` que acepta valores por defecto automáticamente, es fundamental conocer la forma base interactiva, ya que esto nos permite comprender cada uno de los campos que conforman el archivo `package.json`. Este comando debe ejecutarse en la terminal y dentro del directorio raíz de nuestro proyecto. Las preguntas que realiza incluyen el nombre del proyecto, la versión, descripción, punto de entrada (entry point), comandos de prueba, repositorio de Git, palabras clave, autor, licencia y finalmente la confirmación para crear el archivo. Todos estos campos pueden modificarse o aceptarse con Enter para usar valores por defecto.
// PS D:\Trabajos\Cursos\Node-Js-Course\Course\scripts> npm init  //* Ejecuta el comando de inicialización en la raíz del proyecto.
// This utility will walk you through creating a package.json file. //* Indica que el asistente interactivo comenzará.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.

// package name: (scripts) node_js_course          //* Nombre del proyecto.
// version: (1.0.0)                                //* Versión inicial.
// description: Scripts and course section of the Node course. //* Descripción.
// entry point: (index.js)                         //* Punto de entrada principal.
// test command:                                   //* Comando para pruebas.
// git repository:                                 //* Repositorio Git.
// keywords:                                       //* Palabras clave.
// author: Chris Alegria                           //* Autor.
// license:(ISC)                                   //* Licencia.
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

// Is this OK? (yes) yes   //* Confirmación final para crear el archivo.

// ~Package.json.
// ~El archivo `package.json` es creado mediante `npm init`. Este archivo es absolutamente indispensable dentro de un proyecto Node, ya que funciona como el centro de control del mismo. En él se registran los metadatos del proyecto, se gestionan las dependencias externas y se definen scripts personalizados para ejecutar tareas específicas. Además, tecnologías como React, Angular o cualquier framework moderno de frontend funcionan sobre Node y también utilizan `package.json` como base de configuración. Este archivo no solo organiza dependencias, sino que permite estandarizar la ejecución del proyecto en cualquier entorno.
// ?Contenido de Package.json.
// ?Dentro de nuestro `package.json` encontraremos campos como el nombre del proyecto, versión, descripción, punto de entrada (main), sección de scripts, autor y licencia. También se pueden agregar dependencias, devDependencies, configuraciones adicionales y mucho más.
// {
//   "name": "node_js_course",                  //* Nombre del proyecto.
//   "version": "1.0.0",                        //* Versión actual.
//   "description": "Scripts and course section of the Node course.",
//   "main": "index.js",                        //* Archivo principal.
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "node index.js",
//     "start": "node index.js",
//     "build": "node index.js"
//   },
//   "author": "Chris Alegria",
//   "license": "ISC"
// }

// ?Seccion de scripts dentro de package.json.
// ?La sección de `scripts` dentro de `package.json` nos permite declarar comandos personalizados. Estos comandos pueden ejecutarse desde la terminal y realizar diferentes acciones dependiendo de cómo los configuremos. Por ejemplo, `"start"` suele utilizarse para ejecutar el punto de entrada principal del proyecto, `"dev"` suele emplearse durante el desarrollo, `"build"` puede preparar la aplicación para producción y `"test"` ejecuta pruebas automatizadas. Cada script se compone de dos partes: el lado izquierdo representa el nombre del comando, y el lado derecho representa lo que se ejecutará realmente. Generalmente estos comandos incluyen la palabra `node`, ya que será el motor que ejecute el archivo indicado.
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1", //* Script de prueba.
//     "dev": "node index.js",                                //* Script para desarrollo.
//     "start": "node index.js",                              //* Script principal.
//     "build": "node index.js"                               //* Script de construcción.
//   },

// ?Ejecución de scripts de package.json.
// ?Para ejecutar cualquier script definido en la sección `scripts`, es necesario utilizar el comando `npm run` seguido del nombre del script. El prefijo `npm` indica que estamos interactuando con Node Package Manager, y `run` indica que queremos ejecutar uno de los comandos definidos en el archivo `package.json`. Esto permite centralizar la ejecución del proyecto y estandarizar comandos para cualquier desarrollador que trabaje en él.
// npm run nombreComando  //* Ejecuta el script definido bajo el nombre especificado en la sección `scripts`.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Nodemon
// ^Nodemon es una paquetería o librería de terceros, lo que significa que no viene incluida por defecto con Node.JS, sino que debe instalarse manualmente. Su propósito principal es permitir la ejecución automática de nuestro código cada vez que detecta cambios en los archivos del proyecto. En lugar de ejecutar manualmente `node index.js` cada vez que guardamos un archivo, Nodemon actúa como un **listener**, es decir, un proceso que permanece escuchando cambios en el sistema de archivos. Cada vez que nosotros realizamos y guardamos modificaciones, Nodemon vuelve a ejecutar el script automáticamente. Esto mejora considerablemente la productividad durante el desarrollo. Al ser una librería externa, es necesario descargarla e instalarla, ya sea de manera global en el dispositivo o únicamente dentro de un proyecto específico. Al instalar Nodemon en un proyecto, se generarán archivos y carpetas como `package-lock.json` (que registra versiones exactas de dependencias para mantener consistencia) y la carpeta `node_modules` (donde se almacenan físicamente las dependencias instaladas).

// ~Descarga e instalacion de Nodemon.
// ~Como Nodemon es una paquetería de terceros, es necesario descargarla e instalarla en nuestro dispositivo utilizando Node Package Manager (npm). Existen dos maneras principales de hacerlo: instalarlo de forma global o instalarlo únicamente a nivel de proyecto. La diferencia radica en el alcance y control que deseemos tener sobre su uso.
// ?Instalar Nodemon a nivel global.
// ?La primera manera consiste en instalar Nodemon de manera global. Esto significa que Nodemon estará disponible en todo nuestro sistema y podrá utilizarse en cualquier proyecto Node sin necesidad de volver a instalarlo. Para lograr esto utilizamos el comando `npm install -g nodemon`. El parámetro `-g` indica que la instalación será global, agregando Nodemon al PATH del sistema, lo que nos permite ejecutar el comando `nodemon` directamente desde cualquier terminal sin configuraciones adicionales.
// npm install -g nodemon   //* Instala Nodemon de manera global en el sistema.

// ?Instalar Nodemon a nivel proyecto.
// ?La segunda manera es instalar Nodemon únicamente dentro de un proyecto específico. Esto implica que Nodemon solo estará disponible dentro de ese proyecto, brindando mayor control y evitando dependencias globales innecesarias. Para hacerlo utilizamos `npm install nodemon`. Sin embargo, es importante entender que este comando lo instalará como una dependencia normal, lo que significa que podría incluirse incluso en producción. Para evitar esto y usarlo únicamente durante el desarrollo, se recomienda instalarlo como dependencia de desarrollo usando `npm install --save-dev nodemon`.
// npm install nodemon              //* Instala Nodemon como dependencia normal.
// npm install --save-dev nodemon   //* Instala Nodemon como dependencia solo de desarrollo.

// ~Instalacion de Nodemon como devDependencies.
// ~Como se mencionó anteriormente, instalar Nodemon con `--save-dev` lo registrará dentro de la sección `devDependencies` en el archivo `package.json`. Esto significa que Nodemon solo será necesario durante el desarrollo y no se incluirá en entornos de producción cuando se instalen dependencias con `npm install --production`. La diferencia clave es que `dependencies` contiene librerías necesarias para que la aplicación funcione en producción, mientras que `devDependencies` contiene herramientas auxiliares como Nodemon, ESLint o Jest.
// "devDependencies": {
//    "nodemon": "^3.1.14"   //* Indica la versión instalada de Nodemon como dependencia de desarrollo.
//  }

// ~Dar de alta el uso de Nodemon en Package.json.
// ~Una vez que tenemos Nodemon instalado, debemos definir cómo lo ejecutaremos. Si fue instalado de manera global, podemos usar directamente `nodemon index.js` en la consola. Sin embargo, si fue instalado a nivel proyecto, no podremos ejecutarlo directamente desde la terminal, ya que no está en el PATH global. En ese caso, debemos declararlo dentro de la sección `scripts` de nuestro `package.json`. Esto permite que npm tenga acceso al ejecutable interno ubicado en `node_modules/.bin`. Posteriormente, ejecutaremos el comando usando `npm run nombreScript`.
// "scripts": {
//     "dev": "nodemon index.js",   //* Define un script llamado "dev" que ejecuta Nodemon sobre index.js.
//   },

// ~Ejecucion de listener con Nodemon.
// ~Una vez que ejecutamos Nodemon, ya sea mediante `npm run dev` o `nodemon index.js`, este iniciará su proceso de escucha. En la consola veremos información relacionada con la versión de Nodemon, los archivos que está monitoreando y el comando que ejecutará. Posteriormente, veremos la salida normal de nuestro programa (por ejemplo console.log). Finalmente, Nodemon mostrará un mensaje indicando que está esperando cambios. Mientras no cancelemos el proceso con `Ctrl + C`, cada vez que guardemos el archivo, Nodemon reiniciará automáticamente la aplicación.
// PS D:\Trabajos\Cursos\Node-Js-Course\Course\src> npm run dev        //* Ejecuta el script "dev" definido en package.json.

// > node_js_course@1.0.0 dev
// > nodemon index.js

// [nodemon] 3.1.14                               //* Versión de Nodemon.
// [nodemon] to restart at any time, enter `rs`   //* Permite reiniciar manualmente escribiendo rs.
// [nodemon] watching path(s): *.*                //* Indica los archivos que está monitoreando.
// [nodemon] watching extensions: js,mjs,cjs,json //* Extensiones que está observando.
// [nodemon] starting `node index.js`             //* Comando que ejecuta internamente.
// =========== Fyle sistem. ===========           //* Salida normal de nuestro programa.
// --- Asignacion de un archivo a variable con fs. ---
// Este es el Libro 1.
// --- Modificar archivo asignado a variable con fs. ---
// Este es el libro 2.
// [nodemon] clean exit - waiting for changes before restart  //* Indica que está esperando cambios para reiniciar.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Importaciones y exportaciones.
// ^Las importaciones y exportaciones dentro de Node.JS nos permiten, como su nombre lo indica, exportar e importar información entre distintos archivos. En este contexto podemos exportar prácticamente cualquier tipo de información: funciones, variables, objetos, clases, constantes y más. El uso correcto de exportaciones e importaciones nos permite distribuir nuestro código de manera estructurada y modular, por ejemplo, teniendo credenciales en un solo archivo y exportando únicamente la información necesaria hacia otros archivos, sin necesidad de declarar toda la información repetidamente. Esto mejora la organización, mantenibilidad y escalabilidad del proyecto. Además, es importante resaltar que los modelos modernos de exportación e importación (introducidos desde ES6) requieren realizar ajustes dentro de nuestro `package.json` para que Node.JS pueda admitir este nuevo sistema de módulos.
console.log('\n=========== Importaciones y exportaciones. ==========='); //* Muestra en consola el encabezado principal de la sección.

// ~Exportar informacion.
// ~Actualmente existen 2 maneras diferentes de exportar información en Node.JS. La primera es la forma tradicional (CommonJS), utilizando `module.exports` para exportar y `require()` para importar. La segunda es la forma moderna (ES Modules), utilizando la palabra reservada `export` para exportar y `import` para importar. Ambas cumplen la misma función, pero pertenecen a sistemas de módulos distintos.
// ?Forma antigua de exportacion "module.exports".
// ?El método antiguo para realizar exportaciones es mediante el uso de `module.exports = {}`. Internamente, Node.JS trabaja bajo el sistema CommonJS, donde cada archivo es tratado como un módulo. `module.exports` es el objeto que define qué parte del archivo será accesible desde otros archivos. Dentro de las llaves `{}` podemos incluir el nombre de variables, funciones u otros valores que deseamos exportar. Se utiliza `module.exports` porque cada archivo en Node está encapsulado dentro de un módulo, y esta propiedad es el punto de salida del mismo.
const variableAExportarFormaVieja = () => 'Esta funcion se exporto mediante la forma antigua.'; //* Función que será exportada usando CommonJS.

// module.exports = {
//     variableAExportarFormaVieja, //* Exporta la función dentro del objeto module.exports.
// }

// ?Forma nueva de exportar "export".
// ?La forma moderna de exportar en Node.JS es mediante el uso de la palabra reservada `export`. Esta sintaxis pertenece al sistema ES Modules (ESM). En este modelo simplemente se coloca la palabra `export` antes de la declaración de la función, variable o clase que queremos exportar. A diferencia del modelo antiguo, este sistema funciona bajo módulos ECMAScript, por lo que es obligatorio configurar el `package.json` para indicar que el proyecto utilizará `"type": "module"`. Sin esta configuración, Node no interpretará correctamente la sintaxis `import/export`.
export const variableAExportarFormaNueva = () => 'Esta funcion se exporto mediante la forma nueva.'; //* Exportación moderna usando ES Modules.

// ~Importar informacion.
// ~Cuando exportamos información en Node.JS, podemos recibirla en cualquier otro archivo mediante la importación. Importar significa traer información exportada desde otro módulo para poder utilizarla en el archivo actual. Al igual que con la exportación, existen dos formas distintas de importar: la tradicional con `require()` y la moderna con `import`.
// ?Forma antigua de importacion "require('')".
// ?La forma tradicional de importación es mediante el uso de `require('')`. Esta función recibe como argumento la ruta del archivo desde el cual queremos importar. Lo que devuelve `require()` es el objeto exportado mediante `module.exports`, por lo que debemos almacenarlo en una variable. Si no desestructuramos, tendremos que acceder a las propiedades mediante `nombreVariable.propiedad`. Para evitar esto, podemos usar desestructuración directamente en la asignación. Cabe resaltar que en el modelo CommonJS no es obligatorio colocar la extensión `.js` al especificar la ruta del archivo.
// const informacionImportada = require('./src/Importaciones y exportaciones'); //* Importa todo el objeto exportado.
// console.log(informacionImportada.nombre); //* Accede a una propiedad del objeto importado.

// const { nombre, edad } = require('./src/Importaciones y exportaciones'); //* Desestructura directamente las propiedades.
// console.log(edad); //* Usa la variable importada directamente.

// ?Forma nueva de importacion "import".
// ?La forma moderna de importación es mediante el uso de la palabra reservada `import`. En este caso, dentro de llaves `{}` debemos especificar exactamente el nombre de lo que queremos importar, respetando el mismo nombre con el que fue exportado. Después se utiliza la palabra `from` para indicar la ruta del archivo. A diferencia del modelo antiguo, en ES Modules sí es obligatorio especificar la extensión del archivo (por ejemplo `.js`). Este modelo es más estricto y estandarizado, alineado con el estándar ECMAScript.
console.log('--- Forma nueva de importacion "import". ---'); //* Encabezado visual en consola.

import { functionAImportar } from './src/Importaciones y exportaciones.js'; //* Importa función específica usando ES Modules.
console.log(functionAImportar()); //* Ejecuta la función importada.

// ~Especificacion de tipo de importaciones/exportaciones en Package.json.
// ~Para que Node.JS pueda reconocer si estamos usando el sistema moderno (ES Modules) o el tradicional (CommonJS), es necesario especificarlo dentro del `package.json`. Esto se hace agregando la propiedad `"type"`. Si especificamos `"module"`, estaremos habilitando la sintaxis moderna `import/export`. Si especificamos `"commonjs"` (o no colocamos nada, ya que es el valor por defecto), estaremos utilizando el modelo tradicional `require/module.exports`. Es importante entender que dentro de un mismo proyecto solo puede utilizarse uno de los dos sistemas de módulos de manera coherente.
//   "type": "module",   //* Habilita ES Modules (import/export).
//   "type": "commonjs", //* Usa el sistema tradicional CommonJS (require/module.exports).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Variables de entorno.
// ^Las variables de entorno son valores externos al código fuente que permiten configurar el comportamiento de una aplicación sin necesidad de modificar directamente el programa. En el contexto de Node.JS, las variables de entorno son fundamentales para gestionar configuraciones sensibles como puertos, credenciales, claves de API, nombres de bases de datos y otros parámetros que pueden cambiar dependiendo del entorno (desarrollo, pruebas o producción).
console.log('\n=========== Variables de entorno. ==========='); //* Imprime un encabezado visual en consola para separar esta sección del resto del programa.

// ~Process
// ~El objeto **process** es un objeto global propio de Node.JS que representa el proceso actual en ejecución. Este objeto proporciona información detallada sobre el entorno donde se está ejecutando la aplicación, incluyendo versiones de Node, arquitectura del sistema, directorios actuales, argumentos de ejecución y variables de entorno. Debido a que es un objeto global, no requiere importación y puede utilizarse directamente en cualquier archivo. Imprimirlo en consola nos mostrará una gran cantidad de información estructurada que describe el estado completo del proceso Node. Por esta razón, **process** es considerado uno de los pilares fundamentales para inspeccionar, depurar y comprender cómo se está ejecutando nuestra aplicación en tiempo real.
// ?Mirar informacion del objeto "process".
// ?Para visualizar la información contenida dentro del objeto `process`, basta con imprimirlo utilizando `console.log(process)`. Al hacerlo, podremos observar todas sus propiedades internas como `version`, `platform`, `arch`, `cwd()`, `argv`, `memoryUsage()`, entre muchas otras. Es importante entender que `process` funciona como una variable global que representa el entorno completo de ejecución.
// console.log(process); //* Descomentar esta línea mostrará en consola todo el objeto global del proceso actual.

// ?Visualizar las variables de entorno mediante process.
// ?Las variables de entorno dentro de Node.JS se encuentran específicamente en la propiedad `process.env`. La palabra `env` proviene de "environment", es decir, entorno. Cuando ejecutamos `console.log(process.env)`, obtenemos un objeto que contiene todas las variables de entorno disponibles en el sistema donde se está ejecutando la aplicación. Si deseamos consultar una variable específica, podemos acceder mediante notación de punto, por ejemplo `process.env.PORT`. Si la variable no existe, el resultado será `undefined`, lo cual nos permite validar configuraciones faltantes.
// console.log(process.env); //* Muestra todas las variables de entorno disponibles en el sistema.

// ?Declarar una variable de entorno con valor dentro de process.env.
// ?Aunque las variables de entorno suelen configurarse a nivel del sistema operativo o mediante archivos externos, también es posible declarar o modificar una variable directamente en `process.env` durante la ejecución del programa. Esto se realiza asignando un valor como si se tratara de una propiedad normal de un objeto. Es importante aclarar que este cambio solo afectará al proceso actual y no modificará permanentemente las variables del sistema.
console.log('--- Declarar una variable de entorno con valor dentro de process.env. ---'); //* Encabezado visual que indica el inicio del ejemplo.

console.log(
    process.env.variableEntornoACrear = 'Variable de entorno creada'
); //* Se crea dinámicamente una nueva variable dentro de process.env y se imprime su valor inmediatamente.

// ?Agregar valor secundario a variable de entorno en caso de no tener un valor.
// ?En muchos escenarios, una variable de entorno puede existir pero no tener un valor definido, o incluso no existir. Para manejar este tipo de casos, JavaScript ofrece el operador **nullish coalescing (`??`)**, el cual permite definir un valor alternativo únicamente cuando el valor original es `undefined` o `null`. Esto es especialmente útil para establecer configuraciones por defecto sin sobrescribir valores válidos como `0` o cadenas vacías.
console.log('--- Agregar valor secundario a variable de entorno en caso de no tener un valor. ---'); //* Encabezado visual del ejemplo de valor por defecto.

process.env.variableEntornoValorSecundario; //* Se intenta acceder a una variable que probablemente no existe.

console.log(
    process.env.variableEntornoValorSecundario ?? 
    'Valor secundario que almacena variable de entorno sin valor definido'
); //* Si la variable es undefined o null, se mostrará el texto alternativo definido después del operador ??.

// ~Importancia de las variables de entorno en process.
// ~La pregunta más importante es: ¿por qué es tan necesario utilizar `process.env` en aplicaciones backend? La respuesta principal es **seguridad y flexibilidad**. En desarrollo backend, uno de los principios más importantes es evitar el *hardcoding*, es decir, no escribir directamente en el código contraseñas, tokens, claves privadas o credenciales sensibles. Si estos datos se escriben directamente en el código, podrían subirse accidentalmente a repositorios como GitHub, comprometiendo la seguridad del sistema. Además, el uso de variables de entorno permite cambiar configuraciones (por ejemplo, conectarse a una base de datos de pruebas o de producción) sin modificar el código fuente. Esta práctica es estándar en servicios en la nube como Docker, AWS o Vercel, donde las configuraciones se gestionan mediante variables inyectadas al proceso en tiempo de ejecución.

// ~Archivos .env
// ~Dentro del desarrollo backend moderno, es altamente recomendable utilizar archivos `.env` para centralizar la configuración del entorno. Estos archivos permiten definir información sensible como contraseñas, puertos, nombres de bases de datos, usuarios, claves de API, entre otros. El uso de archivos `.env` aporta seguridad (evita hardcodear datos sensibles), flexibilidad (permite cambiar configuraciones dependiendo del entorno) y organización (centraliza todas las variables en un solo archivo). Además, es una buena práctica incluir el archivo `.env` dentro de `.gitignore` para evitar subirlo a repositorios públicos.
// ?Creacion de archivo .env.
// ?La creación de un archivo `.env` es sencilla: dentro del editor de código se crea un nuevo archivo y se le asigna el nombre `.env`. Este archivo no contiene código JavaScript ejecutable, sino únicamente declaraciones de variables en formato clave-valor. El punto inicial indica que es un archivo oculto en muchos sistemas.
// .env //* Nombre literal del archivo donde se almacenarán las variables de entorno.

// ?Estructura dentro de archivos .env.
// ?Los archivos `.env` siguen una estructura sencilla basada en el formato `NOMBRE_VARIABLE=valor`. A diferencia de JavaScript, no se utilizan palabras reservadas como `var`, `let` o `const`. Simplemente se declara el nombre de la variable, seguido del signo igual y el valor correspondiente. Es importante no dejar espacios innecesarios alrededor del signo `=` para evitar errores de interpretación por parte de librerías como dotenv.
// PORT=3030            //* Variable que normalmente define el puerto donde se ejecutará el servidor.
// DB_PASSWORD=2F-4d23  //* Contraseña de la base de datos (ejemplo ilustrativo).
// DB_NAME=RH_DB        //* Nombre de la base de datos.
// DB_USER=chris_alegria_r //* Usuario de la base de datos.

// ~Dotenv.
// ~Dotenv es una **paquetería o librería externa para Node.JS** cuya función principal es leer las variables definidas dentro de un archivo `.env` y cargarlas automáticamente dentro de `process.env`. Es importante entender que el archivo `.env` por sí solo no tiene ningún efecto en la ejecución del programa, ya que Node.JS no lo interpreta automáticamente. Si no utilizáramos Dotenv, tendríamos que declarar manualmente cada variable dentro de `process.env`, por ejemplo: `process.env.DB_USER = 'nombreBD'`. Dotenv automatiza este proceso, leyendo el archivo `.env` al iniciar la aplicación e inyectando sus valores dentro del entorno del proceso actual. Esto permite mantener el código limpio, seguro y desacoplado de configuraciones sensibles.
// ?Instalar Dotenv
// ?Al tratarse de una librería externa, Dotenv debe instalarse utilizando **Node Package Manager (npm)**. Existen dos formas principales de instalación: como dependencia normal (`dependencies`) o como dependencia de desarrollo (`devDependencies`). Si instalamos Dotenv con `npm install dotenv`, estará disponible incluso en producción. Si lo instalamos con `npm install --save-dev dotenv`, solo será utilizado durante el desarrollo. La decisión depende de la arquitectura del proyecto y del entorno donde se ejecutará la aplicación.
// npm install dotenv              //* Instala Dotenv como dependencia normal del proyecto.
// npm install --save-dev dotenv   //* Instala Dotenv únicamente como dependencia de desarrollo.

// ?Dotenv en Package.json.
// ?Una vez instalado Dotenv, este aparecerá registrado automáticamente dentro del archivo `package.json`. Dependiendo de cómo lo hayamos instalado, aparecerá dentro de la sección `"dependencies"` o `"devDependencies"`. Esto nos permite verificar que la instalación fue exitosa y también controlar qué librerías son necesarias en producción y cuáles solo durante el desarrollo.
// "dependencies": {
//    "dotenv": "^17.3.1"  //* Indica la versión instalada de Dotenv dentro del proyecto.
// }

// ?Uso de Dotenv.
// ?Para utilizar Dotenv correctamente es necesario realizar **dos pasos fundamentales**: primero, importar la función `config` desde la librería; segundo, ejecutar dicha función. La función `config()` es la encargada de leer el archivo `.env`, parsear su contenido y asignar automáticamente cada variable definida dentro de él a `process.env`. Es recomendable ejecutar `config()` al inicio del archivo principal del proyecto (por ejemplo, index.js o app.js) para asegurar que todas las variables estén disponibles antes de ser utilizadas.
console.log('--- Uso de Dotenv. ---'); //* Encabezado visual para indicar el inicio del ejemplo de uso.

import { config } from 'dotenv'; //* Se importa la función config desde la librería dotenv utilizando sintaxis ES Modules.
config(); //* Se ejecuta config(), lo que provoca que Dotenv lea el archivo .env y cargue sus variables en process.env.

// ?Ejecucion de Dotenv.
// ?Al ejecutar `config()`, Dotenv mostrará en consola un mensaje indicando que ha cargado correctamente las variables desde el archivo `.env`. Este mensaje incluye la versión de Dotenv y el número de variables inyectadas. A partir de este momento, cualquier variable definida dentro del archivo `.env` podrá accederse mediante `process.env.NOMBRE_VARIABLE`. Es importante recordar que siempre debemos acceder a las variables usando `process.env`, ya que ahí es donde Dotenv las registra.
console.log('--- Ejecucion de Dotenv. ---'); //* Encabezado visual que indica que ahora verificaremos el resultado.

// [dotenv@17.3.1] injecting env (1) from .env -- tip: ⚙️  suppress all logs with { quiet: true }
console.log(process.env.variableEnDotenv); //* Imprime en consola una variable previamente definida en el archivo .env.

// ~Env-var
// ~Env-var es otra librería externa para Node.JS cuya función principal es **validar y tipar las variables de entorno**. Si Dotenv se encarga de cargar las variables desde `.env` hacia `process.env`, Env-var se encarga de asegurarse de que esas variables tengan el formato correcto antes de utilizarlas. Esto es importante porque `process.env` siempre devuelve valores como strings (texto), incluso si representan números o booleanos. Env-var permite convertir esos valores al tipo adecuado y validar que existan, que no estén vacíos o que cumplan ciertas reglas. De esta manera, hacemos nuestro código más robusto y prevenimos errores en tiempo de ejecución.
// ?Instalar Env-var
// ?Env-var se instala de la misma forma que cualquier otra librería en Node.JS. Puede instalarse como dependencia normal o como dependencia de desarrollo, dependiendo de si será utilizada en producción o solo en el entorno de desarrollo.
// npm install env-var              //* Instala Env-var como dependencia normal.
// npm install --save-dev env-var   //* Instala Env-var como dependencia de desarrollo.

// ?Env-var en Package.json.
// ?Después de la instalación, Env-var aparecerá registrado dentro del archivo `package.json`, permitiendo verificar su correcta integración dentro del proyecto.
// "dependencies": {
//   "env-var": "^7.5.0"  //* Indica la versión instalada de Env-var.
// }

// ?Importar Env-var.
// ?Para utilizar Env-var es necesario importarlo en el archivo donde realizaremos las validaciones. Generalmente se importa como valor por defecto con el nombre `env`, lo cual nos permitirá acceder a sus métodos como `get()`, `required()`, `asString()`, `asInt()`, entre otros.
import env from 'env-var'; //* Importa la librería Env-var y la asigna a la variable env.

// ?Uso de Env-var.
// ?El uso de Env-var consiste en extraer una variable desde `process.env` utilizando el método `env.get('NOMBRE_VARIABLE')`. Este método recibe como parámetro el nombre exacto de la variable que queremos validar. Posteriormente, se pueden encadenar métodos mediante notación de punto (`.`) para aplicar validaciones o conversiones de tipo. Por ejemplo, `.required()` obliga a que la variable exista; `.asString()` la convierte explícitamente en string; `.asInt()` la convierte en número entero. Este patrón encadenado permite construir reglas claras y declarativas para validar configuraciones antes de usarlas en la aplicación.
console.log('--- Uso de Env-var. ---'); //* Encabezado visual del ejemplo de validación.

const varaibleQueExtraeMedianteEnvVar = env
    .get('variableEnEnvVar') //* Busca la variable dentro de process.env.
    .required() //* Indica que la variable es obligatoria; si no existe, el programa lanzará un error.
    .asString(); //* Convierte explícitamente el valor a tipo string.

console.log(varaibleQueExtraeMedianteEnvVar); //* Imprime en consola el valor validado y tipado correctamente.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Herramientas y bibliotecas para prácticas.
// ^Existen diferentes herramientas y bibliotecas que nos ayudan a construir aplicaciones en Node, las cuales implementaremos en nuestras prácticas del curso. Estas herramientas nos permiten estructurar mejor nuestros proyectos, manejar bases de datos, gestionar servidores y desplegar aplicaciones en la nube. Entre estas herramientas se encuentra Express, que sirve para el manejo de solicitudes HTTP y rutas, facilitando la creación de servidores y APIs de manera organizada y sencilla mediante el uso de middlewares. También está MongoDB, que utilizaremos como sistema de base de datos NoSQL para almacenar y gestionar la información de nuestras aplicaciones en formato de documentos. Además, trabajaremos con Mongoose, que nos permitirá definir esquemas y modelos para mantener una estructura clara y validada en nuestra base de datos. Para el despliegue y administración en la nube utilizaremos Railway, que simplifica la publicación de nuestras aplicaciones y la conexión con bases de datos. Finalmente, emplearemos Docker para crear entornos aislados mediante contenedores, lo que nos ayudará a ejecutar nuestras aplicaciones y bases de datos de forma consistente en cualquier sistema.

// ~Express.JS.
// ~Express.JS proporciona una capa de abstracción sobre el manejo de solicitudes HTTP y rutas, lo que permite a los desarrolladores definir fácilmente rutas, manejar solicitudes y respuestas, y configurar middlewares para agregar funcionalidades adicionales. Los desarrolladores pueden crear aplicaciones web de manera rápida y sencilla, enfocándose en la lógica de la aplicación en lugar de preocuparse por detalles de bajo nivel del manejo de solicitudes y respuestas HTTP. Express.JS es un paquete sumamente popular y casi siempre va de la mano con Node cuando se habla de armar una API REST.

// ~MongoDB.
// ~MongoDB es una base de datos que almacena datos en formato de documentos JSON, permitiendo una alta flexibilidad y escalabilidad. Es ampliamente utilizada en el desarrollo de aplicaciones modernas debido a su capacidad para manejar diferentes tipos de datos y su capacidad de escalar horizontalmente para manejar grandes volúmenes de información. Recordar que escalar horizontalmente es distribuir la información en múltiples servidores y verticalmente es aumentar los recursos de hardware.

// ~Mongoose.
// ~Mongoose es una biblioteca de modelado de datos para Node.JS que se utiliza comúnmente con MongoDB. Proporciona una forma sencilla y flexible de definir esquemas de datos, realizar validaciones y ejecutar operaciones en la base de datos. Con Mongoose, los desarrolladores pueden interactuar con la base de datos MongoDB de manera intuitiva y escribir código más limpio y legible al definir la estructura y las relaciones de los datos de la aplicación. Esto significa que la base de datos mantiene cierta consistencia, ya que Mongoose actúa como una especie de plantilla o esquema.

// ~Railway.
// ~Railway es una plataforma en la nube que simplifica el proceso de implementación y administración de aplicaciones web y API desarrolladas en Node.JS. Proporciona herramientas y servicios integrados, como alojamiento, bases de datos y gestión de entornos, lo que permite a los desarrolladores centrarse en la creación de sus aplicaciones sin tener que preocuparse por la configuración de la infraestructura.

// ~Docker.
// ~Docker es una plataforma que permite empaquetar, distribuir y ejecutar aplicaciones en contenedores. La ejecución de MongoDB en Docker implica la descarga de una imagen de MongoDB desde el registro de Docker y luego la creación y ejecución de un contenedor basado en esta imagen. Esto permite a los desarrolladores crear y gestionar fácilmente instancias de MongoDB aisladas y reproducibles en cualquier sistema que ejecute Docker, independientemente del entorno subyacente.

// ~Body-Parser.
// ~Body-Parser es un middleware de Express.JS que analiza los cuerpos de las solicitudes entrantes antes de que sean manejadas por sus controladores. Esto permite a los desarrolladores acceder fácilmente a los datos enviados en el cuerpo de una solicitud HTTP, ya sea en formato JSON, URL codificada o datos de texto sin procesar.
// ?¿Qué es un Middleware?
// ?Un Middleware en Node.JS es una función que se ejecuta entre la solicitud de un cliente y la respuesta del servidor, proporcionando una forma flexible de manejar diversas tareas y funcionalidades en una aplicación web o API.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Archivos JSON.
// ^Los archivos **JSON (JavaScript Object Notation)** son un formato de texto ligero e independiente del lenguaje de programación, diseñado específicamente para el **intercambio de datos estructurados**. Aunque su sintaxis está inspirada en los objetos de JavaScript, JSON no pertenece exclusivamente a JavaScript, ya que puede ser interpretado por prácticamente cualquier lenguaje moderno como Python, Java, C#, PHP, Go, entre otros. JSON es ampliamente utilizado en el desarrollo backend y frontend para transmitir información entre servidores y aplicaciones cliente (por ejemplo, navegadores). Su popularidad radica en que es **fácil de leer para humanos**, fácil de parsear para máquinas y extremadamente eficiente en APIs REST. En términos prácticos, JSON es el formato estándar mediante el cual un servidor envía datos a una aplicación y viceversa.

// ~Estructura.
// ~La estructura de un archivo JSON es muy similar a la de un **objeto o HashMap**, ya que se compone de pares clave-valor. Siempre comienza con llaves `{}` cuando representa un objeto, y puede contener arreglos `[]` en su interior. Las claves deben ir entre comillas dobles `"clave"` y los valores pueden ser strings, números, booleanos, arrays u otros objetos. Es importante entender que JSON es un formato estrictamente estructurado: no permite comentarios, no permite variables, y no permite comas finales. La anidación (objetos dentro de arreglos y arreglos dentro de objetos) permite representar estructuras complejas de datos de manera jerárquica.
// {
//     "profesores": [  //* Clave principal que contiene un arreglo de objetos profesor.
//         {
//             "nombre": "Sergie",  //* Propiedad tipo string.
//             "apellido": "Code",  //* Otra propiedad string.
//             "materias": [        //* Arreglo anidado que contiene objetos.
//                 {
//                     "nombre": "NodeJS dese cero" //* Objeto dentro del arreglo materias.
//                 },
//                 {
//                     "nombre": "ReactJS dese cero" //* Otro objeto dentro del arreglo.
//                 },
//                 {
//                     "nombre": "JavaScript desde cero" //* Otro objeto más.
//                 }
//             ]
//         }
//     ],

//     "estudiantes": [  //* Segunda clave principal con arreglo de estudiantes.
//         {
//             "nombre": "Christian",
//             "apellido": "Alegria",
//             "promedio": 8.2  //* Valor numérico (JSON distingue números sin comillas).
//         },
//         {
//             "nombre": "Alfonsina",
//             "apellido": "Storni",
//             "promedio": 10
//         }
//     ],
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Json-Server
// ^Json-server es una **paquetería externa de Node.JS** que permite convertir rápidamente un archivo JSON en una **API REST simulada**. Es decir, toma un archivo como `db.json` y lo expone automáticamente como endpoints accesibles desde `http://localhost`. Esto es extremadamente útil durante el desarrollo frontend, ya que permite simular un backend sin necesidad de programar un servidor real. Json-server crea automáticamente rutas GET, POST, PUT, PATCH y DELETE basadas en la estructura del archivo JSON.

// ~Instalar json-server
// ~Al tratarse de una librería externa, json-server debe instalarse utilizando **npm**. Puede instalarse como dependencia normal si se utilizará en producción, o como dependencia de desarrollo si solo se usará para pruebas locales. Generalmente se instala como devDependency porque su propósito principal es simular APIs durante el desarrollo.
// npm install json-server              //* Instala json-server como dependencia normal del proyecto.
// npm install --save-dev json-server   //* Instala json-server como dependencia solo de desarrollo.

// ~Json-server en Package.json.
// ~Después de la instalación, json-server aparecerá dentro del archivo `package.json`. Esto nos permite verificar que la librería está correctamente integrada y también nos ayuda a controlar las versiones utilizadas dentro del proyecto.
// "dependencies": {
//    "json-server": "^1.0.0-beta.10"  //* Indica la versión instalada dentro del proyecto.
// }

// ~Uso de Json-server.
// ~Para utilizar json-server correctamente, debemos ejecutar el comando `json-server --watch nombreArchivo.json`. El parámetro `--watch` indica que el servidor debe monitorear cambios en el archivo JSON y actualizar automáticamente la API cuando el archivo se modifique. Este comando puede declararse dentro de la sección `"scripts"` del `package.json` para facilitar su ejecución mediante `npm run`.
// "start": "json-server --watch db.json"  //* Script personalizado que ejecuta json-server usando el archivo db.json.

// ~Ejecucion de Json-server.
// ~Una vez ejecutado el script con `npm run start`, json-server iniciará un servidor local (generalmente en el puerto 3000). A partir de ese momento, cada clave principal del archivo JSON se convierte automáticamente en un endpoint accesible. Por ejemplo, si en el JSON existe la clave `"estudiantes"`, podremos acceder a `http://localhost:3000/estudiantes`. Además, json-server mostrará en consola información detallada sobre las rutas disponibles y el puerto activo.
// PS D:\Trabajos\Cursos\Node-Js-Course\Projects\Project_1> npm run start  //* Se ejecuta el script start definido en package.json.

// > project_1_json_server@1.0.0 start
// > json-server --watch db.json

// --watch/-w can be omitted, JSON Server 1+ watches for file changes by default  //* Indica que el monitoreo es automático.
// JSON Server started on PORT :3000  //* Confirma que el servidor se ejecuta en el puerto 3000.
// Press CTRL-C to stop               //* Indica cómo detener el servidor.
// Watching db.json...                //* Confirma que está observando cambios en el archivo JSON.

// ♡( ◡‿◡ )

// Index:
// http://localhost:3000/  //* URL base donde se expone la API.

// Static files:
// Serving ./public        //* Carpeta pública que puede servir archivos estáticos si existe.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^PostMan.
// ^PostMan es una plataforma para el desarrollo, prueba, documentación y gestión de APIs. LA cual es comunmente usada para el testeo de APIs, donde en esta se mostrara una especie de barra de navegacion donde podremos colocar nuestra API y utilizar un metodo para enviar, extraer, modificar o eliminar informacion, provando de esta manera que nuestras APIs con sus endopoints estan en correcto funcionamiento. PostMan también permite automatizar pruebas, guardar colecciones, compartir ambientes (environments) y documentar endpoints para equipos. Es una herramienta clave en el flujo de desarrollo backend/frontend.

// ~Metodos.
// ~Los metodos tanto dentro como fuera de PostMan son metodos que nos permiten realizar y manejar informacion dentro de Endpoints, APIS y bses de datos, los cuales dichos metodos nos permiten extraer, modificar, eliminar y agregar informacion, siendo de esta manera formas de trabajar con dicha informacion por lo cual se cuentan con los metodos principales POST, PUT, PATCH, DELETE y mas.
// ?Metodos GET.
// ?Los metodos GET tanto dentro de PostMan como en cualquier ambito de programacion, consta en un metodo el cual nos permite extraer informacion, en este caso dentro de PostMan una vez ingresado el endpoint incluso siendo una simulada, podremos seleccionar el metodo Get n la parte izquierda de donde ingresamos el endpoint, donde si precionamos el boton de la parte derecha SEND de donde se ingreso el endpoint, si esta todo correcto nos retornara la informacion que solicitamos.
// GET   http://localhost:3000/profesores    SEND  //* Ejemplo de petición GET a un endpoint expuesto por json-server.
// [
//     {
//         "nombre": "Sergie",
//         "apellido": "Code",
//         "materias": [
//             {
//                 "nombre": "NodeJS dese cero"
//             },
//             {
//                 "nombre": "ReactJS dese cero"
//             },
//             {
//                 "nombre": "JavaScript desde cero"
//             }
//         ],
//         "id": "343a"
//     }
// ]
// *Explicacion:* GET se usa para **leer/obtener** recursos. No debe tener efectos secundarios (no modifica datos). En PostMan suele devolver un cuerpo (body) con datos y un código HTTP (ej. 200).

// ?Metodos POST.
// ?Los metodos Post son metodos que nos permiten insertar nueva informacion, tanto en PostMan como en muchisimos lugares mas. Por lo que a diferencia del metodo GET que solamente extrae informacion y no se requiere ninguna otra cosa mas que el endpoint, tanto el metodo POST, PUT, PATCH y DELETE se nos solicitara informacion adicional para poder realizar las acciones. En el caso de POST, dentro de PostMan tendremos que seleccionar en la parte izquierda de la barra donde se ingresa el endpoint el metodo POST, ademas de que en la parte inferior de dicha seccion el endpoint, metodo y envio de metodo encontraremos otra mini seccion en la cual deberemos escoger el apartado BODY, ya que el metodo POST, tendremos que enviar un cuerpo de peticion para insertar la informacion, posteriormente de igual manera en la parte inferior de donde se ubica Body deberemos seleccionar la opcion de Raw y en el select deberemos escojer JSON, esto debido a que cuando queremos mandar o realizar un metodo POST, como tenemos que insertar informacion tendremos que mandar un cuerpo dentro de la solicitud, donde en nuestro caso ese cuerpo sera en formato JSON, donde esta opcion nos desglosara una ventana para poder escribir en JSON lo que se insertara. Por lo que al darle enviar simplemente nos retornara el mismo codigo que escribimos indicando que asi se visualiza donde realizamos el POST indicando que se realizo correctamente.
// POST   http://localhost:3000/profesores    SEND  //* Ejemplo: petición POST para crear un nuevo recurso.
// Docs   Params   Authorization   Headers   **BODY**   Scripts   Settings
// none   form-data   x-www-form-urlencoded   **raw**   binary   GraphQL   **JSON ▼**   
// {
//     "nombre": "Mario",
//     "apellido": "Perez",
//     "materias": [
//         {
//             "nombre": "HTML dese cero"
//         },
//         {
//             "nombre": "CSS dese cero"
//         },
//         {
//             "nombre": "JavaScript desde cero"
//         }
//     ]
// }
// *Explicacion:* POST se usa para **crear** recursos. En PostMan debes enviar el body (normalmente JSON) y los headers adecuados, p. ej. `Content-Type: application/json`. El servidor suele responder con 201 Created si se creó correctamente.

// ?Metodos PUT.
// ?El metodo PUT consta en **actualizar o reemplazar completamente un recurso existente** dentro del servidor. Es decir, cuando utilizamos PUT estamos enviando una nueva representación completa del recurso que ya existe, sustituyendo la anterior. Por lo que en PostMan para poder ejecutar este metodo correctamente debemos cumplir 2 caracteristicas principales. La primera es contar con el **ID del recurso que vamos a actualizar**, ya que dentro de bases de datos, APIs REST y herramientas como PostMan, el ID es un identificador único y fundamental en metodos como PUT, DELETE y PATCH, debido a que permite que el servidor sepa exactamente sobre qué registro aplicar los cambios. Sin el ID no sería posible identificar el recurso específico a modificar. La segunda caracteristica es que debemos enviar un cuerpo (body) en formato JSON, similar a como lo hacemos en POST, pero en este caso enviando la representación completa del objeto actualizado. Por lo que para ello dentro de nuestro endpoint agregaremos una barra `/` y dos puntos `:` seguido de `id`, esto para especificar en la ruta que la solicitud buscará el recurso correspondiente por su identificador único. Posteriormente nos iremos a la sección Params y dentro de Path Variables ingresaremos el valor real del ID en la tabla. Después deberemos dirigirnos nuevamente a Body, seleccionar raw y escoger el formato JSON, y dentro ingresaremos toda la informacion actualizada del recurso. OJO: Al menos dentro de json-server o implementaciones simples, tendremos que mandar absolutamente todo el objeto nuevamente, ya que si omitimos alguna propiedad, esta puede sobrescribirse como null o incluso eliminarse dependiendo del comportamiento del servidor. Por ende hay que ser muy precavidos al usar PUT, ya que estamos reemplazando completamente el recurso, no solo una parte del mismo.
// PASO 1.
// PUT   http://localhost:3000/profesores/:id    SEND  //* PUT requiere identificar explícitamente el recurso por ID dentro de la URL.
// Docs   **Params**   Authorization   Headers   Body   Scripts   Settings
// Path Variables
// ---------------------------------------------------------------------------------------------------------------------
// |       | Key                       | Value                       | Description                       |  Bulk Edit  |  
// ---------------------------------------------------------------------------------------------------------------------
// |       | id                        | e8fd    <-El ID             |                                   |             |
// ---------------------------------------------------------------------------------------------------------------------
// *En este paso se especifica el ID real del recurso que será reemplazado, permitiendo que el servidor identifique correctamente el registro.*



// PASO 2.
// PUT   http://localhost:3000/profesores/:id    SEND  //* Se mantiene el mismo endpoint con el ID definido.
// Docs   Params   Authorization   Headers   **BODY**   Scripts   Settings
// none   form-data   x-www-form-urlencoded   **raw**   binary   GraphQL   **JSON ▼**   //* Se selecciona raw y formato JSON para envio cuerpo.
// {
//     "id": "e8fd",  //* Se envía nuevamente el ID dentro del objeto (dependiendo de la API puede ser requerido).
//     "nombre": "Mario",
//     "apellido": "Sanchez",
//     "materias": [
//         {
//             "nombre": "HTML dese cero"
//         },
//         {
//             "nombre": "CSS dese cero"
//         },
//         {
//             "nombre": "JavaScript desde cero"
//         }
//     ]
// }
// *Explicacion:* PUT **reemplaza completamente el recurso existente**. Esto significa que el servidor tomará el objeto enviado y lo establecerá como la nueva versión oficial del recurso. Si el servidor interpreta estrictamente el estándar REST, cualquier campo omitido podría eliminarse o establecerse como null. Por ello, PUT debe utilizarse cuando tengamos la representación completa y definitiva del recurso que deseamos dejar almacenado en el servidor.

// ?Metodos PATCH.
// ?El metodo PATCH es un metodo HTTP que permite **actualizar parcialmente un recurso existente**, es decir, modificar únicamente uno o varios campos específicos sin necesidad de reemplazar todo el objeto. A diferencia de PUT, PATCH no requiere que enviemos el recurso completo, sino solamente las propiedades que deseamos cambiar. Esto lo hace más eficiente y menos propenso a errores cuando solo necesitamos modificar pequeños fragmentos de información. Para utilizar PATCH correctamente, al igual que con PUT, necesitaremos el ID del recurso que queremos modificar. Por lo tanto, deberemos agregar `/:id` al final del endpoint y posteriormente dirigirnos a la sección Params para definir el valor real del ID en Path Variables. Después nos iremos a Body, seleccionaremos raw y formato JSON, pero esta vez únicamente incluiremos los campos que deseamos modificar, por ejemplo `"nombre": "nuevoNombre"`.

// PASO 1.
// PATCH   http://localhost:3000/profesores/:id    SEND  //* PATCH también requiere identificar el recurso por su ID en la URL.
// Docs   **Params**   Authorization   Headers   Body   Scripts   Settings
// Path Variables
// ---------------------------------------------------------------------------------------------------------------------
// |       | Key                       | Value                       | Description                       |  Bulk Edit  |  
// ---------------------------------------------------------------------------------------------------------------------
// |       | id                        | e8fd    <-El ID             |                                   |             |
// ---------------------------------------------------------------------------------------------------------------------
// *Se define el ID específico del recurso que recibirá la actualización parcial.*


// PASO 2.
// PATCH   http://localhost:3000/profesores/:id    SEND  //* Se ejecuta la petición PATCH sobre el recurso identificado.
// Docs   Params   Authorization   Headers   **BODY**   Scripts   Settings
// none   form-data   x-www-form-urlencoded   **raw**   binary   GraphQL   **JSON ▼**   //* Se selecciona raw y JSON como formato del cuerpo.
// {
//     "nombre": "Pacho"  //* Únicamente se envía el campo que se desea modificar.
// }
// *Explicacion:* PATCH aplica **cambios parciales** al recurso existente. En lugar de reemplazar el objeto completo, el servidor realiza un merge (combinación) entre los datos actuales y los nuevos valores enviados. Es ideal cuando solo se necesita modificar uno o pocos campos específicos, reduciendo el riesgo de sobrescribir información que no deseamos alterar.

// ?Metodos DELETE.
// ?El metodo DELETE nos permite eliminar un dato completo, por lo que imaginemos que tenemos a un profesor con sus informacion, el DELETE nos permitira eliminar dicho profesor mediante su ID, borrando de esas misma manera toda su informacion. Para ello lo principal sera al igual que los metodos PATCH y PUT en nuestro endpoint agregar /:id y en la tabla dentro de Params agregar dicho id de quien queremos eliminar. Posteriormente lo unico que deberemos hacer es ejecutar SEND ya que lo unico que se require para eliminar un dato es el ID.
// DELETE   http://localhost:3000/profesores/:id    SEND   //* DELETE requiere identificar el recurso por ID en la URL.
// Docs   **Params**   Authorization   Headers   Body   Scripts   Settings
// Path Variables
// ---------------------------------------------------------------------------------------------------------------------
// |       | Key                       | Value                       | Description                       |  Bulk Edit  |  
// ---------------------------------------------------------------------------------------------------------------------
// |       | id                        | e8fd    <-El ID             |                                   |             |
// ---------------------------------------------------------------------------------------------------------------------
// *Explicacion:* DELETE borra el recurso identificado por la ruta. La respuesta puede ser 200 con el recurso eliminado, 204 No Content o 404 si no existía.

// ~Codigos de metodos.
// ~Comunmente cuando se ejecutan métodos HTTP, tanto en PostMan como en cualquier cliente o servidor web, el sistema devuelve ciertos **códigos numéricos conocidos como códigos de estado HTTP (HTTP Status Codes)**. Estos códigos representan el resultado de la solicitud realizada y permiten identificar rápidamente si la acción fue exitosa, si hubo un error del cliente o si ocurrió un problema en el servidor. En otras palabras, estos números funcionan como indicadores del estado de la operación. Por ejemplo, al realizar un método POST, el servidor puede devolver un código que simboliza que el recurso fue creado correctamente, o bien un código que indique que hubo un error en la solicitud. Comprender estos códigos es fundamental para interpretar correctamente el comportamiento de una API y depurar errores durante el desarrollo.
//* 200: OK – La solicitud fue exitosa y el servidor devuelve el recurso modificado.
//* 201: Created – (Común en POST) El recurso se ha creado con éxito.
//* 204: No Content – La acción fue exitosa, pero el servidor no devuelve ningún contenido (común en PUT o DELETE).
//* 400: Bad Request – El servidor no entiende la solicitud (error en la sintaxis del JSON o faltan datos).
//* 401: Unauthorized – No tienes permiso para realizar esta acción (falta el Token o API Key).
//* 403: Forbidden – Estás autenticado, pero no tienes nivel de acceso para modificar ese recurso.
//* 404: Not Found – El recurso que intentas actualizar con PUT o PATCH no existe.
//* 405: Method Not Allowed – El método usado (ej. PATCH) no está permitido en esa URL específica.
//* 409: Conflict – Hay un conflicto con el estado actual del recurso (ej. intentas crear un usuario que ya existe).
//* 422: Unprocessable Entity – Los datos son correctos gramaticalmente, pero contienen errores semánticos (ej. un email con formato inválido).
//* 500: Internal Server Error – El servidor falló al intentar procesar la actualización.
// *Nota adicional:* En PostMan puedes ver estos códigos en la barra de respuesta; además revisa los headers de respuesta (Content-Type, Location, Retry-After, etc.) para entender mejor el resultado.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Codigos HTTP.
// ^Los codigos HTTP son un conjunto de codigos de estado estandar que se utilizan para comunicar el resultado de una solicitud realizada por un cliente a un servidor web. Estos codigos son numeros de tres digitos que proporcionan informacion sobre el estado de la solicitud realizada y se dividen en cinco categorias principales.

// ~Categorias de codigos HTTP.
// ~Los codigos HTTP estan divididos en cinco categorias las cuales repserentan por ejemplo respuestas informativas, respuestas, exitosas, redireccion, error de cliente, error de servidro. Estos codigos se agrupan en dichas numeraciones para que sea mas sencillo la ubicacion de los tipos de codigos.
// ?Respuestas informativas: 1XX.
// ?Indican que la solicitud fue recibida y esta siendo procesada.

// ?Respuestas exitosas: 2XX.
// ?Indican que la solicitud fue recibida, entendida y aceptada exitosamente.

// ?Redireccion: 3XX.
// ?Indican que el cliente necesita realizar una accion adicional para completar la solicitud.

// ?Error del cliente: 4XX.
// ?Indica que hay un error en la solicitud realizada por el cliente, como una URL incorrecta o falta de permisos.

// ?Error del servidor: 5XX.
// ?Indica que hay un error en el servidor al intentar procesar la solicitud correctamente.

// ~Los codigos HTTP mas utilizados.
// ~Existen codigos HTTP, los cuales son los mas usados, entre estos claramente se incluyen un poco de todos, ya que suelen ser muy frecuentes tanto en terminos de exito como de errores.
// ?200: OK.
// ?201: Created.
// ?204: No content.
// ?301: Permanent redirect.
// ?302: Found.
// ?304: Not modified.
// ?400: Bad request.
// ?401: Unauthorized.
// ?403: Forbiden.
// ?404: Not found.
// ?500: Internal server error.
// ?503: Service unavaliable.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Express.JS.
// ^Express.JS es una **librería externa para Node.JS** la cual nos permite y facilita el desarrollo de **servidores web (Web Servers)** y **servicios HTTP (HTTP Services)**. Express proporciona una capa de abstracción sobre el manejo nativo de solicitudes HTTP que ofrece Node.JS, simplificando enormemente tareas como el manejo de rutas, el procesamiento de peticiones y respuestas, y la integración de middlewares. Gracias a esta capa de abstracción, los desarrolladores pueden enfocarse en la lógica de la aplicación sin tener que trabajar directamente con APIs de bajo nivel del módulo `http` de Node. Express permite definir rutas de manera sencilla, controlar respuestas del servidor, procesar datos enviados por el cliente y estructurar aplicaciones backend de forma modular. Debido a su simplicidad, flexibilidad y gran ecosistema de middlewares, Express se ha convertido en uno de los frameworks más populares del ecosistema Node.JS y es ampliamente utilizado para construir **APIs REST**, aplicaciones web y microservicios.

// ~Instalacion y declaracion de Express.JS.
// ~Al ser Express.JS una librería externa, esta requiere varios pasos antes de poder ser utilizada dentro de nuestros proyectos. De manera similar a otras librerías que hemos visto anteriormente, el primer paso consiste en instalar el paquete utilizando **Node Package Manager (npm)**. Posteriormente debemos verificar que la librería haya sido registrada dentro de nuestro archivo `package.json`, ya que este archivo actúa como el centro de control de dependencias de nuestro proyecto. Finalmente, una vez instalada la librería, será necesario **importarla dentro de los archivos JavaScript** donde deseemos utilizar Express para poder acceder a todas sus funcionalidades.
// ?Instalar Express.JS
// ?Al tratarse de una librería externa, Express debe instalarse utilizando **npm**. Puede instalarse como dependencia normal (`dependencies`) si será utilizada en producción dentro de nuestra aplicación, o como dependencia de desarrollo (`devDependencies`) si únicamente se utilizará durante el desarrollo o pruebas. En la mayoría de los proyectos backend reales, Express se instala como dependencia normal, ya que es el framework que ejecuta el servidor principal de la aplicación.
// npm install express              //* Instala Express.JS como dependencia principal del proyecto.
// npm install --save-dev express   //* Instala Express.JS únicamente como dependencia de desarrollo.

// ?Express en Package.json.
// ?Después de realizar la instalación, Express aparecerá automáticamente dentro del archivo `package.json`. Esto nos permite confirmar que la librería fue instalada correctamente y también nos ayuda a mantener control sobre las versiones utilizadas dentro del proyecto. Además, cuando otro desarrollador clone el proyecto, npm podrá instalar automáticamente esta dependencia al ejecutar `npm install`.
// "dependencies": {
//     "express": "^5.2.1"  //* Indica la versión instalada de Express dentro del proyecto.
// }

// ~Importacion de libreria Express a nuestros archivos a implementarlo.
// ~Para poder utilizar Express dentro de nuestros archivos JavaScript es necesario importar la librería en cada archivo donde vayamos a utilizarla. Node.JS permite importar librerías de dos maneras distintas dependiendo del sistema de módulos que utilicemos: **CommonJS** (la forma tradicional usando `require`) o **ES Modules** (la forma moderna usando `import`). El método que utilicemos dependerá de la configuración establecida dentro del archivo `package.json`, específicamente en la propiedad `"type"`.
// ?Forma antigua de importacion "require('')".
// ?La forma tradicional de importar librerías en Node.JS es utilizando la función `require()`. Esta función carga el módulo especificado y devuelve el contenido exportado por dicho módulo. Generalmente se almacena en una variable constante para poder utilizar sus funcionalidades posteriormente dentro del archivo. Este sistema pertenece al modelo **CommonJS**, el cual fue el estándar de Node durante muchos años.
// const express = require('express'); //* Importa la librería express utilizando el sistema de módulos CommonJS.

// ?Forma nueva de importacion "import".
// ?La forma moderna de importar librerías es mediante la palabra reservada `import`, perteneciente al sistema **ES Modules (ESM)**. Este sistema es el estándar oficial del lenguaje JavaScript moderno y es el recomendado actualmente. En este caso se utiliza la sintaxis `import nombre from 'modulo'`, donde `nombre` será la variable que representará la librería dentro del archivo. Para poder utilizar esta sintaxis en Node.JS es necesario configurar `"type": "module"` dentro del archivo `package.json`.
import express from 'express'; //* Importa la librería express utilizando el sistema moderno ES Modules.

// ~Uso de app con Express();
// ~El uso de Express.js dentro de la creación de servidores suele utilizar una variable llamada **app**, la cual representa la **instancia principal de nuestra aplicación Express**. Esta variable se crea ejecutando la función express() y almacenando su resultado dentro de una constante, por ejemplo `const app = express()`. Al ejecutar express(), internamente Express inicializa el servidor y nos devuelve un objeto que contiene múltiples métodos y herramientas para manejar rutas, middlewares y respuestas HTTP. De esta manera, al guardar el resultado en la variable app, estamos creando una especie de **controlador central de nuestro servidor**, desde donde podremos definir rutas, registrar middlewares, manejar peticiones y configurar el comportamiento de la aplicación. En otras palabras, podríamos decir que cuando declaramos una variable que ejecuta `express()`, estamos **activando Express y todas sus funcionalidades**, permitiendo acceder a ellas mediante notación de punto. Por ejemplo, utilizando `app.get()`, `app.post()` o `app.use()` podemos acceder a las distintas funciones que Express expone para trabajar con solicitudes HTTP.
const app = express(); //* Se crea la instancia principal de Express y se almacena en la variable `app`, la cual será utilizada para configurar el servidor.

// ~Rutas con Express.
// ~Sabemos que un servidor técnicamente puede ejecutarse sin rutas definidas, sin embargo un servidor sin rutas resulta muy poco útil, ya que no tendría manera de responder de forma específica a las solicitudes del cliente. Por esta razón, las rutas son uno de los elementos más importantes dentro de Express. Las rutas permiten definir **qué debe hacer el servidor cuando recibe una petición en una URL específica**. En conjunto con el listener del servidor, las rutas actúan como un sistema de control que decide qué lógica ejecutar dependiendo del endpoint solicitado por el cliente. En Express, las rutas se definen mediante métodos HTTP y normalmente incluyen varios elementos estructurales como el método, la ruta (path), posibles middlewares y finalmente un handler que contiene la lógica que se ejecutará.
// ?Como declarar una ruta en Express.
// ?Las rutas en Express.JS siguen una estructura bastante clara y definida. Generalmente se escriben utilizando el patrón `app.metodo('/ruta', middlewares, handler)`. En esta estructura encontramos cuatro elementos principales: **el método HTTP**, **el path o ruta**, **los middlewares (opcionales)** y **el handler**. Cada una de estas partes cumple un rol específico dentro del flujo de una petición HTTP. Los middlewares son opcionales, pero el método, la ruta y el handler son necesarios para que la ruta pueda ejecutarse correctamente. Incluso cuando no utilizamos middlewares, debemos respetar la estructura básica de la función.
// app.metodo('/nombreRuta', nombreMiddleware, handler);  //* Estructura general para declarar rutas en Express.

// ?Metodos en rutas.
// ?Como vimos anteriormente, existen diferentes métodos HTTP que podemos utilizar al momento de crear rutas. Estos métodos nos ayudan a identificar **qué tipo de acción está solicitando el cliente al servidor**. Por ejemplo, si el frontend necesita obtener información de una base de datos, generalmente utilizará el método GET. Aunque técnicamente no estamos haciendo un GET directamente a la base de datos, el método GET representa conceptualmente que queremos **leer o extraer información**. De esta forma, los métodos HTTP no solo sirven para ejecutar acciones, sino también para estructurar nuestras APIs de forma clara y predecible. Cada método indica el propósito de la ruta y permite que el backend interprete correctamente la intención de la solicitud enviada por el cliente.
// GET    → pedir datos (lectura de información)
// POST   → enviar datos nuevos (crear recursos)
// PUT    → actualizar recursos existentes
// DELETE → eliminar recursos

// ?Handlers en rutas.
// ?Los handlers dentro de las rutas son funciones que se ejecutan cuando una solicitud coincide con la ruta definida. Estos handlers se declaran después de los middlewares (en caso de que existan) y normalmente reciben dos parámetros principales: `req` y `res`, que representan **request** y **response**. El objeto `req` contiene toda la información relacionada con la petición que realizó el cliente, como parámetros de la URL, datos enviados en el body, headers, query params, entre otros. Por otro lado, el objeto `res` representa la respuesta que el servidor enviará al cliente. Dentro del handler es donde escribiremos toda la lógica de nuestra ruta, procesaremos datos si es necesario y finalmente enviaremos una respuesta al cliente utilizando métodos como `res.send()`, `res.json()` o `res.status()`. Por esta razón, el handler es considerado el **núcleo lógico de cada endpoint** dentro de nuestra API.
app.get('/ruta', (req, res) => { //* Ejemplo de una ruta GET que ejecuta un handler cuando se accede a /ruta.
}); // *Cierre de declaracion de ruta.

// ?Rutas por defecto
// ?Existe una forma de indicar a nuestro servidor que ejecute ciertas acciones cuando un usuario intenta acceder a una ruta que no existe dentro de nuestra aplicación. Esto se conoce comúnmente como **ruta por defecto** o **ruta catch-all**, y se utiliza para manejar errores como páginas 404 (Not Found). Para lograr esto podemos definir una ruta que capture cualquier patrón de URL utilizando una expresión regular como `/.*/`. Esto significa que cualquier solicitud que no coincida con las rutas previamente definidas será capturada por esta ruta. De esta manera podemos mostrar un mensaje, devolver un error 404 o redirigir al usuario a una página específica.
app.get(/.*/, () => { //* Ruta catch-all que captura cualquier endpoint no definido previamente.
    console.log('Esta ruta no existe o no esta disponible'); //* Mensaje que se ejecutará cuando se acceda a una ruta inexistente.
}); // *Cierre de declaracion de ruta.
// ~Listenners en Express.
// ~Ahora bien, ya tenemos lo que son las rutas, middlewares y otros elementos fundamentales de Express. Sin embargo, para que todo esto funcione realmente es necesario **poner el servidor en ejecución**, y ahí es donde entran los listeners. Un listener en Express es el encargado de **iniciar o levantar el servidor**, permitiendo que la aplicación comience a escuchar solicitudes HTTP provenientes de los clientes (navegadores, aplicaciones frontend, herramientas como Postman, etc.). Su función principal es indicar en qué **puerto de red** se ejecutará el servidor para que pueda recibir peticiones. Para esto se utiliza el método `app.listen(puerto, handler)`. Su estructura es relativamente sencilla: recibe como primer parámetro el puerto en el que se ejecutará el servidor y como segundo parámetro una función (handler) que se ejecuta cuando el servidor se inicia correctamente. Es importante entender que dentro del handler del listener **no es necesario declarar las rutas**, ya que las rutas previamente declaradas con `app.get`, `app.post`, etc., quedan automáticamente registradas en la instancia de Express y el listener simplemente las pone en funcionamiento. No obstante, dentro del handler del listener es común ejecutar acciones como mostrar mensajes en consola indicando que el servidor está activo.
// app.listen(3000, () => { // *Se ejecuta el servidor mediante el listener en el puerto 3000.
//     console.log(`Escuchando en el puerto: ${port}`)  //* Mensaje informativo que indica que el servidor ya está escuchando peticiones.
// }); // *Cierre de declaracion del listener.

// ~Middlewares.
// ~Un Middleware en Express es una función que actúa como **intermediario dentro del ciclo de vida de una solicitud HTTP**, ejecutándose entre la petición enviada por el cliente y la respuesta final enviada por el servidor. En términos sencillos, los middlewares permiten **interceptar, procesar, modificar o validar información** antes de que la solicitud llegue a la ruta final (handler). Gracias a este mecanismo se pueden implementar múltiples funcionalidades como autenticación de usuarios, validación de datos, registro de logs, control de errores, manipulación de cabeceras HTTP o transformación de datos. Si el middleware determina que todo está correcto, permite que la solicitud continúe hacia la siguiente etapa del flujo; de lo contrario puede detener el proceso y enviar una respuesta inmediata al cliente.
// ?¿Como se crean los Middlewares?
// ?Como se comentó previamente, los Middlewares son funciones. Para crearlos debemos declarar una función normal o una función flecha que reciba tres parámetros principales: `req`, `res` y `next`. El objeto `req` representa la información de la solicitud enviada por el cliente, `res` representa la respuesta que el servidor enviará al cliente, y `next` es una función especial proporcionada por Express. Esta función `next` indica que el middleware ya terminó su ejecución y que Express debe continuar con el siguiente paso del flujo. Este siguiente paso puede ser otro middleware o el handler final de la ruta. Dentro del cuerpo del middleware podemos implementar lógica como validaciones, registro de actividad, verificación de permisos o manipulación de datos. Es importante tener en cuenta que si un middleware **no ejecuta next() ni envía una respuesta con res**, la petición quedará detenida y el cliente no recibirá respuesta.
function nombreMiddleware(req, res, next){ // *Declaracion de funcion Middleware con 3 parametros.
    // console.log('Procesos adicionales'); //* Ejemplo de lógica que podría ejecutarse antes de llegar a la ruta final.
    next(); //* Permite continuar con el siguiente middleware o con el handler final de la ruta.
} // *Cierre de declaracion del Middleware

// ?¿A quienes o que aplican los Middlewares?.
// ?Ahora sabemos que los middlewares son funciones intermediarias dentro del flujo de una solicitud, pero surge la pregunta: ¿a quién o qué se aplican exactamente? En Express los middlewares se aplican principalmente a las rutas de nuestra aplicación. Dependiendo de cómo se integren, pueden afectar a todas las rutas del servidor o únicamente a rutas específicas. Por esta razón existen dos formas principales de utilizar middlewares: **middlewares globales**, que se ejecutan en todas las rutas del proyecto, y **middlewares individuales**, que se aplican únicamente a rutas concretas. La manera en que se integran depende del caso de uso y de la arquitectura de la aplicación.
// &Middlewares individuales o en conjunto.
// &Para implementar un middleware en rutas individuales, este debe colocarse directamente dentro de la definición de la ruta, antes del handler final. En este caso simplemente se pasa el nombre de la función middleware sin necesidad de declarar sus parámetros, ya que Express se encarga automáticamente de pasar `req`, `res` y `next`.
app.get('/ruta', nombreMiddleware, (req, res) => { // *Declaracion de una ruta conteniendo ruta, middleware y handler.
    res.send("Usuarios"); //* Handler final que se ejecuta después del middleware.
}); // *Cierre de la declaracion de la ruta.

// &Middlewares globales a nivel proyecto.
// &Para implementar un middleware a nivel global dentro de toda la aplicación utilizamos `app.use(nombreMiddleware)`. A diferencia de los middlewares individuales, los middlewares globales no se colocan dentro de las rutas sino que se registran directamente en la aplicación Express. Esto significa que **todas las solicitudes que lleguen al servidor pasarán primero por este middleware**, independientemente de la ruta solicitada.
app.use(nombreMiddleware); //* Middleware global que afecta a todas las rutas del servidor.

// ?Middlewares ya declarados en Express.
// ?Dentro de Express existen diversos middlewares ya integrados que podemos utilizar directamente sin necesidad de crearlos manualmente. Estos middlewares proporcionan funcionalidades comunes como servir archivos estáticos, interpretar cuerpos JSON o procesar formularios HTML. Generalmente se utilizan mediante la sintaxis `express.nombreMiddleware()`, ya que forman parte de las utilidades que el propio framework proporciona.
// &express.static()
// &Este middleware permite servir archivos estáticos desde una carpeta específica del proyecto. Los archivos estáticos son aquellos que el servidor envía directamente al navegador sin procesamiento adicional, como archivos HTML, CSS, JavaScript del frontend, imágenes o fuentes. Normalmente se utiliza para exponer una carpeta pública llamada "public".
app.use(express.static('public')); //* Expone la carpeta public para servir archivos estáticos.

// &express.json()
// &Este middleware permite que Express pueda interpretar cuerpos de petición enviados en formato JSON. Es muy utilizado en APIs REST cuando el cliente envía información en formato JSON mediante herramientas como Postman o aplicaciones frontend. El middleware convierte el JSON recibido en un objeto JavaScript accesible desde `req.body`.
app.use(express.json()); //* Permite leer cuerpos JSON enviados en solicitudes HTTP.

// &express.urlencoded()
// &Este middleware permite procesar datos enviados desde formularios HTML. Convierte los datos codificados en formato `application/x-www-form-urlencoded` en un objeto accesible desde `req.body`. Es común en aplicaciones que reciben datos de formularios tradicionales del navegador.
app.use(express.urlencoded({ extended: true })); //* Permite interpretar datos enviados desde formularios HTML.

// &express.Router()
// &Aunque técnicamente no es un middleware, Router es una herramienta integrada en Express que permite crear módulos de rutas independientes. Esto facilita organizar aplicaciones grandes separando rutas en diferentes archivos y también permite aplicar middlewares a grupos específicos de rutas.
// const router = express.Router(); //* Crea un nuevo router modular dentro de Express.

// ?Next en Middlewares.
// ?Dentro de los middlewares se utiliza normalmente un parámetro llamado `next`, el cual es una función especial proporcionada por Express. Cuando un middleware ejecuta `next()`, le indica al framework que debe continuar con el siguiente middleware en la cadena o con el handler final de la ruta. Si `next()` no se ejecuta y tampoco se envía una respuesta con `res`, la solicitud quedará detenida y el cliente no recibirá respuesta.
function middleware(req, res, next){ // *Declaracion de Middleware con 3 parametros.
    next(); //* Indica que el flujo de ejecución debe continuar hacia el siguiente middleware o handler.
} // *Cierre de declaracion de Middleware.

// ~Routes y app.use en Express.
// ~Ahora que sabemos el uso fundamental de `app.use`, `app.get`, middlewares y demás herramientas dentro de Express, es importante comprender cómo se organizan correctamente las rutas en aplicaciones reales. Hasta ahora podríamos declarar todas nuestras rutas directamente en el mismo archivo donde levantamos el servidor utilizando `app.listen`, lo cual funciona perfectamente para proyectos pequeños o ejemplos simples. Sin embargo, cuando una aplicación comienza a crecer y tiene muchas rutas (usuarios, productos, libros, autenticación, etc.), mantener todas las rutas en un solo archivo se vuelve difícil de mantener y de leer. Por esta razón, en proyectos reales es muy común crear una carpeta llamada **routes**, donde cada archivo representa un conjunto de rutas relacionadas con una entidad específica. Por ejemplo, podríamos tener archivos como `libros.route.js`, `usuarios.route.js` o `auth.route.js`. Dentro de cada uno de estos archivos se declaran únicamente las rutas correspondientes a ese módulo. De esta forma, el archivo principal donde levantamos el servidor permanece limpio y organizado, ya que solo se encargará de **importar las rutas y conectarlas al servidor**. Para lograr esto utilizamos una herramienta integrada de Express llamada **Router**, que permite encapsular rutas y exportarlas para ser utilizadas en otros archivos.
// ?Exportar una ruta mediante Route.
// ?Para poder declarar rutas en archivos externos y posteriormente utilizarlas dentro del archivo principal del servidor, necesitamos utilizar `express.Router()`. Router es una función integrada de Express que nos permite crear una especie de **mini aplicación de rutas** independiente. Para utilizarla, primero declaramos una variable (generalmente llamada `router` o `route`) y le asignamos el resultado de ejecutar `express.Router()`. Esto nos devuelve un objeto especial que tiene métodos similares a `app` como `.get()`, `.post()`, `.put()`, `.delete()`, etc. Gracias a esto podremos declarar rutas dentro de este objeto y posteriormente **exportarlas** para ser utilizadas en el archivo donde se inicializa el servidor.
const router = express.Router(); //* Se crea una instancia de Router que funcionará como contenedor de rutas modularizadas.

// ?Implementacion de Router en la declaracion de nuestra ruta.
// ?Una vez declarada la variable `route` que ejecuta `express.Router()`, podremos declarar nuestras rutas de la misma forma que lo hacíamos anteriormente con `app.get()`, `app.post()`, etc., pero en este caso sustituyendo `app` por `route`. Esto se debe a que `route` funciona como un **contenedor modular de rutas**, permitiendo agrupar múltiples endpoints relacionados dentro de un mismo archivo. De esta manera, en lugar de escribir todas las rutas dentro del archivo principal del servidor, podemos organizarlas en archivos separados según su funcionalidad. Esto mejora la **organización del código, la escalabilidad del proyecto y la facilidad de mantenimiento**. Posteriormente, este conjunto de rutas se exportará para poder conectarlo con la aplicación principal mediante `app.use()` en el archivo donde levantamos el servidor.
router.get('/nombreRuta', (req, res) => { // *Declaracion de la ruta mediante el uso de route.
    //* Handler de la ruta declarada dentro del Router.
    //* Aquí se colocaría la lógica correspondiente al endpoint.
});

// ?Exportacion de rutas mediante Router.
// ?Una vez que tenemos nuestra ruta creada usando `route.metodo()`, podremos exportarla para que pueda ser utilizada dentro de otros archivos del proyecto, especialmente dentro del archivo principal donde se levanta el servidor con `app.listen()`. Para ello utilizaremos los métodos de exportación estándar de JavaScript, ya sea mediante la forma moderna usando `export` o mediante el modelo antiguo utilizando `module.exports`. Esto se debe a que `router` funciona como una especie de **contenedor o paquete de rutas**, es decir, agrupa todas las rutas que definimos dentro de ese archivo. Cuando exportamos el router estamos enviando ese conjunto de rutas hacia otro archivo, normalmente el archivo principal del servidor. De esta manera el servidor sabrá qué hacer cuando un cliente acceda a las URLs que pertenecen a ese módulo de rutas.
// &Exportacion moderna.
// &La forma moderna de exportación utiliza la sintaxis de **ES Modules**, la cual consiste en utilizar la palabra reservada `export` seguida de llaves `{}`. Dentro de estas llaves se especifica el nombre de la variable que queremos exportar, en este caso `route`. Este método es el más utilizado actualmente en proyectos modernos de JavaScript cuando el proyecto está configurado con `"type": "module"` dentro del `package.json`.
export { router }; //* Exporta la instancia de Router creada anteriormente para que pueda ser importada en otros archivos del proyecto.

// &Exportacion antigua.
// &La forma antigua de exportación pertenece al sistema **CommonJS**, el cual fue el sistema tradicional utilizado por Node.JS durante muchos años. En este modelo utilizamos `module.exports` para exportar variables, funciones u objetos desde un archivo. Dentro del objeto que asignamos a `module.exports` incluimos la variable `router` que contiene nuestras rutas.
// module.exports = { //* Creacion del modulo a exportar.
//     router //* Exporta el router utilizando el sistema CommonJS.
// } // *Cierre de la creacion del modulo a exportar.

// ?Importacion de rutas.
// ?Una vez realizada la exportación de `route`, el siguiente paso es importarlo dentro del archivo donde tenemos nuestro servidor principal. Esto puede hacerse utilizando tanto el modelo moderno (`import`) como el modelo antiguo (`require`). En el modelo antiguo podemos almacenar lo importado dentro de una variable con cualquier nombre que queramos. Sin embargo, en el modelo moderno suele ser recomendable **renombrar la importación** cuando tenemos muchos archivos de rutas, ya que todos exportan una variable llamada `route` o `router`. Si importáramos todos con el mismo nombre podríamos generar conflictos o confusión en el código.
// &Importacion moderna.
// &Para importar nuestro `route` utilizando la sintaxis moderna debemos usar `import` seguido del nombre exportado entre llaves `{}`. Debido a que exportamos `route`, debemos importar ese mismo nombre. Sin embargo, podemos utilizar la palabra clave `as` para renombrar el elemento importado y darle un nombre más representativo dentro del archivo actual. Esto es muy útil cuando trabajamos con múltiples archivos de rutas, ya que cada uno puede tener un nombre diferente que identifique claramente su propósito.
import { route as create } from './src/Express.js'; //* Importa el router exportado y lo renombra como `create` dentro de este archivo.

// &Importacion antigua.
// &Para importar rutas utilizando el modelo antiguo de CommonJS debemos declarar una variable y asignarle el resultado de la función `require()`, la cual recibe como parámetro la ruta del archivo desde el cual queremos importar. Esta variable contendrá todo lo que fue exportado mediante `module.exports`.
// const rutaAImportarAntigua = require('./src/Express'); //* Importa las rutas utilizando require en el modelo CommonJS.

// ?Declaracion (activacion) de rutas mediante Route.
// ?Una vez que hemos importado nuestras rutas dentro del archivo donde se encuentra el listener del servidor, es necesario **registrarlas o activarlas dentro de la aplicación Express**. Esto se hace utilizando `app.use()`. Aunque normalmente `app.use()` se utiliza para registrar middlewares, en este caso se utiliza porque **Router funciona internamente como un middleware**, ya que intercepta solicitudes y las dirige hacia las rutas correspondientes. Dentro de `app.use()` podemos especificar primero una ruta base (por ejemplo `/libros`) y después pasar como segundo parámetro el router que importamos. Esto significa que todas las rutas definidas dentro de ese router quedarán automáticamente **prefijadas con esa ruta base**. Por ejemplo, si dentro del router tenemos `/crear`, al registrarlo con `app.use('/libros', create)` la ruta final sería `/libros/crear`. Este patrón permite mantener un orden claro dentro de nuestras APIs y organizar mejor los endpoints.
app.use('/libros', create); //* Registra el router importado bajo la ruta base /libros dentro de la aplicación Express.

// ?Rutas aplicadas a bases de datos
// ?Sabemos bien que existen rutas con múltiples tipos de usos, desde una ruta que redirige a una página, muestra cierta información o ejecuta alguna acción. Sin embargo, uno de los usos más importantes y comunes en el desarrollo backend es realizar operaciones sobre **fuentes externas**, como bases de datos o servicios externos. Debido a esto, es fundamental entender cómo estructurar correctamente nuestras rutas cuando interactúan con una base de datos. A diferencia de rutas simples, estas operaciones suelen ser **asíncronas**, lo que significa que no se ejecutan de manera inmediata, sino que requieren tiempo para completarse. Por esta razón, nuestros handlers deben declararse como `async`, además de utilizar estructuras de control de errores como `try...catch` (y opcionalmente `finally`). También es importante el uso de `await` para esperar el resultado de las operaciones antes de continuar la ejecución, y finalmente, siempre debemos enviar una respuesta al cliente utilizando `res`, evitando dejar la petición sin resolver.
// &Rutas Asíncronas
// &Como se mencionó previamente, dentro de nuestras rutas podemos realizar operaciones asíncronas, como consultar o modificar datos en una base de datos. Para poder manejar este tipo de operaciones correctamente, es necesario declarar nuestro handler como `async`, colocándolo antes de los parámetros `(req, res)`. Esto nos permitirá utilizar `await` dentro de la función. Aunque técnicamente podemos usar `await` sin `try...catch`, es altamente recomendable envolver nuestra lógica en un bloque `try...catch`, ya que esto nos permite capturar errores y responder adecuadamente al cliente en caso de fallo, evitando que el servidor se rompa o quede en un estado inconsistente.
router.get('/nombreRuta', async (req, res) => { //* Se define una ruta GET en Express con un handler asíncrono para poder usar await dentro de la función.
    try{ //* Se inicia un bloque try para ejecutar la lógica principal y capturar posibles errores.

        //* Aquí iría la lógica principal de la ruta (consultas, inserciones, etc.) 

    } catch(error){ //* Se captura cualquier error que ocurra dentro del bloque try.
        //* Aquí manejamos cualquier error que ocurra dentro del try 
    } //* Fin del bloque catch.
}); //* Fin de la definición de la ruta.

// &Solicitudes mediante Await.
// &Dentro del bloque `try`, es donde realizamos nuestras operaciones asíncronas, como por ejemplo consultar datos desde una base de datos. Para ello, normalmente creamos una variable que almacenará el resultado de la operación. Esta variable utilizará la palabra clave `await`, la cual le indica a JavaScript que debe esperar a que la promesa se resuelva antes de continuar con la ejecución del código. Después de `await`, colocamos la operación correspondiente (por ejemplo, un método de Mongoose como `.find()`). Si ocurre algún error durante esta operación, automáticamente será capturado por el bloque `catch`.
router.get('/nombreRuta', async (req, res) => { //* Se define nuevamente una ruta GET asíncrona para ejemplificar el uso de await en consultas.
    try{ //* Se inicia el bloque try donde se ejecutará la lógica asíncrona.
        const books = await modeloMongoose.find(); //* Se realiza una consulta a la base de datos usando Mongoose y se espera (await) a que regrese todos los documentos de la colección.
    } catch(error){ //* Si ocurre algún error durante la consulta, se captura aquí.
        console.log(error); //* Se imprime el error en consola para depuración.
    } //* Fin del bloque catch.
}); //* Fin de la ruta.

// ~Res y req.
// ~Algo muy importante a considerar es el uso de los parámetros `req` (request) y `res` (response), los cuales son fundamentales en cualquier ruta de Express. El objeto `req` contiene toda la información enviada por el cliente (por ejemplo, datos en el body, parámetros en la URL o query params). Este se utiliza principalmente cuando queremos enviar información hacia la base de datos, como en operaciones de creación o actualización. Por otro lado, `res` se utiliza para enviar una respuesta al cliente. Esta respuesta puede ser información obtenida de la base de datos, un mensaje de confirmación o un error. Es extremadamente importante **siempre responder con `res`**, ya que de lo contrario la petición quedará "colgada" (sin respuesta), generando problemas en la aplicación.
// ?Estructura.
// ?La estructura e implementacion de reques y response es realmente simple ya que unicamente en nuestro handler deberemos de integrarlos a ambos como parametros. Por lo que se comento anteriormente este de forma automatica podra recibir informacion proporcionada y si nosotros lo deseamos podremos utilizar a response para devolver una respuesta.
app.get('/nombreRuta', (req, res) => { //* Se define una ruta GET donde Express automáticamente provee los objetos req (request) y res (response).
    //* **Concepto clave:** req contiene los datos de entrada (input del cliente) y res se usa para enviar la salida (output del servidor).
    //* **Error común:** olvidar usar res para responder, lo que deja la petición en espera indefinida.
}) //* Fin de la ruta.

// ?Informacion enviada mediante "request" (req).
// ?Ahora, bien sabemos que en nuestras rutas podemos utilizar informacion enviada, pero es importante comentar que es muy comun que esta informacion no sea enviada solamente como una variable o como una exportacion, si no que cuando se trabaja con rutas la informacion se suele enviar de una forma o manera muy concreta siendo esta enviada en 2 tipos de formatos diferentes donde se tiene a body y el tipo params, donde el tipo body es un cuerpo tipo JSON en el cual se mandan objetos complejos o datos sensibles (como formularios de registro) que no queremos que se vean en la URL, mientras que el params es una variable dinamica que se incrusta directamente en la ruta (ej: /usuario/:id) y sirve para identificar un recurso especifico que queremos consultar o modificar. Donde directamente podemos acceder a ambos valores meiante el uso de req.nombreTipo, y de esa forma podremos acceder o a body o a params.
// &Req.body.
// &El uso de req.body consiste y se basa en que el usuario esta pasando mediante req informacion en formato JSON, esto se realiza de esta manera ya que el uso principal de req.body consta en el paso de informacion a las rutas que requieren crear o actualizar registros en la base de datos (métodos POST y PUT). Se prefiere usar el body cuando la informacion es extensa o privada, como un formulario de registro con nombre, correo y contraseña, ya que estos datos viajan "ocultos" dentro de la peticion y no quedan expuestos en la barra de direcciones del navegador. Por lo que para este caso al igual que en params es muy comun destructurar el contenido o la informacion ya que se envia como paquete.
app.post('/nombreRuta', (req, res) => { //* Ruta POST donde normalmente se reciben datos para crear un recurso.
    const { nombre, edad, genero } = req.body; //* Se destructuran los datos enviados por el cliente dentro del body.
    //* **Concepto clave:** req.body es un objeto JSON que contiene toda la información enviada en la petición.
    //* **Buena práctica:** validar que los campos existan antes de usarlos (ej: if(!nombre) ...).
    //* **Error común:** olvidar usar express.json(), lo que provoca que req.body sea undefined.
}) //* Fin de la ruta.

// &Req.params.
// &A diferencia del anterior, el uso de req.params se basa en extraer datos que vienen escritos directamente en la URL. Se utiliza principalmente para identificar o buscar un recurso unico y especifico. Por ejemplo, si quieres ver el perfil de un usuario con ID 5, la ruta seria /usuarios/5; aqui el "5" es el parametro que usamos para decirle al servidor exactamente a quién queremos traer de la base de datos. Por lo que para este caso al igual que en params es muy comun destructurar el contenido o la informacion ya que se envia como paquete.
app.get('/nombreRuta/:id', (req, res) => { //* Se define una ruta con un parámetro dinámico (:id) dentro de la URL.
    const { id } = req.params; //* Se extrae el valor del parámetro desde la URL mediante destructuración.
    //* **Concepto clave:** req.params siempre devuelve strings, incluso si parecen números.
    //* **Buena práctica:** validar el formato del ID antes de usarlo (especialmente en bases de datos como MongoDB).
    //* **Error común:** no definir :id en la ruta pero intentar usar req.params.id.
}); //* Fin de la ruta.

// ?Informacion retornada mediante "response" (res).
// ?Ahora bien, sabemos que existe el parámetro "response" (`res`) dentro de nuestras rutas en Express. Este objeto es fundamental, ya que es el encargado de enviar una respuesta al cliente que realizó la petición. En otras palabras, todo lo que el cliente solicita (ya sea información, una acción o una validación) debe terminar con una respuesta por parte del servidor. Esta respuesta puede ser muy variada: puede ser información proveniente de una base de datos, un mensaje de confirmación, un error, o incluso un estado sin contenido. Es importante entender que `res` no es opcional en la práctica real, ya que si no se utiliza para responder, la petición quedará abierta indefinidamente, lo que genera problemas como **timeouts, consumo innecesario de recursos y mala experiencia de usuario**. Por ello, una regla clave en backend es: **toda ruta debe responder siempre con `res`**.
// &Formato de retorno de informacion mediante "response".
// &El formato de retorno de información en Express es bastante flexible, pero sigue ciertas convenciones ampliamente adoptadas en el desarrollo profesional. Generalmente, las respuestas se envían en formato JSON, ya que es un estándar para comunicación entre frontend y backend. Además, también se utilizan códigos de estado HTTP (status codes) para indicar el resultado de la operación. Estos formatos pueden combinarse para ofrecer respuestas claras, estructuradas y fáciles de interpretar tanto por humanos como por sistemas.
// Todo - res.JSON().
// Todo - El uso de `res.json()` consiste en enviar una respuesta en formato JSON al cliente. Este es el método más utilizado en APIs REST modernas, ya que permite estructurar la información en forma de objetos o arreglos. Internamente, Express convierte automáticamente el objeto JavaScript a JSON (usando JSON.stringify), por lo que no es necesario hacerlo manualmente. Este método es ideal cuando queremos devolver datos de la base de datos, resultados de operaciones o mensajes personalizados. Además, permite incluir múltiples propiedades (por ejemplo: message, data, error, status interno), lo que lo hace muy versátil. Es importante saber que si no se especifica un status previamente, Express asignará automáticamente un **status 200 (OK)**, lo cual puede ser incorrecto si estamos enviando un error.
app.get('/nombreRuta', (req, res) => { //* Se define una ruta GET que responderá con un JSON.
    res.json( //* Se utiliza el método json() para enviar una respuesta estructurada.
        { //* Se abre el objeto que será convertido automáticamente a formato JSON.
            message: 'Hubo un error al extraer la informacion, ya que no existe tu ID.', //* Se define un mensaje descriptivo del problema.
            error: 404 //* Se incluye un código de error dentro del cuerpo (esto NO cambia el status HTTP real).
        } //* Se cierra el objeto JSON.
    ) //* Se cierra el método json().
    //* **Error común:** no usar res.status() junto con json(), lo que provoca que la respuesta sea 200 aunque haya error.
}) //* Fin de la ruta.

app.get('/nombreRuta', (req, res) => { //* Se define otra ruta GET para enviar datos reales.
    res.json(valorRecibidoBD) //* Se envía directamente la información obtenida de la base de datos.
    //* **Concepto clave:** Express convierte automáticamente el objeto a JSON (no usar JSON.stringify manualmente).
}) //* Fin de la ruta.

// Todo - res.status().
// Todo - El método `res.status()` se utiliza para establecer el código de estado HTTP de la respuesta. Este código es extremadamente importante, ya que comunica al cliente si la operación fue exitosa, fallida o si ocurrió algún tipo de error. Existen múltiples códigos (200, 201, 400, 404, 500, etc.), cada uno con un significado específico. Es importante elegir correctamente el código según el contexto, ya que esto forma parte de las buenas prácticas en el diseño de APIs. Sin embargo, `res.status()` por sí solo **no envía ninguna respuesta**, solo configura el estado, por lo que debe combinarse con métodos como `.json()` o `.send()`.
app.get('/nombreRuta', (req, res) => { //* Se define una ruta GET donde se establecerá un status HTTP.
    res.status(400) //* Se asigna el código 400 (Bad Request), indicando error del cliente.
    //* **Error crítico:** si no se envía respuesta después (json/send), la petición se queda colgada.
}) //* Fin de la ruta.

// Todo - Fucion y retorno de "response" con JSON() y STATUS().
// Todo - En aplicaciones reales, lo correcto es combinar ambos métodos: `res.status()` y `res.json()`. Esto permite enviar tanto el estado de la operación (a nivel HTTP) como información adicional (mensaje, datos, errores, etc.). Esta combinación es considerada una **buena práctica estándar en APIs REST**, ya que proporciona respuestas claras, estructuradas y profesionales. Por ejemplo, no es correcto devolver un error con status 200, ni devolver un status sin información. Lo ideal es siempre usar ambos para mantener consistencia y claridad en la comunicación entre cliente y servidor.
app.get('/nombreRuta', (req, res) => { //* Se define una ruta GET donde se usará status + JSON.
    res.status(201).json( //* Se establece el status 201 (Created) y se encadena con json().
        { //* Se abre el objeto JSON de respuesta.
            message: 'Se creó el elemento con éxito.' //* Mensaje indicando operación exitosa.
        } //* Se cierra el objeto JSON.
    ); //* Se cierra la cadena status().json().
    //* **Buena práctica:** siempre combinar status + json para respuestas completas y correctas.
}) //* Fin de la ruta.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Mongoose
// ^Mongoose es una librería o paquetería externa para Node.JS que nos permite trabajar de manera más estructurada con bases de datos **MongoDB** desde aplicaciones escritas en JavaScript. Esta librería nos permite crear lo que se conocen como **modelos**, los cuales representan estructuras de datos que luego podremos utilizar dentro de nuestras solicitudes hacia la base de datos. A diferencia de otras librerías que simplemente ofrecen funciones utilitarias, Mongoose funciona como un **objeto principal** que nos permite generar otros objetos derivados, los cuales representan nuestros modelos de datos. Dichos modelos actúan como una especie de puente entre nuestra aplicación y la base de datos, permitiendo realizar operaciones como crear, leer, actualizar o eliminar información. Debido a que Mongoose se maneja mediante objetos, podemos utilizar el operador `new` para crear instancias basadas en los modelos definidos. Esto permite que los desarrolladores trabajen con la base de datos utilizando estructuras claras y controladas, en lugar de interactuar directamente con documentos sin estructura dentro de MongoDB.

// ~Instalacion y declaracion de Mongoose.
// ~Al ser Mongoose una librería externa, esta requiere varios pasos antes de poder ser utilizada dentro de nuestros proyectos. De manera similar a otras librerías que hemos visto anteriormente, el primer paso consiste en instalar el paquete utilizando **Node Package Manager (npm)**. Posteriormente debemos verificar que la librería haya sido registrada dentro de nuestro archivo `package.json`, ya que este archivo actúa como el centro de control de dependencias de nuestro proyecto. Finalmente, una vez instalada la librería, será necesario **importarla dentro de los archivos JavaScript** donde deseemos utilizar Mongoose para poder acceder a todas sus funcionalidades y herramientas para trabajar con bases de datos MongoDB.
// ?Instalar Mongoose.
// ?Al tratarse de una librería externa, Mongoose debe instalarse utilizando **npm**. Puede instalarse como dependencia normal (`dependencies`) si será utilizada dentro de la aplicación en producción, o como dependencia de desarrollo (`devDependencies`) si únicamente se utilizará durante pruebas o entornos de desarrollo. Sin embargo, en la mayoría de los proyectos backend reales Mongoose se instala como dependencia normal, ya que es la librería encargada de manejar la comunicación entre la aplicación Node.JS y la base de datos MongoDB.
// npm install mongoose               //* Instala Mongoose como dependencia principal del proyecto.
// npm install --save-dev mongoose    //* Instala Mongoose como dependencia solo de desarrollo.

// ?Mongoose en Package.json.
// ?Después de realizar la instalación, Mongoose aparecerá automáticamente dentro del archivo `package.json`. Esto nos permite confirmar que la librería fue instalada correctamente y también nos ayuda a mantener control sobre las versiones utilizadas dentro del proyecto. Además, cuando otro desarrollador clone el proyecto y ejecute `npm install`, npm leerá este archivo y descargará automáticamente todas las dependencias necesarias para ejecutar la aplicación.
// "dependencies": {
//     "mongoose": "^9.3.0", //* Indica la versión de Mongoose instalada en el proyecto.
// }

// ~Importacion de libreria Mongoose a nuestros archivos a implementarlo.
// ~Para poder utilizar Mongoose dentro de nuestros archivos JavaScript es necesario importar la librería en cada archivo donde vayamos a utilizarla. Node.JS permite importar librerías utilizando dos sistemas de módulos distintos: **CommonJS** (la forma tradicional usando `require`) o **ES Modules** (la forma moderna usando `import`). El método que utilicemos dependerá de la configuración establecida dentro del archivo `package.json`, específicamente en la propiedad `"type"`, la cual determina si el proyecto utilizará el sistema de módulos moderno o el tradicional.
// ?Forma antigua de importacion "require('')".
// ?La forma tradicional de importar librerías en Node.JS es mediante el uso de la función `require()`. Esta función carga el módulo especificado y devuelve el contenido exportado por dicho módulo. Normalmente se almacena en una variable constante para poder utilizar posteriormente todas las funcionalidades de la librería dentro del archivo. Este sistema pertenece al modelo **CommonJS**, el cual fue el estándar principal de Node.JS durante muchos años.
// const mongoose = require('mongoose'); //* Importa la librería mongoose utilizando el sistema de módulos CommonJS.

// ?Forma nueva de importacion "import".
// ?La forma moderna de importar librerías es mediante la palabra reservada `import`, perteneciente al sistema **ES Modules (ESM)**. Este sistema es el estándar oficial del lenguaje JavaScript moderno y es el recomendado actualmente para proyectos nuevos. En este caso utilizamos la sintaxis `import nombre from 'modulo'`, donde `nombre` será la variable que representará la librería dentro del archivo. Para poder utilizar esta sintaxis en Node.JS es necesario configurar `"type": "module"` dentro del archivo `package.json`.
import mongoose, { mongo } from 'mongoose'; //* Importa la librería mongoose utilizando el sistema moderno ES Modules.

// ~Uso y creacion de modelos con Mongoose.
// ~Una vez que importamos Mongoose en nuestro archivo JavaScript, podemos comenzar a definir la estructura de los datos que queremos almacenar dentro de nuestra base de datos MongoDB, ya que mediante estos modelos le decimos a mongose la estructura de la informacion en nuestra tabla pudiendo con estos modelos realizar todas las acciones desde crear hasta eliminar informacion. El propósito principal de Mongoose es precisamente la creación de **modelos**, los cuales representan colecciones dentro de la base de datos. Sin embargo, antes de crear un modelo es necesario definir primero un **Schema**. Un Schema es básicamente el plano o guía que define cómo debe verse cada documento dentro de una colección. Para ello utilizamos `new mongoose.Schema({})`, donde dentro de las llaves especificamos las propiedades que tendrá nuestro objeto, por ejemplo nombre, precio o género. En este paso es fundamental el **tipado de datos**, ya que indicamos a Mongoose qué tipo de dato debe recibir cada campo (String, Number, Boolean, Date, etc.). Esto permite que Mongoose valide automáticamente la información antes de guardarla en la base de datos, ayudando a mantener la consistencia y estructura de los datos dentro de la aplicación.
const nombreEsquema = new mongoose.Schema(  // *Declaracion y creacion del esquema.
    { // *Apertura de la creacion del esquema.
        nombre: String, //* Campo tipo texto que representará el nombre del elemento.
        price: Number,  //* Campo tipo número que representará el precio.
        genre: String   //* Campo tipo texto que representará el género o categoría.
    } // *Cierre de objeto de esquema.
); // *Cierre de la creacion de esquema.

// ~Creacion del modelo con Mongoose.
// ~Una vez que tenemos nuestro Schema, el cual funciona como la plantilla o estructura que deben seguir nuestros datos, el siguiente paso es crear el **modelo**. El modelo es el objeto que realmente nos permitirá interactuar con la base de datos, realizando operaciones como crear documentos, consultarlos, actualizarlos o eliminarlos. Para crear un modelo utilizamos `mongoose.model()`. Este método requiere dos parámetros principales: el primero es el **nombre del modelo**, el cual se define como un string entre comillas (!IMPORTANTE: El nombre del modelo debe ser igual a la tabla de nuestra base de datos ya que mediante este nombre de igual manera buscara.), y el segundo es el **Schema** que se asociará a ese modelo. Dependiendo de cómo estructuremos nuestro proyecto, podemos crear el modelo y almacenarlo en una variable dentro del mismo archivo o bien exportarlo directamente para ser utilizado en otros módulos del proyecto.
// ?Almacenamiento de modelo mediante variable.
// ?La creación y almacenamiento de un modelo dentro de una variable nos permite utilizarlo dentro del mismo archivo o exportarlo posteriormente si lo necesitamos. Esto es útil cuando queremos realizar operaciones directamente en ese archivo o cuando queremos tener mayor control sobre el modelo antes de exportarlo.
const esquemaParaModelo = new mongoose.Schema( // *Declaracion y creacion del esquema.
    { // *Apertura de la creacion del esquema.
        nombre: String, //* Campo simple de ejemplo que representa una propiedad del modelo.
    } // *Cierre de objeto de esquema.
); // *Cierre de la creacion de esquema.

const modeloVariable = mongoose.model('nombreModelo', esquemaParaModelo); //* Se crea el modelo asociando el nombre del modelo con el esquema definido.

// ?Creación y exportación de modelo
// ?Ahora bien, aunque podemos exportar la variable que almacena el modelo, también es posible exportar directamente el modelo sin necesidad de almacenarlo previamente en una variable. Esto es posible porque `mongoose.model()` retorna directamente el objeto del modelo ya construido. De esta forma podemos exportarlo como un módulo independiente. Este enfoque suele utilizarse en arquitecturas donde cada archivo representa una colección específica de la base de datos, permitiendo mantener el código más limpio y organizado.
// & Forma antigua (CommonJS).
// &Esta forma pertenece al sistema de módulos tradicional de Node.js. Aquí `module.exports` actúa como el valor que el archivo exportará hacia otros archivos. En este caso no utilizamos llaves `{}` porque no estamos exportando múltiples elementos, sino únicamente el modelo. De esta manera, cuando otro archivo utilice `require()` para importar este módulo, recibirá directamente el modelo listo para ser utilizado sin necesidad de acceder a propiedades adicionales.
// module.exports = mongoose.model('nombreModelo', esquemaParaModelo); //* Exporta directamente el modelo utilizando CommonJS.

// & Forma moderna (ES Modules).
// &Esta es la forma moderna de exportación en JavaScript utilizando ES Modules. Aquí utilizamos `export default` porque el modelo es el elemento principal que queremos exportar desde este archivo. Al ser el valor por defecto, cuando lo importemos en otro archivo no necesitaremos usar llaves `{}`. Esto hace que el código sea más simple y también permite que el nombre asignado al importar el modelo pueda ser cualquiera que deseemos dentro del archivo que lo recibe.
export default mongoose.model('nombreModelo', esquemaParaModelo); //* Exporta el modelo utilizando ES Modules.

// ~Uso de funciones de Mongoose en rutas.
// ~Una vez que conocemos la creación y exportación de esquemas y modelos con Mongoose, es fundamental entender cómo se utilizan dentro de nuestras rutas en Express. Cuando exportamos un modelo basado en un Schema, este se convierte en nuestra principal herramienta para interactuar con la base de datos, permitiéndonos realizar operaciones como buscar, crear, actualizar o eliminar información. Sin embargo, todo esto solo es posible si previamente se ha establecido una conexión activa con la base de datos (por ejemplo con mongoose.connect()). Los modelos incluyen múltiples funciones integradas que ya saben a qué colección deben apuntar, ya que internamente usan el nombre definido en el modelo. Es importante entender que todas estas operaciones son **asíncronas**, debido a que dependen de una comunicación con una base de datos externa. Esto implica que nuestras rutas también deben ser asíncronas, utilizando `async`, `await` y estructuras como `try...catch` para manejar correctamente los resultados y posibles errores. No manejar correctamente esto es uno de los errores más comunes en backend.
// ?Estructura de uso de funciones mediante modelo Mongoose.
// ?La estructura para utilizar funciones de un modelo Mongoose sigue un patrón muy claro y repetitivo en backend profesional. Primero, definimos una ruta asíncrona. Dentro de ella, usamos un bloque `try` donde ejecutaremos la operación. Después, declaramos una variable que almacenará el resultado de la acción, utilizando `await` para esperar la respuesta de la base de datos. Finalmente, en el `catch` manejamos errores. Este patrón se repite prácticamente en todas las operaciones CRUD, por lo que dominarlo es clave para entrevistas y desarrollo real.
app.get('/nombreRuta', async(req, res) => { //* Se define una ruta GET en Express; el uso de async permite utilizar await dentro de la función para manejar operaciones asíncronas.
    try{ //* Se inicia un bloque try donde se ejecutará la lógica principal; aquí se capturan errores potenciales de operaciones con la base de datos.
        const variableAlmacenaAccion = await nombreModelo.funcion(); //* Se ejecuta una función del modelo (ejemplo genérico) y se usa await para pausar la ejecución hasta obtener la respuesta de la base de datos.
        //* **Concepto clave:** await evita callbacks o .then(), haciendo el código más legible y secuencial.
    } catch(error){ //* Si ocurre cualquier error dentro del try (ej: fallo de conexión, query inválida), se ejecuta este bloque.
        //* **Error común:** no manejar el error y dejar la petición colgada (sin respuesta al cliente).
    } // *Cierre del catch.
}) //* Fin de la definición de la ruta.

// ?Tipos de funciones en modelos Mongoose.
// ?Dentro de los modelos de Mongoose existen diferentes tipos de funciones diseñadas para cubrir operaciones específicas en la base de datos. Estas funciones forman lo que conocemos como **CRUD (Create, Read, Update, Delete)**. Cada función tiene un propósito claro y su uso correcto depende del tipo de operación que queremos realizar. Lo importante es entender que estas funciones abstraen completamente la lógica de acceso a la base de datos, es decir, nosotros no escribimos consultas SQL o comandos directos, sino que usamos métodos que ya saben cómo interactuar con MongoDB utilizando la conexión previamente establecida.
// &Extraccion de informacion general find().
// &El método `find()` nos permite obtener todos los documentos de una colección. Es una de las funciones más utilizadas cuando queremos listar información. Internamente, Mongoose traduce esta operación a una consulta sobre la colección correspondiente (basada en el nombre del modelo). Es importante saber que `find()` siempre devuelve un **arreglo**, incluso si solo hay un elemento o ninguno. En aplicaciones reales, esta función suele combinarse con filtros, paginación o proyecciones para optimizar el rendimiento.
app.get('/nombreRuta', async(req, res) => { //* Ruta GET típica para obtener todos los registros de una colección.
    try{ //* Bloque de ejecución segura para manejar errores.
        const variableAlmacenaAccion = await nombreModelo.find(); //* Se llama al método find() del modelo, que devuelve un arreglo con todos los documentos.
        //* **Importante:** aunque haya un solo resultado, SIEMPRE será un array ([]), nunca un objeto directo.
    } catch(error){ //* Captura errores de base de datos o ejecución.
        //* Error típico: problemas de conexión o consultas mal formadas.
    } // *Cierre del catch.
}) //* Fin de la ruta.

// &Extraccion de informacion mediante ID findById(id).
// &El método `findById(id)` permite obtener un documento específico utilizando su identificador único (_id). Este ID normalmente se recibe desde la URL mediante `req.params`. Es importante validar que el ID tenga un formato correcto, ya que si no es válido puede generar errores en la consulta. Este método devuelve un solo objeto (o null si no existe), a diferencia de `find()` que devuelve un arreglo.
app.get('/nombreRuta', async(req, res) => { //* Ruta GET para obtener un documento específico.
    try{ //* Inicio del bloque seguro.
        const variableAlmacenaAccion = await nombreModelo.findById(req.params.id); //* Se obtiene el ID desde la URL y se busca el documento correspondiente.
        //* **Buena práctica:** validar req.params.id antes (ej: mongoose.Types.ObjectId.isValid).
    } catch(error){ //* Manejo de errores.
        //* Error común: ID inválido o que no existe en la base de datos.
    } // *Cierre del catch.
}) //* Fin de la ruta.

// &Creacion de informacion save().
// &El método `save()` se utiliza para guardar un nuevo documento en la base de datos. A diferencia de otros métodos, primero debemos crear una instancia del modelo usando `new`, pasando los datos que queremos guardar (generalmente provenientes de `req.body`). Esto es importante porque Mongoose necesita transformar esos datos en un documento que siga la estructura del Schema. Después, se ejecuta `.save()`, lo cual envía la información a la base de datos. Si la operación es exitosa, MongoDB devuelve el documento con su `_id` generado automáticamente.
app.post('/nombreRuta', async(req, res) => { //* Ruta POST para crear nuevos registros.
    try{ //* Inicio del bloque seguro.
        const nuevoDato = new nombreModelo(req.body); //* Se crea una nueva instancia del modelo usando los datos enviados por el cliente (req.body).
        //* **Concepto clave:** aquí Mongoose valida los datos según el Schema antes de guardarlos.
        const variableAlmacenaAccion = await nuevoDato.save(); //* Se guarda el documento en la base de datos y se espera la respuesta.
        //* **Resultado:** devuelve el documento ya guardado con su _id generado automáticamente.
    } catch(error){ //* Manejo de errores.
        //* Error típico: validaciones fallidas del schema o campos requeridos faltantes.
    } // *Cierre del catch.
}) //* Fin de la ruta.

// &Actualizacion de informacion mediante ID findByIdAndUpdate(id, datos).
// &El método `findByIdAndUpdate()` permite actualizar un documento en una sola operación. Recibe el ID del documento a actualizar y los nuevos datos. Es importante entender que, por defecto, este método devuelve el documento antiguo, por lo que comúnmente se utiliza la opción `{ new: true }` para obtener el documento ya actualizado. Este método es muy eficiente porque evita tener que hacer primero un find y luego un update.
app.put('/nombreRuta/:id', async(req, res) => { //* Ruta PUT para actualizar un documento existente.
    try{ //* Inicio del bloque seguro.
        const variableAlmacenaAccion = await nombreModelo.findByIdAndUpdate(
            req.params.id, //* ID del documento a actualizar obtenido desde la URL.
            req.body, //* Nuevos datos enviados por el cliente.
            {new: true} //* Opción para devolver el documento ya actualizado en lugar del antiguo.
        );
        //* **Error común:** olvidar {new: true} y recibir datos viejos.
    } catch(error){ //* Manejo de errores.
        //* Error común: ID inexistente o estructura de datos inválida.
    } // *Cierre del catch.
}) //* Fin de la ruta.

// &Eliminacion de informacion mediante ID findByIdAndDelete(id).
// &El método `findByIdAndDelete()` permite eliminar un documento de manera permanente utilizando su ID. Es importante tener cuidado con este tipo de operaciones, ya que son irreversibles. En sistemas reales, a veces se implementan "soft deletes" en lugar de eliminaciones reales. Este método devuelve el documento eliminado si la operación fue exitosa, lo cual puede ser útil para confirmaciones o logs.
app.delete('/nombreRuta/:id', async(req, res) => { //* Ruta DELETE para eliminar un documento.
    try{ //* Inicio del bloque seguro.
        const variableAlmacenaAccion = await nombreModelo.findByIdAndDelete(req.params.id); //* Se elimina el documento correspondiente al ID.
        //* **Concepto importante:** la operación es permanente (hard delete).
    } catch(error){ //* Manejo de errores.
        //* Error común: intentar eliminar un documento que no existe.
    } // *Cierre del catch.
}) //* Fin de la ruta.

// &Busqueda de un solo dato coincidente findOne({filtro}).
// &El método `findOne()` permite buscar un único documento basado en un criterio específico, como un correo, username o cualquier campo. A diferencia de `find()`, no devuelve un arreglo, sino un solo objeto (el primero que coincida). Es muy útil cuando trabajamos con campos únicos. Es importante notar que si existen múltiples coincidencias, solo se devolverá la primera encontrada.
app.get('/nombreRuta', async(req, res) => { //* Ruta GET para buscar un documento con un filtro específico.
    try{ //* Inicio del bloque seguro.
        const variableAlmacenaAccion = await nombreModelo.findOne({ correo: req.body.correo }); //* Busca el primer documento que coincida con el campo correo.
        //* **Buena práctica:** este tipo de datos normalmente debería venir en req.query o params, no en body para GET.
    } catch(error){ //* Manejo de errores.
        //* Error típico: filtro mal definido o campo inexistente.
    } // *Cierre del catch.
}) //* Fin de la ruta.

// ~Conección a MongoDB.
// ~Ahora sigue una de las secciones más fundamentales e importantes dentro de una API con base de datos: la conexión con **MongoDB**. Esto es indispensable porque, aunque ya sabemos que **Mongoose** nos permite crear Schemas, modelos y utilizar métodos para extraer, crear, modificar e incluso eliminar información, nada de eso podrá ejecutarse correctamente si antes no existe una conexión activa con la base de datos. En otras palabras, Mongoose nos da las herramientas para trabajar con los datos, pero MongoDB es el lugar real donde esos datos se almacenan y se consultan. Por esa razón, antes de realizar cualquier operación con nuestros modelos, debemos establecer la conexión utilizando `mongoose.connect()`. Dentro de este método se coloca la URL de conexión de MongoDB, la cual normalmente se obtiene desde MongoDB Atlas o desde una instancia local, y además se puede especificar un objeto de configuración donde se indica el nombre de la base de datos mediante `dbName`. Una vez establecida esta conexión, todos los modelos y schemas que utilicemos dentro de la aplicación tomarán automáticamente esa conexión para ejecutar sus operaciones sobre la base de datos correcta, sin necesidad de volver a configurarla en cada ruta.
// mongoose.connect('mongodb://localhost:27017', { dbName: 'libros' }); //* Establece la conexión entre Mongoose y MongoDB, indicando la URL del servidor y el nombre de la base de datos a utilizar.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Body Parser / Express.json().
// ^El **body-parser** es una librería externa de Express que permite analizar y leer los datos que el cliente envía a nuestras rutas. Su función principal es actuar como un **middleware de interpretación del cuerpo de la petición**, es decir, toma la información que llega "empaquetada" dentro de la request y la transforma en un formato que JavaScript pueda entender y manipular correctamente. Esto es fundamental porque, cuando un cliente envía información a una ruta, dicha información no siempre llega lista para ser usada directamente; normalmente llega en un formato crudo que necesita ser procesado primero. Gracias a body-parser, esa información puede accederse posteriormente mediante `req.body`. Cabe destacar que, desde Express 4.16, esta funcionalidad fue incorporada directamente dentro del propio framework, por lo que en la mayoría de los casos ya no es necesario instalar body-parser por separado, pudiendo usar directamente `express.json()` como alternativa nativa y más práctica.

// ~Instalacion y declaracion de Body Parser.
// ~Al ser Body Parser una librería externa, esta requiere varios pasos antes de poder ser utilizada dentro de nuestros proyectos. De manera similar a otras librerías que hemos visto anteriormente, el primer paso consiste en instalar el paquete utilizando **Node Package Manager (npm)**. Posteriormente debemos verificar que la librería haya sido registrada dentro de nuestro archivo `package.json`, ya que este archivo actúa como el centro de control de dependencias de nuestro proyecto. Finalmente, una vez instalada la librería, será necesario **importarla dentro de los archivos JavaScript** donde deseemos utilizar Body Parser para poder acceder a todas sus funcionalidades y herramientas para trabajar con bases de datos MongoDB.
// ?Instalar Body Parser.
// ?Al tratarse de una librería externa, Body Parser debe instalarse utilizando **npm**. Puede instalarse como dependencia normal (`dependencies`) si será utilizada dentro de la aplicación en producción, o como dependencia de desarrollo (`devDependencies`) si únicamente se utilizará durante pruebas o entornos de desarrollo. Sin embargo, en la mayoría de los proyectos backend reales Body Parser se instala como dependencia normal, ya que es la librería encargada de manejar la comunicación entre la aplicación Node.JS y la base de datos MongoDB.
// npm install  body-parser               //* Instala Body Parser como dependencia principal del proyecto.
// npm install --save-dev body-parser    //* Instala Body Parser como dependencia solo de desarrollo.

// ?Body Parser en Package.json.
// ?Después de realizar la instalación, Body Parser aparecerá automáticamente dentro del archivo `package.json`. Esto nos permite confirmar que la librería fue instalada correctamente y también nos ayuda a mantener control sobre las versiones utilizadas dentro del proyecto. Además, cuando otro desarrollador clone el proyecto y ejecute `npm install`, npm leerá este archivo y descargará automáticamente todas las dependencias necesarias para ejecutar la aplicación.
// "dependencies": {
//         "body-parser": "^2.2.2", //* Indica la versión de Body Parser instalada en el proyecto.
// }

// ~Importacion de libreria Body Parser a nuestros archivos a implementarlo.
// ~Para poder utilizar Body Parser dentro de nuestros archivos JavaScript es necesario importar la librería en cada archivo donde vayamos a utilizarla. Node.JS permite importar librerías utilizando dos sistemas de módulos distintos: **CommonJS** (la forma tradicional usando `require`) o **ES Modules** (la forma moderna usando `import`). El método que utilicemos dependerá de la configuración establecida dentro del archivo `package.json`, específicamente en la propiedad `"type"`, la cual determina si el proyecto utilizará el sistema de módulos moderno o el tradicional.
// ?Forma antigua de importacion "require('')".
// ?La forma tradicional de importar librerías en Node.JS es mediante el uso de la función `require()`. Esta función carga el módulo especificado y devuelve el contenido exportado por dicho módulo. Normalmente se almacena en una variable constante para poder utilizar posteriormente todas las funcionalidades de la librería dentro del archivo. Este sistema pertenece al modelo **CommonJS**, el cual fue el estándar principal de Node.JS durante muchos años.
// const bodyParser = require('body-parser'); //* Importa la librería mongoose utilizando el sistema de módulos CommonJS.

// ?Forma nueva de importacion "import".
// ?La forma moderna de importar librerías es mediante la palabra reservada `import`, perteneciente al sistema **ES Modules (ESM)**. Este sistecma es el estándar oficial del lenguaje JavaScript moderno y es el recomendado actualmente para proyectos nuevos. En este caso utilizamos la sintaxis `import nombre from 'modulo'`, donde `nombre` será la variable que representará la librería dentro del archivo. Para poder utilizar esta sintaxis en Node.JS es necesario configurar `"type": "module"` dentro del archivo `package.json`.
import bodyParser from 'body-parser'; //* Importa la librería Body Parser utilizando el sistema moderno ES Modules.

// ~Uso de body-parser.json() / express.json().
// ~Tanto `body-parser.json()` como `express.json()` cumplen la misma función: actuar como middlewares que **desenpaquetan** la información recibida mediante `req` para que pueda ser utilizada dentro del handler. Estos middlewares se colocan antes de la función final de la ruta, exactamente igual que cualquier otro middleware de Express. Una vez implementados, permiten que los datos enviados por el cliente queden disponibles en `req.body`. Es importante entender que ambos están pensados específicamente para trabajar con cuerpos de petición en formato **JSON**, por lo que es necesario indicar la extensión `.json()` para que Express sepa cómo interpretar la información entrante.
// &Body-Parser.
// &Body-parser es un middleware externo que se debe importar previamente, ya sea mediante `require()` o `import`, dependiendo del sistema de módulos que estemos utilizando. Su comportamiento es el de una función middleware, por lo que debe ejecutarse dentro del flujo de la ruta antes de que llegue al handler principal. Al usar `bodyParser.json()`, le indicamos al servidor que convierta el cuerpo de la petición en un objeto JavaScript accesible mediante `req.body`, lo cual resulta esencial cuando queremos recibir información enviada desde el frontend, Postman o cualquier otro cliente HTTP.
app.post('/nombreRuta', bodyParser.json(), (req, res) => { //* Se define una ruta POST e inmediatamente se inserta el middleware bodyParser.json() para interpretar el cuerpo de la petición antes de ejecutar el handler.
    //* **Concepto clave:** el middleware se ejecuta antes del callback principal, por lo que transforma la información entrante en un objeto utilizable por JavaScript.
    //* **Importante:** si no se utiliza este middleware, `req.body` puede llegar como `undefined`, lo que impediría acceder a los datos enviados por el cliente.
}) //* Cierre de la ruta POST con body-parser.

// &Express.json().
// &`express.json()` es el middleware nativo incluido en Express en versiones modernas, por lo que en la mayoría de los casos reemplaza completamente la necesidad de instalar `body-parser`. Su funcionamiento es esencialmente el mismo: leer el cuerpo de la petición, interpretar el JSON recibido y convertirlo en un objeto JavaScript accesible desde `req.body`. Esta opción es la más recomendada actualmente porque reduce dependencias innecesarias, simplifica el proyecto y mantiene un enfoque más limpio y moderno dentro de la aplicación.
app.post('/nombreRuta', express.json(), (req, res) => { //* Se define una ruta POST usando el middleware nativo express.json() para procesar el body en formato JSON.
    //* **Concepto clave:** `express.json()` cumple prácticamente el mismo papel que `body-parser.json()`, pero sin requerir una librería adicional.
    //* **Buena práctica:** usar `express.json()` en aplicaciones modernas para mantener el proyecto más simple, ligero y fácil de mantener.
    //* **Error común:** olvidar incluir este middleware y después intentar leer `req.body`, lo que provoca que la información no esté disponible dentro de la ruta.
}) //* Cierre de la ruta POST con express.json().

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Docker
// ^Docker es una plataforma utilizada en una computadora la cual nos permite montar y crear contenedores dentro de los cuales ppodemos ejecutar imagenes, ahora bien, una definicion y explicacion simple y sencilla de entender de Docker es que este crea conternededores klos cuales son procesos, por lo que docker los crea en nuestro dispisiutivo los cuales consumen recursos del mismo, donde mediante imagenes, las cuales son archivois con un codigo y cierta estructura que sirven de instrucciones para docker, mediante los cuales docker descarga o estabolece infgormacion creando, ejecutando y/o lanzando siertos servicios, esto podiendo avarcar desde crerar una conexion BD, hasta ejecutar aplicaciones web.

// ~Contenedores.
// ~Como se menciono anteriormente dentro de Docker podemos crear contenedores, los cuales como su nombre lo dice es un espacio o proceso el cual almacena cierta informacion o ejecucion, en este caso el contenedor sera unicamente el espacio ya que lo que este ejecutara es la imagen, siendo asi que el contenedor provee y almacena el proceso ademas de ejecutarlo y la imagen contiene toda la informacion necesaria para la ejecucion, haciendo asi que el contenedor provea lo indispensable como recuersos del ordenardor o mas. Por lo que si pudieramos establecer un ejemplo simple el contenedor seria una consola y la imagen seria del disco o juego.

// ~Imagenes.
// ~Las imagenes son las encargadas de ejecutar un proceso dentro de los contenedores en Dcoker, ademas de ser estas las responsables de levantar los contenedores, esto debido a que las imagenes son archivos las cuales contieenn instrucciones de lo que un contenedor alamcenara y lo que se ejecutara, podierndo dentro de estas especificar el proceso, credenciales y mas, descargando asi lo necesario desde la red haciendo asi que el contenedor ejecute la imagen, ya que como el ejemplo previo el contenedor es la consola y la imagen el disco teniendo dicha imagen toda la info y proceso necesarios para ser ejecutado.
// ?Archivos yml.
// ?Ahora bien las imagenes son archivos los cuales comunmente son declarados dentro de los proyectos directamente ne la raiz del proyecto, estos archivos son los responsables de contener el codigo que sirve como instrucciones para Docker para ejecutar y crear el contenedor y e proceso dentr ode este, por lo que comunmente se crea este archiv con el nombre docker-compose.yml, y dentro de este se debe de seguir una estructura muy especvifica segun el proceso a realizar, siendo los archivos YML extremandamente sensibles a espacios, simbolos, letras y mayiusculas y sobre todo las sangrias. Dentro de este se declarfa el serivcio, el cual se especifica el nombre de este, nombre de la imagen a descargar, las politicas de reinicio para que el servicio este siempre activo, las variables de entorno para manejar credenciales de acceso, los volumenes para que la informacion no se pierda al apagar el contenedor y los puertos para conectar nuestra computadora con el servicio interno.
// version: '3.8'

// services:
//   mongo-db:
//     image: mongo:6.0.13
//     container_name: mi_mongo_favorito
//     restart: always
//     environment:
//       # Ponemos los datos directo para descartar que el .env falle
//       MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
//       MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASSWORD}
//     volumes:
//       - ./mongo_data:/data/db
//     ports:
//       - 27017:27017

// ?Ejecucion de imagenes.
// ?Una vez tengamos nuestras imagenes (archivo yml con el codigo/instrucciones necesarias), deberemos levantar nuestra imagen dentro del contenedor. Por lo que con el simple hecho de levantar la imagen esta automaticamente lo levantara en un contenedor, por lo que para esto es indispensable y necesario que nuestro archivo o imagen yml se llame docker-compose.yml, ya que si configuramos otro nombre deberemos agregar pasaso adicionales para que docker ubique nuestro archivo. Por lo que para levantarlo es necesario tener ejecutando en segundo plano docker, por lo que se usara el comando docker-compose up -d y si todo esta correctamente se levantara la imagen.
// docker compose up -d

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^Otras paqueterias o librerias
// ^Si bien ya hemos visto previamente las librerías más indispensables y más comúnmente usadas en el mundo backend con Node.JS, existen una infinidad prácticamente ilimitada de librerías creadas tanto de manera oficial como por la misma comunidad. Debido a esto, y para no abarcar demasiado espacio dentro de este manual o código explicando una por una cada librería en profundidad, en esta sección solamente se incluirá el nombre de la librería, su función principal y el comando o nombre del comando con el que se instala. No se profundizará en su forma de uso, importación o ejecución porque cada una puede variar considerablemente dependiendo de su propósito. Además, como ya se vio anteriormente, la mayoría de estas herramientas pueden instalarse mediante `npm i nombrePaqueteria` y, en caso de que solo se necesiten durante el desarrollo, también pueden agregarse con `--save-dev`.

// ~TS Node Dev.
// ~TS Node Dev es una librería diseñada para ejecutar archivos TypeScript de manera directa, sin necesidad de realizar manualmente una compilación previa a JavaScript cada vez que hacemos un cambio. Esto la convierte en una herramienta muy útil durante el desarrollo, ya que automatiza el proceso de ejecución y reinicio del servidor cuando detecta modificaciones en los archivos TypeScript. En otras palabras, su comportamiento es muy similar al de Nodemon, pero enfocado específicamente en proyectos TypeScript. Gracias a esto, evita que tengamos que depender constantemente de `tsc --watch` para compilar el código o de pasos adicionales para ejecutar el archivo resultante. Es una paquetería especialmente práctica cuando queremos una experiencia de desarrollo rápida, fluida y orientada a TypeScript. Para instalarla normalmente se utiliza el nombre `ts-node-dev`, ya que ese es el paquete que se agrega al proyecto.
// npm i ts-node-dev

// ~Rimraf.
// ~Rimraf es una paquetería o librería que nos permite eliminar carpetas de forma programática desde nuestro código. Su utilidad principal aparece cuando necesitamos borrar directorios completos, incluyendo todo su contenido, de manera segura y controlada desde Node.JS. Esto resulta especialmente útil en procesos de limpieza, scripts de mantenimiento o automatización de tareas donde se necesita eliminar carpetas generadas temporalmente, carpetas de compilación o directorios que ya no son necesarios dentro del proyecto. En pocas palabras, Rimraf facilita la eliminación de carpetas cuando las operaciones del sistema de archivos normales no son suficientes o no resultan tan cómodas de usar. Para instalarla normalmente se utiliza el nombre `rimraf`.
// npm i rimraf

// ~Prisma.
// ~Prisma es una herramienta de acceso a bases de datos cuya función es muy similar a la de Mongoose, ya que permite interactuar con bases de datos desde nuestro código backend de una forma más estructurada y amigable. Su objetivo es simplificar el trabajo con la base de datos, ayudándonos a definir modelos, hacer consultas y manejar operaciones de persistencia de información de manera más clara y mantenible. Prisma actúa como una capa de abstracción entre la aplicación y la base de datos, facilitando la interacción con ella sin necesidad de escribir consultas tan directas o manuales en cada caso. Por esta razón, es una opción muy utilizada en proyectos modernos donde se busca organización, escalabilidad y una mejor experiencia de desarrollo. Para instalarlo normalmente se utiliza el nombre `prisma`.
// npm i prisma

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ^Implementacion de TypeScript en proyectos Node.JS.
// ^Como bien sabemos, la forma base, estándar y más común de trabajar con proyectos de Node.JS es utilizando JavaScript puro. Sin embargo, también es totalmente posible (y altamente recomendable en muchos casos) trabajar con TypeScript, ya que este lenguaje añade **tipado estático**, mejorando la robustez, mantenibilidad y escalabilidad del proyecto. Implementar TypeScript en Node.JS implica algunos pasos adicionales, ya que Node no entiende TypeScript de forma nativa. Por ello, es necesario instalar herramientas que permitan compilar o interpretar este lenguaje. Además, muchas librerías están originalmente escritas en JavaScript, por lo que se requiere instalar definiciones de tipos (`@types/...`) para que TypeScript pueda reconocerlas correctamente. Esto genera que, en muchos casos, tengamos **dos dependencias por librería**: una para la librería en sí y otra para su tipado.

// ~Instalacion de TypeScript.
// ~Como se mencionó anteriormente, es necesario declarar TypeScript como una dependencia dentro del proyecto para indicarle a Node.JS que trabajaremos con este lenguaje. Sin embargo, es importante entender que esto **no convierte automáticamente Node en TypeScript**, sino que instala las herramientas necesarias (como el compilador `tsc`) para poder trabajar con archivos `.ts`. A partir de aquí, podremos compilar TypeScript a JavaScript o usar herramientas que lo ejecuten directamente. TypeScript no reemplaza a JavaScript, sino que se transpila a JavaScript para poder ejecutarse en Node.
// npm i typescript //* Instala TypeScript y agrega el compilador necesario para trabajar con archivos .ts.

// ~Declaracion de dependencia asignando TypeScript a paqueterias y librerias.
// ~Una vez que tenemos TypeScript instalado, el siguiente paso es asegurar que las librerías que usamos sean compatibles con este. Dado que muchas librerías están escritas en JavaScript, TypeScript necesita archivos de definición de tipos para poder entender su estructura interna. Estos archivos se instalan mediante paquetes que siguen la convención `@types/nombrePaquete`. Esto permite que tengamos autocompletado, validación de tipos y detección de errores en tiempo de desarrollo. Por lo que `@types/...` NO instala la librería, solo agrega su tipado, siendo asi buena practica instalar estos paquetes como `devDependencies`, ya que solo se usan en desarrollo.
// npm i @types/nombrePaquete //* Instala los tipos de una librería para hacerla compatible con TypeScript.

// Archivo Package.json
// "devDependencies": { //* Dependencias usadas solo en desarrollo (no necesarias en producción).
//     "@types/bcrypt": "^6.0.0", //* Tipos para la librería bcrypt (hash de contraseñas).
//     "@types/express": "^5.0.6", //* Tipos para Express (rutas, req, res, middlewares).
//     "@types/jsonwebtoken": "^9.0.10", //* Tipos para manejar tokens JWT.
//     "@types/node": "^25.5.2", //* Tipos nativos de Node (fs, path, process, etc.).
//     "prisma": "^7.6.0", //* Herramienta ORM para manejo de base de datos.
//     "rimraf": "^6.1.3", //* Librería para eliminar carpetas.
//     "ts-node-dev": "^2.0.0" //* Ejecuta TypeScript directamente con reinicio automático.
//  },

// "dependencies": { //* Dependencias necesarias en producción.
//     "@prisma/client": "^7.7.0", //* Cliente generado por Prisma para interactuar con la BD.
//     "bcrypt": "^6.0.0", //* Librería para encriptar contraseñas.
//     "dotenv": "^17.4.1", //* Permite usar variables de entorno desde un archivo .env.
//     "express": "^5.2.1", //* Framework para crear servidores y APIs.
//     "jsonwebtoken": "^9.0.3", //* Librería para autenticación con JWT.
//     "typescript": "^6.0.2" //* TypeScript como dependencia principal del proyecto.
// }
