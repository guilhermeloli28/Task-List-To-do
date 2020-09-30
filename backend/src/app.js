const app = require('express')()
const consign = require('consign')
const knex = require('knex')
const knexfile = require('../knexfile')

consign()
    .include('./config/middlewares.js')
    .then('./config/cors.js')
    .then('./api')
    .then('./routes')
    .into(app)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.db = knex(knexfile.test)

app.get('/', function(req, res) {
    res.send('Todo APP');
});

module.exports = app;