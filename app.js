const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//parse incoming request bodies
const bodyParser = require('body-parser')
//logging request details
const morgan = require('morgan')
//allow cross-origin requests
const cors = require('cors')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

//routes
const taskRouter = require('./src/routes/task-routes')
app.use('/tasks', taskRouter)

//500 errors
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || "Sorry, something went wrong"
  res.status(status).json({error: {message}})
})

//404 errors
app.use((req, res, next) => {
  const status = 404
  const message = `Could not ${req.method} ${req.path}`
  res.status(404).json({status, message})
})

//listen to port
const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

module.exports = app
