const { DB } = require('../library/library-db');

class User {
    static async insertUser({ first_name, last_name }) {
        const result = await DB.exec(DB._table.user._query.insertUser, [first_name, last_name]);

        return result;
    }

    static async getAllUser() {
        const result = await DB.exec(DB._table.user._query.getAllUser);

        return result;
    }
}

module.exports = User