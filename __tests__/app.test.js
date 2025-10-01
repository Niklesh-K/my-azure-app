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

test('GET /time should return current time', async () => {
  const res = await request(app).get('/time');
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('time');
});

test('GET /health should return healthy with uptime', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('status', 'healthy');
  expect(res.body).toHaveProperty('uptime');
  expect(typeof res.body.uptime).toBe('number');
});

