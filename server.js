const path = require('path');
const express = require('express');
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const publicPath = path.join(__dirname, 'frontend', 'build');
const port = process.env.PORT || 3000;

// LOAD BUILD INDEX.JS FILE
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(publicPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.listen(port, () => {
  console.log('server is up!');
});
