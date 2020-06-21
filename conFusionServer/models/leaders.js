const mongoose = require('mongoose')

const leaderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
});

var Leader = mongoose.model('Leader', leaderSchema);

module.exports = Leader;