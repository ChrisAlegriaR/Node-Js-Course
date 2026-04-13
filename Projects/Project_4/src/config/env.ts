// *Importacion de config desde dotenv.
import { config } from "dotenv";

// *Ejecucion de config(), para el guardado de credenciales en process.env.
config();

// *Declaracion de objeto el cual almacenara las credenciales ubicadas en process.env.
const variables = {
    port: process.env.PORT
}

// *Exportacion del objeto que almacena las credenciales.
export default variables;