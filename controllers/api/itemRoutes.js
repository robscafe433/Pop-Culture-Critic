const router = require("express").Router();
// const { log } = require('handlebars/runtime');
const { Item, Review } = require("../../models");

// Endpoint: /api/item

router.get("/:title", async (req, res) => {
  try {
    const itemData = await Item.findOne({
      where: { item_name: req.params.title },
      attributes: ["id", "type", "item_name", "creator", "year", "submittedBy"],
      include: [
        {
          model: Review,
          attributes: ["review", "rating"],
        },
      ],
    });

    res.status(200).json(itemData);

    // const itemPlainTrue = itemData.get({ plain: true });

    // res.render("viewItem", {
    //   itemPlainTrue,
    //   loggedIn: req.session.loggedIn,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  /* req.body should look like this...
    {
      "item_name": "A Guide to Sanity",
      "year": 1998,
      "creator": "Felipe",
      "type": "Book"
    }
  */

  try {
    console.log(req.session);
    const itemData = await Item.create(req.body, {
      submittedBy: req.session.username,
    });

    res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get("/view/:id", async (req, res) => {
//   try {
//     const itemData = await Item.findByPk(req.params.id, {
//       attributes: [
//         "type",
//         "item_name",
//         "artist",
//         "composer",
//         "author",
//         "rating",
//         "director",
//         "submittedBy",
//       ],
//       include: [
//         {
//           model: Review,
//           attributes: ["review"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     // const items = itemData.map((item) => item.get({ plain: true }));
//     const itemPlainTrue = itemData.get({ plain: true });
//     console.log("TTTTTTTTTTTTTTTTTTTTTTT", req.session.loggedIn);
//     console.log("itemPlainTrue", itemPlainTrue);

//     // Pass serialized data and session flag into template
//     res.render("viewItem", {
//       itemPlainTrue,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
