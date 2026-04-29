// *Importacion de herramientas, variables y librerias.
import app from "./app.js";
import variables from "./config/env.js";

// *Declaracion del iniciaador del servidor, siendo este el que levantara el mismo.
app.listen(variables.port, () => {
    console.log(`El servidor se esta ejecutando correctamente en el puerto ${variables.port}`);
})