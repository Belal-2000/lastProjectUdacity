import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
describe('Test "root"=>"/" endpoint response',async() => {
  it('Get test to "root"=>"/"',() => {
    setTimeout(async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    }, 2050);
  });
});
