const Router = require('express-promise-router');
const { body, validationResult } = require('express-validator');
const { userInfo } = require('os');
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
        
    } catch (err) {
        
    }
})

// Quick error handling function
function errorHandler(err, res){
    console.error(err);
    res.send(`Error ${err}`);
}