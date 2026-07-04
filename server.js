const express = require('express');
const app = express();
const PORT = 3000;

app.get('/matches', async (req, res) => {
  const response = await fetch('https://api.opendota.com/api/proMatches');
  const matches = await response.json();
  const lastFive = matches.slice(0, 5);
  res.json(lastFive);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});