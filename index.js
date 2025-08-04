const express = require('express');
const moment = require('moment'); // Zafiyetli paketimiz
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Merhaba! Zafiyetli moment versiyonu kullanılıyor: ${moment.version}`);
});

app.listen(port, () => {
  console.log(`Demo uygulama http://localhost:${port} adresinde çalışıyor.`);
});
