'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/401_lab16');

const app = express();

//User Model
const schema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{ // TODO: Hash!
        type: String,
        required: true,
    },
})

const User = mongoose.model('User', schema);

// const u = User.create(username: 'user1');

// Router Stuff.
const router = express.Router();
router.get('/signin', (req, res) => {
    res.send('hola');
});

router.post('/signup', express.json(), (req, res) => {
    User.create(req.body)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(400));
});

app.use('/api', router);


app.listen(PORT, () => {
    console.log(`localhost:`, PORT, `CTRL+C to close.`);
});