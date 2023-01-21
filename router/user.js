const user_router = require('express').Router();
const User = require('../crew/User')

user_router.get('/', async (req, res) => {
    const result = await User.getAllUser();
    res.send(result);
})

module.exports = user_router;