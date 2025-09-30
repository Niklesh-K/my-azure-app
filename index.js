const express = require('express');
const app = express();

const greeting = process.env.GREETING || 'Hello from Niklesh!';

app.get('/', (req, res) => res.send(greeting));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App running on port ${port}`));
}

module.exports = app;

