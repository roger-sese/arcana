class user {
    static _query = {
        insertUser: `INSERT INTO user (first_name, last_name) VALUES (?, ?)`,
        getAllUser: `SELECT * FROM user`,
    }
}

module.exports = user;