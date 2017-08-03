var express = require('express');
var router = express.Router();

var counter = 0;
/* GET home page. */
router.get('/success', function(req, res, next) {
  res.json({ status: 'success' });
});

router.get('/error', function(req, res, next) {
  res.json({ status: 'error', reason: 'Какая-то ошибка с бека' });
});

router.get('/progress', function(req, res, next) {
  counter++;
  if (counter === 5) {
    res.json({ status: 'error', reason: 'Какая-то ошибка с бека' });
  } else {
    res.json({ status: 'progress', timeout: 500 });
  }
});

module.exports = router;
