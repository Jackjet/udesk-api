var express = require('express');
var router = express.Router();

//http://121.43.181.25:10250/
/* GET home page. */
router.use('/', function(req, res, next) {

  console.log(req.query);
  console.log(req.body);

  return res.json({
    success: true
  });
});

module.exports = router;
