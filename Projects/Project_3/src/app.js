import express from 'express'
import { envs } from './config/env.js'

const app = express();

app.get(/.*/, (req, res) => {
    res.send('<h1>¡Servidor funcionando perfectamente!</h1>');
})

app.listen(envs.port,() => {
    console.log(`Servidor ejecutandose en el puerto: ${envs.port}.`)
})

console.log(envs.port)

