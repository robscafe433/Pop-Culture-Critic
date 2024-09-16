const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "item",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
