//temp data
const tasks = [
  {
    "id": 1,
    "name": "title of task"
  },
  {
    "id": 2,
    "name": "dif title of task"
  },
  {
    "id": 3,
    "name": "third title of task"
  }
]

class taskModel {

  static getAllTasks() {
    return tasks
  }

  static getOneTask(id) {
    return tasks.filter(el => el.id == id)
  }

  static createNewTask(newTask) {
    newTask.id = tasks.length + 1
    tasks.push(newTask)
    return tasks
  }

  static editTask(id, taskEdit) {
    let taskToEdit = tasks.filter(el => el.id == id)
    taskToEdit.name = taskEdit
    return taskToEdit
  }

  static deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) {
        tasks.splice(i, 1)
      }
    }
    return tasks
  }

}

module.exports = taskModel
