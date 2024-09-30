const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({


    title: {
        type: String,
    },

    author: {
        type: String,
    },

    primaryCategory: {
        type: String,
    },

    secondaryCategory: {
        type: String,
    },

    series: {
        type: String,
    },

    shortDescription: {
        type: String,
    },

    longDescription: {
        type: String,
    },

    warningText: {
        type: String,
    },

    bookrating: {
        type: Number,
        min:0,
        max:5,
    },

    bookCover: {
        type: String,
    },

    Pdf: {
        type: String,
    },

    mobiKindle: {
        type: String,
    },
});

module.exports = mongoose.model('Book', BookSchema);
