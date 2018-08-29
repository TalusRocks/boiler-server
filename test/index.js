//assertion library for testing structure
const test = require('tape')
//library for testing nodejs http servers
const request = require('supertest')
const app = require('../app')

test('Correct tasks returned', function (t) {
  request(app)
    .get('/tasks/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let expectedUsers = ['a', 'b', 'c']

      //test that there ISN'T an error
      t.error(err, 'No error')
      //compare to res.body
      t.same(res.body.data, expectedUsers, 'Tasks as expected')
      t.end()
    })
})
