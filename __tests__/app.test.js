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

// Day 7 test
test('GET /time should return current time', async () => {
  const res = await request(app).get('/time');
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('time');
  expect(new Date(res.body.time).toString()).not.toBe('Invalid Date');
});

