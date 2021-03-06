
const express = require('express');
const app = express();
const morgan = require('morgan');
const { handler } = require('./util/errors');
const bearerToken = require('./util/auth/bearer-token');

app.use(morgan('dev', {
    skip() {
        return process.env.NODE_ENV === 'test';
    }
}));

app.use(express.static('dist'));
app.use(express.json());

app.use(bearerToken);

app.use('/api/users', require('./routes/users'));

app.use('/api/matches', require('./routes/matches'));
app.use('/api/breeds', require('./routes/breeds'));
app.use('/api/dogs', require('./routes/dogs'));
app.use(handler);

app.use(handler);

module.exports = app;
