const sequelize = require("../config/connection");
const { User, Item, Review } = require("../models");

const userData = require("./userData.json");
const itemData = require("./itemData.json");
const reviewData = require("./reviewData.json");

const database = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Item.bulkCreate(itemData, {
    individualHooks: true,
    returning: true,
  });

  await Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

database();
