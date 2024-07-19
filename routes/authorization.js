var express = require('express');

var router = express.Router();

router.get('/loginModal', function (req, res, next) {
    res.render('loginModal');
});

module.exports = router;
