const supertest = require('supertest');

const should = require('should');

const server = supertest.agent('http://localhost:3000');

describe('Sample unit test', () => {
  it('should return home page', (done) => {
    server
    .get('/')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      done();
    });
  });

  it('should add two number', (done) => {
    server
    .post('/add')
    .send({ num1: 10, num2: 20 })
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.should.equal(30);
      done();
    });
  });

  it('should return 404', (done) => {
    server
    .get('/random')
    .expect(404)
    .end((err, res) => {
      res.status.should.equal(404);
      done();
    });
  });
});
