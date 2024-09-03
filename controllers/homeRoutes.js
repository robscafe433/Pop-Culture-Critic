const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Check if the user is logged in
        const loggedIn = req.session.logged_in;

        // Render the homepage template with the loggedIn variable
        res.render('homePage', {
            loggedIn,
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
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
    } else {
        res.render('login');
    }
    // Otherwise, render the 'login' template
});

module.exports = router;
