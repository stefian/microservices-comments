const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);    // sending an array empty or with the comments
});

app.post('/posts/:id/coments', (req, res) => {
    const commentId = randomBytes(4).toString(hex);
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];   // will give either an array or undefined; if undefine = []

    comments.push({ id: commentId, content });

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});