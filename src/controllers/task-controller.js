const model = require('../models/task-model')

class taskController {

  static getAllTasks(req, res, next) {
    const data = model.getAllTasks()
    res.status(200).json({data})
  }

  static getOneTask(req, res, next) {
    const data = model.getOneTask(req.params.id)
    res.status(200).json({data})
  }

  static createNewTask(req, res, next) {
    const data = model.createNewTask(req.body)
    res.status(201).json({data})
  }

  static editTask(req, res, next) {
    const data = model.editTask(req.params.id, req.body)
    res.status(200).json({data})
  }

  static deleteTask(req, res, next) {
    const data = model.deleteTask(req.params.id)
    res.status(200).json({data})
  }

}

module.exports = taskController
