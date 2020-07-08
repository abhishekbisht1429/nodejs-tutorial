const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish', 
        unique: true
    }]
}, {timestamps: true});

module.exports = mongoose.model('Favourite', favouriteSchema);