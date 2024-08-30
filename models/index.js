const Item = require("./Item");
const Review = require("./Review");
const User = require("./User");

Item.hasMany(Review, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
});

Review.belongsTo(Item, {
  foreignKey: "item_id",
});

module.exports = { Review, Item, User };
