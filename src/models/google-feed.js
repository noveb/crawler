const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({

});

const feedData = mongoose.model('feed', feedSchema);

module.exports = feedData;
