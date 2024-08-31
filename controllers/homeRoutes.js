const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Get form (Req: Logged in)
router.get("/form", withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// Get login (Req: Not logged in)
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
