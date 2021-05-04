const Pool = require('pg').Pool;

const pool = new Pool({
    password: 'password',
    user: 'feng',
    database: 'toyota',
    host: 'localhost',
    port: '4321',
    // ssl: {rejectUnauthorized:false}
});

module.exports = pool;

