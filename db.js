const Pool = require('pg').Pool;

const pool = new Pool({
    password: '94ac32702f02046b4dd367b2371be187702d87f113bbeb270a55fcc2b19d6a45',
    user: 'bajmwafqwghlaw',
    database: 'dbr0vbn2a61f0l',
    host: 'ec2-54-224-194-214.compute-1.amazonaws.com',
    port: '5432',
    // ssl: {rejectUnauthorized:false}
});

module.exports = pool;

