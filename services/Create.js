const {Connection} = require("../src/database/Connection")

module.exports = async (username, password) => {
  try {
    const query = `INSERT INTO ` +
                    `accounts ` +
                  `VALUES ` +
                    `('${username}', '${password}')`

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}