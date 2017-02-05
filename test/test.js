const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3000');

describe('Root', () => {
  it('should redirect you to login page', () => {
    server
    .get('/')
    .expect('/users/login')
    .expect(200);
  });
});
