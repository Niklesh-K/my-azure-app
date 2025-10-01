const express = require('express');
const app = express();

const greeting = process.env.GREETING || 'Hello from Niklesh!';

// Root endpoint
app.get('/', (req, res) => res.send(greeting));

// Status endpoint
app.get('/status', (req, res) => res.json({ status: 'ok' }));

// Time endpoint (Day 7)
app.get('/time', (req, res) => {
  const now = new Date().toISOString();
  res.json({ time: now });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App running on port ${port}`));
}

module.exports = app;

