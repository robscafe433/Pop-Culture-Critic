const router = require("express").Router();
const { Review } = require("../../models");

// Endpoint: /api/review

// Post a review
router.post("/", async (req, res) => {
  /* req.body should look like this...
    {
      "review": "I didn't really like it that much.",
      "item_id": 1,
    }
  */
  try {
    const reviewData = await Review.create(req.body);

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a review
// router.delete("/:id", async (req, res) => {
//   // delete one product by its `id` value
//   try {
//     const reviewData = await Review.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     res.status(200).json(reviewData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
