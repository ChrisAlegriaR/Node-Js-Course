// *Importacion de herramientas, variables y librerias.
import express  from "express"; 
import variables from "./config/env.js";
import { router as authRouter } from "./routes/authRoutes.js";
import { router as usersRouter } from "./routes/userRoutes.js";

// *Declaracion de app mediante express().
const app = express();

// *Integracion de middleware a todas las rutas, el cual procesa a JSON los req.body y req.params.
app.use(express.json());

// *Declaracion de rutas auth.
app.use('/auth', authRouter);

// *Declaracion de rutas de usuarios
app.use('/users', usersRouter);

// *Exportacion de app con todas las rutas creadas.
export default app;