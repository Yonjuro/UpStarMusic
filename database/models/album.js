const Schema = require('mongoose').Schema;

var AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number,
});

module.exports = AlbumSchema;
