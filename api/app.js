require('./dbs/init.mongodb');
// require('./dbs/init.redis');
const express = require('express');
const createError = require('http-errors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const {
    morganType,
    app: { clientDomain }
} = require('./config/config');

const app = express();
const options = {
    origin: clientDomain,
    credentials: true
};

// MiddleWare
app.use(cors(options));
app.use(helmet());
app.use(compression());
app.use(morgan(morganType));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Router
app.use('/api', require('./router/page'));
app.use('/api', require('./router/access'));
app.use('/api', require('./router/table'));

app.get('/setcookie', (req, res) => {
    res.cookie('testCookie', 'magic content');
    res.send('set the cookie');
});

app.get('/readCookie', (req, res) => {
    res.send('your cookies: ' + inspect(req.cookies['testCookie']));
    console.log(req.cookies);
});

// Catch NotFound
app.use((req, res, next) => {
    throw createError.NotFound();
});

// Catch Error
app.use((err, req, res, next) => {
    if (err) {
        res.status(err.status).json({
            status: err.status,
            msg: err.msg,
            code: err.code
        });
    }
});

module.exports = app;
