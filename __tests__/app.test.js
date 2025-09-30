const request = require('supertest');
const app = require('../index');

test('GET / should return greeting', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toMatch(/Hello from Niklesh!/);
});

test('GET /status should return ok', async () => {
  const res = await request(app).get('/status');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ status: 'ok' });
});

