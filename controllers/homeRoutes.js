const router = require("express").Router();
// const { log } = require("handlebars/runtime");
const { Item, Review, User } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/", async (req, res) => {
//   try {
//     // Check if the user is logged in
//     const loggedIn = req.session.loggedIn;

//     // Render the homepage template with the loggedIn variable
//     res.render("homePage", {
//       loggedIn,
//     });
//     console.log("terminal`````````````````````````````````", loggedIn);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Get form (Req: Logged in)
router.get("/form", withAuth, async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// Login route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/homePage");
    return;
  }

  res.render("login");
  // Otherwise, render the 'login' template
});

// Signup route
router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/homePage");
    return;
  }

  res.render("signup");
  // Otherwise, render the 'login' template
});

// new review route
router.get("/form", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/form");
    return;
  }

  alert("Login or sign up first.");
  // Otherwise, render the 'login' template
});

router.get("/*", async (req, res) => {
  try {
    // Get all posts, sorted by name
    const itemData = await Item.findAll({
      include: [
        {
          model: Review,
        },
      ],
    });

    // Serialize data
    const items = itemData.map((review) => review.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render("homePage", { items, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
