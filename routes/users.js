const Router = require('express-promise-router');
const { body, validationResult } = require('express-validator');
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

// POST a new user
router.post('/', async(req, res)=> {
    try {
        const {name, city, state, fav_breweries} = req.body;
        const {rows} = await db.query(`INSERT INTO users (name, fav_breweries, city, state) VALUES ($1, $2, $3, $4)`, [name, fav_breweries, city, state])
        res.send({
            message: "New user added."
        })
        console.log(rows)
    } catch (err) {
        errorHandler(err, res)
    }
})

// UPDATE a user
router.put('/' , async(req, res)=> {
    try {
        const {fav_breweries, id} = req.body
        const {rows} = await db.query('UPDATE users SET fav_breweries = array_append(fav_breweries, $1) WHERE id = $2', [fav_breweries, id])
        res.send({
            message: "User updated!"
        })
        console.log(rows)
    } catch (err) {
        errorHandler(err, res)
    }
})

// DELETE a user
router.delete('/' , async(req, res) => {
    try {
        const {id} = req.body
        const {rows} = await db.query('DELETE FROM users WHERE id = $1', [id])
        res.send({
            message: "User deleted."
        })
    } catch (err) {
        errorHandler(err, res)
    }
})


// Quick error handling function
function errorHandler(err, res){
    console.error(err);
    res.send(`Error ${err}`);
}