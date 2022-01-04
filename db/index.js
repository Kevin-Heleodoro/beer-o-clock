const {Pool, Client} = require('pg');

// Deployed
if(process.env.DATABASE_URL) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    
    client.connect();
    
    module.exports = client;
} 
// Local
else {
    const pool = new Pool ({
        name: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        host: 'localhost',
        port: 5432,
        password: process.env.DATABASE_PASSWORD
    });

    module.exports = {
        query: (text,params) => pool.query(text,params)
    };
}