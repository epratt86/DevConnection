const express = require('express');

const app = express();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
