const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({

    name: String,
    id: String,
    howOften: Number,
    sources: [String],
    lang: String,
    region: String,
    howMany: Number,
    deliverTo: Number,
    rss: String,
    deliverToData: String,

},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

const alertData = mongoose.model('alert', alertSchema);

module.exports = alertData;
