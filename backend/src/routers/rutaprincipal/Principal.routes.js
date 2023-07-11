// aqui solo se exportan las rutas de las otros archivos aqui no se crea la ruta en si solo aqui se coloca para que la llame el index
import { pool } from "../../Conexionbd/ConnecBd.js";
import { Router } from "express";
const router = Router();
// ------ cution -----------------
router.get('/cution', async (req, res) => {
    const result =  await pool.query('select * from EQUIPO')
    res.json(result[0]);
})
router.post('/cution')
router.patch('/cution')
// aqui agregas mas metodos si lo nesecitas 
// ------ clasificaciones -----------------
router.get('/clasificaciones')
router.post('/clasificaciones')
router.patch('/clasificaciones')
// aqui agregas mas metodos si lo nesecitas 
// ------ club -----------------
router.get('/club')
router.post('/club')
router.patch('/club')
// aqui agregas mas metodos si lo nesecitas 
// ------ jorney -----------------
router.get('/jorney')
router.post('/jorney')
router.patch('/jorney')
// aqui agregas mas metodos si lo nesecitas 
// ------ login -----------------
router.get('/login')
router.post('/login')
router.patch('/login')
// aqui agregas mas metodos si lo nesecitas 
// ------ player -----------------
router.get('/player')
router.post('/player')
router.patch('/player')
// aqui agregas mas metodos si lo nesecitas
// ------ scroes -----------------
router.get('/scroes')
router.post('/scroes')
router.patch('/scroes')
// aqui agregas mas metodos si lo nesecitas
// ------ status-players -----------------
router.get('/status-players')
router.post('/status-players')
router.patch('/status-players')
// aqui agregas mas metodos si lo nesecitas


export default router