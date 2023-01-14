const {Connection} = require("../src/database/Connection")

module.exports = async (fields) => {
  try {
    let query = null;
    if (fields){
      query = `SELECT ` +
                    `${fields} ` +
                  `FROM ` +
                    `accounts`
    }else {
      query = `SELECT ` +
                     `*` +
                  `FROM ` +
                    `accounts`
    } 
    const results = await Connection(query)

    return results
  } catch (err) {
    return []
  }
}