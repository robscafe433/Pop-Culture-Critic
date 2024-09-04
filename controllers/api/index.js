const router = require('express').Router();
const itemRoutes = require('./itemRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/item', itemRoutes);
router.use('/review', reviewRoutes);
router.use('/user', userRoutes);

module.exports = router;
