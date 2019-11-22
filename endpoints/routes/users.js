var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    {
      name : "darshan",
      isActive : true,
      age : 31
    },
    {
      name : "vilas",
      isActive : true,
      age : 33
    },
    {
      name : "vimal",
      isActive : true,
      age : 35
    },
  ]
  res.json(users);
});

module.exports = router;
