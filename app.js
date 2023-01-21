const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.APP_PORT;

const userRoute = require('./router/user')

app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})