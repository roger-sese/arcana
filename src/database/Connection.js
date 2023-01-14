const mysql = require('mysql')

const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "Rogermarksese23",
  port: 3306,
  database: "practice"
}


const Connection = (query) =>  
{
  const db = mysql.createPool(dbConfig);

  return new Promise((resolve, reject) => {
    db.getConnection((err, sql) => {
      if (err) {
        console.log("Database error: ", err)
        reject(err)
      } else {
        sql.query(query, (err, results) => {
          if (err) {
            console.log("Query error: ", err)
            reject(err)
          } else {
            resolve(results)
          }

          sql.release()
        })
      }
    })
  })
}


module.exports = {
  Connection
}