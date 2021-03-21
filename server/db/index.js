const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit: 10,
    password: 'vinazza',
    user: 'alberto',
    host: 'localhost',
    database: 'gamesdb',
    port: 3306

});

let cardsdb = {};

cardsdb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM games_table`, (err, results) => {

            if(err) {
                return reject(err);
            }
            return resolve(results);

        })

    })

};

module.exports = cardsdb;