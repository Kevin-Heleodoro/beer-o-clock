const {Pool, Client} = require('pg');

//Local
// const pool = new Pool ({
//     name: process.env.DATABASE_USER,
//     database: process.env.DATABASE_NAME,
//     host: 'localhost',
//     port: 5432,
//     password: process.env.DATABASE_PASSWORD
// });

// Deployed
const pool = new Pool ({
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD
});

module.exports = {
    query: (text,params) => pool.query(text,params)
};