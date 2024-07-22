import { Router } from 'express'
import * as medicamentosController from '../controllers/medicamentos.controller.js'

const router = Router()

router.get('/medicamentos', medicamentosController.findAll)
router.get('/medicamentos/:id', medicamentosController.findById)
router.post('/medicamentos', medicamentosController.create)
router.put('/medicamentos/:id', medicamentosController.updateById)
router.delete('/medicamentos/:id', medicamentosController.deleteById)

export default router
