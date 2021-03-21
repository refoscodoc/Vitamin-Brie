const { response } = require('express');
const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/addgame', async (req, res, next) => {

    res.json({test: `test`});

    try {
        let results = await db.all();
        response.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

});

module.exports = router;