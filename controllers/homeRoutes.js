const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homePage');
});

// Get form (Req: Logged in)
router.get('/form', withAuth, async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});

module.exports = router;
