const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        unique: true,
    },

    lastname: {
        type: String,
    },

    joiningDate: {
        type: Date,
        default: Date.now,
    },

    gender: {
        type: String,
    },

    booksdownloadAvailable: {
        type: String,
        default: 'no buy plan',
    },

    audiobooksdownloadAvailable: {
        type: String,
        default: 'no buy plan',
    },

    email: {
        type: String,
        unique: true,
    },

    location: {
        type: String,
    },

    paymentplans: {
        type: String,
        default: 'no buy plan',
    },

});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;