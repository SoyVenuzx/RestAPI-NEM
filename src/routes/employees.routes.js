import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from '../controllers/employees.controller.js'
import { Router } from 'express'

const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees/registrar', createEmployee)

router.put('/employees/actualizar/:id', updateEmployee)

router.patch('/employees/actualizar/:id', updateEmployee)

router.delete('/employees/eliminar/:id', deleteEmployee)

export default router
