const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET ROUTE Grabs all data from genres table from database
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "genres";';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT genres query', err);
      res.sendStatus(500);
    });
});

module.exports = router;