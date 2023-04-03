import { createPool } from 'mysql2/promise'
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_DATABASE,
  DB_PASSWORD
} from './config.js'

export const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
})
