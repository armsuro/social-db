const fs        = require('fs');
const path      = require('path');
const mongoose  = require('mongoose');
const config    = require('../config').mongoose;
const db        = {};

mongoose.connect(config.url);

mongoose.connection.on('error', (error) => {
	console.log("Error while connecting to mongodb", error);
});

const loadDir = (dir, tag) => {
    if (!db[tag]) {
        db[tag] = {};
    }

    return fs
        .readdirSync(dir)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
            const model = require(dir + "/" + file);
            // console.log(model)
            db[tag][model.modelName] = model;
        });
}

Promise.all([
    // loadDir(__dirname + '/models/test', 'test'),
]);

module.exports = db;
