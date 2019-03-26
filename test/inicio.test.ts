import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('Deve retornar 200 OK', done => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
