const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

// Local - GET ALL
router.get('/', async(req, res)=>{
    try {
        const result = await db.query('SELECT * FROM users')
        res.send(result.rows);
    } catch (err) {
        console.error(err);
        res.send(`Error ${err}`);
    }
});