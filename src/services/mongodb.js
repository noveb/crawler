const mongoose = require('mongoose');

const config = require('../config/config.js');

// const options = {
//     user: process.env.ME_CONFIG_MONGODB_ADMINUSERNAME,
//     pass: process.env.ME_CONFIG_MONGODB_ADMINPASSWORD,
// };

const connectDb = () => mongoose.connect(config.databases.mongodb.connection);

module.exports = connectDb;
