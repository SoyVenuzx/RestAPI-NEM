
import express from 'express'
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'

import './config.js'

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use(indexRoutes)
app.use('/api', employeesRoutes)

// 404
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default app
