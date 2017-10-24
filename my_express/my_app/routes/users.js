var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).send({"hola":"hola"});
});

module.exports = router;
