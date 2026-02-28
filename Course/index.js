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
