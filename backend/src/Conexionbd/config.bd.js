// aqui se configura las variables de entorno que puede dar el servidor
// pueden conectarse a la base de datos que tengan solo cambiando los datos despues del simbolo (||) 
import { config } from "dotenv";
config()
export const PORT = process.env.PORT || 3000 // PORT de la api
export const DB_USER = process.env.DB_USER || "root" // usario de la base de datos
export const DB_PASSWORD = process.env.DB_PASSWORD || "" // password de la base de datos
export const DB_HOST = process.env.DB_HOST || "localhost" // host de la base de datos
export const DB_DATABASE = process.env.DB_DATABASE || "futbol" // el nombre de la base de datos que vas usar
export const DB_PORT = process.env.DB_PORT || "3306" // port de la base de datos 