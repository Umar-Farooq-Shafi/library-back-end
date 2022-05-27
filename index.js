const express = require('express');
const bs = require('body-parser');
const cors = require('cors');

const app = express();

app.disable('x-powered-by');
app.use(bs.json());
app.use(bs.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/', [
    require('./routes/students'),
    require('./routes/book'),
]);

module.exports = app;