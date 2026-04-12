// *Importacion de herramientas, variables y librerias.
import express  from "express"; 
import variables from "./config/env.js";

// *Declaracion de app mediante express().
const app = express();

// *Integracion de middleware a todas las rutas, el cual procesa a JSON los req.body y req.params.
app.use(express.json());

// *Declaracion de rutas.
// Autenticacion.

// Usuarios

// *Exportacion de app con todas las rutas creadas.
export default app;