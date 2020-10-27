const express = require('express')
const bodyParser= require('body-parser')
const app = express()

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

// All your handlers here...
app.get('/', (req, res) => {/*...*/})

app.post('/info', async(req, res) => {
    let body = req.body;

    if(body) {
        res.status(200).json({
            data: body,
            success: true
        });
    }
    return res.status(400).json({
        err: {
            message: 'No se encontro nada en body'
        }
    });
});

app.post('/quotes', (req, res) => {/*...*/})
