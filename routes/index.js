var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*autocomplétion */
router.get('/autocomplete', (req, res) => {
  const query = encodeURIComponent(req.query.q);
  fetch(`https://api.comparatrip.eu/cities/autocomplete/?q=${query}`)
    .then(response => response.json())
    .then(data => {
      res.json({ data: data });
    });
 });

// Get les 5 villes les plus populaires
 router.get('/popular', (req, res) => {
  fetch(`https://api.comparatrip.eu/cities/popular/5`)
    .then(response => response.json())
    .then(data => {
      res.json({ data: data });
    });
 });

 //obtenir les trajets les plus populaires par ville. Accès : data[0].unique_name etc
 router.get('/popular/:city', (req, res) => {
  const city = req.params.city;
  fetch(`https://api.comparatrip.eu/cities/popular/from/${city}/5`)
    .then(response => response.json())
    .then(data => {
      res.json({ data: data });
    });
});


module.exports = router;
