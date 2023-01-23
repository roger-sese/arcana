const user_router = require('express').Router();
const { saveUserDetails } = require('../controller/user');
const User = require('../crew/User');

user_router.route('/')
    .get(async (req, res) => {
        const result = await User.getAllUser();
        res.send(result);
    })
    .post(async (req, res) => {
        const { first_name, last_name } = req.body;
        const { result, error } = await saveUserDetails({ first_name, last_name });

        if (error) {
            res.status(error.statusCode).send(error.body);
        } else {
            res.send(JSON.parse(result.body));
        }
    });



module.exports = user_router;