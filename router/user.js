const user_router = require('express').Router();
const User = require('../crew/User')

user_router.route('/')
    .get(async (req, res) => {
        const result = await User.getAllUser();
        res.send(result);
    })
    .post(async (req, res) => {
        const { first_name, last_name } = req.body;
        const result = await User.insertUser({ first_name, last_name });
        res.send({ message: `Successfully created` });
    })



module.exports = user_router;