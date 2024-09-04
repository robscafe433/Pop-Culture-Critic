const router = require('express').Router();
const { log } = require('handlebars/runtime');
const { Item, Review } = require('../../models');

// Endpoint: /api/item

router.get('/:id', async (req, res) => {
    try {
        const itemData = await Item.findByPk(req.params.id, {
            include: [
                {
                    model: Review,
                },
            ],
        });

        // Serialize data so the template can read it
        // const items = itemData.map((item) => item.get({ plain: true }));
        const itemPlainTrue = itemData.get({ plain: true });
        console.log('TTTTTTTTTTTTTTTTTTTTTTT', req.session.loggedIn);
        console.log('itemPlainTrue', itemPlainTrue);

        // Pass serialized data and session flag into template
        res.render('viewPost', {
            itemPlainTrue,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
