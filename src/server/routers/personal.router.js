import { Router } from 'express'
import * as personalController from '../controllers/personal.controller.js'
import { authToken } from '../middlewares/perosnal.middleware.js'

const router = Router()
//todas las rutas de personal
router.get('/personal', personalController.findAll)
router.get('/personal/:id', personalController.findById)
router.post('/personal', personalController.create)
router.put('/personal/:id', personalController.updateById)
//ruta delete personal segurizada con token
router.delete('/personal/:id', authToken, personalController.deleteById)

export default router
