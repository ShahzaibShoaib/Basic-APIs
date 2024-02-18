const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
});

const Books = mongoose.model('Books', BookSchema);

module.exports = Books;