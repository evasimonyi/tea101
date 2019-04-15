const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');

const teas = require('./teas')

app.use(express.json());
app.use(cors());

app.get('/teas', (req, res) => {
  res.json(teas.teas)
});

app.listen(PORT, () => { console.log(`App is listening on port: ${PORT}`); });
