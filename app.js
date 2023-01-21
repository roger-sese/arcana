const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();
const PORT = process.env.APP_PORT;

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const userRoute = require('./router/user')

app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})