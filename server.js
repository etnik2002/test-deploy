const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('home screen');
});

app.listen(3001, () => {
  console.log('server running on http://localhost:3001');
});
