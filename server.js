const express = require('express');
const connectDB = require('./config/db');

const app = express();
// Connect DB
connectDB();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
