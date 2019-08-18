const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.PORT || 8080);

// in dev

const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

app.use(webpackMiddleware(webpack(webpackConfig)));

// in prod
// app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Listening in port ${app.get('port')}`);
})