const express = require('express');
const app = express();

const greeting = process.env.GREETING || 'Hello from Niklesh!';

// Root endpoint
app.get('/', (req, res) => res.send(greeting));

// Status endpoint
app.get('/status', (req, res) => res.json({ status: 'ok' }));

// Time endpoint
app.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

// Health endpoint (returns uptime + status)
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: Number(process.uptime().toFixed(2)) // seconds, two decimals
  });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App running on port ${port}`));
}

module.exports = app;

