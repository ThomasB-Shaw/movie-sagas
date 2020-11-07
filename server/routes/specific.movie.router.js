const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET ROUTE Grabs all data from genres table from database
router.get('/:ID', (req, res) => {
    let movieID = req.params.ID;
  const queryText = `SELECT * FROM "movies"
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."id" = $1;`;
  pool.query(queryText, [movieID])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT genres query', err);
      res.sendStatus(500);
    });
});

module.exports = router;