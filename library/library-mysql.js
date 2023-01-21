const user = require('../secrets/user-secrets-query');

class MYSQL {
    static _table = {
        user
    }
}

module.exports = {
    MYSQL
}