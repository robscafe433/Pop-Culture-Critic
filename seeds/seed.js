const sequelize = require("../config/connection");
<<<<<<< HEAD
// const { User } = require('../models');
    
=======
const { User } = require("../models");

const userData = require("./userData.json");

const database = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

database();
>>>>>>> 217b0fa9a6fef50f5ba312c0b7ab4c5c88b73c5c
