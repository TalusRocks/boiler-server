//assertion library for testing structure
const test = require('tape')
//library for testing nodejs http servers
const request = require('supertest')
const app = require('../app')

test('Tasks returned', function (t) {
  request(app)
    .get('/tasks/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.end()
    })
})
