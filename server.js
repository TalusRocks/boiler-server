const app = require('./app')
const port = process.env.PORT || 3000

//listen to port
const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

module.exports = app
