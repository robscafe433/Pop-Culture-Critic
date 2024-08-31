const router = require("express").Router();
const { User } = require("../../models");

// Endpoint: /api/user

// Post a user
router.post("/", async (req, res) => {
  /* req.body should look like this...
    {
      "username": "Jerry",
      "email": "tom@hotmail.com",
      "password": "jerryMustGo"
    }
  */
  try {
    const userData = await User.create(req.body);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a user
// router.delete("/:id", async (req, res) => {
//   // delete one product by its `id` value
//   try {
//     const userData = await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
