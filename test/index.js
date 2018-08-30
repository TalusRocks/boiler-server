//assertion library for testing structure
const test = require('tape')
//library for testing nodejs http servers
const request = require('supertest')
const app = require('../app')

test('Get all tasks', function (t) {
  request(app)
    .get('/tasks/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      let expectedTasks = [
        {
          "id": 1,
          "text": "a"
        },
        {
          "id": 2,
          "text": "b"
        },
        {
          "id": 3,
          "text": "c"
        }
      ]

      //test that there ISN'T an error
      t.error(err, 'No error')
      //compare to res.body
      t.same(res.body.data, expectedTasks, 'Found all tasks')
      t.end()
    })
})

test('Get one task', function (t) {
  request(app)
    .get('/tasks/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      let expectedTask = [{ "id": 1, "text": "a"}]

      t.error(err, 'No error')
      t.same(res.body.data, expectedTask, 'Found specific task')
      t.end()
    })
})

test('Create new task', function (t) {
  request(app)
    .post('/tasks/')
    .send({"text": "d"})
    .set('Accept', 'application/json')
    .end((err, res) => {
      let expectedTask = { "id": 4 , "text": "d" }

      let lastTask = res.body.data[res.body.data.length - 1]

      t.error(err, 'No error')
      t.same(lastTask, expectedTask, 'Created new task')
      t.end()
    })
})

test('Edit a task', function (t) {
  request(app)
    .put('/tasks/1')
    .send({"text": "i'm different!"})
    .set('Accept', 'application/json')
    .end((err, res) => {
      let expectedTask = { "id": 1 , "text": "i'm different!" }

      t.error(err, 'No error')
      t.same(res.body.data[0], expectedTask, 'Edited task')
      t.end()
    })
})

test('Delete a task', function (t) {
  request(app)
    .delete('/tasks/1')
    .set('Accept', 'application/json')
    .end((err, res) => {
      let expectedTasks = [
        {
          "id": 2,
          "text": "b"
        },
        {
          "id": 3,
          "text": "c"
        },
        {
          "id": 4,
          "text": "d"
        }
      ]

      t.error(err, 'No error')
      t.same(res.body.data, expectedTasks, 'Deleted a task')
      t.end()
    })
})
