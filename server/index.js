const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

const controller = require('./controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/games', controller.read)
app.post('/games', controller.create)
app.delete('/games/:title', controller.delete)

app.listen(port, () => console.log(`Listening on port ${port}`));