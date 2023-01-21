const { createPool } = require("mysql");
const user = require('../secrets/user-secrets-query');

require('dotenv').config();

class DB {
    static pool = null;

    static _table = {
        user
    }

    static async init() {
        if (DB.pool === null) {

            DB.pool = createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                port: process.env.DB_PORT
            });
        }
    }

    static async exec(queryString, params = []) {
        await DB.init();

        try {
            return new Promise((resolve, reject) => {
                DB.pool.getConnection( (error, connection) => {
                    if(error) reject(error);

                    connection.query(queryString, params, (error, results) => {
                        if(error) reject(error);

                        resolve(results);
                    })

                    connection.release();
                })
            })
        } catch (error) {
            throw Error(error);
        }
    }
}


module.exports = {
    DB
}