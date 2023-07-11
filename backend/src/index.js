import express from "express";
import router from "./routers/rutaprincipal/Principal.routes.js";
import {PORT} from "./Conexionbd/config.bd.js"
import cors from "cors";
const app = express();

// --------------------------------
app.use(cors({
    origin: 'https://localhost:5173', // este es url del frontend que solamente pueden hacer peticiones desde este frontend la pueden cambiar 
    methods: ['GET', 'POST ', 'PUT', 'DELETE', 'PATCH'], // aqui las peticiones que puede hacer nada mas
}))
app.use(express.json());
app.use('/api',router)
app.use((req, res, next) => {
    res.status(404).json({
        message : 'Not Found' // esto si  colocan una routa no valida que mande un mensaje al cliente
    })
})
//----------------------------------
app.listen(PORT, (req, res) => {
    console.log(`api ejecutandose en el puerto ${PORT}` )
})