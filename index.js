const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
  res.render('index.njk', {name: '<i>Sandra</i>'});
});

app.get('/page1', (req, res) => {
    res.render('page1.njk', {name: req.query.name});
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});