const { DB } = require('../library/library-db');

class User {
    static async insertUser(data) {
        const result = await DB.exec(DB._table.user._query.insertUser, data);

        return result;
    }

    static async getAllUser() {
        const result = await DB.exec(DB._table.user._query.getAllUser);

        return result;
    }
}

module.exports = User