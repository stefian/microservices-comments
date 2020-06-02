const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('cryptp');

const app = express();
app.use(bodyParser.json());

app.get('/posts/:id/comments', (req, res) => {

});

app.post('/posts/:id/coments', (req, res) => {

});

app.listen(4001, () => {
    console.log('Listening on 4001');
});