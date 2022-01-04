const Router = require('express-promise-router');
const client = require('../db');
const db = require('../db')

const router = new Router()

module.exports = router

// GET ALL
router.get('/', async(req, res)=>{
    try {
        const {rows} = await db.query('SELECT * FROM users')
        res.send(rows);
        // client.release()
    } catch (err) {
        errorHandler(err, res)
    }
});

// GET a user by id
router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {rows} = await db.query('SELECT * FROM users WHERE id = $1', [id])
        res.send(rows[0])
    } catch (err) {
        errorHandler(err, res)
    }
})

// Quick error handling function
function errorHandler(err, res){
    console.error(err);
    res.send(`Error ${err}`);
}