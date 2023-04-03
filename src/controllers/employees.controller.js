import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM employee')
    res.json(result)
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params

    const [result] = await pool.query('SELECT * FROM employee WHERE id = ?', [
      id
    ])

    if (result.length <= 0)
      return res.status(400).json({ message: 'Employee not found' })
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body
    const [result] = await pool.query(
      'INSERT INTO employee (name, salary) VALUES (?, ?)',
      [name, salary]
    )

    res.json({
      id: result.insertId,
      name,
      salary
    })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const { name, salary } = req.body

    const [result] = await pool.query(
      'UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
      [name, salary, id]
    )

    if (result.affectedRows <= 0)
      return res.status(400).json({ message: 'Employee not found' })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params

    const [prev] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id])

    if (result.affectedRows <= 0)
      return res.status(400).json({ message: 'Employee not found' })

    res.json({
      message: 'Employee deleted',
      deleted: prev[0]
    })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}
