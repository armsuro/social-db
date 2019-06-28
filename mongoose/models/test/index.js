const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    // gameID: {
    //     type: Number,
    //     unique: true,
    //     required: [true, 'GameID is required']
    // },
    // homeID: {
    //     type: Number,
    //     required: [true, 'HomeID is required']
    // },
    // awayID: {
    //     type: Number,
    //     required: [true, 'awayID is required']
    // },
    // sport_id: {
    //     type: Number,
    //     required: [true, 'sport_id is required']
    // },
    // home_name: {
    //     type: String,
    // },
    // away_name: {
    //     type: String,
    // },
    // start_date: {
    //     type: Date,
    //     required: [true, 'start_date_time is required']
    // },
    // start_time: {
    //     type: String
    // },
    // league_name: {
    //     type: String,
    // },
    // leagueID: {
    //     type: Number,
    //     required: [true, 'leagueID is required']
    // },
    // region_name: {
    //     type: String,
    //     required: [true, 'region_name is required']
    // },
    // game_status: {
    //     type: Number,
    //     required: [true, 'game_status is required']
    // },
    // coverage: {
    //     type: String,
    // },
    // booked: {
    //     type: Number,
    // },
    // pduration: {
    //     type: String,
    // },
    // pcount: {
    //     type: Number,
    // },
    // pscore: {
    //     type: String,
    // },
    // gender: {
    //     type: String,
    // },
});

const TestModel = mongoose.model('test', TestSchema);

module.exports = TestModel;
