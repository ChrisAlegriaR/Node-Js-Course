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
