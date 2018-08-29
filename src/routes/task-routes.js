const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task-controller')

router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getOneTask)
router.post('/', taskController.createNewTask)
router.put('/:id', taskController.editTask)
router.delete('/:id', taskController.deleteTask)

module.exports = router
