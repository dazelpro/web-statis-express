const router    = require('express').Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/about', function (req, res) {
    res.render('about');
});

module.exports = router;